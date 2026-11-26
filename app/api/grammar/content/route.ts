import 'server-only'
import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { grammarChapters, getGrammarChapter } from '@/lib/grammar/chapterRegistry'
export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'
const reply = (data: unknown, status = 200) => NextResponse.json(data, { status, headers: { 'Cache-Control': 'private, no-store' } })
export async function GET(request: Request) {
  try {
    const token = request.headers.get('authorization')?.match(/^Bearer (.+)$/)?.[1]
    if (!token) return reply({error:'Connexion requise.'},401)
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL
    const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
    if (!url || !key) return reply({error:'Configuration manquante.'},500)
    const db = createClient(url,key,{global:{headers:{Authorization:`Bearer ${token}`}},auth:{persistSession:false,autoRefreshToken:false}})
    const {data:auth,error:authError} = await db.auth.getUser(token)
    if (authError || !auth.user) return reply({error:'Session invalide.'},401)
    const {data:profile,error:profileError} = await db.from('profiles').select('role,is_pro,pro_until').eq('id',auth.user.id).maybeSingle()
    if (profileError || profile?.role !== 'student') return reply({error:'Accès étudiant requis.'},403)
    const pro = profile.is_pro === true && Date.parse(profile.pro_until || '') > Date.now()
    const allowed = pro ? grammarChapters : grammarChapters.slice(0,5)
    const id = new URL(request.url).searchParams.get('chapterId')
    if (!id) return reply({chapters:grammarChapters.map(({id,number,level,title,subtitle})=>({id,number,level,title,subtitle,locked:!allowed.some(c=>c.id===id)}))})
    const chapter = getGrammarChapter(id)
    if (!chapter) return reply({error:'Chapitre introuvable.'},404)
    if (!allowed.some(c=>c.id===id)) return reply({error:'Ce chapitre nécessite un abonnement PRO.'},403)
    const mandatory = chapter.exerciseSets.filter(s=>s.category==='meistertraining')
    const attempts: {
      id: string
      exercise_set_id: string
      score: number | null
      correct_answers: number
      total_questions: number
      created_at: string
    }[] = []
    for (let offset = 0; ; offset += 100) {
      const { data, error } = await db
        .from('grammar_exercise_attempts')
        .select('id,exercise_set_id,score,correct_answers,total_questions,created_at')
        .eq('student_id', auth.user.id)
        .eq('chapter_id', id)
        .order('created_at', { ascending: false })
        .order('id', { ascending: false })
        .range(offset, offset + 99)
      if (error) {
        console.error('Erreur historique grammaire:', error.message)
        return reply({ error: 'Impossible de charger l’historique.' }, 500)
      }
      const rows = data || []
      attempts.push(...rows.map(row => ({ ...row, score: row.score == null ? null : Number(row.score) })))
      if (rows.length < 100) break
    }
    const unlocked = mandatory.length>0 && mandatory.every(s=>attempts.some(a=>a.exercise_set_id===s.id && Number(a.score)===100))
    const sets = chapter.exerciseSets.filter(s=>(pro || chapter.exerciseSets.filter(x=>x.category===s.category).slice(0,5).some(x=>x.id===s.id)) && (s.category!=='extra_kick' || unlocked))
    return reply({chapter:{...chapter,exerciseSets:sets},attempts,unlocked,mandatory:mandatory.map(s=>({id:s.id,total:s.questions.filter(q=>q.type!=='writing').length})),lockedSets:chapter.exerciseSets.filter(s=>!pro && !chapter.exerciseSets.filter(x=>x.category===s.category).slice(0,5).some(x=>x.id===s.id)).map(({id,title,category})=>({id,title,category}))})
  } catch { return reply({error:'Erreur serveur.'},500) }
}

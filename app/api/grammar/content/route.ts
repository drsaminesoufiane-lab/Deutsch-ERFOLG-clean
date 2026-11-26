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
    const { data: rateAllowed, error: rateError } = await db.rpc('consume_grammar_rate_limit', { p_endpoint: 'content' })
    if (rateError) return reply({ error: 'Service temporairement indisponible.' }, 503)
    if (rateAllowed !== true) return NextResponse.json({ error: 'Trop de requêtes. Réessayez dans une minute.' }, { status: 429, headers: { 'Retry-After': '60', 'Cache-Control': 'private, no-store' } })
    const {data:profile,error:profileError} = await db.from('profiles').select('role,is_pro,pro_until').eq('id',auth.user.id).maybeSingle()
    if (profileError || !profile || (profile.role !== 'student' && profile.role !== 'admin')) return reply({error:'Accès étudiant requis.'},403)
    // DE_ADMIN_LEARNING_V1
    if (profile.role === 'admin') {
      const { data: adminLearningAccess, error: adminLearningError } = await db.rpc('admin_my_access')
      if (adminLearningError || !adminLearningAccess || typeof adminLearningAccess.owner !== 'boolean' || !Array.isArray(adminLearningAccess.permissions)) {
        return reply({error:'Administration access denied.'},403)
      }
    }
    const pro = profile.role === 'admin' || profile.is_pro === true && Date.parse(profile.pro_until || '') > Date.now()
    const allowed = pro ? grammarChapters : grammarChapters.slice(0,5)
    const id = new URL(request.url).searchParams.get('chapterId')
    if (!id) return reply({chapters:grammarChapters.map(({id,number,level,title,subtitle})=>({id,number,level,title,subtitle,locked:!allowed.some(c=>c.id===id)}))})
    const chapter = getGrammarChapter(id)
    if (!chapter) return reply({error:'Chapitre introuvable.'},404)
    if (!allowed.some(c=>c.id===id)) return reply({error:'Ce chapitre nécessite un abonnement PRO.'},403)
    const mandatory = chapter.exerciseSets.filter(s=>s.category==='meistertraining')
    const query = new URL(request.url).searchParams
    const historySetId = query.get('historySetId')
    const historyBefore = query.get('historyBefore')
    if (historySetId !== null || historyBefore !== null) {
      if (!historySetId || !chapter.exerciseSets.some(s=>s.id===historySetId) || !historyBefore || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(historyBefore)) return reply({error:'Historique invalide.'},400)
      const {data,error} = await db.rpc('get_grammar_history_page', {p_chapter_id:id,p_exercise_set_id:historySetId,p_before_id:historyBefore})
      if (error || !Array.isArray(data)) return reply({error:'Impossible de charger l’historique.'},500)
      return reply({attempts:data})
    }
    const {data:historyData,error:historyError} = await db.rpc('get_grammar_history_summary', {p_chapter_id:id,p_exercise_set_ids:chapter.exerciseSets.map(s=>s.id)})
    if (historyError || !historyData || typeof historyData !== 'object' || Array.isArray(historyData)) return reply({error:'Impossible de charger l’historique.'},500)
    const history = historyData as Record<string,{best:{score:number|null}|null}>
    const unlocked = mandatory.length>0 && mandatory.every(s=>Number(history[s.id]?.best?.score ?? -1)>=80)
    const sets = chapter.exerciseSets.filter(s=>(pro || chapter.exerciseSets.filter(x=>x.category===s.category).slice(0,5).some(x=>x.id===s.id)) && (s.category!=='extra_kick' || unlocked))
    return reply({chapter:{...chapter,exerciseSets:sets},history,unlocked,mandatory:mandatory.map(s=>({id:s.id,total:s.questions.filter(q=>q.type!=='writing').length})),lockedSets:chapter.exerciseSets.filter(s=>!pro && !chapter.exerciseSets.filter(x=>x.category===s.category).slice(0,5).some(x=>x.id===s.id)).map(({id,title,category})=>({id,title,category}))})
  } catch { return reply({error:'Erreur serveur.'},500) }
}

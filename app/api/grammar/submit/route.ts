import 'server-only'

import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { getGrammarChapter, grammarChapters } from '@/lib/grammar/chapterRegistry'
import { answerKeysByExerciseSet } from '@/lib/grammar/server/answerKeys'
import {
  gradeExercise,
  validateSubmittedAnswers,
  type SubmittedAnswers,
} from '@/lib/grammar/server/gradeExercise'
import type { Language } from '@/lib/grammar/types'

export const runtime = 'nodejs'

const allowedLanguages: Language[] = ['fr', 'de', 'ar', 'en']

function jsonError(message: string, status: number) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(request: Request) {
  try {
    const authorization = request.headers.get('authorization')
    const accessToken = authorization?.startsWith('Bearer ')
      ? authorization.slice(7).trim()
      : ''

    if (!accessToken) return jsonError('Authentification requise.', 401)

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY

    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    console.log('[GRAMMAR CONFIG]', {
      url: !!supabaseUrl,
      publishable: !!supabaseKey,
      service: !!serviceKey
    })
    if (!supabaseUrl || !supabaseKey || !serviceKey) {
      return jsonError(
  `Configuration manquante : URL=${!!supabaseUrl}, PUBLIC=${!!supabaseKey}, SERVICE=${!!serviceKey}`,
  500
)
    }

    // Le token de la session étudiante est transmis par le navigateur.
    // La clé publishable n'accorde aucun privilège administratif ; les RLS s'appliquent.
    const supabase = createClient(supabaseUrl, supabaseKey, {
      global: { headers: { Authorization: `Bearer ${accessToken}` } },
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const { data: authData, error: authError } = await supabase.auth.getUser(accessToken)
    const user = authData.user
    if (authError || !user) return jsonError('Session invalide ou expirée.', 401)
    const { data: rateAllowed, error: rateError } = await supabase.rpc('consume_grammar_rate_limit', { p_endpoint: 'submit' })
    if (rateError) return jsonError('Service temporairement indisponible.', 503)
    if (rateAllowed !== true) return NextResponse.json({ error: 'Trop de tentatives. Réessayez dans une minute.' }, { status: 429, headers: { 'Retry-After': '60', 'Cache-Control': 'private, no-store' } })

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role, is_pro, pro_until')
      .eq('id', user.id)
      .maybeSingle()

    if (profileError || !profile || (profile.role !== 'student' && profile.role !== 'admin')) {
      return jsonError('Seuls les comptes étudiants peuvent envoyer une tentative.', 403)
    }
    // DE_ADMIN_LEARNING_V1
    if (profile.role === 'admin') {
      const { data: adminLearningAccess, error: adminLearningError } = await supabase.rpc('admin_my_access')
      if (adminLearningError || !adminLearningAccess || typeof adminLearningAccess.owner !== 'boolean' || !Array.isArray(adminLearningAccess.permissions)) {
        return NextResponse.json({ error: 'Administration access denied.' }, { status: 403 })
      }
    }

    const isPro = profile.role === 'admin' || profile.is_pro === true &&
      typeof profile.pro_until === 'string' &&
      Date.parse(profile.pro_until) > Date.now()

    const maxBodySize = 256 * 1024
    const reader = request.body?.getReader()
    if (!reader) return jsonError('Requête vide.', 400)

    const decoder = new TextDecoder()
    let size = 0
    let raw = ''
    try {
      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        size += value.byteLength
        if (size > maxBodySize) {
          void reader.cancel().catch(() => {})
          return jsonError('Requête trop volumineuse.', 413)
        }
        raw += decoder.decode(value, { stream: true })
      }
      raw += decoder.decode()
    } finally {
      reader.releaseLock()
    }

    let body
    try {
      body = JSON.parse(raw)
    } catch {
      return jsonError('Format JSON invalide.', 400)
    }
    if (!body || typeof body !== 'object' || Array.isArray(body)) {
      return jsonError('Format de requête invalide.', 400)
    }
    const chapterId = typeof body.chapterId === 'string' ? body.chapterId : ''
    const exerciseSetId = typeof body.exerciseSetId === 'string' ? body.exerciseSetId : ''
    const language = allowedLanguages.includes(body.language) ? body.language as Language : 'fr'

    if (!chapterId || !exerciseSetId) {
      return jsonError('Chapitre ou Übung manquant.', 400)
    }

    const chapter = getGrammarChapter(chapterId)
    if (!chapter) return jsonError('Kapitel introuvable.', 404)

    const exerciseSet = chapter.exerciseSets.find((item) => item.id === exerciseSetId)
    if (!exerciseSet) return jsonError('Übung introuvable dans ce Kapitel.', 404)

    const answerKey = answerKeysByExerciseSet[exerciseSetId]
    if (!answerKey) return jsonError('Corrigé serveur indisponible pour cette Übung.', 500)

    if (!validateSubmittedAnswers(exerciseSet, body.answers)) {
      return jsonError('Les réponses sont incomplètes ou leur format est invalide.', 400)
    }

    if (!isPro) {
      const freeChapters = grammarChapters.slice(0, 5)
      const freeSets = chapter.exerciseSets
        .filter((item) => item.category === exerciseSet.category)
        .slice(0, 5)
      if (!freeChapters.some((item) => item.id === chapter.id) ||
          !freeSets.some((item) => item.id === exerciseSet.id)) {
        return jsonError('Cette Übung nécessite un abonnement PRO.', 403)
      }
    }

    // Option C : toutes les Übungen Meistertraining, même celles réservées PRO.
    if (exerciseSet.category === 'extra_kick') {
      const mandatorySets = chapter.exerciseSets.filter((item) => item.category === 'meistertraining')
      const { data: masteryUnlocked, error: masteryError } = await supabase.rpc(
        'has_grammar_mastery',
        {
          p_chapter_id: chapter.id,
          p_exercise_set_ids: mandatorySets.map(item => item.id),
        }
      )
      if (masteryError) return jsonError('Impossible de vérifier le déblocage Extra-Kick.', 500)
      if (masteryUnlocked !== true) return jsonError('Terminez toutes les Übungen Meistertraining avec 80/100 pour débloquer Extra-Kick.', 403)
    }

    const answers = body.answers as SubmittedAnswers
    const grade = gradeExercise(exerciseSet, answerKey, answers, language)

    if (grade.score === null || grade.totalQuestions === 0) {
      return jsonError('Cette Übung ne contient aucune question à correction automatique.', 400)
    }

    // Client privilégié distinct : ne jamais lui transmettre le token étudiant.
    const serverSupabase = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    })

    const { data: attempt, error: insertError } = await serverSupabase
      .from('grammar_exercise_attempts')
      .insert({
        student_id: user.id,
        chapter_id: chapter.id,
        exercise_set_id: exerciseSet.id,
        category: exerciseSet.category,
        score: grade.score,
        total_questions: grade.totalQuestions,
        correct_answers: grade.correctAnswers,
        manual_questions: grade.manualQuestions,
        answers,
      })
      .select('id, score, total_questions, correct_answers, manual_questions, created_at')
      .single()

    if (insertError || !attempt) {
      console.error('Erreur enregistrement tentative grammaire:', insertError?.message)
      return jsonError('Impossible d’enregistrer cette tentative. Vérifiez la migration Supabase.', 500)
    }

    return NextResponse.json({
      attempt,
      corrections: grade.corrections,
      message: 'Tentative enregistrée.',
    })
  } catch (error) {
    console.error('Erreur API grammar submit:', error)
    return jsonError('Une erreur inattendue est survenue.', 500)
  }
}


'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy,
  GraduationCap,
  Loader2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  Lock,
  History,
  Medal
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

type PageLecon = {
  title?: string
  markdown?: string
  printed_page?: number
  figures?: {
    url?: string
    local_file?: string
    description?: string
    caption?: string
  }[]
}

type ContenuLecon = {
  objective?: string
  pages?: PageLecon[]
  rules?: unknown[]
  examples?: unknown[]
  [key: string]: any
}

type Chapitre = {
  id: string
  title: string
  level: string
  description: string | null
  position: number
}

type Lecon = {
  id: string
  title: string
  content: ContenuLecon
  position: number
}

type Ubung = {
  id: string
  chapter_id: string
  lesson_id: string | null
  category: 'meistertraining' | 'extra_kick'
  title: string
  description: string | null
  position: number
}

type Exercice = {
  id: string
  ubung_id: string
  title: string
  exercise_type:
    | 'qcm'
    | 'fill_blank'
    | 'true_false'
    | 'matching'
    | 'reorder'
    | 'writing'
  question: string
  content: {
    label?: string
    prompt?: string
    sentence?: string
    options?: string[]
    pairs?: { id: string; left: string; answer: string }[]
  }
  correct_answer: string | string[]
  explanation: string | null
  explanation_ar: string | null
  position: number
}

type Reponse = string | string[]
type Onglet = 'lecons' | 'meistertraining' | 'extra_kick'

type Tentative = {
  id: string
  student_id: string
  ubung_id: string
  score: number
  total_questions: number
  correct_answers: number
  created_at: string
}

function normaliser(valeur: string) {
  return valeur.trim().replace(/\s+/g, ' ').toLowerCase()
}

function normaliserVraiFaux(valeur: string) {
  const v = normaliser(valeur)
  if (v === 'true' || v === 'vrai') return 'true'
  if (v === 'false' || v === 'faux') return 'false'
  return v
}

function attenduesExercice(exercice: Exercice): string[] {
  return Array.isArray(exercice.correct_answer)
    ? exercice.correct_answer
    : [exercice.correct_answer]
}

function attenduePourAffichage(exercice: Exercice, option: string) {
  return attenduesExercice(exercice).some(answer => {
    if (exercice.exercise_type === 'true_false') {
      return normaliserVraiFaux(answer) === normaliserVraiFaux(option)
    }
    return normaliser(answer) === normaliser(option)
  })
}

function comparerReponses(
  exercice: Exercice,
  reponse: Reponse | undefined
): boolean {
  if (reponse === undefined || exercice.exercise_type === 'writing') {
    return false
  }

  const attendues = attenduesExercice(exercice)

  if (exercice.exercise_type === 'true_false') {
    const valeur = Array.isArray(reponse) ? reponse[0] || '' : reponse
    return attendues.some(
      attendue =>
        normaliserVraiFaux(valeur) === normaliserVraiFaux(attendue)
    )
  }

  if (
    exercice.exercise_type === 'matching' ||
    exercice.exercise_type === 'reorder'
  ) {
    const donnees = Array.isArray(reponse) ? reponse : [reponse]
    if (donnees.length !== attendues.length) return false

    return attendues.every((attendue, index) => {
      const valeur = donnees[index]
      return (
        typeof valeur === 'string' &&
        valeur.trim() !== '' &&
        normaliser(valeur) === normaliser(attendue || '')
      )
    })
  }

  if (exercice.exercise_type === 'qcm' && attendues.length > 1) {
    const donnees = Array.isArray(reponse) ? reponse : [reponse]
    return (
      donnees.length === attendues.length &&
      attendues.every(attendue =>
        donnees.some(valeur => normaliser(valeur) === normaliser(attendue))
      )
    )
  }

  const valeur = Array.isArray(reponse) ? reponse[0] || '' : reponse
  return attendues.some(
    attendue => normaliser(valeur) === normaliser(attendue)
  )
}

function nettoyerMarkdown(markdown: string) {
  return markdown
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

export default function ChapitreGrammairePage() {
  const { t, language, isRTL } = useLanguage()
  const g = t.grammarChapter
  const params = useParams()

  const chapitreId = Array.isArray(params.numero)
    ? params.numero[0]
    : params.numero

  const [chapitre, setChapitre] = useState<Chapitre | null>(null)
  const [lecons, setLecons] = useState<Lecon[]>([])
  const [ubungen, setUbungen] = useState<Ubung[]>([])
  const [exercices, setExercices] = useState<Exercice[]>([])

  const [reponses, setReponses] = useState<Record<string, Reponse>>({})
  const [corriges, setCorriges] = useState<string[]>([])
  const [scoresSession, setScoresSession] = useState<Record<string, number>>({})

  const [tentatives, setTentatives] = useState<Tentative[]>([])
  const [utilisateurId, setUtilisateurId] = useState<string | null>(null)
  const [soumissions, setSoumissions] = useState<string[]>([])
  const [erreursSoumission, setErreursSoumission] = useState<Record<string, string>>({})
  const [historiquesOuverts, setHistoriquesOuverts] = useState<string[]>([])

  const [leconsOuvertes, setLeconsOuvertes] = useState<string[]>([])
  const [ubungenOuvertes, setUbungenOuvertes] = useState<string[]>([])
  const [ongletActif, setOngletActif] = useState<Onglet>('lecons')

  const [chargement, setChargement] = useState(true)
  const [chargementRecords, setChargementRecords] = useState(false)
  const [erreur, setErreur] = useState('')

  // Chargement du chapitre, des leçons et des exercices
  useEffect(() => {
    let actif = true

    async function chargerContenu() {
      setChargement(true)
      setErreur('')
      setChapitre(null)
      setLecons([])
      setUbungen([])
      setExercices([])
      setReponses({})
      setCorriges([])
      setScoresSession({})
      setTentatives([])
      setOngletActif('lecons')

      if (!chapitreId) {
        setErreur('Identifiant du chapitre invalide.')
        setChargement(false)
        return
      }

      const { data: chapitreData, error: chapitreError } = await supabase
        .from('grammar_chapters')
        .select('id, title, level, description, position')
        .eq('id', chapitreId)
        .eq('is_published', true)
        .single()

      if (!actif) return

      if (chapitreError || !chapitreData) {
        setErreur('Chapitre introuvable ou non publié.')
        setChargement(false)
        return
      }

      setChapitre(chapitreData)

      const { data: leconsData, error: leconsError } = await supabase
  .from('grammar_lessons')
  .select('id, chapter_id, title, content, position, is_published')
  .eq('chapter_id', chapitreId)
  .eq('is_published', true)
  .order('position', { ascending: true })

console.log('========== DIAGNOSTIC LEÇONS ==========')
console.log('Chapitre ID utilisé :', chapitreId)
console.log('Leçons récupérées :', leconsData)
console.log('Erreur Supabase :', leconsError)
console.log('=======================================')

if (!actif) return

if (leconsError) {
  console.error(leconsError)
  setErreur('Impossible de charger les leçons.')
  setChargement(false)
  return
}

setLecons((leconsData || []) as Lecon[])

      setLecons((leconsData || []) as Lecon[])

      const { data: ubungenData, error: ubungenError } = await supabase
        .from('grammar_ubungen')
        .select(
          'id, chapter_id, lesson_id, category, title, description, position'
        )
        .eq('chapter_id', chapitreId)
        .eq('is_published', true)
        .order('position', { ascending: true })

      if (!actif) return

      if (ubungenError) {
        console.error(ubungenError)
        setErreur('Impossible de charger les exercices.')
        setChargement(false)
        return
      }

      const ubungenValides = (ubungenData || []).filter(
        (u: any) =>
          u.category === 'meistertraining' ||
          u.category === 'extra_kick'
      ) as Ubung[]

      setUbungen(ubungenValides)

      if (ubungenValides.length > 0) {
        const ids = ubungenValides.map(u => u.id)

        const { data: exercicesData, error: exercicesError } = await supabase
          .from('grammar_exercises')
          .select(`
            id,
            ubung_id,
            title,
            exercise_type,
            question,
            content,
            correct_answer,
            explanation,
            explanation_ar,
            position
          `)
          .in('ubung_id', ids)
          .eq('is_published', true)
          .order('position', { ascending: true })

        if (!actif) return

        if (exercicesError) {
          console.error(exercicesError)
          setErreur('Impossible de charger les questions.')
          setChargement(false)
          return
        }

        setExercices((exercicesData || []) as Exercice[])
      }

      setChargement(false)
    }

    chargerContenu()

    return () => {
      actif = false
    }
  }, [chapitreId])

  // Chargement des records enregistrés dans Supabase
  useEffect(() => {
    let actif = true

    async function chargerTentatives() {
      if (ubungen.length === 0) {
        setTentatives([])
        return
      }

      setChargementRecords(true)

      const { data: authData, error: authError } =
        await supabase.auth.getUser()

      if (!actif) return

      if (authError || !authData.user) {
        setUtilisateurId(null)
        setTentatives([])
        setChargementRecords(false)
        return
      }

      const userId = authData.user.id
      setUtilisateurId(userId)

      const ids = ubungen.map(u => u.id)

      const { data, error: recordsError } = await supabase
        .from('grammar_ubung_attempts')
        .select(
          'id, student_id, ubung_id, score, total_questions, correct_answers, created_at'
        )
        .eq('student_id', userId)
        .in('ubung_id', ids)
        .order('created_at', { ascending: false })

      if (!actif) return

      if (recordsError) {
        console.error('Erreur chargement des records :', recordsError)
      } else {
        setTentatives((data || []) as Tentative[])
      }

      setChargementRecords(false)
    }

    chargerTentatives()

    return () => {
      actif = false
    }
  }, [ubungen])

  const exercicesParUbung = useMemo(() => {
    return ubungen.map(ubung => ({
      ubung,
      exercices: exercices
        .filter(exercice => exercice.ubung_id === ubung.id)
        .sort((a, b) => a.position - b.position)
    }))
  }, [ubungen, exercices])

  const meistertraining = exercicesParUbung.filter(
    item => item.ubung.category === 'meistertraining'
  )

  const extraKick = exercicesParUbung.filter(
    item => item.ubung.category === 'extra_kick'
  )

  function tentativesUbung(ubungId: string) {
    return tentatives
      .filter(t => t.ubung_id === ubungId)
      .sort(
        (a, b) =>
          new Date(b.created_at).getTime() -
          new Date(a.created_at).getTime()
      )
  }

  function meilleurScore(ubungId: string) {
    const liste = tentativesUbung(ubungId)
    if (liste.length === 0) return null
    return Math.max(...liste.map(t => Number(t.score)))
  }

  function nombreTentatives(ubungId: string) {
    return tentativesUbung(ubungId).length
  }

  // Extra-Kick : chaque Übung obligatoire doit avoir un record de 100/100.
  // Une Übung sans question corrigeable automatiquement bloque la validation.
  const extraKickDebloque =
    meistertraining.length > 0 &&
    meistertraining.every(item => {
      const corrigeables = item.exercices.filter(
        ex => ex.exercise_type !== 'writing'
      )

      return (
        corrigeables.length > 0 &&
        meilleurScore(item.ubung.id) === 100
      )
    })

  const meistertrainingValides = meistertraining.filter(
    item => meilleurScore(item.ubung.id) === 100
  ).length

  const meistertrainingRestants = meistertraining.length - meistertrainingValides

  // Progression persistante : une Übung est terminée dès qu'une tentative
  // a été enregistrée, même si la note n'est pas encore de 100/100.
  const totalQuestionsMeister = meistertraining.reduce(
    (total, item) => total + item.exercices.length,
    0
  )

  const questionsTerminees = meistertraining.reduce((total, item) => {
    return total + (
      nombreTentatives(item.ubung.id) > 0
        ? item.exercices.length
        : 0
    )
  }, 0)

  const questionsRestantes = Math.max(
    0,
    totalQuestionsMeister - questionsTerminees
  )

  const progression =
    totalQuestionsMeister > 0
      ? Math.round((questionsTerminees / totalQuestionsMeister) * 100)
      : 0

  function changerReponse(id: string, valeur: Reponse) {
    setReponses(prev => ({ ...prev, [id]: valeur }))
  }

  function nombreRepondu(liste: Exercice[]) {
    return liste.filter(exercice => {
      const reponse = reponses[exercice.id]

      if (
        exercice.exercise_type === 'matching' ||
        exercice.exercise_type === 'reorder'
      ) {
        const attendu =
          exercice.exercise_type === 'matching'
            ? (exercice.content?.pairs || []).length
            : (exercice.content?.options || []).length

        return (
          Array.isArray(reponse) &&
          reponse.length === attendu &&
          Array.from({ length: attendu }, (_, index) => reponse[index]).every(
            valeur =>
              typeof valeur === 'string' && valeur.trim() !== ''
          )
        )
      }

      if (
        exercice.exercise_type === 'qcm' &&
        Array.isArray(exercice.correct_answer) &&
        exercice.correct_answer.length > 1
      ) {
        return Array.isArray(reponse) && reponse.length > 0
      }

      return typeof reponse === 'string' && reponse.trim() !== ''
    }).length
  }

  function scoreUbung(liste: Exercice[]) {
    const corrigeables = liste.filter(
      exercice => exercice.exercise_type !== 'writing'
    )

    if (corrigeables.length === 0) return 0

    const bonnesReponses = corrigeables.filter(exercice =>
      comparerReponses(exercice, reponses[exercice.id])
    ).length

    return Math.round((bonnesReponses / corrigeables.length) * 100)
  }

  async function corrigerUbung(ubungId: string, liste: Exercice[]) {
    if (soumissions.includes(ubungId)) return

    if (!utilisateurId) {
      setErreursSoumission(prev => ({
        ...prev,
        [ubungId]: 'Vous devez être connecté à votre compte étudiant pour enregistrer votre résultat.'
      }))
      return
    }

    const reponsesUbung: Record<string, Reponse> = {}

    for (const exercice of liste) {
      const reponse = reponses[exercice.id]

      if (reponse === undefined) {
        setErreursSoumission(prev => ({
          ...prev,
          [ubungId]: 'Veuillez répondre à toutes les questions avant la correction.'
        }))
        return
      }

      reponsesUbung[exercice.id] = reponse
    }

    const totalCorrigeable = liste.filter(
      ex => ex.exercise_type !== 'writing'
    ).length

    if (totalCorrigeable === 0) {
      setErreursSoumission(prev => ({
        ...prev,
        [ubungId]: 'Cette Übung contient uniquement des rédactions. Elle ne peut pas encore être validée automatiquement.'
      }))
      return
    }

    setSoumissions(prev => [...prev, ubungId])
    setErreursSoumission(prev => ({ ...prev, [ubungId]: '' }))

    const { data, error } = await supabase.rpc(
      'submit_grammar_ubung_attempt',
      {
        p_ubung_id: ubungId,
        p_answers: reponsesUbung
      }
    )

    if (error) {
      console.error('Erreur enregistrement tentative :', error)

      setErreursSoumission(prev => ({
        ...prev,
        [ubungId]: error.message || 'Impossible d’enregistrer votre résultat.'
      }))

      setSoumissions(prev => prev.filter(id => id !== ubungId))
      return
    }

    const scoreServeur = Number(data?.score)

    setScoresSession(prev => ({
      ...prev,
      [ubungId]: Number.isFinite(scoreServeur)
        ? scoreServeur
        : scoreUbung(liste)
    }))

    setCorriges(prev =>
      prev.includes(ubungId) ? prev : [...prev, ubungId]
    )

    // Recharger l'historique depuis Supabase après chaque tentative.
    const { data: nouvellesTentatives, error: historiqueError } =
      await supabase
        .from('grammar_ubung_attempts')
        .select(
          'id, student_id, ubung_id, score, total_questions, correct_answers, created_at'
        )
        .eq('student_id', utilisateurId)
        .eq('ubung_id', ubungId)
        .order('created_at', { ascending: false })

    if (historiqueError) {
      console.error('Erreur actualisation historique :', historiqueError)
    } else {
      setTentatives(prev => [
        ...prev.filter(t => t.ubung_id !== ubungId),
        ...((nouvellesTentatives || []) as Tentative[])
      ])
    }

    setSoumissions(prev => prev.filter(id => id !== ubungId))
  }

  function recommencerUbung(ubungId: string, liste: Exercice[]) {
    setReponses(prev => {
      const nouvelles = { ...prev }
      liste.forEach(exercice => delete nouvelles[exercice.id])
      return nouvelles
    })

    setCorriges(prev => prev.filter(id => id !== ubungId))

    setScoresSession(prev => {
      const nouvelles = { ...prev }
      delete nouvelles[ubungId]
      return nouvelles
    })

    setErreursSoumission(prev => ({
      ...prev,
      [ubungId]: ''
    }))

    // Important : ne jamais supprimer les records Supabase ici.
  }

  function afficherHistorique(ubungId: string) {
    setHistoriquesOuverts(prev =>
      prev.includes(ubungId)
        ? prev.filter(id => id !== ubungId)
        : [...prev, ubungId]
    )
  }

  function afficherUbung(item: {
    ubung: Ubung
    exercices: Exercice[]
  }) {
    const { ubung, exercices: liste } = item
    const corrige = corriges.includes(ubung.id)
    const ouverte = ubungenOuvertes.includes(ubung.id)
    const repondu = nombreRepondu(liste)
    const score = scoresSession[ubung.id] ?? scoreUbung(liste)
    const total = liste.length

    const redactions = liste.filter(
      exercice => exercice.exercise_type === 'writing'
    ).length

    const totalCorrigeable = total - redactions
    const historique = tentativesUbung(ubung.id)
    const meilleur = meilleurScore(ubung.id)
    const historiqueOuvert = historiquesOuverts.includes(ubung.id)
    const enSoumission = soumissions.includes(ubung.id)

    function basculerUbung() {
      setUbungenOuvertes(prev =>
        prev.includes(ubung.id)
          ? prev.filter(id => id !== ubung.id)
          : [...prev, ubung.id]
      )
    }

    const types: Record<string, string> = {
      qcm: 'QCM',
      fill_blank: 'Texte à trous',
      true_false: 'Vrai / Faux',
      matching: 'Association',
      reorder: 'Remise en ordre',
      writing: 'Expression écrite'
    }

    return (
      <section
        key={ubung.id}
        className={`exercise-card ${ouverte ? 'exercise-card-open' : ''}`}
      >
        <button
          type="button"
          onClick={basculerUbung}
          className="exercise-toggle"
          aria-expanded={ouverte}
        >
          <div className="exercise-toggle-number">
            <BookOpen size={21} />
          </div>

          <div className="exercise-toggle-content">
            <span className="eyebrow">
              {ubung.category === 'meistertraining'
                ? 'MEISTERTRAINING'
                : 'EXTRA-KICK'}
            </span>

            <h3 className="exercise-title">{ubung.title}</h3>

            {ubung.description && (
              <p className="exercise-instruction">
                {ubung.description}
              </p>
            )}

            <span className="exercise-question-count">
              {total} question{total > 1 ? 's' : ''}
            </span>
          </div>

          <span className="exercise-toggle-icon">
            {ouverte ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
          </span>
        </button>

        {ouverte && (
          <>
            {total === 0 ? (
              <p className="empty-message">
                Aucun exercice publié dans cette Übung pour le moment.
              </p>
            ) : (
              <div className="exercise-body">

                {/* RECORDS PERMANENTS */}
                <div className="record-panel">
                  <div className="record-heading">
                    <div className="record-heading-icon">
                      <Medal size={19} />
                    </div>
                    <div>
                      <strong>Vos records</strong>
                      <p>Historique sauvegardé automatiquement</p>
                    </div>
                  </div>

                  {chargementRecords ? (
                    <div className="record-loading">
                      <Loader2 size={15} className="animate-spin" />
                      Chargement des records...
                    </div>
                  ) : historique.length === 0 ? (
                    <p className="record-empty">
                      Aucune tentative enregistrée. Votre premier résultat apparaîtra ici.
                    </p>
                  ) : (
                    <>
                      <div className="record-stats">
                        <div className="record-stat">
                          <span>MEILLEUR SCORE</span>
                          <strong className={meilleur === 100 ? 'record-perfect' : ''}>
                            {meilleur} / 100
                          </strong>
                        </div>

                        <div className="record-stat">
                          <span>DERNIER SCORE</span>
                          <strong>
                            {Number(historique[0].score)} / 100
                          </strong>
                        </div>

                        <div className="record-stat">
                          <span>TENTATIVES</span>
                          <strong>{historique.length}</strong>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="history-toggle"
                        onClick={() => afficherHistorique(ubung.id)}
                      >
                        <History size={15} />
                        {historiqueOuvert ? 'Masquer l’historique' : 'Voir tout l’historique'}
                        {historiqueOuvert
                          ? <ChevronUp size={15} />
                          : <ChevronDown size={15} />}
                      </button>

                      {historiqueOuvert && (
                        <div className="history-list">
                          {historique.map((tentative, index) => (
                            <div className="history-row" key={tentative.id}>
                              <span className="history-index">
                                #{historique.length - index}
                              </span>
                              <span className="history-date">
                                {new Date(tentative.created_at).toLocaleString('fr-FR', {
                                  dateStyle: 'short',
                                  timeStyle: 'short'
                                })}
                              </span>
                              <strong className={
                                Number(tentative.score) === 100
                                  ? 'record-perfect'
                                  : ''
                              }>
                                {Number(tentative.score)} / 100
                              </strong>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="questions-grid">
                  {liste.map((exercice, index) => {
                    const reponse = reponses[exercice.id]
                    const correct = comparerReponses(exercice, reponse)
                    const options = exercice.content?.options || []
                    const pairs = exercice.content?.pairs || []

                    const tableauReponses = Array.isArray(reponse)
                      ? reponse
                      : []

                    const attendues = attenduesExercice(exercice)

                    return (
                      <article key={exercice.id} className="question-card">
                        <div className="question-meta">
                          <span className="question-number">
                            QUESTION {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="type-pill">
                            {types[exercice.exercise_type] || 'Format inconnu'}
                          </span>
                        </div>

                        {exercice.content?.label && (
                          <p className="question-label">
                            {exercice.content.label}
                          </p>
                        )}

                        <h4 className="question-title">
                          {exercice.content?.prompt || exercice.question}
                        </h4>

                        {exercice.exercise_type === 'qcm' && (
                          <div className="space-y-2">
                            {options.map(option => {
                              const multi = attendues.length > 1
                              const selected = Array.isArray(reponse)
                                ? reponse.includes(option)
                                : reponse === option

                              const isCorrect =
                                corrige &&
                                attenduePourAffichage(exercice, option)

                              const isWrong = corrige && selected && !isCorrect

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  disabled={corrige}
                                  onClick={() => {
                                    if (!multi) {
                                      changerReponse(exercice.id, option)
                                      return
                                    }

                                    const current = Array.isArray(reponse)
                                      ? reponse
                                      : []

                                    changerReponse(
                                      exercice.id,
                                      current.includes(option)
                                        ? current.filter(value => value !== option)
                                        : [...current, option]
                                    )
                                  }}
                                  className={`answer-option ${
                                    isCorrect
                                      ? 'answer-correct'
                                      : isWrong
                                        ? 'answer-wrong'
                                        : selected
                                          ? 'answer-selected'
                                          : ''
                                  }`}
                                >
                                  <span>{option}</span>
                                  {isCorrect && <CheckCircle size={17} />}
                                  {isWrong && <XCircle size={17} />}
                                </button>
                              )
                            })}
                          </div>
                        )}

                        {exercice.exercise_type === 'true_false' && (
                          <div className="grid grid-cols-2 gap-2">
                            {(options.length ? options : ['Vrai', 'Faux']).map(option => {
                              const selected = Array.isArray(reponse)
                                ? reponse[0] === option
                                : reponse === option

                              const isCorrect =
                                corrige &&
                                attenduePourAffichage(exercice, option)

                              const isWrong = corrige && selected && !correct

                              return (
                                <button
                                  key={option}
                                  type="button"
                                  disabled={corrige}
                                  onClick={() =>
                                    changerReponse(exercice.id, option)
                                  }
                                  className={`answer-option justify-center ${
                                    isCorrect
                                      ? 'answer-correct'
                                      : isWrong
                                        ? 'answer-wrong'
                                        : selected
                                          ? 'answer-selected'
                                          : ''
                                  }`}
                                >
                                  <span>{option}</span>
                                  {isCorrect && <CheckCircle size={17} />}
                                  {isWrong && <XCircle size={17} />}
                                </button>
                              )
                            })}
                          </div>
                        )}

                        {exercice.exercise_type === 'fill_blank' && (
                          <div>
                            {exercice.content?.sentence && (
                              <p className="muted-text mb-3 leading-relaxed">
                                {exercice.content.sentence}
                              </p>
                            )}
                            <input
                              type="text"
                              value={typeof reponse === 'string' ? reponse : ''}
                              disabled={corrige}
                              onChange={e =>
                                changerReponse(exercice.id, e.target.value)
                              }
                              placeholder="Écrivez votre réponse..."
                              className="premium-input w-full"
                            />
                          </div>
                        )}

                        {exercice.exercise_type === 'matching' && (
                          <div className="space-y-3">
                            {pairs.map((pair, pairIndex) => (
                              <div
                                key={pair.id || pairIndex}
                                className="space-y-2"
                              >
                                <div className="match-item">{pair.left}</div>
                                <select
                                  value={tableauReponses[pairIndex] || ''}
                                  disabled={corrige}
                                  onChange={e => {
                                    const nouvelles = [...tableauReponses]
                                    nouvelles[pairIndex] = e.target.value
                                    changerReponse(exercice.id, nouvelles)
                                  }}
                                  className="premium-input w-full"
                                >
                                  <option value="">Choisir une réponse</option>
                                  {pairs.map(option => (
                                    <option key={option.id} value={option.answer}>
                                      {option.answer}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            ))}
                          </div>
                        )}

                        {exercice.exercise_type === 'reorder' && (
                          <div className="space-y-3">
                            <p className="muted-text mb-3">
                              Remettez les éléments dans le bon ordre.
                            </p>
                            {options.map((option, optionIndex) => (
                              <div
                                key={`${exercice.id}-${optionIndex}`}
                                className="flex items-center gap-2"
                              >
                                <span className="number-badge">
                                  {optionIndex + 1}
                                </span>
                                <select
                                  value={tableauReponses[optionIndex] || ''}
                                  disabled={corrige}
                                  onChange={e => {
                                    const nouvelles = [...tableauReponses]
                                    nouvelles[optionIndex] = e.target.value
                                    changerReponse(exercice.id, nouvelles)
                                  }}
                                  className="premium-input flex-1 min-w-0"
                                >
                                  <option value="">Choisir un élément</option>
                                  {options.map(item => (
                                    <option key={item} value={item}>
                                      {item}
                                    </option>
                                  ))}
                                </select>
                              </div>
                            ))}
                          </div>
                        )}

                        {exercice.exercise_type === 'writing' && (
                          <div>
                            <p className="muted-text mb-2">
                              Rédigez votre réponse.
                            </p>
                            <textarea
                              value={typeof reponse === 'string' ? reponse : ''}
                              disabled={corrige}
                              onChange={e =>
                                changerReponse(exercice.id, e.target.value)
                              }
                              rows={5}
                              placeholder="Écrivez votre texte ici..."
                              className="premium-input w-full resize-y"
                            />
                          </div>
                        )}

                        {corrige && (
                          <div
                            className={`feedback-box ${
                              exercice.exercise_type === 'writing'
                                ? 'feedback-neutral'
                                : correct
                                  ? 'feedback-success'
                                  : 'feedback-error'
                            }`}
                          >
                            <div className="feedback-heading">
                              {exercice.exercise_type === 'writing' ? (
                                <BookOpen size={18} />
                              ) : correct ? (
                                <CheckCircle size={18} />
                              ) : (
                                <XCircle size={18} />
                              )}

                              {exercice.exercise_type === 'writing'
                                ? 'Réponse enregistrée : consultez le modèle ci-dessous.'
                                : correct
                                  ? 'Bonne réponse !'
                                  : `Réponse correcte : ${attendues.join(' / ')}`}
                            </div>

                            {exercice.explanation && (
                              <p className="muted-text leading-relaxed">
                                {exercice.explanation}
                              </p>
                            )}

                            {exercice.explanation_ar && (
                              <p
                                dir="rtl"
                                className="muted-text mt-3 text-right leading-8"
                              >
                                {exercice.explanation_ar}
                              </p>
                            )}
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>

                <div className="result-panel">
                  {!corrige ? (
                    <>
                      <div className="flex justify-between text-sm muted-text mb-3">
                        <span className="font-semibold">Votre progression</span>
                        <span className="font-bold text-[#263348]">
                          {repondu} / {total} réponses
                        </span>
                      </div>

                      <div className="progress-track mb-6">
                        <div
                          className="progress-fill"
                          style={{
                            width: `${total > 0 ? (repondu / total) * 100 : 0}%`
                          }}
                        />
                      </div>

                      {erreursSoumission[ubung.id] && (
                        <p className="submission-error">
                          {erreursSoumission[ubung.id]}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => corrigerUbung(ubung.id, liste)}
                        disabled={
                          repondu !== total ||
                          enSoumission ||
                          totalCorrigeable === 0
                        }
                        className="premium-button"
                      >
                        {enSoumission ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <CheckCircle size={18} />
                        )}
                        {enSoumission
                          ? 'Enregistrement...'
                          : 'Corriger cette Übung'}
                      </button>

                      {repondu !== total && (
                        <p className="text-xs muted-text mt-3">
                          Répondez aux {total} questions pour pouvoir corriger.
                        </p>
                      )}

                      {totalCorrigeable === 0 && (
                        <p className="text-xs muted-text mt-3">
                          Cette Übung contient uniquement des rédactions et nécessite une évaluation séparée.
                        </p>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-2">
                      <div className="result-icon">
                        <Trophy size={27} />
                      </div>

                      <span className="eyebrow">TRAINING COMPLETED</span>

                      <h4 className="text-3xl font-bold text-[#263348] mt-3">
                        {score} / 100
                      </h4>

                      <p className="muted-text mt-2 text-sm">
                        {redactions > 0 &&
                          `${redactions} rédaction(s) à évaluer séparément. `}

                        {totalCorrigeable === 0
                          ? 'Cette Übung contient uniquement des rédactions à évaluer séparément.'
                          : score === 100
                            ? 'Excellent ! Toutes les réponses corrigées sont correctes.'
                            : score >= 50
                              ? 'Très bien ! Continuez à vous entraîner.'
                              : 'Continuez vos efforts : relisez la leçon et réessayez.'}
                      </p>

                      {meilleur !== null && (
                        <p className="best-score-note">
                          Votre meilleur record : <strong>{meilleur}/100</strong>
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => recommencerUbung(ubung.id, liste)}
                        className="premium-button mt-6"
                      >
                        <RotateCcw size={18} />
                        Recommencer
                      </button>
                    </div>
                  )}
                </div>
              </div>
            )}
          </>
        )}
      </section>
    )
  }

  if (chargement) {
    return (
      <main className="premium-page min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="animate-spin mx-auto mb-4 text-[#a88b58]" size={32} />
          <p className="muted-text">Chargement du chapitre...</p>
        </div>
      </main>
    )
  }

  if (erreur || !chapitre) {
    return (
      <main className="premium-page min-h-screen px-5 py-12">
        <div className="max-w-4xl mx-auto error-card p-8">
          <p className="text-red-700">
            {erreur || 'Chapitre introuvable.'}
          </p>
          <Link
            href="/espace-etudiant/apprentissage/grammaire"
            className="premium-back mt-6 inline-flex"
          >
            <ArrowLeft size={17} />
            Retour aux chapitres
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="premium-page min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-7 md:px-8 md:py-10">

        <Link
          href="/espace-etudiant/apprentissage/grammaire"
          className="premium-back mb-7 inline-flex"
        >
          <ArrowLeft size={17} />
          Retour aux chapitres
        </Link>

        <header className="chapter-header mb-8">
          <div className="relative z-10">
            <div className="header-brand">
              <GraduationCap size={18} />
              DEUTSCH ERFOLG
              <span className="header-separator">/</span>
              GRAMMATIK
            </div>

            <span className="level-label">
              NIVEAU {chapitre.level}
            </span>

            <h1 className="chapter-title">{chapitre.title}</h1>

            {chapitre.description && (
              <p className="chapter-description">
                {chapitre.description}
              </p>
            )}

            <div className="header-stats">
              <span>
                <BookOpen size={15} />
                {lecons.length} leçon{lecons.length > 1 ? 's' : ''}
              </span>
              <span>
                <Trophy size={15} />
                {ubungen.length} Übung{ubungen.length > 1 ? 's' : ''}
              </span>
            </div>
          </div>
          <div className="header-monogram">DE</div>
        </header>

        {/* PROGRESSION MEISTERTRAINING */}
        {meistertraining.length > 0 && (
          <section className="chapter-progress">
            <div className="progress-topline">
              <div>
                <span className="eyebrow">VOTRE PARCOURS</span>
                <h2>Progression du Meistertraining</h2>
              </div>
              <strong>{progression}%</strong>
            </div>

            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${progression}%` }}
              />
            </div>

            <div className="progress-details">
              <span>
                <CheckCircle size={15} />
                {questionsTerminees} question(s) dans les Übungen déjà tentées
              </span>
              <span>
                {questionsRestantes} question(s) restantes
              </span>
            </div>

            <div className="mastery-line">
              <Trophy size={16} />
              <span>
                {meistertrainingValides} / {meistertraining.length} Übungen validées à 100/100
              </span>
            </div>
          </section>
        )}

        <nav className="chapter-tabs" aria-label="Contenu du chapitre">
          <button
            type="button"
            onClick={() => setOngletActif('lecons')}
            className={`chapter-tab ${ongletActif === 'lecons' ? 'chapter-tab-active' : ''}`}
          >
            <BookOpen size={18} />
            <span>Leçons</span>
            <small>{lecons.length}</small>
          </button>

          <button
            type="button"
            onClick={() => setOngletActif('meistertraining')}
            className={`chapter-tab ${ongletActif === 'meistertraining' ? 'chapter-tab-active' : ''}`}
          >
            <Trophy size={18} />
            <span>Meistertraining</span>
            <small>{meistertraining.length}</small>
          </button>

          <button
            type="button"
            onClick={() => setOngletActif('extra_kick')}
            className={`chapter-tab ${ongletActif === 'extra_kick' ? 'chapter-tab-active' : ''}`}
          >
            {extraKickDebloque ? <Sparkles size={18} /> : <Lock size={17} />}
            <span>Extra-Kick</span>
            <small>{extraKick.length}</small>
          </button>
        </nav>

        {/* LEÇONS */}
        {ongletActif === 'lecons' && (
          <section className="tab-content">
            <div className="content-heading">
              <div>
                <span className="eyebrow">LEARNING MATERIAL</span>
                <h2 className="section-title">Leçons</h2>
                <p className="muted-text mt-1">
                  Consultez le cours à votre rythme.
                </p>
              </div>
              <BookOpen className="heading-icon" size={25} />
            </div>

            {lecons.length === 0 ? (
              <div className="empty-state">
                Aucune leçon publiée pour ce chapitre.
              </div>
            ) : (
              <div className="space-y-3">
                {lecons.map((lecon, index) => {
  const contenu: any = lecon.content || {}

  const pages = Array.isArray(contenu.pages)
    ? contenu.pages
    : []

  const blocs = Array.isArray(contenu.blocks)
    ? contenu.blocks
    : []

  const utiliserNouveauxBlocs = blocs.length > 0

  const ouverte = leconsOuvertes.includes(lecon.id)

  return (
    <article
      key={lecon.id}
      className={`lesson-card ${ouverte ? 'lesson-card-open' : ''}`}
    >
      {/* EN-TÊTE DE LA LEÇON */}
      <button
        type="button"
        onClick={() =>
          setLeconsOuvertes(prev =>
            prev.includes(lecon.id)
              ? prev.filter(id => id !== lecon.id)
              : [...prev, lecon.id]
          )
        }
        className="lesson-toggle"
      >
        <span className="lesson-number">
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="lesson-heading">
          <span className="eyebrow">
            LEÇON {String(index + 1).padStart(2, '0')}
          </span>

          <strong>{lecon.title}</strong>

          {contenu.objective && (
            <small>{contenu.objective}</small>
          )}
        </span>

        <span className="lesson-chevron">
          {ouverte
            ? <ChevronUp size={19} />
            : <ChevronDown size={19} />}
        </span>
      </button>

      {/* CONTENU DE LA LEÇON */}
      {ouverte && (
        <div className="lesson-content">

          {/* OBJECTIF PÉDAGOGIQUE */}
          {contenu.objective && (
            <div className="lesson-objective">
              <div className="lesson-objective-icon">
                <BookOpen size={19} />
              </div>

              <div>
                <span>OBJECTIF DE LA LEÇON</span>
                <p>{contenu.objective}</p>
              </div>
            </div>
          )}

          {/* NOUVEAU FORMAT : BLOCS JSONB */}
          {utiliserNouveauxBlocs ? (
            <div className="lesson-blocks">

              {blocs.map((bloc: any, blocIndex: number) => {

                /* BLOC TEXTE */
                if (bloc.type === 'text') {
                  return (
                    <section
                      key={bloc.id || blocIndex}
                      className="lesson-block lesson-block-text"
                    >
                      {bloc.title && (
                        <h3 className="lesson-block-title">
                          <span className="lesson-block-index">
                            {String(blocIndex + 1).padStart(2, '0')}
                          </span>
                          {bloc.title}
                        </h3>
                      )}

                      {bloc.content && (
                        <div className="premium-prose prose max-w-none">
                          <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            components={{
                              img: ({ src, alt }) => (
                                <img
                                  src={typeof src === 'string' ? src : ''}
                                  alt={alt || ''}
                                  loading="lazy"
                                  className="lesson-image"
                                />
                              ),
                            }}
                          >
                            {nettoyerMarkdown(bloc.content)}
                          </ReactMarkdown>
                        </div>
                      )}
                    </section>
                  )
                }

                /* BLOC TABLEAU */
                if (bloc.type === 'table') {
                  const headers = Array.isArray(bloc.headers)
                    ? bloc.headers
                    : []

                  const rows = Array.isArray(bloc.rows)
                    ? bloc.rows
                    : []

                  const premiereLigne = Array.isArray(rows[0])
                    ? rows[0]
                    : []

                  // Détecte les anciens en-têtes génériques
                  const entetesGeneriques =
                    headers.some((h: any) =>
                      /^colonne\s*\d*/i.test(String(h || '').trim())
                    )

                  // Corrige notamment le tableau Personalpronomen
                  const utiliserPremiereLigne =
                    premiereLigne.length > headers.length ||
                    (entetesGeneriques && premiereLigne.length > 0)

                  const entetes = utiliserPremiereLigne
                    ? premiereLigne
                    : headers

                  const lignes = utiliserPremiereLigne
                    ? rows.slice(1)
                    : rows

                  return (
                    <section
                      key={bloc.id || blocIndex}
                      className="lesson-block lesson-block-table"
                    >
                      {bloc.title && (
                        <h3 className="lesson-block-title">
                          <span className="lesson-block-index">
                            {String(blocIndex + 1).padStart(2, '0')}
                          </span>
                          {bloc.title}
                        </h3>
                      )}

                      <div className="lesson-table-wrapper">
                        <table className="lesson-table">
                          {entetes.length > 0 && (
                            <thead>
                              <tr>
                                {entetes.map((header: any, i: number) => (
                                  <th key={i}>
                                    {header}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                          )}

                          <tbody>
                            {lignes.map((ligne: any, ligneIndex: number) => (
                              <tr key={ligneIndex}>
                                {(
                                  Array.isArray(ligne)
                                    ? ligne
                                    : []
                                ).map((cellule: any, celluleIndex: number) => (
                                  <td key={celluleIndex}>
                                    {cellule}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </section>
                  )
                }

                /* BLOC ENCADRÉ / ATTENTION */
                if (bloc.type === 'callout') {
                  const variant = ['info', 'warning', 'success'].includes(
                    bloc.variant
                  )
                    ? bloc.variant
                    : 'info'

                  const labels: Record<string, string> = {
                    info: 'À RETENIR',
                    warning: 'ATTENTION',
                    success: 'BON À SAVOIR',
                  }

                  return (
                    <section
                      key={bloc.id || blocIndex}
                      className={`lesson-callout lesson-callout-${variant}`}
                    >
                      <div className="lesson-callout-heading">
                        <span className="lesson-callout-symbol">
                          {variant === 'warning'
                            ? '!'
                            : variant === 'success'
                              ? '✓'
                              : 'i'}
                        </span>

                        <div>
                          <span>{labels[variant]}</span>
                          {bloc.title && <h3>{bloc.title}</h3>}
                        </div>
                      </div>

                      {bloc.content && (
                        <div className="premium-prose prose max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {nettoyerMarkdown(bloc.content)}
                          </ReactMarkdown>
                        </div>
                      )}
                    </section>
                  )
                }

                /* BLOC EXEMPLES */
                if (bloc.type === 'examples') {
                  const items = Array.isArray(bloc.items)
                    ? bloc.items
                    : []

                  return (
                    <section
                      key={bloc.id || blocIndex}
                      className="lesson-block lesson-block-examples"
                    >
                      {bloc.title && (
                        <h3 className="lesson-block-title">
                          <span className="lesson-block-index">
                            {String(blocIndex + 1).padStart(2, '0')}
                          </span>
                          {bloc.title}
                        </h3>
                      )}

                      {items.length > 0 && (
                        <div className="lesson-examples-grid">
                          {items.map((item: any, itemIndex: number) => (
                            <div
                              key={itemIndex}
                              className="lesson-example-card"
                            >
                              <span className="lesson-example-number">
                                {String(itemIndex + 1).padStart(2, '0')}
                              </span>

                              <div className="premium-prose prose max-w-none">
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                  {typeof item === 'string'
                                    ? nettoyerMarkdown(item)
                                    : nettoyerMarkdown(
                                        item?.content || item?.text || ''
                                      )}
                                </ReactMarkdown>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </section>
                  )
                }

                /* BLOC IMAGE */
                if (bloc.type === 'image') {
                  const imageUrl = bloc.url || bloc.local_file

                  return (
                    <section
                      key={bloc.id || blocIndex}
                      className="lesson-block lesson-block-image"
                    >
                      {bloc.title && (
                        <h3 className="lesson-block-title">
                          <span className="lesson-block-index">
                            {String(blocIndex + 1).padStart(2, '0')}
                          </span>
                          {bloc.title}
                        </h3>
                      )}

                      {imageUrl && (
                        <figure className="lesson-image-figure">
                          <img
                            src={imageUrl}
                            alt={bloc.caption || bloc.title || 'Illustration de la leçon'}
                            loading="lazy"
                            className="lesson-image"
                          />

                          {bloc.caption && (
                            <figcaption>
                              {bloc.caption}
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </section>
                  )
                }

                // Type inconnu : ne pas afficher de JSON brut
                return null
              })}
            </div>
          ) : (

            /* ANCIEN FORMAT : COMPATIBILITÉ AVEC PAGES */
            <div className="lesson-legacy-content">
              {pages.map((page: any, pageIndex: number) => (
                <section
                  key={pageIndex}
                  className="lesson-block lesson-block-text"
                >
                  {page.title && (
                    <h3 className="lesson-block-title">
                      {page.title}
                    </h3>
                  )}

                  {page.markdown && (
                    <div className="premium-prose prose max-w-none">
                      <ReactMarkdown
                        remarkPlugins={[remarkGfm]}
                        components={{
                          img: ({ src, alt }) => (
                            <img
                              src={typeof src === 'string' ? src : ''}
                              alt={alt || ''}
                              loading="lazy"
                              className="lesson-image"
                            />
                          ),
                        }}
                      >
                        {nettoyerMarkdown(page.markdown)}
                      </ReactMarkdown>
                    </div>
                  )}

                  {page.figures?.map((figure: any, figureIndex: number) => (
                    <figure
                      key={figureIndex}
                      className="lesson-image-figure"
                    >
                      {figure.url && (
                        <img
                          src={figure.url}
                          alt={figure.description || figure.caption || ''}
                          loading="lazy"
                          className="lesson-image"
                        />
                      )}

                      {figure.caption && (
                        <figcaption>{figure.caption}</figcaption>
                      )}
                    </figure>
                  ))}
                </section>
              ))}

              {/* ANCIENNES RÈGLES */}
              {Array.isArray(contenu.rules) && contenu.rules.length > 0 && (
                <section className="lesson-block lesson-block-examples">
                  <h3 className="lesson-block-title">Règles à retenir</h3>

                  <div className="lesson-examples-grid">
                    {contenu.rules.map((rule: any, i: number) => (
                      <div key={i} className="lesson-example-card">
                        {typeof rule === 'string'
                          ? rule
                          : rule?.content || rule?.text || JSON.stringify(rule)}
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* ANCIENS EXEMPLES */}
              {Array.isArray(contenu.examples) && contenu.examples.length > 0 && (
                <section className="lesson-block lesson-block-examples">
                  <h3 className="lesson-block-title">Exemples</h3>

                  <div className="lesson-examples-grid">
                    {contenu.examples.map((example: any, i: number) => (
                      <div key={i} className="lesson-example-card">
                        {typeof example === 'string'
                          ? example
                          : example?.content || example?.text || JSON.stringify(example)}
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          )}
        </div>
      )}
    </article>
  )
})}
              </div>
            )}

            {meistertraining.length > 0 && (
              <div className="next-section">
                <div>
                  <span className="eyebrow">{g.nextLesson}</span>
                  <p>{g.startExercise}</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOngletActif('meistertraining')}
                  className="next-button"
                >
                  {g.startExercise}
                  <ArrowLeft size={16} className="rotate-180" />
                </button>
              </div>
            )}
          </section>
        )}

        {/* MEISTERTRAINING */}
        {ongletActif === 'meistertraining' && (
          <section className="tab-content">
            <div className="content-heading">
              <div>
                <span className="eyebrow">{g.mandatoryPractice}</span>
                <h2 className="section-title">Meistertraining</h2>
                <p className="muted-text mt-1">
                  {g.mandatoryDescription}
                </p>
              </div>
              <Trophy className="heading-icon" size={25} />
            </div>

            {meistertraining.length === 0 ? (
              <div className="empty-state">
                {g.noMeistertraining}
              </div>
            ) : (
              <div className="space-y-5">
                {meistertraining.map(afficherUbung)}
              </div>
            )}
          </section>
        )}

        {/* EXTRA-KICK */}
        {ongletActif === 'extra_kick' && (
          <section className="tab-content">
            <div className="content-heading">
              <div>
                <span className="eyebrow">{g.optionalPractice}</span>
                <h2 className="section-title">Extra-Kick ⚡</h2>
                <p className="muted-text mt-1">
                  {g.optionalDescription}
                </p>
              </div>
              <Sparkles className="heading-icon" size={25} />
            </div>

            {!extraKickDebloque ? (
              <div className="locked-panel">
                <div className="locked-icon">
                  <Lock size={30} />
                </div>
                <span className="eyebrow">{g.lockedZone}</span>
                <h3>{g.continueMeistertraining}</h3>
                <p>
                  {g.extraKickUnlockDescription}
                </p>

                <div className="unlock-progress">
                  <div className="unlock-progress-label">
                    <span>{g.validatedExercises}</span>
                    <strong>
                      {meistertrainingValides} / {meistertraining.length}
                    </strong>
                  </div>
                  <div className="progress-track">
                    <div
                      className="progress-fill"
                      style={{
                        width: `${
                          meistertraining.length > 0
                            ? (meistertrainingValides / meistertraining.length) * 100
                            : 0
                        }%`
                      }}
                    />
                  </div>
                </div>

                <div className="locked-list">
                  {meistertraining
                    .filter(item => meilleurScore(item.ubung.id) !== 100)
                    .map(item => (
                      <div key={item.ubung.id} className="locked-item">
                        <span>{item.ubung.title}</span>
                        <span>
                          {meilleurScore(item.ubung.id) === null
                            ? g.toStart
                            : `Meilleur score : ${meilleurScore(item.ubung.id)}/100`}
                        </span>
                      </div>
                    ))}
                </div>

                <button
                  type="button"
                  className="premium-button mt-6"
                  onClick={() => setOngletActif('meistertraining')}
                >
                  <Trophy size={17} />
                  {g.backToMeistertraining}
                </button>
              </div>
            ) : extraKick.length === 0 ? (
              <div className="empty-state">
                {g.noExtraKick}
              </div>
            ) : (
              <div className="space-y-5">
                <div className="unlocked-message">
                  <CheckCircle size={19} />
                  <span>
                    {g.congratulations} {g.allMeistertrainingCompleted}
                  </span>
                </div>
                {extraKick.map(afficherUbung)}
              </div>
            )}
          </section>
        )}

        <footer className="premium-footer">
          <div className="flex items-center justify-center gap-2">
            <Award size={16} />
            <span>{g.brand}</span>
          </div>
          <p>{g.slogan}</p>
        </footer>
      </div>

      <style jsx global>{`
        .premium-page {
          min-height: 100vh;
          background: #f7f6f2;
          color: #263348;
        }

        .error-card {
          border: 1px solid #e8e4dc;
          border-radius: 12px;
          background: white;
        }

        .premium-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #77766f;
          font-size: 13px;
          transition: color .2s;
        }

        .premium-back:hover { color: #a18450; }

        .muted-text {
          color: #85847e;
          font-size: 13px;
          line-height: 1.7;
        }

        .eyebrow {
          color: #a18450;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
        }

        /* HEADER */

        .chapter-header {
          position: relative;
          overflow: hidden;
          padding: 35px 38px;
          border-radius: 13px;
          background: #263348;
          color: white;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #d4c29f;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .header-separator { color: #758092; }

        .level-label {
          display: inline-block;
          margin-top: 25px;
          color: #d4c29f;
          font-size: 10px;
          letter-spacing: .12em;
        }

        .chapter-title {
          margin-top: 10px;
          color: white;
          font-size: clamp(27px, 4vw, 42px);
          font-weight: 650;
          letter-spacing: -.035em;
          line-height: 1.2;
        }

        .chapter-description {
          max-width: 650px;
          margin-top: 12px;
          color: #c5cad2;
          font-size: 14px;
          line-height: 1.8;
        }

        .header-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 25px;
        }

        .header-stats span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e1e3e7;
          font-size: 12px;
        }

        .header-stats svg { color: #d4c29f; }

        .header-monogram {
          position: absolute;
          top: 50%;
          right: 8%;
          transform: translateY(-50%);
          color: rgba(212,194,159,.09);
          font-family: Georgia, serif;
          font-size: 125px;
          font-weight: 600;
          pointer-events: none;
        }

        /* PROGRESSION */

        .chapter-progress {
          margin-bottom: 25px;
          padding: 21px 23px;
          border: 1px solid #e4dfd4;
          border-radius: 11px;
          background: white;
        }

        .progress-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 15px;
        }

        .progress-topline h2 {
          margin-top: 5px;
          color: #263348;
          font-size: 16px;
          font-weight: 650;
        }

        .progress-topline > strong {
          color: #9b8050;
          font-size: 23px;
        }

        .progress-track {
          height: 7px;
          overflow: hidden;
          border-radius: 20px;
          background: #e7e4dc;
        }

        .progress-fill {
          height: 100%;
          border-radius: 20px;
          background: #a88b58;
          transition: width .3s;
        }

        .progress-details {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 11px;
          color: #85847e;
          font-size: 11px;
        }

        .progress-details span:first-child {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .progress-details svg { color: #719578; }

        .mastery-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding-top: 13px;
          border-top: 1px solid #efede7;
          color: #8e7549;
          font-size: 12px;
          font-weight: 650;
        }

        /* TABS */

        .chapter-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          padding: 5px;
          margin-bottom: 35px;
          border: 1px solid #e8e4dc;
          border-radius: 11px;
          background: #efeee9;
        }

        .chapter-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 51px;
          padding: 10px;
          border-radius: 7px;
          color: #77766f;
          font-size: 13px;
          transition: all .2s;
        }

        .chapter-tab:hover {
          background: rgba(255,255,255,.65);
          color: #263348;
        }

        .chapter-tab-active {
          background: #fff;
          color: #263348;
          font-weight: 650;
          box-shadow: 0 1px 4px rgba(30,40,55,.07);
        }

        .chapter-tab-active svg { color: #a18450; }

        .chapter-tab small {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 21px;
          height: 21px;
          padding: 0 5px;
          border-radius: 20px;
          background: #efede7;
          color: #77766f;
          font-size: 10px;
        }

        .chapter-tab-active small {
          background: #f1ecdf;
          color: #8e7549;
        }

        /* SECTIONS */

        .tab-content {
          min-height: 260px;
          animation: appear .22s ease-out;
        }

        @keyframes appear {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 25px;
        }

        .section-title {
          margin-top: 6px;
          color: #263348;
          font-size: 27px;
          font-weight: 650;
          letter-spacing: -.03em;
        }

        .heading-icon { color: #b49b70; }

        /* LESSONS */

        .lesson-card {
          overflow: hidden;
          border: 1px solid #e8e4dc;
          border-radius: 11px;
          background: white;
          transition: border-color .2s;
        }

        .lesson-card-open { border-color: #c9b994; }

        .lesson-toggle {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 16px;
          padding: 19px;
          text-align: left;
        }

        .lesson-number {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #f3f0e9;
          color: #9b8050;
          font-family: Georgia, serif;
          font-size: 16px;
        }

        .lesson-heading {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .lesson-heading strong {
          color: #263348;
          font-size: 15px;
          font-weight: 600;
        }

        .lesson-heading small {
          color: #88847b;
          font-size: 12px;
          line-height: 1.5;
        }

        .lesson-chevron {
          display: flex;
          color: #9b8050;
        }

        .lesson-content {
          padding: 25px;
          border-top: 1px solid #eeece6;
          background: #fff;
        }
.lesson-image {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 600px;
  height: auto;
  margin: 24px auto;
  border: 1px solid #e8e4dc;
  border-radius: 12px;
  object-fit: contain;
  background: #fff;
}

.lesson-content figure img {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  object-fit: contain;
}

.lesson-content figure {
  text-align: center;
}
        .premium-prose {
          color: #505967;
          font-size: 14px;
          line-height: 1.9;
        }

        .premium-prose :global(h1),
        .premium-prose :global(h2),
        .premium-prose :global(h3),
        .premium-prose :global(h4) {
          margin-top: 1.5em;
          margin-bottom: .65em;
          color: #263348;
          font-weight: 650;
        }

        .premium-prose :global(h2) { font-size: 1.4rem; }
        .premium-prose :global(h3) { font-size: 1.15rem; }
        .premium-prose :global(p) { margin: 12px 0; }

        .premium-prose :global(strong) {
          color: #263348;
          font-weight: 700;
        }

        .premium-prose :global(a) {
          color: #9b8050;
          text-decoration: underline;
        }

        .premium-prose :global(blockquote) {
          margin: 18px 0;
          padding: 12px 17px;
          border-left: 3px solid #b49b70;
          background: #f7f5ef;
        }

        .premium-prose :global(table) {
          display: block;
          width: 100%;
          overflow-x: auto;
          margin: 20px 0;
          border-collapse: collapse;
        }

        .premium-prose :global(th) {
          padding: 11px;
          background: #263348;
          color: white;
          text-align: left;
        }

        .premium-prose :global(td) {
          padding: 10px 11px;
          border: 1px solid #e9e6df;
        }

        .premium-prose :global(tr:nth-child(even)) {
          background: #f8f7f3;
        }

        .lesson-extra {
          padding: 17px;
          border: 1px solid #e9e6df;
          border-radius: 8px;
          background: #f8f7f3;
        }

        .lesson-extra h4 {
          margin-bottom: 10px;
          color: #263348;
          font-size: 15px;
          font-weight: 600;
        }

        .lesson-extra pre {
          overflow-x: auto;
          color: #62615d;
          font-family: inherit;
          font-size: 12px;
          white-space: pre-wrap;
        }

        .next-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 27px;
          padding: 20px;
          border: 1px solid #e8e4dc;
          border-radius: 10px;
          background: white;
        }

        .next-section p {
          margin-top: 5px;
          color: #263348;
          font-size: 13px;
          font-weight: 500;
        }

        .next-button,
        .premium-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 44px;
          padding: 11px 18px;
          border-radius: 7px;
          background: #263348;
          color: white;
          font-size: 12px;
          font-weight: 600;
          transition: background .2s;
        }

        .next-button:hover,
        .premium-button:hover:not(:disabled) {
          background: #3b4b63;
        }

        /* EXERCISES */

        .exercise-card {
          overflow: hidden;
          padding: 0;
          border: 1px solid #ded8ca;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 4px 14px rgba(35,45,60,.045);
        }

        .exercise-card-open {
          border-color: #b9a47b;
          box-shadow: 0 5px 18px rgba(35,45,60,.07);
        }

        .exercise-toggle {
          display: flex;
          align-items: center;
          gap: 17px;
          width: 100%;
          padding: 22px;
          background: #fff;
          text-align: left;
          transition: background .2s;
        }

        .exercise-toggle:hover { background: #faf8f2; }

        .exercise-toggle-number {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border: 1px solid #e6ddc9;
          border-radius: 11px;
          background: #f5f1e8;
          color: #9b8050;
        }

        .exercise-toggle-content {
          flex: 1;
          min-width: 0;
        }

        .exercise-title {
          margin-top: 5px;
          color: #263348;
          font-size: 19px;
          font-weight: 700;
        }

        .exercise-instruction {
          margin-top: 7px;
          color: #73777f;
          font-size: 13px;
          line-height: 1.65;
        }

        .exercise-question-count {
          display: inline-block;
          margin-top: 9px;
          padding: 4px 9px;
          border: 1px solid #e8e1d3;
          border-radius: 20px;
          background: #f7f5ef;
          color: #8e7549;
          font-size: 10px;
          font-weight: 600;
        }

        .exercise-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border: 1px solid #e8e1d3;
          border-radius: 50%;
          background: #f8f6f0;
          color: #9b8050;
        }

        .exercise-body {
          padding: 22px;
          border-top: 1px solid #e9e4d9;
          background: #f7f6f2;
        }

        /* RECORDS */

        .record-panel {
          margin-bottom: 20px;
          padding: 17px;
          border: 1px solid #e1dacb;
          border-radius: 11px;
          background: #fff;
        }

        .record-heading {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 15px;
        }

        .record-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 37px;
          height: 37px;
          border-radius: 9px;
          background: #f3efe5;
          color: #9b8050;
        }

        .record-heading strong {
          color: #263348;
          font-size: 13px;
        }

        .record-heading p {
          margin-top: 3px;
          color: #929087;
          font-size: 11px;
        }

        .record-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .record-stat {
          padding: 12px;
          border: 1px solid #eeeae1;
          border-radius: 8px;
          background: #faf9f6;
        }

        .record-stat span {
          display: block;
          color: #99958c;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .08em;
        }

        .record-stat strong {
          display: block;
          margin-top: 6px;
          color: #263348;
          font-size: 18px;
          font-weight: 700;
        }

        .record-perfect { color: #43805a !important; }

        .record-empty,
        .record-loading {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border-radius: 7px;
          background: #f8f7f3;
          color: #85847e;
          font-size: 12px;
        }

        .history-toggle {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
          color: #8e7549;
          font-size: 11px;
          font-weight: 650;
        }

        .history-list {
          margin-top: 12px;
          border-top: 1px solid #eeeae1;
        }

        .history-row {
          display: grid;
          grid-template-columns: 35px 1fr auto;
          align-items: center;
          gap: 10px;
          padding: 10px 3px;
          border-bottom: 1px solid #f0eee8;
          font-size: 11px;
        }

        .history-index { color: #a18450; font-weight: 700; }
        .history-date { color: #85847e; }
        .history-row strong { color: #263348; }

        /* QUESTIONS */

        .questions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
        }

        .question-card {
          min-width: 0;
          padding: 17px;
          border: 1px solid #dcdfe4;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 7px rgba(35,45,60,.035);
        }

        .question-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
        }

        .question-number {
          color: #9b8050;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .type-pill {
          padding: 5px 9px;
          border-radius: 5px;
          background: #eeeae1;
          color: #80683f;
          font-size: 10px;
          font-weight: 600;
        }

        .question-label {
          margin-bottom: 7px;
          color: #9b8050;
          font-size: 12px;
          font-weight: 600;
        }

        .question-title {
          margin-bottom: 16px;
          color: #263348;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.65;
        }

        /* ANSWERS */

        .answer-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          min-height: 43px;
          padding: 10px 11px;
          border: 1px solid #d9dee7;
          border-radius: 8px;
          background: #f6f8fb;
          color: #39465a;
          font-size: 12px;
          text-align: left;
          transition: all .18s ease;
        }

        .answer-option:hover:not(:disabled) {
          border-color: #b49b70;
          background: #fbf9f4;
          box-shadow: 0 2px 7px rgba(35,45,60,.04);
        }

        .answer-option:disabled { cursor: default; }

        .answer-selected {
          border-color: #b49b70;
          background: #f5f0e5;
          color: #80683f;
          box-shadow: 0 0 0 2px rgba(180,155,112,.09);
        }

        .answer-correct {
          border-color: #a4c5a9;
          background: #eff6ef;
          color: #36734b;
        }

        .answer-wrong {
          border-color: #d8aaa4;
          background: #fbf0ee;
          color: #a34840;
        }

        /* INPUTS */

        .premium-input {
          width: 100%;
          min-width: 0;
          min-height: 45px;
          padding: 10px 13px;
          border: 1px solid #e2ded5;
          border-radius: 8px;
          outline: none;
          background: white;
          color: #263348;
          font-size: 13px;
          transition: border-color .2s, box-shadow .2s;
        }

        .premium-input:focus {
          border-color: #b49b70;
          box-shadow: 0 0 0 3px rgba(180,155,112,.11);
        }

        .premium-input:disabled { background: #f1f0ec; }

        .match-item {
          padding: 12px 14px;
          border: 1px solid #e7e3da;
          border-radius: 8px;
          background: white;
          color: #34415a;
          font-size: 13px;
        }

        .number-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 31px;
          height: 31px;
          border-radius: 7px;
          background: #f1eee7;
          color: #9b8050;
          font-size: 11px;
          font-weight: 700;
        }

        /* FEEDBACK */

        .feedback-box {
          margin-top: 18px;
          padding: 16px;
          border: 1px solid #dfe3e7;
          border-radius: 9px;
          background: #f5f6f7;
        }

        .feedback-neutral {
          border-color: #d9dfe8;
          background: #f1f3f6;
        }

        .feedback-success {
          border-color: #c9dfcf;
          background: #f0f6f0;
        }

        .feedback-error {
          border-color: #e8ceca;
          background: #fbf1ef;
        }

        .feedback-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
          color: #344761;
          font-size: 13px;
          font-weight: 650;
        }

        .feedback-success .feedback-heading { color: #36734b; }
        .feedback-error .feedback-heading { color: #a34840; }

        /* RESULTATS */

        .result-panel {
          margin-top: 22px;
          padding: 20px;
          border: 1px solid #ded8ca;
          border-radius: 10px;
          background: #fff;
        }

        .premium-button:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .result-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: #f0eadc;
          color: #9b8050;
        }

        .best-score-note {
          margin-top: 13px;
          color: #85847e;
          font-size: 12px;
        }

        .best-score-note strong { color: #43805a; }

        .submission-error {
          margin-bottom: 13px;
          padding: 11px 13px;
          border: 1px solid #e8ceca;
          border-radius: 7px;
          background: #fbf1ef;
          color: #a34840;
          font-size: 12px;
          line-height: 1.6;
        }

        /* EXTRA KICK VERROUILLÉ */

        .locked-panel {
          padding: 35px 25px;
          border: 1px solid #e3ddcf;
          border-radius: 13px;
          background: white;
          text-align: center;
        }

        .locked-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #f3efe5;
          color: #a18450;
        }

        .locked-panel h3 {
          margin-top: 9px;
          color: #263348;
          font-size: 22px;
          font-weight: 700;
        }

        .locked-panel > p {
          max-width: 550px;
          margin: 10px auto 22px;
          color: #85847e;
          font-size: 13px;
          line-height: 1.8;
        }

        .unlock-progress {
          max-width: 520px;
          margin: 0 auto;
          padding: 16px;
          border: 1px solid #eeeae1;
          border-radius: 9px;
          background: #faf9f6;
          text-align: left;
        }

        .unlock-progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #77766f;
          font-size: 12px;
        }

        .unlock-progress-label strong { color: #8e7549; }

        .locked-list {
          max-width: 520px;
          margin: 15px auto 0;
          text-align: left;
        }

        .locked-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 4px;
          border-bottom: 1px solid #efede7;
          color: #4e596a;
          font-size: 12px;
        }

        .locked-item span:last-child {
          color: #a18450;
          text-align: right;
        }

        .unlocked-message {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding: 15px 17px;
          border: 1px solid #c9dfcf;
          border-radius: 9px;
          background: #f0f6f0;
          color: #36734b;
          font-size: 13px;
          font-weight: 600;
        }

        .empty-state,
        .empty-message {
          padding: 22px;
          border: 1px solid #e8e4dc;
          border-radius: 9px;
          background: white;
          color: #85847e;
          font-size: 13px;
        }

        /* FOOTER */

        .premium-footer {
          margin-top: 55px;
          padding-top: 23px;
          border-top: 1px solid #e7e4dc;
          text-align: center;
          color: #9b8050;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .premium-footer p {
          margin-top: 7px;
          color: #99958c;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: .03em;
        }

        @media (max-width: 1050px) {
          .questions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .chapter-header { padding: 25px 20px; }

          .header-monogram {
            right: -15px;
            font-size: 90px;
          }

          .chapter-tabs {
            gap: 3px;
            padding: 4px;
          }

          .chapter-tab {
            flex-direction: column;
            gap: 5px;
            min-height: 66px;
            padding: 8px 3px;
            font-size: 10px;
            text-align: center;
          }

          .chapter-tab svg {
            width: 17px;
            height: 17px;
          }

          .chapter-tab small {
            min-width: 17px;
            height: 17px;
            font-size: 9px;
          }

          .section-title { font-size: 23px; }

          .lesson-toggle {
            gap: 11px;
            padding: 16px 13px;
          }

          .lesson-number {
            width: 36px;
            height: 36px;
            font-size: 15px;
          }

          .lesson-heading strong { font-size: 13px; }
          .lesson-content { padding: 17px; }

          .questions-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .exercise-toggle {
            gap: 11px;
            padding: 16px 13px;
          }

          .exercise-toggle-number {
            width: 39px;
            height: 39px;
          }

          .exercise-title { font-size: 16px; }
          .exercise-instruction { font-size: 12px; }

          .exercise-toggle-icon {
            width: 31px;
            height: 31px;
          }

          .exercise-body { padding: 13px; }
          .question-card { padding: 14px; }

          .answer-option {
            min-height: 47px;
            padding: 11px;
          }

          .next-section {
            align-items: flex-start;
            flex-direction: column;
          }

          .next-button { width: 100%; }

          .record-stats { gap: 6px; }

          .record-stat { padding: 9px 7px; }

          .record-stat span { font-size: 8px; }
          .record-stat strong { font-size: 15px; }

          .progress-details {
            flex-direction: column;
          }

          .locked-panel { padding: 27px 15px; }

          .locked-item {
            flex-direction: column;
            gap: 4px;
          }

          .locked-item span:last-child { text-align: left; }
        }

/* =========================================
   LESSON CONTENT — PREMIUM DESIGN
========================================= */

.lesson-content {
  padding: 30px;
  border-top: 1px solid #eeece6;
  background: #fff;
}

.lesson-blocks,
.lesson-legacy-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.lesson-block {
  min-width: 0;
  padding: 25px;
  border: 1px solid #eeece6;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 3px 12px rgba(38, 51, 72, 0.025);
}

.lesson-block-title {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 20px;
  color: #263348;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5;
}

.lesson-block-index {
  display: inline-flex;
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f5f1e8;
  color: #a18450;
  font-size: 11px;
  font-weight: 800;
}

.lesson-objective {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 28px;
  padding: 20px 22px;
  border: 1px solid #e9e2d3;
  border-radius: 14px;
  background: #faf8f3;
}

.lesson-objective-icon {
  display: flex;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #eee6d6;
  color: #967744;
}

.lesson-objective span {
  display: block;
  margin-bottom: 5px;
  color: #a18450;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lesson-objective p {
  margin: 0;
  color: #465064;
  font-size: 14px;
  line-height: 1.75;
}

/* CALLOUTS */

.lesson-callout {
  padding: 23px 25px;
  border: 1px solid;
  border-radius: 14px;
}

.lesson-callout-heading {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 14px;
}

.lesson-callout-symbol {
  display: flex;
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 17px;
  font-weight: 800;
}

.lesson-callout-heading span:not(.lesson-callout-symbol) {
  display: block;
  margin-bottom: 3px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .13em;
  opacity: .75;
}

.lesson-callout-heading h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 750;
}

.lesson-callout-info {
  border-color: #dce5ee;
  background: #f5f8fb;
  color: #344c68;
}

.lesson-callout-info .lesson-callout-symbol {
  background: #e2ebf4;
  color: #476783;
}

.lesson-callout-warning {
  border-color: #eadfc8;
  background: #fbf8f0;
  color: #735c32;
}

.lesson-callout-warning .lesson-callout-symbol {
  background: #f1e5ca;
  color: #98733b;
}

.lesson-callout-success {
  border-color: #dce8df;
  background: #f4f8f4;
  color: #41644c;
}

.lesson-callout-success .lesson-callout-symbol {
  background: #e1eee3;
  color: #4e795a;
}

/* TABLEAUX */

.lesson-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid #e9e7e1;
  border-radius: 12px;
}

.lesson-table {
  width: 100%;
  min-width: 440px;
  border-collapse: collapse;
  text-align: left;
}

.lesson-table thead {
  background: #f5f2eb;
}

.lesson-table th {
  padding: 15px 18px;
  color: #514b40;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .025em;
}

.lesson-table td {
  padding: 14px 18px;
  border-top: 1px solid #eeece6;
  color: #4d5665;
  font-size: 14px;
  line-height: 1.6;
}

.lesson-table tbody tr:nth-child(even) {
  background: #fbfaf8;
}

.lesson-table tbody tr:hover {
  background: #f7f5ef;
}

/* EXEMPLES */

.lesson-examples-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.lesson-example-card {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  min-width: 0;
  padding: 17px 18px;
  border: 1px solid #eeece6;
  border-radius: 12px;
  background: #fcfbf9;
  color: #465064;
  font-size: 14px;
  line-height: 1.75;
  transition: border-color .2s, transform .2s;
}

.lesson-example-card:hover {
  border-color: #d8c8a9;
  transform: translateY(-2px);
}

.lesson-example-number {
  display: flex;
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f0eadf;
  color: #987b4a;
  font-size: 10px;
  font-weight: 800;
}

.lesson-example-card .prose {
  min-width: 0;
}

.lesson-example-card .prose p:first-child {
  margin-top: 0;
}

.lesson-example-card .prose p:last-child {
  margin-bottom: 0;
}

/* IMAGES */

.lesson-image-figure {
  margin: 0;
  padding: 12px;
  border: 1px solid #eeece6;
  border-radius: 14px;
  background: #fcfbf9;
}

.lesson-image {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: 0 auto;
  border-radius: 9px;
  object-fit: contain;
}

.lesson-image-figure figcaption {
  margin-top: 12px;
  color: #88847b;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .lesson-content {
    padding: 17px;
  }

  .lesson-block {
    padding: 18px;
    border-radius: 12px;
  }

  .lesson-block-title {
    font-size: 17px;
    gap: 10px;
  }

  .lesson-objective {
    padding: 16px;
  }

  .lesson-callout {
    padding: 18px;
  }

  .lesson-examples-grid {
    grid-template-columns: 1fr;
  }

  .lesson-table th,
  .lesson-table td {
    padding: 12px;
    font-size: 12px;
  }
}

      `}</style>
    </main>
  )
}

'use client'

import { celebratePerfectScore } from '@/components/student/ExerciseCelebration'

import { useMemo, useState } from 'react'
import { ArrowDown, ArrowUp, CheckCircle2, CircleAlert, Loader2, RotateCcw } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'
import type {
  ExerciseSetDefinition,
  PublicQuestion,
} from '@/lib/grammar/types'

type AnswerValue = string | string[]
type Answers = Record<string, AnswerValue>

type Correction = {
  questionId: string
  correct: boolean | null
  manualReview: boolean
  correctAnswer?: string | string[]
  explanation?: string
  explanations?: Record<'fr' | 'de' | 'ar' | 'en', string>
}

type SubmitResult = {
  attempt: {
    id: string
    score: number | null
    total_questions: number
    correct_answers: number
    manual_questions: number
    created_at: string
  }
  corrections: Correction[]
}

const copy = {
  fr: { submit: 'Valider mes réponses', sending: 'Correction en cours…', retry: 'Recommencer', result: 'Résultat', correct: 'Bonne réponse', incorrect: 'À revoir', manual: 'À corriger manuellement', noScore: 'Cette Übung contient uniquement des questions de rédaction.', score: 'Score', error: 'Une erreur est survenue.', login: 'Reconnectez-vous pour envoyer vos réponses.', saved: 'Votre tentative a été enregistrée.' },
  de: { submit: 'Antworten überprüfen', sending: 'Korrektur läuft…', retry: 'Wiederholen', result: 'Ergebnis', correct: 'Richtig', incorrect: 'Noch einmal üben', manual: 'Manuelle Korrektur erforderlich', noScore: 'Diese Übung enthält nur Schreibaufgaben.', score: 'Punktzahl', error: 'Ein Fehler ist aufgetreten.', login: 'Bitte melden Sie sich erneut an.', saved: 'Ihr Versuch wurde gespeichert.' },
  ar: { submit: 'تحقق من إجاباتي', sending: 'جارٍ التصحيح…', retry: 'إعادة المحاولة', result: 'النتيجة', correct: 'إجابة صحيحة', incorrect: 'تحتاج إلى مراجعة', manual: 'تحتاج إلى تصحيح يدوي', noScore: 'هذا التمرين يحتوي فقط على أسئلة كتابية.', score: 'النقطة', error: 'حدث خطأ.', login: 'يرجى تسجيل الدخول من جديد.', saved: 'تم حفظ محاولتك.' },
  en: { submit: 'Check my answers', sending: 'Checking…', retry: 'Try again', result: 'Result', correct: 'Correct', incorrect: 'Review this', manual: 'Manual review required', noScore: 'This exercise contains writing questions only.', score: 'Score', error: 'Something went wrong.', login: 'Please sign in again to submit your answers.', saved: 'Your attempt has been saved.' },
} as const

const validationCopy = {
  fr: { missing: 'Complétez cette question.', words: 'mots', minimum: 'minimum', summary: 'Questions à compléter' },
  de: { missing: 'Bitte beantworten Sie diese Frage vollständig.', words: 'Wörter', minimum: 'mindestens', summary: 'Bitte vervollständigen Sie die Fragen' },
  ar: { missing: 'يرجى إكمال الإجابة عن هذا السؤال.', words: 'كلمات', minimum: 'الحد الأدنى', summary: 'الأسئلة التي يجب إكمالها' },
  en: { missing: 'Please complete this question.', words: 'words', minimum: 'minimum', summary: 'Questions to complete' },
} as const

function wordCount(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0
}

function incomplete(question: PublicQuestion, value: AnswerValue | undefined) {
  if (question.type === 'writing') return typeof value !== 'string' || !value.trim() || value.length > 10000 || wordCount(value) < (question.minimumWords || 0)
  if (Array.isArray(value)) {
    const expected = question.type === 'matching' ? question.items.length : question.type === 'reorder' ? question.tokens.length : question.type === 'fill_blank' ? question.blanks : undefined
    return !value.length || value.length > 100 || (expected !== undefined && value.length !== expected) || value.some(item => !item.trim() || item.length > 1000)
  }
  return typeof value !== 'string' || !value.trim() || value.length > 10000
}

function initialAnswers(exerciseSet: ExerciseSetDefinition): Answers {
  const result: Answers = {}
  for (const question of exerciseSet.questions) {
    if (question.type === 'matching') result[question.id] = question.items.map(() => '')
    else if (question.type === 'reorder') result[question.id] = [...question.tokens]
    else if (question.type === 'qcm' && question.selection === 'multiple') result[question.id] = []
    else if (question.type === 'fill_blank' && question.blanks > 1) result[question.id] = Array(question.blanks).fill('')
    else result[question.id] = ''
  }
  return result
}

function QuestionContent({
  question,
  value,
  disabled,
  onChange,
}: {
  question: PublicQuestion
  value: AnswerValue
  disabled: boolean
  onChange: (value: AnswerValue) => void
}) {
  const { language } = useLanguage()

  if (question.type === 'qcm') {
    const selected = Array.isArray(value) ? value : [value]
    return (
      <div className="mt-4 grid gap-2">
        {question.options.map((option) => {
          const active = selected.includes(option)
          return (
            <label key={option} className={`flex cursor-pointer items-center gap-3 rounded-xl border p-3 transition ${active ? 'border-blue-500 bg-blue-50' : 'border-slate-200 bg-white hover:border-slate-300'} ${disabled ? 'cursor-default opacity-80' : ''}`}>
              <input
                type={question.selection === 'multiple' ? 'checkbox' : 'radio'}
                name={question.id}
                value={option}
                checked={active}
                disabled={disabled}
                onChange={() => {
                  if (question.selection === 'multiple') {
                    const next = active ? selected.filter((item) => item !== option) : [...selected, option]
                    onChange(next)
                  } else {
                    onChange(option)
                  }
                }}
                className="h-4 w-4 accent-blue-600"
              />
              <span className="font-medium text-slate-800">{option}</span>
            </label>
          )
        })}
      </div>
    )
  }

  if (question.type === 'fill_blank') {
    const values = Array.isArray(value) ? value : [value]
    const segments = question.sentence.split('___')
    return (
      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap items-center gap-2 text-lg leading-9 text-slate-800" dir="ltr">
          {segments.map((segment, index) => (
            <span key={`${question.id}-segment-${index}`} className="contents">
              <span>{segment}</span>
              {index < segments.length - 1 && (
                <input
                  aria-label={`Réponse ${index + 1}`}
                  value={values[index] ?? ''}
                  disabled={disabled}
                  onChange={(event) => {
                    if (question.blanks > 1) {
                      const next = [...values]
                      next[index] = event.target.value
                      onChange(next)
                    } else onChange(event.target.value)
                  }}
                  className="studio-blank"
                />
              )}
            </span>
          ))}
        </div>
      </div>
    )
  }

  if (question.type === 'true_false') {
    const current = Array.isArray(value) ? value[0] : value
    const options = [
      { value: 'true', label: language === 'fr' ? 'Vrai' : language === 'de' ? 'Wahr' : language === 'ar' ? 'صحيح' : 'True' },
      { value: 'false', label: language === 'fr' ? 'Faux' : language === 'de' ? 'Falsch' : language === 'ar' ? 'خطأ' : 'False' },
    ]
    return (
      <div className="mt-4 flex flex-wrap gap-3">
        {options.map((option) => (
          <button key={option.value} type="button" disabled={disabled} onClick={() => onChange(option.value)} className={`rounded-xl border px-6 py-3 font-semibold transition ${current === option.value ? 'border-blue-600 bg-blue-50 text-blue-700' : 'border-slate-200 bg-white text-slate-700 hover:border-slate-400'}`}>
            {option.label}
          </button>
        ))}
      </div>
    )
  }

  if (question.type === 'matching') {
    const values = Array.isArray(value) ? value : []
    return (
      <div className="mt-4 space-y-3">
        {question.items.map((item, index) => (
          <div key={item.id} className="grid grid-cols-1 items-center gap-2 rounded-xl border border-slate-200 p-3 sm:grid-cols-2">
            <span className="font-medium text-slate-800" dir="ltr">{item.label}</span>
            <select
              value={values[index] ?? ''}
              disabled={disabled}
              onChange={(event) => {
                const next = [...values]
                next[index] = event.target.value
                onChange(next)
              }}
              className="w-full rounded-lg border border-slate-300 bg-white p-2 text-slate-800 outline-none focus:border-blue-500"
            >
              <option value="">—</option>
              {question.options.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>
        ))}
      </div>
    )
  }

  if (question.type === 'reorder') {
    const tokens = Array.isArray(value) ? value : []
    const move = (index: number, offset: number) => {
      const nextIndex = index + offset
      if (nextIndex < 0 || nextIndex >= tokens.length) return
      const next = [...tokens]
      ;[next[index], next[nextIndex]] = [next[nextIndex], next[index]]
      onChange(next)
    }
    return (
      <div className="mt-4 space-y-2">
        {tokens.map((token, index) => (
          <div key={`${question.id}-${index}-${token}`} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3" dir="ltr">
            <span className="flex-1 font-medium text-slate-800">{token}</span>
            <button type="button" aria-label="Monter" disabled={disabled || index === 0} onClick={() => move(index, -1)} className="rounded-lg border p-2 text-slate-600 disabled:opacity-30"><ArrowUp size={16}/></button>
            <button type="button" aria-label="Descendre" disabled={disabled || index === tokens.length - 1} onClick={() => move(index, 1)} className="rounded-lg border p-2 text-slate-600 disabled:opacity-30"><ArrowDown size={16}/></button>
          </div>
        ))}
      </div>
    )
  }

  return (
    <textarea
      value={typeof value === 'string' ? value : value.join(' ')}
      disabled={disabled}
      onChange={(event) => onChange(event.target.value)}
      rows={5}
      placeholder={question.promptText[language]}
      className="mt-4 w-full rounded-xl border border-slate-300 bg-white p-3 text-slate-800 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    />
  )
}

// DE_PEDAGOGICAL_FEEDBACK_V1
const feedbackLabels = {
  fr: { your: 'Ta réponse', expected: 'Réponse attendue', why: 'Pourquoi cette erreur ?', rule: 'Explication', yes: 'Vrai', no: 'Faux' },
  de: { your: 'Deine Antwort', expected: 'Richtige Antwort', why: 'Warum ist das falsch?', rule: 'Erklärung', yes: 'Wahr', no: 'Falsch' },
  en: { your: 'Your answer', expected: 'Correct answer', why: 'Why is this wrong?', rule: 'Explanation', yes: 'True', no: 'False' },
  ar: { your: 'إجابتك', expected: 'الإجابة الصحيحة', why: 'لماذا هذه الإجابة خاطئة؟', rule: 'الشرح', yes: 'صحيح', no: 'خطأ' },
} as const

function PedagogicalFeedback({ correction, question, answer, language }: {
  correction: Correction
  question: PublicQuestion
  answer?: AnswerValue
  language: keyof typeof feedbackLabels
}) {
  if (correction.manualReview) return null
  const labels = feedbackLabels[language]
  const renderAnswer = (value?: AnswerValue) => {
    if (value === undefined) return '—'
    if (question.type === 'true_false') return value === 'true' ? labels.yes : value === 'false' ? labels.no : '—'
    if (Array.isArray(value)) return question.type === 'reorder' ? value.join(' ') : value.map((v, i) => `${i + 1}. ${v}`).join(' · ')
    return value
  }
  const explanation = correction.explanations?.[language] ?? correction.explanation
  const direction = question.type === 'true_false' ? 'auto' : 'ltr'
  return (
    <div className="mt-3 space-y-3 text-sm">
      {correction.correct === false && (
        <div className="space-y-2">
          <div className="rounded-lg bg-white/70 p-3">
            <p className="font-semibold text-slate-600">{labels.your}</p>
            <p dir={direction} className="mt-1 break-words font-semibold text-rose-700">{renderAnswer(answer)}</p>
          </div>
          {correction.correctAnswer !== undefined && (
            <div className="rounded-lg bg-white/70 p-3">
              <p className="font-semibold text-slate-600">{labels.expected}</p>
              <p dir={direction} className="mt-1 break-words font-semibold text-emerald-700">{renderAnswer(correction.correctAnswer)}</p>
            </div>
          )}
        </div>
      )}
      {explanation && (
        <div className="rounded-lg border border-amber-200 bg-white/70 p-3">
          <p className="font-semibold text-slate-800">{correction.correct === false ? labels.why : labels.rule}</p>
          <p className="mt-2 whitespace-pre-line break-words leading-6 text-slate-700">{explanation}</p>
        </div>
      )}
    </div>
  )
}

export default function ExerciseRenderer({
  chapterId,
  exerciseSet,
  onAttempt,
}: {
  chapterId: string
  exerciseSet: ExerciseSetDefinition
  onAttempt?: () => void
}) {
  const { language, isRTL } = useLanguage()
  const labels = copy[language]
  const [answers, setAnswers] = useState<Answers>(() => initialAnswers(exerciseSet))
  const [result, setResult] = useState<SubmitResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showValidation, setShowValidation] = useState(false)
  const validation = validationCopy[language]
  const invalidQuestions = exerciseSet.questions.map((q, i) => incomplete(q, answers[q.id]) ? i + 1 : 0).filter(Boolean)

  const corrections = useMemo(
    () => new Map(result?.corrections.map((item) => [item.questionId, item]) ?? []),
    [result],
  )

  function updateAnswer(questionId: string, value: AnswerValue) {
    setAnswers((current) => ({ ...current, [questionId]: value }))
  }

  async function submit() {
    setShowValidation(true)
    setError('')
    if (invalidQuestions.length) {
      document.getElementById(`question-${exerciseSet.id}-${invalidQuestions[0]}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    setLoading(true)
    try {
      const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
      const accessToken = sessionData.session?.access_token
      if (sessionError || !accessToken) {
        setError(labels.login)
        return
      }

      const response = await fetch('/api/grammar/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          chapterId,
          exerciseSetId: exerciseSet.id,
          language,
          answers,
        }),
      })

      const data = await response.json()
      if (!response.ok) throw new Error(data.error || labels.error)
      setResult(data as SubmitResult)
      // DE_PERFECT_GRAMMAR_V1
      const perfectAttempt = (data as SubmitResult).attempt
      if (Number(perfectAttempt.score) === 100 && perfectAttempt.manual_questions === 0) {
        celebratePerfectScore(perfectAttempt.correct_answers, perfectAttempt.total_questions)
      }
      onAttempt?.()
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : labels.error)
    } finally {
      setLoading(false)
    }
  }

  function retry() {
    setAnswers(initialAnswers(exerciseSet))
    setResult(null)
    setShowValidation(false)
    setError('')
  }

  const title = exerciseSet.title[language]
  const description = exerciseSet.description[language]

  return (
    <section className="grammar-renderer studio-renderer mx-auto w-full space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="studio-exercise-header">
        <div className="mb-2 flex flex-wrap items-center gap-2">
          <span className={`rounded-full px-3 py-1 text-xs font-bold ${exerciseSet.category === 'meistertraining' ? 'bg-amber-100 text-amber-800' : 'bg-sky-100 text-sky-800'}`}>
            {exerciseSet.category === 'meistertraining' ? '🏆 Meistertraining' : '⚡ Extra-Kick'}
          </span>
          <span className="text-xs text-slate-500">{exerciseSet.questions.length} {language === 'fr' ? 'questions' : language === 'de' ? 'Fragen' : language === 'ar' ? 'أسئلة' : 'questions'}</span>
        </div>
        <h2 className="text-2xl font-bold text-slate-900">{title}</h2>
        <p className="mt-2 text-slate-600">{description}</p>
      </header>

      <div className="grammar-question-grid">
      {exerciseSet.questions.map((question, index) => {
        const correction = corrections.get(question.id)
        const invalid = showValidation && !result && incomplete(question, answers[question.id])
        return (
          <article data-kind={question.type} data-wide={question.type === 'matching' || question.type === 'writing' || question.type === 'reorder' || question.prompt[language].length > 110 || (question.type === 'fill_blank' && question.blanks > 2)} key={question.id} id={`question-${exerciseSet.id}-${index + 1}`} className={`studio-question rounded-2xl border bg-white p-5 sm:p-6 ${invalid ? 'border-rose-500' : 'border-slate-200'}`}>
            <div className="flex items-start gap-3">
              <span className="studio-number">{index + 1}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-semibold leading-7 text-slate-900">{question.prompt[language]}</h3>
                {question.instruction && <p className="mt-1 text-sm text-slate-500">{question.instruction[language]}</p>}
                {question.type === 'true_false' && <p className="mt-3 rounded-lg bg-slate-50 p-3 font-medium text-slate-800" dir="ltr">{question.statement}</p>}
              </div>
            </div>

            <QuestionContent
              question={question}
              value={answers[question.id] ?? ''}
              disabled={!!result || loading}
              onChange={(value) => updateAnswer(question.id, value)}
            />

            {question.type === 'writing' && (() => {
              const value = answers[question.id]
              const count = wordCount(typeof value === 'string' ? value : '')
              return <p className={`mt-2 text-sm ${count < (question.minimumWords || 0) ? 'text-amber-700' : 'text-emerald-700'}`}>{count} {validation.words}{question.minimumWords ? ` · ${validation.minimum} ${question.minimumWords}` : ''}</p>
            })()}
            {invalid && <p role="alert" className="mt-2 text-sm text-rose-700">{validation.missing}</p>}

            {correction && (
              <div className={`mt-4 rounded-xl border p-4 ${correction.manualReview ? 'border-amber-200 bg-amber-50' : correction.correct ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
                <div className="flex items-center gap-2 font-semibold">
                  {correction.manualReview ? <CircleAlert size={18}/> : correction.correct ? <CheckCircle2 size={18}/> : <CircleAlert size={18}/>} 
                  {correction.manualReview ? labels.manual : correction.correct ? labels.correct : labels.incorrect}
                </div>
                <PedagogicalFeedback correction={correction} question={question} answer={answers[question.id]} language={language} />
              </div>
            )}
          </article>
        )
      })}
      </div>

      {result && (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
          <p className="text-sm font-semibold text-emerald-800">{labels.result}</p>
          {result.attempt.score === null ? (
            <p className="mt-2 text-lg font-bold text-slate-900">{labels.noScore}</p>
          ) : (
            <p className="mt-1 text-3xl font-extrabold text-emerald-900">{labels.score} : {result.attempt.score}/100</p>
          )}
          <p className="mt-2 text-sm text-emerald-900">{result.attempt.correct_answers} / {result.attempt.total_questions} · {labels.saved}</p>
          {result.attempt.manual_questions > 0 && <p className="mt-1 text-sm text-amber-800">{result.attempt.manual_questions} · {labels.manual}</p>}
          <button type="button" onClick={retry} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
            <RotateCcw size={16}/> {labels.retry}
          </button>
        </div>
      )}

      {showValidation && !result && invalidQuestions.length > 0 && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{validation.summary}: {invalidQuestions.join(', ')}</p>}
      {error && <p role="alert" className="rounded-xl border border-rose-200 bg-rose-50 p-3 text-sm text-rose-800">{error}</p>}

      {!result && (
        <button type="button" onClick={submit} disabled={loading} className="studio-submit">
          {loading && <Loader2 size={18} className="animate-spin"/>}
          {loading ? labels.sending : labels.submit}
        </button>
      )}
    </section>
  )
}

import 'server-only'

import type {
  AnswerKey,
  ExerciseSetDefinition,
  PublicQuestion,
} from '@/lib/grammar/types'

export type SubmittedAnswer = string | string[]
export type SubmittedAnswers = Record<string, SubmittedAnswer>

export interface QuestionCorrection {
  questionId: string
  correct: boolean | null
  manualReview: boolean
  correctAnswer?: string | string[]
  explanation?: string
}

export interface ExerciseGrade {
  score: number | null
  totalQuestions: number
  correctAnswers: number
  manualQuestions: number
  corrections: QuestionCorrection[]
}

function normalizeText(value: string): string {
  // La casse est conservée : en allemand, « sie » et « Sie » peuvent avoir
  // des sens différents. Seuls les espaces superflus sont normalisés.
  return value.trim().replace(/\s+/g, ' ')
}

function normalizeBoolean(value: string): string {
  const normalized = normalizeText(value).toLocaleLowerCase()
  if (['true', 'wahr', 'vrai', 'صح', 'صحيح'].includes(normalized)) return 'true'
  if (['false', 'falsch', 'faux', 'خطأ', 'خاطئ'].includes(normalized)) return 'false'
  return normalized
}

function asArray(value: SubmittedAnswer | undefined): string[] | null {
  if (Array.isArray(value)) return value.map(normalizeText)
  if (typeof value === 'string') return [normalizeText(value)]
  return null
}

function sameOrderedArray(actual: string[], expected: string[]): boolean {
  return actual.length === expected.length && actual.every((value, index) => value === expected[index])
}

function sameUnorderedArray(actual: string[], expected: string[]): boolean {
  if (actual.length !== expected.length) return false
  const left = [...actual].sort()
  const right = [...expected].sort()
  return sameOrderedArray(left, right)
}

function isCorrect(
  question: PublicQuestion,
  submitted: SubmittedAnswer | undefined,
  expected: string | string[] | undefined,
): boolean | null {
  if (question.type === 'writing') return null
  if (expected === undefined || submitted === undefined) return false

  if (question.type === 'true_false') {
    const actual = Array.isArray(submitted) ? submitted[0] : submitted
    const expectedValue = Array.isArray(expected) ? expected[0] : expected
    return normalizeBoolean(actual) === normalizeBoolean(expectedValue)
  }

  const actualArray = asArray(submitted)
  const expectedArray = (Array.isArray(expected) ? expected : [expected]).map(normalizeText)
  if (!actualArray) return false

  if (question.type === 'qcm' && question.selection === 'multiple') {
    return sameUnorderedArray(actualArray, expectedArray)
  }

  // Fill blank à plusieurs trous, matching et reorder respectent l'ordre.
  if (
    question.type === 'matching' ||
    question.type === 'reorder' ||
    (question.type === 'fill_blank' && expectedArray.length > 1)
  ) {
    return sameOrderedArray(actualArray, expectedArray)
  }

  return actualArray.length === 1 && actualArray[0] === expectedArray[0]
}

function expectedAnswerForFeedback(
  question: PublicQuestion,
  expected: string | string[] | undefined,
): string | string[] | undefined {
  if (expected === undefined) return undefined
  if (question.type === 'true_false') {
    const value = Array.isArray(expected) ? expected[0] : expected
    return normalizeBoolean(value) === 'true' ? 'true' : 'false'
  }
  return expected
}

export function gradeExercise(
  exerciseSet: ExerciseSetDefinition,
  answerKey: AnswerKey,
  submittedAnswers: SubmittedAnswers,
  language: 'fr' | 'de' | 'ar' | 'en',
): ExerciseGrade {
  const corrections: QuestionCorrection[] = []
  let totalQuestions = 0
  let correctAnswers = 0
  let manualQuestions = 0

  for (const question of exerciseSet.questions) {
    const submitted = submittedAnswers[question.id]

    if (question.type === 'writing') {
      manualQuestions += 1
      corrections.push({
        questionId: question.id,
        correct: null,
        manualReview: true,
      })
      continue
    }

    totalQuestions += 1
    const key = answerKey[question.id]
    const correct = isCorrect(question, submitted, key?.acceptedAnswers)

    if (correct) correctAnswers += 1

    corrections.push({
      questionId: question.id,
      correct,
      manualReview: false,
      correctAnswer: expectedAnswerForFeedback(question, key?.acceptedAnswers),
      explanation: key?.explanation[language],
    })
  }

  const score = totalQuestions > 0
    ? Math.round((correctAnswers / totalQuestions) * 10000) / 100
    : null

  return {
    score,
    totalQuestions,
    correctAnswers,
    manualQuestions,
    corrections,
  }
}

export function validateSubmittedAnswers(
  exerciseSet: ExerciseSetDefinition,
  answers: unknown,
): answers is SubmittedAnswers {
  if (!answers || typeof answers !== 'object' || Array.isArray(answers)) return false

  const submitted = answers as Record<string, unknown>
  const validIds = new Set(exerciseSet.questions.map((question) => question.id))

  if (Object.keys(submitted).some((id) => !validIds.has(id))) return false

  for (const question of exerciseSet.questions) {
    const value = submitted[question.id]
    if (value === undefined) return false

    if (typeof value === 'string') {
      if (!value.trim() || value.length > 10000) return false
      if (question.type === 'writing') {
        const wordCount = value.trim().split(/\s+/).length
        if (question.minimumWords && wordCount < question.minimumWords) return false
      }
      continue
    }

    if (
      Array.isArray(value) &&
      value.length > 0 &&
      value.length <= 100 &&
      value.every((item) => typeof item === 'string' && item.trim().length > 0 && item.length <= 1000)
    ) continue

    return false
  }

  return true
}

import 'server-only'

import type {
  AnswerKey,
  ExerciseSetDefinition,
  PublicQuestion,
  Language,
  LocalizedText,
} from '@/lib/grammar/types'

export type SubmittedAnswer = string | string[]
export type SubmittedAnswers = Record<string, SubmittedAnswer>

export interface QuestionCorrection {
  questionId: string
  correct: boolean | null
  manualReview: boolean
  correctAnswer?: string | string[]
  explanation?: string
  explanations?: LocalizedText
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

// DE_PEDAGOGICAL_FEEDBACK_V1
const feedbackCopy = {
  fr: {
    upper: 'Majuscule manquante : écris', lower: 'Minuscule attendue : écris', mixed: 'Majuscules et minuscules : écris',
    start: 'Le premier mot de cette phrase commence par une majuscule.',
    umlaut: 'Vérifie les lettres ä, ö, ü ou ß : écris', punctuation: 'Vérifie la ponctuation : écris',
    compare: 'La forme attendue est', instead: 'au lieu de', blank: 'Trou',
    pronoun: 'Le pronom choisi ne correspond pas à la réponse attendue dans ce contexte.',
    order: 'Les mots sont présents, mais leur ordre est incorrect.',
    matching: 'Certaines associations ne correspondent pas aux éléments attendus.',
    multiple: 'Il manque une réponse correcte ou une option incorrecte a été sélectionnée.',
    choice: 'Cette option ne correspond pas à la règle ou au contexte de la question.',
    boolean: 'La réponse vrai/faux ne correspond pas au corrigé.',
    unknown: 'Le corrigé ne contient pas de règle détaillée pour cette question.',
  },
  de: {
    upper: 'Großbuchstabe fehlt: Schreibe', lower: 'Kleinbuchstabe erwartet: Schreibe', mixed: 'Groß- und Kleinschreibung: Schreibe',
    start: 'Das erste Wort dieses Satzes wird großgeschrieben.',
    umlaut: 'Prüfe ä, ö, ü oder ß: Schreibe', punctuation: 'Prüfe die Zeichensetzung: Schreibe',
    compare: 'Erwartet wird', instead: 'statt', blank: 'Lücke',
    pronoun: 'Das gewählte Pronomen passt hier nicht zur erwarteten Antwort.',
    order: 'Die Wörter sind vorhanden, aber ihre Reihenfolge ist falsch.',
    matching: 'Einige Zuordnungen stimmen nicht mit den erwarteten Paaren überein.',
    multiple: 'Eine richtige Antwort fehlt oder eine falsche Option wurde ausgewählt.',
    choice: 'Diese Option passt nicht zur Regel oder zum Kontext der Aufgabe.',
    boolean: 'Die Wahr/Falsch-Antwort stimmt nicht mit der Lösung überein.',
    unknown: 'Für diese Frage ist keine ausführliche Regel hinterlegt.',
  },
  en: {
    upper: 'Missing capital letter: write', lower: 'Lowercase expected: write', mixed: 'Capitalization: write',
    start: 'The first word of this sentence starts with a capital letter.',
    umlaut: 'Check ä, ö, ü or ß: write', punctuation: 'Check the punctuation: write',
    compare: 'The expected form is', instead: 'instead of', blank: 'Blank',
    pronoun: 'The chosen pronoun does not match the expected answer in this context.',
    order: 'The words are present, but their order is incorrect.',
    matching: 'Some matches do not correspond to the expected pairs.',
    multiple: 'A correct answer is missing or an incorrect option was selected.',
    choice: 'This option does not match the rule or context of the question.',
    boolean: 'The true/false answer does not match the solution.',
    unknown: 'No detailed rule is available for this question.',
  },
  ar: {
    upper: 'حرف كبير مطلوب: اكتب', lower: 'حرف صغير مطلوب: اكتب', mixed: 'خطأ في الحروف الكبيرة والصغيرة: اكتب',
    start: 'تبدأ الكلمة الأولى في هذه الجملة بحرف كبير.',
    umlaut: 'انتبه إلى الحروف ä و ö و ü و ß: اكتب', punctuation: 'انتبه إلى علامات الترقيم: اكتب',
    compare: 'الصيغة المطلوبة هي', instead: 'بدلاً من', blank: 'الفراغ',
    pronoun: 'الضمير المختار لا يطابق الإجابة المطلوبة في هذا السياق.',
    order: 'الكلمات موجودة لكن ترتيبها غير صحيح.',
    matching: 'بعض المطابقات لا تتوافق مع الأزواج المطلوبة.',
    multiple: 'هناك إجابة صحيحة ناقصة أو خيار خاطئ تم اختياره.',
    choice: 'هذا الخيار لا يتوافق مع القاعدة أو سياق السؤال.',
    boolean: 'إجابة صحيح أو خطأ لا تتوافق مع التصحيح.',
    unknown: 'لا توجد قاعدة مفصلة محفوظة لهذا السؤال.',
  },
} as const

const feedbackLanguages = ['fr', 'de', 'ar', 'en'] as const
const feedbackPronouns = new Set(['ich','du','er','sie','es','wir','ihr','mich','dich','ihn','uns','euch','mir','dir','ihm','ihnen'])
const feedbackLower = (s: string) => s.toLocaleLowerCase('de')
const feedbackUmlaut = (s: string) => feedbackLower(s).replace(/ä/g,'a').replace(/ö/g,'o').replace(/ü/g,'u').replace(/ß/g,'ss')
const feedbackUmlautAscii = (s: string) => feedbackLower(s).replace(/ä/g,'ae').replace(/ö/g,'oe').replace(/ü/g,'ue').replace(/ß/g,'ss')
const feedbackPunctuation = (s: string) => s.replace(/[.,!?;:„“”«»"']/g, '').replace(/\s+/g, ' ').trim()

function feedbackForPair(actual: string, expected: string, question: PublicQuestion, index: number, lang: Language): string {
  const c = feedbackCopy[lang]
  const a = normalizeText(actual)
  const e = normalizeText(expected)
  if (a === e) return ''
  // Quote actual and expected literally; do not infer a grammatical cause from edit distance.
  const comparison = (label: string) => `${label} «${e}» ${c.instead} «${a}».`
  if (feedbackLower(a) === feedbackLower(e)) {
    const ac = Array.from(a), ec = Array.from(e)
    const changes = ec.flatMap((v, i) => v === ac[i] ? [] : [v])
    const allUpper = changes.length > 0 && changes.every(v => v === v.toLocaleUpperCase('de') && v !== feedbackLower(v))
    const allLower = changes.length > 0 && changes.every(v => v === feedbackLower(v) && v !== v.toLocaleUpperCase('de'))
    const label = allUpper ? c.upper : allLower ? c.lower : c.mixed
    const prefix = question.type === 'fill_blank' ? question.sentence.split('___').slice(0, index + 1).join('___').trim() : ''
    const sentenceStart = question.type === 'fill_blank' && (prefix === '' || /[.!?]\s*$/.test(prefix))
    // Only claim sentence-initial capitalization when it is visibly at the blank boundary.
    const start = sentenceStart && ac[0] !== ec[0] && ec[0] !== feedbackLower(ec[0]) ? ` ${c.start}` : ''
    return comparison(label) + start
  }
  if ((/[äöüß]/i.test(a + e)) && (feedbackUmlaut(a) === feedbackUmlaut(e) || feedbackUmlautAscii(a) === feedbackUmlautAscii(e))) {
    return comparison(c.umlaut)
  }
  if (feedbackPunctuation(a) === feedbackPunctuation(e)) return comparison(c.punctuation)
  const pronoun = feedbackPronouns.has(feedbackLower(a)) && feedbackPronouns.has(feedbackLower(e)) ? `${c.pronoun} ` : ''
  return pronoun + comparison(c.compare)
}

function localizedFeedback(question: PublicQuestion, submitted: SubmittedAnswer | undefined, expected: SubmittedAnswer | undefined, correct: boolean | null, rule: LocalizedText | undefined): LocalizedText {
  const actual = asArray(submitted)
  const target = asArray(expected)
  const result = {} as LocalizedText
  for (const lang of feedbackLanguages) {
    const c = feedbackCopy[lang]
    const details: string[] = []
    if (correct === false && actual && target) {
      if (question.type === 'true_false') details.push(c.boolean)
      else if (question.type === 'qcm' && question.selection === 'multiple') details.push(c.multiple)
      else if (question.type === 'matching') details.push(c.matching)
      else if (question.type === 'reorder') details.push(c.order)
      else if (actual.length === target.length && (question.type === 'fill_blank' || question.type === 'qcm')) {
        for (let i = 0; i < target.length; i++) {
          const message = feedbackForPair(actual[i], target[i], question, i, lang)
          if (message) details.push(target.length > 1 ? `${c.blank} ${i + 1}: ${message}` : message)
        }
      } else details.push(c.choice)
    }
    const pedagogical = rule?.[lang]?.trim() || c.unknown
    result[lang] = [...details, pedagogical].join('\n\n')
  }
  return result
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
    const explanations = localizedFeedback(question, submitted, key?.acceptedAnswers, correct, key?.explanation)

    corrections.push({
      questionId: question.id,
      correct,
      manualReview: false,
      correctAnswer: expectedAnswerForFeedback(question, key?.acceptedAnswers),
      explanation: explanations[language],
      explanations,
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
  const validIds = new Set(exerciseSet.questions.map(q => q.id))
  if (Object.keys(submitted).some(id => !validIds.has(id))) return false

  const validText = (value: unknown): value is string =>
    typeof value === 'string' && value.trim().length > 0 && value.length <= 10000
  const validArray = (value: unknown): value is string[] =>
    Array.isArray(value) && value.length > 0 && value.length <= 100 &&
    value.every(item => typeof item === 'string' && item.trim().length > 0 && item.length <= 1000)

  for (const question of exerciseSet.questions) {
    if (!Object.prototype.hasOwnProperty.call(submitted, question.id)) return false
    const value = submitted[question.id]
    switch (question.type) {
      case 'writing':
        if (!validText(value)) return false
        if (value.trim().split(/\s+/).length < (question.minimumWords || 0)) return false
        break
      case 'true_false':
        if (value !== 'true' && value !== 'false') return false
        break
      case 'qcm':
        if (question.selection === 'multiple') {
          if (!validArray(value)) return false
          if (new Set(value).size !== value.length) return false
          if (!value.every(v => question.options.includes(v))) return false
        } else {
          if (!validText(value) || !question.options.includes(value)) return false
        }
        break
      case 'fill_blank':
        if (question.blanks === 1) {
          if (!validText(value)) return false
        } else {
          if (!validArray(value) || value.length !== question.blanks) return false
        }
        break
      case 'matching':
        if (!validArray(value) || value.length !== question.items.length) return false
        if (!value.every(v => question.options.includes(v))) return false
        break
      case 'reorder':
        if (!validArray(value) || !sameUnorderedArray(value, question.tokens)) return false
        break
      default:
        return false
    }
  }
  return true
}

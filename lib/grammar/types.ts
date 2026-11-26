/** Types partagés du contenu pédagogique Deutsch-Erfolg. */

export type Language = 'fr' | 'de' | 'ar' | 'en'

export type LocalizedText = Record<Language, string>

export type ExerciseCategory = 'meistertraining' | 'extra_kick'

export type QuestionType =
  | 'qcm'
  | 'fill_blank'
  | 'true_false'
  | 'matching'
  | 'reorder'
  | 'writing'

export type LessonBlock =
  | {
      type: 'paragraph'
      id: string
      title?: LocalizedText
      text: LocalizedText
    }
  | {
      type: 'table'
      id: string
      title: LocalizedText
      headers: LocalizedText[]
      rows: Array<{ id: string; cells: LocalizedText[] }>
    }
  | {
      type: 'examples'
      id: string
      title: LocalizedText
      items: Array<{
        id: string
        context: LocalizedText
        german: string
        explanation: LocalizedText
      }>
    }
  | {
      type: 'image'
      id: string
      src: string
      alt: LocalizedText
      caption?: LocalizedText
    }
  | {
      type: 'callout'
      id: string
      tone: 'info' | 'tip' | 'warning'
      title: LocalizedText
      text: LocalizedText
    }

export interface LessonDefinition {
  id: string
  title: LocalizedText
  subtitle: LocalizedText
  objective: LocalizedText
  blocks: LessonBlock[]
}

interface BaseQuestion {
  id: string
  position: number
  type: QuestionType
  prompt: LocalizedText
  instruction?: LocalizedText
}

export interface QcmQuestion extends BaseQuestion {
  type: 'qcm'
  selection: 'single' | 'multiple'
  options: string[]
}

export interface FillBlankQuestion extends BaseQuestion {
  type: 'fill_blank'
  sentence: string
  blanks: number
}

export interface TrueFalseQuestion extends BaseQuestion {
  type: 'true_false'
  statement: string
}

export interface MatchingQuestion extends BaseQuestion {
  type: 'matching'
  items: Array<{ id: string; label: string }>
  options: string[]
}

export interface ReorderQuestion extends BaseQuestion {
  type: 'reorder'
  tokens: string[]
}

export interface WritingQuestion extends BaseQuestion {
  type: 'writing'
  promptText: LocalizedText
  minimumWords?: number
}

export type PublicQuestion =
  | QcmQuestion
  | FillBlankQuestion
  | TrueFalseQuestion
  | MatchingQuestion
  | ReorderQuestion
  | WritingQuestion

export interface ExerciseSetDefinition {
  id: string
  category: ExerciseCategory
  position: number
  title: LocalizedText
  description: LocalizedText
  questions: PublicQuestion[]
}

export interface ChapterDefinition {
  id: string
  number: number
  level: string
  title: LocalizedText
  subtitle: LocalizedText
  lesson: LessonDefinition
  exerciseSets: ExerciseSetDefinition[]
}

/** Les réponses et explications de correction ne doivent jamais être importées côté client. */
export interface AnswerKeyEntry {
  acceptedAnswers?: string | string[]
  explanation: LocalizedText
}

export type AnswerKey = Record<string, AnswerKeyEntry>

import 'server-only'
import { grammarChapters } from '@/lib/grammar/chapterRegistry'
import type { Language } from '@/lib/grammar/types'

export type PublicGrammarChapter = {
  id: string; number: number; level: string; title: string;
  subtitle: Record<Language, string>; examples: number; questions: number;
  meistertraining: number; extraKick: number; lessons: number;
}
export type PublicGrammarStats = {
  chapters: PublicGrammarChapter[]; levels: string[]; lessons: number;
  questions: number; examples: number; meistertraining: number; extraKick: number;
  formats: { id: string; count: number }[]; languages: number;
}

// Projection publique explicite : ni énoncés, ni réponses, ni corrigés.
export function getPublicGrammarStats(): PublicGrammarStats {
  const formatCounts = new Map<string, number>()
  const chapters = grammarChapters.map((chapter): PublicGrammarChapter => {
    let questions = 0
    for (const set of chapter.exerciseSets) {
      for (const q of set.questions) {
        questions++
        const id = q.type === 'qcm' ? `qcm_${q.selection}` : q.type
        formatCounts.set(id, (formatCounts.get(id) ?? 0) + 1)
      }
    }
    return {
      id: chapter.id, number: chapter.number, level: chapter.level,
      title: chapter.title.de,
      subtitle: { fr: chapter.subtitle.fr, de: chapter.subtitle.de, en: chapter.subtitle.en, ar: chapter.subtitle.ar },
      lessons: chapter.lesson ? 1 : 0,
      examples: chapter.lesson?.blocks.reduce((sum, block) => sum + (block.type === 'examples' ? block.items.length : 0), 0) ?? 0,
      questions,
      meistertraining: chapter.exerciseSets.filter(s => s.category === 'meistertraining').length,
      extraKick: chapter.exerciseSets.filter(s => s.category === 'extra_kick').length,
    }
  }).sort((a, b) => a.number - b.number)
  const sum = (key: 'lessons' | 'questions' | 'examples' | 'meistertraining' | 'extraKick') => chapters.reduce((n, c) => n + c[key], 0)
  return {
    chapters, levels: [...new Set(chapters.map(c => c.level))].sort(),
    lessons: sum('lessons'), questions: sum('questions'), examples: sum('examples'),
    meistertraining: sum('meistertraining'), extraKick: sum('extraKick'),
    formats: Array.from(formatCounts, ([id, count]) => ({ id, count })),
    languages: 4,
  }
}

import { grammarChapters } from '@/lib/grammar/chapterRegistry'
import ResultsClient from './ResultsClient'

// DE_RESULTS_PREMIUM_V1: expose only catalog metadata, never questions or answers.
export default function ResultatsPage() {
  const catalog = grammarChapters.map(c => ({
    id: c.id, number: c.number, level: c.level, title: c.title, subtitle: c.subtitle,
    sets: c.exerciseSets.map(s => ({ id: s.id, position: s.position, title: s.title, category: s.category, graded: s.questions.some(q => q.type !== 'writing') }))
  })).sort((a,b) => a.number-b.number)
  return <ResultsClient catalog={catalog} />
}

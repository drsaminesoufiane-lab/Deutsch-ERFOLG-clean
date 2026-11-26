import HomePageClient from './HomePageClient'
import { getPublicGrammarStats } from '@/lib/grammar/publicShowcase'

// Le corpus reste serveur. Next.js prérend la page lors du build standard.
export default function HomePage() {
  return <HomePageClient grammarStats={getPublicGrammarStats()} />
}

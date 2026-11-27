'use client'

import { useLanguage } from '@/contexts/LanguageContext'

const titles = {
  de: 'Deutsche Grammatik',
  fr: 'Grammaire allemande',
  en: 'German Grammar',
  ar: 'قواعد اللغة الألمانية',
} as const

export function useGrammarModuleTitle() {
  const { language } = useLanguage()
  return titles[language as keyof typeof titles] ?? titles.de
}

export default function GrammarModuleTitle() {
  const title = useGrammarModuleTitle()
  return <>{title}</>
}

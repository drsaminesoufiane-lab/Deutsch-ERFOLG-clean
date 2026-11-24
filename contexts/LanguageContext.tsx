
'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from 'react'

import fr from '@/translations/fr'
import de from '@/translations/de'
import en from '@/translations/en'
import ar from '@/translations/ar'

export type Language = 'fr' | 'de' | 'en' | 'ar'

const translations = {
  fr,
  de,
  en,
  ar,
}

type Translation = typeof fr

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  isRTL: boolean
  t: Translation
}

const LanguageContext = createContext<
  LanguageContextType | undefined
>(undefined)

export function LanguageProvider({
  children,
}: {
  children: ReactNode
}) {
  const [language, setLanguageState] =
    useState<Language>('de')

  const [ready, setReady] = useState(false)

  useEffect(() => {
    const savedLanguage = localStorage.getItem(
      'deutsch_erfolg_language'
    ) as Language | null

    if (
      savedLanguage &&
      ['fr', 'de', 'en', 'ar'].includes(savedLanguage)
    ) {
      setLanguageState(savedLanguage)
    }

    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return

    localStorage.setItem(
      'deutsch_erfolg_language',
      language
    )

    document.documentElement.lang = language

    document.documentElement.dir =
      language === 'ar' ? 'rtl' : 'ltr'
  }, [language, ready])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
  }

  const isRTL = language === 'ar'

  const t = translations[language] as Translation

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        isRTL,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error(
      'useLanguage doit être utilisé dans LanguageProvider'
    )
  }

  return context
}


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

const LANGUAGE_KEY = 'deutsch_erfolg_language'

function isLanguage(value: unknown): value is Language {
  return value === 'de' || value === 'fr' || value === 'en' || value === 'ar'
}

function readPreferredLanguage(): Language | null {
  try {
    const saved = localStorage.getItem(LANGUAGE_KEY)
    if (isLanguage(saved)) return saved
  } catch { /* storage can be disabled */ }
  try {
    const saved = document.cookie.split(';').map(part => part.trim()).find(part => part.startsWith(LANGUAGE_KEY + '='))?.split('=')[1]
    if (isLanguage(saved)) return saved
  } catch { /* optional fallback */ }
  return null
}

function persistPreferredLanguage(value: Language) {
  try { localStorage.setItem(LANGUAGE_KEY, value) } catch { /* optional preference */ }
  try {
    document.cookie = LANGUAGE_KEY + '=' + value + '; Path=/; Max-Age=31536000; SameSite=Lax' + (window.location.protocol === 'https:' ? '; Secure' : '')
  } catch { /* optional fallback */ }
}

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

  // DE_LANGUAGE_PERSISTENCE_V2
  useEffect(() => {
    const stored = readPreferredLanguage()
    if (stored) {
      setLanguageState(stored)
      persistPreferredLanguage(stored)
    }
    const sync = (event: StorageEvent) => {
      if (event.key === LANGUAGE_KEY && isLanguage(event.newValue)) {
        setLanguageState(event.newValue)
      }
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr'
  }, [language])

  const setLanguage = (newLanguage: Language) => {
    // Persist synchronously, before a redirect or sign-out can interrupt React.
    persistPreferredLanguage(newLanguage)
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


'use client'

import { useLanguage, type Language } from '@/contexts/LanguageContext'
import { Globe, ChevronDown } from 'lucide-react'
import { useState } from 'react'

const languages: {
  code: Language
  label: string
  flag: string
}[] = [
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇲🇦' },
]

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)

  const selectedLanguage = languages.find(
    (item) => item.code === language
  )!

  return (
    <div className="language-switcher">
      <button
        type="button"
        className="language-switcher-trigger"
        onClick={() => setOpen(!open)}
        aria-label="Changer de langue"
        aria-expanded={open}
      >
        <Globe size={17} />
        <span className="language-switcher-flag">
          {selectedLanguage.flag}
        </span>
        <span>{selectedLanguage.label}</span>
        <ChevronDown
          size={15}
          className={open ? 'language-chevron open' : 'language-chevron'}
        />
      </button>

      {open && (
        <>
          <div
            className="language-switcher-backdrop"
            onClick={() => setOpen(false)}
          />

          <div className="language-switcher-menu">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                className={
                  language === item.code
                    ? 'language-switcher-option active'
                    : 'language-switcher-option'
                }
                onClick={() => {
                  setLanguage(item.code)
                  setOpen(false)
                }}
              >
                <span>{item.flag}</span>
                <span>{item.label}</span>
                {language === item.code && (
                  <span className="language-check">✓</span>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

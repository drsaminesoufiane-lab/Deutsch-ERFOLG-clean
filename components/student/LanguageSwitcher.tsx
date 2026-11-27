'use client'

import { useEffect, useId, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

// DE_COMPACT_LANGUAGE_V1
const languages = [
  { code: 'de', flag: '🇩🇪', name: 'Deutsch' },
  { code: 'fr', flag: '🇫🇷', name: 'Français' },
  { code: 'en', flag: '🇬🇧', name: 'English' },
  { code: 'ar', flag: '🇲🇦', name: 'العربية' },
] as const

const labels = { de: 'Sprache auswählen', fr: 'Choisir la langue', en: 'Select language', ar: 'اختر اللغة' }

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)
  const trigger = useRef<HTMLButtonElement>(null)
  const menuId = useId()
  const selected = languages.find(item => item.code === language) ?? languages[0]

  useEffect(() => {
    if (!open) return
    function outside(event: PointerEvent) {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false)
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape') { setOpen(false); trigger.current?.focus() }
    }
    document.addEventListener('pointerdown', outside)
    document.addEventListener('keydown', escape)
    return () => {
      document.removeEventListener('pointerdown', outside)
      document.removeEventListener('keydown', escape)
    }
  }, [open])

  return (
    <div ref={root} className="language-switcher de-compact-language" onBlur={event => {
      if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false)
    }}>
      <button ref={trigger} type="button" className="language-switcher-trigger" dir="ltr"
        aria-label={`${labels[selected.code]}: ${selected.name}`} title={selected.name}
        aria-expanded={open} aria-controls={open ? menuId : undefined} onClick={() => setOpen(value => !value)}>
        <span className="language-switcher-flag" aria-hidden="true">{selected.flag}</span>
        <span>{selected.code.toUpperCase()}</span>
      </button>
      {open && <div id={menuId} className="language-switcher-menu" role="group" aria-label={labels[selected.code]}>
        {languages.map(item => (
          <button key={item.code} type="button" dir="ltr" lang={item.code}
            className={`language-switcher-option${item.code === language ? ' active' : ''}`}
            aria-label={item.name} title={item.name} aria-pressed={item.code === language}
            onClick={() => { setLanguage(item.code); setOpen(false); trigger.current?.focus() }}>
            <span className="language-switcher-flag" aria-hidden="true">{item.flag}</span>
            <span>{item.code.toUpperCase()}</span>
          </button>
        ))}
      </div>}
    </div>
  )
}

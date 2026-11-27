'use client'

import { BookOpen, GraduationCap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type Kind = 'page' | 'grammar' | 'chapter'
const messages = {
  de: { page: 'Wird geladen...', grammar: 'Deine Grammatikkapitel werden geladen...', chapter: 'Dein Kapitel wird vorbereitet...', motto: 'Schritt f\u00fcr Schritt zum Erfolg.' },
  fr: { page: 'Chargement de la page...', grammar: 'Chargement de tes chapitres de grammaire...', chapter: 'Pr\u00e9paration de ton chapitre...', motto: 'Un pas de plus vers la r\u00e9ussite.' },
  en: { page: 'Loading your page...', grammar: 'Loading your grammar chapters...', chapter: 'Preparing your chapter...', motto: 'One step closer to success.' },
  ar: { page: '\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0635\u0641\u062d\u0629...', grammar: '\u062c\u0627\u0631\u064d \u062a\u062d\u0645\u064a\u0644 \u0641\u0635\u0648\u0644 \u0627\u0644\u0642\u0648\u0627\u0639\u062f...', chapter: '\u062c\u0627\u0631\u064d \u062a\u062d\u0636\u064a\u0631 \u0627\u0644\u0641\u0635\u0644...', motto: '\u062e\u0637\u0648\u0629 \u0623\u062e\u0631\u0649 \u0646\u062d\u0648 \u0627\u0644\u0646\u062c\u0627\u062d.' },
}

// DE_BRANDED_LOADING_V1
export default function DeutschErfolgLoader({ kind = 'page', inline = false }: { kind?: Kind; inline?: boolean }) {
  const { language } = useLanguage()
  const t = messages[language] || messages.de
  const Icon = kind === 'page' ? GraduationCap : BookOpen
  return (
    <div className={`de-branded-loading${inline ? ' de-bl-inline' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language} role="status" aria-live="polite" aria-atomic="true">
      <div className="de-bl-card">
        <div className="de-bl-emblem" aria-hidden="true">
          <span className="de-bl-ring" />
          <span className="de-bl-icon"><Icon size={34} strokeWidth={1.55} /></span>
        </div>
        <div className="de-bl-wordmark" lang="de" dir="ltr">Deutsch <strong>Erfolg</strong></div>
        <p className="de-bl-motto">{t.motto}</p>
        {kind !== 'page' && <div className="de-bl-levels" aria-hidden="true" dir="ltr"><span>A1</span><span>A2</span><span>B1</span></div>}
        <div className="de-bl-track" aria-hidden="true"><span /></div>
        <p className="de-bl-message">{t[kind]}</p>
      </div>
      <style jsx global>{`
        .de-branded-loading{box-sizing:border-box;display:grid;place-items:center;min-height:65vh;min-height:65svh;padding:32px 18px;background:#f7f5f0;color:#192b43;text-align:center}
        .de-branded-loading.de-bl-inline{min-height:260px;border:1px solid #e4ded1;border-radius:12px;background:#fcfbf8;padding:24px 12px}
        .de-branded-loading .de-bl-card{display:flex;flex-direction:column;align-items:center;gap:11px;width:min(100%,380px);padding:28px 12px;box-sizing:border-box}
        .de-branded-loading .de-bl-emblem{position:relative;width:80px;height:80px;display:grid;place-items:center;margin-bottom:7px}
        .de-branded-loading .de-bl-ring{position:absolute;inset:0;border:2px solid #e5ddca;border-top-color:#b49760;border-right-color:#b49760;border-radius:50%;animation:de-bl-spin 1.4s linear infinite}
        .de-branded-loading .de-bl-icon{display:grid;place-items:center;width:64px;height:64px;background:#192b43;color:#d6b56d;border-radius:50%}
        .de-branded-loading .de-bl-wordmark{font-family:Georgia,serif;font-weight:600;font-size:clamp(25px,5vw,35px);letter-spacing:-.8px;line-height:1.15;color:#192b43}
        .de-branded-loading .de-bl-wordmark strong{color:#946c32;font-weight:600}
        .de-branded-loading .de-bl-motto{font-size:13px;line-height:1.5;color:#5b6879;margin:0}
        .de-branded-loading .de-bl-levels{display:flex;gap:7px;margin:6px 0 1px}
        .de-branded-loading .de-bl-levels span{display:grid;place-items:center;min-width:37px;padding:4px 7px;border:1px solid #ded4be;border-radius:5px;background:#f6f0e3;color:#745a2e;font-size:11px;font-weight:700;line-height:1.4;animation:de-bl-level 2.1s ease-in-out infinite}
        .de-branded-loading .de-bl-levels span:nth-child(2){animation-delay:.25s}
        .de-branded-loading .de-bl-levels span:nth-child(3){animation-delay:.5s}
        .de-branded-loading .de-bl-track{position:relative;width:min(210px,80%);height:3px;border-radius:10px;background:#e9e3d8;overflow:hidden;margin-top:9px;direction:ltr}
        .de-branded-loading .de-bl-track span{position:absolute;top:0;left:0;height:100%;width:42%;background:#b49760;border-radius:10px;animation:de-bl-sweep 1.65s ease-in-out infinite}
        .de-branded-loading .de-bl-message{margin:0;font-size:12px;line-height:1.5;color:#596679;font-weight:500}
        @keyframes de-bl-spin{to{transform:rotate(360deg)}}
        @keyframes de-bl-sweep{0%{transform:translateX(-110%)}100%{transform:translateX(250%)}}
        @keyframes de-bl-level{0%,100%{background:#f6f0e3;color:#745a2e}50%{background:#e8d8b5;color:#192b43}}
        @media(prefers-reduced-motion:reduce){.de-branded-loading .de-bl-ring,.de-branded-loading .de-bl-track span,.de-branded-loading .de-bl-levels span{animation:none}.de-branded-loading .de-bl-track span{left:29%}}
      `}</style>
    </div>
  )
}

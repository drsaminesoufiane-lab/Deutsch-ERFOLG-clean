'use client'

import { usePathname } from 'next/navigation'

import { createContext, useContext } from 'react'
import Link from 'next/link'
import { ArrowUp, Crown, ArrowUpRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/student/LanguageSwitcher'

export type SubscriptionStatus = 'unknown' | 'free' | 'trial' | 'paid'
export const SubscriptionContext = createContext<SubscriptionStatus>('unknown')

const labels = {
  fr: { top: 'Retour en haut', free: 'Version gratuite', trial: 'Essai gratuit', pro: 'Version PRO', upgrade: 'Passer à PRO', desc: 'Débloquez toutes les fonctionnalités.' },
  de: { top: 'Nach oben', free: 'Kostenlose Version', trial: 'Kostenlose Testphase', pro: 'PRO-Version', upgrade: 'PRO werden', desc: 'Alle Funktionen freischalten.' },
  en: { top: 'Back to top', free: 'Free version', trial: 'Free trial', pro: 'PRO version', upgrade: 'Upgrade to PRO', desc: 'Unlock all features.' },
  ar: { top: 'العودة إلى الأعلى', free: 'النسخة المجانية', trial: 'الفترة التجريبية المجانية', pro: 'نسخة PRO', upgrade: 'الترقية إلى PRO', desc: 'استفد من جميع المزايا.' },
}

export function ProNameBadge() {
  const status = useContext(SubscriptionContext)
  const { language } = useLanguage()
  if (status !== 'paid') return null
  return <span className="de-pro-name-badge"><Crown size={15} aria-hidden="true" />{labels[language].pro}</span>
}

export default function FloatingPageTools({ showOffer = false }: { showOffer?: boolean }) {
  const { language } = useLanguage()

  // DE_FLOATING_CHAPTER_BACK_RTL_V1
  const deFloatingPath = usePathname()
  const deChapterSegment = deFloatingPath?.match(/^\/espace-etudiant\/apprentissage\/grammaire\/([^/]+)\/?$/)?.[1]
  const deChapterId = (() => {
    if (!deChapterSegment) return ''
    try { return decodeURIComponent(deChapterSegment) } catch { return deChapterSegment }
  })()
  const deBackHref = deChapterId ? `/espace-etudiant/apprentissage/grammaire#${encodeURIComponent(deChapterId)}` : ''
  const deBackLabel = ({ de: 'Zur\u00fcck zu den Kapiteln', fr: 'Retour aux chapitres', en: 'Back to chapters', ar: '\u0627\u0644\u0639\u0648\u062f\u0629 \u0625\u0644\u0649 \u0627\u0644\u0641\u0635\u0648\u0644' })[language]

  const status = useContext(SubscriptionContext)
  const t = labels[language]
  return (
    <div className="de-floating-tools" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {showOffer && (status === 'trial' || status === 'free') && (
        <Link className="de-subscription-offer" href="/espace-etudiant/pro">
          <span className="de-offer-heading"><Crown size={23} aria-hidden="true" /><strong>{status === 'trial' ? t.trial : t.free}</strong></span>
          <span className="de-offer-desc">{t.desc}</span>
          <span className="de-offer-action">{t.upgrade}<ArrowUpRight size={15} aria-hidden="true" /></span>
        </Link>
      )}
      <div className="de-floating-controls">
        {deBackHref && (
          <Link className="de-floating-back" href={deBackHref} scroll={false} aria-label={deBackLabel} title={deBackLabel}>
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m12 19-7-7 7-7M5 12h14" /></svg>
            <span className="de-floating-back-label">{deBackLabel}</span>
          </Link>
        )}
        <button type="button" className="de-scroll-top" title={t.top} aria-label={t.top}
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
          <ArrowUp size={20} aria-hidden="true" />
        </button>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

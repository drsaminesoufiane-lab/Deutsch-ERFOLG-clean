'use client'

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
        <button type="button" className="de-scroll-top" title={t.top} aria-label={t.top}
          onClick={() => window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' })}>
          <ArrowUp size={20} aria-hidden="true" />
        </button>
        <LanguageSwitcher />
      </div>
    </div>
  )
}

'use client'

import { useEffect, useRef, useState } from 'react'
import { Crown, CheckCircle2, ArrowRight } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'

const copy = {
  fr: { gift: 'CADEAU DE BIENVENUE', title: 'Bienvenue sur Deutsch Erfolg !', days: '3 JOURS PRO', description: 'Profite gratuitement de toutes les fonctionnalités PRO disponibles pendant 3 jours à compter de ton inscription.', features: ['Grammaire complète A1, A2 et B1', 'Meistertraining et Extra-Kick', 'Vocabulaire et préparation aux examens disponibles', 'Corrections détaillées et suivi de progression'], expiry: 'Ton accès PRO expire le', free: '100 % gratuit · Aucun paiement nécessaire', start: 'Commencer mon apprentissage' },
  de: { gift: 'WILLKOMMENSGESCHENK', title: 'Willkommen bei Deutsch Erfolg!', days: '3 TAGE PRO', description: 'Nutze alle verfügbaren PRO-Funktionen 3 Tage lang kostenlos ab deiner Registrierung.', features: ['Vollständige Grammatik A1, A2 und B1', 'Meistertraining und Extra-Kick', 'Wortschatz und verfügbare Prüfungsvorbereitung', 'Ausführliche Korrekturen und Lernfortschritt'], expiry: 'Dein PRO-Zugang endet am', free: '100 % kostenlos · Keine Zahlung nötig', start: 'Jetzt lernen' },
  en: { gift: 'WELCOME GIFT', title: 'Welcome to Deutsch Erfolg!', days: '3 DAYS OF PRO', description: 'Enjoy all available PRO features free for 3 days from registration.', features: ['Complete A1, A2 and B1 grammar', 'Meistertraining and Extra-Kick', 'Vocabulary and available exam preparation', 'Detailed corrections and progress tracking'], expiry: 'Your PRO access expires on', free: '100% free · No payment required', start: 'Start learning' },
  ar: { gift: 'هدية الترحيب', title: 'مرحباً بك في Deutsch Erfolg!', days: '3 أيام PRO', description: 'استفد مجاناً من جميع مزايا PRO المتاحة لمدة 3 أيام ابتداءً من تاريخ التسجيل.', features: ['قواعد اللغة كاملة A1 و A2 و B1', 'تمارين Meistertraining و Extra-Kick', 'المفردات والتحضير للامتحانات المتاحة', 'تصحيحات مفصلة وتتبع التقدم'], expiry: 'ينتهي اشتراكك التجريبي في', free: 'مجاني 100% · لا حاجة للدفع', start: 'ابدأ التعلم' },
} as const
const seenKey = 'de_trial_welcome_v1'
const storageKey = (id: string) => `${seenKey}:${id}`
const day = 86400000
const seenLocally = (id: string) => { try { return localStorage.getItem(storageKey(id)) === '1' } catch { return false } }

type Offer = { id: string; until: string }
export default function TrialWelcome() {
  const { language } = useLanguage()
  const t = copy[language]
  const dialog = useRef<HTMLDialogElement>(null)
  const [offer, setOffer] = useState<Offer | null>(null)
  const dismissed = useRef(false)
  useEffect(() => {
    let active = true
    async function check() {
      try {
        const { data: { user }, error } = await supabase.auth.getUser()
        if (error || !user || !active || dismissed.current || user.user_metadata?.[seenKey] === true || seenLocally(user.id)) return
        const { data: p, error: pe } = await supabase.from('profiles').select('role,is_pro,pro_type,pro_until,trial_used,created_at').eq('id', user.id).maybeSingle()
        if (!active || dismissed.current || pe || !p || p.role !== 'student' || p.is_pro !== true || p.pro_type !== 'trial' || p.trial_used !== true || !p.pro_until) return
        const start = Date.parse(p.created_at || user.created_at)
        const end = Date.parse(p.pro_until)
        const now = Date.now()
        // Only recent accounts on a real three-day trial, not paid or older trials.
        if (!Number.isFinite(start) || !Number.isFinite(end) || end <= now || start > now || now - start >= 3 * day || Math.abs(end - start - 3 * day) > 3600000) return
        setOffer({ id: user.id, until: p.pro_until })
      } catch { /* A welcome message must never block learning. */ }
    }
    void check()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(event => {
      if (event === 'SIGNED_OUT') { active = false; setOffer(null) }
    })
    return () => { active = false; subscription.unsubscribe() }
  }, [])
  useEffect(() => {
    const el = dialog.current
    if (offer && el && !el.open) el.showModal()
    return () => { if (el?.open) el.close() }
  }, [offer])
  function dismiss() {
    if (!offer || dismissed.current) return
    dismissed.current = true
    const id = offer.id
    try { localStorage.setItem(storageKey(id), '1') } catch { /* storage unavailable */ }
    setOffer(null)
    // Cosmetic preference only; this metadata never grants PRO privileges.
    void (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user?.id === id) await supabase.auth.updateUser({ data: { [seenKey]: true } })
      } catch { /* local fallback remains */ }
    })()
  }
  if (!offer) return null
  const locale = { fr: 'fr-FR', de: 'de-DE', en: 'en-GB', ar: 'ar-MA' }[language]
  const expiry = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeStyle: 'short' }).format(new Date(offer.until))
  return (
    <dialog ref={dialog} className="de-trial-welcome" dir={language === 'ar' ? 'rtl' : 'ltr'} aria-labelledby="de-trial-title" onCancel={e => { e.preventDefault(); dismiss() }}>
      <header className="de-trial-hero">
        <Crown size={42} aria-hidden="true" />
        <span>{t.gift}</span>
        <h2 id="de-trial-title">{t.title}</h2>
        <strong>{t.days}</strong>
        <p>{t.description}</p>
      </header>
      <div className="de-trial-body">
        <ul>{t.features.map(feature => <li key={feature}><CheckCircle2 size={20} aria-hidden="true"/><span>{feature}</span></li>)}</ul>
        <p className="de-trial-expiry">{t.expiry} <b>{expiry}</b>.</p>
        <p className="de-trial-free">{t.free}</p>
        <button type="button" autoFocus onClick={dismiss}>{t.start}<ArrowRight size={19} aria-hidden="true"/></button>
      </div>
      <style>{`
        .de-trial-welcome { position:fixed; inset:0; margin:auto; width:min(480px, calc(100vw - 28px)); max-width:480px; max-height:calc(100dvh - 28px); padding:0; overflow:auto; border:1px solid #d6b56d; border-radius:20px; background:#fff; color:#192b43; box-shadow:0 24px 90px #07162d55; text-align:start; }
        .de-trial-welcome::backdrop { background:rgba(9,22,42,.65); backdrop-filter:blur(3px); }
        .de-trial-hero { display:flex; flex-direction:column; align-items:center; gap:10px; background:#192b43; color:white; padding:25px 22px; text-align:center; }
        .de-trial-hero svg,.de-trial-hero>span,.de-trial-hero>strong { color:#d6b56d; }
        .de-trial-hero>span { font-size:11px; letter-spacing:.06em; font-weight:700; }
        .de-trial-hero h2 { margin:0; font-size:23px; line-height:1.25; color:white; font-weight:700; }
        .de-trial-hero>strong { font-size:34px; line-height:1.1; }
        .de-trial-hero p { margin:0; font-size:14px; line-height:1.5; }
        .de-trial-body { padding:22px; display:flex; flex-direction:column; gap:14px; }
        .de-trial-body ul { display:grid; gap:10px; list-style:none; margin:0; padding:0; }
        .de-trial-body li { display:flex; align-items:center; gap:9px; font-size:14px; }
        .de-trial-body li svg { color:#987640; flex-shrink:0; }
        .de-trial-expiry { margin:0; font-size:13px; text-align:center; }
        .de-trial-free { background:#f7f5f0; border-radius:8px; padding:10px; text-align:center; font-weight:600; font-size:12px; margin:0; }
        .de-trial-body button { display:flex; justify-content:center; align-items:center; gap:8px; width:100%; background:#192b43; color:white; border:0; border-radius:9px; padding:13px; font-weight:700; cursor:pointer; }
        .de-trial-body button:focus-visible { outline:3px solid #d6b56d; outline-offset:3px; }
        .de-trial-welcome[dir=rtl] button svg { transform:rotate(180deg); }
      `}</style>
    </dialog>
  )
}

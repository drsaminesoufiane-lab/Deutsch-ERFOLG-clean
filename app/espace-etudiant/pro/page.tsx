
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Crown,
  Check,
  ShieldCheck,
  MessageCircle,
  ArrowLeft,
  LoaderCircle,
  Sparkles,
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  CalendarDays,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Plan = {
  id: string
  duration: number
  price: number
  popular?: boolean
}

type Language = 'fr' | 'ar' | 'de' | 'en'

type Profile = {
  full_name: string | null
  is_pro: boolean | null
  pro_type: string | null
  pro_started_at: string | null
  pro_until: string | null
}

type WhatsAppTranslation = {
  greeting: string
  wish: string
  month: string
  price: string
  payment: string
  thanks: string
}

type TranslationValue = string | WhatsAppTranslation

const WHATSAPP_NUMBER = '212775737443'

const plans: Plan[] = [
  {
    id: '1-month',
    duration: 1,
    price: 59,
  },
  {
    id: '3-months',
    duration: 3,
    price: 129,
    popular: true,
  },
  {
    id: '12-months',
    duration: 12,
    price: 499,
  },
]

const translations = {
  fr: {
    back: 'Retour à mon espace',
    eyebrow: 'DEUTSCH-ERFOLG PREMIUM',
    heroTitle: 'Passez au niveau',
    heroDescription:
      "Débloquez tout le potentiel de Deutsch-Erfolg et préparez vos examens d'allemand avec un accès complet aux exercices.",
    point1: 'Accès aux exercices PRO',
    point2: 'Préparation B1 et B2',
    point3: 'Progression sans limites',
    loading: 'Chargement de votre abonnement...',
    errorAccount:
      'Impossible de récupérer votre compte. Veuillez vous reconnecter.',
    errorProfile:
      'Impossible de charger les informations de votre abonnement.',
    subscription: 'VOTRE ABONNEMENT',
    active: 'Vous êtes membre PRO',
    expired: 'Votre abonnement a expiré',
    free: 'Vous utilisez la version gratuite',
    validUntil: 'Votre abonnement est valable jusqu’au',
    chooseAgain:
      'Choisissez une formule pour retrouver tous vos accès PRO.',
    choosePlan: 'Choisissez une formule pour débloquer tous les exercices.',
    daysRemaining: 'jours restants',
    benefits: 'LES AVANTAGES',
    preparation: 'Une préparation plus complète',
    benefitsDescription:
      'Accédez à davantage de contenu pour progresser à votre rythme.',
    lesenTitle: 'Lesen',
    horenTitle: 'Hören',
    grammarTitle: 'Sprachbausteine',
    productionTitle: 'Schreiben & Sprechen',
    lesenDescription:
      'Compréhension écrite et exercices supplémentaires.',
    horenDescription: 'Entraînement à la compréhension orale.',
    grammarDescription: 'Grammaire et vocabulaire en contexte.',
    productionDescription:
      'Entraînement aux compétences de production.',
    pricing: 'NOS FORMULES',
    chooseSubscription: 'Choisissez votre abonnement',
    pricingDescription:
      'Un paiement par virement bancaire, avec validation manuelle.',
    oneMonth: '1 mois',
    threeMonths: '3 mois',
    twelveMonths: '12 mois',
    start: 'Pour commencer',
    progress: 'Pour progresser régulièrement',
    exam: 'Pour préparer vos examens sereinement',
    popular: 'LE PLUS CHOISI',
    selected: 'Formule sélectionnée',
    chooseThis: 'Choisir cette formule',
    contact: 'CONTACT & PAIEMENT',
    contactTitle: 'Contactez-nous sur WhatsApp',
    contactDescription:
      'Nous vous communiquerons les informations nécessaires au virement.',
    summaryPlan: 'Formule choisie',
    amount: 'Montant à payer',
    whatsappButton: 'Contacter sur WhatsApp',
    paymentNote:
      "Votre abonnement PRO sera activé après vérification du virement par l’administration.",
    currentSubscription: 'Votre abonnement actuel',
    startDate: 'Début :',
    expiration: 'Expiration :',
    notProvided: 'Non renseigné',
    notProvidedF: 'Non renseignée',
    footer: 'Apprenez. Entraînez-vous. Réussissez.',
    month: 'mois',
    months: 'mois',
    whatsapp: {
      greeting: 'Bonjour !',
      wish: 'Je souhaite souscrire à Deutsch-Erfolg PRO pour',
      month: 'mois',
      price: 'au prix de',
      payment:
        "Merci de m'indiquer les modalités de paiement par virement bancaire.",
      thanks: 'Merci !',
    },
  },

  de: {
    back: 'Zurück zu meinem Bereich',
    eyebrow: 'DEUTSCH-ERFOLG PREMIUM',
    heroTitle: 'Erreichen Sie das nächste Niveau',
    heroDescription:
      'Entdecken Sie das volle Potenzial von Deutsch-Erfolg und bereiten Sie sich mit uneingeschränktem Zugang zu den Übungen auf Ihre Deutschprüfungen vor.',
    point1: 'Zugang zu PRO-Übungen',
    point2: 'Vorbereitung auf B1 und B2',
    point3: 'Lernen ohne Grenzen',
    loading: 'Ihr Abonnement wird geladen...',
    errorAccount:
      'Ihr Konto konnte nicht abgerufen werden. Bitte melden Sie sich erneut an.',
    errorProfile:
      'Ihre Abonnementinformationen konnten nicht geladen werden.',
    subscription: 'IHR ABONNEMENT',
    active: 'Sie sind PRO-Mitglied',
    expired: 'Ihr Abonnement ist abgelaufen',
    free: 'Sie nutzen die kostenlose Version',
    validUntil: 'Ihr Abonnement ist gültig bis zum',
    chooseAgain:
      'Wählen Sie ein Abonnement, um Ihren PRO-Zugang wiederherzustellen.',
    choosePlan:
      'Wählen Sie ein Abonnement, um alle Übungen freizuschalten.',
    daysRemaining: 'Tage verbleibend',
    benefits: 'IHRE VORTEILE',
    preparation: 'Eine umfassendere Vorbereitung',
    benefitsDescription:
      'Greifen Sie auf weitere Inhalte zu und lernen Sie in Ihrem eigenen Tempo.',
    lesenTitle: 'Leseverstehen',
    horenTitle: 'Hörverstehen',
    grammarTitle: 'Sprachbausteine',
    productionTitle: 'Schreiben & Sprechen',
    lesenDescription:
      'Leseverständnis und zusätzliche Übungen.',
    horenDescription: 'Training des Hörverständnisses.',
    grammarDescription: 'Grammatik und Wortschatz im Kontext.',
    productionDescription:
      'Training der schriftlichen und mündlichen Ausdrucksfähigkeit.',
    pricing: 'UNSERE ANGEBOTE',
    chooseSubscription: 'Wählen Sie Ihr Abonnement',
    pricingDescription:
      'Zahlung per Banküberweisung mit manueller Bestätigung.',
    oneMonth: '1 Monat',
    threeMonths: '3 Monate',
    twelveMonths: '12 Monate',
    start: 'Zum Einstieg',
    progress: 'Für regelmäßige Fortschritte',
    exam: 'Für eine entspannte Prüfungsvorbereitung',
    popular: 'AM BELIEBTESTEN',
    selected: 'Ausgewählt',
    chooseThis: 'Dieses Angebot wählen',
    contact: 'KONTAKT & ZAHLUNG',
    contactTitle: 'Kontaktieren Sie uns über WhatsApp',
    contactDescription:
      'Wir senden Ihnen die notwendigen Informationen zur Banküberweisung.',
    summaryPlan: 'Ausgewähltes Angebot',
    amount: 'Zu zahlender Betrag',
    whatsappButton: 'Über WhatsApp kontaktieren',
    paymentNote:
      'Ihr PRO-Abonnement wird nach Überprüfung der Überweisung durch die Administration aktiviert.',
    currentSubscription: 'Ihr aktuelles Abonnement',
    startDate: 'Beginn:',
    expiration: 'Ablaufdatum:',
    notProvided: 'Nicht angegeben',
    notProvidedF: 'Nicht angegeben',
    footer: 'Lernen. Üben. Erfolg haben.',
    month: 'Monat',
    months: 'Monate',
    whatsapp: {
      greeting: 'Guten Tag!',
      wish: 'Ich möchte das Deutsch-Erfolg PRO-Abonnement für',
      month: 'Monat',
      price: 'zum Preis von',
      payment:
        'Bitte teilen Sie mir die Zahlungsinformationen für die Banküberweisung mit.',
      thanks: 'Vielen Dank!',
    },
  },

  en: {
    back: 'Back to my dashboard',
    eyebrow: 'DEUTSCH-ERFOLG PREMIUM',
    heroTitle: 'Take your learning to the next level',
    heroDescription:
      'Unlock the full potential of Deutsch-Erfolg and prepare for your German exams with complete access to the exercises.',
    point1: 'Access to PRO exercises',
    point2: 'B1 and B2 preparation',
    point3: 'Unlimited progress',
    loading: 'Loading your subscription...',
    errorAccount:
      'Unable to retrieve your account. Please log in again.',
    errorProfile:
      'Unable to load your subscription information.',
    subscription: 'YOUR SUBSCRIPTION',
    active: 'You are a PRO member',
    expired: 'Your subscription has expired',
    free: 'You are using the free version',
    validUntil: 'Your subscription is valid until',
    chooseAgain: 'Choose a plan to restore your PRO access.',
    choosePlan: 'Choose a plan to unlock all exercises.',
    daysRemaining: 'days remaining',
    benefits: 'THE BENEFITS',
    preparation: 'A more complete preparation',
    benefitsDescription:
      'Access more content and make progress at your own pace.',
    lesenTitle: 'Reading',
    horenTitle: 'Listening',
    grammarTitle: 'Grammar & Vocabulary',
    productionTitle: 'Writing & Speaking',
    lesenDescription:
      'Reading comprehension and additional exercises.',
    horenDescription: 'Listening comprehension training.',
    grammarDescription: 'Grammar and vocabulary in context.',
    productionDescription:
      'Practice your writing and speaking skills.',
    pricing: 'OUR PLANS',
    chooseSubscription: 'Choose your subscription',
    pricingDescription:
      'Payment by bank transfer, with manual confirmation.',
    oneMonth: '1 month',
    threeMonths: '3 months',
    twelveMonths: '12 months',
    start: 'A great way to start',
    progress: 'For regular progress',
    exam: 'For confident exam preparation',
    popular: 'MOST POPULAR',
    selected: 'Selected plan',
    chooseThis: 'Choose this plan',
    contact: 'CONTACT & PAYMENT',
    contactTitle: 'Contact us on WhatsApp',
    contactDescription:
      'We will send you the necessary bank transfer information.',
    summaryPlan: 'Selected plan',
    amount: 'Amount to pay',
    whatsappButton: 'Contact us on WhatsApp',
    paymentNote:
      'Your PRO subscription will be activated after the administration verifies your bank transfer.',
    currentSubscription: 'Your current subscription',
    startDate: 'Start:',
    expiration: 'Expiration:',
    notProvided: 'Not provided',
    notProvidedF: 'Not provided',
    footer: 'Learn. Practice. Succeed.',
    month: 'month',
    months: 'months',
    whatsapp: {
      greeting: 'Hello!',
      wish: 'I would like to subscribe to Deutsch-Erfolg PRO for',
      month: 'month(s)',
      price: 'at a price of',
      payment:
        'Please send me the bank transfer payment details.',
      thanks: 'Thank you!',
    },
  },

  ar: {
    back: 'العودة إلى فضائي',
    eyebrow: 'DEUTSCH-ERFOLG PREMIUM',
    heroTitle: 'انتقل إلى المستوى',
    heroDescription:
      'اكتشف الإمكانيات الكاملة لمنصة Deutsch-Erfolg واستعد لامتحانات اللغة الألمانية مع إمكانية الوصول الكامل إلى التمارين.',
    point1: 'الوصول إلى تمارين PRO',
    point2: 'التحضير لمستويي B1 وB2',
    point3: 'تقدم بلا حدود',
    loading: 'جارٍ تحميل اشتراكك...',
    errorAccount:
      'تعذر الوصول إلى حسابك. يرجى تسجيل الدخول مجدداً.',
    errorProfile:
      'تعذر تحميل معلومات اشتراكك.',
    subscription: 'اشتراكك',
    active: 'أنت عضو PRO',
    expired: 'انتهت صلاحية اشتراكك',
    free: 'أنت تستخدم النسخة المجانية',
    validUntil: 'اشتراكك صالح إلى غاية',
    chooseAgain: 'اختر إحدى الباقات لاستعادة جميع مزايا PRO.',
    choosePlan: 'اختر إحدى الباقات لفتح جميع التمارين.',
    daysRemaining: 'أيام متبقية',
    benefits: 'المميزات',
    preparation: 'تحضير أكثر شمولاً',
    benefitsDescription:
      'استفد من محتوى إضافي وتقدم حسب وتيرتك الخاصة.',
    lesenTitle: 'فهم المقروء',
    horenTitle: 'فهم المسموع',
    grammarTitle: 'القواعد والمفردات',
    productionTitle: 'الكتابة والتحدث',
    lesenDescription: 'فهم المقروء وتمارين إضافية.',
    horenDescription: 'التدرب على فهم المسموع.',
    grammarDescription: 'القواعد والمفردات في سياقها.',
    productionDescription:
      'التدرب على مهارات الكتابة والتحدث.',
    pricing: 'باقات الاشتراك',
    chooseSubscription: 'اختر اشتراكك',
    pricingDescription:
      'الدفع عن طريق التحويل البنكي مع تأكيد يدوي.',
    oneMonth: 'شهر واحد',
    threeMonths: '3 أشهر',
    twelveMonths: '12 شهراً',
    start: 'للبداية',
    progress: 'للتقدم بانتظام',
    exam: 'للاستعداد للامتحانات بثقة',
    popular: 'الأكثر اختياراً',
    selected: 'الباقة المختارة',
    chooseThis: 'اختر هذه الباقة',
    contact: 'التواصل والدفع',
    contactTitle: 'تواصل معنا عبر واتساب',
    contactDescription:
      'سنرسل إليك المعلومات اللازمة لإجراء التحويل البنكي.',
    summaryPlan: 'الباقة المختارة',
    amount: 'المبلغ المطلوب',
    whatsappButton: 'تواصل معنا عبر واتساب',
    paymentNote:
      'سيتم تفعيل اشتراك PRO بعد أن تقوم الإدارة بالتحقق من التحويل البنكي.',
    currentSubscription: 'اشتراكك الحالي',
    startDate: 'تاريخ البداية:',
    expiration: 'تاريخ الانتهاء:',
    notProvided: 'غير محدد',
    notProvidedF: 'غير محددة',
    footer: 'تعلم. تدرب. وحقق النجاح.',
    month: 'شهر',
    months: 'أشهر',
    whatsapp: {
      greeting: 'السلام عليكم!',
      wish: 'أرغب في الاشتراك في Deutsch-Erfolg PRO لمدة',
      month: 'أشهر',
      price: 'بمبلغ',
      payment:
        'يرجى إرسال معلومات الدفع عن طريق التحويل البنكي.',
      thanks: 'شكراً لكم!',
    },
  },
} satisfies Record<Language, Record<string, TranslationValue>>

function createWhatsAppMessage(
  language: Language,
  plan: Plan,
  studentName: string
) {
  const t = translations[language]
  const name = studentName.trim()

  if (language === 'ar') {
    return (
      `${t.whatsapp.greeting}${name ? ` أنا ${name}.` : ''}\n\n` +
      `${t.whatsapp.wish} ${plan.duration} ${
        plan.duration === 1 ? 'شهر' : t.whatsapp.month
      }، ` +
      `${t.whatsapp.price} ${plan.price} درهم.\n\n` +
      `${t.whatsapp.payment}\n\n${t.whatsapp.thanks}`
    )
  }

  if (language === 'de') {
    return (
      `${t.whatsapp.greeting}${name ? ` Mein Name ist ${name}.` : ''}\n\n` +
      `${t.whatsapp.wish} ${plan.duration} ${
        plan.duration === 1 ? 'Monat' : 'Monate'
      } ` +
      `${t.whatsapp.price} ${plan.price} DH abschließen.\n\n` +
      `${t.whatsapp.payment}\n\n${t.whatsapp.thanks}`
    )
  }

  if (language === 'en') {
    return (
      `${t.whatsapp.greeting}${name ? ` My name is ${name}.` : ''}\n\n` +
      `${t.whatsapp.wish} ${plan.duration} ${t.whatsapp.month} ` +
      `${t.whatsapp.price} ${plan.price} DH.\n\n` +
      `${t.whatsapp.payment}\n\n${t.whatsapp.thanks}`
    )
  }

  return (
    `${t.whatsapp.greeting}${name ? ` Je suis ${name}.` : ''}\n\n` +
    `${t.whatsapp.wish} ${plan.duration} ${t.whatsapp.month} (${plan.price} DH).\n\n` +
    `${t.whatsapp.payment}\n\n${t.whatsapp.thanks}`
  )
}

export default function ProPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string>('3-months')
  const [language, setLanguage] = useState<Language>('de')

  useEffect(() => {
    function updateLanguage() {
      const savedLanguage = localStorage.getItem(
        'deutsch_erfolg_language'
      )

      if (
        savedLanguage === 'fr' ||
        savedLanguage === 'ar' ||
        savedLanguage === 'de' ||
        savedLanguage === 'en'
      ) {
        setLanguage(savedLanguage)
      }
    }

    updateLanguage()

    window.addEventListener('storage', updateLanguage)
    const interval = window.setInterval(updateLanguage, 1000)

    return () => {
      window.removeEventListener('storage', updateLanguage)
      window.clearInterval(interval)
    }
  }, [])

  useEffect(() => {
    let cancelled = false

    async function loadProfile() {
      setLoading(true)
      setError('')

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (cancelled) return

      if (authError || !user) {
        setError(translations[language].errorAccount)
        setLoading(false)
        return
      }

      const { data, error: profileError } = await supabase
        .from('profiles')
        .select(
          'full_name, is_pro, pro_type, pro_started_at, pro_until'
        )
        .eq('id', user.id)
        .maybeSingle()

      if (cancelled) return

      if (profileError) {
        console.error('Erreur chargement profil PRO :', profileError)
        setError(translations[language].errorProfile)
      } else {
        setProfile(data as Profile | null)
      }

      setLoading(false)
    }

    loadProfile()

    return () => {
      cancelled = true
    }
  }, [language])

  const t = translations[language]

  const selected = plans.find(
    (plan) => plan.id === selectedPlan
  )

  const isProActive =
    profile?.is_pro === true &&
    !!profile?.pro_until &&
    new Date(profile.pro_until).getTime() > Date.now()

  const expired =
    profile?.is_pro === true &&
    !!profile?.pro_until &&
    new Date(profile.pro_until).getTime() <= Date.now()

  const remainingDays =
    isProActive && profile?.pro_until
      ? Math.max(
          0,
          Math.ceil(
            (new Date(profile.pro_until).getTime() - Date.now()) /
              (1000 * 60 * 60 * 24)
          )
        )
      : 0

  const whatsappUrl =
    selected && profile
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          createWhatsAppMessage(
            language,
            selected,
            profile.full_name || ''
          )
        )}`
      : ''

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString(
      language === 'ar'
        ? 'ar-MA'
        : language === 'de'
          ? 'de-DE'
          : language === 'en'
            ? 'en-GB'
            : 'fr-FR'
    )

  return (
    <main
      className="pro-page"
      dir={language === 'ar' ? 'rtl' : 'ltr'}
    >
      <div className="pro-container">
        <Link href="/espace-etudiant" className="pro-back">
          <ArrowLeft size={17} />
          {t.back}
        </Link>

        <section className="pro-hero">
          <div className="pro-hero-content">
            <div className="pro-eyebrow">
              <Sparkles size={15} />
              {t.eyebrow}
            </div>

            <h1>
              {t.heroTitle}
              <span> PRO.</span>
            </h1>

            <p>{t.heroDescription}</p>

            <div className="pro-hero-points">
              <span>
                <Check size={16} /> {t.point1}
              </span>
              <span>
                <Check size={16} /> {t.point2}
              </span>
              <span>
                <Check size={16} /> {t.point3}
              </span>
            </div>
          </div>

          <div className="pro-hero-icon">
            <Crown size={66} strokeWidth={1.35} />
            <span>PRO</span>
          </div>
        </section>

        {loading ? (
          <div className="pro-loading">
            <LoaderCircle size={25} className="pro-spinner" />
            {t.loading}
          </div>
        ) : error ? (
          <div className="pro-error">
            <ShieldCheck size={21} />
            {error}
          </div>
        ) : (
          <>
            <section className="pro-status">
              <div className="pro-status-icon">
                {isProActive ? (
                  <Crown size={25} />
                ) : (
                  <ShieldCheck size={25} />
                )}
              </div>

              <div className="pro-status-info">
                <span className="pro-label">
                  {t.subscription}
                </span>

                <h2>
                  {isProActive
                    ? t.active
                    : expired
                      ? t.expired
                      : t.free}
                </h2>

                <p>
                  {isProActive && profile?.pro_until
                    ? `${t.validUntil} ${formatDate(profile.pro_until)}.`
                    : expired
                      ? t.chooseAgain
                      : t.choosePlan}
                </p>
              </div>

              {isProActive && (
                <div className="pro-days">
                  <strong>{remainingDays}</strong>
                  <span>{t.daysRemaining}</span>
                </div>
              )}
            </section>

            <section className="pro-benefits">
              <div className="pro-section-heading">
                <span className="pro-label">
                  {t.benefits}
                </span>
                <h2>{t.preparation}</h2>
                <p>{t.benefitsDescription}</p>
              </div>

              <div className="pro-benefit-grid">
                <article className="pro-benefit">
                  <BookOpen size={25} />
                  <strong>{t.lesenTitle}</strong>
                  <span>{t.lesenDescription}</span>
                </article>

                <article className="pro-benefit">
                  <Headphones size={25} />
                  <strong>{t.horenTitle}</strong>
                  <span>{t.horenDescription}</span>
                </article>

                <article className="pro-benefit">
                  <PenLine size={25} />
                  <strong>{t.grammarTitle}</strong>
                  <span>{t.grammarDescription}</span>
                </article>

                <article className="pro-benefit">
                  <Mic size={25} />
                  <strong>{t.productionTitle}</strong>
                  <span>{t.productionDescription}</span>
                </article>
              </div>
            </section>

            <section className="pro-pricing">
              <div className="pro-section-heading">
                <span className="pro-label">
                  {t.pricing}
                </span>
                <h2>{t.chooseSubscription}</h2>
                <p>{t.pricingDescription}</p>
              </div>

              <div className="pro-plans">
                {plans.map((plan) => {
                  const active = selectedPlan === plan.id

                  const planName =
                    plan.duration === 1
                      ? t.oneMonth
                      : plan.duration === 3
                        ? t.threeMonths
                        : t.twelveMonths

                  const description =
                    plan.duration === 1
                      ? t.start
                      : plan.duration === 3
                        ? t.progress
                        : t.exam

                  return (
                    <button
                      type="button"
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`pro-plan ${active ? 'selected' : ''} ${
                        plan.popular ? 'popular' : ''
                      }`}
                    >
                      {plan.popular && (
                        <span className="pro-popular">
                          {t.popular}
                        </span>
                      )}

                      <span className="pro-plan-name">
                        {planName}
                      </span>

                      <span className="pro-plan-price">
                        {plan.price}
                        <small> DH</small>
                      </span>

                      <span className="pro-plan-description">
                        {description}
                      </span>

                      <span className="pro-plan-selection">
                        {active ? (
                          <>
                            <Check size={15} /> {t.selected}
                          </>
                        ) : (
                          t.chooseThis
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="pro-contact-box">
                <div className="pro-contact-heading">
                  <div>
                    <span className="pro-label">
                      {t.contact}
                    </span>
                    <h2>{t.contactTitle}</h2>
                    <p>{t.contactDescription}</p>
                  </div>

                  <div className="pro-whatsapp-icon">
                    <MessageCircle size={28} />
                  </div>
                </div>

                <div className="pro-order-summary">
                  <div>
                    <span>{t.summaryPlan}</span>
                    <strong>
                      {selected?.duration === 1
                        ? t.oneMonth
                        : selected?.duration === 3
                          ? t.threeMonths
                          : t.twelveMonths}
                    </strong>
                  </div>

                  <div>
                    <span>{t.amount}</span>
                    <strong className="pro-order-price">
                      {selected?.price} DH
                    </strong>
                  </div>
                </div>

                {selected && (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pro-whatsapp-button"
                  >
                    <MessageCircle size={21} />
                    {t.whatsappButton}
                  </a>
                )}

                <div className="pro-payment-note">
                  <ShieldCheck size={17} />
                  <span>{t.paymentNote}</span>
                </div>
              </div>
            </section>

            {isProActive && (
              <section className="pro-current-subscription">
                <CalendarDays size={20} />
                <div>
                  <strong>{t.currentSubscription}</strong>
                  <p>
                    {t.startDate}{' '}
                    {profile?.pro_started_at
                      ? formatDate(profile.pro_started_at)
                      : t.notProvided}
                    {' · '}
                    {t.expiration}{' '}
                    {profile?.pro_until
                      ? formatDate(profile.pro_until)
                      : t.notProvidedF}
                  </p>
                </div>
              </section>
            )}
          </>
        )}

        <footer className="pro-footer">
          <Crown size={17} />
          Deutsch-Erfolg PRO · {t.footer}
        </footer>
      </div>

      <style jsx global>{`
        .pro-page {
          min-height: 100vh;
          background: #f5f7fb;
          padding: 38px 22px 60px;
          color: #17233c;
        }

        .pro-container {
          max-width: 1120px;
          margin: 0 auto;
        }

        .pro-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #64748b;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 24px;
        }

        .pro-back:hover {
          color: #bd954b;
        }

        .pro-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 48px 55px;
          border-radius: 24px;
          background: linear-gradient(120deg, #101d36, #1c3154);
          color: white;
          box-shadow: 0 16px 40px rgba(15, 29, 54, .12);
        }

        .pro-hero::after {
          content: '';
          position: absolute;
          width: 360px;
          height: 360px;
          right: 90px;
          top: -230px;
          border-radius: 50%;
          border: 1px solid rgba(214, 174, 103, .18);
          box-shadow: 0 0 0 35px rgba(214, 174, 103, .035),
                      0 0 0 70px rgba(214, 174, 103, .025);
        }

        .pro-hero-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
        }

        .pro-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e2bd79;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 2px;
          margin-bottom: 17px;
        }

        .pro-hero h1 {
          margin: 0;
          font-size: clamp(34px, 5vw, 53px);
          line-height: 1.12;
          letter-spacing: -1.8px;
          font-weight: 800;
        }

        .pro-hero h1 span {
          color: #e2bd79;
        }

        .pro-hero-content > p {
          color: #c3cede;
          font-size: 15px;
          line-height: 1.8;
          max-width: 560px;
          margin: 17px 0 23px;
        }

        .pro-hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
        }

        .pro-hero-points span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #edf2f8;
          font-size: 12px;
          font-weight: 600;
        }

        .pro-hero-points svg {
          color: #e2bd79;
        }

        .pro-hero-icon {
          position: relative;
          z-index: 1;
          width: 150px;
          height: 150px;
          flex-shrink: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 5px;
          border: 1px solid rgba(226, 189, 121, .42);
          border-radius: 50%;
          color: #e2bd79;
          background: rgba(255, 255, 255, .045);
        }

        .pro-hero-icon span {
          font-size: 14px;
          font-weight: 900;
          letter-spacing: 4px;
        }

        .pro-status {
          display: flex;
          align-items: center;
          gap: 17px;
          padding: 23px 26px;
          margin-top: 24px;
          background: white;
          border: 1px solid #e8edf4;
          border-radius: 17px;
        }

        .pro-status-icon {
          width: 52px;
          height: 52px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;
          background: #fff7e8;
          color: #b8893e;
        }

        .pro-status-info {
          flex: 1;
          min-width: 0;
        }

        .pro-label {
          display: block;
          color: #b38a4b;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .pro-status h2 {
          font-size: 18px;
          margin: 5px 0;
          color: #17233c;
        }

        .pro-status p {
          color: #718096;
          font-size: 13px;
          margin: 0;
          line-height: 1.6;
        }

        .pro-days {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-inline-start: 24px;
          border-inline-start: 1px solid #e8edf4;
        }

        .pro-days strong {
          color: #b8893e;
          font-size: 27px;
        }

        .pro-days span {
          color: #718096;
          font-size: 11px;
        }

        .pro-benefits,
        .pro-pricing {
          margin-top: 55px;
        }

        .pro-section-heading {
          text-align: center;
          margin-bottom: 25px;
        }

        .pro-section-heading h2 {
          margin: 9px 0;
          color: #17233c;
          font-size: 27px;
          letter-spacing: -.6px;
        }

        .pro-section-heading p {
          color: #7b8799;
          font-size: 14px;
          margin: 0;
        }

        .pro-benefit-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .pro-benefit {
          display: flex;
          flex-direction: column;
          gap: 11px;
          padding: 23px 19px;
          background: white;
          border: 1px solid #e8edf4;
          border-radius: 16px;
        }

        .pro-benefit svg {
          color: #b8893e;
        }

        .pro-benefit strong {
          color: #17233c;
          font-size: 14px;
        }

        .pro-benefit span {
          color: #7b8799;
          font-size: 12px;
          line-height: 1.65;
        }

        .pro-plans {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          align-items: stretch;
        }

        .pro-plan {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: start;
          min-width: 0;
          padding: 28px 24px 22px;
          border: 2px solid #e5eaf1;
          border-radius: 17px;
          background: white;
          cursor: pointer;
          color: #17233c;
          transition: .2s ease;
        }

        .pro-plan:hover {
          transform: translateY(-3px);
          border-color: #c7a66d;
        }

        .pro-plan.selected {
          border-color: #bd954b;
          box-shadow: 0 8px 25px rgba(189, 149, 75, .12);
        }

        .pro-plan.popular {
          border-color: #d7bc8d;
        }

        .pro-popular {
          position: absolute;
          top: -12px;
          inset-inline-start: 20px;
          padding: 5px 11px;
          border-radius: 20px;
          background: #b8893e;
          color: white;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .pro-plan-name {
          color: #64748b;
          font-size: 14px;
          font-weight: 700;
        }

        .pro-plan-price {
          display: block;
          margin: 14px 0 8px;
          color: #17233c;
          font-size: 39px;
          font-weight: 850;
          letter-spacing: -1.5px;
        }

        .pro-plan-price small {
          font-size: 15px;
          letter-spacing: 0;
          font-weight: 700;
        }

        .pro-plan-description {
          color: #8490a1;
          font-size: 12px;
          min-height: 19px;
        }

        .pro-plan-selection {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 22px;
          color: #9b783e;
          font-size: 12px;
          font-weight: 750;
        }

        .pro-contact-box {
          margin-top: 28px;
          padding: 30px;
          border: 1px solid #e7eaf0;
          border-radius: 19px;
          background: white;
        }

        .pro-contact-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .pro-contact-heading h2 {
          color: #17233c;
          font-size: 21px;
          margin: 8px 0;
        }

        .pro-contact-heading p {
          max-width: 650px;
          color: #7b8799;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .pro-whatsapp-icon {
          width: 54px;
          height: 54px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          color: #168b57;
          background: #eaf8f0;
          border-radius: 16px;
        }

        .pro-order-summary {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          margin-top: 22px;
          padding: 17px 19px;
          background: #f7f8fb;
          border-radius: 12px;
        }

        .pro-order-summary div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .pro-order-summary span {
          color: #8490a1;
          font-size: 11px;
        }

        .pro-order-summary strong {
          color: #17233c;
          font-size: 14px;
        }

        .pro-order-summary .pro-order-price {
          color: #a77e3b;
          font-size: 19px;
        }

        .pro-whatsapp-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 18px;
          padding: 16px 20px;
          border-radius: 11px;
          background: #168b57;
          color: white;
          text-decoration: none;
          font-size: 14px;
          font-weight: 800;
          transition: .2s ease;
        }

        .pro-whatsapp-button:hover {
          background: #117448;
          transform: translateY(-1px);
        }

        .pro-payment-note {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 16px;
          color: #78869a;
          font-size: 11px;
          line-height: 1.6;
        }

        .pro-payment-note svg {
          flex-shrink: 0;
          color: #b8893e;
        }

        .pro-current-subscription {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-top: 23px;
          padding: 19px 22px;
          background: #fffaf0;
          border: 1px solid #f0e3c9;
          border-radius: 13px;
          color: #a77e3b;
        }

        .pro-current-subscription strong {
          color: #34445c;
          font-size: 13px;
        }

        .pro-current-subscription p {
          margin: 5px 0 0;
          color: #7b8799;
          font-size: 12px;
        }

        .pro-loading,
        .pro-error {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-top: 30px;
          padding: 30px;
          background: white;
          border-radius: 15px;
          color: #64748b;
          font-size: 14px;
        }

        .pro-error {
          color: #b42318;
        }

        .pro-spinner {
          animation: pro-spin 1s linear infinite;
        }

        @keyframes pro-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .pro-footer {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin-top: 45px;
          color: #929dad;
          font-size: 11px;
        }

        .pro-footer svg {
          color: #bd954b;
        }

        @media (max-width: 800px) {
          .pro-hero {
            padding: 37px 30px;
          }

          .pro-hero-icon {
            width: 115px;
            height: 115px;
          }

          .pro-hero-icon svg {
            width: 49px;
          }

          .pro-benefit-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .pro-page {
            padding: 23px 14px 40px;
          }

          .pro-hero {
            padding: 30px 23px;
          }

          .pro-hero-icon {
            display: none;
          }

          .pro-hero h1 {
            font-size: 37px;
          }

          .pro-hero-points {
            flex-direction: column;
            gap: 10px;
          }

          .pro-status {
            align-items: flex-start;
            padding: 18px;
          }

          .pro-days {
            padding-inline-start: 13px;
          }

          .pro-days strong {
            font-size: 23px;
          }

          .pro-status h2 {
            font-size: 15px;
          }

          .pro-benefits,
          .pro-pricing {
            margin-top: 42px;
          }

          .pro-section-heading h2 {
            font-size: 23px;
          }

          .pro-benefit-grid {
            gap: 10px;
          }

          .pro-benefit {
            padding: 17px 14px;
          }

          .pro-plans {
            grid-template-columns: 1fr;
            gap: 17px;
          }

          .pro-plan {
            padding: 23px 20px 19px;
          }

          .pro-plan-price {
            font-size: 34px;
            margin: 9px 0 5px;
          }

          .pro-plan-selection {
            margin-top: 13px;
          }

          .pro-contact-box {
            padding: 21px 17px;
          }

          .pro-contact-heading h2 {
            font-size: 18px;
          }

          .pro-whatsapp-icon {
            width: 43px;
            height: 43px;
          }

          .pro-order-summary {
            padding: 14px;
          }

          .pro-footer {
            text-align: center;
            line-height: 1.6;
          }
        }

        [dir="rtl"] .pro-hero {
          text-align: right;
        }

        [dir="rtl"] .pro-hero-points {
          justify-content: flex-start;
        }

        [dir="rtl"] .pro-contact-heading {
          text-align: right;
        }

        [dir="rtl"] .pro-status-info {
          text-align: right;
        }

        [dir="rtl"] .pro-section-heading {
          direction: rtl;
        }

        [dir="rtl"] .pro-benefit {
          text-align: right;
        }

        [dir="rtl"] .pro-current-subscription {
          text-align: right;
        }

        [dir="rtl"] .pro-payment-note {
          text-align: right;
        }
      `}</style>
    </main>
  )
}

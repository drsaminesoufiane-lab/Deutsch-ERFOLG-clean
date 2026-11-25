
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  Crown,
  Check,
  ShieldCheck,
  MessageCircle,
  Clock,
  ArrowLeft,
  LoaderCircle,
  Sparkles,
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Languages,
  CalendarDays,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Plan = {
  id: string
  name: string
  duration: number
  price: number
  description: string
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

const WHATSAPP_NUMBER = '212775737443'

const plans: Plan[] = [
  {
    id: '1-month',
    name: '1 mois',
    duration: 1,
    price: 59,
    description: 'Pour commencer',
  },
  {
    id: '3-months',
    name: '3 mois',
    duration: 3,
    price: 129,
    description: 'Pour progresser régulièrement',
    popular: true,
  },
  {
    id: '12-months',
    name: '12 mois',
    duration: 12,
    price: 499,
    description: 'Pour préparer vos examens sereinement',
  },
]

const languageNames: Record<Language, string> = {
  fr: 'Français',
  ar: 'العربية',
  de: 'Deutsch',
  en: 'English',
}

function createWhatsAppMessage(
  language: Language,
  plan: Plan,
  studentName: string
) {
  const name = studentName.trim()

  const messages: Record<Language, string> = {
    fr:
      `Bonjour !${name ? ` Je suis ${name}.` : ''}\n\n` +
      `Je souhaite souscrire à Deutsch-Erfolg PRO pour ${plan.duration} ${plan.duration > 1 ? 'mois' : 'mois'} (${plan.price} DH).\n\n` +
      `Merci de m'indiquer les modalités de paiement par virement bancaire.\n\n` +
      `Merci !`,

    ar:
      `السلام عليكم!${name ? ` أنا ${name}.` : ''}\n\n` +
      `أرغب في الاشتراك في Deutsch-Erfolg PRO لمدة ${plan.duration} ${plan.duration === 1 ? 'شهر' : 'أشهر'}، بمبلغ ${plan.price} درهم.\n\n` +
      `يرجى إرسال معلومات الدفع عن طريق التحويل البنكي.\n\n` +
      `شكراً لكم!`,

    de:
      `Guten Tag!${name ? ` Mein Name ist ${name}.` : ''}\n\n` +
      `Ich möchte das Deutsch-Erfolg PRO-Abonnement für ${plan.duration} ${plan.duration === 1 ? 'Monat' : 'Monate'} zum Preis von ${plan.price} DH abschließen.\n\n` +
      `Bitte teilen Sie mir die Zahlungsinformationen für die Banküberweisung mit.\n\n` +
      `Vielen Dank!`,

    en:
      `Hello!${name ? ` My name is ${name}.` : ''}\n\n` +
      `I would like to subscribe to Deutsch-Erfolg PRO for ${plan.duration} month(s) at ${plan.price} DH.\n\n` +
      `Please send me the bank transfer payment details.\n\n` +
      `Thank you!`,
  }

  return messages[language]
}

export default function ProPage() {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [selectedPlan, setSelectedPlan] = useState<string>('3-months')
  const [language, setLanguage] = useState<Language>('fr')

  useEffect(() => {
    async function loadProfile() {
      setLoading(true)
      setError('')

      const {
        data: { user },
        error: authError,
      } = await supabase.auth.getUser()

      if (authError || !user) {
        setError('Impossible de récupérer votre compte. Veuillez vous reconnecter.')
        setLoading(false)
        return
      }

      const { data, error: profileError } = await supabase
        .from('profiles')
        .select('full_name, is_pro, pro_type, pro_started_at, pro_until')
        .eq('id', user.id)
        .maybeSingle()

      if (profileError) {
        console.error('Erreur chargement profil PRO :', profileError)
        setError('Impossible de charger les informations de votre abonnement.')
      } else {
        setProfile(data as Profile | null)
      }

      setLoading(false)
    }

    loadProfile()
  }, [])

  const selected = plans.find((plan) => plan.id === selectedPlan)

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

  return (
    <main className="pro-page">
      <div className="pro-container">

        <Link href="/espace-etudiant" className="pro-back">
          <ArrowLeft size={17} />
          Retour à mon espace
        </Link>

        <section className="pro-hero">
          <div className="pro-hero-content">
            <div className="pro-eyebrow">
              <Sparkles size={15} />
              DEUTSCH-ERFOLG PREMIUM
            </div>

            <h1>
              Passez au niveau
              <span> PRO.</span>
            </h1>

            <p>
              Débloquez tout le potentiel de Deutsch-Erfolg et préparez
              vos examens d'allemand avec un accès complet aux exercices.
            </p>

            <div className="pro-hero-points">
              <span><Check size={16} /> Accès aux exercices PRO</span>
              <span><Check size={16} /> Préparation B1 et B2</span>
              <span><Check size={16} /> Progression sans limites</span>
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
            Chargement de votre abonnement...
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
                {isProActive ? <Crown size={25} /> : <ShieldCheck size={25} />}
              </div>

              <div className="pro-status-info">
                <span className="pro-label">VOTRE ABONNEMENT</span>
                <h2>
                  {isProActive
                    ? 'Vous êtes membre PRO'
                    : expired
                      ? 'Votre abonnement a expiré'
                      : 'Vous utilisez la version gratuite'}
                </h2>

                <p>
                  {isProActive && profile?.pro_until
                    ? `Votre abonnement est valable jusqu'au ${new Date(
                        profile.pro_until
                      ).toLocaleDateString('fr-FR')}.`
                    : expired
                      ? 'Choisissez une formule pour retrouver tous vos accès PRO.'
                      : 'Choisissez une formule pour débloquer tous les exercices.'}
                </p>
              </div>

              {isProActive && (
                <div className="pro-days">
                  <strong>{remainingDays}</strong>
                  <span>jours restants</span>
                </div>
              )}
            </section>

            <section className="pro-benefits">
              <div className="pro-section-heading">
                <span className="pro-label">LES AVANTAGES</span>
                <h2>Une préparation plus complète</h2>
                <p>Accédez à davantage de contenu pour progresser à votre rythme.</p>
              </div>

              <div className="pro-benefit-grid">
                <article className="pro-benefit">
                  <BookOpen size={25} />
                  <strong>Lesen</strong>
                  <span>Compréhension écrite et exercices supplémentaires.</span>
                </article>

                <article className="pro-benefit">
                  <Headphones size={25} />
                  <strong>Hören</strong>
                  <span>Entraînement à la compréhension orale.</span>
                </article>

                <article className="pro-benefit">
                  <PenLine size={25} />
                  <strong>Sprachbausteine</strong>
                  <span>Grammaire et vocabulaire en contexte.</span>
                </article>

                <article className="pro-benefit">
                  <Mic size={25} />
                  <strong>Schreiben & Sprechen</strong>
                  <span>Entraînement aux compétences de production.</span>
                </article>
              </div>
            </section>

            <section className="pro-pricing">
              <div className="pro-section-heading">
                <span className="pro-label">NOS FORMULES</span>
                <h2>Choisissez votre abonnement</h2>
                <p>Un paiement par virement bancaire, avec validation manuelle.</p>
              </div>

              <div className="pro-plans">
                {plans.map((plan) => {
                  const active = selectedPlan === plan.id

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
                        <span className="pro-popular">LE PLUS CHOISI</span>
                      )}

                      <span className="pro-plan-name">{plan.name}</span>
                      <span className="pro-plan-price">
                        {plan.price}
                        <small> DH</small>
                      </span>
                      <span className="pro-plan-description">
                        {plan.description}
                      </span>

                      <span className="pro-plan-selection">
                        {active ? (
                          <>
                            <Check size={15} /> Formule sélectionnée
                          </>
                        ) : (
                          'Choisir cette formule'
                        )}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className="pro-contact-box">
                <div className="pro-contact-heading">
                  <div>
                    <span className="pro-label">CONTACT & PAIEMENT</span>
                    <h2>Contactez-nous sur WhatsApp</h2>
                    <p>
                      Choisissez la langue de votre message. Nous vous
                      communiquerons les informations nécessaires au virement.
                    </p>
                  </div>
                  <div className="pro-whatsapp-icon">
                    <MessageCircle size={28} />
                  </div>
                </div>

                <div className="pro-language">
                  <label htmlFor="pro-language">
                    <Languages size={17} />
                    Langue du message WhatsApp
                  </label>

                  <select
                    id="pro-language"
                    value={language}
                    onChange={(e) =>
                      setLanguage(e.target.value as Language)
                    }
                  >
                    <option value="fr">🇫🇷 Français</option>
                    <option value="ar">🇲🇦 العربية</option>
                    <option value="de">🇩🇪 Deutsch</option>
                    <option value="en">🇬🇧 English</option>
                  </select>
                </div>

                <div className="pro-order-summary">
                  <div>
                    <span>Formule choisie</span>
                    <strong>{selected?.name}</strong>
                  </div>
                  <div>
                    <span>Montant à payer</span>
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
                    Contacter sur WhatsApp
                  </a>
                )}

                <div className="pro-payment-note">
                  <ShieldCheck size={17} />
                  <span>
                    Votre abonnement PRO sera activé après vérification
                    du virement par l'administration.
                  </span>
                </div>
              </div>
            </section>

            {isProActive && (
              <section className="pro-current-subscription">
                <CalendarDays size={20} />
                <div>
                  <strong>Votre abonnement actuel</strong>
                  <p>
                    Début :{' '}
                    {profile?.pro_started_at
                      ? new Date(profile.pro_started_at).toLocaleDateString('fr-FR')
                      : 'Non renseigné'}
                    {' · '}
                    Expiration :{' '}
                    {profile?.pro_until
                      ? new Date(profile.pro_until).toLocaleDateString('fr-FR')
                      : 'Non renseignée'}
                  </p>
                </div>
              </section>
            )}
          </>
        )}

        <footer className="pro-footer">
          <Crown size={17} />
          Deutsch-Erfolg PRO · Apprenez. Entraînez-vous. Réussissez.
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
          padding-left: 24px;
          border-left: 1px solid #e8edf4;
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
          text-align: left;
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
          left: 20px;
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

        .pro-language {
          margin-top: 25px;
        }

        .pro-language label {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #34445c;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 9px;
        }

        .pro-language label svg {
          color: #b8893e;
        }

        .pro-language select {
          width: 100%;
          max-width: 380px;
          padding: 12px 14px;
          color: #17233c;
          background: #f8fafc;
          border: 1px solid #dce3ed;
          border-radius: 10px;
          font-size: 14px;
          outline: none;
        }

        .pro-language select:focus {
          border-color: #bd954b;
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
          to { transform: rotate(360deg); }
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
            padding-left: 13px;
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
      `}</style>
    </main>
  )
}

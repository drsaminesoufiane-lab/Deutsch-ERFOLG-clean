
'use client'

// DE_AUTH_FLOATING_LANGUAGE_V1
import FloatingPageTools from '@/components/student/FloatingPageTools'
import { useLanguage } from '@/contexts/LanguageContext'

import GoogleAuthButton from '@/components/auth/GoogleAuthButton'

import { useEffect, useState } from 'react'
import EmailConfirmation, { type ConfirmationStatus } from '@/components/auth/EmailConfirmation'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  Headphones,
  PenTool,
  Eye,
  EyeOff,
} from 'lucide-react'


const traductions = {
  fr: {
    langue: 'Langue',
    accroche: 'VOTRE RÉUSSITE COMMENCE ICI',
    titre1: "Maîtrisez l'allemand.",
    titre2: 'Réussissez votre TELC.',
    description: 'Une préparation structurée et efficace pour atteindre vos objectifs en allemand avec Deutsch Erfolg.',
    lesen: 'Lire',
    hoeren: 'Écouter',
    schreiben: 'Écrire',
    sprechen: 'Parler',
    footer: 'Votre espace personnel de préparation TELC B1 & B2',
    espace: 'ESPACE PERSONNEL',
    bienvenue: 'Heureux de vous revoir.',
    intro: 'Connectez-vous pour continuer votre préparation.',
    email: 'Adresse e-mail',
    emailPlaceholder: 'votre@email.com',
    password: 'Mot de passe',
    passwordPlaceholder: 'Votre mot de passe',
    afficher: 'Afficher ou masquer le mot de passe',
    seSouvenir: 'Se souvenir de moi',
    connecter: 'Se connecter',
    connexion: 'Connexion en cours...',
    pasCompte: "Vous n'avez pas encore de compte ?",
    creerCompte: 'Créer un compte',
    erreurConnexion: 'Adresse e-mail ou mot de passe incorrect.',
    erreurVerification: 'Impossible de vérifier votre compte.',
    erreurProfil: 'Impossible de récupérer votre profil.',
    erreurAppareil: "Impossible d'enregistrer cet appareil. Veuillez réessayer.",
    erreurIdentification: "Impossible d'identifier cet appareil. Veuillez réessayer.",
    droits: 'Tous droits réservés',
  },

  de: {
    langue: 'Sprache',
    accroche: 'DEIN ERFOLG BEGINNT HIER',
    titre1: 'Meistere Deutsch.',
    titre2: 'Bestehe deine TELC-Prüfung.',
    description: 'Eine strukturierte und effektive Vorbereitung, damit du deine Deutschziele mit Deutsch Erfolg erreichst.',
    lesen: 'Lesen',
    hoeren: 'Hören',
    schreiben: 'Schreiben',
    sprechen: 'Sprechen',
    footer: 'Dein persönlicher Vorbereitungsbereich für TELC B1 & B2',
    espace: 'PERSÖNLICHER BEREICH',
    bienvenue: 'Schön, dass du wieder da bist.',
    intro: 'Melde dich an, um mit deiner Vorbereitung fortzufahren.',
    email: 'E-Mail-Adresse',
    emailPlaceholder: 'deine@email.com',
    password: 'Passwort',
    passwordPlaceholder: 'Dein Passwort',
    afficher: 'Passwort anzeigen oder verbergen',
    seSouvenir: 'Angemeldet bleiben',
    connecter: 'Anmelden',
    connexion: 'Anmeldung läuft...',
    pasCompte: 'Du hast noch kein Konto?',
    creerCompte: 'Konto erstellen',
    erreurConnexion: 'Falsche E-Mail-Adresse oder falsches Passwort.',
    erreurVerification: 'Dein Konto konnte nicht überprüft werden.',
    erreurProfil: 'Dein Profil konnte nicht abgerufen werden.',
    erreurAppareil: 'Dieses Gerät konnte nicht registriert werden. Bitte versuche es erneut.',
    erreurIdentification: 'Dieses Gerät konnte nicht identifiziert werden. Bitte versuche es erneut.',
    droits: 'Alle Rechte vorbehalten',
  },

  ar: {
    langue: 'اللغة',
    accroche: 'نجاحك يبدأ من هنا',
    titre1: 'أتقن اللغة الألمانية.',
    titre2: 'واجتز امتحان TELC بنجاح.',
    description: 'تحضير منظم وفعال لمساعدتك على تحقيق أهدافك في اللغة الألمانية مع Deutsch Erfolg.',
    lesen: 'القراءة',
    hoeren: 'الاستماع',
    schreiben: 'الكتابة',
    sprechen: 'المحادثة',
    footer: 'فضاؤك الشخصي للتحضير لامتحان TELC B1 و B2',
    espace: 'الفضاء الشخصي',
    bienvenue: 'سعداء بعودتك.',
    intro: 'سجل الدخول لمتابعة التحضير.',
    email: 'البريد الإلكتروني',
    emailPlaceholder: 'votre@email.com',
    password: 'كلمة المرور',
    passwordPlaceholder: 'كلمة المرور الخاصة بك',
    afficher: 'إظهار أو إخفاء كلمة المرور',
    seSouvenir: 'تذكرني',
    connecter: 'تسجيل الدخول',
    connexion: 'جارٍ تسجيل الدخول...',
    pasCompte: 'ليس لديك حساب بعد؟',
    creerCompte: 'إنشاء حساب',
    erreurConnexion: 'البريد الإلكتروني أو كلمة المرور غير صحيحة.',
    erreurVerification: 'تعذر التحقق من حسابك.',
    erreurProfil: 'تعذر استرجاع ملفك الشخصي.',
    erreurAppareil: 'تعذر تسجيل هذا الجهاز. يرجى المحاولة مرة أخرى.',
    erreurIdentification: 'تعذر التعرف على هذا الجهاز. يرجى المحاولة مرة أخرى.',
    droits: 'جميع الحقوق محفوظة',
  },

  en: {
    langue: 'Language',
    accroche: 'YOUR SUCCESS STARTS HERE',
    titre1: 'Master German.',
    titre2: 'Pass your TELC exam.',
    description: 'A structured and effective preparation to help you achieve your German language goals with Deutsch Erfolg.',
    lesen: 'Reading',
    hoeren: 'Listening',
    schreiben: 'Writing',
    sprechen: 'Speaking',
    footer: 'Your personal TELC B1 & B2 preparation space',
    espace: 'PERSONAL SPACE',
    bienvenue: 'Welcome back.',
    intro: 'Log in to continue your preparation.',
    email: 'Email address',
    emailPlaceholder: 'your@email.com',
    password: 'Password',
    passwordPlaceholder: 'Your password',
    afficher: 'Show or hide password',
    seSouvenir: 'Remember me',
    connecter: 'Log in',
    connexion: 'Logging in...',
    pasCompte: "Don't have an account yet?",
    creerCompte: 'Create an account',
    erreurConnexion: 'Incorrect email address or password.',
    erreurVerification: 'Unable to verify your account.',
    erreurProfil: 'Unable to retrieve your profile.',
    erreurAppareil: 'Unable to register this device. Please try again.',
    erreurIdentification: 'Unable to identify this device. Please try again.',
    droits: 'All rights reserved',
  },
}

/* DE_AUTH_BLUE_PANEL_V1 */
const deAuthBlueCopy = {
  "fr": {
    "tag": "APPRENDRE L\u2019ALLEMAND",
    "title": "Ton avenir commence ici.",
    "desc": "Apprends l\u2019allemand du niveau A1 au niveau B2, avec des cours, des exercices et un suivi de ta progression.",
    "levels": "Niveaux"
  },
  "de": {
    "tag": "DEUTSCH LERNEN",
    "title": "Deine Zukunft beginnt hier.",
    "desc": "Lerne Deutsch von A1 bis B2 mit Kursen, \u00dcbungen und einer pers\u00f6nlichen Fortschritts\u00fcbersicht.",
    "levels": "Niveaus"
  },
  "en": {
    "tag": "LEARN GERMAN",
    "title": "Your future starts here.",
    "desc": "Learn German from A1 to B2 with lessons, exercises and progress tracking.",
    "levels": "Levels"
  },
  "ar": {
    "tag": "\u062a\u0639\u0644\u0645 \u0627\u0644\u0644\u063a\u0629 \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064a\u0629",
    "title": "\u0645\u0633\u062a\u0642\u0628\u0644\u0643 \u064a\u0628\u062f\u0623 \u0645\u0646 \u0647\u0646\u0627.",
    "desc": "\u062a\u0639\u0644\u0645 \u0627\u0644\u0623\u0644\u0645\u0627\u0646\u064a\u0629 \u0645\u0646 \u0627\u0644\u0645\u0633\u062a\u0648\u0649 A1 \u0625\u0644\u0649 B2 \u0645\u0639 \u0627\u0644\u062f\u0631\u0648\u0633 \u0648\u0627\u0644\u062a\u0645\u0627\u0631\u064a\u0646 \u0648\u062a\u062a\u0628\u0639 \u062a\u0642\u062f\u0645\u0643.",
    "levels": "\u0627\u0644\u0645\u0633\u062a\u0648\u064a\u0627\u062a"
  }
}

export default function ConnexionPage() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(true)
  const { language: lang } = useLanguage()

  const t = traductions[lang]
  // DE_EMAIL_CONFIRMATION_V2: read the result returned by the email endpoint.
  const [confirmation, setConfirmation] = useState<ConfirmationStatus | null>(null)
  useEffect(() => {
    const url = new URL(window.location.href)
    const status = url.searchParams.get('status')
    const hash = new URLSearchParams(url.hash.slice(1))
    if (status === 'error' || url.searchParams.get('error_code') === 'otp_expired' || hash.get('error_code') === 'otp_expired') {
      setConfirmation('error')
    } else if (status === 'success') {
      setConfirmation('success')
    }
  }, [])

  function continueToLogin() {
    // Remove expired tokens and status from the address, without changing authentication.
    window.history.replaceState(null, '', '/connexion')
    setConfirmation(null)
    setMessage('')
    setPassword('')
  }

  async function connecter(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setMessage('')

    // Définit le mode de stockage de la session avant la connexion
    try {
      sessionStorage.setItem(
        'deutsch_erfolg_remember_me',
        rememberMe ? 'true' : 'false'
      )
    } catch {
      setMessage(t.erreurIdentification)
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      if (error.code === 'email_not_confirmed') {
        setConfirmation('pending')
        setLoading(false)
        return
      }
      setMessage(t.erreurConnexion)
      setLoading(false)
      return
    }

    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      setMessage(t.erreurVerification)
      setLoading(false)
      return
    }

    const { data: profile, error: profileError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profileError) {
      setMessage(t.erreurProfil)
      setLoading(false)
      return
    }

    // Enregistrement de l'appareil uniquement pour les étudiants
    if (profile.role === 'student') {
      try {
        let deviceId = localStorage.getItem('deutsch_erfolg_device_id')

        if (!deviceId) {
          deviceId = crypto.randomUUID()
          localStorage.setItem('deutsch_erfolg_device_id', deviceId)
        }

        const deviceName = navigator.userAgent.slice(0, 180)

        const { error: deviceError } = await supabase.rpc(
          'register_student_device',
          {
            p_device_id: deviceId,
            p_device_name: deviceName,
          }
        )

        if (deviceError) {
          await supabase.auth.signOut({ scope: 'local' })
          setMessage(t.erreurAppareil)
          setLoading(false)
          return
        }

        const secure =
          window.location.protocol === 'https:' ? '; Secure' : ''

        document.cookie =
          `deutsch_erfolg_device_id=${encodeURIComponent(deviceId)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
      } catch {
        await supabase.auth.signOut({ scope: 'local' })
        setMessage(t.erreurIdentification)
        setLoading(false)
        return
      }
    }

    setLoading(false)

    router.replace(
      profile.role === 'admin'
        ? '/administration'
        : '/espace-etudiant'
    )

    router.refresh()
  }

  if (confirmation) {
    return <EmailConfirmation status={confirmation} language={lang} initialEmail={email} onContinue={continueToLogin} />
  }

  return (
    <>
    <main
      className="login-page"
      dir={lang === 'ar' ? 'rtl' : 'ltr'}
    >
      <section className="login-visual">
        <Link href="/" className="login-brand">
          <span className="login-brand-icon">
            <GraduationCap size={27} />
          </span>
          <span>Deutsch <b>Erfolg</b></span>
        </Link>

        <div className="login-visual-content">
          <div className="login-kicker">{(deAuthBlueCopy[lang as keyof typeof deAuthBlueCopy] || deAuthBlueCopy.de).tag}</div>

          <h1>{(deAuthBlueCopy[lang as keyof typeof deAuthBlueCopy] || deAuthBlueCopy.de).title}</h1>

          <p>{(deAuthBlueCopy[lang as keyof typeof deAuthBlueCopy] || deAuthBlueCopy.de).desc}</p>
          <div className="de-auth-blue-levels" dir="ltr" style={{display:'flex',flexWrap:'wrap',gap:8,marginTop:24}}>
            {['A1','A2','B1','B2'].map(level => (
              <span key={level} style={{display:'inline-flex',alignItems:'center',justifyContent:'center',minWidth:44,padding:'8px 12px',border:'1px solid #b49760',borderRadius:7,color:'#e3cb96',fontSize:14,fontWeight:600}}>{level}</span>
            ))}
          </div>

          <div className="login-skills">
            <div><BookOpen size={18} /><span>{t.lesen}</span></div>
            <div><Headphones size={18} /><span>{t.hoeren}</span></div>
            <div><PenTool size={18} /><span>{t.schreiben}</span></div>
            <div><Eye size={18} /><span>{t.sprechen}</span></div>
          </div>
        </div>

        <div className="login-visual-footer">
          <ShieldCheck size={17} />
          <span>{t.footer}</span>
        </div>

        <div className="login-decoration login-decoration-one" />
        <div className="login-decoration login-decoration-two" />
      </section>

      <section className="login-form-side">
        <div className="login-form-container">

          

          <Link href="/" className="login-mobile-brand">
            <span className="login-brand-icon">
              <GraduationCap size={23} />
            </span>
            Deutsch <b>Erfolg</b>
          </Link>

          <div className="login-form-heading">
            <div className="login-form-eyebrow">
              {t.espace}
            </div>
            <h2>{t.bienvenue}</h2>
            <p>{t.intro}</p>
          </div>

          <GoogleAuthButton language={lang} disabled={loading} />

          <form onSubmit={connecter} className="login-form">
            <label htmlFor="login-email">{t.email}</label>

            <div className="login-input-wrap">
              <Mail size={18} />
              <input
                id="login-email"
                type="email"
                placeholder={t.emailPlaceholder}
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                autoComplete="email"
              />
            </div>

            <div className="login-password-label">
              <label htmlFor="login-password">{t.password}</label>
            </div>

            <div className="login-input-wrap">
              <Lock size={18} />
              <input
                id="login-password"
                type={showPassword ? 'text' : 'password'}
                placeholder={t.passwordPlaceholder}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />

              <button
                type="button"
                className="login-show-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={t.afficher}
              >
                {showPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            <label className="login-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={e => setRememberMe(e.target.checked)}
              />
              <span>{t.seSouvenir}</span>
            </label>

            {message && (
              <p role="alert" className="login-error">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="login-submit"
              disabled={loading}
            >
              {loading ? t.connexion : t.connecter}
              {!loading && <ArrowRight size={18} />}
            </button>
          </form>

          <div className="login-register">
            {t.pasCompte}
            <Link href="/inscription">{t.creerCompte}</Link>
          </div>

          <div className="login-form-footer">
            <span>© 2026 Deutsch Erfolg</span>
            <span>{t.droits}</span>
          </div>
        </div>
      </section>

      <style jsx>{`
        @media (max-width: 700px) {
          .login-page .login-form-side { padding-bottom: max(85px, calc(70px + env(safe-area-inset-bottom))); }
        }

        .login-language {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 28px;
        }

        .login-language label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }

        .login-language-select {
          position: relative;
          display: flex;
          align-items: center;
        }

        .login-language-select select {
          appearance: none;
          -webkit-appearance: none;
          min-width: 145px;
          padding: 11px 38px 11px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          background: #ffffff;
          color: #1e293b;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          outline: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
        }

        .login-language-select select:hover {
          border-color: #94a3b8;
          box-shadow: 0 4px 12px rgba(15, 23, 42, 0.07);
        }

        .login-language-select select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .login-language-arrow {
          position: absolute;
          right: 13px;
          top: 50%;
          transform: translateY(-58%);
          color: #64748b;
          font-size: 19px;
          pointer-events: none;
        }

        .login-page[dir="rtl"] .login-language {
          justify-content: flex-start;
        }

        .login-page[dir="rtl"] .login-language-select select {
          padding: 11px 14px 11px 38px;
          text-align: right;
        }

        .login-page[dir="rtl"] .login-language-arrow {
          right: auto;
          left: 13px;
        }

        .login-remember {
          display: flex;
          align-items: center;
          gap: 9px;
          margin: 16px 0 4px;
          color: #475569;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
        }

        .login-remember input {
          width: 16px;
          height: 16px;
          accent-color: #2563eb;
          cursor: pointer;
        }

        .login-page[dir="rtl"] .login-remember {
          flex-direction: row-reverse;
          justify-content: flex-end;
        }
      `}</style>
    </main>
    <FloatingPageTools showOffer={false} />
    </>
  )
}

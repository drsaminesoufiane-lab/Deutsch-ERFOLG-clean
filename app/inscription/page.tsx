
'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  GraduationCap,
  Eye,
  EyeOff,
  ArrowRight,
  BookOpen,
  Headphones,
  PenTool,
  Mic,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

type Lang = 'fr' | 'de' | 'ar' | 'en'

const traductions = {
  fr: {
    tag: 'CRÉER UN COMPTE',
    bienvenue: 'Bienvenue !',
    intro: 'Crée ton compte et commence ta préparation TELC.',
    nom: 'Nom complet',
    nomPlaceholder: 'Ton nom et prénom',
    email: 'Adresse e-mail',
    telephone: 'Numéro de téléphone',
    telephonePlaceholder: '+212 6XX XXX XXX',
    pays: 'Pays',
    ville: 'Ville',
    villePlaceholder: 'Entre ta ville',
    niveau: 'Niveau de préparation',
    password: 'Mot de passe',
    passwordPlaceholder: '6 caractères minimum',
    creer: 'Créer mon compte',
    creation: 'Création du compte...',
    deja: 'Tu as déjà un compte ?',
    connexion: 'Se connecter',
    bas: 'En créant un compte, tu rejoins la communauté Deutsch Erfolg.',
    succes: 'Inscription réussie ! Vérifie ta boîte mail pour confirmer ton compte.',
    erreur: 'Une erreur est survenue lors de l’inscription.',
    afficher: 'Afficher ou masquer le mot de passe',
    slogan: "Ton succès à l'examen TELC commence ici.",
    description: "Prépare ton examen d'allemand avec une méthode structurée, des exercices pratiques et un suivi de ta progression.",
    pied: 'Une plateforme pour apprendre, progresser et réussir.',
    preparation: 'Préparation TELC',
    langues: 'Langue',
    lesen: 'Lire',
    hoeren: 'Écouter',
    schreiben: 'Écrire',
    sprechen: 'Parler',
    accroche: 'APPRENDRE L’ALLEMAND · RÉUSSIR ENSEMBLE',
  },

  de: {
    tag: 'KONTO ERSTELLEN',
    bienvenue: 'Willkommen!',
    intro: 'Erstelle dein Konto und beginne mit deiner TELC-Vorbereitung.',
    nom: 'Vollständiger Name',
    nomPlaceholder: 'Vor- und Nachname',
    email: 'E-Mail-Adresse',
    telephone: 'Telefonnummer',
    telephonePlaceholder: '+212 6XX XXX XXX',
    pays: 'Land',
    ville: 'Stadt',
    villePlaceholder: 'Gib deine Stadt ein',
    niveau: 'Vorbereitungsniveau',
    password: 'Passwort',
    passwordPlaceholder: 'Mindestens 6 Zeichen',
    creer: 'Mein Konto erstellen',
    creation: 'Konto wird erstellt...',
    deja: 'Du hast bereits ein Konto?',
    connexion: 'Anmelden',
    bas: 'Mit der Kontoerstellung wirst du Teil der Deutsch-Erfolg-Community.',
    succes: 'Registrierung erfolgreich! Bitte überprüfe deine E-Mails, um dein Konto zu bestätigen.',
    erreur: 'Bei der Registrierung ist ein Fehler aufgetreten.',
    afficher: 'Passwort anzeigen oder verbergen',
    slogan: 'Dein Erfolg bei der TELC-Prüfung beginnt hier.',
    description: 'Bereite dich mit einer strukturierten Methode, praktischen Übungen und einer persönlichen Fortschrittskontrolle auf deine Deutschprüfung vor.',
    pied: 'Eine Plattform zum Lernen, Fortschreiten und Erfolg haben.',
    preparation: 'TELC-Vorbereitung',
    langues: 'Sprache',
    lesen: 'Lesen',
    hoeren: 'Hören',
    schreiben: 'Schreiben',
    sprechen: 'Sprechen',
    accroche: 'DEUTSCH LERNEN · ERFOLG ERREICHEN',
  },

  ar: {
    tag: 'إنشاء حساب',
    bienvenue: 'مرحباً بك!',
    intro: 'أنشئ حسابك وابدأ التحضير لامتحان TELC.',
    nom: 'الاسم الكامل',
    nomPlaceholder: 'اسمك ونسبك',
    email: 'البريد الإلكتروني',
    telephone: 'رقم الهاتف',
    telephonePlaceholder: '+212 6XX XXX XXX',
    pays: 'البلد',
    ville: 'المدينة',
    villePlaceholder: 'أدخل اسم مدينتك',
    niveau: 'مستوى التحضير',
    password: 'كلمة المرور',
    passwordPlaceholder: '6 أحرف على الأقل',
    creer: 'إنشاء حسابي',
    creation: 'جارٍ إنشاء الحساب...',
    deja: 'لديك حساب بالفعل؟',
    connexion: 'تسجيل الدخول',
    bas: 'بإنشاء حساب، تنضم إلى مجتمع Deutsch Erfolg.',
    succes: 'تم التسجيل بنجاح! تحقق من بريدك الإلكتروني لتأكيد حسابك.',
    erreur: 'حدث خطأ أثناء إنشاء الحساب.',
    afficher: 'إظهار أو إخفاء كلمة المرور',
    slogan: 'نجاحك في امتحان TELC يبدأ من هنا.',
    description: 'حضّر امتحان اللغة الألمانية بطريقة منظمة، مع تمارين تطبيقية وتتبع تقدمك.',
    pied: 'منصة للتعلم والتقدم والنجاح.',
    preparation: 'التحضير لامتحان TELC',
    langues: 'اللغة',
    lesen: 'القراءة',
    hoeren: 'الاستماع',
    schreiben: 'الكتابة',
    sprechen: 'المحادثة',
    accroche: 'تعلم الألمانية · حقق النجاح',
  },

  en: {
    tag: 'CREATE AN ACCOUNT',
    bienvenue: 'Welcome!',
    intro: 'Create your account and start preparing for TELC.',
    nom: 'Full name',
    nomPlaceholder: 'Your first and last name',
    email: 'Email address',
    telephone: 'Phone number',
    telephonePlaceholder: '+212 6XX XXX XXX',
    pays: 'Country',
    ville: 'City',
    villePlaceholder: 'Enter your city',
    niveau: 'Preparation level',
    password: 'Password',
    passwordPlaceholder: 'At least 6 characters',
    creer: 'Create my account',
    creation: 'Creating account...',
    deja: 'Already have an account?',
    connexion: 'Log in',
    bas: 'By creating an account, you join the Deutsch Erfolg community.',
    succes: 'Registration successful! Check your email to confirm your account.',
    erreur: 'An error occurred during registration.',
    afficher: 'Show or hide password',
    slogan: 'Your success in the TELC exam starts here.',
    description: 'Prepare for your German exam with a structured method, practical exercises and progress tracking.',
    pied: 'A platform to learn, progress and succeed.',
    preparation: 'TELC Preparation',
    langues: 'Language',
    lesen: 'Reading',
    hoeren: 'Listening',
    schreiben: 'Writing',
    sprechen: 'Speaking',
    accroche: 'LEARN GERMAN · ACHIEVE SUCCESS',
  },
}

const paysDisponibles = [
  { value: 'Maroc', label: '🇲🇦 Maroc' },
  { value: 'Allemagne', label: '🇩🇪 Deutschland / Allemagne' },
  { value: 'France', label: '🇫🇷 France' },
  { value: 'Belgique', label: '🇧🇪 Belgique' },
  { value: 'Suisse', label: '🇨🇭 Schweiz / Suisse' },
  { value: 'Autriche', label: '🇦🇹 Österreich / Autriche' },
  { value: 'Espagne', label: '🇪🇸 España / Espagne' },
  { value: 'Italie', label: '🇮🇹 Italia / Italie' },
  { value: 'Pays-Bas', label: '🇳🇱 Nederland / Pays-Bas' },
  { value: 'Luxembourg', label: '🇱🇺 Luxembourg' },
  { value: 'Royaume-Uni', label: '🇬🇧 United Kingdom' },
  { value: 'États-Unis', label: '🇺🇸 United States' },
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'Turquie', label: '🇹🇷 Türkiye / Turquie' },
  { value: 'Ukraine', label: '🇺🇦 Україна / Ukraine' },
  { value: 'Algérie', label: '🇩🇿 الجزائر / Algérie' },
  { value: 'Tunisie', label: '🇹🇳 تونس / Tunisie' },
  { value: 'Sénégal', label: '🇸🇳 Sénégal' },
  { value: 'Côte d’Ivoire', label: '🇨🇮 Côte d’Ivoire' },
  { value: 'Égypte', label: '🇪🇬 مصر / Égypte' },
  { value: 'Arabie saoudite', label: '🇸🇦 السعودية / Arabie saoudite' },
  { value: 'Émirats arabes unis', label: '🇦🇪 الإمارات / Émirats arabes unis' },
  { value: 'Autre', label: '🌍 Autre' },
]

export default function InscriptionPage() {
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [email, setEmail] = useState('')
  const [pays, setPays] = useState('Maroc')
  const [ville, setVille] = useState('')
  const [niveau, setNiveau] = useState('B1')
  const [motDePasse, setMotDePasse] = useState('')
  const [voirMotDePasse, setVoirMotDePasse] = useState(false)
  const [message, setMessage] = useState('')
  const [chargement, setChargement] = useState(false)
  const [succes, setSucces] = useState(false)
  const [lang, setLang] = useState<Lang>('de')

  const t = traductions[lang]

  async function inscrire(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setChargement(true)
    setMessage('')
    setSucces(false)

    try {
      const { error } = await supabase.auth.signUp({
        email,
        password: motDePasse,
        options: {
          data: {
            full_name: nom,
            telephone: telephone,
            niveau: niveau,
            pays: pays,
            ville: ville,
          },
        },
      })

      if (error) {
        setMessage(t.erreur)
      } else {
        setSucces(true)
        setMessage(t.succes)
      }
    } catch {
      setMessage(t.erreur)
    } finally {
      setChargement(false)
    }
  }

  return (
    <main className="register-page" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <section className="register-visual">
        <Link href="/" className="register-brand">
          <span className="register-logo">
            <GraduationCap size={27} strokeWidth={2.2} />
          </span>
          <span>
            Deutsch <strong>Erfolg</strong>
          </span>
        </Link>

        <div className="register-visual-content">
          <span className="register-eyebrow">{t.accroche}</span>

          <h1>{t.slogan}</h1>
          <p>{t.description}</p>

          <div className="register-skills">
            <div>
              <BookOpen />
              <span>{t.lesen}</span>
            </div>
            <div>
              <Headphones />
              <span>{t.hoeren}</span>
            </div>
            <div>
              <PenTool />
              <span>{t.schreiben}</span>
            </div>
            <div>
              <Mic />
              <span>{t.sprechen}</span>
            </div>
          </div>

          <div className="register-levels">
            <span>B1</span>
            <span>B2</span>
            <small>{t.preparation}</small>
          </div>
        </div>

        <div className="register-visual-footer">
          {t.pied}
        </div>
      </section>

      <section className="register-form-side">
        <div className="register-form-container">

          <div className="register-language">
            <label htmlFor="language">{t.langues}</label>

            <div className="register-language-select">
              <select
                id="language"
                value={lang}
                onChange={e => setLang(e.target.value as Lang)}
              >
                <option value="fr">🇫🇷 Français</option>
                <option value="de">🇩🇪 Deutsch</option>
                <option value="ar">🇲🇦 العربية</option>
                <option value="en">🇬🇧 English</option>
              </select>

              <span className="register-language-arrow">⌄</span>
            </div>
          </div>

          <div className="register-mobile-brand">
            <span className="register-logo">
              <GraduationCap size={25} />
            </span>
            <span>
              Deutsch <strong>Erfolg</strong>
            </span>
          </div>

          <div className="register-heading">
            <span className="register-tag">{t.tag}</span>
            <h2>{t.bienvenue}</h2>
            <p>{t.intro}</p>
          </div>

          <form onSubmit={inscrire} className="register-form">
            <label htmlFor="nom">{t.nom}</label>
            <input
              id="nom"
              type="text"
              placeholder={t.nomPlaceholder}
              value={nom}
              onChange={e => setNom(e.target.value)}
              required
            />

            <label htmlFor="telephone">{t.telephone}</label>
            <input
              id="telephone"
              type="tel"
              placeholder={t.telephonePlaceholder}
              value={telephone}
              onChange={e => setTelephone(e.target.value)}
              required
            />

            <label htmlFor="pays">{t.pays}</label>
            <select
              id="pays"
              value={pays}
              onChange={e => setPays(e.target.value)}
              required
            >
              {paysDisponibles.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="ville">{t.ville}</label>
            <input
              id="ville"
              type="text"
              placeholder={t.villePlaceholder}
              value={ville}
              onChange={e => setVille(e.target.value)}
              required
            />

            <label htmlFor="email">{t.email}</label>
            <input
              id="email"
              type="email"
              placeholder="exemple@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />

            <label htmlFor="niveau">{t.niveau}</label>
            <select
              id="niveau"
              value={niveau}
              onChange={e => setNiveau(e.target.value)}
              required
            >
              <option value="B1">TELC B1</option>
              <option value="B2">TELC B2</option>
            </select>

            <label htmlFor="password">{t.password}</label>

            <div className="register-password">
              <input
                id="password"
                type={voirMotDePasse ? 'text' : 'password'}
                placeholder={t.passwordPlaceholder}
                value={motDePasse}
                onChange={e => setMotDePasse(e.target.value)}
                minLength={6}
                required
              />

              <button
                type="button"
                onClick={() => setVoirMotDePasse(!voirMotDePasse)}
                aria-label={t.afficher}
              >
                {voirMotDePasse ? (
                  <EyeOff size={19} />
                ) : (
                  <Eye size={19} />
                )}
              </button>
            </div>

            <button
              type="submit"
              disabled={chargement}
              className="register-submit"
            >
              {chargement ? t.creation : t.creer}
              {!chargement && <ArrowRight size={19} />}
            </button>

            {message && (
              <p
                className={succes ? 'register-success' : 'register-error'}
                role="status"
              >
                {message}
              </p>
            )}
          </form>

          <div className="register-login">
            {t.deja}
            <Link href="/connexion"> {t.connexion}</Link>
          </div>

          <div className="register-bottom">
            {t.bas}
          </div>

        </div>
      </section>

      <style jsx>{`
        .register-language {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 12px;
          margin-bottom: 28px;
        }

        .register-language label {
          font-size: 13px;
          font-weight: 600;
          color: #64748b;
        }

        .register-language-select {
          position: relative;
          display: flex;
          align-items: center;
        }

        .register-language-select select {
          appearance: none;
          -webkit-appearance: none;
          min-width: 155px;
          padding: 12px 40px 12px 15px;
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
          box-shadow: 0 3px 10px rgba(15, 23, 42, 0.05);
        }

        .register-language-select select:hover {
          border-color: #94a3b8;
          box-shadow: 0 5px 14px rgba(15, 23, 42, 0.08);
          transform: translateY(-1px);
        }

        .register-language-select select:focus {
          border-color: #2563eb;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .register-language-arrow {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-58%);
          color: #64748b;
          font-size: 19px;
          pointer-events: none;
        }

        .register-page[dir="rtl"] .register-language {
          justify-content: flex-start;
        }

        .register-page[dir="rtl"] .register-language-select select {
          padding: 12px 15px 12px 40px;
          text-align: right;
        }

        .register-page[dir="rtl"] .register-language-arrow {
          right: auto;
          left: 14px;
        }
      `}</style>
    </main>
  )
}


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
  Mail,
  CheckCircle2,
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
    succes: 'Inscription réussie !',
    emailTitle: 'Vérifie ta boîte e-mail !',
    emailDescription: 'Nous venons de t’envoyer un e-mail de confirmation à cette adresse :',
    emailInstructions: 'Ouvre cet e-mail et clique sur le lien de confirmation pour valider ton adresse et poursuivre l’activation de ton compte.',
    emailSpam: 'Tu ne trouves pas notre e-mail ? Pense à vérifier le dossier Spam ou Courrier indésirable.',
    emailWait: 'La réception du message peut prendre quelques minutes.',
    emailBack: 'Retour à la connexion',
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
    succes: 'Registrierung erfolgreich!',
    emailTitle: 'Bitte überprüfe dein E-Mail-Postfach!',
    emailDescription: 'Wir haben gerade eine Bestätigungs-E-Mail an diese Adresse gesendet:',
    emailInstructions: 'Öffne die E-Mail und klicke auf den Bestätigungslink, um deine E-Mail-Adresse zu bestätigen und die Aktivierung deines Kontos fortzusetzen.',
    emailSpam: 'Du findest unsere E-Mail nicht? Bitte überprüfe auch deinen Spam-Ordner.',
    emailWait: 'Es kann einige Minuten dauern, bis die E-Mail ankommt.',
    emailBack: 'Zur Anmeldung',
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
    succes: 'تم التسجيل بنجاح!',
    emailTitle: 'تحقق من بريدك الإلكتروني!',
    emailDescription: 'لقد أرسلنا للتو رسالة تأكيد إلى هذا العنوان:',
    emailInstructions: 'افتح الرسالة واضغط على رابط التأكيد للتحقق من بريدك الإلكتروني ومتابعة تفعيل حسابك.',
    emailSpam: 'لم تجد الرسالة؟ تحقق أيضاً من مجلد الرسائل غير المرغوب فيها (Spam).',
    emailWait: 'قد يستغرق وصول الرسالة بضع دقائق.',
    emailBack: 'العودة إلى تسجيل الدخول',
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
    succes: 'Registration successful!',
    emailTitle: 'Check your inbox!',
    emailDescription: 'We have just sent a confirmation email to:',
    emailInstructions: 'Open the email and click the confirmation link to verify your email address and continue activating your account.',
    emailSpam: 'Can’t find our email? Please check your Spam or Junk folder.',
    emailWait: 'It may take a few minutes for the email to arrive.',
    emailBack: 'Back to login',
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

// LEAGUE_SIGNUP_ALIAS_V1
const pseudoTranslations = {
  fr: {
    label: 'Pseudonyme (facultatif)',
    hint: '3 à 20 caractères : lettres latines, chiffres, tirets ou underscores. Pour le classement uniquement. Évite ton vrai nom.',
    invalid: 'Pseudonyme invalide. Utilise 3 à 20 caractères autorisés.',
    taken: 'Ce pseudonyme est déjà utilisé. Choisis-en un autre.',
    checkError: 'Impossible de vérifier le pseudonyme. Réessaie ou laisse le champ vide.',
    later: 'Si ton pseudonyme a été pris entre-temps, tu pourras en choisir un autre dans le classement.',
  },
  de: {
    label: 'Pseudonym (optional)',
    hint: '3 bis 20 Zeichen: lateinische Buchstaben, Ziffern, Bindestriche oder Unterstriche. Nur für die Rangliste. Verwende nicht deinen echten Namen.',
    invalid: 'Ungültiges Pseudonym. Verwende 3 bis 20 erlaubte Zeichen.',
    taken: 'Dieses Pseudonym ist bereits vergeben. Wähle ein anderes.',
    checkError: 'Das Pseudonym konnte nicht geprüft werden. Versuche es erneut oder lass das Feld leer.',
    later: 'Falls dein Pseudonym inzwischen vergeben wurde, kannst du in der Rangliste ein anderes wählen.',
  },
  en: {
    label: 'Nickname (optional)',
    hint: '3–20 characters: Latin letters, numbers, hyphens or underscores. For the leaderboard only. Avoid your real name.',
    invalid: 'Invalid nickname. Use 3–20 allowed characters.',
    taken: 'This nickname is already taken. Choose another.',
    checkError: 'Could not check the nickname. Try again or leave the field blank.',
    later: 'If your nickname was taken in the meantime, you can choose another in the leaderboard.',
  },
  ar: {
    label: 'الاسم المستعار (اختياري)',
    hint: 'من 3 إلى 20 رمزاً: حروف لاتينية أو أرقام أو شرطات أو شرطات سفلية. خاص بالترتيب فقط. تجنب اسمك الحقيقي.',
    invalid: 'اسم مستعار غير صالح. استخدم من 3 إلى 20 رمزاً مسموحاً.',
    taken: 'هذا الاسم المستعار مستخدم بالفعل. اختر اسماً آخر.',
    checkError: 'تعذر التحقق من الاسم المستعار. أعد المحاولة أو اترك الحقل فارغاً.',
    later: 'إذا تم حجز اسمك المستعار في هذه الأثناء، يمكنك اختيار اسم آخر في الترتيب.',
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
  { value: 'Émirats arabes unis', label: '🇦🇪 الإمارات / Émirats arabes المتحدة' },
  { value: 'Autre', label: '🌍 Autre' },
]

export default function InscriptionPage() {
  const [nom, setNom] = useState('')
  const [pseudo, setPseudo] = useState('')
  const [pseudoError, setPseudoError] = useState<'invalid' | 'taken' | 'checkError' | ''>('')
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
  const pt = pseudoTranslations[lang]

  async function inscrire(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (chargement) return
    const pseudoChoisi = pseudo.trim()
    setPseudoError('')
    setMessage('')
    if (pseudoChoisi && !/^[A-Za-z0-9_-]{3,20}$/.test(pseudoChoisi)) {
      setPseudoError('invalid')
      return
    }

    setChargement(true)
    setMessage('')
    setSucces(false)

    try {
      if (pseudoChoisi) {
        const { data: disponible, error: verificationError } = await supabase.rpc(
          'league_pseudonym_available',
          { p_pseudonym: pseudoChoisi }
        )
        if (verificationError || typeof disponible !== 'boolean') {
          setPseudoError('checkError')
          return
        }
        if (!disponible) {
          setPseudoError('taken')
          return
        }
      }
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password: motDePasse,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/confirm`,
          data: {
            full_name: nom.trim(),
            ...(pseudoChoisi ? { league_pseudonym: pseudoChoisi } : {}),
            telephone: telephone.trim(),
            niveau,
            pays,
            ville: ville.trim(),
          },
        },
      })

      if (error) {
        setMessage(error.message || t.erreur)
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

          {succes ? (
            <div className="register-confirmation" role="status">
              <div className="register-confirmation-icon">
                <Mail size={32} />
              </div>

              <h2>{t.emailTitle}</h2>

              <p>{t.emailDescription}</p>

              <strong className="register-confirmation-email">
                {email}
              </strong>

              <div className="register-confirmation-instructions">
                <CheckCircle2 size={20} />
                <p>{t.emailInstructions}</p>
              </div>

              <p className="register-confirmation-spam">
                {t.emailSpam}
              </p>

              <p className="register-confirmation-wait">
                {t.emailWait}
              </p>

              {pseudo.trim() && <p className="register-pseudo-note">{pt.later}</p>}

              <Link href="/connexion" className="register-submit register-confirmation-link">
                {t.emailBack}
                <ArrowRight size={19} />
              </Link>
            </div>
          ) : (
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

              <label htmlFor="league-pseudonym">{pt.label}</label>
              <input
                id="league-pseudonym"
                type="text"
                dir="ltr"
                placeholder="DeutschMaster"
                value={pseudo}
                maxLength={20}
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                disabled={chargement}
                aria-describedby={pseudoError ? 'league-pseudo-hint league-pseudo-error' : 'league-pseudo-hint'}
                aria-invalid={!!pseudoError}
                onChange={e => {
                  setPseudo(e.target.value)
                  setPseudoError('')
                }}
              />
              <p id="league-pseudo-hint" className="register-pseudo-hint">{pt.hint}</p>
              {pseudoError && (
                <p id="league-pseudo-error" className="register-pseudo-error" role="alert">{pt[pseudoError]}</p>
              )}

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
                <option value="A1">A1</option>
                  <option value="A2">A2</option>
                  <option value="B1">B1</option>
                  <option value="B2">B2</option>
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
                  className="register-error"
                  role="alert"
                >
                  {message}
                </p>
              )}
            </form>
          )}

          {!succes && (
            <div className="register-login">
              {t.deja}
              <Link href="/connexion"> {t.connexion}</Link>
            </div>
          )}

          <div className="register-bottom">
            {t.bas}
          </div>

        </div>
      </section>

      <style jsx>{`
        .register-form #league-pseudonym { margin-bottom: 6px; }
        .register-form #league-pseudonym[aria-invalid="true"] { border-color: #b44d4d; }
        .register-pseudo-hint, .register-pseudo-error {
          margin: 0 0 16px;
          font-size: 12px;
          line-height: 1.55;
          text-align: start;
        }
        .register-pseudo-hint { color: #64748b; }
        .register-pseudo-error { color: #a52e35; font-weight: 600; }
        .register-pseudo-note { font-size: 12px; }
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

        .register-confirmation {
          padding: 30px 24px;
          margin-top: 28px;
          border: 1px solid #dbeafe;
          border-radius: 18px;
          background: #f8fbff;
          text-align: center;
        }

        .register-confirmation-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 66px;
          height: 66px;
          margin: 0 auto 20px;
          border-radius: 50%;
          background: #dbeafe;
          color: #2563eb;
        }

        .register-confirmation h2 {
          margin: 0 0 14px;
          color: #1e293b;
          font-size: 23px;
          font-weight: 750;
        }

        .register-confirmation > p {
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        }

        .register-confirmation-email {
          display: block;
          margin: 12px 0 22px;
          color: #1d4ed8;
          font-size: 15px;
          overflow-wrap: anywhere;
        }

        .register-confirmation-instructions {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 15px;
          border-radius: 12px;
          background: #eff6ff;
          color: #1e40af;
          text-align: left;
        }

        .register-confirmation-instructions svg {
          flex-shrink: 0;
          margin-top: 2px;
        }

        .register-confirmation-instructions p {
          margin: 0;
          font-size: 13px;
          line-height: 1.7;
        }

        .register-confirmation .register-confirmation-spam {
          margin-top: 20px;
          color: #475569;
          font-size: 13px;
        }

        .register-confirmation .register-confirmation-wait {
          margin-top: 8px;
          color: #64748b;
          font-size: 12px;
        }

        .register-confirmation-link {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          width: 100%;
          margin-top: 24px;
          text-decoration: none;
        }

        @media (max-width: 480px) {
          .register-confirmation {
            padding: 24px 16px;
          }

          .register-confirmation h2 {
            font-size: 20px;
          }
        }
      `}</style>
    </main>
  )
}

'use client'

import FloatingPageTools from '@/components/student/FloatingPageTools'

import { useEffect, useState } from 'react'
import type { User } from '@supabase/supabase-js'
import Link from 'next/link'
import {
  GraduationCap, BookOpen, Headphones, PenLine, Mic,
  ArrowRight, CheckCircle2, Trophy, Target, PlayCircle,
  Star, Zap, LogOut, UserRound, Languages
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'
import homeTranslations from '@/translations/home'
import GrammarShowcase from '@/components/home/GrammarShowcase'
import type { PublicGrammarStats } from '@/lib/grammar/publicShowcase'

const skills = [
  { key: 'lesen', title: 'Lesen', Icon: BookOpen, number: '01', href: '/espace-etudiant/examens/b1/lesen' },
  { key: 'horen', title: 'Hören', Icon: Headphones, number: '02', href: '/espace-etudiant/examens/b1/hoeren' },
  { key: 'schreiben', title: 'Schreiben', Icon: PenLine, number: '03', href: '/espace-etudiant/examens/b1' },
  { key: 'sprechen', title: 'Sprechen', Icon: Mic, number: '04', href: '/espace-etudiant/examens/b1' }
] as const

const homePremiumText = {
  fr: { library: 'Votre bibliothèque', dictionary: 'Wörterbuch A1–B2', dictionaryDesc: 'Explorez le vocabulaire allemand, ses traductions en français, anglais et arabe, ses exemples et ses formes grammaticales.', dictionaryAction: 'Explorer le dictionnaire', pricing: 'Tarifs', pricingTitle: 'Choisissez votre formule PRO', pricingDesc: 'Paiement par virement bancaire après contact. Activation après vérification.', durations: ['1 mois', '3 mois', '12 mois'], monthly: 'Au tarif mensuel', saving: 'Économie', popular: 'Formule recommandée', choose: 'Voir les offres PRO', priceTotal: 'Prix total' },
  de: { library: 'Ihre Bibliothek', dictionary: 'Wörterbuch A1–B2', dictionaryDesc: 'Entdecken Sie deutschen Wortschatz mit französischen, englischen und arabischen Übersetzungen, Beispielen und grammatischen Formen.', dictionaryAction: 'Wörterbuch entdecken', pricing: 'Preise', pricingTitle: 'Wählen Sie Ihr PRO-Abonnement', pricingDesc: 'Zahlung per Banküberweisung nach Kontaktaufnahme. Freischaltung nach Prüfung.', durations: ['1 Monat', '3 Monate', '12 Monate'], monthly: 'Zum Monatstarif', saving: 'Ersparnis', popular: 'Empfohlenes Angebot', choose: 'PRO-Angebote ansehen', priceTotal: 'Gesamtpreis' },
  en: { library: 'Your library', dictionary: 'Wörterbuch A1–B2', dictionaryDesc: 'Explore German vocabulary with French, English and Arabic translations, examples and grammatical forms.', dictionaryAction: 'Explore the dictionary', pricing: 'Pricing', pricingTitle: 'Choose your PRO plan', pricingDesc: 'Payment by bank transfer after contacting us. Activation after verification.', durations: ['1 month', '3 months', '12 months'], monthly: 'At the monthly rate', saving: 'Savings', popular: 'Recommended plan', choose: 'View PRO plans', priceTotal: 'Total price' },
  ar: { library: 'مكتبتك', dictionary: 'Wörterbuch A1–B2', dictionaryDesc: 'اكتشف المفردات الألمانية مع الترجمات بالفرنسية والإنجليزية والعربية والأمثلة والصيغ النحوية.', dictionaryAction: 'استكشف القاموس', pricing: 'الأسعار', pricingTitle: 'اختر باقة PRO', pricingDesc: 'الدفع بالتحويل البنكي بعد التواصل. يتم التفعيل بعد التحقق.', durations: ['شهر واحد', '3 أشهر', '12 شهراً'], monthly: 'حسب السعر الشهري', saving: 'التوفير', popular: 'الباقة الموصى بها', choose: 'عرض باقات PRO', priceTotal: 'السعر الإجمالي' },
} as const

// Tarifs synchronisés avec la page PRO lors de l’installation du correctif.
const homePlans = [{"months": 1, "price": 59}, {"months": 3, "price": 129}, {"months": 12, "price": 499}] as const

function getStudentName(user: User | null) {
  if (!user) return ''
  const metadata = user.user_metadata || {}
  const possibleNames = [metadata.first_name, metadata.full_name, metadata.name, metadata.prenom]
  const name = possibleNames.find(value => typeof value === 'string' && value.trim().length > 0)
  if (typeof name === 'string') return name.trim()
  return user.email?.split('@')[0] || 'Étudiant'
}

export default function HomePageClient({ grammarStats }: { grammarStats: PublicGrammarStats }) {
  const { language } = useLanguage()
  const t = homeTranslations[language]
  const premium = homePremiumText[language]
  const [user, setUser] = useState<User | null>(null)
  const [authLoading, setAuthLoading] = useState(true)
  const [signingOut, setSigningOut] = useState(false)

  useEffect(() => {
    let mounted = true
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!mounted) return
      setUser(session?.user ?? null)
      setAuthLoading(false)
    })
    supabase.auth.getUser().then(({ data, error }) => {
      if (!mounted) return
      setUser(error ? null : data.user)
      setAuthLoading(false)
    })
    return () => {
      mounted = false
      subscription.unsubscribe()
    }
  }, [])

  const handleSignOut = async () => {
    setSigningOut(true)
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Erreur lors de la déconnexion :', error.message)
      setSigningOut(false)
      return
    }
    localStorage.removeItem('deutsch_erfolg_device_id')
    document.cookie = 'deutsch_erfolg_device_id=; Path=/; Max-Age=0; SameSite=Lax'
    setUser(null)
    setSigningOut(false)
  }

  const isLoggedIn = !!user
  const studentName = getStudentName(user)
  const accountLink = isLoggedIn ? '/espace-etudiant' : '/connexion'
  const welcomeMessage = t.cta.welcome.replace('{name}', studentName)

  return (
    <main className="home-page" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* NAVIGATION */}
      <header className="home-header">
        <div className="home-nav">
          <Link href="/" className="home-brand">
            <span className="brand-icon"><GraduationCap size={29} /></span>
            <span>Deutsch <strong>Erfolg</strong></span>
          </Link>

          <nav className="desktop-nav">
            <a href="#accueil">{t.nav.home}</a>
            <a href="#formation">{t.nav.formation}</a>
            <a href="#grammatik" lang="de">Grammatik</a>
            <a href="#methode">{t.nav.method}</a>
            <a href="#niveaux">{t.nav.levels}</a>
            <a href="#avantages">{t.nav.benefits}</a>
            <a href="#tarifs">{premium.pricing}</a>
          </nav>

          <div className="nav-actions">
            
            {authLoading ? (
              <span className="auth-loading">{t.nav.loading}</span>
            ) : isLoggedIn ? (
              <>
                <Link href="/espace-etudiant" className="de-home-account">
                  <span className="student-avatar"><UserRound size={21} aria-hidden="true" /></span>
                  <span className="de-account-copy">
                    <span className="student-name">{studentName}</span>
                    <span className="de-account-space">{t.nav.mySpace}<ArrowRight size={15} aria-hidden="true" /></span>
                  </span>
                </Link>
                <button type="button" className="logout-button" onClick={handleSignOut} disabled={signingOut} title={t.nav.logoutTitle}>
                  <LogOut size={17} />
                  <span>{signingOut ? t.nav.logoutLoading : t.nav.quit}</span>
                </button>
              </>
            ) : (
              <>
                <Link href="/connexion" className="login-button">{t.nav.login}</Link>
                <Link href="/inscription" className="nav-cta">
                  {t.nav.start}<ArrowRight size={16} />
                </Link>
              </>
            )}
          </div>
        </div>
      </header>
      <FloatingPageTools />

      {/* HERO */}
      <section className="hero-section" id="accueil">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label"><span className="label-dot" />{t.hero.label}</div>
            <h1>{t.hero.title}<span> {t.hero.highlight}</span></h1>
            <p className="hero-description">{t.hero.description}</p>

            <div className="hero-actions">
              {authLoading ? (
                <span className="primary-button">{t.nav.loading}</span>
              ) : isLoggedIn ? (
                <Link href="/espace-etudiant" className="primary-button">
                  {t.hero.access}<ArrowRight size={18} />
                </Link>
              ) : (
                <>
                  <Link href="/inscription" className="primary-button">
                    {t.hero.start}<ArrowRight size={18} />
                  </Link>
                  <Link href="/connexion" className="secondary-button">
                    <PlayCircle size={19} />{t.hero.alreadyRegistered}
                  </Link>
                </>
              )}
            </div>

            <div className="hero-trust">
              <div className="trust-icon"><CheckCircle2 size={18} /></div>
              <span>{t.hero.trust}</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-card main-visual-card">
              <div className="visual-card-top">
                <div>
                  <span className="visual-small">{t.visual.objective}</span>
                  <h3>{t.visual.exam}</h3>
                </div>
                <div className="visual-trophy"><Trophy size={25} /></div>
              </div>

              <div className="visual-levels">
                <div className="visual-level b1-level">
                  <div className="level-circle">B1</div>
                  <div><strong>{t.visual.levelB1}</strong><span>{t.visual.intermediate}</span></div>
                  <CheckCircle2 size={20} />
                </div>
                <div className="visual-level b2-level">
                  <div className="level-circle">B2</div>
                  <div><strong>{t.visual.levelB2}</strong><span>{t.visual.advanced}</span></div>
                  <ArrowRight size={20} />
                </div>
              </div>

              <div className="visual-divider" />
              <div className="visual-progress-title">
                <span>{t.visual.skills}</span><span>{t.visual.modules}</span>
              </div>
              <div className="visual-skills">
                <span><BookOpen size={16} /> Lesen</span>
                <span><Headphones size={16} /> Hören</span>
                <span><PenLine size={16} /> Schreiben</span>
                <span><Mic size={16} /> Sprechen</span>
              </div>
            </div>

            <div className="floating-note note-top">
              <div className="floating-icon"><Star size={17} /></div>
              <div><strong>{t.visual.progress}</strong><span>{t.visual.atYourPace}</span></div>
            </div>
            <div className="floating-note note-bottom">
              <div className="floating-icon gold-icon"><Target size={18} /></div>
              <div><strong>{t.visual.yourObjective}</strong><span>{t.visual.target}</span></div>
            </div>
          </div>
        </div>
        <div className="hero-bottom-line" />
      </section>


      
      <GrammarShowcase stats={grammarStats} language={language} />

      {/* ESPACE DÉBUTANT */}
      <section className="beginner-section" id="debutant">
        <div className="beginner-container">
          <div className="beginner-content">
            <span className="beginner-badge">
              <Star size={15} />
              {language === 'ar' ? 'المبتدئون • المستوى A1' :
               language === 'de' ? 'ANFÄNGER • NIVEAU A1' :
               language === 'en' ? 'BEGINNER • LEVEL A1' :
               'DÉBUTANT • NIVEAU A1'}
            </span>

            <span className="beginner-eyebrow">
              {language === 'ar' ? 'خطوتك الأولى' :
               language === 'de' ? 'DEIN ERSTER SCHRITT' :
               language === 'en' ? 'YOUR FIRST STEP' :
               'VOTRE PREMIER PAS'}
            </span>

            <h2>
              {language === 'ar' ? 'لم تتعلم الألمانية من قبل؟' :
               language === 'de' ? 'Du bist Anfänger in Deutsch?' :
               language === 'en' ? 'New to learning German?' :
               'Vous débutez en allemand ?'}
              <span>
                {language === 'ar' ? ' ابدأ من الصفر معنا !' :
                 language === 'de' ? ' Starte ganz von vorne!' :
                 language === 'en' ? ' Start from zero with us!' :
                 ' Commencez de zéro avec nous !'}
              </span>
            </h2>

            <p className="beginner-description">
              {language === 'ar'
                ? 'تعلم أساسيات اللغة الألمانية خطوة بخطوة، من الأبجدية والنطق إلى الكلمات الأولى والتمارين. أنشئ حسابك للبدء في رحلة التعلم.'
                : language === 'de'
                ? 'Lerne die Grundlagen der deutschen Sprache Schritt für Schritt: vom Alphabet und der Aussprache bis zu deinen ersten Wörtern und Übungen. Erstelle ein Konto und beginne deinen Lernweg.'
                : language === 'en'
                ? 'Learn the basics of German step by step, from the alphabet and pronunciation to your first words and exercises. Create an account to start your learning journey.'
                : 'Découvrez les bases de la langue allemande étape par étape : alphabet, prononciation, premiers mots et exercices simples. Créez votre compte pour commencer votre parcours d’apprentissage.'}
            </p>

            <div className="beginner-features">
              <span>🔤 {language === 'ar' ? 'الأبجدية' : 'Alphabet'}</span>
              <span>🗣️ {language === 'ar' ? 'النطق' : language === 'de' ? 'Aussprache' : language === 'en' ? 'Pronunciation' : 'Prononciation'}</span>
              <span>📚 {language === 'ar' ? 'الكلمات الأولى' : language === 'de' ? 'Erste Wörter' : language === 'en' ? 'First words' : 'Premiers mots'}</span>
              <span>✏️ {language === 'ar' ? 'تمارين' : language === 'de' ? 'Übungen' : language === 'en' ? 'Exercises' : 'Exercices'}</span>
            </div>

            <Link
              href="/inscription"
              className="beginner-button"
            >
              {language === 'ar' ? 'أنشئ حسابك وابدأ التعلم' :
               language === 'de' ? 'Konto erstellen und starten' :
               language === 'en' ? 'Create an account and start' :
               'Créer mon compte et commencer'}
              <ArrowRight size={19} />
            </Link>

            <div className="beginner-no-account">
              <CheckCircle2 size={17} />
              {language === 'ar' ? 'أنشئ حسابك لبدء التعلم' :
               language === 'de' ? 'Erstelle dein Konto, um loszulegen' :
               language === 'en' ? 'Create your account to get started' :
               'Créez votre compte pour commencer votre parcours'}
            </div>
          </div>

          <div className="beginner-visual">
            <div className="beginner-photo-main">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85"
                alt="Étudiants qui apprennent ensemble"
              />
            </div>
            <div className="beginner-photo-small">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=85"
                alt="Apprentissage et prise de notes"
              />
            </div>
            <div className="beginner-floating-card">
              <span>🇩🇪</span>
              <div>
                <strong>Hallo!</strong>
                <small>
                  {language === 'ar' ? 'مرحباً بالألمانية' :
                   language === 'de' ? 'Dein erstes deutsches Wort' :
                   language === 'en' ? 'Your first German word' :
                   'Votre premier mot allemand'}
                </small>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* LES TROIS PILIERS - MIS EN AVANT JUSTE APRÈS LE HERO */}
      <section className="method-section" id="methode">
        <div className="section-container">
          <div className="method-intro">
            <span className="section-eyebrow">{t.method.eyebrow}</span>
            <h2>{t.method.title} <span>{t.method.highlight}</span></h2>
            <p>{t.method.description}</p>
          </div>

          <div className="method-grid">
            <Link href="/espace-etudiant/apprentissage/grammaire" className="method-card method-card-grammar">
              <div className="method-card-heading">
                <div className="method-icon"><Languages size={29} /></div>
                <span className="method-number">01</span>
              </div>
              <span className="method-tag">{t.method.basics}</span>
              <h3 lang="de">Deutsche Grammatik</h3>
              <span className="home-grammar-count">{new Intl.NumberFormat(language).format(grammarStats.chapters.length)} {({fr:'chapitres',de:'Kapitel',en:'chapters',ar:'فصلاً'})[language]} · {grammarStats.levels.length > 1 ? `${grammarStats.levels[0]}–${grammarStats.levels[grammarStats.levels.length-1]}` : grammarStats.levels[0]}</span>
              <p>{t.method.grammarDescription}</p>
              <div className="method-bottom">
                <span>{t.method.learnUnderstand}</span><span className="method-arrow"><ArrowRight size={18} /></span>
              </div>
            </Link>

            <Link href="/espace-etudiant/apprentissage/grammaire" className="method-card method-card-featured">
              <div className="method-card-heading">
                <div className="method-icon"><Trophy size={29} /></div>
                <span className="method-number">02</span>
              </div>
              <span className="method-tag">{t.method.mainProgram}</span>
              <h3>Meistertraining <span>🏆</span></h3>
              <p>{t.method.meistertrainingDescription}</p>
              <div className="method-bottom">
                <span>{t.method.essentialTraining}</span><span className="method-arrow"><ArrowRight size={18} /></span>
              </div>
            </Link>

            <Link href="/espace-etudiant/apprentissage/grammaire" className="method-card method-card-extra">
              <div className="method-card-heading">
                <div className="method-icon"><Zap size={29} /></div>
                <span className="method-number">03</span>
              </div>
              <span className="method-tag">{t.method.bonusTraining}</span>
              <h3>Extra-Kick <span>⚡</span></h3>
              <p>{t.method.extraKickDescription}</p>
              <div className="method-bottom">
                <span>{t.method.practiceMore}</span><span className="method-arrow"><ArrowRight size={18} /></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* DE_HOME_PREMIUM_V1 — bibliothèque */}
      <section className="home-library-section" id="woerterbuch">
        <div className="section-container home-library-inner">
          <div className="home-library-symbol"><Languages size={42} strokeWidth={1.3} /></div>
          <div className="home-library-copy">
            <span className="section-eyebrow">{premium.library}</span>
            <h2 lang="de" dir="ltr">{premium.dictionary}</h2>
            <p>{premium.dictionaryDesc}</p>
            <div className="home-library-languages"><span>Deutsch</span><span>Français</span><span>English</span><span lang="ar" dir="rtl">العربية</span></div>
          </div>
          <Link href={isLoggedIn ? '/espace-etudiant/apprentissage/woerterbuch-b1' : '/inscription'} className="primary-button">{premium.dictionaryAction}<ArrowRight size={17} /></Link>
        </div>
      </section>

      {/* NIVEAUX */}
      <section className="levels-section" id="niveaux">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">{t.levels.eyebrow}</span>
            <h2>{t.levels.title} <span>{t.levels.highlight}</span></h2>
            <p>{t.levels.description}</p>
          </div>

          <div className="levels-grid">
            <article className="level-card">
              <div className="level-card-top">
                <span className="level-tag">{t.levels.intermediate}</span>
                <span className="level-number">01</span>
              </div>
              <div className="big-level">B1</div>
              <h3>{t.levels.preparationB1}</h3>
              <p>{t.levels.descriptionB1}</p>
              <div className="level-card-footer">
                <span>{t.levels.nextStep}</span>
                <Link href="/espace-etudiant/examens/b1" aria-label={t.levels.accessB1}><ArrowRight size={19} /></Link>
              </div>
            </article>

            <article className="level-card level-card-dark">
              <div className="level-card-top">
                <span className="level-tag">{t.levels.advanced}</span>
                <span className="level-number">02</span>
              </div>
              <div className="big-level">B2</div>
              <h3>{t.levels.preparationB2}</h3>
              <p>{t.levels.descriptionB2}</p>
              <div className="level-card-footer">
                <span>{t.levels.aimHigher}</span>
                <Link href="/espace-etudiant/examens/b2" aria-label={t.levels.accessB2}><ArrowRight size={19} /></Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMPÉTENCES */}
      <section className="skills-section" id="formation">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">{t.skills.eyebrow}</span>
            <h2>{t.skills.title} <span>{t.skills.highlight}</span></h2>
            <p>{t.skills.description}</p>
          </div>

          <div className="skills-grid">
            {skills.map(({ key, title, Icon, number, href }) => {
              const skill = t.skills[key]
              return (
                <Link href={href} className="skill-card" key={key}>
                  <div className="skill-card-top">
                    <div className="skill-icon"><Icon size={25} /></div>
                    <span>{number}</span>
                  </div>
                  <h3>{title}</h3>
                  <strong>{skill}</strong>
                  <p>{t.skills[`${key}Description` as keyof typeof t.skills]}</p>
                  <div className="skill-card-line" />
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="benefits-section" id="avantages">
        <div className="section-container benefits-container">
          <div className="benefits-content">
            <span className="section-eyebrow">{t.benefits.eyebrow}</span>
            <h2>{t.benefits.title} <span>{t.benefits.highlight}</span></h2>
            <p>{t.benefits.description}</p>
            <div className="benefits-list">
              {t.benefits.items.map(benefit => (
                <div className="benefit-item" key={benefit}>
                  <CheckCircle2 size={19} /><span>{benefit}</span>
                </div>
              ))}
            </div>
            <Link href={accountLink} className="primary-button">
              {isLoggedIn ? t.benefits.access : t.benefits.join}<ArrowRight size={18} />
            </Link>
          </div>

          <div className="benefits-visual">
            <div className="benefits-decoration"><GraduationCap size={105} strokeWidth={1.1} /></div>
            <div className="benefits-quote">
              <span className="quote-mark">“</span>
              <h3>{t.benefits.quote}</h3>
              <p>{t.benefits.quoteTranslation}</p>
              <div className="quote-line" />
              <span className="quote-brand">DEUTSCH ERFOLG</span>
            </div>
          </div>
        </div>
      </section>

      {/* TARIFS PRO */}
      <section className="home-pricing-section" id="tarifs">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">DEUTSCH ERFOLG · PRO</span>
            <h2>{premium.pricingTitle}</h2>
            <p>{premium.pricingDesc}</p>
          </div>
          <div className="home-price-grid">
            {homePlans.map((plan, index) => {
              const reference = homePlans[0].price * plan.months
              const saving = reference - plan.price
              return (
                <article className={`home-price-card ${index === 1 ? 'recommended' : ''}`} key={plan.months}>
                  <span className="home-price-recommended">{index === 1 ? premium.popular : ''}</span>
                  <h3>{premium.durations[index]}</h3>
                  <div className="home-price-reference">{saving > 0 && <><s dir="ltr">{reference} DH</s><span>{premium.monthly}</span></>}</div>
                  <div className="home-price-amount" dir="ltr">{plan.price} <small>DH</small></div>
                  <span className="home-price-total">{premium.priceTotal}</span>
                  <div className="home-price-saving">{saving > 0 && <>{premium.saving} : <bdi>{saving} DH</bdi></>}</div>
                  <Link href={isLoggedIn ? '/espace-etudiant/pro' : '/inscription'} className="home-price-link">{premium.choose}<ArrowRight size={16} /></Link>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* APPEL À L'ACTION */}
      <section className="final-cta">
        <div className="final-cta-content">
          <span>{t.cta.eyebrow}</span>
          <h2>{isLoggedIn ? welcomeMessage : t.cta.title}</h2>
          <p>{isLoggedIn ? t.cta.description : t.cta.guestDescription}</p>
          <Link href={accountLink} className="final-cta-button">
            {isLoggedIn ? t.cta.continue : t.cta.create}<ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="home-brand">
              <span className="brand-icon"><GraduationCap size={29} /></span>
              <span>Deutsch <strong>Erfolg</strong></span>
            </Link>
            <p>{t.footer.description}</p>
          </div>

          <div className="footer-links">
            <strong>{t.footer.navigation}</strong>
            <a href="#accueil">{t.footer.home}</a>
            <a href="#formation">{t.footer.formation}</a>
            <a href="#grammatik" lang="de">Grammatik</a>
            <a href="#methode">{t.footer.method}</a>
            <a href="#niveaux">{t.footer.levels}</a>
            <a href="#avantages">{t.footer.about}</a>
            <a href="#tarifs">{premium.pricing}</a>
          </div>

          <div className="footer-links">
            <strong>{t.footer.account}</strong>
            {isLoggedIn ? (
              <>
                <Link href="/espace-etudiant">{t.footer.studentSpace}</Link>
                <button type="button" className="footer-logout" onClick={handleSignOut} disabled={signingOut}>
                  {signingOut ? t.footer.logoutLoading : t.footer.logout}
                </button>
              </>
            ) : (
              <>
                <Link href="/connexion">{t.footer.login}</Link>
                <Link href="/inscription">{t.footer.register}</Link>
              </>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Deutsch Erfolg. {t.footer.rights}</span>
          <Link href="/administration">{t.footer.administration}</Link>
        </div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .home-page { background:#fff; color:#172B4D; font-family:Arial,Helvetica,sans-serif; overflow:visible; padding-bottom:155px; }
        .home-header { min-height:82px; background:#fff; border-bottom:1px solid #edf0f4; position:relative; z-index:5; }
        .home-nav { max-width:1240px; min-height:82px; margin:auto; padding:10px 28px; display:flex; align-items:center; justify-content:space-between; gap:25px; }
        .home-brand { display:inline-flex; align-items:center; gap:10px; color:#172B4D; text-decoration:none; font-size:20px; font-weight:700; white-space:nowrap; }
        .home-brand strong { color:#B38D49; }
        .brand-icon { color:#B38D49; display:flex; }
        .desktop-nav { display:flex; align-items:center; gap:25px; }
        .desktop-nav a { color:#637087; text-decoration:none; font-size:12px; font-weight:600; transition:.2s; }
        .desktop-nav a:hover { color:#B38D49; }
        .nav-actions { display:flex; align-items:center; gap:10px; }
        .home-language-switcher { flex-shrink:0; }
        .login-button { color:#172B4D; text-decoration:none; font-size:13px; font-weight:700; padding:12px 15px; }
        .nav-cta,.primary-button { display:inline-flex; align-items:center; justify-content:center; gap:10px; background:#172B4D; color:white; text-decoration:none; border:0; border-radius:7px; padding:13px 19px; font-size:13px; font-weight:700; transition:.2s; cursor:pointer; white-space:nowrap; }
        .nav-cta:hover,.primary-button:hover { background:#28466F; transform:translateY(-2px); }
        .auth-loading { color:#8995A5; font-size:11px; }
        .student-welcome { display:inline-flex; align-items:center; gap:8px; text-decoration:none; color:#172B4D; font-size:12px; font-weight:700; max-width:145px; }
        .student-avatar { display:grid; place-items:center; width:34px; height:34px; flex-shrink:0; border-radius:50%; background:#F5EEDC; color:#A18142; }
        .student-name { overflow:hidden; text-overflow:ellipsis; white-space:nowrap; }
        .logout-button { display:inline-flex; align-items:center; justify-content:center; gap:6px; background:transparent; color:#718096; border:1px solid #E5EAF0; border-radius:7px; padding:10px; font-size:11px; font-weight:700; cursor:pointer; transition:.2s; white-space:nowrap; }
        .logout-button:hover { color:#B44D4D; border-color:#E5BDBD; background:#FFF8F8; }
        .logout-button:disabled { opacity:.6; cursor:wait; }

        .hero-section { background:#F7F8FA; position:relative; padding:85px 28px 90px; }
        .hero-container { max-width:1180px; margin:auto; display:grid; grid-template-columns:1.05fr .95fr; align-items:center; gap:55px; min-height:440px; }
        .hero-label,.section-eyebrow { display:inline-flex; align-items:center; gap:9px; color:#A18142; font-size:10px; letter-spacing:1.5px; font-weight:800; }
        .label-dot { width:7px; height:7px; border-radius:50%; background:#C4A15C; }
        .hero-content h1 { font-size:clamp(38px,5vw,59px); line-height:1.12; letter-spacing:-2px; margin:22px 0 20px; color:#172B4D; max-width:620px; }
        .hero-content h1 span { color:#B38D49; }
        .hero-description { color:#718096; font-size:15px; line-height:1.85; max-width:520px; margin:0; }
        .hero-actions { display:flex; align-items:center; gap:20px; flex-wrap:wrap; margin-top:30px; }
        .hero-actions .primary-button { padding:15px 20px; }
        .secondary-button { display:inline-flex; align-items:center; gap:8px; color:#52627A; text-decoration:none; font-size:12px; font-weight:700; }
        .secondary-button:hover { color:#B38D49; }
        .hero-trust { display:flex; align-items:center; gap:9px; margin-top:30px; color:#7C899B; font-size:11px; }
        .trust-icon { color:#B38D49; display:flex; }
        .hero-visual { min-height:390px; display:flex; justify-content:center; align-items:center; position:relative; }
        .visual-glow { width:350px; height:350px; border-radius:50%; background:#E9E1D1; position:absolute; opacity:.65; }
        .main-visual-card { width:min(100%,390px); background:white; border-radius:17px; padding:28px; position:relative; z-index:1; box-shadow:0 20px 60px rgba(23,43,77,.12); border:1px solid #edf0f4; }
        .visual-card-top { display:flex; justify-content:space-between; align-items:center; }
        .visual-small { color:#A18142; font-size:9px; letter-spacing:1.4px; font-weight:800; }
        .visual-card-top h3 { font-size:21px; margin:8px 0 0; }
        .visual-trophy { width:48px; height:48px; display:grid; place-items:center; border-radius:13px; background:#F7F0E1; color:#B38D49; }
        .visual-levels { display:grid; gap:12px; margin-top:28px; }
        .visual-level { display:flex; align-items:center; gap:13px; border:1px solid #E9EDF2; border-radius:10px; padding:13px; }
        .visual-level > div:nth-child(2) { flex:1; }
        .visual-level > svg { color:#B38D49; }
        .level-circle { width:43px; height:43px; display:grid; place-items:center; border-radius:10px; background:#F5EEDC; color:#99763B; font-weight:800; font-size:15px; }
        .b2-level .level-circle { background:#EAF0F7; color:#355477; }
        .visual-level strong,.visual-level span { display:block; }
        .visual-level strong { font-size:12px; }
        .visual-level span { color:#8B96A5; font-size:10px; margin-top:4px; }
        .visual-divider { height:1px; background:#EDF0F3; margin:22px 0 17px; }
        .visual-progress-title { display:flex; justify-content:space-between; color:#64748B; font-size:10px; font-weight:700; }
        .visual-progress-title span:last-child { color:#A18142; }
        .visual-skills { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-top:15px; }
        .visual-skills span { display:flex; align-items:center; gap:8px; color:#637087; font-size:11px; }
        .visual-skills svg { color:#B38D49; }
        .floating-note { position:absolute; z-index:2; display:flex; align-items:center; gap:10px; background:white; padding:12px 15px; border-radius:11px; box-shadow:0 10px 30px rgba(23,43,77,.12); }
        .note-top { top:30px; right:-15px; }
        .note-bottom { bottom:27px; left:-17px; }
        .floating-icon { width:34px; height:34px; display:grid; place-items:center; border-radius:9px; background:#EDF2F8; color:#355477; }
        .gold-icon { background:#F7F0E1; color:#B38D49; }
        .floating-note strong,.floating-note span { display:block; }
        .floating-note strong { font-size:11px; }
        .floating-note span { color:#8B96A5; font-size:9px; margin-top:4px; }
        .hero-bottom-line { position:absolute; bottom:0; left:0; right:0; height:4px; background:linear-gradient(90deg,#172B4D 0%,#B38D49 100%); }


        /* ESPACE DÉBUTANT */
        .beginner-section {
          position:relative;
          overflow:hidden;
          padding:85px 28px;
          background:linear-gradient(125deg,#142540 0%,#1D3B63 58%,#284B73 100%);
          color:white;
        }
        .beginner-section:before {
          content:"";
          position:absolute;
          width:500px;
          height:500px;
          border-radius:50%;
          border:1px solid rgba(255,255,255,.08);
          top:-280px;
          right:-100px;
        }
        .beginner-container {
          max-width:1180px;
          margin:auto;
          display:grid;
          grid-template-columns:1.05fr .95fr;
          align-items:center;
          gap:65px;
          position:relative;
          z-index:1;
        }
        .beginner-content { max-width:590px; }
        .beginner-badge {
          display:inline-flex;
          align-items:center;
          gap:8px;
          background:rgba(214,181,109,.15);
          color:#F0D99E;
          border:1px solid rgba(214,181,109,.35);
          padding:9px 13px;
          border-radius:30px;
          font-size:10px;
          font-weight:800;
          letter-spacing:.5px;
          margin-bottom:27px;
        }
        .beginner-eyebrow {
          display:block;
          color:#D6B56D;
          font-size:10px;
          font-weight:800;
          letter-spacing:2px;
          margin-bottom:13px;
        }
        .beginner-content h2 {
          color:white;
          font-size:clamp(32px,4vw,48px);
          line-height:1.2;
          letter-spacing:-1.5px;
          margin:0 0 20px;
        }
        .beginner-content h2 span {
          color:#E2C47E;
        }
        .beginner-description {
          color:#D0D9E5;
          font-size:14px;
          line-height:1.9;
          max-width:530px;
          margin:0;
        }
        .beginner-features {
          display:flex;
          flex-wrap:wrap;
          gap:11px;
          margin:25px 0 30px;
        }
        .beginner-features span {
          color:#EDF2F8;
          background:rgba(255,255,255,.09);
          border:1px solid rgba(255,255,255,.13);
          border-radius:7px;
          padding:9px 12px;
          font-size:11px;
          font-weight:600;
        }
        .beginner-button {
          display:inline-flex;
          align-items:center;
          justify-content:center;
          gap:12px;
          background:#D6B56D;
          color:#172B4D;
          text-decoration:none;
          padding:16px 23px;
          border-radius:8px;
          font-size:13px;
          font-weight:800;
          transition:.25s;
        }
        .beginner-button:hover {
          background:#E9CD8D;
          transform:translateY(-3px);
          box-shadow:0 12px 25px rgba(0,0,0,.2);
        }
        .beginner-no-account {
          display:flex;
          align-items:center;
          gap:8px;
          color:#C5D3E3;
          font-size:11px;
          margin-top:19px;
        }
        .beginner-no-account svg { color:#D6B56D; }
        .beginner-visual {
          position:relative;
          min-height:390px;
        }
        .beginner-photo-main {
          position:absolute;
          width:78%;
          height:330px;
          right:0;
          top:10px;
          overflow:hidden;
          border-radius:18px;
          border:5px solid rgba(255,255,255,.13);
          box-shadow:0 25px 55px rgba(0,0,0,.25);
        }
        .beginner-photo-main img,
        .beginner-photo-small img {
          width:100%;
          height:100%;
          object-fit:cover;
          display:block;
        }
        .beginner-photo-small {
          position:absolute;
          width:43%;
          height:165px;
          left:0;
          bottom:0;
          overflow:hidden;
          border:5px solid #1D3B63;
          border-radius:15px;
          box-shadow:0 15px 35px rgba(0,0,0,.25);
        }
        .beginner-floating-card {
          position:absolute;
          right:-5px;
          bottom:27px;
          display:flex;
          align-items:center;
          gap:12px;
          background:white;
          color:#172B4D;
          padding:13px 17px;
          border-radius:12px;
          box-shadow:0 12px 30px rgba(0,0,0,.2);
        }
        .beginner-floating-card > span { font-size:27px; }
        .beginner-floating-card strong,
        .beginner-floating-card small { display:block; }
        .beginner-floating-card strong { font-size:15px; }
        .beginner-floating-card small {
          color:#778498;
          font-size:9px;
          margin-top:4px;
        }

        @media(max-width:900px) {
          .beginner-container { gap:30px; }
          .beginner-visual { min-height:330px; }
          .beginner-photo-main { height:285px; }
        }
        @media(max-width:650px) {
          .beginner-section { padding:65px 18px 75px; }
          .beginner-container { grid-template-columns:1fr; gap:35px; }
          .beginner-content h2 { font-size:34px; }
          .beginner-description { font-size:13px; }
          .beginner-visual { min-height:320px; margin:0 5px; }
          .beginner-photo-main { width:83%; height:275px; }
          .beginner-photo-small { width:46%; height:135px; }
          .beginner-floating-card { right:-4px; bottom:13px; }
          .beginner-features { gap:8px; }
        }

        /* RTL - ESPACE DÉBUTANT */
        html[dir="rtl"] .beginner-content { text-align:right; }
        html[dir="rtl"] .beginner-photo-main { right:auto; left:0; }
        html[dir="rtl"] .beginner-photo-small { left:auto; right:0; }
        html[dir="rtl"] .beginner-floating-card { right:auto; left:-5px; }
        html[dir="rtl"] .beginner-button svg { transform:rotate(180deg); }
        @media(max-width:650px) {
          html[dir="rtl"] .beginner-floating-card { left:-4px; }
        }


        .section-container { max-width:1180px; margin:auto; padding-left:28px; padding-right:28px; }
        .levels-section,.skills-section { padding:85px 0; }
        .section-heading { text-align:center; max-width:720px; margin:0 auto 43px; }
        .section-heading h2,.benefits-content h2,.method-intro h2 { font-size:clamp(27px,3.5vw,39px); line-height:1.2; letter-spacing:-1px; margin:13px 0; color:#172B4D; }
        .section-heading h2 span,.benefits-content h2 span,.method-intro h2 span { color:#B38D49; }
        .section-heading p,.method-intro > p { color:#7B8798; font-size:13px; line-height:1.7; }

        /* SECTION DES TROIS PILIERS */
        .method-section { padding:86px 0 92px; position:relative; overflow:hidden; background:linear-gradient(180deg,#F5F6F8 0%,#FFFFFF 100%); }
        .method-section:before { content:""; position:absolute; width:420px; height:420px; border-radius:50%; background:rgba(214,181,109,.08); top:-240px; right:-120px; pointer-events:none; }
        .method-intro { text-align:center; max-width:760px; margin:0 auto 43px; position:relative; }
        .method-intro h2 { margin:14px 0 12px; }
        .method-intro > p { max-width:650px; margin:0 auto; line-height:1.8; }
        .method-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:22px; position:relative; }
        .method-card { color:inherit; text-decoration:none; border:1px solid #E6EAF0; border-radius:19px; padding:30px 27px 25px; background:#fff; transition:transform .25s,box-shadow .25s,border-color .25s; display:flex; flex-direction:column; min-height:335px; position:relative; overflow:hidden; box-shadow:0 10px 32px rgba(23,43,77,.045); }
        .method-card:before { content:""; position:absolute; height:4px; left:0; right:0; top:0; background:#D6B56D; transform:scaleX(0); transform-origin:left; transition:transform .25s; }
        .method-card:hover { transform:translateY(-8px); box-shadow:0 22px 48px rgba(23,43,77,.12); border-color:#D9C69E; }
        .method-card:hover:before { transform:scaleX(1); }
        .method-card-heading { display:flex; align-items:center; justify-content:space-between; margin-bottom:25px; }
        .method-icon { display:grid; place-items:center; width:62px; height:62px; border-radius:17px; background:#F7F0E1; color:#A18142; }
        .method-number { font-size:12px; font-weight:800; letter-spacing:1px; color:#B9C1CC; }
        .method-tag { color:#A18142; font-size:9px; letter-spacing:1.35px; font-weight:800; }
        .method-card h3 { font-size:25px; margin:11px 0 10px; color:#172B4D; letter-spacing:-.5px; }
        .method-card h3 span { font-size:20px; }
        .method-card p { color:#778498; font-size:12px; line-height:1.9; margin:0 0 23px; }
        .method-bottom { display:flex; justify-content:space-between; align-items:center; gap:10px; margin-top:auto; border-top:1px solid #E9EDF2; padding-top:17px; color:#92723B; font-size:11px; font-weight:800; }
        .method-arrow { display:grid; place-items:center; width:34px; height:34px; border-radius:50%; background:#F7F0E1; color:#98783B; transition:transform .2s; }
        .method-card:hover .method-arrow { transform:translateX(4px); }
        .method-card-featured { background:linear-gradient(145deg,#172B4D 0%,#263F62 100%); color:white; border-color:#172B4D; box-shadow:0 16px 38px rgba(23,43,77,.17); }
        .method-card-featured:before { background:#E2C47E; }
        .method-card-featured .method-icon { background:rgba(214,181,109,.16); color:#E2C47E; }
        .method-card-featured .method-number { color:#91A1B7; }
        .method-card-featured .method-tag { color:#E2C47E; }
        .method-card-featured h3 { color:white; }
        .method-card-featured p { color:#C2CCDA; }
        .method-card-featured .method-bottom { border-color:rgba(255,255,255,.17); color:#E2C47E; }
        .method-card-featured .method-arrow { background:#D6B56D; color:#172B4D; }
        .method-card-extra .method-icon { background:#EDF2F8; color:#355477; }
        .method-card-extra .method-tag { color:#587493; }

        .levels-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
        .level-card { border:1px solid #E8ECF1; border-radius:14px; padding:29px 31px; background:white; }
        .level-card-dark { background:#172B4D; color:white; border-color:#172B4D; }
        .level-card-top { display:flex; justify-content:space-between; align-items:center; }
        .level-tag { background:#F5EEDC; color:#98783B; border-radius:5px; padding:7px 10px; font-size:9px; font-weight:800; letter-spacing:1px; }
        .level-card-dark .level-tag { background:rgba(214,181,109,.16); color:#E2C47E; }
        .level-number { color:#C0C8D2; font-size:12px; font-weight:700; }
        .level-card-dark .level-number { color:#8293AA; }
        .big-level { color:#B38D49; font-size:58px; line-height:1; font-weight:800; margin-top:28px; letter-spacing:-3px; }
        .level-card h3 { font-size:19px; margin:12px 0 9px; }
        .level-card p { color:#7B8798; font-size:12px; line-height:1.8; max-width:430px; min-height:44px; }
        .level-card-dark p { color:#C2CCDA; }
        .level-card-footer { display:flex; align-items:center; justify-content:space-between; border-top:1px solid #E9EDF2; padding-top:17px; margin-top:23px; color:#9A7B41; font-size:11px; font-weight:700; }
        .level-card-dark .level-card-footer { border-color:rgba(255,255,255,.15); color:#E2C47E; }
        .level-card-footer a { display:grid; place-items:center; width:34px; height:34px; border-radius:50%; background:#F5EEDC; color:#98783B; }
        .level-card-dark .level-card-footer a { background:#D6B56D; color:#172B4D; }

        .skills-section { background:#F7F8FA; }
        .skills-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:15px; }
        .skill-card { display:block; color:inherit; text-decoration:none; background:white; border:1px solid #E9EDF2; border-radius:12px; padding:22px 19px; transition:.2s; }
        .skill-card:hover { transform:translateY(-5px); box-shadow:0 12px 30px rgba(23,43,77,.07); }
        .skill-card-top { display:flex; justify-content:space-between; align-items:center; }
        .skill-icon { width:47px; height:47px; display:grid; place-items:center; background:#F5EEDC; color:#A18142; border-radius:11px; }
        .skill-card-top > span { color:#C5CCD5; font-size:11px; font-weight:800; }
        .skill-card h3 { font-size:20px; margin:20px 0 5px; }
        .skill-card > strong { font-size:10px; color:#A18142; }
        .skill-card p { color:#7B8798; font-size:11px; line-height:1.8; min-height:80px; }
        .skill-card-line { height:3px; width:35px; background:#D6B56D; border-radius:5px; }

        .benefits-section { padding:90px 0; }
        .benefits-container { display:grid; grid-template-columns:1fr 1fr; align-items:center; gap:65px; }
        .benefits-content h2 { margin-top:16px; }
        .benefits-content > p { color:#7B8798; font-size:13px; line-height:1.9; max-width:520px; }
        .benefits-list { display:grid; gap:16px; margin:27px 0 30px; }
        .benefit-item { display:flex; align-items:center; gap:11px; color:#52627A; font-size:12px; }
        .benefit-item svg { color:#B38D49; flex-shrink:0; }
        .benefits-visual { min-height:340px; border-radius:17px; background:#172B4D; display:grid; place-items:center; position:relative; overflow:hidden; padding:35px; }
        .benefits-decoration { position:absolute; top:-25px; right:-15px; color:rgba(214,181,109,.12); transform:rotate(12deg); }
        .benefits-quote { position:relative; text-align:center; max-width:370px; }
        .quote-mark { color:#D6B56D; font-family:Georgia,serif; font-size:70px; line-height:.7; }
        .benefits-quote h3 { color:white; font-size:26px; line-height:1.4; font-weight:600; }
        .benefits-quote p { color:#C2CCDA; font-size:12px; }
        .quote-line { width:40px; height:2px; background:#D6B56D; margin:23px auto; }
        .quote-brand { color:#D6B56D; font-size:9px; letter-spacing:2px; font-weight:800; }

        /* BARRE D'APPEL À L'ACTION FIXE */
        .final-cta { background:#F7F8FA; padding:17px 25px; text-align:center; border:1px solid #E8ECF1; position:fixed; bottom:18px; left:50%; transform:translateX(-50%); width:min(92%,850px); z-index:90; border-radius:14px; box-shadow:0 8px 35px rgba(23,43,77,.18); }
        .final-cta-content > span { color:#A18142; font-size:9px; letter-spacing:1.5px; font-weight:800; }
        .final-cta h2 { color:#172B4D; font-size:21px; margin:7px 0; }
        .final-cta p { color:#7B8798; font-size:12px; margin:5px 0 12px; }
        .final-cta-button { display:inline-flex; align-items:center; gap:10px; background:#D6B56D; color:#172B4D; padding:11px 18px; border-radius:7px; text-decoration:none; font-size:12px; font-weight:800; transition:.2s; }
        .final-cta-button:hover { background:#E4C985; transform:translateY(-2px); }

        .home-footer { background:#142540; color:white; padding:48px 28px 0; }
        .footer-main { max-width:1180px; margin:auto; display:grid; grid-template-columns:2fr 1fr 1fr; gap:55px; padding-bottom:40px; }
        .footer-brand .home-brand { color:white; }
        .footer-brand p { color:#AEBBCD; font-size:11px; line-height:1.8; max-width:300px; margin-top:17px; }
        .footer-links { display:flex; flex-direction:column; gap:13px; }
        .footer-links strong { color:#D6B56D; font-size:12px; margin-bottom:5px; }
        .footer-links a,.footer-logout { color:#C2CCDA; text-decoration:none; font-size:11px; }
        .footer-logout { border:0; padding:0; text-align:left; background:transparent; cursor:pointer; font-family:inherit; }
        .footer-links a:hover,.footer-logout:hover,.footer-bottom a:hover { color:#D6B56D; }
        .footer-bottom { max-width:1180px; margin:auto; border-top:1px solid rgba(255,255,255,.12); padding:19px 0; display:flex; justify-content:space-between; gap:15px; color:#9EADBF; font-size:10px; }
        .footer-bottom a { color:#D6B56D; text-decoration:none; }

        @media(max-width:1050px) {
          .desktop-nav { gap:14px; }
          .desktop-nav a { font-size:11px; }
          .student-welcome { max-width:105px; }
          .logout-button span { display:none; }
        }
        @media(max-width:900px) {
          .desktop-nav { gap:15px; }
          .desktop-nav a { font-size:11px; }
          .hero-container { gap:25px; }
          .skills-grid { grid-template-columns:repeat(2,1fr); }
          .benefits-container { gap:30px; }
          .note-top { right:-5px; }
          .note-bottom { left:-5px; }
          .method-grid { gap:14px; }
          .method-card { padding:25px 20px; }
        }
        @media(max-width:650px) {
          .home-header { min-height:70px; }
          .home-nav { min-height:70px; padding:10px 17px; gap:10px; }
          .home-brand { font-size:17px; }
          .desktop-nav { display:none; }
          .nav-actions { gap:5px; }
          .login-button { padding:10px 8px; font-size:11px; }
          .nav-cta { padding:11px 12px; font-size:11px; }
          .student-welcome { max-width:90px; }
          .student-name { font-size:10px; }
          .logout-button { width:34px; height:34px; padding:8px; }
          .logout-button span { display:none; }
          .hero-section { padding:55px 18px 65px; }
          .hero-container { grid-template-columns:1fr; gap:30px; }
          .hero-content h1 { font-size:39px; letter-spacing:-1.5px; }
          .hero-description { font-size:13px; }
          .hero-actions { align-items:flex-start; flex-direction:column; gap:17px; }
          .hero-visual { min-height:360px; }
          .main-visual-card { padding:21px; }
          .note-top { right:-4px; top:10px; }
          .note-bottom { left:-3px; bottom:10px; }
          .levels-section,.skills-section { padding:62px 0; }
          .method-section { padding:65px 0 70px; }
          .section-container { padding-left:18px; padding-right:18px; }
          .section-heading,.method-intro { margin-bottom:30px; }
          .section-heading h2,.method-intro h2 { font-size:28px; }
          .levels-grid { grid-template-columns:1fr; }
          .level-card { padding:23px; }
          .skills-grid { grid-template-columns:1fr 1fr; gap:10px; }
          .skill-card { padding:15px 12px; }
          .skill-card h3 { font-size:17px; }
          .skill-card p { font-size:10px; min-height:105px; }
          .method-grid { grid-template-columns:1fr; gap:14px; }
          .method-card { min-height:0; padding:24px; }
          .method-card-heading { margin-bottom:18px; }
          .method-card h3 { font-size:23px; }
          .method-card p { min-height:0; }
          .benefits-section { padding:65px 0; }
          .benefits-container { grid-template-columns:1fr; gap:35px; }
          .benefits-content h2 { font-size:30px; }
          .benefits-visual { min-height:290px; }
          .benefits-quote h3 { font-size:22px; }
          .final-cta { width:calc(100% - 20px); bottom:10px; padding:13px 12px; border-radius:12px; }
          .final-cta-content > span { font-size:8px; letter-spacing:1px; }
          .final-cta h2 { font-size:16px; margin:6px 0; }
          .final-cta p { font-size:11px; margin:5px 0 9px; }
          .final-cta-button { padding:10px 14px; font-size:11px; }
          .home-page { padding-bottom:145px; }
          .footer-main { grid-template-columns:1fr 1fr; gap:30px; }
          .footer-brand { grid-column:1 / -1; }
          .footer-bottom { flex-wrap:wrap; }
        }
        @media(max-width:390px) {
          .home-brand { font-size:15px; }
          .brand-icon svg { width:25px; }
          .nav-cta { font-size:10px; padding:10px 9px; }
          .student-welcome { max-width:72px; }
          .student-avatar { width:29px; height:29px; }
          .skills-grid { grid-template-columns:1fr; }
          .skill-card p { min-height:auto; }
          .final-cta h2 { font-size:14px; }
          .final-cta p { font-size:10px; }
        }

        /* SUPPORT RTL - ARABE */
        html[dir="rtl"] .home-page { direction:rtl; text-align:right; }
        html[dir="rtl"] .hero-content h1,
        html[dir="rtl"] .hero-description,
        html[dir="rtl"] .benefits-content,
        html[dir="rtl"] .level-card,
        html[dir="rtl"] .skill-card,
        html[dir="rtl"] .method-card { text-align:right; }
        html[dir="rtl"] .section-heading,.section-heading { text-align:center; }
        html[dir="rtl"] .hero-label,
        html[dir="rtl"] .hero-trust,
        html[dir="rtl"] .benefit-item { flex-direction:row; }
        html[dir="rtl"] .note-top { right:auto; left:-15px; }
        html[dir="rtl"] .note-bottom { left:auto; right:-17px; }
        html[dir="rtl"] .benefits-decoration { right:auto; left:-15px; }
        html[dir="rtl"] .footer-logout { text-align:right; }
        html[dir="rtl"] .final-cta { text-align:center; }
        html[dir="rtl"] .home-page .lucide-arrow-right { transform:rotate(180deg); }
        @media(max-width:900px) {
          html[dir="rtl"] .note-top { left:-5px; }
          html[dir="rtl"] .note-bottom { right:-5px; }
        }
        @media(max-width:650px) {
          html[dir="rtl"] .note-top { left:-4px; }
          html[dir="rtl"] .note-bottom { right:-3px; }
        }

        /* DE_HOME_PREMIUM_V1 — scoped visual layer */
        .home-page { --h-navy:var(--de-navy,#192b43); --h-gold:var(--de-gold,#b49760); --h-gold-text:var(--de-gold-text,#806337); --h-ivory:var(--de-ivory,#f7f5f0); --h-border:var(--de-border,#e3ded3); --h-muted:var(--de-muted,#626a75); --h-tint:var(--de-tint,#f1ece2); font-family:var(--de-sans,'Plus Jakarta Sans',Arial,sans-serif); color:var(--h-navy); padding-bottom:0; background:white; }
        .home-page .home-header { border-color:var(--h-border); }
        .home-page .home-nav { gap:18px; flex-wrap:wrap; }
        .home-page .home-brand { font-family:var(--de-serif,Georgia,serif); font-weight:400; color:var(--h-navy); }
        .home-page .home-brand strong { font-weight:400; color:var(--h-gold-text); }
        .home-page .brand-icon,.home-page .hero-label,.home-page .section-eyebrow { color:var(--h-gold-text); }
        .home-page .desktop-nav { gap:18px; flex-wrap:wrap; }
        .home-page .desktop-nav a,.home-page .login-button,.home-page .student-welcome { color:var(--h-navy); }
        .home-page .nav-actions { flex-wrap:wrap; min-width:0; }
        .home-page :is(.nav-cta,.primary-button,.home-price-link) { background:var(--h-navy); color:white; border-radius:8px; white-space:normal; text-align:center; box-shadow:none; }
        .home-page :is(.nav-cta,.primary-button,.home-price-link):hover { background:#30465f; transform:none; }
        .home-page .hero-section,.home-page .skills-section,.home-page .home-pricing-section { background:var(--h-ivory); }
        .home-page .hero-section { padding-block:clamp(42px,6vw,82px); }
        .home-page .hero-container { min-height:0; gap:clamp(24px,5vw,56px); grid-template-columns:minmax(0,1.05fr) minmax(0,.95fr); }
        .home-page :is(.hero-content h1,.section-heading h2,.method-intro h2,.beginner-content h2,.benefits-content h2,.home-library-copy h2,.final-cta h2) { font-family:var(--de-serif,Georgia,serif); font-weight:400; letter-spacing:-.5px; line-height:1.18; }
        .home-page .hero-content h1 { color:var(--h-navy); font-size:clamp(36px,5vw,60px); }
        .home-page :is(.hero-content h1 span,.section-heading h2 span,.method-intro h2 span,.benefits-content h2 span) { color:var(--h-gold-text); }
        .home-page :is(.hero-description,.hero-trust,.section-heading p,.method-intro > p,.method-card p,.level-card p,.skill-card p,.benefits-content > p,.benefit-item) { color:var(--h-muted); font-size:14px; line-height:1.75; }
        .home-page .hero-trust { font-size:12px; }
        .home-page .hero-visual { min-height:0; }
        .home-page :is(.visual-glow,.floating-note,.hero-bottom-line,.benefits-decoration), .home-page .beginner-section::before, .home-page .method-section::before, .home-page .method-card::before { display:none; }
        .home-page :is(.main-visual-card,.method-card,.level-card,.skill-card) { border:1px solid var(--h-border); border-radius:10px; box-shadow:none; }
        .home-page .main-visual-card { width:100%; max-width:440px; }
        .home-page :is(.visual-trophy,.level-circle,.b2-level .level-circle,.method-icon,.method-card-extra .method-icon,.skill-icon,.method-arrow,.level-card-footer a,.student-avatar) { background:var(--h-tint); color:var(--h-gold-text); border-radius:8px; }
        .home-page :is(.visual-level,.visual-divider,.method-bottom,.level-card-footer) { border-color:var(--h-border); }
        .home-page .visual-level span { color:var(--h-muted); }
        .home-page .visual-small,.home-page .method-tag,.home-page .method-card-extra .method-tag,.home-page .skill-card > strong,.home-page .method-bottom,.home-page .level-card-footer { color:var(--h-gold-text); }
        .home-page :is(.beginner-section,.benefits-visual,.home-footer) { background:var(--h-navy); }
        .home-page .beginner-section { padding-block:clamp(45px,6vw,78px); }
        .home-page .beginner-badge { border-radius:5px; margin-bottom:18px; }
        .home-page .beginner-content h2 span { color:#e3cb96; }
        .home-page .beginner-button,.home-page .final-cta-button { background:#e3cb96; color:var(--h-navy); border-radius:8px; }
        .home-page :is(.beginner-button,.final-cta-button):hover { transform:none; box-shadow:none; background:#f0dcb2; }
        .home-page :is(.beginner-photo-main,.beginner-photo-small) { border-radius:10px; border-width:3px; box-shadow:none; }
        .home-page .beginner-floating-card { border-radius:8px; box-shadow:none; }
        .home-page :is(.method-section,.levels-section,.skills-section,.benefits-section,.home-pricing-section) { padding-block:clamp(44px,6vw,78px); }
        .home-page .method-section { background:white; }
        .home-page :is(.method-card,.skill-card):hover { transform:none; border-color:var(--h-gold); box-shadow:0 4px 16px rgba(25,43,67,.07); }
        .home-page .method-card { min-height:290px; padding:24px; }
        .home-page .method-card-featured { background:var(--h-navy); color:white; border-color:var(--h-navy); }
        .home-page .method-card-featured :is(.method-tag,.method-bottom,.method-icon) { color:#e3cb96; }
        .home-page .method-card-featured .method-icon { background:#30465f; }
        .home-page .method-card-featured h3 { color:white; }
        .home-page .method-card-featured p { color:#d2dae5; }
        .home-page .method-card-featured .method-bottom { border-color:#526078; }
        .home-page .method-card-featured .method-arrow { background:#e3cb96; color:var(--h-navy); }
        .home-page .method-card h3,.home-page .level-card h3,.home-page .skill-card h3,.home-page .big-level,.home-page .home-price-card h3,.home-page .home-price-amount { font-family:var(--de-serif,Georgia,serif); font-weight:400; letter-spacing:0; overflow-wrap:anywhere; }
        .home-page .home-grammar-count { display:block; font-size:12px; color:var(--h-gold-text); margin-bottom:10px; font-weight:600; }
        .home-page .level-card-dark { background:var(--h-navy); color:white; border-color:var(--h-navy); }
        .home-page .level-card-dark :is(.big-level,.level-card-footer) { color:#e3cb96; }
        .home-page .level-card-dark p { color:#d2dae5; }
        .home-page .level-card-dark .level-card-footer { border-color:#526078; }
        .home-page .skill-card p { min-height:0; font-size:13px; }
        .home-page .benefits-visual { border-radius:10px; }
        .home-page .home-library-section { background:var(--h-ivory); padding:34px 0; border-block:1px solid var(--h-border); }
        .home-page .home-library-inner { display:flex; align-items:center; gap:24px; flex-wrap:wrap; }
        .home-page .home-library-symbol { display:grid; place-items:center; width:78px; height:78px; flex-shrink:0; border:1px solid var(--h-border); background:white; color:var(--h-gold-text); border-radius:10px; }
        .home-page .home-library-copy { flex:1 1 280px; min-width:0; }
        .home-page .home-library-copy h2 { color:var(--h-navy); font-size:clamp(24px,3vw,34px); margin:8px 0; text-align:start; }
        .home-page .home-library-copy p { color:var(--h-muted); font-size:14px; line-height:1.7; margin:0 0 12px; }
        .home-page .home-library-languages { display:flex; flex-wrap:wrap; gap:8px; }
        .home-page .home-library-languages span { font-size:12px; color:var(--h-gold-text); border:1px solid var(--h-border); padding:4px 8px; border-radius:5px; }
        .home-page .home-price-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:16px; }
        .home-page .home-price-card { min-width:0; display:flex; flex-direction:column; padding:24px; border:1px solid var(--h-border); border-radius:10px; background:white; text-align:start; }
        .home-page .home-price-card.recommended { border-color:var(--h-gold-text); box-shadow:inset 0 0 0 1px var(--h-gold-text); }
        .home-page .home-price-recommended { color:var(--h-gold-text); font-weight:700; font-size:11px; min-height:18px; }
        .home-page .home-price-card h3 { font-size:24px; margin:10px 0 14px; color:var(--h-navy); }
        .home-page .home-price-reference { display:flex; flex-direction:column; gap:4px; min-height:46px; color:var(--h-muted); font-size:11px; }
        .home-page .home-price-reference s { font-size:16px; align-self:flex-start; }
        .home-page .home-price-amount { font-size:42px; line-height:1.15; color:var(--h-navy); align-self:flex-start; }
        .home-page .home-price-amount small { font-family:var(--de-sans,Arial,sans-serif); font-size:14px; font-weight:600; }
        .home-page .home-price-total { font-size:11px; color:var(--h-muted); margin-top:6px; }
        .home-page .home-price-saving { min-height:34px; color:var(--h-gold-text); font-size:13px; font-weight:600; margin-top:14px; }
        .home-page .home-price-link { display:flex; justify-content:center; align-items:center; gap:8px; padding:12px 10px; font-weight:600; font-size:13px; text-decoration:none; margin-top:auto; }
        .home-page .final-cta { position:relative; bottom:auto; left:auto; transform:none; width:100%; z-index:auto; border:0; border-radius:0; box-shadow:none; background:var(--h-navy); color:white; padding:34px 20px; }
        .home-page .final-cta h2 { color:white; font-size:clamp(23px,3vw,34px); }
        .home-page .final-cta p { color:#d2dae5; font-size:14px; }
        .home-page .final-cta-content > span { color:#e3cb96; }
        .home-page .home-footer { border-top:1px solid #526078; }
        .home-page .footer-brand .home-brand { color:white; }
        .home-page .footer-brand .home-brand strong,.home-page .footer-brand .brand-icon { color:#e3cb96; }
        .home-page :is(a,button):focus-visible { outline:2px solid var(--h-gold); outline-offset:3px; }
        .home-page svg { flex-shrink:0; }
        .home-page[dir="rtl"] { font-family:'Tajawal',Arial,sans-serif; }
        .home-page[dir="rtl"] :is(h1,h2,h3) { font-family:'Tajawal',Arial,sans-serif; letter-spacing:0; }
        .home-page[dir="rtl"] .home-library-copy h2 { text-align:right; }
        @media(max-width:1100px) { .home-page .desktop-nav { order:3; flex-basis:100%; justify-content:center; padding-bottom:6px; } }
        @media(max-width:750px) { .home-page .hero-container,.home-page .home-price-grid { grid-template-columns:1fr; } .home-page .hero-content h1 { font-size:clamp(32px,7vw,42px); } .home-page .home-price-card { padding:20px; } .home-page .home-price-reference:empty,.home-page .home-price-recommended:empty,.home-page .home-price-saving:empty { min-height:0; margin:0; } .home-page .home-library-inner > a { width:100%; } .home-page .home-nav { justify-content:space-between; } .home-page .nav-actions { justify-content:flex-start; } }
        @media(max-width:650px) { .home-page .desktop-nav { display:none; } .home-page .method-card { min-height:0; } .home-page .hero-actions { flex-direction:row; flex-wrap:wrap; align-items:center; } .home-page .home-nav { padding:12px 15px; } .home-page .student-welcome { max-width:85px; } .home-page .home-library-symbol { width:60px; height:60px; } }
        @media(prefers-reduced-motion:reduce) { .home-page *, .home-page *::before,.home-page *::after { transition:none !important; animation:none !important; } }

      `}</style>
    </main>
  )
}

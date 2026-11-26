
'use client'

import { ProNameBadge } from '@/components/student/FloatingPageTools'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'

import {
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  ArrowRight,
  Clock,
  UserRound,
  Sparkles,
  GraduationCap,
  Trophy,
  FileText,
  ChevronRight,
  Star,
  Languages,
} from 'lucide-react'

export default function StudentPage() {
  const router = useRouter()
  const { t, isRTL } = useLanguage()

  const [nom, setNom] = useState('')
  const [niveau, setNiveau] = useState('B1')

  const nomAffiche = nom || t.dashboard.studentFallback

  useEffect(() => {
    let actif = true

    async function chargerProfil() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (!actif) return

        if (!user) {
          router.push('/connexion')
          return
        }

        const { data } = await supabase
          .from('profiles')
          .select('full_name, level')
          .eq('id', user.id)
          .single()

        if (!actif) return

        setNom(
          data?.full_name ||
          user.user_metadata?.full_name ||
          user.email?.split('@')[0] ||
          ''
        )

        setNiveau(
          data?.level ||
          user.user_metadata?.niveau ||
          'B1'
        )
      } catch (error) {
        console.error('Erreur de chargement du profil :', error)
      }
    }

    chargerProfil()

    return () => {
      actif = false
    }
  }, [router])

  const niveauRoute =
    niveau?.trim().toUpperCase() === 'B2' ? 'b2' : 'b1'

  const modules = [
    {
      title: t.dashboard.readingShort,
      slug: 'lesen',
      subtitle: t.dashboard.reading,
      description: t.dashboard.readingDescription,
      Icon: BookOpen,
      color: 'blue',
    },
    {
      title: t.dashboard.listeningShort,
      slug: 'hoeren',
      subtitle: t.dashboard.listening,
      description: t.dashboard.listeningDescription,
      Icon: Headphones,
      color: 'purple',
    },
    {
      title: t.dashboard.writingShort,
      slug: 'schreiben',
      subtitle: t.dashboard.writing,
      description: t.dashboard.writingDescription,
      Icon: PenLine,
      color: 'orange',
    },
    {
      title: t.dashboard.speakingShort,
      slug: 'sprechen',
      subtitle: t.dashboard.speaking,
      description: t.dashboard.speakingDescription,
      Icon: Mic,
      color: 'green',
    },
    {
      title: t.dashboard.grammarVocabulary,
      slug: 'sprachbausteine',
      subtitle: t.dashboard.languageStructure,
      description: t.dashboard.grammarVocabularyDescription,
      Icon: BookOpen,
      color: 'gold',
    },
  ]

  return (
    <div className="student-layout de-dashboard" dir={isRTL ? 'rtl' : 'ltr'}>
      <main className="student-main">

        {/* HEADER */}

        <header className="student-header">
          <div className="header-title">
            <div className="header-brand-mark">
              <GraduationCap size={19} />
            </div>

            <div>
              <span className="header-small">DEUTSCH ERFOLG</span>
              <h2>{t.header.dashboard}</h2>
            </div>
          </div>

          <div className="student-header-profile">
            <div className="profile-avatar">
              <UserRound size={20} />
            </div>

            <div className="profile-infos">
              <strong>{nomAffiche}<ProNameBadge /></strong>
              <span>
                {t.header.student} · TELC {niveau}
              </span>
            </div>

            <div className="profile-level-indicator">
              {niveauRoute.toUpperCase()}
            </div>
          </div>
        </header>

        <div className="student-content">

          {/* ACCUEIL */}

          <section className="student-welcome">
            <div className="welcome-background-decoration">
              <div className="welcome-orbit orbit-one" />
              <div className="welcome-orbit orbit-two" />
              <div className="welcome-orbit orbit-three" />
            </div>

            <div className="welcome-content">
              <span className="welcome-tag">
                <Sparkles size={14} />
                {t.dashboard.welcomeTag}
              </span>

              <h1>
                {t.dashboard.hello}, <span>{nomAffiche}</span> !
              </h1>

              <p>{t.dashboard.welcomeDescription}</p>

              <a href="#niveaux" className="welcome-button">
                {t.dashboard.continue}
                <ArrowRight size={17} />
              </a>
            </div>

            <div className="welcome-visual">
              <div className="welcome-icon-circle">
                <GraduationCap size={76} strokeWidth={1.25} />
              </div>

              <div className="welcome-floating-star">
                <Star size={18} />
              </div>

              <div className="welcome-floating-label">
                <span>TELC</span>
                <strong>{niveau}</strong>
              </div>
            </div>

            <div className="welcome-bottom-line" />
          </section>

          {/* NIVEAUX TELC */}

          <section className="student-section" id="niveaux">
            <div className="section-heading">
              <div>
                <h2>{t.dashboard.myLevels}</h2>
                <p>{t.dashboard.chooseLevelDescription}</p>
              </div>

              <div className="section-decoration">
                <GraduationCap size={21} />
              </div>
            </div>

            <div className="student-levels">

              <Link
                href="/espace-etudiant/examens/b1"
                className={`student-level-card level-b1 ${niveauRoute === 'b1' ? 'selected' : ''}`}
              >
                <div className="level-top">
                  <span className="level-chip">
                    {t.dashboard.intermediate}
                  </span>

                  {niveauRoute === 'b1' && (
                    <span className="current-chip">
                      <span className="current-dot" />
                      {t.dashboard.myLevel}
                    </span>
                  )}
                </div>

                <div className="level-main">
                  <div className="level-info">
                    <span className="level-kicker">
                      {t.dashboard.telcCertificate}
                    </span>
                    <h3>B1</h3>
                    <p>{t.dashboard.levelB1Description}</p>
                  </div>

                  <div className="level-watermark">B1</div>
                </div>

                <div className="level-footer">
                  <span>{t.dashboard.comprehensionExpression}</span>
                  <span className="level-arrow">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>

              <Link
                href="/espace-etudiant/examens/b2"
                className={`student-level-card level-b2 ${niveauRoute === 'b2' ? 'selected' : ''}`}
              >
                <div className="level-top">
                  <span className="level-chip">
                    {t.dashboard.advanced}
                  </span>

                  {niveauRoute === 'b2' && (
                    <span className="current-chip">
                      <span className="current-dot" />
                      {t.dashboard.myLevel}
                    </span>
                  )}
                </div>

                <div className="level-main">
                  <div className="level-info">
                    <span className="level-kicker">
                      {t.dashboard.telcCertificate}
                    </span>
                    <h3>B2</h3>
                    <p>{t.dashboard.levelB2Description}</p>
                  </div>

                  <div className="level-watermark">B2</div>
                </div>

                <div className="level-footer">
                  <span>{t.dashboard.nextGoal}</span>
                  <span className="level-arrow">
                    <ArrowRight size={17} />
                  </span>
                </div>
              </Link>

            </div>
          </section>

          {/* CINQ COMPETENCES */}

          <section className="student-section">
            <div className="section-heading">
              <div>
                <h2>{t.dashboard.skills}</h2>
                <p>{t.dashboard.skillsDescription}</p>
              </div>

              <span className="skills-level-badge">
                <span className="skills-level-dot" />
                TELC {niveauRoute.toUpperCase()}
              </span>
            </div>

            <div className="student-skills">
              {modules.map(
                ({ title, slug, subtitle, description, Icon, color }, index) => (
                  <Link
                    href={`/espace-etudiant/examens/${niveauRoute}/${slug}`}
                    className={`student-skill-card skill-${color}`}
                    key={slug}
                  >
                    <div className="skill-card-top">
                      <div className="skill-symbol">
                        <Icon size={24} strokeWidth={1.8} />
                      </div>

                      <span className="skill-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <span className="skill-detail">
                      {t.dashboard.skillAreaLabel}
                    </span>

                    <span className="skill-level">
                      <span className="skill-level-dot" />
                      TELC {niveauRoute.toUpperCase()}
                    </span>

                    <h3>{title}</h3>

                    <strong>{subtitle}</strong>

                    <p>{description}</p>

                    <div className="skill-card-footer">
                      <span>{t.dashboard.startLearning}</span>
                      <span className="skill-arrow">
                        <ArrowRight size={15} />
                      </span>
                    </div>
                  </Link>
                )
              )}
            </div>

            {/* GRAMMAIRE */}

            <Link
              href="/espace-etudiant/apprentissage/grammaire"
              className="grammar-access-card"
            >
              <div className="grammar-access-icon">
                <BookOpen size={27} />
              </div>

              <div className="grammar-access-content">
                <span className="grammar-access-label">
                  {t.grammar.library}
                </span>
                <h3 lang="de" dir="ltr">Deutsche Grammatik</h3>
                <p>{t.grammar.welcomeDescription}</p>
              </div>

              <div className="grammar-access-button">
                <span>{t.dashboard.startLearning}</span>
                <ArrowRight size={17} />
              </div>
            </Link>

            {/* WÖRTERBUCH B1 */}

            <Link
              href="/espace-etudiant/apprentissage/woerterbuch-b1"
              className="dictionary-access-card"
            >
              <div className="dictionary-access-icon">
                <Languages size={27} />
              </div>

              <div className="dictionary-access-content">
                <span className="dictionary-access-label">
                  DEUTSCH · B1
                </span>

                <h3>Wörterbuch B1</h3>

                <p>
                  Découvre le vocabulaire B1 avec les traductions
                  en français et en anglais, des exemples et des
                  explications grammaticales.
                </p>

                <div className="dictionary-languages">
                  <span>🇩🇪 Deutsch</span>
                  <span>🇫🇷 Français</span>
                  <span>🇬🇧 English</span>
                </div>
              </div>

              <div className="dictionary-access-button">
                <span>Explorer le dictionnaire</span>
                <ArrowRight size={17} />
              </div>
            </Link>
          </section>

          {/* ESPACE DE TRAVAIL */}

          <section className="student-section">
            <div className="section-heading">
              <div>
                <h2>{t.dashboard.workspace}</h2>
              </div>
            </div>

            <div className="student-tools">

              <article className="tool-card">
                <div className="tool-symbol tool-blue">
                  <Clock size={22} />
                </div>

                <div className="tool-info">
                  <strong>{t.dashboard.mockExams}</strong>
                  <p>{t.dashboard.mockExamsDescription}</p>
                </div>

                <ArrowRight size={18} className="tool-arrow" />
              </article>

              <article className="tool-card">
                <div className="tool-symbol tool-gold">
                  <Trophy size={22} />
                </div>

                <div className="tool-info">
                  <strong>{t.dashboard.myResults}</strong>
                  <p>{t.dashboard.myResultsDescription}</p>
                </div>

                <ArrowRight size={18} className="tool-arrow" />
              </article>

              <article className="tool-card">
                <div className="tool-symbol tool-purple">
                  <FileText size={22} />
                </div>

                <div className="tool-info">
                  <strong>{t.dashboard.myDocuments}</strong>
                  <p>{t.dashboard.myDocumentsDescription}</p>
                </div>

                <ArrowRight size={18} className="tool-arrow" />
              </article>

            </div>
          </section>

          {/* FOOTER */}

          <footer className="student-footer">
            <span>
              © 2026 Deutsch Erfolg. {t.dashboard.footer}
            </span>

            <Link href="/">
              {t.dashboard.mainWebsite}
              <ChevronRight size={13} />
            </Link>
          </footer>

        </div>
      </main>

      <style jsx global>{`
/* Deutsch-Erfolg / Dashboard premium V1 */
.de-dashboard {
  --navy: var(--de-navy, #192b43);
  --gold: var(--de-gold, #b49760);
  --gold-text: var(--de-gold-text, #806337);
  --gold-light: var(--de-gold-light, #e3cb96);
  --muted: var(--de-muted, #626a75);
  --ivory: var(--de-ivory, #f7f5f0);
  --line: var(--de-border, #e3ded3);
  --tint: var(--de-tint, #f1ece2);
  --serif: var(--de-serif, Georgia, serif);
  min-height: 100vh; background: var(--ivory); color: var(--navy);
  font-family: var(--de-sans, 'Plus Jakarta Sans', Arial, sans-serif);
  text-align: start;
}
.de-dashboard[dir="rtl"] { --serif: 'Tajawal', Arial, sans-serif; font-family: 'Tajawal', Arial, sans-serif; }
.de-dashboard *, .de-dashboard *::before, .de-dashboard *::after { box-sizing: border-box; }
.de-dashboard .student-main { width: 100%; min-height: 100vh; min-width: 0; }
.de-dashboard .student-header { min-height: 78px; padding: 12px clamp(20px, 4vw, 46px); background: #fff; border-bottom: 1px solid var(--line); display: flex; align-items: center; justify-content: space-between; gap: 14px; position: relative; z-index: 15; }
.de-dashboard .header-title, .de-dashboard .student-header-profile { display: flex; align-items: center; gap: 12px; min-width: 0; }
.de-dashboard .header-brand-mark, .de-dashboard .profile-avatar { display: grid; place-items: center; flex-shrink: 0; width: 40px; height: 40px; background: var(--tint); color: var(--gold-text); border: 1px solid var(--line); border-radius: 8px; }
.de-dashboard .profile-avatar { border-radius: 50%; }
.de-dashboard .header-small { color: var(--gold-text); font-size: 10px; font-weight: 650; letter-spacing: .11em; }
.de-dashboard .student-header h2 { font-family: var(--serif); font-size: 20px; font-weight: 400; line-height: 1.2; margin: 4px 0 0; color: var(--navy); }
.de-dashboard .profile-infos { min-width: 0; }
.de-dashboard .profile-infos strong, .de-dashboard .profile-infos span { display: block; }
.de-dashboard .profile-infos strong { font-size: 13px; max-width: 170px; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; }
.de-dashboard .profile-infos span { font-size: 11px; color: var(--muted); margin-top: 3px; }
.de-dashboard .profile-level-indicator { padding: 5px 8px; font-size: 11px; color: var(--gold-text); border: 1px solid var(--line); border-radius: 5px; font-weight: 650; }
.de-dashboard .student-content { max-width: 1350px; padding: 30px clamp(20px, 4vw, 46px) 22px; margin-inline: auto; }
.de-dashboard .student-welcome { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 30px; overflow: hidden; min-height: 220px; padding: clamp(26px, 4vw, 44px); border-radius: 12px; background: var(--navy); color: #fff; }
.de-dashboard .welcome-content { flex: 1; min-width: 0; max-width: 680px; }
.de-dashboard .welcome-tag { display: inline-flex; gap: 7px; align-items: center; color: var(--gold-light); font-size: 11px; font-weight: 600; letter-spacing: .08em; text-transform: uppercase; }
.de-dashboard .welcome-tag svg, .de-dashboard .welcome-background-decoration, .de-dashboard .welcome-floating-star, .de-dashboard .welcome-bottom-line, .de-dashboard .welcome-icon-circle { display: none; }
.de-dashboard .student-welcome h1 { margin: 14px 0 10px; font-family: var(--serif); font-size: clamp(30px, 3.5vw, 45px); line-height: 1.2; font-weight: 400; letter-spacing: -.025em; overflow-wrap: anywhere; color: #fff; }
.de-dashboard .student-welcome h1 span { color: var(--gold-light); }
.de-dashboard .student-welcome p { margin: 0; color: #d6dfe9; line-height: 1.75; font-size: 14px; max-width: 560px; }
.de-dashboard .welcome-button { display: inline-flex; align-items: center; gap: 12px; padding: 11px 17px; min-height: 44px; margin-top: 22px; border-radius: 6px; border: 1px solid var(--gold-light); background: var(--gold-light); color: var(--navy); font-size: 12px; font-weight: 700; }
.de-dashboard .welcome-button:hover { background: #f2e3bf; }
.de-dashboard .welcome-visual { flex: 0 0 142px; display: grid; place-items: center; border-inline-start: 1px solid #ffffff30; min-height: 128px; }
.de-dashboard .welcome-floating-label { display: flex; flex-direction: column; align-items: center; gap: 8px; }
.de-dashboard .welcome-floating-label span { color: var(--gold-light); font-size: 11px; letter-spacing: .18em; }
.de-dashboard .welcome-floating-label strong { font-family: var(--serif); color: #fff; font-size: 64px; font-weight: 400; line-height: 1; }
.de-dashboard .student-section { margin-top: 36px; scroll-margin-top: 20px; }
.de-dashboard .section-heading { display: flex; align-items: center; justify-content: space-between; gap: 14px; text-align: start; margin: 0 0 16px; }
.de-dashboard .section-heading h2 { font-family: var(--serif); color: var(--navy); font-weight: 400; font-size: clamp(23px, 2.4vw, 29px); line-height: 1.25; letter-spacing: -.02em; margin: 0; text-align: start; }
.de-dashboard .section-heading p { color: var(--muted); font-size: 13px; line-height: 1.6; margin: 5px 0 0; text-align: start; }
.de-dashboard .section-decoration { display: none; }
.de-dashboard .student-levels { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
.de-dashboard :is(.student-level-card,.student-skill-card,.tool-card,.grammar-access-card,.dictionary-access-card) { background: #fff; color: var(--navy); border: 1px solid var(--line); border-radius: 10px; min-width: 0; text-decoration: none; box-shadow: none; transition: border-color .18s ease, background .18s ease; }
.de-dashboard :is(a.student-level-card,a.student-skill-card,a.grammar-access-card,a.dictionary-access-card):hover { border-color: var(--gold); background: #fdfcf9; }
.de-dashboard a:focus-visible { outline: 2px solid var(--gold-text); outline-offset: 3px; }
.de-dashboard .student-welcome a:focus-visible { outline-color: var(--gold-light); }
.de-dashboard .student-level-card { display: flex; flex-direction: column; padding: 20px; }
.de-dashboard .student-level-card.selected { border-color: var(--gold); border-inline-start: 3px solid var(--gold); }
.de-dashboard .level-top, .de-dashboard .level-footer, .de-dashboard .skill-card-top, .de-dashboard .skill-card-footer { display: flex; justify-content: space-between; align-items: center; gap: 10px; }
.de-dashboard .level-top { flex-wrap: wrap; }
.de-dashboard :is(.level-chip,.current-chip,.skills-level-badge) { font-size: 11px; font-weight: 600; color: var(--muted); }
.de-dashboard :is(.current-chip,.skills-level-badge) { display: inline-flex; gap: 6px; align-items: center; color: var(--gold-text); background: var(--tint); border-radius: 5px; padding: 5px 9px; }
.de-dashboard .skills-level-badge { white-space: nowrap; }
.de-dashboard :is(.current-dot,.skills-level-dot) { width: 6px; height: 6px; border-radius: 50%; background: var(--gold-text); flex-shrink: 0; }
.de-dashboard .level-main { display: flex; flex: 1; align-items: center; margin-block: 18px 16px; }
.de-dashboard .level-info { min-width: 0; }
.de-dashboard .level-kicker { color: var(--gold-text); font-size: 10px; font-weight: 650; letter-spacing: .08em; }
.de-dashboard .student-level-card h3 { font-family: var(--serif); font-size: 43px; font-weight: 400; line-height: 1.1; margin: 5px 0 8px; }
.de-dashboard .student-level-card p { font-size: 13px; line-height: 1.65; color: var(--muted); margin: 0; }
.de-dashboard .level-watermark { display: none; }
.de-dashboard :is(.level-footer,.skill-card-footer) { border-top: 1px solid var(--line); padding-top: 12px; font-size: 12px; color: var(--gold-text); font-weight: 600; }
.de-dashboard :is(.level-arrow,.skill-arrow) { display: grid; place-items: center; width: 27px; height: 27px; color: var(--gold-text); flex-shrink: 0; }
.de-dashboard .student-skills { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%, 175px),1fr)); gap: 12px; }
.de-dashboard .student-skill-card { display: flex; flex-direction: column; padding: 18px; min-height: 215px; }
.de-dashboard :is(.skill-symbol,.tool-symbol,.grammar-access-icon,.dictionary-access-icon) { display: grid; place-items: center; width: 42px; height: 42px; border-radius: 7px; color: var(--gold-text); background: var(--tint); flex-shrink: 0; }
.de-dashboard .skill-number { font-family: var(--serif); font-size: 22px; font-weight: 400; color: var(--gold-text); }
.de-dashboard .skill-detail, .de-dashboard .skill-level { display: none; }
.de-dashboard .student-skill-card h3 { font-family: var(--serif); font-size: 21px; font-weight: 400; line-height: 1.2; margin: 17px 0 6px; overflow-wrap: anywhere; }
.de-dashboard .student-skill-card strong { font-size: 12px; color: var(--navy); font-weight: 600; line-height: 1.5; }
.de-dashboard .student-skill-card p { font-size: 12px; color: var(--muted); line-height: 1.65; margin: 8px 0 16px; flex: 1; }
.de-dashboard :is(.grammar-access-card,.dictionary-access-card) { display: flex; gap: 16px; align-items: center; margin-top: 14px; padding: 20px; }
.de-dashboard :is(.grammar-access-icon,.dictionary-access-icon) { width: 50px; height: 50px; }
.de-dashboard :is(.grammar-access-content,.dictionary-access-content) { flex: 1; min-width: 0; }
.de-dashboard :is(.grammar-access-label,.dictionary-access-label) { color: var(--gold-text); font-size: 10px; font-weight: 650; letter-spacing: .1em; }
.de-dashboard :is(.grammar-access-content,.dictionary-access-content) h3 { font-family: var(--serif); font-size: 25px; font-weight: 400; line-height: 1.2; color: var(--navy); margin: 5px 0 7px; }
.de-dashboard :is(.grammar-access-content,.dictionary-access-content) p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.65; }
.de-dashboard :is(.grammar-access-button,.dictionary-access-button) { display: inline-flex; align-items: center; justify-content: center; gap: 9px; min-height: 42px; padding: 9px 12px; border: 1px solid var(--line); border-radius: 6px; color: var(--gold-text); font-size: 12px; font-weight: 600; flex-shrink: 0; }
.de-dashboard :is(.grammar-access-card,.dictionary-access-card):hover :is(.grammar-access-button,.dictionary-access-button) { border-color: var(--gold); }
.de-dashboard .dictionary-languages { display: flex; flex-wrap: wrap; gap: 6px 12px; margin-top: 10px; }
.de-dashboard .dictionary-languages span { color: var(--muted); font-size: 11px; }
.de-dashboard .student-tools { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%, 225px),1fr)); gap: 12px; }
.de-dashboard .tool-card { display: flex; align-items: center; gap: 12px; padding: 16px; }
.de-dashboard .tool-info { flex: 1; min-width: 0; }
.de-dashboard .tool-info strong { display: block; color: var(--navy); font-size: 13px; font-weight: 650; }
.de-dashboard .tool-info p { font-size: 12px; line-height: 1.6; color: var(--muted); margin: 5px 0 0; }
/* These source cards are informational, not links. */
.de-dashboard .tool-arrow { display: none; }
.de-dashboard .student-footer { display: flex; flex-wrap: wrap; gap: 12px; align-items: center; justify-content: space-between; border-top: 1px solid var(--line); margin-top: 36px; padding: 18px 0; font-size: 11px; background: transparent; color: var(--muted); }
.de-dashboard .student-footer a { display: inline-flex; align-items: center; gap: 5px; color: var(--gold-text); }
.de-dashboard[dir="rtl"] :is(.welcome-tag,.level-kicker,.grammar-access-label,.dictionary-access-label,.header-small) { letter-spacing: 0; }
.de-dashboard[dir="rtl"] :is(.welcome-button,.level-arrow,.skill-arrow,.grammar-access-button,.dictionary-access-button,.student-footer a) svg { transform: scaleX(-1); }
@media (max-width: 850px) {
  .de-dashboard .welcome-visual { display: none; }
  .de-dashboard :is(.grammar-access-card,.dictionary-access-card) { flex-wrap: wrap; }
  .de-dashboard :is(.grammar-access-button,.dictionary-access-button) { margin-inline-start: auto; }
}
@media (max-width: 700px) {
  .de-dashboard .student-header { min-height: 74px; padding: 12px 16px; padding-inline-start: 68px; gap: 8px; }
  .de-dashboard .header-brand-mark, .de-dashboard .profile-infos, .de-dashboard .profile-avatar { display: none; }
  .de-dashboard .student-header h2 { font-size: 17px; }
  .de-dashboard .student-content { padding: 20px 15px; }
  .de-dashboard .student-welcome { padding: 24px 20px; min-height: 0; }
  .de-dashboard .student-welcome h1 { font-size: 30px; }
  .de-dashboard .student-section { margin-top: 28px; }
  .de-dashboard .student-levels { grid-template-columns: 1fr; gap: 12px; }
  .de-dashboard .student-skills { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 10px; }
  .de-dashboard .student-skill-card { padding: 14px; min-height: 210px; }
  .de-dashboard .student-skill-card h3 { font-size: 19px; }
  .de-dashboard :is(.grammar-access-card,.dictionary-access-card) { padding: 16px; gap: 12px; }
  .de-dashboard :is(.grammar-access-button,.dictionary-access-button) { width: 100%; }
  .de-dashboard :is(.grammar-access-content,.dictionary-access-content) h3 { font-size: 22px; }
}
@media (max-width: 375px) {
  .de-dashboard .student-skills { grid-template-columns: 1fr; }
  .de-dashboard .student-skill-card { min-height: 0; }
  .de-dashboard .section-heading { flex-wrap: wrap; }
}
@media (prefers-reduced-motion: reduce) {
  .de-dashboard * { transition: none !important; animation: none !important; scroll-behavior: auto !important; }
}
      `}</style>
    </div>
  )
}


'use client'

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
    <div className="student-layout" dir={isRTL ? 'rtl' : 'ltr'}>
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
              <strong>{nomAffiche}</strong>
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
                <h3>{t.grammar.title}</h3>
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

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .student-layout {
          --navy: #172B4D;
          --gold: #D6B56D;
          --text: #192E4D;
          --muted: #8792A2;
          min-height: 100vh;
          background: #F4F6F9;
          color: var(--text);
          font-family: Arial, sans-serif;
          text-align: left;
        }

        .student-main {
          min-height: 100vh;
          width: 100%;
        }

        /* HEADER */

        .student-header {
          height: 82px;
          background: rgba(255,255,255,.96);
          border-bottom: 1px solid #E9EDF2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 5%;
          position: sticky;
          top: 0;
          z-index: 15;
          backdrop-filter: blur(14px);
        }

        .header-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-brand-mark {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          color: #A18142;
          background: linear-gradient(145deg, #FBF5E7, #F0E3C5);
        }

        .header-small {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.8px;
          color: #A18142;
          text-transform: uppercase;
        }

        .student-header h2 {
          font-size: 17px;
          margin: 4px 0 0;
          font-weight: 750;
          color: var(--navy);
        }

        .student-header-profile {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 6px 10px 6px 6px;
          border: 1px solid #EDF0F4;
          border-radius: 40px;
          background: #FAFBFC;
        }

        .profile-avatar {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: linear-gradient(145deg, #F8F0DD, #EDE0C0);
          color: #9C7939;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .profile-infos strong,
        .profile-infos span {
          display: block;
        }

        .profile-infos strong {
          font-size: 12px;
          max-width: 170px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #263B59;
        }

        .profile-infos span {
          font-size: 10px;
          color: #8792A2;
          margin-top: 4px;
        }

        .profile-level-indicator {
          background: #F5F0E3;
          color: #96783E;
          font-size: 10px;
          font-weight: 800;
          padding: 7px 9px;
          border-radius: 7px;
          margin-left: 3px;
        }

        /* CONTENU */

        .student-content {
          max-width: 1400px;
          padding: 34px 5% 22px;
          margin: auto;
        }

        /* ACCUEIL */

        .student-welcome {
          background: linear-gradient(112deg, #142743 0%, #203B60 58%, #31577E 100%);
          color: white;
          border-radius: 20px;
          padding: 38px 43px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 235px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 14px 35px rgba(23,43,77,.14);
          text-align: left;
        }

        .welcome-content {
          position: relative;
          z-index: 3;
          max-width: 650px;
        }

        .welcome-tag {
          color: #E6C77F;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 800;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-transform: uppercase;
        }

        .student-welcome h1 {
          font-size: clamp(25px, 3vw, 34px);
          margin: 17px 0 10px;
          font-weight: 750;
          letter-spacing: -.7px;
          line-height: 1.3;
        }

        .student-welcome h1 span {
          color: #E6C77F;
        }

        .student-welcome p {
          color: #D1DCE9;
          font-size: 13px;
          line-height: 1.8;
          max-width: 500px;
          margin: 0;
        }

        .welcome-button {
          margin-top: 21px;
          display: inline-flex;
          gap: 11px;
          align-items: center;
          background: linear-gradient(135deg, #E9D092, #D6B56D);
          color: #172B4D;
          border-radius: 9px;
          padding: 12px 18px;
          text-decoration: none;
          font-size: 12px;
          font-weight: 800;
          transition: all .22s ease;
          box-shadow: 0 5px 14px rgba(0,0,0,.13);
        }

        .welcome-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 20px rgba(0,0,0,.2);
        }

        .welcome-visual {
          width: 230px;
          height: 190px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 2;
          flex-shrink: 0;
        }

        .welcome-icon-circle {
          width: 145px;
          height: 145px;
          display: grid;
          place-items: center;
          color: #E6C77F;
          border: 1px solid rgba(230,199,127,.36);
          border-radius: 50%;
          background: rgba(255,255,255,.045);
          box-shadow: 0 0 0 14px rgba(230,199,127,.035),
                      0 0 0 28px rgba(230,199,127,.025);
        }

        .welcome-floating-star {
          position: absolute;
          top: 18px;
          right: 31px;
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          color: #E6C77F;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(230,199,127,.25);
          border-radius: 12px;
        }

        .welcome-floating-label {
          position: absolute;
          bottom: 13px;
          left: 7px;
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 13px;
          background: rgba(255,255,255,.1);
          border: 1px solid rgba(255,255,255,.13);
          border-radius: 9px;
          backdrop-filter: blur(8px);
        }

        .welcome-floating-label span {
          color: #D1DCE9;
          font-size: 9px;
          letter-spacing: 1px;
          font-weight: 700;
        }

        .welcome-floating-label strong {
          color: #E6C77F;
          font-size: 17px;
        }

        .welcome-background-decoration {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .welcome-orbit {
          position: absolute;
          border: 1px solid rgba(230,199,127,.09);
          border-radius: 50%;
        }

        .orbit-one {
          width: 280px;
          height: 280px;
          right: 5%;
          top: -120px;
        }

        .orbit-two {
          width: 390px;
          height: 390px;
          right: 1%;
          top: -170px;
        }

        .orbit-three {
          width: 500px;
          height: 500px;
          right: -4%;
          top: -225px;
        }

        .welcome-bottom-line {
          position: absolute;
          width: 155px;
          height: 4px;
          border-radius: 5px;
          background: #D6B56D;
          bottom: 0;
          left: 43px;
          opacity: .85;
        }

        /* TITRES DES SECTIONS */

        .student-section {
          margin-top: 39px;
          scroll-margin-top: 105px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          gap: 15px;
          text-align: left;
        }

        .section-heading h2 {
          font-size: 22px;
          margin: 0;
          font-weight: 700;
          letter-spacing: -.4px;
          color: #192E4D;
          line-height: 1.4;
          text-align: left;
        }

        .section-heading p {
          color: #8792A2;
          font-size: 12px;
          margin: 6px 0 0;
          line-height: 1.6;
          text-align: left;
        }

        .section-decoration {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          color: #A18142;
          background: #F7F0DF;
          border-radius: 11px;
        }

        /* NIVEAUX */

        .student-levels {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .student-level-card {
          display: block;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 16px;
          padding: 23px 25px 18px;
          transition: all .25s ease;
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .student-level-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 13px 28px rgba(23,43,77,.09);
          border-color: #D9C28F;
        }

        .student-level-card.selected {
          border: 1.5px solid #D6B56D;
          box-shadow: 0 7px 22px rgba(214,181,109,.13);
        }

        .student-level-card.selected::before {
          content: '';
          position: absolute;
          width: 4px;
          height: 100%;
          background: #D6B56D;
          left: 0;
          top: 0;
        }

        .level-b1 {
          background: linear-gradient(125deg, #FFFFFF 0%, #FBFCFE 100%);
        }

        .level-b2 {
          background: linear-gradient(125deg, #F2F4F8 0%, #E9EEF5 100%);
        }

        .level-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 8px;
        }

        .level-chip,
        .current-chip {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .5px;
          padding: 7px 10px;
          border-radius: 6px;
          background: #F0F2F6;
          color: #65748A;
        }

        .current-chip {
          background: #F7F0DE;
          color: #98783B;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .current-dot {
          width: 6px;
          height: 6px;
          background: #B28D48;
          border-radius: 50%;
        }

        .level-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          position: relative;
        }

        .level-info {
          position: relative;
          z-index: 2;
        }

        .level-kicker {
          display: block;
          color: #A0844A;
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1.5px;
          margin-top: 17px;
        }

        .student-level-card h3 {
          font-size: 36px;
          margin: 5px 0;
          letter-spacing: -1px;
          color: #192E4D;
        }

        .student-level-card p {
          font-size: 12px;
          color: #7C8797;
          line-height: 1.7;
          margin: 0;
          max-width: 370px;
        }

        .level-watermark {
          font-size: 86px;
          font-weight: 900;
          color: rgba(23,43,77,.055);
          letter-spacing: -8px;
          flex-shrink: 0;
          line-height: 1;
          user-select: none;
        }

        .level-footer {
          border-top: 1px solid rgba(23,43,77,.08);
          margin-top: 19px;
          padding-top: 13px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #9A7B41;
          font-size: 10px;
          font-weight: 700;
        }

        .level-arrow {
          width: 29px;
          height: 29px;
          display: grid;
          place-items: center;
          background: #F7F0DF;
          color: #9A7B41;
          border-radius: 8px;
          transition: transform .2s ease;
        }

        .student-level-card:hover .level-arrow {
          transform: translateX(3px);
        }

        /* COMPETENCES */

        .skills-level-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 8px 12px;
          border: 1px solid #E9DFC7;
          background: #FBF8F0;
          color: #927641;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
          white-space: nowrap;
        }

        .skills-level-dot {
          width: 7px;
          height: 7px;
          background: #B28D48;
          border-radius: 50%;
        }

        .student-skills {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: 14px;
        }

        .student-skill-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          cursor: pointer;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 15px;
          padding: 19px 16px 15px;
          transition: all .25s ease;
          position: relative;
          overflow: hidden;
          min-width: 0;
          min-height: 270px;
          text-align: left;
        }

        .student-skill-card::after {
          content: '';
          position: absolute;
          width: 90px;
          height: 90px;
          border-radius: 50%;
          right: -42px;
          top: -42px;
          background: currentColor;
          opacity: .035;
          transition: transform .25s ease;
        }

        .student-skill-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 26px rgba(23,43,77,.08);
          border-color: #D9C28F;
        }

        .student-skill-card:hover::after {
          transform: scale(1.6);
        }

        .skill-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .skill-symbol {
          width: 47px;
          height: 47px;
          border-radius: 13px;
          display: grid;
          place-items: center;
          transition: transform .25s ease;
        }

        .student-skill-card:hover .skill-symbol {
          transform: scale(1.07) rotate(-3deg);
        }

        .skill-number {
          font-size: 10px;
          font-weight: 800;
          color: #C3CBD5;
          letter-spacing: 1px;
        }

        .skill-blue .skill-symbol {
          background: #EAF1FC;
          color: #4777BD;
        }

        .skill-purple .skill-symbol {
          background: #F0ECFC;
          color: #8066B9;
        }

        .skill-orange .skill-symbol {
          background: #FFF1E6;
          color: #D18A4C;
        }

        .skill-green .skill-symbol {
          background: #E8F5EF;
          color: #4B9B78;
        }

        .skill-gold .skill-symbol {
          background: #F8F0DE;
          color: #A18142;
        }

        .skill-detail {
          font-size: 8px;
          font-weight: 800;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: #A0AAB7;
          margin-top: 18px;
          text-align: left;
        }

        .skill-level {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          width: fit-content;
          margin-top: 8px;
          padding: 6px 9px;
          border-radius: 6px;
          background: #F7F0DF;
          color: #927641;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: .5px;
          text-align: left;
        }

        .skill-level-dot {
          width: 6px;
          height: 6px;
          background: #B28D48;
          border-radius: 50%;
        }

        .student-skill-card h3 {
          font-size: 18px;
          margin: 10px 0 5px;
          letter-spacing: -.35px;
          color: #192E4D;
          overflow-wrap: anywhere;
          text-align: left;
        }

        .student-skill-card strong {
          font-size: 10px;
          color: #52647D;
          display: block;
          line-height: 1.5;
          text-align: left;
        }

        .student-skill-card p {
          color: #8792A2;
          font-size: 10px;
          line-height: 1.65;
          margin: 9px 0 15px;
          flex: 1;
          text-align: left;
        }

        .skill-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #F0F2F5;
          padding-top: 12px;
          color: #9A7B41;
          font-size: 10px;
          font-weight: 800;
          text-align: left;
        }

        .skill-arrow {
          width: 27px;
          height: 27px;
          display: grid;
          place-items: center;
          background: #F8F2E5;
          color: #A18142;
          border-radius: 8px;
          transition: all .2s ease;
        }

        .student-skill-card:hover .skill-arrow {
          background: #EAD7AC;
          transform: translateX(3px);
        }

        /* GRAMMAIRE */

        .grammar-access-card {
          margin-top: 17px;
          padding: 21px 24px;
          background: linear-gradient(110deg, #172B4D, #29486D);
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 18px;
          text-decoration: none;
          color: white;
          transition: all .25s ease;
          box-shadow: 0 8px 20px rgba(23,43,77,.10);
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .grammar-access-card::after {
          content: '';
          position: absolute;
          width: 190px;
          height: 190px;
          border: 1px solid rgba(230,199,127,.12);
          border-radius: 50%;
          right: -60px;
          top: -100px;
          pointer-events: none;
        }

        .grammar-access-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 13px 27px rgba(23,43,77,.16);
        }

        .grammar-access-icon {
          width: 53px;
          height: 53px;
          flex-shrink: 0;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(214,181,109,.16);
          color: #E6C77F;
        }

        .grammar-access-content {
          flex: 1;
          min-width: 0;
          position: relative;
          z-index: 1;
          text-align: left;
        }

        .grammar-access-label {
          color: #E6C77F;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .grammar-access-content h3 {
          font-size: 18px;
          margin: 5px 0;
          color: white;
          text-align: left;
        }

        .grammar-access-content p {
          color: #D2DCE9;
          font-size: 11px;
          margin: 0;
          line-height: 1.6;
          text-align: left;
        }

        .grammar-access-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 15px;
          border-radius: 8px;
          background: #D6B56D;
          color: #172B4D;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all .2s ease;
        }

        .grammar-access-card:hover .grammar-access-button {
          background: #E9D092;
          transform: translateX(3px);
        }

        /* WÖRTERBUCH B1 */

        .dictionary-access-card {
          margin-top: 17px;
          padding: 21px 24px;
          background: linear-gradient(110deg, #172B4D, #29486D);
          border: 1px solid rgba(214,181,109,.35);
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 18px;
          text-decoration: none;
          color: white;
          transition: all .25s ease;
          box-shadow: 0 8px 20px rgba(23,43,77,.10);
          position: relative;
          overflow: hidden;
          text-align: left;
        }

        .dictionary-access-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 13px 27px rgba(23,43,77,.16);
          border-color: #D6B56D;
        }

        .dictionary-access-icon {
          width: 53px;
          height: 53px;
          flex-shrink: 0;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(214,181,109,.16);
          color: #E6C77F;
        }

        .dictionary-access-content {
          flex: 1;
          min-width: 0;
        }

        .dictionary-access-label {
          color: #E6C77F;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .dictionary-access-content h3 {
          font-size: 19px;
          margin: 6px 0;
          color: white;
        }

        .dictionary-access-content p {
          color: #D2DCE9;
          font-size: 11px;
          margin: 0;
          line-height: 1.7;
        }

        .dictionary-languages {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }

        .dictionary-languages span {
          padding: 5px 9px;
          background: rgba(255,255,255,.09);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 6px;
          font-size: 10px;
          color: #F5E8C8;
        }

        .dictionary-access-button {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 11px 15px;
          border-radius: 8px;
          background: #D6B56D;
          color: #172B4D;
          font-size: 11px;
          font-weight: 800;
          flex-shrink: 0;
          transition: all .2s ease;
        }

        .dictionary-access-card:hover .dictionary-access-button {
          background: #E9D092;
          transform: translateX(3px);
        }

        /* ESPACE DE TRAVAIL */

        .student-tools {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
        }

        .tool-card {
          display: flex;
          align-items: center;
          gap: 13px;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 13px;
          padding: 18px 16px;
          transition: all .22s ease;
          min-width: 0;
          text-align: left;
        }

        .tool-card:hover {
          border-color: #D9C28F;
          box-shadow: 0 7px 19px rgba(23,43,77,.06);
          transform: translateY(-2px);
        }

        .tool-symbol {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .tool-blue {
          background: #EAF1FC;
          color: #4777BD;
        }

        .tool-gold {
          background: #F8F0DE;
          color: #A18142;
        }

        .tool-purple {
          background: #F0ECFC;
          color: #8066B9;
        }

        .tool-info {
          flex: 1;
          min-width: 0;
          text-align: left;
        }

        .student-tools strong {
          font-size: 11px;
          display: block;
          color: #263B59;
          text-align: left;
        }

        .student-tools p {
          font-size: 10px;
          color: #8792A1;
          margin: 5px 0 0;
          line-height: 1.5;
          text-align: left;
        }

        .tool-arrow {
          color: #B49A66;
          flex-shrink: 0;
        }

        /* FOOTER */

        .student-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          border-top: 1px solid #E7EBF0;
          margin-top: 42px;
          padding: 19px 0;
          font-size: 10px;
          color: #929CAB;
          text-align: left;
        }

        .student-footer a {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #9A7B41;
          text-decoration: none;
          font-weight: 700;
        }

        .student-footer a:hover {
          text-decoration: underline;
        }

        /* RTL ARABE */

        .student-layout[dir="rtl"] {
          text-align: right;
        }

        .student-layout[dir="rtl"] .section-heading,
        .student-layout[dir="rtl"] .section-heading h2,
        .student-layout[dir="rtl"] .section-heading p,
        .student-layout[dir="rtl"] .student-level-card,
        .student-layout[dir="rtl"] .student-skill-card,
        .student-layout[dir="rtl"] .grammar-access-card,
        .student-layout[dir="rtl"] .tool-card,
        .student-layout[dir="rtl"] .tool-info,
        .student-layout[dir="rtl"] .student-tools strong,
        .student-layout[dir="rtl"] .student-tools p,
        .student-layout[dir="rtl"] .student-welcome {
          text-align: right;
        }

        .student-layout[dir="rtl"] .student-level-card.selected::before {
          left: auto;
          right: 0;
        }

        .student-layout[dir="rtl"] .welcome-bottom-line {
          left: auto;
          right: 43px;
        }

        .student-layout[dir="rtl"] .student-level-card:hover .level-arrow,
        .student-layout[dir="rtl"] .student-skill-card:hover .skill-arrow,
        .student-layout[dir="rtl"] .grammar-access-card:hover .grammar-access-button {
          transform: translateX(-3px);
        }

        .student-layout[dir="rtl"] .dictionary-access-card {
          text-align: right;
        }

        .student-layout[dir="rtl"] .dictionary-access-card:hover .dictionary-access-button {
          transform: translateX(-3px);
        }

        .student-layout[dir="rtl"] .student-footer a {
          flex-direction: row-reverse;
        }

        /* TABLETTE */

        @media(max-width: 1150px) {
          .student-content {
            padding-left: 3%;
            padding-right: 3%;
          }

          .student-header {
            padding-left: 3%;
            padding-right: 3%;
          }

          .student-skills {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }

          .student-skill-card {
            min-height: 255px;
          }
        }

        @media(max-width: 850px) {
          .student-skills {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .student-tools {
            grid-template-columns: 1fr;
          }

          .welcome-visual {
            width: 180px;
          }
        }

        /* MOBILE */

        @media(max-width: 700px) {
          .student-header {
            height: 70px;
            padding: 0 15px;
            gap: 10px;
          }

          .header-brand-mark {
            width: 35px;
            height: 35px;
          }

          .header-small {
            font-size: 8px;
          }

          .student-header h2 {
            font-size: 14px;
          }

          .student-header-profile {
            margin-left: auto;
            padding: 4px;
            border: 0;
            background: transparent;
            gap: 5px;
          }

          .profile-avatar {
            width: 35px;
            height: 35px;
          }

          .profile-infos {
            display: none;
          }

          .profile-level-indicator {
            font-size: 9px;
            padding: 6px 8px;
          }

          .student-content {
            padding: 20px 15px;
          }

          .student-welcome {
            padding: 27px 22px;
            min-height: 205px;
            border-radius: 15px;
          }

          .student-welcome h1 {
            font-size: 23px;
            line-height: 1.4;
          }

          .student-welcome p {
            font-size: 12px;
          }

          .welcome-visual {
            display: none;
          }

          .welcome-bottom-line {
            left: 22px;
          }

          .student-section {
            margin-top: 31px;
          }

          .section-heading h2 {
            font-size: 18px;
          }

          .student-levels {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .student-level-card {
            padding: 19px;
          }

          .level-watermark {
            font-size: 70px;
          }

          .student-skills {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 10px;
          }

          .student-skill-card {
            padding: 14px 12px 13px;
            min-height: 255px;
          }

          .student-skill-card h3 {
            font-size: 16px;
          }

          .student-skill-card p {
            font-size: 10px;
          }

          .skill-symbol {
            width: 40px;
            height: 40px;
          }

          .skill-detail {
            font-size: 7px;
          }

          .skills-level-badge {
            font-size: 9px;
            padding: 7px 9px;
          }

          .grammar-access-card {
            padding: 16px;
            gap: 12px;
            flex-wrap: wrap;
          }

          .grammar-access-icon {
            width: 45px;
            height: 45px;
          }

          .grammar-access-content {
            flex: 1;
          }

          .grammar-access-content h3 {
            font-size: 15px;
          }

          .grammar-access-button {
            width: 100%;
            justify-content: center;
          }

          .dictionary-access-card {
            padding: 16px;
            gap: 12px;
            flex-wrap: wrap;
          }

          .dictionary-access-icon {
            width: 45px;
            height: 45px;
          }

          .dictionary-access-content {
            flex: 1;
          }

          .dictionary-access-content h3 {
            font-size: 16px;
          }

          .dictionary-access-button {
            width: 100%;
            justify-content: center;
          }

          .student-tools {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .tool-card {
            padding: 14px;
          }

          .student-footer {
            gap: 12px;
            flex-wrap: wrap;
            line-height: 1.6;
            margin-top: 30px;
          }
        }

        @media(max-width: 380px) {
          .student-content {
            padding-left: 11px;
            padding-right: 11px;
          }

          .student-welcome {
            padding: 23px 17px;
          }

          .student-welcome h1 {
            font-size: 21px;
          }

          .student-skill-card {
            padding: 12px 10px;
          }

          .student-skill-card h3 {
            font-size: 15px;
          }

          .skills-level-badge {
            font-size: 8px;
          }
        }

        @media(prefers-reduced-motion: reduce) {
          .student-layout *,
          .student-layout *::before,
          .student-layout *::after {
            scroll-behavior: auto !important;
            transition-duration: .01ms !important;
            animation-duration: .01ms !important;
          }
        }

      `}</style>
    </div>
  )
}

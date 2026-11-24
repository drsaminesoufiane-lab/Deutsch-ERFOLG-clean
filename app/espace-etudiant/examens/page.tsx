
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

import {
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Languages,
  Shuffle,
  SlidersHorizontal,
  ClipboardList,
  ArrowRight,
  Sparkles,
  Target,
  UserRound,
  GraduationCap,
  ChevronRight,
} from 'lucide-react'

const competences = [
  {
    nom: 'Lesen',
    label: 'lesen',
    detail: 'lesenDetail',
    Icon: BookOpen,
    color: 'blue',
    slug: 'lesen',
  },
  {
    nom: 'Hören',
    label: 'horen',
    detail: 'horenDetail',
    Icon: Headphones,
    color: 'purple',
    slug: 'horen',
  },
  {
    nom: 'Schreiben',
    label: 'schreiben',
    detail: 'schreibenDetail',
    Icon: PenLine,
    color: 'orange',
    slug: 'schreiben',
  },
  {
    nom: 'Sprechen',
    label: 'sprechen',
    detail: 'sprechenDetail',
    Icon: Mic,
    color: 'green',
    slug: 'sprechen',
  },
  {
    nom: 'Sprachbausteine',
    label: 'sprachbausteine',
    detail: 'sprachbausteineDetail',
    Icon: Languages,
    color: 'gold',
    slug: 'sprachbausteine',
  },
] as const

const niveaux = ['B1', 'B2']

export default function ExamensPage() {
  const { isRTL, t } = useLanguage()
  const router = useRouter()

  const [nom, setNom] = useState('Étudiant')
  const [niveau, setNiveau] = useState('B1')

  useEffect(() => {
    let actif = true

    async function chargerProfil() {
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
        'Étudiant'
      )

      setNiveau(
        data?.level ||
        user.user_metadata?.niveau ||
        'B1'
      )
    }

    chargerProfil()

    return () => {
      actif = false
    }
  }, [router])

  return (
    <main className="exams-page" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* HEADER */}

      <header className="student-header">
        <div className="header-title">
          <span className="header-small">
            {t.header.learningSpace}
          </span>

          <h2>{t.examens.pageTitle}</h2>
        </div>

        <div className="student-header-profile">
          <div className="profile-avatar">
            <UserRound size={20} />
          </div>

          <div className="profile-infos">
            <strong>{nom}</strong>
            <span>
              {t.header.student} · TELC {niveau}
            </span>
          </div>
        </div>
      </header>

      <div className="exams-content">

        {/* INTRODUCTION */}

        <section className="exams-hero">

          <div className="hero-content">
            <span className="hero-eyebrow">
              <Sparkles size={14} />
              {t.examens.introTag}
            </span>

            <h1>{t.examens.pageTitle}</h1>

            <p>{t.examens.introDescription}</p>

            <div className="hero-features">
              <span>
                <Target size={15} />
                TELC B1 & B2
              </span>

              <span>
                <GraduationCap size={16} />
                5 Kompetenzen
              </span>
            </div>
          </div>

          <div className="hero-decoration">
            <div className="hero-decoration-circle circle-large" />
            <div className="hero-decoration-circle circle-small" />
            <GraduationCap size={94} strokeWidth={1.1} />
            <span className="hero-decoration-label">DEUTSCH</span>
          </div>

        </section>

        {/* MODES DE PRÉPARATION */}

        <section className="exam-mode">

          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {t.examens.chooseMethod}
              </span>

              <h2>{t.examens.methodTitle}</h2>
            </div>

            <Sparkles className="gold-icon" size={25} />
          </div>

          <div className="mode-grid">

            <article className="mode-card mode-free">
              <div className="mode-card-top">
                <div className="mode-icon">
                  <SlidersHorizontal size={22} />
                </div>
                <span className="mode-index">01</span>
              </div>

              <span className="mode-tag">
                {t.examens.freeTag}
              </span>

              <h3>{t.examens.freeTitle}</h3>

              <p>{t.examens.freeDescription}</p>

              <div className="mode-action">
                <span>{t.examens.freeAction}</span>
                <ArrowRight size={16} />
              </div>
            </article>

            <article className="mode-card mode-random">
              <div className="mode-card-top">
                <div className="mode-icon">
                  <Shuffle size={22} />
                </div>
                <span className="mode-index">02</span>
              </div>

              <span className="mode-tag">
                {t.examens.randomTag}
              </span>

              <h3>{t.examens.randomTitle}</h3>

              <p>{t.examens.randomDescription}</p>

              <div className="mode-action">
                <span>{t.examens.randomAction}</span>
                <ArrowRight size={16} />
              </div>
            </article>

            <article className="mode-card mode-simulation">
              <div className="mode-card-top">
                <div className="mode-icon">
                  <ClipboardList size={22} />
                </div>
                <span className="mode-index">03</span>
              </div>

              <span className="mode-tag">
                {t.examens.simulationTag}
              </span>

              <h3>{t.examens.simulationTitle}</h3>

              <p>{t.examens.simulationDescription}</p>

              <div className="mode-action">
                <span>{t.examens.simulationAction}</span>
                <ArrowRight size={16} />
              </div>
            </article>

          </div>
        </section>

        {/* NIVEAUX TELC */}

        <section className="levels-section">

          <div className="section-heading">
            <div>
              <span className="eyebrow">
                {t.examens.yourLevel}
              </span>

              <h2>{t.examens.chooseLevel}</h2>

              <p className="section-description">
                Wähle dein Niveau und trainiere die fünf Prüfungskompetenzen.
              </p>
            </div>

            <Target className="gold-icon" size={26} />
          </div>

          <div className="level-grid">

            {niveaux.map((niveauActuel) => (

              <article
                className={`level-card ${niveauActuel === niveau ? 'level-current' : ''}`}
                key={niveauActuel}
              >

                <div className="level-card-header">

                  <div>
                    <span className="level-label">
                      TELC DEUTSCH
                    </span>

                    <h3>
                      {t.examens.german} {niveauActuel}
                    </h3>
                  </div>

                  <div className="level-number">
                    {niveauActuel}
                  </div>

                </div>

                <p className="level-description">
                  {t.examens.levelDescription}
                </p>

                {niveauActuel === niveau && (
                  <div className="current-level-badge">
                    <span />
                    {t.dashboard?.myLevel || 'Mein Niveau'}
                  </div>
                )}

                <div className="competences-heading">
                  <span>PRÜFUNGSKOMPETENZEN</span>
                  <span className="competence-count">05</span>
                </div>

                <div className="skill-list">

                  {competences.map(({ nom, label, detail, Icon, color, slug }, index) => {

                    const lien =
  slug === 'sprachbausteine'
    ? '/espace-etudiant/examens/b1/sprachbausteine'
    : `/espace-etudiant/examens/${niveauActuel.toLowerCase()}/${slug}`

                    const traduction = t.examens as Record<string, string>

                    const titre =
                      traduction[label] ||
                      (nom === 'Sprachbausteine' ? 'Sprachbausteine' : nom)

                    const description =
                      traduction[detail] ||
                      (
                        nom === 'Sprachbausteine'
                          ? 'Grammatik & Wortschatz'
                          : nom
                      )

                    return (
                      <Link
                        href={lien}
                        className={`skill-item skill-${color}`}
                        key={nom}
                      >

                        <div className="skill-number">
                          {String(index + 1).padStart(2, '0')}
                        </div>

                        <div className="skill-icon">
                          <Icon size={20} strokeWidth={1.9} />
                        </div>

                        <span className="skill-text">
                          <strong>{titre}</strong>
                          <small>{description}</small>
                        </span>

                        <ChevronRight
                          size={17}
                          className="skill-arrow"
                        />

                      </Link>
                    )
                  })}

                </div>

                <Link
  href={`/espace-etudiant/examens/${niveauActuel.toLowerCase()}`}
  className="level-link"
>
  <span>{t.examens.exploreLevel}</span>
  <ArrowRight size={17} />
</Link>
              </article>

            ))}

          </div>
        </section>

        {/* FOOTER */}

        <footer className="exams-footer">
          <span>© 2026 Deutsch Erfolg</span>
          <span>{t.examens.footer}</span>
        </footer>

      </div>

      <style jsx global>{`

        .exams-page {
          min-height: 100vh;
          background: #F5F7FA;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        .exams-page * {
          box-sizing: border-box;
        }

        /* HEADER */

        .exams-page .student-header {
          min-height: 82px;
          padding: 12px 42px;
          background: rgba(255,255,255,.96);
          border-bottom: 1px solid #E8ECF1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: sticky;
          top: 0;
          z-index: 15;
          backdrop-filter: blur(12px);
          gap: 20px;
        }

        .exams-page .header-title {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .exams-page .header-small {
          color: #A18142;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .exams-page .student-header .header-title h2 {
          font-size: 19px;
          margin: 0;
          color: #172B4D;
          font-weight: 700;
        }

        .exams-page .student-header-profile {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .exams-page .profile-avatar {
          width: 41px;
          height: 41px;
          border-radius: 50%;
          background: #F5EEDC;
          color: #A18142;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .exams-page .profile-infos {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .exams-page .profile-infos strong {
          color: #172B4D;
          font-size: 13px;
          font-weight: 700;
        }

        .exams-page .profile-infos span {
          color: #8994A3;
          font-size: 11px;
        }

        /* CONTENU */

        .exams-content {
          width: 100%;
          max-width: 1320px;
          margin: auto;
          padding: 34px 42px 24px;
        }

        /* HERO */

        .exams-hero {
          position: relative;
          overflow: hidden;
          min-height: 225px;
          padding: 35px 40px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-radius: 17px;
          background: linear-gradient(115deg, #172B4D, #243F66 70%, #31547D);
          color: white;
          box-shadow: 0 12px 28px rgba(23,43,77,.12);
        }

        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 690px;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #E6C77F;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }

        .exams-hero h1 {
          font-size: 31px;
          margin: 13px 0 9px;
          font-weight: 750;
          letter-spacing: -.6px;
        }

        .exams-hero p {
          color: #D2DCE9;
          font-size: 13px;
          line-height: 1.75;
          max-width: 570px;
          margin: 0;
        }

        .hero-features {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 22px;
        }

        .hero-features span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #E6C77F;
          font-size: 10px;
          font-weight: 700;
        }

        .hero-decoration {
          width: 190px;
          height: 170px;
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          color: #E6C77F;
          opacity: .9;
        }

        .hero-decoration > svg {
          position: relative;
          z-index: 2;
          filter: drop-shadow(0 8px 10px rgba(0,0,0,.15));
        }

        .hero-decoration-circle {
          position: absolute;
          border: 1px solid rgba(230,199,127,.2);
          border-radius: 50%;
        }

        .circle-large {
          width: 165px;
          height: 165px;
        }

        .circle-small {
          width: 125px;
          height: 125px;
        }

        .hero-decoration-label {
          position: absolute;
          bottom: 0;
          font-size: 8px;
          font-weight: 700;
          letter-spacing: 3px;
          color: #E6C77F;
        }

        /* SECTIONS */

        .exam-mode,
        .levels-section {
          margin-top: 38px;
        }

        .section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 18px;
          gap: 15px;
        }

        .eyebrow {
          color: #A18142;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 700;
          text-transform: uppercase;
        }

        .section-heading h2 {
          font-size: 21px;
          margin: 7px 0 0;
          color: #172B4D;
          font-weight: 700;
          letter-spacing: -.3px;
        }

        .section-description {
          color: #8792A1;
          font-size: 12px;
          margin: 7px 0 0;
          line-height: 1.6;
        }

        .gold-icon {
          color: #C5A45F;
          flex-shrink: 0;
        }

        /* MODES */

        .mode-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 15px;
        }

        .mode-card {
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 13px;
          padding: 21px;
          min-height: 225px;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
          transition: all .22s ease;
        }

        .mode-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(23,43,77,.07);
          border-color: #D8C18D;
        }

        .mode-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 17px;
        }

        .mode-icon {
          width: 43px;
          height: 43px;
          border-radius: 11px;
          background: #F5EEDC;
          color: #A18142;
          display: grid;
          place-items: center;
        }

        .mode-index {
          color: #D5DAE2;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .mode-tag {
          font-size: 9px;
          letter-spacing: 1.3px;
          font-weight: 700;
          color: #A18142;
          text-transform: uppercase;
        }

        .mode-card h3 {
          font-size: 17px;
          margin: 8px 0;
          color: #172B4D;
        }

        .mode-card p {
          font-size: 11px;
          line-height: 1.7;
          color: #7B8798;
          margin: 0 0 18px;
        }

        .mode-action {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-top: auto;
          font-size: 11px;
          font-weight: 700;
          color: #A18142;
        }

        .mode-simulation {
          background: linear-gradient(145deg, #172B4D, #243F66);
          border-color: #172B4D;
        }

        .mode-simulation .mode-icon {
          background: rgba(230,199,127,.15);
          color: #E6C77F;
        }

        .mode-simulation .mode-index {
          color: rgba(255,255,255,.35);
        }

        .mode-simulation .mode-tag,
        .mode-simulation .mode-action {
          color: #E6C77F;
        }

        .mode-simulation h3 {
          color: white;
        }

        .mode-simulation p {
          color: #D2DCE9;
        }

        /* NIVEAUX */

        .level-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          align-items: start;
        }

        .level-card {
          background: white;
          border: 1px solid #E7EBF0;
          border-radius: 15px;
          padding: 23px;
          transition: all .22s ease;
          min-width: 0;
        }

        .level-card:hover {
          box-shadow: 0 9px 25px rgba(23,43,77,.06);
        }

        .level-card.level-current {
          border-color: #D8C18D;
          box-shadow: 0 5px 18px rgba(214,181,109,.09);
        }

        .level-card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
        }

        .level-label {
          color: #A18142;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
        }

        .level-card h3 {
          font-size: 22px;
          margin: 8px 0 0;
          color: #172B4D;
        }

        .level-number {
          font-size: 35px;
          font-weight: 800;
          color: #D8C18D;
          letter-spacing: -2px;
        }

        .level-description {
          color: #8490A0;
          font-size: 11px;
          line-height: 1.6;
          margin: 11px 0;
        }

        .current-level-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 9px;
          border-radius: 5px;
          background: #F8F2E4;
          color: #98783B;
          font-size: 9px;
          font-weight: 700;
          margin-bottom: 15px;
        }

        .current-level-badge span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #B28D48;
        }

        .competences-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #EDF0F3;
          padding-top: 15px;
          margin-top: 12px;
          margin-bottom: 12px;
        }

        .competences-heading > span:first-child {
          font-size: 9px;
          font-weight: 700;
          color: #8994A3;
          letter-spacing: 1.1px;
        }

        .competence-count {
          color: #A18142;
          background: #F8F2E4;
          padding: 5px 8px;
          border-radius: 5px;
          font-size: 9px;
          font-weight: 700;
        }

        /* CINQ COMPÉTENCES */

        .skill-list {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 9px;
          margin-bottom: 18px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 11px 10px;
          min-width: 0;
          min-height: 66px;
          background: #F8F9FB;
          border: 1px solid #F0F2F5;
          border-radius: 9px;
          color: #172B4D;
          text-decoration: none;
          transition: all .2s ease;
        }

        .skill-item:hover {
          transform: translateY(-2px);
          background: white;
          border-color: #D8C18D;
          box-shadow: 0 5px 13px rgba(23,43,77,.05);
        }

        .skill-number {
          color: #B9C1CC;
          font-size: 9px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .skill-icon {
          width: 34px;
          height: 34px;
          border-radius: 9px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .skill-blue .skill-icon {
          background: #EAF1FC;
          color: #4777BD;
        }

        .skill-purple .skill-icon {
          background: #F0ECFC;
          color: #8066B9;
        }

        .skill-orange .skill-icon {
          background: #FFF1E6;
          color: #D18A4C;
        }

        .skill-green .skill-icon {
          background: #E8F5EF;
          color: #4B9B78;
        }

        .skill-gold .skill-icon {
          background: #F8F0DE;
          color: #A18142;
        }

        .skill-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
          flex: 1;
        }

        .skill-text strong {
          color: #263A57;
          font-size: 11px;
          line-height: 1.3;
          overflow-wrap: anywhere;
        }

        .skill-text small {
          color: #929CAB;
          font-size: 9px;
          font-weight: 400;
          line-height: 1.35;
        }

        .skill-arrow {
          color: #B9A16E;
          flex-shrink: 0;
          transition: transform .2s ease;
        }

        .skill-item:hover .skill-arrow {
          transform: translateX(3px);
        }

        .exams-page[dir="rtl"] .skill-item:hover .skill-arrow {
          transform: translateX(-3px);
        }

        /* BOUTON NIVEAU */

        .level-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          background: #172B4D;
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 700;
          transition: .2s;
        }

        .level-link:hover {
          background: #29466E;
          box-shadow: 0 5px 12px rgba(23,43,77,.12);
        }

        /* FOOTER */

        .exams-footer {
          border-top: 1px solid #E7EBF0;
          padding: 20px 0;
          margin-top: 40px;
          color: #929CAB;
          font-size: 10px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
          flex-wrap: wrap;
        }

        /* RTL */

        .exams-page[dir="rtl"] .student-header,
        .exams-page[dir="rtl"] .mode-heading,
        .exams-page[dir="rtl"] .section-heading,
        .exams-page[dir="rtl"] .level-card-header,
        .exams-page[dir="rtl"] .level-link,
        .exams-page[dir="rtl"] .mode-action,
        .exams-page[dir="rtl"] .competences-heading,
        .exams-page[dir="rtl"] .exams-footer {
          direction: rtl;
        }

        .exams-page[dir="rtl"] .exams-hero,
        .exams-page[dir="rtl"] .mode-card,
        .exams-page[dir="rtl"] .level-card {
          text-align: right;
        }

        .exams-page[dir="rtl"] .hero-content {
          direction: rtl;
        }

        .exams-page[dir="rtl"] .hero-features {
          flex-direction: row;
        }

        .exams-page[dir="rtl"] .skill-item {
          direction: rtl;
        }

        .exams-page[dir="rtl"] .mode-action svg,
        .exams-page[dir="rtl"] .level-link svg {
          transform: rotate(180deg);
        }

        .exams-page[dir="rtl"] .skill-arrow {
          transform: rotate(180deg);
        }

        /* RESPONSIVE */

        @media(max-width: 1100px) {
          .exams-content {
            padding-left: 28px;
            padding-right: 28px;
          }

          .skill-list {
            grid-template-columns: 1fr;
          }

          .skill-item {
            min-height: 58px;
          }
        }

        @media(max-width: 850px) {
          .mode-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .mode-simulation {
            grid-column: span 2;
          }

          .level-grid {
            grid-template-columns: 1fr;
          }

          .skill-list {
            grid-template-columns: 1fr 1fr;
          }

          .hero-decoration {
            width: 140px;
          }
        }

        @media(max-width: 600px) {
          .exams-page .student-header {
            min-height: 72px;
            padding: 10px 16px;
          }

          .exams-page .student-header .header-title h2 {
            font-size: 16px;
          }

          .exams-page .header-small {
            font-size: 8px;
          }

          .exams-page .profile-avatar {
            width: 36px;
            height: 36px;
          }

          .exams-page .profile-infos {
            display: none;
          }

          .exams-content {
            padding: 22px 15px;
          }

          .exams-hero {
            padding: 26px 22px;
            min-height: 205px;
            border-radius: 13px;
          }

          .exams-hero h1 {
            font-size: 24px;
          }

          .exams-hero p {
            font-size: 11px;
          }

          .hero-decoration {
            display: none;
          }

          .hero-features {
            gap: 13px;
            margin-top: 17px;
          }

          .hero-features span {
            font-size: 9px;
          }

          .exam-mode,
          .levels-section {
            margin-top: 30px;
          }

          .section-heading h2 {
            font-size: 18px;
          }

          .mode-grid {
            grid-template-columns: 1fr;
            gap: 11px;
          }

          .mode-simulation {
            grid-column: auto;
          }

          .mode-card {
            min-height: auto;
            padding: 18px;
          }

          .mode-card p {
            margin-bottom: 15px;
          }

          .level-card {
            padding: 17px;
          }

          .level-card h3 {
            font-size: 20px;
          }

          .skill-list {
            grid-template-columns: 1fr 1fr;
            gap: 7px;
          }

          .skill-item {
            padding: 9px 7px;
            gap: 6px;
            min-height: 62px;
          }

          .skill-number {
            font-size: 8px;
          }

          .skill-icon {
            width: 29px;
            height: 29px;
          }

          .skill-icon svg {
            width: 17px;
            height: 17px;
          }

          .skill-text strong {
            font-size: 10px;
          }

          .skill-text small {
            font-size: 8px;
          }

          .skill-arrow {
            width: 14px;
          }

          .exams-footer {
            margin-top: 30px;
          }
        }

        @media(max-width: 370px) {
          .skill-list {
            grid-template-columns: 1fr;
          }

          .skill-item {
            min-height: 56px;
          }

          .exams-hero h1 {
            font-size: 22px;
          }
        }
.exams-page .level-link,
.exams-page .level-link:visited,
.exams-page .level-link:hover,
.exams-page .level-link:active,
.exams-page .level-link span {
  color: #FFFFFF !important;
}
      `}</style>

    </main>
  )
}

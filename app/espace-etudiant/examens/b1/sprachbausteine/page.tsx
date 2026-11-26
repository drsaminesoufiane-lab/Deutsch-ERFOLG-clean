
'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  GraduationCap,
  ArrowLeft,
  Languages,
  ArrowRight,
} from 'lucide-react'

const sprach1 = [
  'Alex Und Cora',
  'Rita',
  'Caroline',
  'Vera',
  'Eva',
  'Paul',
  'Iris',
  'Jan',
  'Miroslav',
  'Andreas 1',
  'Annika 2',
  'Sonja',
  'Nadja / Claudia',
  'Karla',
  'Viktor',
  'Moritz',
  'Corina',
  'Petra',
  'Tamara / Jakob',
  'Nicole',
  'Andreas 2',
  'Thomas / Anna',
  'Sophie',
  'Alicia',
  'Annika 1',
  'Jennifer',
  'Mara',
  'Liebe Olivia.',
]

const sprach2 = [
  'Alex Und Cora',
  'Rita',
  'Caroline',
  'Vera',
  'Eva',
  'Paul',
  'Iris',
  'Jan',
  'Miroslav',
  'Andreas 1',
  'Annika 2',
  'Sonja',
  'Nadja / Claudia',
  'Karla',
  'Viktor',
  'Moritz',
  'Petra',
  'Corina',
  'Tamara / Jakob',
  'Nicole',
  'Andreas 2',
  'Thomas / Anna',
  'Sophie',
  'Alicia',
  'Annika 1',
  'Jennifer',
  'Mara',
  'Miroslav 2.',
]

const parties = [
  {
    nom: 'Sprach 1',
    description: 'Sprachbausteine – Teil 1',
    ancre: 'sprach-1',
  },
  {
    nom: 'Sprach 2',
    description: 'Sprachbausteine – Teil 2',
    ancre: 'sprach-2',
  },
]

export default function SprachbausteineB1Page() {
  const [activeTeil, setActiveTeil] = useState('sprach-1')

  const exercicesActifs =
    activeTeil === 'sprach-1' ? sprach1 : sprach2

  return (
    <main className="sprach-page">

      {/* HEADER */}

      <header className="sprach-header">
        <Link href="/espace-etudiant" className="sprach-brand">
          <GraduationCap size={27} />
          Deutsch <strong>Erfolg</strong>
        </Link>

        <Link
          href="/espace-etudiant/examens/b1"
          className="sprach-back"
        >
          <ArrowLeft size={17} />
          TELC B1
        </Link>
      </header>

      <div className="sprach-content">

        {/* BREADCRUMB */}

        <div className="sprach-breadcrumb">
          <Link href="/espace-etudiant/examens">
            Examens
          </Link>
          <span>/</span>
          <Link href="/espace-etudiant/examens/b1">
            B1
          </Link>
          <span>/</span>
          <strong>Sprachbausteine</strong>
        </div>

        {/* HERO */}

        <section className="sprach-hero">

          <div className="sprach-hero-top">
            <div className="sprach-hero-icon">
              <Languages size={36} />
            </div>

            <span className="sprach-hero-badge">
              TELC DEUTSCH B1
            </span>
          </div>

          <div className="sprach-hero-main">

            <div>
              <span className="sprach-eyebrow">
                DEUTSCH ERFOLG · PRÜFUNGSVORBEREITUNG
              </span>

              <h1>Sprachbausteine</h1>

              <p>
                Trainieren Sie Grammatik und Wortschatz
                und bereiten Sie sich Schritt für Schritt
                auf die TELC B1 Prüfung vor.
              </p>
            </div>

            <div className="sprach-stats">

              <div>
                <strong>{exercicesActifs.length}</strong>
                <span>Exercices disponibles</span>
              </div>

              <div>
                <strong>
                  {activeTeil === 'sprach-1' ? '01' : '02'}
                </strong>
                <span>Teil ausgewählt</span>
              </div>

            </div>

          </div>

          <div className="sprach-hero-decoration">
            SPRACH
          </div>

        </section>

        {/* PARTIES */}

        <section className="sprach-parties">

          <div className="sprach-section-title">
            <div>
              <span className="sprach-eyebrow">
                ORGANISATION DES EXERCICES
              </span>

              <h2>Choisissez une partie</h2>
            </div>
          </div>

          <div className="sprach-tabs">

            {parties.map((partie, index) => {

              const nombre =
                index === 0 ? sprach1.length : sprach2.length

              return (
                <button
                  type="button"
                  key={partie.ancre}
                  className={`sprach-tab ${
                    activeTeil === partie.ancre ? 'active' : ''
                  }`}
                  onClick={() => setActiveTeil(partie.ancre)}
                >

                  <span className="sprach-tab-number">
                    0{index + 1}
                  </span>

                  <span className="sprach-tab-content">
                    <strong>{partie.nom}</strong>
                    <small>{nombre} exercices</small>
                  </span>

                  <span className="sprach-tab-arrow">
                    →
                  </span>

                </button>
              )
            })}

          </div>

        </section>

        {/* EXERCICES */}

        <section className="sprach-exercises">

          <div className="sprach-list-heading">

            <div>
              <span className="sprach-eyebrow">
                TELC DEUTSCH B1
              </span>

              <h2>
                {activeTeil === 'sprach-1'
                  ? 'Sprachbausteine – Teil 1'
                  : 'Sprachbausteine – Teil 2'}
              </h2>
            </div>

            <span className="sprach-total">
              {exercicesActifs.length} exercices
            </span>

          </div>

          <div className="sprach-exercise-grid">

            {exercicesActifs.map((titre, index) => (

              <Link
                href={`/espace-etudiant/examens/b1/sprachbausteine/teil-${
                  activeTeil === 'sprach-1' ? '1' : '2'
                }/exercice-${index + 1}`}
                className="sprach-exercise-card"
                key={`${titre}-${index}`}
              >

                <div className="sprach-exercise-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="sprach-exercise-info">

                  <h3>{titre}</h3>

                  <div className="sprach-exercise-meta">

                    <span className="sprach-level">
                      B1
                    </span>

                    <span className="sprach-part-label">
                      Nur Sprach {activeTeil === 'sprach-1' ? '1' : '2'}
                    </span>

                  </div>

                </div>

                <ArrowRight
                  size={17}
                  className="sprach-card-arrow"
                />

              </Link>

            ))}

          </div>

        </section>

        {/* FOOTER */}

        <footer className="sprach-footer">
          <span>© 2026 Deutsch Erfolg. Alle Rechte vorbehalten.</span>

          <Link href="/">
            Hauptseite
          </Link>
        </footer>

      </div>

      {/* STYLES */}

      <style jsx global>{`

        .sprach-page {
          min-height: 100vh;
          background: #f7f5f0;
          color: #192b43;
          font-family: Arial, sans-serif;
        }

        .sprach-header {
          height: 76px;
          background: #192b43;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
        }

        .sprach-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .sprach-brand svg {
          color: #b49760;
        }

        .sprach-brand strong {
          color: #b49760;
        }

        .sprach-back {
          color: white;
          text-decoration: none;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .sprach-content {
          max-width: 1050px;
          margin: auto;
          padding: 32px 25px 45px;
        }

        .sprach-breadcrumb {
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: #626a75;
          margin-bottom: 25px;
        }

        .sprach-breadcrumb a {
          color: #626a75;
          text-decoration: none;
        }

        .sprach-breadcrumb strong {
          color: #806337;
        }

        /* HERO */

        .sprach-hero {
          background: #192b43;
          color: white;
          padding: 38px;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          margin-bottom: 38px;
          box-shadow: 0 12px 30px rgba(23,43,77,.13);
        }

        .sprach-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .sprach-hero-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          background: rgba(214,181,109,.13);
          border: 1px solid rgba(214,181,109,.35);
          border-radius: 14px;
          color: #b49760;
        }

        .sprach-hero-badge {
          color: #b49760;
          border: 1px solid rgba(214,181,109,.45);
          background: rgba(214,181,109,.10);
          padding: 8px 13px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .sprach-hero-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .sprach-hero-main h1 {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
          margin: 10px 0;
        }

        .sprach-hero-main p {
          color: #D2DAE5;
          font-size: 14px;
          line-height: 1.8;
          max-width: 520px;
          margin: 0;
        }

        .sprach-eyebrow {
          color: #B8954D;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .sprach-hero-decoration {
          position: absolute;
          right: 25px;
          top: 100px;
          font-size: 100px;
          font-weight: 900;
          letter-spacing: -7px;
          color: rgba(255,255,255,.035);
          pointer-events: none;
        }

        .sprach-stats {
          display: flex;
          gap: 25px;
          flex-shrink: 0;
          margin: 0;
          padding: 18px 20px;
          background: rgba(255,255,255,.07);
          border: 1px solid rgba(255,255,255,.10);
          border-radius: 12px;
          position: relative;
          z-index: 1;
        }

        .sprach-stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .sprach-stats strong {
          color: #b49760;
          font-size: 23px;
        }

        .sprach-stats span {
          color: #D2DAE5;
          font-size: 11px;
        }

        /* PARTIES */

        .sprach-parties {
          margin-bottom: 35px;
        }

        .sprach-section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 17px;
        }

        .sprach-section-title h2 {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -.7px;
          color: #192b43;
          margin: 10px 0 0;
          line-height: 1.2;
        }

        .sprach-tabs {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 18px;
          margin-top: 25px;
        }

        .sprach-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 112px;
          padding: 20px;
          border: 1px solid #e3ded3;
          border-radius: 14px;
          background: #FFFFFF;
          color: #192b43;
          text-align: left;
          cursor: pointer;
          transition: all .25s ease;
          box-shadow: 0 3px 12px rgba(23,43,77,.035);
        }

        .sprach-tab:hover {
          border-color: #b49760;
          transform: translateY(-4px);
          box-shadow: 0 10px 22px rgba(23,43,77,.09);
        }

        .sprach-tab.active {
          background: #192b43;
          border-color: #192b43;
          color: white;
          box-shadow: 0 9px 22px rgba(23,43,77,.18);
        }

        .sprach-tab-number {
          display: grid;
          place-items: center;
          min-width: 46px;
          height: 46px;
          border-radius: 11px;
          background: #f1ece2;
          color: #806337;
          font-size: 18px;
          font-weight: 800;
        }

        .sprach-tab.active .sprach-tab-number {
          background: #b49760;
          color: #192b43;
        }

        .sprach-tab-content {
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }

        .sprach-tab-content strong {
          font-size: 19px;
          font-weight: 800;
          color: #192b43;
        }

        .sprach-tab.active .sprach-tab-content strong {
          color: #FFFFFF;
        }

        .sprach-tab-content small {
          font-size: 11px;
          color: #806337;
          font-weight: 600;
        }

        .sprach-tab.active .sprach-tab-content small {
          color: #b49760;
        }

        .sprach-tab-arrow {
          font-size: 22px;
          color: #806337;
          transition: transform .2s ease;
        }

        .sprach-tab.active .sprach-tab-arrow {
          color: #b49760;
        }

        .sprach-tab:hover .sprach-tab-arrow {
          transform: translateX(4px);
        }

        /* EXERCISES */

        .sprach-exercises {
          background: white;
          border: 1px solid #e3ded3;
          border-radius: 13px;
          padding: 23px;
          margin-bottom: 22px;
        }

        .sprach-list-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin-bottom: 22px;
        }

        .sprach-list-heading h2 {
          font-size: 22px;
          font-weight: 800;
          color: #192b43;
          margin: 9px 0 0;
        }

        .sprach-total {
          color: #806337;
          font-size: 11px;
          font-weight: 700;
          white-space: nowrap;
        }

        .sprach-exercise-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .sprach-exercise-card {
          border: 1px solid #e3ded3;
          border-radius: 12px;
          padding: 17px;
          display: grid;
          grid-template-columns: 40px minmax(0, 1fr) 17px;
          gap: 10px 13px;
          align-items: center;
          background: #FFFFFF;
          text-decoration: none;
          color: #192b43;
          transition: all .22s ease;
          min-width: 0;
        }

        .sprach-exercise-card:hover {
          border-color: #b49760;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(23,43,77,.07);
        }

        .sprach-exercise-number {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background: #192b43;
          color: #b49760;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: .4px;
          box-shadow: 0 3px 8px rgba(23,43,77,.12);
        }

        .sprach-exercise-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .sprach-exercise-info h3 {
          margin: 0;
          color: #192b43;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .sprach-exercise-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .sprach-level {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          padding: 5px 10px;
          background: #f1ece2;
          color: #192b43;
          border: 1px solid #E5D4A9;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .7px;
        }

        .sprach-part-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 10px;
          background: #F8EDEF;
          color: #A83245;
          border: 1px solid #EBCBD1;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .4px;
        }

        .sprach-card-arrow {
          color: #806337;
          transition: transform .2s ease;
        }

        .sprach-exercise-card:hover .sprach-card-arrow {
          transform: translateX(4px);
        }

        /* FOOTER */

        .sprach-footer {
          border-top: 1px solid #e3ded3;
          padding-top: 20px;
          color: #626a75;
          font-size: 11px;
          margin-top: 35px;
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .sprach-footer a {
          color: #806337;
          text-decoration: none;
        }

        .sprach-footer a:hover {
          text-decoration: underline;
        }

        /* RESPONSIVE */

        @media(max-width: 900px) {
          .sprach-exercise-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }

          .sprach-hero-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .sprach-hero .sprach-stats {
            width: 100%;
            box-sizing: border-box;
            justify-content: space-around;
          }
        }

        @media(max-width: 650px) {
          .sprach-header {
            padding: 0 17px;
          }

          .sprach-content {
            padding: 25px 15px 35px;
          }

          .sprach-hero {
            padding: 23px;
          }

          .sprach-hero-main h1 {
            font-size: 34px;
          }

          .sprach-hero-decoration {
            font-size: 65px;
            top: 115px;
            right: 12px;
          }

          .sprach-tabs {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .sprach-tab {
            min-height: 85px;
            padding: 15px;
          }

          .sprach-tab-content strong {
            font-size: 17px;
          }

          .sprach-exercise-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .sprach-exercises {
            padding: 16px;
          }

          .sprach-list-heading h2 {
            font-size: 18px;
          }

          .sprach-footer {
            flex-wrap: wrap;
          }
        }

      
        /* Deutsch Erfolg — Premium exams */
        .sprach-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .sprach-page, .sprach-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .sprach-page .sprach-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .sprach-page .sprach-hero-main h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .sprach-page .sprach-hero-main h1, .sprach-page[dir="rtl"] .sprach-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .sprach-page a:focus-visible, .sprach-page button:focus-visible, .sprach-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .sprach-page .sprach-exercise-card { border-radius: 10px; box-shadow: none; }
        .sprach-page .sprach-section-title h2,
        .sprach-page .sprach-list-heading h2 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
        [dir="rtl"] .sprach-page .sprach-section-title h2,
        [dir="rtl"] .sprach-page .sprach-list-heading h2 { font-family: 'Tajawal', Arial, sans-serif; }
        .sprach-page .sprach-hero-decoration { opacity: .065; pointer-events: none; }
        @media (prefers-reduced-motion: reduce) {
          .sprach-page *, .sprach-page *::before, .sprach-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>

    </main>
  )
}

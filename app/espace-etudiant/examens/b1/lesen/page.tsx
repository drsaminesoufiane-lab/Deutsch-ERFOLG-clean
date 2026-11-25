
'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import {
  GraduationCap,
  ArrowLeft,
  BookOpen,
  Lock,
  Loader2,
} from 'lucide-react'
import { supabase } from '@/lib/supabase'

const teil3 = [
  'Alex Und Cora', 'Rita', 'Caroline', 'Vera', 'Eva', 'Paul',
  'Iris', 'Jan', 'Miroslav', 'Andreas 1', 'Annika 2', 'Sonja',
  'Nadja / Claudia', 'Karla', 'Viktor', 'Moritz', 'Corina',
  'Petra', 'Tamara / Jakob', 'Nicole', 'Andreas 2',
  'Thomas / Anna', 'Sophie', 'Alicia', 'Annika 1', 'Jennifer',
  'Mara', 'Miroslav 2',
]

const teil2 = [
  'Alex Und Cora', 'Rita', 'Caroline', 'Vera', 'Eva', 'Paul',
  'Iris', 'Jan', 'Miroslav', 'Andreas 1', 'Annika 2', 'Sonja',
  'Nadja / Claudia', 'Karla', 'Viktor', 'Moritz', 'Corina',
  'Petra', 'Tamara / Jakob', 'Nicole', 'Andreas 2',
  'Thomas / Anna', 'Sophie', 'Alicia', 'Annika 1', 'Jennifer',
  'Mara',
]

const teil1 = [
  { titre: 'Alex Und Cora' },
  { titre: 'Rita' },
  { titre: 'Caroline' },
  { titre: 'Vera' },
  { titre: 'Eva' },
  { titre: 'Paul' },
  { titre: 'Iris' },
  { titre: 'Jan' },
  { titre: 'Miroslav' },
  { titre: 'Andreas 1' },
  { titre: 'Annika 2' },
  { titre: 'Sonja' },
  { titre: 'Nadja / Claudia' },
  { titre: 'Karla' },
  { titre: 'Viktor' },
  { titre: 'Moritz' },
  { titre: 'Corina' },
  { titre: 'Petra' },
  { titre: 'Tamara / Jakob' },
  { titre: 'Nicole' },
  { titre: 'Andreas 2' },
  { titre: 'Thomas / Anna' },
  { titre: 'Sophie' },
  { titre: 'Alicia' },
  { titre: 'Annika 1' },
  { titre: 'Jennifer' },
  { titre: 'Mara' },
  { titre: 'Miroslav 2' },
]

const parties = [
  {
    nom: 'Teil 1',
    description: 'Exercices de compréhension écrite – partie 1',
    ancre: 'teil-1',
  },
  {
    nom: 'Teil 2',
    description: 'Exercices de compréhension écrite – partie 2',
    ancre: 'teil-2',
  },
  {
    nom: 'Teil 3',
    description: 'Exercices de compréhension écrite – partie 3',
    ancre: 'teil-3',
  },
]

export default function LesenB1Page() {
  const [activeTeil, setActiveTeil] = useState('teil-1')
  const [hasFullAccess, setHasFullAccess] = useState(false)
  const [profileLoaded, setProfileLoaded] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function checkAccess() {
      try {
        const { data: authData, error: authError } =
          await supabase.auth.getUser()

        if (authError || !authData.user) {
          if (!cancelled) {
            setHasFullAccess(false)
            setProfileLoaded(true)
          }
          return
        }

        const { data: profil, error } = await supabase
          .from('profiles')
          .select('role, is_pro, pro_until')
          .eq('id', authData.user.id)
          .single()

        if (error || !profil) {
          if (!cancelled) {
            setHasFullAccess(false)
            setProfileLoaded(true)
          }
          return
        }

        const isAdmin = profil.role === 'admin'

        const isProActive =
          profil.is_pro === true &&
          !!profil.pro_until &&
          new Date(profil.pro_until).getTime() > Date.now()

        if (!cancelled) {
          setHasFullAccess(isAdmin || isProActive)
          setProfileLoaded(true)
        }
      } catch (error) {
        console.error('Erreur de vérification PRO :', error)

        if (!cancelled) {
          setHasFullAccess(false)
          setProfileLoaded(true)
        }
      }
    }

    checkAccess()

    return () => {
      cancelled = true
    }
  }, [])

  const exercicesActuels =
    activeTeil === 'teil-1'
      ? teil1
      : activeTeil === 'teil-2'
        ? teil2
        : teil3

  const nombreExercices = exercicesActuels.length

  function renderExercise(titre: string, index: number, teil: string) {
    const unlocked = index < 5 || hasFullAccess

    const href = `/espace-etudiant/examens/b1/lesen/${teil}/exercice-${index + 1}`

    const destination = unlocked
      ? href
      : '/espace-etudiant/pro'

    return (
      <Link
        href={destination}
        className={`lesen-exercise-card ${!unlocked ? 'locked' : ''}`}
        key={`${teil}-${titre}-${index}`}
        aria-label={
          unlocked
            ? `Ouvrir l'exercice ${index + 1} : ${titre}`
            : `Exercice ${index + 1} réservé aux membres PRO. Voir les abonnements`
        }
      >
        <div className="lesen-exercise-number">
          {String(index + 1).padStart(2, '0')}
        </div>

        <div className="lesen-exercise-info">
          <h3>{titre}</h3>

          <div className="lesen-exercise-meta">
            <span className="lesen-level">B1</span>
            <span className="lesen-part-label">
              {teil.toUpperCase().replace('-', ' ')}
            </span>

            {!unlocked && (
              <span className="lesen-pro-label">
                <Lock size={12} /> PRO
              </span>
            )}
          </div>
        </div>
      </Link>
    )
  }

  return (
    <main className="lesen-page">
      <header className="lesen-header">
        <Link href="/espace-etudiant" className="lesen-brand">
          <GraduationCap size={27} />
          Deutsch <strong>Erfolg</strong>
        </Link>

        <Link href="/espace-etudiant/examens/b1" className="lesen-back">
          <ArrowLeft size={17} />
          TELC B1
        </Link>
      </header>

      <div className="lesen-content">
        <div className="lesen-breadcrumb">
          <Link href="/espace-etudiant/examens">Examens</Link>
          <span>/</span>
          <Link href="/espace-etudiant/examens/b1">B1</Link>
          <span>/</span>
          <strong>Lesen</strong>
        </div>

        <section className="lesen-hero">
          <div className="lesen-hero-top">
            <div className="lesen-hero-icon">
              <BookOpen size={36} />
            </div>
            <span className="lesen-hero-badge">TELC DEUTSCH B1</span>
          </div>

          <div className="lesen-hero-main">
            <div>
              <span className="lesen-eyebrow">
                DEUTSCH ERFOLG · PRÜFUNGSVORBEREITUNG
              </span>
              <h1>Lesen</h1>
              <p>
                Verbessern Sie Ihr Leseverständnis und bereiten Sie sich
                Schritt für Schritt auf die TELC B1 Prüfung vor.
              </p>
            </div>

            <div className="lesen-stats">
              <div>
                <strong>{nombreExercices}</strong>
                <span>Exercices disponibles</span>
              </div>
              <div>
                <strong>
                  {activeTeil === 'teil-1'
                    ? '01'
                    : activeTeil === 'teil-2'
                      ? '02'
                      : '03'}
                </strong>
                <span>Teil ausgewählt</span>
              </div>
            </div>
          </div>

          <div className="lesen-hero-decoration">LESEN</div>
        </section>

        <section className="lesen-parties">
          <div className="lesen-section-title">
            <div>
              <span className="lesen-eyebrow">
                ORGANISATION DES EXERCICES
              </span>
              <h2>Choisissez une partie</h2>
            </div>
          </div>

          <div className="lesen-tabs">
            {parties.map((partie, index) => {
              const count =
                index === 0
                  ? teil1.length
                  : index === 1
                    ? teil2.length
                    : teil3.length

              return (
                <button
                  type="button"
                  key={partie.ancre}
                  className={`lesen-tab ${
                    activeTeil === partie.ancre ? 'active' : ''
                  }`}
                  onClick={() => setActiveTeil(partie.ancre)}
                >
                  <span className="lesen-tab-number">0{index + 1}</span>
                  <span className="lesen-tab-content">
                    <strong>{partie.nom}</strong>
                    <small>{count} exercices</small>
                  </span>
                  <span className="lesen-tab-arrow">→</span>
                </button>
              )
            })}
          </div>
        </section>

        <section className="lesen-exercises">
          {!profileLoaded ? (
            <div className="lesen-loading">
              <Loader2 size={23} className="lesen-spinner" />
              <span>Vérification de votre accès...</span>
            </div>
          ) : (
            <div className="lesen-exercise-grid">
              {exercicesActuels.map((item, index) => {
  const titre = typeof item === 'string' ? item : item.titre

  return renderExercise(titre, index, activeTeil)
})}
            </div>
          )}
        </section>

        {!hasFullAccess && profileLoaded && (
          <div className="lesen-free-info">
            <Lock size={16} />
            Les 5 premiers exercices de chaque partie sont gratuits.
            Les suivants sont réservés aux membres PRO. Cliquez sur un
            cadenas pour découvrir les abonnements.
          </div>
        )}
      </div>

      <style jsx global>{`
        .lesen-page {
          min-height: 100vh;
          background: #f5f6f8;
          color: #172b4d;
          font-family: Arial, sans-serif;
        }

        .lesen-header {
          height: 76px;
          background: #172b4d;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 7%;
        }

        .lesen-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: white;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
        }

        .lesen-brand svg,
        .lesen-brand strong {
          color: #d6b56d;
        }

        .lesen-back {
          color: white;
          text-decoration: none;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .lesen-content {
          max-width: 1050px;
          margin: auto;
          padding: 32px 25px 45px;
        }

        .lesen-breadcrumb {
          display: flex;
          gap: 10px;
          font-size: 12px;
          color: #9aa4b2;
          margin-bottom: 25px;
        }

        .lesen-breadcrumb a {
          color: #9aa4b2;
          text-decoration: none;
        }

        .lesen-breadcrumb strong {
          color: #a18142;
        }

        .lesen-hero {
          background: linear-gradient(120deg, #172b4d 0%, #203d68 65%, #294b78 100%);
          color: white;
          padding: 38px;
          border-radius: 18px;
          position: relative;
          overflow: hidden;
          margin-bottom: 38px;
          box-shadow: 0 12px 30px rgba(23, 43, 77, 0.13);
        }

        .lesen-hero-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }

        .lesen-hero-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          background: rgba(214, 181, 109, 0.13);
          border: 1px solid rgba(214, 181, 109, 0.35);
          border-radius: 14px;
          color: #d6b56d;
        }

        .lesen-hero-badge {
          color: #d6b56d;
          border: 1px solid rgba(214, 181, 109, 0.45);
          background: rgba(214, 181, 109, 0.1);
          padding: 8px 13px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.2px;
        }

        .lesen-hero-main {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 30px;
        }

        .lesen-hero-main h1 {
          font-size: 42px;
          font-weight: 800;
          letter-spacing: -1px;
          margin: 10px 0;
        }

        .lesen-hero-main p {
          color: #d2dae5;
          font-size: 14px;
          line-height: 1.8;
          max-width: 520px;
          margin: 0;
        }

        .lesen-hero-decoration {
          position: absolute;
          right: 25px;
          top: 100px;
          font-size: 100px;
          font-weight: 900;
          letter-spacing: -7px;
          color: rgba(255, 255, 255, 0.035);
          pointer-events: none;
        }

        .lesen-eyebrow {
          color: #b8954d;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .lesen-stats {
          display: flex;
          gap: 25px;
          flex-shrink: 0;
          padding: 18px 20px;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          position: relative;
          z-index: 1;
        }

        .lesen-stats div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .lesen-stats strong {
          color: #d6b56d;
          font-size: 23px;
        }

        .lesen-stats span {
          color: #d2dae5;
          font-size: 11px;
        }

        .lesen-section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 17px;
        }

        .lesen-section-title h2 {
          font-size: 30px;
          font-weight: 800;
          letter-spacing: -0.7px;
          color: #172b4d;
          margin: 10px 0 0;
          line-height: 1.2;
        }

        .lesen-parties {
          margin-bottom: 40px;
        }

        .lesen-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
          margin-top: 25px;
        }

        .lesen-tab {
          display: flex;
          align-items: center;
          gap: 14px;
          min-height: 105px;
          padding: 18px;
          border: 1px solid #e1e6ed;
          border-radius: 13px;
          background: white;
          color: #172b4d;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .lesen-tab:hover {
          border-color: #d6b56d;
          transform: translateY(-3px);
        }

        .lesen-tab.active {
          background: #172b4d;
          border-color: #172b4d;
          color: white;
          box-shadow: 0 7px 18px rgba(23, 43, 77, 0.16);
        }

        .lesen-tab-number {
          display: grid;
          place-items: center;
          min-width: 43px;
          height: 43px;
          border-radius: 9px;
          background: #f5eedc;
          color: #a18142;
          font-size: 17px;
          font-weight: 800;
        }

        .lesen-tab.active .lesen-tab-number {
          background: #d6b56d;
          color: #172b4d;
        }

        .lesen-tab-content {
          display: flex;
          flex-direction: column;
          gap: 7px;
          flex: 1;
        }

        .lesen-tab-content strong {
          font-size: 19px;
          font-weight: 800;
        }

        .lesen-tab.active .lesen-tab-content strong {
          color: white;
        }

        .lesen-tab-content small {
          font-size: 11px;
          color: #b8954d;
          font-weight: 600;
        }

        .lesen-tab.active .lesen-tab-content small {
          color: #d6b56d;
        }

        .lesen-tab-arrow {
          font-size: 22px;
          color: #b8954d;
        }

        .lesen-tab.active .lesen-tab-arrow {
          color: #d6b56d;
        }

        .lesen-exercises {
          background: white;
          border: 1px solid #e6eaf0;
          border-radius: 13px;
          padding: 23px;
          margin-bottom: 22px;
        }

        .lesen-exercise-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .lesen-exercise-card {
          border: 1px solid #e8ecf2;
          border-radius: 12px;
          padding: 17px;
          display: grid;
          grid-template-columns: 40px 1fr;
          gap: 10px 13px;
          align-items: center;
          background: white;
          text-decoration: none;
          transition: all 0.22s ease;
          min-width: 0;
          cursor: pointer;
        }

        a.lesen-exercise-card:hover {
          border-color: #d6b56d;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(23, 43, 77, 0.07);
        }

        .lesen-exercise-card.locked {
          background: #f8f9fb;
          border-color: #e5e8ed;
          opacity: 0.9;
        }

        .lesen-exercise-card.locked:hover {
          border-color: #d6b56d;
          background: #f5eedc;
        }

        .lesen-exercise-number {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          background: #172b4d;
          color: #d6b56d;
          border-radius: 11px;
          font-size: 13px;
          font-weight: 800;
          letter-spacing: 0.4px;
          box-shadow: 0 3px 8px rgba(23, 43, 77, 0.12);
        }

        .lesen-exercise-info {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .lesen-exercise-info h3 {
          margin: 0;
          color: #172b4d;
          font-size: 14px;
          font-weight: 750;
          line-height: 1.5;
          overflow-wrap: anywhere;
        }

        .lesen-exercise-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .lesen-level {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 38px;
          padding: 5px 10px;
          background: #f5eedc;
          color: #172b4d;
          border: 1px solid #e5d4a9;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.7px;
        }

        .lesen-part-label {
          display: inline-flex;
          align-items: center;
          padding: 5px 10px;
          background: #f8edef;
          color: #a83245;
          border: 1px solid #ebcbd1;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.6px;
        }

        .lesen-pro-label {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 9px;
          background: #172b4d;
          color: #d6b56d;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 800;
        }

        .lesen-loading {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 12px;
          min-height: 180px;
          color: #8792a1;
          font-size: 13px;
        }

        .lesen-spinner {
          animation: lesen-spin 1s linear infinite;
          color: #a18142;
        }

        @keyframes lesen-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .lesen-free-info {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 15px 18px;
          background: #f5eedc;
          border: 1px solid #e5d4a9;
          border-radius: 10px;
          color: #705c32;
          font-size: 12px;
          line-height: 1.6;
        }

        @media (max-width: 900px) {
          .lesen-exercise-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 14px;
          }
        }

        @media (max-width: 650px) {
          .lesen-tabs {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .lesen-tab {
            min-height: 85px;
            padding: 15px;
          }

          .lesen-tab-content strong {
            font-size: 17px;
          }
        }

        @media (max-width: 600px) {
          .lesen-header {
            padding: 0 17px;
          }

          .lesen-content {
            padding: 25px 15px 35px;
          }

          .lesen-hero {
            padding: 23px;
          }

          .lesen-hero-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 22px;
          }

          .lesen-hero-main h1 {
            font-size: 34px;
          }

          .lesen-stats {
            width: 100%;
            box-sizing: border-box;
            justify-content: space-around;
            gap: 10px;
          }

          .lesen-hero-decoration {
            font-size: 65px;
            top: 115px;
            right: 12px;
          }

          .lesen-exercises {
            padding: 16px;
          }

          .lesen-exercise-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }
      `}</style>
    </main>
  )
}

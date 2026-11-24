
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

import {
  Trophy,
  Target,
  BookOpen,
  Headphones,
  PenLine,
  Mic,
  Clock,
  TrendingUp,
  ClipboardList,
  UserRound
} from 'lucide-react'

const competences = [
  { nom: 'Lesen', traduction: 'reading', Icon: BookOpen },
  { nom: 'Hören', traduction: 'listening', Icon: Headphones },
  { nom: 'Schreiben', traduction: 'writing', Icon: PenLine },
  { nom: 'Sprechen', traduction: 'speaking', Icon: Mic }
] as const

export default function ResultatsPage() {
  const router = useRouter()
  const { t, isRTL } = useLanguage()

  const [nom, setNom] = useState('Étudiant')
  const [niveau, setNiveau] = useState('B1')

  useEffect(() => {
    let actif = true

    async function chargerProfil() {
      const {
        data: { user }
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
    <main className="results-page" dir={isRTL ? 'rtl' : 'ltr'}>

      {/* HEADER */}

      <header className="student-header">

        <div className="header-title">
          <span className="header-small">
            {t.header.learningSpace}
          </span>

          <h2>{t.dashboard.myResults}</h2>
        </div>

        <div className="student-header-profile">

          <div className="profile-avatar">
            <UserRound size={21} />
          </div>

          <div className="profile-infos">
            <strong>{nom}</strong>
            <span>
              {t.header.student} · TELC {niveau}
            </span>
          </div>

        </div>

      </header>

      <div className="results-content">

        {/* INTRODUCTION */}

        <div className="results-intro">
          <span>{t.resultats.introTag}</span>
          <h1>{t.resultats.title}</h1>
          <p>{t.resultats.description}</p>
        </div>

        {/* NOTICE */}

        <div className="results-notice">
          <Target size={23} />
          <div>
            <strong>{t.resultats.noticeTitle}</strong>
            <p>{t.resultats.noticeDescription}</p>
          </div>
        </div>

        {/* STATISTIQUES */}

        <div className="results-stats">

          <article>
            <div className="results-stat-icon">
              <ClipboardList size={22}/>
            </div>
            <span>{t.resultats.examsCompleted}</span>
            <strong>—</strong>
            <small>{t.resultats.noExam}</small>
          </article>

          <article>
            <div className="results-stat-icon">
              <Trophy size={22}/>
            </div>
            <span>{t.resultats.successRate}</span>
            <strong>—</strong>
            <small>{t.resultats.waitingResults}</small>
          </article>

          <article>
            <div className="results-stat-icon">
              <Clock size={22}/>
            </div>
            <span>{t.resultats.trainingTime}</span>
            <strong>—</strong>
            <small>{t.resultats.activityTracked}</small>
          </article>

        </div>

        {/* ANALYSE DES COMPÉTENCES */}

        <section className="results-section">

          <div className="results-section-title">
            <div>
              <span>{t.resultats.skillsAnalysis}</span>
              <h2>{t.resultats.performance}</h2>
            </div>
            <TrendingUp size={25}/>
          </div>

          <div className="results-skills">

            {competences.map(({ nom, traduction, Icon }) => (
              <article key={nom}>
                <div className="results-skill-icon">
                  <Icon size={22}/>
                </div>

                <div className="results-skill-text">
                  <strong>{nom}</strong>
                  <span>{t.resultats[traduction]}</span>
                </div>

                <span className="results-pending">
                  {t.resultats.pending}
                </span>
              </article>
            ))}

          </div>
        </section>

        {/* HISTORIQUE */}

        <section className="results-section">

          <span className="results-label">
            {t.resultats.history}
          </span>

          <h2>{t.resultats.latestExams}</h2>

          <div className="results-empty">
            <ClipboardList size={35}/>

            <strong>{t.resultats.noResults}</strong>

            <p>{t.resultats.emptyDescription}</p>

            <Link href="/espace-etudiant/examens">
              {t.resultats.discoverExams}
            </Link>
          </div>

        </section>

        <footer className="results-footer">
          © 2026 Deutsch Erfolg
        </footer>

      </div>

      <style jsx global>{`

        .results-page {
          min-height: 100vh;
          background: #F7F8FA;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        /* HEADER */

        .results-page .student-header {
          min-height: 83px;
          background: rgba(255,255,255,.95);
          border-bottom: 1px solid #E9EDF2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 42px;
          position: sticky;
          top: 0;
          z-index: 10;
          backdrop-filter: blur(12px);
          gap: 15px;
        }

        .results-page .header-small {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: #A0844A;
          text-transform: uppercase;
        }

        .results-page .student-header h2 {
          font-size: 18px;
          margin: 5px 0 0;
          font-weight: 700;
          color: #172B4D;
        }

        .results-page .student-header-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 7px 12px 7px 7px;
          border: 1px solid #EDF0F4;
          border-radius: 40px;
          background: #FAFBFC;
          max-width: 260px;
        }

        .results-page .profile-avatar {
          width: 39px;
          height: 39px;
          border-radius: 50%;
          background: linear-gradient(145deg, #F8F0DD, #EDE0C0);
          color: #9C7939;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .results-page .student-header-profile strong,
        .results-page .student-header-profile span {
          display: block;
        }

        .results-page .student-header-profile strong {
          font-size: 12px;
          max-width: 170px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .results-page .student-header-profile span {
          font-size: 10px;
          color: #7B8798;
          margin-top: 4px;
        }

        /* CONTENT */

        .results-content {
          max-width: 1050px;
          margin: auto;
          padding: 42px 30px;
        }

        .results-intro > span,
        .results-section-title span,
        .results-label {
          color: #A18142;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .results-intro h1 {
          font-size: 32px;
          margin: 10px 0;
          color: #172B4D;
        }

        .results-intro p {
          color: #778497;
          font-size: 14px;
          line-height: 1.7;
        }

        .results-notice {
          display: flex;
          align-items: center;
          gap: 15px;
          background: #172B4D;
          color: white;
          border-radius: 12px;
          padding: 21px;
          margin: 28px 0;
        }

        .results-notice > svg {
          color: #D6B56D;
          flex-shrink: 0;
        }

        .results-notice strong {
          font-size: 14px;
        }

        .results-notice p {
          font-size: 12px;
          color: #CFD8E5;
          margin: 6px 0 0;
          line-height: 1.6;
        }

        .results-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
        }

        .results-stats article {
          background: white;
          border: 1px solid #E7EBF0;
          border-radius: 12px;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }

        .results-stat-icon,
        .results-skill-icon {
          width: 43px;
          height: 43px;
          border-radius: 10px;
          background: #F5EEDC;
          color: #A18142;
          display: grid;
          place-items: center;
          margin-bottom: 15px;
        }

        .results-stats article > span {
          color: #778497;
          font-size: 12px;
        }

        .results-stats article > strong {
          font-size: 27px;
          margin: 7px 0;
        }

        .results-stats small {
          font-size: 10px;
          color: #929CAB;
        }

        .results-section {
          background: white;
          border: 1px solid #E7EBF0;
          border-radius: 13px;
          padding: 24px;
          margin-top: 25px;
        }

        .results-section-title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #EDF0F3;
          padding-bottom: 17px;
          gap: 12px;
        }

        .results-section-title > svg {
          color: #D6B56D;
          flex-shrink: 0;
        }

        .results-section h2 {
          font-size: 19px;
          margin: 7px 0 0;
        }

        .results-skills {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          padding-top: 18px;
        }

        .results-skills article {
          display: flex;
          align-items: center;
          gap: 12px;
          background: #FAFBFC;
          border: 1px solid #EDF0F3;
          padding: 14px;
          border-radius: 9px;
          min-width: 0;
        }

        .results-skill-icon {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          margin: 0;
        }

        .results-skill-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
          min-width: 0;
        }

        .results-skill-text strong {
          font-size: 13px;
        }

        .results-skill-text span {
          font-size: 10px;
          color: #8490A0;
        }

        .results-pending {
          margin-left: auto;
          color: #9A7B41;
          font-size: 10px;
          white-space: nowrap;
        }

        .results-label {
          display: block;
          margin-bottom: 7px;
        }

        .results-empty {
          background: #FAFBFC;
          border: 1px dashed #DDE3EA;
          border-radius: 10px;
          padding: 30px 15px;
          margin-top: 17px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .results-empty > svg {
          color: #D6B56D;
          margin-bottom: 12px;
        }

        .results-empty strong {
          font-size: 14px;
        }

        .results-empty p {
          font-size: 12px;
          color: #8490A0;
          max-width: 400px;
          line-height: 1.6;
        }

        .results-empty a {
          background: #172B4D;
          color: white;
          text-decoration: none;
          padding: 11px 16px;
          border-radius: 7px;
          font-size: 11px;
          margin-top: 7px;
        }

        .results-empty a:hover {
          background: #243D64;
        }

        .results-footer {
          border-top: 1px solid #E7EBF0;
          padding-top: 20px;
          margin-top: 35px;
          color: #929CAB;
          font-size: 11px;
        }

        /* RTL */

        .results-page[dir="rtl"] .results-notice,
        .results-page[dir="rtl"] .results-section-title,
        .results-page[dir="rtl"] .results-skills article,
        .results-page[dir="rtl"] .student-header {
          direction: rtl;
        }

        .results-page[dir="rtl"] .results-intro,
        .results-page[dir="rtl"] .results-section,
        .results-page[dir="rtl"] .results-footer {
          text-align: right;
        }

        .results-page[dir="rtl"] .results-pending {
          margin-left: 0;
          margin-right: auto;
        }

        .results-page[dir="rtl"] .student-header-profile {
          direction: rtl;
          padding: 7px 7px 7px 12px;
        }

        /* RESPONSIVE */

        @media(max-width: 650px) {

          .results-page .student-header {
            min-height: 72px;
            padding: 10px 15px;
            gap: 11px;
          }

          .results-page .header-small {
            font-size: 8px;
          }

          .results-page .student-header h2 {
            font-size: 15px;
          }

          .results-page .student-header-profile {
            margin-left: auto;
            padding: 4px;
            border: 0;
            background: transparent;
          }

          .results-page .profile-avatar {
            width: 36px;
            height: 36px;
          }

          .results-page .profile-infos {
            display: none;
          }

          .results-content {
            padding: 30px 15px;
          }

          .results-intro h1 {
            font-size: 27px;
          }

          .results-stats {
            grid-template-columns: 1fr;
          }

          .results-stats article {
            display: grid;
            grid-template-columns: 50px 1fr;
            column-gap: 12px;
          }

          .results-stat-icon {
            grid-row: span 3;
            margin: 0;
          }

          .results-skills {
            grid-template-columns: 1fr;
          }

          .results-section {
            padding: 17px;
          }
        }

      `}</style>

    </main>
  )
}

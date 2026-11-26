
'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import {
  BookOpen,
  GraduationCap,
  Search,
  X,
  ChevronRight,
  Loader2,
  LibraryBig,
} from 'lucide-react'
import type { ChapterDefinition } from '@/lib/grammar/types'
import { supabase } from '@/lib/supabase'

type Chapitre = {
  id: string
  numero: number
  titre: string
  theme: string
  level: string
  locked: boolean
}

export default function GrammairePage() {
  const router = useRouter()
  const { t, isRTL, language } = useLanguage()
  const g = t.grammar

  const [nom, setNom] = useState('Étudiant')
  const [niveau, setNiveau] = useState('B1')

  const [chapitres, setChapitres] = useState<Chapitre[]>([])
  const [recherche, setRecherche] = useState('')
  const [niveauFiltre, setNiveauFiltre] = useState('all')
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')
  const restoredChapter = useRef<string | null>(null)

  // CHARGEMENT DU PROFIL

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

  useEffect(() => {
    let actif = true
    setChargement(true)
    async function load() {
      try {
        const {data} = await supabase.auth.getSession()
        const token = data.session?.access_token
        if (!token) throw new Error('Connexion requise.')
        const response = await fetch('/api/grammar/content', {headers:{Authorization:`Bearer ${token}`},cache:'no-store'})
        const result = await response.json()
        if (!response.ok) throw new Error(result.error)
        if (actif) {
          setChapitres(result.chapters.map((c: Pick<ChapterDefinition,'id'|'number'|'title'|'subtitle'|'level'> & {locked:boolean}) => ({id:c.id,numero:c.number,titre:c.title.de,theme:c.subtitle[language],level:c.level,locked:c.locked})))
          setErreur('')
        }
      } catch (e) { if (actif) { setChapitres([]); setErreur(e instanceof Error ? e.message : 'Erreur de chargement.') } }
      finally { if (actif) setChargement(false) }
    }
    void load()
    return () => { actif = false }
  }, [language])

  // RECHERCHE ET FILTRE PAR NIVEAU

  const filtres = chapitres.filter(c => {
    const correspondRecherche =
      `${c.numero} ${c.titre} ${c.theme} ${c.level}`
        .toLowerCase()
        .includes(recherche.toLowerCase())

    const correspondNiveau =
      niveauFiltre === 'all' ||
      c.level?.toUpperCase() === niveauFiltre

    return correspondRecherche && correspondNiveau
  })

  // Le fragment indique le chapitre à retrouver après le chargement asynchrone.
  useEffect(() => {
    if (chargement || erreur) return
    const anchor = window.location.hash.slice(1)
    if (!/^kapitel-\d+$/.test(anchor)) {
      restoredChapter.current = null
      return
    }
    if (restoredChapter.current === anchor || !chapitres.some(c => c.id === anchor)) return

    // Si un filtre conservé masque la carte, la rendre visible avant le scroll.
    const target = document.getElementById(anchor)
    if (!target) {
      if (recherche) setRecherche('')
      if (niveauFiltre !== 'all') setNiveauFiltre('all')
      return
    }
    const frame = window.requestAnimationFrame(() => {
      target.scrollIntoView({ block: 'center', inline: 'nearest', behavior: 'instant' })
      restoredChapter.current = anchor
    })
    return () => window.cancelAnimationFrame(frame)
  }, [chargement, erreur, chapitres, recherche, niveauFiltre])

  return (
    <div
      className="student-layout grammar-layout"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* CONTENU PRINCIPAL */}

      <main className="student-main">

        {/* HEADER */}

        <header className="student-header">

          <div className="header-title">
            <span className="header-small">
              {t.header.learningSpace}
            </span>

            <h2>{g.title}</h2>
          </div>

          <div className="student-header-profile">

            <div className="profile-avatar">
              <GraduationCap size={21} />
            </div>

            <div className="profile-infos">
              <strong>{nom}</strong>
              <span>{g.student} · TELC {niveau}</span>
            </div>

          </div>

        </header>

        <div className="student-content grammar-content">

          {/* INTRODUCTION */}

          <section className="grammar-welcome">

            <div className="grammar-welcome-content">

              <span className="welcome-tag">
                <GraduationCap size={15} />
                {g.welcomeTag}
              </span>

              <h1>{g.welcomeTitle}</h1>

              <p>{g.welcomeDescription}</p>

              <div className="grammar-welcome-bottom">
                <span>
                  <BookOpen size={16} />
                  {g.journey}
                </span>
              </div>

            </div>

            <div className="grammar-decoration">
              <LibraryBig size={105} strokeWidth={1.1} />
            </div>

          </section>

          {/* STATISTIQUES */}

          <section className="grammar-stats">

            <article className="grammar-stat-card">

              <div className="grammar-stat-icon">
                <BookOpen size={22} />
              </div>

              <div>
                <span>{g.availableChapters}</span>
                <strong>{chapitres.length}</strong>
                <p>{g.inProgram}</p>
              </div>

            </article>

            <article className="grammar-stat-card">

              <div className="grammar-stat-icon">
                <GraduationCap size={22} />
              </div>

              <div>
                <span>{g.yourLevel}</span>
                <strong>{niveau}</strong>
                <p>{g.currentLevel}</p>
              </div>

            </article>

            <article className="grammar-stat-card">

              <div className="grammar-stat-icon">
                <LibraryBig size={22} />
              </div>

              <div>
                <span>{g.displayedChapters}</span>
                <strong>{filtres.length}</strong>
                <p>{g.accordingToFilters}</p>
              </div>

            </article>

          </section>

          {/* BIBLIOTHÈQUE */}

          <section className="grammar-section">

            <div className="grammar-section-heading">

              <div>
                <span className="section-eyebrow">
                  <LibraryBig size={14} />
                  {g.library}
                </span>

                <h2>{g.sectionTitle}</h2>

                <p>{g.sectionDescription}</p>
              </div>

              <span className="grammar-count">
                {filtres.length} {g.chapters}
              </span>

            </div>

            {/* RECHERCHE */}

            <div className="grammar-toolbar">

              <div className="grammar-search">

                <Search size={19} />

                <input
                  value={recherche}
                  onChange={e => setRecherche(e.target.value)}
                  placeholder={g.searchPlaceholder}
                />

                {recherche && (
                  <button
                    onClick={() => setRecherche('')}
                    aria-label={g.clearSearch}
                  >
                    <X size={17} />
                  </button>
                )}

              </div>

              {/* FILTRE NIVEAU */}

              <div className="grammar-filters">

                <span className="filter-label">
                  {g.level}
                </span>

                {[
                  { value: 'all', label: g.all },
                  { value: 'A1', label: 'A1' },
                  { value: 'A2', label: 'A2' },
                  { value: 'B1', label: 'B1' },
                  { value: 'B2', label: 'B2' },
                ].map(n => (
                  <button
                    key={n.value}
                    className={`grammar-filter ${
                      niveauFiltre === n.value ? 'active' : ''
                    }`}
                    onClick={() => setNiveauFiltre(n.value)}
                  >
                    {n.label}
                  </button>
                ))}

              </div>

            </div>

            {/* CHARGEMENT */}

            {chargement ? (

              <div className="grammar-loading">
                <Loader2 size={30} className="animate-spin" />
                <p>{g.loading}</p>
              </div>

            ) : erreur ? (

              <div className="grammar-error">
                <BookOpen size={28} />
                <p>{erreur}</p>
              </div>

            ) : filtres.length > 0 ? (

              <div className="grammar-chapter-grid">

                {filtres.map(chapitre => (

                  <Link
                    key={chapitre.id}
                    id={chapitre.id}
                    href={`/espace-etudiant/apprentissage/grammaire/${chapitre.id}`}
                    className="grammar-chapter-card"
                  >

                    <div className="grammar-card-top">

                      <div className="grammar-chapter-number">
                        {String(chapitre.numero).padStart(2, '0')}
                      </div>

                      <span className="grammar-level">
                        {chapitre.level}{chapitre.locked ? ' · 🔒 PRO' : ''}
                      </span>

                    </div>

                    <div className="grammar-card-info">

                      <span className="grammar-chapter-label">
                        {g.chapter} {String(chapitre.numero).padStart(2, '0')}
                      </span>

                      <h3 lang="de" dir="ltr">
                        {chapitre.titre || `${g.chapter} ${chapitre.numero}`}
                      </h3>

                      <p>{chapitre.theme}</p>

                    </div>

                    <div className="grammar-card-footer">
                      <span>{g.startChapter}</span>
                      <ChevronRight size={19} />
                    </div>

                  </Link>

                ))}

              </div>

            ) : (

              <div className="grammar-empty">

                <div className="grammar-empty-icon">
                  <BookOpen size={30} />
                </div>

                <h3>
                  {recherche || niveauFiltre !== 'all'
                    ? g.noResults
                    : g.emptyTitle}
                </h3>

                <p>
                  {recherche || niveauFiltre !== 'all'
                    ? g.noResultsDescription
                    : g.emptyDescription}
                </p>

                {(recherche || niveauFiltre !== 'all') && (
                  <button
                    onClick={() => {
                      setRecherche('')
                      setNiveauFiltre('all')
                    }}
                  >
                    {g.resetFilters}
                  </button>
                )}

              </div>

            )}

          </section>

          {/* FOOTER */}

          <footer className="student-footer">
            <span>© 2026 Deutsch Erfolg. {g.footer}</span>
            <Link href="/">{g.mainWebsite}</Link>
          </footer>

        </div>
      </main>

      {/* STYLES */}

      <style jsx global>{`

        * {
          box-sizing: border-box;
        }

        .grammar-layout {
          min-height: 100vh;
          background: #F7F8FA;
          color: #172B4D;
          font-family: Arial, sans-serif;
        }

        /* CONTENU PRINCIPAL */

        .grammar-layout .student-main {
          width: 100%;
          min-height: 100vh;
          margin: 0;
        }

        .student-header {
          height: 83px;
          background: white;
          border-bottom: 1px solid #E9EDF2;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 42px;
          position: sticky;
          top: 0;
          z-index: 15;
        }

        .header-small {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: #9BAAC0;
        }

        .student-header h2 {
          font-size: 18px;
          margin: 5px 0 0;
        }

        .student-header-profile {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .profile-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #F5EEDC;
          color: #9C7939;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .student-header-profile strong,
        .student-header-profile span {
          display: block;
        }

        .student-header-profile strong {
          font-size: 12px;
        }

        .student-header-profile span {
          font-size: 10px;
          color: #7B8798;
          margin-top: 4px;
        }

        .student-content {
          max-width: 1250px;
          padding: 35px 42px 20px;
          margin: auto;
        }

        /* INTRODUCTION */

        .grammar-welcome {
          background: linear-gradient(110deg, #172B4D, #243F66);
          color: white;
          border-radius: 15px;
          padding: 32px 38px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          min-height: 220px;
          overflow: hidden;
        }

        .grammar-welcome-content {
          max-width: 650px;
        }

        .welcome-tag {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #D6B56D;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 700;
        }

        .grammar-welcome h1 {
          font-size: 32px;
          letter-spacing: -.8px;
          margin: 15px 0 9px;
        }

        .grammar-welcome p {
          color: #D2DCE9;
          font-size: 13px;
          line-height: 1.7;
          max-width: 520px;
        }

        .grammar-welcome-bottom {
          margin-top: 22px;
        }

        .grammar-welcome-bottom span {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #E5C987;
          font-size: 11px;
          font-weight: 600;
        }

        .grammar-decoration {
          color: #D6B56D;
          opacity: .8;
          padding: 0 35px;
        }

        /* STATISTIQUES */

        .grammar-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 15px;
          margin-top: 23px;
        }

        .grammar-stat-card {
          display: flex;
          align-items: center;
          gap: 15px;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 11px;
          padding: 17px 19px;
        }

        .grammar-stat-icon {
          width: 44px;
          height: 44px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #F5EEDC;
          color: #A18142;
          display: grid;
          place-items: center;
        }

        .grammar-stat-card span {
          display: block;
          color: #8B96A6;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .8px;
        }

        .grammar-stat-card strong {
          display: block;
          color: #172B4D;
          font-size: 23px;
          margin: 5px 0 2px;
        }

        .grammar-stat-card p {
          margin: 0;
          color: #929CAB;
          font-size: 10px;
        }

        /* BIBLIOTHÈQUE */

        .grammar-section {
          margin-top: 36px;
        }

        .grammar-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 15px;
          margin-bottom: 19px;
        }

        .section-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #A0844A;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
        }

        .grammar-section-heading h2 {
          font-size: 20px;
          margin: 8px 0 5px;
          color: #172B4D;
        }

        .grammar-section-heading p {
          color: #7C8797;
          font-size: 12px;
          margin: 0;
        }

        .grammar-count {
          white-space: nowrap;
          padding: 8px 12px;
          border: 1px solid #E8ECF1;
          border-radius: 7px;
          background: white;
          color: #7C8797;
          font-size: 11px;
          font-weight: 700;
        }

        /* RECHERCHE ET FILTRES */

        .grammar-toolbar {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 20px;
        }

        .grammar-search {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 180px;
          height: 51px;
          padding: 0 16px;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 9px;
          color: #929CAB;
          transition: .2s;
        }

        .grammar-search:focus-within {
          border-color: #D6B56D;
          box-shadow: 0 0 0 3px rgba(214,181,109,.12);
        }

        .grammar-search input {
          width: 100%;
          height: 100%;
          border: 0;
          outline: none;
          background: transparent;
          color: #172B4D;
          font-size: 12px;
          font-family: inherit;
        }

        .grammar-search input::placeholder {
          color: #A1A9B5;
        }

        .grammar-search button {
          display: grid;
          place-items: center;
          border: 0;
          background: none;
          color: #8B96A6;
          cursor: pointer;
        }

        .grammar-filters {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }

        .filter-label {
          margin-right: 4px;
          color: #8994A5;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .8px;
        }

        .grammar-filter {
          min-width: 39px;
          height: 34px;
          padding: 0 11px;
          border: 1px solid #E8ECF1;
          border-radius: 7px;
          background: white;
          color: #778296;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: all .2s ease;
        }

        .grammar-filter:hover {
          border-color: #D6B56D;
          color: #92743C;
        }

        .grammar-filter.active {
          border-color: #172B4D;
          background: #172B4D;
          color: #D6B56D;
          box-shadow: 0 3px 8px rgba(23,43,77,.12);
        }

        /* CARTES CHAPITRES */

        .grammar-chapter-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
        }

        .grammar-chapter-card {
          display: flex;
          flex-direction: column;
          min-width: 0;
          min-height: 205px;
          padding: 20px;
          background: white;
          border: 1px solid #E8ECF1;
          border-radius: 12px;
          text-decoration: none;
          color: inherit;
          transition: .22s ease;
        }

        .grammar-chapter-card:target {
          border-color: #D6B56D;
          outline: 2px solid #D6B56D;
          outline-offset: 2px;
        }

        .grammar-chapter-card:hover {
          transform: translateY(-3px);
          border-color: #D6B56D;
          box-shadow: 0 9px 24px rgba(23,43,77,.07);
        }

        .grammar-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .grammar-chapter-number {
          display: grid;
          place-items: center;
          width: 43px;
          height: 43px;
          border-radius: 10px;
          background: #F5EEDC;
          color: #9C7939;
          font-size: 17px;
          font-weight: 800;
        }

        .grammar-level {
          padding: 6px 10px;
          border-radius: 5px;
          background: #F0F2F6;
          color: #65748A;
          font-size: 10px;
          font-weight: 700;
        }

        .grammar-card-info {
          margin-top: 17px;
          flex: 1;
          min-width: 0;
        }

        .grammar-chapter-label {
          display: block;
          margin-bottom: 7px;
          color: #A0844A;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .grammar-card-info h3 {
          overflow: hidden;
          margin: 0 0 7px;
          color: #172B4D;
          font-size: 16px;
          font-weight: 700;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .grammar-card-info p {
          overflow: hidden;
          margin: 0;
          color: #8792A1;
          font-size: 11px;
          line-height: 1.6;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .grammar-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-top: 17px;
          padding-top: 13px;
          border-top: 1px solid #EDF0F3;
          color: #9A7B41;
          font-size: 11px;
          font-weight: 700;
        }

        .grammar-chapter-card:hover .grammar-card-footer svg {
          transform: translateX(3px);
        }

        .grammar-card-footer svg {
          transition: transform .2s;
        }

        /* CHARGEMENT ET ÉTATS VIDES */

        .grammar-loading {
          display: flex;
          min-height: 230px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 13px;
          border: 1px solid #E8ECF1;
          border-radius: 12px;
          background: white;
          color: #A18142;
        }

        .grammar-loading p {
          color: #8792A1;
          font-size: 12px;
        }

        .animate-spin {
          animation: grammar-spin 1s linear infinite;
        }

        @keyframes grammar-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .grammar-error {
          padding: 35px;
          border: 1px solid #EBDADA;
          border-radius: 12px;
          background: white;
          color: #A33E3E;
          text-align: center;
          font-size: 12px;
        }

        .grammar-empty {
          padding: 50px 20px;
          border: 1px solid #E8ECF1;
          border-radius: 12px;
          background: white;
          text-align: center;
        }

        .grammar-empty-icon {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          margin: 0 auto 16px;
          border-radius: 14px;
          background: #F5EEDC;
          color: #A18142;
        }

        .grammar-empty h3 {
          color: #172B4D;
          font-size: 15px;
          margin: 0 0 8px;
        }

        .grammar-empty p {
          color: #8792A1;
          font-size: 12px;
        }

        .grammar-empty button {
          margin-top: 10px;
          padding: 9px 14px;
          border: 0;
          border-radius: 7px;
          background: #172B4D;
          color: white;
          cursor: pointer;
          font-size: 11px;
        }

        /* FOOTER */

        .student-footer {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          border-top: 1px solid #E7EBF0;
          margin-top: 42px;
          padding: 18px 0;
          font-size: 10px;
          color: #929CAB;
        }

        .student-footer a {
          color: #9A7B41;
          text-decoration: none;
        }

        .student-footer a:hover {
          text-decoration: underline;
        }

        /* RTL - ARABE */

        .grammar-layout[dir="rtl"] .student-header-profile {
          direction: rtl;
        }

        .grammar-layout[dir="rtl"] .grammar-decoration {
          direction: ltr;
        }

        .grammar-layout[dir="rtl"] .grammar-card-footer svg {
          transform: rotate(180deg);
        }

        .grammar-layout[dir="rtl"] .grammar-search {
          direction: rtl;
        }

        /* RESPONSIVE */

        @media(max-width: 1050px) {
          .grammar-stats {
            grid-template-columns: 1fr 1fr;
          }

          .grammar-decoration {
            padding: 0 10px;
          }

          .student-content {
            padding-left: 28px;
            padding-right: 28px;
          }

          .student-header {
            padding-left: 28px;
            padding-right: 28px;
          }
        }

        @media(max-width: 850px) {
          .grammar-chapter-grid {
            grid-template-columns: 1fr;
          }

          .grammar-toolbar {
            align-items: stretch;
            flex-direction: column;
          }

          .grammar-filters {
            padding: 4px 0;
          }
        }

        @media(max-width: 700px) {

          .student-header {
            height: 72px;
            padding: 0 17px;
            gap: 12px;
          }

          .student-header h2 {
            font-size: 16px;
          }

          .header-small {
            font-size: 8px;
          }

          .student-header-profile {
            margin-left: auto;
          }

          .student-header-profile strong {
            max-width: 100px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .student-content {
            padding: 22px 16px;
          }

          .grammar-welcome {
            padding: 26px 22px;
            min-height: 200px;
          }

          .grammar-welcome h1 {
            font-size: 25px;
          }

          .grammar-decoration {
            display: none;
          }

          .grammar-stats {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .grammar-stat-card {
            padding: 13px 11px;
            gap: 10px;
          }

          .grammar-stat-icon {
            width: 36px;
            height: 36px;
          }

          .grammar-stat-card span {
            font-size: 8px;
          }

          .grammar-stat-card strong {
            font-size: 20px;
          }

          .grammar-section-heading h2 {
            font-size: 17px;
          }

          .grammar-section-heading p {
            max-width: 250px;
            line-height: 1.5;
          }

          .student-footer {
            gap: 12px;
            flex-wrap: wrap;
          }
        }

        @media(max-width: 420px) {

          .grammar-stats {
            grid-template-columns: 1fr;
          }

          .grammar-section-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .grammar-chapter-card {
            min-height: 195px;
            padding: 16px;
          }

          .grammar-filters {
            gap: 5px;
          }

          .grammar-filter {
            flex: 1;
          }

        }
.header-small {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.4px;
  color: #B89552;
}

.student-header h2 {
  font-size: 18px;
  margin: 5px 0 0;
  color: #172B4D;
  font-weight: 700;
}
      `}</style>
    </div>
  )
}

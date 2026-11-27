
'use client'

import DeutschErfolgLoader from '@/components/student/DeutschErfolgLoader'

// DE_GRAMMAR_MODULE_TITLE_V1
import GrammarModuleTitle from '@/components/student/GrammarModuleTitle'

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

  LibraryBig,
  Lock,
} from 'lucide-react'
import type { ChapterDefinition } from '@/lib/grammar/types'
import { supabase } from '@/lib/supabase'

type Chapitre = {
  id: string
  numero: number
  titre: string
  titreAllemand: string
  titres: ChapterDefinition['title']
  themes: ChapterDefinition['subtitle']
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

  const [chapitresSource, setChapitres] = useState<Chapitre[]>([])
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
          setChapitres(result.chapters.map((c: Pick<ChapterDefinition,'id'|'number'|'title'|'subtitle'|'level'> & {locked:boolean}) => ({id:c.id,numero:c.number,titre:c.title.de,titreAllemand:c.title.de,titres:c.title,themes:c.subtitle,theme:c.subtitle.de,level:c.level,locked:c.locked})))
          setErreur('')
        }
      } catch (e) { if (actif) { setChapitres([]); setErreur(e instanceof Error ? e.message : 'Erreur de chargement.') } }
      finally { if (actif) setChargement(false) }
    }
    void load()
    return () => { actif = false }
  }, [])

  // RECHERCHE ET FILTRE PAR NIVEAU

  // DE_GRAMMAR_LOCALIZED_CARDS_V1
  const chapitres = chapitresSource.map(c => ({...c, titre: c.titres[language] || c.titreAllemand, theme: c.themes[language] || c.themes.de}))
  const filtres = chapitres.filter(c => {
    const correspondRecherche =
      `${c.numero} ${c.titre} ${c.titreAllemand} ${c.theme} ${c.level}`
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

            <h2><GrammarModuleTitle /></h2>
          </div>

          <div className="student-header-profile">

            <div className="profile-avatar">
              <GraduationCap size={21} />
            </div>

            <div className="profile-infos">
              <strong>{nom}</strong>
              <span>{g.student} · {niveau}</span>
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

              <h1><GrammarModuleTitle /></h1>

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
                ].map(n => (
                  <button
                    key={n.value}
                    className={`grammar-filter ${
                      niveauFiltre === n.value ? 'active' : ''
                    }`}
                    aria-pressed={niveauFiltre === n.value}
                    onClick={() => setNiveauFiltre(n.value)}
                  >
                    {n.label}
                  </button>
                ))}

              </div>

            </div>

            {/* CHARGEMENT */}

            {chargement ? (

              <DeutschErfolgLoader kind="grammar" inline />

            ) : erreur ? (

              <div className="grammar-error">
                <BookOpen size={28} />
                <p>{erreur}</p>
              </div>

            ) : filtres.length > 0 ? (

              <div className="grammar-editorial-groups">
                {Array.from(new Set(filtres.map(c => c.level))).map(level => {
                  const items = filtres.filter(c => c.level === level)
                  return (
                    <section key={level} className="grammar-editorial-level">
                      <div className="grammar-level-heading">
                        <h3 lang="de" dir="ltr">{level}</h3>
                        <span className="grammar-level-rule" aria-hidden="true" />
                        <span>{items.length} {g.chapters}</span>
                      </div>
                      <div className="grammar-chapter-grid">
                        {items.map(chapitre => (
                          <Link
                            key={chapitre.id}
                            id={chapitre.id}
                            href={`/espace-etudiant/apprentissage/grammaire/${chapitre.id}`}
                            className={`grammar-chapter-card${chapitre.locked ? ' grammar-chapter-locked' : ''}`}
                          >
                            <div className="grammar-card-top">
                              <div className="grammar-chapter-number" aria-hidden="true">
                                {String(chapitre.numero).padStart(2, '0')}
                              </div>
                            </div>
                            <div className="grammar-card-info">
                              <span className="grammar-chapter-label" lang="de" dir="ltr">Kapitel {String(chapitre.numero).padStart(2, '0')}</span>
                              <h4 lang={language} dir={isRTL ? 'rtl' : 'ltr'}>{chapitre.titre || `${g.chapter} ${chapitre.numero}`}</h4>
                              {language !== 'de' && chapitre.titreAllemand && chapitre.titreAllemand !== chapitre.titre && <span className="de-card-original-title" lang="de" dir="ltr">{chapitre.titreAllemand}</span>}
                              <p>{chapitre.theme}</p>
                            </div>
                            <div className="grammar-card-footer">
                              {chapitre.locked ? <span className="grammar-pro-mark"><Lock size={13} aria-hidden="true" /> PRO</span> : <ChevronRight size={19} aria-hidden="true" />}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </section>
                  )
                })}
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
        .grammar-card-info .de-card-original-title {display:block; margin:4px 0 7px; color:#8b6939; font-size:12px; line-height:1.4; font-weight:600; text-align:start; overflow-wrap:anywhere;}


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

        /* Deutsche Grammatik — editorial refinement v1 */
        .grammar-layout { --ink:#192b43; --gold:#94713c; --line:#e3ded3; --paper:#f7f5f0; background:var(--paper); color:var(--ink); font-family:inherit; }
        .grammar-layout .student-header { height:72px; border-color:var(--line); padding-inline:clamp(18px,4vw,48px); }
        .grammar-layout .header-small { color:var(--gold); font-size:10px; letter-spacing:.12em; }
        .grammar-layout .student-header h2 { font-size:17px; font-weight:600; color:var(--ink); }
        .grammar-layout .profile-avatar { background:#f1eadb; color:var(--gold); }
        .grammar-layout .student-content { max-width:1320px; padding:34px clamp(18px,4vw,48px) 24px; }
        .grammar-layout .grammar-welcome { position:relative; isolation:isolate; min-height:0; padding:42px 44px; border-radius:12px; background:#192b43; align-items:center; gap:20px; }
        .grammar-layout .grammar-welcome-content { max-width:760px; position:relative; z-index:1; }
        .grammar-layout .welcome-tag { font-size:10px; letter-spacing:.16em; color:#e2c78e; }
        .grammar-layout .welcome-tag svg { display:none; }
        .grammar-layout .grammar-welcome h1 { color:#fffdf7; font:400 clamp(36px,5vw,60px)/1.08 Georgia, 'Times New Roman', serif; letter-spacing:-.045em; margin:15px 0; }
        .grammar-layout .grammar-welcome p { max-width:600px; color:#d4dbe3; font-size:14px; line-height:1.8; }
        .grammar-layout .grammar-welcome-bottom { margin-top:25px; padding-top:17px; border-top:1px solid #ffffff24; }
        .grammar-layout .grammar-welcome-bottom span { color:#e3c892; font-size:12px; }
        .grammar-layout .grammar-decoration { display:block; flex-shrink:0; opacity:1; padding:0; margin-inline-end:10px; color:#d4bc86; }
        .grammar-layout .grammar-decoration svg { display:none; }
        .grammar-layout .grammar-decoration::after { content:'A1 — B1'; display:block; direction:ltr; white-space:nowrap; font:400 clamp(22px,4vw,42px)/1 Georgia,serif; letter-spacing:-.04em; border-block:1px solid #d4bc8660; padding:21px 8px; }
        .grammar-layout .grammar-stats { grid-template-columns:repeat(3,minmax(0,1fr)); gap:0; margin-top:22px; border-block:1px solid var(--line); }
        .grammar-layout .grammar-stat-card { background:transparent; border:0; border-radius:0; padding:16px 20px; min-width:0; }
        .grammar-layout .grammar-stat-card + .grammar-stat-card { border-inline-start:1px solid var(--line); }
        .grammar-layout .grammar-stat-icon { display:none; }
        .grammar-layout .grammar-stat-card span { color:#6b6b68; letter-spacing:.035em; font-size:11px; line-height:1.4; }
        .grammar-layout .grammar-stat-card strong { color:var(--ink); font:400 30px/1.15 Georgia,serif; margin:7px 0; }
        .grammar-layout .grammar-stat-card p { color:#6f736f; font-size:11px; line-height:1.4; }
        .grammar-layout .grammar-section { margin-top:42px; }
        .grammar-layout .section-eyebrow { color:var(--gold); font-size:10px; letter-spacing:.13em; }
        .grammar-layout .section-eyebrow svg { display:none; }
        .grammar-layout .grammar-section-heading h2 { color:var(--ink); font:400 clamp(25px,3vw,35px)/1.2 Georgia,serif; margin:9px 0; }
        .grammar-layout .grammar-section-heading p { color:#686e75; font-size:13px; line-height:1.6; }
        .grammar-layout .grammar-count { background:transparent; border:0; padding:0 0 4px; color:#686e75; font-size:12px; font-weight:500; }
        .grammar-layout .grammar-toolbar { gap:16px; padding:0 0 22px; border-bottom:1px solid var(--line); margin-bottom:27px; }
        .grammar-layout .grammar-search { border-color:var(--line); border-radius:7px; height:48px; color:#777a7c; }
        .grammar-layout .grammar-search input { font-size:14px; color:var(--ink); }
        .grammar-layout .grammar-search input::placeholder { color:#73777a; }
        .grammar-layout .grammar-filter { border-radius:6px; min-height:40px; min-width:45px; border-color:var(--line); color:var(--ink); font-size:12px; font-weight:600; }
        .grammar-layout .grammar-filter.active { background:var(--ink); color:#fffdf7; border-color:var(--ink); box-shadow:none; }
        .grammar-layout .filter-label { color:#706c65; font-size:10px; }
        .grammar-layout .grammar-editorial-groups { display:grid; gap:35px; }
        .grammar-layout .grammar-level-heading { display:flex; align-items:center; gap:16px; margin:0 0 13px; }
        .grammar-layout .grammar-level-heading h3 { color:var(--ink); font:400 29px/1 Georgia,serif; margin:0; }
        .grammar-layout .grammar-level-rule { height:1px; flex:1; background:var(--line); }
        .grammar-layout .grammar-level-heading > span:last-child { color:#686e75; font-size:12px; white-space:nowrap; }
        .grammar-layout .grammar-chapter-grid { grid-template-columns:repeat(2,minmax(0,1fr)); gap:10px; }
        .grammar-layout .grammar-chapter-card { display:grid; grid-template-columns:52px minmax(0,1fr) auto; align-items:center; gap:15px; min-height:112px; padding:16px 18px; background:#fff; border:1px solid var(--line); border-radius:8px; scroll-margin-top:95px; transition:border-color .18s,background .18s,box-shadow .18s; }
        .grammar-layout .grammar-chapter-card:hover { transform:none; border-color:#b89d68; background:#fffdf8; box-shadow:0 4px 13px #192b4308; }
        .grammar-layout .grammar-chapter-card:focus-visible,.grammar-layout .grammar-filter:focus-visible { outline:2px solid #94713c; outline-offset:3px; }
        .grammar-layout .grammar-chapter-card:target { border-color:#a18450; outline:2px solid #b89d68; outline-offset:2px; background:#fdf9ef; }
        .grammar-layout .grammar-card-top { align-self:center; }
        .grammar-layout .grammar-chapter-number { width:52px; height:auto; min-height:46px; border-radius:0; background:transparent; color:var(--gold); font:400 30px/1 Georgia,serif; border-inline-end:1px solid var(--line); padding-inline-end:12px; font-variant-numeric:tabular-nums; }
        .grammar-layout .grammar-card-info { margin:0; min-width:0; }
        .grammar-layout .grammar-chapter-label { display:block; margin-bottom:5px; text-transform:uppercase; font-size:9px; color:var(--gold); letter-spacing:.1em; }
        .grammar-layout .grammar-card-info h4 { margin:0 0 5px; font-size:16px; font-weight:600; color:var(--ink); line-height:1.35; overflow-wrap:anywhere; text-align:start; }
        .grammar-layout[dir="rtl"] .grammar-card-info h4,.grammar-layout[dir="rtl"] .grammar-chapter-label { text-align:right; }
        .grammar-layout .grammar-card-info p { white-space:normal; overflow:visible; color:#686e75; font-size:12px; line-height:1.55; overflow-wrap:anywhere; }
        .grammar-layout .grammar-card-footer { margin:0; padding:0; border:0; color:var(--gold); justify-content:flex-end; }
        .grammar-layout .grammar-pro-mark { display:inline-flex; gap:4px; align-items:center; font-size:10px; letter-spacing:.05em; color:#806b47; }
        .grammar-layout .grammar-chapter-locked { background:#fcfbf8; }
        .grammar-layout[dir="rtl"] .grammar-pro-mark svg { transform:none; }
        .grammar-layout .student-footer { border-color:var(--line); color:#686e75; font-size:11px; }
        .grammar-layout .grammar-loading,.grammar-layout .grammar-empty { border-color:var(--line); border-radius:8px; }
        @media(max-width:1050px) { .grammar-layout .grammar-chapter-grid { grid-template-columns:1fr; } }
        @media(max-width:700px) { .grammar-layout .student-content { padding-top:22px; } .grammar-layout .grammar-welcome { padding:29px 23px; } .grammar-layout .grammar-decoration { display:none; } .grammar-layout .grammar-stats { grid-template-columns:repeat(3,minmax(0,1fr)); } .grammar-layout .grammar-stat-card { padding:12px 9px; } .grammar-layout .grammar-stat-card strong { font-size:24px; } .grammar-layout .grammar-stat-card span,.grammar-layout .grammar-stat-card p { font-size:10px; overflow-wrap:anywhere; } .grammar-layout .grammar-section { margin-top:29px; } .grammar-layout .grammar-toolbar { gap:9px; } .grammar-layout .grammar-filter { flex:0 0 auto; } .grammar-layout .grammar-chapter-card { min-height:98px; grid-template-columns:43px minmax(0,1fr) auto; gap:11px; padding:14px 12px; } .grammar-layout .grammar-chapter-number { width:43px; font-size:25px; padding-inline-end:8px; } .grammar-layout .grammar-card-info h4 { font-size:15px; } }
        @media(prefers-reduced-motion:reduce) { .grammar-layout .grammar-chapter-card,.grammar-layout .grammar-card-footer svg,.grammar-layout .grammar-filter { transition:none; } }
      `}</style>
    </div>
  )
}

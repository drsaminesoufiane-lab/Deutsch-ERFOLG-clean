
'use client'
import { NotebookPen } from 'lucide-react'
import { BarChart3 } from 'lucide-react'

import { LibraryBig } from 'lucide-react'


// DE_GRAMMAR_MODULE_TITLE_V1
import { useGrammarModuleTitle } from '@/components/student/GrammarModuleTitle'

import { useState } from 'react'
import Link from 'next/link'
import StudentXP from '@/components/student/StudentXP'
import { usePathname, useRouter } from 'next/navigation'
import { LayoutDashboard, ClipboardList, Trophy, FileText, Settings, LogOut, GraduationCap, Menu, X, BookOpen, ShieldCheck } from 'lucide-react'
import { House } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

export default function StudentSidebar({ isAdmin = false }: { isAdmin?: boolean }) {
  const router = useRouter()
  const pathname = usePathname()
  const { t, language } = useLanguage()
  const grammarModuleTitle = useGrammarModuleTitle()

  const [menuOpen, setMenuOpen] = useState(false)

  const beginnerLabel = {
    fr: 'Allemand débutant A1',
    de: 'Deutsch für Anfänger A1',
    en: 'German for Beginners A1',
    ar: 'الألمانية للمبتدئين A1',
  }

  const dictionaryLabel = {
    fr: 'Dictionnaire B1',
    de: 'Wörterbuch B1',
    en: 'B1 Dictionary',
    ar: 'قاموس B1',
  }

  const currentLanguage = language // DE_SIDEBAR_REACTIVE_LANGUAGE_V1
const administrationLabel = {
    fr: 'Administration',
    de: 'Verwaltung',
    en: 'Administration',
    ar: 'الإدارة',
  }
  const administrationText =
    administrationLabel[currentLanguage as keyof typeof administrationLabel] ||
    administrationLabel.de

  const beginnerText =
    beginnerLabel[currentLanguage as keyof typeof beginnerLabel] ||
    beginnerLabel.de

  const dictionaryText =
    dictionaryLabel[currentLanguage as keyof typeof dictionaryLabel] ||
    dictionaryLabel.de

  const menu = [
    {
      label: t.sidebar.dashboard,
      Icon: LayoutDashboard,
      href: '/espace-etudiant',
    },
    {
      label: beginnerText,
      Icon: BookOpen,
      href: '/espace-etudiant/apprentissage/allemand-debutant',
    },
    {
      label: grammarModuleTitle,
      Icon: NotebookPen,
      href: '/espace-etudiant/apprentissage/grammaire',
    },
    {
      label: dictionaryText,
      Icon: LibraryBig,
      href: '/espace-etudiant/apprentissage/woerterbuch-b1',
    },
    {
      label: t.sidebar.exams,
      Icon: ClipboardList,
      href: '/espace-etudiant/examens',
    },
    {
      label: t.sidebar.results,
      Icon: BarChart3,
      href: '/espace-etudiant/resultats',
    },

    {
      label: ({ fr: 'Classement', de: 'Rangliste', en: 'Leaderboard', ar: 'الترتيب' } as const)[language],
      Icon: Trophy,
      href: '/espace-etudiant/classement',
    },
    {
      label: t.sidebar.documents,
      Icon: FileText,
      href: '/espace-etudiant/documents',
    },
    {
      label: t.sidebar.settings,
      Icon: Settings,
      href: '/espace-etudiant/parametres',
    },
  ]

  function isActive(href: string) {
    if (href === '/espace-etudiant') {
      return pathname === href
    }

    return pathname === href || pathname.startsWith(`${href}/`)
  }

  async function deconnexion() {
    await supabase.auth.signOut()
    router.push('/connexion')
  }

  return (
    <>
      <button
        className="student-sidebar-mobile-button"
        onClick={() => setMenuOpen(true)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        aria-controls="student-navigation"
      >
        <Menu size={23} />
      </button>

      <aside id="student-navigation" className={`student-sidebar ${menuOpen ? 'open' : ''}`}>
        <div className="student-brand">
          <div className="student-brand-icon">
            <GraduationCap size={25} strokeWidth={2.2} />
          </div>

          <div className="brand-name">
            <div className="brand-title">
              Deutsch <strong>Erfolg</strong>
            </div>
            <span>DEUTSCH LERNEN. ZIELE ERREICHEN.</span>
          </div>

          <button
            className="close-menu"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
          >
            <X size={21} />
          </button>
        </div>

        <StudentXP />

        <div className="sidebar-label">
          {t.sidebar.mainMenu}
        </div>

        <nav className="student-menu">
          {menu.map(({ label, Icon, href }) => {
            const active = isActive(href)

            return (
              <Link
                href={href}
                key={href}
                aria-current={active ? "page" : undefined}
                className={`student-menu-item ${active ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={18} strokeWidth={1.65} aria-hidden="true" />
                <span>{label}</span>
                {active && <span className="menu-active-dot" />}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <Link href="/" className="student-menu-item de-return-home" onClick={() => setMenuOpen(false)}>
            <House size={19} strokeWidth={1.7} aria-hidden="true" />
            <span>{{fr:'Accueil du site', de:'Zur Startseite', en:'Website home', ar:'الصفحة الرئيسية'}[language]}</span>
          </Link>
          {isAdmin && (
            <Link
              href="/administration"
              className="student-menu-item student-switch-admin"
              onClick={() => setMenuOpen(false)}
            >
              <ShieldCheck size={18} strokeWidth={1.65} aria-hidden="true" />
              <span>{administrationText}</span>
            </Link>
          )}
          

          <button
            className="logout-button"
            onClick={deconnexion}
          >
            <LogOut size={18} />
            {t.sidebar.logout}
          </button>
        </div>
      </aside>

      {menuOpen && (
        <div
          className="student-overlay"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <style jsx global>{`
        /* Deutsch-Erfolg / Sidebar premium V1 */
        .student-sidebar {
          width: 255px;
          position: fixed;
          inset: 0 auto 0 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 26px 17px 18px;
          background: var(--de-navy, #192b43);
          color: #f8f6f1;
          border-inline-end: 1px solid rgba(255,255,255,.09);
          overflow-y: auto;
          overscroll-behavior: contain;
          scrollbar-width: thin;
          scrollbar-color: #516076 transparent;
          box-shadow: none;
          font-family: var(--de-sans, 'Plus Jakarta Sans', Arial, sans-serif);
        }
        .student-sidebar .student-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 2px 3px 23px;
          border-bottom: 1px solid rgba(255,255,255,.12);
          margin-bottom: 24px;
          flex-shrink: 0;
        }
        .student-sidebar .student-brand-icon {
          display: grid;
          place-items: center;
          width: 39px;
          height: 39px;
          flex-shrink: 0;
          border: 1px solid rgba(227,203,150,.35);
          border-radius: 8px;
          background: transparent;
          color: var(--de-gold-light, #e3cb96);
        }
        .student-sidebar .brand-name { display: flex; flex-direction: column; gap: 5px; min-width: 0; }
        .student-sidebar .brand-title { font-family: var(--de-serif, Georgia, serif); font-size: 21px; font-weight: 400; line-height: 1.1; white-space: nowrap; letter-spacing: -.5px; }
        .student-sidebar .brand-title strong { color: var(--de-gold-light, #e3cb96); font-weight: 400; }
        .student-sidebar .brand-name > span { color: #b0bdcc; font-size: 7px; line-height: 1.5; letter-spacing: .65px; font-weight: 500; }
        .student-sidebar .sidebar-label { padding: 0 10px 12px; color: #aebdce; font-size: 10px; letter-spacing: 1.5px; text-transform: uppercase; font-weight: 600; }
        .student-sidebar .student-menu { display: flex; flex-direction: column; gap: 5px; flex-shrink: 0; }
        .student-sidebar .student-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          min-height: 46px;
          padding: 11px 10px;
          border-inline-start: 2px solid transparent;
          border-radius: 5px;
          color: #d1dae5;
          text-decoration: none;
          font-size: 12px;
          line-height: 1.5;
          font-weight: 500;
          transition: background .18s ease, color .18s ease, border-color .18s ease;
        }
        .student-sidebar .student-menu-item > svg { flex-shrink: 0; color: #adbacb; }
        .student-sidebar .student-menu-item > span:not(.menu-active-dot) { flex: 1; min-width: 0; overflow-wrap: anywhere; }
        .student-sidebar .student-menu-item:hover { background: rgba(255,255,255,.055); color: #fff; }
        .student-sidebar .student-menu-item.active { background: #ffffff0d; color: var(--de-gold-light, #e3cb96); border-inline-start-color: var(--de-gold, #b49760); font-weight: 650; }
        .student-sidebar .student-menu-item.active > svg { color: var(--de-gold-light, #e3cb96); }
        .student-sidebar .menu-active-dot { width: 5px; height: 5px; flex-shrink: 0; border-radius: 50%; background: var(--de-gold-light, #e3cb96); margin-inline-start: auto; }
        .student-sidebar .sidebar-bottom { margin-top: auto; padding-top: 25px; flex-shrink: 0; }
        .student-sidebar .student-switch-admin {
          margin-bottom: 14px;
          border: 1px solid rgba(227,203,150,.45);
          border-radius: 6px;
          color: var(--de-gold-light, #e3cb96);
        }
        .student-sidebar .student-switch-admin > svg { color: var(--de-gold-light, #e3cb96); }
        .student-sidebar .student-switch-admin:hover { background: rgba(227,203,150,.12); color: var(--de-gold-light, #e3cb96); }
        .student-sidebar .sidebar-help { padding: 14px 12px; border-top: 1px solid rgba(255,255,255,.12); border-bottom: 1px solid rgba(255,255,255,.12); color: var(--de-gold-light, #e3cb96); }
        .student-sidebar .help-icon { display: inline-flex; align-items: center; justify-content: center; width: 26px; height: 26px; }
        .student-sidebar .sidebar-help strong { display: block; margin-top: 7px; color: #f8f6f1; font-size: 12px; font-weight: 600; }
        .student-sidebar .sidebar-help p { margin: 5px 0 0; color: #b8c4d2; font-size: 11px; line-height: 1.65; }
        .student-sidebar .logout-button { display: flex; align-items: center; gap: 10px; width: 100%; min-height: 44px; padding: 12px 10px 0; background: none; border: 0; color: #d1dae5; font-size: 12px; text-align: start; cursor: pointer; transition: color .18s ease; }
        .student-sidebar .logout-button:hover { color: #f4bdbd; }
        .student-sidebar :is(a,button):focus-visible, .student-sidebar-mobile-button:focus-visible { outline: 2px solid var(--de-gold-light, #e3cb96); outline-offset: 2px; }
        .student-sidebar .close-menu, .student-sidebar-mobile-button, .student-overlay { display: none; }
        [dir="rtl"] .student-sidebar { left: auto; right: 0; font-family: 'Tajawal', Arial, sans-serif; }
        [dir="rtl"] .student-sidebar .brand-name { direction: ltr; }
        [dir="rtl"] .student-sidebar .sidebar-label { letter-spacing: 0; }
        @media (max-width: 700px) {
          .student-sidebar { width: min(255px, 90vw); transform: translateX(-100%); visibility: hidden; transition: transform .22s ease, visibility .22s; box-shadow: none; }
          .student-sidebar.open { transform: translateX(0); visibility: visible; box-shadow: 8px 0 28px rgba(0,0,0,.16); }
          .student-sidebar .close-menu { display: grid; place-items: center; flex-shrink: 0; width: 26px; height: 36px; margin-inline-start: auto; padding: 0; border: 0; background: transparent; color: #e3cb96; cursor: pointer; }
          .student-sidebar .student-brand { gap: 7px; }
          .student-sidebar .brand-title { font-size: 18px; }
          .student-sidebar .brand-name > span { font-size: 6px; letter-spacing: .35px; }
          .student-sidebar-mobile-button { display: grid; place-items: center; position: fixed; top: 16px; left: 15px; z-index: 50; width: 42px; height: 42px; border: 1px solid var(--de-border, #e3ded3); border-radius: 8px; background: var(--de-white, #fff); color: var(--de-navy, #192b43); cursor: pointer; }
          .student-overlay { display: block; position: fixed; inset: 0; background: rgba(10,20,35,.48); z-index: 90; }
          [dir="rtl"] .student-sidebar { transform: translateX(100%); }
          [dir="rtl"] .student-sidebar.open { transform: translateX(0); }
          [dir="rtl"] .student-sidebar-mobile-button { left: auto; right: 15px; }
          /* No desktop sidebar reservation when the drawer is hidden. */
          .student-global-layout .student-global-content,
          [dir="rtl"] .student-global-layout .student-global-content { margin-left: 0; margin-right: 0; min-width: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .student-sidebar, .student-sidebar .student-menu-item, .student-sidebar .logout-button { transition: none; }
        }
      `}</style>
    </>
  )
}

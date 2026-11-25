
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  ClipboardList,
  Trophy,
  FileText,
  Settings,
  LogOut,
  GraduationCap,
  Menu,
  X,
  BookOpen,
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

export default function StudentSidebar() {
  const router = useRouter()
  const pathname = usePathname()
  const { t } = useLanguage()

  const [menuOpen, setMenuOpen] = useState(false)

  const beginnerLabel = {
    fr: 'Allemand débutant A1',
    de: 'Deutsch für Anfänger A1',
    en: 'German for Beginners A1',
    ar: 'الألمانية للمبتدئين A1',
  }

  const currentLanguage =
    typeof window !== 'undefined'
      ? localStorage.getItem('deutsch_erfolg_language')
      : 'de'

  const beginnerText =
    beginnerLabel[currentLanguage as keyof typeof beginnerLabel] ||
    beginnerLabel.de

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
      label: t.sidebar.grammar,
      Icon: GraduationCap,
      href: '/espace-etudiant/apprentissage/grammaire',
    },
    {
      label: t.sidebar.exams,
      Icon: ClipboardList,
      href: '/espace-etudiant/examens',
    },
    {
      label: t.sidebar.results,
      Icon: Trophy,
      href: '/espace-etudiant/resultats',
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
      >
        <Menu size={23} />
      </button>

      <aside className={`student-sidebar ${menuOpen ? 'open' : ''}`}>
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
                className={`student-menu-item ${active ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                <Icon size={19} strokeWidth={1.9} />
                <span>{label}</span>
                {active && <span className="menu-active-dot" />}
              </Link>
            )
          })}
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon">
              <GraduationCap size={23} />
            </div>

            <strong>{t.sidebar.helpTitle}</strong>
            <p>{t.sidebar.helpDescription}</p>
          </div>

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
        .student-sidebar {
          width: 255px;
          background: linear-gradient(180deg, #172B4D 0%, #142640 100%);
          color: white;
          position: fixed;
          inset: 0 auto 0 0;
          z-index: 100;
          display: flex;
          flex-direction: column;
          padding: 27px 19px 20px;
          box-shadow: 5px 0 25px rgba(20, 38, 64, .08);
        }

        .student-brand {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 0 8px 34px;
        }

        .student-brand-icon {
          width: 43px;
          height: 43px;
          border-radius: 12px;
          display: grid;
          place-items: center;
          background: rgba(214,181,109,.13);
          color: #D6B56D;
          border: 1px solid rgba(214,181,109,.2);
          flex-shrink: 0;
        }

        .brand-name {
          display: flex;
          flex-direction: column;
          gap: 4px;
          white-space: nowrap;
        }

        .brand-title {
          white-space: nowrap;
          font-size: 19px;
          font-weight: 700;
        }

        .brand-title strong {
          color: #D6B56D;
        }

        .brand-name > span {
          color: #8292AA;
          font-size: 7px;
          letter-spacing: 1.1px;
          font-weight: 500;
        }

        .sidebar-label {
          padding: 0 12px 13px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.4px;
          color: #9BAAC0;
          text-transform: uppercase;
        }

        .student-menu {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .student-menu-item {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 13px 12px;
          border-radius: 9px;
          color: #C5D0DF;
          text-decoration: none;
          font-size: 13px;
          transition: all .2s ease;
          position: relative;
        }

        .student-menu-item:hover {
          background: rgba(255,255,255,.07);
          color: white;
          transform: translateX(2px);
        }

        .student-menu-item.active {
          background: rgba(214,181,109,.14);
          color: #E5C987;
          font-weight: 700;
          border-left: 3px solid #D6B56D;
        }

        .menu-active-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #D6B56D;
          margin-left: auto;
        }

        .sidebar-bottom {
          margin-top: auto;
        }

        .sidebar-help {
          background: linear-gradient(
            145deg,
            rgba(255,255,255,.09),
            rgba(255,255,255,.035)
          );
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 13px;
          padding: 17px;
          color: #D6B56D;
        }

        .help-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: rgba(214,181,109,.13);
        }

        .sidebar-help strong {
          display: block;
          color: white;
          font-size: 13px;
          margin-top: 12px;
        }

        .sidebar-help p {
          color: #B9C6D7;
          font-size: 11px;
          line-height: 1.65;
          margin-bottom: 0;
        }

        .logout-button {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #C5D0DF;
          background: none;
          border: 0;
          padding: 18px 10px 5px;
          cursor: pointer;
          font-size: 13px;
          transition: color .2s;
        }

        .logout-button:hover {
          color: #F0B6B6;
        }

        .close-menu,
        .student-sidebar-mobile-button,
        .student-overlay {
          display: none;
        }

        /* ARABE / RTL */

        [dir="rtl"] .student-sidebar {
          left: auto;
          right: 0;
        }

        [dir="rtl"] .student-menu-item.active {
          border-left: none;
          border-right: 3px solid #D6B56D;
        }

        [dir="rtl"] .menu-active-dot {
          margin-left: 0;
          margin-right: auto;
        }

        /* MOBILE */

        @media (max-width: 700px) {
          .student-sidebar {
            transform: translateX(-100%);
            transition: transform .25s ease;
            box-shadow: 10px 0 35px rgba(0,0,0,.2);
          }

          .student-sidebar.open {
            transform: translateX(0);
          }

          .close-menu {
            display: block;
            margin-left: auto;
            background: none;
            border: 0;
            color: white;
            cursor: pointer;
          }

          .student-sidebar-mobile-button {
            display: grid;
            place-items: center;
            position: fixed;
            top: 16px;
            left: 15px;
            z-index: 50;
            background: #F4F6F9;
            border: 0;
            width: 39px;
            height: 39px;
            border-radius: 9px;
            color: #172B4D;
            cursor: pointer;
          }

          .student-overlay {
            display: block;
            position: fixed;
            inset: 0;
            background: rgba(10,20,35,.48);
            backdrop-filter: blur(2px);
            z-index: 90;
          }

          [dir="rtl"] .student-sidebar {
            transform: translateX(100%);
          }

          [dir="rtl"] .student-sidebar.open {
            transform: translateX(0);
          }

          [dir="rtl"] .student-sidebar-mobile-button {
            left: auto;
            right: 15px;
          }
        }
      `}</style>
    </>
  )
}

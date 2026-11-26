
'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import AdminDashboardBanner from './AdminDashboardBanner'
import { supabase } from '@/lib/supabase'
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Wallet,
  Bell,
  BarChart3,
  BookOpen,
  FileText,
  FileAudio,
  Settings,
  ShieldCheck,
  Search,
  RefreshCw,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  Clock,
  Activity,
  CheckCircle2,
  CalendarDays,
} from 'lucide-react'

type DashboardStats = {
  etudiants: number | null
  paiements: number | null
}

type EtudiantPresence = {
  id: string
  full_name: string | null
  email: string | null
  last_seen_at: string | null
}

type PresenceStatus = 'online' | 'inactive' | 'offline' | 'never'

const raccourcis = [
  {
    titre: 'Gestion des étudiants',
    description: 'Consulter les comptes et suivre les inscriptions.',
    icon: Users,
    href: '/administration/etudiants',
    color: 'blue',
  },
  {
    titre: 'Gestion des paiements',
    description: 'Suivre les transactions et les abonnements PRO.',
    icon: Wallet,
    href: '/administration/paiements',
    color: 'green',
  },
  {
    titre: 'Statistiques',
    description: 'Analyser les résultats et les performances.',
    icon: BarChart3,
    href: '/administration/statistiques',
    color: 'orange',
  },
  {
    titre: 'Tâches et alertes',
    description: 'Retrouver les tâches et les éléments à traiter.',
    icon: Bell,
    href: '/administration/taches',
    color: 'pink',
  },
  {
    titre: 'Documents PDF',
    description: 'Accéder à la gestion des documents pédagogiques.',
    icon: FileText,
    href: '#',
    color: 'gray',
  },
]

function obtenirStatut(
  lastSeen: string | null,
  maintenant: number
): PresenceStatus {
  if (!lastSeen) return 'never'

  const difference =
    maintenant - new Date(lastSeen).getTime()

  if (!Number.isFinite(difference)) return 'never'

  const minutes = difference / 60000

  if (minutes < 2) return 'online'
  if (minutes < 10) return 'inactive'

  return 'offline'
}

function afficherDerniereActivite(
  lastSeen: string | null,
  maintenant: number
) {
  if (!lastSeen) return 'Jamais connecté'

  const date = new Date(lastSeen)

  if (Number.isNaN(date.getTime())) {
    return 'Date inconnue'
  }

  const minutes = Math.max(
    0,
    Math.floor((maintenant - date.getTime()) / 60000)
  )

  if (minutes < 1) return "À l'instant"
  if (minutes === 1) return 'Il y a 1 minute'
  if (minutes < 60) return `Il y a ${minutes} minutes`

  const heures = Math.floor(minutes / 60)

  if (heures === 1) return 'Il y a 1 heure'
  if (heures < 24) return `Il y a ${heures} heures`

  const jours = Math.floor(heures / 24)

  if (jours === 1) return 'Il y a 1 jour'
  if (jours < 7) return `Il y a ${jours} jours`

  return date.toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

function afficherStatut(status: PresenceStatus) {
  switch (status) {
    case 'online':
      return 'En ligne'
    case 'inactive':
      return 'Inactif'
    case 'offline':
      return 'Hors ligne'
    default:
      return 'Jamais connecté'
  }
}

export default function AdministrationPage() {
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')

  const [stats, setStats] = useState<DashboardStats>({
    etudiants: null,
    paiements: null,
  })

  const [etudiantsPresence, setEtudiantsPresence] =
    useState<EtudiantPresence[]>([])

  const [chargementPresence, setChargementPresence] =
    useState(true)

  const [erreurPresence, setErreurPresence] = useState('')

  const [maintenant, setMaintenant] = useState(Date.now())

  const chargerStats = useCallback(async () => {
    setChargement(true)
    setErreur('')

    const [etudiants, paiements] =
      await Promise.all([
        supabase
          .from('profiles')
          .select('id', { count: 'exact', head: true })
          .eq('role', 'student'),

        supabase
          .from('pro_payments')
          .select('id', { count: 'exact', head: true })
          .is('cancelled_at', null),
      ])

    setStats({
      etudiants: etudiants.error ? null : etudiants.count ?? 0,
      paiements: paiements.error ? null : paiements.count ?? 0,
    })

    const errors = [
      etudiants.error,
      paiements.error,
    ].filter(Boolean)

    if (errors.length > 0) {
      setErreur(
        'Certaines statistiques ne sont pas disponibles. Vérifiez les autorisations Supabase.'
      )
    }

    setChargement(false)
  }, [])

  // Charger les étudiants et leur dernière présence
  const chargerPresence = useCallback(async () => {
    setErreurPresence('')

    const [profils, presences] = await Promise.all([
      supabase
        .from('profiles')
        .select('id, full_name, email')
        .eq('role', 'student')
        .order('full_name', { ascending: true }),

      supabase
        .from('student_presence')
        .select('user_id, last_seen_at'),
    ])

    if (profils.error) {
      console.error(
        'Erreur chargement étudiants :',
        profils.error
      )

      setErreurPresence(
        'Impossible de charger la liste des étudiants. Vérifiez les autorisations Supabase.'
      )

      return
    }

    if (presences.error) {
      console.error(
        'Erreur chargement présences :',
        presences.error
      )

      setErreurPresence(
        'Impossible de récupérer les présences. Vérifiez la table student_presence et ses politiques RLS.'
      )

      return
    }

    const presenceMap = new Map<string, string>()

    for (const presence of presences.data ?? []) {
      presenceMap.set(
        presence.user_id,
        presence.last_seen_at
      )
    }

    const liste: EtudiantPresence[] = (
      profils.data ?? []
    ).map((profil) => ({
      id: profil.id,
      full_name: profil.full_name,
      email: profil.email,
      last_seen_at: presenceMap.get(profil.id) ?? null,
    }))

    // Trier : en ligne, inactifs, hors ligne, jamais connectés
    const ordre: Record<PresenceStatus, number> = {
      online: 0,
      inactive: 1,
      offline: 2,
      never: 3,
    }

    const dateActuelle = Date.now()

    liste.sort((a, b) => {
      const statutA = obtenirStatut(
        a.last_seen_at,
        dateActuelle
      )

      const statutB = obtenirStatut(
        b.last_seen_at,
        dateActuelle
      )

      if (ordre[statutA] !== ordre[statutB]) {
        return ordre[statutA] - ordre[statutB]
      }

      return (
        new Date(b.last_seen_at ?? 0).getTime() -
        new Date(a.last_seen_at ?? 0).getTime()
      )
    })

    setEtudiantsPresence(liste)
    setMaintenant(dateActuelle)
  }, [])

  // Chargement initial
  useEffect(() => {
    chargerStats()
    chargerPresence()
  }, [chargerStats, chargerPresence])

  // Actualisation automatique de la présence toutes les 30 secondes
  useEffect(() => {
    const interval = window.setInterval(() => {
      chargerPresence()
    }, 30000)

    return () => window.clearInterval(interval)
  }, [chargerPresence])

  // Actualiser les statuts même entre deux chargements
  useEffect(() => {
    const interval = window.setInterval(() => {
      setMaintenant(Date.now())
    }, 10000)

    return () => window.clearInterval(interval)
  }, [])

  function afficherNombre(value: number | null) {
    if (chargement && value === null) return '...'
    if (value === null) return '—'
    return value.toLocaleString('fr-FR')
  }

  const nombreEnLigne = etudiantsPresence.filter(
    (etudiant) =>
      obtenirStatut(etudiant.last_seen_at, maintenant) === 'online'
  ).length

  const nombreInactifs = etudiantsPresence.filter(
    (etudiant) =>
      obtenirStatut(etudiant.last_seen_at, maintenant) === 'inactive'
  ).length

  const nombreHorsLigne = etudiantsPresence.filter(
    (etudiant) =>
      obtenirStatut(etudiant.last_seen_at, maintenant) === 'offline'
  ).length

  const nombreJamaisConnectes = etudiantsPresence.filter(
    (etudiant) =>
      obtenirStatut(etudiant.last_seen_at, maintenant) === 'never'
  ).length

  return (
    <main className="admin-layout dashboard-page">
      <aside className="admin-sidebar">
        <Link href="/" className="admin-brand">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          <span>
            Deutsch <b>Erfolg</b>
          </span>
        </Link>

        <div className="admin-sidebar-label">MENU PRINCIPAL</div>

        <nav className="admin-menu">
          <Link
            href="/administration"
            className="admin-menu-link active"
          >
            <LayoutDashboard size={19} />
            <span>Tableau de bord</span>
          </Link>

          <Link
            href="/administration/taches"
            className="admin-menu-link"
          >
            <Bell size={19} />
            <span>Tâches et alertes</span>
          </Link>

          <Link
            href="/administration/etudiants"
            className="admin-menu-link"
          >
            <Users size={19} />
            <span>Étudiants</span>
          </Link>

          <Link
            href="/administration/paiements"
            className="admin-menu-link"
          >
            <Wallet size={19} />
            <span>Paiements</span>
          </Link>

          <Link
            href="/administration/statistiques"
            className="admin-menu-link"
          >
            <BarChart3 size={19} />
            <span>Statistiques</span>
          </Link>

          <Link
            href="/administration/cours"
            className="admin-menu-link"
          >
            <BookOpen size={19} />
            <span>Cours</span>
          </Link>

          <Link href="#" className="admin-menu-link">
            <FileText size={19} />
            <span>Documents PDF</span>
          </Link>

          <Link href="#" className="admin-menu-link">
            <FileAudio size={19} />
            <span>Audios</span>
          </Link>

          <Link href="#" className="admin-menu-link">
            <Settings size={19} />
            <span>Paramètres</span>
          </Link>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <ShieldCheck size={22} />
            <strong>Espace sécurisé</strong>
            <span>Administration Deutsch Erfolg.</span>
          </div>

          <Link href="/" className="admin-back-home">
            ← Retour au site
          </Link>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div className="admin-mobile-brand">
            <span className="brand-mark">
              <GraduationCap size={21} />
            </span>
            Deutsch <b>Erfolg</b>
          </div>

          <div className="admin-search topbar-search">
            <Search size={17} />
            <span>Tableau de bord</span>
          </div>

          <div className="admin-topbar-right">
            <span className="admin-demo-label">
              <span />
              Administration
            </span>

            <div className="admin-profile">
              <div className="admin-profile-avatar">AD</div>
              <div>
                <strong>Administrateur</strong>
                <span>Gestionnaire</span>
              </div>
            </div>
          </div>
        </header>

        <div className="admin-content dashboard-content">
          <AdminDashboardBanner busy={chargement} onRefresh={() => {
            void chargerStats()
            void chargerPresence()
          }} />

          {erreur && (
            <div className="dashboard-error">
              <Activity size={18} />
              <span>{erreur}</span>
            </div>
          )}

          <section className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <h2>Vue d'ensemble</h2>
                <p>Les indicateurs principaux de votre plateforme.</p>
              </div>
              <span className="dashboard-live">
                <span />
                Données Supabase
              </span>
            </div>

            <div className="dashboard-stats">
              <article className="dashboard-stat-card">
                <div className="dashboard-stat-top">
                  <div className="dashboard-stat-icon purple">
                    <Users size={21} />
                  </div>
                  <span className="dashboard-stat-label">
                    ÉTUDIANTS
                  </span>
                </div>
                <strong>{afficherNombre(stats.etudiants)}</strong>
                <small>
                  <Users size={14} />
                  Comptes étudiants
                </small>
              </article>



              <article className="dashboard-stat-card">
                <div className="dashboard-stat-top">
                  <div className="dashboard-stat-icon green">
                    <CreditCard size={21} />
                  </div>
                  <span className="dashboard-stat-label">
                    PAIEMENTS
                  </span>
                </div>
                <strong>{afficherNombre(stats.paiements)}</strong>
                <small>
                  <TrendingUp size={14} />
                  Transactions validées
                </small>
              </article>
            </div>
          </section>

          {/* SUIVI DES ÉTUDIANTS EN TEMPS RÉEL */}
          <section className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <h2>Présence des étudiants</h2>
                <p>
                  Suivi des connexions à l'espace étudiant.
                </p>
              </div>

              <button
                className="presence-refresh"
                onClick={chargerPresence}
                disabled={chargementPresence}
                title="Actualiser les présences"
              >
                <RefreshCw
                  size={15}
                  className={
                    chargementPresence
                      ? 'dashboard-spinning'
                      : ''
                  }
                />
                Actualiser
              </button>
            </div>

            <div className="presence-stats">
              <div className="presence-stat online">
                <span className="presence-stat-dot" />
                <div>
                  <strong>{nombreEnLigne}</strong>
                  <span>En ligne</span>
                </div>
              </div>

              <div className="presence-stat inactive">
                <span className="presence-stat-dot" />
                <div>
                  <strong>{nombreInactifs}</strong>
                  <span>Inactifs</span>
                </div>
              </div>

              <div className="presence-stat offline">
                <span className="presence-stat-dot" />
                <div>
                  <strong>{nombreHorsLigne}</strong>
                  <span>Hors ligne</span>
                </div>
              </div>

              <div className="presence-stat never">
                <span className="presence-stat-dot" />
                <div>
                  <strong>{nombreJamaisConnectes}</strong>
                  <span>Jamais connectés</span>
                </div>
              </div>
            </div>

            <div className="presence-list-panel">
              <div className="presence-list-heading">
                <div>
                  <h3>Liste des étudiants</h3>
                  <p>
                    {etudiantsPresence.length} compte(s) étudiant(s)
                  </p>
                </div>

                <span className="presence-auto-refresh">
                  <span />
                  Actualisation automatique
                </span>
              </div>

              {erreurPresence && (
                <div className="presence-error">
                  <Activity size={17} />
                  {erreurPresence}
                </div>
              )}

              {chargementPresence &&
              etudiantsPresence.length === 0 &&
              !erreurPresence ? (
                <div className="presence-empty">
                  <RefreshCw
                    size={23}
                    className="dashboard-spinning"
                  />
                  <p>Chargement des étudiants...</p>
                </div>
              ) : !erreurPresence &&
                etudiantsPresence.length === 0 ? (
                <div className="presence-empty">
                  <Users size={25} />
                  <strong>Aucun étudiant trouvé</strong>
                  <p>Les comptes étudiants apparaîtront ici.</p>
                </div>
              ) : !erreurPresence ? (
                <div className="presence-table-wrapper">
                  <table className="presence-table">
                    <thead>
                      <tr>
                        <th>ÉTUDIANT</th>
                        <th>STATUT</th>
                        <th>DERNIÈRE ACTIVITÉ</th>
                      </tr>
                    </thead>

                    <tbody>
                      {etudiantsPresence.map((etudiant) => {
                        const statut = obtenirStatut(
                          etudiant.last_seen_at,
                          maintenant
                        )

                        return (
                          <tr key={etudiant.id}>
                            <td>
                              <div className="presence-student">
                                <div className="presence-avatar">
                                  {(etudiant.full_name ||
                                    etudiant.email ||
                                    '?')
                                    .trim()
                                    .charAt(0)
                                    .toUpperCase()}
                                </div>

                                <div className="presence-student-info">
                                  <strong>
                                    {etudiant.full_name ||
                                      'Nom non renseigné'}
                                  </strong>
                                  <span>
                                    {etudiant.email ||
                                      'E-mail non renseigné'}
                                  </span>
                                </div>
                              </div>
                            </td>

                            <td>
                              <span
                                className={`presence-badge ${statut}`}
                              >
                                <span />
                                {afficherStatut(statut)}
                              </span>
                            </td>

                            <td className="presence-last-seen">
                              {afficherDerniereActivite(
                                etudiant.last_seen_at,
                                maintenant
                              )}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              ) : null}

              <div className="presence-legend">
                <span>
                  <i className="legend-dot online" />
                  En ligne : moins de 2 min
                </span>
                <span>
                  <i className="legend-dot inactive" />
                  Inactif : 2 à 10 min
                </span>
                <span>
                  <i className="legend-dot offline" />
                  Hors ligne : plus de 10 min
                </span>
              </div>
            </div>
          </section>

          <section className="dashboard-section">
            <div className="dashboard-section-heading">
              <div>
                <h2>Gestion de la plateforme</h2>
                <p>Accédez directement aux principaux outils.</p>
              </div>
            </div>

            <div className="dashboard-tools">
              {raccourcis.map((outil) => {
                const Icon = outil.icon

                return (
                  <Link
                    href={outil.href}
                    key={outil.titre}
                    className="dashboard-tool-card"
                  >
                    <div className={`dashboard-tool-icon ${outil.color}`}>
                      <Icon size={23} />
                    </div>

                    <div className="dashboard-tool-text">
                      <h3>{outil.titre}</h3>
                      <p>{outil.description}</p>
                    </div>

                    <ArrowUpRight
                      size={18}
                      className="dashboard-tool-arrow"
                    />
                  </Link>
                )
              })}
            </div>
          </section>

          <section className="dashboard-bottom-grid">
            <div className="dashboard-panel">
              <div className="dashboard-panel-heading">
                <div>
                  <h2>Activité récente</h2>
                  <p>Suivi des dernières opérations.</p>
                </div>
                <Activity size={19} />
              </div>

              <div className="dashboard-empty">
                <div className="dashboard-empty-icon">
                  <Clock size={25} />
                </div>
                <strong>Aucune activité affichée</strong>
                <p>
                  Les activités récentes pourront être intégrées
                  dans cette section.
                </p>
              </div>
            </div>

            <div className="dashboard-panel dashboard-quick-panel">
              <div className="dashboard-panel-heading">
                <div>
                  <h2>Accès rapide</h2>
                  <p>Vos espaces les plus utiles.</p>
                </div>
                <ArrowUpRight size={19} />
              </div>

              <Link href="/administration/etudiants">
                <span className="quick-link-icon">
                  <Users size={17} />
                </span>
                <span>Gérer les étudiants</span>
                <ArrowUpRight size={16} />
              </Link>


              <Link href="/administration/paiements">
                <span className="quick-link-icon">
                  <Wallet size={17} />
                </span>
                <span>Consulter les paiements</span>
                <ArrowUpRight size={16} />
              </Link>

              <div className="dashboard-date">
                <CalendarDays size={16} />
                <span>
                  {new Date().toLocaleDateString('fr-FR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </span>
              </div>
            </div>
          </section>

          <footer className="admin-footer">
            <span>© 2026 Deutsch Erfolg</span>
            <span>Plateforme de préparation TELC B1 & B2</span>
          </footer>
        </div>
      </section>

      <style jsx global>{`
        .dashboard-content {
          background: #f8f4f5;
          min-height: calc(100vh - 70px);
        }

        .dashboard-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 25px;
        }

        .dashboard-heading h1 {
          margin: 8px 0 7px;
          color: #321e28;
          font-size: 28px;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .dashboard-heading p {
          color: #8490a4;
          font-size: 13px;
          line-height: 1.7;
          margin: 0;
        }

        .dashboard-refresh {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 11px 16px;
          border: 1px solid #e5e9f2;
          background: white;
          color: #374151;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 650;
          cursor: pointer;
          flex-shrink: 0;
        }

        .dashboard-refresh:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .dashboard-spinning {
          animation: dashboard-spin 1s linear infinite;
        }

        @keyframes dashboard-spin {
          to { transform: rotate(360deg); }
        }

        .dashboard-welcome {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          min-height: 190px;
          padding: 28px 34px;
          margin-bottom: 28px;
          border-radius: 17px;
          background: linear-gradient(115deg, #391021 0%, #542039 65%, #344d76 100%);
          color: white;
        }

        .dashboard-welcome-content {
          position: relative;
          z-index: 1;
          max-width: 620px;
        }

        .dashboard-welcome-content > span {
          color: #d6b56d;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.6px;
        }

        .dashboard-welcome h2 {
          margin: 12px 0 9px;
          color: white;
          font-size: 25px;
          font-weight: 750;
          letter-spacing: -0.5px;
        }

        .dashboard-welcome p {
          max-width: 520px;
          margin: 0 0 18px;
          color: #d4dceb;
          font-size: 12px;
          line-height: 1.7;
        }

        .dashboard-welcome-content a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 14px;
          border-radius: 8px;
          background: #d6b56d;
          color: #391021;
          text-decoration: none;
          font-size: 11px;
          font-weight: 750;
          transition: 0.2s;
        }

        .dashboard-welcome-content a:hover {
          background: #e4c987;
          transform: translateY(-1px);
        }

        .dashboard-welcome-decoration {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 150px;
          height: 150px;
          margin-right: 35px;
          border: 1px solid rgba(214, 181, 109, 0.35);
          border-radius: 50%;
          color: #d6b56d;
          background: rgba(255, 255, 255, 0.04);
          flex-shrink: 0;
        }

        .dashboard-error {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          margin-bottom: 20px;
          border: 1px solid #f3dada;
          background: #fff7f7;
          color: #b94d4d;
          border-radius: 10px;
          font-size: 12px;
        }

        .dashboard-section {
          margin-bottom: 28px;
        }

        .dashboard-section-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 15px;
        }

        .dashboard-section-heading h2,
        .dashboard-panel-heading h2 {
          margin: 0;
          color: #321e28;
          font-size: 17px;
          font-weight: 750;
        }

        .dashboard-section-heading p,
        .dashboard-panel-heading p {
          margin: 5px 0 0;
          color: #9aa4b4;
          font-size: 11px;
        }

        .dashboard-live {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #8792a5;
          font-size: 10px;
          font-weight: 600;
        }

        .dashboard-live > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #2ca879;
        }

        .dashboard-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
        }

        .dashboard-stat-card {
          min-width: 0;
          padding: 19px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 14px;
          box-shadow: 0 2px 8px rgba(20, 35, 65, 0.025);
        }

        .dashboard-stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 18px;
        }

        .dashboard-stat-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 39px;
          height: 39px;
          border-radius: 11px;
        }

        .dashboard-stat-icon.purple {
          background: #f0edff;
          color: #7661d9;
        }

        .dashboard-stat-icon.blue {
          background: #eaf3ff;
          color: #4387db;
        }

        .dashboard-stat-icon.orange {
          background: #fff4e8;
          color: #db8b37;
        }

        .dashboard-stat-icon.green {
          background: #e9f8f0;
          color: #27996a;
        }

        .dashboard-stat-label {
          color: #9aa4b4;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.7px;
        }

        .dashboard-stat-card > strong {
          display: block;
          color: #321e28;
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .dashboard-stat-card > small {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 9px;
          color: #9aa4b4;
          font-size: 10px;
        }

        .dashboard-tools {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 13px;
        }

        .dashboard-tool-card {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
          padding: 17px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 13px;
          text-decoration: none;
          transition: 0.2s;
        }

        .dashboard-tool-card:hover {
          border-color: #d8d0f6;
          box-shadow: 0 5px 17px rgba(38, 43, 75, 0.06);
          transform: translateY(-2px);
        }

        .dashboard-tool-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 43px;
          height: 43px;
          border-radius: 12px;
          flex-shrink: 0;
        }

        .dashboard-tool-icon.blue {
          background: #eaf3ff;
          color: #4387db;
        }

        .dashboard-tool-icon.purple {
          background: #f0edff;
          color: #7661d9;
        }

        .dashboard-tool-icon.green {
          background: #e9f8f0;
          color: #27996a;
        }

        .dashboard-tool-icon.orange {
          background: #fff4e8;
          color: #db8b37;
        }

        .dashboard-tool-icon.pink {
          background: #fff0f4;
          color: #d46a91;
        }

        .dashboard-tool-icon.gray {
          background: #f0f2f6;
          color: #667085;
        }

        .dashboard-tool-text {
          flex: 1;
          min-width: 0;
        }

        .dashboard-tool-text h3 {
          margin: 0 0 5px;
          color: #4e2939;
          font-size: 12px;
          font-weight: 750;
        }

        .dashboard-tool-text p {
          margin: 0;
          color: #9aa4b4;
          font-size: 10px;
          line-height: 1.5;
        }

        .dashboard-tool-arrow {
          color: #b1b9c6;
          flex-shrink: 0;
        }

        /* PRÉSENCE DES ÉTUDIANTS */

        .presence-refresh {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 9px 12px;
          border: 1px solid #e5e9f2;
          background: white;
          color: #536075;
          border-radius: 9px;
          font-size: 11px;
          font-weight: 650;
          cursor: pointer;
        }

        .presence-refresh:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .presence-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 13px;
          margin-bottom: 15px;
        }

        .presence-stat {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          padding: 16px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 12px;
        }

        .presence-stat-dot {
          width: 11px;
          height: 11px;
          flex-shrink: 0;
          border-radius: 50%;
        }

        .presence-stat.online .presence-stat-dot,
        .legend-dot.online {
          background: #20a477;
        }

        .presence-stat.inactive .presence-stat-dot,
        .legend-dot.inactive {
          background: #e5a33d;
        }

        .presence-stat.offline .presence-stat-dot,
        .legend-dot.offline {
          background: #a0a8b6;
        }

        .presence-stat.never .presence-stat-dot {
          background: #c4b5fd;
        }

        .presence-stat strong {
          display: block;
          color: #321e28;
          font-size: 22px;
          font-weight: 800;
        }

        .presence-stat span:last-child {
          display: block;
          margin-top: 3px;
          color: #8994a6;
          font-size: 10px;
        }

        .presence-list-panel {
          overflow: hidden;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 14px;
        }

        .presence-list-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 17px 19px;
          border-bottom: 1px solid #f0f2f6;
        }

        .presence-list-heading h3 {
          margin: 0;
          color: #4e2939;
          font-size: 13px;
          font-weight: 750;
        }

        .presence-list-heading p {
          margin: 5px 0 0;
          color: #9aa4b4;
          font-size: 10px;
        }

        .presence-auto-refresh {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #8994a6;
          font-size: 10px;
        }

        .presence-auto-refresh > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #20a477;
          box-shadow: 0 0 0 3px rgba(32, 164, 119, 0.12);
        }

        .presence-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .presence-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .presence-table th {
          padding: 12px 19px;
          background: #fafbfe;
          color: #9aa4b4;
          font-size: 9px;
          font-weight: 750;
          letter-spacing: 0.6px;
          white-space: nowrap;
        }

        .presence-table td {
          padding: 12px 19px;
          border-top: 1px solid #f0f2f6;
          color: #536075;
          font-size: 11px;
          white-space: nowrap;
        }

        .presence-student {
          display: flex;
          align-items: center;
          gap: 11px;
          min-width: 210px;
        }

        .presence-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #f0edff;
          color: #7661d9;
          font-size: 13px;
          font-weight: 800;
        }

        .presence-student-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .presence-student-info strong {
          color: #344054;
          font-size: 11px;
          font-weight: 700;
        }

        .presence-student-info span {
          color: #9aa4b4;
          font-size: 10px;
        }

        .presence-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 6px 9px;
          border-radius: 20px;
          font-size: 10px;
          font-weight: 650;
        }

        .presence-badge > span {
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .presence-badge.online {
          background: #e9f8f0;
          color: #21865f;
        }

        .presence-badge.online > span {
          background: #20a477;
        }

        .presence-badge.inactive {
          background: #fff5e7;
          color: #b47b27;
        }

        .presence-badge.inactive > span {
          background: #e5a33d;
        }

        .presence-badge.offline {
          background: #f0f2f6;
          color: #778194;
        }

        .presence-badge.offline > span {
          background: #a0a8b6;
        }

        .presence-badge.never {
          background: #f3f0ff;
          color: #7964c6;
        }

        .presence-badge.never > span {
          background: #a78bfa;
        }

        .presence-last-seen {
          color: #8994a6 !important;
        }

        .presence-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 150px;
          color: #9aa4b4;
          font-size: 11px;
        }

        .presence-empty strong {
          color: #344054;
        }

        .presence-empty p {
          margin: 0;
          color: #9aa4b4;
        }

        .presence-error {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 15px;
          color: #b94d4d;
          background: #fff7f7;
          font-size: 11px;
        }

        .presence-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          padding: 13px 19px;
          border-top: 1px solid #f0f2f6;
          background: #fafbfe;
        }

        .presence-legend > span {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #8994a6;
          font-size: 9px;
        }

        .legend-dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 50%;
        }

        .dashboard-bottom-grid {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
          gap: 15px;
          margin-bottom: 25px;
        }

        .dashboard-panel {
          min-width: 0;
          padding: 21px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 15px;
          box-shadow: 0 2px 8px rgba(20, 35, 65, 0.025);
        }

        .dashboard-panel-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 18px;
        }

        .dashboard-panel-heading > svg {
          color: #a3adbc;
        }

        .dashboard-empty {
          min-height: 155px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 15px;
        }

        .dashboard-empty-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 45px;
          margin-bottom: 12px;
          border-radius: 13px;
          background: #f0edff;
          color: #7661d9;
        }

        .dashboard-empty strong {
          color: #344054;
          font-size: 12px;
        }

        .dashboard-empty p {
          max-width: 260px;
          margin: 6px 0 0;
          color: #9aa4b4;
          font-size: 10px;
          line-height: 1.6;
        }

        .dashboard-quick-panel > a {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 11px 0;
          border-bottom: 1px solid #f0f2f6;
          color: #536075;
          text-decoration: none;
          font-size: 11px;
          font-weight: 650;
        }

        .dashboard-quick-panel > a:last-of-type {
          border-bottom: none;
        }

        .dashboard-quick-panel > a > span:nth-child(2) {
          flex: 1;
        }

        .dashboard-quick-panel > a > svg {
          color: #a3adbc;
        }

        .dashboard-quick-panel > a:hover {
          color: #7661d9;
        }

        .quick-link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 31px;
          height: 31px;
          border-radius: 9px;
          background: #f0edff;
          color: #7661d9;
        }

        .dashboard-date {
          display: flex;
          align-items: center;
          gap: 8px;
          padding-top: 15px;
          margin-top: 8px;
          border-top: 1px solid #f0f2f6;
          color: #9aa4b4;
          font-size: 10px;
        }

        @media (max-width: 1100px) {
          .dashboard-stats,
          .presence-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .dashboard-tools {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .dashboard-heading {
            align-items: flex-start;
          }

          .dashboard-heading h1 {
            font-size: 23px;
          }

          .dashboard-refresh {
            padding: 10px;
            font-size: 0;
          }

          .dashboard-welcome {
            min-height: 180px;
            padding: 23px;
          }

          .dashboard-welcome h2 {
            font-size: 20px;
          }

          .dashboard-welcome-decoration {
            position: absolute;
            right: -55px;
            bottom: -40px;
            width: 135px;
            height: 135px;
            margin: 0;
            opacity: 0.35;
          }

          .dashboard-stats {
            gap: 10px;
          }

          .dashboard-stat-card {
            padding: 14px;
          }

          .dashboard-stat-card > strong {
            font-size: 23px;
          }

          .dashboard-tools {
            grid-template-columns: 1fr;
          }

          .dashboard-bottom-grid {
            grid-template-columns: 1fr;
          }

          .dashboard-section-heading {
            align-items: flex-start;
          }

          .presence-list-heading {
            align-items: flex-start;
            flex-direction: column;
          }

          .presence-legend {
            gap: 9px;
          }
        }

        @media (max-width: 380px) {
          .dashboard-stats,
          .presence-stats {
            grid-template-columns: 1fr;
          }

          .dashboard-live {
            font-size: 9px;
          }
        }
      `}</style>
    </main>
  )
}

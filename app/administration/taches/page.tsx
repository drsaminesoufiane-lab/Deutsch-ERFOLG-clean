
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  LayoutDashboard,
  Users,
  Wallet,
  BarChart3,
  BookOpen,
  FileText,
  FileAudio,
  Settings,
  GraduationCap,
  ShieldCheck,
  Bell,
  Plus,
  CheckCircle2,
  Clock,
  AlertCircle,
  Trash2,
  RefreshCw,
  Search,
  CalendarDays,
  X,
  ClipboardList,
  UserRound,
  ArrowRight,
} from 'lucide-react'

type Tache = {
  id: string
  student_id: string | null
  title: string
  description: string | null
  due_date: string
  priority: 'low' | 'normal' | 'high'
  completed: boolean
  created_at: string
}

type Etudiant = {
  id: string
  full_name: string | null
  email: string | null
}

type Filtre = 'all' | 'pending' | 'late' | 'completed'

export default function TachesPage() {
  const [taches, setTaches] = useState<Tache[]>([])
  const [etudiants, setEtudiants] = useState<Etudiant[]>([])

  const [etudiantSelectionne, setEtudiantSelectionne] = useState('')
  const [rechercheEtudiant, setRechercheEtudiant] = useState('')

  const [chargement, setChargement] = useState(true)
  const [enregistrement, setEnregistrement] = useState(false)

  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [priorite, setPriorite] = useState<'low' | 'normal' | 'high'>('normal')

  const [erreur, setErreur] = useState('')
  const [message, setMessage] = useState('')
  const [filtre, setFiltre] = useState<Filtre>('all')
  const [rechercheTache, setRechercheTache] = useState('')

  const aujourdHui = new Date().toISOString().slice(0, 10)

  async function chargerTaches() {
    setChargement(true)

    const { data, error } = await supabase
      .from('admin_tasks')
      .select('*')
      .order('due_date', { ascending: true })

    if (error) {
      setErreur('Impossible de charger les tâches.')
    } else {
      setTaches((data || []) as Tache[])
      setErreur('')
    }

    setChargement(false)
  }

  async function chargerEtudiants() {
    const { data, error } = await supabase
      .from('profiles')
      .select('id, full_name, email')
      .eq('role', 'student')
      .order('full_name', { ascending: true })

    if (error) {
      setErreur('Impossible de charger les étudiants.')
    } else {
      setEtudiants((data || []) as Etudiant[])
    }
  }

  useEffect(() => {
    chargerTaches()
    chargerEtudiants()
  }, [])

  async function ajouterTache() {
    setErreur('')
    setMessage('')

    if (!titre.trim() || !date) {
      setErreur('Veuillez saisir un titre et une date limite.')
      return
    }

    setEnregistrement(true)

    const { error } = await supabase
      .from('admin_tasks')
      .insert({
        title: titre.trim(),
        description: description.trim() || null,
        student_id: etudiantSelectionne || null,
        due_date: date,
        priority: priorite,
      })

    if (error) {
      setErreur("Une erreur est survenue lors de l'ajout.")
    } else {
      setTitre('')
      setDescription('')
      setDate('')
      setPriorite('normal')
      setEtudiantSelectionne('')
      setRechercheEtudiant('')

      setMessage('Votre tâche a été ajoutée avec succès.')
      await chargerTaches()
    }

    setEnregistrement(false)
  }

  async function terminerTache(id: string) {
    const { error } = await supabase
      .from('admin_tasks')
      .update({ completed: true })
      .eq('id', id)

    if (error) {
      setErreur('Impossible de terminer cette tâche.')
    } else {
      setMessage('Tâche marquée comme terminée.')
      await chargerTaches()
    }
  }

  async function supprimerTache(id: string) {
    const confirmation = window.confirm(
      'Voulez-vous vraiment supprimer cette tâche ?'
    )

    if (!confirmation) return

    const { error } = await supabase
      .from('admin_tasks')
      .delete()
      .eq('id', id)

    if (error) {
      setErreur('Impossible de supprimer cette tâche.')
    } else {
      setMessage('Tâche supprimée.')
      await chargerTaches()
    }
  }

  const enAttente = taches.filter(t => !t.completed)

  const terminees = taches.filter(t => t.completed)

  const enRetard = enAttente.filter(
    t => t.due_date < aujourdHui
  )

  const urgentes = enAttente.filter(
    t => t.priority === 'high'
  )

  const tachesFiltrees = taches.filter(tache => {
    const correspondFiltre =
      filtre === 'all' ||
      (filtre === 'pending' && !tache.completed) ||
      (filtre === 'late' && !tache.completed && tache.due_date < aujourdHui) ||
      (filtre === 'completed' && tache.completed)

    const etudiant = etudiants.find(
      e => e.id === tache.student_id
    )

    const texte = (
      tache.title + ' ' +
      (tache.description || '') + ' ' +
      (etudiant?.full_name || '') + ' ' +
      (etudiant?.email || '')
    ).toLowerCase()

    return correspondFiltre && texte.includes(rechercheTache.toLowerCase())
  })

  const etudiantsFiltres = etudiants.filter(e => {
    const texte = `${e.full_name || ''} ${e.email || ''}`.toLowerCase()
    return texte.includes(rechercheEtudiant.toLowerCase())
  }).slice(0, 8)

  function nomEtudiant(studentId: string | null) {
    if (!studentId) return 'Tâche générale'

    const etudiant = etudiants.find(e => e.id === studentId)

    return etudiant?.full_name || etudiant?.email || 'Étudiant'
  }

  function statutTache(tache: Tache) {
    if (tache.completed) {
      return { label: 'Terminée', className: 'task-status-done' }
    }

    if (tache.due_date < aujourdHui) {
      return { label: 'En retard', className: 'task-status-late' }
    }

    return { label: 'À traiter', className: 'task-status-pending' }
  }

  const menu = [
    { label: 'Tableau de bord', icon: LayoutDashboard, href: '/administration' },
    { label: 'Tâches et alertes', icon: Bell, href: '/administration/taches' },
    { label: 'Étudiants', icon: Users, href: '/administration/etudiants' },
    { label: 'Paiements', icon: Wallet, href: '/administration/paiements' },
    { label: 'Statistiques', icon: BarChart3, href: '/administration/statistiques' },
    { label: 'Cours', icon: BookOpen, href: '#' },
    { label: 'Documents PDF', icon: FileText, href: '#' },
    { label: 'Audios', icon: FileAudio, href: '#' },
    { label: 'Paramètres', icon: Settings, href: '#' },
  ]

  return (
    <main className="admin-layout">

      <aside className="admin-sidebar">
        <Link href="/" className="admin-brand">
          <span className="brand-mark">
            <GraduationCap size={22} />
          </span>
          <span>Deutsch <b>Erfolg</b></span>
        </Link>

        <div className="admin-sidebar-label">MENU PRINCIPAL</div>

        <nav className="admin-menu">
          {menu.map(({ label, icon: Icon, href }) => (
            <Link
              href={href}
              key={label}
              className={`admin-menu-link ${label === 'Tâches et alertes' ? 'active' : ''}`}
            >
              <Icon size={19} />
              <span>{label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <ShieldCheck size={22} />
            <div>
              <strong>Espace sécurisé</strong>
              <span>Administration Deutsch Erfolg</span>
            </div>
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

          <div className="task-topbar-title">
            <Bell size={17} />
            Centre de suivi administratif
          </div>

          <div className="admin-topbar-right">
            <span className="admin-demo-label">
              <span /> Administration
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

        <div className="admin-content task-page">

          <section className="task-hero">
            <div className="task-hero-content">
              <div className="task-eyebrow">
                <span className="task-eyebrow-dot" />
                ESPACE DE GESTION
              </div>

              <h1>Tâches et alertes</h1>

              <p>
                Gardez le contrôle de vos rappels et du suivi de vos étudiants.
                Toutes vos actions importantes au même endroit.
              </p>

              <div className="task-hero-bottom">
                <span>
                  <ClipboardList size={16} />
                  {taches.length} tâche(s) enregistrée(s)
                </span>
                <span>
                  <AlertCircle size={16} />
                  {enRetard.length} en retard
                </span>
              </div>
            </div>

            <div className="task-hero-icon">
              <Bell size={54} strokeWidth={1.3} />
              <span>{enAttente.length}</span>
            </div>
          </section>

          {erreur && (
            <div className="task-alert task-alert-error">
              <AlertCircle size={19} />
              <span>{erreur}</span>
              <button onClick={() => setErreur('')}>
                <X size={17} />
              </button>
            </div>
          )}

          {message && (
            <div className="task-alert task-alert-success">
              <CheckCircle2 size={19} />
              <span>{message}</span>
              <button onClick={() => setMessage('')}>
                <X size={17} />
              </button>
            </div>
          )}

          <section className="task-stats-grid">

            <article className="task-stat-card">
              <div className="task-stat-icon task-icon-blue">
                <Clock size={21} />
              </div>
              <div>
                <span>Tâches en attente</span>
                <strong>{enAttente.length}</strong>
                <small>Actions à effectuer</small>
              </div>
            </article>

            <article className="task-stat-card">
              <div className="task-stat-icon task-icon-red">
                <AlertCircle size={21} />
              </div>
              <div>
                <span>En retard</span>
                <strong>{enRetard.length}</strong>
                <small>Nécessitent votre attention</small>
              </div>
            </article>

            <article className="task-stat-card">
              <div className="task-stat-icon task-icon-orange">
                <Bell size={21} />
              </div>
              <div>
                <span>Priorité urgente</span>
                <strong>{urgentes.length}</strong>
                <small>À traiter en priorité</small>
              </div>
            </article>

            <article className="task-stat-card">
              <div className="task-stat-icon task-icon-green">
                <CheckCircle2 size={21} />
              </div>
              <div>
                <span>Terminées</span>
                <strong>{terminees.length}</strong>
                <small>Actions accomplies</small>
              </div>
            </article>

          </section>

          <section className="task-workspace">

            <div className="task-form-panel">
              <div className="task-panel-heading">
                <div className="task-heading-icon">
                  <Plus size={20} />
                </div>
                <div>
                  <h2>Créer une tâche</h2>
                  <p>Ajouter un nouveau rappel administratif.</p>
                </div>
              </div>

              <div className="task-form">

                <div className="task-field">
                  <label>Titre de la tâche <span>*</span></label>
                  <input
                    type="text"
                    value={titre}
                    onChange={e => setTitre(e.target.value)}
                    placeholder="Ex : Relancer un étudiant..."
                  />
                </div>

                <div className="task-field">
                  <label>Description</label>
                  <textarea
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Ajouter des détails ou des informations..."
                    rows={4}
                  />
                </div>

                <div className="task-field">
                  <label>Associer à un étudiant</label>

                  <div className="task-student-search">
                    <Search size={17} />
                    <input
                      type="text"
                      value={rechercheEtudiant}
                      onChange={e => {
                        setRechercheEtudiant(e.target.value)
                        setEtudiantSelectionne('')
                      }}
                      placeholder="Rechercher par nom ou e-mail..."
                    />

                    {rechercheEtudiant && (
                      <button
                        type="button"
                        onClick={() => {
                          setRechercheEtudiant('')
                          setEtudiantSelectionne('')
                        }}
                      >
                        <X size={16} />
                      </button>
                    )}
                  </div>

                  {rechercheEtudiant.trim() && !etudiantSelectionne && (
                    <div className="task-student-results">
                      {etudiantsFiltres.map(etudiant => (
                        <button
                          type="button"
                          key={etudiant.id}
                          onClick={() => {
                            setEtudiantSelectionne(etudiant.id)
                            setRechercheEtudiant(
                              etudiant.full_name || etudiant.email || ''
                            )
                          }}
                        >
                          <span className="task-student-avatar">
                            <UserRound size={17} />
                          </span>
                          <span>
                            <strong>{etudiant.full_name || 'Sans nom'}</strong>
                            <small>{etudiant.email || 'Sans e-mail'}</small>
                          </span>
                          <ArrowRight size={16} />
                        </button>
                      ))}

                      {etudiantsFiltres.length === 0 && (
                        <p>Aucun étudiant trouvé.</p>
                      )}
                    </div>
                  )}

                  {etudiantSelectionne ? (
                    <div className="task-selected-student">
                      <CheckCircle2 size={16} />
                      Étudiant associé : {nomEtudiant(etudiantSelectionne)}
                    </div>
                  ) : (
                    <small className="task-field-hint">
                      Laissez vide pour créer une tâche générale.
                    </small>
                  )}
                </div>

                <div className="task-form-row">

                  <div className="task-field">
                    <label>Date limite <span>*</span></label>
                    <div className="task-input-icon">
                      <CalendarDays size={17} />
                      <input
                        type="date"
                        value={date}
                        min={aujourdHui}
                        onChange={e => setDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="task-field">
                    <label>Priorité</label>
                    <select
                      value={priorite}
                      onChange={e =>
                        setPriorite(e.target.value as 'low' | 'normal' | 'high')
                      }
                    >
                      <option value="low">Faible</option>
                      <option value="normal">Normale</option>
                      <option value="high">Urgente</option>
                    </select>
                  </div>

                </div>

                <button
                  className="task-submit-button"
                  onClick={ajouterTache}
                  disabled={enregistrement}
                >
                  {enregistrement ? (
                    <>
                      <RefreshCw size={18} className="task-spin" />
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Plus size={19} />
                      Ajouter la tâche
                    </>
                  )}
                </button>

                <p className="task-form-note">
                  <ShieldCheck size={14} />
                  Cette tâche sera enregistrée dans votre espace administratif.
                </p>

              </div>
            </div>

            <div className="task-list-panel">

              <div className="task-list-heading">
                <div>
                  <h2>Suivi des tâches</h2>
                  <p>Consultez et gérez vos rappels.</p>
                </div>

                <button
                  className="task-refresh-button"
                  onClick={() => {
                    chargerTaches()
                    chargerEtudiants()
                  }}
                >
                  <RefreshCw size={16} />
                  Actualiser
                </button>
              </div>

              <div className="task-search">
                <Search size={18} />
                <input
                  type="text"
                  value={rechercheTache}
                  onChange={e => setRechercheTache(e.target.value)}
                  placeholder="Rechercher une tâche ou un étudiant..."
                />
              </div>

              <div className="task-filter-tabs">
                <button
                  className={filtre === 'all' ? 'selected' : ''}
                  onClick={() => setFiltre('all')}
                >
                  Toutes
                  <span>{taches.length}</span>
                </button>

                <button
                  className={filtre === 'pending' ? 'selected' : ''}
                  onClick={() => setFiltre('pending')}
                >
                  En attente
                  <span>{enAttente.length}</span>
                </button>

                <button
                  className={filtre === 'late' ? 'selected' : ''}
                  onClick={() => setFiltre('late')}
                >
                  En retard
                  <span>{enRetard.length}</span>
                </button>

                <button
                  className={filtre === 'completed' ? 'selected' : ''}
                  onClick={() => setFiltre('completed')}
                >
                  Terminées
                  <span>{terminees.length}</span>
                </button>
              </div>

              {chargement ? (
                <div className="task-empty">
                  <RefreshCw size={27} className="task-spin" />
                  <strong>Chargement des tâches...</strong>
                  <span>Veuillez patienter.</span>
                </div>
              ) : tachesFiltrees.length === 0 ? (
                <div className="task-empty">
                  <div className="task-empty-icon">
                    <ClipboardList size={30} />
                  </div>
                  <strong>Aucune tâche trouvée</strong>
                  <span>
                    {filtre === 'all'
                      ? 'Commencez par créer votre première tâche.'
                      : 'Aucune tâche ne correspond à ce filtre.'}
                  </span>
                </div>
              ) : (
                <div className="task-list">

                  {tachesFiltrees.map(tache => {
                    const statut = statutTache(tache)

                    return (
                      <article
                        key={tache.id}
                        className={`task-item ${tache.completed ? 'task-item-completed' : ''}`}
                      >
                        <div className="task-item-main">

                          <div className={`task-priority-indicator priority-${tache.priority}`} />

                          <div className="task-item-content">

                            <div className="task-item-title-row">
                              <h3>{tache.title}</h3>
                              <span className={`task-status ${statut.className}`}>
                                {statut.label}
                              </span>
                            </div>

                            <p className="task-item-description">
                              {tache.description || 'Aucun détail supplémentaire.'}
                            </p>

                            <div className="task-item-meta">

                              {tache.student_id ? (
                                <Link
                                  href={`/administration/etudiants/${tache.student_id}`}
                                  className="task-meta-student"
                                >
                                  <UserRound size={14} />
                                  {nomEtudiant(tache.student_id)}
                                </Link>
                              ) : (
                                <span className="task-meta-student">
                                  <ClipboardList size={14} />
                                  Tâche générale
                                </span>
                              )}

                              <span>
                                <CalendarDays size={14} />
                                {new Date(tache.due_date + 'T00:00:00').toLocaleDateString('fr-FR')}
                              </span>

                              <span className={`task-priority-text priority-text-${tache.priority}`}>
                                {tache.priority === 'high'
                                  ? 'Priorité urgente'
                                  : tache.priority === 'low'
                                    ? 'Priorité faible'
                                    : 'Priorité normale'}
                              </span>

                            </div>
                          </div>
                        </div>

                        <div className="task-item-actions">
                          {!tache.completed && (
                            <button
                              className="task-complete-button"
                              onClick={() => terminerTache(tache.id)}
                            >
                              <CheckCircle2 size={16} />
                              Terminer
                            </button>
                          )}

                          <button
                            className="task-delete-button"
                            onClick={() => supprimerTache(tache.id)}
                            aria-label="Supprimer la tâche"
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                      </article>
                    )
                  })}

                </div>
              )}

            </div>
          </section>

          <footer className="admin-footer">
            <span>© 2026 Deutsch Erfolg</span>
            <span>Plateforme de préparation TELC B1 & B2</span>
          </footer>

        </div>
      </section>

      <style jsx global>{`
        .task-page {
          background: #f8f4f5;
        }

        .task-topbar-title {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #68748a;
          font-size: 13px;
          font-weight: 600;
        }

        .task-hero {
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
          padding: 34px 38px;
          margin-bottom: 24px;
          border-radius: 20px;
          color: white;
          background: linear-gradient(115deg, #391021 0%, #542039 65%, #642a43 100%);
          box-shadow: 0 12px 30px rgba(23, 43, 77, 0.12);
        }

        .task-hero::after {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          right: 5%;
          top: -190px;
          border: 1px solid rgba(255,255,255,0.10);
          border-radius: 50%;
          box-shadow: 0 0 0 35px rgba(255,255,255,0.025),
                      0 0 0 70px rgba(255,255,255,0.02);
        }

        .task-hero-content {
          position: relative;
          z-index: 1;
          max-width: 650px;
        }

        .task-eyebrow {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 14px;
          color: #e2c27c;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
        }

        .task-eyebrow-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #d6b56d;
        }

        .task-hero h1 {
          margin: 0 0 10px;
          color: #fff;
          font-size: clamp(26px, 3vw, 34px);
          font-weight: 800;
          letter-spacing: -1px;
        }

        .task-hero p {
          max-width: 560px;
          margin: 0;
          color: #d2dceb;
          font-size: 14px;
          line-height: 1.7;
        }

        .task-hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-top: 24px;
        }

        .task-hero-bottom span {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #f7eef1;
          font-size: 12px;
          font-weight: 600;
        }

        .task-hero-bottom svg {
          color: #e2c27c;
        }

        .task-hero-icon {
          position: relative;
          z-index: 1;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          width: 112px;
          height: 112px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 25px;
          color: #e5c77f;
          background: rgba(255,255,255,0.08);
        }

        .task-hero-icon span {
          position: absolute;
          top: -9px;
          right: -9px;
          display: grid;
          place-items: center;
          min-width: 29px;
          height: 29px;
          padding: 0 7px;
          border: 3px solid #542039;
          border-radius: 30px;
          color: white;
          background: #dc5555;
          font-size: 12px;
          font-weight: 800;
        }

        .task-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 24px;
        }

        .task-stat-card {
          display: flex;
          align-items: center;
          gap: 15px;
          min-width: 0;
          padding: 21px 18px;
          border: 1px solid #e9dfe3;
          border-radius: 15px;
          background: white;
          box-shadow: 0 3px 12px rgba(23,43,77,0.025);
        }

        .task-stat-icon {
          display: grid;
          place-items: center;
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          border-radius: 13px;
        }

        .task-icon-blue { color: #3267ad; background: #eaf1fb; }
        .task-icon-red { color: #d34e4e; background: #fff0ef; }
        .task-icon-orange { color: #c18432; background: #fff5e5; }
        .task-icon-green { color: #18845c; background: #e9f7ef; }

        .task-stat-card > div:last-child {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }

        .task-stat-card span {
          color: #68748a;
          font-size: 11px;
          font-weight: 600;
        }

        .task-stat-card strong {
          margin: 3px 0;
          color: #391021;
          font-size: 26px;
          line-height: 1.2;
          font-weight: 800;
        }

        .task-stat-card small {
          color: #98a2b3;
          font-size: 10px;
        }

        .task-workspace {
          display: grid;
          grid-template-columns: minmax(300px, 0.85fr) minmax(0, 1.5fr);
          align-items: start;
          gap: 20px;
        }

        .task-form-panel,
        .task-list-panel {
          min-width: 0;
          padding: 25px;
          border: 1px solid #e9dfe3;
          border-radius: 17px;
          background: white;
          box-shadow: 0 4px 16px rgba(23,43,77,0.025);
        }

        .task-panel-heading {
          display: flex;
          align-items: center;
          gap: 13px;
          padding-bottom: 21px;
          margin-bottom: 21px;
          border-bottom: 1px solid #edf0f5;
        }

        .task-heading-icon {
          display: grid;
          place-items: center;
          width: 42px;
          height: 42px;
          border-radius: 12px;
          color: white;
          background: #391021;
        }

        .task-panel-heading h2,
        .task-list-heading h2 {
          margin: 0 0 5px;
          color: #391021;
          font-size: 17px;
          font-weight: 800;
        }

        .task-panel-heading p,
        .task-list-heading p {
          margin: 0;
          color: #8792a4;
          font-size: 11px;
        }

        .task-form {
          display: grid;
          gap: 17px;
        }

        .task-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .task-field label {
          color: #34435b;
          font-size: 12px;
          font-weight: 700;
        }

        .task-field label span {
          color: #d34e4e;
        }

        .task-field input,
        .task-field textarea,
        .task-field select {
          width: 100%;
          min-width: 0;
          padding: 12px 13px;
          border: 1px solid #e1e6ee;
          border-radius: 10px;
          outline: none;
          color: #391021;
          background: #fbfcfe;
          font-family: inherit;
          font-size: 12px;
          transition: 0.2s ease;
        }

        .task-field input:focus,
        .task-field textarea:focus,
        .task-field select:focus {
          border-color: #7b91b2;
          background: white;
          box-shadow: 0 0 0 3px rgba(23,43,77,0.06);
        }

        .task-field textarea {
          resize: vertical;
          line-height: 1.6;
        }

        .task-field input::placeholder,
        .task-field textarea::placeholder {
          color: #a5afbd;
        }

        .task-student-search,
        .task-search {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 12px;
          border: 1px solid #e1e6ee;
          border-radius: 10px;
          color: #8995a7;
          background: #fbfcfe;
        }

        .task-student-search:focus-within,
        .task-search:focus-within {
          border-color: #7b91b2;
          box-shadow: 0 0 0 3px rgba(23,43,77,0.05);
        }

        .task-student-search input,
        .task-search input {
          width: 100%;
          min-width: 0;
          padding: 12px 0;
          border: none;
          outline: none;
          color: #391021;
          background: transparent;
          font-family: inherit;
          font-size: 12px;
        }

        .task-student-search button {
          display: grid;
          place-items: center;
          border: 0;
          color: #8995a7;
          background: transparent;
          cursor: pointer;
        }

        .task-student-results {
          overflow-y: auto;
          max-height: 210px;
          border: 1px solid #e6ebf2;
          border-radius: 10px;
          background: white;
          box-shadow: 0 8px 20px rgba(23,43,77,0.07);
        }

        .task-student-results button {
          display: flex;
          align-items: center;
          gap: 10px;
          width: 100%;
          padding: 11px;
          border: 0;
          border-bottom: 1px solid #f0f2f6;
          text-align: left;
          color: #391021;
          background: white;
          cursor: pointer;
        }

        .task-student-results button:hover {
          background: #f8f4f5;
        }

        .task-student-results button > span:nth-child(2) {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 3px;
          min-width: 0;
        }

        .task-student-results strong {
          font-size: 11px;
        }

        .task-student-results small {
          color: #8995a7;
          font-size: 10px;
        }

        .task-student-results p {
          padding: 12px;
          color: #8995a7;
          font-size: 12px;
        }

        .task-student-avatar {
          display: grid;
          place-items: center;
          width: 33px;
          height: 33px;
          border-radius: 9px;
          color: #315a8e;
          background: #edf3fa;
        }

        .task-selected-student {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #16835c;
          font-size: 11px;
          font-weight: 600;
        }

        .task-field-hint {
          color: #99a3b1;
          font-size: 10px;
        }

        .task-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .task-input-icon {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding-left: 11px;
          border: 1px solid #e1e6ee;
          border-radius: 10px;
          color: #8995a7;
          background: #fbfcfe;
        }

        .task-input-icon input {
          border: 0;
          background: transparent;
        }

        .task-submit-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          width: 100%;
          padding: 14px;
          border: 0;
          border-radius: 10px;
          color: white;
          background: #391021;
          font-family: inherit;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .task-submit-button:hover:not(:disabled) {
          background: #29466f;
          transform: translateY(-1px);
        }

        .task-submit-button:disabled {
          opacity: 0.65;
          cursor: wait;
        }

        .task-form-note {
          display: flex;
          align-items: center;
          gap: 6px;
          margin: -5px 0 0;
          color: #9aa4b2;
          font-size: 10px;
        }

        .task-list-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 19px;
        }

        .task-refresh-button {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 9px 11px;
          border: 1px solid #e5eaf1;
          border-radius: 9px;
          color: #34435b;
          background: #f8f9fb;
          font-family: inherit;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .task-refresh-button:hover {
          background: #edf1f6;
        }

        .task-search {
          margin-bottom: 16px;
        }

        .task-filter-tabs {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          padding-bottom: 17px;
          border-bottom: 1px solid #edf0f5;
        }

        .task-filter-tabs button {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 8px 10px;
          border: 1px solid #e7ebf1;
          border-radius: 8px;
          color: #68748a;
          background: white;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .task-filter-tabs button.selected {
          border-color: #391021;
          color: white;
          background: #391021;
        }

        .task-filter-tabs button span {
          display: grid;
          place-items: center;
          min-width: 19px;
          height: 19px;
          padding: 0 5px;
          border-radius: 6px;
          color: #53647d;
          background: #edf1f6;
          font-size: 9px;
        }

        .task-filter-tabs button.selected span {
          color: #391021;
          background: #e4c783;
        }

        .task-list {
          display: grid;
          gap: 11px;
          padding-top: 15px;
        }

        .task-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          padding: 17px;
          border: 1px solid #e9edf3;
          border-radius: 12px;
          background: white;
          transition: 0.2s ease;
        }

        .task-item:hover {
          border-color: #cbd5e3;
          box-shadow: 0 5px 15px rgba(23,43,77,0.045);
        }

        .task-item-completed {
          background: #fafcfb;
        }

        .task-item-main {
          display: flex;
          align-items: stretch;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }

        .task-priority-indicator {
          width: 4px;
          flex-shrink: 0;
          border-radius: 5px;
          background: #94a3b8;
        }

        .priority-high { background: #df5c5c; }
        .priority-normal { background: #d3a348; }
        .priority-low { background: #4c9c80; }

        .task-item-content {
          flex: 1;
          min-width: 0;
        }

        .task-item-title-row {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
        }

        .task-item-title-row h3 {
          margin: 0;
          color: #391021;
          font-size: 13px;
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .task-item-completed h3 {
          color: #82908c;
          text-decoration: line-through;
        }

        .task-status {
          display: inline-flex;
          align-items: center;
          padding: 4px 8px;
          border-radius: 20px;
          font-size: 9px;
          font-weight: 800;
        }

        .task-status-pending {
          color: #9b6b18;
          background: #fff5df;
        }

        .task-status-late {
          color: #bd4141;
          background: #fff0ef;
        }

        .task-status-done {
          color: #16835c;
          background: #e9f7ef;
        }

        .task-item-description {
          margin: 7px 0 10px;
          color: #8490a1;
          font-size: 11px;
          line-height: 1.6;
          overflow-wrap: anywhere;
        }

        .task-item-meta {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .task-item-meta > span,
        .task-meta-student {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #8490a1;
          font-size: 10px;
          text-decoration: none;
        }

        .task-meta-student:hover {
          color: #315a8e;
        }

        .task-priority-text {
          font-weight: 700;
        }

        .priority-text-high { color: #c74c4c !important; }
        .priority-text-normal { color: #a57a31 !important; }
        .priority-text-low { color: #32866a !important; }

        .task-item-actions {
          display: flex;
          align-items: center;
          gap: 7px;
          flex-shrink: 0;
        }

        .task-complete-button,
        .task-delete-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 9px 10px;
          border: 0;
          border-radius: 8px;
          font-family: inherit;
          font-size: 10px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .task-complete-button {
          color: #16835c;
          background: #e9f7ef;
        }

        .task-complete-button:hover {
          background: #d5f0e0;
        }

        .task-delete-button {
          width: 35px;
          height: 35px;
          padding: 0;
          color: #bd5555;
          background: #fff1f0;
        }

        .task-delete-button:hover {
          color: white;
          background: #c94f4f;
        }

        .task-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 240px;
          color: #8b97a8;
          text-align: center;
        }

        .task-empty strong {
          color: #34435b;
          font-size: 13px;
        }

        .task-empty span {
          font-size: 11px;
        }

        .task-empty-icon {
          display: grid;
          place-items: center;
          width: 58px;
          height: 58px;
          margin-bottom: 5px;
          border-radius: 17px;
          color: #8292a8;
          background: #f0f3f8;
        }

        .task-alert {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 15px;
          margin-bottom: 16px;
          border-radius: 10px;
          font-size: 12px;
          font-weight: 600;
        }

        .task-alert span {
          flex: 1;
        }

        .task-alert button {
          display: grid;
          place-items: center;
          border: 0;
          color: inherit;
          background: transparent;
          cursor: pointer;
        }

        .task-alert-error {
          color: #b83d3d;
          background: #fff0ef;
        }

        .task-alert-success {
          color: #16835c;
          background: #e9f7ef;
        }

        .task-spin {
          animation: task-rotation 1s linear infinite;
        }

        @keyframes task-rotation {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1150px) {
          .task-workspace {
            grid-template-columns: 1fr;
          }

          .task-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 650px) {
          .task-hero {
            padding: 25px 21px;
          }

          .task-hero-icon {
            width: 65px;
            height: 65px;
            border-radius: 17px;
          }

          .task-hero-icon svg {
            width: 33px;
            height: 33px;
          }

          .task-hero-bottom {
            gap: 10px;
            flex-direction: column;
          }

          .task-stats-grid {
            gap: 10px;
          }

          .task-stat-card {
            gap: 10px;
            padding: 14px 11px;
          }

          .task-stat-icon {
            width: 36px;
            height: 36px;
          }

          .task-stat-card strong {
            font-size: 22px;
          }

          .task-stat-card span {
            font-size: 10px;
          }

          .task-stat-card small {
            font-size: 9px;
          }

          .task-form-panel,
          .task-list-panel {
            padding: 17px;
          }

          .task-form-row {
            grid-template-columns: 1fr;
          }

          .task-item {
            align-items: flex-start;
            flex-direction: column;
          }

          .task-item-actions {
            align-self: flex-end;
          }

          .task-list-heading {
            align-items: flex-start;
          }

          .task-filter-tabs {
            gap: 6px;
          }

          .task-filter-tabs button {
            padding: 7px 8px;
            font-size: 9px;
          }

          .task-topbar-title {
            display: none;
          }
        }
      `}</style>

    </main>
  )
}


'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  Wallet,
  CreditCard,
  TrendingUp,
  BarChart3,
  BookOpen,
  FileText,
  FileAudio,
  Settings,
  ShieldCheck,
  Search,
  RefreshCw,
  Crown,
  CheckCircle2,
  Clock,
  Bell,
  XCircle,
  ChartNoAxesCombined,
  History,
  ArrowUpRight,
  Mail,
  Phone,
  CalendarDays,
  UserRound,
  X,
  Sparkles,
} from 'lucide-react'

type Etudiant = {
  id: string
  full_name: string | null
  email: string | null
  telephone: string | null
  level: string | null
  role: string
  is_pro: boolean
  pro_until: string | null
  pro_started_at: string | null
  pro_duration: number | null
  trial_used: boolean
  pro_type: string
}

type Paiement = {
  id: string
  student_id: string
  amount_dh: number
  payment_method: string
  payment_note: string | null
  created_at: string
  cancelled_at: string | null
  cancellation_reason: string | null
  cancelled_by: string | null
  subscription_history_id: string | null
}

type HistoriqueAbonnement = {
  id: string
  operation: string
  subscription_type: string
  duration_days: number
  started_at: string
  expires_at: string
  payment_note: string | null
  created_at: string
  cancelled_at: string | null
  cancellation_reason: string | null
  cancelled_by: string | null
  previous_state_captured: boolean
}

type Filtre = 'tous' | 'pro' | 'essai' | 'expire'

export default function GestionEtudiantsPage() {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([])
  const [paiements, setPaiements] = useState<Paiement[]>([])
  const [etudiantsAvecRappel, setEtudiantsAvecRappel] = useState<string[]>([])

  const [recherche, setRecherche] = useState('')
  const [filtreStatut, setFiltreStatut] = useState<Filtre>('tous')

  const [chargement, setChargement] = useState(true)
  const [chargementAction, setChargementAction] = useState<string | null>(null)

  const [message, setMessage] = useState('')
  const [erreur, setErreur] = useState('')

  const [dureesEtudiants, setDureesEtudiants] = useState<Record<string, string>>({})
  const [montantsEtudiants, setMontantsEtudiants] = useState<Record<string, string>>({})

  const [historique, setHistorique] = useState<HistoriqueAbonnement[]>([])
  const [etudiantSelectionne, setEtudiantSelectionne] = useState<Etudiant | null>(null)
  const [chargementHistorique, setChargementHistorique] = useState(false)

  async function chargerEtudiants() {
    setChargement(true)
    setErreur('')

    const {
      data: { user },
      error: authError,
    } = await supabase.auth.getUser()

    if (authError || !user) {
      setErreur('Vous devez être connecté pour accéder à cette page.')
      setChargement(false)
      return
    }

    const { data: profil, error: profilError } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    if (profilError || profil?.role !== 'admin') {
      setErreur('Accès réservé à l’administrateur.')
      setChargement(false)
      return
    }

    const { data, error } = await supabase
      .from('profiles')
      .select(
        'id, full_name, email, telephone, level, role, is_pro, pro_until, pro_started_at, pro_duration, trial_used, pro_type'
      )
      .eq('role', 'student')
      .order('full_name', { ascending: true })

    if (error) {
      setErreur(error.message)
      setChargement(false)
      return
    }

    setEtudiants((data || []) as Etudiant[])

    const { data: paiementsData, error: paiementsError } = await supabase
      .from('pro_payments')
.select(
  'id, student_id, amount_dh, payment_method, payment_note, created_at, cancelled_at, cancellation_reason, cancelled_by, subscription_history_id'
)
.order('created_at', { ascending: false })
    if (paiementsError) {
      setErreur(paiementsError.message)
    } else {
      setPaiements((paiementsData || []) as Paiement[])
    }

    const { data: rappelsData, error: rappelsError } = await supabase
      .from('admin_tasks')
      .select('student_id')
      .eq('completed', false)
      .not('student_id', 'is', null)

    if (rappelsError) {
      setErreur(rappelsError.message)
    } else {
      const ids = [
        ...new Set(
          (rappelsData || [])
            .map((rappel) => rappel.student_id)
            .filter((id): id is string => typeof id === 'string')
        ),
      ]

      setEtudiantsAvecRappel(ids)
    }

    setChargement(false)
  }

  useEffect(() => {
    chargerEtudiants()
  }, [])

  function estActif(etudiant: Etudiant) {
    return (
      etudiant.is_pro &&
      !!etudiant.pro_until &&
      new Date(etudiant.pro_until) > new Date()
    )
  }

  function statut(etudiant: Etudiant) {
    if (!estActif(etudiant)) {
      return {
        label: 'Gratuit / Expiré',
        couleur: 'gray',
        Icon: XCircle,
      }
    }

    if (etudiant.pro_type === 'trial') {
      return {
        label: 'Essai gratuit',
        couleur: 'blue',
        Icon: Clock,
      }
    }

    return {
      label: 'PRO actif',
      couleur: 'green',
      Icon: CheckCircle2,
    }
  }

  async function activerPro(etudiant: Etudiant) {
    setErreur('')
    setMessage('')

    const jours = Number(dureesEtudiants[etudiant.id] || '30')
    const montant = Number(montantsEtudiants[etudiant.id] || '0')

    if (!Number.isFinite(montant) || montant <= 0) {
      setErreur('Veuillez saisir un montant valide en DH.')
      return
    }

    if (!Number.isFinite(jours) || jours <= 0) {
      setErreur('Veuillez choisir une durée valide.')
      return
    }

    setChargementAction(etudiant.id)

    const { error } = await supabase.rpc('admin_activate_pro', {
      p_student_id: etudiant.id,
      p_duration_days: jours,
      p_payment_note: null,
      p_amount_dh: montant,
      p_payment_method: 'virement',
    })

    if (error) {
      setErreur(error.message)
      setChargementAction(null)
      return
    }

    setMessage(
      `Abonnement PRO de ${etudiant.full_name || etudiant.email} enregistré pour ${jours} jours. Paiement : ${montant} DH.`
    )

    setMontantsEtudiants((prev) => ({
      ...prev,
      [etudiant.id]: '',
    }))

    await chargerEtudiants()
    setChargementAction(null)
  }

  async function afficherHistorique(etudiant: Etudiant) {
    setEtudiantSelectionne(etudiant)
    setChargementHistorique(true)
    setHistorique([])
    setErreur('')

    const { data, error } = await supabase
  .from('pro_subscription_history')
  .select(
    'id, operation, subscription_type, duration_days, started_at, expires_at, payment_note, created_at, cancelled_at, cancellation_reason, cancelled_by, previous_state_captured'
  )
  .eq('student_id', etudiant.id)
  .order('created_at', { ascending: false })

    if (error) {
      setErreur(error.message)
    } else {
      setHistorique((data || []) as HistoriqueAbonnement[])
    }

    setChargementHistorique(false)
  }
async function annulerAbonnement(item: HistoriqueAbonnement) {
  const motif = window.prompt(
    'Pourquoi souhaitez-vous annuler cette opération ?'
  )

  if (motif === null) return

  if (!motif.trim()) {
    setErreur("Le motif d'annulation est obligatoire.")
    return
  }

  const confirmation = window.confirm(
    `Confirmer l'annulation de cet abonnement de ${item.duration_days} jours ?\n\nLe paiement associé sera également annulé.`
  )

  if (!confirmation) return

  setErreur('')

  const { error } = await supabase.rpc(
    'admin_cancel_pro_subscription',
    {
      p_history_id: item.id,
      p_reason: motif.trim()
    }
  )

  if (error) {
    setErreur(error.message)
    return
  }

  await afficherHistorique(etudiantSelectionne!)
  await chargerEtudiants()
}
  async function revoquerPro(etudiant: Etudiant) {
    const confirmation = window.confirm(
      `Voulez-vous vraiment révoquer l'accès PRO de ${etudiant.full_name || etudiant.email} ?`
    )

    if (!confirmation) return

    setErreur('')
    setMessage('')
    setChargementAction(etudiant.id)

    const { error } = await supabase.rpc('admin_revoke_pro', { p_student_id: etudiant.id })

    if (error) {
      setErreur(error.message)
      setChargementAction(null)
      return
    }

    setMessage('Accès PRO révoqué.')
    await chargerEtudiants()
    setChargementAction(null)
  }

  const maintenant = new Date()

 const paiementsValides = paiements.filter(
  (paiement) => paiement.cancelled_at === null
)

const chiffreAffairesTotal = paiementsValides.reduce(
  (total, paiement) => total + Number(paiement.amount_dh),
  0
)

const chiffreAffairesMois = paiementsValides
  .filter((paiement) => {
    const date = new Date(paiement.created_at)

    return (
      date.getMonth() === maintenant.getMonth() &&
      date.getFullYear() === maintenant.getFullYear()
    )
  })
  .reduce((total, paiement) => total + Number(paiement.amount_dh), 0)

const nombrePaiements = paiementsValides.length

  const panierMoyen =
    nombrePaiements > 0 ? chiffreAffairesTotal / nombrePaiements : 0

  const actifs = etudiants.filter(estActif).length

  const essais = etudiants.filter(
    (etudiant) => estActif(etudiant) && etudiant.pro_type === 'trial'
  ).length

  const proPayants = etudiants.filter(
    (etudiant) => estActif(etudiant) && etudiant.pro_type === 'paid'
  ).length

  const expires = etudiants.length - actifs

  const etudiantsFiltres = etudiants.filter((etudiant) => {
    const texte =
      `${etudiant.full_name || ''} ${etudiant.email || ''} ${etudiant.telephone || ''}`.toLowerCase()

    const correspondRecherche = texte.includes(recherche.toLowerCase())
    const actif = estActif(etudiant)

    const correspondStatut =
      filtreStatut === 'tous' ||
      (filtreStatut === 'pro' && actif && etudiant.pro_type === 'paid') ||
      (filtreStatut === 'essai' && actif && etudiant.pro_type === 'trial') ||
      (filtreStatut === 'expire' && !actif)

    return correspondRecherche && correspondStatut
  })

  const filtres = [
    { id: 'tous' as Filtre, label: 'Tous', count: etudiants.length },
    { id: 'pro' as Filtre, label: 'PRO payants', count: proPayants },
    { id: 'essai' as Filtre, label: 'Essais gratuits', count: essais },
    { id: 'expire' as Filtre, label: 'Gratuits / Expirés', count: expires },
  ]

  if (chargement) {
    return (
      <main className="admin-loading">
        <div className="loading-spinner" />
        <p>Chargement de la gestion des étudiants...</p>
      </main>
    )
  }

  return (
    <main className="admin-layout">
      {/* SIDEBAR */}
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
          <Link href="/administration" className="admin-menu-link">
            <LayoutDashboard size={19} />
            <span>Tableau de bord</span>
          </Link>

          <Link href="/administration/taches" className="admin-menu-link">
            <Bell size={19} />
            <span>Tâches et alertes</span>
          </Link>

          <Link href="/administration/etudiants" className="admin-menu-link active">
            <Users size={19} />
            <span>Étudiants</span>
          </Link>

          <Link href="/administration/paiements" className="admin-menu-link">
            <Wallet size={19} />
            <span>Paiements</span>
          </Link>

          <Link href="/administration/statistiques" className="admin-menu-link">
            <BarChart3 size={19} />
            <span>Statistiques</span>
          </Link>

          <Link href="#" className="admin-menu-link">
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

      {/* CONTENU PRINCIPAL */}
      <section className="admin-main">
        <header className="admin-topbar">
          <div className="admin-mobile-brand">
            <span className="brand-mark">
              <GraduationCap size={21} />
            </span>
            Deutsch <b>Erfolg</b>
          </div>

          <div className="admin-search">
            <Search size={17} />
            <span>Gestion des étudiants</span>
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

        <div className="admin-content">
          {/* EN-TÊTE */}
          <section className="students-hero">
            <div>
              <div className="students-eyebrow">
                <Sparkles size={14} />
                ESPACE DE GESTION
              </div>

              <h1>Gestion des étudiants</h1>

              <p>
                Gérez les comptes, suivez les abonnements et accompagnez
                vos étudiants.
              </p>
            </div>

            <div className="hero-student-icon">
              <Users size={34} />
            </div>
          </section>

          {/* MESSAGES */}
          {message && (
            <div className="students-message success">
              <CheckCircle2 size={18} />
              <span>{message}</span>
              <button onClick={() => setMessage('')}>
                <X size={16} />
              </button>
            </div>
          )}

          {erreur && (
            <div className="students-message error">
              <XCircle size={18} />
              <span>{erreur}</span>
              <button onClick={() => setErreur('')}>
                <X size={16} />
              </button>
            </div>
          )}

          {/* STATISTIQUES */}
          <section className="students-stats-grid">
            <article className="students-stat-card">
              <div className="stat-icon navy">
                <Users size={21} />
              </div>
              <div className="stat-label">Total étudiants</div>
              <div className="stat-number">{etudiants.length}</div>
              <div className="stat-detail">Comptes enregistrés</div>
            </article>

            <article className="students-stat-card">
              <div className="stat-icon green">
                <Crown size={21} />
              </div>
              <div className="stat-label">Abonnements PRO</div>
              <div className="stat-number">{proPayants}</div>
              <div className="stat-detail">Abonnements payants actifs</div>
            </article>

            <article className="students-stat-card">
              <div className="stat-icon blue">
                <Clock size={21} />
              </div>
              <div className="stat-label">Essais gratuits</div>
              <div className="stat-number">{essais}</div>
              <div className="stat-detail">Périodes d'essai actives</div>
            </article>

            <article className="students-stat-card">
              <div className="stat-icon orange">
                <XCircle size={21} />
              </div>
              <div className="stat-label">Gratuits / Expirés</div>
              <div className="stat-number">{expires}</div>
              <div className="stat-detail">Sans abonnement actif</div>
            </article>
          </section>

          {/* STATISTIQUES FINANCIÈRES */}
          <section className="financial-section">
            <div className="financial-heading">
              <div>
                <span className="financial-eyebrow">APERÇU FINANCIER</span>
                <h2>Performance des abonnements</h2>
              </div>

              <div className="financial-heading-icon">
                <ChartNoAxesCombined size={21} />
              </div>
            </div>

            <div className="financial-grid">
              <div className="financial-card">
                <div className="financial-card-icon">
                  <Wallet size={19} />
                </div>
                <div>
                  <span>Chiffre d'affaires total</span>
                  <strong>{chiffreAffairesTotal.toFixed(2)} DH</strong>
                </div>
              </div>

              <div className="financial-card">
                <div className="financial-card-icon">
                  <TrendingUp size={19} />
                </div>
                <div>
                  <span>Chiffre d'affaires du mois</span>
                  <strong>{chiffreAffairesMois.toFixed(2)} DH</strong>
                </div>
              </div>

              <div className="financial-card">
                <div className="financial-card-icon">
                  <CreditCard size={19} />
                </div>
                <div>
                  <span>Nombre de paiements</span>
                  <strong>{nombrePaiements}</strong>
                </div>
              </div>

              <div className="financial-card">
                <div className="financial-card-icon">
                  <ChartNoAxesCombined size={19} />
                </div>
                <div>
                  <span>Panier moyen</span>
                  <strong>{panierMoyen.toFixed(2)} DH</strong>
                </div>
              </div>
            </div>
          </section>

          {/* LISTE DES ÉTUDIANTS */}
          <section className="students-management">
            <div className="students-list-header">
              <div>
                <div className="list-title-line">
                  <h2>Liste des étudiants</h2>
                  <span className="total-badge">{etudiantsFiltres.length}</span>
                </div>
                <p>Consultez et gérez les comptes de vos étudiants.</p>
              </div>

              <button
                className="students-refresh"
                onClick={chargerEtudiants}
                disabled={chargement}
              >
                <RefreshCw size={16} />
                Actualiser
              </button>
            </div>

            {/* RECHERCHE */}
            <div className="students-search">
              <Search size={19} />
              <input
                type="text"
                placeholder="Rechercher par nom, e-mail ou téléphone..."
                value={recherche}
                onChange={(e) => setRecherche(e.target.value)}
              />

              {recherche && (
                <button onClick={() => setRecherche('')}>
                  <X size={16} />
                </button>
              )}
            </div>

            {/* FILTRES */}
            <div className="students-filters">
              {filtres.map((filtre) => (
                <button
                  key={filtre.id}
                  className={
                    filtreStatut === filtre.id
                      ? 'students-filter active'
                      : 'students-filter'
                  }
                  onClick={() => setFiltreStatut(filtre.id)}
                >
                  {filtre.label}
                  <span>{filtre.count}</span>
                </button>
              ))}
            </div>

            {/* CARTES ÉTUDIANTS */}
            <div className="students-cards">
              {etudiantsFiltres.length === 0 ? (
                <div className="students-empty">
                  <div className="empty-icon">
                    <UserRound size={30} />
                  </div>
                  <h3>Aucun étudiant trouvé</h3>
                  <p>
                    Essayez de modifier votre recherche ou votre filtre.
                  </p>
                  <button
                    onClick={() => {
                      setRecherche('')
                      setFiltreStatut('tous')
                    }}
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                etudiantsFiltres.map((etudiant) => {
                  const s = statut(etudiant)
                  const Icon = s.Icon
                  const rappelActif = etudiantsAvecRappel.includes(etudiant.id)
                  const enAction = chargementAction === etudiant.id

                  return (
                    <article
                      className="student-management-card"
                      key={etudiant.id}
                    >
                      {/* IDENTITÉ */}
                      <div className="student-card-top">
                        <div className="student-identity">
                          <div className="student-avatar">
                            {(etudiant.full_name || etudiant.email || 'E')
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div className="student-identity-text">
                            <Link
                              href={`/administration/etudiants/${etudiant.id}`}
                              className="student-name-link"
                            >
                              <h3>
                                {etudiant.full_name || 'Sans nom'}

                                {rappelActif && (
                                  <span className="student-bell">
                                    <Bell size={15} />
                                  </span>
                                )}

                                <ArrowUpRight
                                  size={15}
                                  className="student-open-icon"
                                />
                              </h3>
                            </Link>

                            <div className="student-contact">
                              <span>
                                <Mail size={13} />
                                {etudiant.email || 'E-mail non renseigné'}
                              </span>

                              <span>
                                <Phone size={13} />
                                {etudiant.telephone || 'Téléphone non renseigné'}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className={`student-status status-${s.couleur}`}>
                          <Icon size={14} />
                          {s.label}
                        </div>
                      </div>

                      {/* INFORMATIONS */}
                      <div className="student-card-details">
                        <div className="student-detail">
                          <span>Niveau</span>
                          <strong>{etudiant.level || 'Non renseigné'}</strong>
                        </div>

                        <div className="student-detail">
                          <span>Abonnement</span>
                          <strong>
                            {etudiant.pro_type === 'trial'
                              ? 'Essai gratuit'
                              : etudiant.pro_type === 'paid'
                                ? 'PRO payant'
                                : 'Compte gratuit'}
                          </strong>
                        </div>

                        <div className="student-detail">
                          <span>Expiration</span>
                          <strong>
                            {estActif(etudiant) && etudiant.pro_until
                              ? new Date(etudiant.pro_until).toLocaleDateString('fr-FR')
                              : 'Aucun accès actif'}
                          </strong>
                        </div>
                      </div>

                      {/* GESTION DE L'ABONNEMENT */}
                      <div className="student-subscription">
                        <div className="subscription-heading">
                          <span>Gestion de l'abonnement</span>
                          <span className="subscription-hint">Activation PRO</span>
                        </div>

                        <div className="subscription-fields">
                          <div className="subscription-field">
                            <label htmlFor={`duree-${etudiant.id}`}>
                              Durée
                            </label>

                            <select
                              id={`duree-${etudiant.id}`}
                              value={dureesEtudiants[etudiant.id] || '30'}
                              onChange={(e) =>
                                setDureesEtudiants((prev) => ({
                                  ...prev,
                                  [etudiant.id]: e.target.value,
                                }))
                              }
                            >
                              <option value="30">1 mois</option>
                              <option value="90">3 mois</option>
                              <option value="180">6 mois</option>
                              <option value="365">12 mois</option>
                            </select>
                          </div>

                          <div className="subscription-field">
                            <label htmlFor={`montant-${etudiant.id}`}>
                              Montant reçu
                            </label>

                            <div className="amount-input-wrapper">
                              <input
                                id={`montant-${etudiant.id}`}
                                type="number"
                                min="1"
                                step="0.01"
                                placeholder="0,00"
                                value={montantsEtudiants[etudiant.id] || ''}
                                onChange={(e) =>
                                  setMontantsEtudiants((prev) => ({
                                    ...prev,
                                    [etudiant.id]: e.target.value,
                                  }))
                                }
                              />
                              <span>DH</span>
                            </div>
                          </div>
                        </div>

                        <div className="subscription-footer">
                          <span>Mode de paiement : Virement</span>

                          <button
                            className="student-action-primary"
                            onClick={() => activerPro(etudiant)}
                            disabled={enAction}
                          >
                            <ShieldCheck size={15} />
                            {enAction
                              ? 'Traitement...'
                              : 'Activer / Prolonger PRO'}
                          </button>
                        </div>
                      </div>

                      {/* ACTIONS SECONDAIRES */}
                      <div className="student-card-actions">
                        <button
                          className="student-action-secondary"
                          data-admin-permission="finance" onClick={() => afficherHistorique(etudiant)}
                        >
                          <History size={16} />
                          Historique
                        </button>

                        {etudiant.is_pro && (
                          <button
                            className="student-action-danger"
                            data-admin-permission="revoke_pro" onClick={() => revoquerPro(etudiant)}
                            disabled={enAction}
                          >
                            <XCircle size={15} />
                            Révoquer PRO
                          </button>
                        )}
                      </div>

                      {rappelActif && (
                        <div className="student-reminder-note">
                          <Bell size={14} />
                          Cet étudiant possède au moins un rappel actif.
                        </div>
                      )}
                    </article>
                  )
                })
              )}
            </div>
          </section>

          <footer className="admin-footer">
            Deutsch Erfolg · Administration
          </footer>
        </div>
      </section>

      {/* MODALE HISTORIQUE */}
      {etudiantSelectionne && (
        <div
          className="history-overlay"
          onClick={() => setEtudiantSelectionne(null)}
        >
          <div
            className="history-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="history-header">
              <div className="history-heading-icon">
                <History size={21} />
              </div>

              <div className="history-heading-text">
                <h2>Historique des abonnements</h2>
                <p>
                  {etudiantSelectionne.full_name || etudiantSelectionne.email}
                </p>
              </div>

              <button
                className="history-close"
                onClick={() => setEtudiantSelectionne(null)}
              >
                <X size={19} />
              </button>
            </div>

            {chargementHistorique ? (
              <div className="history-loading">
                <div className="loading-spinner" />
                <p>Chargement de l'historique...</p>
              </div>
            ) : historique.length === 0 ? (
              <div className="history-empty">
                <Clock size={28} />
                <p>Aucun abonnement enregistré pour cet étudiant.</p>
              </div>
            ) : (
              <div className="history-list">
                {historique.map((item) => {
  const paiementAssocie = paiements.find(
    (paiement) => paiement.subscription_history_id === item.id
  )

  const estDerniereOperation = historique.find(
    (operation) =>
      operation.cancelled_at === null &&
      ['activation', 'renewal'].includes(operation.operation)
  )?.id === item.id

  const peutAnnuler =
    item.cancelled_at === null &&
    item.previous_state_captured === true &&
    estDerniereOperation &&
    paiementAssocie !== undefined &&
    paiementAssocie.cancelled_at === null

  return (
    <div className="history-item" key={item.id}>
      <div className="history-item-top">
        <strong>
          {item.operation === 'renewal'
            ? 'Renouvellement'
            : 'Activation'}
        </strong>

        <span>{item.duration_days} jours</span>
      </div>

      <div className="history-dates">
        <div>
          <CalendarDays size={14} />
          <span>
            Début :{' '}
            {new Date(item.started_at).toLocaleDateString('fr-FR')}
          </span>
        </div>

        <div>
          <CalendarDays size={14} />
          <span>
            Expiration :{' '}
            {new Date(item.expires_at).toLocaleDateString('fr-FR')}
          </span>
        </div>
      </div>

      {item.payment_note && (
        <p className="history-note">
          Note : {item.payment_note}
        </p>
      )}

      <small>
        Enregistré le{' '}
        {new Date(item.created_at).toLocaleDateString('fr-FR')}
      </small>

      {item.cancelled_at ? (
        <div style={{
          marginTop: '12px',
          padding: '12px',
          background: '#fef2f2',
          borderRadius: '8px',
          color: '#991b1b'
        }}>
          <strong>Opération annulée</strong>
          <p style={{ margin: '6px 0' }}>
            Motif : {item.cancellation_reason || 'Non renseigné'}
          </p>
          <small>
            Annulée le{' '}
            {new Date(item.cancelled_at).toLocaleString('fr-FR')}
          </small>
        </div>
      ) : peutAnnuler ? (
        <button
          type="button"
          data-admin-permission="cancel_pro" onClick={() => annulerAbonnement(item)}
          style={{
            marginTop: '12px',
            padding: '9px 14px',
            border: 'none',
            borderRadius: '8px',
            background: '#fee2e2',
            color: '#b91c1c',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          <XCircle size={15} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
          Annuler cette opération
        </button>
      ) : (
        <small style={{ display: 'block', marginTop: '10px', color: '#888' }}>
          {item.previous_state_captured !== true
            ? "Annulation indisponible : ancien état non sauvegardé."
            : !paiementAssocie
              ? "Annulation indisponible : aucun paiement associé."
              : "Annulation indisponible : une opération plus récente existe."}
        </small>
      )}
    </div>
  )
})}
              </div>
            )}
          </div>
        </div>
      )}

      {/* DESIGN */}
      <style jsx global>{`
        .student-card-actions .student-delete-account {
          margin-left: 0;
          flex: 1 0 100%;
          color: #a1273e;
          border: 1px solid #c77c8a !important;
          background: #fff;
        }
        .student-card-actions .student-delete-account:hover:not(:disabled) { background: #fff0f2; }


        .admin-loading {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          background: #f8f4f5;
          color: #64748b;
          font-size: 14px;
        }

        .loading-spinner {
          width: 30px;
          height: 30px;
          border: 3px solid #e2e8f0;
          border-top-color: #391021;
          border-radius: 50%;
          animation: students-spin 0.8s linear infinite;
        }

        @keyframes students-spin {
          to { transform: rotate(360deg); }
        }

        .students-hero {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 27px;
          padding: 28px 30px;
          border-radius: 18px;
          background: linear-gradient(120deg, #391021, #542039);
          color: white;
          box-shadow: 0 10px 30px rgba(23,43,77,0.12);
        }

        .students-eyebrow {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #e2c47f;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 1.7px;
          margin-bottom: 11px;
        }

        .students-hero h1 {
          margin: 0 0 8px;
          color: white;
          font-size: 27px;
          font-weight: 750;
          letter-spacing: -0.7px;
        }

        .students-hero p {
          margin: 0;
          color: #d3ddeb;
          font-size: 13px;
          line-height: 1.6;
        }

        .hero-student-icon {
          width: 65px;
          height: 65px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 18px;
          background: rgba(255,255,255,0.10);
          color: #e2c47f;
        }

        .students-message {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 16px;
          margin-bottom: 16px;
          border-radius: 11px;
          font-size: 13px;
          line-height: 1.5;
        }

        .students-message span {
          flex: 1;
        }

        .students-message button {
          display: grid;
          place-items: center;
          border: 0;
          background: transparent;
          color: inherit;
          cursor: pointer;
        }

        .students-message.success {
          color: #147a52;
          background: #eaf8f0;
          border: 1px solid #ccebd9;
        }

        .students-message.error {
          color: #b42332;
          background: #fff0f0;
          border: 1px solid #f5d1d5;
        }

        .students-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 15px;
          margin-bottom: 23px;
        }

        .students-stat-card {
          min-width: 0;
          padding: 19px;
          border: 1px solid #e9dfe3;
          border-radius: 14px;
          background: white;
          box-shadow: 0 3px 12px rgba(23,43,77,0.025);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .students-stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 9px 22px rgba(23,43,77,0.07);
        }

        .stat-icon {
          width: 39px;
          height: 39px;
          display: grid;
          place-items: center;
          border-radius: 11px;
          margin-bottom: 14px;
        }

        .stat-icon.navy {
          color: #542039;
          background: #f7eef1;
        }

        .stat-icon.green {
          color: #16835c;
          background: #e9f7ef;
        }

        .stat-icon.blue {
          color: #2873c8;
          background: #eaf3ff;
        }

        .stat-icon.orange {
          color: #c47b28;
          background: #fff4e6;
        }

        .stat-label {
          color: #718096;
          font-size: 12px;
          font-weight: 600;
          margin-bottom: 5px;
        }

        .stat-number {
          color: #391021;
          font-size: 27px;
          font-weight: 800;
          letter-spacing: -0.7px;
        }

        .stat-detail {
          color: #9aa5b5;
          font-size: 10px;
          margin-top: 5px;
        }

        .financial-section {
          padding: 22px;
          margin-bottom: 24px;
          border: 1px solid #e9dfe3;
          border-radius: 15px;
          background: white;
        }

        .financial-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
        }

        .financial-eyebrow {
          color: #b08c45;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        .financial-heading h2 {
          margin: 5px 0 0;
          color: #391021;
          font-size: 16px;
          font-weight: 750;
        }

        .financial-heading-icon {
          width: 38px;
          height: 38px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #b08c45;
          background: #fbf6ea;
        }

        .financial-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 12px;
        }

        .financial-card {
          display: flex;
          align-items: center;
          gap: 12px;
          min-width: 0;
          padding: 14px;
          border: 1px solid #edf0f5;
          border-radius: 11px;
          background: #fbfcfe;
        }

        .financial-card-icon {
          width: 36px;
          height: 36px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 10px;
          color: #542039;
          background: #f7eef1;
        }

        .financial-card span {
          display: block;
          color: #8290a3;
          font-size: 10px;
          margin-bottom: 5px;
        }

        .financial-card strong {
          display: block;
          color: #391021;
          font-size: 15px;
          font-weight: 800;
          overflow-wrap: anywhere;
        }

        .students-management {
          padding: 23px;
          border: 1px solid #e9dfe3;
          border-radius: 16px;
          background: white;
        }

        .students-list-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
        }

        .list-title-line {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .list-title-line h2 {
          margin: 0;
          color: #391021;
          font-size: 18px;
          font-weight: 800;
        }

        .total-badge {
          min-width: 25px;
          height: 25px;
          padding: 0 7px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          color: #542039;
          background: #f7eef1;
          font-size: 11px;
          font-weight: 800;
        }

        .students-list-header p {
          margin: 6px 0 0;
          color: #8995a7;
          font-size: 12px;
        }

        .students-refresh {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 10px 14px;
          border: 1px solid #e4e9f0;
          border-radius: 9px;
          background: #f8fafc;
          color: #542039;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
        }

        .students-refresh:hover {
          background: #f7eef1;
        }

        .students-refresh:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .students-search {
          display: flex;
          align-items: center;
          gap: 11px;
          padding: 13px 15px;
          margin: 22px 0 15px;
          border: 1px solid #e2e8f0;
          border-radius: 11px;
          background: #fbfcfe;
          color: #8793a5;
          transition: 0.2s;
        }

        .students-search:focus-within {
          border-color: #526b91;
          background: white;
          box-shadow: 0 0 0 3px rgba(38,63,104,0.07);
        }

        .students-search input {
          flex: 1;
          min-width: 0;
          border: 0;
          outline: 0;
          background: transparent;
          color: #391021;
          font: inherit;
          font-size: 13px;
        }

        .students-search input::placeholder {
          color: #a4adba;
        }

        .students-search button {
          display: grid;
          place-items: center;
          padding: 3px;
          border: 0;
          background: transparent;
          color: #8793a5;
          cursor: pointer;
        }

        .students-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 20px;
        }

        .students-filter {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          padding: 9px 12px;
          border: 1px solid #e6ebf2;
          border-radius: 9px;
          background: white;
          color: #748196;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
          transition: 0.2s;
        }

        .students-filter:hover {
          border-color: #542039;
          color: #542039;
        }

        .students-filter span {
          min-width: 21px;
          height: 21px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 5px;
          border-radius: 6px;
          background: #f0f3f7;
          color: #52627a;
          font-size: 10px;
        }

        .students-filter.active {
          color: white;
          border-color: #391021;
          background: #391021;
        }

        .students-filter.active span {
          color: #391021;
          background: #e2c47f;
        }

        .students-cards {
          display: flex;
          flex-direction: column;
          gap: 13px;
        }

        .student-management-card {
          padding: 19px;
          border: 1px solid #e9dfe3;
          border-radius: 13px;
          background: white;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .student-management-card:hover {
          border-color: #cbd5e1;
          box-shadow: 0 5px 18px rgba(23,43,77,0.045);
        }

        .student-card-top {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 15px;
        }

        .student-identity {
          display: flex;
          align-items: center;
          gap: 13px;
          min-width: 0;
        }

        .student-avatar {
          width: 48px;
          height: 48px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 14px;
          color: #542039;
          background: #f7eef1;
          font-size: 18px;
          font-weight: 800;
        }

        .student-identity-text {
          min-width: 0;
        }

        .student-name-link {
          color: inherit;
          text-decoration: none;
        }

        .student-name-link h3 {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          margin: 0 0 7px;
          color: #391021;
          font-size: 14px;
          font-weight: 800;
        }

        .student-name-link:hover h3 {
          color: #b08c45;
        }

        .student-bell {
          width: 23px;
          height: 23px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          color: #dc2626;
          background: #fff0f0;
        }

        .student-open-icon {
          color: #a2adbc;
          opacity: 0;
          transition: opacity 0.2s;
        }

        .student-name-link:hover .student-open-icon {
          opacity: 1;
        }

        .student-contact {
          display: flex;
          flex-wrap: wrap;
          gap: 7px 15px;
        }

        .student-contact span {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          color: #8290a3;
          font-size: 11px;
          overflow-wrap: anywhere;
        }

        .student-contact svg {
          flex-shrink: 0;
        }

        .student-status {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          padding: 7px 10px;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 800;
        }

        .status-gray {
          color: #68748a;
          background: #f0f2f5;
        }

        .status-blue {
          color: #2873c8;
          background: #eaf3ff;
        }

        .status-green {
          color: #16835c;
          background: #e9f7ef;
        }

        .student-card-details {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
          margin: 18px 0;
          padding: 13px 15px;
          border: 1px solid #edf0f5;
          border-radius: 10px;
          background: #fafbfd;
        }

        .student-detail span {
          display: block;
          margin-bottom: 5px;
          color: #94a0b0;
          font-size: 10px;
        }

        .student-detail strong {
          display: block;
          color: #33445f;
          font-size: 11px;
          font-weight: 750;
          overflow-wrap: anywhere;
        }

        /* GESTION ÉPURÉE DE L'ABONNEMENT */

        .student-subscription {
          margin: 17px 0 12px;
          padding: 14px 15px;
          border: 1px solid #edf0f5;
          border-radius: 11px;
          background: #fafbfd;
        }

        .subscription-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;
        }

        .subscription-heading > span:first-child {
          color: #33445f;
          font-size: 11px;
          font-weight: 800;
        }

        .subscription-hint {
          color: #9aa5b5;
          font-size: 10px;
        }

        .subscription-fields {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        .subscription-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
          min-width: 0;
        }

        .subscription-field label {
          color: #8290a3;
          font-size: 10px;
          font-weight: 650;
        }

        .subscription-field select,
        .amount-input-wrapper {
          width: 100%;
          height: 38px;
          box-sizing: border-box;
          border: 1px solid #e5eaf1;
          border-radius: 8px;
          background: white;
        }

        .subscription-field select {
          padding: 0 10px;
          color: #33445f;
          font-size: 12px;
          outline: none;
        }

        .amount-input-wrapper {
          display: flex;
          align-items: center;
          padding: 0 10px;
        }

        .amount-input-wrapper input {
          width: 100%;
          min-width: 0;
          height: 100%;
          border: 0;
          outline: 0;
          background: transparent;
          color: #33445f;
          font-size: 12px;
        }

        .amount-input-wrapper span {
          color: #94a0b0;
          font-size: 11px;
          font-weight: 700;
        }

        .subscription-field select:focus,
        .amount-input-wrapper:focus-within {
          border-color: #526b91;
        }

        .subscription-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 12px;
          padding-top: 11px;
          border-top: 1px solid #edf0f5;
        }

        .subscription-footer > span {
          color: #94a0b0;
          font-size: 10px;
        }

        .student-card-actions {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          padding-top: 13px;
          border-top: 1px solid #edf0f5;
        }

        .student-card-actions button,
        .subscription-footer button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          min-height: 36px;
          padding: 9px 13px;
          border: 1px solid transparent;
          border-radius: 8px;
          font-size: 11px;
          font-weight: 750;
          cursor: pointer;
          transition: 0.2s;
        }

        .student-card-actions button:disabled,
        .subscription-footer button:disabled {
          opacity: 0.55;
          cursor: not-allowed;
        }

        .student-action-primary {
          color: white;
          background: #391021;
        }

        .student-action-primary:hover:not(:disabled) {
          background: #29466f;
        }

        .subscription-footer .student-action-primary {
          min-height: 34px;
          padding: 8px 12px;
          font-size: 10px;
        }

        .student-action-secondary {
          color: #334b6d;
          border-color: #e1e7ef !important;
          background: #f7f9fc;
        }

        .student-action-secondary:hover {
          background: #f7eef1;
        }

        .student-action-danger {
          margin-left: auto;
          color: #c03939;
          border-color: #f2dada !important;
          background: white;
        }

        .student-action-danger:hover:not(:disabled) {
          background: #fff0f0;
        }

        .student-reminder-note {
          display: flex;
          align-items: center;
          gap: 7px;
          margin-top: 12px;
          padding: 9px 11px;
          border-radius: 8px;
          color: #b42332;
          background: #fff5f5;
          font-size: 10px;
          font-weight: 650;
        }

        .students-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 55px 20px;
          text-align: center;
        }

        .empty-icon {
          width: 58px;
          height: 58px;
          display: grid;
          place-items: center;
          border-radius: 17px;
          color: #8190a5;
          background: #f0f3f7;
        }

        .students-empty h3 {
          margin: 15px 0 6px;
          color: #542039;
          font-size: 15px;
        }

        .students-empty p {
          margin: 0 0 15px;
          color: #8b97a8;
          font-size: 12px;
        }

        .students-empty button {
          padding: 9px 13px;
          border: 0;
          border-radius: 8px;
          color: white;
          background: #391021;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        /* MODALE HISTORIQUE */

        .history-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: rgba(15,23,42,0.58);
          backdrop-filter: blur(4px);
        }

        .history-modal {
          width: 100%;
          max-width: 570px;
          max-height: 82vh;
          overflow-y: auto;
          padding: 24px;
          border-radius: 17px;
          background: white;
          box-shadow: 0 25px 70px rgba(0,0,0,0.2);
        }

        .history-header {
          display: flex;
          align-items: center;
          gap: 13px;
          margin-bottom: 22px;
          padding-bottom: 17px;
          border-bottom: 1px solid #edf0f5;
        }

        .history-heading-icon {
          width: 43px;
          height: 43px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: #542039;
          background: #f7eef1;
        }

        .history-heading-text {
          flex: 1;
          min-width: 0;
        }

        .history-heading-text h2 {
          margin: 0 0 5px;
          color: #391021;
          font-size: 16px;
        }

        .history-heading-text p {
          margin: 0;
          color: #8491a3;
          font-size: 12px;
        }

        .history-close {
          width: 34px;
          height: 34px;
          flex-shrink: 0;
          display: grid;
          place-items: center;
          border: 0;
          border-radius: 9px;
          color: #68748a;
          background: #f1f4f8;
          cursor: pointer;
        }

        .history-list {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }

        .history-item {
          padding: 15px;
          border: 1px solid #e9dfe3;
          border-radius: 11px;
          background: #fbfcfe;
        }

        .history-item-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 13px;
        }

        .history-item-top strong {
          color: #542039;
          font-size: 13px;
        }

        .history-item-top span {
          padding: 5px 8px;
          border-radius: 7px;
          color: #16835c;
          background: #e9f7ef;
          font-size: 10px;
          font-weight: 750;
        }

        .history-dates {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .history-dates div {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 11px;
        }

        .history-note {
          margin: 11px 0 0;
          color: #64748b;
          font-size: 11px;
        }

        .history-item small {
          display: block;
          margin-top: 12px;
          padding-top: 10px;
          border-top: 1px solid #edf0f5;
          color: #9aa5b5;
          font-size: 10px;
        }

        .history-empty,
        .history-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 35px 15px;
          color: #8793a5;
          text-align: center;
          font-size: 12px;
        }

        .history-empty p,
        .history-loading p {
          margin: 0;
        }

        /* RESPONSIVE */

        @media (max-width: 1100px) {
          .students-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .financial-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .students-hero {
            padding: 22px;
          }

          .students-hero h1 {
            font-size: 22px;
          }

          .hero-student-icon {
            width: 49px;
            height: 49px;
          }

          .students-management {
            padding: 16px;
          }

          .student-card-top {
            flex-direction: column;
            align-items: flex-start;
          }

          .student-status {
            margin-left: 61px;
          }

          .student-card-details {
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .students-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 9px;
          }

          .students-stat-card {
            padding: 13px;
          }

          .stat-number {
            font-size: 23px;
          }

          .financial-section {
            padding: 15px;
          }

          .financial-grid {
            grid-template-columns: 1fr;
          }

          .students-list-header {
            align-items: flex-start;
          }

          .students-list-header h2 {
            font-size: 16px;
          }

          .students-refresh {
            padding: 9px;
            font-size: 0;
          }

          .students-refresh svg {
            width: 17px;
            height: 17px;
          }

          .students-filters {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .students-filter {
            justify-content: space-between;
            padding: 9px;
            font-size: 10px;
          }

          .student-management-card {
            padding: 14px;
          }

          .student-contact {
            flex-direction: column;
            gap: 6px;
          }

          .student-card-details {
            grid-template-columns: 1fr 1fr;
          }

          .subscription-fields {
            grid-template-columns: 1fr 1fr;
          }

          .subscription-footer {
            align-items: stretch;
            flex-direction: column;
          }

          .subscription-footer .student-action-primary {
            width: 100%;
          }

          .student-card-actions {
            display: grid;
            grid-template-columns: 1fr 1fr;
          }

          .student-card-actions button {
            width: 100%;
            padding: 9px 7px;
          }

          .student-action-danger {
            margin-left: 0;
          }

          .history-modal {
            padding: 17px;
          }
        }

      `}</style>
    </main>
  )
}


'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
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
  Bell,
  RefreshCw,
  Crown,
  GraduationCap,
  CalendarDays,
  ArrowUpRight,
  Clock,
  CheckCircle2,
  XCircle,
  Activity,
  Target,
} from 'lucide-react'

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from 'recharts'

type Etudiant = {
  id: string
  full_name: string | null
  email: string | null
  level: string | null
  role: string | null
  created_at: string
  is_pro: boolean | null
  pro_until: string | null
  pro_type: string | null
}

type Paiement = {
  id: string
  student_id: string
  amount_dh: number
  payment_method: string
  created_at: string
  cancelled_at: string | null
  cancellation_reason: string | null
}

type Historique = {
  id: string
  student_id: string
  operation: string
  subscription_type: string
  duration_days: number
  created_at: string
  cancelled_at: string | null
}

type Periode = '6' | '12' | 'tout'

const couleurs = [
  '#6366f1',
  '#06b6d4',
  '#10b981',
  '#f59e0b',
  '#ec4899',
  '#8b5cf6',
]

const formatDH = (montant: number) =>
  new Intl.NumberFormat('fr-MA', {
    maximumFractionDigits: 0,
  }).format(montant) + ' DH'

const formatNombre = (nombre: number) =>
  new Intl.NumberFormat('fr-FR').format(nombre)

const nomMois = (date: Date) =>
  date.toLocaleDateString('fr-FR', { month: 'short' })

function debutDuMois(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

function estAbonnementActif(etudiant: Etudiant, maintenant: number) {
  if (!etudiant.is_pro) return false
  if (!etudiant.pro_until) return true
  return new Date(etudiant.pro_until).getTime() > maintenant
}

export default function StatistiquesPage() {
  const [etudiants, setEtudiants] = useState<Etudiant[]>([])
  const [paiements, setPaiements] = useState<Paiement[]>([])
  const [historique, setHistorique] = useState<Historique[]>([])
  const [periode, setPeriode] = useState<Periode>('6')
  const [chargement, setChargement] = useState(true)
  const [actualisation, setActualisation] = useState(false)
  const [erreur, setErreur] = useState('')

  async function chargerStatistiques() {
    setErreur('')
    setActualisation(true)

    const [etudiantsResult, paiementsResult, historiqueResult] =
      await Promise.all([
        supabase
          .from('profiles')
          .select(
            'id, full_name, email, level, role, created_at, is_pro, pro_until, pro_type'
          )
          .order('created_at', { ascending: true }),

        supabase
          .from('pro_payments')
          .select(
            'id, student_id, amount_dh, payment_method, created_at, cancelled_at, cancellation_reason'
          )
          .order('created_at', { ascending: true }),

        supabase
          .from('pro_subscription_history')
          .select(
            'id, student_id, operation, subscription_type, duration_days, created_at, cancelled_at'
          )
          .order('created_at', { ascending: true }),
      ])

    if (etudiantsResult.error) {
      setErreur(
        'Impossible de charger les étudiants : ' +
          etudiantsResult.error.message
      )
    } else if (paiementsResult.error) {
      setErreur(
        'Impossible de charger les paiements : ' +
          paiementsResult.error.message
      )
    } else if (historiqueResult.error) {
      setErreur(
        'Impossible de charger les abonnements : ' +
          historiqueResult.error.message
      )
    } else {
      setEtudiants(
        ((etudiantsResult.data || []) as Etudiant[]).filter(
          (e) => e.role !== 'admin'
        )
      )
      setPaiements((paiementsResult.data || []) as Paiement[])
      setHistorique((historiqueResult.data || []) as Historique[])
    }

    setChargement(false)
    setActualisation(false)
  }

  useEffect(() => {
    chargerStatistiques()
  }, [])

  const donnees = useMemo(() => {
    const maintenant = new Date()
    const maintenantMs = maintenant.getTime()

    const abonnementsActifs = etudiants.filter((e) =>
      estAbonnementActif(e, maintenantMs)
    )

    const abonnementsExpires = etudiants.filter(
      (e) =>
        e.is_pro === true &&
        e.pro_until !== null &&
        new Date(e.pro_until).getTime() <= maintenantMs
    )

    const etudiantsGratuits = etudiants.length - abonnementsActifs.length

    const paiementsValides = paiements.filter(
      (p) => p.cancelled_at === null
    )
    const paiementsAnnules = paiements.filter(
      (p) => p.cancelled_at !== null
    )

    const moisSelectionnes =
      periode === 'tout' ? null : Number(periode)

    const dateLimite =
      moisSelectionnes === null
        ? null
        : new Date(
            maintenant.getFullYear(),
            maintenant.getMonth() - moisSelectionnes + 1,
            1
          )

    const dansPeriode = (dateString: string) => {
      if (!dateLimite) return true
      return new Date(dateString) >= dateLimite
    }

    const paiementsPeriode = paiementsValides.filter((p) =>
      dansPeriode(p.created_at)
    )

    const paiementsAnnulesPeriode = paiementsAnnules.filter((p) =>
      dansPeriode(p.created_at)
    )

    const chiffreAffaires = paiementsPeriode.reduce(
      (total, p) => total + Number(p.amount_dh || 0),
      0
    )

    const panierMoyen =
      paiementsPeriode.length > 0
        ? chiffreAffaires / paiementsPeriode.length
        : 0

    const inscriptionsPeriode = etudiants.filter((e) =>
      dansPeriode(e.created_at)
    )

    const historiqueValide = historique.filter(
      (h) => h.cancelled_at === null
    )

    const activations = historiqueValide.filter(
      (h) => h.operation === 'activation'
    )

    const renouvellements = historiqueValide.filter(
      (h) => h.operation === 'renewal'
    )

    const nombreMois =
      periode === 'tout'
        ? Math.max(
            6,
            Math.min(
              36,
              Math.ceil(
                (maintenant.getTime() -
                  (etudiants.length
                    ? new Date(etudiants[0].created_at).getTime()
                    : maintenant.getTime())) /
                  (1000 * 60 * 60 * 24 * 30)
              ) + 1
            )
          )
        : Number(periode)

    const evolution = []

    for (let i = nombreMois - 1; i >= 0; i--) {
      const date = new Date(
        maintenant.getFullYear(),
        maintenant.getMonth() - i,
        1
      )

      const annee = date.getFullYear()
      const mois = date.getMonth()

      const inscriptions = etudiants.filter((e) => {
        const d = new Date(e.created_at)
        return d.getFullYear() === annee && d.getMonth() === mois
      }).length

      const recettes = paiementsValides
        .filter((p) => {
          const d = new Date(p.created_at)
          return d.getFullYear() === annee && d.getMonth() === mois
        })
        .reduce((total, p) => total + Number(p.amount_dh || 0), 0)

      const nouveauxAbonnements = historiqueValide.filter((h) => {
        const d = new Date(h.created_at)
        return (
          d.getFullYear() === annee &&
          d.getMonth() === mois &&
          (h.operation === 'activation' || h.operation === 'renewal')
        )
      }).length

      evolution.push({
        mois: nomMois(date),
        inscriptions,
        recettes,
        abonnements: nouveauxAbonnements,
      })
    }

    const niveaux = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2']

    const repartitionNiveaux = niveaux
      .map((niveau) => ({
        name: niveau,
        value: etudiants.filter(
          (e) => (e.level || '').toUpperCase() === niveau
        ).length,
      }))
      .filter((item) => item.value > 0)

    const repartitionPro = [
      { name: 'PRO actif', value: abonnementsActifs.length },
      { name: 'Gratuit / expiré', value: etudiantsGratuits },
    ].filter((item) => item.value > 0)

    const typesAbonnement = [
      'mensuel',
      'trimestriel',
      'semestriel',
      'annuel',
    ].map((type) => ({
      name: type.charAt(0).toUpperCase() + type.slice(1),
      value: abonnementsActifs.filter(
        (e) => (e.pro_type || '').toLowerCase() === type
      ).length,
    }))

    const totalMembres = etudiants.length
    const tauxConversion =
      totalMembres > 0
        ? (abonnementsActifs.length / totalMembres) * 100
        : 0

    const inscriptionsMois = etudiants.filter((e) => {
      const d = new Date(e.created_at)
      return (
        d.getMonth() === maintenant.getMonth() &&
        d.getFullYear() === maintenant.getFullYear()
      )
    }).length

    const recetteMois = paiementsValides
      .filter((p) => {
        const d = new Date(p.created_at)
        return (
          d.getMonth() === maintenant.getMonth() &&
          d.getFullYear() === maintenant.getFullYear()
        )
      })
      .reduce((total, p) => total + Number(p.amount_dh || 0), 0)

    const recettesMoisPrecedent = paiementsValides
      .filter((p) => {
        const d = new Date(p.created_at)
        const precedent = new Date(
          maintenant.getFullYear(),
          maintenant.getMonth() - 1,
          1
        )
        return (
          d.getMonth() === precedent.getMonth() &&
          d.getFullYear() === precedent.getFullYear()
        )
      })
      .reduce((total, p) => total + Number(p.amount_dh || 0), 0)

    const evolutionRecettes =
      recettesMoisPrecedent > 0
        ? ((recetteMois - recettesMoisPrecedent) /
            recettesMoisPrecedent) *
          100
        : null

    return {
      totalMembres,
      abonnementsActifs,
      abonnementsExpires,
      etudiantsGratuits,
      paiementsValides,
      paiementsAnnules,
      paiementsPeriode,
      paiementsAnnulesPeriode,
      chiffreAffaires,
      panierMoyen,
      inscriptionsPeriode,
      activations,
      renouvellements,
      evolution,
      repartitionNiveaux,
      repartitionPro,
      typesAbonnement,
      tauxConversion,
      inscriptionsMois,
      recetteMois,
      evolutionRecettes,
      dateLimite,
    }
  }, [etudiants, paiements, historique, periode])

  const dateTexte = new Date().toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  if (chargement) {
    return (
      <div className="stats-loading">
        <div className="stats-loader" />
        <p>Préparation de vos statistiques...</p>
      </div>
    )
  }

  return (
    <div className="admin-layout">
      <aside className="admin-sidebar">
        <Link href="/administration" className="admin-brand">
          <span className="brand-mark">
            <GraduationCap size={23} />
          </span>
          <span>
            <strong>Deutsch Erfolg</strong>
            <small>Administration</small>
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
          <Link href="/administration/etudiants" className="admin-menu-link">
            <Users size={19} />
            <span>Étudiants</span>
          </Link>
          <Link href="/administration/paiements" className="admin-menu-link">
            <Wallet size={19} />
            <span>Paiements</span>
          </Link>
          <Link
            href="/administration/statistiques"
            className="admin-menu-link active"
          >
            <BarChart3 size={19} />
            <span>Statistiques</span>
          </Link>
          <Link href="/administration/cours" className="admin-menu-link">
            <BookOpen size={19} />
            <span>Cours</span>
          </Link>
          <Link href="/administration/documents" className="admin-menu-link">
            <FileText size={19} />
            <span>Documents PDF</span>
          </Link>
          <Link href="/administration/audios" className="admin-menu-link">
            <FileAudio size={19} />
            <span>Audios</span>
          </Link>
          <Link href="/administration/parametres" className="admin-menu-link">
            <Settings size={19} />
            <span>Paramètres</span>
          </Link>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <ShieldCheck size={18} />
            <div>
              <strong>Espace sécurisé</strong>
              <small>Administration</small>
            </div>
          </div>
          <Link href="/" className="admin-back-home">
            Retour au site
          </Link>
        </div>
      </aside>

      <main className="admin-main">
        <header className="admin-topbar">
          <div className="stats-topbar-title">
            <span className="stats-mobile-icon">
              <GraduationCap size={22} />
            </span>
            <span>Statistiques</span>
          </div>
          <div className="admin-topbar-right">
            <span className="admin-demo-label">ESPACE ADMIN</span>
            <div className="admin-profile">
              <span className="admin-profile-avatar">A</span>
              <span>Administrateur</span>
            </div>
          </div>
        </header>

        <div className="admin-content stats-content">
          <section className="stats-heading">
            <div>
              <div className="admin-eyebrow">ANALYSE & PERFORMANCE</div>
              <h1>Vue statistique</h1>
              <p>
                Pilotez Deutsch Erfolg grâce aux indicateurs de votre
                plateforme.
              </p>
            </div>
            <button
              className="stats-refresh"
              onClick={chargerStatistiques}
              disabled={actualisation}
            >
              <RefreshCw
                size={16}
                className={actualisation ? 'stats-spinning' : ''}
              />
              Actualiser
            </button>
          </section>

          {erreur && (
            <div className="stats-error">
              <XCircle size={18} />
              <span>{erreur}</span>
            </div>
          )}

          <section className="stats-period-row">
            <div className="stats-date">
              <CalendarDays size={17} />
              Données au {dateTexte}
            </div>
            <div className="stats-period-filter">
              <button
                className={periode === '6' ? 'selected' : ''}
                onClick={() => setPeriode('6')}
              >
                6 mois
              </button>
              <button
                className={periode === '12' ? 'selected' : ''}
                onClick={() => setPeriode('12')}
              >
                12 mois
              </button>
              <button
                className={periode === 'tout' ? 'selected' : ''}
                onClick={() => setPeriode('tout')}
              >
                Tout
              </button>
            </div>
          </section>

          <section className="stats-kpi-grid">
            <article className="stats-kpi-card">
              <div className="stats-kpi-top">
                <span>Étudiants inscrits</span>
                <span className="stats-kpi-icon purple">
                  <Users size={20} />
                </span>
              </div>
              <strong>{formatNombre(donnees.totalMembres)}</strong>
              <small>
                <span className="stats-kpi-neutral">
                  +{formatNombre(donnees.inscriptionsMois)}
                </span>
                nouvelles inscriptions ce mois
              </small>
            </article>

            <article className="stats-kpi-card">
              <div className="stats-kpi-top">
                <span>Abonnements PRO actifs</span>
                <span className="stats-kpi-icon gold">
                  <Crown size={20} />
                </span>
              </div>
              <strong>{formatNombre(donnees.abonnementsActifs.length)}</strong>
              <small>
                {formatNombre(donnees.etudiantsGratuits)} étudiants gratuits
                ou expirés
              </small>
            </article>

            <article className="stats-kpi-card">
              <div className="stats-kpi-top">
                <span>Chiffre d'affaires</span>
                <span className="stats-kpi-icon green">
                  <Wallet size={20} />
                </span>
              </div>
              <strong>{formatDH(donnees.chiffreAffaires)}</strong>
              <small>
                {formatNombre(donnees.paiementsPeriode.length)} paiements
                valides sur la période
              </small>
            </article>

            <article className="stats-kpi-card">
              <div className="stats-kpi-top">
                <span>Conversion PRO</span>
                <span className="stats-kpi-icon blue">
                  <Target size={20} />
                </span>
              </div>
              <strong>{donnees.tauxConversion.toFixed(1)}%</strong>
              <small>Part des étudiants avec PRO actif</small>
            </article>
          </section>

          <section className="stats-main-grid">
            <article className="stats-panel stats-panel-large">
              <div className="stats-panel-heading">
                <div>
                  <h2>Évolution des inscriptions</h2>
                  <p>Nombre de nouveaux étudiants par mois</p>
                </div>
                <span className="stats-panel-icon purple">
                  <TrendingUp size={19} />
                </span>
              </div>
              <div className="stats-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={donnees.evolution}>
                    <defs>
                      <linearGradient
                        id="inscriptionsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#6366f1"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="95%"
                          stopColor="#6366f1"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e9edf3"
                    />
                    <XAxis
                      dataKey="mois"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#8a94a6', fontSize: 12 }}
                    />
                    <YAxis
                      allowDecimals={false}
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#8a94a6', fontSize: 12 }}
                    />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="inscriptions"
                      name="Inscriptions"
                      stroke="#6366f1"
                      strokeWidth={3}
                      fill="url(#inscriptionsGradient)"
                      activeDot={{ r: 6 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="stats-panel">
              <div className="stats-panel-heading">
                <div>
                  <h2>Statut des étudiants</h2>
                  <p>Répartition PRO et gratuit</p>
                </div>
                <span className="stats-panel-icon gold">
                  <Crown size={19} />
                </span>
              </div>
              <div className="stats-donut">
                {donnees.repartitionPro.length > 0 ? (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={donnees.repartitionPro}
                        dataKey="value"
                        nameKey="name"
                        innerRadius={65}
                        outerRadius={94}
                        paddingAngle={4}
                        stroke="none"
                      >
                        <Cell fill="#d9a441" />
                        <Cell fill="#e6eaf0" />
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                ) : (
                  <div className="stats-chart-empty">Aucune donnée</div>
                )}
                <div className="stats-donut-center">
                  <strong>{donnees.totalMembres}</strong>
                  <span>Étudiants</span>
                </div>
              </div>
              <div className="stats-legend">
                <div>
                  <span className="stats-dot gold-dot" />
                  <span>PRO actif</span>
                  <strong>{donnees.abonnementsActifs.length}</strong>
                </div>
                <div>
                  <span className="stats-dot gray-dot" />
                  <span>Gratuit / expiré</span>
                  <strong>{donnees.etudiantsGratuits}</strong>
                </div>
              </div>
            </article>
          </section>

          <section className="stats-main-grid">
            <article className="stats-panel stats-panel-large">
              <div className="stats-panel-heading">
                <div>
                  <h2>Évolution financière</h2>
                  <p>Recettes encaissées en dirhams (DH)</p>
                </div>
                <span className="stats-panel-icon green">
                  <Wallet size={19} />
                </span>
              </div>
              <div className="stats-chart">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={donnees.evolution}>
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#e9edf3"
                    />
                    <XAxis
                      dataKey="mois"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#8a94a6', fontSize: 12 }}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: '#8a94a6', fontSize: 12 }}
                    />
                    <Tooltip
                      formatter={(value) => [
                        formatDH(Number(value)),
                        'Recettes',
                      ]}
                    />
                    <Bar
                      dataKey="recettes"
                      name="Recettes"
                      fill="#10b981"
                      radius={[6, 6, 0, 0]}
                      maxBarSize={42}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="stats-financial-summary">
                <div>
                  <span>Recettes ce mois</span>
                  <strong>{formatDH(donnees.recetteMois)}</strong>
                </div>
                <div>
                  <span>Évolution vs mois précédent</span>
                  <strong
                    className={
                      donnees.evolutionRecettes === null
                        ? ''
                        : donnees.evolutionRecettes >= 0
                          ? 'positive'
                          : 'negative'
                    }
                  >
                    {donnees.evolutionRecettes === null
                      ? '—'
                      : `${donnees.evolutionRecettes >= 0 ? '+' : ''}${donnees.evolutionRecettes.toFixed(1)}%`}
                  </strong>
                </div>
              </div>
            </article>

            <article className="stats-panel">
              <div className="stats-panel-heading">
                <div>
                  <h2>Niveaux linguistiques</h2>
                  <p>Répartition des étudiants</p>
                </div>
                <span className="stats-panel-icon blue">
                  <GraduationCap size={19} />
                </span>
              </div>
              {donnees.repartitionNiveaux.length > 0 ? (
                <div className="stats-level-chart">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={donnees.repartitionNiveaux}
                      layout="vertical"
                      margin={{ left: 0, right: 12, top: 8, bottom: 8 }}
                    >
                      <CartesianGrid
                        strokeDasharray="3 3"
                        horizontal={false}
                        stroke="#e9edf3"
                      />
                      <XAxis
                        type="number"
                        allowDecimals={false}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#8a94a6', fontSize: 11 }}
                      />
                      <YAxis
                        type="category"
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#596579', fontSize: 12 }}
                        width={34}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="value"
                        name="Étudiants"
                        fill="#6366f1"
                        radius={[0, 6, 6, 0]}
                        maxBarSize={24}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              ) : (
                <div className="stats-empty">
                  Aucun niveau renseigné pour le moment.
                </div>
              )}
            </article>
          </section>

          <section className="stats-bottom-grid">
            <article className="stats-panel">
              <div className="stats-panel-heading">
                <div>
                  <h2>Activité des abonnements</h2>
                  <p>Activations et renouvellements enregistrés</p>
                </div>
                <span className="stats-panel-icon purple">
                  <Activity size={19} />
                </span>
              </div>
              <div className="stats-activity-list">
                <div className="stats-activity-item">
                  <span className="stats-activity-icon green">
                    <CheckCircle2 size={19} />
                  </span>
                  <div>
                    <strong>Activations</strong>
                    <small>Nouveaux abonnements non annulés</small>
                  </div>
                  <b>{donnees.activations.length}</b>
                </div>
                <div className="stats-activity-item">
                  <span className="stats-activity-icon blue">
                    <RefreshCw size={19} />
                  </span>
                  <div>
                    <strong>Renouvellements</strong>
                    <small>Prolongations non annulées</small>
                  </div>
                  <b>{donnees.renouvellements.length}</b>
                </div>
                <div className="stats-activity-item">
                  <span className="stats-activity-icon red">
                    <XCircle size={19} />
                  </span>
                  <div>
                    <strong>Abonnements annulés</strong>
                    <small>Opérations annulées dans l'historique</small>
                  </div>
                  <b>
                    {
                      historique.filter((h) => h.cancelled_at !== null)
                        .length
                    }
                  </b>
                </div>
                <div className="stats-activity-item">
                  <span className="stats-activity-icon orange">
                    <Clock size={19} />
                  </span>
                  <div>
                    <strong>Abonnements expirés</strong>
                    <small>Étudiants dont le PRO est arrivé à échéance</small>
                  </div>
                  <b>{donnees.abonnementsExpires.length}</b>
                </div>
              </div>
            </article>

            <article className="stats-panel">
              <div className="stats-panel-heading">
                <div>
                  <h2>Résumé financier</h2>
                  <p>Situation sur la période sélectionnée</p>
                </div>
                <span className="stats-panel-icon green">
                  <CreditCard size={19} />
                </span>
              </div>
              <div className="stats-financial-list">
                <div>
                  <span>Recettes encaissées</span>
                  <strong>{formatDH(donnees.chiffreAffaires)}</strong>
                </div>
                <div>
                  <span>Paiements validés</span>
                  <strong>{donnees.paiementsPeriode.length}</strong>
                </div>
                <div>
                  <span>Panier moyen</span>
                  <strong>{formatDH(donnees.panierMoyen)}</strong>
                </div>
                <div>
                  <span>Paiements annulés</span>
                  <strong className="negative">
                    {donnees.paiementsAnnulesPeriode.length}
                  </strong>
                </div>
                <div>
                  <span>Inscriptions sur la période</span>
                  <strong>{donnees.inscriptionsPeriode.length}</strong>
                </div>
              </div>
              <div className="stats-financial-note">
                <ShieldCheck size={16} />
                Les paiements annulés sont exclus du chiffre d'affaires.
              </div>
            </article>
          </section>

          <footer className="stats-footer">
            <span>Deutsch Erfolg · Tableau de bord statistique</span>
            <span>Données issues de Supabase</span>
          </footer>
        </div>
      </main>

      <style jsx global>{`
        .stats-content {
          max-width: 1500px;
          margin: 0 auto;
          width: 100%;
        }

        .stats-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          margin-bottom: 26px;
        }

        .stats-heading h1 {
          font-size: 29px;
          letter-spacing: -1px;
          margin: 7px 0;
          color: #172033;
          font-weight: 750;
        }

        .stats-heading p {
          color: #8490a2;
          margin: 0;
          font-size: 14px;
        }

        .stats-refresh {
          border: 1px solid #e5e9f0;
          background: white;
          border-radius: 10px;
          padding: 11px 15px;
          display: flex;
          align-items: center;
          gap: 9px;
          color: #344054;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
        }

        .stats-refresh:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .stats-spinning {
          animation: statsSpin 1s linear infinite;
        }

        @keyframes statsSpin {
          to {
            transform: rotate(360deg);
          }
        }

        .stats-period-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .stats-date {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #8490a2;
          font-size: 13px;
        }

        .stats-period-filter {
          display: flex;
          gap: 4px;
          padding: 4px;
          background: #f0f2f6;
          border-radius: 10px;
        }

        .stats-period-filter button {
          border: 0;
          padding: 8px 14px;
          border-radius: 7px;
          color: #778196;
          font-size: 12px;
          font-weight: 650;
          background: transparent;
          cursor: pointer;
        }

        .stats-period-filter button.selected {
          background: white;
          color: #4f46e5;
          box-shadow: 0 1px 4px #18223012;
        }

        .stats-kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .stats-kpi-card {
          background: white;
          border: 1px solid #edf0f4;
          border-radius: 14px;
          padding: 19px;
          min-width: 0;
          box-shadow: 0 3px 12px #18223005;
        }

        .stats-kpi-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          color: #7b8799;
          font-size: 12px;
          font-weight: 600;
        }

        .stats-kpi-icon,
        .stats-panel-icon {
          width: 39px;
          height: 39px;
          border-radius: 11px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stats-kpi-icon.purple,
        .stats-panel-icon.purple {
          background: #eeedff;
          color: #6366f1;
        }

        .stats-kpi-icon.gold,
        .stats-panel-icon.gold {
          background: #fff5df;
          color: #c18a24;
        }

        .stats-kpi-icon.green,
        .stats-panel-icon.green {
          background: #e5f8ef;
          color: #0c9b65;
        }

        .stats-kpi-icon.blue,
        .stats-panel-icon.blue {
          background: #e8f3ff;
          color: #3787d8;
        }

        .stats-kpi-card > strong {
          display: block;
          color: #172033;
          font-size: 27px;
          font-weight: 750;
          letter-spacing: -0.8px;
          margin: 13px 0 8px;
          overflow-wrap: anywhere;
        }

        .stats-kpi-card > small {
          display: block;
          color: #96a0af;
          font-size: 11px;
          line-height: 1.6;
        }

        .stats-kpi-neutral {
          color: #6366f1;
          font-weight: 750;
          margin-right: 4px;
        }

        .stats-main-grid,
        .stats-bottom-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.55fr) minmax(280px, 1fr);
          gap: 18px;
          margin-bottom: 18px;
        }

        .stats-panel {
          background: white;
          border: 1px solid #edf0f4;
          border-radius: 14px;
          padding: 21px;
          min-width: 0;
          box-shadow: 0 3px 12px #18223005;
        }

        .stats-panel-heading {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 12px;
          margin-bottom: 18px;
        }

        .stats-panel-heading h2 {
          font-size: 15px;
          color: #202b3c;
          margin: 0 0 6px;
          font-weight: 720;
        }

        .stats-panel-heading p {
          color: #98a1af;
          font-size: 11px;
          margin: 0;
        }

        .stats-chart {
          height: 255px;
          width: 100%;
        }

        .stats-donut {
          height: 210px;
          position: relative;
        }

        .stats-donut-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          pointer-events: none;
        }

        .stats-donut-center strong {
          font-size: 28px;
          color: #202b3c;
          font-weight: 750;
        }

        .stats-donut-center span {
          color: #98a1af;
          font-size: 11px;
          margin-top: 2px;
        }

        .stats-legend {
          display: grid;
          gap: 12px;
          margin-top: 5px;
        }

        .stats-legend > div {
          display: flex;
          align-items: center;
          gap: 9px;
          font-size: 12px;
          color: #778196;
        }

        .stats-legend strong {
          margin-left: auto;
          color: #263247;
          font-size: 13px;
        }

        .stats-dot {
          height: 9px;
          width: 9px;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .gold-dot {
          background: #d9a441;
        }

        .gray-dot {
          background: #dce1e9;
        }

        .stats-financial-summary {
          display: flex;
          gap: 25px;
          flex-wrap: wrap;
          padding-top: 14px;
          margin-top: 8px;
          border-top: 1px solid #f0f2f5;
        }

        .stats-financial-summary > div {
          display: grid;
          gap: 5px;
        }

        .stats-financial-summary span {
          color: #929cab;
          font-size: 11px;
        }

        .stats-financial-summary strong {
          color: #273449;
          font-size: 15px;
        }

        .stats-financial-summary strong.positive {
          color: #0c9b65;
        }

        .stats-financial-summary strong.negative,
        .stats-financial-list strong.negative {
          color: #dc5555;
        }

        .stats-level-chart {
          height: 245px;
        }

        .stats-empty,
        .stats-chart-empty {
          display: flex;
          justify-content: center;
          align-items: center;
          color: #98a1af;
          font-size: 12px;
          height: 190px;
        }

        .stats-activity-list {
          display: grid;
        }

        .stats-activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 13px 0;
          border-bottom: 1px solid #f0f2f5;
        }

        .stats-activity-item:last-child {
          border-bottom: 0;
        }

        .stats-activity-icon {
          width: 36px;
          height: 36px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .stats-activity-icon.green {
          color: #0c9b65;
          background: #e5f8ef;
        }

        .stats-activity-icon.blue {
          color: #3787d8;
          background: #e8f3ff;
        }

        .stats-activity-icon.red {
          color: #dc5555;
          background: #fff0f0;
        }

        .stats-activity-icon.orange {
          color: #c18a24;
          background: #fff5df;
        }

        .stats-activity-item > div {
          display: grid;
          gap: 4px;
          min-width: 0;
        }

        .stats-activity-item strong {
          color: #344054;
          font-size: 12px;
        }

        .stats-activity-item small {
          color: #98a1af;
          font-size: 10px;
        }

        .stats-activity-item > b {
          margin-left: auto;
          font-size: 17px;
          color: #263247;
        }

        .stats-financial-list {
          display: grid;
          gap: 0;
        }

        .stats-financial-list > div {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          padding: 13px 0;
          border-bottom: 1px solid #f0f2f5;
        }

        .stats-financial-list span {
          color: #7d899b;
          font-size: 12px;
        }

        .stats-financial-list strong {
          color: #263247;
          font-size: 13px;
          white-space: nowrap;
        }

        .stats-financial-note {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          margin-top: 16px;
          padding: 12px;
          border-radius: 9px;
          background: #f0faf5;
          color: #28845e;
          font-size: 10px;
          line-height: 1.5;
        }

        .stats-footer {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          color: #a1aab7;
          font-size: 10px;
          padding: 14px 2px 4px;
        }

        .stats-error {
          display: flex;
          align-items: center;
          gap: 10px;
          background: #fff1f1;
          color: #c63f3f;
          border: 1px solid #ffdada;
          border-radius: 10px;
          padding: 13px 15px;
          font-size: 12px;
          margin-bottom: 18px;
        }

        .stats-loading {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 15px;
          color: #8490a2;
          font-size: 13px;
        }

        .stats-loader {
          height: 35px;
          width: 35px;
          border: 3px solid #e7e9ff;
          border-top-color: #6366f1;
          border-radius: 50%;
          animation: statsSpin 0.8s linear infinite;
        }

        .stats-topbar-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 650;
          color: #263247;
        }

        .stats-mobile-icon {
          display: none;
        }

        @media (max-width: 1100px) {
          .stats-kpi-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .stats-main-grid,
          .stats-bottom-grid {
            grid-template-columns: minmax(0, 1.2fr) minmax(260px, 1fr);
          }
        }

        @media (max-width: 760px) {
          .stats-heading {
            align-items: flex-start;
          }

          .stats-heading h1 {
            font-size: 24px;
          }

          .stats-main-grid,
          .stats-bottom-grid {
            grid-template-columns: 1fr;
          }

          .stats-period-row {
            align-items: flex-start;
            flex-direction: column;
          }

          .stats-period-filter {
            width: 100%;
          }

          .stats-period-filter button {
            flex: 1;
          }

          .stats-chart {
            height: 230px;
          }

          .stats-kpi-card {
            padding: 15px;
          }

          .stats-kpi-card > strong {
            font-size: 23px;
          }

          .stats-topbar-title {
            font-size: 13px;
          }

          .stats-mobile-icon {
            display: inline-flex;
          }
        }

        @media (max-width: 430px) {
          .stats-kpi-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .stats-kpi-top {
            font-size: 10px;
          }

          .stats-kpi-icon {
            width: 32px;
            height: 32px;
          }

          .stats-kpi-card > strong {
            font-size: 20px;
          }

          .stats-footer {
            flex-direction: column;
          }

          .stats-refresh {
            padding: 9px;
            font-size: 11px;
          }
        }
      `}</style>
    </div>
  )
}

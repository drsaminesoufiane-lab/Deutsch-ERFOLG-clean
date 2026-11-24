
'use client'

import { useEffect, useMemo, useState } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'
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
  Bell,
  CalendarDays,
  CheckCircle2,
  XCircle,
  ArrowUpRight,
  Banknote,
  Clock,
  Filter,
} from 'lucide-react'

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

type Etudiant = {
  id: string
  full_name: string | null
  email: string | null
}

export default function PaiementsPage() {
  const [paiements, setPaiements] = useState<Paiement[]>([])
  const [etudiants, setEtudiants] = useState<Etudiant[]>([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')
  const [recherche, setRecherche] = useState('')
  const [filtreStatut, setFiltreStatut] = useState('tous')
  const [filtreMois, setFiltreMois] = useState('tous')

  async function chargerPaiements() {
    setChargement(true)
    setErreur('')

    const [paiementsResult, etudiantsResult] = await Promise.all([
      supabase
        .from('pro_payments')
        .select(
          'id, student_id, amount_dh, payment_method, payment_note, created_at, cancelled_at, cancellation_reason, cancelled_by, subscription_history_id'
        )
        .order('created_at', { ascending: false }),

      supabase
        .from('profiles')
        .select('id, full_name, email')
        .eq('role', 'student'),
    ])

    if (paiementsResult.error) {
      setErreur(paiementsResult.error.message)
    } else {
      setPaiements((paiementsResult.data || []) as Paiement[])
    }

    if (etudiantsResult.error) {
      setErreur(etudiantsResult.error.message)
    } else {
      setEtudiants((etudiantsResult.data || []) as Etudiant[])
    }

    setChargement(false)
  }

  useEffect(() => {
    chargerPaiements()
  }, [])

  const paiementsValides = useMemo(
    () => paiements.filter((p) => !p.cancelled_at),
    [paiements]
  )

  const chiffreAffaires = paiementsValides.reduce(
    (total, paiement) => total + Number(paiement.amount_dh),
    0
  )

  const maintenant = new Date()

  const paiementsMois = paiementsValides.filter((paiement) => {
    const date = new Date(paiement.created_at)

    return (
      date.getMonth() === maintenant.getMonth() &&
      date.getFullYear() === maintenant.getFullYear()
    )
  })

  const chiffreAffairesMois = paiementsMois.reduce(
    (total, paiement) => total + Number(paiement.amount_dh),
    0
  )

  const panierMoyen =
    paiementsValides.length > 0
      ? chiffreAffaires / paiementsValides.length
      : 0

  const paiementsFiltres = useMemo(() => {
    return paiements.filter((paiement) => {
      const etudiant = etudiants.find(
        (e) => e.id === paiement.student_id
      )

      const texte =
        `${etudiant?.full_name || ''} ${etudiant?.email || ''}`.toLowerCase()

      const correspondRecherche = texte.includes(
        recherche.toLowerCase().trim()
      )

      const correspondStatut =
        filtreStatut === 'tous' ||
        (filtreStatut === 'valides' && !paiement.cancelled_at) ||
        (filtreStatut === 'annules' && !!paiement.cancelled_at)

      const date = new Date(paiement.created_at)
      const mois = `${date.getFullYear()}-${String(
        date.getMonth() + 1
      ).padStart(2, '0')}`

      const correspondMois =
        filtreMois === 'tous' || filtreMois === mois

      return (
        correspondRecherche &&
        correspondStatut &&
        correspondMois
      )
    })
  }, [paiements, etudiants, recherche, filtreStatut, filtreMois])

  const moisDisponibles = Array.from(
    new Set(
      paiements.map((p) => {
        const date = new Date(p.created_at)
        return `${date.getFullYear()}-${String(
          date.getMonth() + 1
        ).padStart(2, '0')}`
      })
    )
  ).sort((a, b) => b.localeCompare(a))

  function formaterMois(mois: string) {
    const [annee, numeroMois] = mois.split('-')
    const date = new Date(Number(annee), Number(numeroMois) - 1, 1)

    return date.toLocaleDateString('fr-FR', {
      month: 'long',
      year: 'numeric',
    })
  }

  function formaterMontant(montant: number) {
    return Number(montant).toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
  }

  return (
    <main className="admin-layout">
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

          <Link href="/administration/etudiants" className="admin-menu-link">
            <Users size={19} />
            <span>Étudiants</span>
          </Link>

          <Link
            href="/administration/paiements"
            className="admin-menu-link active"
          >
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
            <span>Gestion financière</span>
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

        <div className="admin-content payments-page">
          <section className="payments-heading">
            <div>
              <div className="admin-eyebrow">
                ESPACE DE GESTION
              </div>
              <h1>Gestion des paiements</h1>
              <p>
                Suivez les transactions et les recettes des abonnements PRO.
              </p>
            </div>

            <button
              className="payments-refresh"
              onClick={chargerPaiements}
              disabled={chargement}
            >
              <RefreshCw
                size={16}
                className={chargement ? 'refresh-spinning' : ''}
              />
              Actualiser
            </button>
          </section>

          {erreur && (
            <div className="payments-error">
              <XCircle size={19} />
              <div>
                <strong>Une erreur est survenue</strong>
                <p>{erreur}</p>
              </div>
            </div>
          )}

          <section className="payments-stats">
            <article className="payment-stat-card">
              <div className="payment-stat-top">
                <span>Chiffre d'affaires total</span>
                <div className="payment-stat-icon purple">
                  <Wallet size={20} />
                </div>
              </div>
              <strong>{formaterMontant(chiffreAffaires)} DH</strong>
              <small>
                <TrendingUp size={14} />
                Recettes réellement encaissées
              </small>
            </article>

            <article className="payment-stat-card">
              <div className="payment-stat-top">
                <span>Recettes du mois</span>
                <div className="payment-stat-icon blue">
                  <Banknote size={20} />
                </div>
              </div>
              <strong>{formaterMontant(chiffreAffairesMois)} DH</strong>
              <small>
                <CalendarDays size={14} />
                {maintenant.toLocaleDateString('fr-FR', {
                  month: 'long',
                  year: 'numeric',
                })}
              </small>
            </article>

            <article className="payment-stat-card">
              <div className="payment-stat-top">
                <span>Paiements validés</span>
                <div className="payment-stat-icon green">
                  <CreditCard size={20} />
                </div>
              </div>
              <strong>{paiementsValides.length}</strong>
              <small>
                <CheckCircle2 size={14} />
                Transactions comptabilisées
              </small>
            </article>

            <article className="payment-stat-card">
              <div className="payment-stat-top">
                <span>Panier moyen</span>
                <div className="payment-stat-icon orange">
                  <TrendingUp size={20} />
                </div>
              </div>
              <strong>{formaterMontant(panierMoyen)} DH</strong>
              <small>
                <Clock size={14} />
                Par paiement validé
              </small>
            </article>
          </section>

          <section className="payments-summary-row">
            <div className="payments-summary-card">
              <div className="summary-icon">
                <CheckCircle2 size={19} />
              </div>
              <div>
                <span>Transactions valides</span>
                <strong>{paiementsValides.length}</strong>
              </div>
            </div>

            <div className="payments-summary-card cancelled-summary">
              <div className="summary-icon">
                <XCircle size={19} />
              </div>
              <div>
                <span>Transactions annulées</span>
                <strong>
                  {paiements.filter((p) => !!p.cancelled_at).length}
                </strong>
              </div>
            </div>

            <div className="payments-summary-card">
              <div className="summary-icon">
                <CreditCard size={19} />
              </div>
              <div>
                <span>Total des transactions</span>
                <strong>{paiements.length}</strong>
              </div>
            </div>
          </section>

          <section className="payments-history-section">
            <div className="payments-section-heading">
              <div>
                <div className="payments-section-title">
                  <h2>Historique des transactions</h2>
                  <span className="payments-count">
                    {paiementsFiltres.length}
                  </span>
                </div>
                <p>
                  Consultez les paiements et leur statut.
                </p>
              </div>
            </div>

            <div className="payments-filters">
              <div className="payments-search">
                <Search size={18} />
                <input
                  type="text"
                  placeholder="Rechercher un étudiant, un e-mail..."
                  value={recherche}
                  onChange={(e) => setRecherche(e.target.value)}
                />
              </div>

              <div className="payments-filter-control">
                <Filter size={16} />
                <select
                  value={filtreStatut}
                  onChange={(e) => setFiltreStatut(e.target.value)}
                >
                  <option value="tous">Tous les statuts</option>
                  <option value="valides">Paiements validés</option>
                  <option value="annules">Paiements annulés</option>
                </select>
              </div>

              <div className="payments-filter-control">
                <CalendarDays size={16} />
                <select
                  value={filtreMois}
                  onChange={(e) => setFiltreMois(e.target.value)}
                >
                  <option value="tous">Toutes les dates</option>
                  {moisDisponibles.map((mois) => (
                    <option key={mois} value={mois}>
                      {formaterMois(mois)}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="payments-table-wrapper">
              {chargement ? (
                <div className="payments-loading">
                  <RefreshCw size={22} className="refresh-spinning" />
                  <span>Chargement des transactions...</span>
                </div>
              ) : paiementsFiltres.length === 0 ? (
                <div className="payments-empty">
                  <div className="payments-empty-icon">
                    <Wallet size={27} />
                  </div>
                  <strong>Aucun paiement trouvé</strong>
                  <p>
                    Essayez de modifier votre recherche ou vos filtres.
                  </p>
                  {(recherche || filtreStatut !== 'tous' || filtreMois !== 'tous') && (
                    <button
                      onClick={() => {
                        setRecherche('')
                        setFiltreStatut('tous')
                        setFiltreMois('tous')
                      }}
                    >
                      Réinitialiser les filtres
                    </button>
                  )}
                </div>
              ) : (
                <table className="payments-table">
                  <thead>
                    <tr>
                      <th>Étudiant</th>
                      <th>Montant</th>
                      <th>Mode de paiement</th>
                      <th>Date</th>
                      <th>Statut</th>
                      <th>Détails</th>
                    </tr>
                  </thead>

                  <tbody>
                    {paiementsFiltres.map((paiement) => {
                      const etudiant = etudiants.find(
                        (e) => e.id === paiement.student_id
                      )

                      const estAnnule = !!paiement.cancelled_at

                      return (
                        <tr
                          key={paiement.id}
                          className={estAnnule ? 'payment-cancelled-row' : ''}
                        >
                          <td>
                            <div className="payment-student">
                              <div className="payment-student-avatar">
                                {(etudiant?.full_name || 'E')
                                  .charAt(0)
                                  .toUpperCase()}
                              </div>
                              <div>
                                <strong>
                                  {etudiant?.full_name || 'Sans nom'}
                                </strong>
                                <span>
                                  {etudiant?.email || 'E-mail indisponible'}
                                </span>
                              </div>
                            </div>
                          </td>

                          <td>
                            <strong
                              className={
                                estAnnule
                                  ? 'payment-amount cancelled-amount'
                                  : 'payment-amount'
                              }
                            >
                              {formaterMontant(Number(paiement.amount_dh))} DH
                            </strong>
                          </td>

                          <td>
                            <span className="payment-method">
                              <Banknote size={15} />
                              {paiement.payment_method === 'virement'
                                ? 'Virement bancaire'
                                : paiement.payment_method}
                            </span>
                          </td>

                          <td>
                            <div className="payment-date">
                              <span>
                                {new Date(
                                  paiement.created_at
                                ).toLocaleDateString('fr-FR')}
                              </span>
                              <small>
                                {new Date(
                                  paiement.created_at
                                ).toLocaleTimeString('fr-FR', {
                                  hour: '2-digit',
                                  minute: '2-digit',
                                })}
                              </small>
                            </div>
                          </td>

                          <td>
                            {estAnnule ? (
                              <span className="payment-status cancelled">
                                <XCircle size={14} />
                                Annulé
                              </span>
                            ) : (
                              <span className="payment-status valid">
                                <CheckCircle2 size={14} />
                                Validé
                              </span>
                            )}
                          </td>

                          <td>
                            <div className="payment-details">
                              {paiement.payment_note && (
                                <span title={paiement.payment_note}>
                                  {paiement.payment_note}
                                </span>
                              )}

                              {estAnnule && (
                                <span
                                  className="payment-cancellation-reason"
                                  title={paiement.cancellation_reason || ''}
                                >
                                  Motif : {paiement.cancellation_reason || 'Non renseigné'}
                                </span>
                              )}

                              {!paiement.payment_note && !estAnnule && (
                                <span className="payment-no-note">—</span>
                              )}

                              {estAnnule && paiement.cancelled_at && (
                                <small>
                                  Annulé le{' '}
                                  {new Date(
                                    paiement.cancelled_at
                                  ).toLocaleDateString('fr-FR')}
                                </small>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              )}
            </div>

            {!chargement && paiementsFiltres.length > 0 && (
              <div className="payments-table-footer">
                <span>
                  Affichage de {paiementsFiltres.length} transaction(s)
                </span>
                <span>
                  Montant affiché :{' '}
                  <strong>
                    {formaterMontant(
                      paiementsFiltres
                        .filter((p) => !p.cancelled_at)
                        .reduce(
                          (total, p) => total + Number(p.amount_dh),
                          0
                        )
                    )}{' '}
                    DH
                  </strong>
                </span>
              </div>
            )}
          </section>

          <footer className="admin-footer">
            <span>© 2026 Deutsch Erfolg</span>
            <span>Plateforme de préparation TELC B1 & B2</span>
          </footer>
        </div>
      </section>

      <style jsx global>{`
        .payments-page {
          background: #f7f8fc;
          min-height: calc(100vh - 70px);
        }

        .payments-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 27px;
        }

        .payments-heading h1 {
          margin: 8px 0 7px;
          color: #172033;
          font-size: 28px;
          font-weight: 750;
          letter-spacing: -0.8px;
        }

        .payments-heading p {
          color: #8490a4;
          font-size: 14px;
          margin: 0;
        }

        .payments-refresh {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          padding: 11px 16px;
          border: 1px solid #e5e9f2;
          background: white;
          color: #374151;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 650;
          cursor: pointer;
          transition: 0.2s;
        }

        .payments-refresh:hover {
          background: #f3f5fa;
          border-color: #cbd5e1;
        }

        .payments-refresh:disabled {
          opacity: 0.6;
          cursor: wait;
        }

        .payments-stats {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 16px;
          margin-bottom: 18px;
        }

        .payment-stat-card {
          padding: 21px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 15px;
          min-width: 0;
          box-shadow: 0 2px 8px rgba(20, 35, 65, 0.025);
        }

        .payment-stat-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 19px;
        }

        .payment-stat-top > span {
          color: #8490a4;
          font-size: 12px;
          font-weight: 600;
        }

        .payment-stat-icon {
          width: 39px;
          height: 39px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 11px;
          flex-shrink: 0;
        }

        .payment-stat-icon.purple {
          background: #f0edff;
          color: #7661d9;
        }

        .payment-stat-icon.blue {
          background: #eaf3ff;
          color: #4387db;
        }

        .payment-stat-icon.green {
          background: #e9f8f0;
          color: #27996a;
        }

        .payment-stat-icon.orange {
          background: #fff4e8;
          color: #db8b37;
        }

        .payment-stat-card > strong {
          display: block;
          color: #172033;
          font-size: clamp(19px, 2vw, 25px);
          font-weight: 750;
          letter-spacing: -0.5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .payment-stat-card > small {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #9aa4b4;
          font-size: 11px;
          margin-top: 10px;
        }

        .payments-summary-row {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 14px;
          margin-bottom: 25px;
        }

        .payments-summary-card {
          display: flex;
          align-items: center;
          gap: 13px;
          padding: 15px 18px;
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 13px;
        }

        .summary-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 37px;
          height: 37px;
          flex-shrink: 0;
          background: #eaf8f0;
          color: #29996b;
          border-radius: 10px;
        }

        .cancelled-summary .summary-icon {
          background: #fff0f0;
          color: #d65353;
        }

        .payments-summary-card span {
          display: block;
          color: #8b95a7;
          font-size: 11px;
          margin-bottom: 4px;
        }

        .payments-summary-card strong {
          color: #172033;
          font-size: 19px;
          font-weight: 750;
        }

        .payments-history-section {
          background: white;
          border: 1px solid #edf0f5;
          border-radius: 16px;
          padding: 23px;
          box-shadow: 0 2px 8px rgba(20, 35, 65, 0.025);
        }

        .payments-section-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 21px;
        }

        .payments-section-title {
          display: flex;
          align-items: center;
          gap: 11px;
        }

        .payments-section-title h2 {
          margin: 0;
          color: #172033;
          font-size: 17px;
          font-weight: 750;
        }

        .payments-section-heading p {
          margin: 6px 0 0;
          color: #9aa4b4;
          font-size: 12px;
        }

        .payments-count {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 25px;
          height: 24px;
          padding: 0 7px;
          border-radius: 7px;
          background: #f0edff;
          color: #7661d9;
          font-size: 11px;
          font-weight: 750;
        }

        .payments-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 20px;
        }

        .payments-search {
          flex: 1;
          min-width: 220px;
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 0 13px;
          height: 43px;
          border: 1px solid #e8ebf2;
          border-radius: 10px;
          color: #9aa4b4;
          background: #fff;
        }

        .payments-search:focus-within {
          border-color: #a99ae9;
          box-shadow: 0 0 0 3px rgba(118, 97, 217, 0.08);
        }

        .payments-search input {
          width: 100%;
          min-width: 0;
          border: none;
          outline: none;
          background: transparent;
          color: #263248;
          font-size: 12px;
        }

        .payments-search input::placeholder {
          color: #a5adba;
        }

        .payments-filter-control {
          display: flex;
          align-items: center;
          gap: 8px;
          height: 43px;
          padding: 0 11px;
          border: 1px solid #e8ebf2;
          border-radius: 10px;
          color: #8b95a7;
          background: white;
        }

        .payments-filter-control select {
          border: none;
          outline: none;
          background: transparent;
          color: #536075;
          font-size: 12px;
          cursor: pointer;
          max-width: 160px;
        }

        .payments-table-wrapper {
          width: 100%;
          overflow-x: auto;
        }

        .payments-table {
          width: 100%;
          min-width: 850px;
          border-collapse: collapse;
          text-align: left;
        }

        .payments-table thead {
          background: #f8f9fc;
        }

        .payments-table th {
          padding: 13px 14px;
          color: #8994a7;
          font-size: 10px;
          font-weight: 750;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
          border-bottom: 1px solid #edf0f5;
        }

        .payments-table td {
          padding: 15px 14px;
          border-bottom: 1px solid #f0f2f6;
          color: #536075;
          font-size: 12px;
          vertical-align: middle;
        }

        .payments-table tbody tr:last-child td {
          border-bottom: none;
        }

        .payments-table tbody tr:hover {
          background: #fafbfe;
        }

        .payments-table tbody tr.payment-cancelled-row {
          background: #fffafa;
        }

        .payment-student {
          display: flex;
          align-items: center;
          gap: 10px;
          min-width: 190px;
        }

        .payment-student-avatar {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 35px;
          height: 35px;
          flex-shrink: 0;
          border-radius: 10px;
          background: #f0edff;
          color: #7661d9;
          font-weight: 750;
          font-size: 13px;
        }

        .payment-student > div:last-child {
          min-width: 0;
        }

        .payment-student strong {
          display: block;
          color: #273348;
          font-size: 12px;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .payment-student span {
          display: block;
          color: #9aa4b4;
          font-size: 10px;
          overflow-wrap: anywhere;
        }

        .payment-amount {
          color: #209568;
          font-size: 13px;
          font-weight: 750;
          white-space: nowrap;
        }

        .cancelled-amount {
          color: #bd6262;
          text-decoration: line-through;
        }

        .payment-method {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #647086;
          white-space: nowrap;
        }

        .payment-method svg {
          color: #8d99ad;
        }

        .payment-date span {
          display: block;
          color: #47546a;
          font-weight: 600;
        }

        .payment-date small {
          display: block;
          margin-top: 4px;
          color: #a0a9b7;
          font-size: 10px;
        }

        .payment-status {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 6px 9px;
          border-radius: 7px;
          font-size: 10px;
          font-weight: 700;
          white-space: nowrap;
        }

        .payment-status.valid {
          background: #eaf8f0;
          color: #239565;
        }

        .payment-status.cancelled {
          background: #fff0f0;
          color: #c34d4d;
        }

        .payment-details {
          display: flex;
          flex-direction: column;
          gap: 5px;
          max-width: 190px;
        }

        .payment-details > span {
          color: #758196;
          font-size: 11px;
          overflow-wrap: anywhere;
        }

        .payment-details .payment-cancellation-reason {
          color: #b34e4e;
          font-size: 10px;
        }

        .payment-details small {
          color: #a0a9b7;
          font-size: 10px;
        }

        .payment-no-note {
          color: #b0b7c3 !important;
        }

        .payments-table-footer {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 10px;
          padding-top: 16px;
          margin-top: 5px;
          border-top: 1px solid #edf0f5;
          color: #8994a7;
          font-size: 11px;
        }

        .payments-table-footer strong {
          color: #209568;
        }

        .payments-loading {
          min-height: 220px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          color: #8b95a7;
          font-size: 12px;
        }

        .payments-loading svg {
          color: #7661d9;
        }

        .refresh-spinning {
          animation: payments-spin 1s linear infinite;
        }

        @keyframes payments-spin {
          to {
            transform: rotate(360deg);
          }
        }

        .payments-empty {
          min-height: 240px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 25px;
        }

        .payments-empty-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 55px;
          height: 55px;
          border-radius: 15px;
          background: #f1efff;
          color: #7661d9;
          margin-bottom: 15px;
        }

        .payments-empty strong {
          color: #273348;
          font-size: 14px;
        }

        .payments-empty p {
          color: #9aa4b4;
          font-size: 12px;
          margin: 7px 0 13px;
        }

        .payments-empty button {
          border: none;
          background: #f0edff;
          color: #7661d9;
          border-radius: 8px;
          padding: 9px 13px;
          font-size: 11px;
          font-weight: 700;
          cursor: pointer;
        }

        .payments-error {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 15px;
          margin-bottom: 20px;
          border: 1px solid #f3dada;
          background: #fff7f7;
          border-radius: 11px;
          color: #b94d4d;
        }

        .payments-error strong {
          display: block;
          font-size: 13px;
        }

        .payments-error p {
          margin: 5px 0 0;
          font-size: 12px;
          overflow-wrap: anywhere;
        }

        @media (max-width: 1100px) {
          .payments-stats {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 700px) {
          .payments-heading {
            align-items: flex-start;
          }

          .payments-heading h1 {
            font-size: 23px;
          }

          .payments-refresh {
            padding: 10px;
            font-size: 0;
            flex-shrink: 0;
          }

          .payments-refresh svg {
            width: 18px;
            height: 18px;
          }

          .payments-stats {
            gap: 10px;
          }

          .payment-stat-card {
            padding: 15px;
          }

          .payment-stat-top {
            margin-bottom: 14px;
          }

          .payment-stat-top > span {
            font-size: 10px;
          }

          .payment-stat-icon {
            width: 32px;
            height: 32px;
          }

          .payment-stat-card > strong {
            font-size: 18px;
          }

          .payment-stat-card > small {
            font-size: 9px;
          }

          .payments-summary-row {
            grid-template-columns: 1fr;
            gap: 9px;
          }

          .payments-history-section {
            padding: 15px;
          }

          .payments-filters {
            flex-direction: column;
          }

          .payments-search {
            flex: auto;
            width: 100%;
          }

          .payments-filter-control {
            width: 100%;
          }

          .payments-filter-control select {
            flex: 1;
            max-width: none;
          }

          .payments-table-footer {
            flex-direction: column;
          }
        }

        @media (max-width: 380px) {
          .payments-stats {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </main>
  )
}

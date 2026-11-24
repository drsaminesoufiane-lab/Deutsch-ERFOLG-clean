
'use client'

import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import {
  GraduationCap,
  CheckCircle,
  LayoutDashboard,
  Users,
  Wallet,
  BarChart3,
  BookOpen,
  FileText,
  FileAudio,
  Settings,
  ShieldCheck,
  Search,
  ArrowLeft,
  User,
  Mail,
  Phone,
  Crown,
  Calendar,
  CreditCard,
  Bell,
  FileText as NotesIcon,
  Pencil,
  RefreshCw,
} from 'lucide-react'
type Paiement = {
  id: string
  student_id: string
  amount_dh: number
  payment_method: string
  payment_note: string | null
  created_at: string
}
type Tache = {
  id: string
  student_id: string | null
  title: string
  description: string | null
  due_date: string
  priority: 'low' | 'normal' | 'high'
  completed: boolean
}
export default function FicheEtudiantPage() {
  const params = useParams()
  const id = params.id as string

  const [etudiant, setEtudiant] = useState<any>(null)
  const [paiements, setPaiements] = useState<Paiement[]>([])
  const [taches, setTaches] = useState<Tache[]>([])
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')
  const [telephone, setTelephone] = useState('')
const [message, setMessage] = useState('')
const [enregistrement, setEnregistrement] = useState(false)
const [modifierTelephone, setModifierTelephone] = useState(false) 
async function chargerEtudiant() {
  setChargement(true)
  setErreur('')
  setEtudiant(null)

  // Vérifier l'utilisateur connecté
  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    setErreur('Vous devez être connecté pour accéder à cette page.')
    setChargement(false)
    return
  }

  // Vérifier son rôle dans profiles
  const { data: admin, error: adminError } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (adminError || admin?.role !== 'admin') {
    setErreur('Accès réservé aux administrateurs.')
    setChargement(false)
    return
  }

  // Charger la fiche de l'étudiant
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', id)
    .eq('role', 'student')
    .single()

  if (error) {
    setErreur('Impossible de charger cette fiche étudiant.')
  } else {
   setEtudiant(data)
setTelephone(data.telephone || '')

const { data: paiementsData, error: paiementsError } = await supabase
  .from('pro_payments')
  .select('*')
  .eq('student_id', id)
  .order('created_at', { ascending: false })
  console.log('ID étudiant recherché :', id)
console.log('Paiements récupérés :', paiementsData)
console.log('Erreur Supabase :', paiementsError)

if (paiementsError) {
  console.error('Erreur chargement paiements :', paiementsError)
  setPaiements([])
} else {
  setPaiements(paiementsData || [])
}
const { data: tachesData, error: tachesError } = await supabase
  .from('admin_tasks')
  .select('*')
  .eq('student_id', id)
  .order('due_date', { ascending: true })

if (tachesError) {
  console.error('Erreur chargement tâches :', tachesError)
  setTaches([])
} else {
  setTaches(tachesData || [])
}
  }

  setChargement(false)
}
async function terminerTache(tacheId: string) {
  const { error } = await supabase
    .from('admin_tasks')
    .update({ completed: true })
    .eq('id', tacheId)

  if (error) {
    setErreur('Impossible de terminer cette tâche.')
    return
  }

  setTaches(prev =>
    prev.map(t =>
      t.id === tacheId ? { ...t, completed: true } : t
    )
  )
}

async function reactiverTache(tacheId: string) {
  const { error } = await supabase
    .from('admin_tasks')
    .update({ completed: false })
    .eq('id', tacheId)

  if (error) {
    setErreur('Impossible de réactiver cette tâche.')
    return
  }

  setTaches(prev =>
    prev.map(t =>
      t.id === tacheId ? { ...t, completed: false } : t
    )
  )
}
async function enregistrerTelephone() {
  setEnregistrement(true)
  setMessage('')

  const { error } = await supabase
    .from('profiles')
    .update({ telephone: telephone })
    .eq('id', id)

  if (error) {
    setMessage("Erreur lors de l'enregistrement.")
  } else {
    setMessage('Numéro de téléphone mis à jour avec succès.')
    setEtudiant((prev: any) => ({ ...prev, telephone }))
    setModifierTelephone(false)
  }

  setEnregistrement(false)
}

  useEffect(() => {
    if (id) chargerEtudiant()
  }, [id])

  return (
    <main className="admin-layout">
      <aside className="admin-sidebar">
        <Link href="/" className="admin-brand">
          <span className="brand-mark"><GraduationCap size={22} /></span>
          <span>Deutsch <b>Erfolg</b></span>
        </Link>

        <div className="admin-sidebar-label">MENU PRINCIPAL</div>

        <nav className="admin-menu">
          <Link href="/administration" className="admin-menu-link">
            <LayoutDashboard size={19} />
            <span>Tableau de bord</span>
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
            <BookOpen size={19} /><span>Cours</span>
          </Link>
          <Link href="#" className="admin-menu-link">
            <FileText size={19} /><span>Documents PDF</span>
          </Link>
          <Link href="#" className="admin-menu-link">
            <FileAudio size={19} /><span>Audios</span>
          </Link>
          <Link href="#" className="admin-menu-link">
            <Settings size={19} /><span>Paramètres</span>
          </Link>
        </nav>

        <div className="admin-sidebar-bottom">
          <div className="admin-sidebar-help">
            <ShieldCheck size={22} />
            <strong>Espace sécurisé</strong>
            <span>Administration Deutsch Erfolg.</span>
          </div>
          <Link href="/" className="admin-back-home">← Retour au site</Link>
        </div>
      </aside>

      <section className="admin-main">
        <header className="admin-topbar">
          <div className="admin-mobile-brand">
            <span className="brand-mark"><GraduationCap size={21} /></span>
            Deutsch <b>Erfolg</b>
          </div>

          <div className="admin-search">
            <Search size={17} />
            <span>Fiche étudiant</span>
          </div>

          <div className="admin-topbar-right">
            <span className="admin-demo-label"><span /> Administration</span>
            <div className="admin-profile">
              <div className="admin-profile-avatar">AD</div>
              <div><strong>Administrateur</strong><span>Gestionnaire</span></div>
            </div>
          </div>
        </header>

<div className="admin-content student-page">         
   
<section className="student-hero">
  <div style={{ flex: 1 }}>
    <div className="student-eyebrow">DOSSIER ÉTUDIANT</div>

    <h1>
  {etudiant?.full_name || 'Fiche étudiant'}

  {taches.some(tache => !tache.completed) && (
    <Bell
      size={22}
      color="#dc2626"
      style={{
        marginLeft: '12px',
        verticalAlign: 'middle'
      }}
    />
  )}
</h1>

    <p>Informations personnelles et suivi administratif.</p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
      gap: '28px',
      marginTop: '24px'
    }}>
      <div>
        <span className="student-eyebrow">ABONNEMENT</span>
        <strong style={{ display: 'block', marginTop: '7px' }}>
          {etudiant?.pro_type === 'paid'
            ? 'Abonnement payant'
            : etudiant?.pro_type === 'free'
              ? 'Abonnement gratuit'
              : 'Non renseigné'}
        </strong>
      </div>

      <div>
        <span className="student-eyebrow">DATE DE DÉBUT</span>
        <strong style={{ display: 'block', marginTop: '7px' }}>
          {etudiant?.pro_started_at
            ? new Date(etudiant.pro_started_at).toLocaleDateString('fr-FR')
            : 'Non renseignée'}
        </strong>
      </div>

      <div>
        <span className="student-eyebrow">DATE D'EXPIRATION</span>
        <strong style={{ display: 'block', marginTop: '7px' }}>
          {etudiant?.pro_until
            ? new Date(etudiant.pro_until).toLocaleDateString('fr-FR')
            : 'Non renseignée'}
        </strong>
      </div>
    </div>
  </div>

  <button className="refresh-button" onClick={chargerEtudiant}>
    <RefreshCw size={16} /> Actualiser
  </button>
</section>


          <Link href="/administration/etudiants" className="admin-back-home">
            <ArrowLeft size={16} /> Retour aux étudiants
          </Link>

          {chargement ? (
            <div className="admin-section">Chargement de la fiche étudiant...</div>
          ) : erreur ? (
            <div className="admin-demo-notice">
              <ShieldCheck size={20} />
              <div><strong>Erreur</strong><p>{erreur}</p></div>
            </div>
          ) : etudiant ? (
            <>
              <section className="student-overview">
                <article className="admin-stat-card">
                  <div className="admin-stat-top">
                    <span>Statut du compte</span>
                    <span className="admin-stat-icon"><User size={19} /></span>
                  </div>
                  <strong className="admin-stat-value">
                    {etudiant.role === 'student' ? 'Étudiant' : etudiant.role}
                  </strong>
                  <small>Compte Deutsch Erfolg</small>
                </article>

                <article className="admin-stat-card">
                  <div className="admin-stat-top">
                    <span>Abonnement</span>
                    <span className="admin-stat-icon"><Crown size={19} /></span>
                  </div>
                  <strong className="admin-stat-value">
                    {etudiant.is_pro ? 'PRO' : 'Gratuit'}
                  </strong>
                  <small>{etudiant.is_pro ? 'Accès PRO activé' : 'Accès gratuit'}</small>
                </article>

                <article className="admin-stat-card">
                  <div className="admin-stat-top">
                    <span>Niveau</span>
                    <span className="admin-stat-icon"><BookOpen size={19} /></span>
                  </div>
                  <strong className="admin-stat-value">
                    {etudiant.level || 'Non renseigné'}
                  </strong>
                  <small>Préparation TELC</small>
                </article>
              </section>

              <section className="admin-section">
                <div className="admin-section-heading">
                  <div>
                    <h2>Informations personnelles</h2>
                    <p>Coordonnées et informations du compte étudiant.</p>
                  </div>
                </div>


<div className="student-info-grid">
  <div className="student-info-item">
    <span>Nom complet</span>
    <strong>{etudiant.full_name || 'Non renseigné'}</strong>
  </div>

  <div className="student-info-item">
    <span>Adresse e-mail</span>
    <strong>{etudiant.email || 'Non renseignée'}</strong>
  </div>

  <div className="student-info-item">
    <span>Téléphone</span>

    {!modifierTelephone ? (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        flexWrap: 'wrap'
      }}>
        <strong>{etudiant.telephone || 'Non renseigné'}</strong>

        <button
          type="button"
          onClick={() => setModifierTelephone(true)}
          style={{
            border: 'none',
            background: 'transparent',
            color: '#2563eb',
            cursor: 'pointer',
            fontSize: '12px',
            fontWeight: 600
          }}
        >
          Modifier
        </button>
      </div>
    ) : (
      <div>
        <input
          type="tel"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
          placeholder="+212 6XX XXX XXX"
          style={{
            width: '100%',
            boxSizing: 'border-box',
            padding: '10px 12px',
            border: '1px solid #dce3ed',
            borderRadius: '8px',
            fontSize: '14px'
          }}
        />

        <div style={{
          display: 'flex',
          gap: '8px',
          marginTop: '10px'
        }}>
          <button
            type="button"
            onClick={enregistrerTelephone}
            disabled={enregistrement}
            className="refresh-button"
          >
            {enregistrement ? 'Enregistrement...' : 'Enregistrer'}
          </button>

          <button
            type="button"
            onClick={() => {
              setTelephone(etudiant.telephone || '')
              setModifierTelephone(false)
              setMessage('')
            }}
            className="refresh-button"
          >
            Annuler
          </button>
        </div>

        {message && <p>{message}</p>}
      </div>
    )}
  </div>
</div>

              </section>

              

              
<section className="admin-section">
  <div className="admin-section-heading">
    <div>
      <h2>Paiements</h2>
      <p>Historique des paiements de cet étudiant.</p>
    </div>
    <strong>{paiements.length} paiement(s)</strong>
  </div>

  {paiements.length === 0 ? (
    <div className="admin-empty-state">
      Aucun paiement enregistré pour cet étudiant.
    </div>
  ) : (
    <div style={{ overflowX: 'auto' }}>
      <table style={{
        width: '100%',
        borderCollapse: 'collapse',
        textAlign: 'left'
      }}>
        <thead>
          <tr>
            <th style={{ padding: '12px' }}>Date</th>
            <th style={{ padding: '12px' }}>Montant</th>
            <th style={{ padding: '12px' }}>Mode</th>
            <th style={{ padding: '12px' }}>Note</th>
          </tr>
        </thead>
        <tbody>
          {paiements.map((paiement) => (
            <tr key={paiement.id}>
              <td style={{ padding: '12px' }}>
                {new Date(paiement.created_at).toLocaleDateString('fr-FR')}
              </td>
              <td style={{ padding: '12px', fontWeight: 600 }}>
                {Number(paiement.amount_dh).toFixed(2)} DH
              </td>
              <td style={{ padding: '12px' }}>
                {paiement.payment_method === 'virement'
                  ? 'Virement'
                  : paiement.payment_method}
              </td>
              <td style={{ padding: '12px' }}>
                {paiement.payment_note || '—'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )}
</section>


              <section className="admin-section">
  <div className="admin-section-heading">
    <div>
      <h2>Rappels</h2>
      <p>Actions et dates importantes à suivre.</p>
    </div>
  </div>

  {taches.length === 0 ? (
    <div className="admin-empty-state">
      Aucun rappel associé à cet étudiant.
    </div>
  ) : (
    <div style={{ display: 'grid', gap: 12 }}>
      {taches.map(tache => (
        <article
          key={tache.id}
          style={{
            border: '1px solid #e5e7eb',
            borderRadius: 10,
            padding: 16,
            opacity: tache.completed ? 0.65 : 1
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 12,
            flexWrap: 'wrap'
          }}>
            <strong>{tache.title}</strong>

            {!tache.completed && (
              <button
                type="button"
  onClick={() => terminerTache(tache.id)}
  style={{
    background: '#16a34a',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }}
>
  <CheckCircle size={15} /> Terminer la tâche
              </button>
            )}

            {tache.completed && (
              <button
                 type="button"
  onClick={() => reactiverTache(tache.id)}
  style={{
    background: '#fee2e2',
color: '#b91c1c',
    border: 'none',
    borderRadius: '8px',
    padding: '8px 12px',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  }}
>
  <RefreshCw size={15} /> Réactiver
              </button>
            )}
          </div>

          <p>{tache.description || 'Aucun détail'}</p>

          <small>
            Échéance : {new Date(tache.due_date + 'T00:00:00').toLocaleDateString('fr-FR')}
            {' · '}
            Priorité : {tache.priority === 'high' ? 'Urgente' : tache.priority === 'low' ? 'Faible' : 'Normale'}
            {' · '}
            {tache.completed
              ? 'Terminée'
              : tache.due_date < new Date().toISOString().slice(0, 10)
                ? 'En retard'
                : 'À traiter'}
          </small>
        </article>
      ))}
    </div>
  )}
</section>
              </>
         ) : null}
        </div>
      </section>
    </main>
  )
}

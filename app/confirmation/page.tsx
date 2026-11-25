
'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import { GraduationCap, CheckCircle2, XCircle, ArrowRight } from 'lucide-react'

function ConfirmationContent() {
  const searchParams = useSearchParams()
  const status = searchParams.get('status')

  const success = status === 'success'

  return (
    <main className="confirmation-page">
      <div className="confirmation-card">
        <Link href="/" className="confirmation-brand">
          <span className="confirmation-logo">
            <GraduationCap size={27} />
          </span>
          <span>Deutsch <strong>Erfolg</strong></span>
        </Link>

        <div className={`confirmation-icon ${success ? 'success' : 'error'}`}>
          {success ? <CheckCircle2 size={48} /> : <XCircle size={48} />}
        </div>

        <span className="confirmation-tag">
          {success ? 'E-MAIL CONFIRMÉE' : 'CONFIRMATION IMPOSSIBLE'}
        </span>

        <h1>
          {success
            ? 'Bienvenue dans Deutsch-Erfolg !'
            : 'Le lien de confirmation est invalide'}
        </h1>

        <p>
          {success
            ? 'Ton adresse e-mail a été vérifiée avec succès. Tu peux maintenant te connecter à ton compte et commencer ta préparation TELC.'
            : 'Le lien utilisé est invalide, a déjà été utilisé ou a expiré. Tu peux essayer de te connecter ou demander un nouveau lien de confirmation.'}
        </p>

        <Link href="/connexion" className="confirmation-button">
          {success ? 'Accéder à mon compte' : 'Retour à la connexion'}
          <ArrowRight size={19} />
        </Link>

        {!success && (
          <Link href="/inscription" className="confirmation-secondary">
            Créer un nouveau compte
          </Link>
        )}
      </div>

      <style jsx>{`
        .confirmation-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          background: #f1f5f9;
          font-family: inherit;
        }

        .confirmation-card {
          width: 100%;
          max-width: 500px;
          padding: 45px 35px;
          border: 1px solid #e2e8f0;
          border-radius: 24px;
          background: #fff;
          box-shadow: 0 15px 50px rgba(15, 23, 42, 0.07);
          text-align: center;
        }

        .confirmation-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 42px;
          color: #1e293b;
          font-size: 21px;
          font-weight: 600;
          text-decoration: none;
        }

        .confirmation-logo {
          width: 45px;
          height: 45px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 13px;
          background: #eff6ff;
          color: #2563eb;
        }

        .confirmation-icon {
          width: 90px;
          height: 90px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 25px;
          border-radius: 50%;
        }

        .confirmation-icon.success {
          color: #16a34a;
          background: #dcfce7;
        }

        .confirmation-icon.error {
          color: #dc2626;
          background: #fee2e2;
        }

        .confirmation-tag {
          display: inline-block;
          margin-bottom: 13px;
          color: #64748b;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1.5px;
        }

        h1 {
          margin: 0 0 16px;
          color: #0f172a;
          font-size: 27px;
          line-height: 1.3;
          font-weight: 800;
        }

        p {
          margin: 0;
          color: #64748b;
          font-size: 15px;
          line-height: 1.8;
        }

        .confirmation-button {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          width: 100%;
          margin-top: 30px;
          padding: 16px 20px;
          border-radius: 12px;
          background: #2563eb;
          color: white;
          font-size: 14px;
          font-weight: 700;
          text-decoration: none;
          transition: background 0.2s ease;
        }

        .confirmation-button:hover {
          background: #1d4ed8;
        }

        .confirmation-secondary {
          display: inline-block;
          margin-top: 20px;
          color: #2563eb;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
        }

        @media (max-width: 480px) {
          .confirmation-card {
            padding: 35px 22px;
          }

          h1 {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  )
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<main className="confirmation-page">Chargement...</main>}>
      <ConfirmationContent />
    </Suspense>
  )
}

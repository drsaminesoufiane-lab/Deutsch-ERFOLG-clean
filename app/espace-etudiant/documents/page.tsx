
'use client'

import Link from 'next/link'
import {
  GraduationCap, ArrowLeft, FileText, Download,
  Search, FolderOpen, BookOpen
} from 'lucide-react'

const documents = [
  { title: 'Documents TELC B1', level: 'B1', description: 'Supports de préparation et fiches de révision', type: 'PDF' },
  { title: 'Documents TELC B2', level: 'B2', description: 'Supports de préparation et fiches de révision', type: 'PDF' },
]

export default function DocumentsPage() {
  return (
    <main className="documents-page">
      <header className="documents-header">
        <Link href="/espace-etudiant" className="documents-logo">
          <GraduationCap size={27} />
          <span>Deutsch <b>Erfolg</b></span>
        </Link>
        <Link href="/espace-etudiant" className="documents-back">
          <ArrowLeft size={17} /> Tableau de bord
        </Link>
      </header>

      <section className="documents-content">
        <div className="documents-heading">
          <div>
            <span className="documents-eyebrow">ESPACE ÉTUDIANT</span>
            <h1>Mes documents</h1>
            <p>Retrouvez vos supports de cours et documents PDF.</p>
          </div>
          <div className="documents-heading-icon"><FolderOpen size={34} /></div>
        </div>

        <div className="documents-info">
          <BookOpen size={20} />
          <span>Vos ressources pédagogiques seront organisées par niveau et par compétence.</span>
        </div>

        <div className="documents-grid">
          {documents.map((doc) => (
            <article className="document-card" key={doc.level}>
              <div className="document-icon"><FileText size={28} /></div>
              <span className="document-level">TELC {doc.level}</span>
              <h2>{doc.title}</h2>
              <p>{doc.description}</p>
              <div className="document-footer">
                <span>{doc.type}</span>
                <span className="document-coming">Bientôt disponible</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <style jsx global>{`
        .documents-page {
          min-height: 100vh;
          background: #f7f8fa;
          color: #172b4d;
          font-family: Arial, sans-serif;
        }
        .documents-header {
          height: 76px;
          background: #172b4d;
          color: white;
          padding: 0 7%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .documents-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: white;
          text-decoration: none;
          font-size: 20px;
        }
        .documents-logo svg { color: #d6b56d; }
        .documents-logo b { color: #d6b56d; }
        .documents-back {
          color: white;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .documents-content {
          max-width: 1100px;
          margin: 55px auto;
          padding: 0 25px;
        }
        .documents-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        .documents-eyebrow {
          color: #b8954d;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2px;
        }
        .documents-heading h1 {
          font-size: 34px;
          margin: 12px 0;
        }
        .documents-heading p { color: #778397; }
        .documents-heading-icon {
          width: 75px;
          height: 75px;
          border-radius: 20px;
          background: #f0e8d7;
          color: #b8954d;
          display: grid;
          place-items: center;
        }
        .documents-info {
          background: white;
          border: 1px solid #e8ebf0;
          border-radius: 12px;
          padding: 18px;
          display: flex;
          gap: 12px;
          align-items: center;
          color: #647187;
          font-size: 14px;
          margin-bottom: 28px;
        }
        .documents-info svg { color: #b8954d; flex-shrink: 0; }
        .documents-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 22px;
        }
        .document-card {
          background: white;
          border: 1px solid #e8ebf0;
          border-radius: 16px;
          padding: 26px;
        }
        .document-icon {
          width: 54px;
          height: 54px;
          display: grid;
          place-items: center;
          border-radius: 13px;
          background: #f0e8d7;
          color: #b8954d;
          margin-bottom: 20px;
        }
        .document-level {
          color: #b8954d;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 1px;
        }
        .document-card h2 { font-size: 20px; margin: 9px 0; }
        .document-card p {
          color: #778397;
          font-size: 14px;
          line-height: 1.6;
          min-height: 44px;
        }
        .document-footer {
          border-top: 1px solid #edf0f4;
          padding-top: 17px;
          margin-top: 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 12px;
          color: #778397;
        }
        .document-coming {
          background: #f4f1e9;
          color: #987a3d;
          padding: 7px 10px;
          border-radius: 20px;
        }
        @media (max-width: 650px) {
          .documents-header { padding: 0 18px; }
          .documents-content { margin: 35px auto; }
          .documents-heading h1 { font-size: 27px; }
          .documents-heading-icon { width: 55px; height: 55px; }
          .documents-grid { grid-template-columns: 1fr; }
          .documents-info { align-items: flex-start; }
        }
      `}</style>
    </main>
  )
}

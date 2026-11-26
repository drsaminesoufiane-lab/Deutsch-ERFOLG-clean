
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

        /* DE_STUDENT_ACCOUNT_PREMIUM_V1 */

.documents-page {
  --pe-navy: var(--de-navy, #192b43);
  --pe-ivory: var(--de-ivory, #f7f5f0);
  --pe-border: var(--de-border, #e3ded3);
  --pe-muted: var(--de-muted, #626a75);
  --pe-gold: var(--de-gold-text, #806337);
  --pe-tint: var(--de-tint, #f1ece2);
  background: var(--pe-ivory); color: var(--pe-navy);
  font-family: var(--de-sans, Arial, sans-serif); text-align: start;
}
.documents-page :is(h1,h2) { font-family: var(--de-serif, Georgia, serif); font-weight: 400; color: var(--pe-navy); letter-spacing: 0; }
[dir="rtl"] .documents-page :is(h1,h2), .documents-page[dir="rtl"] :is(h1,h2) { font-family: 'Tajawal', Arial, sans-serif; }
.documents-page h1 { font-size: clamp(28px, 3vw, 38px); line-height: 1.2; }
.documents-page :is(a,button,input,select):focus-visible { outline: 2px solid var(--pe-gold); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) { .documents-page * { transition: none !important; } }

.documents-page .documents-header { min-height: 76px; height: auto; padding: 15px clamp(18px, 4vw, 42px); gap: 16px; background: #fff; border-bottom: 1px solid var(--pe-border); color: var(--pe-navy); flex-wrap: wrap; }
.documents-page .documents-logo { color: var(--pe-navy); font-family: var(--de-serif, Georgia, serif); font-size: 21px; gap: 9px; }
.documents-page .documents-logo :is(b,svg) { color: var(--pe-gold); }
.documents-page .documents-back { color: var(--pe-muted); font-size: 13px; }
.documents-page .documents-back:hover { color: var(--pe-gold); }
.documents-page .documents-content { margin: 0 auto; padding: 34px clamp(16px, 4vw, 40px) 48px; }
.documents-page .documents-eyebrow { color: var(--pe-gold); font-size: 10px; letter-spacing: 1.3px; font-weight: 700; }
[dir="rtl"] .documents-page .documents-back svg { transform: scaleX(-1); }
@media(max-width:700px) {
  .documents-page .documents-header { padding: 78px 16px 14px; min-height: 0; }
  .documents-page .documents-content { padding: 24px 16px 36px; }
  .documents-page .documents-logo { font-size: 18px; }
  .documents-page .documents-back { font-size: 12px; }
}

.documents-page .documents-heading { gap: 16px; margin-bottom: 24px; }
.documents-page .documents-heading p { color: var(--pe-muted); font-size: 14px; line-height: 1.65; }
.documents-page .documents-heading-icon, .documents-page .document-icon { background: var(--pe-tint); color: var(--pe-gold); border: 1px solid var(--pe-border); border-radius: 9px; flex-shrink: 0; }
.documents-page .documents-heading-icon { width: 60px; height: 60px; }
.documents-page .documents-info { border: 1px solid var(--pe-border); background: var(--pe-tint); color: var(--pe-navy); border-radius: 9px; font-size: 13px; line-height: 1.6; }
.documents-page .documents-info svg { color: var(--pe-gold); }
.documents-page .documents-grid { grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 16px; }
.documents-page .document-card { padding: 23px; border: 1px solid var(--pe-border); border-radius: 10px; box-shadow: var(--de-shadow, 0 3px 12px rgba(25,43,67,.045)); display: flex; flex-direction: column; min-width: 0; }
.documents-page .document-icon { width: 48px; height: 48px; margin-bottom: 16px; }
.documents-page .document-level { color: var(--pe-gold); font-size: 11px; font-weight: 600; }
.documents-page .document-card h2 { font-size: 24px; }
.documents-page .document-card p { min-height: 0; color: var(--pe-muted); margin: 0 0 18px; flex: 1; }
.documents-page .document-footer { border-color: var(--pe-border); color: var(--pe-muted); margin-top: auto; gap: 10px; flex-wrap: wrap; }
.documents-page .document-coming { background: var(--pe-tint); color: var(--pe-gold); border: 1px solid var(--pe-border); border-radius: 5px; }
@media(max-width:700px) { .documents-page .documents-heading-icon { display: none; } }

      `}</style>
    </main>
  )
}

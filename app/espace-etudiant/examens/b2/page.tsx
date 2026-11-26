
'use client'

import Link from 'next/link'
import {
  GraduationCap, ArrowLeft, BookOpen, Headphones,
  PenLine, Mic, ArrowRight, Sparkles, Languages
} from 'lucide-react'

const competences = [
  {
    nom: 'Lesen',
    traduction: 'Compréhension écrite',
    description: 'Travaillez les différentes parties de la compréhension écrite.',
    Icon: BookOpen,
    lien: '/espace-etudiant/examens/b2/lesen',
  },
  {
    nom: 'Hören',
    traduction: 'Compréhension orale',
    description: 'Écoutez des dialogues et des documents audio.',
    Icon: Headphones,
    lien: '/espace-etudiant/examens/b2/hoeren',
  },
  {
    nom: 'Schreiben',
    traduction: 'Expression écrite',
    description: 'Entraînez-vous à rédiger des textes et des e-mails.',
    Icon: PenLine,
    lien: '/espace-etudiant/examens/b2/schreiben',
  },
  {
    nom: 'Sprechen',
    traduction: 'Expression orale',
    description: 'Préparez les sujets et les situations de communication.',
    Icon: Mic,
    lien: '/espace-etudiant/examens/b2/sprechen',
  },
  {
    nom: 'Sprachbausteine',
    traduction: 'Grammaire et vocabulaire',
    description: 'Entraînez-vous avec les exercices de grammaire et de vocabulaire du TELC B2.',
    Icon: Languages,
    lien: '/espace-etudiant/examens/b2/sprachbausteine',
  },
]

export default function B2Page() {
  return (
    <main className="b1-page">
      <header className="b1-header">
        <Link href="/espace-etudiant" className="b1-brand">
          <GraduationCap size={27} />
          Deutsch <strong>Erfolg</strong>
        </Link>
        <Link href="/espace-etudiant/examens" className="b1-back">
          <ArrowLeft size={17} /> Examens
        </Link>
      </header>

      <div className="b1-content">
        <div className="b1-breadcrumb">
          <Link href="/espace-etudiant/examens">Examens blancs</Link>
          <span>/</span>
          <strong>TELC B2</strong>
        </div>

        <section className="b1-hero">
          <div>
            <span className="b1-eyebrow">VOTRE PARCOURS D'APPRENTISSAGE</span>
            <h1>Préparation TELC <span>B2</span></h1>
            <p>Choisissez une compétence et commencez votre entraînement.</p>
          </div>
          <div className="b1-hero-icon">
            <GraduationCap size={52} />
            <Sparkles size={19} />
          </div>
        </section>

        <div className="b1-info">
          <Sparkles size={20} />
          <p>Vous êtes libre de travailler les compétences dans l'ordre de votre choix et à votre propre rythme.</p>
        </div>

        <section className="b1-section">
          <div className="b1-section-heading">
            <div>
              <span className="b1-eyebrow">LES CINQ COMPÉTENCES</span>
              <h2>Choisissez votre entraînement</h2>
            </div>
            <span className="b1-count">05 MODULES</span>
          </div>

          <div className="b1-grid">
            {competences.map(({ nom, traduction, description, Icon, lien }, index) => (
              <Link href={lien} className="b1-card" key={nom}>
                <div className="b1-card-top">
                  <div className="b1-icon"><Icon size={25} /></div>
                  <span className="b1-index">0{index + 1}</span>
                </div>
                <h3>{nom}</h3>
                <span className="b1-translation">{traduction}</span>
                <p>{description}</p>
                <div className="b1-card-link">
                  Accéder au module <ArrowRight size={17} />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <footer className="b1-footer">© 2026 Deutsch Erfolg</footer>
      </div>

      <style jsx global>{`
        .b1-page { min-height:100vh; background:#f7f5f0; color:#192b43; font-family:Arial,sans-serif; }
        .b1-header { height:76px; background:#192b43; display:flex; align-items:center; justify-content:space-between; padding:0 7%; }
        .b1-brand { display:flex; align-items:center; gap:9px; color:white; text-decoration:none; font-size:20px; font-weight:700; }
        .b1-brand svg { color:#b49760; }
        .b1-brand strong { color:#b49760; }
        .b1-back { color:white; text-decoration:none; font-size:13px; display:flex; align-items:center; gap:8px; }
        .b1-content { max-width:1050px; margin:auto; padding:35px 25px 45px; }
        .b1-breadcrumb { display:flex; gap:10px; align-items:center; color:#626a75; font-size:12px; margin-bottom:30px; }
        .b1-breadcrumb a { color:#626a75; text-decoration:none; }
        .b1-breadcrumb strong { color:#806337; }
        .b1-hero { display:flex; justify-content:space-between; align-items:center; background:#192b43; color:white; border-radius:16px; padding:35px; margin-bottom:22px; }
        .b1-eyebrow { color:#B8954D; font-size:10px; letter-spacing:1.5px; font-weight:700; }
        .b1-hero h1 { font-size:30px; margin:12px 0 8px; }
        .b1-hero h1 span { color:#b49760; }
        .b1-hero p { font-size:13px; color:#D2DAE5; margin:0; line-height:1.6; }
        .b1-hero-icon { position:relative; color:#b49760; margin-right:15px; }
        .b1-hero-icon svg:last-child { position:absolute; right:-12px; top:-10px; }
        .b1-info { display:flex; align-items:center; gap:13px; padding:16px 20px; background:#f1ece2; color:#80652F; border-radius:10px; margin-bottom:38px; }
        .b1-info p { font-size:12px; line-height:1.6; margin:0; }
        .b1-section-heading { display:flex; align-items:center; justify-content:space-between; margin-bottom:20px; }
        .b1-section-heading h2 { font-size:21px; margin:8px 0 0; }
        .b1-count { font-size:10px; color:#806337; font-weight:700; letter-spacing:1px; }
        .b1-grid { display:grid; grid-template-columns:1fr 1fr; gap:17px; }
        .b1-card { display:block; text-decoration:none; color:#192b43; background:white; border:1px solid #e3ded3; border-radius:13px; padding:23px; transition:transform .2s,border-color .2s,box-shadow .2s; }
        .b1-card:hover { transform:translateY(-3px); border-color:#b49760; box-shadow:0 8px 25px rgba(23,43,77,.07); }
        .b1-card-top { display:flex; justify-content:space-between; align-items:center; }
        .b1-icon { width:48px; height:48px; display:grid; place-items:center; background:#f1ece2; color:#806337; border-radius:11px; }
        .b1-index { color:#b49760; font-size:22px; font-weight:700; }
        .b1-card h3 { font-size:21px; margin:18px 0 5px; }
        .b1-translation { color:#806337; font-size:11px; font-weight:600; }
        .b1-card p { color:#626a75; font-size:12px; line-height:1.7; min-height:40px; margin:13px 0 20px; }
        .b1-card-link { display:flex; align-items:center; justify-content:space-between; border-top:1px solid #e3ded3; padding-top:15px; color:#806337; font-size:12px; font-weight:700; }
        .b1-footer { margin-top:45px; border-top:1px solid #e3ded3; padding-top:20px; color:#626a75; font-size:11px; }
        @media(max-width:650px) {
          .b1-header { padding:0 17px; }
          .b1-content { padding:25px 15px 35px; }
          .b1-hero { padding:25px 20px; }
          .b1-hero h1 { font-size:24px; }
          .b1-hero-icon { margin-right:5px; }
          .b1-grid { grid-template-columns:1fr; }
          .b1-section-heading h2 { font-size:18px; }
        }
      
        /* Deutsch Erfolg — Premium exams */
        .b1-page { background: #f7f5f0; font-family: 'Plus Jakarta Sans', Arial, sans-serif; }
        [dir="rtl"] .b1-page, .b1-page[dir="rtl"] { font-family: 'Tajawal', Arial, sans-serif; }
        .b1-page .b1-hero { background: #192b43; border: 1px solid #314359; border-radius: 12px; box-shadow: none; text-align: start; }
        .b1-page .b1-hero h1 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.025em; line-height: 1.24; overflow-wrap: anywhere; }
        [dir="rtl"] .b1-page .b1-hero h1, .b1-page[dir="rtl"] .b1-hero h1 { font-family: 'Tajawal', Arial, sans-serif; }
        .b1-page a:focus-visible, .b1-page button:focus-visible, .b1-page select:focus-visible { outline: 2px solid #b49760; outline-offset: 3px; }
        .b1-page .b1-card { border-radius: 10px; box-shadow: none; }
        .b1-page .b1-section-heading h2,
        .b1-page .b1-card h3 { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; }
        [dir="rtl"] .b1-page .b1-section-heading h2,
        [dir="rtl"] .b1-page .b1-card h3 { font-family: 'Tajawal', Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) {
          .b1-page *, .b1-page *::before, .b1-page *::after { transition-duration: .01ms !important; animation-duration: .01ms !important; }
        }
      `}</style>
    </main>
  )
}

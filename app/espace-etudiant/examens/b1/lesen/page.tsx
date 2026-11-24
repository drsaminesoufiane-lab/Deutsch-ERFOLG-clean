
'use client'

import Link from 'next/link'
import { useState } from 'react'
import { GraduationCap, ArrowLeft, BookOpen, FileText, ArrowRight } from 'lucide-react'

const teil3 = [
  'Alex Und Cora',
  'Rita',
  'Caroline',
  'Vera',
  'Eva',
  'Paul',
  'Iris',
  'Jan',
  'Miroslav',
  'Andreas 1',
  'Annika 2',
  'Sonja',
  'Nadja / Claudia',
  'Karla',
  'Viktor',
  'Moritz',
  'Corina',
  'Petra',
  'Tamara / Jakob',
  'Nicole',
  'Andreas 2',
  'Thomas / Anna',
  'Sophie',
  'Alicia',
  'Annika 1',
  'Jennifer',
  'Mara',
  'Miroslav 2',
]

const teil2 = [
  { titre: 'Alex Und Cora' },
  { titre: 'Rita' },
  { titre: 'Caroline' },
  { titre: 'Vera' },
  { titre: 'Eva' },
  { titre: 'Paul' },
  { titre: 'Iris' },
  { titre: 'Jan' },
  { titre: 'Miroslav' },
  { titre: 'Andreas 1' },
  { titre: 'Annika 2' },
  { titre: 'Sonja' },
  { titre: 'Nadja / Claudia' },
  { titre: 'Karla' },
  { titre: 'Viktor' },
  { titre: 'Moritz' },
  { titre: 'Corina' },
  { titre: 'Petra' },
  { titre: 'Tamara / Jakob' },
  { titre: 'Nicole' },
  { titre: 'Andreas 2' },
  { titre: 'Thomas / Anna' },
  { titre: 'Sophie' },
  { titre: 'Alicia' },
  { titre: 'Annika 1' },
  { titre: 'Jennifer' },
  { titre: 'Mara' },
]

const teil1 = [
  { titre: 'Alex Und Cora' },
  { titre: 'Rita' },
  { titre: 'Caroline' },
  { titre: 'Vera' },
  { titre: 'Eva' },
  { titre: 'Paul' },
  { titre: 'Iris' },
  { titre: 'Jan' },
  { titre: 'Miroslav' },
  { titre: 'Andreas 1' },
  { titre: 'Annika 2' },
  { titre: 'Sonja' },
  { titre: 'Nadja / Claudia' },
  { titre: 'Karla' },
  { titre: 'Viktor' },
  { titre: 'Moritz' },
  { titre: 'Corina' },
  { titre: 'Petra' },
  { titre: 'Tamara / Jakob' },
  { titre: 'Nicole' },
  { titre: 'Andreas 2' },
  { titre: 'Thomas / Anna' },
  { titre: 'Sophie' },
  { titre: 'Alicia' },
  { titre: 'Annika 1' },
  { titre: 'Jennifer' },
  { titre: 'Mara' },
  { titre: 'Miroslav 2' },
]

const parties = [
  { nom: 'Teil 1', description: 'Exercices de compréhension écrite – partie 1', nombre: 'À compléter', ancre: 'teil-1' },
  { nom: 'Teil 2', description: 'Exercices de compréhension écrite – partie 2', nombre: 'À compléter', ancre: 'teil-2' },
  { nom: 'Teil 3', description: 'Exercices de compréhension écrite – partie 3', nombre: `${teil3.length} exercices`, ancre: 'teil-3' },
]

export default function LesenB1Page() {
  const [activeTeil, setActiveTeil] = useState('teil-1')
  return (
    <main className="lesen-page">
      <header className="lesen-header">
        <Link href="/espace-etudiant" className="lesen-brand">
          <GraduationCap size={27} />
          Deutsch <strong>Erfolg</strong>
        </Link>
        <Link href="/espace-etudiant/examens/b1" className="lesen-back">
          <ArrowLeft size={17} /> TELC B1
        </Link>
      </header>

      <div className="lesen-content">
        <div className="lesen-breadcrumb">
          <Link href="/espace-etudiant/examens">Examens</Link>
          <span>/</span>
          <Link href="/espace-etudiant/examens/b1">B1</Link>
          <span>/</span>
          <strong>Lesen</strong>
        </div>

        <section className="lesen-hero">
  <div className="lesen-hero-top">
    <div className="lesen-hero-icon">
      <BookOpen size={36} />
    </div>
    <span className="lesen-hero-badge">TELC DEUTSCH B1</span>
  </div>

  <div className="lesen-hero-main">
    <div>
      <span className="lesen-eyebrow">DEUTSCH ERFOLG · PRÜFUNGSVORBEREITUNG</span>
      <h1>Lesen</h1>
      <p>
        Verbessern Sie Ihr Leseverständnis und bereiten Sie sich
        Schritt für Schritt auf die TELC B1 Prüfung vor.
      </p>
    </div>

    <div className="lesen-stats">
      <div>
        <strong>
          {activeTeil === 'teil-1' ? teil1.length : activeTeil === 'teil-2' ? teil2.length : teil3.length}
        </strong>
        <span>Exercices disponibles</span>
      </div>
      <div>
        <strong>
          {activeTeil === 'teil-1' ? '01' : activeTeil === 'teil-2' ? '02' : '03'}
        </strong>
        <span>Teil ausgewählt</span>
      </div>
    </div>
  </div>

  <div className="lesen-hero-decoration">LESEN</div>
</section>

        
<section className="lesen-parties">
  <div className="lesen-section-title">
    <div>
      <span className="lesen-eyebrow">ORGANISATION DES EXERCICES</span>
      <h2>Choisissez une partie</h2>
    </div>
  </div>

  <div className="lesen-tabs">
  {parties.map((partie, index) => (
    <button
      type="button"
      key={partie.ancre}
      className={`lesen-tab ${activeTeil === partie.ancre ? 'active' : ''}`}
      onClick={() => setActiveTeil(partie.ancre)}
    >
      <span className="lesen-tab-number">
        0{index + 1}
      </span>
      <span className="lesen-tab-content">
        <strong>{partie.nom}</strong>
        <small>{index === 0 ? `${teil1.length} exercices` : index === 1 ? `${teil2.length} exercices` : `${teil3.length} exercices`}</small>
      </span>
      <span className="lesen-tab-arrow">→</span>
    </button>
  ))}
</div>
</section>


{activeTeil === 'teil-1' && (        
<section className="lesen-exercises" id="teil-1">


  
<div className="lesen-exercise-grid">
 {teil1.map((item, index) => (
  <Link
  href={`/espace-etudiant/examens/b1/lesen/teil-1/exercice-${index + 1}`}
  className="lesen-exercise-card"
  key={`${item.titre}-${index}`}
>
    <div className="lesen-exercise-number">
      {String(index + 1).padStart(2, '0')}
    </div>
    <div className="lesen-exercise-info">
      <h3>{item.titre}</h3>
      <div className="lesen-exercise-meta">
        <span className="lesen-level">B1</span>
        <span className="lesen-part-label">TEIL 1</span>
      </div>
    </div>
  </Link>
))}
</div>

</section>
)}
{activeTeil === 'teil-2' && (
        
<section className="lesen-exercises" id="teil-2">


  <div className="lesen-exercise-grid">
 

{teil2.map((item, index) => (
  <Link
    href={`/espace-etudiant/examens/b1/lesen/teil-2/exercice-${index + 1}`}
    className="lesen-exercise-card"
    key={`${item.titre}-${index}`}
  >
    <div className="lesen-exercise-number">
      {String(index + 1).padStart(2, '0')}
    </div>

    <div className="lesen-exercise-info">
      <h3>{item.titre}</h3>

      <div className="lesen-exercise-meta">
        <span className="lesen-level">B1</span>
        <span className="lesen-part-label">TEIL 2</span>
      </div>
    </div>
  </Link>
))}


  </div>
</section>

)}
{activeTeil === 'teil-3' && (
        <section className="lesen-exercises" id="teil-3">
         

          
<div className="lesen-exercise-grid">
  {teil3.map((titre, index) => (
  <Link
    href={`/espace-etudiant/examens/b1/lesen/teil-3/exercice-${index + 1}`}
    className="lesen-exercise-card"
    key={`${titre}-${index}`}
  >
    <div className="lesen-exercise-number">
      {String(index + 1).padStart(2, '0')}
    </div>
    <div className="lesen-exercise-info">
      <h3>{titre}</h3>
      <div className="lesen-exercise-meta">
        <span className="lesen-level">B1</span>
        <span className="lesen-part-label">TEIL 3</span>
      </div>
    </div>
  </Link>
))}
</div>
</section>
)}

      </div>
      <style jsx global>{`
        .lesen-page {
  min-height:100vh;
  background:#F5F6F8;
  color:#172B4D;
  font-family:Arial,sans-serif;
}
        .lesen-header { height:76px; background:#172B4D; display:flex; align-items:center; justify-content:space-between; padding:0 7%; }
        .lesen-brand { display:flex; align-items:center; gap:9px; color:white; text-decoration:none; font-size:20px; font-weight:700; }
        .lesen-brand svg { color:#D6B56D; }
        .lesen-brand strong { color:#D6B56D; }
        .lesen-back { color:white; text-decoration:none; font-size:13px; display:flex; align-items:center; gap:8px; }
        .lesen-content { max-width:1050px; margin:auto; padding:32px 25px 45px; }
        .lesen-breadcrumb { display:flex; gap:10px; font-size:12px; color:#9AA4B2; margin-bottom:25px; }
        .lesen-breadcrumb a { color:#9AA4B2; text-decoration:none; }
        .lesen-breadcrumb strong { color:#A18142; }
        .lesen-hero {
  background:linear-gradient(120deg,#172B4D 0%,#203D68 65%,#294B78 100%);
  color:white;
  padding:38px;
  border-radius:18px;
  position:relative;
  overflow:hidden;
  margin-bottom:38px;
  box-shadow:0 12px 30px rgba(23,43,77,.13);
}
        .lesen-hero-icon { color:#D6B56D; margin-bottom:16px; }
.lesen-hero-top {
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:28px;
}

.lesen-hero-icon {
  width:58px;
  height:58px;
  display:grid;
  place-items:center;
  background:rgba(214,181,109,.13);
  border:1px solid rgba(214,181,109,.35);
  border-radius:14px;
  color:#D6B56D;
  margin:0;
}

.lesen-hero-badge {
  color:#D6B56D;
  border:1px solid rgba(214,181,109,.45);
  background:rgba(214,181,109,.10);
  padding:8px 13px;
  border-radius:30px;
  font-size:10px;
  font-weight:800;
  letter-spacing:1.2px;
}

.lesen-hero-main {
  display:flex;
  justify-content:space-between;
  align-items:flex-end;
  gap:30px;
}

.lesen-hero-main h1 {
  font-size:42px;
  font-weight:800;
  letter-spacing:-1px;
  margin:10px 0;
}

.lesen-hero-main p {
  color:#D2DAE5;
  font-size:14px;
  line-height:1.8;
  max-width:520px;
  margin:0;
}

.lesen-hero-decoration {
  position:absolute;
  right:25px;
  top:100px;
  font-size:100px;
  font-weight:900;
  letter-spacing:-7px;
  color:rgba(255,255,255,.035);
  pointer-events:none;
}

.lesen-hero .lesen-stats {
  display:flex;
  gap:25px;
  flex-shrink:0;
  margin:0;
  padding:18px 20px;
  background:rgba(255,255,255,.07);
  border:1px solid rgba(255,255,255,.10);
  border-radius:12px;
  position:relative;
  z-index:1;
}
        .lesen-eyebrow { color:#B8954D; font-size:10px; font-weight:700; letter-spacing:1.4px; }
        .lesen-hero h1 { font-size:32px; margin:9px 0; }
        .lesen-hero p { color:#D2DAE5; font-size:13px; line-height:1.7; max-width:600px; }
        .lesen-stats { display:flex; gap:35px; margin-top:25px; }
        .lesen-stats div { display:flex; flex-direction:column; gap:5px; }
        .lesen-stats strong { color:#D6B56D; font-size:23px; }
        .lesen-stats span { color:#D2DAE5; font-size:11px; }
        .lesen-section-title,.lesen-list-heading { display:flex; justify-content:space-between; align-items:center; margin-bottom:17px; }
        .lesen-section-title h2,.lesen-list-heading h2 {
  font-size:30px;
  font-weight:800;
  letter-spacing:-0.7px;
  color:#172B4D;
  margin:10px 0 0;
  line-height:1.2;
}
        .lesen-parties { margin-bottom:40px; }
        .lesen-part-card { display:flex; align-items:center; gap:15px; padding:17px; background:white; border:1px solid #E6EAF0; border-radius:11px; margin-bottom:11px; text-decoration:none; color:#172B4D; }
        .lesen-part-card:hover { border-color:#D6B56D; }
        .lesen-part-icon { width:43px; height:43px; display:grid; place-items:center; background:#F5EEDC; color:#A18142; border-radius:9px; flex-shrink:0; }
        .lesen-part-info { display:flex; flex-direction:column; gap:5px; flex:1; }
        .lesen-part-info strong { font-size:14px; }
        .lesen-part-info span { color:#8792A1; font-size:11px; }
        .lesen-part-count { color:#A18142; font-size:11px; font-weight:700; white-space:nowrap; }
        .lesen-arrow { color:#A18142; }
        .lesen-exercises { background:white; border:1px solid #E6EAF0; border-radius:13px; padding:23px; margin-bottom:22px; scroll-margin-top:20px; }
.lesen-part-title {
  display: flex;
  align-items: center;
  gap: 14px;
  background: #172B4D;
  color: white;
  padding: 16px 22px;
  border-radius: 10px;
  font-size: 25px !important;
  font-weight: 800;
  letter-spacing: 0.3px;
  box-shadow: 0 5px 15px rgba(23,43,77,0.12);
}

.lesen-exercises .lesen-part-title {
  color: #FFFFFF !important;
  background: #172B4D !important;
}

.lesen-part-title span {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  border-radius: 8px;
  background: #D6B56D;
  color: #172B4D;
  font-size: 17px;
  font-weight: 800;
}
        .lesen-total { color:#A18142; font-size:11px; font-weight:700; }
        .lesen-pending { color:#8792A1; background:#F1F3F6; padding:7px 10px; border-radius:20px; font-size:10px; }
        .lesen-placeholder { color:#8792A1; background:#F7F8FA; padding:17px; border-radius:8px; font-size:12px; }
        .lesen-exercise-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
}

@media(max-width:900px) {
  .lesen-exercise-grid {
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
  }
}

@media(max-width:600px) {
  .lesen-exercise-grid {
    grid-template-columns:1fr;
    gap:12px;
  }
}
        .lesen-exercise-card {
  border:1px solid #E8ECF2;
  border-radius:12px;
  padding:17px;
  display:grid;
  grid-template-columns:40px 1fr;
  gap:10px 13px;
  align-items:center;
  background:#FFFFFF;
  transition:all .22s ease;
}

.lesen-exercise-card:hover {
  border-color:#D6B56D;
  transform:translateY(-3px);
  box-shadow:0 8px 20px rgba(23,43,77,.07);
}
        .lesen-exercise-number {
  width:40px;
  height:40px;
  display:grid;
  place-items:center;
  background:#172B4D;
  color:#D6B56D;
  border-radius:11px;
  font-size:13px;
  font-weight:800;
  letter-spacing:.4px;
  box-shadow:0 3px 8px rgba(23,43,77,.12);
}
       .lesen-exercise-name {
  font-size:14px;
  font-weight:750;
  color:#172B4D;
  line-height:1.5;
  letter-spacing:.1px;
}
.lesen-exercise-info {
  display:flex;
  flex-direction:column;
  gap:8px;
  min-width:0;
}

.lesen-exercise-info h3 {
  margin:0;
  color:#172B4D;
  font-size:14px;
  font-weight:750;
  line-height:1.5;
  overflow-wrap:anywhere;
}

.lesen-exercise-meta {
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:8px;
}
        .lesen-revision { grid-column:2; color:#A18142; font-size:10px; }
        .lesen-exercise-level { grid-column:2; color:#929CAB; font-size:10px; }
        .lesen-footer { border-top:1px solid #E7EBF0; padding-top:20px; color:#929CAB; font-size:11px; margin-top:35px; }
        @media(max-width:600px) {
.lesen-tabs {
  grid-template-columns:1fr;
  gap:12px;
}

.lesen-tab {
  min-height:85px;
  padding:15px;
}

.lesen-tab-content strong {
  font-size:17px;
}
.lesen-hero-main {
  flex-direction:column;
  align-items:flex-start;
  gap:22px;
}

.lesen-hero-main h1 {
  font-size:34px;
}

.lesen-hero .lesen-stats {
  width:100%;
  box-sizing:border-box;
  justify-content:space-around;
  gap:10px;
}

.lesen-hero-decoration {
  font-size:65px;
  top:115px;
  right:12px;
}
          .lesen-header { padding:0 17px; }
          .lesen-content { padding:25px 15px 35px; }
          .lesen-hero { padding:23px; }
          .lesen-hero h1 { font-size:27px; }
          .lesen-exercises { padding:16px; }
          .lesen-exercise-grid {
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:16px;
}

@media(max-width:600px) {
  .lesen-exercise-grid {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
}

@media(max-width:900px) {
  .lesen-exercise-grid {
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
  }
}

@media(max-width:600px) {
  .lesen-exercise-grid {
    grid-template-columns:1fr;
    gap:12px;
  }
}
}
          .lesen-part-info span { line-height:1.5; }
          .lesen-part-count { font-size:10px; }
        }
.lesen-tabs {
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:18px;
  margin-top:25px;
}

.lesen-tab {
  display:flex;
  align-items:center;
  gap:14px;
  min-height:112px;
  padding:20px;
  border:1px solid #E6EAF0;
  border-radius:14px;
  background:#FFFFFF;
  color:#172B4D;
  text-align:left;
  cursor:pointer;
  transition:all .25s ease;
  box-shadow:0 3px 12px rgba(23,43,77,.035);
}

.lesen-tab:hover {
  border-color:#D6B56D;
  transform:translateY(-4px);
  box-shadow:0 10px 22px rgba(23,43,77,.09);
}

.lesen-tab.active {
  background:#172B4D;
  border-color:#172B4D;
  color:white;
  box-shadow:0 9px 22px rgba(23,43,77,.18);
}

.lesen-tab-number {
  display:grid;
  place-items:center;
  min-width:46px;
  height:46px;
  border-radius:11px;
  background:#F5EEDC;
  color:#A18142;
  font-size:18px;
  font-weight:800;
}

.lesen-tab.active .lesen-tab-number {
  background:#D6B56D;
  color:#172B4D;
}

.lesen-tab-content {
  display:flex;
  flex-direction:column;
  gap:7px;
  flex:1;
}

.lesen-tab-content strong {
  font-size:19px;
  font-weight:800;
}

.lesen-tab-content small {
  font-size:11px;
  color:#A18142;
  font-weight:600;
}

.lesen-tab.active .lesen-tab-content small {
  color:#D6B56D;
}

.lesen-tab-arrow {
  font-size:22px;
  color:#A18142;
  transition:transform .2s ease;
}

.lesen-tab.active .lesen-tab-arrow {
  color:#D6B56D;
}

.lesen-tab:hover .lesen-tab-arrow {
  transform:translateX(4px);
}

.lesen-tab {
  display: flex;
  align-items: center;
  gap: 13px;
  min-height: 105px;
  padding: 18px;
  border: 1px solid #E1E6ED;
  border-radius: 13px;
  background: white;
  color: #172B4D;
  text-align: left;
  cursor: pointer;
  transition: all .2s ease;
}

.lesen-tab:hover {
  border-color: #D6B56D;
  transform: translateY(-3px);
}

.lesen-tab.active .lesen-tab-content strong {
  color: #FFFFFF !important;
}

.lesen-tab.active {
  background: #172B4D;
  border-color: #172B4D;
  color: white;
  box-shadow: 0 7px 18px rgba(23,43,77,.16);
}

.lesen-tab-number {
  display: grid;
  place-items: center;
  min-width: 43px;
  height: 43px;
  border-radius: 9px;
  background: #F5EEDC;
  color: #A18142;
  font-size: 17px;
  font-weight: 800;
}

.lesen-tab-content {
  display: flex;
  flex-direction: column;
  gap: 7px;
  flex: 1;
}

.lesen-tab-content strong {
  font-size: 19px;
  font-weight: 800;
}

.lesen-tab-content small {
  font-size: 11px;
  color: #B8954D;
}

.lesen-tab.active .lesen-tab-content small {
  color: #D6B56D;
}

.lesen-tab-arrow {
  font-size: 22px;
  color: #B8954D;
}

@media(max-width:650px) {
  .lesen-tabs {
    grid-template-columns: 1fr;
  }
}
.lesen-level {
  display:inline-flex;
  align-items:center;
  justify-content:center;
  min-width:38px;
  padding:5px 10px;
  background:#F5EEDC;
  color:#172B4D;
  border:1px solid #E5D4A9;
  border-radius:20px;
  font-size:10px;
  font-weight:800;
  letter-spacing:.7px;
}

.lesen-part-label {
  display:inline-flex;
  align-items:center;
  padding:5px 10px;
  background:#F8EDEF;
  color:#A83245;
  border:1px solid #EBCBD1;
  border-radius:20px;
  font-size:10px;
  font-weight:800;
  letter-spacing:.6px;
}

      `}</style>
    </main>
  )
}

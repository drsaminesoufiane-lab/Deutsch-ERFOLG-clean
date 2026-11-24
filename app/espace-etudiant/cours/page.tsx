'use client'
import Link from 'next/link'
import { GraduationCap, ArrowLeft, BookOpen, Headphones, PenLine, Mic, Lock } from 'lucide-react'

const niveaux = [
  {
    nom: 'TELC B1',
    description: 'Niveau intermédiaire',
    competences: [
      { nom: 'Lesen', traduction: 'Compréhension écrite', Icon: BookOpen },
      { nom: 'Hören', traduction: 'Compréhension orale', Icon: Headphones },
      { nom: 'Schreiben', traduction: 'Expression écrite', Icon: PenLine },
      { nom: 'Sprechen', traduction: 'Expression orale', Icon: Mic },
    ]
  },
  {
    nom: 'TELC B2',
    description: 'Niveau avancé',
    competences: [
      { nom: 'Lesen', traduction: 'Compréhension écrite', Icon: BookOpen },
      { nom: 'Hören', traduction: 'Compréhension orale', Icon: Headphones },
      { nom: 'Schreiben', traduction: 'Expression écrite', Icon: PenLine },
      { nom: 'Sprechen', traduction: 'Expression orale', Icon: Mic },
    ]
  }
]

export default function CoursPage() {
  return (
    <main className="courses-page">
      <header className="courses-header">
        <Link href="/espace-etudiant" className="courses-brand">
          <GraduationCap size={27} />
          Deutsch <strong>Erfolg</strong>
        </Link>
        <Link href="/espace-etudiant" className="back-dashboard">
          <ArrowLeft size={17} /> Tableau de bord
        </Link>
      </header>

      <div className="courses-content">
        <div className="courses-intro">
          <span>VOTRE FORMATION</span>
          <h1>Mes cours</h1>
          <p>Choisissez votre niveau et explorez les quatre compétences de l'examen TELC.</p>
        </div>

        {niveaux.map((niveau) => (
          <section className="course-level" key={niveau.nom}>
            <div className="course-level-heading">
              <div>
                <span>PROGRAMME D'APPRENTISSAGE</span>
                <h2>{niveau.nom}</h2>
                <p>{niveau.description}</p>
              </div>
              <GraduationCap size={38} />
            </div>

            <div className="course-skills">
              {niveau.competences.map(({ nom, traduction, Icon }) => (
                <article className="course-skill" key={nom}>
                  <div className="course-skill-icon"><Icon size={25} /></div>
                  <div>
                    <h3>{nom}</h3>
                    <p>{traduction}</p>
                  </div>
                  <span className="course-lock"><Lock size={15} /> Bientôt</span>
                </article>
              ))}
            </div>
          </section>
        ))}

        <footer className="courses-footer">
          © 2026 Deutsch Erfolg
        </footer>
      </div>

      <style jsx global>{`
        .courses-page { min-height: 100vh; background: #F7F8FA; color: #172B4D; font-family: Arial, sans-serif; }
        .courses-header { height: 76px; background: #172B4D; display: flex; align-items: center; justify-content: space-between; padding: 0 7%; }
        .courses-brand { display: flex; align-items: center; gap: 9px; color: white; text-decoration: none; font-size: 20px; font-weight: 700; }
        .courses-brand svg { color: #D6B56D; }
        .courses-brand strong { color: #D6B56D; }
        .back-dashboard { color: white; text-decoration: none; font-size: 13px; display: flex; align-items: center; gap: 8px; }
        .courses-content { max-width: 1050px; margin: auto; padding: 48px 25px; }
        .courses-intro { margin-bottom: 35px; }
        .courses-intro > span, .course-level-heading span { color: #A18142; font-size: 10px; letter-spacing: 1.5px; font-weight: 700; }
        .courses-intro h1 { font-size: 32px; margin: 10px 0; }
        .courses-intro p { color: #778497; font-size: 14px; }
        .course-level { background: white; border: 1px solid #E7EBF0; border-radius: 14px; padding: 26px; margin-bottom: 25px; }
        .course-level-heading { display: flex; justify-content: space-between; align-items: center; padding-bottom: 20px; border-bottom: 1px solid #EDF0F3; }
        .course-level-heading svg { color: #D6B56D; }
        .course-level-heading h2 { font-size: 24px; margin: 7px 0 3px; }
        .course-level-heading p { font-size: 12px; color: #8792A1; margin: 0; }
        .course-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; padding-top: 20px; }
        .course-skill { display: flex; align-items: center; gap: 13px; padding: 17px; background: #FAFBFC; border: 1px solid #EDF0F3; border-radius: 10px; }
        .course-skill-icon { width: 45px; height: 45px; flex-shrink: 0; display: grid; place-items: center; background: #F5EEDC; color: #A18142; border-radius: 10px; }
        .course-skill h3 { font-size: 15px; margin: 0 0 5px; }
        .course-skill p { color: #8490A0; font-size: 11px; margin: 0; }
        .course-lock { margin-left: auto; color: #9A7B41; font-size: 10px; display: flex; align-items: center; gap: 5px; white-space: nowrap; }
        .courses-footer { border-top: 1px solid #E7EBF0; padding-top: 20px; color: #929CAB; font-size: 11px; }
        @media(max-width: 600px) {
          .courses-header { padding: 0 17px; }
          .courses-brand { font-size: 17px; }
          .back-dashboard { font-size: 11px; }
          .courses-content { padding: 30px 15px; }
          .courses-intro h1 { font-size: 27px; }
          .course-level { padding: 17px; }
          .course-skills { grid-template-columns: 1fr; }
        }
      `}</style>
    </main>
  )
}

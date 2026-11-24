'use client'

import Link from 'next/link'
import {
  GraduationCap, BookOpen, Headphones, PenLine, Mic,
  ArrowRight, CheckCircle2, Trophy, Target, Clock,
  PlayCircle, Star, Menu
} from 'lucide-react'

const skills = [
  {
    title: 'Lesen',
    subtitle: 'Compréhension écrite',
    description: 'Développez votre compréhension grâce à des textes et des exercices adaptés au TELC.',
    Icon: BookOpen,
    number: '01'
  },
  {
    title: 'Hören',
    subtitle: 'Compréhension orale',
    description: 'Entraînez votre oreille avec des audios et des questionnaires progressifs.',
    Icon: Headphones,
    number: '02'
  },
  {
    title: 'Schreiben',
    subtitle: 'Expression écrite',
    description: 'Apprenez à rédiger des textes structurés et adaptés aux exigences de l’examen.',
    Icon: PenLine,
    number: '03'
  },
  {
    title: 'Sprechen',
    subtitle: 'Expression orale',
    description: 'Préparez-vous à parler allemand avec confiance dans les situations du quotidien.',
    Icon: Mic,
    number: '04'
  }
]

const benefits = [
  'Des cours organisés par niveau',
  'Des exercices interactifs corrigés automatiquement',
  'Des explications pour comprendre vos erreurs',
  'Un suivi de vos résultats et de votre progression'
]

export default function HomePage() {
  return (
    <main className="home-page">

      {/* NAVIGATION */}
      <header className="home-header">
        <div className="home-nav">
          <Link href="/" className="home-brand">
            <span className="brand-icon"><GraduationCap size={29} /></span>
            <span>Deutsch <strong>Erfolg</strong></span>
          </Link>

          <nav className="desktop-nav">
            <a href="#accueil">Accueil</a>
            <a href="#formation">Formation</a>
            <a href="#niveaux">Niveaux</a>
            <a href="#avantages">Pourquoi nous ?</a>
          </nav>

          <div className="nav-actions">
            <Link href="/connexion" className="login-button">Connexion</Link>
            <Link href="/inscription" className="nav-cta">
              Commencer <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section" id="accueil">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="label-dot" />
              VOTRE PLATEFORME D'APPRENTISSAGE DE L'ALLEMAND
            </div>

            <h1>
              Votre réussite en allemand
              <span> commence ici.</span>
            </h1>

            <p className="hero-description">
              Préparez votre examen TELC avec une méthode structurée,
              des exercices pratiques et un accompagnement pensé
              pour vous faire progresser.
            </p>

            <div className="hero-actions">
              <Link href="/inscription" className="primary-button">
                Commencer maintenant <ArrowRight size={18} />
              </Link>
              <Link href="/connexion" className="secondary-button">
                <PlayCircle size={19} /> Déjà inscrit ? Connexion
              </Link>
            </div>

            <div className="hero-trust">
              <div className="trust-icon"><CheckCircle2 size={18} /></div>
              <span>Apprenez à votre rythme, où que vous soyez.</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />
            <div className="visual-card main-visual-card">
              <div className="visual-card-top">
                <div>
                  <span className="visual-small">VOTRE OBJECTIF</span>
                  <h3>Réussir le TELC</h3>
                </div>
                <div className="visual-trophy"><Trophy size={25} /></div>
              </div>

              <div className="visual-levels">
                <div className="visual-level b1-level">
                  <div className="level-circle">B1</div>
                  <div>
                    <strong>TELC B1</strong>
                    <span>Niveau intermédiaire</span>
                  </div>
                  <CheckCircle2 size={20} />
                </div>
                <div className="visual-level b2-level">
                  <div className="level-circle">B2</div>
                  <div>
                    <strong>TELC B2</strong>
                    <span>Niveau avancé</span>
                  </div>
                  <ArrowRight size={20} />
                </div>
              </div>

              <div className="visual-divider" />

              <div className="visual-progress-title">
                <span>Vos compétences</span>
                <span>04 modules</span>
              </div>
              <div className="visual-skills">
                <span><BookOpen size={16} /> Lesen</span>
                <span><Headphones size={16} /> Hören</span>
                <span><PenLine size={16} /> Schreiben</span>
                <span><Mic size={16} /> Sprechen</span>
              </div>
            </div>

            <div className="floating-note note-top">
              <div className="floating-icon"><Star size={17} /></div>
              <div><strong>Progressez</strong><span>À votre rythme</span></div>
            </div>

            <div className="floating-note note-bottom">
              <div className="floating-icon gold-icon"><Target size={18} /></div>
              <div><strong>Objectif TELC</strong><span>B1 & B2</span></div>
            </div>
          </div>
        </div>

        <div className="hero-bottom-line" />
      </section>

      {/* NIVEAUX */}
      <section className="levels-section" id="niveaux">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">CHOISISSEZ VOTRE OBJECTIF</span>
            <h2>Deux niveaux, un seul objectif : <span>votre réussite.</span></h2>
            <p>Une préparation adaptée à votre niveau et à vos ambitions.</p>
          </div>

          <div className="levels-grid">
            <article className="level-card">
              <div className="level-card-top">
                <span className="level-tag">INTERMÉDIAIRE</span>
                <span className="level-number">01</span>
              </div>
              <div className="big-level">B1</div>
              <h3>Préparation TELC B1</h3>
              <p>
                Consolidez vos bases en allemand et développez les compétences
                nécessaires pour réussir votre examen B1.
              </p>
              <div className="level-card-footer">
                <span>Votre prochaine étape</span>
                <Link href="/inscription" aria-label="Commencer la préparation B1">
                  <ArrowRight size={19} />
                </Link>
              </div>
            </article>

            <article className="level-card level-card-dark">
              <div className="level-card-top">
                <span className="level-tag">AVANCÉ</span>
                <span className="level-number">02</span>
              </div>
              <div className="big-level">B2</div>
              <h3>Préparation TELC B2</h3>
              <p>
                Approfondissez votre maîtrise de l'allemand et préparez-vous
                aux exigences du niveau B2.
              </p>
              <div className="level-card-footer">
                <span>Visez plus haut</span>
                <Link href="/inscription" aria-label="Commencer la préparation B2">
                  <ArrowRight size={19} />
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* COMPETENCES */}
      <section className="skills-section" id="formation">
        <div className="section-container">
          <div className="section-heading">
            <span className="section-eyebrow">UNE PRÉPARATION COMPLÈTE</span>
            <h2>Maîtrisez les quatre <span>compétences.</span></h2>
            <p>Entraînez-vous sur les quatre parties essentielles de l'examen TELC.</p>
          </div>

          <div className="skills-grid">
            {skills.map(({ title, subtitle, description, Icon, number }) => (
              <article className="skill-card" key={title}>
                <div className="skill-card-top">
                  <div className="skill-icon"><Icon size={25} /></div>
                  <span>{number}</span>
                </div>
                <h3>{title}</h3>
                <strong>{subtitle}</strong>
                <p>{description}</p>
                <div className="skill-card-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVANTAGES */}
      <section className="benefits-section" id="avantages">
        <div className="section-container benefits-container">
          <div className="benefits-content">
            <span className="section-eyebrow">APPRENEZ PLUS EFFICACEMENT</span>
            <h2>Une méthode conçue pour vous faire <span>progresser.</span></h2>
            <p>
              Deutsch Erfolg vous accompagne tout au long de votre préparation
              avec un espace d'apprentissage organisé et des outils pratiques.
            </p>

            <div className="benefits-list">
              {benefits.map((benefit) => (
                <div className="benefit-item" key={benefit}>
                  <CheckCircle2 size={19} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <Link href="/inscription" className="primary-button">
              Rejoindre Deutsch Erfolg <ArrowRight size={18} />
            </Link>
          </div>

          <div className="benefits-visual">
            <div className="benefits-decoration">
              <GraduationCap size={105} strokeWidth={1.1} />
            </div>
            <div className="benefits-quote">
              <span className="quote-mark">“</span>
              <h3>Jede Reise beginnt mit dem ersten Schritt.</h3>
              <p>Chaque voyage commence par le premier pas.</p>
              <div className="quote-line" />
              <span className="quote-brand">DEUTSCH ERFOLG</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="final-cta-content">
          <span>VOTRE AVENIR COMMENCE AUJOURD'HUI</span>
          <h2>Prêt à réussir votre examen TELC ?</h2>
          <p>Faites le premier pas vers votre objectif en allemand.</p>
          <Link href="/inscription" className="final-cta-button">
            Créer mon compte <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="home-brand">
              <span className="brand-icon"><GraduationCap size={29} /></span>
              <span>Deutsch <strong>Erfolg</strong></span>
            </Link>
            <p>
              Votre partenaire pour apprendre l'allemand et préparer
              votre réussite aux examens TELC.
            </p>
          </div>

          <div className="footer-links">
            <strong>Navigation</strong>
            <a href="#accueil">Accueil</a>
            <a href="#formation">Formation</a>
            <a href="#niveaux">Niveaux TELC</a>
            <a href="#avantages">À propos</a>
          </div>

          <div className="footer-links">
            <strong>Mon compte</strong>
            <Link href="/connexion">Connexion</Link>
            <Link href="/inscription">Inscription</Link>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Deutsch Erfolg. Tous droits réservés.</span>
          <Link href="/administration">Administration</Link>
        </div>
      </footer>

      <style jsx global>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; }
        .home-page {
          background: #fff;
          color: #172B4D;
          font-family: Arial, Helvetica, sans-serif;
          overflow: hidden;
        }
        .home-header {
          height: 82px;
          background: #fff;
          border-bottom: 1px solid #edf0f4;
          position: relative;
          z-index: 5;
        }
        .home-nav {
          max-width: 1240px;
          height: 100%;
          margin: auto;
          padding: 0 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 25px;
        }
        .home-brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #172B4D;
          text-decoration: none;
          font-size: 20px;
          font-weight: 700;
          white-space: nowrap;
        }
        .home-brand strong { color: #B38D49; }
        .brand-icon { color: #B38D49; display: flex; }
        .desktop-nav { display: flex; align-items: center; gap: 30px; }
        .desktop-nav a {
          color: #637087;
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: .2s;
        }
        .desktop-nav a:hover { color: #B38D49; }
        .nav-actions { display: flex; align-items: center; gap: 12px; }
        .login-button {
          color: #172B4D;
          text-decoration: none;
          font-size: 13px;
          font-weight: 700;
          padding: 12px 15px;
        }
        .nav-cta, .primary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #172B4D;
          color: white;
          text-decoration: none;
          border-radius: 7px;
          padding: 13px 19px;
          font-size: 13px;
          font-weight: 700;
          transition: .2s;
        }
        .nav-cta:hover, .primary-button:hover { background: #28466F; transform: translateY(-2px); }

        .hero-section {
          background: #F7F8FA;
          position: relative;
          padding: 85px 28px 90px;
        }
        .hero-container {
          max-width: 1180px;
          margin: auto;
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          align-items: center;
          gap: 55px;
          min-height: 440px;
        }
        .hero-label, .section-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #A18142;
          font-size: 10px;
          letter-spacing: 1.5px;
          font-weight: 800;
        }
        .label-dot { width: 7px; height: 7px; border-radius: 50%; background: #C4A15C; }
        .hero-content h1 {
          font-size: clamp(38px, 5vw, 59px);
          line-height: 1.12;
          letter-spacing: -2px;
          margin: 22px 0 20px;
          color: #172B4D;
          max-width: 620px;
        }
        .hero-content h1 span { color: #B38D49; }
        .hero-description {
          color: #718096;
          font-size: 15px;
          line-height: 1.85;
          max-width: 520px;
          margin: 0;
        }
        .hero-actions { display: flex; align-items: center; gap: 20px; flex-wrap: wrap; margin-top: 30px; }
        .hero-actions .primary-button { padding: 15px 20px; }
        .secondary-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #52627A;
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
        }
        .secondary-button:hover { color: #B38D49; }
        .hero-trust { display: flex; align-items: center; gap: 9px; margin-top: 30px; color: #7C899B; font-size: 11px; }
        .trust-icon { color: #B38D49; display: flex; }
        .hero-visual { min-height: 390px; display: flex; justify-content: center; align-items: center; position: relative; }
        .visual-glow {
          width: 350px; height: 350px; border-radius: 50%;
          background: #E9E1D1; position: absolute; opacity: .65;
        }
        .main-visual-card {
          width: min(100%, 390px);
          background: white;
          border-radius: 17px;
          padding: 28px;
          position: relative;
          z-index: 1;
          box-shadow: 0 20px 60px rgba(23,43,77,.12);
          border: 1px solid #edf0f4;
        }
        .visual-card-top { display: flex; justify-content: space-between; align-items: center; }
        .visual-small { color: #A18142; font-size: 9px; letter-spacing: 1.4px; font-weight: 800; }
        .visual-card-top h3 { font-size: 21px; margin: 8px 0 0; }
        .visual-trophy { width: 48px; height: 48px; display: grid; place-items: center; border-radius: 13px; background: #F7F0E1; color: #B38D49; }
        .visual-levels { display: grid; gap: 12px; margin-top: 28px; }
        .visual-level { display: flex; align-items: center; gap: 13px; border: 1px solid #E9EDF2; border-radius: 10px; padding: 13px; }
        .visual-level > div:nth-child(2) { flex: 1; }
        .visual-level > svg { color: #B38D49; }
        .level-circle { width: 43px; height: 43px; display: grid; place-items: center; border-radius: 10px; background: #F5EEDC; color: #99763B; font-weight: 800; font-size: 15px; }
        .b2-level .level-circle { background: #EAF0F7; color: #355477; }
        .visual-level strong, .visual-level span { display: block; }
        .visual-level strong { font-size: 12px; }
        .visual-level span { color: #8B96A5; font-size: 10px; margin-top: 4px; }
        .visual-divider { height: 1px; background: #EDF0F3; margin: 22px 0 17px; }
        .visual-progress-title { display: flex; justify-content: space-between; color: #64748B; font-size: 10px; font-weight: 700; }
        .visual-progress-title span:last-child { color: #A18142; }
        .visual-skills { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 15px; }
        .visual-skills span { display: flex; align-items: center; gap: 8px; color: #637087; font-size: 11px; }
        .visual-skills svg { color: #B38D49; }
        .floating-note {
          position: absolute; z-index: 2; display: flex; align-items: center; gap: 10px;
          background: white; padding: 12px 15px; border-radius: 11px;
          box-shadow: 0 10px 30px rgba(23,43,77,.12);
        }
        .note-top { top: 30px; right: -15px; }
        .note-bottom { bottom: 27px; left: -17px; }
        .floating-icon { width: 34px; height: 34px; display: grid; place-items: center; border-radius: 9px; background: #EDF2F8; color: #355477; }
        .gold-icon { background: #F7F0E1; color: #B38D49; }
        .floating-note strong, .floating-note span { display: block; }
        .floating-note strong { font-size: 11px; }
        .floating-note span { color: #8B96A5; font-size: 9px; margin-top: 4px; }
        .hero-bottom-line { position: absolute; bottom: 0; left: 0; right: 0; height: 4px; background: linear-gradient(90deg,#172B4D 0%,#B38D49 100%); }

        .section-container { max-width: 1180px; margin: auto; padding-left: 28px; padding-right: 28px; }
        .levels-section, .skills-section { padding: 85px 0; }
        .section-heading { text-align: center; max-width: 720px; margin: 0 auto 43px; }
        .section-heading h2, .benefits-content h2 {
          font-size: clamp(27px, 3.5vw, 39px);
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 13px 0;
          color: #172B4D;
        }
        .section-heading h2 span, .benefits-content h2 span { color: #B38D49; }
        .section-heading p { color: #7B8798; font-size: 13px; line-height: 1.7; }
        .levels-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
        .level-card { border: 1px solid #E8ECF1; border-radius: 14px; padding: 29px 31px; background: white; }
        .level-card-dark { background: #172B4D; color: white; border-color: #172B4D; }
        .level-card-top { display: flex; justify-content: space-between; align-items: center; }
        .level-tag { background: #F5EEDC; color: #98783B; border-radius: 5px; padding: 7px 10px; font-size: 9px; font-weight: 800; letter-spacing: 1px; }
        .level-card-dark .level-tag { background: rgba(214,181,109,.16); color: #E2C47E; }
        .level-number { color: #C0C8D2; font-size: 12px; font-weight: 700; }
        .level-card-dark .level-number { color: #8293AA; }
        .big-level { color: #B38D49; font-size: 58px; line-height: 1; font-weight: 800; margin-top: 28px; letter-spacing: -3px; }
        .level-card h3 { font-size: 19px; margin: 12px 0 9px; }
        .level-card p { color: #7B8798; font-size: 12px; line-height: 1.8; max-width: 430px; min-height: 44px; }
        .level-card-dark p { color: #C2CCDA; }
        .level-card-footer { display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #E9EDF2; padding-top: 17px; margin-top: 23px; color: #9A7B41; font-size: 11px; font-weight: 700; }
        .level-card-dark .level-card-footer { border-color: rgba(255,255,255,.15); color: #E2C47E; }
        .level-card-footer a { display: grid; place-items: center; width: 34px; height: 34px; border-radius: 50%; background: #F5EEDC; color: #98783B; }
        .level-card-dark .level-card-footer a { background: #D6B56D; color: #172B4D; }

        .skills-section { background: #F7F8FA; }
        .skills-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 15px; }
        .skill-card { background: white; border: 1px solid #E9EDF2; border-radius: 12px; padding: 22px 19px; transition: .2s; }
        .skill-card:hover { transform: translateY(-5px); box-shadow: 0 12px 30px rgba(23,43,77,.07); }
        .skill-card-top { display: flex; justify-content: space-between; align-items: center; }
        .skill-icon { width: 47px; height: 47px; display: grid; place-items: center; background: #F5EEDC; color: #A18142; border-radius: 11px; }
        .skill-card-top > span { color: #C5CCD5; font-size: 11px; font-weight: 800; }
        .skill-card h3 { font-size: 20px; margin: 20px 0 5px; }
        .skill-card > strong { font-size: 10px; color: #A18142; }
        .skill-card p { color: #7B8798; font-size: 11px; line-height: 1.8; min-height: 80px; }
        .skill-card-line { height: 3px; width: 35px; background: #D6B56D; border-radius: 5px; }

        .benefits-section { padding: 90px 0; }
        .benefits-container { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 65px; }
        .benefits-content h2 { margin-top: 16px; }
        .benefits-content > p { color: #7B8798; font-size: 13px; line-height: 1.9; max-width: 520px; }
        .benefits-list { display: grid; gap: 16px; margin: 27px 0 30px; }
        .benefit-item { display: flex; align-items: center; gap: 11px; color: #52627A; font-size: 12px; }
        .benefit-item svg { color: #B38D49; flex-shrink: 0; }
        .benefits-visual { min-height: 340px; border-radius: 17px; background: #172B4D; display: grid; place-items: center; position: relative; overflow: hidden; padding: 35px; }
        .benefits-decoration { position: absolute; top: -25px; right: -15px; color: rgba(214,181,109,.12); transform: rotate(12deg); }
        .benefits-quote { position: relative; text-align: center; max-width: 370px; }
        .quote-mark { color: #D6B56D; font-family: Georgia,serif; font-size: 70px; line-height: .7; }
        .benefits-quote h3 { color: white; font-size: 26px; line-height: 1.4; font-weight: 600; }
        .benefits-quote p { color: #C2CCDA; font-size: 12px; }
        .quote-line { width: 40px; height: 2px; background: #D6B56D; margin: 23px auto; }
        .quote-brand { color: #D6B56D; font-size: 9px; letter-spacing: 2px; font-weight: 800; }

        .final-cta { background: #F7F8FA; padding: 72px 25px; text-align: center; border-top: 1px solid #EDF0F3; }
        .final-cta-content > span { color: #A18142; font-size: 10px; letter-spacing: 1.5px; font-weight: 800; }
        .final-cta h2 { color: #172B4D; font-size: clamp(25px,4vw,36px); margin: 14px 0 10px; }
        .final-cta p { color: #7B8798; font-size: 13px; margin-bottom: 25px; }
        .final-cta-button { display: inline-flex; align-items: center; gap: 10px; background: #D6B56D; color: #172B4D; padding: 14px 21px; border-radius: 7px; text-decoration: none; font-size: 12px; font-weight: 800; transition: .2s; }
        .final-cta-button:hover { background: #E4C985; transform: translateY(-2px); }

        .home-footer { background: #142540; color: white; padding: 48px 28px 0; }
        .footer-main { max-width: 1180px; margin: auto; display: grid; grid-template-columns: 2fr 1fr 1fr; gap: 55px; padding-bottom: 40px; }
        .footer-brand .home-brand { color: white; }
        .footer-brand p { color: #AEBBCD; font-size: 11px; line-height: 1.8; max-width: 300px; margin-top: 17px; }
        .footer-links { display: flex; flex-direction: column; gap: 13px; }
        .footer-links strong { color: #D6B56D; font-size: 12px; margin-bottom: 5px; }
        .footer-links a { color: #C2CCDA; text-decoration: none; font-size: 11px; }
        .footer-links a:hover, .footer-bottom a:hover { color: #D6B56D; }
        .footer-bottom { max-width: 1180px; margin: auto; border-top: 1px solid rgba(255,255,255,.12); padding: 19px 0; display: flex; justify-content: space-between; gap: 15px; color: #9EADBF; font-size: 10px; }
        .footer-bottom a { color: #D6B56D; text-decoration: none; }

        @media(max-width: 900px) {
          .desktop-nav { gap: 15px; }
          .desktop-nav a { font-size: 11px; }
          .hero-container { gap: 25px; }
          .skills-grid { grid-template-columns: repeat(2,1fr); }
          .benefits-container { gap: 30px; }
          .note-top { right: -5px; }
          .note-bottom { left: -5px; }
        }
        @media(max-width: 650px) {
          .home-header { height: 70px; }
          .home-nav { padding: 0 17px; }
          .home-brand { font-size: 17px; }
          .desktop-nav { display: none; }
          .nav-actions { gap: 3px; }
          .login-button { padding: 10px 8px; font-size: 11px; }
          .nav-cta { padding: 11px 12px; font-size: 11px; }
          .hero-section { padding: 55px 18px 65px; }
          .hero-container { grid-template-columns: 1fr; gap: 30px; }
          .hero-content h1 { font-size: 39px; letter-spacing: -1.5px; }
          .hero-description { font-size: 13px; }
          .hero-actions { align-items: flex-start; flex-direction: column; gap: 17px; }
          .hero-visual { min-height: 360px; }
          .main-visual-card { padding: 21px; }
          .note-top { right: -4px; top: 10px; }
          .note-bottom { left: -3px; bottom: 10px; }
          .levels-section, .skills-section { padding: 62px 0; }
          .section-container { padding-left: 18px; padding-right: 18px; }
          .section-heading { margin-bottom: 30px; }
          .section-heading h2 { font-size: 28px; }
          .levels-grid { grid-template-columns: 1fr; }
          .level-card { padding: 23px; }
          .skills-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
          .skill-card { padding: 15px 12px; }
          .skill-card h3 { font-size: 17px; }
          .skill-card p { font-size: 10px; min-height: 105px; }
          .benefits-section { padding: 65px 0; }
          .benefits-container { grid-template-columns: 1fr; gap: 35px; }
          .benefits-content h2 { font-size: 30px; }
          .benefits-visual { min-height: 290px; }
          .benefits-quote h3 { font-size: 22px; }
          .final-cta { padding: 58px 18px; }
          .footer-main { grid-template-columns: 1fr 1fr; gap: 30px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-bottom { flex-wrap: wrap; }
        }
        @media(max-width: 370px) {
          .nav-cta { font-size: 10px; padding: 10px 9px; }
          .login-button { font-size: 10px; }
          .skills-grid { grid-template-columns: 1fr; }
          .skill-card p { min-height: auto; }
        }
      `}</style>
    </main>
  )
}

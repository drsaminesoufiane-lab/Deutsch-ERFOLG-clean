
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { GraduationCap, ArrowLeft, User, Mail, Globe, BookOpen, Save, CheckCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export default function ParametresPage() {
  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [niveau, setNiveau] = useState('B1')
  const [langue, setLangue] = useState('fr')
  const [chargement, setChargement] = useState(true)
  const [enregistrement, setEnregistrement] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    async function chargerProfil() {
      const { data: { user } } = await supabase.auth.getUser()

      if (user) {
        setEmail(user.email || '')
        const { data } = await supabase
          .from('profiles')
          .select('full_name, level, language')
          .eq('id', user.id)
          .single()

        if (data) {
          setNom(data.full_name || '')
          setNiveau(data.level || 'B1')
          setLangue(data.language || 'fr')
        }
      }
      setChargement(false)
    }

    chargerProfil()
  }, [])

  async function enregistrerProfil(e: React.FormEvent) {
    e.preventDefault()
    setEnregistrement(true)
    setMessage('')

    const { data: { user } } = await supabase.auth.getUser()

    if (!user) {
      setMessage('Vous devez être connecté.')
      setEnregistrement(false)
      return
    }

    const { error } = await supabase
      .from('profiles')
      .update({
        full_name: nom,
        level: niveau,
        language: langue
      })
      .eq('id', user.id)

    setMessage(error ? 'Erreur lors de l’enregistrement.' : 'Vos paramètres ont été enregistrés.')
    setEnregistrement(false)
  }

  if (chargement) {
    return <main className="settings-loading">Chargement de votre profil...</main>
  }

  return (
    <main className="settings-page">
      <header className="settings-header">
        <Link href="/espace-etudiant" className="settings-logo">
          <GraduationCap size={27} />
          <span>Deutsch <b>Erfolg</b></span>
        </Link>
        <Link href="/espace-etudiant" className="settings-back">
          <ArrowLeft size={17} /> Tableau de bord
        </Link>
      </header>

      <section className="settings-content">
        <span className="settings-eyebrow">ESPACE ÉTUDIANT</span>
        <h1>Paramètres</h1>
        <p className="settings-subtitle">Gérez les informations de votre compte.</p>

        <form className="settings-card" onSubmit={enregistrerProfil}>
          <div className="settings-section-title">
            <User size={20} />
            <h2>Informations personnelles</h2>
          </div>

          <label>Nom complet</label>
          <div className="settings-input-wrap">
            <User size={18} />
            <input value={nom} onChange={e => setNom(e.target.value)} placeholder="Votre nom complet" />
          </div>

          <label>Adresse e-mail</label>
          <div className="settings-input-wrap settings-disabled">
            <Mail size={18} />
            <input value={email} disabled />
          </div>
          <small>L'adresse e-mail ne peut pas être modifiée ici.</small>

          <div className="settings-divider" />

          <div className="settings-section-title">
            <BookOpen size={20} />
            <h2>Préférences pédagogiques</h2>
          </div>

          <label>Mon niveau TELC</label>
          <select value={niveau} onChange={e => setNiveau(e.target.value)}>
            <option value="B1">TELC B1</option>
            <option value="B2">TELC B2</option>
          </select>

          <label>Langue de l'interface</label>
          <div className="settings-input-wrap">
            <Globe size={18} />
            <select value={langue} onChange={e => setLangue(e.target.value)}>
              <option value="fr">Français</option>
              <option value="ar">العربية</option>
              <option value="de">Deutsch</option>
            </select>
          </div>

          {message && (
            <div className="settings-message">
              <CheckCircle size={18} /> {message}
            </div>
          )}

          <button type="submit" disabled={enregistrement}>
            <Save size={18} />
            {enregistrement ? 'Enregistrement...' : 'Enregistrer les modifications'}
          </button>
        </form>
      </section>

      <style jsx global>{`
        .settings-page { min-height:100vh; background:#f7f8fa; color:#172b4d; font-family:Arial,sans-serif; }
        .settings-loading { padding:60px; color:#172b4d; }
        .settings-header { height:76px; background:#172b4d; color:white; padding:0 7%; display:flex; align-items:center; justify-content:space-between; }
        .settings-logo { display:flex; align-items:center; gap:10px; color:white; text-decoration:none; font-size:20px; }
        .settings-logo svg { color:#d6b56d; }
        .settings-logo b { color:#d6b56d; }
        .settings-back { color:white; text-decoration:none; display:flex; align-items:center; gap:8px; font-size:14px; }
        .settings-content { max-width:760px; margin:55px auto; padding:0 24px; }
        .settings-eyebrow { color:#b8954d; font-size:12px; font-weight:bold; letter-spacing:2px; }
        .settings-content h1 { font-size:34px; margin:12px 0; }
        .settings-subtitle { color:#778397; margin-bottom:30px; }
        .settings-card { background:white; border:1px solid #e8ebf0; border-radius:16px; padding:32px; }
        .settings-section-title { display:flex; align-items:center; gap:12px; margin-bottom:24px; }
        .settings-section-title svg { color:#b8954d; }
        .settings-section-title h2 { font-size:18px; margin:0; }
        .settings-card label { display:block; font-size:14px; font-weight:bold; margin:18px 0 9px; }
        .settings-input-wrap { display:flex; align-items:center; gap:10px; border:1px solid #dfe4eb; border-radius:9px; padding:0 13px; height:48px; }
        .settings-input-wrap svg { color:#8994a5; flex-shrink:0; }
        .settings-input-wrap input, .settings-input-wrap select { width:100%; border:0; outline:none; background:transparent; color:#172b4d; font-size:14px; }
        .settings-disabled { background:#f7f8fa; }
        .settings-card small { display:block; color:#8994a5; margin-top:7px; }
        .settings-card > select { width:100%; height:48px; border:1px solid #dfe4eb; border-radius:9px; padding:0 13px; background:white; color:#172b4d; font-size:14px; }
        .settings-divider { height:1px; background:#edf0f4; margin:30px 0; }
        .settings-message { display:flex; align-items:center; gap:9px; color:#28734d; background:#edf7f0; padding:13px; border-radius:9px; margin-top:22px; font-size:14px; }
        .settings-card button { margin-top:26px; width:100%; height:49px; border:0; border-radius:9px; background:#172b4d; color:white; font-size:14px; font-weight:bold; display:flex; align-items:center; justify-content:center; gap:10px; cursor:pointer; }
        .settings-card button:hover { background:#243e65; }
        .settings-card button:disabled { opacity:.6; cursor:wait; }
        @media(max-width:600px) { .settings-header { padding:0 18px; } .settings-content { margin:35px auto; } .settings-card { padding:22px 18px; } .settings-content h1 { font-size:28px; } }

        /* DE_STUDENT_ACCOUNT_PREMIUM_V1 */

.settings-page {
  --pe-navy: var(--de-navy, #192b43);
  --pe-ivory: var(--de-ivory, #f7f5f0);
  --pe-border: var(--de-border, #e3ded3);
  --pe-muted: var(--de-muted, #626a75);
  --pe-gold: var(--de-gold-text, #806337);
  --pe-tint: var(--de-tint, #f1ece2);
  background: var(--pe-ivory); color: var(--pe-navy);
  font-family: var(--de-sans, Arial, sans-serif); text-align: start;
}
.settings-page :is(h1,h2) { font-family: var(--de-serif, Georgia, serif); font-weight: 400; color: var(--pe-navy); letter-spacing: 0; }
[dir="rtl"] .settings-page :is(h1,h2), .settings-page[dir="rtl"] :is(h1,h2) { font-family: 'Tajawal', Arial, sans-serif; }
.settings-page h1 { font-size: clamp(28px, 3vw, 38px); line-height: 1.2; }
.settings-page :is(a,button,input,select):focus-visible { outline: 2px solid var(--pe-gold); outline-offset: 3px; }
@media (prefers-reduced-motion: reduce) { .settings-page * { transition: none !important; } }

.settings-page .settings-header { min-height: 76px; height: auto; padding: 15px clamp(18px, 4vw, 42px); gap: 16px; background: #fff; border-bottom: 1px solid var(--pe-border); color: var(--pe-navy); flex-wrap: wrap; }
.settings-page .settings-logo { color: var(--pe-navy); font-family: var(--de-serif, Georgia, serif); font-size: 21px; gap: 9px; }
.settings-page .settings-logo :is(b,svg) { color: var(--pe-gold); }
.settings-page .settings-back { color: var(--pe-muted); font-size: 13px; }
.settings-page .settings-back:hover { color: var(--pe-gold); }
.settings-page .settings-content { margin: 0 auto; padding: 34px clamp(16px, 4vw, 40px) 48px; }
.settings-page .settings-eyebrow { color: var(--pe-gold); font-size: 10px; letter-spacing: 1.3px; font-weight: 700; }
[dir="rtl"] .settings-page .settings-back svg { transform: scaleX(-1); }
@media(max-width:700px) {
  .settings-page .settings-header { padding: 78px 16px 14px; min-height: 0; }
  .settings-page .settings-content { padding: 24px 16px 36px; }
  .settings-page .settings-logo { font-size: 18px; }
  .settings-page .settings-back { font-size: 12px; }
}

.settings-page .settings-content { max-width: 800px; }
.settings-page .settings-subtitle { color: var(--pe-muted); line-height: 1.65; margin: 8px 0 24px; }
.settings-page .settings-card { background: white; border: 1px solid var(--pe-border); border-radius: 10px; padding: clamp(18px, 3.5vw, 32px); box-shadow: var(--de-shadow, 0 3px 12px rgba(25,43,67,.045)); }
.settings-page .settings-section-title { padding-bottom: 14px; border-bottom: 1px solid var(--pe-border); margin-bottom: 16px; }
.settings-page .settings-section-title svg { color: var(--pe-gold); flex-shrink: 0; }
.settings-page .settings-section-title h2 { font-size: 21px; }
.settings-page .settings-card label { color: var(--pe-navy); font-size: 13px; font-weight: 600; }
.settings-page .settings-input-wrap, .settings-page .settings-card > select { border: 1px solid var(--pe-border); border-radius: 8px; min-width: 0; }
.settings-page .settings-input-wrap { background: white; }
.settings-page .settings-input-wrap svg { color: var(--pe-gold); }
.settings-page .settings-input-wrap input, .settings-page .settings-input-wrap select { color: var(--pe-navy); font-family: inherit; min-width: 0; }
.settings-page .settings-card > select { color: var(--pe-navy); font-family: inherit; }
.settings-page .settings-input-wrap:focus-within { border-color: var(--pe-gold); box-shadow: 0 0 0 3px rgba(180,151,96,.15); }
.settings-page .settings-input-wrap :is(input,select):focus-visible { outline: none; }
.settings-page .settings-disabled { background: var(--pe-ivory); }
.settings-page .settings-disabled input { color: var(--pe-muted); }
.settings-page .settings-card small { color: var(--pe-muted); font-size: 12px; line-height: 1.5; }
.settings-page .settings-divider { background: var(--pe-border); margin: 25px 0; }
.settings-page .settings-message { background: var(--pe-tint); color: var(--pe-navy); border: 1px solid var(--pe-border); border-radius: 8px; line-height: 1.5; }
.settings-page .settings-message svg { flex-shrink: 0; color: var(--pe-gold); }
.settings-page .settings-card button { background: var(--pe-navy); border-radius: 8px; min-height: 49px; height: auto; padding: 12px; font-family: inherit; line-height: 1.5; }
.settings-page .settings-card button:hover:not(:disabled) { background: var(--de-navy-hover, #30465f); }

      `}</style>
    </main>
  )
}

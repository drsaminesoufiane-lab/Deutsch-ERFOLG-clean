
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
      `}</style>
    </main>
  )
}

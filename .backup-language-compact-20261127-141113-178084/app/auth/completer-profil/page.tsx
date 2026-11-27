'use client'
import { useEffect, useState, type FormEvent } from 'react'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import { hasGoogleProvider, googleProfileComplete } from '@/lib/googleProfile'

type Lang = 'fr'|'de'|'en'|'ar'
const copy = {
  fr:{title:'Complète ton profil',intro:'Ton compte Google est vérifié. Renseigne tes informations pour commencer.',name:'Nom et prénom',phone:'Téléphone',country:'Pays',city:'Ville',level:'Niveau de préparation',choose:'Choisir',save:'Accéder à mon espace',wait:'Enregistrement…',loading:'Chargement…',invalid:'Tous les champs sont obligatoires. Vérifie ton numéro de téléphone.',error:'Impossible de vérifier ou enregistrer ton profil. Réessaie.',back:'Retour à la connexion',email:'Adresse e-mail vérifiée',logout:'Se déconnecter'},
  de:{title:'Vervollständige dein Profil',intro:'Dein Google-Konto ist bestätigt. Ergänze deine Angaben, um zu beginnen.',name:'Vor- und Nachname',phone:'Telefonnummer',country:'Land',city:'Stadt',level:'Sprachniveau',choose:'Auswählen',save:'Zu meinem Lernbereich',wait:'Wird gespeichert…',loading:'Wird geladen…',invalid:'Alle Felder sind Pflichtfelder. Prüfe deine Telefonnummer.',error:'Das Profil konnte nicht überprüft oder gespeichert werden. Bitte erneut versuchen.',back:'Zur Anmeldung',email:'Bestätigte E-Mail-Adresse',logout:'Abmelden'},
  en:{title:'Complete your profile',intro:'Your Google account is verified. Fill in your information to get started.',name:'Full name',phone:'Phone number',country:'Country',city:'City',level:'Preparation level',choose:'Choose',save:'Go to my student area',wait:'Saving…',loading:'Loading…',invalid:'All fields are required. Check your phone number.',error:'Unable to verify or save your profile. Please try again.',back:'Back to login',email:'Verified email address',logout:'Sign out'},
  ar:{title:'أكمل ملفك الشخصي',intro:'تم التحقق من حساب Google. أدخل معلوماتك للبدء.',name:'الاسم الكامل',phone:'رقم الهاتف',country:'البلد',city:'المدينة',level:'مستوى التحضير',choose:'اختر',save:'الدخول إلى فضاء الطالب',wait:'جارٍ الحفظ…',loading:'جارٍ التحميل…',invalid:'جميع الحقول إلزامية. تحقق من رقم الهاتف.',error:'تعذر التحقق من ملفك أو حفظه. حاول مجدداً.',back:'العودة لتسجيل الدخول',email:'البريد الإلكتروني المؤكد',logout:'تسجيل الخروج'},
}
const paysDisponibles = [
  { value: 'Maroc', label: '🇲🇦 Maroc' },
  { value: 'Allemagne', label: '🇩🇪 Deutschland / Allemagne' },
  { value: 'France', label: '🇫🇷 France' },
  { value: 'Belgique', label: '🇧🇪 Belgique' },
  { value: 'Suisse', label: '🇨🇭 Schweiz / Suisse' },
  { value: 'Autriche', label: '🇦🇹 Österreich / Autriche' },
  { value: 'Espagne', label: '🇪🇸 España / Espagne' },
  { value: 'Italie', label: '🇮🇹 Italia / Italie' },
  { value: 'Pays-Bas', label: '🇳🇱 Nederland / Pays-Bas' },
  { value: 'Luxembourg', label: '🇱🇺 Luxembourg' },
  { value: 'Royaume-Uni', label: '🇬🇧 United Kingdom' },
  { value: 'États-Unis', label: '🇺🇸 United States' },
  { value: 'Canada', label: '🇨🇦 Canada' },
  { value: 'Turquie', label: '🇹🇷 Türkiye / Turquie' },
  { value: 'Ukraine', label: '🇺🇦 Україна / Ukraine' },
  { value: 'Algérie', label: '🇩🇿 الجزائر / Algérie' },
  { value: 'Tunisie', label: '🇹🇳 تونس / Tunisie' },
  { value: 'Sénégal', label: '🇸🇳 Sénégal' },
  { value: 'Côte d’Ivoire', label: '🇨🇮 Côte d’Ivoire' },
  { value: 'Égypte', label: '🇪🇬 مصر / Égypte' },
  { value: 'Arabie saoudite', label: '🇸🇦 السعودية / Arabie saoudite' },
  { value: 'Émirats arabes unis', label: '🇦🇪 الإمارات / Émirats arabes المتحدة' },
  { value: 'Autre', label: '🌍 Autre' },
]
function cookieDevice() {
  try { return decodeURIComponent(document.cookie.split('; ').find(s=>s.startsWith('deutsch_erfolg_device_id='))?.split('=').slice(1).join('=') || '') } catch { return '' }
}
async function checkDevice() {
  const id = cookieDevice()
  if (!id) return false
  const {data,error} = await supabase.rpc('is_current_student_device',{p_device_id:id})
  return !error && data === true
}
export default function CompleteGoogleProfile() {
  const [lang,setLang] = useState<Lang>('de')
  const [name,setName] = useState(''), [phone,setPhone] = useState(''), [country,setCountry] = useState(''), [city,setCity] = useState(''), [level,setLevel] = useState('')
  const [email,setEmail] = useState(''), [userId,setUserId] = useState('')
  const [loading,setLoading] = useState(true), [busy,setBusy] = useState(false), [error,setError] = useState<'invalid'|'error'|''>('')
  const t = copy[lang]
  useEffect(()=>{
    let active = true
    const stored = new URL(window.location.href).searchParams.get('lang') || localStorage.getItem('deutsch_erfolg_language')
    if(stored && ['fr','de','en','ar'].includes(stored)) setLang(stored as Lang)
    async function load() {
      try {
        const {data:{user},error} = await supabase.auth.getUser()
        if(error || !user || !hasGoogleProvider(user.app_metadata) || !await checkDevice()) throw new Error('Session')
        const {data:profile,error:profileError} = await supabase.from('profiles').select('role,full_name,telephone,pays,ville,level').eq('id',user.id).single()
        if(profileError || profile?.role !== 'student') throw new Error('Profile')
        if (!active) return
        if(googleProfileComplete(profile)) { window.location.replace('/espace-etudiant'); return }
        setUserId(user.id); setEmail(user.email || ''); setName(profile.full_name || user.user_metadata?.full_name || user.user_metadata?.name || '')
        setPhone(profile.telephone || ''); setCountry(profile.pays || ''); setCity(profile.ville || ''); setLevel('')
      } catch { if(active) setError('error') } finally { if(active) setLoading(false) }
    }
    void load(); return ()=>{active=false}
  },[])
  async function save(e:FormEvent<HTMLFormElement>) {
    e.preventDefault(); if(busy || !userId) return
    setError('')
    const profile = {full_name:name.trim(),telephone:phone.trim(),pays:country.trim(),ville:city.trim(),level}
    if(!googleProfileComplete(profile) || !/^[+\d\s().-]+$/.test(profile.telephone) || profile.telephone.replace(/\D/g,'').length < 6) { setError('invalid'); return }
    setBusy(true)
    try {
      const {data:{user},error:authError} = await supabase.auth.getUser()
      if(authError || user?.id !== userId || !await checkDevice()) throw new Error('Session')
      const {data,error} = await supabase.from('profiles').update(profile).eq('id',userId).eq('role','student').select('full_name,telephone,pays,ville,level').single()
      if(error || !data || !googleProfileComplete(data)) throw new Error('Update')
      try { localStorage.setItem('deutsch_erfolg_language',lang) } catch { /* optional preference */ }
      window.location.replace('/espace-etudiant')
    } catch { setError('error');setBusy(false) }
  }
  async function logout() {
    try { await supabase.auth.signOut({scope:'local'}) } finally { document.cookie='deutsch_erfolg_device_id=; Path=/; Max-Age=0; SameSite=Lax'; localStorage.removeItem('deutsch_erfolg_device_id'); window.location.replace('/connexion') }
  }
  return <main dir={lang==='ar'?'rtl':'ltr'} style={{minHeight:'100dvh',background:'#f7f5f0',padding:'32px 16px',display:'grid',placeItems:'center',color:'#192b43'}}>
    <section style={{width:'100%',maxWidth:500,background:'#fff',border:'1px solid #e4dfd5',borderRadius:18,padding:'clamp(20px,5vw,36px)',boxShadow:'0 20px 60px #192b4312'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:12,flexWrap:'wrap'}}><Link href="/" style={{fontWeight:800}}>Deutsch <span style={{color:'#a1844d'}}>Erfolg</span></Link><select aria-label="Language" value={lang} onChange={e=>setLang(e.target.value as Lang)}><option value="de">Deutsch</option><option value="fr">Français</option><option value="en">English</option><option value="ar">العربية</option></select></div>
      <h1 style={{fontSize:28,marginTop:24,fontWeight:700}}>{t.title}</h1><p style={{color:'#64748b',marginBottom:20}}>{t.intro}</p>
      {loading ? <p role="status">{t.loading}</p> : userId ? <form onSubmit={save} className="de-google-profile-form">
        <label>{t.email}<input value={email} readOnly dir="ltr" type="email"/></label>
        <label>{t.name} *<input value={name} onChange={e=>setName(e.target.value)} required autoComplete="name" maxLength={150}/></label>
        <label>{t.phone} *<input value={phone} onChange={e=>setPhone(e.target.value)} required type="tel" dir="ltr" autoComplete="tel" maxLength={40}/></label>
        <label>{t.country} *<select required value={country} onChange={e=>setCountry(e.target.value)}><option value="">{t.choose}</option>{country&&!paysDisponibles.some(p=>p.value===country)&&<option value={country}>{country}</option>}{paysDisponibles.map(p=><option key={p.value} value={p.value}>{p.label}</option>)}</select></label>
        <label>{t.city} *<input required value={city} onChange={e=>setCity(e.target.value)} autoComplete="address-level2" maxLength={120}/></label>
        <label>{t.level} *<select required value={level} onChange={e=>setLevel(e.target.value)}><option value="">{t.choose}</option>{['A1','A2','B1','B2'].map(v=><option key={v}>{v}</option>)}</select></label>
        {error && <p role="alert" style={{color:'#b44d4d'}}>{t[error]}</p>}
        <button type="submit" disabled={busy} style={{background:'#192b43',color:'#fff',padding:14,borderRadius:9,fontWeight:700,marginTop:8}}>{busy?t.wait:t.save}</button>
        <button type="button" onClick={logout} disabled={busy} style={{color:'#64748b',padding:8}}>{t.logout}</button>
      </form> : <><p role="alert" style={{color:'#b44d4d'}}>{t.error}</p><Link href="/connexion">{t.back}</Link></>}
    </section>
    <style jsx>{`.de-google-profile-form{display:grid;gap:13px}.de-google-profile-form label{display:grid;gap:5px;font-size:14px;font-weight:600}.de-google-profile-form input,.de-google-profile-form select{width:100%;padding:11px;border:1px solid #cbd5e1;border-radius:8px;background:white;color:#192b43;font:inherit;font-weight:400}.de-google-profile-form input[readonly]{background:#f1f5f9}.de-google-profile-form :focus-visible{outline:2px solid #b49760;outline-offset:2px}`}</style>
  </main>
}

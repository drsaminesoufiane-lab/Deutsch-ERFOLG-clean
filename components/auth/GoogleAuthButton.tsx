'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

type Lang = 'fr' | 'de' | 'ar' | 'en'
const copy = {
  fr: { google:'Continuer avec Google', or:'ou par e-mail', wait:'Connexion en cours…', error:'La connexion Google a échoué. Réessaie.' },
  de: { google:'Mit Google fortfahren', or:'oder per E-Mail', wait:'Anmeldung läuft…', error:'Die Google-Anmeldung ist fehlgeschlagen. Bitte versuche es erneut.' },
  en: { google:'Continue with Google', or:'or by email', wait:'Connecting…', error:'Google sign-in failed. Please try again.' },
  ar: { google:'المتابعة باستخدام Google', or:'أو عبر البريد الإلكتروني', wait:'جارٍ تسجيل الدخول…', error:'تعذر تسجيل الدخول باستخدام Google. حاول مرة أخرى.' },
}
export default function GoogleAuthButton({ language, disabled = false }: { language: Lang; disabled?: boolean }) {
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const t = copy[language]
  useEffect(() => {
    const url = new URL(window.location.href)
    if (url.searchParams.has('google_error')) {
      setError(true)
      url.searchParams.delete('google_error')
      window.history.replaceState(window.history.state, '', url.toString())
    }
  }, [])
  async function start() {
    if (busy || disabled) return
    setBusy(true); setError(false)
    try {
      const redirectTo = new URL('/auth/callback', window.location.origin)
      redirectTo.searchParams.set('lang', language)
      const { data, error } = await supabase.auth.signInWithOAuth({ provider:'google', options:{ redirectTo: redirectTo.toString(), skipBrowserRedirect:true, queryParams:{prompt:'select_account'} } })
      if (error || !data.url) throw new Error('OAuth failed')
      window.location.assign(data.url)
    } catch { setError(true); setBusy(false) }
  }
  return <div className="de-google-auth" style={{margin:'0 0 20px'}}>
    <button type="button" onClick={start} disabled={disabled || busy} style={{display:'flex',alignItems:'center',justifyContent:'center',gap:12,width:'100%',minHeight:48,border:'1px solid #cbd5e1',borderRadius:10,background:'#fff',color:'#192b43',font:'inherit',fontWeight:600,cursor:busy||disabled?'default':'pointer',opacity:busy||disabled?0.65:1}}>
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5Z"/><path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.25 5.48-4.77 7.18l7.73 6C44.41 38.04 46.98 31.91 46.98 24.55Z"/><path fill="#FBBC05" d="M10.53 28.59A14.4 14.4 0 0 1 9.75 24c0-1.59.28-3.13.78-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.53 2.56 10.78Z"/><path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.92 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48Z"/></svg>
      {busy?t.wait:t.google}
    </button>
    {error && <p role="alert" style={{color:'#a52727',fontSize:13}}>{t.error}</p>}
    <div style={{display:'flex',alignItems:'center',gap:12,color:'#64748b',fontSize:13,marginTop:18}}><span style={{height:1,background:'#dce1e7',flex:1}}/>{t.or}<span style={{height:1,background:'#dce1e7',flex:1}}/></div>
  </div>
}

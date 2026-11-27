'use client'

import { useState } from 'react'
import Link from 'next/link'
import { GraduationCap, CheckCircle2, Mail, AlertCircle, ArrowRight } from 'lucide-react'
import FloatingPageTools from '@/components/student/FloatingPageTools'
import { supabase } from '@/lib/supabase'

const copy = {
  fr: {tag:'CONFIRMATION PAR E-MAIL',success:'Compte activé avec succès !',successText:'Votre adresse e-mail est confirmée. Bienvenue sur Deutsch Erfolg ! Vous pouvez maintenant vous connecter.',error:'Vérification du compte',errorText:'Ce lien est expiré, invalide ou déjà utilisé. Si votre compte est déjà activé, connectez-vous normalement. Sinon, demandez un nouveau lien.',pending:'Confirmez votre adresse e-mail',pendingText:'Votre compte attend encore la confirmation de votre adresse e-mail. Vérifiez votre boîte de réception ou demandez un nouveau lien.',login:'Se connecter',resend:'Renvoyer l’e-mail de confirmation',email:'Adresse e-mail',sending:'Envoi en cours…',sent:'Si une confirmation est nécessaire, un nouvel e-mail sera envoyé. Vérifiez aussi les courriers indésirables.',failed:'Impossible de traiter la demande. Réessayez dans quelques instants.',footer:'Apprendre. Progresser. Réussir.'},
  de: {tag:'E-MAIL-BESTÄTIGUNG',success:'Konto erfolgreich aktiviert!',successText:'Deine E-Mail-Adresse ist bestätigt. Willkommen bei Deutsch Erfolg! Du kannst dich jetzt anmelden.',error:'Kontobestätigung',errorText:'Dieser Link ist abgelaufen, ungültig oder wurde bereits verwendet. Ist dein Konto schon aktiviert, melde dich normal an. Sonst fordere einen neuen Link an.',pending:'Bestätige deine E-Mail-Adresse',pendingText:'Dein Konto wartet noch auf die E-Mail-Bestätigung. Prüfe deinen Posteingang oder fordere einen neuen Link an.',login:'Anmelden',resend:'Bestätigungs-E-Mail erneut senden',email:'E-Mail-Adresse',sending:'Wird gesendet…',sent:'Falls eine Bestätigung erforderlich ist, wird eine neue E-Mail gesendet. Prüfe auch den Spam-Ordner.',failed:'Die Anfrage konnte nicht verarbeitet werden. Versuche es in Kürze erneut.',footer:'Lernen. Fortschritte machen. Erfolg haben.'},
  en: {tag:'EMAIL CONFIRMATION',success:'Account successfully activated!',successText:'Your email address is confirmed. Welcome to Deutsch Erfolg! You can now log in.',error:'Account verification',errorText:'This link has expired, is invalid or has already been used. If your account is already activated, log in normally. Otherwise, request a new link.',pending:'Confirm your email address',pendingText:'Your account is still waiting for email confirmation. Check your inbox or request a new link.',login:'Log in',resend:'Resend confirmation email',email:'Email address',sending:'Sending…',sent:'If confirmation is needed, a new email will be sent. Check your spam folder as well.',failed:'Unable to process the request. Please try again shortly.',footer:'Learn. Improve. Succeed.'},
  ar: {tag:'تأكيد البريد الإلكتروني',success:'تم تفعيل حسابك بنجاح!',successText:'تم تأكيد بريدك الإلكتروني. مرحباً بك في Deutsch Erfolg! يمكنك الآن تسجيل الدخول.',error:'التحقق من الحساب',errorText:'هذا الرابط منتهي الصلاحية أو غير صالح أو تم استخدامه سابقاً. إذا كان حسابك مفعلاً، يمكنك تسجيل الدخول بشكل عادي. وإلا فاطلب رابطاً جديداً.',pending:'أكد بريدك الإلكتروني',pendingText:'حسابك في انتظار تأكيد البريد الإلكتروني. تحقق من صندوق الوارد أو اطلب رابطاً جديداً.',login:'تسجيل الدخول',resend:'إعادة إرسال رسالة التأكيد',email:'البريد الإلكتروني',sending:'جارٍ الإرسال…',sent:'إذا كان التأكيد مطلوباً، فسيتم إرسال رسالة جديدة. تحقق أيضاً من البريد غير المرغوب فيه.',failed:'تعذر معالجة الطلب. يرجى إعادة المحاولة بعد قليل.',footer:'تعلم. تقدم. انجح.'},
} as const

export type ConfirmationStatus = 'success' | 'error' | 'pending'

export default function EmailConfirmation({status,language,initialEmail,onContinue}:{status:ConfirmationStatus;language:keyof typeof copy;initialEmail:string;onContinue:()=>void}) {
  const t = copy[language] || copy.de
  const [email,setEmail] = useState(initialEmail)
  const [sending,setSending] = useState(false)
  const [result,setResult] = useState<'sent'|'failed'|null>(null)
  const success = status === 'success'
  const Icon = success ? CheckCircle2 : status === 'pending' ? Mail : AlertCircle
  async function resend(e:React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (sending || !email.trim()) return
    setSending(true);setResult(null)
    try {
      const {error} = await supabase.auth.resend({type:'signup',email:email.trim(),options:{emailRedirectTo:`${window.location.origin}/auth/confirm`}})
      setResult(error ? 'failed' : 'sent')
    } catch {setResult('failed')}
    finally {setSending(false)}
  }
  return <>
    <main className="de-confirm-page" dir={language==='ar'?'rtl':'ltr'}>
      <section className="de-confirm-card" aria-labelledby="de-confirm-title">
        <Link href="/" className="de-confirm-brand"><GraduationCap size={29}/><span>Deutsch <b>Erfolg</b></span></Link>
        <div className={'de-confirm-icon '+(success?'is-success':'')}><Icon size={43} strokeWidth={1.7}/></div>
        <div className="de-confirm-tag">{t.tag}</div>
        <h1 id="de-confirm-title">{success?t.success:status==='pending'?t.pending:t.error}</h1>
        <p>{success?t.successText:status==='pending'?t.pendingText:t.errorText}</p>
        <button type="button" className="de-confirm-main" onClick={onContinue}>{t.login}<ArrowRight size={18}/></button>
        {!success && <form onSubmit={resend} className="de-confirm-form">
          <label htmlFor="de-confirm-email">{t.email}</label>
          <input id="de-confirm-email" type="email" autoComplete="email" required dir="ltr" value={email} onChange={e=>{setEmail(e.target.value);setResult(null)}} />
          <button type="submit" className="de-confirm-resend" disabled={sending}>{sending?t.sending:t.resend}</button>
          {result&&<p role="status" className={'de-confirm-result '+(result==='failed'?'is-error':'')}>{result==='sent'?t.sent:t.failed}</p>}
        </form>}
        <footer>{t.footer}</footer>
      </section>
    </main>
    <FloatingPageTools showOffer={false}/>
    <style jsx>{`
      .de-confirm-page{min-height:100svh;background:#f7f5f0;display:grid;place-items:center;padding:30px 16px 100px;color:#192b43;box-sizing:border-box;text-align:center}
      .de-confirm-card{background:#fff;border:1px solid #e3ded3;border-top:5px solid #192b43;border-radius:18px;padding:clamp(24px,5vw,44px);width:min(100%,520px);box-sizing:border-box;box-shadow:0 18px 50px #192b4310}
      .de-confirm-card :global(.de-confirm-brand){display:inline-flex;align-items:center;gap:10px;color:#192b43;text-decoration:none;font-size:22px;font-weight:600;margin-bottom:26px}
      .de-confirm-brand b{color:#9c7c3c}.de-confirm-icon{margin:0 auto 18px;width:88px;height:88px;display:grid;place-items:center;border-radius:50%;background:#f6eedc;color:#946826}.de-confirm-icon.is-success{background:#e4f3e9;color:#24764c}
      .de-confirm-tag{color:#8d703a;font-size:11px;letter-spacing:1.2px;font-weight:700;margin-bottom:10px}
      h1{font-family:Georgia,serif;font-weight:500;font-size:clamp(27px,5vw,35px);line-height:1.2;margin:0 0 15px;color:#192b43}
      [dir=rtl] h1{font-family:Tajawal,Arial,sans-serif}.de-confirm-card p{color:#59677a;font-size:15px;line-height:1.65;margin:0 0 25px}
      button,input{font:inherit;box-sizing:border-box}button{cursor:pointer}button:disabled{cursor:wait;opacity:.7}button:focus-visible,input:focus-visible{outline:2px solid #b49760;outline-offset:3px}
      .de-confirm-main,.de-confirm-resend{display:flex;justify-content:center;align-items:center;gap:9px;width:100%;min-height:48px;padding:12px;border-radius:9px;font-weight:600;border:1px solid #192b43}
      .de-confirm-main{background:#192b43;color:#fff}.de-confirm-main:hover{background:#30465f}[dir=rtl] .de-confirm-main :global(svg){transform:rotate(180deg)}
      .de-confirm-form{margin-top:22px;padding-top:20px;border-top:1px solid #e3ded3;display:grid;gap:10px;text-align:start}.de-confirm-form label{font-size:13px;font-weight:600}.de-confirm-form input{width:100%;min-height:46px;padding:12px;border:1px solid #d9dfe5;border-radius:8px;color:#192b43;background:white}
      .de-confirm-resend{background:white;color:#192b43}.de-confirm-resend:hover{background:#f7f5f0}.de-confirm-card .de-confirm-result{margin:3px 0 0;padding:12px;border-radius:8px;background:#e4f3e9;color:#205d3e;font-size:13px}.de-confirm-card .de-confirm-result.is-error{background:#fff0e9;color:#91421d}
      footer{margin-top:25px;font-size:12px;color:#687482}
    `}</style>
  </>
}

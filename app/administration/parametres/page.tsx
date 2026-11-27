'use client'
import AdminLoader from '../AdminLoader'

import { Globe, Settings, ShieldCheck, UserRound, Clock, LockKeyhole, LogOut, CheckCircle2 } from 'lucide-react'
import {useEffect,useState,type FormEvent} from 'react'
import {supabase} from '@/lib/supabase'
import {permissions,has,parseAccess,type Access,type Permission} from '@/lib/adminAccess'
import {useAdmin, translate, positionLabel, type AdminLanguage} from '../admin-context'

const languages: {value: AdminLanguage; label: string; description: string}[] = [
  {value:'fr',label:'Français',description:'France / Maroc'},
  {value:'de',label:'Deutsch',description:'Deutschland'},
  {value:'ar',label:'العربية',description:'اللغة العربية'},
]

const permissionNames:Record<Permission,[string,string,string]>={
 students:['Consulter les étudiants','Lernende ansehen','عرض الطلاب'],edit_students:['Modifier les fiches','Profile bearbeiten','تعديل ملفات الطلاب'],finance:['Consulter les finances','Finanzen einsehen','عرض البيانات المالية'],activate_pro:['Activer PRO','PRO aktivieren','تفعيل PRO'],cancel_pro:['Annuler un abonnement','Abonnement stornieren','إلغاء الاشتراك'],revoke_pro:['Révoquer PRO','PRO entziehen','سحب PRO'],courses:['Anciens cours','Alte Kurse','الدروس القديمة'],tasks:['Gérer les tâches','Aufgaben verwalten','إدارة المهام'],stats:['Consulter les statistiques','Statistiken ansehen','عرض الإحصائيات'],notifications:['Recevoir les notifications','Benachrichtigungen erhalten','تلقي الإشعارات'],appoint:['Nommer des administrateurs','Administratoren ernennen','تعيين مسؤولين'],edit_admins:['Modifier les droits administratifs','Verwaltungsrechte ändern','تعديل صلاحيات الإدارة'],revoke_admins:['Révoquer des administrateurs','Administratoren abberufen','عزل المسؤولين'],audit:['Consulter le journal des autorisations','Berechtigungsprotokoll ansehen','عرض سجل الصلاحيات'],results:['Consulter les résultats','Lernfortschritt ansehen','عرض نتائج الطلاب']
}

export default function AdminSettingsPage(){
  const {language,changeLanguage,name,position,owner}=useAdmin()
  const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
  const [account,setAccount]=useState<{id:string;email:string;confirmed:boolean;lastSignIn:string|null}|null>(null)
  const [access,setAccess]=useState<Access|null>(null)
  const [accountLoading,setAccountLoading]=useState(true)
  const [currentPassword,setCurrentPassword]=useState('')
  const [newPassword,setNewPassword]=useState('')
  const [confirmation,setConfirmation]=useState('')
  const [nonce,setNonce]=useState('')
  const [showPassword,setShowPassword]=useState(false)
  const [busy,setBusy]=useState(false)
  const [logoutError,setLogoutError]=useState(false)
  const [feedback,setFeedback]=useState<{ok:boolean;message:[string,string,string]}|null>(null)
  useEffect(()=>{
    let active=true
    async function load(){
      try{
        const {data:{user},error}=await supabase.auth.getUser()
        if(error||!user)throw new Error('auth')
        const {data,error:accessError}=await supabase.rpc('admin_my_access')
        const rights=accessError?null:parseAccess(data)
        if(!rights)throw new Error('access')
        if(active){setAccount({id:user.id,email:user.email||'',confirmed:!!user.email_confirmed_at,lastSignIn:user.last_sign_in_at||null});setAccess(rights)}
      }catch{if(active){setAccount(null);setAccess(null)}}finally{if(active)setAccountLoading(false)}
    }
    void load()
    return()=>{active=false}
  },[])
  const fmt=(v:string)=>new Intl.DateTimeFormat(language==='ar'?'ar-MA':language==='de'?'de-DE':'fr-FR',{dateStyle:'medium',timeStyle:'short',timeZone:'Africa/Casablanca'}).format(new Date(v))
  async function verifyAccount(){
    const {data:{user},error}=await supabase.auth.getUser()
    if(error||!user||!account||user.id!==account.id)throw new Error('auth')
    const {data,error:accessError}=await supabase.rpc('admin_my_access')
    if(accessError||!parseAccess(data))throw new Error('access')
  }
  async function changePassword(e:FormEvent<HTMLFormElement>){
    e.preventDefault()
    if(busy||!account)return
    setFeedback(null)
    if(newPassword.length<12||newPassword!==confirmation||newPassword===currentPassword){setFeedback({ok:false,message:['Vérifiez la longueur, la confirmation et choisissez un mot de passe différent.','Prüfen Sie Länge und Bestätigung und wählen Sie ein anderes Passwort.','تحقق من الطول والتأكيد واختر كلمة مرور مختلفة.']});return}
    setBusy(true)
    try{
      await verifyAccount()
      const {error}=await supabase.auth.updateUser({password:newPassword,current_password:currentPassword,...(nonce.trim()?{nonce:nonce.trim()}: {})})
      if(error){setFeedback({ok:false,message:error.code==='reauthentication_needed'||error.code==='reauthentication_not_valid'?['Une nouvelle vérification est nécessaire. Demandez un code ci-dessus.','Eine erneute Prüfung ist erforderlich. Fordern Sie oben einen Code an.','يلزم تحقق جديد. اطلب رمزًا أعلاه.']:['Modification refusée. Vérifiez le mot de passe actuel et les exigences de sécurité.','Änderung abgelehnt. Prüfen Sie das aktuelle Passwort und die Sicherheitsanforderungen.','تم رفض التغيير. تحقق من كلمة المرور الحالية ومتطلبات الأمان.']});return}
      setNewPassword('');setConfirmation('');setNonce('');setShowPassword(false)
      setFeedback({ok:true,message:['Mot de passe modifié avec succès.','Passwort erfolgreich geändert.','تم تغيير كلمة المرور بنجاح.']})
    }catch{setFeedback({ok:false,message:['Impossible de modifier le mot de passe. Reconnectez-vous si nécessaire.','Passwort konnte nicht geändert werden. Melden Sie sich bei Bedarf erneut an.','تعذر تغيير كلمة المرور. أعد تسجيل الدخول عند الحاجة.']})}finally{setCurrentPassword('');setBusy(false)}
  }
  async function requestCode(){
    if(busy||!account)return
    setBusy(true);setFeedback(null)
    try{await verifyAccount();const {error}=await supabase.auth.reauthenticate();if(error)throw error;setFeedback({ok:true,message:['Demande de code envoyée. Consultez votre boîte e-mail.','Code angefordert. Prüfen Sie Ihr E-Mail-Postfach.','تم إرسال طلب الرمز. تحقق من بريدك الإلكتروني.']})}catch{setFeedback({ok:false,message:['Impossible de demander le code. Réessayez plus tard.','Code konnte nicht angefordert werden. Versuchen Sie es später erneut.','تعذر طلب الرمز. حاول لاحقًا.']})}finally{setBusy(false)}
  }
  async function logout(){
    if(busy||!account)return
    setBusy(true);setLogoutError(false)
    try{await verifyAccount();const {error}=await supabase.auth.signOut({scope:'local'});if(error)throw error;try{localStorage.removeItem('deutsch_erfolg_device_id')}catch{}document.cookie='deutsch_erfolg_device_id=; Path=/; Max-Age=0; SameSite=Lax';window.location.replace('/connexion')}catch{setLogoutError(true)}finally{setBusy(false)}
  }
  return <main className="rbac-page de-admin-settings">
    <header className="de-settings-hero"><Settings size={30}/><div><small>{t('ESPACE PERSONNEL','PERSÖNLICHER BEREICH','المساحة الشخصية')}</small><h1>{t('Paramètres','Einstellungen','الإعدادات')}</h1><p>{t('Personnalisez votre espace administratif.','Passen Sie Ihren Verwaltungsbereich an.','خصص مساحة الإدارة الخاصة بك.')}</p></div></header>
    <section className="de-settings-panel">
      <h2><UserRound size={21}/>{t('Mon profil','Mein Profil','ملفي الشخصي')}</h2>
      <dl className="de-settings-profile"><div><dt>{t('Nom et prénom','Vor- und Nachname','الاسم الكامل')}</dt><dd>{name||'—'}</dd></div><div><dt>{t('Poste','Funktion','الوظيفة')}</dt><dd><ShieldCheck size={17}/>{positionLabel(position,language,owner)}</dd></div><div><dt>{t('Adresse e-mail','E-Mail-Adresse','البريد الإلكتروني')}</dt><dd>{account?.email||'—'}</dd></div><div><dt>{t('E-mail confirmé','E-Mail bestätigt','البريد مؤكد')}</dt><dd>{accountLoading?'…':!account?'—':account.confirmed?t('Oui','Ja','نعم'):t('Non','Nein','لا')}</dd></div><div><dt>{t('Dernière connexion','Letzte Anmeldung','آخر تسجيل دخول')}</dt><dd>{account?.lastSignIn?fmt(account.lastSignIn):'—'}</dd></div></dl>
      <p>{t('Les informations du poste et les droits d’accès sont gérés par les administrateurs autorisés.','Funktion und Zugriffsrechte werden von berechtigten Administratoren verwaltet.','يدير المسؤولون المخولون الوظيفة وصلاحيات الوصول.')}</p>
    </section>
    <section className="de-settings-panel">
      <h2><Globe size={21}/>{t('Langue de l’administration','Verwaltungssprache','لغة الإدارة')}</h2>
      <p>{t('Choisissez votre langue. Le changement est immédiat pour les parties déjà traduites.','Wählen Sie Ihre Sprache. Bereits übersetzte Bereiche werden sofort aktualisiert.','اختر لغتك. يتم تحديث الأقسام المترجمة فوراً.')}</p>
      <fieldset className="de-settings-languages"><legend className="de-settings-sr">{t('Langue','Sprache','اللغة')}</legend>{languages.map(l=><label key={l.value} className={language===l.value?'selected':''}><input type="radio" name="admin-language" value={l.value} checked={language===l.value} onChange={()=>changeLanguage(l.value)}/><span lang={l.value} dir={l.value==='ar'?'rtl':'ltr'}><strong>{l.label}</strong><small>{l.description}</small></span></label>)}</fieldset>
      <p role="status" className="de-settings-note">{t('Préférence appliquée et mémorisée sur cet appareil. Elle ne change pas la langue de l’espace étudiant.','Die Einstellung gilt auf diesem Gerät und ändert die Sprache des Lernbereichs nicht.','يطبق التفضيل على هذا الجهاز ولا يغير لغة مساحة الطالب.')}</p>
    </section>
    <section className="de-settings-panel"><h2><Clock size={21}/>{t('Date et heure','Datum und Uhrzeit','التاريخ والوقت')}</h2><dl className="de-settings-profile"><div><dt>{t('Fuseau des notifications et du journal','Zeitzone für Benachrichtigungen und Protokoll','المنطقة الزمنية للإشعارات والسجل')}</dt><dd>Africa/Casablanca</dd></div></dl><p>{t('Les notifications et le journal utilisent l’heure du Maroc.','Benachrichtigungen und Protokoll verwenden die marokkanische Ortszeit.','تستخدم الإشعارات والسجل توقيت المغرب.')}</p></section>
    <section className="de-settings-panel"><h2><ShieldCheck size={21}/>{t('Mes autorisations','Meine Berechtigungen','صلاحياتي')}</h2>
      {accountLoading?<AdminLoader inline />:!access?<p role="alert">{t('Impossible de vérifier vos autorisations.','Berechtigungen konnten nicht geprüft werden.','تعذر التحقق من صلاحياتك.')}</p>:<><p>{access.owner?t('Vous disposez de tous les droits administratifs.','Sie verfügen über alle Verwaltungsrechte.','لديك جميع صلاحيات الإدارة.'):t('Les droits suivants vous ont été attribués.','Ihnen wurden folgende Rechte zugewiesen.','تم منحك الصلاحيات التالية.')}</p><ul className="de-settings-permissions">{permissions.filter(p=>p!=='courses'&&has(access,p)).map(p=><li key={p}><CheckCircle2 size={16}/>{t(...permissionNames[p])}</li>)}</ul></>}
      <p>{t('Les autorisations ne sont pas modifiables depuis cette page.','Die Rechte können hier nicht geändert werden.','لا يمكن تعديل الصلاحيات من هذه الصفحة.')}</p>
    </section>
    <section className="de-settings-panel"><h2><LockKeyhole size={21}/>{t('Sécurité du compte','Kontosicherheit','أمان الحساب')}</h2>
      <p>{t('Choisissez un mot de passe unique d’au moins 12 caractères.','Wählen Sie ein einzigartiges Passwort mit mindestens 12 Zeichen.','اختر كلمة مرور فريدة لا تقل عن 12 حرفًا.')}</p>
      <form className="de-settings-password" onSubmit={changePassword}>
        <label>{t('Mot de passe actuel','Aktuelles Passwort','كلمة المرور الحالية')}<input type={showPassword?'text':'password'} autoComplete="current-password" value={currentPassword} onChange={e=>setCurrentPassword(e.target.value)} required disabled={busy}/></label>
        <label>{t('Nouveau mot de passe','Neues Passwort','كلمة المرور الجديدة')}<input type={showPassword?'text':'password'} autoComplete="new-password" minLength={12} value={newPassword} onChange={e=>setNewPassword(e.target.value)} required disabled={busy}/></label>
        <label>{t('Confirmer le mot de passe','Passwort bestätigen','تأكيد كلمة المرور')}<input type={showPassword?'text':'password'} autoComplete="new-password" minLength={12} value={confirmation} onChange={e=>setConfirmation(e.target.value)} required disabled={busy}/></label>
        <label className="de-settings-inline"><input type="checkbox" checked={showPassword} onChange={e=>setShowPassword(e.target.checked)}/>{t('Afficher les mots de passe','Passwörter anzeigen','إظهار كلمات المرور')}</label>
        <details><summary>{t('Code de vérification (si demandé)','Bestätigungscode (falls erforderlich)','رمز التحقق (عند الطلب)')}</summary><p>{t('Si Supabase demande une nouvelle vérification, envoyez un code à votre adresse e-mail.','Wenn Supabase eine erneute Prüfung verlangt, senden Sie einen Code an Ihre E-Mail-Adresse.','إذا طلب Supabase تحققًا إضافيًا، أرسل رمزًا إلى بريدك الإلكتروني.')}</p><button type="button" className="de-settings-secondary" onClick={()=>void requestCode()} disabled={busy||accountLoading||!account}>{t('Envoyer un code','Code senden','إرسال رمز')}</button><label>{t('Code reçu','Erhaltener Code','الرمز المستلم')}<input type="text" inputMode="numeric" autoComplete="one-time-code" value={nonce} onChange={e=>setNonce(e.target.value)} disabled={busy}/></label></details>
        <button type="submit" disabled={busy||accountLoading||!account}>{busy?t('Traitement…','Wird verarbeitet…','جار المعالجة…'):t('Modifier mon mot de passe','Mein Passwort ändern','تغيير كلمة مروري')}</button>
      </form>
      {feedback&&<p role={feedback.ok?'status':'alert'} className={feedback.ok?'de-settings-success':'de-settings-error'}>{t(...feedback.message)}</p>}
    </section>
    <section className="de-settings-panel"><h2><LogOut size={21}/>{t('Session','Sitzung','الجلسة')}</h2><p>{t('Fermez votre session sur cet appareil lorsque vous avez terminé.','Melden Sie sich auf diesem Gerät ab, wenn Sie fertig sind.','سجل خروجك من هذا الجهاز عند الانتهاء.')}</p><button type="button" className="de-settings-secondary" disabled={busy||!account} onClick={()=>void logout()}>{t('Se déconnecter','Abmelden','تسجيل الخروج')}</button>{logoutError&&<p role="alert" className="de-settings-error">{t('Déconnexion impossible. Réessayez.','Abmeldung nicht möglich. Bitte erneut versuchen.','تعذر تسجيل الخروج. حاول مجددًا.')}</p>}</section>
    <style jsx>{`
      .de-settings-password{display:grid;gap:14px;max-width:590px;}
      .de-settings-password label{display:grid;gap:7px;font-size:13px;font-weight:600;color:#391021;}
      .de-settings-password input:not([type=checkbox]){width:100%;min-width:0;box-sizing:border-box;border:1px solid #e9dfe3;border-radius:8px;padding:12px;background:#fff;color:#391021;font:inherit;}
      .de-settings-password input:focus-visible,.de-settings-password button:focus-visible,.de-settings-secondary:focus-visible{outline:2px solid #b49760;outline-offset:2px;}
      .de-settings-password .de-settings-inline{display:flex;align-items:center;gap:8px;font-weight:400;}
      .de-settings-password input[type=checkbox]{accent-color:#391021;}
      .de-settings-password button,.de-settings-secondary{border:1px solid #391021;border-radius:8px;background:#391021;color:#fff;padding:11px 15px;font:inherit;font-size:13px;font-weight:650;cursor:pointer;justify-self:start;}
      .de-settings-secondary,.de-settings-password .de-settings-secondary{background:#fff;color:#391021;}
      .de-settings-password button:disabled,.de-settings-secondary:disabled{opacity:.5;cursor:not-allowed;}
      .de-settings-password details{border:1px solid #e9dfe3;border-radius:8px;padding:12px;}
      .de-settings-password summary{cursor:pointer;font-size:13px;color:#391021;}
      .de-settings-password details label{margin-top:12px;}
      .de-settings-permissions{list-style:none;padding:0;margin:14px 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(min(230px,100%),1fr));gap:8px;}
      .de-settings-permissions li{display:flex;align-items:center;gap:8px;border:1px solid #e9dfe3;border-radius:8px;padding:10px;font-size:13px;color:#391021;}
      .de-settings-permissions li :global(svg){color:#14614d;flex-shrink:0;}
      .de-settings-panel .de-settings-success{background:#edf7f1;color:#14614d;padding:12px;border-radius:8px;}
      .de-settings-panel .de-settings-error{background:#fff1f3;color:#a1273e;padding:12px;border-radius:8px;}
    `}</style>
  </main>
}

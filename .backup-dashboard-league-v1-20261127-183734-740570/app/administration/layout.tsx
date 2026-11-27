'use client'

import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {allowedPath,has,links,parseAccess,permissions,type Access} from '@/lib/adminAccess'
import { Bell, ShieldCheck, UserRound, RefreshCw, LayoutDashboard, Users, ClipboardList, Wallet, BarChart3, Menu, X, ArrowLeft, History, Settings, GraduationCap } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import './admin-premium.css'
import AdminDashboardBanner from './AdminDashboardBanner'
import {AdminContext,useAdmin,translate,positionLabel,navLabel,type AdminLanguage} from './admin-context'

type Registration = { id: string; full_name: string | null; email: string | null; level: string | null; created_at: string | null }

function RegistrationNotifications({ adminId, canReadStudents }: { adminId: string; canReadStudents:boolean }) {
  const {language}=useAdmin()
  const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
  const dateFormat=new Intl.DateTimeFormat(language==='ar'?'ar-MA':language==='de'?'de-DE':'fr-FR',{timeZone:'Africa/Casablanca',dateStyle:'medium',timeStyle:'short'})
  const [rows,setRows] = useState<Registration[]>([])
  const [read,setRead] = useState<string[]>([])
  const [loaded,setLoaded] = useState(false)
  const [readLoaded,setReadLoaded] = useState(false)
  const [error,setError] = useState(false)
  const [open,setOpen] = useState(false)
  const [refresh,setRefresh] = useState(0)
  const storageKey = `de_admin_registrations_read_v1_${adminId}`
  useEffect(() => {
    try { const saved: unknown = JSON.parse(localStorage.getItem(storageKey) || '[]'); if (Array.isArray(saved)) setRead(saved.filter((x): x is string => typeof x === 'string').slice(-1000)) } catch {}
    setReadLoaded(true)
  },[storageKey])
  useEffect(() => {
    let active = true
    let running = false
    async function load() {
      if (running || !active) return
      running = true
      try {
        const { data, error: queryError } = await supabase.rpc('admin_registrations')
        if (!active) return
        if (queryError) {setError(true);setRows([])} else {setRows((data || []) as Registration[]);setError(false)}
      } catch {if(active){setError(true);setRows([])}} finally {running=false;if(active)setLoaded(true)}
    }
    const onVisible = () => {if(document.visibilityState === 'visible') void load()}
    void load()
    const timer = window.setInterval(onVisible,30000)
    document.addEventListener('visibilitychange',onVisible)
    return () => {active=false;window.clearInterval(timer);document.removeEventListener('visibilitychange',onVisible)}
  },[adminId,refresh])
  function mark(ids: string[]) {
    setRead(old => {const next = Array.from(new Set([...old,...ids])).slice(-1000); return next})
  }
  useEffect(()=> {if(!readLoaded)return;try {localStorage.setItem(storageKey,JSON.stringify(read))} catch {}},[read,storageKey,readLoaded])
  useEffect(()=> {if(!open)return; const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false)};window.addEventListener('keydown',close);return ()=>window.removeEventListener('keydown',close)},[open])
  const unread = rows.filter(r=>!read.includes(r.id)).length
  return <div className="de-admin-notices">
    <button type="button" className="de-admin-bell" onClick={()=>setOpen(v=>!v)} aria-expanded={open} aria-controls="de-admin-notice-panel"><Bell size={19}/><span>{t("Inscriptions","Anmeldungen","التسجيلات")}</span>{loaded&&!error&&unread>0&&<strong aria-label={`${unread} ${t('non lues','ungelesen','غير مقروءة')}`}>{unread}</strong>}</button>
    {open&&<section id="de-admin-notice-panel" className="de-admin-notice-panel" aria-label={t("Notifications d’inscription","Anmeldebenachrichtigungen","إشعارات التسجيل")}>
      <div className="de-admin-notice-heading"><div><h2>{t("Nouvelles inscriptions","Neue Anmeldungen","تسجيلات جديدة")}</h2><p>{t("50 dernières inscriptions · Heure du Maroc","Letzte 50 Anmeldungen · Marokkanische Zeit","آخر 50 تسجيلاً · توقيت المغرب")}</p></div><button type="button" onClick={()=>setRefresh(n=>n+1)} aria-label={t("Actualiser","Aktualisieren","تحديث")}><RefreshCw size={17}/></button></div>
      <div className="de-admin-notice-actions"><button type="button" disabled={!loaded||error||unread===0} onClick={()=>mark(rows.map(r=>r.id))}>{t("Tout marquer comme lu","Alle als gelesen markieren","تحديد الكل كمقروء")}</button><button type="button" onClick={()=>setOpen(false)}>{t("Fermer","Schließen","إغلاق")}</button></div>
      {!loaded?<p className="de-admin-notice-empty">{t("Chargement…","Wird geladen…","جار التحميل…")}</p>:error?<p className="de-admin-notice-empty" role="alert">{t("Notifications indisponibles. Actualisez pour réessayer.","Benachrichtigungen nicht verfügbar. Bitte aktualisieren.","الإشعارات غير متاحة. يرجى التحديث.")}</p>:rows.length===0?<p className="de-admin-notice-empty">{t("Aucune inscription.","Keine Anmeldungen.","لا توجد تسجيلات.")}</p>:<div className="de-admin-notice-list">{rows.map(r=>{
        const date = r.created_at ? new Date(r.created_at) : null
        const cls=`de-admin-notice-item ${read.includes(r.id)?'':'unread'}`; const content=<><UserRound size={19}/><span><strong>{r.full_name||r.email||t('Étudiant','Lernende','طالب')}</strong>{r.full_name&&r.email&&<small>{r.email}</small>}<small>{date&&!Number.isNaN(date.getTime())?dateFormat.format(date):t('Date inconnue','Unbekanntes Datum','تاريخ غير معروف')}{r.level?` · ${r.level}`:''}</small></span>{!read.includes(r.id)&&<i aria-label={t("Non lue","Ungelesen","غير مقروء")}/>}</>; return canReadStudents?<Link key={r.id} href={`/administration/etudiants/${encodeURIComponent(r.id)}`} onClick={()=>{mark([r.id]);setOpen(false)}} className={cls}>{content}</Link>:<button key={r.id} type="button" className={cls} onClick={()=>mark([r.id])}>{content}</button>
      })}</div>}
      <p className="de-admin-notice-foot">{t("Actualisation toutes les 30 secondes lorsque la page est visible. Lecture mémorisée sur cet appareil.","Aktualisierung alle 30 Sekunden bei sichtbarer Seite. Lesestatus auf diesem Gerät gespeichert.","تحديث كل 30 ثانية عندما تكون الصفحة مرئية. تُحفظ حالة القراءة على هذا الجهاز.")}</p>
    </section>}
  </div>
}

export default function AdministrationLayout({ children }: { children: ReactNode }) {
  const [status,setStatus] = useState<'loading'|'allowed'|'denied'|'error'>('loading')
  const [adminId,setAdminId] = useState('')
  const [adminName,setAdminName] = useState('')
  const [position,setPosition]=useState('administrator')
  const [language,setLanguage]=useState<AdminLanguage>('fr')
  const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
  useEffect(()=>{try{const l=localStorage.getItem('de_admin_language');if(l==='fr'||l==='de'||l==='ar')setLanguage(l)}catch{}},[])
  const changeLanguage=(l:AdminLanguage)=>{setLanguage(l);try{localStorage.setItem('de_admin_language',l)}catch{}}
  const [access,setAccess]=useState<Access|null>(null)
  const path=usePathname()||'/administration'
  const [retry,setRetry] = useState(0)
  const [menuOpen,setMenuOpen]=useState(false)
  useEffect(()=>{setMenuOpen(false)},[path])
  useEffect(()=>{if(!menuOpen)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape')setMenuOpen(false)};window.addEventListener('keydown',close);return()=>window.removeEventListener('keydown',close)},[menuOpen])
  useEffect(()=>{
    let active=true
    let version=0
    let verifiedId = ""
    let pendingCheck: ReturnType<typeof setTimeout> | undefined
    async function verify(){
      const seq=++version
      try {
        const {data:{user},error:authError}=await supabase.auth.getUser()
        if(!active||seq!==version)return
        if(authError||!user){setAdminId('');setStatus('denied');return}
        const {data,error}=await supabase.rpc('admin_my_access')
        if(!active||seq!==version)return
        if(error){setAdminId('');setStatus('error');return}
        const a=parseAccess(data);if(!a){setAdminId('');setStatus('denied');return}
        setPosition(typeof data?.position==='string'?data.position:'administrator');setAdminName(typeof data?.name==='string'&&data.name.trim()?data.name.trim():user.email||'Administrateur');setAccess(a);verifiedId=user.id;setAdminId(user.id);setStatus('allowed')
      } catch {if(active&&seq===version){setAdminId('');setStatus('error')}}
    }
    void verify()
    const {data:{subscription}}=supabase.auth.onAuthStateChange((event,session)=>{
      if(!active)return
      if(event==='SIGNED_OUT'){++version;verifiedId='';setAdminId('');setStatus('denied')}
      else if(event==='SIGNED_IN'||event==='USER_UPDATED'){
        if(session?.user.id!==verifiedId){++version;setAdminId('');setStatus('loading')}
        if(pendingCheck!==undefined)clearTimeout(pendingCheck)
        pendingCheck=setTimeout(()=>{if(active)void verify()},0)
      }
    })
    const check=()=>{if(document.visibilityState==='visible')void verify()}
    const timer=window.setInterval(check,30000)
    document.addEventListener('visibilitychange',check)
    return ()=>{active=false;++version;subscription.unsubscribe();if(pendingCheck!==undefined)clearTimeout(pendingCheck);window.clearInterval(timer);document.removeEventListener('visibilitychange',check)}
  },[retry])
  if(status!=='allowed') return <main className="de-admin-gate"><ShieldCheck size={35}/><h1>Administration</h1><p>{status==='loading'?'Vérification des droits…':status==='denied'?'Accès réservé aux administrateurs.':'Impossible de vérifier les droits. Réessayez.'}</p>{status==='error'&&<button type="button" onClick={()=>{setStatus('loading');setRetry(n=>n+1)}}>Réessayer</button>}<Link href="/">{t('Retour au site','Zur Website','العودة إلى الموقع')}</Link></main>
  const visible=links.filter(l=>allowedPath(access,l.url))
  const denied=!allowedPath(access,path)
  const classes=['de-admin-shell',...permissions.filter(p=>!has(access,p)).map(p=>`rbac-no-${p}`),...(!access?.owner?['rbac-delegated']:[])].join(' ')
  const icons:Record<string,typeof LayoutDashboard>={'/administration':LayoutDashboard,'/administration/etudiants':Users,'/administration/taches':ClipboardList,'/administration/paiements':Wallet,'/administration/statistiques':BarChart3,'/administration/administrateurs':ShieldCheck,'/administration/journal':History,'/administration/resultats':BarChart3,'/administration/parametres':Settings}
  const isActive=(url:string)=>url==='/administration'?(path===url||path===url+'/'):(path===url||path.startsWith(url+'/'))
  return <AdminContext.Provider value={{language,name:adminName,position,owner:!!access?.owner,changeLanguage}}><div className={`${classes} de-admin-workspace`} lang={language} dir={language==='ar'?'rtl':'ltr'}>
    {menuOpen&&<button className="de-admin-overlay" aria-label={t('Fermer le menu','Menü schließen','إغلاق القائمة')} onClick={()=>setMenuOpen(false)}/>}
    <aside id="de-admin-sidebar" className={`de-admin-sidebar-v2 ${menuOpen?'is-open':''}`}>
      <div className="de-admin-sidebar-heading"><Link href="/administration" className="de-admin-brand-v2" onClick={()=>setMenuOpen(false)}><ShieldCheck size={28}/><span>Deutsch <b>Erfolg</b><small>{t('ADMINISTRATION','VERWALTUNG','الإدارة')}</small></span></Link><button className="de-admin-close-menu" aria-label={t('Fermer le menu','Menü schließen','إغلاق القائمة')} onClick={()=>setMenuOpen(false)}><X size={22}/></button></div>
      <div className="de-admin-sidebar-role"><span className="de-admin-role-dot"/>{positionLabel(position,language,!!access?.owner)}</div>
      <nav aria-label={t('Navigation administration','Verwaltungsnavigation','قائمة الإدارة')} className="de-admin-sidebar-links"><small>{t('ESPACE DE GESTION','VERWALTUNGSBEREICH','مساحة الإدارة')}</small>{visible.map(({url,label})=>{const Icon=icons[url]||ShieldCheck;const active=isActive(url);return <Link href={url} key={url} className={active?'active':''} aria-current={active?'page':undefined} onClick={()=>setMenuOpen(false)}><Icon size={19} strokeWidth={1.7}/><span>{navLabel(url,language,label)}</span></Link>})}
        <Link href="/espace-etudiant" className="de-admin-switch-student" onClick={()=>setMenuOpen(false)} style={{marginTop:12,border:'1px solid rgba(214,181,109,.55)',borderRadius:6,color:'#e3cb96',flexShrink:0}}><GraduationCap size={19} strokeWidth={1.7}/><span>{t('Espace étudiant','Lernbereich','فضاء الطالب')}</span></Link>
      </nav>
      <Link className="de-admin-sidebar-home" href="/"><ArrowLeft size={18}/> {t('Retour au site','Zur Website','العودة إلى الموقع')}</Link>
    </aside>
    <div className="de-admin-workspace-main">
      <header className="de-admin-utility de-admin-top-v2"><div className="de-admin-identity"><button type="button" className="de-admin-open-menu" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-controls="de-admin-sidebar" aria-label={t('Ouvrir le menu','Menü öffnen','فتح القائمة')}><Menu size={23}/></button></div>{has(access,'notifications')&&<RegistrationNotifications key={adminId} adminId={adminId} canReadStudents={has(access,'students')}/>}</header>
      {denied?<main className="rbac-page"><h1>{t('Accès non autorisé','Zugriff verweigert','الوصول غير مصرح به')}</h1><Link href="/administration">{t('Retour au tableau de bord','Zurück zur Übersicht','العودة إلى لوحة التحكم')}</Link></main>:!access?.owner&&path==='/administration'?<main className="rbac-page"><AdminDashboardBanner onRefresh={()=>{setStatus('loading');setRetry(n=>n+1)}} /><p>{t('Accès selon vos autorisations.','Zugang gemäß Ihren Berechtigungen.','الوصول حسب صلاحياتك.')}</p><div className="rbac-checks">{visible.filter(l=>l.url!='/administration').map(l=><Link key={l.url} href={l.url}>{navLabel(l.url,language,l.label)} →</Link>)}</div><Link href="/">{t('Retour au site','Zur Website','العودة إلى الموقع')}</Link></main>:children}
    </div>
  </div></AdminContext.Provider>
}

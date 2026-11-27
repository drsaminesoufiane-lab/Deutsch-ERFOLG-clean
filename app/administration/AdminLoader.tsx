"use client"
import { GraduationCap } from 'lucide-react'
import { useAdmin, translate, type AdminLanguage } from './admin-context'
export default function AdminLoader({inline=false,language}: {inline?:boolean;language?:AdminLanguage}) {
 const admin=useAdmin(); const lang=language||admin.language
 const t=(fr:string,de:string,ar:string)=>translate(lang,fr,de,ar)
 return <div className={`de-admin-loader ${inline?'is-inline':''}`} lang={lang} dir={lang==='ar'?'rtl':'ltr'} role="status" aria-live="polite" aria-atomic="true">
  <div className="de-al-emblem" aria-hidden="true"><span/><div><GraduationCap size={inline?25:34} strokeWidth={1.6}/></div></div>
  <div className="de-al-brand" dir="ltr">Deutsch <b>Erfolg</b></div>
  <div className="de-al-levels" aria-hidden="true" dir="ltr">{['A1','A2','B1','B2'].map(l=><span key={l}>{l}</span>)}</div>
  <div className="de-al-track" aria-hidden="true"><i/></div>
  <p>{t('Chargement de l’administration…','Verwaltung wird geladen…','جارٍ تحميل الإدارة…')}</p>
 </div>
}

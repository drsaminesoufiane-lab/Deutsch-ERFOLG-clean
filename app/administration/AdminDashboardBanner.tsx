'use client'

import { RefreshCw, ShieldCheck } from 'lucide-react'
import { useAdmin, positionLabel, translate } from './admin-context'

export default function AdminDashboardBanner({busy=false,onRefresh}:{busy?:boolean;onRefresh:()=>void}) {
  const {language,name,position,owner}=useAdmin()
  const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
  return (
    <section className="de-admin-dashboard-banner" aria-labelledby="de-admin-dashboard-title">
      <div className="de-admin-banner-content">
        <div className="de-admin-banner-brand">Deutsch Erfolg · {t('Administration','Verwaltung','الإدارة')}</div>
        <div className="de-admin-banner-name" dir="auto">{name || t('Administrateur','Administrator','مسؤول إداري')}</div>
        <div className="de-admin-banner-role"><ShieldCheck size={18} aria-hidden="true"/><span>{positionLabel(position,language,owner)}</span></div>
        <div className="de-admin-banner-divider" />
        <div className="de-admin-banner-eyebrow">{t('ESPACE DE GESTION','VERWALTUNGSBEREICH','مساحة الإدارة')}</div>
        <h1 id="de-admin-dashboard-title">{t('Tableau de bord','Übersicht','لوحة التحكم')}</h1>
        <p>{t("Bienvenue dans votre espace d’administration Deutsch Erfolg. Gérez votre plateforme depuis un seul endroit.","Willkommen im Verwaltungsbereich von Deutsch Erfolg. Verwalten Sie Ihre Plattform an einem zentralen Ort.","مرحباً بكم في مساحة إدارة Deutsch Erfolg. أديروا منصتكم من مكان واحد.")}</p>
      </div>
      <button type="button" className="de-admin-banner-refresh" disabled={busy} onClick={onRefresh}>
        <RefreshCw size={17} aria-hidden="true" className={busy?'is-spinning':undefined}/>{t('Actualiser','Aktualisieren','تحديث')}
      </button>
    </section>
  )
}

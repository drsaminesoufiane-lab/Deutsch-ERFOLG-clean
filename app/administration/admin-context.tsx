'use client'
import {createContext,useContext} from 'react'
export type AdminLanguage='fr'|'de'|'ar'
export const AdminContext=createContext<{language:AdminLanguage;name:string;position:string;owner:boolean;changeLanguage:(language:AdminLanguage)=>void}>({language:'fr',name:'',position:'administrator',owner:false,changeLanguage:()=>{}})
export const useAdmin=()=>useContext(AdminContext)
export const translate=(l:AdminLanguage,fr:string,de:string,ar:string)=>l==='de'?de:l==='ar'?ar:fr
export const positions=[['administrator','Administrateur','Administrator','مسؤول إداري'],['director','Directeur','Direktor','مدير'],['telephone','Téléphoniste','Telefonservice','مسؤول التواصل الهاتفي'],['accountant','Comptable','Buchhalter','محاسب'],['pedagogy','Responsable pédagogique','Pädagogische Leitung','مسؤول تربوي'],['secretary','Secrétaire','Sekretariat','سكرتير']] as const
export function positionLabel(position:string,l:AdminLanguage,owner=false){
 if(owner)return translate(l,'Propriétaire','Eigentümer','المالك')
 const p=positions.find(x=>x[0]===position)
 return p?translate(l,p[1],p[2],p[3]):position||translate(l,'Administrateur','Administrator','مسؤول إداري')
}
const navigation:Record<string,[string,string,string]>={
 '/administration':['Tableau de bord','Übersicht','لوحة التحكم'], '/administration/etudiants':['Étudiants','Lernende','الطلاب'], '/administration/taches':['Tâches','Aufgaben','المهام'], '/administration/paiements':['Paiements','Zahlungen','المدفوعات'], '/administration/statistiques':['Statistiques','Statistiken','الإحصائيات'], '/administration/administrateurs':['Administrateurs','Administratoren','المسؤولون'], '/administration/journal':['Journal d’activité','Aktivitätsprotokoll','سجل النشاط'], '/administration/resultats':['Suivi des résultats','Lernfortschritt','متابعة النتائج'], '/administration/parametres':['Paramètres','Einstellungen','الإعدادات']
}
export function navLabel(url:string,l:AdminLanguage,fallback:string){const x=navigation[url];return x?translate(l,...x):fallback}

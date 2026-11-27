"use client"
import {useEffect,useRef,useState} from 'react'
import Link, {useLinkStatus} from 'next/link'
import {Search,ArrowUpRight,X} from 'lucide-react'
import {navLabel,translate,type AdminLanguage} from './admin-context'
function Pending(){const {pending}=useLinkStatus();return pending?<span className="de-admin-nav-pending" aria-hidden="true"/>:null}
export default function AdminQuickNav({items,language}:{items:{url:string;label:string}[];language:AdminLanguage}){
 const [open,setOpen]=useState(false),[query,setQuery]=useState('');const root=useRef<HTMLDivElement>(null),input=useRef<HTMLInputElement>(null),trigger=useRef<HTMLButtonElement>(null)
 const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
 useEffect(()=>{if(open)input.current?.focus()},[open])
 useEffect(()=>{if(!open)return;const outside=(e:PointerEvent)=>{if(e.target instanceof Node&&!root.current?.contains(e.target))setOpen(false)};const key=(e:KeyboardEvent)=>{if(e.key==='Escape'){setOpen(false);trigger.current?.focus()}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',key)}},[open])
 const norm=(s:string)=>s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'')
 const filtered=items.filter(i=>norm(navLabel(i.url,language,i.label)+' '+i.label).includes(norm(query.trim())))
 return <div className="de-admin-quick" ref={root}><button ref={trigger} type="button" className="de-admin-quick-trigger" onClick={()=>{setQuery('');setOpen(v=>!v)}} aria-label={t('Accès rapide','Schnellzugriff','وصول سريع')} aria-expanded={open} aria-controls="de-admin-quick-panel"><Search size={17}/><span>{t('Accès rapide','Schnellzugriff','وصول سريع')}</span></button>
 {open&&<div className="de-admin-quick-panel" id="de-admin-quick-panel"><div className="de-admin-quick-heading"><strong>{t('Accès rapide','Schnellzugriff','وصول سريع')}</strong><button type="button" onClick={()=>{setOpen(false);trigger.current?.focus()}} aria-label={t('Fermer','Schließen','إغلاق')}><X size={18}/></button></div><label className="de-admin-quick-search"><Search size={17}/><input ref={input} value={query} onChange={e=>setQuery(e.target.value)} placeholder={t('Rechercher une rubrique…','Bereich suchen…','ابحث عن قسم…')} aria-label={t('Rechercher une rubrique','Bereich suchen','البحث عن قسم')}/></label><div className="de-admin-quick-list">{filtered.length?filtered.map(i=><Link key={i.url} href={i.url} onClick={()=>setOpen(false)}><span>{navLabel(i.url,language,i.label)}</span><Pending/><ArrowUpRight size={16}/></Link>):<p>{t('Aucune rubrique trouvée.','Kein Bereich gefunden.','لم يتم العثور على قسم.')}</p>}</div></div>}
 </div>
}

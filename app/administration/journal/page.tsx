'use client'

import {useEffect,useRef,useState} from 'react'
import {History,RefreshCw,ShieldCheck,UserRound} from 'lucide-react'
import {supabase} from '@/lib/supabase'
import {permissionLabels,type Permission} from '@/lib/adminAccess'

type Activity={id:string;occurred_at:string;actor_id:string;actor_name:string;action:string;target_id:string|null;target_name:string|null;details:Record<string,unknown>;historical:boolean}
const labels:Record<string,string>={admin_position:'Modification du poste administratif',admin_appointed:'Nomination d’un administrateur',admin_permissions:'Modification des permissions',admin_revoked:'Révocation d’un administrateur',account_deleted:'Suppression définitive du compte',profile_deleted:'Suppression du profil',profile_edited:'Modification du profil',task_created:'Création d’une tâche',task_completed:'Tâche terminée',task_edited:'Modification d’une tâche',task_deleted:'Suppression d’une tâche',pro_activated:'Activation PRO',pro_renewed:'Prolongation PRO',pro_cancelled:'Annulation PRO',revoke_pro:'Révocation PRO',payment_created:'Paiement enregistré',payment_cancelled:'Paiement annulé',payment_edited:'Paiement modifié',payment_deleted:'Paiement supprimé',subscription_edited:'Abonnement modifié',subscription_deleted:'Abonnement supprimé'}
const detailLabels:Record<string,string>={permissions_avant:'Permissions avant',permissions_apres:'Permissions après',champs_modifies:'Champs modifiés',titre:'Titre',echeance:'Échéance',priorite:'Priorité',terminee:'Terminée',montant_DH:'Montant (DH)',mode:'Mode de paiement',duree_jours:'Durée (jours)',expiration:'Expiration',tache_id:'Référence tâche',abonnement_id:'Référence abonnement',paiement_id:'Référence paiement'}
const fieldLabels:Record<string,string>={full_name:'Nom complet',email:'E-mail',language:'Langue',level:'Niveau',telephone:'Téléphone',pays:'Pays',ville:'Ville'}
const dates=new Intl.DateTimeFormat('fr-FR',{timeZone:'Africa/Casablanca',weekday:'short',day:'2-digit',month:'2-digit',year:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit',hourCycle:'h23'})
function dateText(value:string){const d=new Date(value);return Number.isNaN(d.getTime())?'Date inconnue':dates.format(d)}
function detailText(key:string,value:unknown):string{
 if(Array.isArray(value))return value.map(x=>key.startsWith('permissions_')?(permissionLabels[x as Permission]||String(x)):key==='champs_modifies'?(fieldLabels[String(x)]||String(x)):String(x)).join(', ')||'—'
 if(typeof value==='boolean')return value?'Oui':'Non'
 if(key==='expiration'&&typeof value==='string')return dateText(value)
 return value===null?'—':String(value)
}
export default function AdminActivityPage(){
 const [rows,setRows]=useState<Activity[]>([]),[busy,setBusy]=useState(true),[error,setError]=useState(''),[more,setMore]=useState(false)
 const version=useRef(0),running=useRef(false)
 async function load(before:string|null=null){
  if(running.current)return
  running.current=true;const seq=++version.current;setBusy(true);setError('')
  try{
   const {data,error:e}=await supabase.rpc('admin_activity_feed',{p_before:before});if(e)throw e
   if(seq!==version.current)return
   const items=Array.isArray(data)?data as Activity[]:[]
   setRows(old=>before?[...old,...items.filter(x=>!old.some(y=>x.id===y.id))]:items);setMore(items.length===100)
  }catch(e){if(seq===version.current){setRows([]);setMore(false);setError((e as {message?:string})?.message||'Journal indisponible.')}}finally{if(seq===version.current){running.current=false;setBusy(false)}}
 }
 useEffect(()=>{void load();return()=>{++version.current;running.current=false}},[])
 return <main className="rbac-page de-activity-page">
  <header><History size={30}/><div><small>ESPACE PROPRIÉTAIRE</small><h1>Journal d’activité</h1><p>Les opérations administratives enregistrées · Heure du Maroc</p></div></header>
  <section className="de-activity-intro"><ShieldCheck size={23}/><div><strong>Traçabilité des modifications</strong><p>Chaque ligne indique le compte qui a effectué l’opération. Les événements antérieurs ne sont repris que si l’ancien journal les contenait.</p></div><button type="button" onClick={()=>void load()} disabled={busy}><RefreshCw size={16}/> Actualiser</button></section>
  {error&&<p role="alert" className="rbac-error">{error}</p>}
  <section><h2>Historique des opérations</h2><p>{rows.length} opération(s) affichée(s) · Plus récentes en premier</p>
   {!rows.length&&!error&&<p role="status">{busy?'Chargement…':'Aucune opération enregistrée.'}</p>}
   <div className="de-activity-list">{rows.map(r=><article key={r.id} className="de-activity-row"><div className="de-activity-avatar"><UserRound size={19}/></div><div className="de-activity-event"><strong>{labels[r.action]||r.action}</strong><p>Par <b>{r.actor_name}</b>{r.target_name||r.target_id?<> · Cible : {r.target_name||r.target_id}</>:null}</p><small>{dateText(r.occurred_at)}{r.historical?' · Ancien journal':''}</small><details><summary>Détails de l’opération</summary><dl><dt>Compte auteur</dt><dd>{r.actor_id}</dd>{r.target_id&&<><dt>Compte cible</dt><dd>{r.target_id}</dd></>}{Object.entries(r.details||{}).map(([k,v])=><div key={k}><dt>{detailLabels[k]||k}</dt><dd>{detailText(k,v)}</dd></div>)}</dl></details></div></article>)}</div>
   {more&&<button type="button" disabled={busy} onClick={()=>void load(rows[rows.length-1].id)}>{busy?'Chargement…':'Afficher les opérations précédentes'}</button>}
  </section>
 </main>
}

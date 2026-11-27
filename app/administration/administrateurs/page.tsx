'use client'
import AdminLoader from '../AdminLoader'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import {ShieldCheck,Users,History} from 'lucide-react'
import {supabase} from '@/lib/supabase'
import {useAdmin,positions,positionLabel,translate} from '../admin-context'
import {has,parseAccess,permissions,permissionLabels, type Access, type Permission} from '@/lib/adminAccess'
type Admin = {id:string;name:string|null;email:string|null;owner:boolean;permissions:Permission[];position?:string}
type Audit = {id:string;actor_id:string;target_id:string;actor_name:string|null;target_name:string|null;action:string;before_permissions:Permission[]|null;after_permissions:Permission[]|null;created_at:string}
const dateFormat=new Intl.DateTimeFormat('fr-FR',{timeZone:'Africa/Casablanca',dateStyle:'medium',timeStyle:'short'})
const actions:Record<string,string>={appoint:'Nomination',edit:'Modification des permissions',revoke:'Révocation',revoke_pro:'Révocation PRO',delete_account:'Suppression définitive du compte'}
type Candidate = {email:string;full_name:string|null}
const PAGE_SIZE=50
function ConfirmedStudentPicker({value,onChange,disabled}:{value:string;onChange:(v:string)=>void;disabled:boolean}){
 const [query,setQuery]=useState(''),[page,setPage]=useState(0),[items,setItems]=useState<Candidate[]>([]),[more,setMore]=useState(false),[loading,setLoading]=useState(true),[error,setError]=useState(''),[retry,setRetry]=useState(0)
 useEffect(()=>{
  let active=true;setLoading(true);setError('');setItems([]);setMore(false)
  const timer=window.setTimeout(async()=>{
   try{const {data,error}=await supabase.rpc('admin_confirmed_students',{p_search:query.trim(),p_offset:page*PAGE_SIZE});if(!active)return;if(error)throw error;const rows=(data||[]) as Candidate[];setItems(rows.slice(0,PAGE_SIZE));setMore(rows.length>PAGE_SIZE)}catch(e){if(active)setError((e as {message?:string})?.message||'Liste indisponible.')}finally{if(active)setLoading(false)}
  },200)
  return()=>{active=false;window.clearTimeout(timer)}
 },[query,page,retry])
 return <div className="rbac-candidate-picker">
  <label htmlFor="candidate-search">Rechercher par nom ou e-mail</label>
  <input id="candidate-search" type="search" value={query} maxLength={200} placeholder="Rechercher un étudiant…" onChange={e=>{setQuery(e.target.value);setPage(0)}} disabled={disabled}/>
  <label htmlFor="admin-email">E-mail du compte étudiant confirmé</label>
  <select id="admin-email" value={value} onChange={e=>onChange(e.target.value)} disabled={disabled||loading||!!error}>
   <option value="">{loading?'Chargement…':error?'Liste indisponible':items.length?'Sélectionner une adresse e-mail':'Aucun compte confirmé trouvé'}</option>
   {value&&!items.some(r=>r.email===value)&&<option value={value}>{value} (sélectionné)</option>}
   {items.map(r=><option key={r.email} value={r.email}>{r.email}{r.full_name?` — ${r.full_name}`:''}</option>)}
  </select>
  {error&&<div role="alert" className="rbac-error">{error} <button type="button" className="rbac-secondary" onClick={()=>setRetry(v=>v+1)}>Réessayer</button></div>}
  {!loading&&!error&&<div className="rbac-candidate-pages"><small>{items.length} compte(s) · Page {page+1}</small><button type="button" className="rbac-secondary" disabled={disabled||page===0} onClick={()=>setPage(v=>v-1)}>Précédent</button><button type="button" className="rbac-secondary" disabled={disabled||!more} onClick={()=>setPage(v=>v+1)}>Suivant</button></div>}
  <small>Seuls les comptes étudiants dont l’adresse e-mail est confirmée sont proposés.</small>
 </div>
}
export default function AdminManagement(){
 const {language}=useAdmin();const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
 const [position,setPosition]=useState('administrator'),[custom,setCustom]=useState('')
 const [access,setAccess]=useState<Access|null>(null),[myId,setMyId]=useState(''),[rows,setRows]=useState<Admin[]>([]),[logs,setLogs]=useState<Audit[]>([])
 const [email,setEmail]=useState(''),[target,setTarget]=useState<Admin|null>(null),[selected,setSelected]=useState<Permission[]>([]),[busy,setBusy]=useState(false),[loading,setLoading]=useState(true),[error,setError]=useState(''),[message,setMessage]=useState('')
 async function load(){
  setLoading(true);setError('')
  try{
   const {data:{user},error:ue}=await supabase.auth.getUser();if(ue||!user)throw new Error('Session indisponible')
   const {data,error:e}=await supabase.rpc('admin_my_access');if(e)throw e
   const a=parseAccess(data);if(!a)throw new Error('Accès refusé');setAccess(a);setMyId(user.id)
   if(['appoint','edit_admins','revoke_admins'].some(p=>has(a,p as Permission))){const {data,error}=await supabase.rpc('admin_list_access');if(error)throw error;setRows((data||[]) as Admin[])}else setRows([])
   if(has(a,'audit')){const {data,error}=await supabase.rpc('admin_access_log');if(error)throw error;setLogs((data||[]) as Audit[])}else setLogs([])
  }catch(e){setError(e instanceof Error?e.message:(e as {message?:string})?.message||'Impossible de charger les droits.');setAccess(null);setRows([]);setLogs([])}finally{setLoading(false)}
 }
 useEffect(()=>{void load()},[])
 const canManage=(r:Admin)=>!!access&&!r.owner&&r.id!==myId&&(access.owner||r.permissions.every(p=>has(access,p)))
 function reset(){setTarget(null);setEmail('');setSelected([]);setPosition('administrator');setCustom('')}
 function toggle(p:Permission,checked:boolean){setSelected(old=>checked?Array.from(new Set([...old,p])):old.filter(x=>x!==p))}
 async function save(action:'appoint'|'edit'|'revoke',r:Admin|null=target){
  if(busy||!access)return
  if(action==='revoke'&&(!r||!canManage(r)||!window.confirm(`Révoquer l’accès administratif de ${r.name||r.email} ? Le compte restera étudiant.`)))return
  if(action==='appoint'&&!email.trim()){setError('Saisissez l’e-mail du compte confirmé.');return}
  if(action!=='revoke'&&!selected.length){setError('Sélectionnez au moins une permission.');return}
  setBusy(true);setError('');setMessage('')
  try{const {error}=await supabase.rpc('admin_manage_access_v2',{p_action:action,p_target_id:r?.id||null,p_email:action==='appoint'?email.trim():null,p_permissions:action==='revoke'?[]:selected,p_position:action!=='revoke'&&access.owner?(position==='custom'?custom.trim():position):null});if(error)throw error;reset();setMessage('Autorisations mises à jour.');await load()}catch(e){setError((e as {message?:string})?.message||'Opération refusée.')}finally{setBusy(false)}
 }
 async function deleteAccount(r:Admin){
  if(busy||!access?.owner||r.owner||r.id===myId)return
  const confirmation=window.prompt(`Supprimer définitivement le compte ${r.email||r.name||r.id} ?\nL’accès de connexion, le profil et l’historique d’apprentissage seront supprimés. Cette action est irréversible. Les comptes liés aux finances, imports ou fichiers sont protégés.\nPour confirmer, saisissez SUPPRIMER.`)
  if(confirmation!=='SUPPRIMER')return
  setBusy(true);setError('');setMessage('')
  try{
   const {error}=await supabase.rpc('admin_delete_account',{p_target_id:r.id});if(error)throw error
   reset();await load();setMessage('Compte supprimé définitivement.')
  }catch(e){setError((e as {message?:string})?.message||'Suppression refusée.')}finally{setBusy(false)}
 }
 if(loading)return <AdminLoader />
 return <main className="rbac-page"><Link href="/administration">← Tableau de bord</Link><header><ShieldCheck size={30}/><div><small>GESTION DES ACCÈS</small><h1>Administrateurs</h1><p>Propriétaire protégé · Autorisations individuelles</p></div></header>
 {error&&<p role="alert" className="rbac-error">{error}</p>}{message&&<p role="status" className="rbac-ok">{message}</p>}
 {access&&<>{rows.length>0&&<section><h2><Users size={20}/> Comptes administratifs</h2>{rows.map(r=><article key={r.id} className="rbac-person"><div><strong>{r.name||r.email||r.id}</strong><small>{r.email}</small><p>{positionLabel(r.position||'administrator',language,r.owner)} · {r.owner?t('Tous les droits','Alle Rechte','جميع الصلاحيات'):`${r.permissions.length} autorisation(s)`}{r.id===myId?' · Votre compte':''}</p>{!r.owner&&<details><summary>Autorisations</summary><ul>{r.permissions.map(p=><li key={p}>{permissionLabels[p]||p}</li>)}</ul></details>}</div><div className="rbac-actions">{canManage(r)&&has(access,'edit_admins')&&<button disabled={busy} onClick={()=>{setTarget(r);setSelected(r.permissions);setEmail('');setError('');const p=r.position||'administrator';setPosition(positions.some(x=>x[0]===p)?p:'custom');setCustom(positions.some(x=>x[0]===p)?'':p)}}>Modifier</button>}{canManage(r)&&has(access,'revoke_admins')&&<button className="rbac-danger" disabled={busy} onClick={()=>void save('revoke',r)}>Révoquer</button>}{access.owner&&!r.owner&&r.id!==myId&&<button type="button" className="rbac-delete-account" disabled={busy} onClick={()=>void deleteAccount(r)}>Supprimer le compte</button>}</div></article>)}</section>}
 {(has(access,'appoint')||target&&has(access,'edit_admins'))&&<section><h2>{target?`Modifier : ${target.name||target.email}`:'Nommer un administrateur'}</h2>{!target&&<ConfirmedStudentPicker value={email} onChange={setEmail} disabled={busy}/> }
 {access.owner&&<div className="admin-position-input"><label htmlFor="admin-position">{t('Poste','Position','المنصب')}</label><select id="admin-position" value={position} onChange={e=>setPosition(e.target.value)} disabled={busy}>{positions.map(p=><option key={p[0]} value={p[0]}>{positionLabel(p[0],language)}</option>)}<option value="custom">{t('Poste personnalisé','Eigene Position','منصب مخصص')}</option></select>{position==='custom'&&<input value={custom} onChange={e=>setCustom(e.target.value)} maxLength={80} placeholder={t('Intitulé du poste','Positionsbezeichnung','اسم المنصب')} disabled={busy}/>}</div>}
 <p>Choisissez les droits. Un administrateur délégué ne peut attribuer que ceux qu’il possède.</p><div className="rbac-checks">{permissions.filter(p=>has(access,p)&&(p!=='courses'||!!target?.permissions.includes(p))&&(p!=='results'||access.owner||!!target?.permissions.includes(p))).map(p=><label key={p}><input type="checkbox" checked={selected.includes(p)} onChange={e=>toggle(p,e.target.checked)} disabled={busy||p==='results'&&!access.owner}/>{p==='results'?t('Consulter le suivi des résultats','Lernfortschritt ansehen','متابعة نتائج الطلاب'):permissionLabels[p]}</label>)}</div><small>Étudiants requis pour la gestion des profils, les opérations PRO, les finances, les tâches et les statistiques. Finances requises pour les annulations et statistiques.</small><div className="rbac-actions"><button disabled={busy||!selected.length||(!target&&!email)||(access.owner&&position==='custom'&&!custom.trim())} onClick={()=>void save(target?'edit':'appoint')}>{target?'Enregistrer les droits':'Nommer'}</button><button className="rbac-secondary" onClick={reset} disabled={busy}>Annuler</button></div></section>}
 {has(access,'audit')&&<section><h2><History size={20}/> Journal des autorisations</h2><p>200 dernières opérations · Heure du Maroc</p>{logs.length===0?<p>Aucune opération enregistrée.</p>:logs.map(l=><article className="rbac-person" key={l.id}><div><strong>{actions[l.action]||l.action}</strong><p>{l.actor_name||l.actor_id} → {l.target_name||l.target_id}</p><small>{dateFormat.format(new Date(l.created_at))}</small><details><summary>Détails</summary><p>Avant : {l.before_permissions?.map(p=>permissionLabels[p]).join(', ')||'—'}</p><p>Après : {l.after_permissions?.map(p=>permissionLabels[p]).join(', ')||'—'}</p></details></div></article>)}</section>}</>}
 </main>
}

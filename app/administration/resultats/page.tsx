'use client'
import AdminLoader from '../AdminLoader'
import {useEffect,useState} from 'react'
import Link from 'next/link'
import {BarChart3,Search,ArrowRight} from 'lucide-react'
import {supabase} from '@/lib/supabase'
import {useAdmin,translate} from '../admin-context'
type Student={id:string;full_name:string|null;email:string|null;level:string|null;attempt_count:number;mean_score:number|null;last_attempt:string|null}
const SIZE=25
export default function ResultsPage(){
 const {language}=useAdmin();const t=(fr:string,de:string,ar:string)=>translate(language,fr,de,ar)
 const locale=language==='ar'?'ar-MA':language==='de'?'de-DE':'fr-FR'
 const fmt=new Intl.DateTimeFormat(locale,{timeZone:'Africa/Casablanca',dateStyle:'medium',timeStyle:'short'})
 const num=new Intl.NumberFormat(locale,{maximumFractionDigits:2})
 const [search,setSearch]=useState(''),[page,setPage]=useState(0),[students,setStudents]=useState<Student[]>([]),[more,setMore]=useState(false),[loading,setLoading]=useState(true),[error,setError]=useState(false),[reload,setReload]=useState(0)
 useEffect(()=>{let live=true;setLoading(true);setError(false);setMore(false);setStudents([])
 const timer=window.setTimeout(async()=>{try{const {data,error}=await supabase.rpc('admin_result_students',{p_search:search.trim(),p_offset:page*SIZE});if(!live)return;if(error)throw error;const rows=data||[];setMore(rows.length>SIZE);setStudents(rows.slice(0,SIZE) as Student[])}catch{if(live)setError(true)}finally{if(live)setLoading(false)}},200)
 return()=>{live=false;window.clearTimeout(timer)}},[search,page,reload])
 return <main className="rbac-page admin-results-v1"><header><BarChart3 size={30}/><div><small>DEUTSCHE GRAMMATIK</small><h1>{t('Suivi des résultats','Lernfortschritt','متابعة نتائج الطلاب')}</h1><p>{t('Résultats réellement enregistrés · Heure du Maroc','Gespeicherte Ergebnisse · Marokkanische Zeit','النتائج المسجلة فعلياً · توقيت المغرب')}</p></div></header><section>
 <label htmlFor="result-search">{t('Rechercher un étudiant','Lernende suchen','البحث عن طالب')}</label><div className="result-search"><Search size={18}/><input id="result-search" type="search" value={search} maxLength={150} onChange={e=>{setSearch(e.target.value);setPage(0)}} placeholder={t('Nom ou e-mail','Name oder E-Mail','الاسم أو البريد الإلكتروني')}/></div>
 {loading?<AdminLoader inline />:error?<p role="alert" className="rbac-error">{t('Résultats indisponibles ou accès refusé.','Ergebnisse nicht verfügbar oder Zugriff verweigert.','النتائج غير متاحة أو الوصول مرفوض.')} <button type="button" onClick={()=>setReload(n=>n+1)}>{t('Réessayer','Erneut versuchen','إعادة المحاولة')}</button></p>:students.length===0?<p>{t('Aucun étudiant trouvé.','Keine Lernenden gefunden.','لم يتم العثور على طلاب.')}</p>:<div className="result-table-wrap"><table><thead><tr><th>{t('Étudiant','Lernende','الطالب')}</th><th>{t('Niveau','Niveau','المستوى')}</th><th>{t('Tentatives','Versuche','المحاولات')}</th><th>{t('Moyenne','Durchschnitt','المتوسط')}</th><th>{t('Dernière activité','Letzte Aktivität','آخر نشاط')}</th><th>{t('Détails','Details','التفاصيل')}</th></tr></thead><tbody>{students.map(s=><tr key={s.id}><td><strong>{s.full_name||s.email||s.id}</strong><small>{s.email}</small></td><td>{s.level||'—'}</td><td>{num.format(s.attempt_count)}</td><td>{s.mean_score===null?'—':`${num.format(s.mean_score)} / 100`}</td><td>{s.last_attempt?fmt.format(new Date(s.last_attempt)):'—'}</td><td><Link className="result-detail-link" href={`/administration/resultats/${encodeURIComponent(s.id)}`} style={{display:'inline-flex',alignItems:'center',gap:6,background:'#391021',color:'white',padding:'9px 12px',borderRadius:7,textDecoration:'none',whiteSpace:'nowrap'}}>{t('Détails','Details','التفاصيل')}<ArrowRight size={15}/></Link></td></tr>)}</tbody></table></div>}
 <div className="rbac-actions"><button className="rbac-secondary" disabled={loading||page===0} onClick={()=>setPage(p=>p-1)}>{t('Précédent','Zurück','السابق')}</button><span>{t('Page','Seite','صفحة')} {page+1}</span><button className="rbac-secondary" disabled={loading||error||!more} onClick={()=>setPage(p=>p+1)}>{t('Suivant','Weiter','التالي')}</button></div></section><p>{t('La moyenne porte sur toutes les tentatives enregistrées, pas sur un taux de maîtrise. Les examens TELC ne sont pas inclus.','Der Durchschnitt umfasst alle gespeicherten Versuche und ist kein Beherrschungsgrad. TELC-Prüfungen sind nicht enthalten.','المتوسط يخص جميع المحاولات المسجلة وليس نسبة الإتقان. لا تشمل النتائج امتحانات TELC.')}</p></main>
}

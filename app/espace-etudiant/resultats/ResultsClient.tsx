'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Activity, ArrowRight, Award, BarChart3, BookOpen, CheckCircle2, ChevronDown, Construction, History, NotebookPen, Target, Zap } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'
import DeutschErfolgLoader from '@/components/student/DeutschErfolgLoader'
import type { LocalizedText } from '@/lib/grammar/types'
import './results-premium.css'

type Chapter = {id:string; number:number; level:string; title:LocalizedText; subtitle:LocalizedText; sets:{id:string;position:number;title:LocalizedText;category:string;graded:boolean}[]}
type Attempt = {id:string;chapter_id:string;exercise_set_id:string;category:string;score:number|string|null;total_questions:number;correct_answers:number;manual_questions:number;created_at:string}
type Profile = {name:string;level:string}
type Xp = {xp:number;completed:number}
const root='/espace-etudiant'
const grammar=root+'/apprentissage/grammaire'
const levels=['A1','A2','B1']
const copy = {
 fr:{title:'Mes résultats',tag:'MON APPRENTISSAGE',motto:'Chaque progrès compte.',xp:'Mes XP',average:'Note moyenne',passed:'Exercices réussis',best:'Meilleur score',attempts:'Tentatives',trend:'Évolution des notes',trendHint:'10 dernières tentatives notées',progress:'Progression en grammaire',covered:'Chapitres travaillés',mastered:'Meistertraining maîtrisé',chapters:'Mes chapitres',all:'Tous',week:'7 jours',month:'30 jours',history:'Historique des exercices',resume:'Reprendre',empty:'Aucun exercice enregistré pour le moment.',start:'Commencer la grammaire',noScore:'Pas encore de note',error:'Impossible de charger tes résultats.',retry:'Réessayer',more:'Afficher plus',exam:'Résultats TELC',building:'En cours de construction',examHint:'Les résultats TELC seront disponibles prochainement.',exams:'Voir les examens',league:'Voir la League',chapter:'Chapitre',exercise:'Exercice',manual:'Sans note automatique',notStarted:'Non travaillé',scoreHint:'Moyenne de toutes les tentatives notées.',coverageHint:'Un chapitre travaillé = au moins une tentative. Maîtrisé = tous les exercices Meistertraining notables à 80/100 ou plus.',allLevels:'Tous les niveaux',noMatch:'Aucun résultat pour ce filtre.',bestSet:'Meilleure note',back:'Tableau de bord',unknown:'Ancien exercice',noXp:'XP indisponibles',graded:'Noté'},
 de:{title:'Meine Ergebnisse',tag:'MEIN LERNEN',motto:'Jeder Fortschritt zählt.',xp:'Meine XP',average:'Durchschnitt',passed:'Bestandene Übungen',best:'Bestes Ergebnis',attempts:'Versuche',trend:'Notenverlauf',trendHint:'10 letzte bewertete Versuche',progress:'Grammatikfortschritt',covered:'Bearbeitete Kapitel',mastered:'Meistertraining gemeistert',chapters:'Meine Kapitel',all:'Alle',week:'7 Tage',month:'30 Tage',history:'Übungsverlauf',resume:'Weiterlernen',empty:'Noch keine Übungen gespeichert.',start:'Grammatik starten',noScore:'Noch keine Note',error:'Deine Ergebnisse konnten nicht geladen werden.',retry:'Erneut versuchen',more:'Mehr anzeigen',exam:'TELC-Ergebnisse',building:'Im Aufbau',examHint:'TELC-Ergebnisse folgen später.',exams:'Prüfungen ansehen',league:'Liga ansehen',chapter:'Kapitel',exercise:'Übung',manual:'Ohne automatische Bewertung',notStarted:'Nicht bearbeitet',scoreHint:'Durchschnitt aller bewerteten Versuche.',coverageHint:'Bearbeitet = mindestens ein Versuch. Gemeistert = alle bewertbaren Meistertraining-Übungen mit mindestens 80/100.',allLevels:'Alle Niveaus',noMatch:'Keine Ergebnisse für diesen Filter.',bestSet:'Bestnote',back:'Übersicht',unknown:'Ältere Übung',noXp:'XP nicht verfügbar',graded:'Bewertet'},
 en:{title:'My results',tag:'MY LEARNING',motto:'Every step counts.',xp:'My XP',average:'Average score',passed:'Passed exercises',best:'Best score',attempts:'Attempts',trend:'Score history',trendHint:'Last 10 graded attempts',progress:'Grammar progress',covered:'Chapters practised',mastered:'Meistertraining mastered',chapters:'My chapters',all:'All',week:'7 days',month:'30 days',history:'Exercise history',resume:'Resume',empty:'No exercises recorded yet.',start:'Start grammar',noScore:'No score yet',error:'Unable to load your results.',retry:'Try again',more:'Show more',exam:'TELC results',building:'Under construction',examHint:'TELC results will be available later.',exams:'View exams',league:'View the League',chapter:'Chapter',exercise:'Exercise',manual:'Not automatically graded',notStarted:'Not practised',scoreHint:'Average of all graded attempts.',coverageHint:'Practised = at least one attempt. Mastered = all gradable Meistertraining exercises scored at least 80/100.',allLevels:'All levels',noMatch:'No results for this filter.',bestSet:'Best score',back:'Dashboard',unknown:'Older exercise',noXp:'XP unavailable',graded:'Graded'},
 ar:{title:'نتائجي',tag:'مساري التعليمي',motto:'كل تقدم مهم.',xp:'نقاط XP',average:'متوسط النقاط',passed:'التمارين المجتازة',best:'أفضل نتيجة',attempts:'المحاولات',trend:'تطور النتائج',trendHint:'آخر 10 محاولات مقيمة',progress:'التقدم في القواعد',covered:'الفصول المتدرب عليها',mastered:'إتقان Meistertraining',chapters:'فصولي',all:'الكل',week:'7 أيام',month:'30 يوماً',history:'سجل التمارين',resume:'متابعة التعلم',empty:'لا توجد تمارين مسجلة بعد.',start:'ابدأ القواعد',noScore:'لا توجد نتيجة بعد',error:'تعذر تحميل نتائجك.',retry:'إعادة المحاولة',more:'عرض المزيد',exam:'نتائج TELC',building:'قيد الإنشاء',examHint:'ستتوفر نتائج TELC لاحقاً.',exams:'عرض الامتحانات',league:'عرض الدوري',chapter:'الفصل',exercise:'التمرين',manual:'دون تقييم تلقائي',notStarted:'لم يتم التدرب عليه',scoreHint:'متوسط جميع المحاولات المقيمة.',coverageHint:'الفصل المتدرب عليه: محاولة واحدة على الأقل. الإتقان: الحصول على 80/100 على الأقل في كل تمارين Meistertraining القابلة للتقييم.',allLevels:'جميع المستويات',noMatch:'لا توجد نتائج لهذا الاختيار.',bestSet:'أفضل نتيجة',back:'لوحة التحكم',unknown:'تمرين سابق',noXp:'نقاط XP غير متاحة',graded:'مقيم'},
} as const

function score(a:Attempt):number|null {
  if(a.score===null || a.score==='' || a.total_questions<=0) return null
  const n=Number(a.score)
  return Number.isFinite(n)&&n>=0&&n<=100?n:null
}
function mean(rows:Attempt[]) {const vals=rows.map(score).filter((n):n is number=>n!==null);return vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):null}
function key(chapter:string,set:string){return JSON.stringify([chapter,set])}
const display=(n:number|null)=>n===null?'—':`${n}/100`

export default function ResultsClient({catalog}:{catalog:Chapter[]}) {
  const {language,isRTL}=useLanguage(); const t=copy[language]||copy.de; const router=useRouter()
  const [profile,setProfile]=useState<Profile|null>(null),[rows,setRows]=useState<Attempt[]|null>(null),[xp,setXp]=useState<Xp|null>(null)
  const [loading,setLoading]=useState(true),[error,setError]=useState(false),[reload,setReload]=useState(0)
  const [level,setLevel]=useState('all'),[period,setPeriod]=useState<'all'|'week'|'month'>('all'),[limit,setLimit]=useState(10),[chapterLimit,setChapterLimit]=useState(8)
  useEffect(()=>{let live=true;setLoading(true);setError(false);setRows(null);setXp(null);setProfile(null)
    async function load(){
      try {
        const {data:{user},error:authError}=await supabase.auth.getUser()
        if(!live)return
        if(authError||!user){router.replace('/connexion');return}
        const [p,x]=await Promise.all([supabase.from('profiles').select('full_name,level').eq('id',user.id).maybeSingle(),supabase.rpc('league_get_my_xp')])
        if(!live)return
        setProfile({name:p.data?.full_name||user.user_metadata?.full_name||'',level:p.data?.level||user.user_metadata?.niveau||''})
        if(!x.error&&x.data?.xp!=null&&x.data?.completed!=null&&Number.isFinite(Number(x.data.xp))&&Number.isFinite(Number(x.data.completed)))setXp({xp:Number(x.data.xp),completed:Number(x.data.completed)})
        // Paginate instead of silently using Supabase's default 1000-row maximum.
        const collected:Attempt[]=[];const size=200
        for(let offset=0;live;offset+=size){
          const {data,error:queryError}=await supabase.from('grammar_exercise_attempts').select('id,chapter_id,exercise_set_id,category,score,total_questions,correct_answers,manual_questions,created_at').eq('student_id',user.id).order('created_at',{ascending:false}).order('id',{ascending:false}).range(offset,offset+size-1)
          if(!live)return
          if(queryError)throw queryError
          const batch=(data||[]) as Attempt[];collected.push(...batch)
          if(batch.length<size)break
        }
        if(live)setRows(collected)
      }catch{if(live)setError(true)}finally{if(live)setLoading(false)}
    }
    void load();return()=>{live=false}
  },[router,reload])
  const catalogById=useMemo(()=>new Map(catalog.map(c=>[c.id,c])),[catalog])
  const analysis=useMemo(()=>{
    const byChapter=new Map<string,Attempt[]>(),bestBySet=new Map<string,number>(),counts=new Map<string,number>();let best:number|null=null
    for(const a of rows||[]){const list=byChapter.get(a.chapter_id)||[];list.push(a);byChapter.set(a.chapter_id,list);const k=key(a.chapter_id,a.exercise_set_id);counts.set(k,(counts.get(k)||0)+1);const n=score(a);if(n!==null){bestBySet.set(k,Math.max(bestBySet.get(k)??0,n));best=Math.max(best??0,n)}}
    const mastered=(c:Chapter)=>{const required=c.sets.filter(s=>s.category==='meistertraining'&&s.graded);return required.length>0&&required.every(s=>(bestBySet.get(key(c.id,s.id))??-1)>=80)}
    return {byChapter,bestBySet,counts,best,average:mean(rows||[]),mastered,passed:Array.from(bestBySet.values()).filter(v=>v>=80).length}
  },[rows])
  const recent=(rows||[]).filter(a=>score(a)!==null).slice(0,10).reverse()
  const filtered=(rows||[]).filter(a=>period==='all'||Date.parse(a.created_at)>=Date.now()-(period==='week'?7:30)*86400000)
  const chapters=catalog.filter(c=>(level==='all'||c.level===level)&&analysis.byChapter.has(c.id))
  const dateFormat=new Intl.DateTimeFormat(language==='ar'?'ar-MA':language==='de'?'de-DE':language==='en'?'en-GB':'fr-FR',{dateStyle:'medium',timeStyle:'short'})
  const date=(s:string)=>{const d=new Date(s);return Number.isFinite(d.getTime())?dateFormat.format(d):'—'}
  const retry=()=>setReload(n=>n+1)
  const arrow=<ArrowRight size={16} className="de-r-arrow" aria-hidden="true"/>
  const title=(c:Chapter)=>c.subtitle[language]||c.subtitle.de||c.title.de
  if(loading)return <DeutschErfolgLoader kind="page"/>
  return <main className="de-results-v1" dir={isRTL?'rtl':'ltr'}>
    <div className="de-r-shell">
      <Link className="de-r-back" href={root}>{arrow}{t.back}</Link>
      <header className="de-r-hero"><div><span>{t.tag}</span><h1>{t.title}</h1>{profile?.name&&<p>{profile.name}</p>}<small>{t.motto}</small></div><div className="de-r-hero-mark"><BarChart3 size={38} strokeWidth={1.6}/>{profile?.level&&<strong style={{ direction: "ltr" }}>{profile.level}</strong>}</div></header>
      {error&&<div role="alert" className="de-r-error">{t.error}<button onClick={retry}>{t.retry}</button></div>}
      <div className="de-r-stats">
        {[{label:t.xp,value:xp?String(xp.xp):'—',Icon:Zap,color:'gold',href:root+'/classement'},{label:t.average,value:rows?display(analysis.average):'—',Icon:Target,color:'blue'},{label:t.passed,value:xp?String(xp.completed):rows?String(analysis.passed):'—',Icon:CheckCircle2,color:'green'},{label:t.best,value:rows?display(analysis.best):'—',Icon:Award,color:'purple'}].map(({label,value,Icon,color,href})=><article key={label} className="de-r-stat"><span className={'de-r-icon '+color}><Icon size={25} strokeWidth={1.8}/></span><strong dir="ltr">{value}</strong><span>{label}</span>{href&&<Link href={href} className="de-r-mini-link">{t.league}{arrow}</Link>}</article>)}
      </div>
      {!xp&&<p className="de-r-muted">{t.noXp} · <button className="de-r-text-button" onClick={retry}>{t.retry}</button></p>}
      {rows&&<>
      <div className="de-r-duo">
        <section className="de-r-panel"><div className="de-r-heading"><div><h2>{t.trend}</h2><p>{t.trendHint}</p></div><Activity size={24}/></div>
          {recent.length?<><svg className="de-r-chart" viewBox="0 0 320 156" role="img" aria-label={`${t.trend}: ${recent.map(a=>score(a)).join(', ')}`} style={{ direction: "ltr" }}>
            {[0,25,50,75,100].map(n=><g key={n}><line x1="35" y1={124-n} x2="306" y2={124-n} stroke="#e8e2d8" strokeDasharray="3 4"/><text x="28" y={128-n} textAnchor="end" fontSize="10" fill="#637083">{n}</text></g>)}
            {recent.length>1&&<polyline points={recent.map((a,i)=>`${35+i*271/(recent.length-1)},${124-(score(a)??0)}`).join(' ')} fill="none" stroke="#ab884b" strokeWidth="2.6" strokeLinejoin="round"/>}
            {recent.map((a,i)=>{const x=recent.length===1?170:35+i*271/(recent.length-1);return <g key={a.id}><circle cx={x} cy={124-(score(a)??0)} r="4.5" fill="#192b43" stroke="white" strokeWidth="1.2"><title>{date(a.created_at)}: {score(a)}/100</title></circle><text x={x} y="145" textAnchor="middle" fontSize="9" fill="#637083">{i+1}</text></g>})}
          </svg><p className="de-r-muted">{t.scoreHint}</p></>:<p className="de-r-empty">{t.noScore}</p>}
        </section>
        <section className="de-r-panel"><div className="de-r-heading"><div><h2>{t.progress}</h2><p>{t.covered}</p></div><NotebookPen size={24}/></div>
          {levels.map(l=>{const cs=catalog.filter(c=>c.level===l);const worked=cs.filter(c=>analysis.byChapter.has(c.id)).length;const mastered=cs.filter(analysis.mastered).length;const pct=cs.length?Math.round(100*worked/cs.length):0;return <div className="de-r-level" key={l}><div><strong dir="ltr">{l}</strong><span dir="ltr">{worked}/{cs.length}</span></div><div className="de-r-track" role="progressbar" aria-label={`${l} ${t.covered}`} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}><span style={{width:`${pct}%`}}/></div><small>{t.mastered}: <b dir="ltr">{mastered}/{cs.length}</b></small></div>})}
          <details className="de-r-help"><summary>{t.progress}</summary><p>{t.coverageHint}</p></details>
        </section>
      </div>
      <section className="de-r-panel"><div className="de-r-heading"><div><h2>{t.chapters}</h2><p>{t.bestSet}</p></div><BookOpen size={24}/></div>
        <div className="de-r-filters">{['all',...levels].map(l=><button key={l} aria-pressed={level===l} onClick={()=>{setLevel(l);setChapterLimit(8)}}>{l==='all'?t.all:l}</button>)}</div>
        {chapters.length?chapters.slice(0,chapterLimit).map(c=>{const attempts=analysis.byChapter.get(c.id)||[];const values=c.sets.map(s=>analysis.bestBySet.get(key(c.id,s.id))).filter((n):n is number=>n!==undefined);const best=values.length?Math.max(...values):null;return <details key={c.id} className="de-r-chapter"><summary><span className="de-r-ch-number" dir="ltr">{String(c.number).padStart(2,'0')}</span><span className="de-r-ch-title"><strong>{title(c)}</strong><small lang="de" dir="ltr">{c.title.de} · {c.level}</small></span><b dir="ltr" className={best!==null&&best>=80?'de-r-good':''}>{display(best)}</b><ChevronDown size={18}/></summary><div className="de-r-detail">{c.sets.filter(s=>analysis.counts.has(key(c.id,s.id))).map(s=>{const k=key(c.id,s.id),n=analysis.bestBySet.get(k)??null;return <div className="de-r-row" key={s.id}><span className={'de-r-dot '+(n!==null&&n>=80?'pass':'')}><CheckCircle2 size={17}/></span><span><strong>{s.title[language]||s.title.de||`${t.exercise} ${s.position}`}</strong><small>{s.category==='extra_kick'?'Extra-Kick':'Meistertraining'} · {analysis.counts.get(k)} {t.attempts}</small></span><b dir="ltr">{display(n)}</b></div>})}<p className="de-r-muted">{attempts.length} {t.attempts}</p><Link className="de-r-action" href={`${grammar}/${encodeURIComponent(c.id)}`}>{t.resume}{arrow}</Link></div></details>}):<div className="de-r-empty"><p>{rows.length?t.noMatch:t.empty}</p><Link className="de-r-action" href={grammar}>{t.start}{arrow}</Link></div>}
        {chapters.length>chapterLimit&&<button className="de-r-more" onClick={()=>setChapterLimit(n=>n+8)}>{t.more}</button>}
      </section>
      <section className="de-r-panel"><div className="de-r-heading"><div><h2>{t.history}</h2><p>{rows.length} {t.attempts}</p></div><History size={24}/></div>
        <div className="de-r-filters">{(['all','week','month'] as const).map(p=><button key={p} aria-pressed={period===p} onClick={()=>{setPeriod(p);setLimit(10)}}>{t[p]}</button>)}</div>
        {filtered.length?filtered.slice(0,limit).map(a=>{const c=catalogById.get(a.chapter_id),s=c?.sets.find(s=>s.id===a.exercise_set_id),n=score(a);return <div className="de-r-row" key={a.id}><span className={'de-r-dot '+(n!==null&&n>=80?'pass':'')}><CheckCircle2 size={18}/></span><span>{c?<Link href={`${grammar}/${encodeURIComponent(c.id)}`}><strong>{title(c)}</strong></Link>:<strong>{a.chapter_id}</strong>}<small>{s?.title[language]||s?.title.de||t.unknown} · {date(a.created_at)}</small>{n===null&&<small>{t.manual}</small>}</span><b dir="ltr" className={n!==null&&n>=80?'de-r-good':''}>{display(n)}</b></div>}):<p className="de-r-empty">{rows.length?t.noMatch:t.empty}</p>}
        {filtered.length>limit&&<button className="de-r-more" onClick={()=>setLimit(n=>n+10)}>{t.more}</button>}
      </section>
      </>}
      <section className="de-r-exam"><Construction size={28}/><div><h2>{t.exam}</h2><strong>{t.building}</strong><p>{t.examHint}</p></div><Link href={root+'/examens'}>{t.exams}{arrow}</Link></section>
      <footer>© 2026 Deutsch Erfolg</footer>
    </div>
  </main>
}

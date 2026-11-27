'use client'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, ArrowRight, Mic, MessageCircle, BookOpen, GraduationCap, ClipboardList, Clock, CheckCircle2 } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { speakingCopy } from '@/lib/speaking/copy'
import { modes, topics, type SpeakingLevel, type SpeakingMode } from '@/lib/speaking/topics'
const icons = {telc:ClipboardList,oesd:BookOpen,goethe:GraduationCap,free:MessageCircle}
export default function SpeakingTrainingPage(){
 const {language,isRTL}=useLanguage();const t=speakingCopy[language]||speakingCopy.de
 const [mode,setMode]=useState<SpeakingMode>('free');const [level,setLevel]=useState<SpeakingLevel>('B1');const [topic,setTopic]=useState<number|null>(null)
 const Arrow=isRTL?ArrowLeft:ArrowRight
 const href=topic===null?'':`/espace-etudiant/speaking-training/session?${new URLSearchParams({mode,level,topic:String(topic)})}`
 return <main className="de-speak" dir={isRTL?'rtl':'ltr'}><Link className="ds-back" href="/espace-etudiant">{isRTL?<ArrowRight size={17}/>:<ArrowLeft size={17}/>} {t.back}</Link>
 <header className="ds-hero"><div><span>{t.tag}</span><h1>{t.title}</h1><p>{t.subtitle}</p><div className="ds-chips"><b>B1 · B2</b><b><Clock size={14}/>{t.minutes}</b></div></div><div className="ds-hero-icon"><Mic size={43}/></div></header>
 <section className="ds-panel"><h2>{t.chooseMode}</h2><div className="ds-modes">{modes.map(m=>{const Icon=icons[m];return <button key={m} type="button" aria-pressed={mode===m} className="ds-choice" onClick={()=>setMode(m)}><Icon size={26}/><strong>{t[m]}</strong><small>{m==='free'?t.freeDesc:t.examDesc}</small>{mode===m&&<CheckCircle2 className="ds-check" size={18}/>}</button>})}</div></section>
 <section className="ds-panel"><h2>{t.chooseLevel}</h2><div className="ds-levels">{(['B1','B2'] as const).map(l=><button key={l} type="button" aria-pressed={level===l} className="ds-choice ds-level" onClick={()=>{setLevel(l);setTopic(null)}}><strong>{l}</strong><small>{topics[l].length} {t.topics}</small>{level===l&&<CheckCircle2 className="ds-check" size={18}/>}</button>)}</div></section>
 <section className="ds-panel"><h2>{t.chooseTopic}</h2><div className="ds-topics">{topics[level].map((x,i)=><button type="button" className="ds-choice ds-topic" aria-pressed={topic===i} key={x.de} onClick={()=>setTopic(i)}><span className="ds-num" dir="ltr">{String(i+1).padStart(2,'0')}</span><div><strong dir="ltr" lang="de">{x.de}</strong>{language!=='de'&&<small>{x[language]}</small>}</div>{topic===i&&<CheckCircle2 size={18}/>}</button>)}</div><div className="ds-actions">{topic===null?<button className="ds-primary" disabled>{t.start}<Arrow size={18}/></button>:<Link className="ds-primary" href={href}>{t.start}<Arrow size={18}/></Link>}</div></section><aside className="ds-note"><strong>{t.ai}</strong><p>{t.notice}</p></aside></main>
}

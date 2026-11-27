'use client'
import Link from 'next/link'
import {useEffect,useState} from 'react'
import {ArrowLeft,ArrowRight,Clock,Mic,Play,Square,CheckCircle2} from 'lucide-react'
import {useLanguage} from '@/contexts/LanguageContext'
import DeutschErfolgLoader from '@/components/student/DeutschErfolgLoader'
import {speakingCopy} from '@/lib/speaking/copy'
import {modes,topics,type SpeakingLevel,type SpeakingMode} from '@/lib/speaking/topics'
type Config={mode:SpeakingMode;level:SpeakingLevel;topic:number}
const guides={telc:['Was ist Ihre Meinung zu diesem Thema?','Welche Erfahrungen haben Sie damit gemacht?','Welche Vor- und Nachteile sehen Sie?','Welche Lösung würden Sie vorschlagen?'],oesd:['Beschreiben Sie die Situation.','Wie würden Sie in dieser Situation reagieren?','Begründen Sie Ihre Meinung.','Welche Alternativen gibt es?'],goethe:['Stellen Sie das Thema kurz vor.','Erzählen Sie von Ihren eigenen Erfahrungen.','Nennen Sie verschiedene Möglichkeiten und bewerten Sie diese.','Fassen Sie Ihre Meinung kurz zusammen.'],free:['Was fällt Ihnen zu diesem Thema ein?','Welche Erfahrungen haben Sie damit?','Was gefällt Ihnen daran und was nicht?','Was möchten Sie in Zukunft anders machen?']}
export default function SpeakingSessionPage(){
 const {language,isRTL}=useLanguage();const t=speakingCopy[language]||speakingCopy.de
 const [config,setConfig]=useState<Config|null>(null),[loaded,setLoaded]=useState(false),[deadline,setDeadline]=useState<number|null>(null),[remaining,setRemaining]=useState(600),[finished,setFinished]=useState(false)
 useEffect(()=>{const p=new URLSearchParams(window.location.search);const mode=p.get('mode'),level=p.get('level'),raw=p.get('topic');if(mode&&modes.includes(mode as SpeakingMode)&&(level==='B1'||level==='B2')&&raw!==null&&/^\d+$/.test(raw)&&Number(raw)<topics[level].length)setConfig({mode:mode as SpeakingMode,level,topic:Number(raw)});setLoaded(true)},[])
 useEffect(()=>{if(deadline===null)return;function tick(){const left=Math.max(0,Math.ceil((deadline! - Date.now())/1000));setRemaining(left);if(left===0){setFinished(true);setDeadline(null)}}tick();const id=window.setInterval(tick,250);return()=>window.clearInterval(id)},[deadline])
 function begin(){setRemaining(600);setFinished(false);setDeadline(Date.now()+600000)}
 function end(){setDeadline(null);setFinished(true)}
 const back='/espace-etudiant/speaking-training';if(!loaded)return <DeutschErfolgLoader/>
 if(!config)return <main className="de-speak" dir={isRTL?'rtl':'ltr'}><section className="ds-panel"><h1>{t.invalid}</h1><Link className="ds-primary" href={back}>{t.return}</Link></section></main>
 const topic=topics[config.level][config.topic];const running=deadline!==null;const time=`${String(Math.floor(remaining/60)).padStart(2,'0')}:${String(remaining%60).padStart(2,'0')}`
 return <main className="de-speak" dir={isRTL?'rtl':'ltr'}><Link className="ds-back" href={back}>{isRTL?<ArrowRight size={17}/>:<ArrowLeft size={17}/>} {t.return}</Link><header className="ds-hero"><div><span>{t[config.mode]} · {config.level}</span><h1>{t.room}</h1><p lang="de" dir="ltr">{topic.de}</p></div><div className="ds-hero-icon"><Mic size={43}/></div></header>
 <section className="ds-panel ds-timer"><Clock size={26}/><span>{t.timer}</span><strong dir="ltr">{time}</strong><progress value={remaining} max={600} aria-label={t.timer}/>{finished?<><p><CheckCircle2 size={20}/>{t.finished}</p><div className="ds-actions"><button type="button" className="ds-primary" onClick={begin}>{t.next}</button><Link className="ds-secondary" href={back}>{t.restart}</Link></div></>:running?<button type="button" className="ds-secondary" onClick={end}><Square size={16}/>{t.end}</button>:<><p>{t.ready}</p><button type="button" className="ds-primary" onClick={begin}><Play size={18}/>{t.begin}</button></>}</section>
 <section className="ds-panel"><h2>{t.prompts}</h2><ol className="ds-prompts" lang="de" dir="ltr">{guides[config.mode].map((question,i)=><li key={question}><span className="ds-num">{i+1}</span>{question}</li>)}</ol></section><aside className="ds-note"><strong>{t.ai}</strong><p>{t.notice}</p></aside></main>
}

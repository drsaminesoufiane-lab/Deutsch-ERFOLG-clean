'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ArrowLeft, BookOpen, Trophy, Zap, CheckCircle2, Languages, GraduationCap } from 'lucide-react'
import type { PublicGrammarStats } from '@/lib/grammar/publicShowcase'
import type { Language } from '@/lib/grammar/types'
import styles from './GrammarShowcase.module.css'

const copy = {
  fr: { eyebrow:'LA BIBLIOTHÈQUE DE GRAMMAIRE', intro:'Comprendre les règles, les appliquer et consolider ses acquis. Un parcours structuré pour apprendre l’allemand à son rythme.', lessons:'Leçons détaillées', questions:'Questions interactives', sets:'Séries d’exercices', examples:'Exemples pédagogiques', formats:'Formats de questions', languages:'Langues', explore:'Découvrir le programme', method:'Une méthode en trois étapes', steps:['Comprendre','Pratiquer','Approfondir'], descriptions:['Règles, tableaux, exemples contextualisés et explications multilingues.','Exercices progressifs, corrections expliquées et suivi des scores pour les questions autocorrigées.','Séries complémentaires pour consolider vos acquis après le Meistertraining.'], catalog:'Explorez les chapitres', catalogIntro:'Choisissez un niveau, puis faites défiler les chapitres du programme.', all:'Tous', chapters:'Chapitres', chapter:'Chapitre', previous:'Chapitres précédents', next:'Chapitres suivants', detail:'Découvrir', demo:'Essayez gratuitement', demoIntro:'Choisissez le pronom personnel correct.', check:'Vérifier', correct:'Bonne réponse !', incorrect:'Réponse incorrecte.', explanation:'Sie remplace Anna, une personne au féminin singulier.', types:'Des formats variés pour progresser', typeNames:{qcm_single:'QCM simple',qcm_multiple:'QCM multiple',fill_blank:'Texte à trous',true_false:'Vrai / Faux',matching:'Association',reorder:'Remise en ordre',writing:'Expression écrite'} },
  de: { eyebrow:'DIE GRAMMATIKBIBLIOTHEK', intro:'Regeln verstehen, anwenden und festigen. Ein strukturierter Lernweg für Deutsch in Ihrem eigenen Tempo.', lessons:'Ausführliche Lektionen', questions:'Interaktive Aufgaben', sets:'Übungsserien', examples:'Lernbeispiele', formats:'Aufgabentypen', languages:'Sprachen', explore:'Programm entdecken', method:'Eine Methode in drei Schritten', steps:['Verstehen','Üben','Vertiefen'], descriptions:['Regeln, Tabellen, Beispiele im Kontext und mehrsprachige Erklärungen.','Aufbauende Übungen, erklärte Lösungen und Ergebnisse für automatisch bewertete Aufgaben.','Zusätzliche Übungsserien zur Vertiefung nach dem Meistertraining.'], catalog:'Kapitel entdecken', catalogIntro:'Wählen Sie ein Niveau und blättern Sie durch die Kapitel.', all:'Alle', chapters:'Kapitel', chapter:'Kapitel', previous:'Vorherige Kapitel', next:'Nächste Kapitel', detail:'Entdecken', demo:'Kostenlos ausprobieren', demoIntro:'Wählen Sie das richtige Personalpronomen.', check:'Überprüfen', correct:'Richtig!', incorrect:'Nicht ganz richtig.', explanation:'Sie ersetzt Anna, eine weibliche Person im Singular.', types:'Abwechslungsreiche Aufgabentypen', typeNames:{qcm_single:'Einfachauswahl',qcm_multiple:'Mehrfachauswahl',fill_blank:'Lückentext',true_false:'Richtig / Falsch',matching:'Zuordnung',reorder:'Reihenfolge',writing:'Schreiben'} },
  en: { eyebrow:'THE GRAMMAR LIBRARY', intro:'Understand the rules, apply them and consolidate your knowledge. A structured path to learning German at your own pace.', lessons:'Detailed lessons', questions:'Interactive questions', sets:'Exercise sets', examples:'Learning examples', formats:'Question formats', languages:'Languages', explore:'Explore the programme', method:'A three-step learning method', steps:['Understand','Practise','Deepen'], descriptions:['Rules, tables, contextual examples and multilingual explanations.','Progressive exercises, explained corrections and score tracking for automatically graded questions.','Additional exercise sets to consolidate your knowledge after Meistertraining.'], catalog:'Explore the chapters', catalogIntro:'Choose a level, then browse the chapters.', all:'All', chapters:'Chapters', chapter:'Chapter', previous:'Previous chapters', next:'Next chapters', detail:'Explore', demo:'Try it for free', demoIntro:'Choose the correct personal pronoun.', check:'Check answer', correct:'Correct!', incorrect:'Not quite right.', explanation:'Sie replaces Anna, a feminine singular subject.', types:'Varied exercise formats', typeNames:{qcm_single:'Single choice',qcm_multiple:'Multiple choice',fill_blank:'Fill in the blanks',true_false:'True / False',matching:'Matching',reorder:'Reordering',writing:'Writing'} },
  ar: { eyebrow:'مكتبة القواعد الألمانية', intro:'افهم القواعد وطبّقها وعزّز معارفك. مسار منظم لتعلم الألمانية حسب وتيرتك.', lessons:'دروس مفصلة', questions:'أسئلة تفاعلية', sets:'سلاسل تمارين', examples:'أمثلة تعليمية', formats:'أنواع الأسئلة', languages:'لغات', explore:'اكتشف البرنامج', method:'منهجية في ثلاث مراحل', steps:['الفهم','التدريب','التعمق'], descriptions:['قواعد وجداول وأمثلة سياقية وشروحات بلغات متعددة.','تمارين متدرجة وتصحيحات مشروحة وتتبع نتائج الأسئلة المصححة آلياً.','سلاسل إضافية لترسيخ المعارف بعد Meistertraining.'], catalog:'استكشف الفصول', catalogIntro:'اختر المستوى وتصفح فصول البرنامج.', all:'الكل', chapters:'فصول', chapter:'الفصل', previous:'الفصول السابقة', next:'الفصول التالية', detail:'اكتشف', demo:'جرّب مجاناً', demoIntro:'اختر ضمير الفاعل الصحيح.', check:'تحقق من الإجابة', correct:'إجابة صحيحة!', incorrect:'إجابة غير صحيحة.', explanation:'الضمير Sie يعوّض Anna، وهي مفرد مؤنث.', types:'أنواع متنوعة من التمارين', typeNames:{qcm_single:'اختيار واحد',qcm_multiple:'اختيارات متعددة',fill_blank:'ملء الفراغات',true_false:'صحيح / خطأ',matching:'المطابقة',reorder:'إعادة الترتيب',writing:'التعبير الكتابي'} },
} as const

export default function GrammarShowcase({ stats, language }: { stats: PublicGrammarStats; language: Language }) {
  const t = copy[language]
  const [level, setLevel] = useState('all')
  const [answer, setAnswer] = useState('')
  const [checked, setChecked] = useState(false)
  const track = useRef<HTMLDivElement>(null)
  const rtl = language === 'ar'
  const format = (n: number) => new Intl.NumberFormat(language === 'ar' ? 'ar-MA' : language).format(n)
  const levelRange = stats.levels.length > 1 ? `${stats.levels[0]}–${stats.levels[stats.levels.length - 1]}` : stats.levels[0] || ''
  const visible = stats.chapters.filter(c => level === 'all' || c.level === level)
  const path = '/espace-etudiant/apprentissage/grammaire'
  const move = (direction: number) => {
    const el = track.current
    if (el) el.scrollBy({ left: direction * (rtl ? -1 : 1) * Math.max(220, el.clientWidth * .85), behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })
  }
  const metrics = [[stats.lessons,t.lessons],[stats.questions,t.questions],[stats.meistertraining+stats.extraKick,t.sets],[stats.examples,t.examples],[stats.formats.length,t.formats],[stats.languages,t.languages]] as const
  const steps = [{name:'Lesson',count:stats.lessons,label:t.lessons,Icon:BookOpen},{name:'Meistertraining',count:stats.meistertraining,label:t.sets,Icon:Trophy},{name:'Extra-Kick',count:stats.extraKick,label:t.sets,Icon:Zap}]
  return (
    <section id="grammatik" className={styles.root} dir={rtl?'rtl':'ltr'} aria-labelledby="grammar-showcase-title">
      <div className={styles.inner}>
        <div className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}><GraduationCap size={19}/>{t.eyebrow}</span>
            <h2 id="grammar-showcase-title" lang="de">Deutsche <br/>Grammatik</h2>
            <span className={styles.range} dir="ltr">{levelRange}</span>
            <p>{t.intro}</p>
            <Link href={path} className={styles.goldButton}>{t.explore}{rtl?<ArrowLeft size={18}/>:<ArrowRight size={18}/>}</Link>
            <div className={styles.langs}><Languages size={17}/> Deutsch · Français · English · العربية</div>
          </div>
          <div className={styles.metrics}>{metrics.map(([n,label])=><div key={label}><strong>{format(n)}</strong><span>{label}</span></div>)}</div>
        </div>
        <h3 className={styles.heading}>{t.method}</h3>
        <div className={styles.steps}>{steps.map(({name,count,label,Icon},i)=><article key={name} className={`${styles.step} ${i===1?styles.dark:''}`}><div className={styles.stepTop}><Icon size={25}/><span>0{i+1}</span></div><span className={styles.kicker}>{t.steps[i]}</span><h4 lang="de">{name}</h4><strong>{format(count)} <small>{label}</small></strong><p>{t.descriptions[i]}</p></article>)}</div>
        <div className={styles.catalogHead}><div><h3 className={styles.heading}>{t.catalog}</h3><p>{t.catalogIntro}</p></div><div className={styles.arrows}><button type="button" onClick={()=>move(-1)} aria-label={t.previous}>{rtl?<ArrowRight size={19}/>:<ArrowLeft size={19}/>}</button><button type="button" onClick={()=>move(1)} aria-label={t.next}>{rtl?<ArrowLeft size={19}/>:<ArrowRight size={19}/>}</button></div></div>
        <div className={styles.filters} aria-label={t.catalog}>{['all',...stats.levels].map(l=><button key={l} type="button" aria-pressed={level===l} onClick={()=>setLevel(l)}>{l==='all'?t.all:l} <span>{format(l==='all'?stats.chapters.length:stats.chapters.filter(c=>c.level===l).length)}</span></button>)}</div>
        <div key={level+'-'+language} className={styles.track} ref={track} tabIndex={0} aria-label={t.catalog}>
          {visible.map(c=><article className={styles.chapter} key={c.id}><div className={styles.cover}><div className={styles.coverTop}><span dir="ltr">{c.level}</span><BookOpen size={19}/></div><span className={styles.chapterNumber} dir="ltr">{String(c.number).padStart(2,'0')}</span><h4 lang="de" dir="ltr">{c.title}</h4><span className={styles.coverFooter} lang="de">DEUTSCHE GRAMMATIK</span></div><div className={styles.chapterBody}><p>{c.subtitle[language]}</p><div className={styles.chapterStats}><span>{format(c.examples)} {t.examples}</span><span>{format(c.questions)} {t.questions}</span><span>{format(c.meistertraining)} Meistertraining</span><span>{format(c.extraKick)} Extra-Kick</span></div><Link href={`${path}/${c.id}`} className={styles.detail}>{t.detail}{rtl?<ArrowLeft size={17}/>:<ArrowRight size={17}/>}</Link></div></article>)}
        </div>
        <div className={styles.lower}>
          <div className={styles.demo}><span className={styles.kicker}>A1 · Personalpronomen</span><h3>{t.demo}</h3><p>{t.demoIntro}</p><p className={styles.sentence} lang="de" dir="ltr">Anna lernt Deutsch. ___ lernt jeden Tag.</p><div className={styles.options} lang="de" dir="ltr">{['Er','Sie','Es','Wir'].map(a=><button key={a} type="button" aria-pressed={answer===a} onClick={()=>{setAnswer(a);setChecked(false)}}>{a}</button>)}</div><button className={styles.check} type="button" disabled={!answer} onClick={()=>setChecked(true)}>{t.check}</button>{checked&&<div className={styles.feedback} role="status"><strong className={answer==='Sie'?styles.correct:styles.incorrect}>{answer==='Sie'?t.correct:t.incorrect}</strong><p>{t.explanation}</p></div>}</div>
          <div className={styles.types}><h3>{t.types}</h3><div className={styles.typeGrid}>{stats.formats.map(f=><div key={f.id}><CheckCircle2 size={17}/><strong>{format(f.count)}</strong><span>{t.typeNames[f.id as keyof typeof t.typeNames] ?? f.id}</span></div>)}</div></div>
        </div>
      </div>
    </section>
  )
}

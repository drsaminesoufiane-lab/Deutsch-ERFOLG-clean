'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { ListTree } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
const words = {"fr": ["Votre parcours d\u2019apprentissage", "Le\u00e7on et exercices", "Apprenez, entra\u00eenez-vous et progressez.", "\u00c9tape", "Le\u00e7on th\u00e9orique", "Exercices principaux", "Exercices bonus", "\u00c9tudier", "S\u2019entra\u00eener", "Aller plus loin", "\u00c0 d\u00e9bloquer", "Sommaire des exercices", "Meilleur score", "Non commenc\u00e9", "Verrouill\u00e9", "Sommaire de la le\u00e7on", "Objectifs p\u00e9dagogiques"], "de": ["Ihr Lernweg", "Lektion und \u00dcbungen", "Lernen, \u00fcben und Fortschritte machen.", "Schritt", "Theorie", "Haupt\u00fcbungen", "Zusatz\u00fcbungen", "Lernen", "\u00dcben", "Vertiefen", "Freischalten", "\u00dcbungs\u00fcbersicht", "Bestes Ergebnis", "Nicht begonnen", "Gesperrt", "Inhaltsverzeichnis", "Lernziele"], "en": ["Your learning path", "Lesson and exercises", "Learn, practise and make progress.", "Step", "Theory lesson", "Main exercises", "Bonus exercises", "Study", "Practise", "Go further", "To unlock", "Exercise contents", "Best score", "Not started", "Locked", "Lesson contents", "Learning objectives"], "ar": ["\u0645\u0633\u0627\u0631\u0643 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a", "\u0627\u0644\u062f\u0631\u0633 \u0648\u0627\u0644\u062a\u0645\u0627\u0631\u064a\u0646", "\u062a\u0639\u0644\u0645 \u0648\u062a\u062f\u0631\u0628 \u0648\u062a\u0642\u062f\u0645.", "\u0627\u0644\u062e\u0637\u0648\u0629", "\u0627\u0644\u062f\u0631\u0633 \u0627\u0644\u0646\u0638\u0631\u064a", "\u0627\u0644\u062a\u0645\u0627\u0631\u064a\u0646 \u0627\u0644\u0623\u0633\u0627\u0633\u064a\u0629", "\u062a\u0645\u0627\u0631\u064a\u0646 \u0625\u0636\u0627\u0641\u064a\u0629", "\u0627\u062f\u0631\u0633", "\u062a\u062f\u0631\u0628", "\u062a\u0642\u062f\u0645", "\u0628\u0627\u0646\u062a\u0638\u0627\u0631 \u0627\u0644\u0641\u062a\u062d", "\u0641\u0647\u0631\u0633 \u0627\u0644\u062a\u0645\u0627\u0631\u064a\u0646", "\u0623\u0641\u0636\u0644 \u0646\u062a\u064a\u062c\u0629", "\u0644\u0645 \u064a\u0628\u062f\u0623", "\u0645\u0642\u0641\u0644", "\u0641\u0647\u0631\u0633 \u0627\u0644\u062f\u0631\u0633", "\u0623\u0647\u062f\u0627\u0641 \u0627\u0644\u062a\u0639\u0644\u0645"]}
// DE_GRAMMAR_JOURNEY_TEST_V1
export default function GrammarLessonContents({children}:{children:ReactNode}) {
  const {language, isRTL} = useLanguage()
  const root = useRef<HTMLDivElement>(null)
  const [rows,setRows] = useState<{label:string;node:HTMLElement}[]>([])
  useEffect(()=>{
    const host = root.current
    if (!host) return
    function scan() {
      if (!host) return
      const headings = Array.from(host.querySelectorAll<HTMLElement>('h2,h3,h4,.lesson-objective'))
      const found = headings.filter(node=>node.getClientRects().length && !headings.some(parent=>parent !== node && parent.classList.contains('lesson-objective') && parent.contains(node))).map(node=>({node,label:node.classList.contains('lesson-objective') ? words[language][16] : (node.textContent || '').trim()})).filter(row=>row.label)
      setRows(prev=>prev.length===found.length && prev.every((row,i)=>row.node===found[i].node && row.label===found[i].label) ? prev : found)
    }
    scan()
    const observer = new MutationObserver(scan)
    observer.observe(host,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['hidden','aria-expanded','open']})
    return ()=>observer.disconnect()
  },[language,children])
  return <>
    {rows.length>0 && <section className="de-journey-contents" aria-label={words[language][15]}>
      <h3><ListTree size={21} aria-hidden="true" />{words[language][15]}</h3>
      <div className="de-journey-rows">{rows.map(({label,node},i)=><button key={i} type="button" className="de-journey-row" onClick={()=>{if(node.isConnected){node.scrollIntoView({block:'start',behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto':'smooth'})}}}>
        <span className="de-journey-number">{String(i+1).padStart(2,'0')}</span><span className="de-journey-row-title">{label}</span><span aria-hidden="true">{isRTL ? '\u2190':'\u2192'}</span>
      </button>)}</div>
    </section>}
    <div ref={root} className="de-trial-lesson-body">{children}</div>
  </>
}

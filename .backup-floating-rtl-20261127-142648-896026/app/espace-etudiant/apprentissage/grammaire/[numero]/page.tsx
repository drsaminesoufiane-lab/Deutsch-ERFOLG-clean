'use client'

import DeutschErfolgLoader from '@/components/student/DeutschErfolgLoader'
import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'
import type { ChapterDefinition, LocalizedText } from '@/lib/grammar/types'
import LessonRenderer from '@/components/grammar/LessonRenderer'
import ExerciseRenderer from '@/components/grammar/ExerciseRenderer'

type Attempt = { id: string; exercise_set_id: string; score: number | null; correct_answers: number; total_questions: number; created_at: string }
type HistorySummary = { count: number; best: Attempt | null; delta: number | null; recent: Attempt[]; trend: Attempt[] }
const emptyHistory: HistorySummary = { count: 0, best: null, delta: null, recent: [], trend: [] }
function PerformanceHistory({stats, language, chapterId, setId}: {stats: HistorySummary; language: keyof LocalizedText; chapterId: string; setId: string}) {
  const [older, setOlder] = useState<Attempt[]>([])
  const [loadingMore, setLoadingMore] = useState(false)
  const [historyError, setHistoryError] = useState('')
  const [exhausted, setExhausted] = useState(false)
  const rows = [...stats.recent, ...older]
  const best = stats.best?.score ?? null
  const delta = stats.delta
  const moreLabels = {fr:['Afficher plus','Chargement…','Impossible de charger les anciennes tentatives.'],de:['Mehr anzeigen','Wird geladen…','Ältere Versuche konnten nicht geladen werden.'],ar:['عرض المزيد','جارٍ التحميل…','تعذر تحميل المحاولات السابقة.'],en:['Show more','Loading…','Could not load older attempts.']}[language]
  async function loadMore() {
    if (loadingMore || exhausted || !rows.length) return
    setLoadingMore(true)
    setHistoryError('')
    try {
      const {data} = await supabase.auth.getSession()
      const token = data.session?.access_token
      if (!token) throw new Error('Session')
      const query = new URLSearchParams({chapterId, historySetId:setId, historyBefore:rows[rows.length-1].id})
      const response = await fetch(`/api/grammar/content?${query}`, {headers:{Authorization:`Bearer ${token}`},cache:'no-store'})
      const result = await response.json()
      if (!response.ok || !Array.isArray(result.attempts)) throw new Error('History')
      const page = result.attempts as Attempt[]
      setOlder(previous => [...previous, ...page.filter(a => !stats.recent.some(r=>r.id===a.id) && !previous.some(r=>r.id===a.id))])
      if (page.length < 20) setExhausted(true)
    } catch { setHistoryError(moreLabels[2]) }
    finally { setLoadingMore(false) }
  }
  const t = {fr:['Ma performance','Meilleur résultat','Tentatives','Progression','Évolution des résultats','Historique des tentatives','Aucune tentative','Übung réussie','Tentative'],de:['Meine Leistung','Bestes Ergebnis','Versuche','Fortschritt','Ergebnisverlauf','Versuchsverlauf','Keine Versuche','Übung bestanden','Versuch'],ar:['أدائي','أفضل نتيجة','المحاولات','التقدم','تطور النتائج','سجل المحاولات','لا توجد محاولات','تمرين ناجح','محاولة'],en:['My performance','Best result','Attempts','Progress','Score trend','Attempt history','No attempts','Exercise mastered','Attempt']}[language]
  const trend = stats.trend
  const points = trend.map((a,i)=>`${10+i*220/Math.max(1,trend.length-1)},${90-Number(a.score)*0.8}`).join(' ')
  return <aside className="grammar-history-sidebar performance-panel">
    <div className="performance-hero"><span>{t[0]}</span><small>{t[1]}</small><div><strong>{best ?? '—'}</strong> / 100</div><div className="performance-track"><i style={{width:`${best ?? 0}%`}}/></div>{best===100 && <small>✓ {t[7]}</small>}</div>
    <div className="performance-stats"><div><small>{t[2]}</small><strong>{stats.count}</strong></div><div><small>{t[3]}</small><strong>{delta===null?'—':`${delta>0?'+':''}${Number(delta.toFixed(2))}`}</strong></div></div>
    {trend.length>1 && <div className="performance-trend"><h3>{t[4]}</h3><svg viewBox="0 0 240 100" role="img" aria-label={t[4]}><path d="M10 10H230 M10 50H230 M10 90H230" stroke="#e7e1d5" fill="none" strokeDasharray="4 4"/><polyline points={points} fill="none" stroke="#a18450" strokeWidth="2.5" strokeLinejoin="round"/>{trend.map((a,i)=><circle key={a.id} cx={10+i*220/Math.max(1,trend.length-1)} cy={90-Number(a.score)*0.8} r="3" fill="#a18450"/>)}</svg></div>}
    <h3>{t[5]}</h3><div className="performance-rows">{rows.length===0?<p className="record-empty">{t[6]}</p>:rows.map((a,i)=><div className="performance-row" key={a.id}><div><b>{t[8]} {stats.count-i}</b><time dateTime={a.created_at}>{new Date(a.created_at).toLocaleString(language,{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</time></div><strong className={Number(a.score)===100?'perfect':''}>{a.score ?? '—'}<small>/100</small></strong></div>)}</div>
    {!exhausted && rows.length < stats.count && <button type="button" className="premium-button" style={{marginTop:12,width:'100%'}} disabled={loadingMore} onClick={()=>void loadMore()}>{loadingMore ? moreLabels[1] : moreLabels[0]}</button>}
    {historyError && <p role="alert" className="submission-error">{historyError}</p>}
  </aside>
}
export default function ChapitreGrammairePage() {
  const { language, isRTL } = useLanguage()
  const params = useParams()
  const id = Array.isArray(params.numero) ? params.numero[0] : params.numero
  const backHref = `/espace-etudiant/apprentissage/grammaire${id ? `#${encodeURIComponent(id)}` : ''}`
  const [payload, setPayload] = useState<{chapter:ChapterDefinition; history:Record<string,HistorySummary>; mandatory:{id:string;total:number}[]; unlocked:boolean; lockedSets:{id:string;title:LocalizedText;category:string}[]} | null>(null)
  const [tab, setTab] = useState('lesson')
  const [exerciseIndex, setExerciseIndex] = useState(0)
  const [error, setError] = useState('')
  const refresh = useCallback(async () => {
    setError('')
    try {
      const {data} = await supabase.auth.getSession()
      const token = data.session?.access_token
      if (!token) throw new Error('Connexion requise.')
      const response = await fetch(`/api/grammar/content?chapterId=${encodeURIComponent(id || '')}`, {headers:{Authorization:`Bearer ${token}`},cache:'no-store'})
      const result = await response.json()
      if (!response.ok) throw new Error(result.error)
      setPayload(result)
    } catch(e) { setPayload(null); setError(e instanceof Error ? e.message : 'Erreur de chargement.') }
  }, [id])
  useEffect(() => { setTab('lesson'); setExerciseIndex(0); setPayload(null); void refresh() }, [refresh])

  if ((!payload || payload.chapter.id !== id) && !error) return <DeutschErfolgLoader kind="chapter" />
  if (!payload || payload.chapter.id !== id) return <main className="p-8"><p>{error || 'Chargement…'}</p><Link href={backHref} scroll={false}>Retour</Link>{error && <button onClick={()=>void refresh()}>Réessayer</button>}</main>
  const {chapter,history,mandatory,unlocked,lockedSets} = payload
  const best = (id: string) => history[id]?.best ?? undefined
  const total = mandatory.reduce((n,s)=>n+s.total,0)
  const correct = mandatory.reduce((n,s)=>n+(best(s.id)?.correct_answers || 0),0)
  const availableSets = chapter.exerciseSets.filter(s => s.category === tab)
  const restrictedSets = lockedSets.filter(s => s.category === tab)
  const entries = [...availableSets.map(s => ({id:s.id, exercise:s, locked:false as const})), ...restrictedSets.map(s => ({id:s.id, title:s.title, locked:true as const}))]
  const index = Math.min(exerciseIndex, Math.max(0, entries.length - 1))
  const active = entries[index]
  const labels = ({fr:{prev:'Précédent',next:'Suivant',empty:'Aucune Übung disponible'},de:{prev:'Zurück',next:'Weiter',empty:'Keine Übungen verfügbar'},ar:{prev:'السابق',next:'التالي',empty:'لا توجد تمارين'},en:{prev:'Previous',next:'Next',empty:'No exercises available'}})[language]
  return <main className="premium-page min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}><div className="grammar-page-shell mx-auto px-4 py-8">
    <Link className="premium-back" href={backHref} scroll={false}>← Retour aux chapitres</Link>
    <header className="chapter-header my-8"><span className="studio-brand">DEUTSCH · ERFOLG / GRAMMATIK</span><span className="studio-chapter-number" aria-hidden="true">{String(chapter.number).padStart(2,'0')}.</span><span className="level-label">KAPITEL {String(chapter.number).padStart(2,'0')} · {chapter.level}</span><h1 className="chapter-title" lang="de" dir="ltr">{chapter.title.de}</h1><p className="chapter-description">{chapter.subtitle[language]}</p></header>
    <section className="chapter-progress studio-progress-summary">
      {(() => {
        const t = {fr:['Note globale','Übungen réussies','Meilleur score','Voir détails','Note pondérée par le nombre de questions corrigées.','Bonnes réponses','Aucune tentative','Meistertraining uniquement'],de:['Gesamtnote','Gemeisterte Übungen','Bestes Ergebnis','Details anzeigen','Nach Anzahl der bewerteten Fragen gewichtet.','Richtige Antworten','Keine Versuche','Nur Meistertraining'],ar:['النتيجة الإجمالية','التمارين المتقنة','أفضل نتيجة','عرض التفاصيل','النتيجة موزونة حسب عدد الأسئلة المصححة.','الإجابات الصحيحة','لا توجد محاولات','التدريب الأساسي فقط'],en:['Overall score','Mastered exercises','Best score','View details','Weighted by the number of graded questions.','Correct answers','No attempts','Meistertraining only']}[language]
        const ranked = mandatory.map(m=>({ ...m, attempt:best(m.id), title:chapter.exerciseSets.find(s=>s.id===m.id)?.title[language] ?? lockedSets.find(s=>s.id===m.id)?.title[language] ?? m.id }))
        const top = ranked.filter(m=>m.attempt).sort((a,b)=>Number(b.attempt?.score)-Number(a.attempt?.score))[0]
        return <>
          <details className="studio-summary-item"><summary><small>{t[0]}</small><strong>{total ? Math.round(correct/total*100) : 0} / 100</strong><span>{t[3]} <b>⌄</b></span></summary><div className="studio-summary-detail"><p>{t[4]}</p><p>{t[5]} : {correct} / {total}</p></div></details>
          <details className="studio-summary-item"><summary><small>{t[1]}</small><strong>{ranked.filter(m=>Number(m.attempt?.score)>=80).length} / {mandatory.length}</strong><span>{t[3]} <b>⌄</b></span></summary><div className="studio-summary-detail">{ranked.map(m=><div className="studio-summary-row" key={m.id}><span>{m.title}</span><b>{m.attempt?.score ?? '—'} / 100</b></div>)}</div></details>
          <details className="studio-summary-item"><summary><small>{t[2]}</small><strong>{top?.attempt?.score ?? '—'} / 100</strong><span>{t[3]} <b>⌄</b></span></summary><div className="studio-summary-detail"><p>{t[7]}</p>{top?.attempt ? <><p>{top.title}</p><p>{t[5]} : {top.attempt.correct_answers} / {top.attempt.total_questions}</p><time>{new Date(top.attempt.created_at).toLocaleString(language)}</time></> : <p>{t[6]}</p>}</div></details>
        </>
      })()}
    </section>
    {error && <p role="alert">{error} <button onClick={() => void refresh()}>Réessayer</button></p>}
    <nav className="chapter-tabs">{[['lesson','Lektion'],['meistertraining','Meistertraining'],['extra_kick',unlocked ? 'Extra-Kick' : '🔒 Extra-Kick']].map(([key,label]) => <button key={key} className={`chapter-tab ${tab === key ? 'chapter-tab-active' : ''}`} onClick={() => { if (tab !== key) { setTab(key); setExerciseIndex(0) } }}>{label}</button>)}</nav>
    {tab === 'lesson' ? <LessonRenderer lesson={chapter.lesson} onStart={() => { setTab('meistertraining'); setExerciseIndex(0); window.scrollTo({top:0,behavior:'smooth'}) }}/> : tab === 'extra_kick' && !unlocked ? <p className="locked-panel">Obtenez 80/100 dans chaque Übung Meistertraining.</p> : entries.length === 0 ? <p className="empty-state">{labels.empty}</p> : <div className="grammar-pager">
      <div className="grammar-pager-heading"><strong>Übung {index + 1} / {entries.length}</strong><div className="grammar-step-list">{entries.map((entry,i)=><button type="button" key={entry.id} aria-current={i===index ? "step" : undefined} className={i===index ? "current" : ""} onClick={()=>setExerciseIndex(i)}>{i+1}{entry.locked ? " 🔒" : Number(best(entry.id)?.score)>=80 ? " ✓" : ""}</button>)}</div><div className="progress-track"><div className="progress-fill" style={{width: `${(index+1)/entries.length*100}%`}}/></div></div>
      {availableSets.map(s => <section key={s.id} className="exercise-card grammar-paged-card" hidden={active?.id !== s.id}><div className="grammar-exercise-layout"><div className="grammar-exercise-main"><ExerciseRenderer chapterId={chapter.id} exerciseSet={s} onAttempt={() => void refresh()}/></div><PerformanceHistory key={`${chapter.id}:${s.id}:${history[s.id]?.count ?? 0}:${history[s.id]?.recent[0]?.id ?? ""}`} stats={history[s.id] ?? emptyHistory} chapterId={chapter.id} setId={s.id} language={language}/></div></section>)}
      {active?.locked && <section className="locked-panel">🔒 {active.title[language]} — <Link href="/espace-etudiant/pro">PRO</Link></section>}
      <nav className="grammar-pager-nav" aria-label="Übungen">
        <button type="button" className="premium-button" disabled={index === 0} onClick={()=>setExerciseIndex(index-1)}>{isRTL ? '→' : '←'} {labels.prev}</button>
        <span>{index+1} / {entries.length}</span>
        <button type="button" className="premium-button" disabled={index >= entries.length-1} onClick={()=>setExerciseIndex(index+1)}>{labels.next} {isRTL ? '←' : '→'}</button>
      </nav>
    </div>}
    </div>
      <style jsx global>{`
        .grammar-pager { max-width: 1100px; margin: 0 auto; }
        .grammar-pager-heading { display: flex; flex-direction: column; gap: 10px; margin: 0 auto 18px; text-align: center; color: #9b8050; }
        .grammar-paged-card { padding: 20px !important; }
        .grammar-paged-card[hidden] { display: none !important; }
        .grammar-pager-nav { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin: 20px 0; }
        .grammar-pager-nav span { color: #9b8050; font-size: 13px; }
        .grammar-exercise-layout { display: grid; grid-template-columns: minmax(0, 1fr) minmax(220px, 280px); gap: 20px; align-items: start; }
        .grammar-exercise-main { min-width: 0; }
        .grammar-history-sidebar { position: sticky; top: 24px; max-height: calc(100vh - 48px); overflow-y: auto; min-width: 0; padding: 14px; background: #fff; border: 1px solid #eeeae1; border-radius: 8px; }
        .grammar-history-sidebar .history-row { display: flex; flex-wrap: wrap; align-items: center; gap: 6px; padding: 10px 0; border-bottom: 1px solid #eeeae1; }
        .grammar-history-sidebar .history-date { flex: 1 1 90px; min-width: 0; overflow-wrap: anywhere; font-size: 11px; }
        .grammar-history-sidebar .history-row strong { white-space: nowrap; font-size: 12px; }
        @media (max-width: 900px) { .grammar-exercise-layout { grid-template-columns: minmax(0, 1fr); } .grammar-history-sidebar { position: static; max-height: 360px; } }

        .premium-page {
          min-height: 100vh;
          background: #f7f6f2;
          color: #263348;
        }

        .error-card {
          border: 1px solid #e8e4dc;
          border-radius: 12px;
          background: white;
        }

        .premium-back {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #77766f;
          font-size: 13px;
          transition: color .2s;
        }

        .premium-back:hover { color: #a18450; }

        .muted-text {
          color: #85847e;
          font-size: 13px;
          line-height: 1.7;
        }

        .eyebrow {
          color: #a18450;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .14em;
        }

        /* HEADER */

        .chapter-header {
          position: relative;
          overflow: hidden;
          padding: 35px 38px;
          border-radius: 13px;
          background: #263348;
          color: white;
        }

        .header-brand {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #d4c29f;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .header-separator { color: #758092; }

        .level-label {
          display: inline-block;
          margin-top: 25px;
          color: #d4c29f;
          font-size: 10px;
          letter-spacing: .12em;
        }

        .chapter-title {
          margin-top: 10px;
          color: white;
          font-size: clamp(27px, 4vw, 42px);
          font-weight: 650;
          letter-spacing: -.035em;
          line-height: 1.2;
        }

        .chapter-description {
          max-width: 650px;
          margin-top: 12px;
          color: #c5cad2;
          font-size: 14px;
          line-height: 1.8;
        }

        .header-stats {
          display: flex;
          flex-wrap: wrap;
          gap: 22px;
          margin-top: 25px;
        }

        .header-stats span {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e1e3e7;
          font-size: 12px;
        }

        .header-stats svg { color: #d4c29f; }

        .header-monogram {
          position: absolute;
          top: 50%;
          right: 8%;
          transform: translateY(-50%);
          color: rgba(212,194,159,.09);
          font-family: Georgia, serif;
          font-size: 125px;
          font-weight: 600;
          pointer-events: none;
        }

        /* PROGRESSION */

        .chapter-progress {
          margin-bottom: 25px;
          padding: 21px 23px;
          border: 1px solid #e4dfd4;
          border-radius: 11px;
          background: white;
        }

        .progress-topline {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 15px;
        }

        .progress-topline h2 {
          margin-top: 5px;
          color: #263348;
          font-size: 16px;
          font-weight: 650;
        }

        .progress-topline > strong {
          color: #9b8050;
          font-size: 23px;
        }

        .progress-track {
          height: 7px;
          overflow: hidden;
          border-radius: 20px;
          background: #e7e4dc;
        }

        .progress-fill {
          height: 100%;
          border-radius: 20px;
          background: #a88b58;
          transition: width .3s;
        }

        .progress-details {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 11px;
          color: #85847e;
          font-size: 11px;
        }

        .progress-details span:first-child {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .progress-details svg { color: #719578; }

        .mastery-line {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-top: 14px;
          padding-top: 13px;
          border-top: 1px solid #efede7;
          color: #8e7549;
          font-size: 12px;
          font-weight: 650;
        }

        /* TABS */

        .chapter-tabs {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 6px;
          padding: 5px;
          margin-bottom: 35px;
          border: 1px solid #e8e4dc;
          border-radius: 11px;
          background: #efeee9;
        }

        .chapter-tab {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 51px;
          padding: 10px;
          border-radius: 7px;
          color: #77766f;
          font-size: 13px;
          transition: all .2s;
        }

        .chapter-tab:hover {
          background: rgba(255,255,255,.65);
          color: #263348;
        }

        .chapter-tab-active {
          background: #fff;
          color: #263348;
          font-weight: 650;
          box-shadow: 0 1px 4px rgba(30,40,55,.07);
        }

        .chapter-tab-active svg { color: #a18450; }

        .chapter-tab small {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 21px;
          height: 21px;
          padding: 0 5px;
          border-radius: 20px;
          background: #efede7;
          color: #77766f;
          font-size: 10px;
        }

        .chapter-tab-active small {
          background: #f1ecdf;
          color: #8e7549;
        }

        /* SECTIONS */

        .tab-content {
          min-height: 260px;
          animation: appear .22s ease-out;
        }

        @keyframes appear {
          from { opacity: 0; transform: translateY(5px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .content-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 25px;
        }

        .section-title {
          margin-top: 6px;
          color: #263348;
          font-size: 27px;
          font-weight: 650;
          letter-spacing: -.03em;
        }

        .heading-icon { color: #b49b70; }

        /* LESSONS */

        .lesson-card {
          overflow: hidden;
          border: 1px solid #e8e4dc;
          border-radius: 11px;
          background: white;
          transition: border-color .2s;
        }

        .lesson-card-open { border-color: #c9b994; }

        .lesson-toggle {
          display: flex;
          align-items: center;
          width: 100%;
          gap: 16px;
          padding: 19px;
          text-align: left;
        }

        .lesson-number {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background: #f3f0e9;
          color: #9b8050;
          font-family: Georgia, serif;
          font-size: 16px;
        }

        .lesson-heading {
          display: flex;
          flex: 1;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }

        .lesson-heading strong {
          color: #263348;
          font-size: 15px;
          font-weight: 600;
        }

        .lesson-heading small {
          color: #88847b;
          font-size: 12px;
          line-height: 1.5;
        }

        .lesson-chevron {
          display: flex;
          color: #9b8050;
        }

        .lesson-content {
          padding: 25px;
          border-top: 1px solid #eeece6;
          background: #fff;
        }
.lesson-image {
  display: block;
  width: auto;
  max-width: 100%;
  max-height: 600px;
  height: auto;
  margin: 24px auto;
  border: 1px solid #e8e4dc;
  border-radius: 12px;
  object-fit: contain;
  background: #fff;
}

.lesson-content figure img {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: 0 auto;
  border-radius: 10px;
  object-fit: contain;
}

.lesson-content figure {
  text-align: center;
}
        .premium-prose {
          color: #505967;
          font-size: 14px;
          line-height: 1.9;
        }

        .premium-prose :global(h1),
        .premium-prose :global(h2),
        .premium-prose :global(h3),
        .premium-prose :global(h4) {
          margin-top: 1.5em;
          margin-bottom: .65em;
          color: #263348;
          font-weight: 650;
        }

        .premium-prose :global(h2) { font-size: 1.4rem; }
        .premium-prose :global(h3) { font-size: 1.15rem; }
        .premium-prose :global(p) { margin: 12px 0; }

        .premium-prose :global(strong) {
          color: #263348;
          font-weight: 700;
        }

        .premium-prose :global(a) {
          color: #9b8050;
          text-decoration: underline;
        }

        .premium-prose :global(blockquote) {
          margin: 18px 0;
          padding: 12px 17px;
          border-left: 3px solid #b49b70;
          background: #f7f5ef;
        }

        .premium-prose :global(table) {
          display: block;
          width: 100%;
          overflow-x: auto;
          margin: 20px 0;
          border-collapse: collapse;
        }

        .premium-prose :global(th) {
          padding: 11px;
          background: #263348;
          color: white;
          text-align: left;
        }

        .premium-prose :global(td) {
          padding: 10px 11px;
          border: 1px solid #e9e6df;
        }

        .premium-prose :global(tr:nth-child(even)) {
          background: #f8f7f3;
        }

        .lesson-extra {
          padding: 17px;
          border: 1px solid #e9e6df;
          border-radius: 8px;
          background: #f8f7f3;
        }

        .lesson-extra h4 {
          margin-bottom: 10px;
          color: #263348;
          font-size: 15px;
          font-weight: 600;
        }

        .lesson-extra pre {
          overflow-x: auto;
          color: #62615d;
          font-family: inherit;
          font-size: 12px;
          white-space: pre-wrap;
        }

        .next-section {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-top: 27px;
          padding: 20px;
          border: 1px solid #e8e4dc;
          border-radius: 10px;
          background: white;
        }

        .next-section p {
          margin-top: 5px;
          color: #263348;
          font-size: 13px;
          font-weight: 500;
        }

        .next-button,
        .premium-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          min-height: 44px;
          padding: 11px 18px;
          border-radius: 7px;
          background: #263348;
          color: white;
          font-size: 12px;
          font-weight: 600;
          transition: background .2s;
        }

        .next-button:hover,
        .premium-button:hover:not(:disabled) {
          background: #3b4b63;
        }

        /* EXERCISES */

        .exercise-card {
          overflow: hidden;
          padding: 0;
          border: 1px solid #ded8ca;
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 4px 14px rgba(35,45,60,.045);
        }

        .exercise-card-open {
          border-color: #b9a47b;
          box-shadow: 0 5px 18px rgba(35,45,60,.07);
        }

        .exercise-toggle {
          display: flex;
          align-items: center;
          gap: 17px;
          width: 100%;
          padding: 22px;
          background: #fff;
          text-align: left;
          transition: background .2s;
        }

        .exercise-toggle:hover { background: #faf8f2; }

        .exercise-toggle-number {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border: 1px solid #e6ddc9;
          border-radius: 11px;
          background: #f5f1e8;
          color: #9b8050;
        }

        .exercise-toggle-content {
          flex: 1;
          min-width: 0;
        }

        .exercise-title {
          margin-top: 5px;
          color: #263348;
          font-size: 19px;
          font-weight: 700;
        }

        .exercise-instruction {
          margin-top: 7px;
          color: #73777f;
          font-size: 13px;
          line-height: 1.65;
        }

        .exercise-question-count {
          display: inline-block;
          margin-top: 9px;
          padding: 4px 9px;
          border: 1px solid #e8e1d3;
          border-radius: 20px;
          background: #f7f5ef;
          color: #8e7549;
          font-size: 10px;
          font-weight: 600;
        }

        .exercise-toggle-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 36px;
          height: 36px;
          border: 1px solid #e8e1d3;
          border-radius: 50%;
          background: #f8f6f0;
          color: #9b8050;
        }

        .exercise-body {
          padding: 22px;
          border-top: 1px solid #e9e4d9;
          background: #f7f6f2;
        }

        /* RECORDS */

        .record-panel {
          margin-bottom: 20px;
          padding: 17px;
          border: 1px solid #e1dacb;
          border-radius: 11px;
          background: #fff;
        }

        .record-heading {
          display: flex;
          align-items: center;
          gap: 11px;
          margin-bottom: 15px;
        }

        .record-heading-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 37px;
          height: 37px;
          border-radius: 9px;
          background: #f3efe5;
          color: #9b8050;
        }

        .record-heading strong {
          color: #263348;
          font-size: 13px;
        }

        .record-heading p {
          margin-top: 3px;
          color: #929087;
          font-size: 11px;
        }

        .record-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }

        .record-stat {
          padding: 12px;
          border: 1px solid #eeeae1;
          border-radius: 8px;
          background: #faf9f6;
        }

        .record-stat span {
          display: block;
          color: #99958c;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: .08em;
        }

        .record-stat strong {
          display: block;
          margin-top: 6px;
          color: #263348;
          font-size: 18px;
          font-weight: 700;
        }

        .record-perfect { color: #43805a !important; }

        .record-empty,
        .record-loading {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px;
          border-radius: 7px;
          background: #f8f7f3;
          color: #85847e;
          font-size: 12px;
        }

        .history-toggle {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 13px;
          color: #8e7549;
          font-size: 11px;
          font-weight: 650;
        }

        .history-list {
          margin-top: 12px;
          border-top: 1px solid #eeeae1;
        }

        .history-row {
          display: grid;
          grid-template-columns: 35px 1fr auto;
          align-items: center;
          gap: 10px;
          padding: 10px 3px;
          border-bottom: 1px solid #f0eee8;
          font-size: 11px;
        }

        .history-index { color: #a18450; font-weight: 700; }
        .history-date { color: #85847e; }
        .history-row strong { color: #263348; }

        /* QUESTIONS */

        .questions-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          align-items: stretch;
        }

        .question-card {
          min-width: 0;
          padding: 17px;
          border: 1px solid #dcdfe4;
          border-radius: 12px;
          background: #fff;
          box-shadow: 0 2px 7px rgba(35,45,60,.035);
        }

        .question-meta {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 7px;
          margin-bottom: 13px;
        }

        .question-number {
          color: #9b8050;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .12em;
        }

        .type-pill {
          padding: 5px 9px;
          border-radius: 5px;
          background: #eeeae1;
          color: #80683f;
          font-size: 10px;
          font-weight: 600;
        }

        .question-label {
          margin-bottom: 7px;
          color: #9b8050;
          font-size: 12px;
          font-weight: 600;
        }

        .question-title {
          margin-bottom: 16px;
          color: #263348;
          font-size: 14px;
          font-weight: 600;
          line-height: 1.65;
        }

        /* ANSWERS */

        .answer-option {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          width: 100%;
          min-height: 43px;
          padding: 10px 11px;
          border: 1px solid #d9dee7;
          border-radius: 8px;
          background: #f6f8fb;
          color: #39465a;
          font-size: 12px;
          text-align: left;
          transition: all .18s ease;
        }

        .answer-option:hover:not(:disabled) {
          border-color: #b49b70;
          background: #fbf9f4;
          box-shadow: 0 2px 7px rgba(35,45,60,.04);
        }

        .answer-option:disabled { cursor: default; }

        .answer-selected {
          border-color: #b49b70;
          background: #f5f0e5;
          color: #80683f;
          box-shadow: 0 0 0 2px rgba(180,155,112,.09);
        }

        .answer-correct {
          border-color: #a4c5a9;
          background: #eff6ef;
          color: #36734b;
        }

        .answer-wrong {
          border-color: #d8aaa4;
          background: #fbf0ee;
          color: #a34840;
        }

        /* INPUTS */

        .premium-input {
          width: 100%;
          min-width: 0;
          min-height: 45px;
          padding: 10px 13px;
          border: 1px solid #e2ded5;
          border-radius: 8px;
          outline: none;
          background: white;
          color: #263348;
          font-size: 13px;
          transition: border-color .2s, box-shadow .2s;
        }

        .premium-input:focus {
          border-color: #b49b70;
          box-shadow: 0 0 0 3px rgba(180,155,112,.11);
        }

        .premium-input:disabled { background: #f1f0ec; }

        .match-item {
          padding: 12px 14px;
          border: 1px solid #e7e3da;
          border-radius: 8px;
          background: white;
          color: #34415a;
          font-size: 13px;
        }

        .number-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          width: 31px;
          height: 31px;
          border-radius: 7px;
          background: #f1eee7;
          color: #9b8050;
          font-size: 11px;
          font-weight: 700;
        }

        /* FEEDBACK */

        .feedback-box {
          margin-top: 18px;
          padding: 16px;
          border: 1px solid #dfe3e7;
          border-radius: 9px;
          background: #f5f6f7;
        }

        .feedback-neutral {
          border-color: #d9dfe8;
          background: #f1f3f6;
        }

        .feedback-success {
          border-color: #c9dfcf;
          background: #f0f6f0;
        }

        .feedback-error {
          border-color: #e8ceca;
          background: #fbf1ef;
        }

        .feedback-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 10px;
          color: #344761;
          font-size: 13px;
          font-weight: 650;
        }

        .feedback-success .feedback-heading { color: #36734b; }
        .feedback-error .feedback-heading { color: #a34840; }

        /* RESULTATS */

        .result-panel {
          margin-top: 22px;
          padding: 20px;
          border: 1px solid #ded8ca;
          border-radius: 10px;
          background: #fff;
        }

        .premium-button:disabled {
          opacity: .4;
          cursor: not-allowed;
        }

        .result-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 50%;
          background: #f0eadc;
          color: #9b8050;
        }

        .best-score-note {
          margin-top: 13px;
          color: #85847e;
          font-size: 12px;
        }

        .best-score-note strong { color: #43805a; }

        .submission-error {
          margin-bottom: 13px;
          padding: 11px 13px;
          border: 1px solid #e8ceca;
          border-radius: 7px;
          background: #fbf1ef;
          color: #a34840;
          font-size: 12px;
          line-height: 1.6;
        }

        /* EXTRA KICK VERROUILLÉ */

        .locked-panel {
          padding: 35px 25px;
          border: 1px solid #e3ddcf;
          border-radius: 13px;
          background: white;
          text-align: center;
        }

        .locked-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 65px;
          height: 65px;
          margin: 0 auto 18px;
          border-radius: 50%;
          background: #f3efe5;
          color: #a18450;
        }

        .locked-panel h3 {
          margin-top: 9px;
          color: #263348;
          font-size: 22px;
          font-weight: 700;
        }

        .locked-panel > p {
          max-width: 550px;
          margin: 10px auto 22px;
          color: #85847e;
          font-size: 13px;
          line-height: 1.8;
        }

        .unlock-progress {
          max-width: 520px;
          margin: 0 auto;
          padding: 16px;
          border: 1px solid #eeeae1;
          border-radius: 9px;
          background: #faf9f6;
          text-align: left;
        }

        .unlock-progress-label {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #77766f;
          font-size: 12px;
        }

        .unlock-progress-label strong { color: #8e7549; }

        .locked-list {
          max-width: 520px;
          margin: 15px auto 0;
          text-align: left;
        }

        .locked-item {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 11px 4px;
          border-bottom: 1px solid #efede7;
          color: #4e596a;
          font-size: 12px;
        }

        .locked-item span:last-child {
          color: #a18450;
          text-align: right;
        }

        .unlocked-message {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 18px;
          padding: 15px 17px;
          border: 1px solid #c9dfcf;
          border-radius: 9px;
          background: #f0f6f0;
          color: #36734b;
          font-size: 13px;
          font-weight: 600;
        }

        .empty-state,
        .empty-message {
          padding: 22px;
          border: 1px solid #e8e4dc;
          border-radius: 9px;
          background: white;
          color: #85847e;
          font-size: 13px;
        }

        /* FOOTER */

        .premium-footer {
          margin-top: 55px;
          padding-top: 23px;
          border-top: 1px solid #e7e4dc;
          text-align: center;
          color: #9b8050;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: .15em;
        }

        .premium-footer p {
          margin-top: 7px;
          color: #99958c;
          font-size: 11px;
          font-weight: 400;
          letter-spacing: .03em;
        }

        @media (max-width: 1050px) {
          .questions-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .chapter-header { padding: 25px 20px; }

          .header-monogram {
            right: -15px;
            font-size: 90px;
          }

          .chapter-tabs {
            gap: 3px;
            padding: 4px;
          }

          .chapter-tab {
            flex-direction: column;
            gap: 5px;
            min-height: 66px;
            padding: 8px 3px;
            font-size: 10px;
            text-align: center;
          }

          .chapter-tab svg {
            width: 17px;
            height: 17px;
          }

          .chapter-tab small {
            min-width: 17px;
            height: 17px;
            font-size: 9px;
          }

          .section-title { font-size: 23px; }

          .lesson-toggle {
            gap: 11px;
            padding: 16px 13px;
          }

          .lesson-number {
            width: 36px;
            height: 36px;
            font-size: 15px;
          }

          .lesson-heading strong { font-size: 13px; }
          .lesson-content { padding: 17px; }

          .questions-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .exercise-toggle {
            gap: 11px;
            padding: 16px 13px;
          }

          .exercise-toggle-number {
            width: 39px;
            height: 39px;
          }

          .exercise-title { font-size: 16px; }
          .exercise-instruction { font-size: 12px; }

          .exercise-toggle-icon {
            width: 31px;
            height: 31px;
          }

          .exercise-body { padding: 13px; }
          .question-card { padding: 14px; }

          .answer-option {
            min-height: 47px;
            padding: 11px;
          }

          .next-section {
            align-items: flex-start;
            flex-direction: column;
          }

          .next-button { width: 100%; }

          .record-stats { gap: 6px; }

          .record-stat { padding: 9px 7px; }

          .record-stat span { font-size: 8px; }
          .record-stat strong { font-size: 15px; }

          .progress-details {
            flex-direction: column;
          }

          .locked-panel { padding: 27px 15px; }

          .locked-item {
            flex-direction: column;
            gap: 4px;
          }

          .locked-item span:last-child { text-align: left; }
        }

/* =========================================
   LESSON CONTENT — PREMIUM DESIGN
========================================= */

.lesson-content {
  padding: 30px;
  border-top: 1px solid #eeece6;
  background: #fff;
}

.lesson-blocks,
.lesson-legacy-content {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.lesson-block {
  min-width: 0;
  padding: 25px;
  border: 1px solid #eeece6;
  border-radius: 15px;
  background: #fff;
  box-shadow: 0 3px 12px rgba(38, 51, 72, 0.025);
}

.lesson-block-title {
  display: flex;
  align-items: center;
  gap: 13px;
  margin: 0 0 20px;
  color: #263348;
  font-size: 19px;
  font-weight: 700;
  line-height: 1.5;
}

.lesson-block-index {
  display: inline-flex;
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: #f5f1e8;
  color: #a18450;
  font-size: 11px;
  font-weight: 800;
}

.lesson-objective {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 28px;
  padding: 20px 22px;
  border: 1px solid #e9e2d3;
  border-radius: 14px;
  background: #faf8f3;
}

.lesson-objective-icon {
  display: flex;
  flex: 0 0 38px;
  width: 38px;
  height: 38px;
  align-items: center;
  justify-content: center;
  border-radius: 11px;
  background: #eee6d6;
  color: #967744;
}

.lesson-objective span {
  display: block;
  margin-bottom: 5px;
  color: #a18450;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: .12em;
}

.lesson-objective p {
  margin: 0;
  color: #465064;
  font-size: 14px;
  line-height: 1.75;
}

/* CALLOUTS */

.lesson-callout {
  padding: 23px 25px;
  border: 1px solid;
  border-radius: 14px;
}

.lesson-callout-heading {
  display: flex;
  align-items: center;
  gap: 13px;
  margin-bottom: 14px;
}

.lesson-callout-symbol {
  display: flex;
  flex: 0 0 34px;
  width: 34px;
  height: 34px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 17px;
  font-weight: 800;
}

.lesson-callout-heading span:not(.lesson-callout-symbol) {
  display: block;
  margin-bottom: 3px;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: .13em;
  opacity: .75;
}

.lesson-callout-heading h3 {
  margin: 0;
  font-size: 17px;
  font-weight: 750;
}

.lesson-callout-info {
  border-color: #dce5ee;
  background: #f5f8fb;
  color: #344c68;
}

.lesson-callout-info .lesson-callout-symbol {
  background: #e2ebf4;
  color: #476783;
}

.lesson-callout-warning {
  border-color: #eadfc8;
  background: #fbf8f0;
  color: #735c32;
}

.lesson-callout-warning .lesson-callout-symbol {
  background: #f1e5ca;
  color: #98733b;
}

.lesson-callout-success {
  border-color: #dce8df;
  background: #f4f8f4;
  color: #41644c;
}

.lesson-callout-success .lesson-callout-symbol {
  background: #e1eee3;
  color: #4e795a;
}

/* TABLEAUX */

.lesson-table-wrapper {
  width: 100%;
  overflow-x: auto;
  border: 1px solid #e9e7e1;
  border-radius: 12px;
}

.lesson-table {
  width: 100%;
  min-width: 440px;
  border-collapse: collapse;
  text-align: left;
}

.lesson-table thead {
  background: #f5f2eb;
}

.lesson-table th {
  padding: 15px 18px;
  color: #514b40;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: .025em;
}

.lesson-table td {
  padding: 14px 18px;
  border-top: 1px solid #eeece6;
  color: #4d5665;
  font-size: 14px;
  line-height: 1.6;
}

.lesson-table tbody tr:nth-child(even) {
  background: #fbfaf8;
}

.lesson-table tbody tr:hover {
  background: #f7f5ef;
}

/* EXEMPLES */

.lesson-examples-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 13px;
}

.lesson-example-card {
  display: flex;
  align-items: flex-start;
  gap: 13px;
  min-width: 0;
  padding: 17px 18px;
  border: 1px solid #eeece6;
  border-radius: 12px;
  background: #fcfbf9;
  color: #465064;
  font-size: 14px;
  line-height: 1.75;
  transition: border-color .2s, transform .2s;
}

.lesson-example-card:hover {
  border-color: #d8c8a9;
  transform: translateY(-2px);
}

.lesson-example-number {
  display: flex;
  flex: 0 0 27px;
  width: 27px;
  height: 27px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: #f0eadf;
  color: #987b4a;
  font-size: 10px;
  font-weight: 800;
}

.lesson-example-card .prose {
  min-width: 0;
}

.lesson-example-card .prose p:first-child {
  margin-top: 0;
}

.lesson-example-card .prose p:last-child {
  margin-bottom: 0;
}

/* IMAGES */

.lesson-image-figure {
  margin: 0;
  padding: 12px;
  border: 1px solid #eeece6;
  border-radius: 14px;
  background: #fcfbf9;
}

.lesson-image {
  display: block;
  max-width: 100%;
  max-height: 600px;
  width: auto;
  height: auto;
  margin: 0 auto;
  border-radius: 9px;
  object-fit: contain;
}

.lesson-image-figure figcaption {
  margin-top: 12px;
  color: #88847b;
  font-size: 12px;
  line-height: 1.6;
  text-align: center;
  font-style: italic;
}

/* RESPONSIVE */

@media (max-width: 768px) {
  .lesson-content {
    padding: 17px;
  }

  .lesson-block {
    padding: 18px;
    border-radius: 12px;
  }

  .lesson-block-title {
    font-size: 17px;
    gap: 10px;
  }

  .lesson-objective {
    padding: 16px;
  }

  .lesson-callout {
    padding: 18px;
  }

  .lesson-examples-grid {
    grid-template-columns: 1fr;
  }

  .lesson-table th,
  .lesson-table td {
    padding: 12px;
    font-size: 12px;
  }
}


        .grammar-page-shell { max-width: 1440px; }
        .grammar-pager { max-width: 1320px; }
        .grammar-pager-heading { padding: 18px 22px; background: white; border: 1px solid #e8e4dc; border-radius: 14px; }
        .grammar-step-list { display:flex; flex-wrap:wrap; justify-content:center; gap:8px; }
        .grammar-step-list button { min-width:40px; min-height:40px; padding:8px 12px; border:1px solid #e8e4dc; border-radius:9px; color:#80683f; background:#faf8f3; }
        .grammar-step-list button.current { background:#263348; color:white; border-color:#263348; }
        .grammar-step-list button:focus-visible { outline:2px solid #a18450; outline-offset:3px; }
        .grammar-paged-card { background:#faf9f6; padding:24px !important; }
        .grammar-exercise-layout { grid-template-columns:minmax(0,1fr) minmax(190px,230px); gap:24px; }
        .grammar-history-sidebar { margin-top:0; border-radius:14px; padding:18px; }
        .grammar-exercise-main { container-type:inline-size; }
        .grammar-exercise-main .grammar-renderer { max-width:none; display:grid; gap:18px; }
        .grammar-renderer > * { margin:0 !important; min-width:0; }
        .grammar-renderer > header { border-color:#e5dfd2; background:#fff; }
        .grammar-question-grid { display:grid; grid-template-columns:minmax(0,1fr); gap:16px; align-items:stretch; }
        .grammar-question-grid > article { min-width:0; overflow-wrap:anywhere; padding:20px; border-radius:14px; display:flex; flex-direction:column; }
        .grammar-question-grid > article > div:first-child { margin-bottom:8px; }
        .grammar-question-grid > article > div:first-child > span { background:#f3ede0; color:#92743c; }
        .grammar-question-grid > article[data-wide="true"] { grid-column:1/-1; }
        .grammar-renderer > button { background:#263348; border-radius:10px; }
        .grammar-renderer > button:hover:not(:disabled) { background:#3b4b63; }
        @container (min-width: 560px) { .grammar-question-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        
        @media(max-width: 900px) { .grammar-exercise-layout { grid-template-columns:minmax(0,1fr); } .grammar-paged-card { padding:14px !important; } }
        @media(max-width: 480px) { .grammar-question-grid > article { padding:14px; } .grammar-pager-nav .premium-button { padding:10px; } }
      
/* Deutsch-Erfolg Studio — scoped visual layer */
.premium-page { background:#f5f3ee; }
.premium-page .chapter-header { background:linear-gradient(115deg,#192b43,#263d57); padding:30px 36px; isolation:isolate; }
.studio-brand { display:block; color:#d8be87; font-size:10px; font-weight:750; letter-spacing:.18em; }
.studio-chapter-number { position:absolute; inset-inline-end:30px; bottom:-35px; font: 180px Georgia,serif; color:#ffffff0c; z-index:-1; }
.premium-page .chapter-title { font-family:Georgia,serif; font-weight:500; }
.premium-page .chapter-progress { border:0; box-shadow:0 2px 12px #192b4308; }
.premium-page .grammar-pager { max-width:1280px; }
.premium-page .grammar-paged-card { background:transparent; border:0; box-shadow:none; overflow:visible; padding:0 !important; }
.premium-page .grammar-exercise-layout { grid-template-columns:minmax(0,1fr) 220px; gap:24px; }
.studio-exercise-header { padding:8px 0 22px; border-bottom:1px solid #dcd5c7; }
.studio-exercise-header h2 { font:500 clamp(25px,3vw,36px)/1.2 Georgia,serif; color:#192b43; }
.studio-exercise-header p { color:#666c74; line-height:1.7; }
/* Studio exercise masthead */
.premium-page .studio-exercise-header { position:relative; overflow:hidden; padding:24px 26px 28px; border:1px solid #e3d9c5; border-radius:18px; background:linear-gradient(120deg,#fffdf8,#f5efe3); box-shadow:0 5px 18px #192b4308; }
.premium-page .studio-exercise-header > div:first-child { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:22px; }
.premium-page .studio-exercise-header > div:first-child > span:first-child { display:inline-flex; align-items:center; gap:8px; background:#192b43; color:#f0d8a4; border-radius:9px; padding:10px 14px; font-size:11px; letter-spacing:.07em; text-transform:uppercase; }
.premium-page .studio-exercise-header > div:first-child > span:last-child { border:1px solid #ded4c1; border-radius:999px; padding:7px 12px; color:#192b43; background:#ffffff80; font-weight:600; }
.premium-page .studio-exercise-header h2 { font:500 clamp(26px,3vw,38px)/1.15 Georgia,serif; letter-spacing:-.025em; margin:0; color:#192b43; }
.premium-page .studio-exercise-header p { border-inline-start:3px solid #b49760; padding-inline-start:12px; margin-top:12px; font-size:15px; color:#626a75; }
.premium-page .studio-exercise-header::after { content:''; position:absolute; inset-inline-start:26px; bottom:0; width:64px; height:3px; background:#b49760; border-radius:3px 3px 0 0; }
@media(max-width:640px){ .premium-page .studio-exercise-header { padding:18px 16px 22px; } .premium-page .studio-exercise-header > div:first-child { margin-bottom:16px; } .premium-page .studio-exercise-header > div:first-child > span:first-child { padding:8px 10px; letter-spacing:0; } }

.studio-renderer .grammar-question-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:16px; }
.studio-renderer .studio-question { border:1px solid #e4dfd4; border-radius:12px; box-shadow:0 3px 12px #192b4305; padding:20px; }
.studio-renderer .studio-question[data-wide=true] { grid-column:1/-1; }
.studio-renderer .studio-question[data-kind=fill_blank] { background:#fffefa; }
.studio-number { display:grid; place-items:center; width:30px; height:30px; flex-shrink:0; border-radius:7px; background:#f0eadc; color:#967744; font:600 13px Georgia,serif; }
.studio-blank { width:clamp(64px,12vw,110px); max-width:100%; border:0; border-bottom:2px solid #b49760; background:#f5f1e8; border-radius:5px 5px 0 0; padding:3px 7px; text-align:center; color:#192b43; font-weight:650; }
.studio-renderer input:focus-visible,.studio-renderer select:focus-visible,.studio-renderer textarea:focus-visible { outline:2px solid #b49760; outline-offset:2px; }
.studio-renderer label:has(input:checked) { background:#f4eee1; border-color:#b49760; }
.studio-renderer input[type=radio],.studio-renderer input[type=checkbox] { accent-color:#967744; }
.studio-submit { display:flex; align-items:center; justify-content:center; gap:10px; width:100%; padding:16px; border-radius:9px; background:#192b43; color:white; font-weight:650; }
.studio-submit:hover:not(:disabled) { background:#304b69; }
.studio-submit:disabled { opacity:.5; }
.premium-page .grammar-history-sidebar { border:1px solid #e4dfd4; border-radius:14px; padding:18px; margin-top:0; box-shadow:0 4px 18px #192b4306; }
.studio-score { width:112px; height:112px; margin:0 auto 20px; border-radius:50%; display:grid; place-items:center; }
.studio-score>div { width:98px; height:98px; border-radius:50%; background:white; display:flex; flex-direction:column; align-items:center; justify-content:center; }
.studio-score strong { font:500 30px Georgia,serif; color:#192b43; }
.studio-score small { color:#77766f; font-size:11px; }
.premium-page .grammar-pager-nav { border-top:1px solid #dcd5c7; padding-top:20px; }
@media(max-width:900px){ .premium-page .grammar-exercise-layout { grid-template-columns:minmax(0,1fr); } }
@media(max-width:640px){ .premium-page .chapter-header { padding:24px 20px; } .studio-renderer .studio-question { padding:16px; } }

@media (max-width: 768px) { .premium-page .studio-renderer .grammar-question-grid { grid-template-columns: minmax(0,1fr); } }

.premium-page .grammar-exercise-layout { grid-template-columns:minmax(0,1fr) 280px; gap:24px; }
.premium-page .performance-panel { padding:12px; max-height:none; overflow:visible; background:#fff; }
.performance-hero { background:#192b43; color:white; border-radius:11px; padding:18px; display:grid; gap:10px; }
.performance-hero > span { color:#d8be87; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:.08em; }
.performance-hero small { color:#e0d5bd; font-size:12px; }
.performance-hero strong { font:500 42px Georgia,serif; }
.performance-track { height:6px; background:#405068; border-radius:8px; overflow:hidden; }
.performance-track i { display:block; height:100%; background:#d8be87; }
.performance-stats { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:8px; margin:12px 0; }
.performance-stats > div { padding:10px; background:#f5f3ee; border-radius:8px; display:grid; gap:5px; }
.performance-stats small { font-size:11px; color:#666; overflow-wrap:anywhere; }
.performance-stats strong { font-size:21px; color:#192b43; }
.performance-panel h3 { font-size:13px; font-weight:700; margin:14px 0 8px; color:#263348; }
.performance-trend svg { width:100%; display:block; }
.performance-rows { max-height:300px; overflow-y:auto; }
.performance-row { display:flex; align-items:center; justify-content:space-between; gap:8px; padding:12px 2px; border-bottom:1px solid #eeeae1; }
.performance-row b,.performance-row time { display:block; font-size:12px; }
.performance-row time { color:#77766f; font-size:11px; margin-top:4px; }
.performance-row > strong { font-size:16px; white-space:nowrap; color:#192b43; }
.performance-row > strong.perfect { color:#36734b; }
.performance-row > strong small { font-size:10px; font-weight:400; }
@media(max-width:900px){ .premium-page .grammar-exercise-layout { grid-template-columns:minmax(0,1fr); } .premium-page .performance-panel { position:static; } }
 
        .studio-progress-summary { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; padding:0; border:0; background:transparent; align-items:start; }
        .studio-summary-item { min-width:0; border:1px solid #e4dfd4; border-radius:13px; background:#fff; overflow:hidden; }
        .studio-summary-item summary { list-style:none; cursor:pointer; padding:20px; display:flex; flex-direction:column; gap:8px; }
        .studio-summary-item summary::-webkit-details-marker { display:none; }
        .studio-summary-item summary:focus-visible { outline:2px solid #a18450; outline-offset:-3px; }
        .studio-summary-item summary small { color:#746b5c; font-size:12px; font-weight:600; }
        .studio-summary-item summary strong { color:#263348; font-size:clamp(20px,2.5vw,30px); font-variant-numeric:tabular-nums; }
        .studio-summary-item summary span { color:#8e7549; font-size:12px; display:flex; justify-content:space-between; }
        .studio-summary-item[open] summary b { transform:rotate(180deg); }
        .studio-summary-detail { border-top:1px solid #eeeae1; padding:15px 20px; font-size:12px; line-height:1.7; color:#505967; overflow-wrap:anywhere; }
        .studio-summary-row { display:flex; justify-content:space-between; gap:8px; padding:8px 0; border-bottom:1px solid #eeeae1; }
        .studio-summary-row b { white-space:nowrap; }
        @media(max-width:640px) { .studio-progress-summary { grid-template-columns:1fr; } }
      `}</style>
</main>
}

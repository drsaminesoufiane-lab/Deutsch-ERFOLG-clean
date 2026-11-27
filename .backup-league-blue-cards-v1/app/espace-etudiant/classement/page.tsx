'use client'
import LeaguePodium from '@/components/student/LeaguePodium'

import { useEffect, useState } from 'react'
import { Trophy, Medal, Crown, RefreshCw, Users, Target, ShieldCheck } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

type Period = 'week' | 'month' | 'all'
type Level = 'all' | 'A1' | 'A2' | 'B1' | 'B2'
type Entry = { position: number; pseudonym: string; level: string | null; completed: number; xp: number; is_me: boolean }
// DE_LEAGUE_ADMIN_READ_V1
type Ranking = { can_participate?: boolean; my_pseudonym: string | null; participating: boolean; entries: Entry[]; me: Entry | null; total_participants: number }
const translations = {
  fr: { title:'Classement des étudiants', intro:'Chaque réussite compte. Progressez à votre rythme.', week:'Semaine', month:'Mois', all:'Général', levels:'Tous les niveaux', level:'Niveau', rank:'Rang', student:'Pseudonyme', done:'Übungen réussies', points:'Points XP', participants:'Participants', myRank:'Ma position', myXP:'Mes points', join:'Participer au classement', leave:'Quitter le classement', privacy:'Participation facultative. Seul le pseudonyme que vous choisissez, votre niveau et vos points sont visibles. Vos anciennes réussites sont prises en compte.', empty:'Aucun participant pour ce filtre.', loading:'Chargement…', error:'Impossible de charger le classement.', retry:'Actualiser', you:'Vous', rules:'10 XP par Übung réussie à 80 % ou plus, une seule fois. Semaines et mois calculés à l’heure du Maroc.', noRank:'Non classé', scope:'Grammaire uniquement · Version 1', restricted:'Le classement est réservé aux comptes étudiants.', joinError:'Impossible de modifier la participation.' },
  de: { title:'Rangliste der Lernenden', intro:'Jeder Erfolg zählt. Lernen Sie in Ihrem Tempo.', week:'Woche', month:'Monat', all:'Gesamt', levels:'Alle Niveaus', level:'Niveau', rank:'Rang', student:'Pseudonym', done:'Bestandene Übungen', points:'XP-Punkte', participants:'Teilnehmende', myRank:'Mein Rang', myXP:'Meine Punkte', join:'An der Rangliste teilnehmen', leave:'Rangliste verlassen', privacy:'Die Teilnahme ist freiwillig. Nur Ihr gewähltes Pseudonym, Ihr Niveau und Ihre Punkte sind sichtbar. Frühere Erfolge werden berücksichtigt.', empty:'Keine Teilnehmenden für diesen Filter.', loading:'Wird geladen…', error:'Die Rangliste konnte nicht geladen werden.', retry:'Aktualisieren', you:'Sie', rules:'10 XP pro Übung ab 80 %, nur einmal. Wochen und Monate nach marokkanischer Zeit.', noRank:'Nicht platziert', scope:'Nur Grammatik · Version 1', restricted:'Nur Lernkonten können teilnehmen.', joinError:'Teilnahme konnte nicht geändert werden.' },
  en: { title:'Student leaderboard', intro:'Every success counts. Progress at your own pace.', week:'Week', month:'Month', all:'All time', levels:'All levels', level:'Level', rank:'Rank', student:'Alias', done:'Exercises passed', points:'XP points', participants:'Participants', myRank:'My rank', myXP:'My points', join:'Join the leaderboard', leave:'Leave the leaderboard', privacy:'Participation is optional. Only your chosen alias, your level and points are visible. Previous successes are included.', empty:'No participants for this filter.', loading:'Loading…', error:'Unable to load the leaderboard.', retry:'Refresh', you:'You', rules:'10 XP per exercise set passed with 80% or more, once only. Weeks and months use Morocco time.', noRank:'Not ranked', scope:'Grammar only · Version 1', restricted:'Only student accounts may participate.', joinError:'Unable to change participation.' },
  ar: { title:'ترتيب الطلاب', intro:'كل نجاح مهم. تقدّم وفق وتيرتك.', week:'الأسبوع', month:'الشهر', all:'العام', levels:'جميع المستويات', level:'المستوى', rank:'الترتيب', student:'الاسم المستعار', done:'التمارين الناجحة', points:'نقاط XP', participants:'المشاركون', myRank:'ترتيبي', myXP:'نقاطي', join:'المشاركة في الترتيب', leave:'مغادرة الترتيب', privacy:'المشاركة اختيارية. يظهر فقط الاسم المستعار الذي تختاره ومستواك ونقاطك. تُحتسب النجاحات السابقة.', empty:'لا يوجد مشاركون لهذا الاختيار.', loading:'جار التحميل…', error:'تعذر تحميل الترتيب.', retry:'تحديث', you:'أنت', rules:'10 نقاط لكل مجموعة تمارين ناجحة بنسبة 80٪ أو أكثر، مرة واحدة فقط. الأسبوع والشهر حسب توقيت المغرب.', noRank:'غير مصنف', scope:'القواعد فقط · الإصدار الأول', restricted:'المشاركة متاحة لحسابات الطلاب فقط.', joinError:'تعذر تغيير المشاركة.' },
}

// LEAGUE_PSEUDONYM_V2
// LEAGUE_PSEUDONYM_V3
// LEAGUE_PSEUDONYM_V4
const reserveLabels = {
  fr: { add: 'Ajouter', edit: 'Modifier', saving: 'Enregistrement…', ready: 'Pseudonyme enregistré avec succès.', required: 'Ajoutez votre pseudonyme avant de participer.', error: 'Impossible d’enregistrer le pseudonyme.' },
  de: { add: 'Hinzufügen', edit: 'Ändern', saving: 'Wird gespeichert…', ready: 'Pseudonym erfolgreich gespeichert.', required: 'Fügen Sie zuerst Ihr Pseudonym hinzu.', error: 'Pseudonym konnte nicht gespeichert werden.' },
  en: { add: 'Add', edit: 'Edit', saving: 'Saving…', ready: 'Alias saved successfully.', required: 'Add your alias before joining.', error: 'Unable to save your alias.' },
  ar: { add: 'إضافة', edit: 'تعديل', saving: 'جارٍ الحفظ…', ready: 'تم حفظ الاسم المستعار بنجاح.', required: 'أضف اسمك المستعار قبل المشاركة.', error: 'تعذر حفظ الاسم المستعار.' },
}
const aliasLabels = {
  fr: { label: 'Votre pseudonyme', hint: '3 à 20 caractères : lettres latines, chiffres, tirets ou underscores. Évitez votre vrai nom.', taken: 'Ce pseudonyme est déjà utilisé. Choisissez-en un autre.', invalid: 'Pseudonyme invalide.', saved: 'Votre pseudonyme réservé' },
  de: { label: 'Ihr Pseudonym', hint: '3 bis 20 Zeichen: lateinische Buchstaben, Ziffern, Bindestriche oder Unterstriche. Verwenden Sie nicht Ihren echten Namen.', taken: 'Dieses Pseudonym ist bereits vergeben.', invalid: 'Ungültiges Pseudonym.', saved: 'Ihr reserviertes Pseudonym' },
  en: { label: 'Your alias', hint: '3–20 characters: Latin letters, digits, hyphens or underscores. Avoid your real name.', taken: 'This alias is already taken. Choose another.', invalid: 'Invalid alias.', saved: 'Your reserved alias' },
  ar: { label: 'اسمك المستعار', hint: 'من 3 إلى 20 حرفاً: حروف لاتينية وأرقام وشرطات أو شرطات سفلية. تجنب اسمك الحقيقي.', taken: 'هذا الاسم المستعار مستخدم بالفعل. اختر اسماً آخر.', invalid: 'الاسم المستعار غير صالح.', saved: 'اسمك المستعار المحجوز' },
}

export default function LeaguePage() {
  const { language, isRTL } = useLanguage()
  const t = translations[language as keyof typeof translations] || translations.de
  const [period, setPeriod] = useState<Period>('week')
  const [level, setLevel] = useState<Level>('all')
  const [data, setData] = useState<Ranking | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [busy, setBusy] = useState(false)
  const [alias, setAlias] = useState<string | null>(null)
  const [aliasError, setAliasError] = useState<'taken' | 'invalid' | 'joinError' | ''>('')
  const a = aliasLabels[language as keyof typeof aliasLabels] || aliasLabels.de
  const r = reserveLabels[language as keyof typeof reserveLabels] || reserveLabels.de
  const [savedAlias, setSavedAlias] = useState(false)
  const [reserveError, setReserveError] = useState(false)
  const [revision, setRevision] = useState(0)

  useEffect(() => {
    let active = true
    let pending = false
    async function load() {
      if (pending || !active) return
      pending = true
      try {
        const { data: result, error: err } = await supabase.rpc('league_get_ranking', { p_period: period, p_level: level === 'all' ? null : level })
        if (!active) return
        if (err) { setData(null); setError(err.code === '42501' ? 'restricted' : 'error') }
        else { setData(result as Ranking); setError('') }
      } catch { if (active) { setData(null); setError('error') } }
      finally { pending = false; if (active) setLoading(false) }
    }
    setLoading(true); setData(null); setError('')
    void load()
    const refresh = () => { if (document.visibilityState === 'visible') void load() }
    const timer = window.setInterval(refresh, 60000)
    document.addEventListener('visibilitychange', refresh)
    return () => { active = false; window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh) }
  }, [period, level, revision])

  async function reserveAlias() {
    if (busy || !data || data.can_participate===false) return
    const name = (alias ?? data.my_pseudonym ?? '').trim()
    if (name === data.my_pseudonym) return
    setAliasError(''); setReserveError(false); setSavedAlias(false)
    if (!/^[A-Za-z0-9_-]{3,20}$/.test(name)) { setAliasError('invalid'); return }
    setBusy(true)
    try {
      const { error: err } = await supabase.rpc('league_reserve_pseudonym', { p_pseudonym: name })
      if (err) {
        alert(err.code + ' : ' + err.message);
        alert(err.code + ' : ' + err.message);
        if (err.code === '23505') setAliasError('taken')
        else if (err.code === '22023') setAliasError('invalid')
        else setReserveError(true)
        return
      }
      setData(current => current ? { ...current, my_pseudonym: name } : current)
      setAlias(null); setSavedAlias(true); setRevision(v => v + 1)
    } catch { setReserveError(true) }
    finally { setBusy(false) }
  }

  async function toggleParticipation() {
    if (busy || !data || data.can_participate===false || (!data.participating && !data.my_pseudonym)) return
    setBusy(true); setAliasError(''); setReserveError(false)
    try {
      const { error: err } = await supabase.rpc('league_set_participation', { p_join: !data.participating })
      if (err) throw err
      setSavedAlias(false); setRevision(v => v + 1)
    } catch { setAliasError('joinError') }
    finally { setBusy(false) }
  }

  const format = (n: number) => n.toLocaleString(language === 'ar' ? 'ar-MA' : language === 'en' ? 'en-GB' : language === 'fr' ? 'fr-FR' : 'de-DE')
  return (
    <main className="de-league" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="league-hero"><div className="league-emblem"><Trophy size={34}/></div><div><small>DEUTSCH ERFOLG LEAGUE</small><h1>{t.title}</h1><p>{t.intro}</p><span>{t.scope}</span></div></header>
      <div className="league-filters"><div className="league-tabs" role="group" aria-label={t.title}>{(['week','month','all'] as Period[]).map(p => <button key={p} type="button" aria-pressed={p===period} onClick={()=>setPeriod(p)}>{t[p]}</button>)}</div><div className="league-filter-actions"><label>{t.level}<select value={level} onChange={e=>setLevel(e.target.value as Level)}><option value="all">{t.levels}</option>{['A1','A2','B1','B2'].map(l=><option key={l}>{l}</option>)}</select></label><button className="league-refresh" type="button" onClick={()=>setRevision(v=>v+1)} aria-label={t.retry} title={t.retry}><RefreshCw size={18}/></button></div></div>
      {loading && <p role="status">{t.loading}</p>}
      {error && <p className="league-error" role="alert">{error==='restricted'?t.restricted:error==='joinError'?t.joinError:t.error}</p>}
      {data && !loading && <>
        <div className="league-stats"><article><Users size={22}/><span>{t.participants}</span><strong>{format(data.total_participants)}</strong></article><article><Medal size={22}/><span>{t.myRank}</span><strong>{data.me ? '#'+format(data.me.position) : '—'}</strong></article><article><Target size={22}/><span>{t.myXP}</span><strong>{data.me ? format(data.me.xp)+' XP' : '—'}</strong></article></div>
        {data.can_participate!==false ? <section className="league-consent league-consent-v3">
          <ShieldCheck size={24}/>
          <div className="league-alias-form">
            <p>{t.privacy}</p>
            <div className="league-pseudo-editor">
              <label className="league-pseudo-title" htmlFor="league-pseudonym">{a.label}</label>
              <div className="league-pseudo-row">
                <input id="league-pseudonym" value={alias ?? data.my_pseudonym ?? ''} onChange={e=>{setAlias(e.target.value);setAliasError('');setReserveError(false);setSavedAlias(false)}} maxLength={20} autoComplete="off" spellCheck={false} disabled={busy} placeholder="DeutschMaster" aria-describedby="league-alias-hint" onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();void reserveAlias()}}}/>
                <button type="button" className="league-add-alias" disabled={busy || !(alias ?? data.my_pseudonym ?? '').trim() || (alias ?? data.my_pseudonym ?? '').trim() === data.my_pseudonym} onClick={()=>void reserveAlias()}>{busy?r.saving:data.my_pseudonym?r.edit:r.add}</button>
              </div>
              <small id="league-alias-hint">{a.hint}</small>
            </div>
            {aliasError && <p className="league-error" role="alert">{aliasError==='joinError'?t.joinError:a[aliasError]}</p>}
            {reserveError && <p className="league-error" role="alert">{r.error}</p>}
            {savedAlias && data.my_pseudonym && <p role="status" className="league-alias-success">{r.ready}</p>}
            {!data.my_pseudonym && <small>{r.required}</small>}
            <button type="button" className={data.participating?'secondary league-join-action':'league-join-action'} disabled={busy || (!data.participating && !data.my_pseudonym)} onClick={()=>void toggleParticipation()}>{data.participating?t.leave:t.join}</button>
          </div>
        </section> : <p className="league-rules">{({"fr": "Mode administrateur : consultation uniquement.", "de": "Administratormodus: nur Ansicht.", "en": "Administrator mode: read only.", "ar": "\u0648\u0636\u0639 \u0627\u0644\u0625\u062f\u0627\u0631\u0629: \u0639\u0631\u0636 \u0641\u0642\u0637."})[language]}</p>}
        {/* DE_LEAGUE_PODIUM_V3 */}<LeaguePodium entries={data.entries}/>

        <section className="league-table-wrap" aria-label={t.title}>
          {data.entries.length===0 ? <p className="league-empty">{t.empty}</p> : <table><thead><tr><th>{t.rank}</th><th>{t.student}</th><th>{t.level}</th><th>{t.done}</th><th>{t.points}</th></tr></thead><tbody>{data.entries.map(row=><tr key={row.pseudonym} className={row.is_me?'league-me':''}><td><span className="league-position">{row.xp>0 && row.position===1?<Crown size={18}/>:row.xp>0 && row.position<=3?<Medal size={18}/>:null}{row.position}</span></td><td>{row.pseudonym} {row.is_me&&<small>({t.you})</small>}</td><td>{row.level||'—'}</td><td>{format(row.completed)}</td><td><strong>{format(row.xp)} XP</strong></td></tr>)}</tbody></table>}
        </section>
        <p className="league-rules">{t.rules}</p>
      </>}
      <style jsx>{`
        .de-league{max-width:1120px;margin:0 auto;padding:35px 30px 200px;color:#192b43;font-family:var(--de-sans,Arial,sans-serif)}
        .league-hero{display:flex;align-items:center;gap:22px;background:#192b43;color:#fff;padding:30px;border-radius:14px;margin-bottom:25px}.league-emblem{display:grid;place-items:center;width:72px;height:72px;flex-shrink:0;border:1px solid #b49760;border-radius:14px;color:#e3cb96}.league-hero small,.league-hero span{color:#e3cb96;font-size:11px;letter-spacing:1px}.league-hero h1{font-size:clamp(23px,3vw,32px);margin:8px 0}.league-hero p{margin:0 0 10px;color:#d1dae5;font-size:14px}
        .league-filters,.league-filter-actions,.league-tabs{display:flex;align-items:center;gap:10px;flex-wrap:wrap}.league-filters{justify-content:space-between;margin-bottom:20px}.league-tabs{background:#f3f2ee;padding:4px;border-radius:9px}.league-tabs button,.league-refresh{border:0;background:transparent;color:#192b43;padding:10px 15px;border-radius:6px;font-weight:600;cursor:pointer}.league-tabs button[aria-pressed=true]{background:#192b43;color:white}.league-filter-actions label{display:flex;align-items:center;gap:10px;font-size:13px}.league-filter-actions select,.league-refresh{border:1px solid #e3ded3;background:white;border-radius:8px;padding:10px;color:#192b43}
        .league-stats{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:15px;margin:18px 0}.league-stats article{display:flex;flex-direction:column;gap:9px;padding:20px;border:1px solid #e3ded3;border-radius:12px;background:#fff}.league-stats article :global(svg){color:#a18142}.league-stats span{color:#626a75;font-size:13px}.league-stats strong{font-size:25px}
        .league-consent{display:flex;align-items:center;gap:14px;padding:16px;background:#fcfaf4;border:1px solid #e3ded3;border-radius:10px;margin-bottom:18px}.league-consent :global(svg){flex-shrink:0;color:#a18142}.league-consent p{flex:1;margin:0;font-size:13px;line-height:1.6}.league-consent button{background:#192b43;color:white;border:1px solid #192b43;padding:11px 15px;border-radius:8px;cursor:pointer;font-weight:600}.league-consent button.secondary{background:transparent;color:#192b43}.league-consent button:disabled{opacity:.5}
        .league-alias-form{flex:1;min-width:0;display:flex;flex-direction:column;gap:12px;align-items:flex-start}.league-alias-form p{width:100%;min-width:0}.league-alias-label,.league-reserved{display:flex;flex-direction:column;gap:7px;width:100%;max-width:410px;font-size:13px;font-weight:650}.league-alias-label input{box-sizing:border-box;width:100%;padding:12px 14px;border:1px solid #d6c7a7;border-radius:8px;color:#192b43;background:white;font:inherit}.league-alias-label input:focus{outline:2px solid #b49760;outline-offset:2px}.league-alias-label small,.league-reserved span{color:#626a75;font-weight:400;line-height:1.5}.league-reserved strong{font-size:17px;color:#192b43;overflow-wrap:anywhere}
        .league-consent-v3{align-items:flex-start;flex-wrap:nowrap}.league-consent-v3 .league-alias-form{width:100%;min-width:0;align-items:stretch}.league-consent-v3 .league-alias-label{max-width:420px}.league-consent-v3 .league-add-alias,.league-consent-v3 .league-join-action{display:inline-flex;align-items:center;justify-content:center;align-self:flex-start;min-height:44px;width:auto;max-width:100%;white-space:normal;position:static;visibility:visible;opacity:1}.league-consent-v3 .league-add-alias{background:#192b43;color:#fff;border:1px solid #192b43}.league-consent-v3 button:disabled{opacity:.5;cursor:not-allowed}.league-consent-v3 .league-alias-success{color:#276749;font-weight:600}.league-consent-v3 .league-alias-form p{min-width:0;overflow-wrap:anywhere}.league-consent-v3 .league-alias-form small{font-size:12px;color:#626a75}
        .league-pseudo-editor{display:flex;flex-direction:column;gap:8px;width:100%;max-width:620px;min-width:0}.league-pseudo-title{font-size:13px;font-weight:650;color:#192b43}.league-pseudo-row{display:flex;align-items:stretch;gap:10px;width:100%;min-width:0}.league-pseudo-row input{flex:1;min-width:0;width:0;box-sizing:border-box;padding:11px 14px;min-height:44px;border:1px solid #d6c7a7;border-radius:8px;background:#fff;color:#192b43;font:inherit}.league-pseudo-row input:focus{outline:2px solid #b49760;outline-offset:1px}.league-consent-v3 .league-pseudo-row .league-add-alias{flex:0 0 auto;align-self:stretch;width:auto;max-width:48%;min-height:44px;padding:10px 17px;margin:0;white-space:normal}.league-consent-v3 .league-pseudo-row .league-add-alias:disabled{opacity:.55}.league-pseudo-editor small{line-height:1.5}
        @media(max-width:480px){.league-pseudo-row{gap:6px}.league-consent-v3 .league-pseudo-row .league-add-alias{padding:8px 10px}.league-pseudo-row input{padding:9px 10px}}
        .league-table-wrap{overflow-x:auto;border:1px solid #e3ded3;border-radius:12px;background:#fff}.league-table-wrap table{width:100%;border-collapse:collapse;text-align:start;min-width:550px}.league-table-wrap th,.league-table-wrap td{text-align:start;padding:15px;border-bottom:1px solid #eeeae2;font-size:13px}.league-table-wrap th{background:#f6f4ef;color:#626a75}.league-table-wrap tr:last-child td{border-bottom:0}.league-me{background:#fff8e6}.league-position{display:flex;align-items:center;gap:7px;font-weight:600;color:#a18142}.league-table-wrap td:last-child{color:#967035;white-space:nowrap}.league-empty{padding:20px}.league-rules{color:#626a75;line-height:1.6;font-size:12px}.league-error{color:#a33b38;padding:12px;border:1px solid #efc9c7;border-radius:8px}
        @media(max-width:700px){.de-league{padding:75px 14px 210px}.league-hero{padding:18px;gap:12px}.league-emblem{width:46px;height:46px}.league-emblem :global(svg){width:24px}.league-stats{gap:6px}.league-stats article{padding:12px;gap:6px}.league-stats strong{font-size:19px}.league-consent{flex-wrap:wrap}.league-consent p{min-width:180px}.league-consent button{width:100%}}        .de-league-podium{padding:16px;margin:18px 0;border-radius:14px;background:#f6f0e3;border:1px solid #e6d7b6}.de-league-podium h2{display:flex;gap:9px;align-items:center;color:#192b43;font-size:16px;margin:0 0 12px}.de-league-podium h2 :global(svg){color:#967035}.de-podium-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;align-items:stretch}.de-podium-card{display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:5px;padding:14px 8px;border-radius:10px;border:1px solid #dfd5c0;background:#fff;color:#192b43;min-width:0}.de-podium-card strong{font-size:14px;overflow-wrap:anywhere}.de-podium-card small{color:#647184;font-weight:650}.de-podium-card>span:last-child{font-weight:750;color:#967035;font-size:13px}.de-podium-medal{display:grid;place-items:center;background:#e9eaf0;color:#637183;width:42px;height:42px;border-radius:50%}.de-podium-rank-1{background:#192b43;color:#fff;border-color:#d6b56d}.de-podium-rank-1 .de-podium-medal{background:#d6b56d;color:#192b43}.de-podium-rank-1 small,.de-podium-rank-1>span:last-child{color:#f0d599}.de-podium-rank-3 .de-podium-medal{background:#f0e0d1;color:#98613b}.de-league .league-hero{background:linear-gradient(115deg,#192b43,#354d6b);border:1px solid #b49760}.de-league .league-stats article{box-shadow:0 4px 15px #192b4308}.de-league .league-me{box-shadow:inset 4px 0 #d6b56d}.de-league .league-consent .league-join-action:not(.secondary){background:#d6b56d;border-color:#d6b56d;color:#192b43;font-weight:800}
        @media(max-width:700px){.de-league{padding-inline:12px}.de-league-podium{padding:10px}.de-podium-grid{gap:5px}.de-podium-card{padding:10px 4px}.de-podium-card strong{font-size:11px}.de-podium-medal{width:34px;height:34px}.de-podium-card>span:last-child{font-size:11px}.de-league .league-table-wrap table{min-width:0;table-layout:fixed}.de-league .league-table-wrap th,.de-league .league-table-wrap td{padding:9px 5px;font-size:11px;overflow-wrap:anywhere}.de-league .league-table-wrap th:nth-child(4),.de-league .league-table-wrap td:nth-child(4){display:none}.de-league .league-table-wrap th:nth-child(1){width:19%}.de-league .league-table-wrap th:nth-child(2){width:37%}.de-league .league-table-wrap th:nth-child(3){width:17%}.de-league .league-table-wrap th:nth-child(5){width:27%}.de-league .league-position{gap:3px}.de-league .league-position :global(svg){width:13px;flex-shrink:0}.de-league .league-table-wrap td:last-child{white-space:normal}}

      `}</style>
    </main>
  )
}


'use client'

import { useMemo, useState, useEffect } from 'react'
import {
  Search, BookOpen, Star, Volume2, X, ChevronRight,
  ChevronLeft, Heart, GraduationCap, Languages,
  Filter, RotateCcw, CheckCircle2, ArrowRight,
  Bookmark, BookMarked, Brain, Sparkles
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

import { vocabulary, type Word } from './vocabulary'

const uiText = {
  fr: {
    title:'Wörterbuch A1–B2', subtitle:'Ton compagnon de vocabulaire allemand',
    search:'Rechercher en allemand, français ou anglais...',
    all:'Tous', favorites:'Favoris', words:'mots', result:'résultats',
    categories:'Catégories', alphabet:'Alphabet', noResult:'Aucun mot trouvé',
    detail:'Fiche de vocabulaire', example:'Exemple', translation:'Traduction',
    grammar:'Grammaire', forms:'Conjugaison', plural:'Pluriel',
    listen:'Écouter', favorite:'Ajouter aux favoris', remove:'Retirer des favoris',
    practice:'Mode révision', next:'Suivant', reveal:'Voir la réponse',
    correct:'Correct !', incorrect:'Réessaie !', close:'Fermer',
    progress:'Progression', allWords:'Tous les mots', revision:'Réviser mes favoris',
    emptyFavorites:'Aucun favori pour le moment.',
    letter:'Lettre', noPractice:'Ajoute des favoris pour commencer une révision.',
    previous:'Précédent', definition:'Définition', level:'A1–B2'
  },
  de: {
    title:'Wörterbuch A1–B2', subtitle:'Dein Begleiter für deutschen Wortschatz',
    search:'Auf Deutsch, Französisch oder Englisch suchen...',
    all:'Alle', favorites:'Favoriten', words:'Wörter', result:'Ergebnisse',
    categories:'Kategorien', alphabet:'Alphabet', noResult:'Keine Wörter gefunden',
    detail:'Wortschatzkarte', example:'Beispiel', translation:'Übersetzung',
    grammar:'Grammatik', forms:'Konjugation', plural:'Plural',
    listen:'Anhören', favorite:'Zu Favoriten hinzufügen', remove:'Aus Favoriten entfernen',
    practice:'Wiederholungsmodus', next:'Weiter', reveal:'Antwort zeigen',
    correct:'Richtig!', incorrect:'Versuch es noch einmal!', close:'Schließen',
    progress:'Fortschritt', allWords:'Alle Wörter', revision:'Favoriten wiederholen',
    emptyFavorites:'Noch keine Favoriten.',
    letter:'Buchstabe', noPractice:'Füge Favoriten hinzu, um zu üben.',
    previous:'Zurück', definition:'Definition', level:'A1–B2'
  },
  en: {
    title:'Wörterbuch A1–B2', subtitle:'Your German vocabulary companion',
    search:'Search in German, French or English...',
    all:'All', favorites:'Favorites', words:'words', result:'results',
    categories:'Categories', alphabet:'Alphabet', noResult:'No words found',
    detail:'Vocabulary card', example:'Example', translation:'Translation',
    grammar:'Grammar', forms:'Conjugation', plural:'Plural',
    listen:'Listen', favorite:'Add to favorites', remove:'Remove from favorites',
    practice:'Revision mode', next:'Next', reveal:'Show answer',
    correct:'Correct!', incorrect:'Try again!', close:'Close',
    progress:'Progress', allWords:'All words', revision:'Review favorites',
    emptyFavorites:'No favorites yet.',
    letter:'Letter', noPractice:'Add favorites to start reviewing.',
    previous:'Previous', definition:'Definition', level:'A1–B2'
  },
  ar: {
    title:'Wörterbuch A1–B2', subtitle:'رفيقك لتعلم المفردات الألمانية',
    search:'ابحث بالألمانية أو الفرنسية أو الإنجليزية...',
    all:'الكل', favorites:'المفضلة', words:'كلمة', result:'نتيجة',
    categories:'التصنيفات', alphabet:'الأبجدية', noResult:'لم يتم العثور على كلمات',
    detail:'بطاقة المفردات', example:'مثال', translation:'الترجمة',
    grammar:'القواعد', forms:'التصريف', plural:'الجمع',
    listen:'استمع', favorite:'أضف إلى المفضلة', remove:'إزالة من المفضلة',
    practice:'وضع المراجعة', next:'التالي', reveal:'إظهار الإجابة',
    correct:'صحيح!', incorrect:'حاول مرة أخرى!', close:'إغلاق',
    progress:'التقدم', allWords:'جميع الكلمات', revision:'مراجعة المفضلة',
    emptyFavorites:'لا توجد كلمات مفضلة بعد.',
    letter:'الحرف', noPractice:'أضف كلمات إلى المفضلة لبدء المراجعة.',
    previous:'السابق', definition:'المعنى', level:'A1–B2'
  }
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const categories = ['Nom','Verbe','Adjectif','Adverbe','Préposition','Expression','Conjonction','Pronom','Grammaire']

export default function WoerterbuchB1Page() {
  const { language, isRTL } = useLanguage() as {
    language?: 'fr'|'de'|'en'|'ar'
    isRTL: boolean
  }
  const lang = language || 'fr'
  const t = uiText[lang]
  const [level,setLevel] = useState('Alle')
  const [limit,setLimit] = useState(60)
  const [loaded,setLoaded] = useState(false)
  const [query,setQuery] = useState('')
  const [letter,setLetter] = useState('Alle')
  const [category,setCategory] = useState('Alle')
  const [favorites,setFavorites] = useState<number[]>([])
  const [selected,setSelected] = useState<Word|null>(null)
  const [showFavorites,setShowFavorites] = useState(false)
  const [practice,setPractice] = useState(false)
  const [practiceIndex,setPracticeIndex] = useState(0)
  const [revealed,setRevealed] = useState(false)
  const [known,setKnown] = useState<number[]>([])

  useEffect(()=>{
    try {
      const saved = localStorage.getItem('deutsch_erfolg_woerterbuch_favorites')
      if(saved) setFavorites(JSON.parse(saved))
    } catch {}
    setLoaded(true)
  },[])

  useEffect(()=>{
    if (!loaded) return
    localStorage.setItem('deutsch_erfolg_woerterbuch_favorites',JSON.stringify(favorites))
  },[favorites,loaded])

  const filtered = useMemo(()=>{
    return vocabulary.filter(w=>{
      const q = query.trim().toLowerCase()
      const matchesSearch = !q || [w.de,w.fr,w.en,w.ar,w.definitionDe,w.article,w.plural,w.grammar,w.forms].filter(Boolean).some(v=>String(v).toLowerCase().includes(q))
      const matchesLetter = letter==='Alle' || letter==='All' || letter==='Tout' || w.de.replace(/^(der|die|das)\s+/,'').toUpperCase().startsWith(letter)
      const matchesCategory = category==='Alle' || category==='All' || w.category===category
      const matchesFavorites = !showFavorites || favorites.includes(w.id)
      return (level === 'Alle' || (w.level || 'unknown') === level) && matchesSearch && matchesLetter && matchesCategory && matchesFavorites
    })
  },[query,letter,category,showFavorites,favorites,level])

  const revisionWords = useMemo(()=>vocabulary.filter(w=>favorites.includes(w.id)),[favorites])
  const currentPractice = revisionWords.length ? revisionWords[practiceIndex % revisionWords.length] : null

  const toggleFavorite = (id:number) => {
    setFavorites(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id])
  }

  const speak = (word:string) => {
    if(typeof window==='undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang='de-DE'
    utterance.rate=0.85
    window.speechSynthesis.speak(utterance)
  }

  const openPractice = () => {
    setPractice(true)
    setPracticeIndex(0)
    setRevealed(false)
    setKnown([])
  }

  const closePractice = () => {
    setPractice(false)
    setRevealed(false)
  }

  const categoryLabel = (cat:string) => {
    if(lang==='ar') {
      const map:Record<string,string> = {Nom:'اسم',Verbe:'فعل',Adjectif:'صفة',Adverbe:'ظرف',Préposition:'حرف جر',Expression:'تعبير',Conjonction:'أداة ربط',Pronom:'ضمير',Grammaire:'قواعد'}
      return map[cat] || cat
    }
    if(lang==='de') {
      const map:Record<string,string> = {Nom:'Nomen',Verbe:'Verben',Adjectif:'Adjektive',Adverbe:'Adverbien',Préposition:'Präpositionen',Expression:'Ausdruck',Conjonction:'Konjunktion',Pronom:'Pronomen',Grammaire:'Grammatik'}
      return map[cat] || cat
    }
    if(lang==='en') {
      const map:Record<string,string> = {Nom:'Noun',Verbe:'Verb',Adjectif:'Adjective',Adverbe:'Adverb',Préposition:'Preposition',Expression:'Expression',Conjonction:'Conjunction',Pronom:'Pronoun',Grammaire:'Grammar'}
      return map[cat] || cat
    }
    return cat
  }

  const missing = {fr:'Traduction à compléter',en:'Translation pending',de:'Definition folgt',ar:'الترجمة قيد الإعداد'}[lang]
  const meaning = (w:Word) => (lang==='de'?w.definitionDe:lang==='ar'?w.ar:w[lang]) || missing
  const exampleTranslation = (w:Word) => lang==='de'?'':(lang==='ar'?w.exampleAr:lang==='en'?w.exampleEn:w.exampleFr) || missing
  const tip = {fr:'Apprends les mots avec leur article et révise régulièrement.',en:'Learn words with their articles and review regularly.',de:'Lerne Wörter mit ihrem Artikel und wiederhole regelmäßig.',ar:'تعلم الكلمات مع أدواتها وراجعها بانتظام.'}[lang]
  const more = {fr:'Afficher plus',en:'Show more',de:'Mehr anzeigen',ar:'عرض المزيد'}[lang]
  const unknown = {fr:'Niveau à vérifier',en:'Level pending',de:'Niveau offen',ar:'المستوى غير محدد'}[lang]
  useEffect(()=>setLimit(60),[query,letter,category,level,showFavorites])
  const favoriteCount = favorites.length

  return (
    <main dir={isRTL?'rtl':'ltr'} className="de-wb min-h-screen pb-12">
      <style jsx global>{`

        /* DE-WOERTERBUCH-PREMIUM-V1 */
        .de-wb {
          --wb-navy:#192b43; --wb-gold:#b49760; --wb-ink-gold:#806337;
          --wb-paper:#f7f5f0; --wb-line:#e3ded3; --wb-muted:#626a75;
          background:var(--wb-paper); color:var(--wb-navy);
          font-family:'Plus Jakarta Sans',Arial,sans-serif;
        }
        .de-wb[dir="rtl"] {font-family:'Tajawal',Arial,sans-serif;}
        .de-wb .wb-heading,.de-wb .wb-word,.de-wb .wb-stat .text-2xl {
          font-family:Georgia,'Times New Roman',serif; font-weight:400; letter-spacing:-.025em;
        }
        .de-wb .wb-heading {text-align:start;}
        .de-wb[dir="rtl"] .wb-heading {text-align:right;}
        .de-wb .wb-hero {background:var(--wb-navy); border-radius:12px; border:1px solid #34455b; box-shadow:none;}
        .de-wb .wb-stats {min-width:0; border-inline-start:1px solid #506074; padding-inline-start:22px;}
        .de-wb .wb-stat {background:transparent; border:0; color:#fff; min-width:92px;}
        .de-wb .wb-stat + .wb-stat {border-inline-start:1px solid #506074; padding-inline-start:20px;}
        .de-wb .wb-stat svg {color:#e3cb96; width:18px; height:18px;}
        .de-wb input,.de-wb select {border-color:var(--wb-line);border-radius:8px;box-shadow:none;min-width:0;}
        .de-wb select {max-width:100%;min-height:36px;}
        .de-wb button:focus-visible,.de-wb input:focus-visible,.de-wb select:focus-visible {outline:2px solid var(--wb-gold);outline-offset:3px;}
        .de-wb .wb-primary {background:var(--wb-navy);color:#fff;border-radius:8px;font-weight:600;border:1px solid var(--wb-navy);transition:background .18s;}
        .de-wb .wb-primary:hover {background:#304056;}
        .de-wb button.rounded-full {border-radius:7px;}
        .de-wb .woerterbuch-scroll button {border-radius:6px;min-width:32px;width:auto;height:34px;padding:0 9px;font-weight:600;}
        .de-wb .woerterbuch-scroll button[aria-pressed="true"],.de-wb button.rounded-full[aria-pressed="true"] {background:var(--wb-navy);border-color:var(--wb-navy);}
        .de-wb .wb-grid {grid-template-columns:repeat(auto-fit,minmax(min(100%,290px),1fr));}
        .de-wb .wb-card {border:1px solid var(--wb-line);border-radius:9px;box-shadow:none;min-width:0;transition:border-color .18s,background .18s;}
        .de-wb .wb-card:hover {transform:none;box-shadow:none;border-color:var(--wb-gold);background:#fffdf9;}
        .de-wb .wb-word-button {text-align:start;overflow-wrap:anywhere;}
        .de-wb .wb-word {color:var(--wb-navy);overflow-wrap:anywhere;}
        .de-wb .wb-meaning {color:var(--wb-navy);font-weight:500;overflow-wrap:anywhere;}
        .de-wb .wb-card-footer {border-color:var(--wb-line);}
        .de-wb .wb-category {background:#f1ede4;color:var(--wb-ink-gold);border-radius:5px;font-weight:500;}
        .de-wb .wb-card button {min-height:36px;}
        .de-wb .wb-card button[title] {color:var(--wb-muted);border-radius:6px;}
        .de-wb .wb-card button[aria-pressed="true"] {color:var(--wb-ink-gold);background:#f3ecdd;}
        .de-wb .wb-card button[title]:hover {background:#f3ecdd;color:var(--wb-ink-gold);}
        .de-wb[dir="rtl"] .wb-card-footer svg {transform:rotate(180deg);}
        .de-wb .wb-overlay {z-index:11000;background:rgba(16,29,50,.62);}
        .de-wb .wb-practice-overlay {z-index:11001;}
        .de-wb .wb-dialog {border-radius:12px;box-shadow:0 14px 50px rgba(16,29,50,.18);overflow-wrap:anywhere;}
        .de-wb .wb-dialog-header {background:var(--wb-navy);border-bottom:2px solid var(--wb-gold);}
        .de-wb .wb-note {background:#f7f5f0;border-color:var(--wb-line);border-radius:8px;}
        .de-wb .wb-accent {color:var(--wb-ink-gold);}
        .de-wb .wb-body {color:var(--wb-navy);}
        @media(max-width:767px) {
          .de-wb .wb-stats {border-inline-start:0;border-top:1px solid #506074;padding-inline-start:0;padding-top:14px;}
          .de-wb .wb-hero {padding:24px 20px;}
          .de-wb .wb-dialog {max-height:90dvh;}
        }
        @media(max-width:639px) {.de-wb .wb-grid {grid-template-columns:minmax(0,1fr);} .de-wb .wb-dialog {border-radius:12px 12px 0 0;} .de-wb .wb-practice-overlay .wb-dialog {border-radius:12px;}}
        @media(prefers-reduced-motion:reduce) {.de-wb .wb-card,.de-wb .wb-primary {transition:none;}}

      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
        <div className="wb-hero relative overflow-hidden p-6 sm:p-9 text-white">
          
          
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D6B56D]/15 border border-[#D6B56D]/30 px-3 py-1.5 text-[#F2DDA9] text-xs font-bold mb-4">
                <GraduationCap size={15}/> {t.level}
              </div>
              <h1 className="wb-heading text-3xl sm:text-4xl" lang="de" dir="ltr">{t.title}</h1>
              <p className="mt-2 text-white/70 text-sm sm:text-base">{t.subtitle}</p>
              
            </div>
            <div className="wb-stats flex gap-3">
              <div className="wb-stat px-3 py-2 min-w-0 flex-1">
                <BookOpen className="text-[#D6B56D] mb-2" size={22}/>
                <div className="text-2xl font-bold">{vocabulary.length}</div>
                <div className="text-xs text-white/65">{t.allWords}</div>
              </div>
              <div className="wb-stat px-3 py-2 min-w-0 flex-1">
                <Heart className="text-[#D6B56D] mb-2" size={22}/>
                <div className="text-2xl font-bold">{favoriteCount}</div>
                <div className="text-xs text-white/65">{t.favorites}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3">
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL?'right-4':'left-4'}`} size={19}/>
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder={t.search}
              aria-label={t.search}
              className={`w-full h-14 rounded-2xl bg-white border border-slate-200 shadow-sm outline-none focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20 text-sm ${isRTL?'pr-12 pl-4':'pl-12 pr-4'}`}
            />
            {query && <button onClick={()=>setQuery('')} aria-label={t.close} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 ${isRTL?'left-4':'right-4'}`}><X size={17}/></button>}
          </div>
          <button
            onClick={openPractice}
            className="wb-primary h-14 px-5 flex items-center justify-center gap-2"
          >
            <Brain size={19}/> {t.practice}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button onClick={()=>setShowFavorites(false)} aria-pressed={!showFavorites} className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${!showFavorites?'bg-[#172B4D] text-white border-[#172B4D]':'bg-white text-slate-600 border-slate-200 hover:border-[#D6B56D]'}`}>
            <BookOpen size={15} className="inline mr-1.5"/>{t.all}
          </button>
          <button onClick={()=>setShowFavorites(true)} aria-pressed={showFavorites} className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${showFavorites?'bg-[#172B4D] text-white border-[#172B4D]':'bg-white text-slate-600 border-slate-200 hover:border-[#D6B56D]'}`}>
            <Heart size={15} className="inline mr-1.5"/>{t.favorites} ({favoriteCount})
          </button>
          <select aria-label={t.level} value={level} onChange={e=>setLevel(e.target.value)} className="rounded-full bg-white border border-slate-200 px-3 py-2 text-sm"><option value="Alle">{t.all} · A1–B2</option>{['A1','A2','B1','B2'].map(l=><option key={l}>{l}</option>)}<option value="unknown">{unknown}</option></select>
          <span className="text-xs text-slate-400 mx-1">{t.categories} :</span>
          <select aria-label={t.categories} value={category} onChange={e=>setCategory(e.target.value)} className="rounded-full bg-white border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#D6B56D]">
            <option value="Alle">{t.all}</option>
            {categories.map(c=><option key={c} value={c}>{categoryLabel(c)}</option>)}
          </select>
        </div>

        <section className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-sm flex items-center gap-2"><Languages size={17} className="text-[#B58D3D]"/>{t.alphabet}</h2>
            <span className="text-xs text-slate-500">{filtered.length} {t.result}</span>
          </div>
          <div className="woerterbuch-scroll flex flex-wrap gap-1.5 pb-3" dir="ltr">
            <button onClick={()=>setLetter('Alle')} aria-pressed={letter==='Alle'} className={`shrink-0 min-w-10 h-10 rounded-xl text-xs font-bold ${letter==='Alle'?'bg-[#172B4D] text-white':'bg-white border border-slate-200 text-slate-600 hover:border-[#D6B56D]'}`}>{t.all}</button>
            {alphabet.map(l=><button key={l} onClick={()=>setLetter(l)} aria-pressed={letter===l} className={`shrink-0 w-10 h-10 rounded-xl text-sm font-bold ${letter===l?'bg-[#172B4D] text-white':'bg-white border border-slate-200 text-slate-600 hover:border-[#D6B56D]'}`}>{l}</button>)}
          </div>
        </section>

        {filtered.length===0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center mt-3">
            <Search size={35} className="mx-auto text-slate-300 mb-3"/>
            <p className="font-semibold">{showFavorites && favorites.length===0 ? t.emptyFavorites : t.noResult}</p>
            <button onClick={()=>{setQuery('');setLetter('Alle');setCategory('Alle');setLevel('Alle');setShowFavorites(false)}} className="mt-3 text-sm text-[#9B762E] font-semibold">{t.allWords}</button>
          </div>
        ) : (
          <div className="wb-grid mt-3 grid gap-3">
            {filtered.slice(0,limit).map(w=>(
              <article key={w.id} className="wb-card bg-white border p-4">
                <div className="flex items-start justify-between gap-3">
                  <button onClick={()=>setSelected(w)} className="wb-word-button min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="wb-word text-xl" lang="de" dir="ltr">{w.de}</span>
                      {w.article && <span className="text-[10px] font-bold rounded-md px-2 py-1 bg-[#F4EBD8] text-[#8D6B2F]">{w.article}</span>}
                    </div>
                    <p className="wb-meaning mt-1 text-sm">{meaning(w)}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{w.level || unknown}</p>
                  </button>
                  <div className="flex items-center gap-1">
                    <button onClick={()=>speak(w.de)} title={t.listen} className="p-2 rounded-xl text-slate-400 hover:text-[#172B4D] hover:bg-slate-100"><Volume2 size={17}/></button>
                    <button onClick={()=>toggleFavorite(w.id)} aria-pressed={favorites.includes(w.id)} title={favorites.includes(w.id)?t.remove:t.favorite} className={`p-2 rounded-xl ${favorites.includes(w.id)?'text-amber-500 bg-amber-50':'text-slate-300 hover:text-amber-500 hover:bg-amber-50'}`}><Star size={17} fill={favorites.includes(w.id)?'currentColor':'none'}/></button>
                  </div>
                </div>
                <div className="wb-card-footer mt-3 pt-3 border-t flex items-center justify-between gap-2">
                  <span className="wb-category text-[11px] px-2 py-1">{categoryLabel(w.category)}</span>
                  <button onClick={()=>setSelected(w)} className="text-xs font-bold text-[#9B762E] hover:text-[#172B4D] flex items-center gap-1">
                    {t.detail} <ChevronRight size={14}/>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {filtered.length > limit && <button onClick={()=>setLimit(n=>n+60)} className="mt-5 w-full rounded-xl bg-[#172B4D] text-white py-3 font-bold">{more}</button>}
        <div className="mt-8 rounded-2xl bg-[#F0E8D8] border border-[#E6D8B8] p-4 sm:p-5 flex gap-3 items-start">
          <Sparkles className="text-[#9B762E] shrink-0 mt-0.5" size={20}/>
          <div>
            <p className="font-bold text-sm text-[#172B4D]">{t.grammar}</p>
            <p className="text-xs sm:text-sm text-[#5D523F] mt-1">{tip}</p>
          </div>
        </div>
      </div>

      {selected && (
        <div className="wb-overlay fixed inset-0 flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={()=>setSelected(null)}>
          <div onClick={e=>e.stopPropagation()} className="wb-dialog w-full sm:max-w-xl max-h-[90vh] overflow-y-auto bg-white">
            <div className="wb-dialog-header text-white p-6">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D6B56D] font-bold">{t.detail} · {selected.level || unknown}</span>
                  <h2 className="wb-heading text-3xl mt-2" lang="de" dir="ltr">{selected.de}</h2>
                  <p className="mt-2 text-white/75">{meaning(selected)}</p>
                </div>
                <button onClick={()=>setSelected(null)} aria-label={t.close} className="p-2 rounded-xl bg-white/10 hover:bg-white/20"><X size={20}/></button>
              </div>
              <div className="flex flex-wrap gap-2 mt-5">
                <button onClick={()=>speak(selected.de)} className="rounded-xl bg-[#D6B56D] text-[#172B4D] px-4 py-2.5 text-sm font-bold flex items-center gap-2"><Volume2 size={17}/>{t.listen}</button>
                <button onClick={()=>toggleFavorite(selected.id)} className="rounded-xl bg-white/10 text-white px-4 py-2.5 text-sm font-semibold flex items-center gap-2"><Star size={16} fill={favorites.includes(selected.id)?'currentColor':'none'}/>{favorites.includes(selected.id)?t.remove:t.favorite}</button>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              {selected.plural && <div className="rounded-xl bg-slate-50 border border-slate-100 p-4"><p className="text-xs text-slate-400 font-bold uppercase">{t.plural}</p><p className="mt-1 font-semibold">{selected.plural}</p></div>}
              {selected.forms && <div className="rounded-xl bg-[#F4EBD8] border border-[#E6D8B8] p-4"><p className="text-xs text-[#8D6B2F] font-bold uppercase">{t.forms}</p><p className="mt-1 font-semibold text-[#172B4D]">{selected.forms}</p></div>}
              {(selected.grammar || selected.explanation) && <div className="wb-note border p-4"><p className="text-xs wb-accent font-bold uppercase">{t.grammar}</p><p className="mt-1 text-sm wb-body">{selected.explanation?.[lang] || (lang==='fr'?selected.grammar:missing)}</p></div>}
              {selected.example && <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-400 font-bold uppercase">{t.example}</p>
                <p className="mt-2 text-lg font-semibold text-[#172B4D]">{selected.example}</p>
                <p className="mt-1 text-sm text-slate-500">{exampleTranslation(selected)}</p>
                <button onClick={()=>speak(selected.example)} className="mt-3 text-xs font-semibold text-[#9B762E] flex items-center gap-1.5"><Volume2 size={14}/>{t.listen}</button>
              </div>}
              <button onClick={()=>setSelected(null)} className="w-full rounded-xl bg-[#172B4D] hover:bg-[#233D66] text-white font-bold py-3">{t.close}</button>
            </div>
          </div>
        </div>
      )}

      {practice && (
        <div className="wb-overlay wb-practice-overlay fixed inset-0 flex items-center justify-center p-4">
          <div className="wb-dialog w-full max-w-lg bg-white max-h-[90vh] overflow-y-auto">
            <div className="wb-dialog-header text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold"><Brain className="text-[#D6B56D]"/>{t.practice}</div>
              <button onClick={closePractice} aria-label={t.close} className="p-2 rounded-xl hover:bg-white/10"><X size={19}/></button>
            </div>
            {!currentPractice ? (
              <div className="p-8 text-center">
                <Bookmark size={35} className="mx-auto text-[#D6B56D] mb-3"/>
                <p className="font-semibold">{t.noPractice}</p>
                <button onClick={closePractice} className="mt-5 bg-[#172B4D] text-white rounded-xl px-5 py-3 font-bold">{t.close}</button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <div className="flex justify-between text-xs text-slate-400 mb-3">
                  <span>{t.progress}</span>
                  <span>{practiceIndex+1} / {revisionWords.length}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-[#D6B56D] rounded-full transition-all" style={{width:`${((practiceIndex+1)/revisionWords.length)*100}%`}}/>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-[#9B762E] uppercase tracking-wider">{t.translation}</span>
                  <h3 className="wb-meaning text-2xl sm:text-3xl mt-3">{meaning(currentPractice)}</h3>
                  <p className="text-sm text-slate-400 mt-1">{currentPractice.level || unknown}</p>
                  {revealed ? (
                    <div className="mt-7 rounded-2xl bg-[#F4EBD8] border border-[#E6D8B8] p-5">
                      <p className="wb-word text-2xl" lang="de" dir="ltr">{currentPractice.de}</p>
                      {currentPractice.article && <p className="mt-1 text-sm text-[#8D6B2F]">{currentPractice.article} · {currentPractice.plural || ''}</p>}
                      <p className="mt-3 text-sm text-slate-600">{currentPractice.example}</p>
                    </div>
                  ) : (
                    <button onClick={()=>setRevealed(true)} className="mt-8 w-full rounded-xl bg-[#172B4D] text-white font-bold py-4">{t.reveal}</button>
                  )}
                </div>
                {revealed && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <button onClick={()=>{setKnown(old=>old.includes(currentPractice.id)?old:[...old,currentPractice.id]);setPracticeIndex(i=>(i+1)%revisionWords.length);setRevealed(false)}} className="rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 py-3 font-bold text-sm flex items-center justify-center gap-2"><CheckCircle2 size={17}/>{t.correct}</button>
                    <button onClick={()=>{setPracticeIndex(i=>(i+1)%revisionWords.length);setRevealed(false)}} className="rounded-xl bg-amber-50 text-amber-800 border border-amber-100 py-3 font-bold text-sm">{t.next}</button>
                  </div>
                )}
                <p className="text-center text-xs text-slate-400 mt-5">{known.length} / {revisionWords.length} {t.progress}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

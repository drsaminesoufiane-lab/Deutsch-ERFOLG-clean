'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LessonDefinition, LocalizedText } from '@/lib/grammar/types'

function textFor(value: LocalizedText, language: 'fr' | 'de' | 'ar' | 'en') {
  return value[language] || value.fr
}

// DE_BILINGUAL_LESSON_TITLES_V1
const knownTitles: Record<string, Record<'fr' | 'en' | 'ar', string>> = {
  "Was ist ein Personalpronomen?": {
    "fr": "Qu’est-ce qu’un pronom personnel ?",
    "en": "What is a personal pronoun?",
    "ar": "ما هو الضمير الشخصي؟"
  },
  "Personalpronomen im Nominativ": {
    "fr": "Les pronoms personnels au nominatif",
    "en": "Personal pronouns in the nominative",
    "ar": "الضمائر الشخصية في حالة الرفع (Nominativ)"
  },
  "Pronomen für Sachen": {
    "fr": "Les pronoms pour désigner les choses",
    "en": "Pronouns for things",
    "ar": "الضمائر التي تشير إلى الأشياء"
  },
  "Der, die, das → er, sie, es": {
    "fr": "Der, die, das : remplacement par er, sie, es",
    "en": "Der, die, das: replacing nouns with er, sie, es",
    "ar": "Der, die, das: التعويض بالضمائر er, sie, es"
  },
  "sie oder Sie?": {
    "fr": "sie ou Sie ?",
    "en": "sie or Sie?",
    "ar": "الفرق بين sie و Sie"
  },
  "Beispiele: Personen": {
    "fr": "Exemples : les personnes",
    "en": "Examples: people",
    "ar": "أمثلة: الأشخاص"
  },
  "Beispiele: Anrede und Plural": {
    "fr": "Exemples : formes d’adresse et pluriel",
    "en": "Examples: forms of address and plural",
    "ar": "أمثلة: المخاطبة والجمع"
  },
  "Beispiele: Sachen": {
    "fr": "Exemples : les choses",
    "en": "Examples: things",
    "ar": "أمثلة: الأشياء"
  },
  "Mini-Dialog: Im Deutschkurs": {
    "fr": "Mini-dialogue : au cours d’allemand",
    "en": "Mini-dialogue: in German class",
    "ar": "حوار قصير: في درس الألمانية"
  },
  "Typische Fehler": {
    "fr": "Erreurs fréquentes",
    "en": "Common mistakes",
    "ar": "أخطاء شائعة"
  },
  "Merke dir!": {
    "fr": "À retenir !",
    "en": "Remember!",
    "ar": "تذكّر!"
  },
  "Personalpronomen": {
    "fr": "Les pronoms personnels",
    "en": "Personal pronouns",
    "ar": "الضمائر الشخصية"
  }
}

function BilingualTitle({ value, language }: { value: LocalizedText; language: keyof LocalizedText }) {
  const german = value.de || value[language] || value.fr || ''
  const localized = language === 'de' ? '' : (value[language]?.trim() && value[language].trim() !== german.trim() ? value[language] : knownTitles[german]?.[language] || '')
  return <><span className="de-lesson-title-original" lang="de" dir="ltr">{german}</span>{localized && <span className="de-lesson-title-translation" lang={language} dir={language === 'ar' ? 'rtl' : 'ltr'}>{localized}</span>}</>
}

export default function LessonRenderer({ lesson, onStart }: { lesson: LessonDefinition; onStart?: () => void }) {
  const { language, isRTL } = useLanguage()

  const labels = {fr:['Sommaire','Section','Commencer le Meistertraining'],de:['Inhalt','Abschnitt','Meistertraining starten'],ar:['المحتويات','القسم','ابدأ التدريب الأساسي'],en:['Contents','Section','Start Meistertraining']}[language]
  return (
    <div className="studio-lesson-layout" dir={isRTL ? 'rtl' : 'ltr'}>
      <nav className="studio-lesson-nav" aria-label={labels[0]}><strong>{labels[0]}</strong>{lesson.blocks.map((block,i)=><a key={block.id} href={`#lesson-${block.id}`}><span>{String(i+1).padStart(2,'0')}</span>{'title' in block && block.title ? <span className="studio-lesson-nav-title"><BilingualTitle value={block.title} language={language} /></span> : `${labels[1]} ${i+1}`}</a>)}</nav>
    <article className="studio-lesson mx-auto w-full max-w-5xl space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="studio-lesson-hero">
        <p className="text-sm font-semibold tracking-wide text-blue-200">Lektion</p>
        <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl"><BilingualTitle value={lesson.title} language={language} /></h2>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{textFor(lesson.subtitle, language)}</p>
        <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-200">{language === 'fr' ? 'Objectif' : language === 'de' ? 'Lernziel' : language === 'ar' ? 'الهدف' : 'Objective'}</p>
          <p className="mt-1 leading-7">{textFor(lesson.objective, language)}</p>
        </div>
      </header>

      {lesson.blocks.map((block) => {
        if (block.type === 'paragraph') {
          return (
            <section key={block.id} id={`lesson-${block.id}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              {block.title && <h2 className="mb-3 text-xl font-bold text-slate-900"><BilingualTitle value={block.title} language={language} /></h2>}
              <p className="whitespace-pre-line leading-8 text-slate-700">{textFor(block.text, language)}</p>
            </section>
          )
        }

        if (block.type === 'table') {
          return (
            <section key={block.id} id={`lesson-${block.id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h2 className="p-5 text-xl font-bold text-slate-900"><BilingualTitle value={block.title} language={language} /></h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-start">
                  <thead className="bg-slate-100">
                    <tr>{block.headers.map((header, index) => <th key={index} className="p-3 text-start text-sm font-bold text-slate-700">{textFor(header, language)}</th>)}</tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.id} className="border-t border-slate-100">
                        {row.cells.map((cell, index) => <td key={index} className="p-3 text-slate-700" data-ending={/^[-–]?(e|st|t|en|est|et)$/.test(textFor(cell,language)) ? "true" : undefined}>{textFor(cell, language)}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )
        }

        if (block.type === 'examples') {
          return (
            <section key={block.id} id={`lesson-${block.id}`} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900"><BilingualTitle value={block.title} language={language} /></h2>
              <div className="grid gap-3 md:grid-cols-2">
                {block.items.map((item) => (
                  <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                    <p className="text-sm text-slate-500">{textFor(item.context, language)}</p>
                    <p className="mt-2 text-xl font-bold text-blue-800" dir="ltr">{item.german}</p>
                    <p className="mt-3 border-t border-slate-100 pt-3 text-sm leading-6 text-slate-700">{textFor(item.explanation, language)}</p>
                  </div>
                ))}
              </div>
            </section>
          )
        }

        if (block.type === 'image') {
          return (
            <figure key={block.id} id={`lesson-${block.id}`} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image src={block.src} alt={textFor(block.alt, language)} fill className="object-contain" sizes="(max-width: 768px) 100vw, 900px" />
              </div>
              {block.caption && <figcaption className="p-4 text-sm text-slate-600">{textFor(block.caption, language)}</figcaption>}
            </figure>
          )
        }

        return (
          <aside key={block.id} id={`lesson-${block.id}`} className={`rounded-2xl border p-5 ${block.tone === 'warning' ? 'border-amber-200 bg-amber-50' : block.tone === 'tip' ? 'border-emerald-200 bg-emerald-50' : 'border-blue-200 bg-blue-50'}`}>
            <h2 className="font-bold text-slate-900"><BilingualTitle value={block.title} language={language} /></h2>
            <p className="mt-2 leading-7 text-slate-700">{textFor(block.text, language)}</p>
          </aside>
        )
      })}
      {onStart && <button type="button" className="studio-lesson-start" onClick={onStart}>{labels[2]} {isRTL ? '←' : '→'}</button>}
    </article>
    <style jsx global>{`
      .studio-lesson-layout{display:grid;grid-template-columns:220px minmax(0,1fr);gap:24px;max-width:1200px;margin:24px auto;align-items:start;color:#192b43}
      .studio-lesson-nav{position:sticky;top:24px;background:#fffdf8;border:1px solid #e4dac7;border-radius:16px;padding:18px;display:grid;gap:8px;max-height:75vh;overflow:auto}
      .studio-lesson-nav strong{font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#806538;margin-bottom:8px}
      .studio-lesson-nav a{display:flex;gap:10px;padding:10px 6px;border-radius:8px;font-size:13px;line-height:1.5;color:#192b43;text-decoration:none}.studio-lesson-nav a:hover{background:#f0e8d8}.studio-lesson-nav a > span:first-child{color:#967744;font-weight:700}
      .studio-lesson-nav-title{min-width:0;overflow-wrap:anywhere}.studio-lesson{min-width:0}.studio-lesson-hero{background:linear-gradient(135deg,#192b43,#30445e);color:white;padding:32px;border-radius:20px}.studio-lesson-hero h2{font-family:Georgia,serif;color:white}.studio-lesson-hero .text-blue-200{color:#e5c990}
      .studio-lesson>section,.studio-lesson>figure,.studio-lesson>aside{scroll-margin-top:32px;border-radius:16px;border:1px solid #e4dac7;box-shadow:none}.studio-lesson>section{background:#fffdf8;padding:24px}.studio-lesson>section h2{font-family:Georgia,serif;color:#192b43;font-size:23px}.studio-lesson>section p{line-height:1.85}.studio-lesson table{background:white}.studio-lesson thead{background:#192b43}.studio-lesson th{color:white}.studio-lesson td,.studio-lesson th{padding:14px}.studio-lesson tbody tr:nth-child(even){background:#faf7ef}.studio-lesson td[data-ending=true]{color:#806538;font-weight:700}.studio-lesson .text-blue-800{color:#806538}.studio-lesson .bg-white{border-color:#e4dac7;box-shadow:none}.studio-lesson aside{border-inline-start:4px solid #b49760}.studio-lesson-start{display:block;width:100%;background:#192b43;color:white;padding:17px;border-radius:12px;font-weight:700;cursor:pointer}.studio-lesson-start:hover{background:#30445e}
      @media(max-width:900px){.studio-lesson-layout{grid-template-columns:minmax(0,1fr)}.studio-lesson-nav{position:static;max-height:220px}.studio-lesson-hero{padding:24px}.studio-lesson>section{padding:16px}}
      .studio-lesson .de-lesson-title-original,.studio-lesson-nav .de-lesson-title-original{display:block;text-align:start;overflow-wrap:anywhere}
      .studio-lesson .de-lesson-title-translation,.studio-lesson-nav .de-lesson-title-translation{display:block;font-family:var(--de-sans,Arial,sans-serif);font-size:.64em;font-weight:500;line-height:1.5;color:#59677a;margin-top:5px;text-align:start;overflow-wrap:anywhere}
      .studio-lesson-nav .de-lesson-title-translation{font-size:11px;margin-top:3px;color:#59677a}
      .studio-lesson-hero .de-lesson-title-translation{color:inherit;opacity:.86}
      .studio-lesson-layout[dir="rtl"] .de-lesson-title-translation{font-family:Tajawal,Arial,sans-serif}
    `}</style>
    </div>
  )
}

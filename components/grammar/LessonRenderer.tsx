'use client'

import Image from 'next/image'
import { useLanguage } from '@/contexts/LanguageContext'
import type { LessonDefinition, LocalizedText } from '@/lib/grammar/types'

function textFor(value: LocalizedText, language: 'fr' | 'de' | 'ar' | 'en') {
  return value[language] || value.fr
}

export default function LessonRenderer({ lesson }: { lesson: LessonDefinition }) {
  const { language, isRTL } = useLanguage()

  return (
    <article className="mx-auto w-full max-w-5xl space-y-6" dir={isRTL ? 'rtl' : 'ltr'}>
      <header className="rounded-3xl bg-slate-900 p-6 text-white sm:p-9">
        <p className="text-sm font-semibold tracking-wide text-blue-200">Lektion</p>
        <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl">{textFor(lesson.title, language)}</h1>
        <p className="mt-3 max-w-3xl text-base leading-7 text-slate-300">{textFor(lesson.subtitle, language)}</p>
        <div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-200">{language === 'fr' ? 'Objectif' : language === 'de' ? 'Lernziel' : language === 'ar' ? 'الهدف' : 'Objective'}</p>
          <p className="mt-1 leading-7">{textFor(lesson.objective, language)}</p>
        </div>
      </header>

      {lesson.blocks.map((block) => {
        if (block.type === 'paragraph') {
          return (
            <section key={block.id} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
              {block.title && <h2 className="mb-3 text-xl font-bold text-slate-900">{textFor(block.title, language)}</h2>}
              <p className="whitespace-pre-line leading-8 text-slate-700">{textFor(block.text, language)}</p>
            </section>
          )
        }

        if (block.type === 'table') {
          return (
            <section key={block.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <h2 className="p-5 text-xl font-bold text-slate-900">{textFor(block.title, language)}</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-start">
                  <thead className="bg-slate-100">
                    <tr>{block.headers.map((header, index) => <th key={index} className="p-3 text-start text-sm font-bold text-slate-700">{textFor(header, language)}</th>)}</tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row) => (
                      <tr key={row.id} className="border-t border-slate-100">
                        {row.cells.map((cell, index) => <td key={index} className="p-3 text-slate-700">{textFor(cell, language)}</td>)}
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
            <section key={block.id} className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900">{textFor(block.title, language)}</h2>
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
            <figure key={block.id} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <div className="relative aspect-[16/9] w-full">
                <Image src={block.src} alt={textFor(block.alt, language)} fill className="object-contain" sizes="(max-width: 768px) 100vw, 900px" />
              </div>
              {block.caption && <figcaption className="p-4 text-sm text-slate-600">{textFor(block.caption, language)}</figcaption>}
            </figure>
          )
        }

        return (
          <aside key={block.id} className={`rounded-2xl border p-5 ${block.tone === 'warning' ? 'border-amber-200 bg-amber-50' : block.tone === 'tip' ? 'border-emerald-200 bg-emerald-50' : 'border-blue-200 bg-blue-50'}`}>
            <h2 className="font-bold text-slate-900">{textFor(block.title, language)}</h2>
            <p className="mt-2 leading-7 text-slate-700">{textFor(block.text, language)}</p>
          </aside>
        )
      })}
    </article>
  )
}

'use client'

import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { usePathname } from 'next/navigation'
import { Check, Volume2, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

const eventName = 'deutsch-erfolg:perfect-score'
export function celebratePerfectScore(correct: number, total: number) {
  if (typeof window === 'undefined' || !Number.isFinite(total) || total <= 0 || correct !== total) return
  window.dispatchEvent(new Event(eventName))
}
const copy = {
  fr: { tag: 'PARFAIT !', title: 'Félicitations !', desc: 'Toutes tes réponses sont correctes.', mastered: 'Exercice maîtrisé', close: 'Voir ma correction', sound: 'Écouter le son de victoire' },
  de: { tag: 'PERFEKT!', title: 'Herzlichen Glückwunsch!', desc: 'Alle deine Antworten sind richtig.', mastered: 'Übung gemeistert', close: 'Zur Korrektur', sound: 'Erfolgston abspielen' },
  en: { tag: 'PERFECT!', title: 'Congratulations!', desc: 'All your answers are correct.', mastered: 'Exercise mastered', close: 'View my answers', sound: 'Play victory sound' },
  ar: { tag: 'رائع!', title: 'تهانينا!', desc: 'جميع إجاباتك صحيحة.', mastered: 'أتقنت التمرين', close: 'عرض التصحيح', sound: 'تشغيل صوت النجاح' },
} as const

function playSound() {
  try {
    const audio = new AudioContext()
    void audio.resume().then(() => {
      const now = audio.currentTime
      ;[523.25, 659.25, 783.99, 1046.5].forEach((frequency, index) => {
        const osc = audio.createOscillator(), gain = audio.createGain()
        const start = now + index * .105
        osc.type = 'sine'; osc.frequency.value = frequency
        gain.gain.setValueAtTime(0, start)
        gain.gain.linearRampToValueAtTime(.09, start + .025)
        gain.gain.exponentialRampToValueAtTime(.001, start + .22)
        osc.connect(gain); gain.connect(audio.destination)
        osc.start(start); osc.stop(start + .24)
      })
      window.setTimeout(() => { void audio.close().catch(() => {}) }, 850)
    }).catch(() => { void audio.close().catch(() => {}) })
  } catch { /* Audio is optional. */ }
}

const pieces = Array.from({ length: 44 }, (_, i) => ({
  left: `${(i * 37.73) % 100}%`, background: ['#d6b56d','#fff','#f4ebd8','#7392af'][i % 4],
  '--de-delay': `${(i % 9) * .065}s`, '--de-duration': `${2.1 + (i % 7) * .15}s`, '--de-drift': `${(i % 2 ? 1 : -1) * (20 + i % 6 * 13)}px`,
  width: `${5 + i % 4}px`, height: `${7 + i % 5}px`, borderRadius: i % 3 === 0 ? '50%' : '1px',
} as CSSProperties))

export default function ExerciseCelebration() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const [run, setRun] = useState(0)
  const [score, setScore] = useState(0)
  const dialog = useRef<HTMLDialogElement>(null)
  const labels = copy[language]
  useEffect(() => {
    const handle = () => setRun(n => n + 1)
    window.addEventListener(eventName, handle)
    return () => window.removeEventListener(eventName, handle)
  }, [])
  useEffect(() => { dialog.current?.close() }, [pathname])
  useEffect(() => {
    if (!run) return
    const el = dialog.current
    if (!el) return
    if (!el.open) el.showModal()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) { setScore(100); return }
    setScore(0)
    let frame = 0
    const start = performance.now()
    const animate = (now: number) => {
      const p = Math.min(1, (now - start) / 650)
      setScore(Math.round(100 * (1 - (1 - p) ** 3)))
      if (p < 1) frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [run])
  return (
    <dialog ref={dialog} className="de-celebration" dir={language === 'ar' ? 'rtl' : 'ltr'} lang={language} aria-labelledby="de-celebration-title">
      <div className="de-celebration-inner" key={run}>
        <div className="de-celebration-confetti" aria-hidden="true">{pieces.map((piece,i) => <i key={i} style={piece} />)}</div>
        <button type="button" className="de-celebration-dismiss" aria-label={labels.close} onClick={() => dialog.current?.close()}><X size={20}/></button>
        <div className="de-celebration-medal" aria-hidden="true"><Check size={42} strokeWidth={2.6}/></div>
        <p className="de-celebration-tag">{labels.tag}</p>
        <h2 id="de-celebration-title">{labels.title}</h2>
        <p className="de-celebration-score" aria-label="100/100" dir="ltr"><span aria-hidden="true">{score}<small>/100</small></span></p>
        <p className="de-celebration-description">{labels.desc}</p>
        <p className="de-celebration-mastered">{labels.mastered}</p>
        <div className="de-celebration-actions"><button type="button" onClick={() => dialog.current?.close()}>{labels.close}</button><button type="button" aria-label={labels.sound} title={labels.sound} onClick={playSound}><Volume2 size={19}/></button></div>
      </div>
      <style jsx global>{`
        dialog.de-celebration { position:fixed; inset:0; margin:auto; padding:0; border:1px solid #b49760; border-radius:14px; background:#192b43; color:#fff; width:min(440px,calc(100vw - 28px)); max-height:calc(100dvh - 28px); overflow:auto; font-family:'Plus Jakarta Sans',Arial,sans-serif !important; box-shadow:0 18px 64px #0005; }
        dialog.de-celebration::backdrop { background:rgba(12,23,39,.65); backdrop-filter:blur(3px); }
        .de-celebration[dir=rtl] { font-family:Tajawal,Arial,sans-serif !important; }
        .de-celebration-inner { position:relative; overflow:hidden; text-align:center; padding:32px 24px 24px; }
        .de-celebration-confetti { position:absolute; inset:0; overflow:hidden; pointer-events:none; }
        .de-celebration-confetti i { position:absolute; top:-18px; animation:de-celebration-fall var(--de-duration) var(--de-delay) linear both; }
        @keyframes de-celebration-fall { to { transform:translate(var(--de-drift),520px) rotate(650deg); opacity:0; } }
        .de-celebration-medal { position:relative; margin:0 auto 16px; width:84px; height:84px; display:grid; place-items:center; border-radius:50%; color:#192b43; background:#d6b56d; outline:1px solid #d6b56d; outline-offset:6px; animation:de-celebration-pop .55s cubic-bezier(.2,.8,.3,1.4) both; }
        @keyframes de-celebration-pop { from { transform:scale(.3); opacity:0; } to { transform:scale(1); opacity:1; } }
        .de-celebration .de-celebration-tag { color:#e3cb96; font-size:11px; letter-spacing:2px; font-weight:700; margin:16px 0 8px; }
        .de-celebration[dir=rtl] .de-celebration-tag { letter-spacing:0; }
        .de-celebration #de-celebration-title { font-family:Georgia,serif !important; font-size:clamp(24px,6vw,34px); line-height:1.2; font-weight:400; color:#fff; margin:0 0 12px; }
        .de-celebration[dir=rtl] #de-celebration-title { font-family:Tajawal,Arial,sans-serif !important; }
        .de-celebration .de-celebration-score { color:#e3cb96; font-family:Georgia,serif !important; font-size:60px; font-variant-numeric:tabular-nums; line-height:1.1; margin:10px 0; }
        .de-celebration-score small { font-size:26px; }
        .de-celebration .de-celebration-description { color:#d5dce6; font-size:14px; line-height:1.5; margin:12px 0; }
        .de-celebration .de-celebration-mastered { display:inline-block; color:#e3cb96; border:1px solid #b49760; border-radius:6px; padding:8px 15px; font-size:13px; margin:4px 0 18px; }
        .de-celebration-actions { display:flex; justify-content:center; gap:8px; }
        .de-celebration-actions button { display:inline-flex; align-items:center; justify-content:center; padding:12px 16px; border:1px solid #d6b56d; border-radius:7px; background:#d6b56d; color:#192b43; font:inherit; font-size:13px; font-weight:700; cursor:pointer; }
        .de-celebration-actions button:last-child,.de-celebration-dismiss { background:transparent; color:#e3cb96; }
        .de-celebration-dismiss { position:absolute; top:10px; inset-inline-end:10px; padding:6px; border:0; cursor:pointer; z-index:1; }
        .de-celebration button:focus-visible { outline:2px solid white; outline-offset:3px; }
        @media(prefers-reduced-motion:reduce) { .de-celebration-confetti { display:none; } .de-celebration-medal { animation:none; } }
      `}</style>
    </dialog>
  )
}

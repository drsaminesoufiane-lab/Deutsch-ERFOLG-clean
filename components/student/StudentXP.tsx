'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Zap, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { supabase } from '@/lib/supabase'

type PersonalXP = { xp: number; completed: number }
const labels = {
  fr: { title: 'Mes points', league: 'Voir le classement', total: 'XP cumulés' },
  de: { title: 'Meine Punkte', league: 'Rangliste ansehen', total: 'XP insgesamt' },
  en: { title: 'My points', league: 'View leaderboard', total: 'Total XP' },
  ar: { title: 'نقاطي', league: 'عرض الترتيب', total: 'مجموع نقاط XP' },
}

export default function StudentXP() {
  const { language } = useLanguage()
  const pathname = usePathname()
  const t = labels[language as keyof typeof labels] || labels.de
  const [value, setValue] = useState<PersonalXP | null>(null)
  useEffect(() => {
    let active = true
    let seq = 0
    async function load() {
      const version = ++seq
      try {
        const { data, error } = await supabase.rpc('league_get_my_xp')
        if (!active || version !== seq) return
        const result = data as PersonalXP | null
        setValue(!error && result && Number.isFinite(result.xp) ? result : null)
      } catch { if (active && version === seq) setValue(null) }
    }
    setValue(null)
    void load()
    const refresh = () => { if (document.visibilityState === 'visible') void load() }
    const timer = window.setInterval(refresh, 30000)
    document.addEventListener('visibilitychange', refresh)
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (!active) return
      if (event === 'SIGNED_OUT' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        ++seq; setValue(null)
        if (event !== 'SIGNED_OUT') window.setTimeout(() => { if (active) void load() }, 0)
      }
    })
    return () => { active = false; ++seq; subscription.unsubscribe(); window.clearInterval(timer); document.removeEventListener('visibilitychange', refresh) }
  }, [pathname])
  if (!value) return null
  return (
    <Link href="/espace-etudiant/classement" className="de-personal-xp" aria-label={t.league} title={t.league}>
      <span className="de-league-xp-icon"><Zap size={20} strokeWidth={1.8}/></span>
      <span className="de-league-xp-info"><small>{t.title}</small><strong>{value.xp.toLocaleString(language)} <span>XP</span></strong></span>
      <ChevronRight size={16} className="de-league-xp-arrow" aria-hidden="true"/>
      <style jsx global>{`
        .de-personal-xp { display:flex; align-items:center; gap:10px; flex-shrink:0; padding:10px 11px; margin:0 0 18px; border:1px solid rgba(227,203,150,.35); border-radius:8px; text-decoration:none; background:rgba(227,203,150,.07); color:#e3cb96; }
        .de-personal-xp:hover { background:rgba(227,203,150,.13); }
        .de-league-xp-icon { display:grid; place-items:center; width:34px; height:34px; border-radius:8px; background:rgba(227,203,150,.13); flex-shrink:0; }
        .de-league-xp-info { display:flex; flex-direction:column; gap:3px; min-width:0; flex:1; }
        .de-league-xp-info small { color:#c3ceda; font-size:10px; line-height:1.3; }
        .de-league-xp-info strong { color:#e3cb96; font-size:17px; font-weight:700; line-height:1.3; font-variant-numeric:tabular-nums; }
        .de-league-xp-info strong span { font-size:11px; }
        .de-personal-xp .de-league-xp-arrow { flex-shrink:0; }
        [dir="rtl"] .de-personal-xp .de-league-xp-arrow { transform:rotate(180deg); }
      `}</style>
    </Link>
  )
}

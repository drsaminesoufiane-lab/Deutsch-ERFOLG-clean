'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { GraduationCap, UserRound, Crown } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { useLanguage } from '@/contexts/LanguageContext'

type Lang = 'fr' | 'de' | 'en' | 'ar'
type Labels = Record<Lang, string>
type Profile = { name: string; level: string; paid: boolean }
const labels = (fr:string, de:string, en:string, ar:string):Labels => ({fr,de,en,ar})
const sections: Record<string, Labels> = {
  '': labels('Tableau de bord','Übersicht','Dashboard','لوحة التحكم'),
  'apprentissage': labels('Apprentissage','Lernen','Learning','التعلم'),
  'allemand-debutant': labels('Allemand débutant','Deutsch für Anfänger','German for beginners','الألمانية للمبتدئين'),
  'grammaire': labels('Grammaire allemande','Deutsche Grammatik','German grammar','قواعد اللغة الألمانية'),
  'woerterbuch-b1': labels('Wörterbuch A1–B2','Wörterbuch A1–B2','Wörterbuch A1–B2','Wörterbuch A1–B2'),
  'examens': labels('Examens','Prüfungen','Exams','الامتحانات'),
  'resultats': labels('Résultats','Ergebnisse','Results','النتائج'),
  'documents': labels('Documents','Dokumente','Documents','الوثائق'),
  'parametres': labels('Paramètres','Einstellungen','Settings','الإعدادات'),
  'classement': labels('Classement','Rangliste','Leaderboard','الترتيب'),
  'pro': labels('Abonnement PRO','PRO-Abonnement','PRO subscription','اشتراك PRO'),
  'cours': labels('Cours','Kurse','Courses','الدروس'),
}
const skills: Record<string,string> = {lesen:'Lesen',hoeren:'Hören',horen:'Hören',schreiben:'Schreiben',sprechen:'Sprechen',sprachbausteine:'Sprachbausteine'}

export default function StudentGlobalHeader() {
  const path = usePathname() || '/espace-etudiant'
  const { language, t } = useLanguage()
  const lang: Lang = language || 'de'
  const [profile,setProfile] = useState<Profile|null>(null)
  useEffect(() => {
    let active = true
    let generation = 0
    async function load() {
      const request = ++generation
      try {
        const { data: { user }, error: authError } = await supabase.auth.getUser()
        if (!active || request !== generation) return
        if (authError || !user) { setProfile(null); return }
        const { data, error } = await supabase.from('profiles').select('full_name, level, is_pro, pro_type, pro_until').eq('id',user.id).maybeSingle()
        if (!active || request !== generation) return
        if (error) console.error('Student header profile:',error.message)
        const level = String(data?.level || user.user_metadata?.niveau || '').trim().toUpperCase().replace(/^TELC\s*/, '')
        setProfile({name: data?.full_name || user.user_metadata?.full_name || user.email?.split('@')[0] || '', level: ['A1','A2','B1','B2'].includes(level) ? level : '', paid: !error && data?.is_pro === true && data?.pro_type === 'paid' && !!data.pro_until && new Date(data.pro_until).getTime() > Date.now()})
      } catch { if (active && request === generation) setProfile(null) }
    }
    void load()
    const { data: { subscription } } = supabase.auth.onAuthStateChange(event => {
      if (event === 'SIGNED_OUT') { ++generation; setProfile(null) }
      else if (event === 'SIGNED_IN' || event === 'USER_UPDATED' || event === 'TOKEN_REFRESHED') {
        window.setTimeout(() => { if (active) void load() },0)
      }
    })
    return () => { active = false; subscription.unsubscribe() }
  },[path])
  const parts = path.split('/').filter(Boolean).slice(1)
  const key = parts[0] === 'apprentissage' ? (parts[1] || 'apprentissage') : (parts[0] || '')
  let title = key === '' ? t.header.dashboard : (sections[key] || sections.apprentissage)[lang]
  if (key === 'examens') {
    const level = parts.find(p => /^[ab][12]$/i.test(p))
    const skill = parts.find(p => skills[p])
    title += (level ? ` · ${level.toUpperCase()}` : '') + (skill ? ` · ${skills[skill]}` : '')
  }
  return (
    <header className="de-shared-student-header" dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <div className="de-shared-title">
        <span className="de-shared-mark"><GraduationCap size={19} aria-hidden="true" /></span>
        <div><span className="de-shared-brand" dir="ltr">DEUTSCH ERFOLG</span><h2>{title}</h2></div>
      </div>
      {profile && <div className="de-shared-profile">
        <span className="de-shared-avatar"><UserRound size={20} aria-hidden="true" /></span>
        <div className="de-shared-info">
          <strong dir="auto">{profile.name || t.dashboard.studentFallback}</strong>
          <div className="de-shared-meta"><span>{t.header.student}</span>{profile.level && <b dir="ltr">{profile.level}</b>}</div>
          {profile.paid && <span className="de-shared-pro"><Crown size={17} aria-hidden="true" />{labels('Version PRO','PRO-Version','PRO version','نسخة PRO')[lang]}</span>}
        </div>
      </div>}
      <style jsx global>{`
        /* DE_SHARED_STUDENT_HEADER_V1 */
        .student-global-content .student-header:has(.header-title):has(.student-header-profile) { display:none !important; }
        .student-global-layout .de-shared-student-header { box-sizing:border-box; position:sticky; top:0; z-index:25; display:flex; align-items:center; justify-content:space-between; gap:16px; min-height:76px; padding:12px 5%; background:rgba(255,255,255,.96); border-bottom:1px solid #e3ded3; backdrop-filter:blur(12px); color:#192b43; font-family:var(--de-sans,'Plus Jakarta Sans',Arial,sans-serif); }
        .de-shared-student-header[dir="rtl"] { font-family:'Tajawal',Arial,sans-serif; }
        .de-shared-student-header .de-shared-title { display:flex; align-items:center; gap:12px; min-width:0; }
        .de-shared-student-header .de-shared-mark,.de-shared-student-header .de-shared-avatar { display:grid; place-items:center; flex-shrink:0; width:38px; height:38px; border-radius:8px; background:#f4ebd8; color:#9b7834; }
        .de-shared-student-header .de-shared-avatar { border-radius:50%; width:36px; height:36px; }
        .de-shared-student-header .de-shared-brand { display:block; color:#806337; font-size:9px; font-weight:700; letter-spacing:1.6px; line-height:1.4; }
        .de-shared-student-header .de-shared-title h2 { margin:3px 0 0; color:#192b43; font-size:17px; font-weight:650; line-height:1.3; overflow-wrap:anywhere; }
        .de-shared-student-header .de-shared-profile { display:flex; align-items:center; gap:12px; min-width:0; padding:8px 14px; border:1px solid #e3ded3; background:#fff; border-radius:9px; }
        .de-shared-student-header .de-shared-info { display:flex; align-items:center; flex-wrap:wrap; gap:12px; min-width:0; }
        .de-shared-student-header .de-shared-info > strong { color:#192b43; font-size:13px; font-weight:700; line-height:1.4; overflow-wrap:anywhere; }
        .de-shared-student-header .de-shared-meta { display:flex; align-items:center; gap:9px; padding-inline-start:12px; border-inline-start:1px solid #e3ded3; font-size:12px; color:#626a75; }
        .de-shared-student-header .de-shared-meta b { padding:4px 8px; min-width:30px; text-align:center; border:1px solid #e3ded3; border-radius:6px; background:#f7f5f0; color:#192b43; font-size:12px; }
        .de-shared-student-header .de-shared-pro { display:flex; align-items:center; gap:6px; padding-inline-start:12px; border-inline-start:1px solid #e3ded3; color:#936a23; font-size:12px; white-space:nowrap; }
        @media(max-width:1000px) { .de-shared-student-header .de-shared-info { gap:6px; } .de-shared-student-header .de-shared-meta,.de-shared-student-header .de-shared-pro { padding-inline-start:0; border:0; } }
        @media(max-width:700px) { .student-global-layout .de-shared-student-header { position:relative; padding:14px 16px; gap:10px; flex-wrap:wrap; } .de-shared-student-header .de-shared-title { padding-inline-start:44px; } .de-shared-student-header .de-shared-profile { max-width:100%; padding:7px 10px; } .de-shared-student-header .de-shared-title h2 { font-size:16px; } }
      `}</style>
    </header>
  )
}

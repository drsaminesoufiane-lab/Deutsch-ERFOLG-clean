
'use client'

import LanguageSwitcher from '@/components/student/LanguageSwitcher'
import StudentSidebar from '@/components/student/StudentSidebar'
import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { LanguageProvider } from '@/contexts/LanguageContext'

export default function StudentLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    let actif = true
    let verificationEnCours = false

    async function verifierAppareil() {
      if (verificationEnCours || !actif) return

      verificationEnCours = true

      try {
        const deviceId = localStorage.getItem(
          'deutsch_erfolg_device_id'
        )

        if (!deviceId) {
          await supabase.auth.signOut({ scope: 'local' })
          router.replace('/connexion')
          return
        }

        const { data: { user } } = await supabase.auth.getUser()

        if (!user) {
          router.replace('/connexion')
          return
        }

        const { data, error } = await supabase.rpc(
          'is_current_student_device',
          {
            p_device_id: deviceId,
          }
        )

        if (error) {
          console.error(
            'Erreur de vérification de l’appareil :',
            error.message
          )
          return
        }

        if (data === false && actif) {
          actif = false

          await supabase.auth.signOut({ scope: 'local' })

          localStorage.removeItem('deutsch_erfolg_device_id')

          document.cookie =
            'deutsch_erfolg_device_id=; Path=/; Max-Age=0; SameSite=Lax'

          router.replace('/connexion')
          router.refresh()
        }
      } catch (error) {
        console.error('Erreur de contrôle de session :', error)
      } finally {
        verificationEnCours = false
      }
    }

    verifierAppareil()

    const interval = window.setInterval(
      verifierAppareil,
      5000
    )

    return () => {
      actif = false
      window.clearInterval(interval)
    }
  }, [router])

  return (
    <LanguageProvider>
      <div className="student-global-layout">
        <StudentSidebar />

        <div className="student-global-content">
          {children}
        </div>
      </div>

      <div className="student-language-global">
        <LanguageSwitcher />
      </div>

      <style jsx global>{`
        .student-global-layout {
          min-height: 100vh;
        }

        .student-global-content {
          min-height: 100vh;
          margin-left: 255px;
        }

        [dir="rtl"] .student-global-content {
          margin-left: 0;
          margin-right: 255px;
        }

        @media (max-width: 700px) {
          .student-global-content {
            margin-left: 0;
            margin-right: 0;
          }

          [dir="rtl"] .student-global-content {
            margin-left: 0;
            margin-right: 0;
          }
        }
      `}</style>
    </LanguageProvider>
  )
}

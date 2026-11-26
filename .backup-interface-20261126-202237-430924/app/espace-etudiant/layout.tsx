
'use client'

import LanguageSwitcher from '@/components/student/LanguageSwitcher'
import StudentSidebar from '@/components/student/StudentSidebar'
import { useEffect, useState, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import Link from 'next/link'
import { Crown } from 'lucide-react'
import { supabase } from '@/lib/supabase'
import { parseAccess } from '@/lib/adminAccess'

type ProProfile = {
  is_pro: boolean | null
  pro_type: string | null
  pro_until: string | null
}

type Language = 'fr' | 'de' | 'en' | 'ar'

export default function StudentLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [showProCrown, setShowProCrown] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [language, setLanguage] = useState<Language>('de')

  // Lire et suivre la langue choisie
  useEffect(() => {
    function updateLanguage() {
      const savedLanguage = localStorage.getItem(
        'deutsch_erfolg_language'
      )

      if (
        savedLanguage === 'fr' ||
        savedLanguage === 'de' ||
        savedLanguage === 'en' ||
        savedLanguage === 'ar'
      ) {
        setLanguage(savedLanguage)
      }
    }

    updateLanguage()

    window.addEventListener('storage', updateLanguage)

    const interval = window.setInterval(updateLanguage, 1000)

    return () => {
      window.removeEventListener('storage', updateLanguage)
      window.clearInterval(interval)
    }
  }, [])

  const proTooltip =
    language === 'fr'
      ? 'Passer Pro'
      : language === 'de'
        ? 'Pro werden'
        : language === 'en'
          ? 'Go Pro'
          : 'الترقية إلى Pro'

  // SUIVI AUTOMATIQUE DE LA PRÉSENCE DE L'ÉTUDIANT
  useEffect(() => {
    let actif = true
    let userId: string | null = null
    let presenceEnCours = false

    const INTERVALLE_PRESENCE = 30000

    async function envoyerPresence() {
      if (
        !actif ||
        !userId ||
        presenceEnCours ||
        document.visibilityState !== 'visible'
      ) {
        return
      }

      presenceEnCours = true

      try {
        const { error } = await supabase
          .from('student_presence')
          .upsert(
            {
              user_id: userId,
              last_seen_at: new Date().toISOString(),
            },
            {
              onConflict: 'user_id',
            }
          )

        if (error) {
          console.error(
            'Erreur enregistrement présence :',
            error.message
          )
        }
      } catch (error) {
        console.error(
          'Erreur suivi présence étudiant :',
          error
        )
      } finally {
        presenceEnCours = false
      }
    }

    async function initialiserPresence() {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser()

        if (!actif) return

        if (error) {
          console.error(
            'Erreur récupération utilisateur pour présence :',
            error.message
          )
          return
        }

        if (user) {
          userId = user.id
          envoyerPresence()
        }
      } catch (error) {
        console.error(
          'Erreur initialisation présence :',
          error
        )
      }
    }

    // Suivre également les changements de session
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (!actif) return

        if (
          event === 'SIGNED_IN' ||
          event === 'TOKEN_REFRESHED' ||
          event === 'USER_UPDATED'
        ) {
          userId = session?.user?.id ?? null

          if (userId) {
            setTimeout(() => {
              if (actif) envoyerPresence()
            }, 0)
          }
        }

        if (event === 'SIGNED_OUT') {
          setIsAdmin(false)
          userId = null
        }
      }
    )

    function handleVisibilityChange() {
      if (document.visibilityState === 'visible') {
        envoyerPresence()
      }
    }

    document.addEventListener(
      'visibilitychange',
      handleVisibilityChange
    )

    initialiserPresence()

    const interval = window.setInterval(
      envoyerPresence,
      INTERVALLE_PRESENCE
    )

    return () => {
      actif = false
      userId = null

      window.clearInterval(interval)

      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )

      subscription.unsubscribe()
    }
  }, [])

  // Vérifier si l'étudiant possède un abonnement PRO payant actif
  useEffect(() => {
    let actif = true

    async function verifierAbonnement() {
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser()

        if (authError || !user) {
          if (actif) setShowProCrown(false)
          return
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('is_pro, pro_type, pro_until')
          .eq('id', user.id)
          .maybeSingle()

        if (error) {
          console.error('Erreur vérification PRO :', error)
          if (actif) setShowProCrown(false)
          return
        }

        const profile = data as ProProfile | null

        const abonnementPayantActif =
          profile?.is_pro === true &&
          profile?.pro_type === 'paid' &&
          !!profile?.pro_until &&
          new Date(profile.pro_until).getTime() > Date.now()

        if (actif) {
          setShowProCrown(!abonnementPayantActif)
        }
      } catch (error) {
        console.error('Erreur vérification abonnement :', error)
        if (actif) setShowProCrown(false)
      }
    }

    verifierAbonnement()

    const interval = window.setInterval(
      verifierAbonnement,
      60000
    )

    return () => {
      actif = false
      window.clearInterval(interval)
    }
  }, [])

  // Vérification de l'appareil autorisé
  useEffect(() => {
    let actif = true
    let verificationEnCours = false
    let refusConsecutifs = 0

    const INTERVALLE_VERIFICATION = 15000
    const REFUS_MAX = 2

    const COOKIE_NAME = 'deutsch_erfolg_device_id'
    const STORAGE_NAME = 'deutsch_erfolg_device_id'

    function lireCookieDeviceId(): string | null {
      const cookie = document.cookie
        .split('; ')
        .find((item) => item.startsWith(`${COOKIE_NAME}=`))

      if (!cookie) return null

      try {
        return decodeURIComponent(
          cookie.substring(COOKIE_NAME.length + 1)
        )
      } catch {
        return null
      }
    }

    function definirCookieDeviceId(deviceId: string) {
      const secure =
        window.location.protocol === 'https:'
          ? '; Secure'
          : ''

      document.cookie =
        `${COOKIE_NAME}=${encodeURIComponent(deviceId)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
    }

    function obtenirDeviceId(): string | null {
      const cookieId = lireCookieDeviceId()

      const localId = localStorage.getItem(
        STORAGE_NAME
      )

      if (cookieId) {
        if (localId !== cookieId) {
          localStorage.setItem(STORAGE_NAME, cookieId)
        }

        return cookieId
      }

      if (localId) {
        definirCookieDeviceId(localId)
        return localId
      }

      return null
    }

    async function verifierAppareil() {
      if (verificationEnCours || !actif) return

      verificationEnCours = true

      try {
        const {
          data: authData,
          error: authError,
        } = await supabase.auth.getUser()

        if (!actif) return

        if (authError) {
          setIsAdmin(false)
          console.error(
            'Erreur de vérification de session :',
            authError.message
          )

          refusConsecutifs = 0
          return
        }

        if (!authData.user) {
          setIsAdmin(false)
          actif = false
          router.replace('/connexion')
          return
        }

        // Même vérification des droits que dans l'administration.
        // Seul un administrateur confirmé est dispensé du verrou étudiant.
        let adminAutorise = false
        try {
          const { data: adminData, error: adminError } = await supabase.rpc('admin_my_access')
          adminAutorise = !adminError && !!parseAccess(adminData)
        } catch {
          adminAutorise = false
        }
        if (!actif) return
        setIsAdmin(adminAutorise)
        if (adminAutorise) {
          refusConsecutifs = 0
          return
        }

        const deviceId = obtenirDeviceId()
        if (!deviceId) {
          actif = false
          router.replace('/connexion')
          return
        }

        const {
          data,
          error,
        } = await supabase.rpc(
          'is_current_student_device',
          {
            p_device_id: deviceId,
          }
        )

        if (!actif) return

        if (error) {
          console.error(
            'Erreur de vérification de l’appareil :',
            error.message
          )

          refusConsecutifs = 0
          return
        }

        if (data === true) {
          refusConsecutifs = 0
          return
        }

        if (data !== false) {
          refusConsecutifs = 0
          return
        }

        const deviceIdActuel = obtenirDeviceId()

        if (deviceIdActuel !== deviceId) {
          refusConsecutifs = 0
          return
        }

        refusConsecutifs += 1

        console.warn(
          `Appareil non autorisé : vérification ${refusConsecutifs}/${REFUS_MAX}`
        )

        if (refusConsecutifs < REFUS_MAX) {
          return
        }

        actif = false

        localStorage.removeItem(STORAGE_NAME)

        document.cookie =
          `${COOKIE_NAME}=; Path=/; Max-Age=0; SameSite=Lax`

        await supabase.auth.signOut({
          scope: 'local',
        })

        router.replace('/connexion')
        router.refresh()

      } catch (error) {
        console.error(
          'Erreur de contrôle de session :',
          error
        )

        refusConsecutifs = 0

      } finally {
        verificationEnCours = false
      }
    }

    verifierAppareil()

    const interval = window.setInterval(
      verifierAppareil,
      INTERVALLE_VERIFICATION
    )

    return () => {
      actif = false
      window.clearInterval(interval)
    }
  }, [router])

  const isProPage = pathname === '/espace-etudiant/pro'

  return (
    <>
      <div className="student-global-layout">
        <StudentSidebar isAdmin={isAdmin} />

        <div className="student-global-content">
          {children}
        </div>
      </div>

      <div className="student-language-global">
        <LanguageSwitcher />
      </div>

      {showProCrown && !isProPage && (
        <Link
          href="/espace-etudiant/pro"
          className="floating-pro-crown"
          aria-label={proTooltip}
        >
          <span className="crown-shine-effect" />

          <Crown size={32} strokeWidth={2.1} />

          <span className="crown-tooltip">
            {proTooltip}
          </span>
        </Link>
      )}

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

        .floating-pro-crown {
          position: fixed;
          left: calc(255px + (100% - 255px) / 2);
          top: 20px;
          transform: translateX(-50%);
          z-index: 10000;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          isolation: isolate;

          color: #a8792e;

          background: linear-gradient(
            145deg,
            #fff8df,
            #f2d28b,
            #d6a94e
          );

          border: 1px solid rgba(184, 137, 62, 0.7);

          box-shadow:
            0 0 9px rgba(218, 177, 91, 0.5),
            0 0 18px rgba(218, 177, 91, 0.3);

          text-decoration: none;

          animation: pro-crown-glow 3s ease-in-out infinite;

          transition: transform 0.2s ease;
          overflow: visible;
        }

        [dir="rtl"] .floating-pro-crown {
          left: auto;
          right: calc(255px + (100% - 255px) / 2);
          transform: translateX(50%);
        }

        .floating-pro-crown:hover {
          transform: translateX(-50%) scale(1.12);
        }

        [dir="rtl"] .floating-pro-crown:hover {
          transform: translateX(50%) scale(1.12);
        }

        .crown-shine-effect {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }

        .crown-shine-effect::after {
          content: "";
          position: absolute;
          top: -30%;
          left: -70%;
          width: 35%;
          height: 160%;

          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.95),
            transparent
          );

          transform: rotate(35deg);
          animation: crown-shine 2.5s ease-in-out infinite;
        }

        .floating-pro-crown > svg {
          position: relative;
          z-index: 2;
          width: 32px;
          height: 32px;
        }

        .crown-tooltip {
          position: absolute;
          left: 62px;
          top: 50%;
          transform: translateY(-50%);

          background: #252525;
          color: white;

          padding: 8px 13px;
          border-radius: 8px;

          font-size: 13px;
          font-weight: 600;
          white-space: nowrap;

          opacity: 0;
          visibility: hidden;

          transition: all 0.2s ease;
          pointer-events: none;
          z-index: 5;
        }

        .floating-pro-crown:hover .crown-tooltip {
          opacity: 1;
          visibility: visible;
        }

        @keyframes crown-shine {
          0% {
            left: -70%;
          }
          70%, 100% {
            left: 150%;
          }
        }

        @keyframes pro-crown-glow {
          0%, 100% {
            box-shadow:
              0 0 9px rgba(218, 177, 91, 0.5),
              0 0 18px rgba(218, 177, 91, 0.3);
          }
          50% {
            box-shadow:
              0 0 13px rgba(218, 177, 91, 0.8),
              0 0 25px rgba(218, 177, 91, 0.5);
          }
        }
      `}</style>
    </>
  )
}


'use client'

import ExerciseCelebration from '@/components/student/ExerciseCelebration'

import StudentGlobalHeader from '@/components/student/StudentGlobalHeader'

import FloatingPageTools, { SubscriptionContext, type SubscriptionStatus } from '@/components/student/FloatingPageTools'
import StudentSidebar from '@/components/student/StudentSidebar'
import { useEffect, useState, type ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { parseAccess } from '@/lib/adminAccess'

type ProProfile = {
  is_pro: boolean | null
  pro_type: string | null
  pro_until: string | null
}

export default function StudentLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()
  const pathname = usePathname()

  const [subscriptionStatus, setSubscriptionStatus] = useState<SubscriptionStatus>('unknown')
  const [isAdmin, setIsAdmin] = useState(false)

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

    let abonnementVersion = 0
    async function verifierAbonnement() {
      const version = ++abonnementVersion
      try {
        const {
          data: { user },
          error: authError,
        } = await supabase.auth.getUser()

        if (authError || !user) {
          if (actif && version === abonnementVersion) setSubscriptionStatus('unknown')
          return
        }

        const { data, error } = await supabase
          .from('profiles')
          .select('is_pro, pro_type, pro_until')
          .eq('id', user.id)
          .maybeSingle()

        if (error) {
          console.error('Erreur vérification PRO :', error)
          if (actif && version === abonnementVersion) setSubscriptionStatus('unknown')
          return
        }

        const profile = data as ProProfile | null

        const abonnementActif = profile?.is_pro === true &&
          !!profile.pro_until && new Date(profile.pro_until).getTime() > Date.now()
        if (actif && version === abonnementVersion) {
          setSubscriptionStatus(!profile ? 'unknown' : !abonnementActif ? 'free' : profile.pro_type === 'paid' ? 'paid' : profile.pro_type === 'trial' ? 'trial' : 'unknown')
        }
      } catch (error) {
        console.error('Erreur vérification abonnement :', error)
        if (actif && version === abonnementVersion) setSubscriptionStatus('unknown')
      }
    }

    void verifierAbonnement()
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_OUT' || event === 'SIGNED_IN' || event === 'USER_UPDATED') {
        ++abonnementVersion
        setSubscriptionStatus('unknown')
        if (event !== 'SIGNED_OUT') window.setTimeout(() => { if (actif) void verifierAbonnement() }, 0)
      }
    })
    const interval = window.setInterval(
      verifierAbonnement,
      60000
    )

    return () => {
      actif = false
      window.clearInterval(interval)
      subscription.unsubscribe()
    }
  }, [pathname])

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

        <SubscriptionContext.Provider value={subscriptionStatus}>
          <div className={`student-global-content ${!isProPage && (subscriptionStatus === 'trial' || subscriptionStatus === 'free') ? 'de-has-offer' : ''}`}><StudentGlobalHeader />
          <ExerciseCelebration />
          {children}</div>
          <FloatingPageTools showOffer={!isProPage} />
        </SubscriptionContext.Provider>
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

      `}</style>
    </>
  )
}

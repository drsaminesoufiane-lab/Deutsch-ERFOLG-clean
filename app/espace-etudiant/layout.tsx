
'use client'

import LanguageSwitcher from '@/components/student/LanguageSwitcher'
import StudentSidebar from '@/components/student/StudentSidebar'
import { useEffect, type ReactNode } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function StudentLayout({
  children,
}: {
  children: ReactNode
}) {
  const router = useRouter()

  useEffect(() => {
    let actif = true
    let verificationEnCours = false
    let refusConsecutifs = 0

    const INTERVALLE_VERIFICATION = 15000
    const REFUS_MAX = 2

    const COOKIE_NAME = 'deutsch_erfolg_device_id'
    const STORAGE_NAME = 'deutsch_erfolg_device_id'

    // Lire l'identifiant enregistré dans le cookie
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

    // Enregistrer l'identifiant dans le cookie
    function definirCookieDeviceId(deviceId: string) {
      const secure =
        window.location.protocol === 'https:'
          ? '; Secure'
          : ''

      document.cookie =
        `${COOKIE_NAME}=${encodeURIComponent(deviceId)}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
    }

    // Synchroniser le cookie et le localStorage
    function obtenirDeviceId(): string | null {
      const cookieId = lireCookieDeviceId()

      const localId = localStorage.getItem(
        STORAGE_NAME
      )

      // Le cookie est prioritaire car le middleware
      // utilise également cet identifiant.
      if (cookieId) {
        if (localId !== cookieId) {
          localStorage.setItem(STORAGE_NAME, cookieId)
        }

        return cookieId
      }

      // Si le cookie manque mais que le localStorage
      // contient l'identifiant, on recrée le cookie.
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
        const deviceId = obtenirDeviceId()

        // Aucun identifiant disponible :
        // demander une nouvelle connexion sans détruire
        // immédiatement la session Supabase.
        if (!deviceId) {
          actif = false
          router.replace('/connexion')
          return
        }

        // Vérifier la session utilisateur
        const {
          data: authData,
          error: authError,
        } = await supabase.auth.getUser()

        if (!actif) return

        // Une erreur réseau ou temporaire ne doit
        // pas provoquer une déconnexion.
        if (authError) {
          console.error(
            'Erreur de vérification de session :',
            authError.message
          )

          refusConsecutifs = 0
          return
        }

        if (!authData.user) {
          actif = false
          router.replace('/connexion')
          return
        }

        // Vérifier que cet appareil est toujours autorisé
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

        // Une erreur RPC n'est pas une preuve
        // que l'appareil n'est plus autorisé.
        if (error) {
          console.error(
            'Erreur de vérification de l’appareil :',
            error.message
          )

          refusConsecutifs = 0
          return
        }

        // Appareil autorisé
        if (data === true) {
          refusConsecutifs = 0
          return
        }

        // Réponse indéterminée
        if (data !== false) {
          refusConsecutifs = 0
          return
        }

        // Vérifier que l'identifiant n'a pas changé
        // pendant la requête.
        const deviceIdActuel = obtenirDeviceId()

        if (deviceIdActuel !== deviceId) {
          refusConsecutifs = 0
          return
        }

        refusConsecutifs += 1

        console.warn(
          `Appareil non autorisé : vérification ${refusConsecutifs}/${REFUS_MAX}`
        )

        // Attendre une deuxième confirmation
        if (refusConsecutifs < REFUS_MAX) {
          return
        }

        // Deux refus consécutifs :
        // l'appareil n'est plus autorisé.
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

        // Ne pas déconnecter sur une erreur inattendue.
        refusConsecutifs = 0

      } finally {
        verificationEnCours = false
      }
    }

    // Première vérification
    verifierAppareil()

    // Vérifications périodiques
    const interval = window.setInterval(
      verifierAppareil,
      INTERVALLE_VERIFICATION
    )

    return () => {
      actif = false
      window.clearInterval(interval)
    }
  }, [router])

  return (
    <>
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
    </>
  )
}

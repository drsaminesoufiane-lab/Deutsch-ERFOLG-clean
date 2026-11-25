
import { createBrowserClient } from '@supabase/ssr'

const authStorage = {
  getItem: async (key: string): Promise<string | null> => {
    if (typeof window === 'undefined') return null

    const rememberMe =
      window.sessionStorage.getItem('deutsch_erfolg_remember_me') !== 'false'

    return rememberMe
      ? window.localStorage.getItem(key)
      : window.sessionStorage.getItem(key)
  },

  setItem: async (key: string, value: string): Promise<void> => {
    if (typeof window === 'undefined') return

    const rememberMe =
      window.sessionStorage.getItem('deutsch_erfolg_remember_me') !== 'false'

    if (rememberMe) {
      window.sessionStorage.removeItem(key)
      window.localStorage.setItem(key, value)
    } else {
      window.localStorage.removeItem(key)
      window.sessionStorage.setItem(key, value)
    }
  },

  removeItem: async (key: string): Promise<void> => {
    if (typeof window === 'undefined') return

    window.localStorage.removeItem(key)
    window.sessionStorage.removeItem(key)
  },
}

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
  {
    auth: {
      storage: authStorage,
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
)

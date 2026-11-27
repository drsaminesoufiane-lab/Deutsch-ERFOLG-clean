import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

// DE_EMAIL_CONFIRMATION_V2
export const dynamic = 'force-dynamic'

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url)
  const token_hash = searchParams.get('token_hash')
  const type = searchParams.get('type')
  const code = searchParams.get('code')
  const response = NextResponse.redirect(new URL('/connexion?status=error', origin), 303)
  response.headers.set('Cache-Control', 'no-store')
  response.headers.set('Referrer-Policy', 'no-referrer')
  if (searchParams.has('error') || searchParams.has('error_code')) return response
  if (type && type !== 'email' && type !== 'signup') return response
  if (token_hash ? !type : !code) return response

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
      {
        cookies: {
          getAll: () => request.cookies.getAll(),
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set(name, value)
              response.cookies.set(name, value, options)
            })
          },
        },
      }
    )
    // Never accept recovery, invite or email-change tokens on this endpoint.
    // Support existing links and the PKCE callback without changing Google OAuth.
    const result = token_hash && (type === 'email' || type === 'signup')
      ? await supabase.auth.verifyOtp({ token_hash, type })
      : await supabase.auth.exchangeCodeForSession(code!)
    if (!result.error && result.data.user?.email_confirmed_at) {
      // Update the actual redirect response, preserving Supabase cookies.
      response.headers.set('Location', new URL('/connexion?status=success', origin).toString())
    }
  } catch {
    // The neutral error page permits normal login or a new confirmation email.
  }
  return response
}

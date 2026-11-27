import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'
import { parseAccess } from '@/lib/adminAccess'
import { googleProfileComplete, hasGoogleProvider } from '@/lib/googleProfile'

export const dynamic = 'force-dynamic'
export async function GET(request: NextRequest) {
  const url = new URL(request.url)
  const code = url.searchParams.get('code')
  const lang = url.searchParams.get('lang') || 'de'
  const language = ['fr','de','en','ar'].includes(lang) ? lang : 'de'
  const failure = new URL('/connexion?google_error=1', url.origin)
  const response = NextResponse.redirect(failure, 303)
  response.headers.set('Cache-Control', 'no-store')
  if (!code || url.searchParams.has('error')) return response
  const supabase = createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({name,value,options}) => {
          request.cookies.set(name,value)
          response.cookies.set(name,value,options)
        })
      },
    },
  })
  const redirect = (path: string) => {
    response.headers.set('Location', new URL(path,url.origin).toString())
    return response
  }
  let exchanged = false
  const abort = async () => {
    if (exchanged) {
      try { await supabase.auth.signOut({scope:'local'}) } catch { /* keep error redirect */ }
      response.cookies.delete('deutsch_erfolg_device_id')
    }
    return response
  }
  try {
    const {data: exchange,error: exchangeError} = await supabase.auth.exchangeCodeForSession(code)
    if (exchangeError || !exchange.session) return response
    exchanged = true
    const {data:{user},error: userError} = await supabase.auth.getUser()
    if (userError || !user || !user.email || !hasGoogleProvider(user.app_metadata)) return await abort()
    const {data:profile,error:profileError} = await supabase.from('profiles').select('role,full_name,telephone,pays,ville,level').eq('id',user.id).single()
    if (profileError || !profile) return await abort()
    if (profile.role === 'admin') {
      const {data,error} = await supabase.rpc('admin_my_access')
      if (error || !parseAccess(data)) return await abort()
      return redirect('/administration')
    }
    if (profile.role !== 'student') return await abort()
    const deviceId = crypto.randomUUID()
    const {error:deviceError} = await supabase.rpc('register_student_device', {p_device_id:deviceId,p_device_name:(request.headers.get('user-agent') || 'Google').slice(0,180)})
    if (deviceError) return await abort()
    response.cookies.set('deutsch_erfolg_device_id',deviceId,{path:'/',maxAge:31536000,sameSite:'lax',secure:url.protocol==='https:'})
    return redirect(googleProfileComplete(profile) ? '/espace-etudiant' : `/auth/completer-profil?lang=${language}`)
  } catch { return await abort() }
}

export type GoogleProfile = { role?: string | null; full_name?: string | null; telephone?: string | null; pays?: string | null; ville?: string | null; level?: string | null }
export function hasGoogleProvider(metadata: Record<string, unknown> | undefined) {
  return metadata?.provider === 'google' || (Array.isArray(metadata?.providers) && metadata.providers.includes('google'))
}
export function googleProfileComplete(profile: GoogleProfile) {
  return [profile.full_name, profile.telephone, profile.pays, profile.ville].every(v => typeof v === 'string' && v.trim().length > 0) && ['A1','A2','B1','B2'].includes(profile.level || '')
}

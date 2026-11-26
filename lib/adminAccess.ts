export const permissionLabels = {
  students: 'Consulter les étudiants', edit_students: 'Modifier les informations des étudiants', finance: 'Consulter les paiements et le chiffre d’affaires', activate_pro: 'Activer / prolonger PRO', cancel_pro: 'Annuler un abonnement et son paiement', revoke_pro: 'Révoquer un accès PRO', courses: 'Gérer les anciens contenus Supabase', tasks: 'Gérer les tâches', stats: 'Consulter les statistiques', notifications: 'Recevoir les notifications d’inscription', appoint: 'Nommer des administrateurs', edit_admins: 'Modifier leurs permissions', revoke_admins: 'Révoquer des administrateurs', audit: 'Consulter le journal des autorisations', results: 'Consulter le suivi des résultats des étudiants',
} as const
export type Permission = keyof typeof permissionLabels
export type Access = {owner: boolean; permissions: Permission[]}
export const permissions = Object.keys(permissionLabels) as Permission[]
export const has = (access: Access | null, p: Permission) => !!access && (access.owner || access.permissions.includes(p))
export const management = (access: Access | null) => ['appoint','edit_admins','revoke_admins','audit'].some(p=>has(access,p as Permission))
export const links: {url:string; label:string; permission?: Permission}[] = [
 {url:'/administration',label:'Tableau de bord'}, {url:'/administration/etudiants',label:'Étudiants',permission:'students'}, {url:'/administration/taches',label:'Tâches',permission:'tasks'}, {url:'/administration/paiements',label:'Paiements',permission:'finance'}, {url:'/administration/statistiques',label:'Statistiques',permission:'stats'}, {url:'/administration/administrateurs',label:'Administrateurs'}, {url:'/administration/journal',label:'Journal d’activité'}, {url:'/administration/resultats',label:'Suivi des résultats',permission:'results'}, {url:'/administration/parametres',label:'Paramètres'},
]
export function allowedPath(access: Access | null, path: string) {
 if (path==='/administration/cours'||path.startsWith('/administration/cours/')) return false
 if (!access) return false
 if (path==='/administration/parametres'||path==='/administration/parametres/') return true
 if (path==='/administration/journal'||path.startsWith('/administration/journal/')) return access.owner
 if (access.owner) return true
 const root=links.find(l=>l.url!='/administration'&&(path===l.url||path.startsWith(l.url+'/')))
 if(path==='/administration'||path==='/administration/')return true
 if(!root)return false
 return root.url==='/administration/administrateurs'?management(access):!!root.permission&&has(access,root.permission)
}
export function parseAccess(data: unknown): Access | null {
 if(!data||typeof data!=='object')return null
 const a=data as Partial<Access>
 if(typeof a.owner!=='boolean'||!Array.isArray(a.permissions))return null
 return {owner:a.owner,permissions:a.permissions.filter((p):p is Permission=>permissions.includes(p))}
}

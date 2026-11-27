
'use client'
import AdminLoader from '../AdminLoader'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import {
GraduationCap, LayoutDashboard, Users, Wallet, BarChart3,
BookOpen, FileText, FileAudio, Settings, ShieldCheck, Bell,
Plus, Pencil, Trash2, Eye, EyeOff, Save, X,
ChevronRight, Loader2, BookMarked, AlertCircle, CheckCircle2,
ArrowLeft, ClipboardList, ListChecks, Layers, Search
} from 'lucide-react'
import { supabase } from '@/lib/supabase'
type Chapitre = {
id: string
level: string
title: string
description: string | null
position: number
is_published: boolean
created_at: string
lessonCount: number
ubungCount: number
}
type Lecon = {
id: string
chapter_id: string
title: string
content: any
position: number
is_published: boolean
created_at: string
}
type Ubung = {
id: string
chapter_id: string
lesson_id: string
category: string
title: string
description: string | null
position: number
is_published: boolean
created_at: string
exerciseCount: number
}
type Exercice = {
id: string
chapter_id: string
lesson_id: string | null
ubung_id: string | null
title: string
exercise_type: string
question: string
content: any
correct_answer: any
explanation: string | null
explanation_ar: string | null
position: number
is_published: boolean
}
type NiveauForm = {
level: string
title: string
description: string
}
type LeconForm = {
title: string
content: string
}
type BlocLecon = {
  id: string
  type: 'text' | 'examples' | 'table' | 'callout' | 'image'
  title?: string
  content?: string
  items?: string[]
  headers?: string[]
  rows?: string[][]
  variant?: 'info' | 'warning' | 'success'
  url?: string
  caption?: string
}

const creerBloc = (type: BlocLecon['type']): BlocLecon => {
  const id = crypto.randomUUID()

  switch (type) {
    case 'text':
      return {
        id,
        type,
        title: 'Nouvelle section',
        content: '',
      }

    case 'examples':
      return {
        id,
        type,
        title: 'Beispiele',
        items: [''],
      }

    case 'table':
      return {
        id,
        type,
        title: 'Tableau',
        headers: ['Colonne 1', 'Colonne 2'],
        rows: [['', '']],
      }

    case 'callout':
      return {
        id,
        type,
        variant: 'info',
        title: 'Merke dir!',
        content: '',
      }

    case 'image':
      return {
        id,
        type,
        title: '',
        url: '',
        caption: '',
      }
  }
}
type UbungForm = {
category: string
title: string
description: string
}
type ExerciceForm = {
title: string
type: string
label: string
prompt: string
sentence: string
options: string
answer: string
explanation: string
explanation_ar: string
pairs: string
}
const TYPES_EXERCICES = [
'qcm',
'fill_blank',
'true_false',
'matching',
'reorder',
'writing',
] as const
const chapitreVide: NiveauForm = {
level: 'B1',
title: '',
description: '',
}
const leconVide: LeconForm = {
title: '',
content: '{}',
}
const ubungVide: UbungForm = {
category: 'meistertraining',
title: '',
description: '',
}
const exerciceVide: ExerciceForm = {
title: '',
type: 'qcm',
label: '',
prompt: '',
sentence: '',
options: '',
answer: '',
explanation: '',
explanation_ar: '',
pairs: '',
}
const parseLines = (value: string) =>
value.split('\n').map(item => item.trim()).filter(Boolean)
const typeLabel = (type: string) => {
const labels: Record<string, string> = {
qcm: 'QCM',
fill_blank: 'Texte à trous',
true_false: 'Vrai / Faux',
matching: 'Association',
reorder: 'Remettre dans l’ordre',
writing: 'Expression écrite',
}
return labels[type] || type
}
export default function CoursPage() {
const [chapitres, setChapitres] = useState<Chapitre[]>([])
const [lecons, setLecons] = useState<Lecon[]>([])
const [ubungen, setUbungen] = useState<Ubung[]>([])
const [exercices, setExercices] = useState<Exercice[]>([])
const [chargement, setChargement] = useState(true)
const [enregistrement, setEnregistrement] = useState(false)
const [erreur, setErreur] = useState('')
const [succes, setSucces] = useState('')
const [recherche, setRecherche] = useState('')
const [filtreNiveau, setFiltreNiveau] = useState('Tous')
const [filtrePublication, setFiltrePublication] = useState('Tous')
const [elementsSelectionnes, setElementsSelectionnes] = useState<string[]>([])
const [chapitreActif, setChapitreActif] = useState<string | null>(null)
const [leconActive, setLeconActive] = useState<string | null>(null)
const [ubungActive, setUbungActive] = useState<string | null>(null)
const [vue, setVue] = useState<
'chapitres' | 'lecons' | 'ubungen' | 'questions'
>('chapitres')
const [niveauForm, setNiveauForm] = useState(chapitreVide)
const [leconForm, setLeconForm] = useState(leconVide)
const [blocsLecon, setBlocsLecon] = useState<BlocLecon[]>([])
const [objectifLecon, setObjectifLecon] = useState('')
const [contenuLeconInitial, setContenuLeconInitial] = useState<any>({})
const [ubungForm, setUbungForm] = useState(ubungVide)
const [exerciceForm, setExerciceForm] = useState(exerciceVide)
const [editionChapitre, setEditionChapitre] = useState<string | null>(null)
const [editionLecon, setEditionLecon] = useState<string | null>(null)
const [editionUbung, setEditionUbung] = useState<string | null>(null)
const [editionExercice, setEditionExercice] = useState<string | null>(null)
const [formulaire, setFormulaire] = useState<
'chapitre' | 'lecon' | 'ubung' | 'exercice' | null
>(null)
const [confirmation, setConfirmation] = useState<{
type: string
id: string
ids?: string[]
} | null>(null)
const afficherSucces = (message: string) => {
setSucces(message)
setErreur('')
window.setTimeout(() => setSucces(''), 3500)
}
// CHARGEMENT DES DONNÉES
const chargerDonnees = useCallback(async () => {
setChargement(true)
setErreur('')
const [
chapitresResult,
leconsResult,
ubungenResult,
exercicesResult,
] = await Promise.all([
supabase.from('grammar_chapters')
.select('*')
.order('position', { ascending: true }),
supabase.from('grammar_lessons')
.select('*')
.order('position', { ascending: true }),
supabase.from('grammar_ubungen')
.select('*')
.order('position', { ascending: true }),
supabase.from('grammar_exercises')
.select('*')
.order('position', { ascending: true }),
])
const error =
chapitresResult.error ||
leconsResult.error ||
ubungenResult.error ||
exercicesResult.error
if (error) {
setErreur(error.message)
setChargement(false)
return
}
const rawLecons = leconsResult.data || []
const rawUbungen = ubungenResult.data || []
const rawExercices = exercicesResult.data || []
const resultatChapitres: Chapitre[] =
(chapitresResult.data || []).map(c => ({
...c,
lessonCount: rawLecons.filter(
l => l.chapter_id === c.id
).length,
ubungCount: rawUbungen.filter(
u => u.chapter_id === c.id
).length,
}))
const resultatUbungen: Ubung[] = rawUbungen.map(u => ({
...u,
exerciseCount: rawExercices.filter(
e => e.ubung_id === u.id
).length,
}))
setChapitres(resultatChapitres)
setLecons(rawLecons as Lecon[])
setUbungen(resultatUbungen)
setExercices(rawExercices as Exercice[])
setChargement(false)
}, [])
useEffect(() => {
chargerDonnees()
}, [chargerDonnees])
// ÉLÉMENTS SÉLECTIONNÉS
const chapitreSelectionne =
chapitres.find(c => c.id === chapitreActif) || null
const leconsChapitre = lecons.filter(
l => l.chapter_id === chapitreActif
)
const leconSelectionnee =
lecons.find(l => l.id === leconActive) || null
const ubungenLecon = ubungen.filter(
u => u.lesson_id === leconActive
)
const ubungSelectionnee =
ubungen.find(u => u.id === ubungActive) || null
const exercicesUbung = exercices.filter(
e => e.ubung_id === ubungActive
)
// NAVIGATION
const ouvrirChapitre = (id: string) => {
setChapitreActif(id)
setLeconActive(null)
setUbungActive(null)
setElementsSelectionnes([])
setVue('lecons')
setFormulaire(null)
setErreur('')
}
const ouvrirLecon = (id: string) => {
setLeconActive(id)
setUbungActive(null)
setElementsSelectionnes([])
setVue('ubungen')
setFormulaire(null)
setErreur('')
}
const ouvrirUbung = (id: string) => {
setUbungActive(id)
setElementsSelectionnes([])
setVue('questions')
setFormulaire(null)
setErreur('')
}
const revenirAuxChapitres = () => {
setErreur('')
setFormulaire(null)
setElementsSelectionnes([])
setChapitreActif(null)
setLeconActive(null)
setUbungActive(null)
setVue('chapitres')
}
const revenirAuxLecons = () => {
setErreur('')
setFormulaire(null)
setElementsSelectionnes([])
setLeconActive(null)
setUbungActive(null)
setVue('lecons')
}
const revenirAuxUbungen = () => {
setErreur('')
setFormulaire(null)
setElementsSelectionnes([])
setUbungActive(null)
setVue('ubungen')
}
// CHAPITRES
const ouvrirCreationChapitre = () => {
setNiveauForm(chapitreVide)
setEditionChapitre(null)
setFormulaire('chapitre')
setErreur('')
}
const ouvrirEditionChapitre = (c: Chapitre) => {
setErreur('')
setNiveauForm({
level: c.level,
title: c.title,
description: c.description || '',
})
setEditionChapitre(c.id)
setFormulaire('chapitre')
}
const enregistrerChapitre = async () => {
if (!niveauForm.title.trim()) {
setErreur('Le titre du chapitre est obligatoire.')
return
}
setEnregistrement(true)
const donnees = {
level: niveauForm.level,
title: niveauForm.title.trim(),
description: niveauForm.description.trim() || null,
}
const result = editionChapitre
? await supabase.from('grammar_chapters')
.update(donnees).eq('id', editionChapitre)
: await supabase.from('grammar_chapters')
.insert({
...donnees,
position: chapitres.length
? Math.max(...chapitres.map(c => c.position)) + 1
: 1,
is_published: false,
})
if (result.error) {
setErreur(result.error.message)
} else {
setFormulaire(null)
setEditionChapitre(null)
setNiveauForm(chapitreVide)
await chargerDonnees()
afficherSucces('Chapitre enregistré avec succès.')
}
setEnregistrement(false)
}
// LEÇONS

const convertirAncienContenu = (contenu: any): BlocLecon[] => {
  if (Array.isArray(contenu?.blocks)) {
    return contenu.blocks.map((bloc: any) => ({
      ...bloc,
      id: bloc.id || crypto.randomUUID(),
    }))
  }

  const blocs: BlocLecon[] = []

  // Anciennes pages Markdown
  if (Array.isArray(contenu?.pages)) {
    contenu.pages.forEach((page: any) => {
      if (page.markdown) {
        blocs.push({
          id: crypto.randomUUID(),
          type: 'text',
          title: page.title || '',
          content: page.markdown,
        })
      }

      if (Array.isArray(page.figures)) {
        page.figures.forEach((figure: any) => {
          if (figure.url || figure.local_file) {
            blocs.push({
              id: crypto.randomUUID(),
              type: 'image',
              title: figure.description || '',
              url: figure.url || figure.local_file,
              caption: figure.caption || '',
            })
          }
        })
      }
    })
  }

  // Anciennes règles
  if (Array.isArray(contenu?.rules) && contenu.rules.length) {
    blocs.push({
      id: crypto.randomUUID(),
      type: 'text',
      title: 'Regeln',
      content: contenu.rules.map((r: any) =>
        typeof r === 'string' ? r : JSON.stringify(r)
      ).join('\n\n'),
    })
  }

  // Anciens exemples
  if (Array.isArray(contenu?.examples) && contenu.examples.length) {
    blocs.push({
      id: crypto.randomUUID(),
      type: 'examples',
      title: 'Beispiele',
      items: contenu.examples.map((e: any) =>
        typeof e === 'string' ? e : JSON.stringify(e)
      ),
    })
  }

  return blocs
}

const ouvrirCreationLecon = () => {
  setLeconForm({ title: '', content: '{}' })
  setBlocsLecon([])
  setObjectifLecon('')
  setContenuLeconInitial({})
  setEditionLecon(null)
  setFormulaire('lecon')
  setErreur('')
}

const ouvrirEditionLecon = (l: Lecon) => {
  setErreur('')

  const contenu = l.content || {}

  setLeconForm({
    title: l.title,
    content: '{}',
  })

  setContenuLeconInitial(contenu)
  setObjectifLecon(contenu.objective || '')
  setBlocsLecon(convertirAncienContenu(contenu))

  setEditionLecon(l.id)
  setFormulaire('lecon')
}

const modifierBloc = (
  id: string,
  modifications: Partial<BlocLecon>
) => {
  setBlocsLecon(current =>
    current.map(bloc =>
      bloc.id === id ? { ...bloc, ...modifications } : bloc
    )
  )
}

const supprimerBloc = (id: string) => {
  setBlocsLecon(current =>
    current.filter(bloc => bloc.id !== id)
  )
}

const deplacerBloc = (index: number, direction: -1 | 1) => {
  setBlocsLecon(current => {
    const destination = index + direction

    if (destination < 0 || destination >= current.length) {
      return current
    }

    const copie = [...current]

    ;[copie[index], copie[destination]] = [
      copie[destination],
      copie[index],
    ]

    return copie
  })
}

const ajouterBloc = (type: BlocLecon['type']) => {
  setBlocsLecon(current => [
    ...current,
    creerBloc(type),
  ])
}

const enregistrerLecon = async () => {
  if (!chapitreActif) return

  if (!leconForm.title.trim()) {
    setErreur('Le titre de la leçon est obligatoire.')
    return
  }

  if (!blocsLecon.length) {
    setErreur('Ajoutez au moins un bloc pédagogique à la leçon.')
    return
  }

  setEnregistrement(true)
  setErreur('')

  // On conserve les anciennes propriétés pour éviter
  // de perdre des informations déjà enregistrées.
  const contenu = {
    ...contenuLeconInitial,
    objective: objectifLecon.trim(),
    blocks: blocsLecon,
  }

  const donnees = {
    title: leconForm.title.trim(),
    content: contenu,
  }

  const result = editionLecon
    ? await supabase
        .from('grammar_lessons')
        .update(donnees)
        .eq('id', editionLecon)
    : await supabase
        .from('grammar_lessons')
        .insert({
          ...donnees,
          chapter_id: chapitreActif,
          position: leconsChapitre.length
            ? Math.max(...leconsChapitre.map(l => l.position)) + 1
            : 1,
          is_published: false,
        })

  if (result.error) {
    setErreur(result.error.message)
  } else {
    setFormulaire(null)
    setEditionLecon(null)
    setLeconForm(leconVide)
    setBlocsLecon([])
    setObjectifLecon('')
    setContenuLeconInitial({})

    await chargerDonnees()
    afficherSucces('Leçon enregistrée avec succès.')
  }

  setEnregistrement(false)
}
// ÜBUNGEN
const ouvrirCreationUbung = () => {
setUbungForm(ubungVide)
setEditionUbung(null)
setFormulaire('ubung')
setErreur('')
}
const ouvrirEditionUbung = (u: Ubung) => {
setErreur('')
setUbungForm({
category: u.category?.toLowerCase().includes('extra')
? 'extra_kick'
: 'meistertraining',
title: u.title,
description: u.description || '',
})
setEditionUbung(u.id)
setFormulaire('ubung')
}
const enregistrerUbung = async () => {
if (!chapitreActif || !leconActive) return
if (!ubungForm.title.trim()) {
setErreur('Le titre de l’Übung est obligatoire.')
return
}
setEnregistrement(true)
const category = ubungForm.category === 'extra_kick'
? 'extra_kick'
: 'meistertraining'
const donnees = {
category,
title: ubungForm.title.trim(),
description: ubungForm.description.trim() || null,
}
const result = editionUbung
? await supabase.from('grammar_ubungen')
.update(donnees).eq('id', editionUbung)
: await supabase.from('grammar_ubungen')
.insert({
...donnees,
chapter_id: chapitreActif,
lesson_id: leconActive,
position: ubungenLecon.length
? Math.max(...ubungenLecon.map(u => u.position)) + 1
: 1,
is_published: false,
})
if (result.error) {
setErreur(result.error.message)
} else {
setFormulaire(null)
setEditionUbung(null)
setUbungForm(ubungVide)
await chargerDonnees()
afficherSucces('Übung enregistrée avec succès.')
}
setEnregistrement(false)
}
// QUESTIONS
const ouvrirCreationExercice = () => {
setExerciceForm(exerciceVide)
setEditionExercice(null)
setFormulaire('exercice')
setErreur('')
}
const ouvrirEditionExercice = (e: Exercice) => {
const content = e.content || {}
const answer = e.exercise_type === 'true_false'
? (
['true', 'vrai'].includes(String(e.correct_answer ?? '').trim().toLowerCase())
? 'Vrai'
: 'Faux'
)
: Array.isArray(e.correct_answer)
? e.correct_answer.join('\n')
: String(e.correct_answer ?? '')
setErreur('')
setExerciceForm({
title: e.title || '',
type: TYPES_EXERCICES.includes(e.exercise_type as any)
? e.exercise_type
: 'qcm',
label: content.label || '',
prompt: content.prompt || e.question || '',
sentence: content.sentence || '',
options: Array.isArray(content.options)
? content.options.join('\n')
: '',
answer,
explanation: e.explanation || '',
explanation_ar: e.explanation_ar || '',
pairs: Array.isArray(content.pairs)
? content.pairs.map((p: any) =>
`${p.left}|${p.answer}`
).join('\n')
: '',
})
setEditionExercice(e.id)
setFormulaire('exercice')
}
const enregistrerExercice = async () => {
if (!chapitreActif || !leconActive || !ubungActive) return
const type = exerciceForm.type
if (!TYPES_EXERCICES.includes(type as any)) {
setErreur('Le format de question sélectionné est invalide.')
return
}
if (!exerciceForm.prompt.trim()) {
setErreur('La consigne / question est obligatoire.')
return
}
const options = parseLines(exerciceForm.options)
const reponses = parseLines(exerciceForm.answer)
let pairs: { id: string; left: string; answer: string }[] = []
// VALIDATION QCM
if (type === 'qcm') {
if (options.length < 2) {
setErreur('Ajoutez au moins deux choix de réponse.')
return
}
if (!reponses.length) {
setErreur('Indiquez au moins une bonne réponse.')
return
}
const optionsNormalisees = options.map(o => o.toLocaleLowerCase())
const reponsesNormalisees = reponses.map(r => r.toLocaleLowerCase())
if (new Set(optionsNormalisees).size !== optionsNormalisees.length) {
setErreur('Chaque choix du QCM doit être unique.')
return
}
if (new Set(reponsesNormalisees).size !== reponsesNormalisees.length) {
setErreur('Une bonne réponse ne doit être indiquée qu’une seule fois.')
return
}
if (reponsesNormalisees.some(r => !optionsNormalisees.includes(r))) {
setErreur('Chaque bonne réponse doit exister dans les choix proposés.')
return
}
}
// VALIDATION TEXTE À TROUS
if (type === 'fill_blank') {
if (!exerciceForm.sentence.trim()) {
setErreur('La phrase à compléter est obligatoire.')
return
}
if (!reponses.length) {
setErreur('Indiquez la réponse attendue pour le texte à trous.')
return
}
}
// VALIDATION VRAI / FAUX
if (type === 'true_false') {
const answer = exerciceForm.answer.trim().toLowerCase()
if (!['vrai', 'faux', 'true', 'false'].includes(answer)) {
setErreur('Sélectionnez Vrai ou Faux comme réponse correcte.')
return
}
}
// VALIDATION ASSOCIATION
if (type === 'matching') {
pairs = exerciceForm.pairs
.split('\n')
.map(line => line.trim())
.filter(Boolean)
.map((line, index) => {
const separatorIndex = line.indexOf('|')
if (separatorIndex === -1) {
return {
id: `p${index + 1}`,
left: '',
answer: '',
}
}
return {
id: `p${index + 1}`,
left: line.slice(0, separatorIndex).trim(),
answer: line.slice(separatorIndex + 1).trim(),
}
})
if (pairs.length < 2 || pairs.some(p => !p.left || !p.answer)) {
setErreur(
'Ajoutez au moins deux paires complètes au format : élément|réponse.'
)
return
}
}
// VALIDATION REMETTRE DANS L'ORDRE
if (type === 'reorder') {
if (options.length < 2) {
setErreur('Ajoutez au moins deux éléments à remettre dans l’ordre.')
return
}
if (reponses.length < 2) {
setErreur('Indiquez la séquence correcte, une ligne par élément.')
return
}
if (reponses.length !== options.length) {
setErreur(
'La séquence correcte doit contenir le même nombre d’éléments que la liste.'
)
return
}
const optionsNormalisees = options.map(o => o.toLocaleLowerCase()).sort()
const reponsesNormalisees = reponses.map(r => r.toLocaleLowerCase()).sort()
if (JSON.stringify(optionsNormalisees) !== JSON.stringify(reponsesNormalisees)) {
setErreur(
'La réponse doit reprendre exactement les éléments proposés, dans le bon ordre.'
)
return
}
}
// VALIDATION EXPRESSION ÉCRITE
if (type === 'writing' && !exerciceForm.answer.trim()) {
setErreur('Ajoutez une réponse modèle ou un exemple de rédaction.')
return
}
// PRÉPARATION DE LA RÉPONSE
let answer: string | string[]
if (type === 'true_false') {
const value = exerciceForm.answer.trim().toLowerCase()
answer = value === 'vrai' || value === 'true' ? 'true' : 'false'
} else if (type === 'matching') {
answer = pairs.map(p => p.answer)
} else if (type === 'reorder') {
answer = reponses
} else {
answer = reponses.length === 1 ? reponses[0] : reponses
}
// CONTENU ENREGISTRÉ DANS SUPABASE
const content = {
label: exerciceForm.label.trim() || 'Question',
prompt: exerciceForm.prompt.trim(),
sentence: exerciceForm.sentence.trim() || undefined,
options:
type === 'qcm' || type === 'reorder'
? options
: type === 'true_false'
? ['Vrai', 'Faux']
: undefined,
pairs: type === 'matching' ? pairs : undefined,
}
setEnregistrement(true)
setErreur('')
const donnees = {
title: exerciceForm.title.trim() || exerciceForm.prompt.trim(),
exercise_type: type,
question: exerciceForm.prompt.trim(),
content,
correct_answer: answer,
explanation: exerciceForm.explanation.trim() || null,
explanation_ar: exerciceForm.explanation_ar.trim() || null,
}
const result = editionExercice
? await supabase.from('grammar_exercises')
.update(donnees)
.eq('id', editionExercice)
: await supabase.from('grammar_exercises')
.insert({
...donnees,
chapter_id: chapitreActif,
lesson_id: leconActive,
ubung_id: ubungActive,
position: exercicesUbung.length
? Math.max(...exercicesUbung.map(e => e.position)) + 1
: 1,
is_published: false,
})
if (result.error) {
setErreur(result.error.message)
} else {
setFormulaire(null)
setEditionExercice(null)
setExerciceForm(exerciceVide)
await chargerDonnees()
afficherSucces('Question enregistrée avec succès.')
}
setEnregistrement(false)
}
// PUBLICATION
const changerPublication = async (
table: string,
id: string,
statut: boolean
) => {
const { error } = await supabase
.from(table)
.update({ is_published: !statut })
.eq('id', id)
if (error) {
setErreur(error.message)
return
}
await chargerDonnees()
afficherSucces(!statut ? 'Contenu publié.' : 'Contenu dépublié.')
}
// SUPPRESSION EN CASCADE DES CONTENUS NON PUBLIÉS
const supprimerElementEnCascade = async (
  type: string,
  id: string
) => {
  const verifierErreur = (error: any) => {
    if (error) {
      throw new Error(error.message)
    }
  }

  // SUPPRIMER UN CHAPITRE
  if (type === 'chapitre') {
    const [leconsResult, ubungenResult, exercicesResult] =
      await Promise.all([
        supabase.from('grammar_lessons')
          .select('id,is_published')
          .eq('chapter_id', id),

        supabase.from('grammar_ubungen')
          .select('id,is_published')
          .eq('chapter_id', id),

        supabase.from('grammar_exercises')
          .select('id,is_published')
          .eq('chapter_id', id),
      ])

    verifierErreur(leconsResult.error)
    verifierErreur(ubungenResult.error)
    verifierErreur(exercicesResult.error)

    const enfantsPublies = [
      ...(leconsResult.data || []),
      ...(ubungenResult.data || []),
      ...(exercicesResult.data || []),
    ].some(element => element.is_published)

    if (enfantsPublies) {
      throw new Error(
        'Ce chapitre contient encore des contenus publiés. Dépubliez-les avant de supprimer le chapitre.'
      )
    }

    const exercicesDelete = await supabase
      .from('grammar_exercises')
      .delete()
      .eq('chapter_id', id)

    verifierErreur(exercicesDelete.error)

    const ubungenDelete = await supabase
      .from('grammar_ubungen')
      .delete()
      .eq('chapter_id', id)

    verifierErreur(ubungenDelete.error)

    const leconsDelete = await supabase
      .from('grammar_lessons')
      .delete()
      .eq('chapter_id', id)

    verifierErreur(leconsDelete.error)

    const chapitreDelete = await supabase
      .from('grammar_chapters')
      .delete()
      .eq('id', id)

    verifierErreur(chapitreDelete.error)
    return
  }

  // SUPPRIMER UNE LEÇON ET SON CONTENU
  if (type === 'lecon') {
    const [ubungenResult, exercicesDirectsResult] =
      await Promise.all([
        supabase.from('grammar_ubungen')
          .select('id,is_published')
          .eq('lesson_id', id),

        supabase.from('grammar_exercises')
          .select('id,is_published')
          .eq('lesson_id', id),
      ])

    verifierErreur(ubungenResult.error)
    verifierErreur(exercicesDirectsResult.error)

    const ubungIds = (ubungenResult.data || []).map(u => u.id)

    let exercicesUbungen: any[] = []

    if (ubungIds.length > 0) {
      const result = await supabase
        .from('grammar_exercises')
        .select('id,is_published')
        .in('ubung_id', ubungIds)

      verifierErreur(result.error)
      exercicesUbungen = result.data || []
    }

    const tousLesExercices = [
      ...(exercicesDirectsResult.data || []),
      ...exercicesUbungen,
    ]

    const contenuPublie =
      (ubungenResult.data || []).some(u => u.is_published) ||
      tousLesExercices.some(e => e.is_published)

    if (contenuPublie) {
      throw new Error(
        'Cette leçon contient des Übungen ou des questions publiées. Dépubliez-les avant de supprimer la leçon.'
      )
    }

    // Supprimer d'abord les questions directement liées à la leçon
    const exercicesDirectsDelete = await supabase
      .from('grammar_exercises')
      .delete()
      .eq('lesson_id', id)

    verifierErreur(exercicesDirectsDelete.error)

    // Supprimer les questions des Übungen
    if (ubungIds.length > 0) {
      const exercicesDelete = await supabase
        .from('grammar_exercises')
        .delete()
        .in('ubung_id', ubungIds)

      verifierErreur(exercicesDelete.error)
    }

    // Supprimer les Übungen
    const ubungenDelete = await supabase
      .from('grammar_ubungen')
      .delete()
      .eq('lesson_id', id)

    verifierErreur(ubungenDelete.error)

    // Supprimer enfin la leçon
    const leconDelete = await supabase
      .from('grammar_lessons')
      .delete()
      .eq('id', id)

    verifierErreur(leconDelete.error)
    return
  }

  // SUPPRIMER UNE ÜBUNG ET SES QUESTIONS
  if (type === 'ubung') {
    const { data, error } = await supabase
      .from('grammar_exercises')
      .select('id,is_published')
      .eq('ubung_id', id)

    verifierErreur(error)

    if (data?.some(e => e.is_published)) {
      throw new Error(
        'Cette Übung contient des questions publiées. Dépubliez-les avant de supprimer l’Übung.'
      )
    }

    const exercicesDelete = await supabase
      .from('grammar_exercises')
      .delete()
      .eq('ubung_id', id)

    verifierErreur(exercicesDelete.error)

    const ubungDelete = await supabase
      .from('grammar_ubungen')
      .delete()
      .eq('id', id)

    verifierErreur(ubungDelete.error)
    return
  }

  // SUPPRIMER UN EXERCICE
  if (type === 'exercice') {
    const { error } = await supabase
      .from('grammar_exercises')
      .delete()
      .eq('id', id)

    verifierErreur(error)
  }
}
// SUPPRESSION SIMPLE
const supprimerElement = async (type: string, id: string) => {
  setErreur('')
  setConfirmation(null)
  setEnregistrement(true)

  try {
    await supprimerElementEnCascade(type, id)

    if (type === 'chapitre') {
      setChapitreActif(null)
      setLeconActive(null)
      setUbungActive(null)
      setVue('chapitres')
    }

    if (type === 'lecon') {
      setLeconActive(null)
      setUbungActive(null)
    }

    if (type === 'ubung') {
      setUbungActive(null)
    }

    await chargerDonnees()
    afficherSucces('Élément et contenus associés supprimés avec succès.')
  } catch (error: any) {
    setErreur(error.message || 'Erreur pendant la suppression.')
  } finally {
    setEnregistrement(false)
  }
}
// SUPPRESSION MULTIPLE
const supprimerSelection = async (
  type: string,
  ids: string[]
) => {
  if (!ids.length) return

  setErreur('')
  setConfirmation(null)
  setEnregistrement(true)

  try {
    for (const id of ids) {
      await supprimerElementEnCascade(type, id)
    }

    setElementsSelectionnes([])

    if (type === 'chapitre') {
      setChapitreActif(null)
      setLeconActive(null)
      setUbungActive(null)
      setVue('chapitres')
    }

    if (type === 'lecon') {
      setLeconActive(null)
      setUbungActive(null)
    }

    if (type === 'ubung') {
      setUbungActive(null)
    }

    await chargerDonnees()

    afficherSucces(
      `${ids.length} élément(s) et leurs contenus associés supprimés avec succès.`
    )
  } catch (error: any) {
    setErreur(error.message || 'Erreur pendant la suppression.')
    await chargerDonnees()
  } finally {
    setEnregistrement(false)
  }
}
// STATISTIQUES ET RECHERCHE
const totalLecons = chapitres.reduce(
(t, c) => t + c.lessonCount,
0
)
const totalUbungen = chapitres.reduce(
(t, c) => t + c.ubungCount,
0
)
const totalPublies = chapitres.filter(
c => c.is_published
).length

const chapitresFiltres = chapitres.filter(c => {
  const correspondRecherche =
    `${c.title} ${c.level} ${c.description || ''}`
      .toLowerCase()
      .includes(recherche.toLowerCase().trim())

  const correspondNiveau =
    filtreNiveau === 'Tous' || c.level === filtreNiveau

  const correspondPublication =
    filtrePublication === 'Tous' ||
    (filtrePublication === 'Publiés' && c.is_published) ||
    (filtrePublication === 'Brouillons' && !c.is_published)

  return (
    correspondRecherche &&
    correspondNiveau &&
    correspondPublication
  )
})

const typeSuppression =
vue === 'chapitres' ? 'chapitre' :
vue === 'lecons' ? 'lecon' :
vue === 'ubungen' ? 'ubung' :
'exercice'
const elementsVisibles =
vue === 'chapitres' ? chapitresFiltres :
vue === 'lecons' ? leconsChapitre :
vue === 'ubungen' ? ubungenLecon :
exercicesUbung
const idsVisibles = elementsVisibles.map(e => e.id)
const basculerSelection = (id: string) => {
setElementsSelectionnes(current =>
current.includes(id)
? current.filter(item => item !== id)
: [...current, id]
)
}
const basculerTout = () => {
const tousSelectionnes = idsVisibles.every(id =>
elementsSelectionnes.includes(id)
)
setElementsSelectionnes(current =>
tousSelectionnes
? current.filter(id => !idsVisibles.includes(id))
: [...new Set([...current, ...idsVisibles])]
)
}

const barreSelection = () => (
  elementsVisibles.length > 0 && (
    <div className="bulk-actions-bar">

      <label className="bulk-select-all">
        <input
          type="checkbox"
          checked={
            idsVisibles.length > 0 &&
            idsVisibles.every(id =>
              elementsSelectionnes.includes(id)
            )
          }
          onChange={basculerTout}
        />
        <span>Tout sélectionner</span>
      </label>

      <div className="bulk-selection-count">
        <strong>
          {elementsSelectionnes.filter(id =>
            idsVisibles.includes(id)
          ).length}
        </strong>
        <span>sélectionné(s)</span>
      </div>

      <button
        className="bulk-delete-button"
        disabled={
          !elementsSelectionnes.some(id =>
            idsVisibles.includes(id)
          ) || enregistrement
        }
        onClick={() => {
          const ids = elementsSelectionnes.filter(id =>
            idsVisibles.includes(id)
          )
          setConfirmation({
            type: typeSuppression,
            id: '',
            ids,
          })
        }}
      >
        <Trash2 size={16} />
        <span>Supprimer la sélection</span>
      </button>

    </div>
  )
)

// AFFICHAGE
return (
<main className="admin-layout">
<aside className="admin-sidebar">
<Link href="/" className="admin-brand">
<span className="brand-mark">
<GraduationCap size={22} />
</span>
<span>Deutsch <b>Erfolg</b></span>
</Link>
<div className="admin-sidebar-label">MENU PRINCIPAL</div>
<nav className="admin-menu">
<Link href="/administration" className="admin-menu-link">
<LayoutDashboard size={19} />
<span>Tableau de bord</span>
</Link>
<Link href="/administration/taches" className="admin-menu-link">
<Bell size={19} />
<span>Tâches et alertes</span>
</Link>
<Link href="/administration/etudiants" className="admin-menu-link">
<Users size={19} />
<span>Étudiants</span>
</Link>
<Link href="/administration/paiements" className="admin-menu-link">
<Wallet size={19} />
<span>Paiements</span>
</Link>
<Link href="/administration/statistiques" className="admin-menu-link">
<BarChart3 size={19} />
<span>Statistiques</span>
</Link>
<Link href="/administration/cours" className="admin-menu-link active">
<BookOpen size={19} />
<span>Cours</span>
</Link>
<Link href="#" className="admin-menu-link">
<FileText size={19} />
<span>Documents PDF</span>
</Link>
<Link href="#" className="admin-menu-link">
<FileAudio size={19} />
<span>Audios</span>
</Link>
<Link href="#" className="admin-menu-link">
<Settings size={19} />
<span>Paramètres</span>
</Link>
</nav>
<div className="admin-sidebar-bottom">
<div className="admin-sidebar-help">
<ShieldCheck size={22} />
<strong>Espace sécurisé</strong>
<span>Administration Deutsch Erfolg.</span>
</div>
<Link href="/" className="admin-back-home">
← Retour au site
</Link>
</div>
</aside>
<section className="admin-main">
<header className="admin-topbar">
<div className="admin-mobile-brand">
<span className="brand-mark">
<GraduationCap size={21} />
</span>
Deutsch <b>Erfolg</b>
</div>
<div className="admin-search topbar-search">
<BookOpen size={17} />
<span>Gestion pédagogique</span>
</div>
<div className="admin-topbar-right">
<span className="admin-demo-label">
<span />Administration
</span>
<div className="admin-profile">
<div className="admin-profile-avatar">AD</div>
<div>
<strong>Administrateur</strong>
<span>Gestionnaire</span>
</div>
</div>
</div>
</header>
<div className="admin-content courses-page">
{/* TITRE DE PAGE */}
<div className="page-heading">
<div>
<div className="admin-eyebrow">ESPACE PÉDAGOGIQUE</div>
<h1>
{vue === 'chapitres' && 'Gestion des chapitres'}
{vue === 'lecons' && 'Gestion des leçons'}
{vue === 'ubungen' && 'Gestion des Übungen'}
{vue === 'questions' && 'Gestion des questions'}
</h1>
<p>
{vue === 'chapitres' &&
'Organisez les chapitres de votre programme.'}
{vue === 'lecons' &&
'Gérez les leçons de ce chapitre.'}
{vue === 'ubungen' &&
'Organisez les Übungen de cette leçon.'}
{vue === 'questions' &&
'Gérez les questions de cette Übung.'}
</p>
</div>
{vue === 'chapitres' ? (
<button
className="primary-button"
onClick={ouvrirCreationChapitre}
>
<Plus size={17} /> Nouveau chapitre
</button>
) : (
<button
className="secondary-button"
onClick={
vue === 'lecons' ? revenirAuxChapitres :
vue === 'ubungen' ? revenirAuxLecons :
revenirAuxUbungen
}
>
<ArrowLeft size={16} />
{vue === 'lecons' ? 'Retour aux chapitres' :
vue === 'ubungen' ? 'Retour aux leçons' :
'Retour aux Übungen'}
</button>
)}
</div>
{/* NOTIFICATIONS */}
{erreur && (
<div className="notice error-notice">
<AlertCircle size={18} />
{erreur}
<button onClick={() => setErreur('')}>
<X size={16} />
</button>
</div>
)}
{succes && (
<div className="notice success-notice">
<CheckCircle2 size={18} />
{succes}
</div>
)}
{/* FIL D'ARIANE */}
{vue !== 'chapitres' && (
<div className="breadcrumb">
<button onClick={revenirAuxChapitres}>Chapitres</button>
{chapitreSelectionne && (
<>
<ChevronRight size={14} />
{vue === 'lecons' ? (
<strong>{chapitreSelectionne.title}</strong>
) : (
<button onClick={revenirAuxLecons}>
{chapitreSelectionne.title}
</button>
)}
</>
)}
{(vue === 'ubungen' || vue === 'questions') &&
leconSelectionnee && (
<>
<ChevronRight size={14} />
{vue === 'ubungen' ? (
<strong>{leconSelectionnee.title}</strong>
) : (
<button onClick={revenirAuxUbungen}>
{leconSelectionnee.title}
</button>
)}
</>
)}
{vue === 'questions' && ubungSelectionnee && (
<>
<ChevronRight size={14} />
<strong>{ubungSelectionnee.title}</strong>
</>
)}
</div>
)}

{/* VUE 1 : TABLEAU DE BORD DES CHAPITRES */}
{vue === 'chapitres' && (
  <div className="chapters-dashboard">

    {/* EN-TÊTE */}
    <div className="chapters-header">
      <div>
        <span className="section-eyebrow">ESPACE PÉDAGOGIQUE</span>
        <h2>Gestion des chapitres</h2>
        <p>
          Organisez vos chapitres, suivez leur publication
          et gérez l'ensemble de vos contenus pédagogiques.
        </p>
      </div>

      <div className="chapters-header-count">
        <BookMarked size={19} />
        <span>{chapitres.length} chapitres</span>
      </div>
    </div>

    {/* STATISTIQUES */}
    <div className="stats-grid">

      <article className="stat-card">
        <span className="stat-icon">
          <BookMarked size={21} />
        </span>
        <div>
          <strong>{chapitres.length}</strong>
          <span>Chapitres créés</span>
        </div>
      </article>

      <article className="stat-card">
        <span className="stat-icon">
          <Eye size={21} />
        </span>
        <div>
          <strong>{totalPublies}</strong>
          <span>Chapitres publiés</span>
        </div>
      </article>

      <article className="stat-card">
        <span className="stat-icon">
          <BookOpen size={21} />
        </span>
        <div>
          <strong>{totalLecons}</strong>
          <span>Leçons créées</span>
        </div>
      </article>

      <article className="stat-card">
        <span className="stat-icon">
          <ClipboardList size={21} />
        </span>
        <div>
          <strong>{totalUbungen}</strong>
          <span>Übungen créées</span>
        </div>
      </article>

    </div>

    {/* BIBLIOTHÈQUE */}
    <section className="library-panel chapters-library">

      <div className="library-heading">
        <div>
          <span className="section-eyebrow">CONTENU DU PROGRAMME</span>
          <h2>Bibliothèque des chapitres</h2>
          <p>
            Retrouvez et gérez tous les chapitres de votre programme.
          </p>
        </div>

        <span className="result-count">
          {chapitresFiltres.length} résultat(s)
        </span>
      </div>

      {/* RECHERCHE */}
      <div className="search-field">
        <Search size={17} />
        <input
          value={recherche}
          onChange={e => setRecherche(e.target.value)}
          placeholder="Rechercher un chapitre..."
        />
      </div>

{/* FILTRES */}
<div className="chapter-filters">

  <div className="chapter-filter-group">
    <label>Niveau</label>
    <select
      value={filtreNiveau}
      onChange={e => setFiltreNiveau(e.target.value)}
    >
      <option value="Tous">Tous les niveaux</option>
      <option value="A1">A1</option>
      <option value="A2">A2</option>
      <option value="B1">B1</option>
      <option value="B2">B2</option>
    </select>
  </div>

  <div className="chapter-filter-group">
    <label>Publication</label>
    <select
      value={filtrePublication}
      onChange={e => setFiltrePublication(e.target.value)}
    >
      <option value="Tous">Tous les statuts</option>
      <option value="Publiés">Publiés</option>
      <option value="Brouillons">Brouillons</option>
    </select>
  </div>

  <button
    type="button"
    className="reset-filters-button"
    onClick={() => {
      setFiltreNiveau('Tous')
      setFiltrePublication('Tous')
      setRecherche('')
    }}
  >
    Réinitialiser
  </button>

</div>

      {/* SÉLECTION MULTIPLE */}
      {barreSelection()}

      {/* CHARGEMENT */}
      {chargement ? (

        <AdminLoader inline />

      ) : chapitresFiltres.length === 0 ? (

        <div className="empty-state">
          <BookOpen size={34} />
          <strong>Aucun chapitre trouvé</strong>
          <span>Créez votre premier chapitre.</span>
        </div>

      ) : (

        <div className="chapter-list">

          {chapitresFiltres.map(c => (

            <article className="chapter-card" key={c.id}>

              {/* NUMÉRO */}
              <div className="chapter-number">
                {String(c.position).padStart(2, '0')}
              </div>

              {/* INFORMATIONS */}
              <div className="chapter-info">

                <div className="chapter-title-line">
                  <h3>{c.title}</h3>

                  <span className={`status ${c.is_published ? 'published' : 'draft'}`}>
                    {c.is_published ? 'Publié' : 'Brouillon'}
                  </span>
                </div>

                <p>
                  {c.description || 'Aucune description renseignée.'}
                </p>

                <div className="chapter-meta">
                  <span>{c.level}</span>
                  <span>{c.lessonCount} leçon(s)</span>
                  <span>{c.ubungCount} Übung</span>
                </div>

              </div>

              {/* ACTIONS */}
              
<div className="chapter-actions">

  <input
    type="checkbox"
    checked={elementsSelectionnes.includes(c.id)}
    onChange={() => basculerSelection(c.id)}
    aria-label={`Sélectionner ${c.title}`}
  />

  <details className="chapter-menu">
    <summary title="Actions du chapitre">
      ⋯
    </summary>

    <div className="chapter-menu-dropdown">

      <button
        type="button"
        onClick={() => ouvrirChapitre(c.id)}
      >
        <ChevronRight size={16} />
        Gérer le contenu
      </button>

      <button
        type="button"
        onClick={() => ouvrirEditionChapitre(c)}
      >
        <Pencil size={16} />
        Modifier
      </button>

      <button
        type="button"
        onClick={() =>
          changerPublication(
            'grammar_chapters',
            c.id,
            c.is_published
          )
        }
      >
        {c.is_published
          ? <EyeOff size={16} />
          : <Eye size={16} />}
        {c.is_published ? 'Dépublier' : 'Publier'}
      </button>

      <button
        type="button"
        className="chapter-menu-delete"
        onClick={() =>
          setConfirmation({
            type: 'chapitre',
            id: c.id,
          })
        }
      >
        <Trash2 size={16} />
        Supprimer
      </button>

    </div>
  </details>

</div>


            </article>

          ))}

        </div>

      )}

    </section>

  </div>
)}



{/* VUE 2 : LEÇONS */}
{vue === 'lecons' && chapitreSelectionne && (
  <>
    <div className="lesson-overview">
      <div className="lesson-overview-heading">
        <div className="lesson-chapter-info">
          <span className="admin-eyebrow">
            {chapitreSelectionne.level} · KAPITEL
          </span>
          <h2>{chapitreSelectionne.title}</h2>
          <p>
            {chapitreSelectionne.description ||
              'Organisez le contenu pédagogique de ce chapitre.'}
          </p>
        </div>

        <button className="primary-button" onClick={ouvrirCreationLecon}>
          <Plus size={16} />
          Nouvelle leçon
        </button>
      </div>

      <div className="lesson-overview-stats">
        <div className="lesson-overview-stat">
          <span className="lesson-stat-icon"><BookOpen size={19} /></span>
          <div>
            <strong>{leconsChapitre.length}</strong>
            <span>Leçons au total</span>
          </div>
        </div>

        <div className="lesson-overview-stat">
          <span className="lesson-stat-icon published-icon"><Eye size={19} /></span>
          <div>
            <strong>{leconsChapitre.filter(l => l.is_published).length}</strong>
            <span>Leçons publiées</span>
          </div>
        </div>

        <div className="lesson-overview-stat">
          <span className="lesson-stat-icon draft-icon"><FileText size={19} /></span>
          <div>
            <strong>{leconsChapitre.filter(l => !l.is_published).length}</strong>
            <span>Brouillons</span>
          </div>
        </div>
      </div>
    </div>

    <section className="library-panel lesson-library">
      <div className="lesson-library-heading">
        <div>
          <span className="admin-eyebrow">CONTENU PÉDAGOGIQUE</span>
          <h2>Bibliothèque des leçons</h2>
          <p>Gérez les leçons de ce chapitre.</p>
        </div>
        <span className="result-count">{leconsChapitre.length} leçon(s)</span>
      </div>

      {barreSelection()}

      {leconsChapitre.length === 0 ? (
        <div className="empty-state">
          <BookOpen size={32} />
          <strong>Aucune leçon pour le moment</strong>
          <span>Commencez par créer votre première leçon.</span>
          <button className="primary-button" onClick={ouvrirCreationLecon}>
            <Plus size={16} /> Créer une leçon
          </button>
        </div>
      ) : (
        <>
          {/* LEÇONS PUBLIÉES */}
          <div className="lesson-group">
            <div className="lesson-group-heading">
              <div>
                <span className="lesson-group-icon published-icon">
                  <Eye size={17} />
                </span>
                <h3>Leçons publiées</h3>
              </div>
              <span className="result-count">
                {leconsChapitre.filter(l => l.is_published).length}
              </span>
            </div>

            {leconsChapitre.filter(l => l.is_published).length === 0 ? (
              <p className="lesson-group-empty">
                Aucune leçon publiée.
              </p>
            ) : (
              <div className="lesson-library-list">
                {leconsChapitre.filter(l => l.is_published).map(l => (
                  <article className="lesson-library-card" key={l.id}>
                    <button
                      className="lesson-card-main"
                      onClick={() => ouvrirLecon(l.id)}
                    >
                      <span className="lesson-card-number">
                        {String(l.position).padStart(2, '0')}
                      </span>
                      <span className="lesson-card-info">
                        <strong>{l.title}</strong>
                        <small>Leçon pédagogique · Position {l.position}</small>
                      </span>
                      <ChevronRight size={19} />
                    </button>

                    <div className="lesson-card-actions">
                      <span className="status published">Publié</span>
                      <input
                        type="checkbox"
                        checked={elementsSelectionnes.includes(l.id)}
                        onChange={() => basculerSelection(l.id)}
                        aria-label={`Sélectionner ${l.title}`}
                      />
                      <button className="icon-button" title="Modifier" onClick={() => ouvrirEditionLecon(l)}>
                        <Pencil size={16} />
                      </button>
                      <button
                        className="icon-button"
                        title="Dépublier"
                        onClick={() => changerPublication('grammar_lessons', l.id, l.is_published)}
                      >
                        <EyeOff size={16} />
                      </button>
                      <button
                        className="icon-button danger-button"
                        title="Supprimer"
                        onClick={() => setConfirmation({ type: 'lecon', id: l.id })}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* BROUILLONS */}
          <div className="lesson-group">
            <div className="lesson-group-heading">
              <div>
                <span className="lesson-group-icon draft-icon">
                  <FileText size={17} />
                </span>
                <h3>Brouillons</h3>
              </div>
              <span className="result-count">
                {leconsChapitre.filter(l => !l.is_published).length}
              </span>
            </div>

            {leconsChapitre.filter(l => !l.is_published).length === 0 ? (
              <p className="lesson-group-empty">
                Aucun brouillon.
              </p>
            ) : (
              <div className="lesson-library-list">
                {leconsChapitre.filter(l => !l.is_published).map(l => (
                  <article className="lesson-library-card" key={l.id}>
                    <button
                      className="lesson-card-main"
                      onClick={() => ouvrirLecon(l.id)}
                    >
                      <span className="lesson-card-number">
                        {String(l.position).padStart(2, '0')}
                      </span>
                      <span className="lesson-card-info">
                        <strong>{l.title}</strong>
                        <small>Leçon pédagogique · Position {l.position}</small>
                      </span>
                      <ChevronRight size={19} />
                    </button>

                    <div className="lesson-card-actions">
                      <span className="status draft">Brouillon</span>
                      <input
                        type="checkbox"
                        checked={elementsSelectionnes.includes(l.id)}
                        onChange={() => basculerSelection(l.id)}
                        aria-label={`Sélectionner ${l.title}`}
                      />
                      <button className="icon-button" title="Modifier" onClick={() => ouvrirEditionLecon(l)}>
                        <Pencil size={16} />
                      </button>
                      <button
                        className="icon-button"
                        title="Publier"
                        onClick={() => changerPublication('grammar_lessons', l.id, l.is_published)}
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        className="icon-button danger-button"
                        title="Supprimer"
                        onClick={() => setConfirmation({ type: 'lecon', id: l.id })}
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </>
      )}
    </section>
  </>
)}


{/* VUE 3 : ÜBUNGEN */}
{vue === 'ubungen' &&
chapitreSelectionne &&
leconSelectionnee && (
  <div className="ubungen-dashboard">

    {/* EN-TÊTE DE LA LEÇON */}
    <section className="ubungen-overview">
      <div className="ubungen-overview-heading">
        <div>
          <span className="admin-eyebrow">LEKTION · GESTION PÉDAGOGIQUE</span>
          <h2>{leconSelectionnee.title}</h2>
          <p>
            Organisez les exercices obligatoires et les exercices bonus de cette leçon.
          </p>
        </div>

        <button
          className="primary-button"
          onClick={ouvrirCreationUbung}
        >
          <Plus size={16} />
          Nouvelle Übung
        </button>
      </div>

      <div className="ubungen-stats">
        <div className="ubungen-stat">
          <ClipboardList size={19} />
          <div>
            <strong>{ubungenLecon.length}</strong>
            <span>Übungen au total</span>
          </div>
        </div>

        <div className="ubungen-stat">
          <span className="ubungen-stat-emoji">🏆</span>
          <div>
            <strong>
              {ubungenLecon.filter(u => u.category === 'meistertraining').length}
            </strong>
            <span>Meistertraining</span>
          </div>
        </div>

        <div className="ubungen-stat">
          <span className="ubungen-stat-emoji">⚡</span>
          <div>
            <strong>
              {ubungenLecon.filter(u => u.category === 'extra_kick').length}
            </strong>
            <span>Extra-Kick</span>
          </div>
        </div>
      </div>
    </section>

    {/* SÉLECTION MULTIPLE */}
    {barreSelection()}

    {/* MEISTERTRAINING */}
    <section className="ubung-category meistertraining-category">

      <div className="ubung-category-heading">
        <div className="ubung-category-title">
          <span className="ubung-category-icon meistertraining-icon">
            🏆
          </span>
          <div>
            <h3>Meistertraining</h3>
            <p>Programme principal · Exercices obligatoires</p>
          </div>
        </div>

        <span className="ubung-category-count">
          {ubungenLecon.filter(u => u.category === 'meistertraining').length} Übung(s)
        </span>
      </div>

      {ubungenLecon.filter(u => u.category === 'meistertraining').length === 0 ? (
        <div className="ubung-category-empty">
          <ClipboardList size={25} />
          <strong>Aucune Übung dans Meistertraining</strong>
          <span>Ajoutez les exercices obligatoires de cette leçon.</span>
        </div>
      ) : (
        <div className="content-list">
          {ubungenLecon
            .filter(u => u.category === 'meistertraining')
            .map(u => (
              <article className="content-row" key={u.id}>

                <button
                  className="content-main"
                  onClick={() => ouvrirUbung(u.id)}
                >
                  <ClipboardList size={19} />
                  <span>
                    <strong>{u.title}</strong>
                    <small>
                      🏆 Meistertraining · {u.exerciseCount} question(s)
                      · {u.is_published ? 'Publié' : 'Brouillon'}
                    </small>
                  </span>
                  <ChevronRight size={17} />
                </button>

                <div className="content-actions">
                  <input
                    type="checkbox"
                    checked={elementsSelectionnes.includes(u.id)}
                    onChange={() => basculerSelection(u.id)}
                    aria-label={`Sélectionner ${u.title}`}
                  />

                  <button
                    className="icon-button"
                    title="Modifier"
                    onClick={() => ouvrirEditionUbung(u)}
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="icon-button"
                    title={u.is_published ? 'Dépublier' : 'Publier'}
                    onClick={() =>
                      changerPublication(
                        'grammar_ubungen',
                        u.id,
                        u.is_published
                      )
                    }
                  >
                    {u.is_published
                      ? <EyeOff size={16} />
                      : <Eye size={16} />}
                  </button>

                  <button
                    className="icon-button danger-button"
                    title="Supprimer"
                    onClick={() =>
                      setConfirmation({
                        type: 'ubung',
                        id: u.id,
                      })
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            ))}
        </div>
      )}
    </section>

    {/* EXTRA-KICK */}
    <section className="ubung-category extra-kick-category">

      <div className="ubung-category-heading">
        <div className="ubung-category-title">
          <span className="ubung-category-icon extra-kick-icon">
            ⚡
          </span>
          <div>
            <h3>Extra-Kick</h3>
            <p>Programme complémentaire · Exercices facultatifs</p>
          </div>
        </div>

        <span className="ubung-category-count">
          {ubungenLecon.filter(u => u.category === 'extra_kick').length} Übung(s)
        </span>
      </div>

      {ubungenLecon.filter(u => u.category === 'extra_kick').length === 0 ? (
        <div className="ubung-category-empty">
          <span className="ubungen-stat-emoji">⚡</span>
          <strong>Aucune Übung dans Extra-Kick</strong>
          <span>Ajoutez ici vos exercices bonus facultatifs.</span>
        </div>
      ) : (
        <div className="content-list">
          {ubungenLecon
            .filter(u => u.category === 'extra_kick')
            .map(u => (
              <article className="content-row" key={u.id}>

                <button
                  className="content-main"
                  onClick={() => ouvrirUbung(u.id)}
                >
                  <ClipboardList size={19} />
                  <span>
                    <strong>{u.title}</strong>
                    <small>
                      ⚡ Extra-Kick · {u.exerciseCount} question(s)
                      · {u.is_published ? 'Publié' : 'Brouillon'}
                    </small>
                  </span>
                  <ChevronRight size={17} />
                </button>

                <div className="content-actions">
                  <input
                    type="checkbox"
                    checked={elementsSelectionnes.includes(u.id)}
                    onChange={() => basculerSelection(u.id)}
                    aria-label={`Sélectionner ${u.title}`}
                  />

                  <button
                    className="icon-button"
                    title="Modifier"
                    onClick={() => ouvrirEditionUbung(u)}
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="icon-button"
                    title={u.is_published ? 'Dépublier' : 'Publier'}
                    onClick={() =>
                      changerPublication(
                        'grammar_ubungen',
                        u.id,
                        u.is_published
                      )
                    }
                  >
                    {u.is_published
                      ? <EyeOff size={16} />
                      : <Eye size={16} />}
                  </button>

                  <button
                    className="icon-button danger-button"
                    title="Supprimer"
                    onClick={() =>
                      setConfirmation({
                        type: 'ubung',
                        id: u.id,
                      })
                    }
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </article>
            ))}
        </div>
      )}
    </section>

  </div>
)}


{/* VUE 4 : QUESTIONS */}
{vue === 'questions' && ubungSelectionnee && (
  <div className="questions-dashboard">

    {/* EN-TÊTE */}
    <section className="questions-overview">
      <div className="questions-overview-heading">
        <div>
          <span className="admin-eyebrow">
            {ubungSelectionnee.category === 'meistertraining'
              ? '🏆 MEISTERTRAINING'
              : '⚡ EXTRA-KICK'}
            {' · GESTION DES QUESTIONS'}
          </span>

          <h2>{ubungSelectionnee.title}</h2>

          <p>
            {ubungSelectionnee.description ||
              'Gérez et organisez les questions de cette Übung.'}
          </p>
        </div>

        <button
          className="primary-button"
          onClick={ouvrirCreationExercice}
        >
          <Plus size={16} />
          Ajouter une question
        </button>
      </div>

      {/* STATISTIQUES */}
      <div className="questions-stats">
        <div className="questions-stat">
          <ListChecks size={20} />
          <div>
            <strong>{exercicesUbung.length}</strong>
            <span>Questions au total</span>
          </div>
        </div>

        <div className="questions-stat">
          <Eye size={20} />
          <div>
            <strong>
              {exercicesUbung.filter(e => e.is_published).length}
            </strong>
            <span>Questions publiées</span>
          </div>
        </div>

        <div className="questions-stat">
          <EyeOff size={20} />
          <div>
            <strong>
              {exercicesUbung.filter(e => !e.is_published).length}
            </strong>
            <span>Brouillons</span>
          </div>
        </div>
      </div>
    </section>

    {/* FORMATS DISPONIBLES */}
    <section className="questions-formats">
      <div className="questions-formats-heading">
        <div>
          <h3>Formats d'exercices</h3>
          <p>Les différents types de questions disponibles</p>
        </div>
      </div>

      <div className="questions-format-list">
        <span>QCM</span>
        <span>Texte à trous</span>
        <span>Vrai / Faux</span>
        <span>Association</span>
        <span>Ordre</span>
        <span>Expression écrite</span>
      </div>
    </section>

    {/* LISTE DES QUESTIONS */}
    <section className="questions-list-section">
      <div className="questions-list-heading">
        <div>
          <h3>Liste des questions</h3>
          <p>Consultez, modifiez et organisez vos questions.</p>
        </div>

        <span className="questions-count">
          {exercicesUbung.length} question(s)
        </span>
      </div>

      {barreSelection()}

      {exercicesUbung.length === 0 ? (
        <div className="questions-empty">
          <div className="questions-empty-icon">
            <ListChecks size={30} />
          </div>
          <strong>Aucune question pour le moment</strong>
          <span>
            Commencez à construire cette Übung en ajoutant votre première question.
          </span>
          <button
            className="primary-button"
            onClick={ouvrirCreationExercice}
          >
            <Plus size={16} />
            Créer la première question
          </button>
        </div>
      ) : (
        <div className="content-list">
          {exercicesUbung.map((e, index) => (
            <article className="content-row question-row" key={e.id}>

              <div className="content-main static-main">
                <span className="question-number">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <span className="question-content">
                  <strong>{e.title}</strong>
                  <small>
                    {typeLabel(e.exercise_type)} · {e.question}
                  </small>
                  <span className={`question-status ${
                    e.is_published
                      ? 'question-status-published'
                      : 'question-status-draft'
                  }`}>
                    {e.is_published ? 'Publié' : 'Brouillon'}
                  </span>
                </span>
              </div>

              <div className="content-actions">
                <input
                  type="checkbox"
                  checked={elementsSelectionnes.includes(e.id)}
                  onChange={() => basculerSelection(e.id)}
                  aria-label={`Sélectionner ${e.title}`}
                />

                <button
                  className="icon-button"
                  title="Modifier"
                  onClick={() => ouvrirEditionExercice(e)}
                >
                  <Pencil size={16} />
                </button>

                <button
                  className="icon-button"
                  title={e.is_published ? 'Dépublier' : 'Publier'}
                  onClick={() =>
                    changerPublication(
                      'grammar_exercises',
                      e.id,
                      e.is_published
                    )
                  }
                >
                  {e.is_published
                    ? <EyeOff size={16} />
                    : <Eye size={16} />}
                </button>

                <button
                  className="icon-button danger-button"
                  title="Supprimer"
                  onClick={() =>
                    setConfirmation({
                      type: 'exercice',
                      id: e.id,
                    })
                  }
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>

  </div>
)}

{/* FENÊTRE MODALE DES FORMULAIRES */}
{formulaire && (
<div
className="modal-overlay"
onClick={() => {
if (!enregistrement) setFormulaire(null)
}}
>
<section
className="form-panel modal-form"
onClick={e => e.stopPropagation()}
>
<div className="form-heading">
<div>
<span className="admin-eyebrow">
GESTION DU CONTENU
</span>
<h2>
{formulaire === 'chapitre' &&
(editionChapitre ? 'Modifier le chapitre' : 'Créer un chapitre')}
{formulaire === 'lecon' &&
(editionLecon ? 'Modifier la leçon' : 'Créer une leçon')}
{formulaire === 'ubung' &&
(editionUbung ? 'Modifier l’Übung' : 'Créer une Übung')}
{formulaire === 'exercice' &&
(editionExercice ? 'Modifier la question' : 'Créer une question')}
</h2>
</div>
<button
className="icon-button"
disabled={enregistrement}
onClick={() => setFormulaire(null)}
>
<X size={19} />
</button>
</div>
{/* FORMULAIRE CHAPITRE */}
{formulaire === 'chapitre' && (
<div className="form-grid">
<label>
Niveau
<select
value={niveauForm.level}
onChange={e =>
setNiveauForm({
...niveauForm,
level: e.target.value,
})
}
>
{['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(n => (
<option key={n}>{n}</option>
))}
</select>
</label>
<label>
Titre du chapitre *
<input
value={niveauForm.title}
onChange={e =>
setNiveauForm({
...niveauForm,
title: e.target.value,
})
}
placeholder="Ex. Personalpronomen"
/>
</label>
<label className="full-field">
Description
<textarea
rows={3}
value={niveauForm.description}
onChange={e =>
setNiveauForm({
...niveauForm,
description: e.target.value,
})
}
/>
</label>
</div>
)}
{/* FORMULAIRE LEÇON */}
{formulaire === 'lecon' && (
  <div className="lesson-editor">

    <div className="lesson-editor-intro">
      <div>
        <span className="editor-step">01 · IDENTITÉ</span>
        <h3>Informations de la leçon</h3>
        <p>Définissez le titre et l'objectif pédagogique.</p>
      </div>
      <BookOpen size={25} />
    </div>

    <label className="editor-label">
      Titre de la leçon *
      <input
        value={leconForm.title}
        onChange={e =>
          setLeconForm({
            ...leconForm,
            title: e.target.value,
          })
        }
        placeholder="Ex. Personalpronomen im Nominativ"
      />
    </label>

    <label className="editor-label">
      Objectif pédagogique
      <textarea
        rows={2}
        value={objectifLecon}
        onChange={e => setObjectifLecon(e.target.value)}
        placeholder="À la fin de cette leçon, l'étudiant sera capable de..."
      />
    </label>

    <div className="lesson-editor-divider" />

    <div className="lesson-editor-intro">
      <div>
        <span className="editor-step">02 · CONSTRUCTION</span>
        <h3>Contenu pédagogique</h3>
        <p>Construisez votre leçon en ajoutant des blocs.</p>
      </div>
      <Layers size={25} />
    </div>

    <div className="block-toolbar">
      <button type="button" onClick={() => ajouterBloc('text')}>
        <Plus size={15} /> Texte
      </button>

      <button type="button" onClick={() => ajouterBloc('examples')}>
        <Plus size={15} /> Exemples
      </button>

      <button type="button" onClick={() => ajouterBloc('table')}>
        <Plus size={15} /> Tableau
      </button>

      <button type="button" onClick={() => ajouterBloc('callout')}>
        <Plus size={15} /> Encadré
      </button>

      <button type="button" onClick={() => ajouterBloc('image')}>
        <Plus size={15} /> Image
      </button>
    </div>

    {blocsLecon.length === 0 && (
      <div className="block-empty">
        <Layers size={30} />
        <strong>Votre leçon est encore vide</strong>
        <span>Commencez par ajouter un bloc pédagogique.</span>
      </div>
    )}

    <div className="lesson-block-list">

      {blocsLecon.map((bloc, index) => (
        <article className="lesson-block-editor" key={bloc.id}>

          <div className="lesson-block-heading">
            <div>
              <span className="block-index">
                BLOC {String(index + 1).padStart(2, '0')}
              </span>
              <strong>
                {bloc.type === 'text' && 'Contenu textuel'}
                {bloc.type === 'examples' && 'Exemples'}
                {bloc.type === 'table' && 'Tableau'}
                {bloc.type === 'callout' && 'Encadré pédagogique'}
                {bloc.type === 'image' && 'Illustration'}
              </strong>
            </div>

            <div className="block-actions">
              <button
                type="button"
                title="Monter"
                disabled={index === 0}
                onClick={() => deplacerBloc(index, -1)}
              >
                ↑
              </button>

              <button
                type="button"
                title="Descendre"
                disabled={index === blocsLecon.length - 1}
                onClick={() => deplacerBloc(index, 1)}
              >
                ↓
              </button>

              <button
                type="button"
                className="block-delete"
                title="Supprimer"
                onClick={() => supprimerBloc(bloc.id)}
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>

          {bloc.type === 'text' && (
            <div className="block-fields">
              <label className="editor-label">
                Titre de la section
                <input
                  value={bloc.title || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { title: e.target.value })
                  }
                  placeholder="Ex. Was sind Personalpronomen?"
                />
              </label>

              <label className="editor-label">
                Contenu
                <textarea
                  rows={7}
                  value={bloc.content || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { content: e.target.value })
                  }
                  placeholder={'## Explication\n\nÉcrivez votre cours ici...\n\n**Exemple :** Maria lernt Deutsch.'}
                />
                <span className="form-hint">
                  Markdown accepté : titres, gras, listes et tableaux.
                </span>
              </label>
            </div>
          )}

          {bloc.type === 'examples' && (
            <div className="block-fields">
              <label className="editor-label">
                Titre
                <input
                  value={bloc.title || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { title: e.target.value })
                  }
                  placeholder="Beispiele"
                />
              </label>

              <label className="editor-label">
                Exemples (un par ligne)
                <textarea
                  rows={6}
                  value={(bloc.items || []).join('\n')}
                  onChange={e =>
                    modifierBloc(bloc.id, {
                      items: e.target.value.split('\n'),
                    })
                  }
                  placeholder={'Maria lernt Deutsch.\nSie lernt Deutsch.\nPeter arbeitet heute.'}
                />
                <span className="form-hint">
                  Vous pouvez écrire les phrases allemandes et leurs traductions.
                </span>
              </label>
            </div>
          )}

          {bloc.type === 'table' && (
            <div className="block-fields">
              <label className="editor-label">
                Titre du tableau
                <input
                  value={bloc.title || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { title: e.target.value })
                  }
                  placeholder="Übersicht"
                />
              </label>

              <label className="editor-label">
                Colonnes (séparées par |)
                <input
                  value={(bloc.headers || []).join(' | ')}
                  onChange={e =>
                    modifierBloc(bloc.id, {
                      headers: e.target.value.split('|').map(v => v.trim()),
                    })
                  }
                  placeholder="Pronom | Exemple | Traduction"
                />
              </label>

              <label className="editor-label">
                Lignes (une par ligne, colonnes séparées par |)
                <textarea
                  rows={6}
                  value={(bloc.rows || []).map(row => row.join(' | ')).join('\n')}
                  onChange={e =>
                    modifierBloc(bloc.id, {
                      rows: e.target.value.split('\n').map(line =>
                        line.split('|').map(v => v.trim())
                      ),
                    })
                  }
                  placeholder={'ich | Ich lerne | J’apprends\n du | Du lernst | Tu apprends'}
                />
              </label>
            </div>
          )}

          {bloc.type === 'callout' && (
            <div className="block-fields">
              <label className="editor-label">
                Style de l'encadré
                <select
                  value={bloc.variant || 'info'}
                  onChange={e =>
                    modifierBloc(bloc.id, {
                      variant: e.target.value as BlocLecon['variant'],
                    })
                  }
                >
                  <option value="info">Information</option>
                  <option value="success">Merke dir! · À retenir</option>
                  <option value="warning">Achtung · Attention</option>
                </select>
              </label>

              <label className="editor-label">
                Titre
                <input
                  value={bloc.title || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { title: e.target.value })
                  }
                  placeholder="Merke dir!"
                />
              </label>

              <label className="editor-label">
                Contenu
                <textarea
                  rows={4}
                  value={bloc.content || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { content: e.target.value })
                  }
                  placeholder="Écrivez la règle importante..."
                />
              </label>
            </div>
          )}

          {bloc.type === 'image' && (
            <div className="block-fields">
              <label className="editor-label">
                Titre de l'image
                <input
                  value={bloc.title || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { title: e.target.value })
                  }
                  placeholder="Illustration grammaticale"
                />
              </label>

              <label className="editor-label">
                URL de l'image
                <input
                  value={bloc.url || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { url: e.target.value })
                  }
                  placeholder="https://..."
                />
              </label>

              <label className="editor-label">
                Légende
                <input
                  value={bloc.caption || ''}
                  onChange={e =>
                    modifierBloc(bloc.id, { caption: e.target.value })
                  }
                  placeholder="Description de l'image"
                />
              </label>

              {bloc.url && (
                <div className="block-image-preview">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={bloc.url}
                    alt={bloc.title || 'Illustration de la leçon'}
                  />
                </div>
              )}
            </div>
          )}

        </article>
      ))}

    </div>

    <div className="lesson-editor-bottom">
      <Layers size={17} />
      {blocsLecon.length} bloc(s) pédagogique(s)
    </div>

    <span className="form-hint">
      Le contenu sera enregistré dans grammar_lessons.content au format JSONB.
      Les leçons existantes sont converties automatiquement à leur ouverture.
    </span>

  </div>
)}
{/* FORMULAIRE ÜBUNG */}
{formulaire === 'ubung' && (
<div className="form-grid single-grid">
<label>
Catégorie *
<select
value={ubungForm.category}
onChange={e =>
setUbungForm({
...ubungForm,
category: e.target.value,
})
}
>
<option value="meistertraining">
🏆 Meistertraining · Obligatoire
</option>
<option value="extra_kick">
⚡ Extra-Kick · Facultatif
</option>
</select>
</label>
<label>
Titre de l’Übung *
<input
value={ubungForm.title}
onChange={e =>
setUbungForm({
...ubungForm,
title: e.target.value,
})
}
placeholder="Ex. Übung 1 · Personalpronomen"
/>
</label>
<label>
Description
<textarea
rows={3}
value={ubungForm.description}
onChange={e =>
setUbungForm({
...ubungForm,
description: e.target.value,
})
}
/>
</label>
</div>
)}
{/* FORMULAIRE QUESTION */}
{formulaire === 'exercice' && (
<div className="form-grid single-grid">
<label>
Format de question *
<select
value={exerciceForm.type}
onChange={e =>
setExerciceForm({
...exerciceForm,
type: e.target.value,
})
}
>
<option value="qcm">QCM · Choix multiple</option>
<option value="fill_blank">Texte à trous</option>
<option value="true_false">Vrai / Faux</option>
<option value="matching">Association</option>
<option value="reorder">Remettre dans l’ordre</option>
<option value="writing">Expression écrite</option>
</select>
</label>
<label>
Titre interne
<input
value={exerciceForm.title}
onChange={e =>
setExerciceForm({
...exerciceForm,
title: e.target.value,
})
}
placeholder="Ex. Question 1"
/>
</label>
<label>
Étiquette
<input
value={exerciceForm.label}
onChange={e =>
setExerciceForm({
...exerciceForm,
label: e.target.value,
})
}
placeholder="Ex. Choisir le bon pronom"
/>
</label>
<label>
Consigne / question *
<textarea
rows={2}
value={exerciceForm.prompt}
onChange={e =>
setExerciceForm({
...exerciceForm,
prompt: e.target.value,
})
}
placeholder="Écrivez la consigne de la question..."
/>
</label>
{/* TEXTE À TROUS */}
{exerciceForm.type === 'fill_blank' && (
<label>
Phrase à compléter *
<input
value={exerciceForm.sentence}
onChange={e =>
setExerciceForm({
...exerciceForm,
sentence: e.target.value,
})
}
placeholder="___ sprechen Deutsch."
/>
<span className="form-hint">
Utilisez ___ pour indiquer l’emplacement du mot manquant.
</span>
</label>
)}
{/* QCM */}
{exerciceForm.type === 'qcm' && (
<label>
Choix de réponse (un par ligne) *
<textarea
rows={4}
value={exerciceForm.options}
onChange={e =>
setExerciceForm({
...exerciceForm,
options: e.target.value,
})
}
placeholder={'Wir\nIhr\nSie'}
/>
</label>
)}
{/* VRAI / FAUX */}
{exerciceForm.type === 'true_false' && (
<label>
Réponse correcte *
<select
value={exerciceForm.answer}
onChange={e =>
setExerciceForm({
...exerciceForm,
answer: e.target.value,
})
}
>
<option value="">Choisir la réponse...</option>
<option value="Vrai">Vrai</option>
<option value="Faux">Faux</option>
</select>
</label>
)}
{/* ASSOCIATION */}
{exerciceForm.type === 'matching' && (
<label>
Paires à associer *
<textarea
rows={6}
value={exerciceForm.pairs}
onChange={e =>
setExerciceForm({
...exerciceForm,
pairs: e.target.value,
})
}
placeholder={'der Schrank|er\ndie Lampe|sie\ndas Regal|es'}
/>
<span className="form-hint">
Une paire par ligne, sous la forme élément|réponse.
Exemple : der Tisch|er.
</span>
</label>
)}
{/* REMETTRE DANS L'ORDRE */}
{exerciceForm.type === 'reorder' && (
<>
<label>
Éléments à remettre dans l’ordre *
<textarea
rows={5}
value={exerciceForm.options}
onChange={e =>
setExerciceForm({
...exerciceForm,
options: e.target.value,
})
}
placeholder={'heute\nkrank\nist\nEr'}
/>
<span className="form-hint">
Inscrivez les éléments proposés, un par ligne.
</span>
</label>
<label>
Séquence correcte *
<textarea
rows={5}
value={exerciceForm.answer}
onChange={e =>
setExerciceForm({
...exerciceForm,
answer: e.target.value,
})
}
placeholder={'Er\nist\nheute\nkrank'}
/>
<span className="form-hint">
Réinscrivez les mêmes éléments dans le bon ordre.
</span>
</label>
</>
)}
{/* RÉPONSE POUR LES AUTRES FORMATS */}
{(exerciceForm.type === 'fill_blank' ||
exerciceForm.type === 'writing' ||
exerciceForm.type === 'qcm') && (
<label>
{exerciceForm.type === 'writing'
? 'Réponse modèle / exemple de rédaction *'
: exerciceForm.type === 'qcm'
? 'Bonne(s) réponse(s) *'
: 'Réponse(s) correcte(s) *'}
<textarea
rows={3}
value={exerciceForm.answer}
onChange={e =>
setExerciceForm({
...exerciceForm,
answer: e.target.value,
})
}
placeholder={
exerciceForm.type === 'writing'
? 'Écrivez un exemple de réponse attendue...'
: 'Une réponse par ligne si plusieurs réponses.'
}
/>
<span className="form-hint">
{exerciceForm.type === 'writing'
? 'Cette réponse sert de modèle. La correction automatique d’une rédaction libre devra être gérée séparément.'
: 'Pour plusieurs réponses acceptées, inscrivez une réponse par ligne.'}
</span>
</label>
)}
{/* EXPLICATION FRANÇAISE */}
<label>
Explication de la correction (français)
<textarea
rows={4}
value={exerciceForm.explanation}
onChange={e =>
setExerciceForm({
...exerciceForm,
explanation: e.target.value,
})
}
placeholder="Expliquez pourquoi cette réponse est correcte..."
/>
</label>
{/* EXPLICATION ARABE */}
<label>
Explication de la correction (العربية)
<textarea
rows={4}
dir="rtl"
lang="ar"
value={exerciceForm.explanation_ar}
onChange={e =>
setExerciceForm({
...exerciceForm,
explanation_ar: e.target.value,
})
}
placeholder="اكتب شرح الإجابة الصحيحة هنا..."
/>
</label>
</div>
)}
{/* BOUTONS DU FORMULAIRE */}
<div className="form-footer">
<span>
Les nouveaux contenus sont enregistrés comme brouillons.
</span>
<div>
<button
className="secondary-button"
disabled={enregistrement}
onClick={() => setFormulaire(null)}
>
Annuler
</button>
<button
className="primary-button"
disabled={enregistrement}
onClick={
formulaire === 'chapitre' ? enregistrerChapitre :
formulaire === 'lecon' ? enregistrerLecon :
formulaire === 'ubung' ? enregistrerUbung :
enregistrerExercice
}
>
{enregistrement
? <Loader2 size={16} className="spin" />
: <Save size={16} />}
Enregistrer
</button>
</div>
</div>
</section>
</div>
)}

{/* CONFIRMATION DE SUPPRESSION */}
{confirmation && (
  <div className="confirmation-overlay">
    <div className="confirmation-panel">

      <div className="confirmation-heading">
        <div className="confirmation-icon">
          <AlertCircle size={23} />
        </div>

        <div>
          <h3>Confirmer la suppression</h3>
          <span className="confirmation-subtitle">
            Vérification avant suppression
          </span>
        </div>
      </div>

      <p className="confirmation-message">
        {confirmation.ids?.length
          ? `Voulez-vous vraiment supprimer ${confirmation.ids.length} élément(s) sélectionné(s) ?`
          : 'Voulez-vous vraiment supprimer cet élément ?'}
        <strong> Cette action est définitive.</strong>
      </p>

      <div className="confirmation-actions">
        <button
          className="confirmation-cancel"
          onClick={() => setConfirmation(null)}
        >
          Annuler
        </button>

        <button
          className="confirmation-delete"
          disabled={enregistrement}
          onClick={() => {
            if (confirmation.ids?.length) {
              supprimerSelection(confirmation.type, confirmation.ids)
            } else {
              supprimerElement(confirmation.type, confirmation.id)
            }
          }}
        >
          <Trash2 size={15} />
          {enregistrement ? 'Suppression...' : 'Supprimer'}
        </button>
      </div>

    </div>
  </div>
)}

<footer className="admin-footer">
<span>© 2026 Deutsch Erfolg</span>
<span>Plateforme de préparation TELC B1 & B2</span>
</footer>
</div>
</section>
<style jsx>{`
/* ÉDITEUR VISUEL DES LEÇONS */

.modal-form:has(.lesson-editor) {
  max-width: 1050px;
}

.lesson-editor {
  display: flex;
  flex-direction: column;
  gap: 17px;
}

.lesson-editor-intro {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  padding: 17px;
  border-radius: 12px;
  background: #f8f7f3;
  color: #a18448;
}

.lesson-editor-intro h3 {
  margin: 5px 0;
  color: #172b4d;
  font-size: 15px;
}

.lesson-editor-intro p {
  margin: 0;
  color: #8994a7;
  font-size: 11px;
}

.editor-step,
.block-index {
  color: #a18448;
  font-size: 9px;
  font-weight: 800;
  letter-spacing: 1px;
}

.editor-label {
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #172b4d;
  font-size: 12px;
  font-weight: 700;
}

.editor-label input,
.editor-label textarea,
.editor-label select {
  width: 100%;
  padding: 11px 12px;
  border: 1px solid #e5e9f2;
  border-radius: 8px;
  background: white;
  color: #273348;
  font: inherit;
  font-size: 12px;
  outline: none;
}

.editor-label input:focus,
.editor-label textarea:focus,
.editor-label select:focus {
  border-color: #c6a75f;
}

.editor-label textarea {
  resize: vertical;
  line-height: 1.7;
}

.lesson-editor-divider {
  height: 1px;
  background: #edf0f5;
  margin: 5px 0;
}

.block-toolbar {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.block-toolbar button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 9px 12px;
  border: 1px solid #e8e3d8;
  border-radius: 8px;
  background: white;
  color: #92743c;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.block-toolbar button:hover {
  background: #f8f3e8;
  border-color: #c6a75f;
}

.block-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 35px 15px;
  border: 1px dashed #ded9ce;
  border-radius: 12px;
  color: #a18448;
  text-align: center;
}

.block-empty strong {
  color: #172b4d;
  font-size: 13px;
}

.block-empty span {
  color: #8994a7;
  font-size: 11px;
}

.lesson-block-list {
  display: flex;
  flex-direction: column;
  gap: 13px;
}

.lesson-block-editor {
  overflow: hidden;
  border: 1px solid #e8eaf0;
  border-radius: 12px;
  background: white;
}

.lesson-block-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 13px 15px;
  border-bottom: 1px solid #edf0f5;
  background: #fafbfd;
}

.lesson-block-heading>div:first-child {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.lesson-block-heading strong {
  color: #172b4d;
  font-size: 12px;
}

.block-actions {
  display: flex;
  align-items: center;
  gap: 5px;
}

.block-actions button {
  display: grid;
  place-items: center;
  width: 30px;
  height: 30px;
  border: 1px solid #e5e9f2;
  border-radius: 7px;
  background: white;
  color: #657187;
  cursor: pointer;
}

.block-actions button:disabled {
  opacity: .35;
  cursor: not-allowed;
}

.block-actions .block-delete {
  color: #b54e57;
}

.block-fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 16px;
}

.block-image-preview {
  overflow: hidden;
  max-width: 400px;
  border-radius: 10px;
  border: 1px solid #edf0f5;
}

.block-image-preview img {
  display: block;
  width: 100%;
  max-height: 220px;
  object-fit: contain;
  background: #fafafa;
}

.lesson-editor-bottom {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px;
  border-radius: 9px;
  background: #f8f3e8;
  color: #92743c;
  font-size: 11px;
  font-weight: 700;
}
.page-heading {
display:flex;
align-items:center;
justify-content:space-between;
gap:20px;
margin-bottom:25px;
}
.page-heading h1 {
margin:8px 0;
color:#172b4d;
font-size:28px;
font-weight:750;
}
.page-heading p,
.library-heading p,
.section-heading p {
margin:0;
color:#8994a7;
font-size:13px;
}
.primary-button {
display:inline-flex;
align-items:center;
justify-content:center;
gap:8px;
padding:11px 16px;
border:0;
border-radius:9px;
background:#172b4d;
color:#d6b56d;
font-size:12px;
font-weight:700;
cursor:pointer;
}
.primary-button:disabled {
opacity:.6;
cursor:not-allowed;
}
.secondary-button,
.delete-button {
display:inline-flex;
align-items:center;
justify-content:center;
gap:7px;
padding:9px 12px;
border:1px solid #e5e9f2;
border-radius:8px;
background:white;
color:#536078;
font-size:11px;
font-weight:700;
cursor:pointer;
}
.delete-button {
border-color:#f0d9dc;
background:#fff5f5;
color:#b54e57;
}
.stats-grid {
display:grid;
grid-template-columns:repeat(4,minmax(0,1fr));
gap:14px;
margin-bottom:22px;
}
.stat-card {
display:flex;
align-items:center;
gap:13px;
padding:19px;
background:white;
border:1px solid #edf0f5;
border-radius:13px;
}
.stat-icon {
display:grid;
place-items:center;
width:43px;
height:43px;
border-radius:11px;
background:#f8f3e8;
color:#a18448;
}
.stat-card strong,
.stat-card div span {
display:block;
}
.stat-card strong {
color:#172b4d;
font-size:23px;
}
.stat-card div span {
color:#8994a7;
font-size:11px;
}
.library-panel,
.form-panel {
padding:23px;
background:white;
border:1px solid #edf0f5;
border-radius:16px;
margin-bottom:20px;
}
.library-heading,
.form-heading,
.section-heading {
display:flex;
align-items:center;
justify-content:space-between;
gap:15px;
margin-bottom:19px;
}
.library-heading h2,
.form-heading h2,
.section-heading h2 {
margin:0 0 6px;
color:#172b4d;
font-size:18px;
}
.result-count {
padding:7px 10px;
border-radius:8px;
background:#f8f3e8;
color:#92743c;
font-size:11px;
font-weight:700;
}
.search-field {
display:flex;
align-items:center;
gap:10px;
padding:11px 13px;
margin-bottom:17px;
border:1px solid #e5e9f2;
border-radius:9px;
color:#8994a7;
}
.search-field input {
width:100%;
border:0;
outline:0;
color:#273348;
font-size:12px;
background:transparent;
}
.chapter-list,
.content-list {
display:flex;
flex-direction:column;
gap:10px;
}
.chapter-card {
position:relative;
display:flex;
align-items:center;
gap:14px;
padding:15px;
border:1px solid #edf0f5;
border-radius:12px;
}
.chapter-number {
display:grid;
place-items:center;
width:46px;
height:46px;
flex-shrink:0;
border-radius:12px;
background:#f8f3e8;
color:#92743c;
font-size:14px;
font-weight:750;
}
.chapter-info {
flex:1;
min-width:0;
}
.chapter-title-line {
display:flex;
align-items:center;
gap:10px;
flex-wrap:wrap;
}
.chapter-title-line h3 {
margin:0;
color:#273348;
font-size:13px;
font-weight:700;
}
.chapter-info>p {
margin:6px 0;
color:#8994a7;
font-size:11px;
}
.chapter-meta {
display:flex;
gap:13px;
flex-wrap:wrap;
color:#92743c;
font-size:10px;
font-weight:600;
}
.status {
padding:4px 8px;
border-radius:20px;
font-size:10px;
font-weight:700;
}
.status.published {
background:#edf7f0;
color:#43845a;
}
.status.draft {
background:#f5f1e8;
color:#9a7940;
}
.chapter-actions,
.content-actions {
display:flex;
align-items:center;
gap:5px;
}
.icon-button {
display:grid;
place-items:center;
width:33px;
height:33px;
border:1px solid #e8eaf0;
border-radius:8px;
background:white;
color:#657187;
cursor:pointer;
}
.icon-button:disabled {
opacity:.5;
cursor:not-allowed;
}
.danger-button {
color:#b45b62;
}
.breadcrumb {
display:flex;
align-items:center;
gap:8px;
margin:0 0 15px;
color:#8994a7;
font-size:12px;
flex-wrap:wrap;
}
.breadcrumb button {
border:0;
background:none;
color:#92743c;
cursor:pointer;
font-size:12px;
}
.breadcrumb strong {
color:#172b4d;
}
.content-row {
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
padding:12px;
border:1px solid #edf0f5;
border-radius:10px;
}
.content-main {
display:flex;
align-items:center;
gap:12px;
flex:1;
min-width:0;
border:0;
background:transparent;
color:#92743c;
text-align:left;
cursor:pointer;
}
.content-main span {
display:flex;
flex-direction:column;
gap:4px;
min-width:0;
}
.content-main strong {
color:#273348;
font-size:12px;
}
.content-main small {
color:#8994a7;
font-size:10px;
overflow-wrap:anywhere;
}
.static-main {
cursor:default;
}
.question-number {
display:grid!important;
place-items:center;
width:35px;
height:35px;
flex-shrink:0;
border-radius:9px;
background:#f8f3e8;
color:#92743c;
font-weight:700;
}
.format-guide {
display:flex;
flex-direction:column;
gap:5px;
padding:12px;
margin-bottom:15px;
border-radius:9px;
background:#f8f9fb;
color:#172b4d;
font-size:11px;
}
.format-guide span {
color:#8994a7;
}
/* MODALE */
.modal-overlay {
position:fixed;
inset:0;
z-index:1000;
display:flex;
align-items:center;
justify-content:center;
padding:20px;
background:rgba(15,25,45,.58);
backdrop-filter:blur(4px);
}
.modal-form {
width:100%;
max-width:720px;
max-height:90vh;
overflow-y:auto;
margin:0;
box-shadow:0 20px 70px rgba(0,0,0,.2);
}
.form-grid {
display:grid;
grid-template-columns:1fr 2fr;
gap:15px;
}
.single-grid {
grid-template-columns:1fr;
}
.form-grid label {
display:flex;
flex-direction:column;
gap:7px;
color:#172b4d;
font-size:12px;
font-weight:700;
}
.form-grid input,
.form-grid select,
.form-grid textarea {
width:100%;
padding:11px 12px;
border:1px solid #e5e9f2;
border-radius:8px;
background:white;
color:#273348;
font:inherit;
font-size:12px;
outline:none;
}
.form-grid input:focus,
.form-grid select:focus,
.form-grid textarea:focus {
border-color:#c6a75f;
}
.form-grid textarea {
resize:vertical;
}
.full-field {
grid-column:1/-1;
}
.json-editor {
font-family:monospace!important;
font-size:11px!important;
}
.form-hint {
color:#8994a7;
font-size:10px;
font-weight:400;
line-height:1.5;
}
.form-footer {
display:flex;
align-items:center;
justify-content:space-between;
gap:12px;
margin-top:18px;
padding-top:16px;
border-top:1px solid #edf0f5;
}
.form-footer>span {
color:#8994a7;
font-size:11px;
}
.form-footer>div {
display:flex;
gap:8px;
}
.empty-state {
display:flex;
flex-direction:column;
align-items:center;
gap:11px;
padding:40px 15px;
color:#8994a7;
text-align:center;
}
.empty-state strong {
color:#172b4d;
font-size:14px;
}
.empty-state span {
font-size:12px;
}
.notice {
display:flex;
align-items:center;
gap:10px;
padding:12px 14px;
margin-bottom:16px;
border-radius:9px;
font-size:12px;
}
.notice button {
margin-left:auto;
border:0;
background:transparent;
color:inherit;
cursor:pointer;
}
.error-notice {
background:#fff3f3;
color:#b64d55;
border:1px solid #f3dddd;
}
.success-notice {
background:#eff8f1;
color:#42835a;
border:1px solid #dcefe0;
}

/* BARRE DE SÉLECTION MULTIPLE */

.selection-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
  padding: 13px 16px;
  margin: 18px 0;
  border: 1px solid #e8eaf0;
  border-radius: 12px;
  background: #fafbfd;
}

.selection-toolbar label {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #273348;
  font-size: 12px;
  font-weight: 650;
  cursor: pointer;
}

.selection-toolbar input {
  width: 17px;
  height: 17px;
  margin: 0;
  accent-color: #172b4d;
  cursor: pointer;
}

.selection-toolbar > span {
  padding: 6px 11px;
  border-radius: 20px;
  background: #f8f3e8;
  color: #92743c;
  font-size: 11px;
  font-weight: 750;
}

.selection-toolbar .delete-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 9px 13px;
  border: 1px solid #f0d9dc;
  border-radius: 8px;
  background: #fff5f5;
  color: #b54e57;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: background .2s ease;
}

.selection-toolbar .delete-button:hover:not(:disabled) {
  background: #ffe8e8;
}

.selection-toolbar .delete-button:disabled {
  opacity: .4;
  cursor: not-allowed;
}

@media (max-width: 600px) {
  .selection-toolbar {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 12px;
  }

  .selection-toolbar label {
    grid-column: 1 / -1;
  }

  .selection-toolbar .delete-button {
    grid-column: 1 / -1;
    width: 100%;
  }
}



/* FENÊTRE DE CONFIRMATION */

.confirmation-overlay {
  position: fixed;
  inset: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-sizing: border-box;
  background: rgba(23, 43, 77, 0.16);
  backdrop-filter: blur(2px);
}

.confirmation-panel {
  position: relative;
  width: 100%;
  max-width: 430px;
  padding: 25px;
  box-sizing: border-box;
  border: 1px solid #e9e2d3;
  border-radius: 17px;
  background: #ffffff;
  box-shadow: 0 18px 55px rgba(23, 43, 77, 0.16);
  animation: confirmation-appear .22s ease-out;
}

.confirmation-heading {
  display: flex;
  align-items: center;
  gap: 13px;
}

.confirmation-icon {
  display: grid;
  place-items: center;
  width: 49px;
  height: 49px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #f8f3e8;
  color: #a18448;
}

.confirmation-heading h3 {
  margin: 0 0 5px;
  color: #172b4d;
  font-size: 16px;
  font-weight: 750;
}

.confirmation-subtitle {
  color: #8994a7;
  font-size: 11px;
}

.confirmation-message {
  margin: 22px 0;
  padding: 15px;
  border-radius: 10px;
  background: #f8f9fb;
  color: #536078;
  font-size: 12px;
  line-height: 1.8;
}

.confirmation-message strong {
  color: #b54e57;
  font-weight: 700;
}

.confirmation-actions {
  display: flex;
  justify-content: flex-end;
  gap: 9px;
  padding-top: 15px;
  border-top: 1px solid #edf0f5;
}

.confirmation-cancel,
.confirmation-delete {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 10px 16px;
  border-radius: 9px;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  transition: all .2s ease;
}

.confirmation-cancel {
  border: 1px solid #e5e9f2;
  background: #ffffff;
  color: #536078;
}

.confirmation-cancel:hover {
  background: #f5f6f8;
}

.confirmation-delete {
  border: 1px solid #b54e57;
  background: #b54e57;
  color: #ffffff;
}

.confirmation-delete:hover:not(:disabled) {
  background: #963d46;
}

.confirmation-delete:disabled {
  opacity: .5;
  cursor: not-allowed;
}

@keyframes confirmation-appear {
  from {
    opacity: 0;
    transform: translateY(8px) scale(.97);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 500px) {
  .confirmation-panel {
    padding: 20px;
  }

  .confirmation-actions {
    flex-direction: column-reverse;
  }

  .confirmation-cancel,
  .confirmation-delete {
    width: 100%;
  }
}


.spin {
animation:spin 1s linear infinite;
}
@keyframes spin {
to { transform:rotate(360deg); }
}
@media(max-width:950px) {
.stats-grid {
grid-template-columns:repeat(2,minmax(0,1fr));
}
}
@media(max-width:750px) {
.page-heading {
align-items:flex-start;
flex-direction:column;
}
.modal-form:has(.lesson-editor) {
  max-width: 100%;
}

.block-toolbar button {
  flex: 1 1 calc(50% - 8px);
  justify-content: center;
}

.lesson-block-heading {
  align-items: flex-start;
}
.chapter-card {
align-items:flex-start;
flex-wrap:wrap;
}
.chapter-info {
min-width:calc(100% - 65px);
}
.chapter-actions {
width:100%;
justify-content:flex-end;
}
.form-grid {
grid-template-columns:1fr;
}
.full-field {
grid-column:auto;
}
.library-panel,
.form-panel {
padding:15px;
}
.form-footer {
align-items:flex-start;
flex-direction:column;
}
.stats-grid {
gap:9px;
}
.stat-card {
padding:13px;
}
.section-heading {
align-items:flex-start;
flex-direction:column;
}
.content-row {
align-items:flex-start;
flex-wrap:wrap;
}
.content-main {
min-width:100%;
}
.content-actions {
width:100%;
justify-content:flex-end;
}
.modal-overlay {
align-items:center;
padding:10px;
}
.modal-form {
max-height:92vh;
border-radius:16px 16px 10px 10px;
}
}

.lesson-group {
  margin-top: 25px;
}

.lesson-group-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: 1px solid #edf0f5;
}

.lesson-group-heading > div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.lesson-group-heading h3 {
  margin: 0;
  color: #172b4d;
  font-size: 14px;
}

.lesson-group-icon {
  display: grid;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 9px;
}

.lesson-group-icon.published-icon {
  background: #edf7f0;
  color: #43845a;
}

.lesson-group-icon.draft-icon {
  background: #f5f1e8;
  color: #9a7940;
}

.lesson-group-empty {
  padding: 15px;
  border: 1px dashed #e5e9f2;
  border-radius: 9px;
  color: #8994a7;
  font-size: 12px;
  text-align: center;
}

/* =========================================
   TABLEAU DE BORD — GESTION DES CHAPITRES
========================================= */

.chapters-dashboard {
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.chapters-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.chapters-header h2 {
  margin: 7px 0;
  font-size: 25px;
  font-weight: 750;
  letter-spacing: -0.7px;
}

.chapters-header p {
  margin: 0;
  color: var(--text-muted, #777);
  font-size: 14px;
  line-height: 1.6;
}

.section-eyebrow {
  display: block;
  font-size: 10px;
  font-weight: 800;
  letter-spacing: 1.4px;
  color: var(--text-muted, #888);
}

.chapters-header-count {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 12px 16px;
  border: 1px solid var(--border, #e5e7eb);
  border-radius: 12px;
  font-size: 13px;
  font-weight: 650;
  white-space: nowrap;
}

.chapters-library {
  overflow: visible;
}

.chapters-library .library-heading {
  align-items: flex-end;
}

.chapters-library .library-heading h2 {
  margin-top: 7px;
}

.chapters-library .library-heading p {
  margin-top: 5px;
}

.chapters-library .search-field {
  margin-top: 22px;
}

.chapters-library .chapter-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 20px;
}

.chapters-library .chapter-card {
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.chapters-library .chapter-card:hover {
  border-color: var(--primary, #64748b);
  transform: translateY(-1px);
}

.chapters-library .chapter-info {
  min-width: 0;
}

.chapters-library .chapter-title-line {
  flex-wrap: wrap;
  gap: 10px;
}

.chapters-library .chapter-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 9px;
}

.chapters-library .chapter-actions {
  flex-shrink: 0;
}

@media (max-width: 700px) {
  .chapters-header {
    align-items: flex-start;
  }

  .chapters-header h2 {
    font-size: 21px;
  }

  .chapters-header-count {
    padding: 9px 12px;
  }

  .chapters-library .chapter-card {
    flex-wrap: wrap;
  }

  .chapters-library .chapter-actions {
    width: 100%;
    justify-content: flex-end;
  }
}

/* FILTRES DES CHAPITRES */

.chapter-filters {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 13px;
  padding: 15px;
  margin-bottom: 18px;
  border: 1px solid #edf0f5;
  border-radius: 12px;
  background: #fafbfd;
}

.chapter-filter-group {
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 165px;
}

.chapter-filter-group label {
  color: #536078;
  font-size: 11px;
  font-weight: 700;
}

.chapter-filter-group select {
  min-width: 165px;
  padding: 10px 12px;
  border: 1px solid #e5e9f2;
  border-radius: 8px;
  background: white;
  color: #273348;
  font-size: 12px;
  outline: none;
  cursor: pointer;
}

.chapter-filter-group select:focus {
  border-color: #c6a75f;
}

.reset-filters-button {
  padding: 10px 13px;
  border: 1px solid #e5e9f2;
  border-radius: 8px;
  background: white;
  color: #657187;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
}

.reset-filters-button:hover {
  background: #f8f3e8;
  color: #92743c;
}

/* MENU DES CHAPITRES */

.chapter-menu {
  position: relative;
}

.chapter-menu summary {
  display: grid;
  place-items: center;
  width: 36px;
  height: 36px;
  border: 1px solid #e8eaf0;
  border-radius: 9px;
  background: white;
  color: #536078;
  font-size: 23px;
  line-height: 1;
  cursor: pointer;
  list-style: none;
}

.chapter-menu summary::-webkit-details-marker {
  display: none;
}

.chapter-menu summary:hover {
  border-color: #c6a75f;
  color: #92743c;
}

.chapter-menu-dropdown {
  position: absolute;
  top: calc(100% + 7px);
  right: 0;
  z-index: 50;
  display: flex;
  flex-direction: column;
  width: 190px;
  padding: 6px;
  border: 1px solid #e8eaf0;
  border-radius: 11px;
  background: white;
  box-shadow: 0 10px 30px rgba(23, 43, 77, .13);
}

.chapter-menu-dropdown button {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: #536078;
  font-size: 11px;
  text-align: left;
  cursor: pointer;
}

.chapter-menu-dropdown button:hover {
  background: #f5f6f8;
}

.chapter-menu-dropdown .chapter-menu-delete {
  color: #b54e57;
}

.chapter-menu-dropdown .chapter-menu-delete:hover {
  background: #fff3f3;
}

@media (max-width: 600px) {
  .chapter-filters {
    align-items: stretch;
    flex-direction: column;
  }

  .chapter-filter-group,
  .chapter-filter-group select,
  .reset-filters-button {
    width: 100%;
  }
}

/* NOUVELLE BARRE DE SÉLECTION */


:global(.bulk-actions-bar) {
  display: flex !important;
  align-items: center !important;
  justify-content: space-between !important;
  gap: 16px !important;
  flex-wrap: nowrap !important;
  width: 100%;
  box-sizing: border-box;
  padding: 14px 18px !important;
  margin: 18px 0 !important;
  border: 1px solid #e5e9f2 !important;
  border-radius: 12px !important;
  background: #ffffff !important;
  box-shadow: 0 3px 12px rgba(23, 43, 77, 0.05);
}

:global(.bulk-select-all) {
  display: flex !important;
  align-items: center !important;
  gap: 10px !important;
  color: #273348;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

:global(.bulk-select-all input) {
  width: 17px !important;
  height: 17px !important;
  margin: 0 !important;
  accent-color: #172b4d;
  flex-shrink: 0;
}

:global(.bulk-selection-count) {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 6px;
  padding: 8px 13px;
  border-radius: 30px;
  background: #f8f3e8;
  color: #92743c;
  font-size: 11px;
  white-space: nowrap;
}

:global(.bulk-selection-count strong) {
  font-size: 14px;
}

:global(.bulk-delete-button) {
  display: inline-flex !important;
  align-items: center !important;
  justify-content: center !important;
  gap: 8px;
  padding: 10px 15px;
  border: 1px solid #f0d9dc;
  border-radius: 8px;
  background: #fff5f5;
  color: #b54e57;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
}

:global(.bulk-delete-button:disabled) {
  opacity: 0.4;
  cursor: not-allowed;
}

:global(.bulk-delete-button:not(:disabled):hover) {
  background: #ffe8e8;
}

@media (max-width: 600px) {
  :global(.bulk-actions-bar) {
    flex-wrap: wrap !important;
    gap: 12px !important;
  }

  :global(.bulk-delete-button) {
    width: 100%;
  }
}

/* =========================================
   DEUTSCH-ERFOLG — VUE 2 : LEÇONS
========================================= */

/* EN-TÊTE DU CHAPITRE */

:global(.lesson-overview) {
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
}

:global(.lesson-overview-heading) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 22px 24px;
  border: 1px solid #edf0f5;
  border-radius: 14px;
  background: #fff;
}

:global(.lesson-chapter-info) {
  min-width: 0;
}

:global(.lesson-chapter-info h2) {
  margin: 8px 0 6px;
  color: #172b4d;
  font-size: 21px;
  font-weight: 750;
  line-height: 1.4;
}

:global(.lesson-chapter-info p) {
  margin: 0;
  color: #8994a7;
  font-size: 12px;
  line-height: 1.6;
}

/* STATISTIQUES */

:global(.lesson-overview-stats) {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

:global(.lesson-overview-stat) {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
  padding: 18px;
  border: 1px solid #edf0f5;
  border-radius: 13px;
  background: #fff;
}

:global(.lesson-stat-icon) {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 11px;
  background: #f8f3e8;
  color: #a18448;
}

:global(.lesson-stat-icon.published-icon) {
  background: #edf7f0;
  color: #43845a;
}

:global(.lesson-stat-icon.draft-icon) {
  background: #f5f1e8;
  color: #9a7940;
}

:global(.lesson-overview-stat > div) {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

:global(.lesson-overview-stat strong) {
  color: #172b4d;
  font-size: 23px;
  font-weight: 750;
  line-height: 1.2;
}

:global(.lesson-overview-stat div span) {
  color: #8994a7;
  font-size: 11px;
}

/* BIBLIOTHÈQUE */

:global(.lesson-library) {
  padding: 23px;
  margin-bottom: 20px;
  border: 1px solid #edf0f5;
  border-radius: 16px;
  background: #fff;
}

:global(.lesson-library-heading) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 19px;
}

:global(.lesson-library-heading h2) {
  margin: 6px 0;
  color: #172b4d;
  font-size: 18px;
  font-weight: 750;
}

:global(.lesson-library-heading p) {
  margin: 0;
  color: #8994a7;
  font-size: 12px;
}

/* GROUPES */

:global(.lesson-group) {
  margin-top: 25px;
}

:global(.lesson-group-heading) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 13px;
  padding-bottom: 13px;
  border-bottom: 1px solid #edf0f5;
}

:global(.lesson-group-heading > div) {
  display: flex;
  align-items: center;
  gap: 10px;
}

:global(.lesson-group-heading h3) {
  margin: 0;
  color: #172b4d;
  font-size: 13px;
  font-weight: 750;
}

:global(.lesson-group-icon) {
  display: grid;
  place-items: center;
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 10px;
}

:global(.lesson-group-icon.published-icon) {
  background: #edf7f0;
  color: #43845a;
}

:global(.lesson-group-icon.draft-icon) {
  background: #f5f1e8;
  color: #9a7940;
}

:global(.lesson-group-empty) {
  padding: 15px;
  border: 1px dashed #e5e9f2;
  border-radius: 9px;
  color: #8994a7;
  font-size: 12px;
  text-align: center;
}

/* LISTE DES LEÇONS */

:global(.lesson-library-list) {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

:global(.lesson-library-card) {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  min-width: 0;
  padding: 14px 15px;
  border: 1px solid #e9edf3;
  border-radius: 11px;
  background: #fff;
  transition: border-color .2s ease, box-shadow .2s ease;
}

:global(.lesson-library-card:hover) {
  border-color: #d6c59f;
  box-shadow: 0 4px 14px rgba(23, 43, 77, .05);
}

/* INFORMATIONS DE LA LEÇON */

:global(.lesson-card-main) {
  display: flex;
  align-items: center;
  gap: 13px;
  flex: 1;
  min-width: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #92743c;
  text-align: left;
  cursor: pointer;
}

:global(.lesson-card-number) {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
  border-radius: 10px;
  background: #f8f3e8;
  color: #92743c;
  font-size: 13px;
  font-weight: 800;
}

:global(.lesson-card-info) {
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  min-width: 0;
}

:global(.lesson-card-info strong) {
  overflow: hidden;
  color: #273348;
  font-size: 12px;
  font-weight: 750;
  text-overflow: ellipsis;
  white-space: nowrap;
}

:global(.lesson-card-info small) {
  color: #8994a7;
  font-size: 10px;
}

:global(.lesson-card-main > svg) {
  flex-shrink: 0;
  color: #8994a7;
}

/* ACTIONS */

:global(.lesson-card-actions) {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 7px;
  flex-shrink: 0;
}

:global(.lesson-card-actions input) {
  width: 16px;
  height: 16px;
  margin: 0 3px;
  accent-color: #172b4d;
  cursor: pointer;
}

:global(.lesson-card-actions .status) {
  margin-right: 4px;
  white-space: nowrap;
}

:global(.lesson-card-actions .icon-button) {
  width: 34px;
  height: 34px;
  flex-shrink: 0;
}

/* RESPONSIVE */

@media (max-width: 900px) {
  :global(.lesson-library-card) {
    align-items: flex-start;
    flex-direction: column;
  }

  :global(.lesson-card-actions) {
    justify-content: flex-start;
    width: 100%;
    padding-top: 11px;
    border-top: 1px solid #edf0f5;
  }
}

@media (max-width: 600px) {
  :global(.lesson-overview-heading) {
    align-items: flex-start;
    flex-direction: column;
    padding: 17px;
  }

  :global(.lesson-overview-stats) {
    grid-template-columns: 1fr;
  }

  :global(.lesson-library) {
    padding: 15px;
  }

  :global(.lesson-library-heading) {
    align-items: flex-start;
    flex-direction: column;
  }

  :global(.lesson-card-actions) {
    flex-wrap: wrap;
  }
}

/* Correction superposition du menu des chapitres */

:global(.chapter-card) {
  position: relative;
  z-index: 1;
}

:global(.chapter-card:has(.chapter-menu[open])) {
  z-index: 100;
}

:global(.chapter-menu) {
  position: relative;
  z-index: 101;
}

:global(.chapter-menu-dropdown) {
  z-index: 102;
}

:global(.admin-footer) {
  position: relative;
  z-index: 0;
}

/* ORGANISATION DES ÜBUNGEN */

.ubungen-dashboard {
  display: flex;
  flex-direction: column;
  gap: 22px;
}

.ubungen-overview {
  padding: 22px;
  border: 1px solid #e9edf3;
  border-radius: 15px;
  background: #fff;
}

.ubungen-overview-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.ubungen-overview-heading h2 {
  margin: 7px 0;
  color: #172b4d;
  font-size: 21px;
  font-weight: 800;
}

.ubungen-overview-heading p {
  margin: 0;
  color: #8490a3;
  font-size: 12px;
}

.ubungen-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  margin-top: 22px;
}

.ubungen-stat {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px;
  border: 1px solid #edf0f5;
  border-radius: 11px;
  color: #a18448;
  background: #fafaf9;
}

.ubungen-stat div {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.ubungen-stat strong {
  color: #172b4d;
  font-size: 20px;
}

.ubungen-stat span:not(.ubungen-stat-emoji) {
  color: #8490a3;
  font-size: 11px;
}

.ubungen-stat-emoji {
  font-size: 22px;
}

.ubung-category {
  padding: 20px;
  border: 1px solid #e9edf3;
  border-radius: 15px;
  background: white;
}

.ubung-category-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 17px;
  padding-bottom: 15px;
  border-bottom: 1px solid #edf0f5;
}

.ubung-category-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ubung-category-icon {
  display: grid;
  place-items: center;
  width: 43px;
  height: 43px;
  border-radius: 12px;
  font-size: 22px;
}

.meistertraining-icon {
  background: #f8f1df;
}

.extra-kick-icon {
  background: #edf5ff;
}

.ubung-category-title h3 {
  margin: 0 0 5px;
  color: #172b4d;
  font-size: 16px;
  font-weight: 800;
}

.ubung-category-title p {
  margin: 0;
  color: #8490a3;
  font-size: 11px;
}

.ubung-category-count {
  padding: 7px 11px;
  border: 1px solid #e9edf3;
  border-radius: 20px;
  color: #536078;
  background: #fafbfc;
  font-size: 11px;
  font-weight: 700;
  white-space: nowrap;
}

.ubung-category-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 9px;
  padding: 28px 15px;
  border: 1px dashed #dfe4ec;
  border-radius: 11px;
  color: #a18448;
  text-align: center;
}

.ubung-category-empty strong {
  color: #172b4d;
  font-size: 13px;
}

.ubung-category-empty span {
  color: #8994a7;
  font-size: 11px;
}

@media (max-width: 700px) {
  .ubungen-overview-heading {
    align-items: flex-start;
    flex-direction: column;
  }

  .ubungen-stats {
    grid-template-columns: 1fr;
  }

  .ubung-category-heading {
    align-items: flex-start;
    flex-direction: column;
  }
}

/* ========================================
   GESTION DES QUESTIONS - VUE 4
======================================== */

.questions-dashboard {
  display: flex;
  flex-direction: column;
  gap: 22px;
  width: 100%;
}

/* EN-TÊTE */

.questions-overview {
  padding: 24px;
  border: 1px solid #e7eaf0;
  border-radius: 16px;
  background: #ffffff;
}

.questions-overview-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
}

.questions-overview-heading h2 {
  margin: 8px 0;
  color: #172b4d;
  font-size: 25px;
  font-weight: 750;
}

.questions-overview-heading p {
  margin: 0;
  color: #748094;
  font-size: 14px;
}

/* STATISTIQUES */

.questions-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
  margin-top: 24px;
  padding-top: 20px;
  border-top: 1px solid #edf0f4;
}

.questions-stat {
  display: flex;
  align-items: center;
  gap: 13px;
  min-width: 0;
  padding: 15px;
  border: 1px solid #edf0f4;
  border-radius: 12px;
  background: #f9fafc;
  color: #92743c;
}

.questions-stat div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.questions-stat strong {
  color: #172b4d;
  font-size: 22px;
  font-weight: 750;
}

.questions-stat span {
  color: #788397;
  font-size: 12px;
}

/* FORMATS */

.questions-formats {
  padding: 21px 24px;
  border: 1px solid #e7eaf0;
  border-radius: 16px;
  background: #ffffff;
}

.questions-formats-heading h3,
.questions-list-heading h3 {
  margin: 0;
  color: #172b4d;
  font-size: 17px;
  font-weight: 750;
}

.questions-formats-heading p,
.questions-list-heading p {
  margin: 5px 0 0;
  color: #8490a1;
  font-size: 13px;
}

.questions-format-list {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  margin-top: 17px;
}

.questions-format-list span {
  padding: 8px 13px;
  border: 1px solid #e9e2d3;
  border-radius: 8px;
  background: #fbf8f1;
  color: #725c32;
  font-size: 12px;
  font-weight: 650;
}

/* LISTE DES QUESTIONS */

.questions-list-section {
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
}

.questions-list-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  flex-wrap: wrap;
}

.questions-count {
  padding: 7px 12px;
  border-radius: 20px;
  background: #f0f2f6;
  color: #53627a;
  font-size: 12px;
  font-weight: 700;
}

.question-row {
  align-items: center;
}

.question-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px;
  min-width: 0;
}

.question-status {
  display: inline-flex;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
}

.question-status-published {
  background: #eaf5ed;
  color: #32764a;
}

.question-status-draft {
  background: #fff4df;
  color: #99702a;
}

/* ÉTAT VIDE */

.questions-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 11px;
  min-height: 260px;
  padding: 30px 20px;
  border: 1px dashed #d9dee7;
  border-radius: 15px;
  background: #fafbfd;
  text-align: center;
}

.questions-empty-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 62px;
  height: 62px;
  margin-bottom: 5px;
  border-radius: 16px;
  background: #f4efe4;
  color: #92743c;
}

.questions-empty strong {
  color: #172b4d;
  font-size: 16px;
}

.questions-empty > span {
  max-width: 390px;
  color: #8791a1;
  font-size: 13px;
  line-height: 1.6;
}

.questions-empty .primary-button {
  margin-top: 9px;
}

/* RESPONSIVE */

@media (max-width: 700px) {
  .questions-overview {
    padding: 18px;
  }

  .questions-overview-heading {
    align-items: flex-start;
  }

  .questions-stats {
    grid-template-columns: 1fr;
  }

  .questions-stat {
    padding: 12px;
  }

  .questions-formats {
    padding: 18px;
  }

  .question-row {
    flex-wrap: wrap;
  }

  .question-row .content-actions {
    width: 100%;
    justify-content: flex-end;
  }
}

`}</style>
</main>
)
}

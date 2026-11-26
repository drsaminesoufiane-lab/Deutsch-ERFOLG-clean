import 'server-only'
import type { ChapterDefinition } from '@/lib/grammar/types'
import { lesson } from '@/content/grammar/kapitel-01/lesson'
import { meistertraining } from '@/content/grammar/kapitel-01/meistertraining'
import { extraKick } from '@/content/grammar/kapitel-01/extra-kick'

import { lesson as lesson02 } from '@/content/grammar/kapitel-02/lesson'
import { meistertraining as training02 } from '@/content/grammar/kapitel-02/meistertraining'
import { extraKick as extra02 } from '@/content/grammar/kapitel-02/extra-kick'

import { lesson as lesson03 } from '@/content/grammar/kapitel-03/lesson'
import { meistertraining as training03 } from '@/content/grammar/kapitel-03/meistertraining'
import { extraKick as extra03 } from '@/content/grammar/kapitel-03/extra-kick'

import { lesson as lesson04 } from '@/content/grammar/kapitel-04/lesson'
import { meistertraining as training04 } from '@/content/grammar/kapitel-04/meistertraining'
import { extraKick as extra04 } from '@/content/grammar/kapitel-04/extra-kick'

import { lesson as lesson05 } from '@/content/grammar/kapitel-05/lesson'
import { meistertraining as training05 } from '@/content/grammar/kapitel-05/meistertraining'
import { extraKick as extra05 } from '@/content/grammar/kapitel-05/extra-kick'

import { lesson as lesson06 } from '@/content/grammar/kapitel-06/lesson'
import { meistertraining as training06 } from '@/content/grammar/kapitel-06/meistertraining'
import { extraKick as extra06 } from '@/content/grammar/kapitel-06/extra-kick'

/**
 * Registre serveur des chapitres.
 * Ne jamais importer côté client.
 */
import { lesson as lesson07 } from '@/content/grammar/kapitel-07/lesson'
import { meistertraining as training07 } from '@/content/grammar/kapitel-07/meistertraining'
import { extraKick as extra07 } from '@/content/grammar/kapitel-07/extra-kick'

import { lesson as lesson08 } from '@/content/grammar/kapitel-08/lesson'
import { meistertraining as training08 } from '@/content/grammar/kapitel-08/meistertraining'
import { extraKick as extra08 } from '@/content/grammar/kapitel-08/extra-kick'

import { lesson as lesson09 } from '@/content/grammar/kapitel-09/lesson'
import { meistertraining as training09 } from '@/content/grammar/kapitel-09/meistertraining'
import { extraKick as extra09 } from '@/content/grammar/kapitel-09/extra-kick'
import { lesson as lesson10 } from '@/content/grammar/kapitel-10/lesson'
import { meistertraining as training10 } from '@/content/grammar/kapitel-10/meistertraining'
import { extraKick as extra10 } from '@/content/grammar/kapitel-10/extra-kick'
import { lesson as lesson11 } from '@/content/grammar/kapitel-11/lesson'
import { meistertraining as training11 } from '@/content/grammar/kapitel-11/meistertraining'
import { extraKick as extra11 } from '@/content/grammar/kapitel-11/extra-kick'
import { lesson as lesson12 } from '@/content/grammar/kapitel-12/lesson'
import { meistertraining as training12 } from '@/content/grammar/kapitel-12/meistertraining'
import { extraKick as extra12 } from '@/content/grammar/kapitel-12/extra-kick'
import { lesson as lesson13 } from '@/content/grammar/kapitel-13/lesson'
import { meistertraining as training13 } from '@/content/grammar/kapitel-13/meistertraining'
import { extraKick as extra13 } from '@/content/grammar/kapitel-13/extra-kick'
import { lesson as lesson14 } from '@/content/grammar/kapitel-14/lesson'
import { meistertraining as training14 } from '@/content/grammar/kapitel-14/meistertraining'
import { extraKick as extra14 } from '@/content/grammar/kapitel-14/extra-kick'
import { lesson as lesson15 } from '@/content/grammar/kapitel-15/lesson'
import { meistertraining as training15 } from '@/content/grammar/kapitel-15/meistertraining'
import { extraKick as extra15 } from '@/content/grammar/kapitel-15/extra-kick'
import { lesson as lesson16 } from '@/content/grammar/kapitel-16/lesson'
import { meistertraining as training16 } from '@/content/grammar/kapitel-16/meistertraining'
import { extraKick as extra16 } from '@/content/grammar/kapitel-16/extra-kick'
import { lesson as lesson17 } from '@/content/grammar/kapitel-17/lesson'
import { meistertraining as training17 } from '@/content/grammar/kapitel-17/meistertraining'
import { extraKick as extra17 } from '@/content/grammar/kapitel-17/extra-kick'
import { lesson as lesson18 } from '@/content/grammar/kapitel-18/lesson'
import { meistertraining as training18 } from '@/content/grammar/kapitel-18/meistertraining'
import { extraKick as extra18 } from '@/content/grammar/kapitel-18/extra-kick'
import { lesson as lesson19 } from '@/content/grammar/kapitel-19/lesson'
import { meistertraining as training19 } from '@/content/grammar/kapitel-19/meistertraining'
import { extraKick as extra19 } from '@/content/grammar/kapitel-19/extra-kick'
import { lesson as lesson20 } from '@/content/grammar/kapitel-20/lesson'
import { meistertraining as training20 } from '@/content/grammar/kapitel-20/meistertraining'
import { extraKick as extra20 } from '@/content/grammar/kapitel-20/extra-kick'
import { lesson as lesson21 } from '@/content/grammar/kapitel-21/lesson'
import { meistertraining as training21 } from '@/content/grammar/kapitel-21/meistertraining'
import { extraKick as extra21 } from '@/content/grammar/kapitel-21/extra-kick'
export const grammarChapters: ChapterDefinition[] = [
  {
    id: 'kapitel-01',
    number: 1,
    level: 'A1',
    title: {
      fr: 'Pronoms personnels',
      de: 'Personalpronomen',
      ar: 'الضمائر الشخصية',
      en: 'Personal pronouns',
    },
    subtitle: {
      fr: 'Les pronoms sujets en allemand',
      de: 'Die Personalpronomen im Nominativ',
      ar: 'ضمائر الفاعل في اللغة الألمانية',
      en: 'Subject pronouns in German',
    },
    lesson,
    exerciseSets: [...meistertraining, ...extraKick],
  },
  { id: 'kapitel-02', number: 2, level: 'A1', title: {
  "fr": "Je viens, tu viens",
  "de": "Ich komme, du kommst",
  "ar": "أنا آتي، أنت تأتي",
  "en": "I come, you come"
}, subtitle: {
  "fr": "Conjugaison au présent",
  "de": "Konjugation Präsens",
  "ar": "تصريف الأفعال في المضارع",
  "en": "Present tense conjugation"
}, lesson: lesson02, exerciseSets: [...training02, ...extra02] },
  { id: "kapitel-03", number: 3, level: "A1", title: {"fr": "Je suis, tu as, il voudrait", "de": "Ich bin, du hast, er möchte", "ar": "أنا أكون، أنت تملك، هو يود", "en": "I am, you have, he would like"}, subtitle: {"fr": "Être, avoir et verbes particuliers", "de": "Sein, haben und besondere Verben", "ar": "أفعال خاصة", "en": "Be, have and special verbs"}, lesson: lesson03, exerciseSets: [...training03, ...extra03] },
  { id: "kapitel-04", number: 4, level: "A1", title: {
  "fr": "Je mange peu, mais tu manges beaucoup !",
  "de": "Ich esse wenig, aber du isst viel!",
  "ar": "أنا آكل قليلا لكنك تأكل كثيرا!",
  "en": "I eat little, but you eat a lot!"
}, subtitle: {
  "fr": "Verbes à changement de voyelle",
  "de": "Verben mit Vokalwechsel",
  "ar": "الأفعال ذات تغير الحركة",
  "en": "Stem-changing verbs"
}, lesson: lesson04, exerciseSets: [...training04, ...extra04] },
  { id: "kapitel-05", number: 5, level: "A1", title: {
  "fr": "Je dois, je peux, je veux",
  "de": "Ich muss, ich kann, ich will",
  "ar": "يجب علي، أستطيع، أريد",
  "en": "I must, I can, I want"
}, subtitle: {
  "fr": "Verbes modaux : conjugaison et position",
  "de": "Modalverben: Konjugation und Position im Satz",
  "ar": "الأفعال الناقصة: التصريف والموقع",
  "en": "Modal verbs: conjugation and sentence position"
}, lesson: lesson05, exerciseSets: [...training05, ...extra05] },
  { id: "kapitel-06", number: 6, level: "A1", title: {
  "fr": "Puis-je ou dois-je ?",
  "de": "Kann ich oder muss ich?",
  "ar": "هل أستطيع أم يجب علي؟",
  "en": "Can I or must I?"
}, subtitle: {
  "fr": "Verbes modaux : emploi",
  "de": "Modalverben: Gebrauch",
  "ar": "الأفعال الناقصة: الاستعمال",
  "en": "Modal verbs: usage"
}, lesson: lesson06, exerciseSets: [...training06, ...extra06] },
  { id: "kapitel-07", number: 7, level: "A1", title: {
  "fr": "Je fais les courses au supermarché",
  "de": "Ich kaufe im Supermarkt ein",
  "ar": "أتسوق في السوبرماركت",
  "en": "I shop at the supermarket"
}, subtitle: {
  "fr": "Verbes à particule séparable",
  "de": "Trennbare Verben",
  "ar": "الأفعال القابلة للانفصال",
  "en": "Separable verbs"
}, lesson: lesson07, exerciseSets: [...training07, ...extra07] },
  { id: "kapitel-08", number: 8, level: "A1", title: {
  "fr": "Aidez-moi !",
  "de": "Helfen Sie mir!",
  "ar": "ساعدني من فضلك!",
  "en": "Help me!"
}, subtitle: {
  "fr": "L’impératif",
  "de": "Imperativ",
  "ar": "صيغة الأمر",
  "en": "Imperative"
}, lesson: lesson08, exerciseSets: [...training08, ...extra08] },
  { id: "kapitel-09", number: 9, level: "A1", title: {
  "fr": "Qui ? Comment ? Où ? Quoi ?",
  "de": "Wer? Wie? Wo? Was?",
  "ar": "من؟ كيف؟ أين؟ ماذا؟",
  "en": "Who? How? Where? What?"
}, subtitle: {
  "fr": "Questions ouvertes",
  "de": "Fragen mit Fragewort",
  "ar": "أسئلة بأداة استفهام",
  "en": "Wh-questions"
}, lesson: lesson09, exerciseSets: [...training09, ...extra09] },
  { id: "kapitel-10", number: 10, level: "A1", title: {
  "fr": "Apprenez-vous l’allemand ?",
  "de": "Lernen Sie Deutsch?",
  "ar": "هل تتعلم الألمانية؟",
  "en": "Are you learning German?"
}, subtitle: {
  "fr": "Questions fermées",
  "de": "Ja/Nein-Fragen",
  "ar": "أسئلة نعم أو لا",
  "en": "Yes/no questions"
}, lesson: lesson10, exerciseSets: [...training10, ...extra10] },
  { id: "kapitel-11", number: 11, level: "A1", title: {
  "fr": "Où placer les mots ?",
  "de": "Wo steht was?",
  "ar": "أين توضع الكلمات؟",
  "en": "Where does each word go?"
}, subtitle: {
  "fr": "Ordre des mots 1",
  "de": "Wörter im Satz 1",
  "ar": "ترتيب الكلمات 1",
  "en": "Word order 1"
}, lesson: lesson11, exerciseSets: [...training11, ...extra11] },
  { id: "kapitel-12", number: 12, level: "A1", title: {
  "fr": "Je fais les courses",
  "de": "Ich kaufe ... ein",
  "ar": "أتسوق",
  "en": "I go shopping"
}, subtitle: {
  "fr": "Ordre des mots 2",
  "de": "Wörter im Satz 2",
  "ar": "ترتيب الكلمات 2",
  "en": "Word order 2"
}, lesson: lesson12, exerciseSets: [...training12, ...extra12] },
  { id: "kapitel-13", number: 13, level: "A1", title: {
  "fr": "Les hommes, les femmes, les bébés",
  "de": "Die Männer, die Frauen, die Babys",
  "ar": "الرجال والنساء والأطفال",
  "en": "Men, women, babies"
}, subtitle: {
  "fr": "Pluriel des noms",
  "de": "Nomen: Plural",
  "ar": "جمع الأسماء",
  "en": "Noun plurals"
}, lesson: lesson13, exerciseSets: [...training13, ...extra13] },
  { id: "kapitel-14", number: 14, level: "A1", title: {
  "fr": "Articles définis et indéfinis",
  "de": "Der, das, die – ein, ein, eine",
  "ar": "أدوات التعريف والتنكير",
  "en": "Definite and indefinite articles"
}, subtitle: {
  "fr": "Articles",
  "de": "Artikel: definit, indefinit, kein Artikel",
  "ar": "أدوات الأسماء",
  "en": "Articles"
}, lesson: lesson14, exerciseSets: [...training14, ...extra14] },
  { id: "kapitel-15", number: 15, level: "A1", title: {
  "fr": "Aucun, ne pas, jamais",
  "de": "Kein, nicht, nie",
  "ar": "النفي",
  "en": "No, not, never"
}, subtitle: {
  "fr": "Négation",
  "de": "Negation",
  "ar": "النفي",
  "en": "Negation"
}, lesson: lesson15, exerciseSets: [...training15, ...extra15] },
  { id: "kapitel-16", number: 16, level: "A1", title: {
  "fr": "J’aime mon mari",
  "de": "Ich liebe meinen Mann",
  "ar": "أحب زوجي",
  "en": "I love my husband"
}, subtitle: {
  "fr": "accusatif",
  "de": "Akkusativ",
  "ar": "النصب",
  "en": "accusative"
}, lesson: lesson16, exerciseSets: [...training16, ...extra16] },
  { id: "kapitel-17", number: 17, level: "A2", title: {
  "fr": "Je vais en voiture",
  "de": "Ich fahre mit dem Auto",
  "ar": "أذهب بالسيارة",
  "en": "I travel by car"
}, subtitle: {
  "fr": "datif",
  "de": "Dativ",
  "ar": "الجر",
  "en": "dative"
}, lesson: lesson17, exerciseSets: [...training17, ...extra17] },
  { id: "kapitel-18", number: 18, level: "A2", title: {
  "fr": "Mon, ton, notre",
  "de": "Mein, dein, unser",
  "ar": "ملكي، ملكك، ملكنا",
  "en": "My, your, our"
}, subtitle: {
  "fr": "Articles possessifs",
  "de": "Possessivartikel",
  "ar": "أدوات الملكية",
  "en": "Possessive determiners"
}, lesson: lesson18, exerciseSets: [...training18, ...extra18] },
  { id: "kapitel-19", number: 19, level: "A2", title: {
  "fr": "Lequel ? Celui-ci",
  "de": "Welcher? – Dieser",
  "ar": "أيّ؟ هذا",
  "en": "Which? – This one"
}, subtitle: {
  "fr": "Articles interrogatifs et démonstratifs",
  "de": "Interrogativ- und Demonstrativartikel",
  "ar": "أدوات الاستفهام والإشارة",
  "en": "Interrogative and demonstrative determiners"
}, lesson: lesson19, exerciseSets: [...training19, ...extra19] },
  { id: "kapitel-20", number: 20, level: "A2", title: {
  "fr": "Seulement avec toi, jamais sans toi",
  "de": "Nur mit dir – nie ohne dich",
  "ar": "فقط معك، أبداً بدونك",
  "en": "Only with you, never without you"
}, subtitle: {
  "fr": "Pronoms personnels",
  "de": "Personalpronomen",
  "ar": "الضمائر الشخصية",
  "en": "Personal pronouns"
}, lesson: lesson20, exerciseSets: [...training20, ...extra20] },
  { id: "kapitel-21", number: 21, level: "A2", title: {
  "fr": "J’achète un ballon à mon fils",
  "de": "Ich kaufe meinem Sohn einen Ball",
  "ar": "أشتري كرة لابني",
  "en": "I buy my son a ball"
}, subtitle: {
  "fr": "Verbes à deux compléments",
  "de": "Verben mit Akkusativ und Dativ",
  "ar": "أفعال بمفعولين",
  "en": "Verbs with two objects"
}, lesson: lesson21, exerciseSets: [...training21, ...extra21] },
]

export function getGrammarChapter(chapterId: string) {
  return grammarChapters.find((chapter) => chapter.id === chapterId) ?? null
}

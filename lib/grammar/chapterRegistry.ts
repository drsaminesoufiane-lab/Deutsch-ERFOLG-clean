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
import { lesson as lesson22 } from '@/content/grammar/kapitel-22/lesson'
import { meistertraining as training22 } from '@/content/grammar/kapitel-22/meistertraining'
import { extraKick as extra22 } from '@/content/grammar/kapitel-22/extra-kick'
import { lesson as lesson23 } from '@/content/grammar/kapitel-23/lesson'
import { meistertraining as training23 } from '@/content/grammar/kapitel-23/meistertraining'
import { extraKick as extra23 } from '@/content/grammar/kapitel-23/extra-kick'
import { lesson as lesson24 } from '@/content/grammar/kapitel-24/lesson'
import { meistertraining as training24 } from '@/content/grammar/kapitel-24/meistertraining'
import { extraKick as extra24 } from '@/content/grammar/kapitel-24/extra-kick'
import { lesson as lesson25 } from '@/content/grammar/kapitel-25/lesson'
import { meistertraining as training25 } from '@/content/grammar/kapitel-25/meistertraining'
import { extraKick as extra25 } from '@/content/grammar/kapitel-25/extra-kick'
import { lesson as lesson26 } from '@/content/grammar/kapitel-26/lesson'
import { meistertraining as training26 } from '@/content/grammar/kapitel-26/meistertraining'
import { extraKick as extra26 } from '@/content/grammar/kapitel-26/extra-kick'
import { lesson as lesson27 } from '@/content/grammar/kapitel-27/lesson'
import { meistertraining as training27 } from '@/content/grammar/kapitel-27/meistertraining'
import { extraKick as extra27 } from '@/content/grammar/kapitel-27/extra-kick'
import { lesson as lesson28 } from '@/content/grammar/kapitel-28/lesson'
import { meistertraining as training28 } from '@/content/grammar/kapitel-28/meistertraining'
import { extraKick as extra28 } from '@/content/grammar/kapitel-28/extra-kick'
import { lesson as lesson29 } from '@/content/grammar/kapitel-29/lesson'
import { meistertraining as training29 } from '@/content/grammar/kapitel-29/meistertraining'
import { extraKick as extra29 } from '@/content/grammar/kapitel-29/extra-kick'

import { lesson as lesson30 } from '@/content/grammar/kapitel-30/lesson'
import { meistertraining as training30 } from '@/content/grammar/kapitel-30/meistertraining'
import { extraKick as extra30 } from '@/content/grammar/kapitel-30/extra-kick'

import { lesson as lesson31 } from '@/content/grammar/kapitel-31/lesson'
import { meistertraining as training31 } from '@/content/grammar/kapitel-31/meistertraining'
import { extraKick as extra31 } from '@/content/grammar/kapitel-31/extra-kick'

import { lesson as lesson32 } from '@/content/grammar/kapitel-32/lesson'
import { meistertraining as training32 } from '@/content/grammar/kapitel-32/meistertraining'
import { extraKick as extra32 } from '@/content/grammar/kapitel-32/extra-kick'

import { lesson as lesson33 } from '@/content/grammar/kapitel-33/lesson'
import { meistertraining as training33 } from '@/content/grammar/kapitel-33/meistertraining'
import { extraKick as extra33 } from '@/content/grammar/kapitel-33/extra-kick'

import { lesson as lesson34 } from '@/content/grammar/kapitel-34/lesson'
import { meistertraining as training34 } from '@/content/grammar/kapitel-34/meistertraining'
import { extraKick as extra34 } from '@/content/grammar/kapitel-34/extra-kick'

import { lesson as lesson35 } from '@/content/grammar/kapitel-35/lesson'
import { meistertraining as training35 } from '@/content/grammar/kapitel-35/meistertraining'
import { extraKick as extra35 } from '@/content/grammar/kapitel-35/extra-kick'

import { lesson as lesson36 } from '@/content/grammar/kapitel-36/lesson'
import { meistertraining as training36 } from '@/content/grammar/kapitel-36/meistertraining'
import { extraKick as extra36 } from '@/content/grammar/kapitel-36/extra-kick'

import { lesson as lesson37 } from '@/content/grammar/kapitel-37/lesson'
import { meistertraining as training37 } from '@/content/grammar/kapitel-37/meistertraining'
import { extraKick as extra37 } from '@/content/grammar/kapitel-37/extra-kick'

import { lesson as lesson38 } from '@/content/grammar/kapitel-38/lesson'
import { meistertraining as training38 } from '@/content/grammar/kapitel-38/meistertraining'
import { extraKick as extra38 } from '@/content/grammar/kapitel-38/extra-kick'

import { lesson as lesson39 } from '@/content/grammar/kapitel-39/lesson'
import { meistertraining as training39 } from '@/content/grammar/kapitel-39/meistertraining'
import { extraKick as extra39 } from '@/content/grammar/kapitel-39/extra-kick'

import { lesson as lesson40 } from '@/content/grammar/kapitel-40/lesson'
import { meistertraining as training40 } from '@/content/grammar/kapitel-40/meistertraining'
import { extraKick as extra40 } from '@/content/grammar/kapitel-40/extra-kick'

import { lesson as lesson41 } from '@/content/grammar/kapitel-41/lesson'
import { meistertraining as training41 } from '@/content/grammar/kapitel-41/meistertraining'
import { extraKick as extra41 } from '@/content/grammar/kapitel-41/extra-kick'

import { lesson as lesson42 } from '@/content/grammar/kapitel-42/lesson'
import { meistertraining as training42 } from '@/content/grammar/kapitel-42/meistertraining'
import { extraKick as extra42 } from '@/content/grammar/kapitel-42/extra-kick'

import { lesson as lesson43 } from '@/content/grammar/kapitel-43/lesson'
import { meistertraining as training43 } from '@/content/grammar/kapitel-43/meistertraining'
import { extraKick as extra43 } from '@/content/grammar/kapitel-43/extra-kick'

import { lesson as lesson44 } from '@/content/grammar/kapitel-44/lesson'
import { meistertraining as training44 } from '@/content/grammar/kapitel-44/meistertraining'
import { extraKick as extra44 } from '@/content/grammar/kapitel-44/extra-kick'

import { lesson as lesson45 } from '@/content/grammar/kapitel-45/lesson'
import { meistertraining as training45 } from '@/content/grammar/kapitel-45/meistertraining'
import { extraKick as extra45 } from '@/content/grammar/kapitel-45/extra-kick'

import { lesson as lesson46 } from '@/content/grammar/kapitel-46/lesson'
import { meistertraining as training46 } from '@/content/grammar/kapitel-46/meistertraining'
import { extraKick as extra46 } from '@/content/grammar/kapitel-46/extra-kick'

import { lesson as lesson47 } from '@/content/grammar/kapitel-47/lesson'
import { meistertraining as training47 } from '@/content/grammar/kapitel-47/meistertraining'
import { extraKick as extra47 } from '@/content/grammar/kapitel-47/extra-kick'

import { lesson as lesson48 } from '@/content/grammar/kapitel-48/lesson'
import { meistertraining as training48 } from '@/content/grammar/kapitel-48/meistertraining'
import { extraKick as extra48 } from '@/content/grammar/kapitel-48/extra-kick'

import { lesson as lesson49 } from '@/content/grammar/kapitel-49/lesson'
import { meistertraining as training49 } from '@/content/grammar/kapitel-49/meistertraining'
import { extraKick as extra49 } from '@/content/grammar/kapitel-49/extra-kick'

import { lesson as lesson50 } from '@/content/grammar/kapitel-50/lesson'
import { meistertraining as training50 } from '@/content/grammar/kapitel-50/meistertraining'
import { extraKick as extra50 } from '@/content/grammar/kapitel-50/extra-kick'

import { lesson as lesson51 } from '@/content/grammar/kapitel-51/lesson'
import { meistertraining as training51 } from '@/content/grammar/kapitel-51/meistertraining'
import { extraKick as extra51 } from '@/content/grammar/kapitel-51/extra-kick'

import { lesson as lesson52 } from '@/content/grammar/kapitel-52/lesson'
import { meistertraining as training52 } from '@/content/grammar/kapitel-52/meistertraining'
import { extraKick as extra52 } from '@/content/grammar/kapitel-52/extra-kick'

import { lesson as lesson53 } from '@/content/grammar/kapitel-53/lesson'
import { meistertraining as training53 } from '@/content/grammar/kapitel-53/meistertraining'
import { extraKick as extra53 } from '@/content/grammar/kapitel-53/extra-kick'

import { lesson as lesson54 } from '@/content/grammar/kapitel-54/lesson'
import { meistertraining as training54 } from '@/content/grammar/kapitel-54/meistertraining'
import { extraKick as extra54 } from '@/content/grammar/kapitel-54/extra-kick'

import { lesson as lesson55 } from '@/content/grammar/kapitel-55/lesson'
import { meistertraining as training55 } from '@/content/grammar/kapitel-55/meistertraining'
import { extraKick as extra55 } from '@/content/grammar/kapitel-55/extra-kick'

import { lesson as lesson56 } from '@/content/grammar/kapitel-56/lesson'
import { meistertraining as training56 } from '@/content/grammar/kapitel-56/meistertraining'
import { extraKick as extra56 } from '@/content/grammar/kapitel-56/extra-kick'

import { lesson as lesson57 } from '@/content/grammar/kapitel-57/lesson'
import { meistertraining as training57 } from '@/content/grammar/kapitel-57/meistertraining'
import { extraKick as extra57 } from '@/content/grammar/kapitel-57/extra-kick'

import { lesson as lesson58 } from '@/content/grammar/kapitel-58/lesson'
import { meistertraining as training58 } from '@/content/grammar/kapitel-58/meistertraining'
import { extraKick as extra58 } from '@/content/grammar/kapitel-58/extra-kick'

import { lesson as lesson59 } from '@/content/grammar/kapitel-59/lesson'
import { meistertraining as training59 } from '@/content/grammar/kapitel-59/meistertraining'
import { extraKick as extra59 } from '@/content/grammar/kapitel-59/extra-kick'

import { lesson as lesson60 } from '@/content/grammar/kapitel-60/lesson'
import { meistertraining as training60 } from '@/content/grammar/kapitel-60/meistertraining'
import { extraKick as extra60 } from '@/content/grammar/kapitel-60/extra-kick'

import { lesson as lesson61 } from '@/content/grammar/kapitel-61/lesson'
import { meistertraining as training61 } from '@/content/grammar/kapitel-61/meistertraining'
import { extraKick as extra61 } from '@/content/grammar/kapitel-61/extra-kick'

import { lesson as lesson62 } from '@/content/grammar/kapitel-62/lesson'
import { meistertraining as training62 } from '@/content/grammar/kapitel-62/meistertraining'
import { extraKick as extra62 } from '@/content/grammar/kapitel-62/extra-kick'

import { lesson as lesson63 } from '@/content/grammar/kapitel-63/lesson'
import { meistertraining as training63 } from '@/content/grammar/kapitel-63/meistertraining'
import { extraKick as extra63 } from '@/content/grammar/kapitel-63/extra-kick'

import { lesson as lesson64 } from '@/content/grammar/kapitel-64/lesson'
import { meistertraining as training64 } from '@/content/grammar/kapitel-64/meistertraining'
import { extraKick as extra64 } from '@/content/grammar/kapitel-64/extra-kick'

import { lesson as lesson65 } from '@/content/grammar/kapitel-65/lesson'
import { meistertraining as training65 } from '@/content/grammar/kapitel-65/meistertraining'
import { extraKick as extra65 } from '@/content/grammar/kapitel-65/extra-kick'

import { lesson as lesson66 } from '@/content/grammar/kapitel-66/lesson'
import { meistertraining as training66 } from '@/content/grammar/kapitel-66/meistertraining'
import { extraKick as extra66 } from '@/content/grammar/kapitel-66/extra-kick'

import { lesson as lesson67 } from '@/content/grammar/kapitel-67/lesson'
import { meistertraining as training67 } from '@/content/grammar/kapitel-67/meistertraining'
import { extraKick as extra67 } from '@/content/grammar/kapitel-67/extra-kick'

import { lesson as lesson68 } from '@/content/grammar/kapitel-68/lesson'
import { meistertraining as training68 } from '@/content/grammar/kapitel-68/meistertraining'
import { extraKick as extra68 } from '@/content/grammar/kapitel-68/extra-kick'

import { lesson as lesson69 } from '@/content/grammar/kapitel-69/lesson'
import { meistertraining as training69 } from '@/content/grammar/kapitel-69/meistertraining'
import { extraKick as extra69 } from '@/content/grammar/kapitel-69/extra-kick'

import { lesson as lesson70 } from '@/content/grammar/kapitel-70/lesson'
import { meistertraining as training70 } from '@/content/grammar/kapitel-70/meistertraining'
import { extraKick as extra70 } from '@/content/grammar/kapitel-70/extra-kick'

import { lesson as lesson71 } from '@/content/grammar/kapitel-71/lesson'
import { meistertraining as training71 } from '@/content/grammar/kapitel-71/meistertraining'
import { extraKick as extra71 } from '@/content/grammar/kapitel-71/extra-kick'

import { lesson as lesson72 } from '@/content/grammar/kapitel-72/lesson'
import { meistertraining as training72 } from '@/content/grammar/kapitel-72/meistertraining'
import { extraKick as extra72 } from '@/content/grammar/kapitel-72/extra-kick'

import { lesson as lesson73 } from '@/content/grammar/kapitel-73/lesson'
import { meistertraining as training73 } from '@/content/grammar/kapitel-73/meistertraining'
import { extraKick as extra73 } from '@/content/grammar/kapitel-73/extra-kick'

import { lesson as lesson74 } from '@/content/grammar/kapitel-74/lesson'
import { meistertraining as training74 } from '@/content/grammar/kapitel-74/meistertraining'
import { extraKick as extra74 } from '@/content/grammar/kapitel-74/extra-kick'

import { lesson as lesson75 } from '@/content/grammar/kapitel-75/lesson'
import { meistertraining as training75 } from '@/content/grammar/kapitel-75/meistertraining'
import { extraKick as extra75 } from '@/content/grammar/kapitel-75/extra-kick'

import { lesson as lesson76 } from '@/content/grammar/kapitel-76/lesson'
import { meistertraining as training76 } from '@/content/grammar/kapitel-76/meistertraining'
import { extraKick as extra76 } from '@/content/grammar/kapitel-76/extra-kick'

import { lesson as lesson77 } from '@/content/grammar/kapitel-77/lesson'
import { meistertraining as training77 } from '@/content/grammar/kapitel-77/meistertraining'
import { extraKick as extra77 } from '@/content/grammar/kapitel-77/extra-kick'

import { lesson as lesson78 } from '@/content/grammar/kapitel-78/lesson'
import { meistertraining as training78 } from '@/content/grammar/kapitel-78/meistertraining'
import { extraKick as extra78 } from '@/content/grammar/kapitel-78/extra-kick'

import { lesson as lesson79 } from '@/content/grammar/kapitel-79/lesson'
import { meistertraining as training79 } from '@/content/grammar/kapitel-79/meistertraining'
import { extraKick as extra79 } from '@/content/grammar/kapitel-79/extra-kick'

import { lesson as lesson80 } from '@/content/grammar/kapitel-80/lesson'
import { meistertraining as training80 } from '@/content/grammar/kapitel-80/meistertraining'
import { extraKick as extra80 } from '@/content/grammar/kapitel-80/extra-kick'

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
  { id: "kapitel-22", number: 22, level: "A2", title: {
  "fr": "Je t’aide, tu me remercies",
  "de": "Ich helfe dir, du dankst mir",
  "ar": "أساعدك وتشكرني",
  "en": "I help you, you thank me"
}, subtitle: {
  "fr": "Verbes au datif",
  "de": "Verben mit Dativ",
  "ar": "أفعال الداتيف",
  "en": "Dative verbs"
}, lesson: lesson22, exerciseSets: [...training22, ...extra22] },
  { id: "kapitel-23", number: 23, level: "A2", title: {
  "fr": "Ich war, ich hatte",
  "de": "Ich war, ich hatte",
  "ar": "Ich war, ich hatte",
  "en": "Ich war, ich hatte"
}, subtitle: {
  "fr": "Präteritum: sein und haben",
  "de": "Präteritum: sein und haben",
  "ar": "Präteritum: sein und haben",
  "en": "Präteritum: sein und haben"
}, lesson: lesson23, exerciseSets: [...training23, ...extra23] },
  { id: "kapitel-24", number: 24, level: "A2", title: {
  "fr": "Was hast du gestern gemacht?",
  "de": "Was hast du gestern gemacht?",
  "ar": "Was hast du gestern gemacht?",
  "en": "Was hast du gestern gemacht?"
}, subtitle: {
  "fr": "Perfekt mit haben",
  "de": "Perfekt mit haben",
  "ar": "Perfekt mit haben",
  "en": "Perfekt mit haben"
}, lesson: lesson24, exerciseSets: [...training24, ...extra24] },
  { id: "kapitel-25", number: 25, level: "A2", title: {
  "fr": "Ich bin gekommen, ich habe gelacht",
  "de": "Ich bin gekommen, ich habe gelacht",
  "ar": "Ich bin gekommen, ich habe gelacht",
  "en": "Ich bin gekommen, ich habe gelacht"
}, subtitle: {
  "fr": "Perfekt mit sein",
  "de": "Perfekt mit sein",
  "ar": "Perfekt mit sein",
  "en": "Perfekt mit sein"
}, lesson: lesson25, exerciseSets: [...training25, ...extra25] },
  { id: "kapitel-26", number: 26, level: "A2", title: {
  "fr": "Vu – acheté – payé",
  "de": "Gesehen – eingekauft – bezahlt",
  "ar": "رأى – تسوق – دفع",
  "en": "Seen – shopped – paid"
}, subtitle: {
  "fr": "Le participe passé",
  "de": "Partizip II",
  "ar": "اسم المفعول الثاني",
  "en": "Past participle"
}, lesson: lesson26, exerciseSets: [...training26, ...extra26] },
  { id: "kapitel-27", number: 27, level: "A2", title: {
  "fr": "Je pouvais, je devais, je voulais",
  "de": "Ich konnte, ich musste, ich wollte",
  "ar": "كنت أستطيع، كان عليّ، كنت أريد",
  "en": "I could, I had to, I wanted"
}, subtitle: {
  "fr": "Les modaux au prétérit",
  "de": "Präteritum der Modalverben",
  "ar": "الأفعال الناقصة في الماضي",
  "en": "Modal verbs in the simple past"
}, lesson: lesson27, exerciseSets: [...training27, ...extra27] },
  { id: "kapitel-28", number: 28, level: "A2", title: {
  "fr": "Hier, j’avais soif et j’ai bu du jus.",
  "de": "Gestern hatte ich Durst und habe Saft getrunken",
  "ar": "بالأمس كنت عطشان وشربت العصير",
  "en": "Yesterday I was thirsty and drank juice"
}, subtitle: {
  "fr": "Emploi des temps",
  "de": "Zeitengebrauch",
  "ar": "استعمال الأزمنة",
  "en": "Use of tenses"
}, lesson: lesson28, exerciseSets: [...training28, ...extra28] },
  { id: "kapitel-29", number: 29, level: "A2", title: {
  "fr": "Elle se lave",
  "de": "Sie wäscht sich",
  "ar": "هي تغتسل",
  "en": "She washes herself"
}, subtitle: {
  "fr": "Verbes réfléchis et réciproques",
  "de": "Reflexive und reziproke Verben",
  "ar": "الأفعال الانعكاسية والمتبادلة",
  "en": "Reflexive and reciprocal verbs"
}, lesson: lesson29, exerciseSets: [...training29, ...extra29] },
  { id: "kapitel-30", number: 30, level: "A2", title: {
  "fr": "En, le, à, de… à, après et avant",
  "de": "Im, am, um, von ... bis, nach und vor",
  "ar": "في، عند، من… إلى، بعد وقبل",
  "en": "In, on, at, from… to, after and before"
}, subtitle: {
  "fr": "Prépositions temporelles",
  "de": "Temporale Präpositionen",
  "ar": "حروف الجر الزمنية",
  "en": "Temporal prepositions"
}, lesson: lesson30, exerciseSets: [...training30, ...extra30] },
  { id: "kapitel-31", number: 31, level: "A2", title: {
  "fr": "Aus, bei, mit, nach, seit, von ou zu",
  "de": "Aus, bei, mit, nach, seit, von oder zu",
  "ar": "حروف الجر aus و bei و mit و nach و seit و von و zu",
  "en": "Aus, bei, mit, nach, seit, von or zu"
}, subtitle: {
  "fr": "Prépositions avec le datif",
  "de": "Präpositionen mit Dativ",
  "ar": "حروف الجر مع الداتيف",
  "en": "Dative prepositions"
}, lesson: lesson31, exerciseSets: [...training31, ...extra31] },
  { id: "kapitel-32", number: 32, level: "A2", title: {
  "fr": "Pour, autour de, à travers, sans et contre",
  "de": "Für, um, durch, ohne und gegen",
  "ar": "لأجل وحول وعبر وبدون وضد",
  "en": "For, around, through, without and against"
}, subtitle: {
  "fr": "Prépositions avec l’accusatif",
  "de": "Präpositionen mit Akkusativ",
  "ar": "حروف الجر مع النصب",
  "en": "Accusative prepositions"
}, lesson: lesson32, exerciseSets: [...training32, ...extra32] },
  { id: "kapitel-33", number: 33, level: "A2", title: {
  "fr": "Où ? Au cinéma",
  "de": "Wo? Im Kino",
  "ar": "أين؟ في السينما",
  "en": "Where? At the cinema"
}, subtitle: {
  "fr": "Prépositions mixtes au datif",
  "de": "Wechselpräpositionen mit Dativ",
  "ar": "حروف الجر المتغيرة مع الداتيف",
  "en": "Two-way prepositions with dative"
}, lesson: lesson33, exerciseSets: [...training33, ...extra33] },
  { id: "kapitel-34", number: 34, level: "A2", title: {
  "fr": "Au cinéma ou vers le cinéma ?",
  "de": "Im Kino oder ins Kino?",
  "ar": "في السينما أم إلى السينما؟",
  "en": "At the cinema or to the cinema?"
}, subtitle: {
  "fr": "Prépositions mixtes au datif et à l’accusatif",
  "de": "Wechselpräpositionen mit Dativ und Akkusativ",
  "ar": "حروف الجر المتغيرة مع الداتيف والنصب",
  "en": "Two-way prepositions with dative and accusative"
}, lesson: lesson34, exerciseSets: [...training34, ...extra34] },
  { id: "kapitel-35", number: 35, level: "A2", title: {
  "fr": "Chez le boulanger, chez le coiffeur, au terrain de sport",
  "de": "Beim Bäcker, zum Friseur, auf den Sportplatz",
  "ar": "عند الخباز وإلى الحلاق وإلى الملعب",
  "en": "At the baker’s, to the hairdresser, to the sports ground"
}, subtitle: {
  "fr": "Prépositions locales",
  "de": "Lokale Präpositionen",
  "ar": "حروف الجر المكانية",
  "en": "Local prepositions"
}, lesson: lesson35, exerciseSets: [...training35, ...extra35] },
  { id: "kapitel-36", number: 36, level: "A2", title: {
  "fr": "Un homme gentil ! J’aime cet homme gentil.",
  "de": "Ein netter Mann! Ich liebe den netten Mann.",
  "ar": "رجل لطيف! أحب الرجل اللطيف.",
  "en": "A kind man! I love the kind man."
}, subtitle: {
  "fr": "Déclinaison de l’adjectif au nominatif et à l’accusatif",
  "de": "Adjektivdeklination im Nominativ und Akkusativ",
  "ar": "تصريف الصفات في الرفع والنصب",
  "en": "Adjective declension in nominative and accusative"
}, lesson: lesson36, exerciseSets: [...training36, ...extra36] },
  { id: "kapitel-37", number: 37, level: "A2", title: {
  "fr": "Le premier mai",
  "de": "Am ersten Mai",
  "ar": "في الأول من مايو",
  "en": "On the first of May"
}, subtitle: {
  "fr": "Déclinaison des adjectifs au nominatif, à l’accusatif et au datif",
  "de": "Adjektivdeklination im Nominativ, Akkusativ und Dativ",
  "ar": "تصريف الصفات في الرفع والنصب والداتيف",
  "en": "Adjective declension in nominative, accusative and dative"
}, lesson: lesson37, exerciseSets: [...training37, ...extra37] },
  { id: "kapitel-38", number: 38, level: "A2", title: {
  "fr": "Plus vite que…",
  "de": "Schneller als ...",
  "ar": "أسرع من…",
  "en": "Faster than…"
}, subtitle: {
  "fr": "Comparatif et phrases de comparaison",
  "de": "Komparativ und Vergleichssätze",
  "ar": "صيغة المقارنة وجمل المقارنة",
  "en": "Comparative and comparison clauses"
}, lesson: lesson38, exerciseSets: [...training38, ...extra38] },
  { id: "kapitel-39", number: 39, level: "B1", title: {
  "fr": "L’homme le plus petit court le plus vite",
  "de": "Der kleinste Mann läuft am schnellsten",
  "ar": "أصغر رجل يركض بأقصى سرعة",
  "en": "The smallest man runs the fastest"
}, subtitle: {
  "fr": "Superlatif",
  "de": "Superlativ",
  "ar": "صيغة التفضيل العليا",
  "en": "Superlative"
}, lesson: lesson39, exerciseSets: [...training39, ...extra39] },
  { id: "kapitel-40", number: 40, level: "A2", title: {
  "fr": "Et, mais, ou, car",
  "de": "Und, aber, oder, denn",
  "ar": "و، لكن، أو، لأن",
  "en": "And, but, or, for"
}, subtitle: {
  "fr": "Relier des propositions principales (position 0)",
  "de": "Hauptsätze verbinden (Position 0)",
  "ar": "ربط الجمل الرئيسية (الموضع صفر)",
  "en": "Connecting main clauses (position 0)"
}, lesson: lesson40, exerciseSets: [...training40, ...extra40] },
  { id: "kapitel-41", number: 41, level: "A2", title: {
  "fr": "Deshalb, sonst, dann, danach",
  "de": "Deshalb, sonst, dann, danach",
  "ar": "Deshalb, sonst, dann, danach",
  "en": "Deshalb, sonst, dann, danach"
}, subtitle: {
  "fr": "Relier des propositions principales (position 1)",
  "de": "Hauptsätze verbinden (Position 1)",
  "ar": "ربط الجمل الرئيسية (الموضع الأول)",
  "en": "Connecting main clauses (position 1)"
}, lesson: lesson41, exerciseSets: [...training41, ...extra41] },
  { id: "kapitel-42", number: 42, level: "A2", title: {
  "fr": "Weil, dass und wenn",
  "de": "Weil, dass und wenn",
  "ar": "Weil, dass und wenn",
  "en": "Weil, dass und wenn"
}, subtitle: {
  "fr": "Les propositions subordonnées",
  "de": "Nebensätze",
  "ar": "الجمل التابعة",
  "en": "Subordinate clauses"
}, lesson: lesson42, exerciseSets: [...training42, ...extra42] },
  { id: "kapitel-43", number: 43, level: "A2", title: {
  "fr": "Ich bin da. Kommst du auch dahin?",
  "de": "Ich bin da. Kommst du auch dahin?",
  "ar": "Ich bin da. Kommst du auch dahin?",
  "en": "Ich bin da. Kommst du auch dahin?"
}, subtitle: {
  "fr": "Adverbes de position et de direction",
  "de": "Positionsadverbien und Direktionaladverbien",
  "ar": "ظروف المكان والاتجاه",
  "en": "Position and direction adverbs"
}, lesson: lesson43, exerciseSets: [...training43, ...extra43] },
  { id: "kapitel-44", number: 44, level: "A2", title: {
  "fr": "Was heißt das denn?",
  "de": "Was heißt das denn?",
  "ar": "Was heißt das denn?",
  "en": "Was heißt das denn?"
}, subtitle: {
  "fr": "Particules modales",
  "de": "Partikeln",
  "ar": "الجسيمات التعبيرية",
  "en": "Modal particles"
}, lesson: lesson44, exerciseSets: [...training44, ...extra44] },
  { id: "kapitel-45", number: 45, level: "A2", title: {
  "fr": "Kinderarzt oder Arztkinder?",
  "de": "Kinderarzt oder Arztkinder?",
  "ar": "Kinderarzt oder Arztkinder?",
  "en": "Kinderarzt oder Arztkinder?"
}, subtitle: {
  "fr": "Les mots composés",
  "de": "Komposita",
  "ar": "الكلمات المركبة",
  "en": "Compound nouns"
}, lesson: lesson45, exerciseSets: [...training45, ...extra45] },
  { id: "kapitel-46", number: 46, level: "A2", title: {
  "fr": "-chen, -lein, -er, -in, -ung",
  "de": "-chen, -lein, -er, -in, -ung",
  "ar": "-chen, -lein, -er, -in, -ung",
  "en": "-chen, -lein, -er, -in, -ung"
}, subtitle: {
  "fr": "La dérivation des mots",
  "de": "Aus Wörtern neue Wörter machen",
  "ar": "اشتقاق الكلمات",
  "en": "Word formation"
}, lesson: lesson46, exerciseSets: [...training46, ...extra46] },
  { id: "kapitel-47", number: 47, level: "A2", title: {
  "fr": "Ich bin dann mal weg",
  "de": "Ich bin dann mal weg",
  "ar": "Ich bin dann mal weg",
  "en": "Ich bin dann mal weg"
}, subtitle: {
  "fr": "Expressions avec sein et haben",
  "de": "Zusammengesetzte Verben",
  "ar": "تعبيرات مع sein وhaben",
  "en": "Expressions with sein and haben"
}, lesson: lesson47, exerciseSets: [...training47, ...extra47] },
  { id: "kapitel-48", number: 48, level: "A2", title: {
  "fr": "Der, die oder das?",
  "de": "Der, die oder das?",
  "ar": "Der, die oder das?",
  "en": "Der, die oder das?"
}, subtitle: {
  "fr": "Le genre des noms",
  "de": "Genusregeln",
  "ar": "جنس الأسماء",
  "en": "Noun gender"
}, lesson: lesson48, exerciseSets: [...training48, ...extra48] },
  { id: "kapitel-49", number: 49, level: "B1", title: {
  "fr": "Er kam, sah und sagte",
  "de": "Er kam, sah und sagte",
  "ar": "Er kam, sah und sagte",
  "en": "Er kam, sah und sagte"
}, subtitle: {
  "fr": "Le prétérit",
  "de": "Präteritum",
  "ar": "الماضي البسيط",
  "en": "Simple past"
}, lesson: lesson49, exerciseSets: [...training49, ...extra49] },
  { id: "kapitel-50", number: 50, level: "B1", title: {
  "fr": "Ich hatte zu lange geschlafen",
  "de": "Ich hatte zu lange geschlafen",
  "ar": "Ich hatte zu lange geschlafen",
  "en": "Ich hatte zu lange geschlafen"
}, subtitle: {
  "fr": "Le plus-que-parfait",
  "de": "Plusquamperfekt",
  "ar": "الماضي الأسبق",
  "en": "Past perfect"
}, lesson: lesson50, exerciseSets: [...training50, ...extra50] },
  { id: "kapitel-51", number: 51, level: "B1", title: {
  "fr": "Ich wasche mir die Hände",
  "de": "Ich wasche mir die Hände",
  "ar": "Ich wasche mir die Hände",
  "en": "Ich wasche mir die Hände"
}, subtitle: {
  "fr": "Pronoms réfléchis au datif",
  "de": "Reflexivpronomen im Dativ",
  "ar": "ضمائر الانعكاس في الداتيف",
  "en": "Dative reflexive pronouns"
}, lesson: lesson51, exerciseSets: [...training51, ...extra51] },
  { id: "kapitel-52", number: 52, level: "B1", title: {
  "fr": "Kaufe ich ein oder bestelle ich Pizza?",
  "de": "Kaufe ich ein oder bestelle ich Pizza?",
  "ar": "Kaufe ich ein oder bestelle ich Pizza?",
  "en": "Kaufe ich ein oder bestelle ich Pizza?"
}, subtitle: {
  "fr": "Verbes séparables et inséparables",
  "de": "Trennbare und untrennbare Verben",
  "ar": "الأفعال القابلة وغير القابلة للانفصال",
  "en": "Separable and inseparable verbs"
}, lesson: lesson52, exerciseSets: [...training52, ...extra52] },
  { id: "kapitel-53", number: 53, level: "B1", title: {
  "fr": "Sie freut sich über die Blumen",
  "de": "Sie freut sich über die Blumen",
  "ar": "Sie freut sich über die Blumen",
  "en": "Sie freut sich über die Blumen"
}, subtitle: {
  "fr": "Verbes à préposition",
  "de": "Verben mit Präpositionen",
  "ar": "الأفعال مع حروف الجر",
  "en": "Verbs with prepositions"
}, lesson: lesson53, exerciseSets: [...training53, ...extra53] },
  { id: "kapitel-54", number: 54, level: "B1", title: {
  "fr": "Daneben, danach, dafür ...",
  "de": "Daneben, danach, dafür ...",
  "ar": "Daneben, danach, dafür ...",
  "en": "Daneben, danach, dafür ..."
}, subtitle: {
  "fr": "Adverbes pronominaux",
  "de": "Präpositionaladverbien und -pronomen",
  "ar": "الظروف والضمائر المركبة مع حروف الجر",
  "en": "Prepositional adverbs and pronouns"
}, lesson: lesson54, exerciseSets: [...training54, ...extra54] },
  { id: "kapitel-55", number: 55, level: "B1", title: {
  "fr": "Wäre, hätte, würde ...",
  "de": "Wäre, hätte, würde ...",
  "ar": "Wäre, hätte, würde ...",
  "en": "Wäre, hätte, würde ..."
}, subtitle: {
  "fr": "Formes du subjonctif II",
  "de": "Konjunktiv II: Formen",
  "ar": "صيغ الكونينكتيف الثاني",
  "en": "Subjunctive II forms"
}, lesson: lesson55, exerciseSets: [...training55, ...extra55] },
  { id: "kapitel-56", number: 56, level: "B1", title: {
  "fr": "Wenn ich viel Geld hätte, ...",
  "de": "Wenn ich viel Geld hätte, ...",
  "ar": "Wenn ich viel Geld hätte, ...",
  "en": "Wenn ich viel Geld hätte, ..."
}, subtitle: {
  "fr": "Emplois du subjonctif II",
  "de": "Konjunktiv II: Gebrauch",
  "ar": "استعمالات الكونينكتيف الثاني",
  "en": "Uses of subjunctive II"
}, lesson: lesson56, exerciseSets: [...training56, ...extra56] },
  { id: "kapitel-57", number: 57, level: "B1", title: {
  "fr": "Das Auto wird gebaut",
  "de": "Das Auto wird gebaut",
  "ar": "Das Auto wird gebaut",
  "en": "Das Auto wird gebaut"
}, subtitle: {
  "fr": "Passif au présent",
  "de": "Passiv im Präsens",
  "ar": "المبني للمجهول في الحاضر",
  "en": "Present passive"
}, lesson: lesson57, exerciseSets: [...training57, ...extra57] },
  { id: "kapitel-58", number: 58, level: "B1", title: {
  "fr": "Wann wurde der Kölner Dom gebaut?",
  "de": "Wann wurde der Kölner Dom gebaut?",
  "ar": "Wann wurde der Kölner Dom gebaut?",
  "en": "Wann wurde der Kölner Dom gebaut?"
}, subtitle: {
  "fr": "Passif au passé",
  "de": "Passiv in der Vergangenheit",
  "ar": "المبني للمجهول في الماضي",
  "en": "Past passive"
}, lesson: lesson58, exerciseSets: [...training58, ...extra58] },
  { id: "kapitel-59", number: 59, level: "B1", title: {
  "fr": "Der Präsident wird kommen",
  "de": "Der Präsident wird kommen",
  "ar": "Der Präsident wird kommen",
  "en": "Der Präsident wird kommen"
}, subtitle: {
  "fr": "Futur I : avenir et supposition",
  "de": "Vermutung und Zukunft mit Futur I",
  "ar": "المستقبل والافتراض بصيغة Futur I",
  "en": "Future and supposition with Futur I"
}, lesson: lesson59, exerciseSets: [...training59, ...extra59] },
  { id: "kapitel-60", number: 60, level: "B1", title: {
  "fr": "Werden, werden, werden ...",
  "de": "Werden, werden, werden ...",
  "ar": "Werden, werden, werden ...",
  "en": "Werden, werden, werden ..."
}, subtitle: {
  "fr": "Les fonctions de werden",
  "de": "Funktionen von werden",
  "ar": "وظائف werden",
  "en": "Functions of werden"
}, lesson: lesson60, exerciseSets: [...training60, ...extra60] },
  { id: "kapitel-61", number: 61, level: "B1", title: {
  "fr": "Leben und leben lassen",
  "de": "Leben und leben lassen",
  "ar": "Leben und leben lassen",
  "en": "Leben und leben lassen"
}, subtitle: {
  "fr": "Le verbe lassen",
  "de": "Das Verb lassen",
  "ar": "الفعل lassen",
  "en": "The verb lassen"
}, lesson: lesson61, exerciseSets: [...training61, ...extra61] },
  { id: "kapitel-62", number: 62, level: "B1", title: {
  "fr": "Sitzen, setzen, stehen, stellen, liegen, legen und hängen",
  "de": "Sitzen, setzen, stehen, stellen, liegen, legen und hängen",
  "ar": "Sitzen, setzen, stehen, stellen, liegen, legen und hängen",
  "en": "Sitzen, setzen, stehen, stellen, liegen, legen und hängen"
}, subtitle: {
  "fr": "Verbes de position et de direction",
  "de": "Positions- und Direktionsverben",
  "ar": "أفعال الوضع والاتجاه",
  "en": "Position and direction verbs"
}, lesson: lesson62, exerciseSets: [...training62, ...extra62] },
  { id: "kapitel-63", number: 63, level: "B1", title: {
  "fr": "Das Auto seines Vaters",
  "de": "Das Auto seines Vaters",
  "ar": "Das Auto seines Vaters",
  "en": "Das Auto seines Vaters"
}, subtitle: {
  "fr": "Le génitif",
  "de": "Genitiv",
  "ar": "الجينيتيف",
  "en": "Genitive"
}, lesson: lesson63, exerciseSets: [...training63, ...extra63] },
  { id: "kapitel-64", number: 64, level: "B1", title: {
  "fr": "Kennen Sie den Herrn?",
  "de": "Kennen Sie den Herrn?",
  "ar": "Kennen Sie den Herrn?",
  "en": "Kennen Sie den Herrn?"
}, subtitle: {
  "fr": "Déclinaison faible des noms",
  "de": "N-Deklination",
  "ar": "التصريف الضعيف للأسماء",
  "en": "Weak noun declension"
}, lesson: lesson64, exerciseSets: [...training64, ...extra64] },
  { id: "kapitel-65", number: 65, level: "B1", title: {
  "fr": "Der Jugendliche – ein Jugendlicher",
  "de": "Der Jugendliche – ein Jugendlicher",
  "ar": "Der Jugendliche – ein Jugendlicher",
  "en": "Der Jugendliche – ein Jugendlicher"
}, subtitle: {
  "fr": "Adjectifs substantivés désignant des personnes",
  "de": "Adjektive für Personen als Nomen",
  "ar": "الصفات المستعملة أسماء للأشخاص",
  "en": "Adjectives as nouns for people"
}, lesson: lesson65, exerciseSets: [...training65, ...extra65] },
  { id: "kapitel-66", number: 66, level: "B1", title: {
  "fr": "Alles Gute!",
  "de": "Alles Gute!",
  "ar": "Alles Gute!",
  "en": "Alles Gute!"
}, subtitle: {
  "fr": "Adjectifs substantivés neutres",
  "de": "Adjektive als neutrale Nomen",
  "ar": "الصفات المحولة إلى أسماء محايدة",
  "en": "Adjectives as neuter nouns"
}, lesson: lesson66, exerciseSets: [...training66, ...extra66] },
  { id: "kapitel-67", number: 67, level: "B1", title: {
  "fr": "Wissen Sie, ob ...?",
  "de": "Wissen Sie, ob ...?",
  "ar": "Wissen Sie, ob ...?",
  "en": "Wissen Sie, ob ...?"
}, subtitle: {
  "fr": "Questions indirectes",
  "de": "Indirekte Fragen",
  "ar": "الأسئلة غير المباشرة",
  "en": "Indirect questions"
}, lesson: lesson67, exerciseSets: [...training67, ...extra67] },
  { id: "kapitel-68", number: 68, level: "B1", title: {
  "fr": "Es ist schön, zu feiern",
  "de": "Es ist schön, zu feiern",
  "ar": "Es ist schön, zu feiern",
  "en": "Es ist schön, zu feiern"
}, subtitle: {
  "fr": "Infinitif avec zu",
  "de": "Infinitiv mit zu",
  "ar": "المصدر مع zu",
  "en": "Infinitive with zu"
}, lesson: lesson68, exerciseSets: [...training68, ...extra68] },
  { id: "kapitel-69", number: 69, level: "B1", title: {
  "fr": "Ich will singen, lass mich singen!",
  "de": "Ich will singen, lass mich singen!",
  "ar": "Ich will singen, lass mich singen!",
  "en": "Ich will singen, lass mich singen!"
}, subtitle: {
  "fr": "Infinitif sans zu",
  "de": "Infinitiv ohne zu",
  "ar": "المصدر دون zu",
  "en": "Bare infinitive"
}, lesson: lesson69, exerciseSets: [...training69, ...extra69] },
  { id: "kapitel-70", number: 70, level: "B1", title: {
  "fr": "Das ist der Mann, der immer meine Nachbarin besucht",
  "de": "Das ist der Mann, der immer meine Nachbarin besucht",
  "ar": "Das ist der Mann, der immer meine Nachbarin besucht",
  "en": "Das ist der Mann, der immer meine Nachbarin besucht"
}, subtitle: {
  "fr": "Relatives au nominatif",
  "de": "Relativsätze 1: Nominativ",
  "ar": "الجمل الموصولة في الرفع",
  "en": "Relative clauses: nominative"
}, lesson: lesson70, exerciseSets: [...training70, ...extra70] },
  { id: "kapitel-71", number: 71, level: "B1", title: {
  "fr": "Wie heißt das Ding, mit dem man ...?",
  "de": "Wie heißt das Ding, mit dem man ...?",
  "ar": "Wie heißt das Ding, mit dem man ...?",
  "en": "Wie heißt das Ding, mit dem man ...?"
}, subtitle: {
  "fr": "Propositions relatives 2",
  "de": "Relativsätze 2",
  "ar": "الجمل الموصولة 2",
  "en": "Relative clauses 2"
}, lesson: lesson71, exerciseSets: [...training71, ...extra71] },
  { id: "kapitel-72", number: 72, level: "B1", title: {
  "fr": "Ich gehe, wenn ... / Ich ging, als ...",
  "de": "Ich gehe, wenn ... / Ich ging, als ...",
  "ar": "Ich gehe, wenn ... / Ich ging, als ...",
  "en": "Ich gehe, wenn ... / Ich ging, als ..."
}, subtitle: {
  "fr": "Subordonnées temporelles",
  "de": "Temporale Nebensätze mit wenn und als",
  "ar": "الجمل الزمنية التابعة",
  "en": "Temporal subordinate clauses"
}, lesson: lesson72, exerciseSets: [...training72, ...extra72] },
  { id: "kapitel-73", number: 73, level: "B1", title: {
  "fr": "Während, bevor, nachdem und seit",
  "de": "Während, bevor, nachdem und seit",
  "ar": "Während, bevor, nachdem und seit",
  "en": "Während, bevor, nachdem und seit"
}, subtitle: {
  "fr": "Subordonnées temporelles",
  "de": "Temporale Nebensätze",
  "ar": "الجمل التابعة الزمنية",
  "en": "Temporal clauses"
}, lesson: lesson73, exerciseSets: [...training73, ...extra73] },
  { id: "kapitel-74", number: 74, level: "B1", title: {
  "fr": "Um ... zu und damit",
  "de": "Um ... zu und damit",
  "ar": "Um ... zu und damit",
  "en": "Um ... zu und damit"
}, subtitle: {
  "fr": "Subordonnées finales",
  "de": "Finalsätze",
  "ar": "الجمل التابعة الغائية",
  "en": "Purpose clauses"
}, lesson: lesson74, exerciseSets: [...training74, ...extra74] },
  { id: "kapitel-75", number: 75, level: "B1", title: {
  "fr": "Entweder ... oder, weder ... noch, sowohl ... als auch und nicht nur ... sondern auch",
  "de": "Entweder ... oder, weder ... noch, sowohl ... als auch und nicht nur ... sondern auch",
  "ar": "Entweder ... oder, weder ... noch, sowohl ... als auch und nicht nur ... sondern auch",
  "en": "Entweder ... oder, weder ... noch, sowohl ... als auch und nicht nur ... sondern auch"
}, subtitle: {
  "fr": "Connecteurs doubles",
  "de": "Doppelkonnektoren",
  "ar": "الروابط المزدوجة",
  "en": "Paired conjunctions"
}, lesson: lesson75, exerciseSets: [...training75, ...extra75] },
  { id: "kapitel-76", number: 76, level: "B1", title: {
  "fr": "Je größer, desto besser!",
  "de": "Je größer, desto besser!",
  "ar": "Je größer, desto besser!",
  "en": "Je größer, desto besser!"
}, subtitle: {
  "fr": "Comparaisons corrélatives",
  "de": "Vergleichssätze",
  "ar": "جمل المقارنة المتلازمة",
  "en": "Correlative comparisons"
}, lesson: lesson76, exerciseSets: [...training76, ...extra76] },
  { id: "kapitel-77", number: 77, level: "B1", title: {
  "fr": "Während, wegen, trotz, innerhalb, außerhalb",
  "de": "Während, wegen, trotz, innerhalb, außerhalb",
  "ar": "Während, wegen, trotz, innerhalb, außerhalb",
  "en": "Während, wegen, trotz, innerhalb, außerhalb"
}, subtitle: {
  "fr": "Prépositions au génitif",
  "de": "Präpositionen mit Genitiv",
  "ar": "حروف الجر مع الجينيتيف",
  "en": "Genitive prepositions"
}, lesson: lesson77, exerciseSets: [...training77, ...extra77] },
  { id: "kapitel-78", number: 78, level: "B1", title: {
  "fr": "Innerhalb, außerhalb, in, nach, vor, seit, bei und während",
  "de": "Innerhalb, außerhalb, in, nach, vor, seit, bei und während",
  "ar": "Innerhalb, außerhalb, in, nach, vor, seit, bei und während",
  "en": "Innerhalb, außerhalb, in, nach, vor, seit, bei und während"
}, subtitle: {
  "fr": "Prépositions temporelles 2",
  "de": "Temporale Präpositionen 2",
  "ar": "حروف الجر الزمنية 2",
  "en": "Temporal prepositions 2"
}, lesson: lesson78, exerciseSets: [...training78, ...extra78] },
  { id: "kapitel-79", number: 79, level: "B1", title: {
  "fr": "Deutsches Bier",
  "de": "Deutsches Bier",
  "ar": "Deutsches Bier",
  "en": "Deutsches Bier"
}, subtitle: {
  "fr": "Déclinaison des adjectifs avec et sans article",
  "de": "Adjektivdeklination mit und ohne Artikel",
  "ar": "تصريف الصفات مع أداة التعريف وبدونها",
  "en": "Adjective declension with and without articles"
}, lesson: lesson79, exerciseSets: [...training79, ...extra79] },
  { id: "kapitel-80", number: 80, level: "B1", title: {
  "fr": "Singende Vögel und fliegende Fische",
  "de": "Singende Vögel und fliegende Fische",
  "ar": "Singende Vögel und fliegende Fische",
  "en": "Singende Vögel und fliegende Fische"
}, subtitle: {
  "fr": "Participe présent comme adjectif",
  "de": "Partizip I als Adjektiv",
  "ar": "اسم الفاعل كصفة",
  "en": "Present participle as an adjective"
}, lesson: lesson80, exerciseSets: [...training80, ...extra80] },
]

export function getGrammarChapter(chapterId: string) {
  return grammarChapters.find((chapter) => chapter.id === chapterId) ?? null
}

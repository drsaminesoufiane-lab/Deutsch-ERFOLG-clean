
'use client'

import { celebratePerfectScore } from '@/components/student/ExerciseCelebration'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import {
  BookOpen,
  Volume2,
  GraduationCap,
  Languages,
  ChevronRight,
  ChevronLeft,
  CheckCircle2,
  RotateCcw,
  Star,
  Headphones,
  Lightbulb,
} from 'lucide-react'

type Tab = 'alphabet' | 'syllables' | 'combinations' | 'words' | 'quiz'

const alphabet = [
  { letter: 'A', name: 'Ah', example: 'Apfel', fr: 'Pomme', de: 'Apfel', en: 'Apple', ar: 'تفاحة', pronunciation: { fr: 'Comme le A dans papa', de: 'Wie das A in Vater', en: 'Like the A in father', ar: 'مثل الألف في بابا' } },
  { letter: 'B', name: 'Beh', example: 'Ball', fr: 'Ballon', de: 'Ball', en: 'Ball', ar: 'كرة', pronunciation: { fr: 'Comme le B français', de: 'Wie B im Deutschen', en: 'Like B in boy', ar: 'مثل حرف ب' } },
  { letter: 'C', name: 'Tseh', example: 'Computer', fr: 'Ordinateur', de: 'Computer', en: 'Computer', ar: 'حاسوب', pronunciation: { fr: 'Comme TS dans tsar', de: 'Wie TS in „Pizza“', en: 'Like TS in cats', ar: 'مثل تس' } },
  { letter: 'D', name: 'Deh', example: 'Danke', fr: 'Merci', de: 'Danke', en: 'Thank you', ar: 'شكراً', pronunciation: { fr: 'Comme le D français', de: 'Wie D in Danke', en: 'Like D in dog', ar: 'مثل حرف د' } },
  { letter: 'E', name: 'Eh', example: 'Elefant', fr: 'Éléphant', de: 'Elefant', en: 'Elephant', ar: 'فيل', pronunciation: { fr: 'Un é fermé ou è selon le mot', de: 'Ein klares E', en: 'A clear E sound', ar: 'صوت قريب من إيه' } },
  { letter: 'F', name: 'Eff', example: 'Fisch', fr: 'Poisson', de: 'Fisch', en: 'Fish', ar: 'سمكة', pronunciation: { fr: 'Comme le F français', de: 'Wie F in Fisch', en: 'Like F in fish', ar: 'مثل حرف ف' } },
  { letter: 'G', name: 'Geh', example: 'Garten', fr: 'Jardin', de: 'Garten', en: 'Garden', ar: 'حديقة', pronunciation: { fr: 'Comme G dans gare', de: 'Wie G in Garten', en: 'Like G in go', ar: 'مثل گ أو ج قاسية' } },
  { letter: 'H', name: 'Hah', example: 'Haus', fr: 'Maison', de: 'Haus', en: 'House', ar: 'منزل', pronunciation: { fr: 'H aspiré, avec un souffle', de: 'Ein hörbarer Hauchlaut', en: 'Like H in house', ar: 'مثل حرف ه مع نفَس' } },
  { letter: 'I', name: 'Ih', example: 'Igel', fr: 'Hérisson', de: 'Igel', en: 'Hedgehog', ar: 'قنفذ', pronunciation: { fr: 'Comme I dans ici', de: 'Wie das lange I', en: 'Like EE in see', ar: 'مثل ي طويلة' } },
  { letter: 'J', name: 'Yott', example: 'Ja', fr: 'Oui', de: 'Ja', en: 'Yes', ar: 'نعم', pronunciation: { fr: 'Comme Y dans yaourt', de: 'Wie J in Ja', en: 'Like Y in yes', ar: 'مثل ي' } },
  { letter: 'K', name: 'Kah', example: 'Kind', fr: 'Enfant', de: 'Kind', en: 'Child', ar: 'طفل', pronunciation: { fr: 'Comme le K français', de: 'Wie K in Kind', en: 'Like K in key', ar: 'مثل حرف ك' } },
  { letter: 'L', name: 'Ell', example: 'Lampe', fr: 'Lampe', de: 'Lampe', en: 'Lamp', ar: 'مصباح', pronunciation: { fr: 'Comme le L français', de: 'Wie L in Lampe', en: 'Like L in love', ar: 'مثل حرف ل' } },
  { letter: 'M', name: 'Emm', example: 'Mutter', fr: 'Mère', de: 'Mutter', en: 'Mother', ar: 'أم', pronunciation: { fr: 'Comme le M français', de: 'Wie M in Mutter', en: 'Like M in mother', ar: 'مثل حرف م' } },
  { letter: 'N', name: 'Enn', example: 'Nase', fr: 'Nez', de: 'Nase', en: 'Nose', ar: 'أنف', pronunciation: { fr: 'Comme le N français', de: 'Wie N in Nase', en: 'Like N in name', ar: 'مثل حرف ن' } },
  { letter: 'O', name: 'Oh', example: 'Oma', fr: 'Grand-mère', de: 'Oma', en: 'Grandmother', ar: 'جدة', pronunciation: { fr: 'Comme un O fermé', de: 'Wie ein klares O', en: 'Like O in more (approximately)', ar: 'مثل و قصيرة' } },
  { letter: 'P', name: 'Peh', example: 'Papa', fr: 'Papa', de: 'Papa', en: 'Dad', ar: 'أب', pronunciation: { fr: 'Comme P, avec une légère expiration', de: 'Mit leichter Behauchung', en: 'Like P in pen', ar: 'مثل پ مع نفَس خفيف' } },
  { letter: 'Q', name: 'Kuh', example: 'Quelle', fr: 'Source', de: 'Quelle', en: 'Source', ar: 'مصدر', pronunciation: { fr: 'Comme K, généralement avec U', de: 'Meistens als QU', en: 'Like K, usually followed by U', ar: 'مثل ك وغالباً بعدها و' } },
  { letter: 'R', name: 'Err', example: 'Rot', fr: 'Rouge', de: 'Rot', en: 'Red', ar: 'أحمر', pronunciation: { fr: 'R allemand, souvent guttural', de: 'Ein R, oft im Rachen gesprochen', en: 'German R, often pronounced in the throat', ar: 'راء ألمانية غالباً من الحلق' } },
  { letter: 'S', name: 'Ess', example: 'Sonne', fr: 'Soleil', de: 'Sonne', en: 'Sun', ar: 'شمس', pronunciation: { fr: 'Comme S dans sac', de: 'Wie S in Sonne', en: 'Like S in sun', ar: 'مثل حرف س' } },
  { letter: 'T', name: 'Teh', example: 'Tisch', fr: 'Table', de: 'Tisch', en: 'Table', ar: 'طاولة', pronunciation: { fr: 'Comme T, avec une légère expiration', de: 'Mit leichter Behauchung', en: 'Like T in table', ar: 'مثل ت مع نفَس خفيف' } },
  { letter: 'U', name: 'Uh', example: 'Uhr', fr: 'Horloge', de: 'Uhr', en: 'Clock', ar: 'ساعة', pronunciation: { fr: 'Comme OU dans roue', de: 'Wie das lange U', en: 'Like OO in moon', ar: 'مثل و طويلة' } },
  { letter: 'V', name: 'Fau', example: 'Vater', fr: 'Père', de: 'Vater', en: 'Father', ar: 'أب', pronunciation: { fr: 'Souvent comme F', de: 'In vielen Wörtern wie F', en: 'Often like F', ar: 'غالباً مثل ف' } },
  { letter: 'W', name: 'Veh', example: 'Wasser', fr: 'Eau', de: 'Wasser', en: 'Water', ar: 'ماء', pronunciation: { fr: 'Comme V en français', de: 'Wie W in Wasser', en: 'Like V in very', ar: 'مثل ڤ' } },
  { letter: 'X', name: 'Iks', example: 'Taxi', fr: 'Taxi', de: 'Taxi', en: 'Taxi', ar: 'سيارة أجرة', pronunciation: { fr: 'Comme X dans taxi', de: 'Wie KS', en: 'Like X in box', ar: 'مثل كس' } },
  { letter: 'Y', name: 'Ypsilon', example: 'Yoga', fr: 'Yoga', de: 'Yoga', en: 'Yoga', ar: 'يوغا', pronunciation: { fr: 'Son variable selon le mot', de: 'Je nach Wort unterschiedlich', en: 'Varies depending on the word', ar: 'يختلف حسب الكلمة' } },
  { letter: 'Z', name: 'Tsett', example: 'Zeit', fr: 'Temps', de: 'Zeit', en: 'Time', ar: 'وقت', pronunciation: { fr: 'Comme TS dans tsar', de: 'Wie TS in Zeit', en: 'Like TS in cats', ar: 'مثل تس' } },
]

const specialLetters = [
  { letter: 'Ä ä', sound: 'Ä', word: 'Mädchen', meaning: { fr: 'Fille', de: 'Mädchen', en: 'Girl', ar: 'فتاة' }, description: { fr: 'Proche du è français.', de: 'Ä klingt ähnlich wie ein offenes E.', en: 'Similar to the vowel in bed.', ar: 'قريب من صوت إي المفتوحة.' } },
  { letter: 'Ö ö', sound: 'Ö', word: 'schön', meaning: { fr: 'Beau / belle', de: 'Schön', en: 'Beautiful', ar: 'جميل / جميلة' }, description: { fr: 'Prononce É avec les lèvres arrondies.', de: 'Sprich E mit gerundeten Lippen.', en: 'Say E with rounded lips.', ar: 'انطق إيه مع تدوير الشفتين.' } },
  { letter: 'Ü ü', sound: 'Ü', word: 'Tür', meaning: { fr: 'Porte', de: 'Tür', en: 'Door', ar: 'باب' }, description: { fr: 'Comme le U français de lune.', de: 'Ähnlich wie das französische U.', en: 'Say EE with rounded lips.', ar: 'مثل صوت U الفرنسي.' } },
  { letter: 'ß', sound: 'SS', word: 'Straße', meaning: { fr: 'Rue', de: 'Straße', en: 'Street', ar: 'شارع' }, description: { fr: 'Se prononce comme SS.', de: 'Wird wie ein scharfes S gesprochen.', en: 'Pronounced like SS.', ar: 'تنطق مثل س.' } },
]

const syllableRows = [
  { consonant: 'B', values: ['ba', 'be', 'bi', 'bo', 'bu'], note: { fr: 'B se prononce comme en français.', de: 'B wird ähnlich wie im Deutschen üblich ausgesprochen.', en: 'B is pronounced as in English.', ar: 'ينطق B مثل الباء تقريباً.' } },
  { consonant: 'D', values: ['da', 'de', 'di', 'do', 'du'], note: { fr: 'D se prononce comme en français.', de: 'D wird ähnlich wie im Deutschen üblich ausgesprochen.', en: 'D is pronounced as in English.', ar: 'ينطق D مثل الدال تقريباً.' } },
  { consonant: 'F', values: ['fa', 'fe', 'fi', 'fo', 'fu'], note: { fr: 'F se prononce comme en français.', de: 'F wird wie in Fisch ausgesprochen.', en: 'F is pronounced as in fish.', ar: 'ينطق F مثل الفاء.' } },
  { consonant: 'L', values: ['la', 'le', 'li', 'lo', 'lu'], note: { fr: 'L se prononce comme en français.', de: 'L wird wie in Lampe ausgesprochen.', en: 'L is pronounced as in lamp.', ar: 'ينطق L مثل اللام.' } },
  { consonant: 'M', values: ['ma', 'me', 'mi', 'mo', 'mu'], note: { fr: 'M se prononce comme en français.', de: 'M wird wie in Mutter ausgesprochen.', en: 'M is pronounced as in mother.', ar: 'ينطق M مثل الميم.' } },
  { consonant: 'N', values: ['na', 'ne', 'ni', 'no', 'nu'], note: { fr: 'N se prononce comme en français.', de: 'N wird wie in Nase ausgesprochen.', en: 'N is pronounced as in name.', ar: 'ينطق N مثل النون.' } },
  { consonant: 'P', values: ['pa', 'pe', 'pi', 'po', 'pu'], note: { fr: 'P est prononcé avec une petite aspiration.', de: 'P wird mit einer leichten Behauchung gesprochen.', en: 'P is pronounced with a small puff of air.', ar: 'ينطق P مع نفَس خفيف.' } },
  { consonant: 'S', values: ['sa', 'se', 'si', 'so', 'su'], note: { fr: 'Au début d’un mot devant une voyelle, S peut sonner comme Z.', de: 'Am Wortanfang vor einem Vokal klingt S oft wie Z.', en: 'At the beginning of a word before a vowel, S often sounds like Z.', ar: 'في بداية الكلمة قبل حرف متحرك، قد ينطق S مثل ز.' } },
  { consonant: 'T', values: ['ta', 'te', 'ti', 'to', 'tu'], note: { fr: 'T est prononcé avec une petite aspiration.', de: 'T wird mit einer leichten Behauchung gesprochen.', en: 'T is pronounced with a small puff of air.', ar: 'ينطق T مع نفَس خفيف.' } },
  { consonant: 'W', values: ['wa', 'we', 'wi', 'wo', 'wu'], note: { fr: 'W allemand se prononce comme V en français.', de: 'W wird wie ein deutsches W ausgesprochen.', en: 'German W sounds like English V.', ar: 'W الألمانية تنطق مثل ڤ.' } },
]

const combinations = [
  {
    category: 'vowels',
    items: [
      { value: 'ei', sound: 'aï', example: 'mein', meaning: { fr: 'mon / ma', de: 'mein', en: 'my', ar: 'لي' }, description: { fr: 'Se prononce comme « aï » dans ail.', de: 'Klingt wie „ai“.', en: 'Sounds like the vowel in “eye”.', ar: 'تنطق مثل آي.' } },
      { value: 'ai', sound: 'aï', example: 'Mai', meaning: { fr: 'mai', de: 'Mai', en: 'May', ar: 'ماي' }, description: { fr: 'Même son que ei. Cette combinaison est moins fréquente.', de: 'Gleicher Klang wie ei. Diese Kombination ist seltener.', en: 'Same sound as ei. This spelling is less common.', ar: 'نفس صوت ei وتستعمل بشكل أقل.' } },
      { value: 'au', sound: 'a-ou', example: 'Haus', meaning: { fr: 'maison', de: 'Haus', en: 'house', ar: 'منزل' }, description: { fr: 'Se prononce comme « aou » en une seule syllabe.', de: 'Wird als Doppellaut gesprochen.', en: 'Sounds like “ow” in “house”.', ar: 'تنطق مثل آو.' } },
      { value: 'eu', sound: 'oï', example: 'heute', meaning: { fr: 'aujourd’hui', de: 'heute', en: 'today', ar: 'اليوم' }, description: { fr: 'Se prononce approximativement « oï ».', de: 'Klingt wie „oy“.', en: 'Sounds like “oy” in “boy”.', ar: 'تنطق تقريباً أوي.' } },
      { value: 'äu', sound: 'oï', example: 'Häuser', meaning: { fr: 'maisons', de: 'Häuser', en: 'houses', ar: 'منازل' }, description: { fr: 'Se prononce comme eu.', de: 'Klingt genauso wie eu.', en: 'Sounds the same as eu.', ar: 'تنطق مثل eu.' } },
      { value: 'ie', sound: 'ii long', example: 'Liebe', meaning: { fr: 'amour', de: 'Liebe', en: 'love', ar: 'حب' }, description: { fr: 'Le i est long : « iii ».', de: 'Das i wird lang ausgesprochen.', en: 'The i is long, like “ee” in “see”.', ar: 'تنطق ي طويلة.' } },
    ],
  },
  {
    category: 'consonants',
    items: [
      { value: 'sch', sound: 'ch', example: 'Schule', meaning: { fr: 'école', de: 'Schule', en: 'school', ar: 'مدرسة' }, description: { fr: 'Se prononce comme « ch » dans chat.', de: 'Wie „sch“ in Schule.', en: 'Like “sh” in “shoe”.', ar: 'مثل ش.' } },
      { value: 'ch', sound: 'kh / ç', example: 'ich', meaning: { fr: 'je', de: 'ich', en: 'I', ar: 'أنا' }, description: { fr: 'Deux sons importants : doux dans ich, guttural dans Buch.', de: 'Zwei wichtige Laute: weich in ich, rau in Buch.', en: 'Two common sounds: soft in ich, guttural in Buch.', ar: 'له صوتان: ناعم في ich وحلقي في Buch.' } },
      { value: 'sp', sound: 'chp', example: 'Sport', meaning: { fr: 'sport', de: 'Sport', en: 'sport', ar: 'رياضة' }, description: { fr: 'Au début d’un mot ou d’une syllabe, se prononce « chp ».', de: 'Am Wort- oder Silbenanfang klingt es wie „schp“.', en: 'At the beginning of a word or syllable, it sounds like “shp”.', ar: 'في بداية الكلمة أو المقطع تنطق شب.' } },
      { value: 'st', sound: 'cht', example: 'Straße', meaning: { fr: 'rue', de: 'Straße', en: 'street', ar: 'شارع' }, description: { fr: 'Au début d’un mot ou d’une syllabe, se prononce « cht ».', de: 'Am Wort- oder Silbenanfang klingt es wie „scht“.', en: 'At the beginning of a word or syllable, it sounds like “sht”.', ar: 'في بداية الكلمة أو المقطع تنطق شت.' } },
      // DE_CH_PRONUNCIATION_V1
      {"value": "chs", "sound": "ks", "example": "sechs", "meaning": {"fr": "six", "de": "sechs", "en": "six", "ar": "\u0633\u062a\u0629"}, "description": {"fr": "CHS se prononce souvent KS dans un m\u00eame radical : sechs, Fuchs, wachsen. Mais pas toujours : dans du machst, le CH garde son son guttural.", "de": "CHS klingt in einem Wortstamm oft wie KS: sechs, Fuchs, wachsen. In du machst bleibt der Ach-Laut erhalten.", "en": "CHS often sounds like KS within a word stem: sechs, Fuchs, wachsen. In du machst, CH keeps its guttural sound.", "ar": "\u062a\u0646\u0637\u0642 chs \u063a\u0627\u0644\u0628\u0627\u064b \u0643\u0633 \u062f\u0627\u062e\u0644 \u062c\u0630\u0631 \u0627\u0644\u0643\u0644\u0645\u0629\u060c \u0645\u062b\u0644 sechs \u0648 Fuchs \u0648 wachsen. \u0644\u0643\u0646 \u0641\u064a du machst \u064a\u0628\u0642\u0649 \u0635\u0648\u062a ch \u062d\u0644\u0642\u064a\u0651\u0627\u064b."}},
      {"value": "ch (K)", "sound": "k", "example": "Chor", "meaning": {"fr": "chorale", "de": "Chor", "en": "choir", "ar": "\u062c\u0648\u0642\u0629"}, "description": {"fr": "Au d\u00e9but de certains mots emprunt\u00e9s, CH se prononce K : Chor, Chaos, Charakter.", "de": "Am Anfang einiger Fremdw\u00f6rter klingt CH wie K: Chor, Chaos, Charakter.", "en": "At the beginning of some loanwords, CH sounds like K: Chor, Chaos, Charakter.", "ar": "\u0641\u064a \u0628\u062f\u0627\u064a\u0629 \u0628\u0639\u0636 \u0627\u0644\u0643\u0644\u0645\u0627\u062a \u0627\u0644\u062f\u062e\u064a\u0644\u0629 \u062a\u0646\u0637\u0642 ch \u0645\u062b\u0644 \u0643\u060c \u0645\u062b\u0644 Chor \u0648 Chaos \u0648 Charakter."}},
      {"value": "chst", "sound": "\u00e7st / kst", "example": "n\u00e4chste", "meaning": {"fr": "prochain / prochaine", "de": "n\u00e4chste", "en": "next", "ar": "\u0627\u0644\u062a\u0627\u0644\u064a / \u0627\u0644\u062a\u0627\u0644\u064a\u0629"}, "description": {"fr": "Dans n\u00e4chste, la prononciation standard garde le CH doux de ich. On entend aussi une variante avec K. Ne pas g\u00e9n\u00e9raliser cette variante.", "de": "In n\u00e4chste ist der Ich-Laut die Standardaussprache. Daneben h\u00f6rt man auch eine Variante mit K. Diese Variante gilt nicht allgemein.", "en": "In n\u00e4chste, the standard pronunciation uses the soft CH of ich. A variant with K is also heard. Do not generalize it.", "ar": "\u0641\u064a n\u00e4chste \u064a\u0643\u0648\u0646 \u0627\u0644\u0646\u0637\u0642 \u0627\u0644\u0645\u0639\u064a\u0627\u0631\u064a \u0628\u0635\u0648\u062a ch \u0627\u0644\u0646\u0627\u0639\u0645 \u0643\u0645\u0627 \u0641\u064a ich. \u0648\u062a\u0633\u0645\u0639 \u0623\u064a\u0636\u0627\u064b \u0635\u064a\u063a\u0629 \u0628\u0635\u0648\u062a \u0643\u060c \u0644\u0643\u0646\u0647\u0627 \u0644\u064a\u0633\u062a \u0642\u0627\u0639\u062f\u0629 \u0639\u0627\u0645\u0629."}},
      { value: 'ck', sound: 'k', example: 'Jacke', meaning: { fr: 'veste', de: 'Jacke', en: 'jacket', ar: 'سترة' }, description: { fr: 'Se prononce comme un seul K.', de: 'Wird wie ein K ausgesprochen.', en: 'Pronounced like a single K.', ar: 'تنطق مثل ك واحدة.' } },
      { value: 'tz', sound: 'ts', example: 'Katze', meaning: { fr: 'chat', de: 'Katze', en: 'cat', ar: 'قط' }, description: { fr: 'Se prononce « ts ».', de: 'Wird wie „ts“ ausgesprochen.', en: 'Sounds like “ts”.', ar: 'تنطق تس.' } },
      { value: 'pf', sound: 'p + f', example: 'Pferd', meaning: { fr: 'cheval', de: 'Pferd', en: 'horse', ar: 'حصان' }, description: { fr: 'Prononce les deux sons P puis F.', de: 'Beide Laute werden gesprochen: P und F.', en: 'Pronounce both sounds: P followed by F.', ar: 'ننطق الصوتين معاً: پ ثم ف.' } },
      { value: 'qu', sound: 'kv', example: 'Quelle', meaning: { fr: 'source', de: 'Quelle', en: 'source', ar: 'مصدر' }, description: { fr: 'Se prononce généralement « kv ».', de: 'Wird normalerweise wie „kv“ ausgesprochen.', en: 'Usually sounds like “kv”.', ar: 'تنطق غالباً كف.' } },
      { value: 'ng', sound: 'ng', example: 'singen', meaning: { fr: 'chanter', de: 'singen', en: 'to sing', ar: 'يغني' }, description: { fr: 'Le son nasal ng : le g final ne se prononce pas séparément.', de: 'Der Laut ng wird zusammen gesprochen.', en: 'The ng is pronounced as one nasal sound.', ar: 'صوت أنفي واحد، ولا ننطق g بشكل منفصل.' } },
      { value: 'nk', sound: 'nk', example: 'danke', meaning: { fr: 'merci', de: 'danke', en: 'thank you', ar: 'شكراً' }, description: { fr: 'Le N est suivi d’un K clairement prononcé.', de: 'Auf n folgt ein deutliches k.', en: 'The N is followed by a clear K sound.', ar: 'حرف N يتبعه صوت K واضح.' } },
    ],
  },
]

const combinationTranslations = {
  fr: {
    title: 'Les combinaisons de lettres',
    intro: 'En allemand, plusieurs lettres peuvent former ensemble un nouveau son. Apprends à les reconnaître et à les prononcer.',
    vowels: 'Combinaisons de voyelles',
    consonants: 'Combinaisons de consonnes',
    listen: 'Écouter',
    example: 'Exemple',
    pronunciation: 'Prononciation approximative',
    explanation: 'Explication',
    tip: 'Conseil : écoute plusieurs fois le mot entier. La prononciation écrite reste une approximation.',
  },
  de: {
    title: 'Buchstabenkombinationen',
    intro: 'Im Deutschen können mehrere Buchstaben zusammen einen neuen Laut bilden. Lerne, sie zu erkennen und auszusprechen.',
    vowels: 'Vokalkombinationen',
    consonants: 'Konsonantenkombinationen',
    listen: 'Anhören',
    example: 'Beispiel',
    pronunciation: 'Ungefähre Aussprache',
    explanation: 'Erklärung',
    tip: 'Tipp: Höre dir das ganze Wort mehrmals an. Die schriftliche Aussprache ist nur eine Annäherung.',
  },
  en: {
    title: 'Letter combinations',
    intro: 'In German, several letters can work together to create a new sound. Learn to recognize and pronounce them.',
    vowels: 'Vowel combinations',
    consonants: 'Consonant combinations',
    listen: 'Listen',
    example: 'Example',
    pronunciation: 'Approximate pronunciation',
    explanation: 'Explanation',
    tip: 'Tip: Listen to the whole word several times. Written pronunciation is only an approximation.',
  },
  ar: {
    title: 'تركيبات الحروف',
    intro: 'في اللغة الألمانية، يمكن لعدة حروف أن تجتمع لتكوين صوت جديد. تعلم التعرف عليها ونطقها.',
    vowels: 'تركيبات حروف العلة',
    consonants: 'تركيبات الحروف الساكنة',
    listen: 'استمع',
    example: 'مثال',
    pronunciation: 'النطق التقريبي',
    explanation: 'الشرح',
    tip: 'نصيحة: استمع إلى الكلمة كاملة عدة مرات. النطق المكتوب تقريبي فقط.',
  },
}

const firstWords = [
  { de: 'Hallo', sound: 'ha-lo', fr: 'Bonjour / Salut', deMeaning: 'Hallo', en: 'Hello', ar: 'مرحباً' },
  { de: 'Danke', sound: 'dan-keu', fr: 'Merci', deMeaning: 'Danke', en: 'Thank you', ar: 'شكراً' },
  { de: 'Bitte', sound: 'bi-teu', fr: 'S’il vous plaît / De rien', deMeaning: 'Bitte', en: 'Please / You’re welcome', ar: 'من فضلك / العفو' },
  { de: 'Ja', sound: 'ya', fr: 'Oui', deMeaning: 'Ja', en: 'Yes', ar: 'نعم' },
  { de: 'Nein', sound: 'naïn', fr: 'Non', deMeaning: 'Nein', en: 'No', ar: 'لا' },
  { de: 'Tschüss', sound: 'tchüss', fr: 'Au revoir', deMeaning: 'Tschüss', en: 'Bye', ar: 'إلى اللقاء' },
  { de: 'Guten Morgen', sound: 'gou-ten mor-guen', fr: 'Bonjour (le matin)', deMeaning: 'Guten Morgen', en: 'Good morning', ar: 'صباح الخير' },
  { de: 'Guten Abend', sound: 'gou-ten a-bent', fr: 'Bonsoir', deMeaning: 'Guten Abend', en: 'Good evening', ar: 'مساء الخير' },
  { de: 'Ich', sound: 'ikh', fr: 'Je', deMeaning: 'Ich', en: 'I', ar: 'أنا' },
  { de: 'Du', sound: 'dou', fr: 'Tu', deMeaning: 'Du', en: 'You', ar: 'أنت' },
]

const quizQuestions = [
  {
    q: { fr: 'Comment prononce-t-on la lettre W en allemand ?', de: 'Wie spricht man den Buchstaben W auf Deutsch aus?', en: 'How is the letter W pronounced in German?', ar: 'كيف ننطق الحرف W باللغة الألمانية؟' },
    choices: [
      { fr: 'Comme W anglais', de: 'Wie englisches W', en: 'Like English W', ar: 'مثل W الإنجليزية' },
      { fr: 'Comme V français', de: 'Wie deutsches W', en: 'Like English V', ar: 'مثل ڤ' },
      { fr: 'Comme F français', de: 'Wie deutsches F', en: 'Like English F', ar: 'مثل ف' },
    ],
    answer: 1,
    explanation: { fr: 'Le W allemand se prononce comme le V français.', de: 'Das deutsche W wird wie das englische V ausgesprochen.', en: 'German W sounds like English V.', ar: 'الحرف W الألماني ينطق مثل ڤ.' },
  },
  {
    q: { fr: 'Comment prononce-t-on la lettre J ?', de: 'Wie spricht man den Buchstaben J aus?', en: 'How is the letter J pronounced in German?', ar: 'كيف ننطق الحرف J؟' },
    choices: [
      { fr: 'Comme J français', de: 'Wie französisches J', en: 'Like English J', ar: 'مثل ج الفرنسية' },
      { fr: 'Comme Y dans yaourt', de: 'Wie deutsches J', en: 'Like Y in yes', ar: 'مثل ي' },
      { fr: 'Comme G dans gare', de: 'Wie deutsches G', en: 'Like G in go', ar: 'مثل گ' },
    ],
    answer: 1,
    explanation: { fr: 'J allemand se prononce comme le Y de yaourt.', de: 'Das deutsche J wird wie Y ausgesprochen.', en: 'German J sounds like Y in yes.', ar: 'الحرف J الألماني ينطق مثل ي.' },
  },
  {
    q: { fr: 'Quelle lettre se prononce généralement TS ?', de: 'Welcher Buchstabe wird normalerweise wie TS ausgesprochen?', en: 'Which letter is generally pronounced like TS?', ar: 'أي حرف ينطق عادة مثل تس؟' },
    choices: [
      { fr: 'Z', de: 'Z', en: 'Z', ar: 'Z' },
      { fr: 'S', de: 'S', en: 'S', ar: 'S' },
      { fr: 'X', de: 'X', en: 'X', ar: 'X' },
    ],
    answer: 0,
    explanation: { fr: 'La lettre Z allemande se prononce TS.', de: 'Der deutsche Buchstabe Z wird wie TS ausgesprochen.', en: 'The German letter Z is pronounced TS.', ar: 'الحرف Z الألماني ينطق تس.' },
  },
  {
    q: { fr: 'Comment prononce-t-on Ü ?', de: 'Wie spricht man Ü aus?', en: 'How is Ü pronounced?', ar: 'كيف ننطق Ü؟' },
    choices: [
      { fr: 'Comme OU', de: 'Wie U in Mutter', en: 'Like OO', ar: 'مثل أو' },
      { fr: 'Comme U français', de: 'Wie französisches U', en: 'Like French U', ar: 'مثل U الفرنسية' },
      { fr: 'Comme A', de: 'Wie A', en: 'Like A', ar: 'مثل أ' },
    ],
    answer: 1,
    explanation: { fr: 'Ü est proche du U français de lune.', de: 'Ü klingt ähnlich wie das französische U.', en: 'Ü is similar to the French U sound.', ar: 'Ü قريب من صوت U الفرنسي.' },
  },
  {
    q: { fr: 'Comment prononce-t-on ß ?', de: 'Wie spricht man ß aus?', en: 'How is ß pronounced?', ar: 'كيف ننطق ß؟' },
    choices: [
      { fr: 'Comme B', de: 'Wie B', en: 'Like B', ar: 'مثل ب' },
      { fr: 'Comme Z', de: 'Wie Z', en: 'Like Z', ar: 'مثل ز' },
      { fr: 'Comme SS', de: 'Wie SS', en: 'Like SS', ar: 'مثل س' },
    ],
    answer: 2,
    explanation: { fr: 'ß se prononce comme un double S.', de: 'ß wird wie ein scharfes S ausgesprochen.', en: 'ß is pronounced like SS.', ar: 'الحرف ß ينطق مثل س.' },
  },
]

const translations = {
  fr: {
    language: 'Français', beginner: 'Niveau débutant absolu', welcome: 'Bienvenue en allemand !', intro: 'Apprends à lire et prononcer l’allemand, pas à pas.',
    start: 'Commencer à apprendre', audio: 'Audio allemand', progress: 'Ta progression', progressHint: 'Écoute et découvre les lettres pour progresser.',
    letters: 'lettres découvertes', alphabet: 'Alphabet', syllables: 'Les syllabes', words: 'Mes premiers mots', quiz: 'Je m’entraîne',
    alphabetTitle: 'Alphabet allemand', alphabetIntro: '26 lettres comme en français, avec quelques différences de prononciation.',
    selected: 'Lettre sélectionnée', listen: 'Écouter', pronunciation: 'Comment prononcer cette lettre ?', example: 'Exemple de mot',
    previous: 'Précédent', next: 'Suivant', special: 'Les lettres particulières', tip: 'Petit conseil',
    tipText: 'En allemand, la prononciation est généralement régulière. Certaines lettres changent toutefois de son selon leur position dans le mot. Les approximations écrites sont une première aide, mais elles ne remplacent pas l’écoute.',
    syllableTitle: 'Apprendre à lire les syllabes', syllableIntro: 'Une syllabe est un petit groupe de sons. Écoute chaque combinaison, puis essaie de la prononcer seul.',
    rule: 'La règle de départ', formula: 'Consonne + voyelle = syllabe', formulaExample: 'Exemple : B + A = BA · M + A = MA',
    letter: 'Lettre', remember: 'À retenir', tryRead: 'Essaie de lire ces combinaisons', firstWordsTitle: 'Mes premiers mots allemands',
    firstWordsIntro: 'Découvre quelques mots très utiles dans la vie quotidienne.', word: 'MOT', approximate: 'Prononciation approximative',
    conversation: 'Première petite conversation', listenWord: 'Écouter le mot', knowledge: 'Je vérifie mes connaissances',
    quizIntro: 'Un petit exercice pour commencer à reconnaître les sons allemands.', question: 'QUESTION', score: 'Score',
    choose: 'Choisis la bonne réponse', validate: 'Vérifier', correct: 'Bravo ! Bonne réponse.', wrong: 'Pas tout à fait. Voici la bonne réponse :',
    nextQuestion: 'Question suivante', restart: 'Recommencer le quiz', footer: 'Chaque expert a commencé par apprendre l’alphabet. Viel Erfolg !',
    noAudio: 'La lecture audio n’est pas disponible sur ce navigateur.',
  },
  de: {
    language: 'Deutsch', beginner: 'Für absolute Anfänger', welcome: 'Willkommen beim Deutschlernen!', intro: 'Lerne Schritt für Schritt, Deutsch zu lesen und auszusprechen.',
    start: 'Mit dem Lernen beginnen', audio: 'Deutsche Audio-Ausgabe', progress: 'Dein Lernfortschritt', progressHint: 'Höre dir die Buchstaben an und entdecke ihre Aussprache.',
    letters: 'entdeckte Buchstaben', alphabet: 'Alphabet', syllables: 'Silben', words: 'Meine ersten Wörter', quiz: 'Üben',
    alphabetTitle: 'Das deutsche Alphabet', alphabetIntro: '26 Grundbuchstaben wie im Englischen, mit einigen Besonderheiten in der Aussprache.',
    selected: 'Ausgewählter Buchstabe', listen: 'Anhören', pronunciation: 'Wie spricht man diesen Buchstaben aus?', example: 'Wortbeispiel',
    previous: 'Zurück', next: 'Weiter', special: 'Besondere Buchstaben', tip: 'Ein kleiner Tipp',
    tipText: 'Die deutsche Aussprache ist meistens regelmäßig. Einige Buchstaben verändern jedoch ihren Klang je nach Position im Wort. Die schriftlichen Beispiele sind eine erste Hilfe, ersetzen aber nicht das Zuhören.',
    syllableTitle: 'Silben lesen lernen', syllableIntro: 'Eine Silbe ist eine kleine Gruppe von Lauten. Höre dir jede Kombination an und versuche dann, sie selbst auszusprechen.',
    rule: 'Die Grundregel', formula: 'Konsonant + Vokal = Silbe', formulaExample: 'Beispiel: B + A = BA · M + A = MA',
    letter: 'Buchstabe', remember: 'Das solltest du wissen', tryRead: 'Lies diese Kombinationen', firstWordsTitle: 'Meine ersten deutschen Wörter',
    firstWordsIntro: 'Entdecke einige nützliche Wörter für den Alltag.', word: 'WORT', approximate: 'Ungefähre Aussprache',
    conversation: 'Ein erstes kleines Gespräch', listenWord: 'Wort anhören', knowledge: 'Ich überprüfe mein Wissen',
    quizIntro: 'Eine kleine Übung, um deutsche Laute zu erkennen.', question: 'FRAGE', score: 'Punktzahl',
    choose: 'Wähle die richtige Antwort', validate: 'Überprüfen', correct: 'Sehr gut! Die Antwort ist richtig.', wrong: 'Nicht ganz. Die richtige Antwort ist:',
    nextQuestion: 'Nächste Frage', restart: 'Quiz wiederholen', footer: 'Jeder Experte hat einmal mit dem Alphabet angefangen. Viel Erfolg!',
    noAudio: 'Die Audioausgabe ist in diesem Browser nicht verfügbar.',
  },
  en: {
    language: 'English', beginner: 'Absolute beginner level', welcome: 'Welcome to German!', intro: 'Learn to read and pronounce German, step by step.',
    start: 'Start learning', audio: 'German audio', progress: 'Your progress', progressHint: 'Listen to and discover the letters to make progress.',
    letters: 'letters discovered', alphabet: 'Alphabet', syllables: 'Syllables', words: 'My first words', quiz: 'Practice',
    alphabetTitle: 'The German alphabet', alphabetIntro: 'The 26 basic letters, with a few differences in pronunciation.',
    selected: 'Selected letter', listen: 'Listen', pronunciation: 'How do you pronounce this letter?', example: 'Example word',
    previous: 'Previous', next: 'Next', special: 'Special letters', tip: 'A little tip',
    tipText: 'German pronunciation is generally regular. However, some letters change their sound depending on their position in a word. Written approximations are a first guide, but they cannot replace listening.',
    syllableTitle: 'Learn to read syllables', syllableIntro: 'A syllable is a small group of sounds. Listen to each combination, then try to pronounce it yourself.',
    rule: 'The basic rule', formula: 'Consonant + vowel = syllable', formulaExample: 'Example: B + A = BA · M + A = MA',
    letter: 'Letter', remember: 'Remember', tryRead: 'Try reading these combinations', firstWordsTitle: 'My first German words',
    firstWordsIntro: 'Discover some useful words for everyday life.', word: 'WORD', approximate: 'Approximate pronunciation',
    conversation: 'Your first little conversation', listenWord: 'Listen to the word', knowledge: 'Check your knowledge',
    quizIntro: 'A short exercise to start recognizing German sounds.', question: 'QUESTION', score: 'Score',
    choose: 'Choose the correct answer', validate: 'Check', correct: 'Well done! Correct answer.', wrong: 'Not quite. The correct answer is:',
    nextQuestion: 'Next question', restart: 'Restart the quiz', footer: 'Every expert started by learning the alphabet. Viel Erfolg!',
    noAudio: 'Audio playback is not available in this browser.',
  },
  ar: {
    language: 'العربية', beginner: 'مستوى المبتدئين تماماً', welcome: 'مرحباً بك في تعلم الألمانية!', intro: 'تعلم قراءة ونطق الألمانية خطوة بخطوة.',
    start: 'ابدأ التعلم', audio: 'الصوت الألماني', progress: 'تقدمك', progressHint: 'استمع إلى الحروف واكتشف طريقة نطقها.',
    letters: 'حرفاً تم اكتشافها', alphabet: 'الأبجدية', syllables: 'المقاطع الصوتية', words: 'كلماتي الأولى', quiz: 'أتدرب',
    alphabetTitle: 'الأبجدية الألمانية', alphabetIntro: 'تتكون من 26 حرفاً أساسياً، مع بعض الاختلافات في النطق.',
    selected: 'الحرف المحدد', listen: 'استمع', pronunciation: 'كيف ننطق هذا الحرف؟', example: 'مثال على كلمة',
    previous: 'السابق', next: 'التالي', special: 'الحروف الخاصة', tip: 'نصيحة صغيرة',
    tipText: 'النطق الألماني منتظم بشكل عام، لكن بعض الحروف يتغير صوتها حسب موقعها في الكلمة. الكتابة الصوتية هنا مجرد مساعدة أولية ولا تعوض الاستماع.',
    syllableTitle: 'تعلم قراءة المقاطع الصوتية', syllableIntro: 'المقطع الصوتي هو مجموعة صغيرة من الأصوات. استمع إلى كل تركيبة ثم حاول نطقها بنفسك.',
    rule: 'القاعدة الأساسية', formula: 'حرف ساكن + حرف متحرك = مقطع صوتي', formulaExample: 'مثال: B + A = BA · M + A = MA',
    letter: 'الحرف', remember: 'تذكر', tryRead: 'حاول قراءة هذه التركيبات', firstWordsTitle: 'كلماتي الألمانية الأولى',
    firstWordsIntro: 'اكتشف بعض الكلمات المفيدة في الحياة اليومية.', word: 'كلمة', approximate: 'النطق التقريبي',
    conversation: 'محادثة صغيرة أولى', listenWord: 'استمع إلى الكلمة', knowledge: 'اختبر معلوماتك',
    quizIntro: 'تمرين صغير للتعرف على الأصوات الألمانية.', question: 'السؤال', score: 'النتيجة',
    choose: 'اختر الإجابة الصحيحة', validate: 'تحقق', correct: 'أحسنت! إجابة صحيحة.', wrong: 'ليس تماماً. الإجابة الصحيحة هي:',
    nextQuestion: 'السؤال التالي', restart: 'أعد الاختبار', footer: 'كل خبير بدأ بتعلم الأبجدية. Viel Erfolg!',
    noAudio: 'خاصية الصوت غير متاحة في هذا المتصفح.',
  },
}

export default function AllemandDebutantPage() {
  // Utilise la langue globale partagée avec le sélecteur du bas
  const { language } = useLanguage()

  const [tab, setTab] = useState<Tab>('alphabet')
  const [selectedLetter, setSelectedLetter] = useState(0)
  const [selectedQuiz, setSelectedQuiz] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [answered, setAnswered] = useState(false)
  const [completed, setCompleted] = useState<number[]>([])

  const tr = translations[language]
  const current = alphabet[selectedLetter]
  const direction = language === 'ar' ? 'rtl' : 'ltr'

  const speak = (text: string) => {
    if (typeof window === 'undefined') return

    if (!('speechSynthesis' in window)) {
      console.warn(tr.noAudio)
      return
    }

    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'de-DE'
    utterance.rate = 0.78

    window.speechSynthesis.speak(utterance)
  }

  const markCompleted = (index: number) => {
    setCompleted(prev => prev.includes(index) ? prev : [...prev, index])
  }

  const changeLetter = (index: number) => {
    setSelectedLetter(index)
    markCompleted(index)
  }

  const checkAnswer = () => {
    if (answer === null || answered) return
    setAnswered(true)
    // DE_PERFECT_BEGINNER_V1
    if (answer === quizQuestions[selectedQuiz].answer) {
      setScore(prev => prev + 1)
      if (selectedQuiz === quizQuestions.length - 1) {
        celebratePerfectScore(score + 1, quizQuestions.length)
      }
    }
  }

  const nextQuestion = () => {
    if (!answered) return
    if (selectedQuiz === quizQuestions.length - 1) {
      restartQuiz()
      return
    }
    setSelectedQuiz(prev => prev + 1)
    setAnswer(null)
    setAnswered(false)
  }

  const restartQuiz = () => {
    setScore(0)
    setSelectedQuiz(0)
    setAnswer(null)
    setAnswered(false)
  }

  return (
    <main className="de-beginner-v3 de-beginner-v4 de-beginner-premium" dir={direction}>
      <div className="de-beginner-inner">

        {/* DE_BEGINNER_V4 — En-tête compact et progression intégrée */}
        <header className="da-v4-header">
          <div className="da-v4-intro">
            <span className="da-v4-eyebrow"><GraduationCap size={16} /> A1 · {tr.beginner}</span>
            <h1>{tr.welcome}</h1>
            <p>{tr.intro}</p>
            <span className="da-v4-audio"><Headphones size={15} /> {tr.audio}</span>
          </div>
          <div className="da-v4-progress">
            <div className="da-v4-progress-label"><Star size={18} /> {tr.progress}</div>
            <div className="da-v4-progress-number" dir="ltr">{completed.length}<small> / {alphabet.length}</small></div>
            <div className="da-progress-track" role="progressbar" aria-label={tr.progress} aria-valuemin={0} aria-valuemax={alphabet.length} aria-valuenow={completed.length}>
              <div style={{ width: `${completed.length / alphabet.length * 100}%` }} />
            </div>
            <p>{tr.progressHint}</p>
          </div>
        </header>
        <nav className="da-v4-tabs" aria-label={tr.beginner}>
          {([
            ['alphabet', BookOpen, tr.alphabet],
            ['syllables', Languages, tr.syllables],
            ['combinations', Volume2, {fr: 'Combinaisons', de: 'Kombinationen', en: 'Combinations', ar: 'التركيبات'}[language]],
            ['words', GraduationCap, tr.words],
            ['quiz', CheckCircle2, tr.quiz],
          ] as const).map(([id, Icon, label]) => (
            <button type="button" key={id} onClick={() => setTab(id)} aria-pressed={tab === id}>
              <Icon size={18} /> <span>{label}</span>
            </button>
          ))}
        </nav>

        {/* ALPHABET */}
        {tab === 'alphabet' && (
          <section className="de-alpha-v3">
            <header className="da-heading">
              <h2>{tr.alphabetTitle}</h2>
              <p>{tr.alphabetIntro}</p>
            </header>
            <div className="da-lesson">
              <div className="da-letter-panel">
                <div className="da-letter-content">
                  <span className="da-label">{tr.selected}</span>
                  <div className="da-letter" dir="ltr">{current.letter}</div>
                  <div className="da-name">{current.name}</div>
                  <button type="button" className="da-listen" onClick={() => speak(current.letter)}>
                    <Volume2 size={19} /> {tr.listen}
                  </button>
                </div>
                <div className="da-navigation">
                  <div className="da-count" dir="ltr">{selectedLetter + 1} / {alphabet.length}</div>
                  <div className="da-nav-buttons">
                    <button type="button" onClick={() => changeLetter(Math.max(0, selectedLetter - 1))} disabled={selectedLetter === 0}>
                      <ChevronLeft size={17} style={{ transform: direction === 'rtl' ? 'rotate(180deg)' : undefined }} /> {tr.previous}
                    </button>
                    <button type="button" onClick={() => changeLetter(Math.min(alphabet.length - 1, selectedLetter + 1))} disabled={selectedLetter === alphabet.length - 1}>
                      {tr.next} <ChevronRight size={17} style={{ transform: direction === 'rtl' ? 'rotate(180deg)' : undefined }} />
                    </button>
                  </div>
                </div>
              </div>
              <div className="da-details">
                <h3>{tr.pronunciation}</h3>
                <div className="da-note">
                  <span>🇩🇪 Deutsch</span>
                  <p>{current.pronunciation.de}</p>
                </div>
                {language !== 'de' && (
                  <div className="da-note">
                    <span>{language === 'fr' ? '🇫🇷 Français' : language === 'en' ? '🇬🇧 English' : '🇲🇦 العربية'}</span>
                    <p>{current.pronunciation[language]}</p>
                  </div>
                )}
                <div className="da-example">
                  <span>{tr.example}</span>
                  <div className="da-word-row">
                    <div><strong dir="ltr">{current.example}</strong><p>{current[language]}</p></div>
                    <button type="button" onClick={() => speak(current.example)} aria-label={tr.listen}><Volume2 size={21} /></button>
                  </div>
                </div>
              </div>
            </div>
            <div className="da-card">
              <h3>{tr.alphabet} · A–Z</h3>
              <div className="da-alphabet-grid" dir="ltr">
                {alphabet.map((item, index) => (
                  <button type="button" key={item.letter} onClick={() => changeLetter(index)} aria-pressed={selectedLetter === index} className={completed.includes(index) ? 'da-done' : ''}>
                    {item.letter}
                    {completed.includes(index) && <CheckCircle2 size={12} className="da-check" />}
                  </button>
                ))}
              </div>
            </div>
            <div className="da-card">
              <h3>{tr.special}</h3>
              <div className="da-special-grid">
                {specialLetters.map(item => (
                  <div key={item.letter} className="da-special">
                    <strong className="da-special-letter" dir="ltr">{item.letter}</strong>
                    <p className="da-sound">{item.sound}</p>
                    <p>{item.description[language]}</p>
                    <div className="da-word-row da-special-word">
                      <div><strong dir="ltr">{item.word}</strong><p>{item.meaning[language]}</p></div>
                      <button type="button" onClick={() => speak(item.word)} aria-label={tr.listen}><Volume2 size={17} /></button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="da-tip"><Lightbulb size={22} /><div><strong>{tr.tip}</strong><p>{tr.tipText}</p></div></div>
          </section>
        )}

        {/* SYLLABLES */}
        {tab === 'syllables' && (
          <section className="da-module space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.syllableTitle}</h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">{tr.syllableIntro}</p>
            </div>

            <div className="rounded-2xl bg-[#192b43] p-5 text-white">
              <p className="text-sm text-white/70">{tr.rule}</p>
              <p className="mt-2 text-xl font-bold">{tr.formula}</p>
              <p className="mt-2 text-sm text-white/70">{tr.formulaExample}</p>
            </div>

            <div className="overflow-hidden rounded-2xl border border-[#e3ded3] bg-white">
              <div className="grid grid-cols-6 border-b border-[#e3ded3] bg-[#f7f5f0] px-3 py-3 text-center text-xs font-bold text-gray-500 sm:px-5">
                <div>{tr.letter}</div>
                {['A', 'E', 'I', 'O', 'U'].map(vowel => (
                  <div key={vowel}>{vowel}</div>
                ))}
              </div>

              {syllableRows.map(row => (
                <div
                  key={row.consonant}
                  className="grid grid-cols-6 items-center border-b border-[#eeeae2] px-3 py-3 text-center last:border-0 sm:px-5"
                >
                  <div className="font-bold text-[#806337]">{row.consonant}</div>
                  {row.values.map(value => (
                    <button
                      key={value}
                      onClick={() => speak(value)}
                      className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#f7f5f0] text-base font-bold transition hover:bg-[#f3ecdd] sm:h-14 sm:w-14 sm:text-lg"
                      dir="ltr"
                    >
                      {value}
                    </button>
                  ))}
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#e3ded3] bg-white p-5">
              <h3 className="mb-3 font-bold">{tr.remember}</h3>
              {syllableRows.map(row => (
                <p key={row.consonant} className="mb-2 text-sm text-gray-600">
                  <strong className="text-[#192b43]">{row.consonant} :</strong>{' '}
                  {row.note[language]}
                </p>
              ))}
            </div>

            <div className="rounded-2xl border border-[#e6d8b8] bg-[#f4ebd8] p-5">
              <h3 className="mb-3 font-bold">{tr.tryRead}</h3>
              <div className="flex flex-wrap gap-2">
                {['ba-be-bi', 'ma-mi-mo', 'la-le-li', 'pa-pe-pi', 'ta-to-tu', 'na-ne-ni'].map(item => (
                  <button
                    key={item}
                    onClick={() => speak(item.replaceAll('-', ' '))}
                    className="rounded-xl border border-[#e6d8b8] bg-white px-4 py-3 font-semibold"
                    dir="ltr"
                  >
                    {item} <Volume2 className="mx-1 inline" size={15} />
                  </button>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* COMBINATIONS */}
        {tab === 'combinations' && (
          <section className="da-module space-y-6">
            <div>
              <h2 className="text-2xl font-bold">
                {combinationTranslations[language].title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-gray-500">
                {combinationTranslations[language].intro}
              </p>
            </div>

            {combinations.map(group => (
              <div key={group.category} className="space-y-4">
                <h3 className="text-xl font-bold">
                  {group.category === 'vowels'
                    ? combinationTranslations[language].vowels
                    : combinationTranslations[language].consonants}
                </h3>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {group.items.map(item => (
                    <article
                      key={item.value}
                      className="rounded-2xl border border-[#e3ded3] bg-white p-5"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="da-german-word text-4xl font-extrabold text-[#192b43]" dir="ltr">
                          {item.value}
                        </span>
                        <button
                          onClick={() => speak(['chs', 'ch (K)', 'chst'].includes(item.value) ? item.example : item.value)}
                          className="rounded-full bg-[#f7f5f0] p-3 hover:bg-[#f3ecdd]"
                          aria-label={combinationTranslations[language].listen}
                        >
                          <Volume2 size={20} />
                        </button>
                      </div>

                      <div className="mt-4 rounded-xl bg-[#f7f5f0] p-3">
                        <p className="text-xs font-bold uppercase text-gray-400">
                          {combinationTranslations[language].pronunciation}
                        </p>
                        <p className="mt-1 font-semibold" dir="ltr">
                          {item.sound}
                        </p>
                      </div>

                      <div className="mt-3">
                        <p className="text-xs font-bold uppercase text-[#806337]">
                          {combinationTranslations[language].explanation}
                        </p>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                          {item.description[language]}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eeeae2] pt-4">
                        <div>
                          <p className="text-xs font-bold text-gray-400">
                            {combinationTranslations[language].example}
                          </p>
                          <p className="da-german-word mt-1 text-xl font-bold" dir="ltr">
                            {item.example}
                          </p>
                          <p className="text-sm text-gray-500">
                            {item.meaning[language]}
                          </p>
                        </div>
                        <button
                          onClick={() => speak(item.example)}
                          className="rounded-full bg-[#f4ebd8] p-3 text-[#192b43] hover:bg-[#f3ecdd]"
                          aria-label={`${combinationTranslations[language].listen}: ${item.example}`}
                        >
                          <Headphones size={20} />
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-[#e6d8b8] bg-[#f4ebd8] p-5">
              <div className="flex gap-3">
                <Lightbulb className="shrink-0 text-[#806337]" />
                <p className="text-sm leading-6 text-gray-700">
                  {combinationTranslations[language].tip}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* FIRST WORDS */}
        {tab === 'words' && (
          <section className="da-module space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.firstWordsTitle}</h2>
              <p className="mt-2 text-sm text-gray-500">{tr.firstWordsIntro}</p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {firstWords.map((word, index) => (
                <div
                  key={word.de}
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#e3ded3] bg-white p-4"
                >
                  <div className="min-w-0">
                    <span className="text-xs font-bold text-[#806337]">
                      {tr.word} {index + 1}
                    </span>
                    <h3 className="da-german-word mt-1 text-xl font-bold" dir="ltr">{word.de}</h3>
                    <p className="text-sm text-gray-600">{word[language === 'de' ? 'deMeaning' : language]}</p>
                    <p className="mt-2 text-xs text-[#806337]">
                      {tr.approximate}: <span dir="ltr">{word.sound}</span>
                    </p>
                  </div>
                  <button
                    onClick={() => speak(word.de)}
                    className="shrink-0 rounded-full bg-[#f7f5f0] p-3 hover:bg-[#f3ecdd]"
                    aria-label={`${tr.listen}: ${word.de}`}
                  >
                    <Volume2 size={21} />
                  </button>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-[#192b43] p-5 text-white">
              <h3 className="text-lg font-bold">{tr.conversation}</h3>
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#b49760]" dir="ltr">A : Hallo!</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Bonjour !' : language === 'de' ? 'Hallo!' : language === 'en' ? 'Hello!' : 'مرحباً!'}
                  </p>
                  <button
                    onClick={() => speak('Hallo!')}
                    className="mt-2 text-sm text-[#b49760]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#b49760]" dir="ltr">B : Hallo! Wie geht es dir?</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Salut ! Comment vas-tu ?' : language === 'de' ? 'Hallo! Wie geht es dir?' : language === 'en' ? 'Hello! How are you?' : 'مرحباً! كيف حالك؟'}
                  </p>
                  <button
                    onClick={() => speak('Hallo! Wie geht es dir?')}
                    className="mt-2 text-sm text-[#b49760]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>

                <div className="rounded-xl bg-white/10 p-3">
                  <p className="font-bold text-[#b49760]" dir="ltr">A : Gut, danke!</p>
                  <p className="text-sm text-white/80">
                    {language === 'fr' ? 'Bien, merci !' : language === 'de' ? 'Gut, danke!' : language === 'en' ? 'Fine, thanks!' : 'بخير، شكراً!'}
                  </p>
                  <button
                    onClick={() => speak('Gut, danke!')}
                    className="mt-2 text-sm text-[#b49760]"
                  >
                    <Volume2 className="mx-1 inline" size={15} /> {tr.listen}
                  </button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* QUIZ */}
        {tab === 'quiz' && (
          <section className="da-module da-quiz mx-auto max-w-2xl space-y-5">
            <div>
              <h2 className="text-2xl font-bold">{tr.knowledge}</h2>
              <p className="mt-2 text-sm text-gray-500">{tr.quizIntro}</p>
            </div>

            <div className="rounded-2xl border border-[#e3ded3] bg-white p-5 md:p-7">
              <div className="mb-5 flex items-center justify-between gap-3">
                <span className="rounded-full bg-[#f4ebd8] px-3 py-2 text-xs font-bold text-[#806337]">
                  {tr.question} {selectedQuiz + 1} / {quizQuestions.length}
                </span>
                <span className="text-sm font-bold">{tr.score} : {score}</span>
              </div>

              <h3 className="mb-6 text-xl font-bold">
                {quizQuestions[selectedQuiz].q[language]}
              </h3>
              <p className="mb-3 text-sm text-gray-500">{tr.choose}</p>

              <div className="space-y-3">
                {quizQuestions[selectedQuiz].choices.map((choice, index) => {
                  const isCorrect = index === quizQuestions[selectedQuiz].answer
                  const isSelected = answer === index

                  let style = 'border-[#e3ded3] bg-white hover:border-[#b49760]'
                  if (answered && isCorrect) style = 'border-green-500 bg-green-50 text-green-800'
                  else if (answered && isSelected && !isCorrect) style = 'border-red-400 bg-red-50 text-red-800'
                  else if (isSelected) style = 'border-[#192b43] bg-[#f1ede4]'

                  return (
                    <button
                      key={`${selectedQuiz}-${index}`}
                      disabled={answered}
                      onClick={() => setAnswer(index)}
                      className={`flex w-full items-center justify-between rounded-xl border p-4 text-start font-medium transition ${style}`}
                    >
                      <span>{String.fromCharCode(65 + index)}. {choice[language]}</span>
                      {answered && isCorrect && <CheckCircle2 size={19} />}
                    </button>
                  )
                })}
              </div>

              {answered && (
                <div className="mt-5 rounded-xl bg-[#f7f5f0] p-4">
                  <p className={`font-bold ${answer === quizQuestions[selectedQuiz].answer ? 'text-green-700' : 'text-red-700'}`}>
                    {answer === quizQuestions[selectedQuiz].answer ? tr.correct : tr.wrong}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    {quizQuestions[selectedQuiz].explanation[language]}
                  </p>
                </div>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                {!answered ? (
                  <button
                    onClick={checkAnswer}
                    disabled={answer === null}
                    className="w-full rounded-xl bg-[#192b43] px-5 py-3 font-bold text-white disabled:opacity-40"
                  >
                    {tr.validate}
                  </button>
                ) : (
                  <button
                    onClick={nextQuestion}
                    className="w-full rounded-xl bg-[#b49760] px-5 py-3 font-bold text-[#192b43]"
                  >
                    {selectedQuiz === quizQuestions.length - 1 ? tr.restart : tr.nextQuestion} <ChevronRight className="mx-1 inline" size={18} />
                  </button>
                )}
              </div>
            </div>

            <button
              onClick={restartQuiz}
              className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#192b43]"
            >
              <RotateCcw size={16} /> {tr.restart}
            </button>
          </section>
        )}

        {/* FOOTER */}
        <footer className="mt-10 border-t border-[#e3ded3] pt-6 text-center">
          <div className="flex items-center justify-center gap-2 text-sm font-bold text-[#192b43]">
            <GraduationCap className="text-[#b49760]" size={20} />
            DEUTSCH ERFOLG
          </div>
          <p className="mt-2 text-xs text-gray-400">{tr.footer}</p>
        </footer>
      </div>

      <style jsx global>{`
        .de-beginner-v3 { background:#f7f5f0; color:#192b43; min-height:100vh; }
        .de-beginner-v3 .de-beginner-inner { max-width:1152px; margin:0 auto; padding:28px 24px; }
        .de-beginner-v3 .de-beginner-hero { position:relative; overflow:hidden; border-radius:24px; background:#192b43; color:white; padding:28px; margin:0 0 20px; }
        .de-beginner-v3 .de-beginner-hero h1 { color:white; font-size:clamp(26px,4vw,42px); line-height:1.15; margin:12px 0; }
        .de-beginner-v3 .de-beginner-hero p { color:inherit; margin:8px 0; }
        .de-beginner-v3 .de-beginner-hero button { background:#b49760; color:#192b43; border:0; border-radius:12px; padding:12px 18px; font-weight:700; display:inline-flex; align-items:center; gap:6px; }
        .de-beginner-v3 .de-beginner-hero select { background:#263b5c; color:white; border:1px solid #ffffff40; padding:8px 12px; border-radius:10px; }
        .de-beginner-v3 .de-beginner-hero .da-hero-top,.de-beginner-v3 .de-beginner-hero .da-hero-actions { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:12px; }
        .de-beginner-v3 .de-beginner-hero .da-hero-actions { justify-content:flex-start; margin-top:18px; }
        .de-beginner-v3 .de-beginner-hero span { display:inline-flex; align-items:center; gap:7px; }
        .de-beginner-v3 .de-beginner-hero .da-brand { color:#b49760; font-weight:700; letter-spacing:.16em; font-size:12px; }
        .de-beginner-v3 .de-beginner-progress { background:white; border:1px solid #e3ded3; border-radius:16px; padding:16px; margin:0 0 20px; }
        .de-beginner-v3 .da-progress-top { display:flex; align-items:center; justify-content:space-between; flex-wrap:wrap; gap:8px; font-weight:600; }
        .de-beginner-v3 .da-progress-top > div { display:flex; align-items:center; gap:8px; }
        .de-beginner-v3 .da-progress-track { height:8px; border-radius:99px; background:#eeeae2; margin:10px 0; overflow:hidden; }
        .de-beginner-v3 .da-progress-track > div { height:100%; background:#b49760; border-radius:99px; }
        .de-beginner-v3 .de-beginner-progress p { font-size:12px; color:#626a75; margin:0; }
        .de-beginner-v3 .de-beginner-tabs { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:8px; margin-bottom:24px; }
        .de-beginner-v3 .de-beginner-tabs button { display:flex; align-items:center; justify-content:center; gap:7px; border:1px solid #e3ded3; border-radius:12px; background:white; color:#626a75; font:inherit; font-size:13px; font-weight:650; min-height:48px; padding:10px; cursor:pointer; }
        .de-beginner-v3 .de-beginner-tabs button[aria-pressed=true] { background:#192b43; color:white; border-color:#192b43; }
        .de-beginner-v3 .de-alpha-v3 { display:grid; gap:20px; }
        .de-beginner-v3 .de-alpha-v3 * { box-sizing:border-box; }
        .de-beginner-v3 .de-alpha-v3 h2,.de-beginner-v3 .de-alpha-v3 h3,.de-beginner-v3 .de-alpha-v3 p { margin:0; }
        .de-beginner-v3 .da-heading h2 { font-size:25px; font-weight:750; color:#192b43; }
        .de-beginner-v3 .da-heading p { margin-top:5px; font-size:14px; color:#626a75; }
        .de-beginner-v3 .da-lesson { display:grid; grid-template-columns:minmax(0,1fr) minmax(0,1.35fr); gap:18px; padding:16px; border:1px solid #e3ded3; border-radius:22px; background:#fff; box-shadow:0 5px 22px #172b4d08; }
        .de-beginner-v3 .da-letter-panel { background:#192b43; color:#fff; border-radius:17px; min-height:300px; padding:24px 18px 18px; display:flex; flex-direction:column; align-items:stretch; justify-content:space-between; gap:20px; min-width:0; }
        .de-beginner-v3 .da-letter-content { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:10px; }
        .de-beginner-v3 .da-label { color:#cbd5e5; font-size:12px; font-weight:600; }
        .de-beginner-v3 .da-letter { font-size:clamp(76px,9vw,112px); line-height:1; font-weight:800; color:#b49760; }
        .de-beginner-v3 .da-name { font-size:21px; font-weight:650; color:#fff; }
        .de-beginner-v3 .de-alpha-v3 button { font:inherit; cursor:pointer; }
        .de-beginner-v3 .da-listen { display:inline-flex; align-items:center; justify-content:center; gap:8px; margin-top:5px; padding:10px 20px; min-height:42px; border:0; border-radius:11px; background:#b49760; color:#192b43; font-weight:750; }
        .de-beginner-v3 .da-navigation { border-top:1px solid #ffffff29; padding-top:12px; }
        .de-beginner-v3 .da-count { text-align:center; color:#b49760; font-size:12px; font-weight:650; margin-bottom:8px; }
        .de-beginner-v3 .da-nav-buttons { display:flex; gap:8px; }
        .de-beginner-v3 .da-nav-buttons button { flex:1; min-width:0; display:flex; align-items:center; justify-content:center; gap:4px; min-height:40px; padding:8px 6px; border:1px solid #ffffff45; border-radius:10px; background:#ffffff0b; color:#fff; font-weight:650; font-size:13px; }
        .de-beginner-v3 .da-nav-buttons button:last-child { border-color:#b49760; background:#b49760; color:#192b43; }
        .de-beginner-v3 .da-nav-buttons button:disabled { opacity:.38; cursor:not-allowed; }
        .de-beginner-v3 .da-details { display:flex; flex-direction:column; justify-content:center; gap:12px; padding:18px; background:#f7f5f0; border-radius:17px; min-width:0; }
        .de-beginner-v3 .da-details h3,.de-beginner-v3 .da-card h3 { color:#192b43; font-size:18px; font-weight:750; }
        .de-beginner-v3 .da-note { border:1px solid #e3ded3; border-radius:12px; background:#fff; padding:13px; }
        .de-beginner-v3 .da-note span,.de-beginner-v3 .da-example > span { display:block; font-size:11px; font-weight:750; color:#69768a; text-transform:uppercase; letter-spacing:.05em; margin-bottom:5px; }
        .de-beginner-v3 .da-note p { color:#192b43; font-size:15px; font-weight:600; }
        .de-beginner-v3 .da-example { border:1px solid #e6d8b8; border-radius:12px; padding:14px; background:#f4ebd8; }
        .de-beginner-v3 .da-example > span { color:#806337; }
        .de-beginner-v3 .da-word-row { display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .de-beginner-v3 .da-word-row strong { font-size:20px; color:#192b43; }
        .de-beginner-v3 .da-word-row p { color:#626a75; font-size:13px; margin-top:3px; }
        .de-beginner-v3 .da-word-row button { flex:none; display:grid; place-items:center; width:40px; height:40px; border:1px solid #e6d8b8; border-radius:50%; background:#fff; color:#192b43; }
        .de-beginner-v3 .da-card { border:1px solid #e3ded3; border-radius:18px; background:#fff; padding:18px; }
        .de-beginner-v3 .da-card h3 { margin-bottom:14px; }
        .de-beginner-v3 .da-alphabet-grid { display:grid; grid-template-columns:repeat(13,minmax(0,1fr)); gap:8px; }
        .de-beginner-v3 .da-alphabet-grid button { position:relative; display:grid; place-items:center; min-height:44px; border:1px solid #e3ded3; border-radius:10px; background:#f7f5f0; color:#192b43; font-size:19px; font-weight:750; }
        .de-beginner-v3 .da-alphabet-grid button.da-done { border-color:#b49760; background:#f4ebd8; }
        .de-beginner-v3 .da-alphabet-grid button[aria-pressed=true] { color:#b49760; background:#192b43; border-color:#192b43; }
        .de-beginner-v3 .da-check { position:absolute; top:3px; right:3px; color:#806337; }
        .de-beginner-v3 .da-special-grid { display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:12px; }
        .de-beginner-v3 .da-special { border-radius:12px; background:#f7f5f0; padding:14px; }
        .de-beginner-v3 .da-special-letter { font-size:26px; color:#192b43; }
        .de-beginner-v3 .da-special p { font-size:13px; color:#626a75; margin-top:6px; }
        .de-beginner-v3 .da-special .da-sound { color:#806337; font-weight:700; }
        .de-beginner-v3 .da-special-word { border-top:1px solid #e3ded3; margin-top:10px; padding-top:10px; }
        .de-beginner-v3 .da-special-word strong { font-size:15px; overflow-wrap:anywhere; }
        .de-beginner-v3 .da-tip { display:flex; gap:12px; padding:16px; border-radius:14px; background:#f4ebd8; border:1px solid #e6d8b8; color:#192b43; }
        .de-beginner-v3 .da-tip > svg { flex:none; color:#806337; }
        .de-beginner-v3 .da-tip p { font-size:13px; line-height:1.6; margin-top:4px; }
        .de-beginner-v3 .de-alpha-v3 button:not(:disabled):hover { filter:brightness(.96); }
        .de-beginner-v3 .de-alpha-v3 button:focus-visible { outline:3px solid #806337; outline-offset:2px; }
        @media(max-width:1100px) { .de-beginner-v3 .da-alphabet-grid { grid-template-columns:repeat(9,minmax(0,1fr)); } .de-beginner-v3 .da-special-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
        @media(max-width:850px) { .de-beginner-v3 .da-lesson { grid-template-columns:1fr; } .de-beginner-v3 .de-beginner-tabs { grid-template-columns:repeat(3,minmax(0,1fr)); } }
        @media(max-width:550px) { .de-beginner-v3 .de-beginner-inner { padding:14px 10px; } .de-beginner-v3 .da-lesson { padding:10px; gap:10px; } .de-beginner-v3 .da-details { padding:12px; } .de-beginner-v3 .da-alphabet-grid { grid-template-columns:repeat(5,minmax(0,1fr)); } .de-beginner-v3 .da-special-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } .de-beginner-v3 .da-card { padding:12px; } .de-beginner-v3 .de-beginner-tabs { grid-template-columns:repeat(2,minmax(0,1fr)); } }

        /* DE_BEGINNER_V4 — compact student workspace */
        .de-beginner-v4 .de-beginner-inner { max-width:1440px; padding:20px 24px 32px; }
        .de-beginner-v4 .da-v4-header { display:grid; grid-template-columns:minmax(0,1fr) minmax(220px,300px); align-items:center; gap:24px; background:#fff; border:1px solid #e3ded3; border-inline-start:4px solid #b49760; border-radius:16px; padding:18px 22px; margin-bottom:16px; }
        .de-beginner-v4 .da-v4-eyebrow { display:inline-flex; align-items:center; gap:7px; color:#806337; font-size:12px; font-weight:700; }
        .de-beginner-v4 .da-v4-intro h1 { color:#192b43; font-size:clamp(22px,2.5vw,30px); line-height:1.18; font-weight:750; margin:8px 0 5px; }
        .de-beginner-v4 .da-v4-intro p { color:#58677c; font-size:14px; margin:0; line-height:1.5; }
        .de-beginner-v4 .da-v4-audio { display:inline-flex; align-items:center; gap:6px; color:#65748a; font-size:12px; margin-top:9px; }
        .de-beginner-v4 .da-v4-progress { background:#f7f5f0; border:1px solid #e7eaf0; border-radius:12px; padding:12px 15px; min-width:0; }
        .de-beginner-v4 .da-v4-progress-label { display:flex; gap:6px; align-items:center; color:#192b43; font-size:13px; font-weight:650; }
        .de-beginner-v4 .da-v4-progress-label svg { color:#806337; flex-shrink:0; }
        .de-beginner-v4 .da-v4-progress-number { color:#192b43; font-size:24px; font-weight:750; line-height:1.2; margin-top:6px; text-align:start; }
        .de-beginner-v4 .da-v4-progress-number small { color:#748195; font-size:14px; font-weight:500; }
        .de-beginner-v4 .da-v4-progress p { color:#65748a; margin:0; font-size:11px; line-height:1.4; }
        .de-beginner-v4 .da-v4-tabs { display:grid; grid-template-columns:repeat(5,minmax(0,1fr)); gap:5px; padding:5px; margin-bottom:18px; border:1px solid #e3ded3; background:#fff; border-radius:13px; }
        .de-beginner-v4 .da-v4-tabs button { display:flex; justify-content:center; align-items:center; gap:7px; min-height:42px; padding:8px 7px; border:1px solid transparent; border-radius:9px; background:transparent; color:#626a75; font:inherit; font-size:13px; font-weight:650; cursor:pointer; }
        .de-beginner-v4 .da-v4-tabs button svg { flex:none; }
        .de-beginner-v4 .da-v4-tabs button[aria-pressed=true] { background:#192b43; color:#fff; }
        .de-beginner-v4 .da-v4-tabs button[aria-pressed=true] svg { color:#b49760; }
        .de-beginner-v4 .da-v4-tabs button:not([aria-pressed=true]):hover { background:#f7f5f0; }
        .de-beginner-v4 .da-v4-tabs button:focus-visible { outline:2px solid #806337; outline-offset:1px; }
        .de-beginner-v4 .de-alpha-v3 { gap:14px; }
        .de-beginner-v4 .da-heading h2 { font-size:23px; }
        .de-beginner-v4 .da-lesson { padding:12px; gap:12px; border-radius:18px; grid-template-columns:minmax(0,0.88fr) minmax(0,1.4fr); }
        .de-beginner-v4 .da-letter-panel { min-height:285px; padding:16px; gap:12px; border-radius:13px; }
        .de-beginner-v4 .da-letter-content { gap:6px; }
        .de-beginner-v4 .da-letter { font-size:clamp(68px,7vw,96px); }
        .de-beginner-v4 .da-navigation { padding-top:9px; }
        .de-beginner-v4 .da-details { padding:14px; gap:9px; border-radius:13px; }
        .de-beginner-v4 .da-note,.de-beginner-v4 .da-example { padding:11px 13px; }
        .de-beginner-v4 .da-card { padding:14px; border-radius:15px; }
        @media(max-width:1000px) { .de-beginner-v4 .da-v4-tabs { grid-template-columns:repeat(3,minmax(0,1fr)); } }
        @media(max-width:850px) { .de-beginner-v4 .da-v4-header,.de-beginner-v4 .da-lesson { grid-template-columns:1fr; } .de-beginner-v4 .da-letter-panel { min-height:270px; } }
        @media(max-width:550px) { .de-beginner-v4 .de-beginner-inner { padding:12px 10px 24px; } .de-beginner-v4 .da-v4-header { padding:14px; gap:12px; } .de-beginner-v4 .da-v4-tabs { grid-template-columns:repeat(2,minmax(0,1fr)); } .de-beginner-v4 .da-lesson { padding:9px; gap:9px; } }

        /* DE-BEGINNER-PREMIUM-V5 — same design tokens as Wörterbuch */
        .de-beginner-premium {
          --da-navy:#192b43; --da-gold:#b49760; --da-light-gold:#e3cb96;
          --da-ink-gold:#806337; --da-paper:#f7f5f0; --da-line:#e3ded3; --da-muted:#626a75;
          background:var(--da-paper); color:var(--da-navy); font-family:'Plus Jakarta Sans',Arial,sans-serif;
          font-size:14px; line-height:1.6; min-height:100vh;
        }
        .de-beginner-premium[dir="rtl"] {font-family:'Tajawal',Arial,sans-serif;}
        .de-beginner-premium *, .de-beginner-premium *::before,.de-beginner-premium *::after {box-sizing:border-box;}
        .de-beginner-premium button,.de-beginner-premium select,.de-beginner-premium input {font-family:inherit;}
        .de-beginner-premium h1,.de-beginner-premium h2,.de-beginner-premium h3,
        .de-beginner-premium .da-letter,.de-beginner-premium .da-word-row strong,
        .de-beginner-premium .da-special-letter,.de-beginner-premium .da-german-word,
        .de-beginner-premium .da-v4-progress-number {
          font-family:Georgia,'Times New Roman',serif; font-weight:400; letter-spacing:-.025em;
        }
        .de-beginner-premium[dir="rtl"] h1,.de-beginner-premium[dir="rtl"] h2,.de-beginner-premium[dir="rtl"] h3 {font-family:'Tajawal',Arial,sans-serif; font-weight:500; letter-spacing:0;}
        .de-beginner-premium .de-beginner-inner {max-width:1280px; padding:28px 24px 48px;}
        .de-beginner-premium .da-v4-header {background:var(--da-navy);border:1px solid #34455b;border-radius:12px;box-shadow:none;padding:24px 30px;gap:24px;margin-bottom:20px;}
        .de-beginner-premium .da-v4-intro h1 {font-size:clamp(25px,3vw,36px);font-weight:400;line-height:1.2;margin:10px 0 6px;color:white;}
        .de-beginner-premium .da-v4-intro p {font-size:14px;color:#ffffffb3;}
        .de-beginner-premium .da-v4-eyebrow {color:var(--da-light-gold);font-size:12px;letter-spacing:.02em;border-radius:6px;}
        .de-beginner-premium .da-v4-audio {color:#ffffffb3;font-size:12px;}
        .de-beginner-premium .da-v4-progress {background:transparent;border:0;border-inline-start:1px solid #506074;border-radius:0;padding:0 0 0 0;padding-inline-start:24px;box-shadow:none;}
        .de-beginner-premium .da-v4-progress-number {font-weight:400;color:white;font-size:30px;}
        .de-beginner-premium .da-v4-progress-label svg {color:var(--da-light-gold);}
        .de-beginner-premium .da-v4-tabs {border:1px solid var(--da-line);border-radius:9px;background:white;box-shadow:none;gap:4px;}
        .de-beginner-premium .da-v4-tabs button {border-radius:7px;font-weight:600;font-size:13px;}
        .de-beginner-premium .da-v4-tabs button[aria-pressed=true] {background:var(--da-navy);}
        .de-beginner-premium .da-heading h2,.de-beginner-premium .da-module h2 {font-size:26px;font-weight:400;color:var(--da-navy);line-height:1.3;}
        .de-beginner-premium .da-heading p,.de-beginner-premium .da-module > div:first-child p {color:var(--da-muted);font-size:14px;}
        .de-beginner-premium .da-lesson {border:1px solid var(--da-line);border-radius:12px;box-shadow:none;background:white;padding:12px;gap:14px;}
        .de-beginner-premium .da-letter-panel {background:var(--da-navy);border:1px solid #34455b;border-radius:9px;min-height:285px;}
        .de-beginner-premium .da-letter {font-size:clamp(74px,8vw,104px);font-weight:400;color:var(--da-light-gold);}
        .de-beginner-premium .da-name {font-weight:500;color:white;}
        .de-beginner-premium .da-listen {border-radius:7px;background:var(--da-light-gold);color:var(--da-navy);font-weight:600;}
        .de-beginner-premium .da-nav-buttons button {border-radius:7px;font-size:12px;font-weight:600;}
        .de-beginner-premium .da-nav-buttons button:last-child {background:var(--da-light-gold);border-color:var(--da-light-gold);color:var(--da-navy);}
        .de-beginner-premium .da-count {color:var(--da-light-gold);font-weight:500;}
        .de-beginner-premium .da-details {background:var(--da-paper);border-radius:9px;}
        .de-beginner-premium .da-details h3,.de-beginner-premium .da-card h3 {font-size:21px;font-weight:400;color:var(--da-navy);}
        .de-beginner-premium .da-note,.de-beginner-premium .da-example {border-radius:8px;}
        .de-beginner-premium .da-note p {font-weight:500;font-size:14px;}
        .de-beginner-premium .da-note span,.de-beginner-premium .da-example > span {font-weight:600;}
        .de-beginner-premium .da-word-row strong {font-size:23px;font-weight:400;}
        .de-beginner-premium .da-word-row button {border-radius:7px;color:var(--da-ink-gold);}
        .de-beginner-premium .da-card {border-radius:9px;box-shadow:none;border-color:var(--da-line);}
        .de-beginner-premium .da-alphabet-grid button {border-radius:6px;min-height:37px;font-size:15px;font-weight:600;background:white;border-color:var(--da-line);}
        .de-beginner-premium .da-alphabet-grid button.da-done {background:#f3ecdd;border-color:var(--da-gold);}
        .de-beginner-premium .da-alphabet-grid button[aria-pressed=true] {background:var(--da-navy);color:white;border-color:var(--da-navy);}
        .de-beginner-premium .da-special,.de-beginner-premium .da-tip {border-radius:8px;}
        .de-beginner-premium .da-special-letter {font-weight:400;}
        .de-beginner-premium .da-special-word strong {font-size:18px;}
        /* Syllables, combinations, first words and quiz retain their functionality. */
        .de-beginner-premium .da-module {font-size:14px;}
        .de-beginner-premium .da-module h3 {font-size:21px;font-weight:400;line-height:1.35;}
        .de-beginner-premium .da-module .rounded-2xl,.de-beginner-premium .da-module .rounded-3xl {border-radius:9px;box-shadow:none;}
        .de-beginner-premium .da-module .rounded-xl {border-radius:8px;}
        .de-beginner-premium .da-module button.rounded-full {border-radius:7px;}
        .de-beginner-premium .da-module .font-bold {font-weight:600;}
        .de-beginner-premium .da-module h2.font-bold,.de-beginner-premium .da-module h3.font-bold,.de-beginner-premium .da-module .da-german-word {font-weight:400;}
        .de-beginner-premium .da-module .text-gray-400,.de-beginner-premium .da-module .text-gray-500,.de-beginner-premium .da-module .text-gray-600 {color:var(--da-muted);}
        .de-beginner-premium .da-module [class~="bg-[#192b43]"] [class~="text-[#b49760]"] {color:var(--da-light-gold);}
        .de-beginner-premium button:focus-visible,.de-beginner-premium select:focus-visible {outline:2px solid var(--da-gold);outline-offset:3px;}
        @media(max-width:850px) {
          .de-beginner-premium .da-v4-header {padding:20px;gap:18px;}
          .de-beginner-premium .da-v4-progress {border-inline-start:0;border-top:1px solid #506074;padding:14px 0 0;}
        }
        @media(max-width:550px) {
          .de-beginner-premium .de-beginner-inner {padding:14px 12px 32px;}
          .de-beginner-premium .da-v4-header {padding:18px;}
          .de-beginner-premium .da-lesson {padding:9px;gap:9px;}
          .de-beginner-premium .da-alphabet-grid {gap:5px;}
        }
      `}</style>
    </main>
  )
}

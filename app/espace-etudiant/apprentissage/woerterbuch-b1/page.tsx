
'use client'

import { useMemo, useState, useEffect } from 'react'
import {
  Search, BookOpen, Star, Volume2, X, ChevronRight,
  ChevronLeft, Heart, GraduationCap, Languages,
  Filter, RotateCcw, CheckCircle2, ArrowRight,
  Bookmark, BookMarked, Brain, Sparkles
} from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

type Word = {
  id: number
  de: string
  article?: string
  plural?: string
  fr: string
  en: string
  category: string
  example: string
  exampleFr: string
  grammar?: string
  forms?: string
}

const vocabulary: Word[] = [
  {id:1,de:'ab',fr:'à partir de',en:'from, starting from',category:'Préposition',example:'Ab heute lerne ich jeden Tag Deutsch.',exampleFr:"À partir d'aujourd'hui, j'apprends l'allemand chaque jour.",grammar:'+ Dat.'},
  {id:2,de:'ab und zu',fr:'de temps en temps',en:'from time to time',category:'Expression',example:'Ich gehe ab und zu ins Kino.',exampleFr:'Je vais de temps en temps au cinéma.'},
  {id:3,de:'das Abendessen',article:'das',plural:'die Abendessen',fr:'le repas du soir',en:'dinner',category:'Nom',example:'Das Abendessen ist um acht Uhr.',exampleFr:'Le dîner est à huit heures.'},
  {id:4,de:'das Abenteuer',article:'das',plural:'die Abenteuer',fr:"l'aventure",en:'adventure',category:'Nom',example:'Die Reise war ein großes Abenteuer.',exampleFr:'Le voyage était une grande aventure.'},
  {id:5,de:'abfahren',fr:'partir (en véhicule)',en:'to depart',category:'Verbe',example:'Der Zug fährt um neun Uhr ab.',exampleFr:'Le train part à neuf heures.',forms:'fährt ab – fuhr ab – ist abgefahren',grammar:'Verbe séparable'},
  {id:6,de:'die Abfahrt',article:'die',plural:'die Abfahrten',fr:'le départ',en:'departure',category:'Nom',example:'Die Abfahrt ist um zehn Uhr.',exampleFr:'Le départ est à dix heures.'},
  {id:7,de:'der Abflug',article:'der',plural:'die Abflüge',fr:"le décollage, le départ d'avion",en:'departure, takeoff',category:'Nom',example:'Der Abflug ist um 14 Uhr.',exampleFr:'Le départ de l’avion est à 14 heures.'},
  {id:8,de:'abhängig sein von',fr:'être dépendant de',en:'to depend on',category:'Expression',example:'Das hängt vom Wetter ab.',exampleFr:'Cela dépend de la météo.',grammar:'+ Dat.'},
  {id:9,de:'abholen',fr:'aller chercher',en:'to pick up',category:'Verbe',example:'Ich hole dich um sechs Uhr ab.',exampleFr:'Je viens te chercher à six heures.',grammar:'Verbe séparable'},
  {id:10,de:'ablehnen',fr:'refuser',en:'to refuse',category:'Verbe',example:'Er hat das Angebot abgelehnt.',exampleFr:"Il a refusé l'offre.",grammar:'Verbe séparable'},
  {id:11,de:'abnehmen',fr:'maigrir, décrocher',en:'to lose weight, take off',category:'Verbe',example:'Sie möchte fünf Kilo abnehmen.',exampleFr:'Elle veut perdre cinq kilos.',forms:'nimmt ab – nahm ab – hat abgenommen',grammar:'Verbe séparable'},
  {id:12,de:'der Absatz',article:'der',plural:'die Absätze',fr:'le paragraphe, le talon',en:'paragraph, heel',category:'Nom',example:'Lies bitte den ersten Absatz.',exampleFr:'Lis le premier paragraphe, s’il te plaît.'},
  {id:13,de:'der Abschied',article:'der',plural:'die Abschiede',fr:'les adieux',en:'farewell',category:'Nom',example:'Der Abschied war sehr traurig.',exampleFr:'Les adieux étaient très tristes.'},
  {id:14,de:'abschreiben',fr:'copier',en:'to copy',category:'Verbe',example:'Du darfst nicht vom Nachbarn abschreiben.',exampleFr:'Tu ne dois pas copier sur ton voisin.',forms:'schreibt ab – schrieb ab – hat abgeschrieben',grammar:'Verbe séparable'},
  {id:15,de:'die Absicht',article:'die',plural:'die Absichten',fr:"l'intention",en:'intention',category:'Nom',example:'Das war nicht meine Absicht.',exampleFr:"Ce n'était pas mon intention."},
  {id:16,de:'die Abstimmung',article:'die',plural:'die Abstimmungen',fr:'le vote',en:'vote',category:'Nom',example:'Die Abstimmung findet morgen statt.',exampleFr:'Le vote aura lieu demain.'},
  {id:17,de:'abwesend',fr:'absent',en:'absent',category:'Adjectif',example:'Heute ist der Lehrer abwesend.',exampleFr:"Aujourd'hui, le professeur est absent."},
  {id:18,de:'achten auf',fr:'faire attention à',en:'to pay attention to',category:'Expression',example:'Achte auf die Grammatik!',exampleFr:'Fais attention à la grammaire !',grammar:'+ Akk.'},
  {id:19,de:'ähneln',fr:'ressembler à',en:'to resemble',category:'Verbe',example:'Sie ähnelt ihrer Mutter.',exampleFr:'Elle ressemble à sa mère.',grammar:'+ Dat.'},
  {id:20,de:'die Ahnung',article:'die',plural:'die Ahnungen',fr:'une idée, une connaissance',en:'idea, clue',category:'Nom',example:'Ich habe keine Ahnung.',exampleFr:"Je n'en ai aucune idée."},
  {id:21,de:'die Akte',article:'die',plural:'die Akten',fr:'le dossier',en:'file',category:'Nom',example:'Die Akte liegt auf dem Tisch.',exampleFr:'Le dossier est sur la table.'},
  {id:22,de:'akzeptieren',fr:'accepter',en:'to accept',category:'Verbe',example:'Ich kann deine Entscheidung akzeptieren.',exampleFr:'Je peux accepter ta décision.'},
  {id:23,de:'der Albtraum',article:'der',plural:'die Albträume',fr:'le cauchemar',en:'nightmare',category:'Nom',example:'Ich hatte einen Albtraum.',exampleFr:"J'ai fait un cauchemar."},
  {id:24,de:'allmählich',fr:'peu à peu',en:'gradually',category:'Adverbe',example:'Allmählich wird es wärmer.',exampleFr:'Peu à peu, il fait plus chaud.'},
  {id:25,de:'der Alltag',article:'der',plural:'—',fr:'le quotidien',en:'everyday life',category:'Nom',example:'Im Alltag habe ich wenig Zeit.',exampleFr:"Au quotidien, j'ai peu de temps."},
  {id:26,de:'altmodisch',fr:'démodé',en:'old-fashioned',category:'Adjectif',example:'Diese Kleidung ist altmodisch.',exampleFr:'Ces vêtements sont démodés.'},
  {id:27,de:'sich amüsieren',fr:"s'amuser",en:'to enjoy oneself',category:'Verbe',example:'Wir haben uns gut amüsiert.',exampleFr:'Nous nous sommes bien amusés.'},
  {id:28,de:'anbieten',fr:'proposer, offrir',en:'to offer',category:'Verbe',example:'Kann ich dir einen Kaffee anbieten?',exampleFr:'Puis-je te proposer un café ?',forms:'bietet an – bot an – hat angeboten',grammar:'Verbe séparable'},
  {id:29,de:'ändern',fr:'changer, modifier',en:'to change',category:'Verbe',example:'Ich möchte meine Meinung ändern.',exampleFr:'Je voudrais changer mon avis.'},
  {id:30,de:'der Anfang',article:'der',plural:'die Anfänge',fr:'le début',en:'beginning',category:'Nom',example:'Am Anfang war es schwierig.',exampleFr:'Au début, c’était difficile.'},
  {id:31,de:'anfangen',fr:'commencer',en:'to begin',category:'Verbe',example:'Der Unterricht fängt um acht Uhr an.',exampleFr:'Le cours commence à huit heures.',forms:'fängt an – fing an – hat angefangen',grammar:'Verbe séparable'},
  {id:32,de:'das Angebot',article:'das',plural:'die Angebote',fr:"l'offre",en:'offer',category:'Nom',example:'Das Angebot ist sehr interessant.',exampleFr:"L'offre est très intéressante."},
  {id:33,de:'angehen',fr:'concerner',en:'to concern',category:'Verbe',example:'Das geht dich nichts an.',exampleFr:'Cela ne te regarde pas.',forms:'geht an – ging an – ist angegangen',grammar:'Verbe séparable'},
  {id:34,de:'die Angelegenheit',article:'die',plural:'die Angelegenheiten',fr:"l'affaire",en:'matter, affair',category:'Nom',example:'Das ist eine wichtige Angelegenheit.',exampleFr:"C'est une affaire importante."},
  {id:35,de:'Angst haben vor',fr:'avoir peur de',en:'to be afraid of',category:'Expression',example:'Ich habe Angst vor Hunden.',exampleFr:"J'ai peur des chiens.",grammar:'+ Dat.'},
  {id:36,de:'ankommen',fr:'arriver',en:'to arrive',category:'Verbe',example:'Der Zug kommt pünktlich an.',exampleFr:'Le train arrive à l’heure.',forms:'kommt an – kam an – ist angekommen',grammar:'Verbe séparable'},
  {id:37,de:'die Ankunft',article:'die',plural:'die Ankünfte',fr:"l'arrivée",en:'arrival',category:'Nom',example:'Die Ankunft ist um 18 Uhr.',exampleFr:"L'arrivée est à 18 heures."},
  {id:38,de:'annehmen',fr:'accepter, supposer',en:'to accept, assume',category:'Verbe',example:'Ich nehme an, dass er krank ist.',exampleFr:'Je suppose qu’il est malade.',forms:'nimmt an – nahm an – hat angenommen',grammar:'Verbe séparable'},
  {id:39,de:'anprobieren',fr:'essayer un vêtement',en:'to try on',category:'Verbe',example:'Ich möchte diese Jacke anprobieren.',exampleFr:'Je voudrais essayer cette veste.',grammar:'Verbe séparable'},
  {id:40,de:'anrufen',fr:'téléphoner à',en:'to call',category:'Verbe',example:'Ich rufe dich morgen an.',exampleFr:'Je t’appelle demain.',forms:'ruft an – rief an – hat angerufen',grammar:'Verbe séparable'},
  {id:41,de:'der Anruf',article:'der',plural:'die Anrufe',fr:"l'appel téléphonique",en:'phone call',category:'Nom',example:'Ich habe einen Anruf bekommen.',exampleFr:"J'ai reçu un appel."},
  {id:42,de:'anscheinend',fr:'apparemment',en:'apparently',category:'Adverbe',example:'Anscheinend ist er krank.',exampleFr:'Apparemment, il est malade.'},
  {id:43,de:'anschreien',fr:'crier après quelqu’un',en:'to shout at',category:'Verbe',example:'Schrei mich nicht an!',exampleFr:'Ne me crie pas dessus !',forms:'schreit an – schrie an – hat angeschrien',grammar:'Verbe séparable'},
  {id:44,de:'die Anschrift',article:'die',plural:'die Anschriften',fr:"l'adresse",en:'address',category:'Nom',example:'Bitte schreiben Sie Ihre Anschrift.',exampleFr:'Veuillez écrire votre adresse.'},
  {id:45,de:'ansehen',fr:'regarder',en:'to look at',category:'Verbe',example:'Ich sehe mir einen Film an.',exampleFr:'Je regarde un film.',forms:'sieht an – sah an – hat angesehen',grammar:'Verbe séparable'},
  {id:46,de:'die Ansicht',article:'die',plural:'die Ansichten',fr:"l'avis, le point de vue",en:'opinion, view',category:'Nom',example:'Meiner Ansicht nach ist das richtig.',exampleFr:'À mon avis, c’est correct.'},
  {id:47,de:'ansprechen',fr:"s'adresser à",en:'to address, speak to',category:'Verbe',example:'Ein Mann hat mich angesprochen.',exampleFr:"Un homme m'a adressé la parole.",forms:'spricht an – sprach an – hat angesprochen',grammar:'Verbe séparable'},
  {id:48,de:'die Antwort',article:'die',plural:'die Antworten',fr:'la réponse',en:'answer',category:'Nom',example:'Ich warte auf deine Antwort.',exampleFr:'J’attends ta réponse.'},
  {id:49,de:'antworten',fr:'répondre',en:'to answer',category:'Verbe',example:'Bitte antworte auf meine Frage.',exampleFr:'Réponds à ma question, s’il te plaît.',grammar:'auf + Akk.'},
  {id:50,de:'anwesend',fr:'présent',en:'present',category:'Adjectif',example:'Alle Schüler sind anwesend.',exampleFr:'Tous les élèves sont présents.'},
  {id:51,de:'die Anzeige',article:'die',plural:'die Anzeigen',fr:"l'annonce",en:'advertisement',category:'Nom',example:'Ich habe eine Anzeige gelesen.',exampleFr:"J'ai lu une annonce."},
  {id:52,de:'anziehen',fr:'mettre un vêtement, attirer',en:'to put on, attract',category:'Verbe',example:'Ich ziehe meine Jacke an.',exampleFr:'Je mets ma veste.',forms:'zieht an – zog an – hat angezogen',grammar:'Verbe séparable'},
  {id:53,de:'der Anzug',article:'der',plural:'die Anzüge',fr:'le costume',en:'suit',category:'Nom',example:'Er trägt einen schwarzen Anzug.',exampleFr:'Il porte un costume noir.'},
  {id:54,de:'die Apotheke',article:'die',plural:'die Apotheken',fr:'la pharmacie',en:'pharmacy',category:'Nom',example:'Die Apotheke ist geöffnet.',exampleFr:'La pharmacie est ouverte.'},
  {id:55,de:'der Apotheker',article:'der',plural:'die Apotheker',fr:'le pharmacien',en:'pharmacist',category:'Nom',example:'Der Apotheker erklärt die Anwendung.',exampleFr:"Le pharmacien explique l'utilisation."},
  {id:56,de:'die Arbeit',article:'die',plural:'die Arbeiten',fr:'le travail',en:'work',category:'Nom',example:'Meine Arbeit beginnt um neun Uhr.',exampleFr:'Mon travail commence à neuf heures.'},
  {id:57,de:'arbeitslos',fr:'au chômage',en:'unemployed',category:'Adjectif',example:'Er ist seit einem Jahr arbeitslos.',exampleFr:'Il est au chômage depuis un an.'},
  {id:58,de:'der Arbeitsplatz',article:'der',plural:'die Arbeitsplätze',fr:"le poste de travail",en:'workplace',category:'Nom',example:'Ich suche einen neuen Arbeitsplatz.',exampleFr:'Je cherche un nouveau poste.'},
  {id:59,de:'sich ärgern über',fr:"s'énerver à propos de",en:'to be annoyed about',category:'Expression',example:'Ich ärgere mich über den Lärm.',exampleFr:"Je m'énerve à cause du bruit.",grammar:'+ Akk.'},
  {id:60,de:'der Arzt',article:'der',plural:'die Ärzte',fr:'le médecin',en:'doctor',category:'Nom',example:'Ich muss morgen zum Arzt gehen.',exampleFr:'Je dois aller chez le médecin demain.'},
  {id:61,de:'atmen',fr:'respirer',en:'to breathe',category:'Verbe',example:'Atmen Sie bitte tief ein.',exampleFr:'Respirez profondément, s’il vous plaît.'},
  {id:62,de:'der Aufenthalt',article:'der',plural:'die Aufenthalte',fr:'le séjour',en:'stay',category:'Nom',example:'Unser Aufenthalt dauert zehn Tage.',exampleFr:'Notre séjour dure dix jours.'},
  {id:63,de:'auffallen',fr:'attirer l’attention',en:'to stand out, attract attention',category:'Verbe',example:'Sein Verhalten ist mir aufgefallen.',exampleFr:'Son comportement a attiré mon attention.',forms:'fällt auf – fiel auf – ist aufgefallen',grammar:'Verbe séparable'},
  {id:64,de:'die Aufgabe',article:'die',plural:'die Aufgaben',fr:'la tâche, le devoir',en:'task, exercise',category:'Nom',example:'Ich mache meine Hausaufgaben.',exampleFr:'Je fais mes devoirs.'},
  {id:65,de:'aufgeben',fr:'abandonner',en:'to give up',category:'Verbe',example:'Gib nicht auf!',exampleFr:"N'abandonne pas !",forms:'gibt auf – gab auf – hat aufgegeben',grammar:'Verbe séparable'},
  {id:66,de:'aufgrund',fr:'en raison de',en:'because of',category:'Préposition',example:'Aufgrund des Wetters bleiben wir zu Hause.',exampleFr:'En raison du temps, nous restons à la maison.',grammar:'+ Gén.'},
  {id:67,de:'aufhören',fr:'arrêter',en:'to stop',category:'Verbe',example:'Sie hat aufgehört zu rauchen.',exampleFr:'Elle a arrêté de fumer.',grammar:'aufhören + zu + infinitif'},
  {id:68,de:'aufmerksam',fr:'attentif',en:'attentive',category:'Adjectif',example:'Die Schüler hören aufmerksam zu.',exampleFr:'Les élèves écoutent attentivement.'},
  {id:69,de:'aufpassen auf',fr:'faire attention à',en:'to look after, watch',category:'Expression',example:'Pass auf die Kinder auf!',exampleFr:'Fais attention aux enfants !',grammar:'+ Akk.'},
  {id:70,de:'aufräumen',fr:'ranger',en:'to tidy up',category:'Verbe',example:'Ich muss mein Zimmer aufräumen.',exampleFr:'Je dois ranger ma chambre.',grammar:'Verbe séparable'},
  {id:71,de:'aufstehen',fr:'se lever',en:'to get up',category:'Verbe',example:'Ich stehe jeden Tag um sieben Uhr auf.',exampleFr:'Je me lève tous les jours à sept heures.',forms:'steht auf – stand auf – ist aufgestanden',grammar:'Verbe séparable'},
  {id:72,de:'aufwachsen',fr:'grandir',en:'to grow up',category:'Verbe',example:'Sie ist in der Schweiz aufgewachsen.',exampleFr:'Elle a grandi en Suisse.',forms:'wächst auf – wuchs auf – ist aufgewachsen',grammar:'Verbe séparable'},
  {id:73,de:'das Auge',article:'das',plural:'die Augen',fr:"l'œil",en:'eye',category:'Nom',example:'Er hat blaue Augen.',exampleFr:'Il a les yeux bleus.'},
  {id:74,de:'die Ausbildung',article:'die',plural:'die Ausbildungen',fr:'la formation',en:'training, education',category:'Nom',example:'Sie macht eine Ausbildung.',exampleFr:'Elle suit une formation.'},
  {id:75,de:'der Ausdruck',article:'der',plural:'die Ausdrücke',fr:"l'expression",en:'expression',category:'Nom',example:'Was bedeutet dieser Ausdruck?',exampleFr:'Que signifie cette expression ?'},
  {id:76,de:'ausfüllen',fr:'remplir',en:'to fill in',category:'Verbe',example:'Bitte füllen Sie das Formular aus.',exampleFr:'Veuillez remplir le formulaire.',grammar:'Verbe séparable'},
  {id:77,de:'der Ausflug',article:'der',plural:'die Ausflüge',fr:"l'excursion",en:'excursion',category:'Nom',example:'Wir machen morgen einen Ausflug.',exampleFr:'Nous faisons une excursion demain.'},
  {id:78,de:'ausführlich',fr:'détaillé, en détail',en:'detailed, in detail',category:'Adjectif',example:'Er hat alles ausführlich erklärt.',exampleFr:'Il a tout expliqué en détail.'},
  {id:79,de:'ausgeben',fr:'dépenser',en:'to spend',category:'Verbe',example:'Ich gebe nicht viel Geld aus.',exampleFr:'Je ne dépense pas beaucoup d’argent.',forms:'gibt aus – gab aus – hat ausgegeben',grammar:'Verbe séparable'},
  {id:80,de:'sich auskennen',fr:'bien connaître',en:'to know one’s way around',category:'Verbe',example:'Kennst du dich in Berlin aus?',exampleFr:'Tu connais bien Berlin ?',grammar:'sich auskennen in + Dat.'},
  {id:81,de:'die Auskunft',article:'die',plural:'die Auskünfte',fr:'le renseignement',en:'information',category:'Nom',example:'Können Sie mir eine Auskunft geben?',exampleFr:'Pouvez-vous me renseigner ?'},
  {id:82,de:'das Ausland',article:'das',plural:'—',fr:"l'étranger (pays)",en:'foreign countries',category:'Nom',example:'Sie lebt im Ausland.',exampleFr:'Elle vit à l’étranger.'},
  {id:83,de:'ausleihen',fr:'emprunter, prêter',en:'to borrow, lend',category:'Verbe',example:'Ich leihe mir ein Buch aus.',exampleFr:"J'emprunte un livre.",forms:'leiht aus – lieh aus – hat ausgeliehen',grammar:'Verbe séparable'},
  {id:84,de:'die Ausnahme',article:'die',plural:'die Ausnahmen',fr:"l'exception",en:'exception',category:'Nom',example:'Das ist eine Ausnahme.',exampleFr:"C'est une exception."},
  {id:85,de:'ausprobieren',fr:'essayer',en:'to try out',category:'Verbe',example:'Ich möchte das neue Programm ausprobieren.',exampleFr:'Je voudrais essayer le nouveau programme.',grammar:'Verbe séparable'},
  {id:86,de:'sich ausruhen',fr:'se reposer',en:'to rest',category:'Verbe',example:'Nach der Arbeit ruhe ich mich aus.',exampleFr:'Après le travail, je me repose.',grammar:'Verbe séparable'},
  {id:87,de:'die Ausrede',article:'die',plural:'die Ausreden',fr:"l'excuse, le prétexte",en:'excuse',category:'Nom',example:'Das ist nur eine Ausrede.',exampleFr:"Ce n'est qu'une excuse."},
  {id:88,de:'die Aussage',article:'die',plural:'die Aussagen',fr:'la déclaration',en:'statement',category:'Nom',example:'Seine Aussage war wichtig.',exampleFr:'Sa déclaration était importante.'},
  {id:89,de:'ausschließen',fr:'exclure',en:'to exclude',category:'Verbe',example:'Wir können diese Möglichkeit nicht ausschließen.',exampleFr:'Nous ne pouvons pas exclure cette possibilité.',forms:'schließt aus – schloss aus – hat ausgeschlossen',grammar:'Verbe séparable'},
  {id:90,de:'aussehen',fr:'avoir l’air',en:'to look, appear',category:'Verbe',example:'Du siehst heute müde aus.',exampleFr:"Tu as l'air fatigué aujourd'hui.",forms:'sieht aus – sah aus – hat ausgesehen',grammar:'Verbe séparable'},
  {id:91,de:'außerdem',fr:'en outre, de plus',en:'besides, furthermore',category:'Adverbe',example:'Außerdem habe ich keine Zeit.',exampleFr:"En outre, je n'ai pas le temps."},
  {id:92,de:'außer',fr:'sauf, à part',en:'except, apart from',category:'Préposition',example:'Alle sind gekommen außer Peter.',exampleFr:'Tous sont venus sauf Peter.',grammar:'+ Dat.'},
  {id:93,de:'aussprechen',fr:'prononcer',en:'to pronounce',category:'Verbe',example:'Kannst du dieses Wort aussprechen?',exampleFr:'Peux-tu prononcer ce mot ?',forms:'spricht aus – sprach aus – hat ausgesprochen',grammar:'Verbe séparable'},
  {id:94,de:'aussteigen',fr:'descendre (d’un véhicule)',en:'to get off',category:'Verbe',example:'Wir steigen an der nächsten Haltestelle aus.',exampleFr:'Nous descendons au prochain arrêt.',forms:'steigt aus – stieg aus – ist ausgestiegen',grammar:'Verbe séparable'},
  {id:95,de:'die Ausstellung',article:'die',plural:'die Ausstellungen',fr:"l'exposition",en:'exhibition',category:'Nom',example:'Die Ausstellung ist sehr interessant.',exampleFr:"L'exposition est très intéressante."},
  {id:96,de:'der Ausweis',article:'der',plural:'die Ausweise',fr:"la carte d'identité",en:'identity card',category:'Nom',example:'Bitte zeigen Sie Ihren Ausweis.',exampleFr:'Veuillez montrer votre carte d’identité.'},
  {id:97,de:'auswendig',fr:'par cœur',en:'by heart',category:'Adverbe',example:'Ich lerne die Wörter auswendig.',exampleFr:'J’apprends les mots par cœur.'},
  {id:98,de:'ausziehen',fr:'enlever un vêtement, déménager',en:'to take off, move out',category:'Verbe',example:'Zieh bitte deine Schuhe aus.',exampleFr:'Enlève tes chaussures, s’il te plaît.',forms:'zieht aus – zog aus – hat ausgezogen',grammar:'Verbe séparable'},
  {id:99,de:'austauschen',fr:'échanger',en:'to exchange',category:'Verbe',example:'Wir tauschen Informationen aus.',exampleFr:'Nous échangeons des informations.',grammar:'Verbe séparable'},
  {id:100,de:'ausüben',fr:'exercer',en:'to practise, exercise',category:'Verbe',example:'Er übt einen interessanten Beruf aus.',exampleFr:'Il exerce un métier intéressant.',grammar:'Verbe séparable'},
  {id:101,de:'backen',fr:'faire cuire au four',en:'to bake',category:'Verbe',example:'Meine Mutter backt einen Kuchen.',exampleFr:'Ma mère prépare un gâteau.',forms:'bäckt – backte – hat gebacken'},
  {id:102,de:'der Bäcker',article:'der',plural:'die Bäcker',fr:'le boulanger',en:'baker',category:'Nom',example:'Der Bäcker öffnet früh.',exampleFr:'Le boulanger ouvre tôt.'},
  {id:103,de:'das Badezimmer',article:'das',plural:'die Badezimmer',fr:'la salle de bains',en:'bathroom',category:'Nom',example:'Das Badezimmer ist neben dem Schlafzimmer.',exampleFr:'La salle de bains est à côté de la chambre.'},
  {id:104,de:'der Bahnhof',article:'der',plural:'die Bahnhöfe',fr:'la gare',en:'train station',category:'Nom',example:'Ich warte am Bahnhof.',exampleFr:"J'attends à la gare."},
  {id:105,de:'der Bahnsteig',article:'der',plural:'die Bahnsteige',fr:'le quai',en:'platform',category:'Nom',example:'Der Zug steht auf Bahnsteig drei.',exampleFr:'Le train est sur le quai trois.'},
  {id:106,de:'bald',fr:'bientôt',en:'soon',category:'Adverbe',example:'Bis bald!',exampleFr:'À bientôt !'},
  {id:107,de:'basteln',fr:'bricoler',en:'to do crafts',category:'Verbe',example:'Die Kinder basteln gern.',exampleFr:'Les enfants aiment bricoler.'},
  {id:108,de:'beabsichtigen',fr:"avoir l'intention de",en:'to intend',category:'Verbe',example:'Wir beabsichtigen, ein Haus zu kaufen.',exampleFr:"Nous avons l'intention d'acheter une maison."},
  {id:109,de:'sich bedanken',fr:'remercier',en:'to thank',category:'Verbe',example:'Ich bedanke mich für Ihre Hilfe.',exampleFr:'Je vous remercie pour votre aide.',grammar:'für + Akk.'},
  {id:110,de:'bedauern',fr:'regretter',en:'to regret',category:'Verbe',example:'Ich bedauere meinen Fehler.',exampleFr:'Je regrette mon erreur.'},
  {id:111,de:'bedeuten',fr:'signifier',en:'to mean',category:'Verbe',example:'Was bedeutet dieses Wort?',exampleFr:'Que signifie ce mot ?'},
  {id:112,de:'die Bedeutung',article:'die',plural:'die Bedeutungen',fr:'la signification',en:'meaning',category:'Nom',example:'Die Bedeutung ist klar.',exampleFr:'La signification est claire.'},
  {id:113,de:'beeindrucken',fr:'impressionner',en:'to impress',category:'Verbe',example:'Das Ergebnis beeindruckt mich.',exampleFr:'Le résultat m’impressionne.'},
  {id:114,de:'sich beeilen',fr:'se dépêcher',en:'to hurry',category:'Verbe',example:'Beeil dich bitte!',exampleFr:'Dépêche-toi, s’il te plaît !'},
  {id:115,de:'beeinflussen',fr:'influencer',en:'to influence',category:'Verbe',example:'Musik beeinflusst meine Stimmung.',exampleFr:'La musique influence mon humeur.'},
  {id:116,de:'der Befehl',article:'der',plural:'die Befehle',fr:"l'ordre",en:'command, order',category:'Nom',example:'Er gab einen Befehl.',exampleFr:'Il a donné un ordre.'},
  {id:117,de:'befolgen',fr:'suivre, respecter',en:'to obey, follow',category:'Verbe',example:'Man muss die Regeln befolgen.',exampleFr:'Il faut respecter les règles.'},
  {id:118,de:'befürchten',fr:'craindre',en:'to fear',category:'Verbe',example:'Ich befürchte, dass es regnet.',exampleFr:'Je crains qu’il pleuve.'},
  {id:119,de:'begegnen',fr:'rencontrer',en:'to meet',category:'Verbe',example:'Ich bin einem alten Freund begegnet.',exampleFr:'J’ai rencontré un vieil ami.',grammar:'+ Dat.'},
  {id:120,de:'die Begegnung',article:'die',plural:'die Begegnungen',fr:'la rencontre',en:'encounter',category:'Nom',example:'Die Begegnung war interessant.',exampleFr:'La rencontre était intéressante.'},
  {id:121,de:'begeistert',fr:'enthousiaste',en:'enthusiastic',category:'Adjectif',example:'Die Kinder sind begeistert.',exampleFr:'Les enfants sont enthousiastes.'},
  {id:122,de:'begleiten',fr:'accompagner',en:'to accompany',category:'Verbe',example:'Ich begleite dich zum Bahnhof.',exampleFr:"Je t'accompagne à la gare."},
  {id:123,de:'begreifen',fr:'comprendre',en:'to understand',category:'Verbe',example:'Ich kann das nicht begreifen.',exampleFr:'Je ne peux pas comprendre cela.',forms:'begreift – begriff – hat begriffen'},
  {id:124,de:'begründen',fr:'justifier',en:'to justify',category:'Verbe',example:'Bitte begründen Sie Ihre Antwort.',exampleFr:'Veuillez justifier votre réponse.'},
  {id:125,de:'begrüßen',fr:'saluer',en:'to greet',category:'Verbe',example:'Der Lehrer begrüßt die Schüler.',exampleFr:'Le professeur salue les élèves.'},
  {id:126,de:'behalten',fr:'garder, conserver',en:'to keep',category:'Verbe',example:'Du kannst das Buch behalten.',exampleFr:'Tu peux garder le livre.',forms:'behält – behielt – hat behalten'},
  {id:127,de:'behandeln',fr:'traiter',en:'to treat',category:'Verbe',example:'Der Arzt behandelt den Patienten.',exampleFr:'Le médecin traite le patient.'},
  {id:128,de:'behaupten',fr:'affirmer',en:'to claim',category:'Verbe',example:'Er behauptet, alles zu wissen.',exampleFr:'Il affirme tout savoir.'},
  {id:129,de:'die Behauptung',article:'die',plural:'die Behauptungen',fr:"l'affirmation",en:'claim',category:'Nom',example:'Diese Behauptung ist falsch.',exampleFr:'Cette affirmation est fausse.'},
  {id:130,de:'behindert',fr:'en situation de handicap',en:'disabled',category:'Adjectif',example:'Der Eingang ist für Menschen mit Behinderung geeignet.',exampleFr:'L’entrée est adaptée aux personnes handicapées.'},
  {id:131,de:'beibringen',fr:'apprendre quelque chose à quelqu’un',en:'to teach',category:'Verbe',example:'Er bringt seinem Sohn Deutsch bei.',exampleFr:'Il apprend l’allemand à son fils.',forms:'bringt bei – brachte bei – hat beigebracht',grammar:'Verbe séparable'},
  {id:132,de:'das Bein',article:'das',plural:'die Beine',fr:'la jambe',en:'leg',category:'Nom',example:'Mein rechtes Bein tut weh.',exampleFr:'Ma jambe droite me fait mal.'},
  {id:133,de:'bekannt',fr:'connu',en:'known, famous',category:'Adjectif',example:'Berlin ist eine bekannte Stadt.',exampleFr:'Berlin est une ville connue.'},
  {id:134,de:'bekommen',fr:'recevoir, obtenir',en:'to receive, get',category:'Verbe',example:'Ich habe eine Nachricht bekommen.',exampleFr:'J’ai reçu un message.',forms:'bekommt – bekam – hat bekommen'},
  {id:135,de:'bemerken',fr:'remarquer',en:'to notice',category:'Verbe',example:'Hast du den Fehler bemerkt?',exampleFr:'As-tu remarqué l’erreur ?'},
  {id:136,de:'sich bemühen',fr:"s'efforcer",en:'to make an effort',category:'Verbe',example:'Ich bemühe mich, pünktlich zu sein.',exampleFr:"Je m'efforce d'être ponctuel."},
  {id:137,de:'sich benehmen',fr:'se comporter',en:'to behave',category:'Verbe',example:'Die Kinder benehmen sich gut.',exampleFr:'Les enfants se comportent bien.',forms:'benimmt sich – benahm sich – hat sich benommen'},
  {id:138,de:'das Benehmen',article:'das',plural:'—',fr:'le comportement',en:'behaviour',category:'Nom',example:'Sein Benehmen war unhöflich.',exampleFr:'Son comportement était impoli.'},
  {id:139,de:'benutzen',fr:'utiliser',en:'to use',category:'Verbe',example:'Darf ich dein Telefon benutzen?',exampleFr:'Puis-je utiliser ton téléphone ?'},
  {id:140,de:'der Bereich',article:'der',plural:'die Bereiche',fr:'le domaine',en:'area, field',category:'Nom',example:'Ich arbeite im medizinischen Bereich.',exampleFr:'Je travaille dans le domaine médical.'},
  {id:141,de:'bereit',fr:'prêt',en:'ready',category:'Adjectif',example:'Ich bin bereit.',exampleFr:'Je suis prêt.'},
  {id:142,de:'bereits',fr:'déjà',en:'already',category:'Adverbe',example:'Er ist bereits angekommen.',exampleFr:'Il est déjà arrivé.'},
  {id:143,de:'der Bericht',article:'der',plural:'die Berichte',fr:'le compte rendu, le rapport',en:'report',category:'Nom',example:'Ich schreibe einen Bericht.',exampleFr:'J’écris un rapport.'},
  {id:144,de:'berichten',fr:'rendre compte, rapporter',en:'to report',category:'Verbe',example:'Die Zeitung berichtet über den Unfall.',exampleFr:"Le journal rend compte de l'accident."},
  {id:145,de:'berücksichtigen',fr:'tenir compte de',en:'to consider, take into account',category:'Verbe',example:'Wir müssen alle Kosten berücksichtigen.',exampleFr:'Nous devons tenir compte de tous les coûts.'},
  {id:146,de:'der Beruf',article:'der',plural:'die Berufe',fr:'le métier, la profession',en:'profession, job',category:'Nom',example:'Was sind Sie von Beruf?',exampleFr:'Quelle est votre profession ?'},
  {id:147,de:'berühmt',fr:'célèbre',en:'famous',category:'Adjectif',example:'Der Schriftsteller ist weltweit berühmt.',exampleFr:'L’écrivain est célèbre dans le monde entier.'},
  {id:148,de:'beschreiben',fr:'décrire',en:'to describe',category:'Verbe',example:'Kannst du das Bild beschreiben?',exampleFr:'Peux-tu décrire l’image ?',forms:'beschreibt – beschrieb – hat beschrieben'},
  {id:149,de:'die Beschreibung',article:'die',plural:'die Beschreibungen',fr:'la description',en:'description',category:'Nom',example:'Die Beschreibung ist sehr genau.',exampleFr:'La description est très précise.'},
  {id:150,de:'sich beschweren über',fr:'se plaindre de',en:'to complain about',category:'Expression',example:'Die Gäste beschweren sich über den Lärm.',exampleFr:'Les clients se plaignent du bruit.',grammar:'+ Akk.'},
  {id:151,de:'besichtigen',fr:'visiter',en:'to visit, inspect',category:'Verbe',example:'Wir besichtigen morgen das Museum.',exampleFr:'Nous visitons le musée demain.'},
  {id:152,de:'besitzen',fr:'posséder',en:'to own, possess',category:'Verbe',example:'Er besitzt ein großes Haus.',exampleFr:'Il possède une grande maison.',forms:'besitzt – besaß – hat besessen'},
  {id:153,de:'besonders',fr:'particulièrement',en:'especially',category:'Adverbe',example:'Das Buch ist besonders interessant.',exampleFr:'Le livre est particulièrement intéressant.'},
  {id:154,de:'besprechen',fr:'discuter, traiter',en:'to discuss',category:'Verbe',example:'Wir müssen das Problem besprechen.',exampleFr:'Nous devons discuter du problème.',forms:'bespricht – besprach – hat besprochen'},
  {id:155,de:'bestätigen',fr:'confirmer',en:'to confirm',category:'Verbe',example:'Bitte bestätigen Sie den Termin.',exampleFr:'Veuillez confirmer le rendez-vous.'},
  {id:156,de:'bestehen aus',fr:'se composer de',en:'to consist of',category:'Expression',example:'Der Kurs besteht aus zehn Lektionen.',exampleFr:'Le cours se compose de dix leçons.',grammar:'aus + Dat.'},
  {id:157,de:'bestehen',fr:'réussir (un examen)',en:'to pass (an exam)',category:'Verbe',example:'Sie hat die Prüfung bestanden.',exampleFr:'Elle a réussi l’examen.',forms:'besteht – bestand – hat bestanden'},
  {id:158,de:'bestellen',fr:'commander',en:'to order',category:'Verbe',example:'Ich möchte eine Pizza bestellen.',exampleFr:'Je voudrais commander une pizza.'},
  {id:159,de:'der Besuch',article:'der',plural:'die Besuche',fr:'la visite',en:'visit',category:'Nom',example:'Wir bekommen heute Besuch.',exampleFr:'Nous recevons de la visite aujourd’hui.'},
  {id:160,de:'besuchen',fr:'rendre visite, visiter',en:'to visit',category:'Verbe',example:'Ich besuche meine Eltern.',exampleFr:'Je rends visite à mes parents.'},
  {id:161,de:'sich beteiligen an',fr:'participer à',en:'to participate in',category:'Expression',example:'Viele Schüler beteiligen sich an dem Projekt.',exampleFr:'Beaucoup d’élèves participent au projet.',grammar:'+ Dat.'},
  {id:162,de:'betreten',fr:'entrer dans',en:'to enter',category:'Verbe',example:'Sie betritt das Zimmer.',exampleFr:'Elle entre dans la chambre.',forms:'betritt – betrat – hat betreten'},
  {id:163,de:'bevor',fr:'avant que',en:'before',category:'Conjonction',example:'Bevor ich gehe, rufe ich dich an.',exampleFr:'Avant de partir, je t’appelle.',grammar:'Verbe conjugué à la fin'},
  {id:164,de:'sich bewerben um',fr:'poser sa candidature à',en:'to apply for',category:'Expression',example:'Sie bewirbt sich um eine Stelle.',exampleFr:'Elle postule à un poste.',grammar:'+ Akk.'},
  {id:165,de:'bewundern',fr:'admirer',en:'to admire',category:'Verbe',example:'Ich bewundere deinen Mut.',exampleFr:'J’admire ton courage.'},
  {id:166,de:'bezahlen',fr:'payer',en:'to pay',category:'Verbe',example:'Ich bezahle die Rechnung.',exampleFr:'Je paie la facture.'},
  {id:167,de:'die Beziehung',article:'die',plural:'die Beziehungen',fr:'la relation',en:'relationship',category:'Nom',example:'Sie haben eine gute Beziehung.',exampleFr:'Ils ont une bonne relation.'},
  {id:168,de:'bieten',fr:'offrir, proposer',en:'to offer',category:'Verbe',example:'Das Hotel bietet viele Möglichkeiten.',exampleFr:'L’hôtel offre de nombreuses possibilités.',forms:'bietet – bot – hat geboten'},
  {id:169,de:'die Bildung',article:'die',plural:'—',fr:'la culture, la formation',en:'education',category:'Nom',example:'Bildung ist sehr wichtig.',exampleFr:'L’éducation est très importante.'},
  {id:170,de:'billig',fr:'bon marché',en:'cheap',category:'Adjectif',example:'Dieses Hotel ist billig.',exampleFr:'Cet hôtel est bon marché.'},
  {id:171,de:'bitten um',fr:'demander',en:'to ask for',category:'Expression',example:'Er bittet mich um Hilfe.',exampleFr:'Il me demande de l’aide.',grammar:'+ Akk.'},
  {id:172,de:'blass',fr:'pâle',en:'pale',category:'Adjectif',example:'Du bist heute sehr blass.',exampleFr:'Tu es très pâle aujourd’hui.'},
  {id:173,de:'bleiben',fr:'rester',en:'to stay',category:'Verbe',example:'Ich bleibe heute zu Hause.',exampleFr:'Je reste à la maison aujourd’hui.',forms:'bleibt – blieb – ist geblieben'},
  {id:174,de:'der Blick',article:'der',plural:'die Blicke',fr:'le regard',en:'look, glance',category:'Nom',example:'Liebe auf den ersten Blick.',exampleFr:'Le coup de foudre.'},
  {id:175,de:'bloß',fr:'seulement',en:'only, merely',category:'Adverbe',example:'Ich habe bloß fünf Euro.',exampleFr:"Je n'ai que cinq euros."},
  {id:176,de:'der Boden',article:'der',plural:'die Böden',fr:'le sol',en:'floor, ground',category:'Nom',example:'Das Buch liegt auf dem Boden.',exampleFr:'Le livre est par terre.'},
  {id:177,de:'brauchen',fr:'avoir besoin de',en:'to need',category:'Verbe',example:'Ich brauche deine Hilfe.',exampleFr:'J’ai besoin de ton aide.'},
  {id:178,de:'brechen',fr:'casser',en:'to break',category:'Verbe',example:'Er hat sich das Bein gebrochen.',exampleFr:'Il s’est cassé la jambe.',forms:'bricht – brach – hat gebrochen'},
  {id:179,de:'brennen',fr:'brûler',en:'to burn',category:'Verbe',example:'Das Licht brennt noch.',exampleFr:'La lumière est encore allumée.',forms:'brennt – brannte – hat gebrannt'},
  {id:180,de:'der Brief',article:'der',plural:'die Briefe',fr:'la lettre',en:'letter',category:'Nom',example:'Ich schreibe einen Brief.',exampleFr:"J'écris une lettre."},
  {id:181,de:'bringen',fr:'apporter',en:'to bring',category:'Verbe',example:'Kannst du mir ein Glas Wasser bringen?',exampleFr:'Peux-tu m’apporter un verre d’eau ?',forms:'bringt – brachte – hat gebracht'},
  {id:182,de:'das Brot',article:'das',plural:'die Brote',fr:'le pain',en:'bread',category:'Nom',example:'Ich esse jeden Morgen Brot.',exampleFr:'Je mange du pain chaque matin.'},
  {id:183,de:'der Bruder',article:'der',plural:'die Brüder',fr:'le frère',en:'brother',category:'Nom',example:'Mein Bruder wohnt in Berlin.',exampleFr:'Mon frère habite à Berlin.'},
  {id:184,de:'das Buch',article:'das',plural:'die Bücher',fr:'le livre',en:'book',category:'Nom',example:'Dieses Buch ist interessant.',exampleFr:'Ce livre est intéressant.'},
  {id:185,de:'der Bürger',article:'der',plural:'die Bürger',fr:'le citoyen',en:'citizen',category:'Nom',example:'Die Bürger wählen den Bürgermeister.',exampleFr:'Les citoyens élisent le maire.'},
  {id:186,de:'das Büro',article:'das',plural:'die Büros',fr:'le bureau',en:'office',category:'Nom',example:'Ich arbeite heute im Büro.',exampleFr:'Je travaille au bureau aujourd’hui.'},
  {id:187,de:'die Butter',article:'die',plural:'—',fr:'le beurre',en:'butter',category:'Nom',example:'Ich brauche Butter für den Kuchen.',exampleFr:'J’ai besoin de beurre pour le gâteau.'},
  {id:188,de:'der Champagner',article:'der',plural:'—',fr:'le champagne',en:'champagne',category:'Nom',example:'Sie trinken Champagner.',exampleFr:'Ils boivent du champagne.'},
  {id:189,de:'der Chef',article:'der',plural:'die Chefs',fr:'le patron',en:'boss',category:'Nom',example:'Mein Chef ist sehr freundlich.',exampleFr:'Mon patron est très aimable.'},
  {id:190,de:'der Computer',article:'der',plural:'die Computer',fr:"l'ordinateur",en:'computer',category:'Nom',example:'Ich arbeite am Computer.',exampleFr:'Je travaille sur l’ordinateur.'},
  {id:191,de:'das Dach',article:'das',plural:'die Dächer',fr:'le toit',en:'roof',category:'Nom',example:'Das Dach ist neu.',exampleFr:'Le toit est neuf.'},
  {id:192,de:'damals',fr:'à cette époque',en:'at that time',category:'Adverbe',example:'Damals lebte ich in Rabat.',exampleFr:'À cette époque, je vivais à Rabat.'},
  {id:193,de:'dank',fr:'grâce à',en:'thanks to',category:'Préposition',example:'Dank deiner Hilfe habe ich bestanden.',exampleFr:'Grâce à ton aide, j’ai réussi.',grammar:'+ Dat. ou Gén.'},
  {id:194,de:'danken',fr:'remercier',en:'to thank',category:'Verbe',example:'Ich danke dir für deine Hilfe.',exampleFr:'Je te remercie pour ton aide.',grammar:'+ Dat.'},
  {id:195,de:'darstellen',fr:'représenter',en:'to represent',category:'Verbe',example:'Das Bild stellt eine Landschaft dar.',exampleFr:'Le tableau représente un paysage.',grammar:'Verbe séparable'},
  {id:196,de:'dauern',fr:'durer',en:'to last',category:'Verbe',example:'Der Film dauert zwei Stunden.',exampleFr:'Le film dure deux heures.'},
  {id:197,de:'denken an',fr:'penser à',en:'to think of',category:'Expression',example:'Ich denke oft an dich.',exampleFr:'Je pense souvent à toi.',grammar:'+ Akk.'},
  {id:198,de:'deshalb',fr:"c'est pourquoi",en:'therefore',category:'Adverbe',example:'Ich bin krank, deshalb bleibe ich zu Hause.',exampleFr:'Je suis malade, c’est pourquoi je reste à la maison.'},
  {id:199,de:'deutlich',fr:'clair, distinct',en:'clear, distinct',category:'Adjectif',example:'Bitte sprechen Sie deutlich.',exampleFr:'Parlez clairement, s’il vous plaît.'},
  {id:200,de:'dienen zu',fr:'servir à',en:'to serve for',category:'Expression',example:'Wozu dient dieses Gerät?',exampleFr:'À quoi sert cet appareil ?',grammar:'zu + Dat.'},
  {id:201,de:'dürfen',fr:'avoir le droit, pouvoir',en:'may, be allowed to',category:'Verbe',example:'Hier darf man nicht rauchen.',exampleFr:"Il est interdit de fumer ici.",forms:'darf – durfte – hat gedurft'},
  {id:202,de:'der Durst',article:'der',plural:'—',fr:'la soif',en:'thirst',category:'Nom',example:'Ich habe großen Durst.',exampleFr:"J'ai très soif."},
  {id:203,de:'egal',fr:'égal, indifférent',en:'equal, indifferent',category:'Adjectif',example:'Das ist mir egal.',exampleFr:'Cela m’est égal.'},
  {id:204,de:'eifersüchtig',fr:'jaloux',en:'jealous',category:'Adjectif',example:'Er ist sehr eifersüchtig.',exampleFr:'Il est très jaloux.'},
  {id:205,de:'der Eindruck',article:'der',plural:'die Eindrücke',fr:"l'impression",en:'impression',category:'Nom',example:'Das Hotel macht einen guten Eindruck.',exampleFr:"L'hôtel donne une bonne impression."},
  {id:206,de:'einfallen',fr:'venir à l’esprit',en:'to occur to someone',category:'Verbe',example:'Mir fällt eine gute Idee ein.',exampleFr:'Une bonne idée me vient à l’esprit.',forms:'fällt ein – fiel ein – ist eingefallen',grammar:'+ Dat., verbe séparable'},
  {id:207,de:'der Einfluss',article:'der',plural:'die Einflüsse',fr:"l'influence",en:'influence',category:'Nom',example:'Eltern haben großen Einfluss auf ihre Kinder.',exampleFr:'Les parents ont une grande influence sur leurs enfants.'},
  {id:208,de:'die Einheit',article:'die',plural:'die Einheiten',fr:"l'unité",en:'unit',category:'Nom',example:'Die Einheit dauert 45 Minuten.',exampleFr:'La séance dure 45 minutes.'},
  {id:209,de:'einkaufen',fr:'faire les courses',en:'to shop',category:'Verbe',example:'Ich kaufe jeden Samstag ein.',exampleFr:'Je fais les courses chaque samedi.',grammar:'Verbe séparable'},
  {id:210,de:'einladen',fr:'inviter',en:'to invite',category:'Verbe',example:'Ich lade dich zu meiner Party ein.',exampleFr:'Je t’invite à ma fête.',forms:'lädt ein – lud ein – hat eingeladen',grammar:'Verbe séparable'},
  {id:211,de:'die Einladung',article:'die',plural:'die Einladungen',fr:"l'invitation",en:'invitation',category:'Nom',example:'Vielen Dank für die Einladung.',exampleFr:"Merci beaucoup pour l'invitation."},
  {id:212,de:'einnehmen',fr:'prendre (un médicament)',en:'to take (medicine)',category:'Verbe',example:'Sie müssen die Tabletten täglich einnehmen.',exampleFr:'Vous devez prendre les comprimés quotidiennement.',forms:'nimmt ein – nahm ein – hat eingenommen',grammar:'Verbe séparable'},
  {id:213,de:'einsam',fr:'solitaire',en:'lonely',category:'Adjectif',example:'Er führt ein einsames Leben.',exampleFr:'Il mène une vie solitaire.'},
  {id:214,de:'einschlafen',fr:"s'endormir",en:'to fall asleep',category:'Verbe',example:'Das Kind schläft schnell ein.',exampleFr:"L'enfant s'endort rapidement.",forms:'schläft ein – schlief ein – ist eingeschlafen',grammar:'Verbe séparable'},
  {id:215,de:'einverstanden',fr:"d'accord",en:'in agreement',category:'Adjectif',example:'Ich bin mit dir einverstanden.',exampleFr:"Je suis d'accord avec toi.",grammar:'mit + Dat.'},
  {id:216,de:'einzeln',fr:'individuellement, séparé',en:'separately, individually',category:'Adverbe',example:'Die Schüler kommen einzeln herein.',exampleFr:'Les élèves entrent un par un.'},
  {id:217,de:'einzig',fr:'unique, seul',en:'only, unique',category:'Adjectif',example:'Das ist meine einzige Möglichkeit.',exampleFr:'C’est ma seule possibilité.'},
  {id:218,de:'die Eltern',article:'die',plural:'—',fr:'les parents',en:'parents',category:'Nom',example:'Meine Eltern wohnen in Agadir.',exampleFr:'Mes parents habitent à Agadir.'},
  {id:219,de:'empfangen',fr:'recevoir, accueillir',en:'to receive, welcome',category:'Verbe',example:'Wir wurden herzlich empfangen.',exampleFr:'Nous avons été accueillis chaleureusement.',forms:'empfängt – empfing – hat empfangen'},
  {id:220,de:'empfinden',fr:'ressentir, éprouver',en:'to feel, experience',category:'Verbe',example:'Ich empfinde große Freude.',exampleFr:'Je ressens une grande joie.',forms:'empfindet – empfand – hat empfunden'},
  {id:221,de:'das Ende',article:'das',plural:'die Enden',fr:'la fin',en:'end',category:'Nom',example:'Am Ende war alles gut.',exampleFr:'À la fin, tout allait bien.'},
  {id:222,de:'entdecken',fr:'découvrir',en:'to discover',category:'Verbe',example:'Kolumbus hat Amerika entdeckt.',exampleFr:'Colomb a découvert l’Amérique.'},
  {id:223,de:'endlich',fr:'enfin',en:'finally',category:'Adverbe',example:'Endlich habe ich Zeit.',exampleFr:'Enfin, j’ai du temps.'},
  {id:224,de:'sich entscheiden',fr:'se décider',en:'to decide',category:'Verbe',example:'Ich kann mich nicht entscheiden.',exampleFr:'Je n’arrive pas à me décider.',forms:'entscheidet – entschied – hat entschieden'},
  {id:225,de:'die Entscheidung',article:'die',plural:'die Entscheidungen',fr:'la décision',en:'decision',category:'Nom',example:'Das war eine schwierige Entscheidung.',exampleFr:'C’était une décision difficile.'},
  {id:226,de:'sich entschuldigen bei',fr:"s'excuser auprès de",en:'to apologize to',category:'Expression',example:'Ich entschuldige mich bei dir.',exampleFr:"Je m'excuse auprès de toi.",grammar:'bei + Dat.'},
  {id:227,de:'die Entschuldigung',article:'die',plural:'die Entschuldigungen',fr:"l'excuse",en:'apology',category:'Nom',example:'Entschuldigung, ich bin zu spät.',exampleFr:'Excusez-moi, je suis en retard.'},
  {id:228,de:'enttäuscht',fr:'déçu',en:'disappointed',category:'Adjectif',example:'Ich bin von dem Ergebnis enttäuscht.',exampleFr:'Je suis déçu du résultat.'},
  {id:229,de:'die Entwicklung',article:'die',plural:'die Entwicklungen',fr:'le développement, évolution',en:'development',category:'Nom',example:'Die Entwicklung ist positiv.',exampleFr:'Le développement est positif.'},
  {id:230,de:'das Ereignis',article:'das',plural:'die Ereignisse',fr:"l'événement",en:'event',category:'Nom',example:'Das war ein wichtiges Ereignis.',exampleFr:"C'était un événement important."},
  {id:231,de:'erfahren',fr:'apprendre (une information)',en:'to find out, learn',category:'Verbe',example:'Ich habe gestern davon erfahren.',exampleFr:'Je l’ai appris hier.',forms:'erfährt – erfuhr – hat erfahren'},
  {id:232,de:'die Erfahrung',article:'die',plural:'die Erfahrungen',fr:"l'expérience",en:'experience',category:'Nom',example:'Er hat viel Erfahrung.',exampleFr:'Il a beaucoup d’expérience.'},
  {id:233,de:'erfinden',fr:'inventer',en:'to invent',category:'Verbe',example:'Wer hat das Telefon erfunden?',exampleFr:'Qui a inventé le téléphone ?',forms:'erfindet – erfand – hat erfunden'},
  {id:234,de:'erfolgreich',fr:'couronné de succès',en:'successful',category:'Adjectif',example:'Sie ist sehr erfolgreich.',exampleFr:'Elle a beaucoup de succès.'},
  {id:235,de:'das Ergebnis',article:'das',plural:'die Ergebnisse',fr:'le résultat',en:'result',category:'Nom',example:'Das Ergebnis ist ausgezeichnet.',exampleFr:'Le résultat est excellent.'},
  {id:236,de:'erhalten',fr:'recevoir',en:'to receive',category:'Verbe',example:'Ich habe einen Brief erhalten.',exampleFr:'J’ai reçu une lettre.',forms:'erhält – erhielt – hat erhalten'},
  {id:237,de:'sich erinnern an',fr:'se souvenir de',en:'to remember',category:'Expression',example:'Ich erinnere mich an meinen Lehrer.',exampleFr:'Je me souviens de mon professeur.',grammar:'+ Akk.'},
  {id:238,de:'erklären',fr:'expliquer',en:'to explain',category:'Verbe',example:'Kannst du mir die Aufgabe erklären?',exampleFr:'Peux-tu m’expliquer l’exercice ?'},
  {id:239,de:'sich erkundigen nach',fr:'se renseigner sur',en:'to inquire about',category:'Expression',example:'Ich erkundige mich nach dem Preis.',exampleFr:'Je me renseigne sur le prix.',grammar:'+ Dat.'},
  {id:240,de:'erlauben',fr:'permettre',en:'to allow',category:'Verbe',example:'Meine Eltern erlauben mir die Reise.',exampleFr:'Mes parents me permettent de voyager.'},
  {id:241,de:'erleben',fr:'vivre (un événement)',en:'to experience',category:'Verbe',example:'Wir haben viel erlebt.',exampleFr:'Nous avons vécu beaucoup de choses.'},
  {id:242,de:'ermöglichen',fr:'rendre possible',en:'to make possible',category:'Verbe',example:'Das Internet ermöglicht viele Dinge.',exampleFr:'Internet rend beaucoup de choses possibles.'},
  {id:243,de:'erreichen',fr:'atteindre',en:'to reach',category:'Verbe',example:'Ich möchte mein Ziel erreichen.',exampleFr:'Je voudrais atteindre mon objectif.'},
  {id:244,de:'erscheinen',fr:'apparaître, paraître',en:'to appear',category:'Verbe',example:'Das Buch erscheint nächste Woche.',exampleFr:'Le livre paraît la semaine prochaine.',forms:'erscheint – erschien – ist erschienen'},
  {id:245,de:'erstaunlich',fr:'étonnant',en:'amazing',category:'Adjectif',example:'Das ist wirklich erstaunlich.',exampleFr:'C’est vraiment étonnant.'},
  {id:246,de:'erwachsen',fr:'adulte',en:'adult',category:'Adjectif',example:'Meine Kinder sind schon erwachsen.',exampleFr:'Mes enfants sont déjà adultes.'},
  {id:247,de:'erwähnen',fr:'mentionner',en:'to mention',category:'Verbe',example:'Er hat deinen Namen erwähnt.',exampleFr:'Il a mentionné ton nom.'},
  {id:248,de:'erwarten',fr:'attendre, s’attendre à',en:'to expect',category:'Verbe',example:'Ich erwarte eine Antwort.',exampleFr:'J’attends une réponse.'},
  {id:249,de:'erzählen',fr:'raconter',en:'to tell, narrate',category:'Verbe',example:'Er erzählt eine interessante Geschichte.',exampleFr:'Il raconte une histoire intéressante.'},
  {id:250,de:'erziehen',fr:'éduquer, élever',en:'to educate, raise',category:'Verbe',example:'Sie erzieht ihre Kinder gut.',exampleFr:'Elle élève bien ses enfants.',forms:'erzieht – erzog – hat erzogen'},
  {id:251,de:'essen',fr:'manger',en:'to eat',category:'Verbe',example:'Wir essen um zwölf Uhr.',exampleFr:'Nous mangeons à midi.',forms:'isst – aß – hat gegessen'},
  {id:252,de:'etwas',fr:'quelque chose, un peu',en:'something, a little',category:'Pronom',example:'Möchtest du etwas trinken?',exampleFr:'Veux-tu boire quelque chose ?'},
  {id:253,de:'Europa',fr:'Europe',en:'Europe',category:'Nom',example:'Deutschland liegt in Europa.',exampleFr:'L’Allemagne se trouve en Europe.'},
  {id:254,de:'die Europäische Union',article:'die',plural:'—',fr:"l'Union européenne",en:'European Union',category:'Nom',example:'Marokko arbeitet mit der Europäischen Union zusammen.',exampleFr:'Le Maroc travaille avec l’Union européenne.'},
  {id:255,de:'die Fabrik',article:'die',plural:'die Fabriken',fr:"l'usine",en:'factory',category:'Nom',example:'Mein Vater arbeitet in einer Fabrik.',exampleFr:'Mon père travaille dans une usine.'},
  {id:256,de:'das Fach',article:'das',plural:'die Fächer',fr:'la matière, la spécialité',en:'subject, field',category:'Nom',example:'Deutsch ist mein Lieblingsfach.',exampleFr:'L’allemand est ma matière préférée.'},
  {id:257,de:'der Fachmann',article:'der',plural:'die Fachleute',fr:'le spécialiste',en:'expert, specialist',category:'Nom',example:'Fragen Sie einen Fachmann.',exampleFr:'Demandez à un spécialiste.'},
  {id:258,de:'fahren',fr:'aller en véhicule, conduire',en:'to drive, travel',category:'Verbe',example:'Wir fahren morgen nach Deutschland.',exampleFr:'Nous allons en Allemagne demain.',forms:'fährt – fuhr – ist gefahren'},
  {id:259,de:'die Fahrkarte',article:'die',plural:'die Fahrkarten',fr:'le billet de transport',en:'ticket',category:'Nom',example:'Ich kaufe eine Fahrkarte.',exampleFr:'J’achète un billet.'},
  {id:260,de:'das Fahrrad',article:'das',plural:'die Fahrräder',fr:'le vélo',en:'bicycle',category:'Nom',example:'Ich fahre jeden Tag Fahrrad.',exampleFr:'Je fais du vélo tous les jours.'},
  {id:261,de:'fallen',fr:'tomber',en:'to fall',category:'Verbe',example:'Das Glas ist auf den Boden gefallen.',exampleFr:'Le verre est tombé par terre.',forms:'fällt – fiel – ist gefallen'},
  {id:262,de:'falsch',fr:'faux',en:'wrong, false',category:'Adjectif',example:'Deine Antwort ist falsch.',exampleFr:'Ta réponse est fausse.'},
  {id:263,de:'die Familie',article:'die',plural:'die Familien',fr:'la famille',en:'family',category:'Nom',example:'Meine Familie ist groß.',exampleFr:'Ma famille est grande.'},
  {id:264,de:'die Farbe',article:'die',plural:'die Farben',fr:'la couleur',en:'colour',category:'Nom',example:'Was ist deine Lieblingsfarbe?',exampleFr:'Quelle est ta couleur préférée ?'},
  {id:265,de:'fast',fr:'presque',en:'almost',category:'Adverbe',example:'Ich bin fast fertig.',exampleFr:'J’ai presque terminé.'},
  {id:266,de:'faul',fr:'paresseux',en:'lazy',category:'Adjectif',example:'Heute bin ich ein bisschen faul.',exampleFr:'Aujourd’hui, je suis un peu paresseux.'},
  {id:267,de:'fehlen',fr:'manquer',en:'to be missing',category:'Verbe',example:'Du fehlst mir.',exampleFr:'Tu me manques.'},
  {id:268,de:'der Fehler',article:'der',plural:'die Fehler',fr:'la faute, l’erreur',en:'mistake',category:'Nom',example:'Jeder macht Fehler.',exampleFr:'Tout le monde fait des erreurs.'},
  {id:269,de:'feiern',fr:'fêter, célébrer',en:'to celebrate',category:'Verbe',example:'Wir feiern seinen Geburtstag.',exampleFr:'Nous fêtons son anniversaire.'},
  {id:270,de:'der Feiertag',article:'der',plural:'die Feiertage',fr:'le jour férié',en:'public holiday',category:'Nom',example:'Morgen ist ein Feiertag.',exampleFr:'Demain est un jour férié.'},
  {id:271,de:'das Fenster',article:'das',plural:'die Fenster',fr:'la fenêtre',en:'window',category:'Nom',example:'Mach bitte das Fenster auf.',exampleFr:'Ouvre la fenêtre, s’il te plaît.'},
  {id:272,de:'die Ferien',article:'die',plural:'—',fr:'les vacances',en:'holidays',category:'Nom',example:'Wir haben nächste Woche Ferien.',exampleFr:'Nous sommes en vacances la semaine prochaine.'},
  {id:273,de:'fernsehen',fr:'regarder la télévision',en:'to watch television',category:'Verbe',example:'Abends sehe ich gern fern.',exampleFr:'Le soir, j’aime regarder la télévision.',forms:'sieht fern – sah fern – hat ferngesehen',grammar:'Verbe séparable'},
  {id:274,de:'fertig',fr:'terminé, prêt',en:'finished, ready',category:'Adjectif',example:'Ich bin mit der Arbeit fertig.',exampleFr:'J’ai terminé le travail.'},
  {id:275,de:'feststellen',fr:'constater',en:'to determine, establish',category:'Verbe',example:'Wir haben einen Fehler festgestellt.',exampleFr:'Nous avons constaté une erreur.',grammar:'Verbe séparable'},
  {id:276,de:'das Feuer',article:'das',plural:'die Feuer',fr:'le feu',en:'fire',category:'Nom',example:'Das Feuer ist gefährlich.',exampleFr:'Le feu est dangereux.'},
  {id:277,de:'das Fieber',article:'das',plural:'—',fr:'la fièvre',en:'fever',category:'Nom',example:'Das Kind hat hohes Fieber.',exampleFr:'L’enfant a une forte fièvre.'},
  {id:278,de:'finden',fr:'trouver',en:'to find',category:'Verbe',example:'Ich finde meine Schlüssel nicht.',exampleFr:'Je ne trouve pas mes clés.',forms:'findet – fand – hat gefunden'},
  {id:279,de:'der Finger',article:'der',plural:'die Finger',fr:'le doigt',en:'finger',category:'Nom',example:'Ich habe mir den Finger verletzt.',exampleFr:'Je me suis blessé au doigt.'},
  {id:280,de:'das Fleisch',article:'das',plural:'—',fr:'la viande',en:'meat',category:'Nom',example:'Ich esse wenig Fleisch.',exampleFr:'Je mange peu de viande.'},
  {id:281,de:'fleißig',fr:'travailleur, appliqué',en:'hard-working',category:'Adjectif',example:'Sie ist eine fleißige Schülerin.',exampleFr:'C’est une élève travailleuse.'},
  {id:282,de:'fliegen',fr:'voler, voyager en avion',en:'to fly',category:'Verbe',example:'Wir fliegen nach Berlin.',exampleFr:'Nous prenons l’avion pour Berlin.',forms:'fliegt – flog – ist geflogen'},
  {id:283,de:'der Flug',article:'der',plural:'die Flüge',fr:'le vol',en:'flight',category:'Nom',example:'Der Flug dauert drei Stunden.',exampleFr:'Le vol dure trois heures.'},
  {id:284,de:'der Flughafen',article:'der',plural:'die Flughäfen',fr:"l'aéroport",en:'airport',category:'Nom',example:'Wir sind am Flughafen.',exampleFr:'Nous sommes à l’aéroport.'},
  {id:285,de:'das Flugzeug',article:'das',plural:'die Flugzeuge',fr:"l'avion",en:'airplane',category:'Nom',example:'Das Flugzeug landet bald.',exampleFr:'L’avion atterrit bientôt.'},
  {id:286,de:'folgen',fr:'suivre',en:'to follow',category:'Verbe',example:'Der Hund folgt mir.',exampleFr:'Le chien me suit.',grammar:'+ Dat.'},
  {id:287,de:'die Frage',article:'die',plural:'die Fragen',fr:'la question',en:'question',category:'Nom',example:'Ich habe eine Frage.',exampleFr:'J’ai une question.'},
  {id:288,de:'fragen',fr:'demander',en:'to ask',category:'Verbe',example:'Ich frage nach dem Preis.',exampleFr:'Je demande le prix.',grammar:'nach + Dat.'},
  {id:289,de:'die Frau',article:'die',plural:'die Frauen',fr:'la femme, Madame',en:'woman, Mrs',category:'Nom',example:'Frau Müller ist Lehrerin.',exampleFr:'Madame Müller est enseignante.'},
  {id:290,de:'die Freude',article:'die',plural:'die Freuden',fr:'la joie',en:'joy',category:'Nom',example:'Das macht mir große Freude.',exampleFr:'Cela me fait très plaisir.'},
  {id:291,de:'sich freuen auf',fr:'se réjouir de (à venir)',en:'to look forward to',category:'Expression',example:'Ich freue mich auf die Ferien.',exampleFr:'Je me réjouis des vacances.',grammar:'+ Akk.'},
  {id:292,de:'sich freuen über',fr:'être content de (déjà arrivé)',en:'to be pleased about',category:'Expression',example:'Ich freue mich über dein Geschenk.',exampleFr:'Je suis content de ton cadeau.',grammar:'+ Akk.'},
  {id:293,de:'freundlich',fr:'aimable',en:'friendly',category:'Adjectif',example:'Die Verkäuferin ist sehr freundlich.',exampleFr:'La vendeuse est très aimable.'},
  {id:294,de:'der Frieden',article:'der',plural:'—',fr:'la paix',en:'peace',category:'Nom',example:'Alle Menschen wünschen sich Frieden.',exampleFr:'Tous les êtres humains souhaitent la paix.'},
  {id:295,de:'froh',fr:'joyeux, content',en:'glad, happy',category:'Adjectif',example:'Ich bin froh, dich zu sehen.',exampleFr:'Je suis content de te voir.'},
  {id:296,de:'früh',fr:'tôt',en:'early',category:'Adverbe',example:'Ich stehe früh auf.',exampleFr:'Je me lève tôt.'},
  {id:297,de:'der Frühling',article:'der',plural:'die Frühlinge',fr:'le printemps',en:'spring',category:'Nom',example:'Im Frühling blühen die Blumen.',exampleFr:'Au printemps, les fleurs fleurissent.'},
  {id:298,de:'das Frühstück',article:'das',plural:'die Frühstücke',fr:'le petit-déjeuner',en:'breakfast',category:'Nom',example:'Das Frühstück ist fertig.',exampleFr:'Le petit-déjeuner est prêt.'},
  {id:299,de:'frühstücken',fr:'prendre le petit-déjeuner',en:'to have breakfast',category:'Verbe',example:'Wir frühstücken um sieben Uhr.',exampleFr:'Nous prenons le petit-déjeuner à sept heures.'},
  {id:300,de:'sich fühlen',fr:'se sentir',en:'to feel',category:'Verbe',example:'Ich fühle mich heute gut.',exampleFr:'Je me sens bien aujourd’hui.'},
  {id:301,de:'führen zu',fr:'mener à',en:'to lead to',category:'Expression',example:'Dieser Weg führt zum Bahnhof.',exampleFr:'Ce chemin mène à la gare.',grammar:'zu + Dat.'},
  {id:302,de:'der Führerschein',article:'der',plural:'die Führerscheine',fr:'le permis de conduire',en:'driving licence',category:'Nom',example:'Ich habe meinen Führerschein bestanden.',exampleFr:'J’ai réussi mon permis de conduire.'},
  {id:303,de:'fürchten',fr:'craindre',en:'to fear',category:'Verbe',example:'Sie fürchtet sich vor Hunden.',exampleFr:'Elle a peur des chiens.'},
  {id:304,de:'der Fuß',article:'der',plural:'die Füße',fr:'le pied',en:'foot',category:'Nom',example:'Ich gehe zu Fuß.',exampleFr:'Je vais à pied.'},
  {id:305,de:'die Fußgängerzone',article:'die',plural:'die Fußgängerzonen',fr:'la zone piétonne',en:'pedestrian zone',category:'Nom',example:'Autos dürfen nicht in die Fußgängerzone fahren.',exampleFr:'Les voitures ne peuvent pas entrer dans la zone piétonne.'},
  {id:306,de:'die Gabel',article:'die',plural:'die Gabeln',fr:'la fourchette',en:'fork',category:'Nom',example:'Kannst du mir eine Gabel geben?',exampleFr:'Peux-tu me donner une fourchette ?'},
  {id:307,de:'ganz',fr:'tout, entièrement',en:'whole, completely',category:'Adjectif',example:'Die ganze Familie ist hier.',exampleFr:'Toute la famille est ici.'},
  {id:308,de:'die Garage',article:'die',plural:'die Garagen',fr:'le garage',en:'garage',category:'Nom',example:'Das Auto steht in der Garage.',exampleFr:'La voiture est dans le garage.'},
  {id:309,de:'der Garten',article:'der',plural:'die Gärten',fr:'le jardin',en:'garden',category:'Nom',example:'Die Kinder spielen im Garten.',exampleFr:'Les enfants jouent dans le jardin.'},
  {id:310,de:'der Gast',article:'der',plural:'die Gäste',fr:"l'invité, le client",en:'guest',category:'Nom',example:'Heute haben wir viele Gäste.',exampleFr:'Aujourd’hui, nous avons beaucoup d’invités.'},
  {id:311,de:'geben',fr:'donner',en:'to give',category:'Verbe',example:'Kannst du mir bitte das Buch geben?',exampleFr:'Peux-tu me donner le livre, s’il te plaît ?',forms:'gibt – gab – hat gegeben',grammar:'+ Dat. + Akk.'},
  {id:312,de:'das Gebäude',article:'das',plural:'die Gebäude',fr:'le bâtiment',en:'building',category:'Nom',example:'Das Gebäude ist sehr alt.',exampleFr:'Le bâtiment est très ancien.'},
  {id:313,de:'die Geburt',article:'die',plural:'die Geburten',fr:'la naissance',en:'birth',category:'Nom',example:'Die Geburt war problemlos.',exampleFr:'L’accouchement s’est déroulé sans problème.'},
  {id:314,de:'der Geburtstag',article:'der',plural:'die Geburtstage',fr:"l'anniversaire",en:'birthday',category:'Nom',example:'Alles Gute zum Geburtstag!',exampleFr:'Joyeux anniversaire !'},
  {id:315,de:'der Gedanke',article:'der',plural:'die Gedanken',fr:'la pensée',en:'thought',category:'Nom',example:'Ich habe einen interessanten Gedanken.',exampleFr:'J’ai une pensée intéressante.'},
  {id:316,de:'das Gedicht',article:'das',plural:'die Gedichte',fr:'le poème',en:'poem',category:'Nom',example:'Sie liest ein Gedicht vor.',exampleFr:'Elle lit un poème à voix haute.'},
  {id:317,de:'die Gefahr',article:'die',plural:'die Gefahren',fr:'le danger',en:'danger',category:'Nom',example:'Das ist eine große Gefahr.',exampleFr:'C’est un grand danger.'},
  {id:318,de:'gefallen',fr:'plaire',en:'to please',category:'Verbe',example:'Das Bild gefällt mir.',exampleFr:'Cette image me plaît.',forms:'gefällt – gefiel – hat gefallen',grammar:'+ Dat.'},
  {id:319,de:'das Gefühl',article:'das',plural:'die Gefühle',fr:'le sentiment',en:'feeling',category:'Nom',example:'Ich habe ein gutes Gefühl.',exampleFr:'J’ai un bon pressentiment.'},
  {id:320,de:'die Gegend',article:'die',plural:'die Gegenden',fr:'la région, les environs',en:'region, area',category:'Nom',example:'Diese Gegend ist sehr schön.',exampleFr:'Cette région est très belle.'},
  {id:321,de:'das Gegenteil',article:'das',plural:'die Gegenteile',fr:'le contraire',en:'opposite',category:'Nom',example:'Das Gegenteil ist richtig.',exampleFr:'C’est le contraire qui est vrai.'},
  {id:322,de:'gegenüber',fr:'en face de',en:'opposite',category:'Préposition',example:'Die Bank ist dem Bahnhof gegenüber.',exampleFr:'La banque est en face de la gare.',grammar:'+ Dat.'},
  {id:323,de:'gehen',fr:'aller',en:'to go',category:'Verbe',example:'Ich gehe heute zur Arbeit.',exampleFr:'Je vais au travail aujourd’hui.',forms:'geht – ging – ist gegangen'},
  {id:324,de:'gehören',fr:'appartenir à',en:'to belong to',category:'Verbe',example:'Dieses Buch gehört mir.',exampleFr:'Ce livre m’appartient.',grammar:'+ Dat.'},
  {id:325,de:'die Gelegenheit',article:'die',plural:'die Gelegenheiten',fr:"l'occasion",en:'opportunity',category:'Nom',example:'Das ist eine gute Gelegenheit.',exampleFr:'C’est une bonne occasion.'},
  {id:326,de:'gelingen',fr:'réussir',en:'to succeed',category:'Verbe',example:'Es ist mir gelungen, die Prüfung zu bestehen.',exampleFr:'J’ai réussi à passer l’examen.',forms:'gelingt – gelang – ist gelungen',grammar:'+ Dat.'},
  {id:327,de:'gelten',fr:'valoir, être considéré comme',en:'to be valid, count',category:'Verbe',example:'Diese Regel gilt für alle.',exampleFr:'Cette règle vaut pour tous.',forms:'gilt – galt – hat gegolten'},
  {id:328,de:'gemeinsam',fr:'commun, ensemble',en:'together, shared',category:'Adjectif',example:'Wir haben ein gemeinsames Ziel.',exampleFr:'Nous avons un objectif commun.'},
  {id:329,de:'das Gemüse',article:'das',plural:'—',fr:'les légumes',en:'vegetables',category:'Nom',example:'Ich esse jeden Tag Gemüse.',exampleFr:'Je mange des légumes chaque jour.'},
  {id:330,de:'genau',fr:'exact, exactement',en:'exact, exactly',category:'Adjectif',example:'Das ist genau richtig.',exampleFr:'C’est tout à fait correct.'},
  {id:331,de:'genug',fr:'assez',en:'enough',category:'Adverbe',example:'Wir haben genug Zeit.',exampleFr:'Nous avons assez de temps.'},
  {id:332,de:'das Gepäck',article:'das',plural:'—',fr:'les bagages',en:'luggage',category:'Nom',example:'Mein Gepäck ist schwer.',exampleFr:'Mes bagages sont lourds.'},
  {id:333,de:'gerade',fr:'en ce moment, juste',en:'just, right now',category:'Adverbe',example:'Ich lerne gerade Deutsch.',exampleFr:'Je suis justement en train d’apprendre l’allemand.'},
  {id:334,de:'gern',fr:'volontiers, aimer faire',en:'gladly',category:'Adverbe',example:'Ich lese gern Bücher.',exampleFr:'J’aime lire des livres.'},
  {id:335,de:'das Geschäft',article:'das',plural:'die Geschäfte',fr:'le magasin, les affaires',en:'shop, business',category:'Nom',example:'Das Geschäft ist geschlossen.',exampleFr:'Le magasin est fermé.'},
  {id:336,de:'geschehen',fr:'se produire, arriver',en:'to happen',category:'Verbe',example:'Was ist geschehen?',exampleFr:'Que s’est-il passé ?',forms:'geschieht – geschah – ist geschehen'},
  {id:337,de:'das Geschenk',article:'das',plural:'die Geschenke',fr:'le cadeau',en:'present, gift',category:'Nom',example:'Vielen Dank für das Geschenk.',exampleFr:'Merci beaucoup pour le cadeau.'},
  {id:338,de:'die Geschichte',article:'die',plural:'die Geschichten',fr:"l'histoire",en:'story, history',category:'Nom',example:'Er erzählt eine Geschichte.',exampleFr:'Il raconte une histoire.'},
  {id:339,de:'das Geschirr',article:'das',plural:'—',fr:'la vaisselle',en:'dishes',category:'Nom',example:'Ich muss das Geschirr spülen.',exampleFr:'Je dois faire la vaisselle.'},
  {id:340,de:'die Geschwister',article:'die',plural:'—',fr:'les frères et sœurs',en:'siblings',category:'Nom',example:'Ich habe drei Geschwister.',exampleFr:'J’ai trois frères et sœurs.'},
  {id:341,de:'das Gesetz',article:'das',plural:'die Gesetze',fr:'la loi',en:'law',category:'Nom',example:'Man muss die Gesetze beachten.',exampleFr:'Il faut respecter les lois.'},
  {id:342,de:'das Gesicht',article:'das',plural:'die Gesichter',fr:'le visage',en:'face',category:'Nom',example:'Sie hat ein freundliches Gesicht.',exampleFr:'Elle a un visage sympathique.'},
  {id:343,de:'das Gespräch',article:'das',plural:'die Gespräche',fr:'la conversation',en:'conversation',category:'Nom',example:'Wir hatten ein langes Gespräch.',exampleFr:'Nous avons eu une longue conversation.'},
  {id:344,de:'gesund',fr:'en bonne santé',en:'healthy',category:'Adjectif',example:'Obst und Gemüse sind gesund.',exampleFr:'Les fruits et les légumes sont bons pour la santé.'},
  {id:345,de:'die Gesundheit',article:'die',plural:'—',fr:'la santé',en:'health',category:'Nom',example:'Gesundheit ist sehr wichtig.',exampleFr:'La santé est très importante.'},
  {id:346,de:'gewinnen',fr:'gagner',en:'to win',category:'Verbe',example:'Unsere Mannschaft hat gewonnen.',exampleFr:'Notre équipe a gagné.',forms:'gewinnt – gewann – hat gewonnen'},
  {id:347,de:'sich gewöhnen an',fr:"s'habituer à",en:'to get used to',category:'Expression',example:'Ich habe mich an das Klima gewöhnt.',exampleFr:"Je me suis habitué au climat.",grammar:'+ Akk.'},
  {id:348,de:'glauben',fr:'croire',en:'to believe',category:'Verbe',example:'Ich glaube dir.',exampleFr:'Je te crois.',grammar:'+ Dat.'},
  {id:349,de:'gleich',fr:'tout de suite, égal',en:'soon, equal',category:'Adverbe',example:'Ich komme gleich.',exampleFr:'J’arrive tout de suite.'},
  {id:350,de:'gleichzeitig',fr:'simultanément',en:'at the same time',category:'Adverbe',example:'Wir sind gleichzeitig angekommen.',exampleFr:'Nous sommes arrivés en même temps.'},
  {id:351,de:'das Glück',article:'das',plural:'—',fr:'la chance, le bonheur',en:'luck, happiness',category:'Nom',example:'Ich wünsche dir viel Glück.',exampleFr:'Je te souhaite beaucoup de chance.'},
  {id:352,de:'glücklich',fr:'heureux',en:'happy',category:'Adjectif',example:'Sie ist sehr glücklich.',exampleFr:'Elle est très heureuse.'},
  {id:353,de:'gratulieren',fr:'féliciter',en:'to congratulate',category:'Verbe',example:'Ich gratuliere dir zum Geburtstag.',exampleFr:'Je te félicite pour ton anniversaire.',grammar:'+ Dat.'},
  {id:354,de:'greifen',fr:'saisir',en:'to grab',category:'Verbe',example:'Er greift nach seiner Tasche.',exampleFr:'Il saisit son sac.',forms:'greift – griff – hat gegriffen'},
  {id:355,de:'die Grenze',article:'die',plural:'die Grenzen',fr:'la frontière',en:'border',category:'Nom',example:'Wir fahren über die Grenze.',exampleFr:'Nous traversons la frontière.'},
  {id:356,de:'groß',fr:'grand',en:'big, tall',category:'Adjectif',example:'Das Haus ist sehr groß.',exampleFr:'La maison est très grande.'},
  {id:357,de:'die Großeltern',article:'die',plural:'—',fr:'les grands-parents',en:'grandparents',category:'Nom',example:'Meine Großeltern wohnen auf dem Land.',exampleFr:'Mes grands-parents habitent à la campagne.'},
  {id:358,de:'der Grund',article:'der',plural:'die Gründe',fr:'la raison, la cause',en:'reason',category:'Nom',example:'Aus welchem Grund bist du hier?',exampleFr:'Pour quelle raison es-tu ici ?'},
  {id:359,de:'gründen',fr:'fonder',en:'to found',category:'Verbe',example:'Sie wollen eine Firma gründen.',exampleFr:'Ils veulent fonder une entreprise.'},
  {id:360,de:'grüßen',fr:'saluer',en:'to greet',category:'Verbe',example:'Bitte grüß deine Eltern von mir.',exampleFr:'Salue tes parents de ma part.'},
  {id:361,de:'das Gymnasium',article:'das',plural:'die Gymnasien',fr:'le lycée',en:'grammar school',category:'Nom',example:'Meine Tochter geht aufs Gymnasium.',exampleFr:'Ma fille va au lycée.'},
  {id:362,de:'das Haar',article:'das',plural:'die Haare',fr:'le cheveu',en:'hair',category:'Nom',example:'Sie hat lange Haare.',exampleFr:'Elle a les cheveux longs.'},
  {id:363,de:'die Hälfte',article:'die',plural:'die Hälften',fr:'la moitié',en:'half',category:'Nom',example:'Die Hälfte der Klasse ist abwesend.',exampleFr:'La moitié de la classe est absente.'},
  {id:364,de:'der Hals',article:'der',plural:'die Hälse',fr:'le cou, la gorge',en:'neck, throat',category:'Nom',example:'Ich habe Halsschmerzen.',exampleFr:"J'ai mal à la gorge."},
  {id:365,de:'halten',fr:'tenir, s’arrêter',en:'to hold, stop',category:'Verbe',example:'Der Bus hält an der Haltestelle.',exampleFr:"Le bus s'arrête à l'arrêt.",forms:'hält – hielt – hat gehalten'},
  {id:366,de:'halten für',fr:'prendre pour',en:'to consider as',category:'Expression',example:'Er hält sich für sehr intelligent.',exampleFr:'Il se prend pour quelqu’un de très intelligent.',grammar:'+ Akk.'},
  {id:367,de:'die Hand',article:'die',plural:'die Hände',fr:'la main',en:'hand',category:'Nom',example:'Gib mir bitte deine Hand.',exampleFr:'Donne-moi ta main, s’il te plaît.'},
  {id:368,de:'handeln',fr:'agir, s’agir de',en:'to act, deal with',category:'Verbe',example:'Es handelt sich um ein wichtiges Thema.',exampleFr:'Il s’agit d’un sujet important.'},
  {id:369,de:'der Handschuh',article:'der',plural:'die Handschuhe',fr:'le gant',en:'glove',category:'Nom',example:'Im Winter trage ich Handschuhe.',exampleFr:'En hiver, je porte des gants.'},
  {id:370,de:'hassen',fr:'haïr',en:'to hate',category:'Verbe',example:'Ich hasse Lügen.',exampleFr:'Je déteste les mensonges.'},
  {id:371,de:'häufig',fr:'fréquent, fréquemment',en:'frequent, frequently',category:'Adverbe',example:'Er kommt häufig zu spät.',exampleFr:'Il arrive fréquemment en retard.'},
  {id:372,de:'das Haus',article:'das',plural:'die Häuser',fr:'la maison',en:'house',category:'Nom',example:'Wir wohnen in einem großen Haus.',exampleFr:'Nous habitons dans une grande maison.'},
  {id:373,de:'die Hausaufgabe',article:'die',plural:'die Hausaufgaben',fr:'le devoir scolaire',en:'homework',category:'Nom',example:'Ich mache meine Hausaufgaben.',exampleFr:'Je fais mes devoirs.'},
  {id:374,de:'die Haut',article:'die',plural:'—',fr:'la peau',en:'skin',category:'Nom',example:'Die Haut braucht Pflege.',exampleFr:'La peau a besoin de soins.'},
  {id:375,de:'heben',fr:'lever, soulever',en:'to lift',category:'Verbe',example:'Kannst du die Kiste heben?',exampleFr:'Peux-tu soulever la caisse ?',forms:'hebt – hob – hat gehoben'},
  {id:376,de:'heiraten',fr:'épouser, se marier',en:'to marry',category:'Verbe',example:'Sie möchten nächstes Jahr heiraten.',exampleFr:'Ils souhaitent se marier l’année prochaine.'},
  {id:377,de:'heiß',fr:'chaud',en:'hot',category:'Adjectif',example:'Der Kaffee ist zu heiß.',exampleFr:'Le café est trop chaud.'},
  {id:378,de:'heißen',fr:"s'appeler",en:'to be called',category:'Verbe',example:'Wie heißt du?',exampleFr:'Comment t’appelles-tu ?',forms:'heißt – hieß – hat geheißen'},
  {id:379,de:'helfen',fr:'aider',en:'to help',category:'Verbe',example:'Kannst du mir bitte helfen?',exampleFr:'Peux-tu m’aider, s’il te plaît ?',forms:'hilft – half – hat geholfen',grammar:'+ Dat.'},
  {id:380,de:'der Herbst',article:'der',plural:'die Herbste',fr:"l'automne",en:'autumn',category:'Nom',example:'Im Herbst regnet es oft.',exampleFr:'En automne, il pleut souvent.'},
  {id:381,de:'herstellen',fr:'fabriquer',en:'to manufacture',category:'Verbe',example:'Diese Medikamente werden in Deutschland hergestellt.',exampleFr:'Ces médicaments sont fabriqués en Allemagne.',grammar:'Verbe séparable'},
  {id:382,de:'das Herz',article:'das',plural:'die Herzen',fr:'le cœur',en:'heart',category:'Nom',example:'Mein Herz schlägt schnell.',exampleFr:'Mon cœur bat vite.'},
  {id:383,de:'die Hilfe',article:'die',plural:'die Hilfen',fr:"l'aide",en:'help',category:'Nom',example:'Danke für deine Hilfe.',exampleFr:'Merci pour ton aide.'},
  {id:384,de:'hinweisen auf',fr:'attirer l’attention sur',en:'to point out',category:'Expression',example:'Ich möchte auf einen Fehler hinweisen.',exampleFr:'Je voudrais attirer l’attention sur une erreur.',grammar:'+ Akk.'},
  {id:385,de:'höchstens',fr:'tout au plus',en:'at most',category:'Adverbe',example:'Die Fahrt dauert höchstens eine Stunde.',exampleFr:'Le trajet dure une heure au maximum.'},
  {id:386,de:'hoffen',fr:'espérer',en:'to hope',category:'Verbe',example:'Ich hoffe, dass du bald kommst.',exampleFr:'J’espère que tu viendras bientôt.'},
  {id:387,de:'die Hoffnung',article:'die',plural:'die Hoffnungen',fr:"l'espoir",en:'hope',category:'Nom',example:'Gib die Hoffnung nicht auf.',exampleFr:'Ne perds pas espoir.'},
  {id:388,de:'höflich',fr:'poli',en:'polite',category:'Adjectif',example:'Sei bitte höflich.',exampleFr:'Sois poli, s’il te plaît.'},
  {id:389,de:'holen',fr:'aller chercher',en:'to fetch',category:'Verbe',example:'Ich hole dir ein Glas Wasser.',exampleFr:'Je vais te chercher un verre d’eau.'},
  {id:390,de:'der Hunger',article:'der',plural:'—',fr:'la faim',en:'hunger',category:'Nom',example:'Ich habe großen Hunger.',exampleFr:'J’ai très faim.'},
  {id:391,de:'husten',fr:'tousser',en:'to cough',category:'Verbe',example:'Das Kind hustet viel.',exampleFr:'L’enfant tousse beaucoup.'},
  {id:392,de:'die Idee',article:'die',plural:'die Ideen',fr:"l'idée",en:'idea',category:'Nom',example:'Das ist eine gute Idee.',exampleFr:'C’est une bonne idée.'},
  {id:393,de:'immer',fr:'toujours',en:'always',category:'Adverbe',example:'Er kommt immer pünktlich.',exampleFr:'Il arrive toujours à l’heure.'},
  {id:394,de:'die Information',article:'die',plural:'die Informationen',fr:"l'information",en:'information',category:'Nom',example:'Ich brauche mehr Informationen.',exampleFr:'J’ai besoin de plus d’informations.'},
  {id:395,de:'informieren',fr:'informer',en:'to inform',category:'Verbe',example:'Bitte informieren Sie mich.',exampleFr:'Veuillez m’informer.'},
  {id:396,de:'sich interessieren für',fr:"s'intéresser à",en:'to be interested in',category:'Expression',example:'Ich interessiere mich für Medizin.',exampleFr:"Je m'intéresse à la médecine.",grammar:'+ Akk.'},
  {id:397,de:'inzwischen',fr:'entre-temps',en:'meanwhile',category:'Adverbe',example:'Inzwischen ist es spät geworden.',exampleFr:'Entre-temps, il se fait tard.'},
  {id:398,de:'sich irren',fr:'se tromper',en:'to be mistaken',category:'Verbe',example:'Ich habe mich geirrt.',exampleFr:'Je me suis trompé.'},
  {id:399,de:'das Jahr',article:'das',plural:'die Jahre',fr:"l'année",en:'year',category:'Nom',example:'Nächstes Jahr fahre ich nach Deutschland.',exampleFr:'L’année prochaine, je vais en Allemagne.'},
  {id:400,de:'jeder',fr:'chaque, chacun',en:'every, each',category:'Pronom',example:'Jeder Mensch ist anders.',exampleFr:'Chaque personne est différente.'},
  {id:401,de:'jemand',fr:"quelqu'un",en:'someone',category:'Pronom',example:'Ist jemand zu Hause?',exampleFr:'Y a-t-il quelqu’un à la maison ?'},
  {id:402,de:'jetzt',fr:'maintenant',en:'now',category:'Adverbe',example:'Ich muss jetzt gehen.',exampleFr:'Je dois partir maintenant.'},
  {id:403,de:'die Jugend',article:'die',plural:'—',fr:'la jeunesse',en:'youth',category:'Nom',example:'Die Jugend ist wichtig für die Zukunft.',exampleFr:'La jeunesse est importante pour l’avenir.'},
  {id:404,de:'der Junge',article:'der',plural:'die Jungen',fr:'le garçon',en:'boy',category:'Nom',example:'Der Junge spielt Fußball.',exampleFr:'Le garçon joue au football.'},
  {id:405,de:'kämpfen für',fr:'se battre pour',en:'to fight for',category:'Expression',example:'Sie kämpfen für ihre Rechte.',exampleFr:'Ils se battent pour leurs droits.',grammar:'für + Akk.'},
  {id:406,de:'die Karte',article:'die',plural:'die Karten',fr:'la carte',en:'card, map',category:'Nom',example:'Ich brauche eine Karte von Berlin.',exampleFr:'J’ai besoin d’une carte de Berlin.'},
  {id:407,de:'die Kartoffel',article:'die',plural:'die Kartoffeln',fr:'la pomme de terre',en:'potato',category:'Nom',example:'Wir essen heute Kartoffeln.',exampleFr:'Nous mangeons des pommes de terre aujourd’hui.'},
  {id:408,de:'kaufen',fr:'acheter',en:'to buy',category:'Verbe',example:'Ich kaufe ein neues Handy.',exampleFr:'J’achète un nouveau téléphone.'},
  {id:409,de:'kaum',fr:'à peine',en:'hardly',category:'Adverbe',example:'Ich habe kaum Zeit.',exampleFr:'J’ai à peine le temps.'},
  {id:410,de:'kennen',fr:'connaître',en:'to know',category:'Verbe',example:'Kennst du diesen Mann?',exampleFr:'Connais-tu cet homme ?',forms:'kennt – kannte – hat gekannt'},
  {id:411,de:'kennenlernen',fr:'faire la connaissance de',en:'to get to know',category:'Verbe',example:'Ich habe sie in Berlin kennengelernt.',exampleFr:'Je l’ai connue à Berlin.',grammar:'Verbe séparable'},
  {id:412,de:'das Kind',article:'das',plural:'die Kinder',fr:"l'enfant",en:'child',category:'Nom',example:'Das Kind spielt im Garten.',exampleFr:'L’enfant joue dans le jardin.'},
  {id:413,de:'die Kirche',article:'die',plural:'die Kirchen',fr:"l'église",en:'church',category:'Nom',example:'Die Kirche ist sehr alt.',exampleFr:'L’église est très ancienne.'},
  {id:414,de:'klappen',fr:'marcher, fonctionner',en:'to work out',category:'Verbe',example:'Alles hat gut geklappt.',exampleFr:'Tout s’est bien passé.'},
  {id:415,de:'klar',fr:'clair',en:'clear',category:'Adjectif',example:'Ist alles klar?',exampleFr:'Tout est clair ?'},
  {id:416,de:'klug',fr:'intelligent',en:'clever',category:'Adjectif',example:'Das war eine kluge Entscheidung.',exampleFr:'C’était une décision intelligente.'},
  {id:417,de:'kochen',fr:'cuisiner, bouillir',en:'to cook, boil',category:'Verbe',example:'Ich koche gern.',exampleFr:'J’aime cuisiner.'},
  {id:418,de:'kommen',fr:'venir',en:'to come',category:'Verbe',example:'Wann kommst du nach Hause?',exampleFr:'Quand rentres-tu à la maison ?',forms:'kommt – kam – ist gekommen'},
  {id:419,de:'können',fr:'pouvoir, savoir faire',en:'can, be able to',category:'Verbe',example:'Ich kann Deutsch sprechen.',exampleFr:'Je sais parler allemand.',forms:'kann – konnte – hat gekonnt'},
  {id:420,de:'kosten',fr:'coûter',en:'to cost',category:'Verbe',example:'Wie viel kostet das?',exampleFr:'Combien cela coûte-t-il ?'},
  {id:421,de:'die Kraft',article:'die',plural:'die Kräfte',fr:'la force',en:'strength',category:'Nom',example:'Er hat viel Kraft.',exampleFr:'Il a beaucoup de force.'},
  {id:422,de:'krank',fr:'malade',en:'ill, sick',category:'Adjectif',example:'Ich bin heute krank.',exampleFr:'Je suis malade aujourd’hui.'},
  {id:423,de:'das Krankenhaus',article:'das',plural:'die Krankenhäuser',fr:"l'hôpital",en:'hospital',category:'Nom',example:'Sie arbeitet im Krankenhaus.',exampleFr:'Elle travaille à l’hôpital.'},
  {id:424,de:'die Krankenschwester',article:'die',plural:'die Krankenschwestern',fr:"l'infirmière",en:'nurse',category:'Nom',example:'Die Krankenschwester hilft dem Patienten.',exampleFr:'L’infirmière aide le patient.'},
  {id:425,de:'die Kreuzung',article:'die',plural:'die Kreuzungen',fr:'le carrefour',en:'crossroads',category:'Nom',example:'An der Kreuzung musst du rechts abbiegen.',exampleFr:'Au carrefour, tu dois tourner à droite.'},
  {id:426,de:'die Küche',article:'die',plural:'die Küchen',fr:'la cuisine',en:'kitchen',category:'Nom',example:'Die Küche ist sehr modern.',exampleFr:'La cuisine est très moderne.'},
  {id:427,de:'sich kümmern um',fr:"s'occuper de",en:'to take care of',category:'Expression',example:'Sie kümmert sich um ihre Mutter.',exampleFr:'Elle s’occupe de sa mère.',grammar:'+ Akk.'},
  {id:428,de:'die Kunst',article:'die',plural:'die Künste',fr:"l'art",en:'art',category:'Nom',example:'Ich interessiere mich für Kunst.',exampleFr:'Je m’intéresse à l’art.'},
  {id:429,de:'lachen',fr:'rire',en:'to laugh',category:'Verbe',example:'Die Kinder lachen viel.',exampleFr:'Les enfants rient beaucoup.'},
  {id:430,de:'die Lage',article:'die',plural:'die Lagen',fr:'la situation',en:'situation, location',category:'Nom',example:'Die Lage ist schwierig.',exampleFr:'La situation est difficile.'},
  {id:431,de:'landen',fr:'atterrir',en:'to land',category:'Verbe',example:'Das Flugzeug landet pünktlich.',exampleFr:'L’avion atterrit à l’heure.'},
  {id:432,de:'die Landschaft',article:'die',plural:'die Landschaften',fr:'le paysage',en:'landscape',category:'Nom',example:'Die Landschaft ist wunderschön.',exampleFr:'Le paysage est magnifique.'},
  {id:433,de:'langweilig',fr:'ennuyeux',en:'boring',category:'Adjectif',example:'Der Film ist langweilig.',exampleFr:'Le film est ennuyeux.'},
  {id:434,de:'lassen',fr:'laisser',en:'to let, leave',category:'Verbe',example:'Lass mich bitte in Ruhe!',exampleFr:'Laisse-moi tranquille, s’il te plaît !',forms:'lässt – ließ – hat gelassen'},
  {id:435,de:'laufen',fr:'marcher, courir, fonctionner',en:'to walk, run, work',category:'Verbe',example:'Der Motor läuft gut.',exampleFr:'Le moteur fonctionne bien.',forms:'läuft – lief – ist gelaufen'},
  {id:436,de:'laut',fr:'fort (sonore)',en:'loud',category:'Adjectif',example:'Bitte nicht so laut sprechen.',exampleFr:'Ne parlez pas si fort, s’il vous plaît.'},
  {id:437,de:'leben',fr:'vivre',en:'to live',category:'Verbe',example:'Ich lebe in Marokko.',exampleFr:'Je vis au Maroc.'},
  {id:438,de:'das Leben',article:'das',plural:'die Leben',fr:'la vie',en:'life',category:'Nom',example:'Das Leben ist schön.',exampleFr:'La vie est belle.'},
  {id:439,de:'der Lebenslauf',article:'der',plural:'die Lebensläufe',fr:'le curriculum vitæ',en:'CV, résumé',category:'Nom',example:'Bitte schicken Sie Ihren Lebenslauf.',exampleFr:'Veuillez envoyer votre CV.'},
  {id:440,de:'lecker',fr:'délicieux',en:'delicious',category:'Adjectif',example:'Das Essen schmeckt lecker.',exampleFr:'Le repas est délicieux.'},
  {id:441,de:'leer',fr:'vide',en:'empty',category:'Adjectif',example:'Die Flasche ist leer.',exampleFr:'La bouteille est vide.'},
  {id:442,de:'legen',fr:'poser, mettre',en:'to put, lay',category:'Verbe',example:'Leg das Buch auf den Tisch.',exampleFr:'Pose le livre sur la table.'},
  {id:443,de:'leiden unter',fr:'souffrir de',en:'to suffer from',category:'Expression',example:'Sie leidet unter dem Lärm.',exampleFr:'Elle souffre du bruit.',grammar:'+ Dat.'},
  {id:444,de:'leihen',fr:'prêter, emprunter',en:'to lend, borrow',category:'Verbe',example:'Kannst du mir zehn Euro leihen?',exampleFr:'Peux-tu me prêter dix euros ?',forms:'leiht – lieh – hat geliehen'},
  {id:445,de:'lernen',fr:'apprendre',en:'to learn',category:'Verbe',example:'Ich lerne jeden Tag Deutsch.',exampleFr:'J’apprends l’allemand chaque jour.'},
  {id:446,de:'lesen',fr:'lire',en:'to read',category:'Verbe',example:'Sie liest jeden Abend.',exampleFr:'Elle lit chaque soir.',forms:'liest – las – hat gelesen'},
  {id:447,de:'die Leute',article:'die',plural:'—',fr:'les gens',en:'people',category:'Nom',example:'Viele Leute wohnen hier.',exampleFr:'Beaucoup de gens habitent ici.'},
  {id:448,de:'die Liebe',article:'die',plural:'—',fr:"l'amour",en:'love',category:'Nom',example:'Liebe ist wichtig.',exampleFr:'L’amour est important.'},
  {id:449,de:'liegen',fr:'être couché, se trouver',en:'to lie, be located',category:'Verbe',example:'Berlin liegt in Deutschland.',exampleFr:'Berlin se trouve en Allemagne.',forms:'liegt – lag – hat gelegen'},
  {id:450,de:'links',fr:'à gauche',en:'left',category:'Adverbe',example:'Die Apotheke ist links.',exampleFr:'La pharmacie est à gauche.'},
  {id:451,de:'die Lösung',article:'die',plural:'die Lösungen',fr:'la solution',en:'solution',category:'Nom',example:'Wir suchen eine Lösung.',exampleFr:'Nous cherchons une solution.'},
  {id:452,de:'lügen',fr:'mentir',en:'to lie',category:'Verbe',example:'Du sollst nicht lügen.',exampleFr:'Tu ne dois pas mentir.',forms:'lügt – log – hat gelogen'},
  {id:453,de:'die Macht',article:'die',plural:'—',fr:'le pouvoir',en:'power',category:'Nom',example:'Macht kann gefährlich sein.',exampleFr:'Le pouvoir peut être dangereux.'},
  {id:454,de:'das Mädchen',article:'das',plural:'die Mädchen',fr:'la jeune fille',en:'girl',category:'Nom',example:'Das Mädchen spielt Klavier.',exampleFr:'La jeune fille joue du piano.'},
  {id:455,de:'die Mahlzeit',article:'die',plural:'die Mahlzeiten',fr:'le repas',en:'meal',category:'Nom',example:'Die Mahlzeit ist fertig.',exampleFr:'Le repas est prêt.'},
  {id:456,de:'manchmal',fr:'parfois',en:'sometimes',category:'Adverbe',example:'Manchmal gehe ich spazieren.',exampleFr:'Parfois, je vais me promener.'},
  {id:457,de:'die Mannschaft',article:'die',plural:'die Mannschaften',fr:"l'équipe",en:'team',category:'Nom',example:'Unsere Mannschaft hat gewonnen.',exampleFr:'Notre équipe a gagné.'},
  {id:458,de:'die Meinung',article:'die',plural:'die Meinungen',fr:"l'avis, l'opinion",en:'opinion',category:'Nom',example:'Meiner Meinung nach ist das richtig.',exampleFr:'À mon avis, c’est correct.'},
  {id:459,de:'melden',fr:'signaler, annoncer',en:'to report, register',category:'Verbe',example:'Bitte melden Sie sich im Büro.',exampleFr:'Veuillez vous présenter au bureau.'},
  {id:460,de:'der Mensch',article:'der',plural:'die Menschen',fr:"l'être humain",en:'human being',category:'Nom',example:'Jeder Mensch ist anders.',exampleFr:'Chaque être humain est différent.'},
  {id:461,de:'merken',fr:'remarquer, retenir',en:'to notice, remember',category:'Verbe',example:'Ich habe den Fehler nicht bemerkt.',exampleFr:'Je n’ai pas remarqué l’erreur.'},
  {id:462,de:'messen',fr:'mesurer',en:'to measure',category:'Verbe',example:'Der Arzt misst meinen Blutdruck.',exampleFr:'Le médecin mesure ma tension.',forms:'misst – maß – hat gemessen'},
  {id:463,de:'die Miete',article:'die',plural:'die Mieten',fr:'le loyer',en:'rent',category:'Nom',example:'Die Miete ist sehr hoch.',exampleFr:'Le loyer est très élevé.'},
  {id:464,de:'mieten',fr:'louer',en:'to rent',category:'Verbe',example:'Wir möchten eine Wohnung mieten.',exampleFr:'Nous souhaitons louer un appartement.'},
  {id:465,de:'die Möglichkeit',article:'die',plural:'die Möglichkeiten',fr:'la possibilité',en:'possibility',category:'Nom',example:'Gibt es eine andere Möglichkeit?',exampleFr:'Existe-t-il une autre possibilité ?'},
  {id:466,de:'möglich',fr:'possible',en:'possible',category:'Adjectif',example:'Alles ist möglich.',exampleFr:'Tout est possible.'},
  {id:467,de:'müde',fr:'fatigué',en:'tired',category:'Adjectif',example:'Ich bin sehr müde.',exampleFr:'Je suis très fatigué.'},
  {id:468,de:'der Mut',article:'der',plural:'—',fr:'le courage',en:'courage',category:'Nom',example:'Du brauchst Mut.',exampleFr:'Tu as besoin de courage.'},
  {id:469,de:'die Nachricht',article:'die',plural:'die Nachrichten',fr:'la nouvelle, le message',en:'news, message',category:'Nom',example:'Ich habe eine gute Nachricht.',exampleFr:'J’ai une bonne nouvelle.'},
  {id:470,de:'nachdenken über',fr:'réfléchir à',en:'to think about',category:'Expression',example:'Ich muss über deine Frage nachdenken.',exampleFr:'Je dois réfléchir à ta question.',grammar:'+ Akk.'},
  {id:471,de:'nachdem',fr:'après que',en:'after',category:'Conjonction',example:'Nachdem ich gegessen hatte, ging ich spazieren.',exampleFr:'Après avoir mangé, je suis allé me promener.',grammar:'Verbe conjugué à la fin'},
  {id:472,de:'der Nachmittag',article:'der',plural:'die Nachmittage',fr:"l'après-midi",en:'afternoon',category:'Nom',example:'Am Nachmittag habe ich Zeit.',exampleFr:'J’ai du temps l’après-midi.'},
  {id:473,de:'die Nacht',article:'die',plural:'die Nächte',fr:'la nuit',en:'night',category:'Nom',example:'Gute Nacht!',exampleFr:'Bonne nuit !'},
  {id:474,de:'die Nähe',article:'die',plural:'—',fr:'la proximité',en:'vicinity',category:'Nom',example:'Ich wohne in der Nähe des Bahnhofs.',exampleFr:'J’habite près de la gare.'},
  {id:475,de:'der Name',article:'der',plural:'die Namen',fr:'le nom',en:'name',category:'Nom',example:'Wie ist Ihr Name?',exampleFr:'Quel est votre nom ?'},
  {id:476,de:'natürlich',fr:'naturellement, bien sûr',en:'naturally, of course',category:'Adverbe',example:'Natürlich helfe ich dir.',exampleFr:'Bien sûr, je t’aide.'},
  {id:477,de:'nehmen',fr:'prendre',en:'to take',category:'Verbe',example:'Ich nehme den Bus.',exampleFr:'Je prends le bus.',forms:'nimmt – nahm – hat genommen'},
  {id:478,de:'nennen',fr:'nommer',en:'to name',category:'Verbe',example:'Nennen Sie bitte Ihren Namen.',exampleFr:'Veuillez donner votre nom.',forms:'nennt – nannte – hat genannt'},
  {id:479,de:'nervös',fr:'nerveux',en:'nervous',category:'Adjectif',example:'Vor der Prüfung bin ich nervös.',exampleFr:'Je suis nerveux avant l’examen.'},
  {id:480,de:'nett',fr:'gentil, agréable',en:'nice, kind',category:'Adjectif',example:'Deine Kollegin ist sehr nett.',exampleFr:'Ta collègue est très gentille.'},
  {id:481,de:'neugierig',fr:'curieux',en:'curious',category:'Adjectif',example:'Das Kind ist sehr neugierig.',exampleFr:'L’enfant est très curieux.'},
  {id:482,de:'die Neuigkeit',article:'die',plural:'die Neuigkeiten',fr:'la nouveauté',en:'news, novelty',category:'Nom',example:'Ich habe eine Neuigkeit für dich.',exampleFr:'J’ai une nouvelle pour toi.'},
  {id:483,de:'nötig',fr:'nécessaire',en:'necessary',category:'Adjectif',example:'Das ist nicht nötig.',exampleFr:'Ce n’est pas nécessaire.'},
  {id:484,de:'notieren',fr:'noter',en:'to note down',category:'Verbe',example:'Bitte notieren Sie die Adresse.',exampleFr:'Veuillez noter l’adresse.'},
  {id:485,de:'nutzen',fr:'utiliser, profiter de',en:'to use, benefit from',category:'Verbe',example:'Ich nutze die Zeit zum Lernen.',exampleFr:'Je profite du temps pour étudier.'},
  {id:486,de:'nützlich',fr:'utile',en:'useful',category:'Adjectif',example:'Dieses Wörterbuch ist sehr nützlich.',exampleFr:'Ce dictionnaire est très utile.'},
  {id:487,de:'oben',fr:'en haut',en:'above, upstairs',category:'Adverbe',example:'Meine Wohnung ist oben.',exampleFr:'Mon appartement est en haut.'},
  {id:488,de:'das Obst',article:'das',plural:'—',fr:'les fruits',en:'fruit',category:'Nom',example:'Ich esse jeden Tag Obst.',exampleFr:'Je mange des fruits chaque jour.'},
  {id:489,de:'offensichtlich',fr:'évident, manifestement',en:'obvious, evidently',category:'Adverbe',example:'Offensichtlich hat er keine Zeit.',exampleFr:'Manifestement, il n’a pas le temps.'},
  {id:490,de:'öffentlich',fr:'public',en:'public',category:'Adjectif',example:'Das ist ein öffentliches Gebäude.',exampleFr:'C’est un bâtiment public.'},
  {id:491,de:'oft',fr:'souvent',en:'often',category:'Adverbe',example:'Ich gehe oft spazieren.',exampleFr:'Je vais souvent me promener.'},
  {id:492,de:'das Ohr',article:'das',plural:'die Ohren',fr:"l'oreille",en:'ear',category:'Nom',example:'Mein rechtes Ohr tut weh.',exampleFr:'J’ai mal à l’oreille droite.'},
  {id:493,de:'das Opfer',article:'das',plural:'die Opfer',fr:'la victime',en:'victim',category:'Nom',example:'Das Opfer wurde ins Krankenhaus gebracht.',exampleFr:'La victime a été transportée à l’hôpital.'},
  {id:494,de:'optimistisch',fr:'optimiste',en:'optimistic',category:'Adjectif',example:'Wir bleiben optimistisch.',exampleFr:'Nous restons optimistes.'},
  {id:495,de:'die Ordnung',article:'die',plural:'—',fr:"l'ordre",en:'order',category:'Nom',example:'Alles ist in Ordnung.',exampleFr:'Tout va bien.'},
  {id:496,de:'der Ort',article:'der',plural:'die Orte',fr:'le lieu',en:'place',category:'Nom',example:'Das ist ein schöner Ort.',exampleFr:'C’est un bel endroit.'},
  {id:497,de:'die Ostsee',article:'die',plural:'—',fr:'la mer Baltique',en:'Baltic Sea',category:'Nom',example:'Wir machen Urlaub an der Ostsee.',exampleFr:'Nous passons nos vacances au bord de la mer Baltique.'},
  {id:498,de:'das Plakat',article:'das',plural:'die Plakate',fr:"l'affiche",en:'poster',category:'Nom',example:'Das Plakat hängt an der Wand.',exampleFr:'L’affiche est accrochée au mur.'},
  {id:499,de:'der Plan',article:'der',plural:'die Pläne',fr:'le plan',en:'plan',category:'Nom',example:'Das ist ein guter Plan.',exampleFr:'C’est un bon plan.'},
  {id:500,de:'planen',fr:'planifier',en:'to plan',category:'Verbe',example:'Wir planen eine Reise.',exampleFr:'Nous planifions un voyage.'},
  {id:501,de:'der Platz',article:'der',plural:'die Plätze',fr:'la place',en:'place, seat',category:'Nom',example:'Ist dieser Platz frei?',exampleFr:'Cette place est-elle libre ?'},
  {id:502,de:'plötzlich',fr:'soudain',en:'suddenly',category:'Adverbe',example:'Plötzlich begann es zu regnen.',exampleFr:'Soudain, il a commencé à pleuvoir.'},
  {id:503,de:'die Politik',article:'die',plural:'—',fr:'la politique',en:'politics',category:'Nom',example:'Sie interessiert sich für Politik.',exampleFr:'Elle s’intéresse à la politique.'},
  {id:504,de:'der Politiker',article:'der',plural:'die Politiker',fr:"l'homme politique",en:'politician',category:'Nom',example:'Der Politiker hält eine Rede.',exampleFr:'L’homme politique prononce un discours.'},
  {id:505,de:'die Polizei',article:'die',plural:'—',fr:'la police',en:'police',category:'Nom',example:'Die Polizei ist schon da.',exampleFr:'La police est déjà là.'},
  {id:506,de:'der Polizist',article:'der',plural:'die Polizisten',fr:"l'agent de police",en:'police officer',category:'Nom',example:'Der Polizist hilft dem Mann.',exampleFr:'Le policier aide l’homme.'},
  {id:507,de:'das Praktikum',article:'das',plural:'die Praktika',fr:'le stage',en:'internship',category:'Nom',example:'Ich mache ein Praktikum in einer Apotheke.',exampleFr:'Je fais un stage dans une pharmacie.'},
  {id:508,de:'probieren',fr:'essayer, goûter',en:'to try, taste',category:'Verbe',example:'Möchtest du den Kuchen probieren?',exampleFr:'Veux-tu goûter le gâteau ?'},
  {id:509,de:'das Problem',article:'das',plural:'die Probleme',fr:'le problème',en:'problem',category:'Nom',example:'Wir müssen das Problem lösen.',exampleFr:'Nous devons résoudre le problème.'},
  {id:510,de:'das Projekt',article:'das',plural:'die Projekte',fr:'le projet',en:'project',category:'Nom',example:'Das Projekt beginnt nächste Woche.',exampleFr:'Le projet commence la semaine prochaine.'},
  {id:511,de:'quälen',fr:'tourmenter',en:'to torment',category:'Verbe',example:'Die Schmerzen quälen ihn.',exampleFr:'Les douleurs le tourmentent.'},
  {id:512,de:'der Quatsch',article:'der',plural:'—',fr:'les bêtises, les absurdités',en:'nonsense',category:'Nom',example:'Ach Quatsch! Das stimmt nicht.',exampleFr:'Mais non ! Ce n’est pas vrai.'},
  {id:513,de:'die Quelle',article:'die',plural:'die Quellen',fr:'la source',en:'source',category:'Nom',example:'Woher stammt diese Information? Was ist die Quelle?',exampleFr:'D’où vient cette information ? Quelle est la source ?'},
  {id:514,de:'das Rad',article:'das',plural:'die Räder',fr:'la roue, le vélo',en:'wheel, bicycle',category:'Nom',example:'Ich fahre mit dem Rad zur Arbeit.',exampleFr:'Je vais au travail à vélo.'},
  {id:515,de:'Rad fahren',fr:'faire du vélo',en:'to ride a bicycle',category:'Expression',example:'Am Wochenende fahre ich gern Rad.',exampleFr:'Le week-end, j’aime faire du vélo.'},
  {id:516,de:'der Radiowecker',article:'der',plural:'die Radiowecker',fr:'le radio-réveil',en:'radio alarm clock',category:'Nom',example:'Mein Radiowecker klingelt um sechs.',exampleFr:'Mon radio-réveil sonne à six heures.'},
  {id:517,de:'die Rangliste',article:'die',plural:'die Ranglisten',fr:'le classement',en:'ranking',category:'Nom',example:'Unsere Mannschaft steht oben in der Rangliste.',exampleFr:'Notre équipe est en haut du classement.'},
  {id:518,de:'raten',fr:'conseiller, deviner',en:'to advise, guess',category:'Verbe',example:'Kannst du die Antwort raten?',exampleFr:'Peux-tu deviner la réponse ?',forms:'rät – riet – hat geraten'},
  {id:519,de:'der Rat',article:'der',plural:'die Ratschläge',fr:'le conseil',en:'advice',category:'Nom',example:'Ich brauche deinen Rat.',exampleFr:'J’ai besoin de ton conseil.'},
  {id:520,de:'das Rathaus',article:'das',plural:'die Rathäuser',fr:"l'hôtel de ville",en:'town hall',category:'Nom',example:'Das Rathaus steht im Zentrum.',exampleFr:"L'hôtel de ville se trouve au centre."},
  {id:521,de:'ratlos',fr:'perplexe, désemparé',en:'perplexed',category:'Adjectif',example:'Ich bin völlig ratlos.',exampleFr:'Je suis complètement désemparé.'},
  {id:522,de:'rechnen mit',fr:'compter sur, s’attendre à',en:'to expect, reckon with',category:'Expression',example:'Wir müssen mit Problemen rechnen.',exampleFr:'Nous devons nous attendre à des problèmes.',grammar:'+ Dat.'},
  {id:523,de:'das Recht',article:'das',plural:'die Rechte',fr:'le droit',en:'right, law',category:'Nom',example:'Jeder hat das Recht auf Bildung.',exampleFr:'Chacun a droit à l’éducation.'},
  {id:524,de:'Recht haben',fr:'avoir raison',en:'to be right',category:'Expression',example:'Du hast Recht.',exampleFr:'Tu as raison.'},
  {id:525,de:'die Rede',article:'die',plural:'die Reden',fr:'le discours',en:'speech',category:'Nom',example:'Der Präsident hält eine Rede.',exampleFr:'Le président prononce un discours.'},
  {id:526,de:'reden über',fr:'parler de',en:'to talk about',category:'Expression',example:'Wir reden über unsere Zukunft.',exampleFr:'Nous parlons de notre avenir.',grammar:'+ Akk.'},
  {id:527,de:'das Referat',article:'das',plural:'die Referate',fr:"l'exposé",en:'presentation',category:'Nom',example:'Ich muss ein Referat vorbereiten.',exampleFr:'Je dois préparer un exposé.'},
  {id:528,de:'die Regel',article:'die',plural:'die Regeln',fr:'la règle',en:'rule',category:'Nom',example:'Man muss die Regeln beachten.',exampleFr:'Il faut respecter les règles.'},
  {id:529,de:'regelmäßig',fr:'régulièrement',en:'regularly',category:'Adverbe',example:'Ich treibe regelmäßig Sport.',exampleFr:'Je fais régulièrement du sport.'},
  {id:530,de:'die Regierung',article:'die',plural:'die Regierungen',fr:'le gouvernement',en:'government',category:'Nom',example:'Die Regierung hat eine Entscheidung getroffen.',exampleFr:'Le gouvernement a pris une décision.'},
  {id:531,de:'regnen',fr:'pleuvoir',en:'to rain',category:'Verbe',example:'Es regnet heute.',exampleFr:'Il pleut aujourd’hui.'},
  {id:532,de:'reich',fr:'riche',en:'rich',category:'Adjectif',example:'Er ist ein reicher Mann.',exampleFr:'C’est un homme riche.'},
  {id:533,de:'reichen',fr:'suffire, tendre',en:'to be enough, hand',category:'Verbe',example:'Das Geld reicht nicht.',exampleFr:'L’argent ne suffit pas.'},
  {id:534,de:'die Reise',article:'die',plural:'die Reisen',fr:'le voyage',en:'journey, trip',category:'Nom',example:'Die Reise war sehr schön.',exampleFr:'Le voyage était très beau.'},
  {id:535,de:'reisen',fr:'voyager',en:'to travel',category:'Verbe',example:'Ich reise gern.',exampleFr:'J’aime voyager.'},
  {id:536,de:'reißen',fr:'arracher, déchirer',en:'to tear, rip',category:'Verbe',example:'Er hat das Papier zerrissen.',exampleFr:'Il a déchiré le papier.',forms:'reißt – riss – hat gerissen'},
  {id:537,de:'reiten',fr:'faire du cheval',en:'to ride a horse',category:'Verbe',example:'Sie reitet jeden Sonntag.',exampleFr:'Elle fait du cheval chaque dimanche.',forms:'reitet – ritt – ist geritten'},
  {id:538,de:'reparieren',fr:'réparer',en:'to repair',category:'Verbe',example:'Kannst du mein Fahrrad reparieren?',exampleFr:'Peux-tu réparer mon vélo ?'},
  {id:539,de:'retten',fr:'sauver',en:'to rescue, save',category:'Verbe',example:'Der Arzt hat ihm das Leben gerettet.',exampleFr:'Le médecin lui a sauvé la vie.'},
  {id:540,de:'die Richtung',article:'die',plural:'die Richtungen',fr:'la direction',en:'direction',category:'Nom',example:'In welche Richtung müssen wir gehen?',exampleFr:'Dans quelle direction devons-nous aller ?'},
  {id:541,de:'der Ring',article:'der',plural:'die Ringe',fr:'la bague, l’anneau',en:'ring',category:'Nom',example:'Sie trägt einen goldenen Ring.',exampleFr:'Elle porte une bague en or.'},
  {id:542,de:'die Rolle',article:'die',plural:'die Rollen',fr:'le rôle',en:'role',category:'Nom',example:'Er spielt eine wichtige Rolle.',exampleFr:'Il joue un rôle important.'},
  {id:543,de:'der Rücken',article:'der',plural:'die Rücken',fr:'le dos',en:'back',category:'Nom',example:'Mein Rücken tut weh.',exampleFr:'J’ai mal au dos.'},
  {id:544,de:'der Rucksack',article:'der',plural:'die Rucksäcke',fr:'le sac à dos',en:'backpack',category:'Nom',example:'Ich packe meinen Rucksack.',exampleFr:'Je prépare mon sac à dos.'},
  {id:545,de:'rufen',fr:'appeler, crier',en:'to call, shout',category:'Verbe',example:'Bitte ruf den Arzt!',exampleFr:'Appelle le médecin, s’il te plaît !',forms:'ruft – rief – hat gerufen'},
  {id:546,de:'ruhig',fr:'calme, tranquille',en:'calm, quiet',category:'Adjectif',example:'Bitte bleiben Sie ruhig.',exampleFr:'Restez calme, s’il vous plaît.'},
  {id:547,de:'rühren',fr:'émouvoir, remuer',en:'to move emotionally, stir',category:'Verbe',example:'Seine Geschichte hat mich gerührt.',exampleFr:'Son histoire m’a ému.'},
  {id:548,de:'der Saal',article:'der',plural:'die Säle',fr:'la salle',en:'hall',category:'Nom',example:'Die Sitzung findet im großen Saal statt.',exampleFr:'La séance a lieu dans la grande salle.'},
  {id:549,de:'die Sache',article:'die',plural:'die Sachen',fr:'la chose, l’affaire',en:'thing, matter',category:'Nom',example:'Wir müssen über eine wichtige Sache sprechen.',exampleFr:'Nous devons parler d’une chose importante.'},
  {id:550,de:'sachlich',fr:'objectif, factuel',en:'objective, factual',category:'Adjectif',example:'Bitte bleiben Sie sachlich.',exampleFr:'Veuillez rester objectif.'},
  {id:551,de:'sammeln',fr:'collectionner, ramasser',en:'to collect',category:'Verbe',example:'Er sammelt Briefmarken.',exampleFr:'Il collectionne les timbres.'},
  {id:552,de:'satt',fr:'rassasié',en:'full, satiated',category:'Adjectif',example:'Ich bin schon satt.',exampleFr:'Je suis déjà rassasié.'},
  {id:553,de:'der Satz',article:'der',plural:'die Sätze',fr:'la phrase',en:'sentence',category:'Nom',example:'Schreib bitte einen Satz.',exampleFr:'Écris une phrase, s’il te plaît.'},
  {id:554,de:'sauber',fr:'propre',en:'clean',category:'Adjectif',example:'Das Zimmer ist sauber.',exampleFr:'La chambre est propre.'},
  {id:555,de:'schaden',fr:'nuire à',en:'to harm',category:'Verbe',example:'Rauchen schadet der Gesundheit.',exampleFr:'Fumer nuit à la santé.',grammar:'+ Dat.'},
  {id:556,de:'schaffen',fr:'réussir, créer',en:'to manage, create',category:'Verbe',example:'Ich habe es geschafft.',exampleFr:'J’ai réussi.',forms:'schafft – schaffte – hat geschafft'},
  {id:557,de:'sich schämen',fr:'avoir honte',en:'to be ashamed',category:'Verbe',example:'Er schämt sich für seinen Fehler.',exampleFr:'Il a honte de son erreur.',grammar:'für + Akk.'},
  {id:558,de:'der Schatten',article:'der',plural:'die Schatten',fr:"l'ombre",en:'shadow',category:'Nom',example:'Wir sitzen im Schatten.',exampleFr:'Nous sommes assis à l’ombre.'},
  {id:559,de:'das Schaufenster',article:'das',plural:'die Schaufenster',fr:'la vitrine',en:'shop window',category:'Nom',example:'Die Kleider stehen im Schaufenster.',exampleFr:'Les vêtements sont dans la vitrine.'},
  {id:560,de:'sich scheiden lassen',fr:'divorcer',en:'to get divorced',category:'Expression',example:'Sie haben sich scheiden lassen.',exampleFr:'Ils ont divorcé.'},
  {id:561,de:'schenken',fr:'offrir',en:'to give as a gift',category:'Verbe',example:'Ich schenke dir ein Buch.',exampleFr:'Je t’offre un livre.'},
  {id:562,de:'schicken',fr:'envoyer',en:'to send',category:'Verbe',example:'Ich schicke dir eine E-Mail.',exampleFr:'Je t’envoie un e-mail.'},
  {id:563,de:'schieben',fr:'pousser',en:'to push',category:'Verbe',example:'Wir müssen das Auto schieben.',exampleFr:'Nous devons pousser la voiture.',forms:'schiebt – schob – hat geschoben'},
  {id:564,de:'schießen',fr:'tirer',en:'to shoot',category:'Verbe',example:'Er schießt auf das Tor.',exampleFr:'Il tire vers le but.',forms:'schießt – schoss – hat geschossen'},
  {id:565,de:'schildern',fr:'décrire, raconter',en:'to describe',category:'Verbe',example:'Sie schildert den Unfall.',exampleFr:'Elle décrit l’accident.'},
  {id:566,de:'schimpfen mit',fr:'gronder, injurier',en:'to scold',category:'Expression',example:'Der Vater schimpft mit seinem Sohn.',exampleFr:'Le père gronde son fils.',grammar:'+ Dat.'},
  {id:567,de:'schlafen',fr:'dormir',en:'to sleep',category:'Verbe',example:'Ich schlafe acht Stunden.',exampleFr:'Je dors huit heures.',forms:'schläft – schlief – hat geschlafen'},
  {id:568,de:'das Schlafzimmer',article:'das',plural:'die Schlafzimmer',fr:'la chambre à coucher',en:'bedroom',category:'Nom',example:'Das Schlafzimmer ist oben.',exampleFr:'La chambre à coucher est en haut.'},
  {id:569,de:'schließlich',fr:'finalement, enfin',en:'finally',category:'Adverbe',example:'Schließlich haben wir eine Lösung gefunden.',exampleFr:'Finalement, nous avons trouvé une solution.'},
  {id:570,de:'schlimm',fr:'grave, mauvais',en:'bad, serious',category:'Adjectif',example:'Das ist nicht so schlimm.',exampleFr:'Ce n’est pas si grave.'},
  {id:571,de:'der Schluss',article:'der',plural:'die Schlüsse',fr:'la fin',en:'end, conclusion',category:'Nom',example:'Am Schluss waren alle zufrieden.',exampleFr:'À la fin, tout le monde était satisfait.'},
  {id:572,de:'der Schlüssel',article:'der',plural:'die Schlüssel',fr:'la clé',en:'key',category:'Nom',example:'Wo ist mein Schlüssel?',exampleFr:'Où est ma clé ?'},
  {id:573,de:'schmecken',fr:'avoir bon goût',en:'to taste',category:'Verbe',example:'Die Suppe schmeckt sehr gut.',exampleFr:'La soupe est très bonne.'},
  {id:574,de:'der Schmerz',article:'der',plural:'die Schmerzen',fr:'la douleur',en:'pain',category:'Nom',example:'Ich habe starke Schmerzen.',exampleFr:'J’ai de fortes douleurs.'},
  {id:575,de:'schneien',fr:'neiger',en:'to snow',category:'Verbe',example:'Im Winter schneit es oft.',exampleFr:'En hiver, il neige souvent.'},
  {id:576,de:'schnell',fr:'rapide, vite',en:'fast, quickly',category:'Adjectif',example:'Er läuft sehr schnell.',exampleFr:'Il court très vite.'},
  {id:577,de:'schon',fr:'déjà',en:'already',category:'Adverbe',example:'Ich habe schon gegessen.',exampleFr:'J’ai déjà mangé.'},
  {id:578,de:'schön',fr:'beau',en:'beautiful',category:'Adjectif',example:'Das Wetter ist heute schön.',exampleFr:'Il fait beau aujourd’hui.'},
  {id:579,de:'schreiben',fr:'écrire',en:'to write',category:'Verbe',example:'Ich schreibe einen Brief.',exampleFr:'J’écris une lettre.',forms:'schreibt – schrieb – hat geschrieben'},
  {id:580,de:'schreien',fr:'crier',en:'to scream, shout',category:'Verbe',example:'Das Kind schreit laut.',exampleFr:'L’enfant crie fort.',forms:'schreit – schrie – hat geschrien'},
  {id:581,de:'schriftlich',fr:'par écrit',en:'in writing',category:'Adjectif',example:'Bitte geben Sie mir eine schriftliche Antwort.',exampleFr:'Veuillez me donner une réponse écrite.'},
  {id:582,de:'schüchtern',fr:'timide',en:'shy',category:'Adjectif',example:'Das Kind ist sehr schüchtern.',exampleFr:'L’enfant est très timide.'},
  {id:583,de:'die Schuld',article:'die',plural:'die Schulden',fr:'la faute, la culpabilité',en:'guilt, blame',category:'Nom',example:'Es ist nicht meine Schuld.',exampleFr:'Ce n’est pas ma faute.'},
  {id:584,de:'schuldig',fr:'coupable',en:'guilty',category:'Adjectif',example:'Er ist schuldig.',exampleFr:'Il est coupable.'},
  {id:585,de:'die Schule',article:'die',plural:'die Schulen',fr:"l'école",en:'school',category:'Nom',example:'Die Kinder gehen zur Schule.',exampleFr:'Les enfants vont à l’école.'},
  {id:586,de:'der Schüler',article:'der',plural:'die Schüler',fr:"l'élève",en:'student, pupil',category:'Nom',example:'Der Schüler lernt Deutsch.',exampleFr:'L’élève apprend l’allemand.'},
  {id:587,de:'die Schulter',article:'die',plural:'die Schultern',fr:"l'épaule",en:'shoulder',category:'Nom',example:'Meine Schulter tut weh.',exampleFr:'J’ai mal à l’épaule.'},
  {id:588,de:'schütteln',fr:'secouer',en:'to shake',category:'Verbe',example:'Sie schüttelt den Kopf.',exampleFr:'Elle secoue la tête.'},
  {id:589,de:'schützen vor',fr:'protéger de',en:'to protect from',category:'Expression',example:'Diese Creme schützt vor der Sonne.',exampleFr:'Cette crème protège du soleil.',grammar:'+ Dat.'},
  {id:590,de:'schwach',fr:'faible',en:'weak',category:'Adjectif',example:'Ich fühle mich schwach.',exampleFr:'Je me sens faible.'},
  {id:591,de:'schweigen',fr:'se taire',en:'to be silent',category:'Verbe',example:'Er schweigt die ganze Zeit.',exampleFr:'Il se tait tout le temps.',forms:'schweigt – schwieg – hat geschwiegen'},
  {id:592,de:'schwer',fr:'lourd, difficile',en:'heavy, difficult',category:'Adjectif',example:'Die Prüfung war schwer.',exampleFr:'L’examen était difficile.'},
  {id:593,de:'schwer fallen',fr:'être difficile à quelqu’un',en:'to find difficult',category:'Expression',example:'Deutsch fällt mir manchmal schwer.',exampleFr:'L’allemand m’est parfois difficile.',grammar:'+ Dat.'},
  {id:594,de:'schwierig',fr:'difficile',en:'difficult',category:'Adjectif',example:'Das ist eine schwierige Frage.',exampleFr:'C’est une question difficile.'},
  {id:595,de:'die Schwester',article:'die',plural:'die Schwestern',fr:'la sœur',en:'sister',category:'Nom',example:'Meine Schwester ist Ärztin.',exampleFr:'Ma sœur est médecin.'},
  {id:596,de:'das Schwimmbad',article:'das',plural:'die Schwimmbäder',fr:'la piscine',en:'swimming pool',category:'Nom',example:'Wir gehen ins Schwimmbad.',exampleFr:'Nous allons à la piscine.'},
  {id:597,de:'schwimmen',fr:'nager',en:'to swim',category:'Verbe',example:'Ich schwimme gern.',exampleFr:'J’aime nager.',forms:'schwimmt – schwamm – ist geschwommen'},
  {id:598,de:'der See',article:'der',plural:'die Seen',fr:'le lac',en:'lake',category:'Nom',example:'Der See ist sehr tief.',exampleFr:'Le lac est très profond.'},
  {id:599,de:'die See',article:'die',plural:'die Seen',fr:'la mer',en:'sea',category:'Nom',example:'Wir fahren an die See.',exampleFr:'Nous allons au bord de la mer.'},
  {id:600,de:'selten',fr:'rare, rarement',en:'rarely',category:'Adverbe',example:'Er kommt selten zu spät.',exampleFr:'Il arrive rarement en retard.'},
  {id:601,de:'senden',fr:'émettre, envoyer',en:'to broadcast, send',category:'Verbe',example:'Der Sender sendet die Nachrichten.',exampleFr:'La chaîne diffuse les informations.'},
  {id:602,de:'die Sendung',article:'die',plural:'die Sendungen',fr:"l'émission",en:'broadcast, programme',category:'Nom',example:'Die Sendung beginnt um acht Uhr.',exampleFr:'L’émission commence à huit heures.'},
  {id:603,de:'der Sieg',article:'der',plural:'die Siege',fr:'la victoire',en:'victory',category:'Nom',example:'Das war ein wichtiger Sieg.',exampleFr:'C’était une victoire importante.'},
  {id:604,de:'sinken',fr:'couler, sombrer',en:'to sink',category:'Verbe',example:'Das Schiff ist gesunken.',exampleFr:'Le bateau a coulé.',forms:'sinkt – sank – ist gesunken'},
  {id:605,de:'der Sinn',article:'der',plural:'die Sinne',fr:'le sens',en:'sense, meaning',category:'Nom',example:'Das macht keinen Sinn.',exampleFr:'Cela n’a aucun sens.'},
  {id:606,de:'somit',fr:'par conséquent',en:'therefore',category:'Adverbe',example:'Somit ist das Problem gelöst.',exampleFr:'Par conséquent, le problème est résolu.'},
  {id:607,de:'sonst',fr:'sinon, autrement',en:'otherwise',category:'Adverbe',example:'Beeil dich, sonst kommst du zu spät.',exampleFr:'Dépêche-toi, sinon tu seras en retard.'},
  {id:608,de:'die Sorge',article:'die',plural:'die Sorgen',fr:'le souci',en:'worry',category:'Nom',example:'Mach dir keine Sorgen.',exampleFr:'Ne te fais pas de souci.'},
  {id:609,de:'sorgen für',fr:"s'occuper de, veiller à",en:'to provide for, take care of',category:'Expression',example:'Sie sorgt für ihre Kinder.',exampleFr:'Elle s’occupe de ses enfants.',grammar:'+ Akk.'},
  {id:610,de:'sowieso',fr:'de toute façon',en:'anyway',category:'Adverbe',example:'Ich wollte sowieso gehen.',exampleFr:'Je voulais partir de toute façon.'},
  {id:611,de:'spannend',fr:'captivant, passionnant',en:'exciting',category:'Adjectif',example:'Das Buch ist sehr spannend.',exampleFr:'Le livre est passionnant.'},
  {id:612,de:'der Spaß',article:'der',plural:'die Späße',fr:'le plaisir, la plaisanterie',en:'fun, joke',category:'Nom',example:'Wir hatten viel Spaß.',exampleFr:'Nous avons eu beaucoup de plaisir.'},
  {id:613,de:'spüren',fr:'sentir, ressentir',en:'to feel, sense',category:'Verbe',example:'Ich spüre keine Schmerzen.',exampleFr:'Je ne ressens aucune douleur.'},
  {id:614,de:'der Staat',article:'der',plural:'die Staaten',fr:"l'État",en:'state',category:'Nom',example:'Der Staat unterstützt die Familien.',exampleFr:'L’État soutient les familles.'},
  {id:615,de:'ständig',fr:'continuel, permanent',en:'constant',category:'Adjectif',example:'Er ist ständig müde.',exampleFr:'Il est constamment fatigué.'},
  {id:616,de:'der Standpunkt',article:'der',plural:'die Standpunkte',fr:'le point de vue',en:'point of view',category:'Nom',example:'Ich verstehe deinen Standpunkt.',exampleFr:'Je comprends ton point de vue.'},
  {id:617,de:'stattfinden',fr:'avoir lieu',en:'to take place',category:'Verbe',example:'Die Prüfung findet morgen statt.',exampleFr:'L’examen a lieu demain.',forms:'findet statt – fand statt – hat stattgefunden',grammar:'Verbe séparable'},
  {id:618,de:'staunen',fr:"s'étonner",en:'to be astonished',category:'Verbe',example:'Ich staune über sein Talent.',exampleFr:'Je suis étonné par son talent.'},
  {id:619,de:'stehlen',fr:'voler, dérober',en:'to steal',category:'Verbe',example:'Jemand hat mein Fahrrad gestohlen.',exampleFr:'Quelqu’un a volé mon vélo.',forms:'stiehlt – stahl – hat gestohlen'},
  {id:620,de:'steigen',fr:'monter',en:'to climb, rise',category:'Verbe',example:'Die Preise steigen.',exampleFr:'Les prix augmentent.',forms:'steigt – stieg – ist gestiegen'},
  {id:621,de:'sterben',fr:'mourir',en:'to die',category:'Verbe',example:'Die Pflanze ist gestorben.',exampleFr:'La plante est morte.',forms:'stirbt – starb – ist gestorben'},
  {id:622,de:'still',fr:'calme, silencieux',en:'quiet, still',category:'Adjectif',example:'Bitte seid still.',exampleFr:'Soyez silencieux, s’il vous plaît.'},
  {id:623,de:'stimmen',fr:'être juste, voter',en:'to be correct, vote',category:'Verbe',example:'Deine Antwort stimmt.',exampleFr:'Ta réponse est juste.'},
  {id:624,de:'die Stimme',article:'die',plural:'die Stimmen',fr:'la voix',en:'voice',category:'Nom',example:'Sie hat eine schöne Stimme.',exampleFr:'Elle a une belle voix.'},
  {id:625,de:'stolz auf',fr:'fier de',en:'proud of',category:'Expression',example:'Sie ist stolz auf ihren Sohn.',exampleFr:'Elle est fière de son fils.',grammar:'+ Akk.'},
  {id:626,de:'stören',fr:'déranger',en:'to disturb',category:'Verbe',example:'Bitte nicht stören!',exampleFr:'Ne pas déranger, s’il vous plaît !'},
  {id:627,de:'stoßen auf',fr:'tomber sur, rencontrer par hasard',en:'to come across',category:'Expression',example:'Ich bin auf einen Fehler gestoßen.',exampleFr:'Je suis tombé sur une erreur.',grammar:'+ Akk.'},
  {id:628,de:'der Streit',article:'der',plural:'die Streite',fr:'la dispute',en:'argument, dispute',category:'Nom',example:'Sie hatten einen Streit.',exampleFr:'Ils ont eu une dispute.'},
  {id:629,de:'streiten',fr:'se disputer',en:'to argue',category:'Verbe',example:'Die Kinder streiten oft.',exampleFr:'Les enfants se disputent souvent.',forms:'streitet – stritt – hat gestritten'},
  {id:630,de:'streng',fr:'sévère',en:'strict',category:'Adjectif',example:'Der Lehrer ist streng.',exampleFr:'Le professeur est sévère.'},
  {id:631,de:'der Student',article:'der',plural:'die Studenten',fr:"l'étudiant",en:'university student',category:'Nom',example:'Der Student lernt für die Prüfung.',exampleFr:'L’étudiant étudie pour l’examen.'},
  {id:632,de:'studieren',fr:'faire des études universitaires',en:'to study at university',category:'Verbe',example:'Sie studiert Medizin.',exampleFr:'Elle étudie la médecine.'},
  {id:633,de:'das Studium',article:'das',plural:'die Studien',fr:'les études universitaires',en:'university studies',category:'Nom',example:'Mein Studium dauert fünf Jahre.',exampleFr:'Mes études durent cinq ans.'},
  {id:634,de:'die Tablette',article:'die',plural:'die Tabletten',fr:'le comprimé',en:'tablet',category:'Nom',example:'Nehmen Sie eine Tablette täglich ein.',exampleFr:'Prenez un comprimé par jour.'},
  {id:635,de:'die Tafel',article:'die',plural:'die Tafeln',fr:'le tableau, la tablette',en:'board, bar',category:'Nom',example:'Der Lehrer schreibt an die Tafel.',exampleFr:'Le professeur écrit au tableau.'},
  {id:636,de:'der Tag',article:'der',plural:'die Tage',fr:'le jour',en:'day',category:'Nom',example:'Ich arbeite jeden Tag.',exampleFr:'Je travaille chaque jour.'},
  {id:637,de:'täglich',fr:'quotidiennement',en:'daily',category:'Adverbe',example:'Ich nehme das Medikament täglich.',exampleFr:'Je prends le médicament quotidiennement.'},
  {id:638,de:'tanken',fr:'faire le plein',en:'to refuel',category:'Verbe',example:'Ich muss tanken.',exampleFr:'Je dois faire le plein.'},
  {id:639,de:'die Tankstelle',article:'die',plural:'die Tankstellen',fr:'la station-service',en:'petrol station',category:'Nom',example:'Die Tankstelle ist dort vorne.',exampleFr:'La station-service est là-bas devant.'},
  {id:640,de:'die Tasche',article:'die',plural:'die Taschen',fr:'le sac',en:'bag',category:'Nom',example:'Meine Tasche ist schwer.',exampleFr:'Mon sac est lourd.'},
  {id:641,de:'das Taschentuch',article:'das',plural:'die Taschentücher',fr:'le mouchoir',en:'handkerchief, tissue',category:'Nom',example:'Hast du ein Taschentuch?',exampleFr:'As-tu un mouchoir ?'},
  {id:642,de:'die Tatsache',article:'die',plural:'die Tatsachen',fr:'le fait',en:'fact',category:'Nom',example:'Die Tatsache ist bekannt.',exampleFr:'Le fait est connu.'},
  {id:643,de:'taub',fr:'sourd',en:'deaf',category:'Adjectif',example:'Er ist auf einem Ohr taub.',exampleFr:'Il est sourd d’une oreille.'},
  {id:644,de:'tauschen',fr:'échanger',en:'to exchange',category:'Verbe',example:'Wir tauschen unsere Plätze.',exampleFr:'Nous échangeons nos places.'},
  {id:645,de:'teilen',fr:'partager',en:'to share, divide',category:'Verbe',example:'Wir teilen die Kosten.',exampleFr:'Nous partageons les frais.'},
  {id:646,de:'teilnehmen an',fr:'participer à',en:'to participate in',category:'Expression',example:'Ich nehme an dem Kurs teil.',exampleFr:'Je participe au cours.',grammar:'+ Dat.'},
  {id:647,de:'telefonieren',fr:'téléphoner',en:'to telephone',category:'Verbe',example:'Ich telefoniere mit meiner Mutter.',exampleFr:'Je téléphone avec ma mère.',grammar:'mit + Dat.'},
  {id:648,de:'der Teller',article:'der',plural:'die Teller',fr:"l'assiette",en:'plate',category:'Nom',example:'Der Teller ist sauber.',exampleFr:'L’assiette est propre.'},
  {id:649,de:'das Theater',article:'das',plural:'die Theater',fr:'le théâtre',en:'theatre',category:'Nom',example:'Wir gehen heute ins Theater.',exampleFr:'Nous allons au théâtre aujourd’hui.'},
  {id:650,de:'das Thema',article:'das',plural:'die Themen',fr:'le thème, le sujet',en:'topic, subject',category:'Nom',example:'Das Thema ist sehr interessant.',exampleFr:'Le sujet est très intéressant.'},
  {id:651,de:'tief',fr:'profond',en:'deep',category:'Adjectif',example:'Der See ist sehr tief.',exampleFr:'Le lac est très profond.'},
  {id:652,de:'das Tier',article:'das',plural:'die Tiere',fr:"l'animal",en:'animal',category:'Nom',example:'Ich liebe Tiere.',exampleFr:'J’aime les animaux.'},
  {id:653,de:'der Tierarzt',article:'der',plural:'die Tierärzte',fr:'le vétérinaire',en:'veterinarian',category:'Nom',example:'Der Tierarzt untersucht den Hund.',exampleFr:'Le vétérinaire examine le chien.'},
  {id:654,de:'der Tisch',article:'der',plural:'die Tische',fr:'la table',en:'table',category:'Nom',example:'Das Essen steht auf dem Tisch.',exampleFr:'Le repas est sur la table.'},
  {id:655,de:'die Tochter',article:'die',plural:'die Töchter',fr:'la fille',en:'daughter',category:'Nom',example:'Meine Tochter geht zur Schule.',exampleFr:'Ma fille va à l’école.'},
  {id:656,de:'der Tod',article:'der',plural:'—',fr:'la mort',en:'death',category:'Nom',example:'Der Tod ist Teil des Lebens.',exampleFr:'La mort fait partie de la vie.'},
  {id:657,de:'töten',fr:'tuer',en:'to kill',category:'Verbe',example:'Das Gift kann Tiere töten.',exampleFr:'Le poison peut tuer les animaux.'},
  {id:658,de:'tragen',fr:'porter',en:'to carry, wear',category:'Verbe',example:'Sie trägt einen Mantel.',exampleFr:'Elle porte un manteau.',forms:'trägt – trug – hat getragen'},
  {id:659,de:'trainieren',fr:"s'entraîner",en:'to train',category:'Verbe',example:'Ich trainiere dreimal pro Woche.',exampleFr:"Je m'entraîne trois fois par semaine."},
  {id:660,de:'der Traum',article:'der',plural:'die Träume',fr:'le rêve',en:'dream',category:'Nom',example:'Mein Traum ist es, in Deutschland zu leben.',exampleFr:'Mon rêve est de vivre en Allemagne.'},
  {id:661,de:'träumen von',fr:'rêver de',en:'to dream of',category:'Expression',example:'Ich träume von einer Reise.',exampleFr:'Je rêve d’un voyage.',grammar:'+ Dat.'},
  {id:662,de:'traurig',fr:'triste',en:'sad',category:'Adjectif',example:'Warum bist du traurig?',exampleFr:'Pourquoi es-tu triste ?'},
  {id:663,de:'treffen',fr:'rencontrer',en:'to meet',category:'Verbe',example:'Ich treffe heute meine Freunde.',exampleFr:'Je rencontre mes amis aujourd’hui.',forms:'trifft – traf – hat getroffen'},
  {id:664,de:'der Treffpunkt',article:'der',plural:'die Treffpunkte',fr:'le point de rencontre',en:'meeting point',category:'Nom',example:'Der Treffpunkt ist vor dem Bahnhof.',exampleFr:'Le point de rencontre est devant la gare.'},
  {id:665,de:'treiben',fr:'pratiquer, faire (un sport)',en:'to do, engage in',category:'Verbe',example:'Ich treibe regelmäßig Sport.',exampleFr:'Je fais régulièrement du sport.',forms:'treibt – trieb – hat getrieben'},
  {id:666,de:'die Treppe',article:'die',plural:'die Treppen',fr:"l'escalier",en:'stairs',category:'Nom',example:'Die Treppe ist sehr steil.',exampleFr:'L’escalier est très raide.'},
  {id:667,de:'trotz',fr:'malgré',en:'despite',category:'Préposition',example:'Trotz des Regens gehen wir spazieren.',exampleFr:'Malgré la pluie, nous allons nous promener.',grammar:'+ Gén. (Dat. courant)'},
  {id:668,de:'trotzdem',fr:'quand même, malgré cela',en:'nevertheless',category:'Adverbe',example:'Es regnet, trotzdem gehen wir raus.',exampleFr:'Il pleut, malgré cela nous sortons.'},
  {id:669,de:'die U-Bahn',article:'die',plural:'die U-Bahnen',fr:'le métro',en:'underground, subway',category:'Nom',example:'Ich fahre mit der U-Bahn.',exampleFr:'Je prends le métro.'},
  {id:670,de:'üben',fr:"s'exercer",en:'to practise',category:'Verbe',example:'Ich übe jeden Tag Deutsch.',exampleFr:'Je pratique l’allemand chaque jour.'},
  {id:671,de:'die Übung',article:'die',plural:'die Übungen',fr:"l'exercice",en:'exercise',category:'Nom',example:'Diese Übung ist einfach.',exampleFr:'Cet exercice est facile.'},
  {id:672,de:'überall',fr:'partout',en:'everywhere',category:'Adverbe',example:'Überall gibt es Menschen.',exampleFr:'Il y a des gens partout.'},
  {id:673,de:'überhaupt nicht',fr:'pas du tout',en:'not at all',category:'Expression',example:'Das gefällt mir überhaupt nicht.',exampleFr:'Cela ne me plaît pas du tout.'},
  {id:674,de:'überlegen',fr:'réfléchir',en:'to consider, think over',category:'Verbe',example:'Ich werde es mir überlegen.',exampleFr:'Je vais y réfléchir.'},
  {id:675,de:'überraschen',fr:'surprendre',en:'to surprise',category:'Verbe',example:'Die Nachricht hat mich überrascht.',exampleFr:'La nouvelle m’a surpris.'},
  {id:676,de:'die Überraschung',article:'die',plural:'die Überraschungen',fr:'la surprise',en:'surprise',category:'Nom',example:'Das ist eine schöne Überraschung.',exampleFr:'C’est une belle surprise.'},
  {id:677,de:'die Überschrift',article:'die',plural:'die Überschriften',fr:'le titre',en:'heading, title',category:'Nom',example:'Lies zuerst die Überschrift.',exampleFr:'Lis d’abord le titre.'},
  {id:678,de:'übersetzen',fr:'traduire',en:'to translate',category:'Verbe',example:'Kannst du diesen Text übersetzen?',exampleFr:'Peux-tu traduire ce texte ?'},
  {id:679,de:'überzeugen',fr:'convaincre',en:'to convince',category:'Verbe',example:'Er hat mich überzeugt.',exampleFr:'Il m’a convaincu.'},
  {id:680,de:'die Uhr',article:'die',plural:'die Uhren',fr:'l’heure, la montre',en:'clock, watch',category:'Nom',example:'Wie spät ist es? Es ist neun Uhr.',exampleFr:'Quelle heure est-il ? Il est neuf heures.'},
  {id:681,de:'um ... zu',fr:'pour + infinitif',en:'in order to',category:'Grammaire',example:'Ich lerne Deutsch, um in Deutschland zu arbeiten.',exampleFr:'J’apprends l’allemand pour travailler en Allemagne.'},
  {id:682,de:'die Umgebung',article:'die',plural:'die Umgebungen',fr:'les environs',en:'surroundings',category:'Nom',example:'Die Umgebung ist sehr ruhig.',exampleFr:'Les environs sont très calmes.'},
  {id:683,de:'umsonst',fr:'gratuitement, pour rien',en:'for free, in vain',category:'Adverbe',example:'Der Eintritt ist umsonst.',exampleFr:'L’entrée est gratuite.'},
  {id:684,de:'umsteigen',fr:'changer (de transport)',en:'to change trains',category:'Verbe',example:'In Köln müssen wir umsteigen.',exampleFr:'À Cologne, nous devons changer de train.',forms:'steigt um – stieg um – ist umgestiegen',grammar:'Verbe séparable'},
  {id:685,de:'die Umwelt',article:'die',plural:'—',fr:"l'environnement",en:'environment',category:'Nom',example:'Wir müssen die Umwelt schützen.',exampleFr:'Nous devons protéger l’environnement.'},
  {id:686,de:'unbedingt',fr:'absolument',en:'absolutely',category:'Adverbe',example:'Du musst unbedingt kommen.',exampleFr:'Tu dois absolument venir.'},
  {id:687,de:'ungerecht',fr:'injuste',en:'unfair',category:'Adjectif',example:'Das ist ungerecht.',exampleFr:'C’est injuste.'},
  {id:688,de:'ungern',fr:'à contrecœur',en:'reluctantly',category:'Adverbe',example:'Ich stehe ungern früh auf.',exampleFr:'Je n’aime pas me lever tôt.'},
  {id:689,de:'ungesund',fr:'malsain',en:'unhealthy',category:'Adjectif',example:'Zu viel Zucker ist ungesund.',exampleFr:'Trop de sucre est mauvais pour la santé.'},
  {id:690,de:'unglaublich',fr:'incroyable',en:'incredible',category:'Adjectif',example:'Das ist unglaublich!',exampleFr:'C’est incroyable !'},
  {id:691,de:'das Unglück',article:'das',plural:'die Unglücke',fr:'le malheur, l’accident',en:'misfortune, accident',category:'Nom',example:'Zum Glück ist kein Unglück passiert.',exampleFr:'Heureusement, aucun accident ne s’est produit.'},
  {id:692,de:'unhöflich',fr:'impoli',en:'impolite',category:'Adjectif',example:'Das war sehr unhöflich.',exampleFr:'C’était très impoli.'},
  {id:693,de:'unmöglich',fr:'impossible',en:'impossible',category:'Adjectif',example:'Das ist unmöglich.',exampleFr:'C’est impossible.'},
  {id:694,de:'unterbrechen',fr:'interrompre',en:'to interrupt',category:'Verbe',example:'Bitte unterbrich mich nicht.',exampleFr:'Ne m’interromps pas, s’il te plaît.',forms:'unterbricht – unterbrach – hat unterbrochen'},
  {id:695,de:'sich unterhalten mit',fr:'discuter avec',en:'to talk with',category:'Expression',example:'Ich unterhalte mich mit meinem Kollegen.',exampleFr:'Je discute avec mon collègue.',grammar:'mit + Dat.'},
  {id:696,de:'die Unterhaltung',article:'die',plural:'die Unterhaltungen',fr:'la conversation',en:'conversation',category:'Nom',example:'Die Unterhaltung war interessant.',exampleFr:'La conversation était intéressante.'},
  {id:697,de:'die Unterkunft',article:'die',plural:'die Unterkünfte',fr:"l'hébergement",en:'accommodation',category:'Nom',example:'Wir suchen eine günstige Unterkunft.',exampleFr:'Nous cherchons un hébergement économique.'},
  {id:698,de:'der Unterricht',article:'der',plural:'—',fr:'le cours',en:'lesson, class',category:'Nom',example:'Der Deutschunterricht beginnt um neun Uhr.',exampleFr:'Le cours d’allemand commence à neuf heures.'},
  {id:699,de:'unterrichten',fr:'enseigner',en:'to teach',category:'Verbe',example:'Sie unterrichtet Deutsch.',exampleFr:'Elle enseigne l’allemand.'},
  {id:700,de:'der Unterschied',article:'der',plural:'die Unterschiede',fr:'la différence',en:'difference',category:'Nom',example:'Was ist der Unterschied?',exampleFr:'Quelle est la différence ?'},
  {id:701,de:'unterschreiben',fr:'signer',en:'to sign',category:'Verbe',example:'Bitte unterschreiben Sie hier.',exampleFr:'Veuillez signer ici.',forms:'unterschreibt – unterschrieb – hat unterschrieben'},
  {id:702,de:'untersuchen',fr:'examiner',en:'to examine',category:'Verbe',example:'Der Arzt untersucht den Patienten.',exampleFr:'Le médecin examine le patient.'},
  {id:703,de:'die Unterstützung',article:'die',plural:'die Unterstützungen',fr:'le soutien',en:'support',category:'Nom',example:'Vielen Dank für Ihre Unterstützung.',exampleFr:'Merci beaucoup pour votre soutien.'},
  {id:704,de:'unterwegs',fr:'en route',en:'on the way',category:'Adverbe',example:'Ich bin gerade unterwegs.',exampleFr:'Je suis en route.'},
  {id:705,de:'unzufrieden',fr:'mécontent',en:'dissatisfied',category:'Adjectif',example:'Der Kunde ist unzufrieden.',exampleFr:'Le client est mécontent.'},
  {id:706,de:'die Ursache',article:'die',plural:'die Ursachen',fr:'la cause',en:'cause',category:'Nom',example:'Wir kennen die Ursache des Problems.',exampleFr:'Nous connaissons la cause du problème.'},
  {id:707,de:'das Vaterland',article:'das',plural:'die Vaterländer',fr:'la patrie',en:'homeland',category:'Nom',example:'Er liebt sein Vaterland.',exampleFr:'Il aime sa patrie.'},
  {id:708,de:'die Verabredung',article:'die',plural:'die Verabredungen',fr:'le rendez-vous',en:'appointment',category:'Nom',example:'Ich habe heute eine Verabredung.',exampleFr:'J’ai un rendez-vous aujourd’hui.'},
  {id:709,de:'verändern',fr:'changer, modifier',en:'to change, alter',category:'Verbe',example:'Die Reise hat mein Leben verändert.',exampleFr:'Le voyage a changé ma vie.'},
  {id:710,de:'verantwortlich für',fr:'responsable de',en:'responsible for',category:'Expression',example:'Wer ist dafür verantwortlich?',exampleFr:'Qui en est responsable ?',grammar:'für + Akk.'},
  {id:711,de:'die Verantwortung',article:'die',plural:'die Verantwortungen',fr:'la responsabilité',en:'responsibility',category:'Nom',example:'Du musst Verantwortung übernehmen.',exampleFr:'Tu dois prendre tes responsabilités.'},
  {id:712,de:'verbessern',fr:'améliorer',en:'to improve',category:'Verbe',example:'Ich möchte mein Deutsch verbessern.',exampleFr:'Je voudrais améliorer mon allemand.'},
  {id:713,de:'verbieten',fr:'interdire',en:'to forbid',category:'Verbe',example:'Meine Eltern verbieten mir das.',exampleFr:'Mes parents me l’interdisent.',forms:'verbietet – verbot – hat verboten'},
  {id:714,de:'verbinden mit',fr:'relier à',en:'to connect with',category:'Expression',example:'Die Stadt ist gut mit dem Zug verbunden.',exampleFr:'La ville est bien reliée par le train.',grammar:'mit + Dat.'},
  {id:715,de:'die Verbindung',article:'die',plural:'die Verbindungen',fr:'la liaison, la connexion',en:'connection',category:'Nom',example:'Es gibt eine direkte Verbindung.',exampleFr:'Il existe une liaison directe.'},
  {id:716,de:'das Verbot',article:'das',plural:'die Verbote',fr:"l'interdiction",en:'prohibition',category:'Nom',example:'Hier gilt ein Rauchverbot.',exampleFr:'Il est interdit de fumer ici.'},
  {id:717,de:'verkaufen',fr:'vendre',en:'to sell',category:'Verbe',example:'Sie verkauft ihr Auto.',exampleFr:'Elle vend sa voiture.'},
  {id:718,de:'der Verbrecher',article:'der',plural:'die Verbrecher',fr:'le criminel',en:'criminal',category:'Nom',example:'Der Verbrecher wurde festgenommen.',exampleFr:'Le criminel a été arrêté.'},
  {id:719,de:'verdienen',fr:'gagner (argent), mériter',en:'to earn, deserve',category:'Verbe',example:'Sie verdient viel Geld.',exampleFr:'Elle gagne beaucoup d’argent.'},
  {id:720,de:'der Verein',article:'der',plural:'die Vereine',fr:"l'association, le club",en:'club, association',category:'Nom',example:'Er ist Mitglied in einem Sportverein.',exampleFr:'Il est membre d’un club sportif.'},
  {id:721,de:'die Vergangenheit',article:'die',plural:'—',fr:'le passé',en:'past',category:'Nom',example:'Wir sprechen über die Vergangenheit.',exampleFr:'Nous parlons du passé.'},
  {id:722,de:'vergleichen',fr:'comparer',en:'to compare',category:'Verbe',example:'Vergleiche bitte die beiden Texte.',exampleFr:'Compare les deux textes, s’il te plaît.',forms:'vergleicht – verglich – hat verglichen'},
  {id:723,de:'das Verhalten',article:'das',plural:'—',fr:'le comportement',en:'behaviour',category:'Nom',example:'Sein Verhalten war korrekt.',exampleFr:'Son comportement était correct.'},
  {id:724,de:'sich verhalten',fr:'se comporter',en:'to behave',category:'Verbe',example:'Er verhält sich ruhig.',exampleFr:'Il se comporte calmement.',forms:'verhält sich – verhielt sich – hat sich verhalten'},
  {id:725,de:'verheiratet',fr:'marié',en:'married',category:'Adjectif',example:'Sie sind seit zehn Jahren verheiratet.',exampleFr:'Ils sont mariés depuis dix ans.'},
  {id:726,de:'sich verirren',fr:'se perdre',en:'to get lost',category:'Verbe',example:'Wir haben uns im Wald verirrt.',exampleFr:'Nous nous sommes perdus dans la forêt.'},
  {id:727,de:'das Verkehrsmittel',article:'das',plural:'die Verkehrsmittel',fr:'le moyen de transport',en:'means of transport',category:'Nom',example:'Welches Verkehrsmittel benutzt du?',exampleFr:'Quel moyen de transport utilises-tu ?'},
  {id:728,de:'verlangen',fr:'exiger, demander',en:'to demand',category:'Verbe',example:'Der Chef verlangt eine Erklärung.',exampleFr:'Le patron exige une explication.'},
  {id:729,de:'verlassen',fr:'quitter',en:'to leave',category:'Verbe',example:'Sie hat das Haus verlassen.',exampleFr:'Elle a quitté la maison.',forms:'verlässt – verließ – hat verlassen'},
  {id:730,de:'verletzen',fr:'blesser',en:'to injure',category:'Verbe',example:'Er hat sich am Arm verletzt.',exampleFr:'Il s’est blessé au bras.'},
  {id:731,de:'sich verlieben in',fr:'tomber amoureux de',en:'to fall in love with',category:'Expression',example:'Sie hat sich in ihn verliebt.',exampleFr:'Elle est tombée amoureuse de lui.',grammar:'+ Akk.'},
  {id:732,de:'verlieren',fr:'perdre',en:'to lose',category:'Verbe',example:'Ich habe meinen Schlüssel verloren.',exampleFr:'J’ai perdu ma clé.',forms:'verliert – verlor – hat verloren'},
  {id:733,de:'vermuten',fr:'supposer',en:'to suppose',category:'Verbe',example:'Ich vermute, dass er krank ist.',exampleFr:'Je suppose qu’il est malade.'},
  {id:734,de:'vermutlich',fr:'probablement',en:'probably',category:'Adverbe',example:'Er kommt vermutlich morgen.',exampleFr:'Il viendra probablement demain.'},
  {id:735,de:'veröffentlichen',fr:'publier',en:'to publish',category:'Verbe',example:'Die Zeitung veröffentlicht einen Artikel.',exampleFr:'Le journal publie un article.'},
  {id:736,de:'verpassen',fr:'rater, manquer',en:'to miss',category:'Verbe',example:'Ich habe den Bus verpasst.',exampleFr:'J’ai raté le bus.'},
  {id:737,de:'verreisen',fr:'partir en voyage',en:'to travel away',category:'Verbe',example:'Wir verreisen nächste Woche.',exampleFr:'Nous partons en voyage la semaine prochaine.'},
  {id:738,de:'verrückt',fr:'fou',en:'crazy',category:'Adjectif',example:'Das ist eine verrückte Idee.',exampleFr:'C’est une idée folle.'},
  {id:739,de:'die Versammlung',article:'die',plural:'die Versammlungen',fr:'la réunion',en:'meeting, assembly',category:'Nom',example:'Die Versammlung beginnt um zehn Uhr.',exampleFr:'La réunion commence à dix heures.'},
  {id:740,de:'verschieden',fr:'différent',en:'different',category:'Adjectif',example:'Wir haben verschiedene Meinungen.',exampleFr:'Nous avons des opinions différentes.'},
  {id:741,de:'die Versicherung',article:'die',plural:'die Versicherungen',fr:"l'assurance",en:'insurance',category:'Nom',example:'Ich brauche eine Krankenversicherung.',exampleFr:'J’ai besoin d’une assurance maladie.'},
  {id:742,de:'verschwinden',fr:'disparaître',en:'to disappear',category:'Verbe',example:'Mein Schlüssel ist verschwunden.',exampleFr:'Ma clé a disparu.',forms:'verschwindet – verschwand – ist verschwunden'},
  {id:743,de:'sich verspäten',fr:'être en retard',en:'to be late',category:'Verbe',example:'Der Zug hat sich verspätet.',exampleFr:'Le train a pris du retard.'},
  {id:744,de:'verstehen',fr:'comprendre',en:'to understand',category:'Verbe',example:'Ich verstehe die Frage.',exampleFr:'Je comprends la question.',forms:'versteht – verstand – hat verstanden'},
  {id:745,de:'verständlich',fr:'compréhensible',en:'understandable',category:'Adjectif',example:'Deine Erklärung ist verständlich.',exampleFr:'Ton explication est compréhensible.'},
  {id:746,de:'verstecken',fr:'cacher',en:'to hide',category:'Verbe',example:'Das Kind versteckt sich.',exampleFr:'L’enfant se cache.'},
  {id:747,de:'versuchen',fr:'essayer, tenter',en:'to try',category:'Verbe',example:'Ich versuche, Deutsch zu sprechen.',exampleFr:'J’essaie de parler allemand.'},
  {id:748,de:'der Versuch',article:'der',plural:'die Versuche',fr:'la tentative',en:'attempt',category:'Nom',example:'Der erste Versuch war erfolgreich.',exampleFr:'La première tentative a réussi.'},
  {id:749,de:'verteilen',fr:'distribuer',en:'to distribute',category:'Verbe',example:'Die Lehrerin verteilt die Arbeitsblätter.',exampleFr:'L’enseignante distribue les feuilles.'},
  {id:750,de:'das Vertrauen',article:'das',plural:'—',fr:'la confiance',en:'trust',category:'Nom',example:'Vertrauen ist wichtig.',exampleFr:'La confiance est importante.'},
  {id:751,de:'vertrauen',fr:'faire confiance à',en:'to trust',category:'Verbe',example:'Ich vertraue dir.',exampleFr:'Je te fais confiance.',grammar:'+ Dat.'},
  {id:752,de:'vertreten',fr:'représenter, remplacer',en:'to represent',category:'Verbe',example:'Wer vertritt heute den Chef?',exampleFr:'Qui remplace le patron aujourd’hui ?',forms:'vertritt – vertrat – hat vertreten'},
  {id:753,de:'verwandt mit',fr:'apparenté à',en:'related to',category:'Expression',example:'Sie ist mit mir verwandt.',exampleFr:'Elle est de ma famille.',grammar:'mit + Dat.'},
  {id:754,de:'verwirklichen',fr:'réaliser',en:'to realize',category:'Verbe',example:'Sie hat ihren Traum verwirklicht.',exampleFr:'Elle a réalisé son rêve.'},
  {id:755,de:'verzweifelt',fr:'désespéré',en:'desperate',category:'Adjectif',example:'Er ist völlig verzweifelt.',exampleFr:'Il est complètement désespéré.'},
  {id:756,de:'viel',fr:'beaucoup',en:'much, many',category:'Adverbe',example:'Ich habe viel gelernt.',exampleFr:'J’ai beaucoup appris.'},
  {id:757,de:'vielleicht',fr:'peut-être',en:'perhaps, maybe',category:'Adverbe',example:'Vielleicht komme ich morgen.',exampleFr:'Je viendrai peut-être demain.'},
  {id:758,de:'das Visum',article:'das',plural:'die Visa',fr:'le visa',en:'visa',category:'Nom',example:'Ich brauche ein Visum.',exampleFr:'J’ai besoin d’un visa.'},
  {id:759,de:'das Volk',article:'das',plural:'die Völker',fr:'le peuple',en:'people, nation',category:'Nom',example:'Das Volk wählt seine Vertreter.',exampleFr:'Le peuple élit ses représentants.'},
  {id:760,de:'sich vorbereiten auf',fr:'se préparer à',en:'to prepare for',category:'Expression',example:'Ich bereite mich auf die Prüfung vor.',exampleFr:'Je me prépare à l’examen.',grammar:'+ Akk.'},
  {id:761,de:'die Vorbereitung',article:'die',plural:'die Vorbereitungen',fr:'la préparation',en:'preparation',category:'Nom',example:'Die Vorbereitung ist sehr wichtig.',exampleFr:'La préparation est très importante.'},
  {id:762,de:'das Vorbild',article:'das',plural:'die Vorbilder',fr:'le modèle',en:'role model',category:'Nom',example:'Mein Vater ist mein Vorbild.',exampleFr:'Mon père est mon modèle.'},
  {id:763,de:'der Vordergrund',article:'der',plural:'—',fr:'le premier plan',en:'foreground',category:'Nom',example:'Im Vordergrund steht die Gesundheit.',exampleFr:'La santé est au premier plan.'},
  {id:764,de:'vorhaben',fr:'avoir l’intention de',en:'to intend',category:'Verbe',example:'Was hast du heute vor?',exampleFr:'Qu’as-tu l’intention de faire aujourd’hui ?',forms:'hat vor – hatte vor – hat vorgehabt',grammar:'Verbe séparable'},
  {id:765,de:'vorher',fr:'auparavant',en:'beforehand',category:'Adverbe',example:'Ruf mich bitte vorher an.',exampleFr:'Appelle-moi avant, s’il te plaît.'},
  {id:766,de:'vorkommen',fr:'se produire, sembler',en:'to occur, seem',category:'Verbe',example:'Das ist noch nie vorgekommen.',exampleFr:'Cela ne s’est jamais produit.',forms:'kommt vor – kam vor – ist vorgekommen',grammar:'Verbe séparable'},
  {id:767,de:'der Vormittag',article:'der',plural:'die Vormittage',fr:'la matinée',en:'morning',category:'Nom',example:'Am Vormittag habe ich einen Termin.',exampleFr:'J’ai un rendez-vous dans la matinée.'},
  {id:768,de:'der Vorname',article:'der',plural:'die Vornamen',fr:'le prénom',en:'first name',category:'Nom',example:'Wie ist Ihr Vorname?',exampleFr:'Quel est votre prénom ?'},
  {id:769,de:'der Vorschlag',article:'der',plural:'die Vorschläge',fr:'la proposition',en:'suggestion',category:'Nom',example:'Das ist ein guter Vorschlag.',exampleFr:'C’est une bonne proposition.'},
  {id:770,de:'vorschlagen',fr:'proposer',en:'to suggest',category:'Verbe',example:'Ich schlage einen Termin vor.',exampleFr:'Je propose une date.',forms:'schlägt vor – schlug vor – hat vorgeschlagen',grammar:'Verbe séparable'},
  {id:771,de:'die Vorschrift',article:'die',plural:'die Vorschriften',fr:'le règlement, la prescription',en:'regulation',category:'Nom',example:'Bitte beachten Sie die Vorschriften.',exampleFr:'Veuillez respecter le règlement.'},
  {id:772,de:'vorsichtig',fr:'prudent',en:'careful',category:'Adjectif',example:'Sei vorsichtig!',exampleFr:'Sois prudent !'},
  {id:773,de:'sich vorstellen',fr:'se présenter',en:'to introduce oneself',category:'Verbe',example:'Darf ich mich vorstellen?',exampleFr:'Puis-je me présenter ?',grammar:'Verbe séparable'},
  {id:774,de:'sich etwas vorstellen',fr:'imaginer quelque chose',en:'to imagine something',category:'Expression',example:'Ich kann mir das gut vorstellen.',exampleFr:'Je peux bien imaginer cela.'},
  {id:775,de:'der Vorteil',article:'der',plural:'die Vorteile',fr:"l'avantage",en:'advantage',category:'Nom',example:'Ein großer Vorteil ist die Nähe.',exampleFr:'Un grand avantage est la proximité.'},
  {id:776,de:'der Nachteil',article:'der',plural:'die Nachteile',fr:"l'inconvénient",en:'disadvantage',category:'Nom',example:'Der Preis ist ein Nachteil.',exampleFr:'Le prix est un inconvénient.'},
  {id:777,de:'der Vorwurf',article:'der',plural:'die Vorwürfe',fr:'le reproche',en:'reproach',category:'Nom',example:'Das ist ein ungerechter Vorwurf.',exampleFr:'C’est un reproche injuste.'},
  {id:778,de:'vorwerfen',fr:'reprocher',en:'to accuse, reproach',category:'Verbe',example:'Sie wirft ihm einen Fehler vor.',exampleFr:'Elle lui reproche une erreur.',forms:'wirft vor – warf vor – hat vorgeworfen',grammar:'Verbe séparable'},
  {id:779,de:'die Waffe',article:'die',plural:'die Waffen',fr:"l'arme",en:'weapon',category:'Nom',example:'Die Polizei hat die Waffe gefunden.',exampleFr:'La police a trouvé l’arme.'},
  {id:780,de:'wagen',fr:'oser',en:'to dare',category:'Verbe',example:'Ich wage es nicht, ihn zu fragen.',exampleFr:'Je n’ose pas lui demander.'},
  {id:781,de:'die Wahl',article:'die',plural:'die Wahlen',fr:'le choix, les élections',en:'choice, election',category:'Nom',example:'Die Wahl findet im Mai statt.',exampleFr:'Les élections ont lieu en mai.'},
  {id:782,de:'wählen',fr:'choisir, élire',en:'to choose, elect',category:'Verbe',example:'Die Bürger wählen den Präsidenten.',exampleFr:'Les citoyens élisent le président.'},
  {id:783,de:'wahr',fr:'vrai',en:'true',category:'Adjectif',example:'Das ist wahr.',exampleFr:'C’est vrai.'},
  {id:784,de:'die Wahrheit',article:'die',plural:'die Wahrheiten',fr:'la vérité',en:'truth',category:'Nom',example:'Sag mir die Wahrheit.',exampleFr:'Dis-moi la vérité.'},
  {id:785,de:'während',fr:'pendant, pendant que',en:'during, while',category:'Préposition',example:'Während des Unterrichts darf man nicht telefonieren.',exampleFr:'Pendant le cours, il est interdit de téléphoner.',grammar:'+ Gén. comme préposition ; verbe final comme conjonction'},
  {id:786,de:'der Wald',article:'der',plural:'die Wälder',fr:'la forêt',en:'forest',category:'Nom',example:'Wir gehen im Wald spazieren.',exampleFr:'Nous nous promenons dans la forêt.'},
  {id:787,de:'die Wand',article:'die',plural:'die Wände',fr:'le mur, la cloison',en:'wall',category:'Nom',example:'Das Bild hängt an der Wand.',exampleFr:'Le tableau est accroché au mur.'},
  {id:788,de:'wandern',fr:'faire de la randonnée',en:'to hike',category:'Verbe',example:'Wir wandern durch den Wald.',exampleFr:'Nous faisons une randonnée dans la forêt.'},
  {id:789,de:'warnen vor',fr:'avertir de',en:'to warn about',category:'Expression',example:'Ich warne dich vor der Gefahr.',exampleFr:'Je t’avertis du danger.',grammar:'+ Dat.'},
  {id:790,de:'warten auf',fr:'attendre',en:'to wait for',category:'Expression',example:'Ich warte auf den Bus.',exampleFr:'J’attends le bus.',grammar:'+ Akk.'},
  {id:791,de:'waschen',fr:'laver',en:'to wash',category:'Verbe',example:'Ich wasche meine Hände.',exampleFr:'Je me lave les mains.',forms:'wäscht – wusch – hat gewaschen'},
  {id:792,de:'wechseln',fr:'changer, échanger',en:'to change, exchange',category:'Verbe',example:'Ich muss Geld wechseln.',exampleFr:'Je dois changer de l’argent.'},
  {id:793,de:'wecken',fr:'réveiller',en:'to wake up',category:'Verbe',example:'Der Wecker weckt mich um sieben Uhr.',exampleFr:'Le réveil me réveille à sept heures.'},
  {id:794,de:'weder ... noch',fr:'ni ... ni',en:'neither ... nor',category:'Grammaire',example:'Ich trinke weder Kaffee noch Tee.',exampleFr:'Je ne bois ni café ni thé.'},
  {id:795,de:'der Weg',article:'der',plural:'die Wege',fr:'le chemin',en:'way, path',category:'Nom',example:'Können Sie mir den Weg zeigen?',exampleFr:'Pouvez-vous m’indiquer le chemin ?'},
  {id:796,de:'weglaufen',fr:'partir en courant',en:'to run away',category:'Verbe',example:'Der Hund ist weggelaufen.',exampleFr:'Le chien s’est enfui.',forms:'läuft weg – lief weg – ist weggelaufen',grammar:'Verbe séparable'},
  {id:797,de:'wehtun',fr:'faire mal',en:'to hurt',category:'Verbe',example:'Mein Kopf tut mir weh.',exampleFr:'J’ai mal à la tête.',forms:'tut weh – tat weh – hat wehgetan',grammar:'Dat. + weh tun'},
  {id:798,de:'weiß',fr:'blanc',en:'white',category:'Adjectif',example:'Sie trägt ein weißes Hemd.',exampleFr:'Elle porte une chemise blanche.'},
  {id:799,de:'Weihnachten',fr:'Noël',en:'Christmas',category:'Nom',example:'Wir feiern Weihnachten mit der Familie.',exampleFr:'Nous fêtons Noël en famille.'},
  {id:800,de:'weinen',fr:'pleurer',en:'to cry',category:'Verbe',example:'Das Kind weint.',exampleFr:'L’enfant pleure.'},
  {id:801,de:'die Welt',article:'die',plural:'die Welten',fr:'le monde',en:'world',category:'Nom',example:'Wir leben in einer großen Welt.',exampleFr:'Nous vivons dans un grand monde.'},
  {id:802,de:'wenn',fr:'quand, si',en:'when, if',category:'Conjonction',example:'Wenn ich Zeit habe, lerne ich Deutsch.',exampleFr:'Si j’ai le temps, j’apprends l’allemand.',grammar:'Verbe conjugué à la fin'},
  {id:803,de:'werden',fr:'devenir, auxiliaire du futur et passif',en:'to become, auxiliary',category:'Verbe',example:'Ich werde Arzt.',exampleFr:'Je deviendrai médecin.',forms:'wird – wurde – ist geworden'},
  {id:804,de:'werfen',fr:'jeter',en:'to throw',category:'Verbe',example:'Er wirft den Ball.',exampleFr:'Il lance le ballon.',forms:'wirft – warf – hat geworfen'},
  {id:805,de:'die Werkstatt',article:'die',plural:'die Werkstätten',fr:"l'atelier",en:'workshop',category:'Nom',example:'Das Auto ist in der Werkstatt.',exampleFr:'La voiture est à l’atelier.'},
  {id:806,de:'der Wert',article:'der',plural:'die Werte',fr:'la valeur',en:'value',category:'Nom',example:'Gesundheit hat einen hohen Wert.',exampleFr:'La santé a une grande valeur.'},
  {id:807,de:'wesentlich',fr:'essentiel',en:'essential',category:'Adjectif',example:'Das ist ein wesentlicher Punkt.',exampleFr:'C’est un point essentiel.'},
  {id:808,de:'das Wetter',article:'das',plural:'—',fr:'le temps (météo)',en:'weather',category:'Nom',example:'Das Wetter ist heute schön.',exampleFr:'Il fait beau aujourd’hui.'},
  {id:809,de:'wichtig',fr:'important',en:'important',category:'Adjectif',example:'Deutsch ist wichtig für meine Zukunft.',exampleFr:'L’allemand est important pour mon avenir.'},
  {id:810,de:'widersprechen',fr:'contredire',en:'to contradict',category:'Verbe',example:'Sie widerspricht ihrem Vater.',exampleFr:'Elle contredit son père.',forms:'widerspricht – widersprach – hat widersprochen',grammar:'+ Dat.'},
  {id:811,de:'wiederholen',fr:'répéter, réviser',en:'to repeat, revise',category:'Verbe',example:'Könnten Sie das bitte wiederholen?',exampleFr:'Pourriez-vous répéter, s’il vous plaît ?'},
  {id:812,de:'wiedersehen',fr:'revoir',en:'to see again',category:'Verbe',example:'Ich freue mich, dich wiederzusehen.',exampleFr:'Je suis content de te revoir.',forms:'sieht wieder – sah wieder – hat wiedergesehen',grammar:'Verbe séparable'},
  {id:813,de:'willkommen',fr:'bienvenue',en:'welcome',category:'Adjectif',example:'Herzlich willkommen!',exampleFr:'Bienvenue !'},
  {id:814,de:'der Winter',article:'der',plural:'die Winter',fr:"l'hiver",en:'winter',category:'Nom',example:'Im Winter ist es kalt.',exampleFr:'En hiver, il fait froid.'},
  {id:815,de:'wirklich',fr:'vraiment, réel',en:'really, real',category:'Adverbe',example:'Das ist wirklich interessant.',exampleFr:'C’est vraiment intéressant.'},
  {id:816,de:'wirksam',fr:'efficace',en:'effective',category:'Adjectif',example:'Das Medikament ist sehr wirksam.',exampleFr:'Le médicament est très efficace.'},
  {id:817,de:'die Wirtschaft',article:'die',plural:'die Wirtschaften',fr:"l'économie",en:'economy',category:'Nom',example:'Die Wirtschaft wächst.',exampleFr:'L’économie croît.'},
  {id:818,de:'wissen',fr:'savoir',en:'to know',category:'Verbe',example:'Ich weiß die Antwort.',exampleFr:'Je connais la réponse.',forms:'weiß – wusste – hat gewusst'},
  {id:819,de:'die Wissenschaft',article:'die',plural:'die Wissenschaften',fr:'la science',en:'science',category:'Nom',example:'Die Wissenschaft entwickelt sich schnell.',exampleFr:'La science se développe rapidement.'},
  {id:820,de:'die Woche',article:'die',plural:'die Wochen',fr:'la semaine',en:'week',category:'Nom',example:'Nächste Woche habe ich Urlaub.',exampleFr:'La semaine prochaine, je suis en vacances.'},
  {id:821,de:'das Wochenende',article:'das',plural:'die Wochenenden',fr:'le week-end',en:'weekend',category:'Nom',example:'Am Wochenende besuche ich meine Eltern.',exampleFr:'Le week-end, je rends visite à mes parents.'},
  {id:822,de:'woher',fr:"d'où",en:'where from',category:'Adverbe',example:'Woher kommst du?',exampleFr:'D’où viens-tu ?'},
  {id:823,de:'wohin',fr:'où (direction)',en:'where to',category:'Adverbe',example:'Wohin gehst du?',exampleFr:'Où vas-tu ?'},
  {id:824,de:'sich wohlfühlen',fr:'se sentir bien',en:'to feel comfortable',category:'Verbe',example:'Ich fühle mich hier wohl.',exampleFr:'Je me sens bien ici.'},
  {id:825,de:'wohnen',fr:'habiter',en:'to live, reside',category:'Verbe',example:'Ich wohne in Agadir.',exampleFr:'J’habite à Agadir.'},
  {id:826,de:'die Wohnung',article:'die',plural:'die Wohnungen',fr:"l'appartement",en:'apartment',category:'Nom',example:'Wir suchen eine Wohnung.',exampleFr:'Nous cherchons un appartement.'},
  {id:827,de:'wunderbar',fr:'merveilleux',en:'wonderful',category:'Adjectif',example:'Das Wetter ist wunderbar.',exampleFr:'Le temps est merveilleux.'},
  {id:828,de:'sich wundern über',fr:"s'étonner de",en:'to be surprised about',category:'Expression',example:'Ich wundere mich über seine Antwort.',exampleFr:'Je suis étonné de sa réponse.',grammar:'+ Akk.'},
  {id:829,de:'der Wunsch',article:'der',plural:'die Wünsche',fr:'le souhait',en:'wish',category:'Nom',example:'Ich habe einen großen Wunsch.',exampleFr:'J’ai un grand souhait.'},
  {id:830,de:'wünschen',fr:'souhaiter',en:'to wish',category:'Verbe',example:'Ich wünsche dir viel Erfolg.',exampleFr:'Je te souhaite beaucoup de succès.'},
  {id:831,de:'wütend',fr:'en colère',en:'angry',category:'Adjectif',example:'Warum bist du so wütend?',exampleFr:'Pourquoi es-tu si en colère ?'},
  {id:832,de:'zahlen',fr:'payer',en:'to pay',category:'Verbe',example:'Ich möchte bitte zahlen.',exampleFr:'Je voudrais payer, s’il vous plaît.'},
  {id:833,de:'zählen',fr:'compter',en:'to count',category:'Verbe',example:'Kannst du bis hundert zählen?',exampleFr:'Peux-tu compter jusqu’à cent ?'},
  {id:834,de:'die Zahl',article:'die',plural:'die Zahlen',fr:'le nombre, le chiffre',en:'number',category:'Nom',example:'Welche Zahl ist richtig?',exampleFr:'Quel nombre est correct ?'},
  {id:835,de:'zahlreich',fr:'nombreux',en:'numerous',category:'Adjectif',example:'Es gibt zahlreiche Möglichkeiten.',exampleFr:'Il existe de nombreuses possibilités.'},
  {id:836,de:'der Zahn',article:'der',plural:'die Zähne',fr:'la dent',en:'tooth',category:'Nom',example:'Mein Zahn tut weh.',exampleFr:'J’ai mal à une dent.'},
  {id:837,de:'sich zanken mit',fr:'se chamailler avec',en:'to quarrel with',category:'Expression',example:'Die Kinder zanken sich miteinander.',exampleFr:'Les enfants se chamaillent.',grammar:'mit + Dat.'},
  {id:838,de:'zeichnen',fr:'dessiner',en:'to draw',category:'Verbe',example:'Sie zeichnet ein Haus.',exampleFr:'Elle dessine une maison.'},
  {id:839,de:'die Zeichnung',article:'die',plural:'die Zeichnungen',fr:'le dessin',en:'drawing',category:'Nom',example:'Die Zeichnung ist sehr schön.',exampleFr:'Le dessin est très beau.'},
  {id:840,de:'zeigen',fr:'montrer',en:'to show',category:'Verbe',example:'Kannst du mir den Weg zeigen?',exampleFr:'Peux-tu me montrer le chemin ?',grammar:'+ Dat. + Akk.'},
  {id:841,de:'die Zeile',article:'die',plural:'die Zeilen',fr:'la ligne',en:'line',category:'Nom',example:'Lies bitte die nächste Zeile.',exampleFr:'Lis la ligne suivante, s’il te plaît.'},
  {id:842,de:'die Zeit',article:'die',plural:'die Zeiten',fr:'le temps',en:'time',category:'Nom',example:'Ich habe heute keine Zeit.',exampleFr:'Je n’ai pas le temps aujourd’hui.'},
  {id:843,de:'die Zeitung',article:'die',plural:'die Zeitungen',fr:'le journal',en:'newspaper',category:'Nom',example:'Mein Vater liest die Zeitung.',exampleFr:'Mon père lit le journal.'},
  {id:844,de:'der Zettel',article:'der',plural:'die Zettel',fr:'le bout de papier, la note',en:'note, slip of paper',category:'Nom',example:'Schreib es auf einen Zettel.',exampleFr:'Écris-le sur un bout de papier.'},
  {id:845,de:'ziehen',fr:'tirer',en:'to pull',category:'Verbe',example:'Zieh bitte die Tür zu.',exampleFr:'Ferme la porte en tirant.',forms:'zieht – zog – hat gezogen'},
  {id:846,de:'das Ziel',article:'das',plural:'die Ziele',fr:'le but, l’objectif',en:'goal, destination',category:'Nom',example:'Mein Ziel ist die Approbation.',exampleFr:'Mon objectif est l’Approbation.'},
  {id:847,de:'ziemlich',fr:'assez, plutôt',en:'quite, rather',category:'Adverbe',example:'Es ist heute ziemlich kalt.',exampleFr:'Il fait assez froid aujourd’hui.'},
  {id:848,de:'zittern',fr:'trembler',en:'to tremble',category:'Verbe',example:'Sie zittert vor Angst.',exampleFr:'Elle tremble de peur.'},
  {id:849,de:'zögern',fr:'hésiter',en:'to hesitate',category:'Verbe',example:'Zögere nicht!',exampleFr:'N’hésite pas !'},
  {id:850,de:'der Zoll',article:'der',plural:'—',fr:'la douane',en:'customs',category:'Nom',example:'Wir müssen durch die Zollkontrolle.',exampleFr:'Nous devons passer le contrôle douanier.'},
  {id:851,de:'der Zucker',article:'der',plural:'—',fr:'le sucre',en:'sugar',category:'Nom',example:'Ich nehme keinen Zucker.',exampleFr:'Je ne prends pas de sucre.'},
  {id:852,de:'zuerst',fr:"d'abord",en:'first, at first',category:'Adverbe',example:'Zuerst frühstücke ich.',exampleFr:'D’abord, je prends mon petit-déjeuner.'},
  {id:853,de:'zufrieden',fr:'satisfait, content',en:'satisfied',category:'Adjectif',example:'Ich bin mit dem Ergebnis zufrieden.',exampleFr:'Je suis satisfait du résultat.',grammar:'mit + Dat.'},
  {id:854,de:'der Zug',article:'der',plural:'die Züge',fr:'le train',en:'train',category:'Nom',example:'Ich fahre mit dem Zug.',exampleFr:'Je prends le train.'},
  {id:855,de:'zuhören',fr:'écouter',en:'to listen',category:'Verbe',example:'Hör mir bitte zu!',exampleFr:'Écoute-moi, s’il te plaît !',forms:'hört zu – hörte zu – hat zugehört',grammar:'+ Dat., verbe séparable'},
  {id:856,de:'die Zukunft',article:'die',plural:'die Zukünfte',fr:"l'avenir",en:'future',category:'Nom',example:'Ich denke oft an die Zukunft.',exampleFr:'Je pense souvent à l’avenir.'},
  {id:857,de:'zuletzt',fr:'en dernier, finalement',en:'last, finally',category:'Adverbe',example:'Zuletzt haben wir Kaffee getrunken.',exampleFr:'Finalement, nous avons bu du café.'},
  {id:858,de:'zumachen',fr:'fermer',en:'to close',category:'Verbe',example:'Mach bitte die Tür zu.',exampleFr:'Ferme la porte, s’il te plaît.',grammar:'Verbe séparable'},
  {id:859,de:'zurückgeben',fr:'rendre, restituer',en:'to give back',category:'Verbe',example:'Ich muss das Buch zurückgeben.',exampleFr:'Je dois rendre le livre.',forms:'gibt zurück – gab zurück – hat zurückgegeben',grammar:'Verbe séparable'},
  {id:860,de:'zurückkommen',fr:'revenir',en:'to come back',category:'Verbe',example:'Wann kommst du zurück?',exampleFr:'Quand reviens-tu ?',forms:'kommt zurück – kam zurück – ist zurückgekommen',grammar:'Verbe séparable'},
  {id:861,de:'zusammenfassen',fr:'résumer',en:'to summarize',category:'Verbe',example:'Kannst du den Text zusammenfassen?',exampleFr:'Peux-tu résumer le texte ?',forms:'fasst zusammen – fasste zusammen – hat zusammengefasst',grammar:'Verbe séparable'},
  {id:862,de:'die Zusammenfassung',article:'die',plural:'die Zusammenfassungen',fr:'le résumé',en:'summary',category:'Nom',example:'Schreib eine kurze Zusammenfassung.',exampleFr:'Écris un court résumé.'},
  {id:863,de:'zusätzlich',fr:'supplémentaire, en plus',en:'additional, additionally',category:'Adverbe',example:'Es gibt zusätzliche Informationen.',exampleFr:'Il y a des informations supplémentaires.'},
  {id:864,de:'zweifeln an',fr:'douter de',en:'to doubt',category:'Expression',example:'Ich zweifle an seiner Aussage.',exampleFr:'Je doute de sa déclaration.',grammar:'+ Dat.'},
  {id:865,de:'zu viel',fr:'trop',en:'too much',category:'Adverbe',example:'Du isst zu viel Zucker.',exampleFr:'Tu manges trop de sucre.'},
  {id:866,de:'zwischen',fr:'entre',en:'between',category:'Préposition',example:'Das Haus steht zwischen zwei Bäumen.',exampleFr:'La maison se trouve entre deux arbres.',grammar:'+ Dat. (position) / Akk. (direction)'}
]

const uiText = {
  fr: {
    title:'Wörterbuch B1', subtitle:'Ton compagnon de vocabulaire allemand',
    search:'Rechercher en allemand, français ou anglais...',
    all:'Tous', favorites:'Favoris', words:'mots', result:'résultats',
    categories:'Catégories', alphabet:'Alphabet', noResult:'Aucun mot trouvé',
    detail:'Fiche de vocabulaire', example:'Exemple', translation:'Traduction',
    grammar:'Grammaire', forms:'Conjugaison', plural:'Pluriel',
    listen:'Écouter', favorite:'Ajouter aux favoris', remove:'Retirer des favoris',
    practice:'Mode révision', next:'Suivant', reveal:'Voir la réponse',
    correct:'Correct !', incorrect:'Réessaie !', close:'Fermer',
    progress:'Progression', allWords:'Tous les mots', revision:'Réviser mes favoris',
    emptyFavorites:'Aucun favori pour le moment.',
    letter:'Lettre', noPractice:'Ajoute des favoris pour commencer une révision.',
    previous:'Précédent', definition:'Définition', level:'Niveau B1'
  },
  de: {
    title:'Wörterbuch B1', subtitle:'Dein Begleiter für deutschen Wortschatz',
    search:'Auf Deutsch, Französisch oder Englisch suchen...',
    all:'Alle', favorites:'Favoriten', words:'Wörter', result:'Ergebnisse',
    categories:'Kategorien', alphabet:'Alphabet', noResult:'Keine Wörter gefunden',
    detail:'Wortschatzkarte', example:'Beispiel', translation:'Übersetzung',
    grammar:'Grammatik', forms:'Konjugation', plural:'Plural',
    listen:'Anhören', favorite:'Zu Favoriten hinzufügen', remove:'Aus Favoriten entfernen',
    practice:'Wiederholungsmodus', next:'Weiter', reveal:'Antwort zeigen',
    correct:'Richtig!', incorrect:'Versuch es noch einmal!', close:'Schließen',
    progress:'Fortschritt', allWords:'Alle Wörter', revision:'Favoriten wiederholen',
    emptyFavorites:'Noch keine Favoriten.',
    letter:'Buchstabe', noPractice:'Füge Favoriten hinzu, um zu üben.',
    previous:'Zurück', definition:'Definition', level:'Niveau B1'
  },
  en: {
    title:'Wörterbuch B1', subtitle:'Your German vocabulary companion',
    search:'Search in German, French or English...',
    all:'All', favorites:'Favorites', words:'words', result:'results',
    categories:'Categories', alphabet:'Alphabet', noResult:'No words found',
    detail:'Vocabulary card', example:'Example', translation:'Translation',
    grammar:'Grammar', forms:'Conjugation', plural:'Plural',
    listen:'Listen', favorite:'Add to favorites', remove:'Remove from favorites',
    practice:'Revision mode', next:'Next', reveal:'Show answer',
    correct:'Correct!', incorrect:'Try again!', close:'Close',
    progress:'Progress', allWords:'All words', revision:'Review favorites',
    emptyFavorites:'No favorites yet.',
    letter:'Letter', noPractice:'Add favorites to start reviewing.',
    previous:'Previous', definition:'Definition', level:'B1 level'
  },
  ar: {
    title:'Wörterbuch B1', subtitle:'رفيقك لتعلم المفردات الألمانية',
    search:'ابحث بالألمانية أو الفرنسية أو الإنجليزية...',
    all:'الكل', favorites:'المفضلة', words:'كلمة', result:'نتيجة',
    categories:'التصنيفات', alphabet:'الأبجدية', noResult:'لم يتم العثور على كلمات',
    detail:'بطاقة المفردات', example:'مثال', translation:'الترجمة',
    grammar:'القواعد', forms:'التصريف', plural:'الجمع',
    listen:'استمع', favorite:'أضف إلى المفضلة', remove:'إزالة من المفضلة',
    practice:'وضع المراجعة', next:'التالي', reveal:'إظهار الإجابة',
    correct:'صحيح!', incorrect:'حاول مرة أخرى!', close:'إغلاق',
    progress:'التقدم', allWords:'جميع الكلمات', revision:'مراجعة المفضلة',
    emptyFavorites:'لا توجد كلمات مفضلة بعد.',
    letter:'الحرف', noPractice:'أضف كلمات إلى المفضلة لبدء المراجعة.',
    previous:'السابق', definition:'المعنى', level:'المستوى B1'
  }
}

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const categories = ['Nom','Verbe','Adjectif','Adverbe','Préposition','Expression','Conjonction','Pronom','Grammaire']

export default function WoerterbuchB1Page() {
  const { language, isRTL } = useLanguage() as {
    language?: 'fr'|'de'|'en'|'ar'
    isRTL: boolean
  }
  const lang = language || 'fr'
  const t = uiText[lang]
  const [query,setQuery] = useState('')
  const [letter,setLetter] = useState('Alle')
  const [category,setCategory] = useState('Alle')
  const [favorites,setFavorites] = useState<number[]>([])
  const [selected,setSelected] = useState<Word|null>(null)
  const [showFavorites,setShowFavorites] = useState(false)
  const [practice,setPractice] = useState(false)
  const [practiceIndex,setPracticeIndex] = useState(0)
  const [revealed,setRevealed] = useState(false)
  const [known,setKnown] = useState<number[]>([])

  useEffect(()=>{
    try {
      const saved = localStorage.getItem('deutsch_erfolg_woerterbuch_favorites')
      if(saved) setFavorites(JSON.parse(saved))
    } catch {}
  },[])

  useEffect(()=>{
    localStorage.setItem('deutsch_erfolg_woerterbuch_favorites',JSON.stringify(favorites))
  },[favorites])

  const filtered = useMemo(()=>{
    return vocabulary.filter(w=>{
      const q = query.trim().toLowerCase()
      const matchesSearch = !q || [w.de,w.fr,w.en,w.article,w.plural,w.grammar,w.forms].filter(Boolean).some(v=>String(v).toLowerCase().includes(q))
      const matchesLetter = letter==='Alle' || letter==='All' || letter==='Tout' || w.de.replace(/^(der|die|das)\s+/,'').toUpperCase().startsWith(letter)
      const matchesCategory = category==='Alle' || category==='All' || w.category===category
      const matchesFavorites = !showFavorites || favorites.includes(w.id)
      return matchesSearch && matchesLetter && matchesCategory && matchesFavorites
    })
  },[query,letter,category,showFavorites,favorites])

  const revisionWords = useMemo(()=>vocabulary.filter(w=>favorites.includes(w.id)),[favorites])
  const currentPractice = revisionWords.length ? revisionWords[practiceIndex % revisionWords.length] : null

  const toggleFavorite = (id:number) => {
    setFavorites(old=>old.includes(id)?old.filter(x=>x!==id):[...old,id])
  }

  const speak = (word:string) => {
    if(typeof window==='undefined' || !('speechSynthesis' in window)) return
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(word)
    utterance.lang='de-DE'
    utterance.rate=0.85
    window.speechSynthesis.speak(utterance)
  }

  const openPractice = () => {
    setPractice(true)
    setPracticeIndex(0)
    setRevealed(false)
    setKnown([])
  }

  const closePractice = () => {
    setPractice(false)
    setRevealed(false)
  }

  const categoryLabel = (cat:string) => {
    if(lang==='ar') {
      const map:Record<string,string> = {Nom:'اسم',Verbe:'فعل',Adjectif:'صفة',Adverbe:'ظرف',Préposition:'حرف جر',Expression:'تعبير',Conjonction:'أداة ربط',Pronom:'ضمير',Grammaire:'قواعد'}
      return map[cat] || cat
    }
    if(lang==='de') {
      const map:Record<string,string> = {Nom:'Nomen',Verbe:'Verben',Adjectif:'Adjektive',Adverbe:'Adverbien',Préposition:'Präpositionen',Expression:'Ausdruck',Conjonction:'Konjunktion',Pronom:'Pronomen',Grammaire:'Grammatik'}
      return map[cat] || cat
    }
    if(lang==='en') {
      const map:Record<string,string> = {Nom:'Noun',Verbe:'Verb',Adjectif:'Adjective',Adverbe:'Adverb',Préposition:'Preposition',Expression:'Expression',Conjonction:'Conjunction',Pronom:'Pronoun',Grammaire:'Grammar'}
      return map[cat] || cat
    }
    return cat
  }

  const favoriteCount = favorites.length

  return (
    <main dir={isRTL?'rtl':'ltr'} className="min-h-screen bg-[#F5F7FA] text-[#172B4D] pb-12">
      <style jsx global>{`
        .woerterbuch-scroll::-webkit-scrollbar{height:5px;width:5px}
        .woerterbuch-scroll::-webkit-scrollbar-thumb{background:#D6B56D;border-radius:20px}
        .wb-card{transition:all .18s ease}
        .wb-card:hover{transform:translateY(-2px);box-shadow:0 10px 28px rgba(23,43,77,.09)}
        @media(prefers-reduced-motion:reduce){.wb-card{transition:none}}
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-7 sm:py-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#172B4D] p-6 sm:p-9 text-white shadow-lg">
          <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-[#D6B56D]/10"/>
          <div className="absolute -bottom-28 right-1/3 h-64 w-64 rounded-full bg-white/5"/>
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#D6B56D]/15 border border-[#D6B56D]/30 px-3 py-1.5 text-[#F2DDA9] text-xs font-bold mb-4">
                <GraduationCap size={15}/> {t.level}
              </div>
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">{t.title}</h1>
              <p className="mt-2 text-white/70 text-sm sm:text-base">{t.subtitle}</p>
              <p className="mt-5 text-[#F2DDA9] text-sm font-semibold">
                {vocabulary.length} {t.words}
              </p>
            </div>
            <div className="flex gap-3">
              <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-4 min-w-[105px]">
                <BookOpen className="text-[#D6B56D] mb-2" size={22}/>
                <div className="text-2xl font-bold">{vocabulary.length}</div>
                <div className="text-xs text-white/65">{t.allWords}</div>
              </div>
              <div className="rounded-2xl bg-white/10 border border-white/10 px-4 py-4 min-w-[105px]">
                <Heart className="text-[#D6B56D] mb-2" size={22}/>
                <div className="text-2xl font-bold">{favoriteCount}</div>
                <div className="text-xs text-white/65">{t.favorites}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-3">
          <div className="relative">
            <Search className={`absolute top-1/2 -translate-y-1/2 text-slate-400 ${isRTL?'right-4':'left-4'}`} size={19}/>
            <input
              value={query}
              onChange={e=>setQuery(e.target.value)}
              placeholder={t.search}
              className={`w-full h-14 rounded-2xl bg-white border border-slate-200 shadow-sm outline-none focus:border-[#D6B56D] focus:ring-2 focus:ring-[#D6B56D]/20 text-sm ${isRTL?'pr-12 pl-4':'pl-12 pr-4'}`}
            />
            {query && <button onClick={()=>setQuery('')} className={`absolute top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700 ${isRTL?'left-4':'right-4'}`}><X size={17}/></button>}
          </div>
          <button
            onClick={openPractice}
            className="h-14 rounded-2xl bg-[#D6B56D] hover:bg-[#c7a65d] text-[#172B4D] font-bold px-5 flex items-center justify-center gap-2 shadow-sm transition"
          >
            <Brain size={19}/> {t.practice}
          </button>
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2">
          <button onClick={()=>setShowFavorites(false)} className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${!showFavorites?'bg-[#172B4D] text-white border-[#172B4D]':'bg-white text-slate-600 border-slate-200 hover:border-[#D6B56D]'}`}>
            <BookOpen size={15} className="inline mr-1.5"/>{t.all}
          </button>
          <button onClick={()=>setShowFavorites(true)} className={`rounded-full px-4 py-2 text-sm font-semibold border transition ${showFavorites?'bg-[#172B4D] text-white border-[#172B4D]':'bg-white text-slate-600 border-slate-200 hover:border-[#D6B56D]'}`}>
            <Heart size={15} className="inline mr-1.5"/>{t.favorites} ({favoriteCount})
          </button>
          <span className="text-xs text-slate-400 mx-1">{t.categories} :</span>
          <select value={category} onChange={e=>setCategory(e.target.value)} className="rounded-full bg-white border border-slate-200 px-3 py-2 text-sm outline-none focus:border-[#D6B56D]">
            <option value="Alle">{t.all}</option>
            {categories.map(c=><option key={c} value={c}>{categoryLabel(c)}</option>)}
          </select>
        </div>

        <section className="mt-7">
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-sm flex items-center gap-2"><Languages size={17} className="text-[#B58D3D]"/>{t.alphabet}</h2>
            <span className="text-xs text-slate-500">{filtered.length} {t.result}</span>
          </div>
          <div className="woerterbuch-scroll flex gap-1.5 overflow-x-auto pb-3">
            <button onClick={()=>setLetter('Alle')} className={`shrink-0 min-w-10 h-10 rounded-xl text-xs font-bold ${letter==='Alle'?'bg-[#172B4D] text-white':'bg-white border border-slate-200 text-slate-600 hover:border-[#D6B56D]'}`}>{t.all}</button>
            {alphabet.map(l=><button key={l} onClick={()=>setLetter(l)} className={`shrink-0 w-10 h-10 rounded-xl text-sm font-bold ${letter===l?'bg-[#172B4D] text-white':'bg-white border border-slate-200 text-slate-600 hover:border-[#D6B56D]'}`}>{l}</button>)}
          </div>
        </section>

        {filtered.length===0 ? (
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center mt-3">
            <Search size={35} className="mx-auto text-slate-300 mb-3"/>
            <p className="font-semibold">{showFavorites && favorites.length===0 ? t.emptyFavorites : t.noResult}</p>
            <button onClick={()=>{setQuery('');setLetter('Alle');setCategory('Alle');setShowFavorites(false)}} className="mt-3 text-sm text-[#9B762E] font-semibold">{t.allWords}</button>
          </div>
        ) : (
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map(w=>(
              <article key={w.id} className="wb-card bg-white border border-slate-200 rounded-2xl p-4 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <button onClick={()=>setSelected(w)} className="text-left min-w-0 flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xl font-extrabold text-[#172B4D]">{w.de}</span>
                      {w.article && <span className="text-[10px] font-bold rounded-md px-2 py-1 bg-[#F4EBD8] text-[#8D6B2F]">{w.article}</span>}
                    </div>
                    <p className="mt-1 text-sm font-semibold text-slate-700">{w.fr}</p>
                    <p className="mt-0.5 text-xs text-slate-400">{w.en}</p>
                  </button>
                  <div className="flex items-center gap-1">
                    <button onClick={()=>speak(w.de)} title={t.listen} className="p-2 rounded-xl text-slate-400 hover:text-[#172B4D] hover:bg-slate-100"><Volume2 size={17}/></button>
                    <button onClick={()=>toggleFavorite(w.id)} title={favorites.includes(w.id)?t.remove:t.favorite} className={`p-2 rounded-xl ${favorites.includes(w.id)?'text-amber-500 bg-amber-50':'text-slate-300 hover:text-amber-500 hover:bg-amber-50'}`}><Star size={17} fill={favorites.includes(w.id)?'currentColor':'none'}/></button>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[10px] font-semibold rounded-full bg-slate-100 text-slate-500 px-2.5 py-1">{categoryLabel(w.category)}</span>
                  <button onClick={()=>setSelected(w)} className="text-xs font-bold text-[#9B762E] hover:text-[#172B4D] flex items-center gap-1">
                    {t.detail} <ChevronRight size={14}/>
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-[#F0E8D8] border border-[#E6D8B8] p-4 sm:p-5 flex gap-3 items-start">
          <Sparkles className="text-[#9B762E] shrink-0 mt-0.5" size={20}/>
          <div>
            <p className="font-bold text-sm text-[#172B4D]">Lerntipp</p>
            <p className="text-xs sm:text-sm text-[#5D523F] mt-1">Apprends les mots avec leur article et leur exemple. Révise régulièrement tes favoris pour mémoriser durablement le vocabulaire B1.</p>
          </div>
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 bg-[#101D32]/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4" onClick={()=>setSelected(null)}>
          <div onClick={e=>e.stopPropagation()} className="w-full sm:max-w-xl max-h-[90vh] overflow-y-auto bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl">
            <div className="bg-[#172B4D] text-white p-6 rounded-t-3xl">
              <div className="flex justify-between items-start gap-4">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#D6B56D] font-bold">{t.detail} · B1</span>
                  <h2 className="text-3xl font-extrabold mt-2">{selected.de}</h2>
                  <p className="mt-2 text-white/75">{selected.fr} · {selected.en}</p>
                </div>
                <button onClick={()=>setSelected(null)} className="p-2 rounded-xl bg-white/10 hover:bg-white/20"><X size={20}/></button>
              </div>
              <div className="flex gap-2 mt-5">
                <button onClick={()=>speak(selected.de)} className="rounded-xl bg-[#D6B56D] text-[#172B4D] px-4 py-2.5 text-sm font-bold flex items-center gap-2"><Volume2 size={17}/>{t.listen}</button>
                <button onClick={()=>toggleFavorite(selected.id)} className="rounded-xl bg-white/10 text-white px-4 py-2.5 text-sm font-semibold flex items-center gap-2"><Star size={16} fill={favorites.includes(selected.id)?'currentColor':'none'}/>{favorites.includes(selected.id)?t.remove:t.favorite}</button>
              </div>
            </div>
            <div className="p-5 sm:p-6 space-y-4">
              {selected.plural && <div className="rounded-xl bg-slate-50 border border-slate-100 p-4"><p className="text-xs text-slate-400 font-bold uppercase">{t.plural}</p><p className="mt-1 font-semibold">{selected.plural}</p></div>}
              {selected.forms && <div className="rounded-xl bg-[#F4EBD8] border border-[#E6D8B8] p-4"><p className="text-xs text-[#8D6B2F] font-bold uppercase">{t.forms}</p><p className="mt-1 font-semibold text-[#172B4D]">{selected.forms}</p></div>}
              {selected.grammar && <div className="rounded-xl bg-blue-50 border border-blue-100 p-4"><p className="text-xs text-blue-600 font-bold uppercase">{t.grammar}</p><p className="mt-1 text-sm text-blue-900">{selected.grammar}</p></div>}
              <div className="rounded-xl border border-slate-200 p-4">
                <p className="text-xs text-slate-400 font-bold uppercase">{t.example}</p>
                <p className="mt-2 text-lg font-semibold text-[#172B4D]">{selected.example}</p>
                <p className="mt-1 text-sm text-slate-500">{selected.exampleFr}</p>
                <button onClick={()=>speak(selected.example)} className="mt-3 text-xs font-semibold text-[#9B762E] flex items-center gap-1.5"><Volume2 size={14}/>{t.listen}</button>
              </div>
              <button onClick={()=>setSelected(null)} className="w-full rounded-xl bg-[#172B4D] hover:bg-[#233D66] text-white font-bold py-3">{t.close}</button>
            </div>
          </div>
        </div>
      )}

      {practice && (
        <div className="fixed inset-0 z-[60] bg-[#101D32]/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#172B4D] text-white p-5 flex justify-between items-center">
              <div className="flex items-center gap-2 font-bold"><Brain className="text-[#D6B56D]"/>{t.practice}</div>
              <button onClick={closePractice} className="p-2 rounded-xl hover:bg-white/10"><X size={19}/></button>
            </div>
            {!currentPractice ? (
              <div className="p-8 text-center">
                <Bookmark size={35} className="mx-auto text-[#D6B56D] mb-3"/>
                <p className="font-semibold">{t.noPractice}</p>
                <button onClick={closePractice} className="mt-5 bg-[#172B4D] text-white rounded-xl px-5 py-3 font-bold">{t.close}</button>
              </div>
            ) : (
              <div className="p-6 sm:p-8">
                <div className="flex justify-between text-xs text-slate-400 mb-3">
                  <span>{t.progress}</span>
                  <span>{practiceIndex+1} / {revisionWords.length}</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-[#D6B56D] rounded-full transition-all" style={{width:`${((practiceIndex+1)/revisionWords.length)*100}%`}}/>
                </div>
                <div className="text-center">
                  <span className="text-xs font-bold text-[#9B762E] uppercase tracking-wider">{t.translation}</span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#172B4D] mt-3">{currentPractice.fr}</h3>
                  <p className="text-sm text-slate-400 mt-1">{currentPractice.en}</p>
                  {revealed ? (
                    <div className="mt-7 rounded-2xl bg-[#F4EBD8] border border-[#E6D8B8] p-5">
                      <p className="text-2xl font-extrabold text-[#172B4D]">{currentPractice.de}</p>
                      {currentPractice.article && <p className="mt-1 text-sm text-[#8D6B2F]">{currentPractice.article} · {currentPractice.plural || ''}</p>}
                      <p className="mt-3 text-sm text-slate-600">{currentPractice.example}</p>
                    </div>
                  ) : (
                    <button onClick={()=>setRevealed(true)} className="mt-8 w-full rounded-xl bg-[#172B4D] text-white font-bold py-4">{t.reveal}</button>
                  )}
                </div>
                {revealed && (
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <button onClick={()=>{setKnown(old=>[...old,currentPractice.id]);setPracticeIndex(i=>(i+1)%revisionWords.length);setRevealed(false)}} className="rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-100 py-3 font-bold text-sm flex items-center justify-center gap-2"><CheckCircle2 size={17}/>{t.correct}</button>
                    <button onClick={()=>{setPracticeIndex(i=>(i+1)%revisionWords.length);setRevealed(false)}} className="rounded-xl bg-amber-50 text-amber-800 border border-amber-100 py-3 font-bold text-sm">{t.next}</button>
                  </div>
                )}
                <p className="text-center text-xs text-slate-400 mt-5">{known.length} / {revisionWords.length} {t.progress}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  )
}

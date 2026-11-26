# Deutsch-Erfolg – moteur commun des leçons et exercices

Ce deuxième lot ajoute les composants d'affichage et la correction serveur au premier lot de fondations.

## Fichiers à intégrer

Copier/fusionner ces chemins dans la racine du projet Next.js :

- `components/grammar/ExerciseRenderer.tsx`
- `components/grammar/LessonRenderer.tsx`
- `app/api/grammar/submit/route.ts`
- `lib/grammar/server/gradeExercise.ts`
- `lib/grammar/server/answerKeys.ts`
- `content/grammar/kapitel-01/answer-key.ts` (version corrigée de l'explication)
- `supabase/migrations/202611250001_create_grammar_exercise_attempts.sql`
- `public/assets/slots/lesson.personalpronomen.jpg`

Le paquet inclut aussi les fichiers `content/` et `lib/grammar/` du premier lot afin que l'arborescence soit complète. Fusionner les dossiers ; ne pas remplacer les autres fichiers du projet.

## Étapes d'installation

1. Copier les fichiers dans le projet en respectant les chemins.
2. Dans Supabase → SQL Editor, exécuter le contenu de `supabase/migrations/202611250001_create_grammar_exercise_attempts.sql`.
3. Vérifier que les variables `NEXT_PUBLIC_SUPABASE_URL` et `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` existent déjà dans l'environnement du projet.
4. Lancer `npm run build`, puis `npm run dev`.

## Ce que fait ce lot

- `LessonRenderer` affiche le cours et ses blocs (paragraphes, tableaux, exemples, images, encadrés) dans la langue sélectionnée.
- `ExerciseRenderer` affiche les six formats de questions, recueille les réponses et envoie la tentative à l'API.
- L'API vérifie le jeton Supabase, confirme que le compte a le rôle `student`, corrige côté serveur, puis enregistre la tentative.
- Les bonnes réponses ne sont pas envoyées au navigateur avant l'envoi de la tentative.
- Extra-Kick est refusé côté serveur tant que chaque Übung Meistertraining du chapitre n'a pas obtenu au moins une note de 100/100.
- Les questions de rédaction sont enregistrées, mais restent à corriger manuellement et ne sont pas incluses dans le calcul automatique.
- Les tentatives sont enregistrées dans `grammar_exercise_attempts`, avec l'historique de chaque Übung.

## Sécurité et limites actuelles

- La route utilise la clé publishable/anon avec le jeton de l'étudiant. Elle n'utilise pas la clé `service_role`.
- La table applique la RLS : un étudiant ne peut lire et insérer que ses propres tentatives.
- Les anciennes tables Supabase ne sont pas supprimées ni modifiées.
- Ce lot n'intègre pas encore le nouveau moteur à la page de navigation étudiante : il fournit les composants et l'API prêts à être branchés à la page Kapitel.
- Les règles d'accès PRO/free doivent être reliées au nouveau registre avant mise en production, en reprenant précisément la règle d'accès actuelle du site.
- Pour ajouter un nouveau chapitre, ajouter ses fichiers de cours/exercices, son corrigé serveur, puis enregistrer les nouveaux identifiants dans `chapterRegistry.ts` et `answerKeys.ts`.

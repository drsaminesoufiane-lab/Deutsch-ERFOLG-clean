-- Nouvelle table pour les tentatives des exercices codés.
-- Les anciennes tables grammar_ubungen / grammar_exercises ne sont pas supprimées.

create table if not exists public.grammar_exercise_attempts (
  id uuid primary key default gen_random_uuid(),
  student_id uuid not null references public.profiles(id) on delete cascade,
  chapter_id text not null,
  exercise_set_id text not null,
  category text not null check (category in ('meistertraining', 'extra_kick')),
  score numeric(5,2) null check (score is null or (score >= 0 and score <= 100)),
  total_questions integer not null default 0 check (total_questions >= 0),
  correct_answers integer not null default 0 check (correct_answers >= 0 and correct_answers <= total_questions),
  manual_questions integer not null default 0 check (manual_questions >= 0),
  answers jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists grammar_exercise_attempts_student_set_created_idx
  on public.grammar_exercise_attempts (student_id, exercise_set_id, created_at desc);

create index if not exists grammar_exercise_attempts_student_chapter_category_idx
  on public.grammar_exercise_attempts (student_id, chapter_id, category, created_at desc);

alter table public.grammar_exercise_attempts enable row level security;

grant select, insert on public.grammar_exercise_attempts to authenticated;

 drop policy if exists "Students can read their own grammar exercise attempts"
  on public.grammar_exercise_attempts;
create policy "Students can read their own grammar exercise attempts"
  on public.grammar_exercise_attempts
  for select
  to authenticated
  using (student_id = (select auth.uid()));

 drop policy if exists "Students can insert their own grammar exercise attempts"
  on public.grammar_exercise_attempts;
create policy "Students can insert their own grammar exercise attempts"
  on public.grammar_exercise_attempts
  for insert
  to authenticated
  with check (
    student_id = (select auth.uid())
    and exists (
      select 1
      from public.profiles p
      where p.id = (select auth.uid())
        and p.role = 'student'
    )
  );

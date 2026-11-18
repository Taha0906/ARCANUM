-- Optional future backend schema. Not connected to the local demo.
create table if not exists public.academy_progress (
 user_id uuid primary key references auth.users(id) on delete cascade,
 xp integer not null default 0 check (xp >= 0),
 magical_order text,
 updated_at timestamptz not null default now()
);
create table if not exists public.academy_completions (
 user_id uuid not null references auth.users(id) on delete cascade,
 challenge_id text not null,
 completed_at timestamptz not null default now(),
 primary key(user_id,challenge_id)
);
alter table public.academy_progress enable row level security;
alter table public.academy_completions enable row level security;
create policy "Read own progress" on public.academy_progress for select to authenticated using (auth.uid()=user_id);
create policy "Read own completions" on public.academy_completions for select to authenticated using (auth.uid()=user_id);
-- No client write policies: awards must be issued by a verified server-side service.

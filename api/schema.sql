-- Supabase schema for the public unsubscribe endpoint (api/unsubscribe.js).
-- Run once in the Supabase SQL editor.

create table if not exists public.unsubscribes (
  email       text primary key,
  source      text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

-- RLS on with no policies = no anon/authenticated access at all. The endpoint
-- uses the service-role key, which bypasses RLS. Nobody can read this list with
-- the public anon key, which matters: it's a list of real email addresses.
alter table public.unsubscribes enable row level security;

-- The engine syncs by "everything newer than the last time I checked".
create index if not exists unsubscribes_created_at_idx
  on public.unsubscribes (created_at desc);

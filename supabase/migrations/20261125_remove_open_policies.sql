-- Already run in Supabase on 2026-11-25.
-- These "Allow all for admin" policies applied to every role, so anyone with the
-- project's public (anon) key could read, change or delete these tables.
-- The site only talks to Supabase with the service role key, which bypasses RLS,
-- so with RLS on and no policies, only the server can reach the data.
drop policy if exists "Allow all for admin" on public.subscribers;
drop policy if exists "Allow all for admin" on public.newsletters;
drop policy if exists "Allow all for admin" on public.email_events;
drop policy if exists "Allow all for admin" on public.newsletter_sends;
drop policy if exists "Allow all for admin" on public.newsletter_subscribers;

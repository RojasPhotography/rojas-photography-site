-- ============================================================
-- Rojas Photography Newsletter — Supabase Schema
-- Run this in the Supabase SQL Editor to create all tables.
-- ============================================================

-- Subscribers table
create table if not exists subscribers (
  id          bigint generated always as identity primary key,
  email       text not null unique,
  name        text,
  is_active   boolean not null default true,
  created_at  timestamptz not null default now(),
  unsubscribed_at timestamptz
);

-- Newsletters table (drafts + sent campaigns)
create table if not exists newsletters (
  id          bigint generated always as identity primary key,
  subject     text not null,
  content     text,           -- Beefree JSON design (for reloading in editor)
  html_content text,          -- Final rendered HTML to send
  status      text not null default 'draft', -- 'draft' | 'sending' | 'sent'
  created_by  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now(),
  sent_at     timestamptz
);

-- Email events table (sent/failed log per subscriber per newsletter)
create table if not exists email_events (
  id               bigint generated always as identity primary key,
  newsletter_id    bigint references newsletters(id) on delete cascade,
  subscriber_id    bigint references subscribers(id) on delete set null,
  subscriber_email text not null,
  event_type       text not null,   -- 'sent' | 'failed'
  created_at       timestamptz not null default now()
);

-- Index for fast subscriber lookups by email
create index if not exists subscribers_email_idx on subscribers(email);

-- Index for fast event lookups by newsletter
create index if not exists email_events_newsletter_idx on email_events(newsletter_id);

-- Row Level Security (disable for service role access — your backend uses the service role key)
alter table subscribers disable row level security;
alter table newsletters disable row level security;
alter table email_events disable row level security;

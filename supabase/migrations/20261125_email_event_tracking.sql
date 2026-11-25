-- Newsletter tracking upgrade (run once in Supabase → SQL Editor).
-- Safe to run more than once. Adds two optional columns; nothing is deleted.

alter table email_events add column if not exists link text;             -- which link was clicked
alter table email_events add column if not exists resend_email_id text;  -- Resend's id for the email

create index if not exists email_events_type_idx on email_events (newsletter_id, event_type);

# Newsletter System: Audit and Plan

Branch: `newsletter-hardening` · Written Nov 25, 2026

## What exists today

- `/newsletter-admin`: one page holding login, the Beefree editor, drafts, history, subscribers and the welcome sequence
- Sending: `/api/newsletter/send` loops through active subscribers in batches of 50 through Resend's regular email API
- Welcome sequence: email 1 is sent when someone signs up, emails 2 to 5 are queued and sent by a daily Vercel cron (9:00 UTC)
- Tracking: an open pixel only
- Signup: three components (popup, footer, inline). Only the footer form is in use now.

## Workflow audit: why it feels janky

These are the real causes of the "I think I messed this up" moments.

| # | What happens | Why it's a problem |
|---|---|---|
| W1 | **Send and Test send whatever was last *saved*, not what's on screen.** Edit after saving, click Send, and the older version goes out. | The biggest trust breaker. What you test isn't guaranteed to be what you send. |
| W2 | **Opening a draft doesn't load its content into the send buffer.** Open draft B and hit Send without saving, and draft A's HTML (or nothing) goes out under B's subject. | Silent wrong send. |
| W3 | **No "are you sure?" on Send Newsletter.** One click emails everyone. | Easy to fire by accident. |
| W4 | **No unsaved changes warning.** Opening another draft, editing a sequence email, or refreshing wipes unsaved work. | Lost work. |
| W5 | **Refreshing logs you out** (password only lives in page memory) and reloads a blank editor. | Feels broken. |
| W6 | **Sent drafts are deleted** and a separate copy is created. If a send fails halfway, the draft is gone anyway. | Lost work, confusing history. |
| W7 | **Delete draft has no confirmation.** | One misclick and it's gone. |
| W8 | **Drafts and welcome sequence emails share one editor and one set of buttons** that change depending on mode. | Easy to save into the wrong thing. |
| W9 | **Nine controls in one header row** (tabs, Save, Test, Subject, Send all mixed together). | No clear order of steps. |
| W10 | No preview text, no scheduling, no choice of who receives it, opens only. | Missing the basics a real tool has. |

## Security audit

| # | Issue | Fix |
|---|---|---|
| S1 | Admin password sent with every request and in URLs (`?password=`), which ends up in logs | Signed, HttpOnly session cookie after login |
| S2 | `GET /drafts`, `/stats`, `/beefree-token` have no lock. Anyone can read drafts and sent issues, and use your Beefree account | Require an admin session |
| S3 | Unsubscribe only needs an email, so anyone can unsubscribe anyone | Signed per-subscriber token. Old links still work but go to a confirm page |
| S4 | No one-click unsubscribe header (Gmail and Yahoo expect it) | Add `List-Unsubscribe` and `List-Unsubscribe-Post` |
| S5 | Signup accepts anything: no validation, mixed-case duplicates, bots, and anyone can pass `admin-manual-add` to skip the welcome sequence | Normalize and validate email, add a honeypot, only honor admin add with a session |
| S6 | New subscriber alert puts the name and email straight into HTML | Escape it |
| S7 | Login has no slowdown on wrong guesses | Small delay on failure, constant-time compare |

## Phases

### Phase 1: Make it safe and trustworthy *(DONE on this branch, not deployed; no database changes)*
Fixes S1 to S7 and W1 to W7.
- Cookie login, so you stay signed in for 12 hours and refresh no longer logs you out
- Every admin route locked
- Test and Send always save from the editor first, so they use exactly what's on screen
- Opening a draft loads its content. Unsaved changes are tracked and warned about
- Send shows a confirm box with the subject and recipient count
- Sending updates the draft itself to "sent" (no delete and copy). A draft that's already sending or sent can't be sent twice
- Delete draft asks first
- Signed unsubscribe links plus one-click unsubscribe headers. A full postal address goes in the footer (see "Needs you")
- Also fixed while in there: welcome-sequence emails 2 to 5 had **no unsubscribe link**; Resend errors were counted as "sent"; the signup form showed raw database errors to visitors
- Header now shows "Unsaved changes" or "Saved 10:42 AM", plus **+ New** and **Sign out**

**Still open after Phase 1:** a send that times out halfway (very large list) stays "sending". Phase 2's move to Broadcasts fixes that properly.

**How to test the preview:** sign in → + New → write → Send Test Email (lands in your inbox with the real footer) → open the draft from Drafts in another tab, confirm it matches → Send Newsletter and **Cancel** at the confirm box.

### Phase 2: Real sending pipeline *(needs your OK: database changes and possibly a Resend plan)*
- Move newsletter sends to **Resend Broadcasts**. Resend handles the queue, the unsubscribes and the compliance, and it's free up to 1,000 contacts
- Sync Supabase subscribers to a Resend Audience (Supabase stays the main list)
- Resend webhooks for delivered, opened, clicked, bounced and complained, stored in `email_events`
- Schedule a send for a date and time
- Clean up the schema: one up-to-date `schema.sql` matching the live database, move the loose SQL files into `supabase/migrations/`
- Lock down Supabase security rules (replace the "allow all" policies)

### Phase 3: A workflow that feels like a product *(first pass DONE on this branch: layout, step-by-step composer, autosave, preview text, phone preview, contacts, reports. Still to come: contact tags and invites, which need Phase 2)*
Split the single page into clear sections:
1. **Dashboard**: last issue's results, list size and growth, next scheduled send
2. **Newsletters**: a list of drafts, scheduled and sent, each with a status badge
3. **Composer**, a step-by-step flow: **Write → Details → Preview & Test → Audience → Send or Schedule**
   - Autosave every 30 seconds with a "Saved 10:42 AM" indicator
   - Preview text field, desktop and mobile preview
   - Brand template preloaded (green `#1F6B4D`, logo, footer)
4. **Contacts**: search, tags, source, consent type, import from CSV, "send invite"
5. **Welcome sequence**: its own screen with its own editor, never mixed with drafts
6. **Reports**: opens, clicks, top links, unsubscribes per issue

### Phase 4: Nice to haves
- One signup component sitewide with interest checkboxes; delete the unused popup and inline versions
- Preference center ("send me only events news")
- A 17hats hook: when a project is booked, offer "invite to newsletter"

## Strategy: one newsletter or several?

**One newsletter, with tags.** Here's why:
- You're a two-person team sending once a month. Three newsletters means three times the writing, and the cadence will slip.
- Your story is the same across services: helping people and organizations be seen as they really are. Headshots, events and video are chapters of that story, not separate brands.
- Clients cross over. The firm that books headshots is the one that hosts the gala.

**How to handle the differences:** tag every contact by interest (`headshots`, `events`, `video`) and by relationship (`client`, `prospect`, `partner`). Then:
- The monthly issue goes to everyone, with one short section that rotates the spotlight.
- Occasionally send a **targeted** note to one tag. Example: event organizers in January about spring event season, or team headshot leads before Q1 hiring. Those are short and personal, and they replace the monthly issue for that group that month rather than adding to it.

## Strategy: when to add someone

You're right to feel weird about it. Getting added without asking is exactly what you dislike when it happens to you, and it hurts deliverability too: spam complaints from people who never asked are what push email into junk folders.

Legally, U.S. law (CAN-SPAM) lets you email business contacts without prior opt-in as long as every email has an honest from line, a working unsubscribe and your postal address. I'm not a lawyer, though. The better standard for a premium brand is **permission**:

| Situation | Action |
|---|---|
| They signed up on the site | Add them. They get the welcome sequence |
| Paying client, after delivery | Ask in your delivery or thank-you email: "We send one short note a month. Want in?" Add them if they say yes |
| Real conversation (discovery call, Chamber meeting, event) | **Send a personal one-time invite** with a one-click "Yes, add me" link. Don't add them silently |
| Business card or LinkedIn connection only | Don't add. Invite only if a real conversation happens |
| Cold outreach lists (Apollo) | **Never** add to the newsletter. Keep them separate from your newsletter list |

Phase 3 builds this in: the Contacts screen records **source** and **consent** (`signed_up`, `said_yes`, `invited`) and has a "Send invite" button that emails the one-click link.

## Needs you before we go further
1. ~~Mailing address~~ Done: 1905 Generations Dr, Modesto, CA 95356 is in the footer.
2. **Optional:** add a `NEWSLETTER_SIGNING_SECRET` setting in Vercel (any long random string). Until then, the code falls back to an existing private key, which works fine.
3. Approve Phase 2 (database changes + Resend Broadcasts).

-- ============================================================
-- Rojas Photography — Welcome Sequence Setup
-- Run this in Supabase > SQL Editor
-- ============================================================

-- 1. Sequence email templates
CREATE TABLE IF NOT EXISTS sequence_emails (
  id           serial PRIMARY KEY,
  position     int NOT NULL,
  delay_days   int NOT NULL DEFAULT 0,
  subject      text NOT NULL,
  html_content text,
  json_content text,
  is_active    boolean NOT NULL DEFAULT true,
  created_at   timestamptz NOT NULL DEFAULT now(),
  updated_at   timestamptz NOT NULL DEFAULT now()
);

-- 2. Per-subscriber queue
CREATE TABLE IF NOT EXISTS sequence_queue (
  id                  serial PRIMARY KEY,
  subscriber_email    text NOT NULL,
  sequence_email_id   int NOT NULL REFERENCES sequence_emails(id),
  scheduled_for       timestamptz NOT NULL,
  sent_at             timestamptz,
  status              text NOT NULL DEFAULT 'pending', -- pending | sent | failed | skipped
  created_at          timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_sequence_queue_pending
  ON sequence_queue (status, scheduled_for)
  WHERE status = 'pending';

-- 3. Seed the 5 sequence email slots
--    Email 1 (position 1) is sent instantly via the subscribe API (the existing welcome email).
--    Emails 2-5 are queued and sent by the cron job.
--    HTML content for emails 2-5 is pre-written below — edit in the admin anytime.

INSERT INTO sequence_emails (position, delay_days, subject, html_content, is_active) VALUES

-- Email 1: Instant welcome (placeholder — actual send is handled by subscribe API)
(1, 0,
 'Welcome to Rojas Photography — we''re honored you''re here',
 '<p>This email is sent instantly by the subscribe API. Edit the content in <code>app/api/newsletter/subscribe/route.ts</code>.</p>',
 true),

-- Email 2: Day 2 — The Story
(2, 2,
 'The real reason we started Rojas Photography',
 '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <!-- Header -->
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>

  <!-- Body -->
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      Hey {{first_name}} — there''s something we''ve never told most people.
    </h1>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      When Alfonso first started doing photography, he almost quit after year one.
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Not because he wasn''t good at it. But because he kept watching businesses invest real money into their brand, their marketing, their websites — and then use photos that made them look smaller than they actually were.
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      A blurry headshot. A stock photo that looked nothing like the real team. A product shot taken on a phone in bad lighting. It frustrated him because he knew what was possible.
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      That''s when Niomi said something that changed everything: <em>"Stop waiting for clients who understand photography. Start showing them what they''re missing."</em>
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      So we did. We started photographing real teams, real businesses, real people — and showing them side by side what professional imagery actually does for credibility and trust.
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Today, after hundreds of sessions across Central Valley and California, that''s still why we do this. Not just to take photos — but to help organizations look as good on the outside as they actually are on the inside.
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 32px;">
      We''d love to hear what''s going on in your world. What kind of business are you building? What do you wish your brand imagery said about you?
    </p>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">
      Just hit reply — we read every single message.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:8px 0 0;">
      — Alfonso &amp; Niomi
    </p>
  </div>

  <!-- Signature -->
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>

  <!-- Footer -->
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">
      You''re receiving this because you signed up at rojasphotography.net.
      &nbsp;·&nbsp;
      <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>',
 true),

-- Email 3: Day 5 — What It's Actually Like to Work With Us
(3, 5,
 'Here''s exactly what working with us looks like',
 '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <!-- Header -->
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>

  <!-- Body -->
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      {{first_name}}, one thing we hear a lot: "I''m not sure what the process looks like."
    </h1>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Fair. So let us walk you through it — from first message to final images.
    </p>

    <!-- Steps -->
    <table style="width:100%;border-collapse:collapse;margin:24px 0;">
      <tr>
        <td style="vertical-align:top;padding:0 16px 20px 0;width:36px;">
          <div style="width:32px;height:32px;background:#0f3d2a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;text-align:center;line-height:32px;">1</div>
        </td>
        <td style="vertical-align:top;padding-bottom:20px;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">You reach out — we have a real conversation.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">A quick call or email exchange to understand your business, your goals, and what you actually need. No pressure, no pitch — just two professionals talking.</p>
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 16px 20px 0;">
          <div style="width:32px;height:32px;background:#0f3d2a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;text-align:center;line-height:32px;">2</div>
        </td>
        <td style="vertical-align:top;padding-bottom:20px;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">We plan everything together.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">Wardrobe, location, timing, team coordination — we guide you through every detail so the day of the shoot runs smoothly and nobody feels unprepared.</p>
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 16px 20px 0;">
          <div style="width:32px;height:32px;background:#0f3d2a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;text-align:center;line-height:32px;">3</div>
        </td>
        <td style="vertical-align:top;padding-bottom:20px;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">The shoot day — relaxed and efficient.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">Most corporate team shoots wrap in 90 minutes on-site. We come to you, set up quickly, and keep things moving. Your team doesn''t need to be "good on camera" — that''s our job.</p>
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 16px 0 0;">
          <div style="width:32px;height:32px;background:#0f3d2a;color:#fff;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:14px;font-weight:bold;text-align:center;line-height:32px;">4</div>
        </td>
        <td style="vertical-align:top;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">Delivery — fast, organized, ready to use.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">Professionally edited images delivered via a private online gallery, typically within 5–7 business days. High-resolution files, web-ready versions, and commercial licensing included.</p>
        </td>
      </tr>
    </table>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      We serve all of Central Valley — Modesto, Stockton, Fresno, Sacramento — and travel throughout California for the right project.
    </p>

    <div style="background:#f5f0ea;border-radius:12px;padding:24px 28px;margin:28px 0;">
      <p style="font-size:15px;line-height:1.7;color:#333;margin:0 0 16px;">
        Want to see the kind of work we deliver? Take a look at what we''ve done for businesses like yours.
      </p>
      <a href="https://rojasphotography.net/commercial" style="display:inline-block;background:#0f3d2a;color:#fff;padding:12px 28px;text-decoration:none;border-radius:50px;font-size:14px;font-weight:bold;">
        See Our Work
      </a>
    </div>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 4px;">Talk soon,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>

  <!-- Signature -->
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>

  <!-- Footer -->
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">
      You''re receiving this because you signed up at rojasphotography.net.
      &nbsp;·&nbsp;
      <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>',
 true),

-- Email 4: Day 8 — Social Proof
(4, 8,
 '50+ five-star reviews. Here''s what clients actually say.',
 '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <!-- Header -->
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>

  <!-- Body -->
  <div style="padding:40px 40px 32px;">
    <p style="font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#0f3d2a;font-weight:bold;margin:0 0 12px;">What clients say</p>
    <h1 style="color:#1a1a1a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      Don''t take our word for it, {{first_name}}.
    </h1>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      We''ve been fortunate to work with dozens of businesses across California. Here''s what a few of them had to say.
    </p>

    <!-- Testimonial 1 -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "Our old headshots were years out of date and frankly embarrassing. Alfonso had our entire team done in under two hours on-site, and the photos were on our website homepage within a week. The difference is night and day — we finally look like the company we actually are."
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Marketing Director, Central Valley Tech Company</p>
    </div>

    <!-- Testimonial 2 -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "I was honestly nervous about being on camera — I always feel stiff in photos. Alfonso made it completely comfortable. By the end I forgot there was even a camera. The images came out better than anything I''ve ever had done."
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Business Owner, Modesto CA</p>
    </div>

    <!-- Testimonial 3 -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:28px;">
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "We hired Rojas Photography for our annual gala and the event photos were stunning. They were professional, unobtrusive, and delivered everything on time. We''ll be using them for every event going forward."
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Executive Director, Nonprofit Organization</p>
    </div>

    <!-- Star rating callout -->
    <div style="text-align:center;padding:20px;border:1px solid #e8e0d5;border-radius:12px;margin-bottom:28px;">
      <p style="font-size:28px;margin:0 0 4px;">★★★★★</p>
      <p style="font-size:22px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">50+ Five-Star Reviews</p>
      <p style="font-size:14px;color:#888;margin:0;">on Google</p>
    </div>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 24px;">
      If you''re thinking about what professional photography could do for your business, a discovery call is always free. No commitment — just a real conversation about your goals.
    </p>

    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">
      Book a Free Discovery Call
    </a>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">Talk soon,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>

  <!-- Signature -->
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>

  <!-- Footer -->
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">
      You''re receiving this because you signed up at rojasphotography.net.
      &nbsp;·&nbsp;
      <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>',
 true),

-- Email 5: Day 12 — Objections + Direct CTA
(5, 12,
 'A few honest answers before you decide',
 '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">

  <!-- Header -->
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>

  <!-- Body -->
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 16px;line-height:1.35;">
      {{first_name}}, we get asked a lot of questions. Here are the honest answers.
    </h1>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      If you''re still thinking about whether professional photography is right for your business, this one''s for you.
    </p>

    <!-- Q&A items -->
    <div style="margin-bottom:20px;">
      <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">❓ "We''re not sure we need professional photos yet."</p>
      <p style="font-size:15px;line-height:1.75;color:#555;margin:0;">The businesses that feel this way most often are the ones who see the biggest change after a shoot. If your current images don''t reflect the quality of your work, that gap is costing you trust — and probably clients — every day.</p>
    </div>

    <div style="border-top:1px solid #f0ebe3;padding-top:20px;margin-bottom:20px;">
      <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">❓ "We''re a small team — is it worth it?"</p>
      <p style="font-size:15px;line-height:1.75;color:#555;margin:0;">Absolutely. Some of our most impactful work has been for teams of 2–5 people. A cohesive set of professional headshots signals to potential clients and partners that you take your business seriously — regardless of your size.</p>
    </div>

    <div style="border-top:1px solid #f0ebe3;padding-top:20px;margin-bottom:20px;">
      <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">❓ "I don''t know which service is right for us."</p>
      <p style="font-size:15px;line-height:1.75;color:#555;margin:0;">That''s exactly what the discovery call is for. We''ll ask about your goals, your brand, and where you plan to use the images — and point you in the right direction. No pressure, no obligation.</p>
    </div>

    <div style="border-top:1px solid #f0ebe3;padding-top:20px;margin-bottom:20px;">
      <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">❓ "Do you travel outside Modesto?"</p>
      <p style="font-size:15px;line-height:1.75;color:#555;margin:0;">Yes. We regularly work in Stockton, Fresno, Sacramento, the Bay Area, San Diego, and throughout California. Travel fees apply outside of our local area, and we''ll always be upfront about those in the quote.</p>
    </div>

    <div style="border-top:1px solid #f0ebe3;padding-top:20px;margin-bottom:28px;">
      <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">❓ "What does it cost?"</p>
      <p style="font-size:15px;line-height:1.75;color:#555;margin:0;">It depends on the scope, but most corporate headshot sessions start in the mid-hundreds and full commercial or event packages are quoted per project. We''re transparent about pricing and will give you a clear number before any commitment.</p>
    </div>

    <!-- Final CTA -->
    <div style="background:#0f3d2a;border-radius:16px;padding:32px;text-align:center;">
      <p style="color:#ffffff;font-size:18px;font-weight:bold;margin:0 0 8px;">Ready to talk?</p>
      <p style="color:rgba(255,255,255,0.8);font-size:15px;line-height:1.7;margin:0 0 20px;">
        A free 15-minute discovery call is all it takes. No pitch, no pressure — just a real conversation about your business and what''s possible.
      </p>
      <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#ffffff;color:#0f3d2a;padding:14px 36px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">
        Book Your Free Call →
      </a>
      <p style="color:rgba(255,255,255,0.6);font-size:13px;margin:16px 0 0;">
        Or reach us directly at <a href="mailto:alfonso@rojasphotography.net" style="color:rgba(255,255,255,0.8);">alfonso@rojasphotography.net</a> · 209-380-3727
      </p>
    </div>

    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">
      Whatever you decide — thank you for being here. It genuinely means something to us.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>

  <!-- Signature -->
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>

  <!-- Footer -->
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">
      You''re receiving this because you signed up at rojasphotography.net.
      &nbsp;·&nbsp;
      <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a>
    </p>
  </div>

</div>
</body>
</html>',
 true)

ON CONFLICT DO NOTHING;

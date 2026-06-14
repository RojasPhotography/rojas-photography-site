-- Rojas Photography — Email Sequence Final Update
-- June 2026 — 7-email StoryBrand sequence, all revisions applied
-- Run this in Supabase > SQL Editor

-- ─────────────────────────────────────────
-- Email 1: Welcome — admin display only
-- Actual send is hardcoded in app/api/newsletter/subscribe/route.ts
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'So glad you found us, {{first_name}}.',
  delay_days = 0,
  updated_at = now()
WHERE position = 1;

-- ─────────────────────────────────────────
-- Email 2: Origin Story (Day 2)
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'We didn''t choose this path. It chose us.',
  delay_days = 2,
  html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">There''s something we don''t talk about publicly very often — but we think you should know.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Alfonso and Niomi didn''t leave the corporate world on their own terms.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">For years, we both worked corporate jobs. Steady paychecks. Benefits. The whole picture. And then one day — like it does for a lot of people — that chapter ended without our permission. We were laid off.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">We could have chased the next corporate role. Updated the resume, sent the applications, gotten back in line.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Instead, we looked at each other and said: <em>this is the sign.</em></p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">We had always loved photography. Always believed in what a great image could do for a person, a team, a brand. We just hadn''t given ourselves permission to go all in — until the decision was made for us.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">That layoff was the best thing that ever happened to us.</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">We tell you this because we know your world. We''ve sat in the meetings, navigated the uncertainty, and built something from the ground up with everything we had. We know what it means to work hard at something and need the world to see it the way you do.</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">That''s why we take every single shoot seriously. It''s not a transaction to us — it''s someone''s business, their brand, their livelihood. And we treat it that way every time.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">We''d love to know your story too. What are you building? Hit reply — we genuinely read every message.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  updated_at = now()
WHERE position = 2;

-- ─────────────────────────────────────────
-- Email 3: Client Story — Expo (Day 5)
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'What changed after one shoot.',
  delay_days = 5,
  html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">She didn''t come in for a private session.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">We were hired to shoot headshots at an expo. High volume — people moving through our line one after another. There wasn''t time for long conversations. There rarely is at events like that.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">But that''s never changed how we show up.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Whether someone is in front of our lights for 60 seconds or 60 minutes, we do the same thing: we connect, we watch for the real moment, and we make them feel something before we press the shutter.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">She stepped in, we did our job, and she moved on. We didn''t think much of it — it was just another person we wanted to take care of.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">That evening, she sent us an email.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">She said that after having children, her confidence had disappeared. She didn''t feel like herself anymore — not in photos, not in how she saw herself. She''d been carrying that quietly for years.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Then she saw her headshot.</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:18px;line-height:1.75;color:#333;margin:0;font-style:italic;">"I felt my confidence come back."</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">We didn''t know any of that when she was standing in front of our camera. We were just doing what we always do. But that''s the thing about this work — you don''t always know what a photograph means to someone until after.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">That''s why we treat every single person who steps in front of our camera the same way. Because we never know whose moment it is.</p>
    <a href="https://rojasphotography.net/commercial" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">See Our Work →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  updated_at = now()
WHERE position = 3;

-- ─────────────────────────────────────────
-- Email 4: The Gap (Day 8)
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'The gap nobody talks about.',
  delay_days = 8,
  html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">Right now, there are two versions of your business.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">There''s the real one — the quality of your work, the care you put in, the results you actually deliver. The version people experience <em>after</em> they hire you.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">And then there''s the version people see before they ever reach out. The website photo. The LinkedIn headshot. The team page. The event recap shot on someone''s phone.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">For most businesses, those two versions don''t match.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">And every day they don''t match, you''re losing ground to someone who looks the part — even if you''re better.</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">Here''s what nobody talks about: people decide fast. Before they read your bio, before they look at your credentials, before they even get to your pricing — they''ve already formed an impression. The businesses winning right now aren''t always better than you. They just look like they are.</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">This is one of the most fixable gaps in business. One session. One afternoon. And the distance between how good you are and how good you look closes completely.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">We typically book 2–3 weeks out. If you''re thinking about a shoot in the next month or two, now is the right time to get on the calendar.</p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Book a Free Discovery Call →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  updated_at = now()
WHERE position = 4;

-- ─────────────────────────────────────────
-- Email 5: Social Proof (Day 12)
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'What our clients actually say.',
  delay_days = 12,
  html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">We could tell you what we''re good at.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">Or we could let our clients do it. Anyone can show you pretty photos. What we want to show you is what actually shifts for the people we work with — because that''s the part that matters most.</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <div style="margin-bottom:8px;"><span style="color:#f4a620;font-size:16px;">★★★★★</span></div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 12px;">"Working with Rojas Photography is so easy! A quick conversation and just a few days later, our new employee is all set up with a professional headshot and ready to take on the world. Barely any time out of my schedule!"</p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Catherine Luke &nbsp;·&nbsp; Google Review</p>
    </div>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <div style="margin-bottom:8px;"><span style="color:#f4a620;font-size:16px;">★★★★★</span></div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 12px;">"He and his sweet wife took a slightly uncomfortable, awkward thing and made me feel prepared and ready for a great photo session. He helps you choose the photos during your session so you don''t get overwhelmed afterward."</p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Joyce Ulrich &nbsp;·&nbsp; Google Review</p>
    </div>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:28px;">
      <div style="margin-bottom:8px;"><span style="color:#f4a620;font-size:16px;">★★★★★</span></div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 12px;">"I love the way Alfonso and Niomi paid attention to the details and made it fun! The turnaround was amazing — because who wants to wait weeks or months for their photos?"</p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Diane Silva &nbsp;·&nbsp; Google Review</p>
    </div>
    <div style="text-align:center;padding:20px;border:1px solid #e8e0d5;border-radius:12px;margin-bottom:28px;">
      <p style="font-size:28px;margin:0 0 4px;">★★★★★</p>
      <p style="font-size:22px;font-weight:bold;color:#0f3d2a;margin:0 0 4px;">60+ Five-Star Reviews</p>
      <p style="font-size:14px;color:#888;margin:0;">on Google</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">Notice what they''re not talking about. Not megapixels. Not lighting setups. They''re talking about how they <em>felt</em> — prepared, confident, taken care of. Every single one of those reviews was earned.</p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Book a Free Discovery Call →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  updated_at = now()
WHERE position = 5;

-- ─────────────────────────────────────────
-- Email 6: Video Introduction (Day 17)
-- ─────────────────────────────────────────
UPDATE sequence_emails SET
  subject = 'We haven''t told you this yet.',
  delay_days = 17,
  html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">We''ve talked about headshots. About the gap between how good you are and how you look. About what a great image can do for a business.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">But there''s something else we do — and it''s time we told you about it.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;"><strong style="color:#0f3d2a;">We produce video.</strong></p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Not just "we can film things." We plan, shoot, and produce video content for businesses — brand stories, event highlights, testimonials, and drone footage across California.</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">A great headshot gets people to your website. A great video makes them stay. If a photo shows who you are, video shows how you work, what you believe, and why someone should choose you over everyone else.</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">It''s the next layer — and for the businesses using it well, it''s the thing that actually closes the deal.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">We''re intentional about who we take on for video work, and we''d love for it to be the right fit. If you''ve been thinking about video content for your business and haven''t known where to start — that''s exactly the conversation we want to have.</p>
    <a href="https://rojasphotography.net/video" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">See Our Video Work →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  updated_at = now()
WHERE position = 6;

-- ─────────────────────────────────────────
-- Email 7: Soft Close (Day 22 — new email)
-- ─────────────────────────────────────────
INSERT INTO sequence_emails (position, delay_days, subject, html_content, is_active)
VALUES (
  7,
  22,
  'Ready when you are, {{first_name}}.',
  '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">We''ve shared a lot over the past few weeks.</h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">Our story. A client moment that still stays with us. What we believe about the gap between how good you are and how you look. What our clients say. And what else we''re building.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">We won''t keep filling your inbox. But before we go quiet, we wanted to say one more thing:</p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:18px;line-height:1.75;color:#333;margin:0;font-style:italic;">Whenever you''re ready — we''re here.</p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">No pressure. No pitch. If the timing is right and you''re thinking about headshots, event photography, commercial work, or video — we''d love to be the team you call.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">A discovery call is always free. 20-30 minutes. We''ll tell you honestly whether we''re the right fit, what the process looks like, and what to expect. And if the timing isn''t right yet, that''s okay too.</p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Book a Free Discovery Call →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 16px;">Thanks for letting us show up in your inbox. It means more than you know.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 4px;">With gratitude,</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0;">— Alfonso &amp; Niomi</p>
  </div>
  <div style="padding:0 40px 40px;">
    <p style="font-size:14px;font-weight:bold;color:#0f3d2a;margin:0 0 2px;">Alfonso &amp; Niomi Rojas</p>
    <p style="font-size:13px;color:#888;margin:0;">Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" style="color:#0f3d2a;text-decoration:none;">rojasphotography.net</a></p>
  </div>
  <div style="background:#f9f6f1;border-top:1px solid #e8e0d5;padding:20px 40px;text-align:center;">
    <p style="font-size:12px;color:#aaa;margin:0;">You''re receiving this because you signed up at rojasphotography.net. &nbsp;·&nbsp; <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email={{email}}" style="color:#aaa;">Unsubscribe</a></p>
  </div>
</div>
</body>
</html>',
  true
);

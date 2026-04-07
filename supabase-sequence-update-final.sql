-- Final StoryBrand sequence update
-- Run this in Supabase > SQL Editor

-- Email 2: The real story
UPDATE sequence_emails SET
subject = 'We didn''t choose this path. It chose us.',
html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      There''s something we don''t talk about much publicly — but we think you should know.
    </h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Alfonso and Niomi didn''t leave the corporate world on their own terms.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      For years, we both worked corporate jobs. Steady paychecks. Benefits. The whole picture. And then one day — like it does for a lot of people — that chapter ended without our permission. We were laid off.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      We could have chased the next corporate role. Updated the resume, sent the applications, gotten back in line.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Instead, we looked at each other and said: <em>this is the sign.</em>
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      We had always loved photography. Always believed in what a great image could do for a person, a team, a brand. We just hadn''t given ourselves permission to go all in — until the decision was made for us.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      That layoff was the best thing that ever happened to us.
    </p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">
        We tell you this because we know your world. We''ve sat in the meetings, navigated the uncertainty, and built something from the ground up with everything we had. We know what it means to work hard at something and need the world to see it the way you do.
      </p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      That''s why we take this seriously. Every shoot isn''t just a transaction to us. It''s someone''s business, their brand, their livelihood — and we treat it that way every single time.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 32px;">
      We''d love to know your story too. What are you building? Hit reply — we genuinely read every message.
    </p>
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

-- Email 3: The plan
UPDATE sequence_emails SET
subject = 'Whether it''s a team, an event, or just you — here''s how it works.',
html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      {{first_name}}, one thing we hear before people reach out: "I''m not sure exactly what I need."
    </h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      That''s completely normal. And it''s exactly what the first conversation is for.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 24px;">
      Whether you''re a business that needs team headshots, an organization planning a major event, or an individual who''s been putting off a professional photo for way too long — the path forward is the same three steps.
    </p>
    <table style="width:100%;border-collapse:collapse;margin:0 0 28px;">
      <tr>
        <td style="vertical-align:top;padding:0 16px 24px 0;width:44px;">
          <div style="width:36px;height:36px;background:#0f3d2a;color:#fff;border-radius:50%;text-align:center;line-height:36px;font-size:15px;font-weight:bold;">1</div>
        </td>
        <td style="vertical-align:top;padding-bottom:24px;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">We talk. (Free, no pressure.)</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">A quick call to understand what you''re trying to accomplish. We''ll tell you honestly what makes sense for your situation — even if it means pointing you in a different direction.</p>
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 16px 24px 0;">
          <div style="width:36px;height:36px;background:#0f3d2a;color:#fff;border-radius:50%;text-align:center;line-height:36px;font-size:15px;font-weight:bold;">2</div>
        </td>
        <td style="vertical-align:top;padding-bottom:24px;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">We handle everything.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">Wardrobe guidance, location, scheduling, coordination — all handled before we arrive. On the day of the shoot, we come to you. Events are covered start to finish. You don''t need to be comfortable on camera. That''s our job.</p>
        </td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 16px 0 0;">
          <div style="width:36px;height:36px;background:#0f3d2a;color:#fff;border-radius:50%;text-align:center;line-height:36px;font-size:15px;font-weight:bold;">3</div>
        </td>
        <td style="vertical-align:top;">
          <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 6px;">Images you''ll actually use.</p>
          <p style="font-size:15px;line-height:1.7;color:#555;margin:0;">Professionally edited and delivered within 48 hours for headshots, and within 5–7 business days for larger projects. High-resolution, web-ready, commercially licensed. Not a gallery you archive — imagery you put to work immediately.</p>
        </td>
      </tr>
    </table>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      That''s the whole process. No guesswork, no wasted time, no awkward results.
    </p>
    <a href="https://rojasphotography.net/commercial" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">See Our Work →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">Talk soon,</p>
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

-- Email 5: Stakes
UPDATE sequence_emails SET
subject = 'Your work deserves to be seen for what it actually is.',
html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      Right now, there are two versions of what you do.
    </h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      There''s the real version — the quality of your work, the care you put into it, the results you deliver. The version people experience once they hire you.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      And then there''s the version people see before they ever reach out. The website photo. The LinkedIn headshot. The team page. The event recap with blurry phone photos.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      For most businesses and organizations, those two versions don''t match. And every day they don''t match, first impressions are falling short of the reality.
    </p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:24px 0;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">
        People decide fast. Before they read a single word of your bio — before they look at your pricing or your credentials — they''ve already formed an opinion. The organizations winning right now aren''t necessarily better than you. They just look the part.
      </p>
    </div>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Here''s the inspiring truth: this is one of the most fixable gaps in business. One session. One afternoon. And the distance between how good you are and how good you look closes completely.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 32px;">
      We typically book 2–3 weeks out. If you''re considering a shoot in the next month or two, now is the right time to get on the calendar. Fifteen minutes is all it takes to figure out if we''re the right fit — and if we''re not, we''ll tell you honestly.
    </p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Book Your Free Discovery Call →</a>
    <p style="font-size:15px;line-height:1.75;color:#888;margin:20px 0 28px;font-style:italic;">No pitch, no pressure. Just a real conversation about what you''re building.</p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 4px;">— Alfonso &amp; Niomi</p>
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

-- Email 4: Transformation/Social Proof (update subject line)
UPDATE sequence_emails SET
subject = 'What actually changes after a shoot.',
html_content = '<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <p style="font-size:13px;letter-spacing:0.08em;text-transform:uppercase;color:#0f3d2a;font-weight:bold;margin:0 0 12px;">What clients say</p>
    <h1 style="color:#1a1a1a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      We want to show you something more useful than a portfolio, {{first_name}}.
    </h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      Anyone can show you pretty photos. We want to show you what actually shifts for the people we work with — because that''s the part that matters.
    </p>
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
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Notice what they''re not saying. They''re not talking about megapixels or lighting setups. They''re talking about how they <em>felt</em> — prepared, confident, proud, taken care of.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      Imagine opening that gallery and seeing yourself — or your team, or your event — the way you actually are. That moment is closer than you think.
    </p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Book a Free Discovery Call →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">Talk soon,</p>
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

-- Email 6: Events (new — insert)
INSERT INTO sequence_emails (position, delay_days, subject, html_content, is_active) VALUES
(6, 20,
'The photos from your last event — were they good enough?',
'<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f9f6f1;font-family:Georgia,serif;">
<div style="max-width:600px;margin:0 auto;background:#ffffff;">
  <div style="background-color:#0f3d2a;padding:28px 40px;text-align:center;">
    <img src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png" alt="Rojas Photography" style="height:52px;width:auto;" />
  </div>
  <div style="padding:40px 40px 32px;">
    <h1 style="color:#0f3d2a;font-size:24px;margin:0 0 20px;line-height:1.35;">
      Think about the last event your organization hosted.
    </h1>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      The planning that went into it. The venue, the speakers, the details. The people in the room. The energy that you can''t quite describe to someone who wasn''t there.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Now think about the photos.
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 16px;">
      Did they capture it? Or did they look like every other event — dark room, blurry crowd shots, a few awkward posed photos by the step-and-repeat?
    </p>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 24px;">
      It''s one of the most common things we hear from nonprofits, corporations, and organizations after their events: <em>"I wish we''d hired a professional photographer."</em>
    </p>
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:20px 24px;margin:0 0 28px;">
      <p style="font-size:16px;line-height:1.75;color:#333;margin:0;font-style:italic;">
        Great event photography isn''t just about memories. It''s about proof. Proof for your donors, sponsors, board, and community that something real happened here — and that it''s worth supporting again next year.
      </p>
    </div>
    <p style="font-size:15px;font-weight:bold;color:#0f3d2a;margin:0 0 12px;">Professional event coverage does three things:</p>
    <table style="width:100%;border-collapse:collapse;margin:0 0 28px;">
      <tr>
        <td style="vertical-align:top;padding:0 12px 12px 0;width:28px;font-size:20px;">📖</td>
        <td style="vertical-align:top;padding-bottom:12px;font-size:15px;line-height:1.7;color:#444;"><strong style="color:#0f3d2a;">Tells the story</strong> of what happened for people who weren''t there</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 12px 12px 0;font-size:20px;">🤝</td>
        <td style="vertical-align:top;padding-bottom:12px;font-size:15px;line-height:1.7;color:#444;"><strong style="color:#0f3d2a;">Builds credibility</strong> with sponsors and stakeholders who want to see their investment represented well</td>
      </tr>
      <tr>
        <td style="vertical-align:top;padding:0 12px 0 0;font-size:20px;">📲</td>
        <td style="vertical-align:top;font-size:15px;line-height:1.7;color:#444;"><strong style="color:#0f3d2a;">Creates content</strong> you''ll use for months — on your website, social media, annual reports, and next year''s promotional materials</td>
      </tr>
    </table>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:0 0 28px;">
      We''ve covered galas, corporate conferences, nonprofit fundraisers, and everything in between across Central Valley and California. If you have an event coming up — or you''re already planning next year''s — let''s talk now while the calendar is open.
    </p>
    <a href="https://rojasphotography.net/discovery-call" style="display:inline-block;background:#0f3d2a;color:#fff;padding:14px 32px;text-decoration:none;border-radius:50px;font-size:15px;font-weight:bold;">Let''s Talk About Your Event →</a>
    <p style="font-size:16px;line-height:1.75;color:#444;margin:28px 0 4px;">Talk soon,</p>
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
true);

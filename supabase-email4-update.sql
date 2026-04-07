-- Update Email 4 testimonials with real Google reviews
-- Run this in Supabase > SQL Editor

UPDATE sequence_emails
SET html_content = '<!DOCTYPE html>
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
      We''ve been fortunate to work with dozens of businesses and professionals across California. Here''s what a few of them had to say.
    </p>

    <!-- Testimonial 1 — Diane Silva -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <div style="margin-bottom:10px;">
        <span style="color:#f4a620;font-size:16px;">★★★★★</span>
      </div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "I recommend Rojas Photography! The experience of the photo shoot was great. I love the way Alfonso and Niomi paid attention to the details and made it fun! The turn around on the finished photos was also amazing. Because let''s face it — who wants to wait weeks or months for pictures?"
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Diane Silva &nbsp;·&nbsp; Google Review</p>
    </div>

    <!-- Testimonial 2 — Catherine Luke -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:20px;">
      <div style="margin-bottom:10px;">
        <span style="color:#f4a620;font-size:16px;">★★★★★</span>
      </div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "Working with Rojas Photography is so easy! A quick conversation and just a few days later, our new employee is all set up with a professional headshot and ready to take on the world. Thanks again for making this a simple process, and barely any time out of my schedule!"
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Catherine Luke &nbsp;·&nbsp; Google Review</p>
    </div>

    <!-- Testimonial 3 — Joyce Ulrich -->
    <div style="background:#f5f0ea;border-left:4px solid #0f3d2a;border-radius:0 12px 12px 0;padding:24px 28px;margin-bottom:28px;">
      <div style="margin-bottom:10px;">
        <span style="color:#f4a620;font-size:16px;">★★★★★</span>
      </div>
      <p style="font-size:15px;line-height:1.75;color:#333;font-style:italic;margin:0 0 16px;">
        "Awesome and amazing photographer. He and his sweet wife took a slightly uncomfortable, awkward thing and made me feel prepared and ready for a great photo session. He helps you choose the photos during your session so that you don''t get overwhelmed afterward trying to decide which ones to use."
      </p>
      <p style="font-size:13px;color:#0f3d2a;font-weight:bold;margin:0;">— Joyce Ulrich &nbsp;·&nbsp; Google Review</p>
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
updated_at = now()
WHERE position = 4;

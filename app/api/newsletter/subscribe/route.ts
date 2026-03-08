import { getSupabase } from '@/app/lib/supabase-server';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const supabase = getSupabase();
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { email, name } = await request.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Check if already subscribed
    const { data: existing } = await supabase
      .from('subscribers')
      .select('id, is_active')
      .eq('email', email)
      .single();

    if (existing) {
      if (existing.is_active) {
        return NextResponse.json({ error: 'Already subscribed' }, { status: 409 });
      }
      // Reactivate if previously unsubscribed
      await supabase
        .from('subscribers')
        .update({ is_active: true, unsubscribed_at: null, name: name || null })
        .eq('email', email);
    } else {
      const { error } = await supabase
        .from('subscribers')
        .insert({ email, name: name || null, is_active: true });

      if (error) throw error;
    }

    // Send welcome email
    await resend.emails.send({
      from: 'Alfonso & Niomi Rojas <alfonso@rojasphotography.net>',
      to: email,
      subject: 'Welcome to Rojas Photography — we\'re honored you\'re here',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #333; background-color: #ffffff;">

          <!-- Logo Header -->
          <div style="background-color: #0f3d2a; padding: 28px 40px; text-align: center;">
            <img
              src="https://rojasphotography.net/images/Rojas%20Photography%20Logo%2024.6.png"
              alt="Rojas Photography"
              style="height: 52px; width: auto;"
            />
          </div>

          <!-- Hero Photo -->
          <img
            src="https://rojasphotography.net/images/Alfonso%2BNiomi-0026.jpg"
            alt="Alfonso and Niomi Rojas"
            style="width: 100%; max-height: 340px; object-fit: cover; object-position: center 8%; display: block;"
          />

          <!-- Body -->
          <div style="padding: 40px 40px 32px;">
            <h1 style="color: #0f3d2a; font-size: 26px; margin: 0 0 16px; line-height: 1.3;">
              We're so glad you're here${name ? `, ${name.split(' ')[0]}` : ''}.
            </h1>

            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 16px; color: #444;">
              Honestly — it means a lot that you decided to join. We don't take that lightly.
            </p>

            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 24px; color: #444;">
              We're Alfonso and Niomi Rojas, and we've spent years helping businesses and organizations across California tell their story visually. From the Central Valley to San Francisco, Sacramento to San Diego, and everywhere in between, we've learned that great visuals aren't just about looking good — they're about showing the world who you really are.
            </p>

            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 20px; color: #444;">
              Here's what you can expect from us:
            </p>

            <!-- What to expect list -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 28px;">
              <tr>
                <td style="padding: 12px 0; vertical-align: top; width: 32px; font-size: 20px;">📸</td>
                <td style="padding: 12px 0; vertical-align: top; font-size: 15px; line-height: 1.6; color: #444;">
                  <strong style="color: #0f3d2a; display: block; margin-bottom: 4px;">Photography Tips for Professionals</strong>
                  Practical, actionable advice on showing up confidently on camera, dressing for impact, and using your images to build credibility and trust.
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; vertical-align: top; font-size: 20px;">🎬</td>
                <td style="padding: 12px 0; vertical-align: top; font-size: 15px; line-height: 1.6; color: #444;">
                  <strong style="color: #0f3d2a; display: block; margin-bottom: 4px;">Behind-the-Scenes Stories</strong>
                  A peek into our sessions, our clients' transformations, and the real work that goes into creating imagery that actually connects with your audience.
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; vertical-align: top; font-size: 20px;">💼</td>
                <td style="padding: 12px 0; vertical-align: top; font-size: 15px; line-height: 1.6; color: #444;">
                  <strong style="color: #0f3d2a; display: block; margin-bottom: 4px;">California Business Insights</strong>
                  Ideas and inspiration from successful companies across the state — how organizations in San Francisco, Sacramento, San Diego, and beyond are using visual storytelling to grow, stand out, and strengthen relationships.
                </td>
              </tr>
              <tr>
                <td style="padding: 12px 0; vertical-align: top; font-size: 20px;">🎁</td>
                <td style="padding: 12px 0; vertical-align: top; font-size: 15px; line-height: 1.6; color: #444;">
                  <strong style="color: #0f3d2a; display: block; margin-bottom: 4px;">Subscriber-Only Access</strong>
                  Early booking availability, first access to limited-time offers and seasonal promotions, and exclusive previews of new services — because you believed in us from day one.
                </td>
              </tr>
            </table>

            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 32px; color: #444;">
              We promise to keep it real. No fluff, no spam — just the content we'd genuinely want to read ourselves.
            </p>

            <!-- Soft CTA -->
            <div style="background-color: #f5f0ea; border-radius: 12px; padding: 28px 32px; margin-bottom: 32px;">
              <p style="font-size: 16px; line-height: 1.7; margin: 0 0 8px; color: #333;">
                Think photography or video might be right for your business? We'd genuinely love to connect. A discovery call is always free, no pressure — just two professionals having a real conversation about your goals.
              </p>
              <p style="font-size: 15px; line-height: 1.6; margin: 0 0 20px; color: #555;">
                Or reach out directly:<br/>
                📧 <a href="mailto:alfonso@rojasphotography.net" style="color: #0f3d2a; text-decoration: none;">alfonso@rojasphotography.net</a><br/>
                📧 <a href="mailto:niomi@rojasphotography.net" style="color: #0f3d2a; text-decoration: none;">niomi@rojasphotography.net</a><br/>
                📱 <a href="tel:2093803727" style="color: #0f3d2a; text-decoration: none;">209-380-3727</a>
              </p>
              <a
                href="https://rojasphotography.net/discovery-call"
                style="display: inline-block; background-color: #0f3d2a; color: #ffffff; padding: 14px 32px; text-decoration: none; border-radius: 50px; font-size: 15px; font-weight: bold; letter-spacing: 0.3px;"
              >
                Book a Free Discovery Call
              </a>
            </div>

            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 4px; color: #444;">
              Thanks for being here. We'll be in touch soon.
            </p>
            <p style="font-size: 16px; line-height: 1.7; margin: 0 0 0; color: #444;">
              With gratitude,
            </p>
          </div>

          <!-- Signature -->
          <div style="padding: 0 40px 40px;">
            <p style="font-size: 16px; font-weight: bold; color: #0f3d2a; margin: 0 0 2px;">Alfonso &amp; Niomi Rojas</p>
            <p style="font-size: 14px; color: #888; margin: 0;">Rojas Photography · Modesto, CA</p>
            <p style="font-size: 14px; color: #888; margin: 6px 0 0;">
              <a href="https://rojasphotography.net" style="color: #0f3d2a; text-decoration: none;">rojasphotography.net</a>
            </p>
          </div>

          <!-- Footer -->
          <div style="background-color: #f9f6f1; border-top: 1px solid #e8e0d5; padding: 20px 40px; text-align: center;">
            <p style="font-size: 12px; color: #aaa; margin: 0;">
              You're receiving this because you signed up at rojasphotography.net.
              &nbsp;·&nbsp;
              <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: #aaa;">Unsubscribe</a>
            </p>
          </div>

        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

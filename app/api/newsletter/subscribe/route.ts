import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
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
      from: 'Alfonso Rojas <alfonso@rojasphotography.net>',
      to: email,
      subject: 'Welcome to Rojas Photography Tips & Updates',
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
          <h1 style="color: #1a5c3c; font-size: 28px; margin-bottom: 8px;">Welcome${name ? `, ${name}` : ''}!</h1>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            Thank you for subscribing to updates from Rojas Photography.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 16px;">
            You'll receive photography tips, behind-the-scenes content, and special offers for businesses across Modesto and the Central Valley.
          </p>
          <p style="font-size: 16px; line-height: 1.6; margin-bottom: 32px;">
            If you ever need a headshot or professional photography for your business, just reply to this email — I'm happy to help.
          </p>
          <a href="https://rojasphotography.net/discovery-call" style="background-color: #1a5c3c; color: white; padding: 14px 28px; text-decoration: none; border-radius: 50px; font-size: 16px; font-weight: bold;">
            Book a Discovery Call
          </a>
          <p style="font-size: 13px; color: #888; margin-top: 40px;">
            — Alfonso & Niomi Rojas<br/>Rojas Photography · Modesto, CA
          </p>
          <p style="font-size: 12px; color: #aaa; margin-top: 20px;">
            <a href="https://rojasphotography.net/api/newsletter/unsubscribe?email=${encodeURIComponent(email)}" style="color: #aaa;">Unsubscribe</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, message: 'Subscribed successfully' });
  } catch (error) {
    console.error('Subscribe error:', error);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

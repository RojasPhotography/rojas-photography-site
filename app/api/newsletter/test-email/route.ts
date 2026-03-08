import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { password, subject, html_content, to } = await request.json();

    if (password !== process.env.NEWSLETTER_ADMIN_PASSWORD) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!html_content) {
      return NextResponse.json(
        { error: 'No email content. Design your email and click Save in the editor first.' },
        { status: 400 }
      );
    }

    const testTo = to || 'alfonso@rojasphotography.net';

    await resend.emails.send({
      from: 'Alfonso Rojas <alfonso@rojasphotography.net>',
      to: testTo,
      subject: `[TEST] ${subject || 'Newsletter Preview'}`,
      html: `
        <div style="background:#fff3cd;border:2px dashed #ffc107;padding:12px 20px;margin-bottom:20px;font-family:sans-serif;font-size:13px;color:#856404;border-radius:6px;">
          ⚠️ <strong>TEST EMAIL</strong> — This is a preview. It has not been sent to your subscribers.
        </div>
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 40px 20px; color: #333;">
          ${html_content}
          <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;" />
          <p style="font-size: 13px; color: #888;">
            — Alfonso & Niomi Rojas<br/>Rojas Photography · Modesto, CA
          </p>
          <p style="font-size: 12px; color: #aaa;">
            <a href="#" style="color: #aaa;">Unsubscribe</a>
          </p>
        </div>
      `,
    });

    return NextResponse.json({ success: true, to: testTo });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ error: 'Failed to send test email' }, { status: 500 });
  }
}

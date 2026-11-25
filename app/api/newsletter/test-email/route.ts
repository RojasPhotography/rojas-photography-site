import { Resend } from 'resend';
import { NextResponse } from 'next/server';
import { isAdmin, unauthorized } from '@/app/lib/newsletter-auth';
import { normalizeEmail, personalize, withFooter, unsubscribeHeaders } from '@/app/lib/newsletter-email';

const DEFAULT_TEST_TO = 'alfonso@rojasphotography.net';

export async function POST(request: Request) {
  if (!(await isAdmin())) return unauthorized();

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { subject, html_content, to } = await request.json();

    if (!html_content) {
      return NextResponse.json({ error: 'This email is empty. Add some content in the editor first.' }, { status: 400 });
    }

    const testTo = normalizeEmail(to) || DEFAULT_TEST_TO;

    // Built exactly like the real send, so the test shows the real footer
    const banner = `
      <div style="background:#fff3cd;border:2px dashed #ffc107;padding:12px 20px;margin:0 auto 20px;max-width:600px;font-family:sans-serif;font-size:13px;color:#856404;border-radius:6px;">
        <strong>TEST EMAIL</strong>: this is a preview and has not been sent to your subscribers.
      </div>`;
    const html = banner + withFooter(personalize(html_content, 'Alfonso Rojas'), testTo);

    const { error } = await resend.emails.send({
      from: 'Alfonso Rojas <alfonso@rojasphotography.net>',
      to: testTo,
      subject: `[TEST] ${subject || 'Newsletter Preview'}`,
      html,
      headers: unsubscribeHeaders(testTo),
    });

    if (error) {
      console.error('Test email error:', error);
      return NextResponse.json({ error: `Resend refused the test: ${error.message}` }, { status: 502 });
    }

    return NextResponse.json({ success: true, to: testTo });
  } catch (error) {
    console.error('Test email error:', error);
    return NextResponse.json({ error: 'Failed to send test email' }, { status: 500 });
  }
}

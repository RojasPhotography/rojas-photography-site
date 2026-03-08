'use client';

import { useState } from 'react';

export default function NewsletterAdmin() {
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [result, setResult] = useState('');

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    // We verify the password server-side when sending — this is just a UI gate
    setAuthenticated(true);
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password, subject, html_content: body, content: body }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setResult(`Sent to ${data.sent} subscribers. ${data.failed > 0 ? `${data.failed} failed.` : ''}`);
        setSubject('');
        setBody('');
      } else {
        setStatus('error');
        setResult(data.error || 'Something went wrong.');
      }
    } catch {
      setStatus('error');
      setResult('Something went wrong.');
    }
  }

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-[var(--color-bg-warm)] flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 w-full max-w-sm">
          <h1 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">Newsletter Admin</h1>
          <p className="text-[var(--color-text-muted)] text-sm mb-6">Rojas Photography</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <button type="submit" className="btn-primary w-full py-3 font-semibold rounded-full">
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)] px-4 py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">Send Newsletter</h1>
        <p className="text-[var(--color-text-muted)] mb-10">Compose and send to all active subscribers.</p>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <form onSubmit={handleSend} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">Subject Line</label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="e.g. 5 tips for a great LinkedIn headshot"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[var(--color-text-dark)] mb-2">
                Email Body <span className="font-normal text-[var(--color-text-muted)]">(HTML supported)</span>
              </label>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
                rows={12}
                placeholder="Write your email here. You can use HTML tags like <p>, <strong>, <a href='...'>, etc."
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] font-mono text-sm"
              />
            </div>

            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-green-800">
                ✓ {result}
              </div>
            )}
            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-red-800">
                {result}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary px-10 py-3 font-semibold rounded-full disabled:opacity-60"
            >
              {status === 'loading' ? 'Sending...' : 'Send to All Subscribers'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

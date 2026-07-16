'use client';

import { useState } from 'react';

export default function NewsletterSignup() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source_page: window.location.pathname }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setMessage('You\'re in! Check your inbox for a welcome email.');
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data.error === 'Already subscribed' ? 'You\'re already subscribed!' : 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="bg-[var(--color-bg-warm)] rounded-2xl p-8 md:p-10">
      <h3 className="text-2xl text-[var(--color-text-dark)] mb-2">
        Join Our Monthly Newsletter
      </h3>
      <p className="text-[var(--color-text-body)] mb-6">
        Join professionals across the Central Valley. Get photography tips, behind-the-scenes content, and occasional special offers — no spam, ever.
      </p>

      {status === 'success' ? (
        <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
          <p className="text-green-800 font-semibold text-lg">✓ {message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="newsletter-name" className="sr-only">Your name (optional)</label>
              <input
                id="newsletter-name"
                type="text"
                placeholder="Your name (optional)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white"
              />
            </div>
            <div>
              <label htmlFor="newsletter-email" className="sr-only">Email address (required)</label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white"
              />
            </div>
          </div>
          {status === 'error' && (
            <p className="text-red-600 text-sm">{message}</p>
          )}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="btn-primary px-8 py-3 font-semibold rounded-full disabled:opacity-60"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe — It\'s Free'}
          </button>
          <p className="text-xs text-[var(--color-text-muted)]">Unsubscribe anytime. No spam, ever.</p>
        </form>
      )}
    </div>
  );
}

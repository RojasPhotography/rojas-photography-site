'use client';

import { useState } from 'react';

export default function NewsletterFooterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, source_page: window.location.pathname }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return <p className="text-green-400 text-sm">You&apos;re subscribed! Check your inbox.</p>;
  }

  return (
    <div>
      {status === 'error' && (
        <p className="text-red-400 text-xs mb-2">Something went wrong. Try again.</p>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="footer-newsletter-name" className="sr-only">Your name</label>
        <input
          id="footer-newsletter-name"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/40"
        />
        <label htmlFor="footer-newsletter-email" className="sr-only">Email address (required)</label>
        <input
          id="footer-newsletter-email"
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          aria-required="true"
          className="flex-1 min-w-0 px-3 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-white/40"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-semibold rounded-lg hover:opacity-90 disabled:opacity-60 whitespace-nowrap"
        >
          {status === 'loading' ? '...' : 'Subscribe'}
        </button>
      </form>
    </div>
  );
}

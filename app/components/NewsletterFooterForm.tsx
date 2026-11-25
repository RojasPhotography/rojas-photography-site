'use client';

import { useState } from 'react';

export default function NewsletterFooterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState(''); // honeypot, hidden from people
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'already' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, name, company_website: companyWebsite, source_page: window.location.pathname }),
      });
      setStatus(res.ok ? 'success' : res.status === 409 ? 'already' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'already') {
    return <p className="text-green-400 text-sm">You&apos;re already on the list. Thank you!</p>;
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
        <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
          <label htmlFor="footer-newsletter-website">Leave this empty</label>
          <input
            id="footer-newsletter-website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={companyWebsite}
            onChange={(e) => setCompanyWebsite(e.target.value)}
          />
        </div>
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

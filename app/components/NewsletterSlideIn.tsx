'use client';

import { useState, useEffect } from 'react';

export default function NewsletterSlideIn() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (window.location.pathname === '/newsletter') return;
    if (sessionStorage.getItem('newsletter_slide_dismissed')) return;

    function handleScroll() {
      const scrollPct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct > 0.6) {
        setVisible(true);
        window.removeEventListener('scroll', handleScroll);
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function dismiss() {
    setVisible(false);
    sessionStorage.setItem('newsletter_slide_dismissed', '1');
  }

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
      if (res.ok || data.error === 'Already subscribed') {
        setStatus('success');
        setTimeout(() => dismiss(), 3000);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="newsletter-slidein-title"
      className={`fixed bottom-6 right-6 z-50 w-[340px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-500 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {/* Green accent bar */}
      <div className="bg-[var(--color-primary)] h-1.5 w-full" />

      <div className="p-6">
        {/* Close button */}
        <button
          onClick={dismiss}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Icon */}
        <div className="w-10 h-10 bg-[var(--color-bg-warm)] rounded-full flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>

        {status === 'success' ? (
          <div className="text-center py-2">
            <p className="text-[var(--color-primary)] font-semibold text-lg mb-1">You&apos;re in!</p>
            <p className="text-[var(--color-text-muted)] text-sm">Check your inbox for a welcome from us.</p>
          </div>
        ) : (
          <>
            <h3 id="newsletter-slidein-title" className="text-[var(--color-text-dark)] font-bold text-base mb-1 pr-6">
              Join Our Monthly Newsletter
            </h3>
            <p className="text-[var(--color-text-muted)] text-sm mb-4 leading-relaxed">
              Join professionals across the Central Valley. Tips, behind-the-scenes stories, and occasional offers — no spam, ever.
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="slidein-newsletter-name" className="sr-only">Your name</label>
              <input
                id="slidein-newsletter-name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <label htmlFor="slidein-newsletter-email" className="sr-only">Email address (required)</label>
              <input
                id="slidein-newsletter-email"
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                aria-required="true"
                className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              {status === 'error' && (
                <p className="text-red-500 text-xs">Something went wrong. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary w-full py-2.5 text-sm font-semibold rounded-full disabled:opacity-60"
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe — It\'s Free'}
              </button>
            </form>

            <button
              onClick={dismiss}
              className="w-full text-center text-xs text-[var(--color-text-muted)] hover:text-[var(--color-text-dark)] mt-3 transition-colors"
            >
              No thanks
            </button>
          </>
        )}
      </div>
    </div>
  );
}

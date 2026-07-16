'use client';

import Image from 'next/image';
import { useState } from 'react';
import { CheckCircle2, Star } from 'lucide-react';

const perks = [
  { title: 'Behind the lens', desc: 'Real stories from real shoots — what worked, what surprised us, and what we learned.' },
  { title: 'Tips for professionals', desc: 'How to prepare for a session, what to wear, how to use your images to build credibility.' },
  { title: 'Early access', desc: 'First to know about open dates, promotions, and new services before we announce publicly.' },
];

function SignupForm({ compact = false }: { compact?: boolean }) {
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
        body: JSON.stringify({ email, name, source_page: '/newsletter' }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus('success');
        setMessage("You're in! Check your inbox for a welcome from us.");
        setEmail('');
        setName('');
      } else {
        setStatus('error');
        setMessage(data.error === 'Already subscribed' ? "You're already on the list!" : 'Something went wrong. Please try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-3">✓</div>
        <p className="text-green-800 font-bold text-xl mb-1">You&apos;re in!</p>
        <p className="text-green-700 text-sm">{message}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {!compact && (
        <input
          type="text"
          placeholder="First name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white text-base"
        />
      )}
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-5 py-4 rounded-xl border border-gray-200 text-[var(--color-text-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] bg-white text-base"
      />
      {status === 'error' && <p className="text-red-600 text-sm">{message}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white font-bold py-4 px-8 rounded-xl text-base transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Subscribing...' : 'Yes, Send Me the Newsletter →'}
      </button>
      <p className="text-xs text-center text-[var(--color-text-muted)]">Free. No spam. Unsubscribe anytime.</p>
    </form>
  );
}

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero — above the fold */}
      <section className="pt-28 pb-16 px-6 bg-[var(--color-bg-warm)]">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-4">Free Monthly Newsletter</p>
          <h1 className="text-4xl md:text-5xl text-[var(--color-text-dark)] leading-tight mb-4">
            They Google you before they call.
          </h1>
          <p className="text-[var(--color-text-body)] text-lg leading-relaxed mb-8">
            Your headshot, your team page, your event photos — every month, Alfonso & Niomi share real stories and practical tips to help Central Valley professionals make their imagery work for them.
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <SignupForm />
          </div>
          {/* Trust bar */}
          <div className="flex items-center justify-center gap-1.5 mt-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-sm text-[var(--color-text-muted)] ml-1">60+ five-star reviews on Google</span>
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">What&apos;s inside every issue</p>
          <h2 className="text-3xl text-center text-[var(--color-text-dark)] mb-10">Not your average photography newsletter.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {perks.map((perk) => (
              <div key={perk.title} className="bg-[var(--color-bg-warm)] rounded-2xl p-6">
                <CheckCircle2 size={22} className="text-[var(--color-primary)] mb-3" />
                <h3 className="text-[var(--color-text-dark)] mb-2">{perk.title}</h3>
                <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alfonso & Niomi section */}
      <section className="py-16 px-6 bg-[var(--color-bg-warm)]">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 md:flex">
            <div className="relative md:w-64 h-64 md:h-auto flex-shrink-0">
              <Image
                src="/images/Alfonso+Niomi-0026.jpg"
                alt="Alfonso and Niomi Rojas"
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 256px"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)] mb-3">From Alfonso & Niomi</p>
              <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                &ldquo;We started this newsletter because we kept hearing the same thing after shoots: &lsquo;I wish I&apos;d known this sooner.&rsquo; So we decided to share everything — the tips, the stories, the honest advice — every single month. No fluff. Just what actually helps.&rdquo;
              </p>
              <div>
                <p className="font-bold text-[var(--color-text-dark)]">Alfonso & Niomi Rojas</p>
                <p className="text-sm text-[var(--color-text-muted)]">Rojas Photography · Modesto, CA · 15+ years corporate experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-6 bg-[var(--color-primary-dark)]">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-3xl text-white mb-3">Ready to join?</h2>
          <p className="text-white/80 mb-8">It takes 10 seconds. One email a month. Cancel anytime.</p>
          <div className="bg-white rounded-2xl p-6">
            <SignupForm compact />
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="py-6 px-6 bg-[var(--color-primary-dark)] border-t border-white/10 text-center">
        <p className="text-white/40 text-xs">© {new Date().getFullYear()} Rojas Photography · Modesto, CA · <a href="https://rojasphotography.net" className="hover:text-white/60 transition-colors">rojasphotography.net</a></p>
      </footer>
    </div>
  );
}

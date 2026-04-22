import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import NewsletterSignup from '../components/NewsletterSignup';

export const metadata: Metadata = {
  title: 'Join the Newsletter | Rojas Photography',
  description: 'Behind-the-scenes photography tips, real client stories, and exclusive offers for Central Valley professionals. Join 400+ subscribers. Free, no spam.',
  alternates: {
    canonical: 'https://rojasphotography.net/newsletter',
  },
  openGraph: {
    title: 'Join the Rojas Photography Newsletter',
    description: 'Behind-the-scenes photography tips, real client stories, and exclusive offers for Central Valley professionals.',
    url: 'https://rojasphotography.net/newsletter',
    type: 'website',
    images: [
      {
        url: '/images/Rojas Photography Logo 24.6.png',
        alt: 'Rojas Photography',
      },
    ],
  },
};

const perks = [
  'Behind-the-scenes from real shoots',
  'Photography tips for professionals',
  'Real client stories & transformations',
  'Early access to availability & promotions',
  'No spam — unsubscribe anytime',
];

export default function NewsletterPage() {
  return (
    <div className="min-h-screen bg-[var(--color-bg-warm)]">
      {/* Hero */}
      <section className="bg-[var(--color-primary-dark)] pt-28 pb-16 px-6 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="mb-8 flex justify-center">
            <Image
              src="/images/Rojas Photography Logo 24.6.png"
              alt="Rojas Photography"
              width={180}
              height={60}
              className="brightness-0 invert"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Photography insights for<br />Central Valley professionals.
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed">
            Join 400+ business owners, executives, and organizations who get behind-the-scenes content, real client stories, and photography tips — straight from Alfonso & Niomi.
          </p>
        </div>
      </section>

      {/* Form + Perks */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-start">
          {/* Signup form */}
          <div>
            <NewsletterSignup />
          </div>

          {/* What you'll get */}
          <div>
            <h2 className="text-xl font-bold text-[var(--color-text-dark)] mb-6">What you'll get</h2>
            <ul className="space-y-4">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                  <span className="text-[var(--color-text-body)]">{perk}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 bg-white rounded-2xl p-6 border border-gray-100">
              <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-3">From Alfonso & Niomi</p>
              <p className="text-[var(--color-text-body)] leading-relaxed text-sm">
                "We started this newsletter to share what we actually see behind the lens — the real stories of businesses leveling up their image, the shoots that surprised us, and the tips we wish every professional knew before stepping in front of a camera."
              </p>
              <p className="text-sm font-semibold text-[var(--color-text-dark)] mt-3">— Alfonso & Niomi Rojas</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

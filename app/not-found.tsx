import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found | Rojas Photography',
  robots: 'noindex, follow',
};

const links = [
  { href: '/premium-headshots', label: 'Premium Executive Headshots' },
  { href: '/on-site-photography', label: 'On-Site Team Headshot Days' },
  { href: '/event-photography', label: 'Corporate Event Photography' },
  { href: '/conference-photography', label: 'Conference Photography' },
  { href: '/headshot-booth', label: 'Headshot Booth' },
  { href: '/video', label: 'Video Production' },
];

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-primary)] mb-4">
          404 — Page Not Found
        </p>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          That page has moved or no longer exists.
        </h1>
        <p className="text-lg mb-10">
          No problem — everything we do is one click away. Here&apos;s where most people are headed:
        </p>
        <ul className="grid sm:grid-cols-2 gap-3 text-left mb-10">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="block rounded-lg border border-gray-200 px-4 py-3 font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/"
          className="inline-block rounded-full bg-[var(--color-primary)] text-white font-semibold px-8 py-3 hover:opacity-90 transition-opacity"
        >
          Back to the homepage
        </Link>
      </div>
    </main>
  );
}

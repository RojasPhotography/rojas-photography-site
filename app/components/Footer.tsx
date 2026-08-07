import Link from 'next/link';
import NewsletterFooterForm from './NewsletterFooterForm';

export default function Footer() {
  return (
    <footer
      className="bg-[var(--color-primary-dark)] text-gray-400 py-16 px-8"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        {/* Newsletter bar */}
        <div className="border border-white/10 rounded-2xl px-8 py-7 mb-12 flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex-1">
            <p className="text-white font-semibold text-base mb-1">Join Our Monthly Newsletter</p>
            <p className="text-gray-400 text-sm">Join professionals across California. No spam, ever.</p>
          </div>
          <div className="md:w-80">
            <NewsletterFooterForm />
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="text-white text-lg mb-6 font-[family-name:var(--font-heading)]">
              ROJAS PHOTOGRAPHY
            </h4>
            <p className="text-sm leading-relaxed">
              Premium professional corporate headshots and business photography
              for the Central Valley and beyond.
            </p>
          </div>
          <nav>
            <h4 className="text-white text-sm mb-6 tracking-wider">
              SERVICES
            </h4>
            <ul className="text-sm space-y-3">
              <li>
                <Link
                  href="/premium-headshots"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Headshots for One
                </Link>
              </li>
              <li>
                <Link
                  href="/on-site-photography"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Headshots for Teams
                </Link>
              </li>
              <li>
                <Link
                  href="/annual-headshot-programs"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Annual Headshot Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/commercial"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Commercial Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/video"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Video Services
                </Link>
              </li>
              <li>
                <Link
                  href="/event-photography"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Event Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/conference-photography"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Conference Photography
                </Link>
              </li>
            </ul>
          </nav>
          <nav>
            <h4 className="text-white text-sm mb-6 tracking-wider">
              LOCATIONS
            </h4>
            <ul className="text-sm space-y-3">
              {[
                { href: '/modesto-headshots', label: 'Modesto' },
                { href: '/stockton-headshots', label: 'Stockton' },
                { href: '/fresno-headshots', label: 'Fresno' },
                { href: '/turlock-headshots', label: 'Turlock' },
                { href: '/sacramento-headshots', label: 'Sacramento' },
                { href: '/merced-headshots', label: 'Merced' },
                { href: '/bakersfield-headshots', label: 'Bakersfield' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-[var(--color-primary-light)] transition-colors">
                    {l.label} Headshots
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h4 className="text-white text-sm mb-6 tracking-wider">
              CONTACT
            </h4>
            <p className="text-sm mb-2">
              <a
                href="tel:2093803727"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                209-380-3727
              </a>
            </p>
            <p className="text-sm mb-4">
              <a
                href="mailto:alfonso@rojasphotography.net"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                alfonso@rojasphotography.net
              </a>
            </p>
            <p className="text-sm mb-4">Modesto, CA 95356</p>
            <p className="text-sm">
              <a
                href="https://g.page/r/CdOO4Sj3FR_lEBM/review"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[var(--color-primary-light)] transition-colors inline-flex items-center gap-1"
              >
                Leave a Review on Google
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>

        {/* Headshots by profession */}
        <nav className="border-t border-gray-700/50 pt-8 mb-8">
          <h4 className="text-white text-sm mb-4 tracking-wider">HEADSHOTS BY PROFESSION</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: '/attorney-headshots', label: 'Attorney Headshots' },
              { href: '/healthcare-headshots', label: 'Healthcare Headshots' },
              { href: '/real-estate-headshots', label: 'Real Estate Headshots' },
              { href: '/finance-headshots', label: 'Finance Headshots' },
              { href: '/linkedin-headshots', label: 'LinkedIn Headshots' },
              { href: '/student-headshots', label: 'Student & Grad Headshots' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--color-primary-light)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Popular guides */}
        <nav className="mb-10">
          <h4 className="text-white text-sm mb-4 tracking-wider">HEADSHOT GUIDES</h4>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {[
              { href: '/professional-headshot-cost', label: 'How much a headshot costs' },
              { href: '/what-to-wear-for-a-headshot', label: 'What to wear' },
              { href: '/how-to-prepare-for-headshots', label: 'How to prepare' },
              { href: '/best-background-for-headshot', label: 'Best background' },
              { href: '/how-long-does-a-headshot-session-take', label: 'How long a session takes' },
              { href: '/how-many-photos-from-a-headshot', label: 'How many photos you get' },
              { href: '/how-often-to-update-headshot', label: 'How often to update' },
              { href: '/headshot-vs-portrait', label: 'Headshot vs. portrait' },
              { href: '/how-to-choose-a-headshot-photographer', label: 'Choosing a photographer' },
              { href: '/do-you-need-professional-headshot-linkedin', label: 'Do you need a pro LinkedIn photo?' },
              { href: '/ai-headshots-vs-professional-headshots', label: 'AI vs. professional headshots' },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-[var(--color-primary-light)] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-700/50 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Rojas Photography. Professional
            Corporate Headshots in Modesto, Stockton, Fresno, Turlock,
            Sacramento &amp; the East Bay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

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
              <li>
                <Link
                  href="/headshot-booth"
                  className="hover:text-[var(--color-primary-light)] transition-colors"
                >
                  Headshot Booth
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
            <div className="flex gap-4 mt-4">
              <a
                href="https://www.instagram.com/rojas.photos/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rojas Photography on Instagram"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/RojasCreativePhotography/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rojas Photography on Facebook"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rojasheadshots/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rojas Photography on LinkedIn"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@rojasphotography"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Rojas Photography on YouTube"
                className="hover:text-[var(--color-primary-light)] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
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
              { href: '/eras-headshots', label: 'ERAS Residency Headshots' },
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
              { href: '/corporate-event-photography-cost', label: 'Corporate event photography cost' },
              { href: '/headshot-booth-cost', label: 'Headshot booth cost' },
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

        {/* Memberships & certifications (not clients; client logos live in LogoMarquee) */}
        <div className="border-t border-gray-700/50 pt-8 mb-8">
          <h4 className="text-white text-sm mb-5 tracking-wider text-center">MEMBER &amp; CERTIFIED</h4>
          <ul className="flex flex-wrap items-center justify-center gap-5">
            {[
              { src: '/images/badges/ppa-member.png', alt: 'Proud member of Professional Photographers of America (PPA)', w: 404, h: 200, cls: 'h-24' },
              { src: '/images/badges/faa-part-107-certified-remote-pilot.png', alt: 'FAA Part 107 certified remote pilot', w: 280, h: 280, cls: 'h-32' },
              { src: '/images/badges/modesto-chamber-of-commerce.png', alt: 'Member of the Modesto Chamber of Commerce', w: 319, h: 159, cls: 'h-24' },
              { src: '/images/badges/score.png', alt: 'SCORE volunteer business mentor', w: 820, h: 260, cls: 'h-16' },
            ].map((b) => (
              <li key={b.src} className="bg-white rounded-xl px-6 py-4 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={b.src} alt={b.alt} width={b.w} height={b.h} loading="lazy" className={`${b.cls} w-auto`} />
              </li>
            ))}
          </ul>
        </div>

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

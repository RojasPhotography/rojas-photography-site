'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const serviceGroups = [
  {
    label: 'Headshots',
    tagline: 'For individuals — at our Modesto studio',
    items: [
      { href: '/premium-headshots', label: 'Premium In-Studio Headshots' },
      { href: '/linkedin-headshots', label: 'LinkedIn In-Studio Headshots' },
    ],
  },
  {
    label: 'Teams & Companies',
    tagline: 'We bring the studio to your office',
    items: [
      { href: '/on-site-photography', label: 'On-Site Team Headshots' },
      { href: '/annual-headshot-programs', label: 'Annual Headshot Programs' },
      { href: '/commercial', label: 'Commercial Photography' },
    ],
  },
  {
    label: 'Events & Conferences',
    tagline: 'Coverage wherever your event happens',
    items: [
      { href: '/event-photography', label: 'Event Photography' },
      { href: '/conference-photography', label: 'Conference Photography' },
      { href: '/headshot-booth', label: 'Headshot Booth' },
    ],
  },
  {
    label: 'Video',
    tagline: 'Corporate films, testimonials & drone',
    items: [{ href: '/video', label: 'Video Production' }],
  },
];

const socials = [
  {
    href: 'https://www.instagram.com/rojas.photos/',
    label: 'Rojas Photography on Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
  },
  {
    href: 'https://www.facebook.com/RojasCreativePhotography/',
    label: 'Rojas Photography on Facebook',
    path: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z',
  },
  {
    href: 'https://www.linkedin.com/in/rojasheadshots/',
    label: 'Rojas Photography on LinkedIn',
    path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z',
  },
  {
    href: 'https://www.youtube.com/@rojasphotography',
    label: 'Rojas Photography on YouTube',
    path: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z',
  },
];

function SocialIcon({ social, className }: { social: (typeof socials)[number]; className?: string }) {
  return (
    <a
      href={social.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={social.label}
      className={className}
    >
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d={social.path} />
      </svg>
    </a>
  );
}

const topLinkClass =
  'nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300';

export default function Navigation() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);
  const [desktopOpenGroup, setDesktopOpenGroup] = useState<string | null>(null);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.services-dropdown-container')) {
        setDesktopOpenGroup(null);
      }
    };

    if (desktopOpenGroup) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [desktopOpenGroup]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setMobileOpenGroup(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setMobileOpenGroup(null);
  };

  if (pathname === '/newsletter') {
    return (
      <nav className="bg-white border-b border-gray-100 px-6 py-4 fixed w-full top-0 z-50" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto flex justify-center">
          <Link href="/" aria-label="Rojas Photography Home">
            <Image src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography" width={160} height={36} className="h-9 w-auto" priority />
          </Link>
        </div>
      </nav>
    );
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[60] focus:p-4 focus:bg-[var(--color-primary)] focus:text-white focus:text-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <nav
        className="bg-white/95 backdrop-blur-md text-[var(--color-text-dark)] px-4 sm:px-6 md:px-8 py-4 fixed w-full top-0 z-50 border-b border-gray-100 shadow-sm"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center flex-shrink-0 transition-transform hover:scale-105 duration-300"
            aria-label="Rojas Photography Home"
          >
            <Image
              src="/images/Rojas Photography Logo 24.6.png"
              alt="Rojas Photography"
              width={200}
              height={40}
              className="h-9 sm:h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">
            <Link href="/" className={topLinkClass}>
              Home
            </Link>

            {serviceGroups.map((group) => {
              const single = group.items.length === 1;
              if (single) {
                return (
                  <Link key={group.label} href={group.items[0].href} className={topLinkClass}>
                    {group.label}
                  </Link>
                );
              }
              const open = desktopOpenGroup === group.label;
              const menuId = `desktop-menu-${group.label.replace(/[^a-z]/gi, '-').toLowerCase()}`;
              return (
                <div key={group.label} className="relative services-dropdown-container">
                  <button
                    onClick={() => setDesktopOpenGroup(open ? null : group.label)}
                    className={`${topLinkClass} flex items-center gap-1.5`}
                    aria-haspopup="true"
                    aria-expanded={open}
                    aria-controls={menuId}
                  >
                    {group.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={menuId}
                    className={`absolute left-1/2 -translate-x-1/2 mt-2 w-72 bg-white rounded-xl shadow-xl transition-all duration-300 border border-gray-100 py-3 overflow-hidden ${
                      open
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-2 pointer-events-none'
                    }`}
                  >
                    <p className="px-5 pb-2 text-xs text-gray-400 italic border-b border-gray-50">
                      {group.tagline}
                    </p>
                    <div className="pt-1">
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                          onClick={() => setDesktopOpenGroup(null)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link href="/about-rojas-photography" className={topLinkClass}>
              About
            </Link>
          </div>

          {/* Socials + CTA - Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-3">
              {socials.map((s) => (
                <SocialIcon
                  key={s.href}
                  social={s}
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200"
                />
              ))}
            </div>
            <Link
              href="/contact-quote"
              className="btn-primary px-7 py-2.5 text-sm font-semibold rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-12 h-12 rounded-lg hover:bg-gray-50 transition-colors duration-200 relative z-50"
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-all duration-300 ease-out ${
                menuOpen ? 'rotate-45 translate-y-[5px]' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] my-1.5 transition-all duration-300 ease-out ${
                menuOpen ? 'opacity-0 scale-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-all duration-300 ease-out ${
                menuOpen ? '-rotate-45 -translate-y-[5px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Mobile Slide-in Drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white z-40 shadow-2xl transition-transform duration-300 ease-out overflow-y-auto ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        <div className="flex flex-col h-full pt-20 pb-8 px-6">
          {/* Mobile Menu Items */}
          <div className="flex flex-col gap-2 flex-1">
            <Link
              href="/"
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200"
              onClick={closeMenu}
              style={{ animationDelay: '0.05s' }}
            >
              Home
            </Link>

            {serviceGroups.map((group, gi) => {
              const single = group.items.length === 1;
              const open = mobileOpenGroup === group.label;
              const menuId = `mobile-menu-${group.label.replace(/[^a-z]/gi, '-').toLowerCase()}`;
              if (single) {
                return (
                  <Link
                    key={group.label}
                    href={group.items[0].href}
                    className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                    style={{ animationDelay: `${0.1 + gi * 0.05}s` }}
                  >
                    {group.label}
                  </Link>
                );
              }
              return (
                <div key={group.label} className="mobile-nav-item" style={{ animationDelay: `${0.1 + gi * 0.05}s` }}>
                  <button
                    className="w-full text-left text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-between"
                    onClick={() => setMobileOpenGroup(open ? null : group.label)}
                    aria-expanded={open}
                    aria-controls={menuId}
                  >
                    {group.label}
                    <svg
                      className={`w-5 h-5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <div
                    id={menuId}
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="pl-4 pt-1 pb-1 space-y-1">
                      <p className="px-4 pb-1 text-xs text-gray-400 italic">{group.tagline}</p>
                      {group.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                          onClick={closeMenu}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            <Link
              href="/about-rojas-photography"
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200"
              onClick={closeMenu}
              style={{ animationDelay: '0.3s' }}
            >
              About
            </Link>
          </div>

          {/* Mobile CTA + Socials */}
          <div className="pt-6 border-t border-gray-100 mobile-nav-item" style={{ animationDelay: '0.35s' }}>
            <Link
              href="/contact-quote"
              className="btn-primary px-8 py-4 text-base font-semibold rounded-full w-full text-center inline-block shadow-lg"
              onClick={closeMenu}
            >
              Get Started
            </Link>
            <div className="flex justify-center gap-6 pt-5">
              {socials.map((s) => (
                <SocialIcon
                  key={s.href}
                  social={s}
                  className="text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

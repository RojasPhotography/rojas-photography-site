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
      { href: '/premium-headshots', label: 'Premium Studio Headshots' },
      { href: '/linkedin-headshots', label: 'LinkedIn Headshots' },
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

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
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

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-gray-100 mobile-nav-item" style={{ animationDelay: '0.35s' }}>
            <Link
              href="/contact-quote"
              className="btn-primary px-8 py-4 text-base font-semibold rounded-full w-full text-center inline-block shadow-lg"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

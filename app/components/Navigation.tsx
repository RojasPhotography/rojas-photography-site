'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);

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
        setDesktopServicesOpen(false);
      }
    };

    if (desktopServicesOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [desktopServicesOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setServicesOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  const toggleDesktopServices = () => {
    setDesktopServicesOpen(!desktopServicesOpen);
  };

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
            <img
              src="/images/Rojas Photography Logo 24.6.png"
              alt="Rojas Photography"
              className="h-9 sm:h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8 xl:gap-10">
            <Link
              href="/"
              className="nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
            >
              Home
            </Link>

            {/* Services Dropdown - Desktop */}
            <div className="relative group services-dropdown-container">
              <button
                onClick={toggleDesktopServices}
                className="nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 flex items-center gap-1.5 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
                aria-haspopup="true"
                aria-expanded={desktopServicesOpen}
              >
                Services
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    desktopServicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute left-1/2 -translate-x-1/2 mt-2 w-64 bg-white rounded-xl shadow-xl transition-all duration-300 border border-gray-100 py-3 overflow-hidden ${
                desktopServicesOpen
                  ? 'opacity-100 visible translate-y-0'
                  : 'opacity-0 invisible translate-y-2 pointer-events-none'
              }`}>
                <Link
                  href="/premium-headshots"
                  className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  In-Studio Headshots
                </Link>
                <Link
                  href="/on-site-photography"
                  className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  On-Site Photography
                </Link>
                <Link
                  href="/commercial"
                  className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  Commercial Photography
                </Link>
                <Link
                  href="/video"
                  className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  Video Production
                </Link>
                <Link
                  href="/event-photography"
                  className="dropdown-item relative block px-5 py-3 text-sm font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 transition-all duration-200 border-l-2 border-transparent hover:border-[var(--color-primary)]"
                  onClick={() => setDesktopServicesOpen(false)}
                >
                  Event Photography
                </Link>
              </div>
            </div>

            <Link
              href="/work"
              className="nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
            >
              Work
            </Link>
            <Link
              href="/about-rojas-photography"
              className="nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
            >
              About
            </Link>
            <Link
              href="/contact-quote"
              className="nav-link text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--color-primary)] hover:after:w-full after:transition-all after:duration-300"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block">
            <Link
              href="/discovery-call"
              className="btn-primary px-7 py-2.5 text-sm font-semibold rounded-full inline-block shadow-md hover:shadow-lg transition-all duration-300"
            >
              Book Now
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
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-[var(--color-primary)]"
              onClick={closeMenu}
              style={{ animationDelay: '0.05s' }}
            >
              Home
            </Link>

            {/* Mobile Services Accordion */}
            <div className="mobile-nav-item" style={{ animationDelay: '0.1s' }}>
              <button
                className="w-full text-left text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 flex items-center justify-between border-l-4 border-transparent hover:border-[var(--color-primary)]"
                onClick={() => setServicesOpen(!servicesOpen)}
                aria-expanded={servicesOpen}
              >
                Services
                <svg
                  className={`w-5 h-5 transition-transform duration-300 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Services Submenu */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  servicesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="pl-4 pt-2 pb-1 space-y-1">
                  <Link
                    href="/premium-headshots"
                    className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    In-Studio Headshots
                  </Link>
                  <Link
                    href="/on-site-photography"
                    className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    On-Site Photography
                  </Link>
                  <Link
                    href="/commercial"
                    className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Commercial Photography
                  </Link>
                  <Link
                    href="/video"
                    className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Video Production
                  </Link>
                  <Link
                    href="/event-photography"
                    className="block text-base text-[var(--color-text-body)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-2.5 rounded-lg transition-all duration-200"
                    onClick={closeMenu}
                  >
                    Event Photography
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/work"
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-[var(--color-primary)]"
              onClick={closeMenu}
              style={{ animationDelay: '0.15s' }}
            >
              Work
            </Link>
            <Link
              href="/about-rojas-photography"
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-[var(--color-primary)]"
              onClick={closeMenu}
              style={{ animationDelay: '0.2s' }}
            >
              About
            </Link>
            <Link
              href="/contact-quote"
              className="mobile-nav-item text-lg font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] hover:bg-gray-50 px-4 py-3.5 rounded-lg transition-all duration-200 border-l-4 border-transparent hover:border-[var(--color-primary)]"
              onClick={closeMenu}
              style={{ animationDelay: '0.25s' }}
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-gray-100 mobile-nav-item" style={{ animationDelay: '0.3s' }}>
            <Link
              href="/discovery-call"
              className="btn-primary px-8 py-4 text-base font-semibold rounded-full w-full text-center inline-block shadow-lg"
              onClick={closeMenu}
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

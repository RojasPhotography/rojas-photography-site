'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-[60] focus:p-4 focus:bg-[var(--color-primary)] focus:text-white focus:text-lg focus:font-bold"
      >
        Skip to main content
      </a>

      <nav
        className="bg-white/95 backdrop-blur-md text-[var(--color-text-dark)] px-6 md:px-8 py-4 fixed w-full top-0 z-50 border-b border-gray-100"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center flex-shrink-0">
            <img
              src="/images/Rojas Photography Logo 24.6.png"
              alt="Rojas Photography"
              className="h-10"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-colors"
            >
              Work
            </Link>
            <Link
              href="/about-rojas-photography"
              className="text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact-quote"
              className="text-sm font-medium tracking-wide hover:text-[var(--color-primary)] transition-colors"
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link
              href="/discovery-call"
              className="btn-primary px-7 py-2.5 text-sm font-semibold rounded-full inline-block"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-[var(--color-text-dark)] transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>

        {/* Mobile slide-in drawer */}
        <div
          className={`md:hidden fixed inset-0 top-[57px] bg-white z-40 transition-transform duration-300 ease-in-out ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center justify-center gap-8 pt-16">
            <Link
              href="/"
              className="text-2xl font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/work"
              className="text-2xl font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Work
            </Link>
            <Link
              href="/about-rojas-photography"
              className="text-2xl font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact-quote"
              className="text-2xl font-medium text-[var(--color-text-dark)] hover:text-[var(--color-primary)] transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              href="/discovery-call"
              className="btn-primary px-10 py-3.5 text-lg font-semibold rounded-full mt-4"
              onClick={() => setMenuOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Homepage hero: "I need…" picker. The three choices match the menu (Headshots, Events, Video),
// so a visitor who learns them here already knows how to use the rest of the site.
const choices = [
  {
    id: 'headshots',
    label: 'Headshots',
    href: '/headshots',
    cta: 'Choose studio or on-site',
    promise: 'For you, or for your whole team',
    kicker: 'Headshots · Studio or On-Site',
    result: 'You in our Modesto studio, or your whole team at your office. Same coaching, same look.',
    img: '/images/headshots/headshot-attorney-11.jpg',
    pos: '75% 40%',
    alt: 'Studio headshot of a smiling attorney in a yellow blazer on a dark backdrop',
  },
  {
    id: 'events',
    label: 'My event covered',
    href: '/event-photography',
    cta: 'See event coverage',
    promise: 'Photos delivered while the event is still running',
    kicker: 'Events & Conferences',
    result: 'Every keynote and every handshake, ready to post before the last session ends.',
    img: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-speaker-laughing.jpg',
    pos: '50% 50%',
    alt: 'Panel speakers on stage at the California Lawyers Association Annual Meeting',
  },
  {
    id: 'video',
    label: 'A video about us',
    href: '/video',
    cta: 'See video production',
    promise: 'Brand films, testimonials, reels and drone',
    kicker: 'Corporate Video & Drone',
    result: 'People feel who you are before they ever call you.',
    img: '/images/BBSI-Corp-Video.jpg',
    pos: '50% 45%',
    alt: 'Behind the scenes of a BBSI corporate video interview',
  },
];

export default function HeroPicker() {
  const [picked, setPicked] = useState(0);
  const current = choices[picked];

  return (
    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] gap-12 lg:gap-16 items-center text-white">
      <div>
        <h1 className="hero-rise mb-6" style={{ animationDelay: '0.1s' }}>
          <span className="block text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] mb-6 uppercase">
            Corporate Photography &amp; Video · Modesto, CA
          </span>{' '}
          <span className="block text-4xl sm:text-5xl lg:text-6xl leading-[1.05] tracking-[-0.01em]">
            Photos and video that make your company look as good as it is.
          </span>
        </h1>

        <div className="hero-rise" style={{ animationDelay: '0.3s' }}>
          <p id="hero-picker-label" className="text-sm font-semibold text-white/70 mb-3">
            I need…
          </p>
          <div role="group" aria-labelledby="hero-picker-label" className="flex flex-wrap gap-2.5 mb-8">
            {choices.map((c, i) => {
              const on = i === picked;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setPicked(i)}
                  className={`min-h-[48px] px-5 rounded-full text-base transition-colors border-[1.5px] ${
                    on
                      ? 'bg-white text-[var(--color-primary-dark)] border-white font-semibold'
                      : 'bg-transparent text-white border-white/35 hover:border-[var(--color-primary-light)] font-medium'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="hero-rise flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6" style={{ animationDelay: '0.45s' }}>
          <Link
            href={current.href}
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-9 py-4 text-lg font-semibold rounded-full transition-all inline-block text-center"
          >
            {current.cta} →
          </Link>
          <span className="text-white/75 text-base" aria-live="polite">{current.promise}</span>
        </div>

        <p className="hero-rise mt-6 text-white/75 text-base" style={{ animationDelay: '0.52s' }}>
          {current.id === 'headshots' ? (
            <>
              Know what you need?{' '}
              <Link href="/premium-headshots#booking-heading" className="text-[var(--color-primary-light)] underline underline-offset-2 hover:text-white">
                Book a studio session
              </Link>{' '}
              or{' '}
              <Link href="/on-site-photography" className="text-[var(--color-primary-light)] underline underline-offset-2 hover:text-white">
                plan a team headshot day
              </Link>
              .
            </>
          ) : (
            <>
              Already have a date?{' '}
              <Link href="/contact-quote" className="text-[var(--color-primary-light)] underline underline-offset-2 hover:text-white">
                Plan it with us
              </Link>
              .
            </>
          )}
        </p>
      </div>

      <div className="hero-rise relative aspect-[4/3] lg:aspect-[4/5] rounded-2xl overflow-hidden" style={{ animationDelay: '0.2s' }}>
        {choices.map((c, i) => (
          <Image
            key={c.id}
            src={c.img}
            alt={c.alt}
            fill
            priority={i === 0}
            sizes="(max-width: 1024px) 100vw, 40vw"
            className={`object-cover transition-opacity duration-500 ${i === picked ? 'opacity-100' : 'opacity-0'}`}
            style={{ objectPosition: c.pos }}
            aria-hidden={i !== picked}
          />
        ))}
        <div className="absolute left-4 right-4 bottom-4 rounded-xl bg-[rgba(15,46,30,0.88)] px-5 py-4">
          <p className="text-[var(--color-primary-light)] text-xs font-semibold tracking-[0.2em] uppercase mb-1">{current.kicker}</p>
          <p className="text-lg md:text-xl leading-snug" style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}>{current.result}</p>
        </div>
      </div>
    </div>
  );
}

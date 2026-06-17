import Image from 'next/image';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal';

/**
 * The "two lanes" of the business (CLAUDE.md Premium Barbell):
 *  - Signature: white-glove, individual, premium (green accent)
 *  - Express:   fast, team & event, volume (restrained gold accent)
 * Copy is intentionally voice-neutral to avoid mixing "I"/"we" with the
 * rest of the homepage until the full voice pass is done.
 */
export default function TwoLanes() {
  return (
    <section className="py-20 md:py-28 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
            <p className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[var(--color-primary)] mb-4">
              How we work
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--color-text-dark)] mb-5">
              Two ways to work with us
            </h2>
            <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
              Premium, one-on-one sessions for individuals — or fast, consistent
              coverage for your whole team. Same studio, same standard.
            </p>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {/* ── Signature ─────────────────────────────────────────── */}
          <SectionReveal>
            <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden img-hover-zoom">
                <Image
                  src="/images/headshots/headshot-executive-ceo.jpg"
                  alt="Executive headshot session in our Modesto studio — Signature individual headshots"
                  fill
                  className="object-cover object-[50%_30%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-dark)]">
                  For the individual
                </span>
              </div>

              <div className="relative flex flex-1 flex-col p-7 md:p-8">
                <span className="absolute top-0 left-7 md:left-8 -translate-y-1/2 h-1 w-14 rounded-full bg-[var(--color-primary)]" />
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-3">
                  Signature
                </h3>
                <p className="text-[var(--color-text-body)] leading-relaxed mb-6">
                  White-glove executive headshots and personal-brand portraits,
                  guided start to finish by Alfonso and Niomi.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[var(--color-text-body)]">
                  {[
                    'One-on-one session with Alfonso and Niomi',
                    'Real-time posing & expression coaching',
                    'Hand-retouched images, delivered in 48 hours',
                    'Built for executives, attorneys & personal brands',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="shrink-0 mt-0.5 text-[var(--color-primary)]" size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href="/discovery-call"
                    className="btn-primary inline-flex w-full justify-center px-6 py-3.5 rounded-full font-semibold shadow-md hover:shadow-lg"
                  >
                    Book a Signature session
                  </Link>
                  <Link
                    href="/premium-headshots"
                    className="group/link mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:gap-2.5 transition-all"
                  >
                    Explore in-studio executive headshots
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </SectionReveal>

          {/* ── Express ───────────────────────────────────────────── */}
          <SectionReveal>
            <article className="group h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl transition-shadow duration-300">
              <div className="relative h-64 sm:h-72 overflow-hidden img-hover-zoom">
                <Image
                  src="/images/Move Staff Group 9.jpg"
                  alt="On-site team headshot day in Modesto — Express headshots for teams and events"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold tracking-[0.15em] uppercase text-[var(--color-text-dark)]">
                  For teams &amp; events
                </span>
              </div>

              <div className="relative flex flex-1 flex-col p-7 md:p-8">
                <span className="absolute top-0 left-7 md:left-8 -translate-y-1/2 h-1 w-14 rounded-full bg-[var(--color-accent)]" />
                <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-text-dark)] mb-3">
                  Express
                </h3>
                <p className="text-[var(--color-text-body)] leading-relaxed mb-6">
                  Fast, consistent headshots and coverage we bring to you — for
                  whole teams, conferences, and corporate events.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-[var(--color-text-body)]">
                  {[
                    'On-site setup at your office, facility or event',
                    'Consistent, polished results across your whole team',
                    'Same-day galleries & fast turnaround',
                    'Headshot days, event coverage & headshot booths',
                  ].map((item) => (
                    <li key={item} className="flex gap-2.5">
                      <Check className="shrink-0 mt-0.5 text-[var(--color-accent)]" size={18} aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href="/contact-quote"
                    className="btn-outline inline-flex w-full justify-center px-6 py-3.5 rounded-full font-semibold"
                  >
                    Get a team quote
                  </Link>
                  <Link
                    href="/on-site-photography"
                    className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-primary)] hover:gap-2.5 transition-all"
                  >
                    Explore corporate headshot days in Modesto
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </article>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}

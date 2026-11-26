import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

// The headshots chooser: the homepage hero's "Headshots" button lands here.
// One question — for you, or for your team? — then a door to each existing service page.

export const metadata: Metadata = {
  title: 'Professional Headshots for You or Your Team | Rojas Photography',
  description:
    'Professional headshots in our Modesto studio for individuals, or on-site at your office for whole teams. Coached sessions, one consistent look, fast delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/headshots',
  },
  openGraph: {
    title: 'Professional Headshots for You or Your Team | Rojas Photography',
    description:
      'In our Modesto studio for individuals, or at your office for whole teams. Coached sessions and one consistent look.',
    url: 'https://rojasphotography.net/headshots',
    type: 'website',
    images: [
      {
        url: '/images/kaiser-bts-headshots.jpg',
        alt: 'On-location team headshot studio set up inside a Kaiser office by Rojas Photography',
      },
    ],
  },
};

const doors = [
  {
    href: '/premium-headshots',
    img: '/images/headshots/headshot-ceo-nutrition-02.jpg',
    pos: '50% 28%',
    alt: 'Signature studio headshot of an executive in glasses and a leather jacket, taken in Modesto',
    eyebrow: 'In our studio · For you',
    title: 'Signature studio headshots',
    body: 'For executives, attorneys and personal brands. We guide every pose and expression, with unlimited wardrobe changes and finals in 48 hours.',
    cta: 'Book a studio session',
    ctaHref: '/premium-headshots#booking-heading',
  },
  {
    href: '/on-site-photography',
    img: '/images/kaiser-bts-headshots.jpg',
    pos: '50% 42%',
    alt: 'Rojas Photography mobile headshot studio set up inside a Kaiser office in Pleasanton',
    eyebrow: 'At your office · For your team',
    title: 'Team headshot days',
    body: 'We bring the full studio to your office, firm or facility. Everyone is coached, everyone matches, and the gallery arrives the same day.',
    cta: 'Plan a team headshot day',
    ctaHref: '/on-site-photography',
  },
];

const compare = [
  { q: 'Where', studio: 'Our Modesto studio', team: 'Your office, anywhere in California' },
  { q: 'Best for', studio: 'One person, or a few partners', team: 'A whole team, department or firm' },
  { q: 'Booking', studio: 'Book online in minutes', team: 'A short planning form, then a quick call' },
  { q: 'Delivery', studio: 'Edited finals within 48 hours', team: 'Gallery the same day' },
];

export default function HeadshotsPage() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Headshots', url: 'https://rojasphotography.net/headshots' },
        ])}
      />
      <main id="main-content" className="bg-[var(--color-bg-warm)]">
        <section className="pt-28 lg:pt-36 pb-10 px-6 md:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-[var(--color-primary)] font-semibold text-xs md:text-sm tracking-[0.22em] uppercase mb-5">
              Professional Headshots · Modesto &amp; the Central Valley
            </h1>
            <p
              className="text-4xl md:text-6xl leading-[1.06] text-[var(--color-text-dark)] max-w-4xl mx-auto mb-4"
              style={{ fontFamily: 'var(--font-heading), Georgia, serif' }}
            >
              Is this headshot for you, or your whole team?
            </p>
            <p className="text-lg text-[var(--color-text-body)] max-w-2xl mx-auto">
              Same coaching and the same Rojas look either way. Pick where it happens.
            </p>
          </div>
        </section>

        <section className="px-6 md:px-8 pb-16" aria-label="Choose studio or on-site headshots">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-5">
            {doors.map((d, i) => (
              <article key={d.href} className="relative min-h-[520px] rounded-2xl overflow-hidden group">
                <Image
                  src={d.img}
                  alt={d.alt}
                  fill
                  priority={i === 0}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ objectPosition: d.pos }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(15,46,30,0.45)] to-[rgba(15,46,30,0.96)]" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9 text-white">
                  <p className="text-[var(--color-primary-light)] text-xs font-semibold tracking-[0.2em] uppercase mb-3">{d.eyebrow}</p>
                  <h2 className="text-3xl md:text-4xl mb-3 text-white">{d.title}</h2>
                  <p className="text-white/85 leading-relaxed mb-6 max-w-lg">{d.body}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link
                      href={d.ctaHref}
                      className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-7 py-3.5 font-semibold rounded-full inline-block text-center transition-all"
                    >
                      {d.cta} →
                    </Link>
                    {d.ctaHref !== d.href && (
                      <Link href={d.href} className="text-white/85 hover:text-white underline underline-offset-4 text-sm">
                        How studio sessions work
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-white py-16 md:py-20 px-6 md:px-8" aria-labelledby="compare-heading">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 id="compare-heading" className="text-3xl md:text-4xl text-[var(--color-text-dark)] text-center mb-10">
                Studio or on-site headshots: the quick difference
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th scope="col" className="py-3 pr-4 text-sm font-semibold text-[var(--color-text-muted)]"><span className="sr-only">Detail</span></th>
                      <th scope="col" className="py-3 pr-4 text-[var(--color-text-dark)] font-semibold">In our studio</th>
                      <th scope="col" className="py-3 text-[var(--color-text-dark)] font-semibold">At your office</th>
                    </tr>
                  </thead>
                  <tbody>
                    {compare.map((r) => (
                      <tr key={r.q} className="border-b border-gray-100">
                        <th scope="row" className="py-4 pr-4 text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider">{r.q}</th>
                        <td className="py-4 pr-4 text-[var(--color-text-body)]">{r.studio}</td>
                        <td className="py-4 text-[var(--color-text-body)]">{r.team}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="py-14 px-6 md:px-8" aria-label="Other headshot options">
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 gap-5">
            <Link href="/headshot-booth" className="rounded-xl bg-white border border-gray-100 p-6 hover:shadow-lg transition-all">
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">Hosting a conference?</p>
              <p className="text-[var(--color-text-dark)] text-lg mb-1">Add a headshot booth for your attendees →</p>
              <p className="text-[var(--color-text-muted)] text-sm">Fast, flat-rate headshots for expos, conferences and all-hands.</p>
            </Link>
            <Link href="/annual-headshot-programs" className="rounded-xl bg-white border border-gray-100 p-6 hover:shadow-lg transition-all">
              <p className="text-sm font-semibold text-[var(--color-primary)] uppercase tracking-wider mb-2">Hiring all year?</p>
              <p className="text-[var(--color-text-dark)] text-lg mb-1">See annual headshot programs →</p>
              <p className="text-[var(--color-text-muted)] text-sm">A yearly team day plus new hires shot to the same look.</p>
            </Link>
          </div>
          <p className="text-center text-[var(--color-text-body)] mt-10">
            See it in action: the{' '}
            <Link href="/work/kaiser-innovations-team-headshots" className="text-[var(--color-primary)] font-semibold hover:underline">
              Kaiser Permanente team headshot day in Pleasanton
            </Link>
            .
          </p>
        </section>

        <CTASection
          heading="Ready when you are"
          subheading="Studio sessions book online in minutes. For a team day, tell us your headcount and date and we'll reply within 24 hours."
          primaryHref="/premium-headshots#booking-heading"
          primaryLabel="Book a studio session"
        />
      </main>
    </>
  );
}

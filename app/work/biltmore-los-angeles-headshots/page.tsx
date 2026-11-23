import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import SchemaScript from '../../components/SchemaScript';
import { generateBreadcrumbSchema } from '../../lib/schema';

// TODO before merge: add photos to public/images/work/triological-biltmore/,
// swap the gradient hero for a photo, and add the MasonryGallery section.

export const metadata: Metadata = {
  title: 'Conference Headshots in Los Angeles: Millennium Biltmore Case Study',
  description:
    'How Alfonso Rojas ran quick, coached headshot sessions for the Triological Society at the Millennium Biltmore Hotel in downtown Los Angeles, without taking time from their program.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/work/biltmore-los-angeles-headshots',
  },
  openGraph: {
    title: 'Conference Headshots in Los Angeles: Millennium Biltmore Case Study',
    description:
      'Quick, coached headshot sessions over the lunch window at a historic downtown Los Angeles hotel, with photos delivered to each attendee during the event.',
    url: 'https://rojasphotography.net/work/biltmore-los-angeles-headshots',
    type: 'article',
  },
};

const facts = [
  { label: 'Client', value: 'The Triological Society (national otolaryngology association)' },
  { label: 'Venue', value: 'Millennium Biltmore Hotel, downtown Los Angeles' },
  { label: 'Timing', value: 'October 2026' },
  { label: 'Format', value: 'Quick coached headshot sessions during the lunch window and session breaks — on-site studio at the hotel' },
  { label: 'Delivery', value: 'Photos delivered to each attendee via SpotMyPhotos during the event' },
  { label: 'Photographer', value: 'Alfonso Rojas' },
];

export default function BiltmoreLosAngelesHeadshotsPage() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Work', url: 'https://rojasphotography.net/work' },
          { name: 'Millennium Biltmore Headshots', url: 'https://rojasphotography.net/work/biltmore-los-angeles-headshots' },
        ])}
      />

      <div className="min-h-screen bg-white">
        <HeroSection
          title="Coached Headshots in a Los Angeles Landmark"
          tag="Case Study | On-Site Headshots · Millennium Biltmore, Los Angeles"
          gradient
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            The Triological Society brought us to the historic Millennium Biltmore in downtown Los Angeles to give their physicians a professional headshot without taking time from a packed program: quick, coached sessions over the lunch window, with finished photos delivered during the event.
          </p>
        </HeroSection>

        <main id="main-content">
          {/* Quick facts */}
          <section className="py-16 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="facts-heading">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 id="facts-heading" className="text-2xl md:text-3xl text-center text-[var(--color-text-dark)] mb-10">
                  The Job at a Glance
                </h2>
                <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                  {facts.map((f) => (
                    <div key={f.label} className="border-b border-gray-200 pb-3">
                      <dt className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">{f.label}</dt>
                      <dd className="text-[var(--color-text-dark)]">{f.value}</dd>
                    </div>
                  ))}
                </dl>
              </SectionReveal>
            </div>
          </section>

          {/* The story */}
          <section className="py-16 md:py-20 px-8 bg-white">
            <div className="max-w-3xl mx-auto space-y-6 text-lg text-[var(--color-text-body)] leading-relaxed">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">A Medical Association, a Historic Hotel, and a High Bar</h2>
                <p>
                  The Triological Society is a national society of otolaryngologists, head and neck surgeons whose headshots end up on hospital directories, university faculty pages and conference programs. When they gathered at the Millennium Biltmore in downtown Los Angeles, the organizer wanted to give attendees something they would genuinely use. The challenge wasn&apos;t the photography; it was the schedule. Physicians at a packed meeting don&apos;t have an hour for a photo shoot, and the program had no minutes to spare.
                </p>
              </SectionReveal>
              <SectionReveal>
                <p>
                  So we built the day around their program. Alfonso set up a complete studio at the hotel, with professional lighting and backdrop, and ran quick, coached sessions through the lunch window, catching early arrivals before and stragglers after. Brief doesn&apos;t mean uncoached: every attendee was guided through posture and expression in the few minutes they had.
                </p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 pt-6">Photos on Their Phones Before They Left</h2>
                <p>
                  Delivery ran through SpotMyPhotos, so each physician&apos;s photos reached their phone during the event itself, before they headed home. No waiting weeks for a gallery link, and no chasing people for selections afterward. For the organizer, it was a perk attendees valued that cost the program zero minutes, and they told us afterward that everyone loved their photos.
                </p>
              </SectionReveal>
              <SectionReveal>
                <p>
                  We&apos;re based in Modesto and work statewide, including Los Angeles, San Diego, the Bay Area and Sacramento. If your association or company is gathering anywhere in California, the studio travels. See our{' '}
                  <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team headshots</Link> or the{' '}
                  <Link href="/headshot-booth" className="text-[var(--color-primary)] hover:underline">headshot booth</Link> for the high-volume version.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery placeholder — added when photos come off the SSD */}

          {/* CTA */}
          <section className="py-20 px-8 bg-[var(--color-primary)] text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-white mb-6">Bringing Your People Together in LA?</h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  We bring the same coached headshot experience to hotels, conference centers and offices anywhere in California. Tell us your date and venue, and we&apos;ll reply with a clear quote within 24 hours.
                </p>
                <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                  Request a Quote
                </Link>
              </SectionReveal>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

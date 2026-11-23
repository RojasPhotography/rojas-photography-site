import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import SchemaScript from '../../components/SchemaScript';
import { generateBreadcrumbSchema } from '../../lib/schema';

// TODO: add the outdoor team photo to the gallery when Alfonso sends it.

export const metadata: Metadata = {
  title: 'Kaiser Permanente Team Headshots in Pleasanton | Case Study',
  description:
    'How Alfonso and Niomi Rojas photographed Kaiser Permanente’s national Innovations team at the Kaiser Business Campus in Pleasanton: headshots on white and gray in one sitting, plus a team photo.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/work/kaiser-innovations-team-headshots',
  },
  openGraph: {
    title: 'Kaiser Permanente Team Headshots in Pleasanton | Case Study',
    description:
      'A national team, together for one day. Headshots scheduled around their meetings, on white and gray in a single sitting, delivered in real time.',
    url: 'https://rojasphotography.net/work/kaiser-innovations-team-headshots',
    type: 'article',
    images: [
      {
        url: 'https://rojasphotography.net/images/work/kaiser-innovations-team/kaiser-team-headshots-gray-white.jpg',
        width: 1500,
        height: 1000,
        alt: 'The same Kaiser Permanente team headshot on a gray background and a white background',
      },
    ],
  },
};

const facts = [
  { label: 'Client', value: 'Kaiser Permanente, Innovations team' },
  { label: 'Venue', value: 'Kaiser Business Campus, Pleasanton, CA' },
  { label: 'Timing', value: 'January 2025' },
  { label: 'Format', value: 'Headshots pre-scheduled around the team’s meetings, plus a team photo at the end of the day' },
  { label: 'Backgrounds', value: 'White and gray for every person, both lit in camera in one sitting' },
  { label: 'Delivery', value: 'Photos delivered in real time via SpotMyPhotos' },
  { label: 'Photographers', value: 'Alfonso & Niomi Rojas' },
];

const pairs = Array.from({ length: 6 }, (_, i) => {
  const id = String(i + 1).padStart(2, '0');
  return {
    id,
    gray: `/images/work/kaiser-innovations-team/kaiser-team-headshot-${id}-gray.jpg`,
    white: `/images/work/kaiser-innovations-team/kaiser-team-headshot-${id}-white.jpg`,
  };
});

export default function KaiserInnovationsTeamHeadshotsPage() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Work', url: 'https://rojasphotography.net/work' },
          { name: 'Kaiser Permanente Team Headshots', url: 'https://rojasphotography.net/work/kaiser-innovations-team-headshots' },
        ])}
      />

      <div className="min-h-screen bg-white">
        <HeroSection
          title="One Day, One Room, a Whole National Team"
          tag="Case Study | Team Headshots · Kaiser Permanente, Pleasanton"
          gradient
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Kaiser Permanente&apos;s Innovations team works from across the country. When they flew in to Pleasanton for a day of meetings, they had one chance to get matching headshots and a team photo, and very little notice to plan it.
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">A Rare Day With Everyone Together</h2>
                <p>
                  When a team is spread across the country, their headshots usually show it: different photographers, different backgrounds, different years. The Innovations team was gathering at the Kaiser Business Campus in Pleasanton for a day of meetings, which made it the one day everyone would be in the same building. The catch was timing. The request came on very short notice, and the meeting agenda couldn&apos;t move.
                </p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 pt-6">Built Around Their Meetings</h2>
                <p>
                  We turned the quote around quickly, then scheduled every headshot ahead of time into the gaps between meetings, so no one missed a session and no one waited in a line. We set up a full studio on site, coached each person through posture and expression, and delivered photos in real time through SpotMyPhotos. At the end of the day, with everyone still together, we moved outside to a different location for the team photo.
                </p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 pt-6">Two Looks, One Sitting</h2>
                <p>
                  The team needed two looks: a clean white background and a classic gray. Instead of shooting twice or faking one in editing, we lit the backdrop for white, then switched those lights off for gray. Each person walked away with both versions from a single sitting, with natural edges and no cutouts, so the photos work everywhere from the company directory to LinkedIn.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery: gray and white pairs */}
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="gallery-heading">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 id="gallery-heading" className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-4">Same Sitting, Two Backgrounds</h2>
                <p className="text-center text-lg text-[var(--color-text-body)] max-w-2xl mx-auto mb-12">
                  Gray on the left, white on the right. Nothing was swapped in editing; only the lights changed.
                </p>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-10">
                {pairs.map((p) => (
                  <figure key={p.id} className="grid grid-cols-2 gap-2">
                    <div className="relative aspect-square overflow-hidden rounded-l-xl bg-gray-300">
                      <Image
                        src={p.gray}
                        alt="Kaiser Permanente Innovations team headshot on a gray background, Pleasanton"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-r-xl bg-gray-100">
                      <Image
                        src={p.white}
                        alt="The same team member's headshot on a white background, from the same sitting"
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* Review */}
          <section className="py-16 md:py-20 px-8 bg-white" aria-labelledby="review-heading">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 id="review-heading" className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-12">In Her Words</h2>
                <figure className="grid md:grid-cols-[220px_1fr] gap-8 items-center">
                  <div className="relative aspect-square w-48 md:w-full mx-auto overflow-hidden rounded-xl bg-gray-300">
                    <Image
                      src="/images/work/kaiser-innovations-team/kaiser-team-headshot-07-gray.jpg"
                      alt="Sandra Mello, Admin Specialist at the Kaiser Business Campus in Pleasanton"
                      fill
                      sizes="220px"
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-lg md:text-xl text-[var(--color-text-dark)] leading-relaxed">
                      &ldquo;With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team&apos;s headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Alfonso made us feel so relaxed and knew how to get the best picture from each of us and was very quick to take the team photo outside in a different location - again, with lovely results. Our team could not be more satisfied with the work provided&hellip; Highly recommend!&rdquo;
                    </blockquote>
                    <figcaption className="mt-5 text-[var(--color-text-muted)]">
                      <span className="font-semibold text-[var(--color-text-dark)]">Sandra Mello</span>, Admin Specialist, Kaiser Business Campus, Pleasanton &middot; Google Review
                    </figcaption>
                  </div>
                </figure>
              </SectionReveal>
            </div>
          </section>

          {/* Related */}
          <section className="pb-16 px-8 bg-white">
            <div className="max-w-3xl mx-auto text-lg text-[var(--color-text-body)] leading-relaxed">
              <SectionReveal>
                <p>
                  We&apos;re based in Modesto and bring the studio to offices across the East Bay, the Central Valley and the rest of California. See our{' '}
                  <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team headshots</Link>,{' '}
                  <Link href="/healthcare-headshots" className="text-[var(--color-primary)] hover:underline">healthcare headshots</Link>, or the{' '}
                  <Link href="/annual-headshot-programs" className="text-[var(--color-primary)] hover:underline">annual headshot programs</Link> that keep a whole organization consistent year after year.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-8 bg-[var(--color-primary)] text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-white mb-6">Is Your Team Finally in One Place?</h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  Tell us the date, the venue and how many people, even on short notice. We&apos;ll reply with a clear quote within 24 hours and build the schedule around your agenda.
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

import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '../../components/HeroSection';
import SectionReveal from '../../components/SectionReveal';
import MasonryGallery from '../../components/MasonryGallery';
import SchemaScript from '../../components/SchemaScript';
import { generateBreadcrumbSchema } from '../../lib/schema';

export const metadata: Metadata = {
  title: 'CLA Annual Meeting 2026 — Conference Photography Case Study',
  description:
    'How Alfonso and Niomi Rojas covered the California Lawyers Association 3-day 2026 Annual Meeting in San Diego — keynotes, breakouts, the expo, and a headshot booth.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/work/cla-annual-meeting-2026',
  },
  openGraph: {
    title: 'CLA Annual Meeting 2026 — Conference Photography Case Study',
    description:
      'Three days of conference coverage plus an expo headshot booth at the Sheraton San Diego Resort — with live photo delivery throughout the event.',
    url: 'https://rojasphotography.net/work/cla-annual-meeting-2026',
    type: 'article',
    images: [
      {
        url: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg',
        alt: 'Panel discussion at the California Lawyers Association 2026 Annual Meeting in San Diego — Rojas Photography',
      },
    ],
  },
};

const facts = [
  { label: 'Client', value: 'California Lawyers Association' },
  { label: 'Event', value: '2026 Annual Meeting' },
  { label: 'Location', value: 'Sheraton San Diego Resort, Harbor Island' },
  { label: 'Dates', value: 'October 22–24, 2026 (3 days)' },
  { label: 'Coverage', value: 'Keynotes, breakout sessions, expo floor, networking & luncheons' },
  { label: 'Add-on', value: 'Headshot booth in the expo for attendees' },
  { label: 'Delivery', value: 'Live photo delivery during the event via SpotMyPhotos; full galleries uploaded nightly' },
  { label: 'Team', value: 'Alfonso & Niomi Rojas — two photographers, every day' },
];

const gallery = [
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg', alt: 'Panel of four speakers on stage before a full audience at the CLA 2026 Annual Meeting in San Diego', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-speaker-laughing.jpg', alt: 'Speaker laughing with a microphone during a CLA Annual Meeting panel session', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-expo-floor.jpg', alt: 'Attendees visiting exhibitor booths on the expo floor at the CLA 2026 Annual Meeting', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-discussion.jpg', alt: 'Three panelists in an animated discussion on the CLA Annual Meeting stage', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-attendee-audience.jpg', alt: 'Smiling attendee listening during a breakout session at the CLA 2026 Annual Meeting', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-sponsor-booth.jpg', alt: 'Sponsor team at their exhibitor booth at the CLA 2026 Annual Meeting expo', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-luncheon-celebration.jpg', alt: 'Attendees in captain hats applauding during a CLA Annual Meeting luncheon in San Diego', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-speakers-group.jpg', alt: 'Five conference speakers posed together on stage at the CLA 2026 Annual Meeting', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-podium-signage.jpg', alt: 'CLA Annual Meeting podium signage with a speaker presenting in the background', width: 1800, height: 1200 },
  { src: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-sheraton-san-diego-marina.jpg', alt: 'Sheraton San Diego Resort on Harbor Island seen from the marina, venue of the CLA 2026 Annual Meeting', width: 1800, height: 1200 },
];

export default function CLAAnnualMeeting2026Page() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Work', url: 'https://rojasphotography.net/work' },
          { name: 'CLA Annual Meeting 2026', url: 'https://rojasphotography.net/work/cla-annual-meeting-2026' },
        ])}
      />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg"
          title="Three Days, Every Room: the CLA Annual Meeting in San Diego"
          tag="Case Study | Conference Photography & Headshot Booth"
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            How we covered the California Lawyers Association&apos;s 2026 Annual Meeting — keynotes, breakouts, the expo floor, and a headshot booth — with photos in attendees&apos; hands while the event was still happening.
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">A Statewide Conference, Covered Wall to Wall</h2>
                <p>
                  The California Lawyers Association brings attorneys from across the state to its Annual Meeting — three days of keynotes, breakout sessions, an exhibitor expo, award luncheons, and nonstop networking. In 2026 that meant the Sheraton San Diego Resort on Harbor Island, and CLA asked us to do what we do for them every year: cover all of it.
                </p>
              </SectionReveal>
              <SectionReveal>
                <p>
                  With two photographers — Alfonso and Niomi — we split the building. While one of us covered the main stage, the other worked breakout rooms, the expo floor, and the candid moments in between: speakers mid-laugh, attendees reconnecting, sponsors meeting their next clients. A conference doesn&apos;t happen in one room, so neither do we.
                </p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 pt-6">A Headshot Booth Where the Attendees Already Are</h2>
                <p>
                  In the expo hall we set up our{' '}
                  <Link href="/headshot-booth" className="text-[var(--color-primary)] hover:underline">headshot booth</Link> — a complete studio with professional lighting where attendees stepped in for a quick, coached session between sessions. For a professional association, it&apos;s one of the most popular stops on the floor: members walk away with a current, professional headshot, and the association gets credit for providing it.
                </p>
              </SectionReveal>
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6 pt-6">Photos Delivered While the Event Was Still Running</h2>
                <p>
                  Delivery is where conference photography is won or lost. Using SpotMyPhotos, booth headshots and event coverage reached attendees&apos; phones during the event itself — branded, edited, and shareable while people were still in the building. Each night we processed and uploaded the day&apos;s full gallery, so CLA&apos;s team started every morning with the previous day&apos;s coverage ready to post.
                </p>
              </SectionReveal>
              <SectionReveal>
                <p>
                  CLA brings us back every year for their event photography and headshot booths — the kind of repeat trust we work hardest to keep.
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* Gallery */}
          <section className="py-12 px-8 bg-white" aria-label="CLA Annual Meeting 2026 photo gallery">
            <div className="max-w-6xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-10">From the Three Days</h2>
              </SectionReveal>
              <MasonryGallery images={gallery} />
              <p className="text-center text-sm text-[var(--color-text-muted)] mt-6">
                Images shown with the event-branded frame attendees received through live delivery.
              </p>
            </div>
          </section>

          {/* CTA */}
          <section className="py-20 px-8 bg-[var(--color-primary)] text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-white mb-6">Planning a Conference in California?</h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  From Modesto to San Diego, we cover multi-day conferences the same way: every room, live delivery, and a headshot booth your attendees will thank you for. Tell us your dates and venue — we&apos;ll reply with a clear quote within 24 hours.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                    Request a Conference Quote
                  </Link>
                  <Link href="/conference-photography" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                    Conference Photography Services
                  </Link>
                </div>
              </SectionReveal>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

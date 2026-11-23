import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import SectionReveal from '../components/SectionReveal';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

export const metadata: Metadata = {
  title: 'Our Work — Case Studies | Rojas Photography',
  description:
    'Real jobs, told straight: how Alfonso and Niomi Rojas cover conferences, corporate events, and team headshot days across California — with the photos to prove it.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/work',
  },
  openGraph: {
    title: 'Our Work — Case Studies | Rojas Photography',
    description:
      'Case studies from conferences, corporate events, and headshot programs across California.',
    url: 'https://rojasphotography.net/work',
    images: ['/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg'],
  },
};

const caseStudies = [
  {
    href: '/work/cla-annual-meeting-2026',
    image: '/images/work/cla-annual-meeting-2026/cla-annual-meeting-panel-stage-audience.jpg',
    alt: 'Panel discussion before a full audience at the CLA 2026 Annual Meeting in San Diego',
    tag: 'Conference Photography · Headshot Booth',
    title: 'CLA Annual Meeting 2026 — San Diego',
    blurb:
      'Three days of keynotes, breakouts, and a full expo at the Sheraton San Diego Resort — plus a headshot booth for attendees and live photo delivery throughout the event.',
  },
  {
    href: '/work/biltmore-los-angeles-headshots',
    image: '/images/work/triological-biltmore/biltmore-los-angeles-conference-headshots-collage.jpg',
    alt: 'Three conference headshots taken on-site at the Millennium Biltmore Hotel in Los Angeles',
    tag: 'Conference Headshots · On-Site Studio',
    title: 'Triological Society at the Millennium Biltmore — Los Angeles',
    blurb:
      'Quick, coached headshots over the lunch window at a historic downtown LA hotel, with photos delivered to each attendee during the event.',
  },
  {
    href: '/work/kaiser-innovations-team-headshots',
    image: '/images/work/kaiser-innovations-team/kaiser-team-headshots-gray-white.jpg',
    alt: 'The same Kaiser Permanente team headshot on a gray background and a white background',
    tag: 'Team Headshots · On-Site Studio',
    title: 'Kaiser Permanente Innovations Team — Pleasanton',
    blurb:
      'A national team in one building for one day: headshots scheduled around their meetings, white and gray backgrounds in a single sitting, and a team photo to close it out.',
  },
];

export default function WorkPage() {
  return (
    <>
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Work', url: 'https://rojasphotography.net/work' },
        ])}
      />

      <div className="min-h-screen bg-white">
        <main id="main-content" className="pt-28 pb-20 px-8">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <p className="text-sm font-semibold tracking-widest uppercase text-[var(--color-primary)] text-center mb-4">Our Work</p>
              <h1 className="text-4xl md:text-5xl text-center text-[var(--color-text-dark)] mb-6">
                Real Jobs. Real Rooms. Real Proof.
              </h1>
              <p className="text-lg text-[var(--color-text-body)] text-center max-w-2xl mx-auto mb-16 leading-relaxed">
                Case studies from the conferences, corporate events, and headshot programs we cover across California — what the client needed, how we handled it, and the photographs that came out of it.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-10">
              {caseStudies.map((cs) => (
                <SectionReveal key={cs.href}>
                  <Link href={cs.href} className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <div className="relative aspect-[3/2] overflow-hidden">
                      <Image
                        src={cs.image}
                        alt={cs.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-7">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary)] mb-2">{cs.tag}</p>
                      <h2 className="text-2xl text-[var(--color-text-dark)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">{cs.title}</h2>
                      <p className="text-[var(--color-text-body)] leading-relaxed">{cs.blurb}</p>
                      <p className="mt-4 font-semibold text-[var(--color-primary)]">Read the case study →</p>
                    </div>
                  </Link>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <p className="text-center text-[var(--color-text-body)] mt-16 text-lg">
                Want your event here next?{' '}
                <Link href="/contact-quote" className="text-[var(--color-primary)] hover:underline font-semibold">Tell us what you&apos;re planning.</Link>
              </p>
            </SectionReveal>
          </div>
        </main>
      </div>
    </>
  );
}

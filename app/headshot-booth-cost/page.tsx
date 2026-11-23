import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much does a headshot booth cost?',
    answer:
      'At Rojas Photography, headshot booth pricing starts at $2,500 for a half day (4 hours) and $5,000 for a full day — unlimited attendees either way. We photograph every person who steps in front of the camera, and the edited gallery is delivered the same day. Multi-day events get a clear flat quote. For comparison, national headshot-booth vendors commonly charge $5,000 or more for a single conference day.',
  },
  {
    question: 'How many people can a headshot booth photograph?',
    answer:
      'There is no cap. We have photographed 80 people in a single 4-hour booth session. Each attendee is guided through a quick coached session — posture, expression, angle — so even at event pace, every person walks away with a headshot they are glad to use.',
  },
  {
    question: 'What is included in a headshot booth booking?',
    answer:
      'A complete professional studio brought to your venue — lighting, backdrop, and camera — plus Alfonso, Niomi and our team, who coach every attendee through their quick session. Every image is edited, and the finished gallery is delivered the same day so attendees have their headshots before the event buzz fades.',
  },
  {
    question: 'What is the difference between a headshot booth and an on-site team headshot day?',
    answer:
      'They are different products for different goals. A headshot booth is a flat $2,500 half day built for volume: unlimited attendees, quick coached sessions, same-day gallery — ideal for conferences, expos, and large employee groups. An on-site team headshot day is $150 per person with no minimum: each person gets a full, unhurried coached session. If you want maximum people through the camera, choose the booth; if you want every employee to get individual coaching time, choose the team day.',
  },
  {
    question: 'Is a real headshot booth better than an AI headshot booth?',
    answer:
      'AI headshot kiosks generate synthetic images from selfies — results can look uncanny, and attendees know the difference. A professional booth gives every attendee a real photograph taken by a photographer who coached them into it. For employers, real headshots are brand assets; for attendees, they are a genuine perk worth standing in line for.',
  },
  {
    question: 'Can sponsors pay for the headshot booth at our conference?',
    answer:
      'Yes — a sponsored headshot booth is one of the most popular activations we run. The sponsor covers the flat booth rate, attendees get free professional headshots, and the sponsor gets the goodwill (and branding on the delivery gallery). It is a strong draw for expo floors and networking lounges.',
  },
  {
    question: 'Do you bring the headshot booth to events outside Modesto?',
    answer:
      'Yes. Rojas Photography runs headshot booths at conferences and corporate events statewide — the Central Valley, Sacramento, the Bay Area, Los Angeles, and San Diego. Tell us your dates, venue, and expected attendance when you request a quote.',
  },
  {
    question: 'How far in advance should we book a headshot booth?',
    answer:
      'For conferences and large events, 4–8 weeks ahead is ideal to secure your date. Smaller employee events can often be arranged with 2–3 weeks of notice. Contact us as soon as your event date is confirmed.',
  },
];

export const metadata: Metadata = {
  title: 'How Much Does a Headshot Booth Cost? | 2026 Guide',
  description:
    'What a conference headshot booth costs in 2026: flat-rate pricing, what is included, how many people fit in a half day, and how it compares to a team day.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/headshot-booth-cost',
  },
  openGraph: {
    title: 'Headshot Booth Cost | 2026 Pricing Guide',
    description:
      'Flat-rate headshot booth pricing for conferences, expos, and employee events in California — what is included, how it compares, and how to budget.',
    url: 'https://rojasphotography.net/headshot-booth-cost',
    type: 'article',
    images: [
      {
        url: '/images/kaiser-bts-headshots.jpg',
        alt: 'Professional headshot booth setup at a corporate event - Rojas Photography',
      },
    ],
  },
};

const costFactors = [
  { factor: 'Event Duration', detail: 'The main variable. A half day (4 hours) covers most conference and employee events, starting at $2,500. A full day is $5,000, and multi-day conferences get a flat quote scaled to the schedule — never a per-head surprise.' },
  { factor: 'Attendance', detail: 'With a flat-rate booth, attendance changes your per-person value, not your price. 40 attendees works out to about $62 per headshot; 80 attendees works out to about $31. The busier your event, the better the math gets.' },
  { factor: 'Location', detail: 'We run booths statewide — Central Valley, Sacramento, the Bay Area, Los Angeles, and San Diego. Tell us the venue and dates and your quote covers everything.' },
  { factor: 'Delivery Speed', detail: 'Same-day gallery delivery is standard, not an upgrade. Attendees get their edited headshots while your event is still the thing they are talking about.' },
  { factor: 'Staffing', detail: 'Every booth is led by Alfonso and Niomi, with our team when the day calls for it. One person shoots while another coaches and keeps the line moving, which is how 80 people fit into 4 hours without anyone feeling rushed past.' },
];

export default function HeadshotBoothCostPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Headshot Booth', url: 'https://rojasphotography.net/headshot-booth' },
          { name: 'Headshot Booth Cost', url: 'https://rojasphotography.net/headshot-booth-cost' },
        ])}
      />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/kaiser-bts-headshots.jpg"
          title="How Much Does a Headshot Booth Cost? 2026 Pricing Guide"
          tag="Conferences, Expos & Employee Events | Rojas Photography"
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            Budgeting a headshot station for your conference, expo, or employee event? Here are the real numbers, what&apos;s included, and how to decide between a booth and a coached team day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/contact-quote"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Get a Quote
            </Link>
            <Link
              href="/headshot-booth"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              See the Headshot Booth
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">
          {/* The answer, up front */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4 text-center">
                  Headshot Booth Pricing, Up Front
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Most vendors make you request a quote before you see a number. Here is ours — flat, with no per-head counting.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <SectionReveal>
                  <div className="bg-[var(--color-primary)] rounded-xl p-8 text-center shadow-lg">
                    <p className="text-sm font-semibold text-white/70 uppercase tracking-wide mb-2">Booth Half Day (4 hrs)</p>
                    <p className="text-4xl font-bold text-white mb-2">Starts at $2,500</p>
                    <p className="text-white/70 text-sm mb-4">unlimited attendees</p>
                    <p className="text-white/90 text-sm leading-relaxed">Every person who steps in front of the camera is photographed, coached, and in the same-day gallery.</p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 text-center border border-gray-100">
                    <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Booth Full Day</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">$5,000</p>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4">unlimited attendees</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">All-day expos and conferences. Multi-day events get one clear flat quote — tell us your run of show.</p>
                  </div>
                </SectionReveal>
                <SectionReveal>
                  <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 text-center border border-gray-100">
                    <p className="text-sm font-semibold text-[var(--color-text-muted)] uppercase tracking-wide mb-2">Prefer Coaching Time?</p>
                    <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">$150</p>
                    <p className="text-[var(--color-text-muted)] text-sm mb-4">per person, no minimum</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Our <Link href="/on-site-photography" className="underline hover:text-[var(--color-primary)]">on-site team day</Link> gives every person a full, unhurried coached session instead.
                    </p>
                  </div>
                </SectionReveal>
              </div>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-8 border border-gray-100">
                  <h3 className="text-[var(--color-text-dark)] mb-3 text-lg">The per-person math is the point</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    A flat booth rate means attendance works in your favor: at 40 attendees a half day works out to about <strong className="text-[var(--color-text-dark)]">$62 per professional headshot</strong>; at 80 — a number we have actually photographed in 4 hours — it is about <strong className="text-[var(--color-text-dark)]">$31</strong>. National booth vendors commonly charge $5,000 or more for a single conference day, often with per-head limits.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* What drives the price */}
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-12">
                  What Shapes a Headshot Booth Quote
                </h2>
              </SectionReveal>
              <div className="space-y-6">
                {costFactors.map((f) => (
                  <SectionReveal key={f.factor}>
                    <div className="bg-white rounded-xl p-6 border border-gray-100">
                      <h3 className="text-[var(--color-text-dark)] text-lg mb-2">{f.factor}</h3>
                      <p className="text-[var(--color-text-body)] leading-relaxed">{f.detail}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* Booth vs team day */}
          <section className="py-16 md:py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-8">
                  Booth or Team Day? One Question Decides It.
                </h2>
                <p className="text-lg text-[var(--color-text-body)] leading-relaxed text-center max-w-3xl mx-auto mb-10">
                  Do you want <strong className="text-[var(--color-text-dark)]">maximum people through the camera</strong> in an afternoon, or do you want{' '}
                  <strong className="text-[var(--color-text-dark)]">every person to get individual coaching time</strong>? The first is the booth — flat rate, unlimited volume, same-day gallery. The second is an{' '}
                  <Link href="/on-site-photography" className="text-[var(--color-primary)] hover:underline">on-site team headshot day</Link> at $150 per person with no minimum. Planning a conference? The booth pairs naturally with{' '}
                  <Link href="/conference-photography" className="text-[var(--color-primary)] hover:underline">full conference coverage</Link> and{' '}
                  <Link href="/event-photography" className="text-[var(--color-primary)] hover:underline">event photography</Link> from the same two-photographer team.
                </p>
              </SectionReveal>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Booth Cost — Common Questions" />

          {/* CTA */}
          <section className="py-20 px-8 bg-[var(--color-primary)] text-center">
            <div className="max-w-3xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl text-white mb-6">One Flat Quote. Every Attendee Covered.</h2>
                <p className="text-white/90 text-lg mb-10 leading-relaxed">
                  Tell us your event date, venue, and expected attendance — Alfonso and Niomi will send a clear, flat quote within 24 hours.
                </p>
                <Link
                  href="/contact-quote"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Request a Booth Quote
                </Link>
              </SectionReveal>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

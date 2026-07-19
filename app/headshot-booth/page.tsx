import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How does a headshot booth work at an event?',
    answer:
      'We arrive before your event starts, set up a complete professional studio (lighting, backdrop, cameras), and your attendees flow through one at a time throughout the day. Each person gets a quick coached session — typically 5-10 minutes — and walks away with a professional headshot. All images are edited and delivered the same day via a private online gallery.',
  },
  {
    question: 'How many people can you photograph per hour?',
    answer:
      'Typically 6-10 people per hour depending on the flow of your event and how much coaching each person needs. For large events, we recommend scheduling specific time slots to keep lines moving and avoid bottlenecks.',
  },
  {
    question: 'How is a headshot booth priced?',
    answer:
      'Headshot booths are priced by the hour, making it easy to budget based on your event length and expected attendance. Contact us with your event details for a custom quote — we\'ll give you a clear, flat-rate price with no surprises.',
  },
  {
    question: 'What kinds of events work well with a headshot booth?',
    answer:
      'Corporate all-hands meetings, training days, conferences, expos, trade shows, association events, onboarding days, and any gathering where a large group needs professional headshots. If you have a lot of people in one place, a booth is the most efficient way to get everyone photographed.',
  },
  {
    question: 'What do you bring to the event?',
    answer:
      'Everything. We bring professional lighting rigs, quality backdrops, high-end cameras, and all necessary gear. We set up and break down completely — your venue just needs a reasonably sized space (roughly 10x10 feet) and access to power.',
  },
  {
    question: 'Do attendees get to see and select their photos?',
    answer:
      'For high-volume booth sessions, all images are edited and delivered to a shared gallery the same day, where attendees can download their photos. For smaller groups, on-site selection can be arranged — just let us know your preference when booking.',
  },
];

export const metadata: Metadata = {
  title: 'Headshot Booth Modesto | Corporate Event Headshots | Rojas Photography',
  description:
    'Professional headshot booth for corporate events, expos, and training days in Modesto and Central Valley. We bring the studio to your event and move attendees through efficiently. Priced by the hour.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/headshot-booth',
  },
  openGraph: {
    title: 'Headshot Booth for Corporate Events | Rojas Photography Modesto',
    description:
      'A professional headshot booth for your expo, training day, or corporate event. We set up at your location and photograph attendees efficiently — everyone walks away with a great photo.',
    url: 'https://rojasphotography.net/headshot-booth',
    type: 'website',
    images: [
      {
        url: '/images/Kaiser BTS Headshots.png',
        alt: 'Professional headshot booth setup - Rojas Photography Modesto',
      },
    ],
  },
};

export default function HeadshotBoothPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Headshot Booth for Corporate Events',
        description: 'Professional headshot booth for expos, training days, and corporate events in Modesto and Central Valley. Priced by the hour.',
        url: 'https://rojasphotography.net/headshot-booth',
        image: 'https://rojasphotography.net/images/Kaiser BTS Headshots.png',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Headshot Booth', url: 'https://rojasphotography.net/headshot-booth' },
      ])} />
      <div className="min-h-screen bg-white">

      {/* Hero - SB7: A Character */}
      <HeroSection
        image="/images/Kaiser BTS Headshots.png"
        title="A Headshot Booth That Keeps Your Event Moving."
        tag="Headshot Booth | Modesto & Central Valley"
        objectPosition="center 40%"
        fullHeight
      >
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          We set up a complete professional studio at your expo, training day, or corporate event — and move your attendees through efficiently so everyone walks away with a great photo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
          <Link
            href="/contact-quote"
            className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Request a Quote
          </Link>
          <Link
            href="/discovery-call"
            className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
          >
            Schedule Discovery Call
          </Link>
        </div>
      </HeroSection>

      {/* Problem - SB7: Has a Problem */}
      <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl text-center text-[var(--color-text-dark)] mb-8">
              Event Headshots Are Harder Than They Look
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-[var(--color-text-body)] leading-relaxed">
              <div>
                <p className="mb-4">
                  Long lines. Lighting that shifts from photo to photo. Attendees who skip the station because it looks like a hassle. Without a real plan for flow, the headshot table becomes the bottleneck of an otherwise great event.
                </p>
                <p className="mb-4">
                  You planned this event to add value for your attendees. The headshot booth should be one of the things they thank you for.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Or maybe you&apos;ve skipped headshots altogether, because coordinating studio sessions for everyone felt impossible — and your team left the event without a professional photo to show for it.
                </p>
                <p className="mb-4 font-semibold text-[var(--color-text-dark)]">
                  Run well, a headshot booth is a highlight of the event. That&apos;s the only way we run them.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Guide - SB7: Meets a Guide */}
      <section className="py-16 md:py-20 px-8 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <SectionReveal>
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                We&apos;ve Run Booths at Events Across the Central Valley
              </h2>
              <div className="space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                <p>
                  We know what it takes to keep a headshot booth running smoothly at a busy event — when there&apos;s a line forming, a schedule to keep, and attendees who have three minutes before their next session. We&apos;ve been in that environment enough times to have it dialed in.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  We&apos;re Alfonso and Niomi Rojas. We bring a complete professional studio to your event, coach each person quickly through posing and expression, and keep things moving without sacrificing the quality of the photo. Every attendee gets a real headshot — not a rushed snapshot.
                </p>
                <p>
                  With 15+ years in corporate leadership and 500+ professionals photographed across the Central Valley, we understand how events work and how to operate inside them without creating chaos.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <main id="main-content">

        {/* Plan - SB7: Who Gives Them a Plan */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl text-center text-[var(--color-text-dark)] mb-16">
                How It Works
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">1</div>
                  <h3 className="text-xl text-[var(--color-text-dark)] mb-4">Book the Booth</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    Tell us your event date, location, expected attendance, and how many hours you need coverage. We&apos;ll send you a flat-rate quote and confirm everything well before the event.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">2</div>
                  <h3 className="text-xl text-[var(--color-text-dark)] mb-4">We Set Up, You Focus on Your Event</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    We arrive early, set up the full studio, and are ready before your first attendee walks in. You don&apos;t manage a thing — we handle setup, flow, coaching, and breakdown completely.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--color-primary)] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">3</div>
                  <h3 className="text-xl text-[var(--color-text-dark)] mb-4">Everyone Gets Their Photo</h3>
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    Attendees flow through, get coached quickly, and leave with confidence they got a great shot. Edited photos delivered the same day via a shared online gallery.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Early CTA */}
        <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                Make professional headshots the highlight of your next event.
              </p>
              <Link
                href="/contact-quote"
                className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
              >
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">
                See It in Action
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/Kaiser BTS Headshots.png', alt: 'Behind the scenes at Kaiser on-site headshot booth', objectPosition: 'center 40%' },
                { src: '/images/comcast-livermore-booth-bts.jpg', alt: 'Headshot booth behind the scenes at a Comcast office in Livermore, CA', objectPosition: 'center 30%' },
                { src: '/images/BB Individual Headshot Session.png', alt: 'Individual headshot session at corporate event', objectPosition: 'center 30%' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-80 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" style={{ objectPosition: img.objectPosition }} />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">What&apos;s Included</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Complete Studio Setup at Your Venue', desc: 'We bring professional lighting, backdrops, and cameras. All you need is a 10x10 space and access to power — we handle everything else.' },
                { title: 'Individual Coaching for Every Attendee', desc: 'Every person gets real-time guidance on posing and expression — even in a fast-moving booth format. No one just stands there guessing.' },
                { title: 'Self-Scheduling & Smooth Flow', desc: 'Attendees book their own time through an online calendar we set up and manage — reminders and confirmations included — so the day runs on schedule and no one on your team has to coordinate a thing.' },
                { title: 'Consistent Results Across Your Group', desc: 'Same lighting, same backdrop, same quality from the first person to the last. Your team looks cohesive across every photo.' },
                { title: 'Full Setup & Breakdown', desc: 'We arrive early, set up before your event starts, and break down completely when we\'re done. Zero logistics on your end.' },
                { title: 'Delivered Same Day', desc: 'All edited photos delivered via a shared private gallery the same day — attendees can download their images immediately for LinkedIn, directories, and marketing.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal>
              <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-sm mx-auto text-center shadow-sm">
                <h3 className="text-2xl text-[var(--color-primary)] mb-4">Pricing</h3>
                <p className="text-[var(--color-text-body)] mb-2">Priced by the hour.</p>
                <p className="text-[var(--color-text-muted)] text-sm mb-6">Custom quote based on event length and attendance.</p>
                <Link
                  href="/contact-quote"
                  className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block"
                >
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal>
              <p className="text-center text-[var(--color-text-body)] mt-10 max-w-2xl mx-auto">
                A booth is built for <strong className="text-[var(--color-text-dark)]">speed and volume</strong> — moving a large group through efficiently. If you&rsquo;d rather each person get an unhurried, individually coached session, that&rsquo;s our <Link href="/annual-headshot-programs" className="text-[var(--color-primary)] hover:underline">coached team days &rarr;</Link>
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Stakes - SB7: Helps Avoid Failure */}
        <section className="py-16 px-8 bg-white border-y border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">
                A Poorly Run Booth Reflects on Your Event
              </h2>
              <div className="text-lg text-[var(--color-text-body)] leading-relaxed space-y-4">
                <p>
                  When the headshot station runs slow or the photos aren&apos;t ones people actually use, attendees remember — it becomes the thing they mention when they talk about the event.
                </p>
                <p>
                  And the people who skip it entirely? They leave without a professional headshot they needed, and your event missed an opportunity to deliver real value.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  You put work into this event. The headshot booth should add to it — not take away from it.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA After Stakes */}
        <section className="py-16 px-8 bg-[var(--color-primary-dark)] text-white">
          <div className="max-w-3xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl mb-4">
                Ready to Add a Headshot Booth to Your Event?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Tell us about your event and we&apos;ll send you a flat-rate quote. No surprises, no packages — just a clear price for the coverage you need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact-quote"
                  className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Request a Quote
                </Link>
                <Link
                  href="/discovery-call"
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
                >
                  Schedule Discovery Call
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ */}
        <FAQSection
          faqs={faqs}
          heading="Headshot Booth Questions"
        />

        <CTASection
          heading="Let&apos;s Talk About Your Event"
          subheading="Schedule a free discovery call and we&apos;ll help you figure out exactly what you need for your event size and format."
          primaryHref="/contact-quote"
          primaryLabel="Request a Quote"
        />

      </main>
      </div>
    </>
  );
}

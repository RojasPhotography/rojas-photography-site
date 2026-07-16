import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Clock, Target, Users } from 'lucide-react';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import SchedulerEmbed from '../components/SchedulerEmbed';
import TestimonialCard from '../components/TestimonialCard';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

export const metadata: Metadata = {
  title: 'Schedule Your Free Discovery Call | Rojas Photography Modesto',
  description:
    'Book your free 20-30 minute discovery call to discuss your professional photography needs in Modesto. Phone or video consultation. No obligation. Schedule today.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/discovery-call',
  },
  openGraph: {
    title: 'Schedule Your Free Discovery Call | Rojas Photography',
    description:
      'Free professional photography consultation in Modesto. Discuss your headshots, on-site photography, or commercial needs. Book your 20-30 minute call today.',
    url: 'https://rojasphotography.net/discovery-call',
    type: 'website',
    images: [
      {
        url: '/images/Alfonso+Niomi-0026.jpg',
        alt: 'Alfonso and Niomi Rojas - Professional photographers in Modesto',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Schedule Your Free Discovery Call | Rojas Photography',
    description:
      'Book your free 20-30 minute discovery call to discuss your professional photography needs in Modesto. No obligation.',
    images: ['/images/Alfonso+Niomi-0026.jpg'],
  },
};

export default function DiscoveryCallPage() {
  return (
    <>
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Discovery Call', url: 'https://rojasphotography.net/discovery-call' },
      ])} />
    <div className="min-h-screen bg-white">
      {/* Hero — meet the two people you'll actually talk to */}
      <section
        className="relative w-full pt-20"
        aria-label="Book a free discovery call with Alfonso and Niomi Rojas"
        style={{ background: 'radial-gradient(120% 100% at 15% 0%, rgba(255,255,255,.05), transparent 55%), linear-gradient(160deg, var(--color-primary) 0%, var(--color-primary-dark) 92%)' }}
      >
        <div className="max-w-6xl mx-auto px-8 py-14 md:py-20 grid md:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-14 items-center text-white">
          <div className="order-2 md:order-1 text-center md:text-left">
            <p className="text-[var(--color-primary-light)] font-semibold text-xs md:text-sm tracking-[0.22em] mb-5 uppercase">
              Free · 20–30 Minutes · No Pressure
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.04] tracking-[-0.01em] mb-6 max-w-[16ch] mx-auto md:mx-0">
              Let&rsquo;s talk before you book.
            </h1>
            <p className="text-lg md:text-xl max-w-xl leading-relaxed text-white/90 mb-8 mx-auto md:mx-0">
              A relaxed discovery call with Alfonso and Niomi — the two photographers who&rsquo;ll be
              at your session. We&rsquo;ll learn your goals, answer your questions, and map out the
              right plan. No pressure, no upselling.
            </p>
            <a
              href="#calendar-heading"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Pick a time ↓
            </a>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-white/15 shadow-2xl">
              <Image
                src="/images/Alfonso+Niomi-0026.jpg"
                alt="Alfonso and Niomi Rojas, the two photographers behind Rojas Photography in Modesto"
                fill
                priority
                quality={90}
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: '50% 25%' }}
              />
            </div>
          </div>
        </div>
      </section>

      <main id="main-content">
        {/* What Happens */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-20 text-[var(--color-text-dark)]">
                What Happens on a Discovery Call?
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-16">
              <SectionReveal>
                <div>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    A Discovery Call with Rojas Photography is a free, no-pressure conversation where we learn about your photography needs and you learn about how we can help.
                  </p>
                  <div className="space-y-6">
                    {[
                      { icon: Target, title: 'Understand Your Goals', desc: 'We listen to what you\'re trying to achieve with professional photography.' },
                      { icon: Users, title: 'Explore Your Options', desc: 'We discuss which services make sense for you.' },
                      { icon: CheckCircle2, title: 'Get a Customized Quote', desc: 'A personalized quote with no surprises or hidden fees.' },
                      { icon: Clock, title: 'Next Steps', desc: "If it's a good fit, we'll get you scheduled. If not, we'll stay in touch." },
                    ].map((item) => (
                      <div key={item.title} className="flex gap-4">
                        <item.icon size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                        <div>
                          <h3 className="text-[var(--color-text-dark)] mb-1">{item.title}</h3>
                          <p className="text-[var(--color-text-body)] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] p-10 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl text-[var(--color-text-dark)] mb-8">Discovery Call Details</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-xs font-bold text-[var(--color-text-muted)] tracking-wider mb-1">DURATION</p>
                      <p className="text-[var(--color-text-dark)] font-medium">20-30 minutes</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-text-muted)] tracking-wider mb-1">FORMAT</p>
                      <p className="text-[var(--color-text-dark)] font-medium">Phone or video call (your choice)</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-text-muted)] tracking-wider mb-1">COST</p>
                      <p className="text-[var(--color-primary)] font-bold text-lg">Completely Free</p>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[var(--color-text-muted)] tracking-wider mb-1">WHAT TO EXPECT</p>
                      <p className="text-[var(--color-text-body)] text-sm">A friendly, professional conversation with Alfonso or Niomi. No pressure, no upselling.</p>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Social proof — the work + client voices (esp. for Instagram visitors) */}
        <section className="py-20 px-8 bg-white border-y border-gray-100">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-12">
                <p className="text-[var(--color-primary)] font-semibold text-xs tracking-[0.22em] uppercase mb-4">The Work Speaks for Itself</p>
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">
                  Headshots Professionals Are Proud to Use
                </h2>
                <p className="text-[var(--color-text-muted)] text-lg max-w-2xl mx-auto">
                  A sample of the executives, attorneys, and business leaders we&apos;ve photographed across Modesto and the Central Valley.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-16">
                {[
                  { src: '/images/headshots/headshot-executive-02.jpg', alt: 'Executive headshot in Modesto — Rojas Photography', pos: '55% 25%' },
                  { src: '/images/headshots/headshot-comcast-executive.jpg', alt: 'Comcast executive headshot in Modesto — Rojas Photography', pos: '60% 30%' },
                  { src: '/images/headshots/headshot-attorney-05.jpg', alt: 'Attorney headshot in Modesto — Rojas Photography', pos: '58% 30%' },
                  { src: '/images/headshots/headshot-finance-ceo.jpg', alt: 'Finance CEO headshot in Modesto — Rojas Photography', pos: '50% 25%' },
                ].map((p) => (
                  <div key={p.src} className="relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-black/5 shadow-sm">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(max-width: 768px) 50vw, 25vw"
                      className="object-cover"
                      style={{ objectPosition: p.pos }}
                    />
                  </div>
                ))}
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <SectionReveal>
                <TestimonialCard
                  name="Catherine Luke"
                  role="CEO"
                  quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard
                  name="Joyce Ulrich"
                  role="Entrepreneur, Modesto"
                  quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business."
                />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Calendar Section - 17hats */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="calendar-heading">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 id="calendar-heading" className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">
                Pick Your Time
              </h2>
              <p className="text-center text-[var(--color-text-body)] mb-16 text-lg">
                Select a time that works for you. You can choose a phone or video call during checkout.
              </p>
            </SectionReveal>

            <div className="flex justify-center">
              <SchedulerEmbed />
            </div>

            <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
              We&apos;ll send you a confirmation with call-in details. If you need to reschedule, just let us know!
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
                Questions About Discovery Calls?
              </h2>
            </SectionReveal>

            <div className="space-y-8">
              {[
                { q: 'Is there a cost for the discovery call?', a: 'No, absolutely not. Discovery calls are completely free. No obligation to book anything.' },
                { q: 'Can I do a video call instead of a phone call?', a: 'Yes! You can choose your preferred format when you schedule.' },
                { q: "What if I'm not ready to book yet?", a: "Perfect! Discovery calls are for anyone considering professional photography. It's a great way to get answers." },
                { q: 'How far in advance should we schedule?', a: 'Whenever works for you! We have availability throughout the week. You can also call us directly at 209-380-3727.' },
                { q: 'How do I reschedule if I need to?', a: 'Just let us know! Call 209-380-3727 or email alfonso@rojasphotography.net. No penalties.' },
              ].map((item) => (
                <SectionReveal key={item.q}>
                  <div>
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">{item.q}</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed">{item.a}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="Ready to Talk?"
          subheading="Schedule your free discovery call above, or reach out directly if you'd like to chat right away."
          dark={false}
        />
      </main>
    </div>
    </>
  );
}

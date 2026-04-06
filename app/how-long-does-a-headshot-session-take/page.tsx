import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import CTASection from '../components/CTASection';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Can I get headshots done in 30 minutes?',
    answer: 'Technically possible, but not recommended. A 30-minute session leaves almost no time for expression coaching, wardrobe changes, or reviewing your best frames before you leave. You will likely get one look with limited coaching. For a professional headshot session that produces images you will use confidently for the next year, 60–90 minutes is the appropriate investment.',
  },
  {
    question: 'How many wardrobe changes can I fit in 60 minutes?',
    answer: 'Two comfortable wardrobe changes in a 60-minute session. Three or four wardrobe changes in a 90-minute session. Come with your outfits pre-selected, steamed, and ready to change into quickly. The more time you spend in each look, the more coaching and variety of frames you get from each one.',
  },
  {
    question: 'What should I do before my headshot session?',
    answer: 'Get a full night of sleep — tired eyes show on camera. Get a haircut one week before (not the day before — hair needs to settle). Steam or iron all outfits the night before. Arrive with your skin moisturized and hair styled as you would for an important meeting. If you wear makeup, apply it as you would for a significant professional event. Do not dramatically change your appearance the day of the session.',
  },
  {
    question: 'How early should I arrive for my headshot session?',
    answer: 'Arrive 5–10 minutes early. This gives you time to settle in, hang up your wardrobe, and start the consultation relaxed rather than rushed. Arriving stressed and hurried affects your expression and energy — the session goes better when you have a moment to arrive and decompress before we start.',
  },
  {
    question: 'What happens if I run over my scheduled session time?',
    answer: 'At Rojas Photography, sessions are not rigidly timed. If you need a few extra minutes to get the expression right or to get through an additional wardrobe change, we accommodate that. The goal is images you are proud of — not a photo taken on the clock.',
  },
];

export const metadata: Metadata = {
  title: 'How Long Does a Professional Headshot Session Take? (2026)',
  description: 'How long does a professional headshot session take? What happens during a session, how many wardrobe changes you can fit in, and what to expect.',
  robots: 'index, follow',
  alternates: { canonical: 'https://rojasphotography.net/how-long-does-a-headshot-session-take' },
  openGraph: {
    title: 'How Long Does a Professional Headshot Session Take? (2026)',
    description: 'Session length, what happens during a headshot session, wardrobe changes, and what to expect.',
    url: 'https://rojasphotography.net/how-long-does-a-headshot-session-take',
    type: 'article',
    images: [{ url: '/images/Hero Image1.jpg', alt: 'Professional headshots — Rojas Photography Modesto CA' }],
  },
};

export default function HowLongHeadshotSessionPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'How Long Does a Headshot Session Take', url: 'https://rojasphotography.net/how-long-does-a-headshot-session-take' },
      ])} />
      <div className="min-h-screen bg-white">
        <HeroSection image="/images/Hero Image1.jpg" title="How Long Does a Professional Headshot Session Take?" tag="2026 Guide | Rojas Photography" objectPosition="center 30%" fullHeight={false}>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">What to expect, what happens during a session, and how to make the most of your time.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/premium-headshots#booking-heading" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">Book Your Session</Link>
            <Link href="/how-to-prepare-for-headshots" className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">How to Prepare</Link>
          </div>
        </HeroSection>
        <main id="main-content">
          <section className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">The Direct Answer</h2>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm space-y-4 text-lg text-[var(--color-text-body)] leading-relaxed">
                  <p><strong className="text-[var(--color-text-dark)]">A professional headshot session takes 60–90 minutes for most individuals.</strong> This includes a brief consultation at the start, real-time expression and posing coaching throughout, multiple wardrobe changes, and a review of your best frames before you leave.</p>
                  <p>At Rojas Photography, sessions are never rushed. 60–90 minutes is the standard for individual sessions and unlimited wardrobe changes are included — you are not working against a clock.</p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">What Happens During a Session</h2>
              </SectionReveal>
              <div className="space-y-4">
                {[
                  { step: '1', title: 'Arrival & Consultation (5–10 min)', desc: 'You arrive, hang up your wardrobe, and we have a brief conversation about your profession, how your headshot will be used, and what you want to communicate. This is where session direction is set.' },
                  { step: '2', title: 'Lighting Setup & First Look (5–10 min)', desc: 'Lighting is set up before you arrive — but we make final adjustments based on your first outfit and skin tone. First frames are taken to calibrate and get you warmed up.' },
                  { step: '3', title: 'Coached Shooting (30–50 min)', desc: 'The majority of your session. Expression coaching, posture guidance, and direction throughout. We shoot multiple expressions and angles per look — not just one frame. This is what separates a professional session from a quick photo.' },
                  { step: '4', title: 'Wardrobe Changes (10–20 min total)', desc: 'You change between looks as needed. We accommodate 2–3 wardrobe changes comfortably in a 60–90 minute session. Bring outfits ready to change into quickly.' },
                  { step: '5', title: 'Frame Review (5–10 min)', desc: 'Before you leave, we review your best frames together. You select your favorites for editing — so you leave knowing exactly what you are getting and are not waiting anxiously for the surprise.' },
                ].map(item => (
                  <SectionReveal key={item.step}>
                    <div className="flex gap-5 p-7 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">{item.step}</div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">Team & On-Site Session Timing</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-5">
                {[
                  { label: 'Per person (on-site)', time: '10–20 min', desc: 'Efficient on-site flow with pre-set lighting and backdrop. Each team member is coached and photographed in their dedicated slot.' },
                  { label: 'Team of 20', time: 'Half-day', desc: 'A 20-person team can typically be completed in 4 hours on-site, including setup and individual coaching for each person.' },
                  { label: 'Team of 50+', time: 'Full day', desc: 'Larger teams and multi-department sessions are scheduled as full-day on-site events with multiple photography stations if needed.' },
                ].map(item => (
                  <SectionReveal key={item.label}>
                    <div className="bg-white rounded-xl p-7 border border-gray-100 text-center h-full">
                      <div className="text-3xl font-bold text-[var(--color-primary)] mb-2">{item.time}</div>
                      <div className="font-bold text-[var(--color-text-dark)] mb-3">{item.label}</div>
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
              <SectionReveal>
                <div className="mt-8 bg-white rounded-xl p-7 border border-gray-100 text-center">
                  <p className="text-[var(--color-text-body)] leading-relaxed">
                    <strong className="text-[var(--color-text-dark)]">On-site team delivery:</strong> Edited images from on-site team sessions are delivered within 24 hours — faster than individual studio sessions — because team sessions are optimized for volume.{' '}
                    <Link href="/on-site-photography" className="text-[var(--color-primary)] underline">Learn more about on-site team photography.</Link>
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-2xl font-bold text-center text-[var(--color-text-dark)] mb-8">Tips to Make the Most of Your Session Time</h2>
              </SectionReveal>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Come with outfits pre-selected, steamed, and ready to change into',
                  'Arrive 5–10 minutes early to decompress before we start',
                  'Get a full night of sleep — tired eyes show in headshots',
                  'Style your hair as you would for an important meeting',
                  'Bring 2–3 outfit options and we will help you choose the best order',
                  'Do not try a dramatic new hairstyle or appearance change the day of',
                ].map(tip => (
                  <SectionReveal key={tip}>
                    <div className="flex gap-3 p-5 bg-[var(--color-bg-warm)] rounded-xl border border-gray-100">
                      <CheckCircle2 size={16} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{tip}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection faqs={faqs} heading="Headshot Session Length — Frequently Asked Questions" />
          <CTASection heading="Ready to Book Your Session?" subheading="60–90 minutes. $150 session. $150 per image. 48-hour delivery. Modesto, CA." primaryLabel="Book Your Session" primaryHref="/premium-headshots#booking-heading" showContactInfo={false} />
        </main>
      </div>
    </>
  );
}

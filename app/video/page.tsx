import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import ParallaxBand from '../components/ParallaxBand';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { serviceDefinitions } from '../lib/definitions';

const faqs = [
  {
    question: 'How much does a corporate videographer cost in Modesto?',
    answer:
      'Corporate video pricing is custom to scope, length and editing. A simple 30-second promotional video typically runs $1,500-$2,500. A 2-3 minute corporate video with motion graphics typically runs $3,500-$7,500. Aerial drone videography adds $500-$1,500 depending on scope. We send a personalized quote within 24 hours.',
  },
  {
    question: 'Are you FAA-licensed drone pilots?',
    answer:
      'Yes. We are FAA Part 107 certified commercial drone pilots and carry the required insurance documentation. That certification is what allows us to legally fly for commercial properties, corporate events and business aerials.',
  },
  {
    question: 'How long does video production take?',
    answer:
      'A simple 30-second promotional video takes 1-2 weeks from planning to delivery. A 2-3 minute corporate video with color grading and motion graphics takes 3-4 weeks. Drone footage can add 1-2 weeks depending on weather and location. We confirm the timeline during planning and update you weekly.',
  },
  {
    question: 'What types of corporate videos do you create?',
    answer:
      'Company overview and brand videos, client testimonials and case studies, product demonstrations, training and educational videos, social media content, event highlight videos and aerial drone footage. Projects range from a 15-second social clip to a 10-minute production, with concept development, filming and editing handled in-house.',
  },
  {
    question: 'Do you work outside Modesto?',
    answer:
      'Yes. We film across the Central Valley, including Stockton, Turlock, Merced, Fresno and Sacramento, and travel for larger projects. Tell us the location when you request a quote.',
  },
  {
    question: 'Can you deliver videos for social media?',
    answer:
      'Yes. Every project can include full-resolution files for your website and YouTube, vertical cuts for Instagram Stories and TikTok, square cuts for LinkedIn and Facebook feeds, and broadcast-quality files.',
  },
];

export const metadata: Metadata = {
  title: 'Videographer in Modesto, CA | Corporate Video Production',
  description:
    'Corporate videographers in Modesto and the Central Valley. Brand videos, client testimonials, event video and FAA Part 107 drone aerials from Alfonso and Niomi Rojas.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/video',
  },
  openGraph: {
    title: 'Videographer in Modesto, CA | Rojas Photography',
    description:
      'Brand videos, client testimonials, event video and FAA-certified drone aerials across Modesto and the Central Valley.',
    url: 'https://rojasphotography.net/video',
    type: 'website',
    images: [
      {
        url: '/images/BBSI-Corp-Video.jpg',
        alt: 'Corporate videographer filming a client testimonial in Modesto',
      },
    ],
  },
};

const quickFacts = [
  { label: 'Pricing', value: 'From $1,500 for a 30-second video; $3,500-$7,500 for a 2-3 minute production' },
  { label: 'Turnaround', value: '1-2 weeks for short videos, 3-4 weeks for full productions' },
  { label: 'Coverage', value: 'Modesto, Stockton, Turlock, Merced, Fresno, Sacramento and the Central Valley' },
  { label: 'Credentials', value: 'FAA Part 107 certified drone pilots, insured' },
];

const services = [
  { title: 'Corporate and brand videos', desc: 'Company overview, product and training videos for your website, campaigns and internal communications.' },
  { title: 'Client testimonial videos', desc: 'We guide a relaxed, conversational interview on location or in studio, then edit it into a finished testimonial.' },
  { title: 'Aerial drone videography', desc: 'Part 107 certified aerials for commercial properties, construction progress, facilities and events.' },
  { title: 'Event video coverage', desc: 'Highlight reels, full-session recordings or recap videos for corporate events and conferences.' },
  { title: 'Editing and motion graphics', desc: 'Color grading, sound design, licensed music, titles and motion graphics.' },
  { title: 'Social and multi-format delivery', desc: 'Horizontal, vertical and square cuts delivered ready to publish.' },
];

export default function VideoServicesPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Corporate Video Production',
        description: 'Corporate videographers in Modesto and the Central Valley: brand videos, client testimonials, event video and FAA Part 107 drone videography.',
        url: 'https://rojasphotography.net/video',
        image: 'https://rojasphotography.net/images/BBSI-Corp-Video.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Video Production', url: 'https://rojasphotography.net/video' },
      ])} />
      <div className="min-h-screen bg-white">
      <HeroSection
        title="Corporate Videographers in Modesto & the Central Valley"
        subtitle="Brand videos, client testimonials, event coverage and drone aerials, planned, filmed and edited by Alfonso and Niomi Rojas."
        tag="Corporate Video Production & Drone Videography"
        gradient
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Request a Video Quote
          </Link>
          <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Schedule a Discovery Call
          </Link>
        </div>
      </HeroSection>

      <main id="main-content">
        {/* Direct answers first: what, how much, how long, where */}
        <section className="py-12 px-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl text-[var(--color-text-dark)] mb-6">Video Production at a Glance</h2>
              <dl className="grid md:grid-cols-2 gap-x-10 gap-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">{fact.label}</dt>
                    <dd className="text-[var(--color-text-body)] mt-1">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>
        </section>

        <DefinitionBox
          term={serviceDefinitions.videoProduction.term}
          definition={serviceDefinitions.videoProduction.definition}
        />

        {/* Guide */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Video That Sounds Like Your Team</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  We&apos;re Alfonso and Niomi Rojas, a Modesto team with 15+ years of storytelling experience and a background in corporate environments. Most people tense up when a camera points at them, so we build each shoot around conversation instead of a script.
                </p>
                <p>
                  The result sits between a $15,000 agency production and a template: polished, professional video that still sounds like the people in it. Our video clients include BBSI.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">How We Produce Your Video</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { n: '01', t: 'Story Development', d: 'We learn your goals, audience and key messages, then build the narrative structure and shot list together.' },
                { n: '02', t: 'Production', d: 'We bring cameras, audio, lighting and drones when needed, and guide your team through conversational interviews at your location or in studio.' },
                { n: '03', t: 'Editing', d: 'Color grading, sound design, motion graphics and licensed music, edited to keep your team natural on screen.' },
                { n: '04', t: 'Multi-Format Delivery', d: 'Full resolution for your website, vertical for Stories and Reels, square for social feeds, all ready to publish.' },
              ].map((step) => (
                <SectionReveal key={step.n}>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">{step.n}</span>
                    <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">{step.t}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{step.d}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <ParallaxBand image="/images/BBSI-Corp-Video.jpg" overlayOpacity={72}>
          <SectionReveal>
            <p className="text-white text-2xl md:text-3xl mb-6 leading-relaxed font-[family-name:var(--font-heading)]">
              Conversations, not scripts. That&apos;s how we film.
            </p>
            <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
              Request a Video Quote
            </Link>
          </SectionReveal>
        </ParallaxBand>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">Professional Video Production in Modesto & Central Valley</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production in Modesto' },
                { src: '/images/ALCC Drone 03.jpg', alt: 'Aerial drone videography - Central Valley' },
                { src: '/images/BBSI-Video-Freeze.jpg', alt: 'Professional client testimonial videos' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-96 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">Video Services We Offer</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10">
              {services.map((item) => (
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
          </div>
        </section>

        {/* Pricing */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">What Corporate Video Costs</h2>
              <p className="text-center text-[var(--color-text-body)] mb-10">Every project is quoted to its scope. These are typical ranges.</p>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { name: 'Short promo', range: '$1,500-$2,500', note: '30-second video' },
                  { name: 'Corporate video', range: '$3,500-$7,500', note: '2-3 minutes with motion graphics' },
                  { name: 'Drone aerials', range: '+$500-$1,500', note: 'Added to any project' },
                ].map((tier) => (
                  <div key={tier.name} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm text-center">
                    <h3 className="text-lg text-[var(--color-text-dark)] mb-2">{tier.name}</h3>
                    <p className="text-2xl text-[var(--color-primary)] mb-2">{tier.range}</p>
                    <p className="text-sm text-[var(--color-text-body)]">{tier.note}</p>
                  </div>
                ))}
              </div>
              <div className="text-center mt-10">
                <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block">
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">What Video Clients Say</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Relaxed on camera, professional on delivery.
                </p>
              </div>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Francisco Chamorro" role="BBSI - Business Management Solutions" quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. Our firm contracted them for a client testimonial both on site and for b-roll and the results were just what we expected. I would recommend." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Teresa Tolentino" role="Save Mart Companies" quote="I work with Rojas Photography on several projects and I couldn't be more impressed with their service. Alfonso and Niomi are incredibly professional, making everyone involved in the project feel relaxed. Even with a same-day turnaround, they deliver every time. I highly recommend Rojas Photography and will definitely continue to partner with them on future projects." />
              </SectionReveal>
            </div>
          </div>
        </section>

        <FAQSection
          faqs={faqs}
          heading="Video Production Questions"
        />

        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Plan Your Video With Alfonso and Niomi</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Tell us what you need and where. We reply with a custom quote within 24 hours. Looking for photography instead? See our <Link href="/commercial" className="underline">commercial photography</Link> and <Link href="/event-photography" className="underline">event photography</Link>.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Request a Video Quote
                </Link>
                <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Schedule a Discovery Call
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

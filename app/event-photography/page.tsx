import type { Metadata } from 'next';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';

const faqs = [
  {
    question: 'How much does event photography cost in Modesto?',
    answer:
      'Event photography pricing is custom based on your event size, duration, and coverage needs. Whether you need a few hours of coverage or full-day documentation, we provide personalized quotes. Contact us with your event details for an accurate estimate of our services.',
  },
  {
    question: 'Do you provide photos during the event?',
    answer:
      'Yes! We photograph throughout your entire event and deliver professionally edited photos within 24-48 hours via our secure SpotMyPhotos gallery. Attendees can view and download photos immediately, making it perfect for real-time social media updates and event follow-up.',
  },
  {
    question: 'How many photos do we receive from our event?',
    answer:
      'The number of photos depends on event length and coverage. A 4-hour event typically produces 300-500 professionally edited photos. A full-day event can produce 600-800+ photos. We curate and deliver only the best shots—no filler photos—so you get quality over quantity.',
  },
  {
    question: 'Can you handle large corporate events?',
    answer:
      'Absolutely! For larger events (200+ guests), we deploy multiple photographers to ensure complete coverage across all areas. We coordinate team photographers and deliver all images from the same professional vision. We\'ve successfully covered major events for Comcast, Save Mart, and California Lawyers Association.',
  },
  {
    question: 'Do you do step and repeat photography at events?',
    answer:
      'Yes! We provide professional step and repeat backdrop photography perfect for sponsor recognition, brand activation, and creating shareable moments. This is ideal for galas, award ceremonies, and fundraising events. Photos are perfect for social media and event promotion.',
  },
];

export const metadata: Metadata = {
  title: 'Corporate Event Photography Modesto | Conference & Gala Photography',
  description:
    'Professional event photography in Modesto and Central Valley. Conference photography, gala coverage, product launches, and corporate event documentation. 24-hour delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/event-photography',
  },
  openGraph: {
    title: 'Corporate Event Photography in Modesto | Rojas Photography',
    description:
      'Professional event coverage for conferences, galas, fundraisers, product launches, and corporate gatherings. Fast delivery with expert photography.',
    url: 'https://rojasphotography.net/event-photography',
    type: 'website',
    images: [
      {
        url: '/images/CLA AM 25 201.jpg',
        alt: 'Corporate event photography - Modesto photographer',
      },
    ],
  },
};

export default function EventPhotographyPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Corporate Event Photography',
        description: 'Professional event photography for conferences, galas, fundraisers, and corporate gatherings in Modesto and Central Valley. 24-hour delivery.',
        url: 'https://rojasphotography.net/event-photography',
        image: '/images/CLA AM 25 201.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
      <HeroSection
        title="Professional Event Photography for Your Business"
        subtitle="Comprehensive event coverage for conferences, galas, fundraisers, product launches, and corporate gatherings."
        tag="Professional Event Coverage & Documentation"
        gradient
      />

      <main id="main-content">
        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Professional Event Photography in Modesto & Central Valley</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/CLA AM 25 201.jpg', alt: 'Corporate event photography in Modesto', extra: 'scale-125' },
                { src: '/images/DSC_1638.jpg', alt: 'Professional gala and formal event photography', extra: 'object-[center_40%]' },
                { src: '/images/CLA AM 25 335.jpg', alt: 'Conference and networking event coverage - Central Valley', extra: 'object-left' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden">
                  <img src={img.src} alt={img.alt} className={`w-full h-96 object-cover ${img.extra}`} />
                </SectionReveal>
              ))}
            </div>
            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <a href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">Request a Quote</a>
              <a href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">Schedule a Discovery Call</a>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">What We Offer</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Full Event Coverage', desc: 'Comprehensive photography from start to finish. Every important moment documented professionally.' },
                { title: 'Multiple Photographers', desc: 'For larger events, we deploy multiple photographers to ensure complete coverage across all areas.' },
                { title: 'Candid & Posed Photography', desc: 'Authentic moments and genuine interactions, plus professionally posed group photos and speaker shots.' },
                { title: 'Step & Repeat Photography', desc: 'Professional step and repeat backdrop photography. Perfect for sponsor recognition and brand activation.' },
                { title: 'Rapid Photo Delivery', desc: 'Event photos available within 24-48 hours. Perfect for social media during and after your event.' },
                { title: 'Professional Editing & Curation', desc: 'All photos professionally edited and color-corrected. We deliver only the best shots—curated for quality.' },
                { title: 'Online Gallery & Download', desc: 'Photos delivered via secure online gallery (SpotMyPhotos). Attendees can view, download, and share.' },
                { title: 'Flexible Event Types', desc: 'We cover all event types: conferences, galas, fundraisers, product launches, award ceremonies, and more.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <div className="bg-white p-8 rounded-xl border border-gray-100 max-w-sm mx-auto text-center shadow-sm">
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-4">Pricing</h3>
                <p className="text-[var(--color-text-body)] mb-4">Custom pricing based on event size, duration, and coverage needs.</p>
                <p className="text-[var(--color-text-muted)] text-sm">Contact us for a personalized quote.</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Event Photography Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Event Planning', desc: 'We discuss your event schedule, key moments, important people, and photography goals.' },
                { step: '02', title: 'Professional Coverage', desc: 'Our photographers arrive early and stay throughout. Professional, unobtrusive coverage.' },
                { step: '03', title: 'Rapid Delivery', desc: 'Photos professionally edited and delivered within 24-48 hours via secure online gallery.' },
              ].map((item) => (
                <SectionReveal key={item.step}>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">{item.step}</span>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-8">Events We Cover</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Corporate Events</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Company conferences and conventions</li>
                    <li>&#10003; Annual meetings and celebrations</li>
                    <li>&#10003; Product launches and reveals</li>
                    <li>&#10003; Corporate retreats and team building</li>
                    <li>&#10003; Award ceremonies and recognition events</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Professional & Social Events</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Galas and formal dinners</li>
                    <li>&#10003; Fundraisers and charity events</li>
                    <li>&#10003; Networking events and mixers</li>
                    <li>&#10003; Trade shows and exhibitions</li>
                    <li>&#10003; Grand openings and celebrations</li>
                  </ul>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Why Choose Rojas */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Why Choose Rojas Photography for Your Event</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Corporate Event Experience', desc: "We've covered events for Comcast, Save Mart, California Lawyers Association, and dozens of Central Valley businesses." },
                { title: 'Professional & Unobtrusive', desc: 'We blend into your event while capturing everything. Professional photographers who understand not to interrupt the experience.' },
                { title: 'Fast Turnaround', desc: 'Event photos delivered within 24-48 hours. Perfect for real-time social media updates and event follow-up.' },
                { title: 'Local Central Valley Service', desc: 'Based in Modesto, serving Stockton, Fresno, Turlock, and beyond.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Event Organizers Say</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Courtnay Lynch" role="VP of People & Culture, Valley First Credit Union" quote="Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Event Organizer" role="Corporate Client" quote="From planning to delivery, Rojas Photography was excellent. They understood our event goals, captured everything we needed, and delivered photos quickly." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={[
            {
              question: 'How much does event photography cost in Modesto?',
              answer:
                'Event photography pricing is custom based on your event size, duration, and coverage needs. Whether you need a few hours of coverage or full-day documentation, we provide personalized quotes. Contact us with your event details for an accurate estimate of our services.',
            },
            {
              question: 'Do you provide photos during the event?',
              answer:
                'Yes! We photograph throughout your entire event and deliver professionally edited photos within 24-48 hours via our secure SpotMyPhotos gallery. Attendees can view and download photos immediately, making it perfect for real-time social media updates and event follow-up.',
            },
            {
              question: 'How many photos do we receive from our event?',
              answer:
                'The number of photos depends on event length and coverage. A 4-hour event typically produces 300-500 professionally edited photos. A full-day event can produce 600-800+ photos. We curate and deliver only the best shots—no filler photos—so you get quality over quantity.',
            },
            {
              question: 'Can you handle large corporate events?',
              answer:
                'Absolutely! For larger events (200+ guests), we deploy multiple photographers to ensure complete coverage across all areas. We coordinate team photographers and deliver all images from the same professional vision. We\'ve successfully covered major events for Comcast, Save Mart, and California Lawyers Association.',
            },
            {
              question: 'Do you do step and repeat photography at events?',
              answer:
                'Yes! We provide professional step and repeat backdrop photography perfect for sponsor recognition, brand activation, and creating shareable moments. This is ideal for galas, award ceremonies, and fundraising events. Photos are perfect for social media and event promotion.',
            },
          ]}
          heading="Event Photography Questions"
        />

        <CTASection
          heading="Ready to Capture Your Next Event?"
          subheading="Let us document your event with professional photography. From planning to delivery, we handle everything."
        />
      </main>
      </div>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

const faqs = [
  {
    question: 'What is commercial photography used for?',
    answer:
      'Commercial photography is professional imagery created specifically for business marketing, branding, and sales purposes. This includes product photography for e-commerce websites and catalogs, architectural and interior photography for real estate and office spaces, brand and lifestyle imagery for websites and social media, and website imagery for marketing campaigns and advertisements. Professional commercial photos increase customer engagement by 80% and can boost conversion rates by 35%.',
  },
  {
    question: 'How much does commercial photography cost in Modesto?',
    answer:
      'Commercial photography pricing is custom based on your project scope, the number of images needed, and the extent of editing required. A simple product photography session (5-10 products) typically ranges $500-$1,500. A comprehensive brand photography session (full day) typically ranges $2,000-$5,000. Contact us with specific details about your project—product type, location, quantity, timeline—for a personalized quote within 24 hours.',
  },
  {
    question: 'What\'s included in a commercial photography package?',
    answer:
      'Our commercial photography packages include initial consultation and project planning, professional-grade photography with appropriate lighting and equipment, full editing and color correction for consistency, and fast delivery (48-72 hours). Specific deliverables are customized to your project needs—whether you need product shots, architectural photography, lifestyle imagery, or a combination. All delivered images are fully edited and ready for immediate use on websites, social media, and marketing materials.',
  },
  {
    question: 'How long does commercial photography take?',
    answer:
      'Project timelines vary based on scope. A simple product photography session (5-10 items) takes 2-3 hours. A comprehensive commercial shoot (full-day location coverage) takes 6-8 hours. After shooting, we professionally edit, color correct, and deliver all images within 48-72 hours. Rush delivery available (additional fee) with 24-hour turnaround.',
  },
  {
    question: 'Can you do photography for real estate marketing?',
    answer:
      'Yes! We provide professional architectural and interior photography perfect for real estate marketing. Services include property exterior shots, interior room photography, detailed fixture photography, and aerial drone videography captured by FAA Part 107 certified pilots. Real estate professionals in Modesto and Central Valley trust us for high-quality marketing imagery that increases showings and accelerates sales.',
  },
  {
    question: 'How do you determine pricing for my commercial project?',
    answer:
      'We base pricing on several factors: project scope (complexity and size), shooting duration (how many hours needed), location (on-site or studio), number of deliverable images, and editing requirements. During your consultation, we discuss your goals, timeline, and budget to create a custom proposal. We provide transparent quotes with no hidden fees. This approach ensures you pay fairly for the specific work needed rather than paying for unnecessary services.',
  },
  {
    question: 'Can you work with our company\'s style guide and brand guidelines?',
    answer:
      'Absolutely! We\'re experienced working with established brand guidelines and style requirements. During our consultation, please share your brand guide, color palettes, photography style preferences, and any specific requirements. We ensure all images align with your brand identity and marketing standards. This consistency across your commercial imagery strengthens brand recognition and professionalism.',
  },
  {
    question: 'Do you offer revisions or retouching for commercial photos?',
    answer:
      'Yes! All commercial photography packages include professional color correction and basic retouching. If you need additional revisions—such as background changes, object removal, or extensive retouching—we offer revision packages. We discuss these options during initial scoping so there are no surprises. Most clients are satisfied with our standard editing, but we\'re flexible if additional work is needed.',
  },
  {
    question: 'What about usage rights for the commercial photos?',
    answer:
      'You own the usage rights to all photos we deliver. You can use them on your website, social media, print materials, advertising, and any other business purpose without restrictions or additional licensing fees. We retain the right to display them in our portfolio with your permission. If you need exclusive rights or special licensing arrangements, we can discuss custom terms.',
  },
];


export const metadata: Metadata = {
  title: 'Commercial Photography Modesto | Business & Product Photography',
  description:
    'Professional commercial photography in Modesto and Central Valley. Brand imagery, product photography, architectural shots, and marketing visuals for your business.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/commercial',
  },
  openGraph: {
    title: 'Commercial Photography in Modesto | Rojas Photography',
    description:
      'High-impact commercial and brand photography that showcases your products, spaces, and business story for marketing and websites.',
    url: 'https://rojasphotography.net/commercial',
    type: 'website',
    images: [
      {
        url: '/images/MOVE Stanislaus-(3 of 28).jpg',
        alt: 'Commercial photography - Modesto photographer',
      },
    ],
  },
};

export default function CommercialPhotographyPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Commercial Photography',
        description: 'Professional commercial photography including product photography, architectural shots, and brand imagery for your business in Modesto and Central Valley.',
        url: 'https://rojasphotography.net/commercial',
        image: '/images/MOVE Stanislaus-(3 of 28).jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <div className="min-h-screen bg-white">
      <HeroSection
        title="Professional Commercial Photography for Your Business"
        subtitle="High-impact brand imagery and commercial photography that showcases your products, spaces, and business story."
        tag="Brand Imagery & Commercial Photography"
        gradient
      />

      {/* Definition Box */}
      <DefinitionBox
        term={serviceDefinitions.commercialPhotography.term}
        definition={serviceDefinitions.commercialPhotography.definition}
      >
        <p className="text-[var(--color-text-body)] mt-4">
          {serviceDefinitions.commercialPhotography.context}
        </p>
      </DefinitionBox>

      <main id="main-content">
        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Commercial Photography in Modesto & Central Valley</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/MOVE Stanislaus-(3 of 28).jpg', alt: 'Commercial product photography - Modesto photographer' },
                { src: '/images/DoctorOffice 4.jpg', alt: 'Commercial interior photography in Central Valley' },
                { src: '/images/MOVE Stanislaus-(17 of 28).jpg', alt: 'Business brand photography services' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-96 relative">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
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
                { title: 'Product Photography', desc: 'Professional product shots for e-commerce, catalogs, and marketing materials. We showcase your products in the best light to drive sales.' },
                { title: 'Architectural & Interior Photography', desc: 'Professional building, office, and interior space photography. Perfect for real estate marketing, business websites, and commercial listings.' },
                { title: 'Brand & Lifestyle Photography', desc: 'Authentic brand storytelling through lifestyle imagery. Capture your business culture, team in action, and brand values.' },
                { title: 'Website & Marketing Imagery', desc: 'Custom photography for your website, social media, and marketing campaigns. Professional visuals that engage your audience.' },
                { title: 'Professional Editing & Retouching', desc: 'All images professionally edited and color-corrected for consistency across your marketing materials.' },
                { title: 'Fast Turnaround & Delivery', desc: 'Professional images delivered within 48-72 hours. Ready to use immediately on your website, social media, and marketing platforms.' },
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
                <p className="text-[var(--color-text-body)] mb-4">Custom pricing based on project scope and requirements.</p>
                <p className="text-[var(--color-text-muted)] text-sm">Contact us for a personalized quote.</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Project Discovery', desc: 'We start with a detailed conversation about your vision, goals, and the message you want to communicate.' },
                { step: '02', title: 'Professional Execution', desc: 'We bring professional equipment, lighting, and expertise to capture compelling commercial imagery.' },
                { step: '03', title: 'Editing & Delivery', desc: 'Your images are professionally edited, color-corrected, and delivered within 48-72 hours.' },
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

        {/* Who This Is For */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-6">Who This Service Is For</h2>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                Commercial Photography is perfect for any business that needs professional visual content. Whether you&apos;re a retail business, real estate company, restaurant, healthcare provider, or service-based company, professional imagery elevates your brand.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                If you need compelling photos for your website, social media, marketing campaigns, or commercial listings, we have the expertise and equipment to deliver exactly what you need.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Why Choose Rojas */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Why Choose Rojas Photography</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Corporate Experience', desc: 'We understand business. 15+ years in corporate environments means we know what works.' },
                { title: 'Professional Equipment & Expertise', desc: 'Cutting-edge cameras, professional lighting, and expert direction ensure standout commercial images.' },
                { title: 'Fast Turnaround', desc: 'Professional images delivered within 48-72 hours without compromising quality.' },
                { title: 'Local Central Valley Team', desc: 'Based in Modesto, serving Stockton, Fresno, Turlock, and beyond.' },
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Clients Say</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Business Owner" role="Commercial Client" quote="Rojas Photography delivered exactly what we needed for our website and marketing materials. Professional quality, fast turnaround, and great to work with." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Marketing Manager" role="Central Valley Company" quote="They understood our brand vision immediately and delivered commercial photography that exceeded our expectations. Easy to work with and professional throughout." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={[
            {
              question: 'What is commercial photography used for?',
              answer:
                'Commercial photography is used for marketing, branding, and business purposes. This includes product photography for e-commerce and catalogs, architectural and interior photography for real estate and office spaces, brand and lifestyle photography for websites and social media, and website imagery for marketing campaigns. Professional commercial photos elevate your brand and increase customer engagement.',
            },
            {
              question: 'How much does commercial photography cost in Modesto?',
              answer:
                'Commercial photography pricing is custom based on your project scope, the number of images needed, and the extent of editing required. Whether you need a simple product shoot or a comprehensive brand photography session, we create personalized quotes. Contact us with details about your project for an accurate estimate.',
            },
            {
              question: 'What\'s included in a commercial photography package?',
              answer:
                'Our commercial photography packages include professional planning and consultation, professional-grade photography with appropriate lighting and equipment, full editing and color correction, and fast delivery (48-72 hours). Specific deliverables are customized to your project needs—whether you need product shots, architectural photography, or lifestyle imagery.',
            },
            {
              question: 'How long does commercial photography take?',
              answer:
                'Project timelines vary. A simple product photography session might take a few hours, while a comprehensive commercial shoot could be a full day. We schedule based on your needs. After shooting, we professionally edit and color correct all images within 48-72 hours for delivery.',
            },
            {
              question: 'Can you do photography for real estate marketing?',
              answer:
                'Yes! We provide professional architectural and interior photography perfect for real estate marketing. This includes property exterior shots, interior room photography, and aerial drone photography if needed. Real estate professionals in Modesto and Central Valley trust us for high-quality marketing imagery that sells properties faster.',
            },
          ]}
          heading="Commercial Photography Questions"
        />

        <CTASection
          heading="Ready for Professional Commercial Photography?"
          subheading="Let's discuss your project and create compelling imagery that strengthens your brand."
        />
      </main>
      </div>
    </>
  );
}

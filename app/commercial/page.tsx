import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import ParallaxBand from '../components/ParallaxBand';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
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
];


export const metadata: Metadata = {
  title: 'Commercial Photography Modesto | Business & Product Photography',
  description:
    'Products, storefronts, teams, and brand content — commercial photography for Central Valley businesses that want to stop looking like everyone else. 48-hour delivery.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/commercial',
  },
  openGraph: {
    title: 'Commercial Photography in Modesto | Rojas Photography',
    description:
      'Products, storefronts, brand content, and business portraits for Central Valley companies. Photography that converts — delivered in 48 hours.',
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
        image: 'https://rojasphotography.net/images/MOVE Stanislaus-(3 of 28).jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Commercial Photography', url: 'https://rojasphotography.net/commercial' },
      ])} />
      <div className="min-h-screen bg-white">
      {/* SB7: A Character - Business Owner/Marketing Manager */}
      <HeroSection
        title="Your Brand Deserves Better Than Generic Stock Photos."
        subtitle="Custom commercial photography that tells your unique brand story—not the same images your competitors use. Authentic, professional imagery for businesses in Modesto and Central Valley."
        tag="Brand Imagery & Commercial Photography"
        gradient
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Request a Quote
          </Link>
          <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Schedule Discovery Call
          </Link>
        </div>
      </HeroSection>

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
        {/* SB7: Has a Problem */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Generic Stock Photos Don&apos;t Tell Your Brand Story</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You search stock photo sites and everything looks the same. Sterile office shots. Forced smiles. Posed handshakes that scream "fake business photo."
                </p>
                <p>
                  Your competitors use the same generic imagery. Your potential clients see stock photos and immediately know it&apos;s not authentic—they can&apos;t connect with your brand because there&apos;s no real story being told.
                </p>
                <p>
                  You need product photography that actually shows <em>your</em> products. Architectural shots of <em>your</em> real spaces. Team photos of <em>your</em> actual people. Brand imagery that reflects <em>your</em> authentic culture and values.
                </p>
                <p>
                  But finding a photographer who understands your brand vision—not just technical execution—feels impossible. And you don&apos;t have the budget for the high-end commercial studios in San Francisco.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Meets a Guide (Empathy + Authority) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">We Know How Frustrating Generic Imagery Can Be</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You&apos;ve built something real — a product, a space, a brand with its own personality — and stock photos don&apos;t come close to showing it. I&apos;ve heard this from nearly every commercial client we work with. The imagery they have doesn&apos;t match the quality of what they actually do.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  We&apos;re Alfonso and Niomi Rojas. With 15+ years in corporate environments, we understand business context and brand positioning — not just how to operate a camera. We&apos;ve photographed businesses across the Central Valley, from healthcare organizations and law firms to manufacturing companies and retailers, and we bring that business understanding to every shoot.
                </p>
                <p>
                  We don&apos;t just shoot photos. We work with you to understand what your brand needs to communicate — and then I build imagery around that, whether it&apos;s product photography, architectural shots, lifestyle imagery, or a complete brand library.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Who Gives Them a Plan */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">How we Work With You</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Project Discovery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We start with a detailed conversation about your brand vision, target audience, and what you need the imagery to communicate. We review your brand guidelines, visual preferences, and deliverable needs before we ever pick up a camera.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Professional Execution</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We bring professional equipment and lighting to your location. We direct every shot with intention — your products look compelling, your spaces feel inviting, and your brand story comes through authentically, not like a generic template.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Editing & Delivery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    Your images are professionally edited, color-corrected for brand consistency, and delivered within 48-72 hours — ready for immediate use on your website, social media, and marketing materials. Authentic imagery that differentiates you, not stock photo mediocrity.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Urgent CTA After Plan - Early Conversion Opportunity */}
        <ParallaxBand image="/images/DoctorOffice 4.jpg" overlayOpacity={72}>
          <SectionReveal>
            <p className="text-white text-2xl md:text-3xl mb-6 leading-relaxed font-[family-name:var(--font-heading)]">
              Stop settling for stock photos your competitors use. Get custom brand photography.
            </p>
            <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                Request a Quote
              </Link>
          </SectionReveal>
        </ParallaxBand>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">Commercial Photography in Modesto & Central Valley</h2>
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
          </div>
        </section>

        {/* SB7: Helps Avoid Failure (Stakes) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Generic Imagery Makes Your Brand Invisible</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  When your website, social media, and marketing materials use the same stock photos as everyone else, your brand becomes invisible. You look exactly like your competitors—potential clients can&apos;t differentiate you, so they default to choosing based on price alone.
                </p>
                <p>
                  Worse, generic stock photos communicate <em>inauthenticity</em>. Your audience knows those aren&apos;t your real people, products, or spaces. That disconnect erodes trust before the relationship even begins.
                </p>
                <p>
                  Professional commercial photography isn&apos;t just about "nice photos"—it&apos;s about brand differentiation, customer trust, and marketing effectiveness. Businesses with authentic, professional imagery see 80% higher customer engagement and 35% better conversion rates than those using generic stock photos.
                </p>
                <p>
                  Every day you use stock photos, you&apos;re leaving money on the table and surrendering brand equity to competitors who invest in authentic visual storytelling.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA After Stakes */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready for Authentic Brand Photography?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Get a custom quote for your commercial photography project. We&apos;ll create professional imagery that tells your unique story and differentiates your brand.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Request a Quote
                </Link>
                <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Schedule Discovery Call
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* What we Offer */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-16 text-center">What I Offer</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Product Photography', desc: 'Professional product shots for e-commerce, catalogs, and marketing materials. We showcase your products in the best light to drive sales.' },
                { title: 'Architectural & Interior Photography', desc: 'Professional building, office, and interior space photography. Perfect for business websites, marketing materials, and showcasing your commercial spaces.' },
                { title: 'Brand & Lifestyle Photography', desc: 'Authentic brand storytelling through lifestyle imagery. Capture your business culture, team in action, and brand values.' },
                { title: 'Website & Marketing Imagery', desc: 'Custom photography for your website, social media, and marketing campaigns. Professional visuals that engage your audience.' },
                { title: 'Professional Editing & Retouching', desc: 'All images professionally edited and color-corrected for consistency across your marketing materials.' },
                { title: 'Fast Turnaround & Delivery', desc: 'Professional images delivered within 48-72 hours. Ready to use immediately on your website, social media, and marketing platforms.' },
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
                <p className="text-[var(--color-text-body)] mb-6">Custom pricing based on project scope and requirements.</p>
                <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block">
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl text-[var(--color-text-dark)] mb-6">Who This Service Is For</h2>
              <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-4">
                Commercial Photography is perfect for any business that needs professional visual content. Whether you&apos;re a retail business, restaurant, healthcare provider, manufacturing company, or service-based organization, professional imagery elevates your brand.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                If you need compelling photos for your website, social media, marketing campaigns, or business materials, we have the expertise and equipment to deliver exactly what you need.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Why Choose Rojas */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl text-center mb-12 text-[var(--color-text-dark)]">Why Work With Me</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Corporate Experience', desc: '15+ years in corporate environments means we understand your brand context, not just how to operate a camera.' },
                { title: 'Professional Equipment', desc: 'Professional lighting, cameras, and expert direction — every shot is intentional.' },
                { title: 'Fast Turnaround', desc: 'Images delivered within 48-72 hours without compromising quality.' },
                { title: 'Local to the Central Valley', desc: 'Based in Modesto, serving Stockton, Fresno, Turlock, and beyond.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="flex gap-4">
                    <CheckCircle2 size={22} className="text-[var(--color-primary)] flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="text-[var(--color-text-dark)] mb-2">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm">{item.desc}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Imagine Opening Your Website and Finally Feeling Proud of It</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Imagery that actually looks like your business. Photos you want to put in front of clients. A brand presence that reflects the quality of what you do. Here&apos;s what that experience looks like.
                </p>
              </div>
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

        {/* Final CTA Before FAQ */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Your Brand Story Deserves Professional Photography</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Join hundreds of Central Valley businesses who&apos;ve partnered with us for authentic, professional commercial photography. Differentiated brand imagery is one quote away.
              </p>
              <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection
          faqs={faqs}
          heading="Commercial Photography Questions"
        />

        {/* Bottom CTA */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready for Professional Commercial Photography?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Let&apos;s discuss your project and create compelling imagery that strengthens your brand.
              </p>
              <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
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

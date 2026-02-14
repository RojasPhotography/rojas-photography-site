import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function CommercialPhotographyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Professional Commercial Photography for Your Business"
        subtitle="High-impact brand imagery and commercial photography that showcases your products, spaces, and business story."
        tag="Brand Imagery & Commercial Photography"
        gradient
      />

      <main id="main-content">
        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Our Commercial Photography Work</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/MOVE Stanislaus-(3 of 28).jpg', alt: 'Professional product photography' },
                { src: '/images/DoctorOffice 4.jpg', alt: 'Commercial interior photography' },
                { src: '/images/MOVE Stanislaus-(17 of 28).jpg', alt: 'Business brand photography' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden">
                  <img src={img.src} alt={img.alt} className="w-full h-96 object-cover" />
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

        <CTASection
          heading="Ready for Professional Commercial Photography?"
          subheading="Let's discuss your project and create compelling imagery that strengthens your brand."
        />
      </main>
    </div>
  );
}

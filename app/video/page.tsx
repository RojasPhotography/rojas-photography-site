import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function VideoServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Professional Video Services for Your Business"
        subtitle="High-impact video production including corporate videos, client testimonials, aerial drone videography, and promotional content."
        tag="Professional Video Production & Drone Videography"
        gradient
      />

      <main id="main-content">
        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Our Video Production Work</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production' },
                { src: '/images/ALCC Drone 03.jpg', alt: 'Aerial drone videography' },
                { src: '/images/BBSI-Video-Freeze.jpg', alt: 'Client testimonial videos' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-96">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
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
                { title: 'Corporate Video Production', desc: 'Professional business videos for websites, marketing campaigns, and corporate communications. From concept to final edit.' },
                { title: 'Client Testimonial Videos', desc: 'Powerful video testimonials from satisfied clients. We guide the process, handle filming, and deliver professionally edited videos.' },
                { title: 'Aerial Drone Videography', desc: 'Stunning aerial footage using Part 107 certified drone operators. Perfect for real estate, commercial properties, and events.' },
                { title: 'Event Video Coverage', desc: 'Professional video documentation of your corporate events. Highlights reels, complete coverage, or edited recap videos.' },
                { title: 'Professional Editing & Motion Graphics', desc: 'High-quality editing, color grading, and motion graphics. Custom music, titles, transitions, and effects.' },
                { title: 'Multi-Format Delivery', desc: 'Videos optimized for all platforms. Full resolution for websites, social media versions, and broadcast quality.' },
                { title: 'Concept & Script Development', desc: 'We help develop your video concept and create scripts. Whether you have a clear vision or need creative direction.' },
                { title: 'Flexible Project Scopes', desc: 'From 30-second social media clips to full-length corporate videos. Custom solutions for your specific needs.' },
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
                <p className="text-[var(--color-text-body)] mb-4">Custom pricing based on project scope, length, and production needs.</p>
                <p className="text-[var(--color-text-muted)] text-sm">Contact us for a personalized quote.</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Video Production Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '01', title: 'Planning', desc: 'We discuss your video goals, vision, target audience, and key messages.' },
                { step: '02', title: 'Production', desc: 'Professional filming with high-quality cameras, audio equipment, and lighting.' },
                { step: '03', title: 'Editing', desc: 'Professional editing, color grading, sound design, and motion graphics.' },
                { step: '04', title: 'Delivery', desc: 'Videos delivered in multiple formats optimized for different platforms.' },
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

        {/* Video Types */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-8">Video Services We Provide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Corporate & Marketing Videos</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Company overview and brand videos</li>
                    <li>&#10003; Product demonstration videos</li>
                    <li>&#10003; How-to and educational videos</li>
                    <li>&#10003; Training and instructional videos</li>
                    <li>&#10003; Social media promotional videos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[var(--color-text-dark)] mb-4">Aerial & Specialty Videos</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Drone videography and aerial footage</li>
                    <li>&#10003; Real estate property tours</li>
                    <li>&#10003; Commercial and construction documentation</li>
                    <li>&#10003; Event highlights and recap videos</li>
                    <li>&#10003; Testimonial and interview videos</li>
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
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Why Choose Rojas Photography for Video</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: 'Part 107 Certified Drone Operator', desc: 'Professional, licensed drone pilot. Safe, legal aerial videography.' },
                { title: 'Professional Equipment & Expertise', desc: 'High-quality cameras, audio equipment, lighting, and editing software.' },
                { title: 'Corporate Experience', desc: 'We understand business video needs. Experience creating videos for corporate clients.' },
                { title: 'Fast Delivery & Flexibility', desc: 'Quick turnaround on projects. Flexible scheduling and project scopes.' },
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
                <TestimonialCard name="Business Owner" role="Video Project Client" quote="Alfonso and Niomi produced a professional corporate video that exceeded our expectations. The production quality and editing were excellent." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Marketing Manager" role="Corporate Client" quote="The aerial drone footage for our property was absolutely stunning. Professional, timely, and exactly what we needed for our marketing." />
              </SectionReveal>
            </div>
          </div>
        </section>

        <CTASection
          heading="Ready for Professional Video Services?"
          subheading="Let's create compelling video content that engages your audience and drives business results."
        />
      </main>
    </div>
  );
}

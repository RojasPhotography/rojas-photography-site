import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function OnSitePhotographyPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Professional Photography Comes to You"
        subtitle="We bring our complete studio setup to your office for professional headshots, team photos, and group portraits. No travel required—just polished results delivered immediately."
        tag="Professional Photography at Your Location"
        gradient
      />

      <main id="main-content">
        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Our On-Site Services</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/BB Individual Headshot Session.png', alt: 'On-site individual headshot session', label: 'On-Site Headshots', objectPosition: 'center 40%' },
                { src: '/images/Move Staff Group 9.jpg', alt: 'Team and group photos', label: 'Team Photos', objectPosition: 'center' },
                { src: '/images/Marily4170.jpg', alt: 'Business photography at client location', label: 'Corporate Photography', objectPosition: 'center 30%' },
              ].map((img) => (
                <SectionReveal key={img.label} className="relative rounded-xl overflow-hidden h-96 group">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: img.objectPosition }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <h3 className="text-white text-2xl font-bold">{img.label}</h3>
                  </div>
                </SectionReveal>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-4 justify-center mt-12">
              <a href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">Request a Quote</a>
              <a href="tel:2093803727" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">Call 209-380-3727</a>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">What&apos;s Included</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Full Studio Setup at Your Location', desc: 'We bring our complete professional studio to your office or business location. All equipment, lighting, and direction—everything you need for professional photos without leaving your workplace.' },
                { title: 'Professional Headshots & Team Photos', desc: 'Individual executive headshots, team portraits, group photos, and even building interior/exterior photography. We handle everything with expert guidance.' },
                { title: 'Custom Employee Scheduling', desc: 'For organizations with 10+ employees, we create a custom online calendar so your team members can schedule their own session times.' },
                { title: 'Real-Time Image Review & Coaching', desc: 'We guide your team through posing and expression in real-time. Everyone sees their photos as we shoot, ensuring confidence in final results.' },
                { title: 'Saves Time & Increases Efficiency', desc: 'No travel time to a studio. We come to you and work efficiently at your location. Your employees stay in their familiar environment.' },
                { title: 'Immediate Delivery', desc: 'All images are professionally edited and delivered immediately via our SpotMyPhotos gallery. Your team can download photos instantly.' },
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
                <p className="text-[var(--color-text-body)] mb-4">Custom pricing based on your organization&apos;s size and photography needs.</p>
                <p className="text-[var(--color-text-muted)] text-sm">Contact us for a personalized quote.</p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">See Us In Action</h2>
              <div className="flex justify-center">
                <div style={{ maxWidth: '360px', width: '100%' }}>
                  <iframe width="100%" height="640" src="https://www.youtube.com/embed/1eTNLV6G0dM" title="Rojas Photography On-Site Corporate Headshots" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="rounded-xl" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Behind the Scenes */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Behind-the-Scenes</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/Kaiser BTS Headshots.png', alt: 'Behind the scenes at Kaiser on-site headshots' },
                { src: '/images/EsmilcoBTS.png', alt: 'Behind the scenes at on-site session' },
                { src: '/images/Mayor RIverbank BTS.png', alt: 'Behind the scenes at Riverbank Mayor session' },
              ].map((img) => (
                <SectionReveal key={img.src} className="img-hover-zoom rounded-xl overflow-hidden h-64">
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                </SectionReveal>
              ))}
            </div>
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
                { step: '01', title: 'Discovery & Planning', desc: "We discuss your organization's needs, team size, locations, and photography goals. For 10+ employees, we set up individual scheduling calendars." },
                { step: '02', title: 'On-Site Session', desc: 'We arrive with our complete studio setup and guide your team through the entire process. Professional lighting, direction, and real-time review.' },
                { step: '03', title: 'Immediate Delivery', desc: 'Professionally edited images delivered immediately via SpotMyPhotos gallery. Ready for LinkedIn, your website, and professional communications.' },
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
                On-Site Corporate Photography is perfect for busy organizations and professionals who need professional headshots and team photos without traveling to a studio. Whether you&apos;re a law firm, corporate office, school district, healthcare organization, or any business needing team photography, we bring our expertise directly to you.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                This service is ideal for companies that value efficiency, want to keep employees in their familiar work environment, and need professional results on their timeline.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Clients Say</h2>
            </SectionReveal>
            <SectionReveal>
              <TestimonialCard
                name="Kaiser Business Campus, Pleasanton"
                role="Admin Specialist"
                quote="With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team's headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Our team could not be more satisfied with the work provided."
              />
            </SectionReveal>
          </div>
        </section>

        <CTASection
          heading="Ready to Bring Professional Photography On-Site?"
          subheading="Let us handle your team's professional headshots and corporate photography at your location."
        />
      </main>
    </div>
  );
}

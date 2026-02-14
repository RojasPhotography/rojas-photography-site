'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';

export default function PremiumHeadshotsPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="In-Studio Corporate Headshots"
        subtitle="Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection"
        gradient
      />

      <main id="main-content">
        {/* CTA Buttons */}
        <section className="py-12 px-8 bg-white">
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="#booking-heading" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Book Now
            </a>
            <a href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
              Schedule Discovery Call
            </a>
          </div>
        </section>

        {/* Headshot Gallery */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">
                Our Premium Corporate Headshots
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden">
                <img src="/images/Gina-0026 (1).jpg" alt="Premium corporate headshot - professional woman" className="w-full h-96 object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden">
                <img src="/images/Miguel-(2 of 6) (1).jpg" alt="Premium corporate headshot - professional man" className="w-full h-96 object-cover" />
              </SectionReveal>
              <SectionReveal className="img-hover-zoom rounded-xl overflow-hidden">
                <img src="/images/Joyce-0029.jpg" alt="Premium corporate headshot - business woman" className="w-full h-96 object-cover" />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-16 text-center">
                What&apos;s Included
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-10 mb-16">
              {[
                { title: 'Guided Session - Unlimited Time', desc: 'Work with our professional photographers throughout your entire session. We guide you through posing, expression, and confidence so you look and feel your absolute best.' },
                { title: 'Unlimited Wardrobe Changes', desc: "Bring multiple outfits and change as many times as you'd like. We'll help you select the best looks for your professional brand." },
                { title: 'Real-Time Image Review', desc: "See your photos as we shoot them. We review images together in real-time and adjust on the fly so you know exactly what's working." },
                { title: 'Guided Image Selection', desc: 'We sit down together and help you select your best images. You choose only the photos you love—no filler, no pressure.' },
                { title: 'Wardrobe Consultation', desc: "Not sure what to wear? We'll consult with you beforehand on colors, styles, and looks that best represent your professional brand." },
                { title: 'Professional Editing & Fast Delivery', desc: 'Your selected images are professionally edited and delivered to your inbox within 48 hours, ready for LinkedIn, your website, and marketing materials.' },
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
                <p className="text-[var(--color-text-body)] mb-2">Session Fee: <span className="text-[var(--color-primary)] font-bold text-lg">$150</span></p>
                <p className="text-[var(--color-text-body)]">Per Image: <span className="text-[var(--color-primary)] font-bold text-lg">$150 each</span></p>
                <p className="text-[var(--color-text-muted)] text-sm mt-4">Only pay for the images you love. No package minimums, no surprises.</p>
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
                { step: '01', title: 'Pre-Session Consultation', desc: "We discuss your professional goals, the images you need, and your vision. If you'd like wardrobe guidance, we'll help you prepare so you feel confident and ready." },
                { step: '02', title: 'Guided Coaching Session', desc: "During your session, we guide every detail—posing, expression, angles, and confidence. You're not standing alone in front of a camera; we're coaching you the entire way." },
                { step: '03', title: 'Selection & Delivery', desc: 'We review your session photos together and help you select the perfect shots. Your images are professionally edited and delivered within 48 hours.' },
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
                Premium Corporate Headshots are perfect for business professionals who want guidance throughout their session. Whether you&apos;re a CEO, attorney, consultant, realtor, or entrepreneur, this service is designed for people who need direction and want to walk away confident in their images.
              </p>
              <p className="text-[var(--color-text-body)] leading-relaxed">
                If you&apos;re unsure about posing, angles, or which looks best for your brand—we&apos;ve got you covered. Our coaching approach removes the stress and ensures you get professional portraits you&apos;ll love.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">What Clients Say</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Catherine Luke" role="CEO" quote="Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Joyce Ulrich" role="Entrepreneur, Modesto" quote="Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Booking Section - 17hats Calendar */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="booking-heading">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 id="booking-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-text-dark)]">Schedule Your Session</h2>
              <p className="text-lg text-center text-[var(--color-text-body)] mb-16">Select your preferred date and time below to book your premium headshot session.</p>
            </SectionReveal>

            <div className="flex justify-center">
              {isMounted && (
                <iframe
                  name="hats_scheduler"
                  style={{ margin: '20px' }}
                  frameBorder={0}
                  width="100%"
                  height="600"
                  src="https://Rojasheadshots.17hats.com/p#/scheduling/dghcgwpskptvbvsvkskdrcgkpnrrgxch?embed=true&tp=false&hide_desc=false"
                />
              )}
            </div>
          </div>
        </section>

        <CTASection
          heading="Want to Discuss Your Project First?"
          subheading="Schedule a free discovery call to discuss your professional photography needs."
          showContactInfo={false}
        />
      </main>
    </div>
  );
}

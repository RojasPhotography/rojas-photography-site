'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Target, Users } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';

export default function DiscoveryCallPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <script type="text/javascript" src="https://Rojasheadshots.17hats.com/vendor/iframeSizer.min.js" />

      <HeroSection
        title="Schedule Your Discovery Call"
        subtitle="Let's discuss your professional photography needs and create a customized solution that works for you."
        gradient
      />

      <main id="main-content">
        {/* What Happens */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-20 text-[var(--color-text-dark)]">What Happens on a Discovery Call?</h2>
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
                          <h3 className="font-bold text-[var(--color-text-dark)] mb-1">{item.title}</h3>
                          <p className="text-[var(--color-text-body)] text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] p-10 rounded-2xl border border-gray-100">
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-8">Discovery Call Details</h3>
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

        {/* Calendar Section - 17hats */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]" aria-labelledby="calendar-heading">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 id="calendar-heading" className="text-3xl md:text-4xl font-bold text-center mb-4 text-[var(--color-text-dark)]">Pick Your Time</h2>
              <p className="text-center text-[var(--color-text-body)] mb-16 text-lg">
                Select a time that works for you. You can choose a phone or video call during checkout.
              </p>
            </SectionReveal>

            <div className="flex justify-center">
              {isMounted && (
                <iframe name="hats_scheduler_discovery" style={{ margin: '20px', minHeight: '900px' }} frameBorder={0} width="100%" height="900" src="https://Rojasheadshots.17hats.com/p#/scheduling/rrhknvrrwcvggbprgbngdvgzcdwwbpnb?embed=true&tp=false&hide_desc=false" />
              )}
            </div>

            <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
              We&apos;ll send you a confirmation with call-in details. If you need to reschedule, just let us know!
            </p>
          </div>
        </section>

        {/* Why Schedule */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Why Schedule a Discovery Call?</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Expert Guidance', desc: 'With 15+ years of corporate experience, we know what works for business professionals.' },
                { title: 'Customized Solutions', desc: "Every business is different. We'll create a solution tailored to your needs." },
                { title: 'No Hidden Fees', desc: "Transparent pricing and honest conversations. We'll tell you exactly what things cost." },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="bg-[var(--color-bg-warm)] p-8 rounded-xl">
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Questions About Discovery Calls?</h2>
            </SectionReveal>

            <div className="space-y-8">
              {[
                { q: 'Is there a cost for the discovery call?', a: 'No, absolutely not. Discovery calls are completely free. No obligation to book anything.' },
                { q: 'Can I do a video call instead of a phone call?', a: 'Yes! You can choose your preferred format when you schedule.' },
                { q: "What if I'm not ready to book yet?", a: "Perfect! Discovery calls are for anyone considering professional photography. It's a great way to get answers." },
                { q: 'How far in advance should I schedule?', a: 'Whenever works for you! We have availability throughout the week. You can also call us directly at 209-380-3727.' },
                { q: 'How do I reschedule if I need to?', a: 'Just let us know! Call 209-380-3727 or email alfonso@rojasphotography.net. No penalties.' },
              ].map((item) => (
                <SectionReveal key={item.q}>
                  <div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{item.q}</h3>
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
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircle2, Users, Award, Zap } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';

export const metadata: Metadata = {
  title: 'About Rojas Photography | Modesto Corporate Photographers',
  description:
    'Meet Alfonso & Niomi Rojas - professional corporate photographers with 15+ years experience serving 500+ executives across Modesto and Central Valley. Learn our story.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/about-rojas-photography',
  },
  openGraph: {
    title: 'About Rojas Photography | Corporate Photographers in Modesto',
    description:
      '15+ years corporate experience, 500+ executives photographed, 50+ five-star reviews. Meet the team behind Modesto\'s premier photography studio.',
    url: 'https://rojasphotography.net/about-rojas-photography',
    type: 'website',
    images: [
      {
        url: '/images/Alfonso+Niomi-0026.jpg',
        alt: 'Alfonso and Niomi Rojas - Founders of Rojas Photography',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        title="About Rojas Photography"
        subtitle="Professional photographers dedicated to creating authentic corporate headshots and business imagery that elevate your professional brand."
        gradient
      />

      <main id="main-content">
        {/* Our Story */}
        <section className="py-20 md:py-28 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[var(--color-text-dark)]">Our Story</h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
              <SectionReveal>
                <div className="rounded-2xl overflow-hidden relative aspect-[4/3]">
                  <Image src="/images/Alfonso+Niomi-0026.jpg" alt="Alfonso and Niomi Rojas - Founders of Rojas Photography" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
              </SectionReveal>

              <SectionReveal>
                <div>
                  <p className="text-lg text-[var(--color-text-dark)] mb-6 font-bold leading-relaxed">
                    Rojas Photography was born from a shared vision: create authentic, professional photography that makes business leaders feel confident and prepared.
                  </p>
                  <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                    Alfonso and Niomi founded Rojas Photography during a transition period when they decided to pursue something they were truly passionate about. Both brought 15+ years of leadership experience—Alfonso in manufacturing and executive environments, and Niomi in HR and operations. They knew exactly what professional clients needed because they&apos;d lived in those demanding corporate roles.
                  </p>
                  <p className="text-[var(--color-text-body)] mb-6 leading-relaxed">
                    Their mission was clear: eliminate the anxiety and stress that people feel during photo sessions. Alfonso and Niomi wanted to create a transformative experience—one where the real person emerges through the lens. When someone sits in front of Alfonso&apos;s camera, the goal isn&apos;t just to take a photo. It&apos;s to capture the genuine confidence, authority, and authenticity that defines them as a leader.
                  </p>
                  <p className="text-[var(--color-text-body)] mb-8 leading-relaxed">
                    Within two years, Rojas Photography grew from startup to the most sought-after photography studio in the Central Valley. They now serve executives, attorneys, CEOs, and business leaders across Modesto, Stockton, Fresno, Turlock, and Merced.
                  </p>
                  <div className="bg-[var(--color-primary)] text-white p-6 rounded-xl">
                    <p className="leading-relaxed italic">
                      &ldquo;Professional photography isn&apos;t about being &apos;photogenic.&apos; It&apos;s about presenting your authentic professional self with confidence. That&apos;s what we create.&rdquo;
                    </p>
                    <p className="font-bold text-sm mt-4 text-[var(--color-primary-light)]">— Alfonso &amp; Niomi Rojas</p>
                  </div>
                </div>
              </SectionReveal>
            </div>

            {/* Milestones */}
            <SectionReveal>
              <div className="bg-[var(--color-bg-warm)] p-12 rounded-2xl">
                <div className="grid md:grid-cols-3 gap-8 text-center">
                  <div>
                    <p className="text-4xl font-bold text-[var(--color-primary)]">500+</p>
                    <p className="font-semibold text-[var(--color-text-dark)]">Executives & Professionals</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Corporate clients served</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[var(--color-primary)]">50+</p>
                    <p className="font-semibold text-[var(--color-text-dark)]">Five-Star Reviews</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Consistent excellence</p>
                  </div>
                  <div>
                    <p className="text-4xl font-bold text-[var(--color-primary)]">15+</p>
                    <p className="font-semibold text-[var(--color-text-dark)]">Years Corporate Experience</p>
                    <p className="text-sm text-[var(--color-text-muted)] mt-1">Deep industry understanding</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[var(--color-text-dark)]">Meet Alfonso &amp; Niomi</h2>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <SectionReveal>
                <div>
                  <div className="mb-8 flex justify-center">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[var(--color-primary)] relative">
                      <Image src="/images/Alfonso-headshot.jpg" alt="Alfonso Rojas - Founder & Lead Photographer" fill sizes="224px" className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">Alfonso Rojas</h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-6">Founder, Lead Photographer &amp; Visual Strategy Consultant</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">With 15+ years in manufacturing leadership and executive environments, Alfonso understands the pressures and expectations of professional leadership. As the lead photographer, he specializes in guiding clients through the session experience.</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">Alfonso works strategically with companies on their overall visual branding and imagery strategy. He is Part 107 certified for drone operations and a Christian photographer who values authentic, relationship-focused business practices.</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-bold">Lead Photographer</span>
                    <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-bold">Part 107 Certified</span>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal>
                <div>
                  <div className="mb-8 flex justify-center">
                    <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-[var(--color-primary)] relative">
                      <Image src="/images/Niomi-headshot.jpg" alt="Niomi Rojas - Founder, Photographer & Operations Lead" fill sizes="224px" className="object-cover scale-110" style={{ objectPosition: '25% 45%' }} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-2">Niomi Rojas</h3>
                  <p className="text-[var(--color-primary)] font-semibold mb-6">Founder, Photographer &amp; Operations Lead</p>
                  <div className="space-y-4 mb-8">
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">Niomi brings corporate HR and operations expertise along with a keen eye for professional imagery. She specializes in making clients feel comfortable and confident during sessions, with an exceptional ability to connect with people.</p>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">As operations lead, Niomi manages the business side—from initial consultation through final delivery. She&apos;s passionate about creating a comfortable, judgment-free environment where every client feels heard and valued.</p>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-bold">Photographer</span>
                    <span className="bg-[var(--color-primary-light)] text-[var(--color-primary)] px-4 py-1.5 rounded-full text-xs font-bold">Client Relations</span>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Why We Do This */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-20 text-[var(--color-text-dark)]">Why We Do This</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                { icon: Users, title: 'We Care About People', desc: "Professional photography shouldn't be stressful. We believe every client deserves a comfortable, judgment-free experience." },
                { icon: Award, title: 'We Believe in Excellence', desc: 'Premium positioning means premium everything. From our equipment to our editing, we commit to excellence in every detail.' },
                { icon: Zap, title: 'We Understand Business', desc: 'With 15+ years in corporate environments, we understand what executives, attorneys, and business leaders need.' },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div>
                    <div className="w-14 h-14 bg-[var(--color-primary)] rounded-full flex items-center justify-center mb-6">
                      <item.icon size={28} className="text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-text-dark)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Trusted by Business Leaders</h2>
            </SectionReveal>
            <SectionReveal>
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                {[
                  { name: 'Comcast', sub: 'Fortune 500 Communications' },
                  { name: 'Save Mart Companies', sub: 'Major Central Valley Employer' },
                  { name: 'California Lawyers Association', sub: 'Professional Legal Organization' },
                ].map((client) => (
                  <div key={client.name} className="bg-white p-8 rounded-xl text-center border border-gray-100">
                    <p className="font-bold text-lg text-[var(--color-text-dark)] mb-1">{client.name}</p>
                    <p className="text-sm text-[var(--color-text-muted)]">{client.sub}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Core Values</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { title: 'Authenticity', desc: 'We help you present your authentic professional self. Real presence is more powerful than posing.' },
                { title: 'Integrity', desc: 'Transparent pricing, honest communication, and relationship-focused business practices.' },
                { title: 'Excellence', desc: 'Premium positioning requires premium execution. Every detail matters.' },
                { title: 'Respect', desc: 'We respect your time, your needs, and your privacy. HIPAA compliance and confidentiality are non-negotiable.' },
                { title: 'Growth', desc: "We're constantly improving, learning, and expanding our capabilities." },
                { title: 'Faith-Based Values', desc: 'We operate with Christian values at the foundation of our business.' },
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

        <CTASection
          heading="Ready to Work With Us?"
          subheading="Let's create professional imagery that elevates your brand and positions you for success."
          dark={false}
        />
      </main>
    </div>
  );
}

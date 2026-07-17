import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import CTASection from '../components/CTASection';
import ContactFormEmbed from '../components/ContactFormEmbed';
import SchemaScript from '../components/SchemaScript';
import { generateBreadcrumbSchema } from '../lib/schema';

export const metadata: Metadata = {
  title: 'Contact Rojas Photography | Get a Quote for Professional Photography',
  description:
    'Contact Rojas Photography in Modesto for professional headshots, on-site photography, commercial, video, and event services. Call 209-380-3727 or request a quote online.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/contact-quote',
  },
  openGraph: {
    title: 'Contact Rojas Photography | Get a Quote',
    description:
      'Professional corporate photography in Modesto. Contact us for headshots, on-site photography, commercial, video, and event coverage. 24-hour response time.',
    url: 'https://rojasphotography.net/contact-quote',
    type: 'website',
    images: [
      {
        url: '/images/Alfonso+Niomi-0026.jpg',
        alt: 'Contact Rojas Photography - Professional photographers in Modesto CA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Rojas Photography | Get a Quote',
    description:
      'Contact Rojas Photography in Modesto for professional headshots, on-site photography, commercial, video, and event services. Call 209-380-3727.',
    images: ['/images/Alfonso+Niomi-0026.jpg'],
  },
};

export default function ContactPage() {
  return (
    <>
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Contact & Quote', url: 'https://rojasphotography.net/contact-quote' },
      ])} />
    <div className="min-h-screen bg-white">
      <HeroSection
        title="Let's Work Together"
        subtitle="Ready to transform your professional image? Get in touch with Rojas Photography. We're here to answer your questions and discuss your photography needs."
        gradient
      />

      <main id="main-content">
        {/* Contact Usthods */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
                Get in Touch
              </h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-6 mb-24">
              {[
                { icon: Phone, title: 'Call Us', desc: 'Speak directly with Alfonso or Niomi about your photography needs.', value: '209-380-3727', href: 'tel:2093803727' },
                { icon: Mail, title: 'Email Us', desc: "Send us an email and we'll get back to you within 24 hours.", value: 'alfonso@rojasphotography.net', href: 'mailto:alfonso@rojasphotography.net' },
                { icon: MapPin, title: 'Visit Us', desc: 'Located in Modesto, California. Serving Central Valley and beyond.', value: 'Modesto, CA', href: null },
              ].map((item) => (
                <SectionReveal key={item.title}>
                  <div className="bg-[var(--color-bg-warm)] p-8 rounded-xl text-center">
                    <div className="flex justify-center mb-6">
                      <item.icon size={36} className="text-[var(--color-primary)]" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">{item.title}</h3>
                    <p className="text-[var(--color-text-body)] text-sm mb-4">{item.desc}</p>
                    {item.href ? (
                      <a href={item.href} className="text-[var(--color-primary)] font-bold text-lg hover:text-[var(--color-primary-dark)] transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--color-primary)] font-bold text-lg">{item.value}</p>
                    )}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form - 17hats */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">
                Request a Quote
              </h2>
              <p className="text-center text-[var(--color-text-body)] mb-16 text-lg">
                Tell us about your project and we&apos;ll provide a personalized quote within 24 hours.
              </p>
            </SectionReveal>

            <div className="flex justify-center">
              <ContactFormEmbed />
            </div>

            <p className="text-center text-[var(--color-text-muted)] text-sm mt-8">
              We respect your privacy and will only use this information to respond to your inquiry.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">
                Frequently Asked Questions
              </h2>
            </SectionReveal>

            <div className="space-y-8">
              {[
                { q: "What's your response time for inquiries?", a: "We aim to respond to all inquiries within 24 hours. We're committed to getting back to you quickly." },
                { q: 'Do you offer packages or custom pricing?', a: "Yes! We customize our offerings based on your specific needs. Whether you need a single headshot or a comprehensive package, we can create a solution that fits your budget." },
                { q: 'Can you travel for on-site sessions?', a: 'Absolutely! We serve Modesto, Stockton, Fresno, Turlock, Merced, and the entire Central Valley. We also travel to San Francisco and surrounding areas.' },
                { q: 'How long does it take to get my photos?', a: 'Most projects are completed and delivered within 48-72 hours. For time-sensitive projects, we can often expedite delivery.' },
                { q: 'What if I\'m not happy with my photos?', a: 'For headshot sessions, you only pay for the images you love. We stand behind our work with a 100% satisfaction guarantee.' },
                { q: 'Do you offer rush services?', a: 'Yes, we understand that sometimes you need photos quickly. Contact us directly at 209-380-3727 and we\'ll do our best to accommodate.' },
              ].map((item) => (
                <SectionReveal key={item.q}>
                  <div>
                    <h3 className="text-xl text-[var(--color-text-dark)] mb-3">{item.q}</h3>
                    <p className="text-[var(--color-text-body)] leading-relaxed">{item.a}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          heading="Ready to Get Started?"
          subheading="Don't wait—reach out today and let's discuss how we can help elevate your professional image."
          dark={false}
        />
      </main>
    </div>
    </>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import TestimonialCard from '../components/TestimonialCard';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';
import { serviceDefinitions, statistics } from '../lib/definitions';

const faqs = [
  {
    question: 'How much does corporate video production cost?',
    answer:
      'Corporate video production pricing is custom based on your project scope, length, complexity, and editing requirements. A simple 30-second promotional video typically costs $1,500-$2,500. A comprehensive 2-3 minute corporate video with motion graphics typically costs $3,500-$7,500. Aerial drone videography adds $500-$1,500 depending on scope. We provide personalized quotes within 24 hours based on your specific needs and budget.',
  },
  {
    question: 'Are you a licensed drone pilot?',
    answer:
      'Yes! We are FAA Part 107 certified professional drone pilots, meaning we hold the required federal license for commercial drone operations. We carry all required insurance documentation and maintain the highest safety standards. This certification enables us to legally fly drones for commercial properties, corporate events, and aerial videography—capabilities that uncertified operators cannot provide.',
  },
  {
    question: 'How long does video production take?',
    answer:
      'Project timelines vary based on scope. A simple 30-second promotional video takes 1-2 weeks from concept to delivery. A comprehensive 2-3 minute corporate video with editing, color grading, and motion graphics takes 3-4 weeks. Drone footage adds 1-2 weeks depending on weather and location. We confirm timelines during initial planning and provide weekly progress updates.',
  },
  {
    question: 'What types of corporate videos do you create?',
    answer:
      'We create a wide range of professional business videos: company overview and brand videos, client testimonial and case study videos, product demonstration and how-to videos, training and educational videos, promotional social media content, event highlights and recap videos, and aerial drone videography. Whether you need a simple 15-second social clip or a comprehensive 10-minute corporate production, we handle full concept development, scripting, filming, and professional editing.',
  },
  {
    question: 'Can you create videos optimized for social media?',
    answer:
      'Absolutely! We deliver videos in multiple optimized formats for different platforms. This includes full-resolution files for websites and YouTube, vertical format for Instagram Stories and TikTok, square format for Facebook and LinkedIn feeds, and broadcast-quality files for professional distribution. Professional business videos generate 80% more engagement than static images and increase conversion rates by 47%.',
  },
];


export const metadata: Metadata = {
  title: 'Corporate Video Production Modesto CA | Drone Videography',
  description:
    'From client testimonials to drone aerials — full-service corporate video production in Modesto. FAA Part 107 certified. Shot, edited, and delivered. Central Valley.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/video',
  },
  openGraph: {
    title: 'Corporate Video Production in Modesto | Rojas Photography',
    description:
      'Corporate promos, client testimonials, brand videos, and FAA-certified drone aerials. Full-service video production in Modesto & the Central Valley.',
    url: 'https://rojasphotography.net/video',
    type: 'website',
    images: [
      {
        url: '/images/BBSI-Corp-Video.jpg',
        alt: 'Corporate video production - Modesto videographer',
      },
    ],
  },
};

export default function VideoServicesPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Corporate Video Production',
        description: 'Professional corporate video production including business videos, testimonials, drone videography, and promotional content in Modesto and Central Valley.',
        url: 'https://rojasphotography.net/video',
        image: 'https://rojasphotography.net/images/BBSI-Corp-Video.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Video Production', url: 'https://rojasphotography.net/video' },
      ])} />
      <div className="min-h-screen bg-white">
      {/* SB7: A Character - Business Owner/Marketing Director */}
      <HeroSection
        title="Corporate Videos Shouldn't Feel Scripted and Fake."
        subtitle="Authentic video storytelling that connects with your audience—not stiff, rehearsed corporate speak. Professional video production for businesses in Modesto and Central Valley."
        tag="Professional Video Production & Drone Videography"
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
        term={serviceDefinitions.videoProduction.term}
        definition={serviceDefinitions.videoProduction.definition}
      >
        <p className="text-[var(--color-text-body)] mt-4">
          {serviceDefinitions.videoProduction.context}
        </p>
      </DefinitionBox>

      <main id="main-content">
        {/* SB7: Has a Problem */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Most Corporate Videos Feel Forced and Inauthentic</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  You watch corporate videos from competitors and they all feel the same. Stiff executives reading from scripts. Forced smiles and rehearsed talking points. Zero authenticity, zero connection.
                </p>
                <p>
                  You <em>want</em> video content—you know it drives engagement and converts customers—but creating authentic video feels impossible. Your team freezes on camera. Everything comes out scripted and corporate. The final product looks professional but feels hollow.
                </p>
                <p>
                  And the production companies you&apos;ve talked to either charge $15,000+ for a single video or deliver cheap, template-driven work that screams "budget production." You need something in between: professional quality with authentic storytelling that actually connects with your audience.
                </p>
                <p>
                  Meanwhile, your competitors with compelling video content are capturing attention on social media, building trust through testimonials, and converting leads you should be winning.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Meets a Guide (Empathy + Authority) */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">I Know What It Takes to Make People Comfortable on Camera</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Most people freeze the moment a camera points at them. They read from a script and it sounds like exactly that — a script. I&apos;ve seen it enough times to know that the problem isn&apos;t the person, it&apos;s the process. Nobody relaxes when they feel like they&apos;re performing.
                </p>
                <p className="font-semibold text-[var(--color-text-dark)]">
                  We&apos;re Alfonso and Niomi Rojas. We guide conversations, not scripts. With 15+ years of storytelling experience, <strong>FAA Part 107 drone certification</strong>, and a background in corporate environments, I produce video for businesses across the Central Valley that actually connects — because it feels real, not rehearsed.
                </p>
                <p>
                  Whether you need a 15-second social clip, a 3-minute brand video, or aerial drone footage, we build the narrative around your story — not a template — and I make sure your team feels comfortable enough to show up as themselves.
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
            <div className="grid md:grid-cols-4 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Story Development</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We start by learning your video goals, audience, key messages, and tone. We develop the narrative structure and shot list — not a rigid script that feels forced when your team is on camera.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Professional Production</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We arrive with professional cameras, audio, lighting, and drones when needed. We guide your team through conversational interviews — not stiff scripts — capturing authentic moments at your location, in studio, or wherever your story lives.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Professional Editing</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We edit with color grading, sound design, motion graphics, and professional music. The narrative is crafted to maximize engagement while keeping the authenticity intact. Every frame is intentional.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">04</span>
                  <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">Multi-Format Delivery</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    Videos delivered in multiple formats optimized for different platforms—full resolution for websites, vertical for Instagram Stories, square for social feeds, and broadcast quality for professional use. Ready to publish immediately.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Urgent CTA After Plan - Early Conversion Opportunity */}
        <section className="py-12 px-8 bg-[var(--color-primary-dark)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <p className="text-white/90 text-lg md:text-xl mb-6 leading-relaxed">
                Stop creating stiff, scripted corporate videos. Get authentic storytelling.
              </p>
              <Link href="/contact-quote" className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block">
                Request a Quote
              </Link>
            </SectionReveal>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-12 text-[var(--color-text-dark)]">Professional Video Production in Modesto & Central Valley</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { src: '/images/BBSI-Corp-Video.jpg', alt: 'Corporate video production in Modesto' },
                { src: '/images/ALCC Drone 03.jpg', alt: 'Aerial drone videography - Central Valley' },
                { src: '/images/BBSI-Video-Freeze.jpg', alt: 'Professional client testimonial videos' },
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
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Inauthentic Video Pushes Customers Away</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  When your corporate video feels scripted and fake, viewers click away within seconds. You&apos;ve invested thousands of dollars in production that actively <em>damages</em> your brand instead of building it.
                </p>
                <p>
                  Worse, bad video is harder to recover from than no video at all. Once potential customers see stiff, inauthentic content, they question whether your entire business lacks authenticity. That first impression is nearly impossible to reverse.
                </p>
                <p>
                  Meanwhile, businesses with authentic, engaging video content see 80% higher customer engagement and 47% better conversion rates. Video is the most powerful marketing tool available—<em>when it&apos;s done right</em>. Scripted corporate theater isn&apos;t "done right."
                </p>
                <p>
                  Every day you delay creating authentic video content, you&apos;re surrendering attention and trust to competitors who understand that genuine storytelling wins in the digital age.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA After Stakes */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready for Authentic Video Content?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Get a custom quote for your video project. We&apos;ll create professional video content that connects with your audience through genuine storytelling—not scripted corporate speak.
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
                { title: 'Corporate Video Production', desc: 'Professional business videos for websites, marketing campaigns, and corporate communications. From concept to final edit.' },
                { title: 'Client Testimonial Videos', desc: 'Powerful video testimonials from satisfied clients. We guide the process, handle filming, and deliver professionally edited videos.' },
                { title: 'Aerial Drone Videography', desc: 'Stunning aerial footage using Part 107 certified drone operators. Perfect for commercial properties, corporate events, and business showcases.' },
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
                <p className="text-[var(--color-text-body)] mb-6">Custom pricing based on project scope, length, and production needs.</p>
                <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block">
                  Get Your Quote
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Video Types */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl text-[var(--color-text-dark)] mb-8">Video Services I Provide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-[var(--color-text-dark)] mb-4">Corporate & Marketing Videos</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Company overview and brand videos</li>
                    <li>&#10003; Product demonstration videos</li>
                    <li>&#10003; How-to and educational videos</li>
                    <li>&#10003; Training and instructional videos</li>
                    <li>&#10003; Social media promotional videos</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-[var(--color-text-dark)] mb-4">Aerial & Specialty Videos</h4>
                  <ul className="text-[var(--color-text-body)] text-sm space-y-2">
                    <li>&#10003; Drone videography and aerial footage</li>
                    <li>&#10003; Commercial and construction documentation</li>
                    <li>&#10003; Event highlights and recap videos</li>
                    <li>&#10003; Testimonial and interview videos</li>
                    <li>&#10003; Corporate facility tours</li>
                  </ul>
                </div>
              </div>
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
                { title: 'Part 107 Certified Drone Operator', desc: 'Professional, licensed drone pilot. Safe, legal aerial videography.' },
                { title: 'Professional Equipment & Expertise', desc: 'High-quality cameras, audio equipment, lighting, and editing software.' },
                { title: 'Corporate Experience', desc: 'We understand business video needs. Experience creating videos for corporate clients.' },
                { title: 'Fast Delivery & Flexibility', desc: 'Quick turnaround on projects. Flexible scheduling and project scopes.' },
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
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Imagine Sharing a Video You&apos;re Actually Proud to Put on Your Website</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Authentic, professional video that sounds like your team — not a script. Content that connects with your audience and makes people want to reach out. Here&apos;s what clients say about working with me.
                </p>
              </div>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Francisco Chamorro" role="BBSI - Business Management Solutions" quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. Our firm contracted them for a client testimonial both on site and for b-roll and the results were just what we expected. I would recommend." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Teresa Tolentino" role="Save Mart Companies" quote="I work with Rojas Photography on several projects and I couldn't be more impressed with their service. Alfonso and Niomi are incredibly professional, making everyone involved in the project feel relaxed. Even with a same-day turnaround, they deliver every time. I highly recommend Rojas Photography and will definitely continue to partner with them on future projects." />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Final CTA Before FAQ */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Your Story Deserves Authentic Video</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Join hundreds of Central Valley businesses who&apos;ve partnered with us for genuine, professional video production. Authentic storytelling is one quote away.
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
          heading="Video Production Questions"
        />

        {/* Bottom CTA */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Ready for Professional Video Services?</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Let&apos;s create compelling video content that engages your audience and drives business results.
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

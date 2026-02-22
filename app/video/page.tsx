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
import { generateServiceSchema, generateFAQSchema } from '../lib/schema';
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
  {
    question: 'What\'s the shortest video length you create?',
    answer:
      'We create videos at any length, starting from 10-15 seconds for social media clips up to feature-length productions. The shortest videos are typically promotional clips for Instagram, TikTok, or LinkedIn—perfect for quick announcements, product highlights, or testimonials. Even short videos receive professional scripting, filming, color grading, and editing. We\'ll work with you to maximize impact within your desired length.',
  },
  {
    question: 'Do you handle scripting and concept development?',
    answer:
      'Yes! We offer full concept-to-delivery service. If you have a clear vision, we execute it. If you need help developing the concept, we guide you through the process. Our team discusses your goals, target audience, key messages, and desired tone to create a script and shot list. This collaborative approach ensures the final video aligns perfectly with your vision and business objectives.',
  },
  {
    question: 'Can you shoot on location or do you need a studio?',
    answer:
      'We shoot anywhere—on location, in your office, at events, outdoors, or in a studio. Our equipment is portable and professional-grade, allowing us to produce high-quality video in any environment. On-location shooting often captures authentic company culture and real-world context. For certain projects, studio lighting produces superior results. We recommend the best option based on your specific needs during the planning phase.',
  },
  {
    question: 'What video formats do you deliver and what about music licensing?',
    answer:
      'We deliver videos in all standard formats: MP4 for web and social media, MOV for professional editing suites, and other formats as needed. Music and sound effects are professionally licensed royalty-free or we arrange proper licensing for copyrighted music. All music is included in the project cost and fully licensed for your intended use—no surprise fees or licensing issues later.',
  },
];


export const metadata: Metadata = {
  title: 'Corporate Video Production Modesto CA | Drone Videography',
  description:
    'Professional corporate video production in Modesto and Central Valley. Business videos, testimonials, drone videography, and promotional content. Part 107 certified.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/video',
  },
  openGraph: {
    title: 'Corporate Video Production in Modesto | Rojas Photography',
    description:
      'High-impact video production including corporate videos, client testimonials, aerial drone videography, and promotional content for your business.',
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
        image: '/images/BBSI-Corp-Video.jpg',
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">Most Corporate Videos Feel Forced and Inauthentic</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">We Create Video That Feels Authentic, Not Scripted</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  <strong>We understand the challenge of authentic video.</strong> Most people aren&apos;t naturally comfortable on camera, and scripted content rarely connects with audiences. That&apos;s exactly why we specialize in conversational, story-driven video production that feels genuine—not corporate theater.
                </p>
                <p>
                  <strong>We&apos;ve produced 200+ corporate videos for businesses across Modesto and the Central Valley</strong>—from client testimonials and brand stories to product demos and aerial drone footage. We bring 15+ years of visual storytelling experience, <strong>FAA Part 107 drone certification</strong>, and the ability to make your team feel comfortable on camera so their authentic personality shines through.
                </p>
                <p>
                  We don&apos;t force scripts. We guide conversations. We capture authentic moments. We create video content that actually engages your audience because it feels <em>real</em>—whether you need a 15-second social clip, a 3-minute brand video, or comprehensive aerial drone footage.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* SB7: Who Gives Them a Plan */}
        <section className="py-20 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-[var(--color-text-dark)]">Our Video Production Process</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-4 gap-8">
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">01</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Story Development</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We discuss your video goals, target audience, key messages, and desired tone. Whether you need a brand story, client testimonial, product demo, or promotional video, we develop the narrative structure and shot list—not rigid scripts that feel forced.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">02</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Professional Production</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We arrive with professional cameras, audio equipment, lighting, and (when needed) drones. We guide your team through conversational interviews—not stiff scripts—capturing authentic moments and genuine emotion. We shoot at your location, in our studio, or anywhere your story lives.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">03</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Professional Editing</h3>
                  <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                    We edit your footage with color grading, sound design, motion graphics, and professional music. We craft the narrative to maximize engagement while maintaining authenticity. Every frame is intentional.
                  </p>
                </div>
              </SectionReveal>
              <SectionReveal>
                <div>
                  <span className="text-5xl font-bold text-[var(--color-primary-light)]">04</span>
                  <h3 className="text-xl font-bold text-[var(--color-text-dark)] mt-4 mb-3">Multi-Format Delivery</h3>
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
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[var(--color-text-dark)]">Professional Video Production in Modesto & Central Valley</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-6">Inauthentic Video Pushes Customers Away</h2>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Ready for Authentic Video Content?</h2>
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
        <section className="py-20 px-8 bg-white">
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

        {/* Final CTA Before FAQ */}
        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Your Story Deserves Authentic Video</h2>
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
          faqs={[
            {
              question: 'How much does corporate video production cost?',
              answer:
                'Video production pricing is custom based on your project scope, length, complexity, and editing requirements. A simple promotional video costs less than a comprehensive corporate video with motion graphics. We provide personalized quotes based on your specific needs and budget.',
            },
            {
              question: 'Are you a licensed drone pilot?',
              answer:
                'Yes! We are Part 107 certified professional drone pilots licensed by the FAA. This means we can legally fly drones for commercial purposes with all required safety and insurance documentation. Aerial drone videography is perfect for corporate events, commercial properties, and business facilities.',
            },
            {
              question: 'How long does video production take?',
              answer:
                'Project timelines vary based on scope. A simple 30-second promotional video might take 1-2 weeks, while a comprehensive corporate video with motion graphics takes 3-4 weeks. We discuss timelines upfront during planning. Most projects are delivered within 2-4 weeks.',
            },
            {
              question: 'What types of corporate videos do you create?',
              answer:
                'We create corporate videos, client testimonial videos, promotional content, product demonstration videos, brand videos, training videos, event highlights, and aerial drone videography. Whether you need a simple social media clip or a comprehensive corporate production, we handle full concept development through final delivery.',
            },
            {
              question: 'Can you create videos optimized for social media?',
              answer:
                'Absolutely! We deliver videos in multiple formats optimized for different platforms. This includes full-resolution for websites, social media versions (vertical, square, and horizontal), and broadcast-quality files. We understand the requirements for Instagram, TikTok, YouTube, LinkedIn, and Facebook.',
            },
          ]}
          heading="Video Production Questions"
        />

        {/* Bottom CTA */}
        <section className="py-16 px-8 bg-white text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-dark)] mb-4">Ready for Professional Video Services?</h2>
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

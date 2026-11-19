import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import LogoMarquee from '../components/LogoMarquee';
import TestimonialCard from '../components/TestimonialCard';
import FAQSection from '../components/FAQSection';
import SchemaScript from '../components/SchemaScript';
import DefinitionBox from '../components/DefinitionBox';
import VideoFacade from '../components/VideoFacade';
import { generateServiceSchema, generateFAQSchema, generateBreadcrumbSchema, generateVideoSchema } from '../lib/schema';
import { serviceDefinitions } from '../lib/definitions';

const faqs = [
  {
    question: 'How much does a corporate videographer cost in Modesto?',
    answer:
      'Every video is quoted to its scope, so pricing starts with a conversation about your project. The quote is shaped by the length of the finished video, shoot time and number of locations, how many people are on camera, editing and motion graphics, and whether drone footage is included. A short social video is scoped differently from a full production. Tell us about your project and we send a personalized quote within 24 hours.',
  },
  {
    question: 'Are you FAA-licensed drone pilots?',
    answer:
      'Yes. Alfonso is an FAA Part 107 certified commercial drone pilot, and we carry the required insurance documentation. That certification is what allows us to legally fly for commercial properties, corporate events and business aerials.',
  },
  {
    question: 'How long does video production take?',
    answer:
      'A simple 30-second promotional video takes 1-2 weeks from planning to delivery. A 2-3 minute corporate video with color grading and motion graphics takes 3-4 weeks. Drone footage can add 1-2 weeks depending on weather and location. We confirm the timeline during planning and update you weekly.',
  },
  {
    question: 'What types of corporate videos do you create?',
    answer:
      'Company overview and brand videos, client testimonials and case studies, recruiting and culture videos, product demonstrations, training and educational videos, social media content, event highlight videos and aerial drone footage. Projects range from a 15-second social clip to a 10-minute production, with concept development, filming and editing handled in-house.',
  },
  {
    question: 'Do you make short social media videos and reels?',
    answer:
      'Yes. Alongside full productions, we create short-form video for Instagram, LinkedIn, TikTok and YouTube Shorts: reels, event recaps, behind-the-scenes clips and team highlights. These are shot and edited in a focused format with vertical and square versions delivered, and they are scoped and quoted separately from full productions.',
  },
  {
    question: 'Does my team need to memorize a script for a corporate video?',
    answer:
      'No. We bring a teleprompter to every shoot, so your team can read their lines naturally. If someone prefers to speak from memory, we coach them through each take so it sounds like a conversation rather than a recitation. Many shoots also use guided interviews, where we ask questions and your team simply answers.',
  },
  {
    question: 'What is included in a video production project?',
    answer:
      'Every project starts with story development: you approve the story and shot list before we film. Rounds of revisions are included, and your quote is set before we start, so there are no surprises on the invoice. Final delivery includes cuts sized for your website, LinkedIn, Instagram and other platforms you use.',
  },
  {
    question: 'Do you work outside Modesto?',
    answer:
      'Yes. We film across the Central Valley, including Stockton, Turlock, Merced, Fresno and Sacramento, and travel statewide for larger projects — including the Bay Area, Los Angeles and San Diego. Tell us the location when you request a quote.',
  },
  {
    question: 'Can you deliver videos for social media?',
    answer:
      'Yes. Every project can include full-resolution files for your website and YouTube, vertical cuts for Instagram Stories and TikTok, square cuts for LinkedIn and Facebook feeds, and broadcast-quality files.',
  },
];

export const metadata: Metadata = {
  title: 'Videographer in Modesto, CA | Corporate Video Production',
  description:
    'Corporate videographers in Modesto and the Central Valley. Brand films, testimonials, event coverage, social reels and drone aerials from Alfonso and Niomi Rojas.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/video',
  },
  openGraph: {
    title: 'Videographer in Modesto, CA | Rojas Photography',
    description:
      'Brand videos, client testimonials, event video and FAA-certified drone aerials across Modesto and the Central Valley.',
    url: 'https://rojasphotography.net/video',
    type: 'website',
    images: [
      {
        url: '/images/BBSI-Corp-Video.jpg',
        alt: 'Corporate videographer filming a client testimonial in Modesto',
      },
    ],
  },
};

const productionVideos = [
  {
    id: 'oGWlQt6wXAE',
    title: "Those Two Angels Saved My Life | Grant's Incredible Survival Story, filmed by Rojas Photography for Doctors Medical Center",
    caption: 'Client film for Doctors Medical Center, shot by Rojas Photography.',
    uploadDate: '2026-09-16',
  },
  {
    id: 'w7rYwN8DxZw',
    title: 'BBSI Client Testimonial featuring Ace Hardware, filmed by Rojas Photography',
    caption: 'Client testimonial film for BBSI, featuring Ace Hardware, shot by Rojas Photography.',
    uploadDate: '2026-11-18',
  },
  {
    id: '4m7pQxd3u1Y',
    title: 'BBSI Client Testimonial featuring Dental Excellence, filmed by Rojas Photography',
    caption: 'Client testimonial film for BBSI, featuring Dental Excellence, shot by Rojas Photography.',
    uploadDate: '2026-11-18',
  },
  {
    id: 'APie6Oono9M',
    title: 'BBSI Client Testimonial featuring Teeples Plumbing, filmed by Rojas Photography',
    caption: 'Client testimonial film for BBSI, featuring Teeples Plumbing, shot by Rojas Photography.',
    uploadDate: '2026-11-18',
  },
];

const socialVideos: { id: string; title: string; caption: string }[] = [];

const quickFacts = [
  { label: 'Turnaround', value: '1-2 weeks for short videos, 3-4 weeks for full productions' },
  { label: 'Coverage', value: 'Modesto, Stockton, Turlock, Merced, Fresno, Sacramento and the Central Valley, with statewide travel for larger productions' },
  { label: 'Credentials', value: 'FAA Part 107 certified drone pilot, fully insured' },
];

export default function VideoServicesPage() {
  return (
    <>
      <SchemaScript schema={generateServiceSchema({
        name: 'Corporate Video Production',
        description: 'Corporate videographers in Modesto and the Central Valley: brand and story films, client testimonial and recruiting videos, event video coverage, social media reels and FAA Part 107 drone videography.',
        url: 'https://rojasphotography.net/video',
        image: 'https://rojasphotography.net/images/BBSI-Corp-Video.jpg',
        subServices: [
          { name: 'Brand & Story Films', description: 'Company overview, client testimonial, case study, and recruiting and culture videos for businesses in Modesto and the Central Valley.' },
          { name: 'Event Video Coverage', description: 'Multi-camera event videography for conferences, galas and award ceremonies, with highlight reels and on-site testimonials.' },
          { name: 'Social Media Reels', description: 'Short-form vertical and square video for Instagram, LinkedIn, TikTok and YouTube Shorts.' },
        ],
      })} />
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript schema={generateBreadcrumbSchema([
        { name: 'Home', url: 'https://rojasphotography.net' },
        { name: 'Video Production', url: 'https://rojasphotography.net/video' },
      ])} />
      {productionVideos.map((video) => (
        <SchemaScript
          key={video.id}
          schema={generateVideoSchema({
            youtubeId: video.id,
            name: video.title,
            description: video.caption,
            uploadDate: video.uploadDate,
          })}
        />
      ))}
      <div className="min-h-screen bg-white">
      <HeroSection
        title="Your Company Is Doing Something Worth Seeing. Is Anyone Seeing It?"
        subtitle="Brand films, client testimonials, event coverage and social reels that show prospects your story before they ever pick up the phone, led start to finish by Alfonso and Niomi Rojas."
        tag="Corporate Videographers in Modesto & the Central Valley"
        tagIsHeading
        gradient
      >
        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">
          <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Request a Video Quote
          </Link>
          <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
            Schedule a Discovery Call
          </Link>
        </div>
      </HeroSection>

      <main id="main-content">
        {/* Proof bar — the names they already know */}
        <SectionReveal>
          <LogoMarquee />
        </SectionReveal>

        {/* StoryBrand: the problem */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Your Competitors Already Have Video. Your Prospects Are Watching It.</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Most decision-makers won&apos;t call a company they can&apos;t picture. When they land on your site and there&apos;s no video, they don&apos;t stop to think &ldquo;this company doesn&apos;t have video.&rdquo; They move on, to the company that gave them something to watch.
                </p>
              </div>
              <div className="my-8 border-l-4 border-[var(--color-primary)] bg-[var(--color-bg-warm)] rounded-r-2xl px-6 py-5">
                <p className="text-2xl md:text-3xl text-[var(--color-text-dark)] leading-snug">
                  91% of businesses now use video as a marketing tool.
                </p>
                <p className="text-sm text-[var(--color-text-muted)] mt-2">
                  Source: Wyzowl, Video Marketing Statistics 2026
                </p>
              </div>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  The frustrating part is that your message is good. The work is real and the team is capable. What&apos;s missing is proof, and video is the fastest way to show it.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Three services: brand & story films, event coverage, social reels */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">Video Production Services</h2>
              <p className="text-center text-lg text-[var(--color-text-body)] max-w-2xl mx-auto mb-12">
                Three ways to work with us. Tell us what you&apos;re trying to accomplish and we&apos;ll match you to the right format.
              </p>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  tag: 'For Your Brand',
                  title: 'Brand & Story Films',
                  who: 'Brand films, client testimonials and company stories: the kind of video that earns trust with prospects, recruits and clients alike.',
                  items: [
                    'Company overview and about-us videos',
                    'Client testimonial and case study videos',
                    'Recruiting and culture videos',
                    'FAA Part 107 drone videography when the story calls for it',
                  ],
                  cta: 'Plan a Brand Film',
                },
                {
                  tag: 'For Your Events',
                  title: 'Event Video Coverage',
                  who: 'Event videography for conferences, galas, award ceremonies and corporate gatherings across Modesto and the Central Valley, captured so the energy of the day lives past the event itself.',
                  items: [
                    'Multi-camera coverage with a highlight reel',
                    'Keynotes, speaker sessions and award presentations',
                    'Sponsor and attendee testimonials captured on the floor',
                    'Cuts sized for social, your website and next year’s promo',
                  ],
                  cta: 'Cover My Event',
                },
                {
                  tag: 'For Your Feeds',
                  title: 'Social Media Reels',
                  who: 'Your team, your culture, your work: captured and cut for the platforms where your next client is scrolling.',
                  items: [
                    'Short-form clips built around one focused shoot',
                    'Behind-the-scenes, team highlights and culture clips',
                    'Vertical and square versions, ready for Instagram and LinkedIn',
                    'Quick turnaround, typically within 1-2 weeks',
                  ],
                  cta: 'Ask About Reels',
                },
              ].map((service) => (
                <SectionReveal key={service.title}>
                  <div className="h-full flex flex-col bg-[var(--color-bg-warm)] p-8 rounded-2xl border border-gray-100">
                    <span className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)] mb-2">{service.tag}</span>
                    <h3 className="text-2xl text-[var(--color-text-dark)] mb-3">{service.title}</h3>
                    <p className="text-[var(--color-text-body)] mb-6">{service.who}</p>
                    <ul className="space-y-3 mb-8 flex-1">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-[var(--color-text-body)]">
                          <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact-quote" className="btn-primary px-8 py-3 text-base font-semibold rounded-full text-center inline-block">
                      {service.cta}
                    </Link>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Samples, grouped by how we work */}
        <section className="py-16 px-8 bg-white border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-4 text-[var(--color-text-dark)]">Our Work</h2>
              <p className="text-center text-lg text-[var(--color-text-body)] max-w-2xl mx-auto mb-14">
                Recent films, directed by Alfonso and Niomi Rojas.
              </p>
            </SectionReveal>

            <SectionReveal>
              <h3 className="text-2xl text-[var(--color-text-dark)] mb-2">Brand &amp; Story Films</h3>
              <p className="text-[var(--color-text-body)] mb-6">Company stories, client testimonials and case study films.</p>
              <div className="grid md:grid-cols-2 gap-8">
                {productionVideos.map((video) => (
                  <figure key={video.id}>
                    <VideoFacade id={video.id} title={video.title} />
                    <figcaption className="text-sm text-[var(--color-text-muted)] mt-3">{video.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </SectionReveal>

            {socialVideos.length > 0 && (
              <SectionReveal>
                <h3 className="text-2xl text-[var(--color-text-dark)] mt-16 mb-2">Social Media Reels</h3>
                <p className="text-[var(--color-text-body)] mb-6">Short clips built for Instagram, LinkedIn, TikTok and YouTube Shorts.</p>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                  {socialVideos.map((video) => (
                    <figure key={video.id}>
                      <VideoFacade id={video.id} title={video.title} vertical />
                      <figcaption className="text-sm text-[var(--color-text-muted)] mt-3 text-center">{video.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              </SectionReveal>
            )}
          </div>
        </section>

        {/* Direct answers: what, how long, where */}
        <section className="py-12 px-8 bg-white border-b border-gray-100">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-2xl text-[var(--color-text-dark)] mb-6">Video Production at a Glance</h2>
              <dl className="grid md:grid-cols-3 gap-x-10 gap-y-5">
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className="text-sm font-semibold uppercase tracking-wide text-[var(--color-primary)]">{fact.label}</dt>
                    <dd className="text-[var(--color-text-body)] mt-1">{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </SectionReveal>
          </div>
        </section>

        {/* Guide */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">Most People Tense Up When a Camera Points at Them.</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  That&apos;s not a problem you should have to solve on shoot day. Whether your team speaks from a teleprompter, from memory or in a guided interview, we coach every take until it sounds like a conversation, so your people come across as human and credible, not stiff and over-rehearsed.
                </p>
                <p>
                  We&apos;re Alfonso and Niomi Rojas, corporate videographers based in Modesto, and we lead every production ourselves, bringing in a trusted crew when a project calls for more hands. We come from corporate environments: manufacturing, executive leadership, HR and operations. We&apos;re comfortable in the room with your marketing team, your CEO or your CFO, and we understand how business decisions get made, so you&apos;re working with a production partner, not a vendor you have to manage.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-center mb-16 text-[var(--color-text-dark)]">How We Produce Your Video</h2>
            </SectionReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { n: '01', t: 'Story Development', d: 'We learn your goals, audience and key messages, then build the narrative structure and shot list together.' },
                { n: '02', t: 'Production', d: 'We bring cameras, audio, lighting and drones when needed, and guide your team through conversational interviews at your location or in studio.' },
                { n: '03', t: 'Editing', d: 'Color grading, sound design, motion graphics and licensed music, edited to keep your team natural on screen.' },
              ].map((step) => (
                <SectionReveal key={step.n}>
                  <div>
                    <span className="text-5xl font-bold text-[var(--color-primary-light)]">{step.n}</span>
                    <h3 className="text-xl text-[var(--color-text-dark)] mt-4 mb-3">{step.t}</h3>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{step.d}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
            <SectionReveal>
              <div className="mt-16 bg-white rounded-2xl border border-gray-100 p-8 md:p-10 max-w-4xl mx-auto">
                <h3 className="text-2xl text-[var(--color-text-dark)] mb-6 text-center">Our Promise to You</h3>
                <ul className="grid md:grid-cols-2 gap-x-10 gap-y-4">
                  {[
                    'You approve the story and shot list before we film.',
                    'Rounds of revisions are included in every project.',
                    'Your quote is set before we start, with no surprises on the invoice.',
                    'No memorizing required. We bring a teleprompter, and if your team prefers to speak from memory, we coach them so it never sounds rehearsed.',
                  ].map((promise) => (
                    <li key={promise} className="flex gap-3 text-[var(--color-text-body)]">
                      <CheckCircle2 size={20} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                      <span>{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
          <div className="max-w-6xl mx-auto">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">What Our Clients Say</h2>
                <p className="text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto">
                  Relaxed on camera, professional on delivery.
                </p>
              </div>
            </SectionReveal>
            <div className="grid md:grid-cols-2 gap-6">
              <SectionReveal>
                <TestimonialCard name="Francisco Chamorro" role="BBSI - Business Management Solutions" quote="Alfonso and Niomi are great to work with. Responsive, open to input and above all super professional. Our firm contracted them for a client testimonial both on site and for b-roll and the results were just what we expected. I would recommend." />
              </SectionReveal>
              <SectionReveal>
                <TestimonialCard name="Kim Musgrave" role="Google Review" quote="Enjoyed working with Alfonso and Niomi on a day filming at one of our hospitals. Professional, flexible and genuine. Highly recommend!" />
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* StoryBrand: success and stakes */}
        <section className="py-16 px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-6">After the Shoot, Your Company Has a Voice.</h2>
              <div className="space-y-4 text-[var(--color-text-body)] leading-relaxed">
                <p>
                  Not just a video: a finished piece your team is proud to share. Cuts sized for your website, LinkedIn and Instagram. A clear, confident picture of your company that does its job every time someone visits your site.
                </p>
                <p>
                  Without it, prospects compare you on whatever your competitors have already published. Video is often the first thing a buyer watches, and it sets the tone for everything that follows.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        <DefinitionBox
          term={serviceDefinitions.videoProduction.term}
          definition={serviceDefinitions.videoProduction.definition}
        />

        <FAQSection
          faqs={faqs}
          heading="Video Production Questions"
        />

        <section className="py-16 px-8 bg-[var(--color-bg-warm)] text-center">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <h2 className="text-3xl md:text-4xl text-[var(--color-text-dark)] mb-4">Your Story Is Ready. Let&apos;s Put It on Screen.</h2>
              <p className="text-[var(--color-text-body)] text-lg mb-8 leading-relaxed">
                Tell us what you need and where. We reply with a custom quote within 24 hours. Looking for photography instead? See our <Link href="/commercial" className="underline">commercial photography</Link>, <Link href="/event-photography" className="underline">event photography</Link> and <Link href="/conference-photography" className="underline">conference coverage</Link>.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Link href="/contact-quote" className="btn-primary px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Request a Video Quote
                </Link>
                <Link href="/discovery-call" className="btn-outline px-10 py-4 text-lg font-semibold rounded-full text-center inline-block">
                  Schedule a Discovery Call
                </Link>
              </div>
            </SectionReveal>
          </div>
        </section>
      </main>
      </div>
    </>
  );
}

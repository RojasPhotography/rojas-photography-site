import type { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionReveal from '../components/SectionReveal';
import FAQSection from '../components/FAQSection';
import BookingScheduler from '../components/BookingScheduler';
import SchemaScript from '../components/SchemaScript';
import { generateFAQSchema, generateBreadcrumbSchema } from '../lib/schema';

const faqs = [
  {
    question: 'Are AI headshots good enough for LinkedIn in 2026?',
    answer:
      'For most professionals in client-facing roles — attorneys, healthcare providers, executives, financial advisors, real estate agents — AI headshots fall short. The core problem is likeness accuracy: the best-reviewed tools still generate faces that are 90–95% accurate, which triggers the uncanny valley response in viewers. That said, an AI headshot is a meaningful improvement over a blurry selfie for someone who has no professional photo at all.',
  },
  {
    question: 'Can employers or recruiters tell if a headshot is AI-generated?',
    answer:
      'Survey data from 500 recruiting professionals found recruiters correctly identified AI headshots only 39.5% of the time — barely better than a coin flip. However, 80% of those recruiters believed they had detected AI accurately, meaning they are highly overconfident. The risk is not detection — it is suspicion. A recruiter who is not sure but suspects AI will respond negatively, even if they are wrong.',
  },
  {
    question: 'How much do AI headshots cost compared to professional headshots?',
    answer:
      'AI headshot tools range from free (Canva) to $29–$69 for premium tools like Aragon AI or Secta Labs. Professional headshots at Rojas Photography cost $150 for the session and $150 per final edited image. The cost per AI image is roughly $0.20–$1.00, versus $150 for a professionally edited image. The question is not which is cheaper — it is which one your career can afford to get wrong.',
  },
  {
    question: 'What are the most common problems with AI-generated headshots?',
    answer:
      'The most consistently reported issues across honest reviews of AI headshot tools are: plastic-looking skin with no pore texture, eye asymmetry and a lack of natural catchlights (making eyes look lifeless), clothing distortion (warped collars, misshapen lapels), ear artifacts, teeth problems (extra teeth or fused teeth), and likeness failure where the generated face does not reliably look like the person who uploaded photos. The underlying cause is that AI generates faces by pattern-matching to training data — it does not photograph reality.',
  },
  {
    question: 'Are AI headshots allowed on LinkedIn?',
    answer:
      'LinkedIn policy as of 2025 permits AI-enhanced or AI-generated photos, but states the photo must reflect your actual likeness. Photos that do not comply may be removed. The policy is broad, but the practical risk is not platform enforcement — it is that an AI headshot that does not look like you creates a mismatch when prospects or hiring managers join a video call, undermining trust before the conversation starts.',
  },
  {
    question: 'Do AI headshots have racial bias?',
    answer:
      'Yes, extensively documented. A 2024 JAMA Network Open study analyzing 1,000 AI-generated physician headshots found 82% depicted White physicians versus 63% of the actual US physician workforce, and 93% depicted males versus 62% of the actual workforce. Three of five platforms produced zero images of Latino physicians. AI tools frequently lighten skin tones and alter facial features when generating "professional" images, defaulting to a Eurocentric ideal. This disproportionately fails professionals of color.',
  },
  {
    question: 'When are AI headshots actually acceptable to use?',
    answer:
      'AI headshots are a reasonable choice for: internal company directories where no clients will see the photo, as a temporary placeholder while saving for a professional session, for entry-level job seekers with no budget whose only alternative is a blurry selfie, and for non-client-facing roles. They are not recommended for LinkedIn profiles in client-facing industries, executive or leadership roles, medical residency applications (ERAS), legal directories, or any context where your headshot will be seen before an in-person meeting.',
  },
  {
    question: 'What does a professional headshot photographer do that AI cannot?',
    answer:
      'A professional photographer coaches your expression in real time — guiding the subtle micro-expressions that convey trust, warmth, and authority. This requires a conversation, not an algorithm. A photographer reads your body language, adjusts lighting to sculpt your face with real shadows and catchlights, tailors the session to your industry and brand, advises on wardrobe, and creates a result that matches your actual appearance when someone meets you in person. None of this can be replicated by uploading selfies to an AI tool.',
  },
  {
    question: 'Why do AI headshots look fake or "off"?',
    answer:
      'The uncanny valley effect: AI headshots exist in a zone that is almost — but not quite — human. Specific technical causes include flat contrast mapping that produces plastic-looking skin with no pores or texture, eyes that lack natural light reflections (catchlights), subtle asymmetries that do not match a real face, and the absence of genuine micro-expressions. Real photographs capture light interacting with real surfaces. AI generates an approximation of what a face should look like — and the human brain detects the difference in under 100 milliseconds.',
  },
  {
    question: 'How long does a professional headshot session take?',
    answer:
      'A professional headshot session at Rojas Photography takes 60–90 minutes. That includes a brief consultation before the shoot, multiple wardrobe changes, full expression and posing coaching throughout, and review of images before you leave. Final edited images are delivered within 48 hours. Most professionals update their headshot annually or every other year.',
  },
  {
    question: 'Are AI headshot tools safe for my privacy?',
    answer:
      'There are real privacy risks. AI headshot tools require uploading 10–25 photos of your face, which constitutes biometric data regulated under GDPR and CCPA. Unlike passwords, your face cannot be changed if compromised. Free and low-cost tools frequently monetize by using uploaded images for model training or selling data to third parties. HeadshotPro revised its terms of service after user backlash over data practices. 27% of organizations have banned generative AI tools entirely over privacy concerns.',
  },
  {
    question: 'How much do professional headshots cost at Rojas Photography?',
    answer:
      'Rojas Photography charges $150 for the session and $150 per final edited image, with no minimums. Students pay $150 for the session and one edited image combined. On-site team headshots are priced per person with custom quotes based on team size. All sessions include unlimited wardrobe changes, real-time coaching, and 48-hour delivery.',
  },
];

export const metadata: Metadata = {
  title: 'AI Headshots vs. Professional Headshots: The Honest 2026 Guide',
  description:
    'Recruiters detected AI headshots only 39% of the time — but that\'s not the real risk. The data-backed 2026 breakdown, including when AI headshots are actually acceptable.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://rojasphotography.net/ai-headshots-vs-professional-headshots',
  },
  openGraph: {
    title: 'AI Headshots vs. Professional Headshots: The Honest 2026 Comparison',
    description:
      'Recruiter research, side-by-side quality comparisons, and honest scoring — the complete 2026 breakdown of AI vs. professional headshots, including when AI is actually fine.',
    url: 'https://rojasphotography.net/ai-headshots-vs-professional-headshots',
    type: 'article',
    images: [
      {
        url: '/images/Hero Image1.jpg',
        alt: 'Professional headshots by Rojas Photography — Modesto, CA',
      },
    ],
  },
};

export default function AIHeadshotsVsProfessionalPage() {
  return (
    <>
      <SchemaScript schema={generateFAQSchema(faqs)} />
      <SchemaScript
        schema={generateBreadcrumbSchema([
          { name: 'Home', url: 'https://rojasphotography.net' },
          { name: 'Resources', url: 'https://rojasphotography.net' },
          {
            name: 'AI Headshots vs. Professional Headshots',
            url: 'https://rojasphotography.net/ai-headshots-vs-professional-headshots',
          },
        ])}
      />

      <div className="min-h-screen bg-white">
        <HeroSection
          image="/images/Hero Image1.jpg"
          title="AI Headshots vs. Professional Headshots: The Honest 2026 Comparison"
          tag="2026 Guide | Rojas Photography"
          objectPosition="center 30%"
          fullHeight={false}
        >
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
            We tested the top AI tools, reviewed the recruiter data, and talked to professionals who tried both. Here is what actually matters for your career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#the-honest-answer"
              className="bg-white text-[var(--color-primary-dark)] hover:bg-gray-100 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Read the Comparison
            </Link>
            <Link
              href="#book-session"
              className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block"
            >
              Book a Real Session
            </Link>
          </div>
        </HeroSection>

        <main id="main-content">

          {/* THE SHORT ANSWER — AEO anchor */}
          <section id="the-honest-answer" className="py-16 md:py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">
                  The Short Answer
                </h2>
                <p className="text-center text-[var(--color-text-muted)] mb-10 text-lg">
                  For professionals who want a direct answer before the deep dive.
                </p>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    <strong className="text-[var(--color-text-dark)]">AI headshots have improved significantly.</strong> The best tools in 2026 produce results that 60% of recruiters cannot reliably identify as AI-generated. For low-stakes, non-client-facing use — an internal company directory, a placeholder while you save up — they are a real step up from a blurry selfie.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    <strong className="text-[var(--color-text-dark)]">But for most professionals in client-facing roles, they fall short</strong> — not because the technology is primitive, but because of what photography is actually for. A headshot&apos;s job is to create human connection at a distance. In the 100 milliseconds it takes to form a first impression, 38% of viewers describe AI headshots as <em>soulless.</em> That word — soulless — is a devastating indictment of a photo whose entire purpose is human connection.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed">
                    <strong className="text-[var(--color-text-dark)]">The question is not which is cheaper.</strong> It is which one your career can afford to get wrong.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* HOW AI HEADSHOT TOOLS WORK + COMPARISON TABLE */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  How AI Headshot Tools Work
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Every major AI headshot tool follows the same basic process — and shares the same core limitations.
                </p>
              </SectionReveal>

              <SectionReveal>
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                  {[
                    {
                      step: '1',
                      title: 'You Upload Selfies',
                      desc: 'Upload 10–25 casual photos of your face. More photos typically means better likeness accuracy — though results vary dramatically by tool.',
                    },
                    {
                      step: '2',
                      title: 'AI Trains on Your Face',
                      desc: 'The tool trains a lightweight AI model on your uploaded images — a process that takes anywhere from 40 minutes to 4 hours depending on the platform.',
                    },
                    {
                      step: '3',
                      title: 'It Generates Images',
                      desc: 'The tool generates 40–300+ images in various "professional" styles. You select the best ones. What you receive is not a photograph — it is a synthetic image approximating your face.',
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="rounded-xl p-8 border border-gray-100 bg-white h-full flex flex-col"
                    >
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm mb-4">
                        {item.step}
                      </div>
                      <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-3">{item.title}</h3>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal>
                <h3 className="text-2xl font-bold text-[var(--color-text-dark)] mb-6 text-center">
                  Top AI Headshot Tools Compared (2026)
                </h3>
                <div className="overflow-x-auto rounded-xl border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-[var(--color-bg-warm)] border-b border-gray-200">
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Tool</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Price</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Delivery</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">Images</th>
                        <th className="text-left px-5 py-4 font-bold text-[var(--color-text-dark)]">What Reviewers Say</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        {
                          tool: 'Aragon AI',
                          price: '$29–$69',
                          delivery: '~45 min',
                          images: '40–200',
                          note: '"Results don\'t look like me" — likeness accuracy criticized by independent reviewers',
                        },
                        {
                          tool: 'Secta Labs',
                          price: '$49',
                          delivery: '~2 hrs',
                          images: '300+',
                          note: 'Best-rated for facial accuracy; hand and neck proportion issues still noted',
                        },
                        {
                          tool: 'HeadshotPro',
                          price: '$29',
                          delivery: '1–4 hrs',
                          images: '40–120',
                          note: 'Looks like "a heavily botoxed version" of the subject — popular for team HR use',
                        },
                        {
                          tool: 'BetterPic',
                          price: '$35+',
                          delivery: '~1 hr',
                          images: '20+',
                          note: '4K resolution output; clothing distortion (warped collars, misshapen lapels) noted',
                        },
                        {
                          tool: 'Try It On AI',
                          price: '$21',
                          delivery: '<40 min',
                          images: '100+',
                          note: 'Independent reviewer: extra teeth generated, strange artifacts, "would not recommend"',
                        },
                        {
                          tool: 'Remini',
                          price: 'Free–$10',
                          delivery: '<1 hr',
                          images: 'Varies',
                          note: 'Originally a photo enhancement app; low barrier to entry but inconsistent quality',
                        },
                        {
                          tool: 'Canva AI',
                          price: 'Free',
                          delivery: 'Instant',
                          images: 'Varies',
                          note: 'Single-photo input; lowest quality; useful only as a quick placeholder',
                        },
                      ].map((row) => (
                        <tr key={row.tool} className="hover:bg-gray-50 transition-colors">
                          <td className="px-5 py-4 font-semibold text-[var(--color-text-dark)]">{row.tool}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.price}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.delivery}</td>
                          <td className="px-5 py-4 text-[var(--color-text-body)]">{row.images}</td>
                          <td className="px-5 py-4 text-[var(--color-text-muted)] text-xs leading-relaxed max-w-xs">{row.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-[var(--color-text-muted)] mt-4 text-center">
                  Independent review sources: Briefcase Coach, Entrepreneur.com, Capturely, Secta Labs comparison (2025–2026)
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* THE 7 REAL PROBLEMS */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  The 7 Real Problems With AI Headshots
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  These are not hypothetical complaints. They are the consistent findings across every honest independent review published in 2025–2026.
                </p>
              </SectionReveal>

              <div className="space-y-5">
                {[
                  {
                    title: 'The Uncanny Valley Problem',
                    desc: 'AI headshots sit in the uncanny valley — the psychological discomfort triggered when something looks almost, but not quite, human. The brain detects this mismatch in under 100 milliseconds and registers it as unease, not connection. In a blind LinkedIn poll of 1,600 people, 38% described AI-generated professional photos as "soulless." That is not a subjective aesthetic preference — it is a trust failure.',
                  },
                  {
                    title: 'Plastic Skin & Lost Texture',
                    desc: 'AI algorithms use flat contrast mapping instead of rendering real skin. The result is skin that looks polished, waxy, or heavily Botoxed — no pores, no texture variation, no vellus hair. Reviewers across every major tool flag this consistently. Human viewers detect this even when they cannot articulate why the image feels off.',
                  },
                  {
                    title: 'Eye Asymmetry & Dead Eyes',
                    desc: 'Pupils rendered at different sizes, one eye positioned slightly higher than the other, and most critically — the absence of natural light reflections (catchlights) that make real eyes look alive. Eyes are the primary trust signal in a headshot. AI-generated eyes lack the subtle life that comes from photographing a real person.',
                  },
                  {
                    title: 'Clothing Distortion',
                    desc: 'AI has persistent difficulty rendering fabric. Collars appear crooked, suit lapels warp, fabrics do not drape naturally. Some tools digitally overlay clothing onto the generated face — which produces the warped-collar and misshapen-lapel artifacts reviewers consistently flag. Your professionalism is signaled in part by how your clothing fits. AI gets this wrong.',
                  },
                  {
                    title: 'Likeness Failure',
                    desc: 'The most universally cited complaint: the person generated often does not reliably look like the person who uploaded the photos. Reviewers describe results as "a wax figure that is 95% accurate but somehow makes you question your own face." Even the top-rated tool (Secta Labs) notes hand and neck proportion issues. For a photo whose entire job is to represent you, this is a fundamental failure.',
                  },
                  {
                    title: 'The Video Call Mismatch',
                    desc: 'When a prospect views an AI headshot and then joins a video call, the face does not match — lighting, skin texture, and proportions are slightly off. This creates a subconscious trust disruption before the conversation starts. You cannot afford that friction at the moment when a client, recruiter, or hiring manager is forming their first real impression of you.',
                  },
                  {
                    title: 'You Get What Everyone Else Got',
                    desc: 'AI tools apply the same "professional" template to every user: dark or blurred background, suit or business attire, neutral expression. The result is a headshot that looks generic — indistinguishable from thousands of other professionals using the same tool. Professional photography is built around differentiating you. AI headshots, by design, make you look like everyone else.',
                  },
                ].map((item, i) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-5 p-7 bg-white rounded-xl border border-gray-100">
                      <div className="w-10 h-10 bg-[var(--color-primary)] rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm mt-0.5">
                        {i + 1}
                      </div>
                      <div>
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg mb-2">{item.title}</h3>
                        <p className="text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT PROFESSIONAL HEADSHOTS ACTUALLY DELIVER */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What a Professional Session Actually Delivers
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  The difference is not the camera. It is everything that happens before, during, and after the shot.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Expression Coaching',
                    desc: 'A professional photographer reads your micro-expressions in real time and coaches the subtle cues that convey trust, warmth, and authority. The difference between a genuine Duchenne smile (which involves the eye muscles) and a posed one is detectable in 100 milliseconds. AI cannot coach you. It can only approximate what a coached expression looks like.',
                  },
                  {
                    title: 'Real Light, Real Catchlights',
                    desc: 'Professional lighting sculpts the face with real shadows and produces natural catchlights — the small light reflections in the eyes that make them look alive and engaged. These are the details that separate a portrait that creates connection from one that triggers unease. They cannot be generated; they have to be photographed.',
                  },
                  {
                    title: 'Brand-Specific Direction',
                    desc: 'Every session begins with a consultation: What is your industry? Who is your audience? Are you projecting authority, approachability, or expertise? A corporate attorney needs a different headshot than a tech startup founder. AI tools have no such consultation — they apply one template to everyone.',
                  },
                  {
                    title: 'The Confidence Effect',
                    desc: 'Being coached, directed, and told "that is the shot" builds genuine confidence. Professionals who invest in a real session use their headshot differently — more prominently, more consistently — because they feel good about it. A $30 AI result that someone feels lukewarm about will sit unused on a hard drive. A photo you are proud of gets used everywhere.',
                  },
                  {
                    title: 'It Actually Looks Like You',
                    desc: 'When a client views your headshot and then meets you in person — or joins a video call — the face matches. The lighting, skin texture, and proportions are consistent. This consistency is the foundation of trust. It communicates that you are exactly who you presented yourself to be.',
                  },
                  {
                    title: 'Wardrobe Guidance',
                    desc: 'Professional photographers advise on clothing before the session: what colors work against which backgrounds, what patterns create visual noise, what necklines frame the face well. AI tools cannot evaluate your real wardrobe — and the resulting clothing distortions in AI headshots are among the most commonly cited quality problems.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="rounded-xl p-8 border border-gray-100 bg-white h-full flex flex-col">
                      <div className="flex items-start gap-3 mb-3">
                        <CheckCircle2
                          size={20}
                          className="text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                        />
                        <h3 className="font-bold text-[var(--color-text-dark)] text-lg">{item.title}</h3>
                      </div>
                      <p className="text-[var(--color-text-body)] leading-relaxed text-sm pl-7">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* THE HONEST CASE FOR AI */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  When AI Headshots Are Actually Fine
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-12 text-lg max-w-2xl mx-auto">
                  Credibility requires honesty. AI headshots are a legitimate choice in specific situations.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-5 mb-10">
                {[
                  {
                    ok: true,
                    title: 'Internal company directories',
                    desc: 'Low stakes, not client-facing, just needs to be recognizable. AI handles volume without scheduling 50 employees.',
                  },
                  {
                    ok: true,
                    title: 'Placeholder while saving up',
                    desc: 'If your current photo is a blurry group shot cropped from a wedding, a $30 AI headshot is a real improvement.',
                  },
                  {
                    ok: true,
                    title: 'Entry-level job seekers with zero budget',
                    desc: 'A $30 AI headshot beats a bathroom selfie every time for someone just entering the workforce.',
                  },
                  {
                    ok: true,
                    title: 'Non-client-facing, low-visibility roles',
                    desc: 'Internal Slack, team wikis, low-visibility professional contexts where the photo will never meet a client\'s critical eye.',
                  },
                  {
                    ok: false,
                    title: 'LinkedIn for client-facing professionals',
                    desc: 'Attorneys, physicians, financial advisors, real estate agents — any role where trust is your primary asset.',
                  },
                  {
                    ok: false,
                    title: 'Executive or leadership roles',
                    desc: 'The higher your role, the higher the scrutiny. A soulless AI headshot signals the opposite of leadership presence.',
                  },
                  {
                    ok: false,
                    title: 'Medical residency applications (ERAS)',
                    desc: 'Program directors review ERAS photos. An AI headshot that does not look like you creates the wrong first impression before your scores are read.',
                  },
                  {
                    ok: false,
                    title: 'Any context where you will meet the viewer in person',
                    desc: 'The mismatch between an AI headshot and your real appearance creates a trust disruption that can derail an otherwise strong first meeting.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.title}>
                    <div className="flex gap-4 p-6 bg-white rounded-xl border border-gray-100">
                      {item.ok ? (
                        <CheckCircle2
                          size={20}
                          className="text-[var(--color-primary)] flex-shrink-0 mt-0.5"
                        />
                      ) : (
                        <XCircle size={20} className="text-red-500 flex-shrink-0 mt-0.5" />
                      )}
                      <div>
                        <p className="font-semibold text-[var(--color-text-dark)] mb-1">{item.title}</p>
                        <p className="text-sm text-[var(--color-text-body)] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          {/* WHAT RECRUITERS ACTUALLY THINK */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  What Recruiters Actually Think
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  A survey of 500 recruiting professionals across tech, finance, healthcare, marketing, and professional services revealed a surprising paradox.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {[
                  {
                    stat: '39.5%',
                    label: 'Recruiter detection accuracy',
                    context: 'Recruiters correctly identified AI headshots only 39.5% of the time — barely better than a coin flip. They are not as good at detecting AI as they think.',
                  },
                  {
                    stat: '80%',
                    label: 'Believed they detected AI accurately',
                    context: '80% of recruiters believed they had detected AI correctly. The gap between confidence and accuracy is the hidden risk: suspicion without proof.',
                  },
                  {
                    stat: '66%',
                    label: 'Would be put off after learning it was AI',
                    context: 'Two-thirds of recruiters said they would be negatively affected by discovering a headshot was AI-generated — even if they could not have detected it themselves.',
                  },
                  {
                    stat: '88%',
                    label: 'Believe candidates should disclose AI use',
                    context: '88% of recruiting professionals believe candidates should disclose when they use AI-generated profile photos. Most do not. The expectation gap is real.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.stat}>
                    <div className="rounded-2xl p-8 bg-[var(--color-bg-warm)] border border-gray-100 h-full">
                      <div className="text-5xl font-bold text-[var(--color-primary)] mb-3">{item.stat}</div>
                      <div className="font-bold text-[var(--color-text-dark)] text-lg mb-3">{item.label}</div>
                      <p className="text-[var(--color-text-body)] text-sm leading-relaxed">{item.context}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100">
                  <p className="text-[var(--color-text-body)] leading-relaxed text-center text-lg">
                    <strong className="text-[var(--color-text-dark)]">The paradox:</strong> Recruiters are bad at detecting AI headshots — but most say they would respond negatively if they found out. The moment a recruiter is suspicious, the damage is done. Suspicion does not require certainty.
                  </p>
                </div>
                <p className="text-xs text-[var(--color-text-muted)] mt-3 text-center">
                  Source: Survey of 500 recruiting professionals, Fotos de Perfil / Apollo Technical (2025)
                </p>
              </SectionReveal>
            </div>
          </section>

          {/* HIDDEN RISKS: BIAS + PRIVACY */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-5xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  The Hidden Risks Nobody Talks About
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  Before uploading your face to an AI tool, two issues deserve serious consideration.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-8">
                <SectionReveal>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <AlertTriangle size={22} className="text-amber-500 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)]">Racial Bias</h3>
                    </div>
                    <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                      A 2024 JAMA Network Open study analyzing 1,000 AI-generated physician headshots found:
                    </p>
                    <ul className="space-y-3 mb-5">
                      {[
                        '82% depicted White physicians (vs. 63% of actual US physician workforce)',
                        '93% depicted males (vs. 62% of actual workforce)',
                        'Three of five platforms produced zero images of Latino physicians',
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                          <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      AI tools frequently lighten skin tones and alter facial features to conform to a Eurocentric ideal. When an MIT student asked an AI tool to make her headshot more &quot;professional,&quot; it returned an image with lighter skin and blue eyes. The technology fails people of color at a structurally higher rate — making &quot;good enough for low-stakes use&quot; a privileged claim.
                    </p>
                  </div>
                </SectionReveal>

                <SectionReveal>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <AlertTriangle size={22} className="text-amber-500 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)]">Privacy Risks</h3>
                    </div>
                    <p className="text-[var(--color-text-body)] leading-relaxed mb-4">
                      Uploading 10–25 photos of your face constitutes biometric data — regulated under GDPR and CCPA. This is not a theoretical concern:
                    </p>
                    <ul className="space-y-3 mb-5">
                      {[
                        'Unlike passwords, your face cannot be changed if compromised',
                        'Free tools frequently monetize by using uploaded images for model training',
                        'HeadshotPro revised its terms of service after user backlash over data practices',
                        '27% of organizations have banned generative AI tools over privacy concerns',
                        'Major financial institutions (Wells Fargo, JPMorgan Chase, Citi) restrict employee use of generative AI',
                      ].map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                          <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-[var(--color-text-body)] text-sm leading-relaxed">
                      Before uploading to any AI headshot tool, read the terms of service carefully — particularly the sections on data usage, model training rights, and data retention.
                    </p>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </section>

          {/* COST COMPARISON */}
          <section className="py-20 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  The Real Cost Comparison
                </h2>
                <p className="text-center text-[var(--color-text-body)] mb-14 text-lg max-w-2xl mx-auto">
                  The price gap is real. But so is the ROI gap.
                </p>
              </SectionReveal>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <SectionReveal>
                  <div className="rounded-2xl border border-gray-200 overflow-hidden h-full">
                    <div className="bg-gray-100 px-8 py-5">
                      <h3 className="text-xl font-bold text-[var(--color-text-dark)]">AI Headshot Tools</h3>
                    </div>
                    <div className="p-8">
                      <div className="text-4xl font-bold text-[var(--color-text-dark)] mb-1">$0–$69</div>
                      <div className="text-[var(--color-text-muted)] mb-6 text-sm">Per session (40–300+ images)</div>
                      <ul className="space-y-3">
                        {[
                          { ok: true, text: 'Fast (40 min – 4 hrs)' },
                          { ok: true, text: 'High image volume (40–300+)' },
                          { ok: true, text: 'No appointment required' },
                          { ok: true, text: 'Low cost per image ($0.20–$1.00)' },
                          { ok: false, text: 'Likeness accuracy inconsistent' },
                          { ok: false, text: 'Plastic skin, dead eyes common' },
                          { ok: false, text: 'Same look as thousands of others' },
                          { ok: false, text: 'No expression coaching' },
                          { ok: false, text: 'Biometric data privacy risk' },
                          { ok: false, text: 'Racial bias documented across platforms' },
                        ].map((item) => (
                          <li key={item.text} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                            {item.ok ? (
                              <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            ) : (
                              <XCircle size={15} className="text-red-400 flex-shrink-0 mt-0.5" />
                            )}
                            {item.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionReveal>

                <SectionReveal>
                  <div className="rounded-2xl border-2 border-[var(--color-primary)] overflow-hidden h-full">
                    <div className="bg-[var(--color-primary)] px-8 py-5">
                      <h3 className="text-xl font-bold text-white">Rojas Photography</h3>
                      <p className="text-white/80 text-sm mt-1">Professional headshots — Modesto, CA</p>
                    </div>
                    <div className="p-8">
                      <div className="text-4xl font-bold text-[var(--color-text-dark)] mb-1">$150</div>
                      <div className="text-[var(--color-text-muted)] mb-6 text-sm">Session + $150 per final edited image</div>
                      <ul className="space-y-3">
                        {[
                          'Actually looks like you',
                          'Real expression coaching throughout',
                          'Professional lighting with natural catchlights',
                          'Unlimited wardrobe changes',
                          'Brand-specific direction for your industry',
                          '48-hour delivery',
                          'Matches your appearance in person and on video calls',
                          'No biometric data risk',
                          'Serves all skin tones and identities equally',
                          '500+ professionals photographed across California',
                        ].map((item) => (
                          <li key={item} className="flex gap-2 text-sm text-[var(--color-text-body)]">
                            <CheckCircle2 size={15} className="text-[var(--color-primary)] flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionReveal>
              </div>

              <SectionReveal>
                <div className="bg-[var(--color-bg-warm)] rounded-xl p-7 border border-gray-100 text-center">
                  <p className="text-[var(--color-text-body)] leading-relaxed text-lg">
                    <strong className="text-[var(--color-text-dark)]">The market agrees:</strong> Despite two years of AI headshot saturation, the professional headshot photography market is growing at 7–9.8% annually through 2033. Demand is not declining. Professionals who tried AI are coming back to real photography because the difference is visible where it matters — in the moment someone decides whether to trust you.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* STORYBRAND GUIDE SECTION — Alfonso */}
          <section className="py-20 px-8 bg-[var(--color-bg-warm)] border-y border-gray-100">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-6">
                  Your Career Deserves Better Than an Algorithm
                </h2>
              </SectionReveal>
              <SectionReveal>
                <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    I have photographed over 500 professionals across California — attorneys, physicians, executives, financial advisors, real estate agents, and medical students applying for residency. I know what it feels like to stand in front of a camera and not know what to do with your face. That moment of uncertainty is exactly why coaching is at the center of every session I run.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-6">
                    Before I was a photographer, I spent 15 years in corporate leadership. I understand what professional credibility looks like — and what undermines it. I know the difference between a headshot that makes someone want to connect with you and one that creates just enough distance to lose the opportunity.
                  </p>
                  <p className="text-lg text-[var(--color-text-body)] leading-relaxed mb-8">
                    If you are weighing AI against a professional session, I am not going to tell you AI is useless. Some situations call for a pragmatic solution. But if your headshot is going to be seen by a client, a recruiter, a program director, or a hiring manager before you ever speak to them — you should be represented by something that looks like you on your best day. Because it is.
                  </p>
                  <div className="flex flex-col sm:flex-row items-center gap-6 pt-2 border-t border-gray-100">
                    <div>
                      <div className="font-bold text-[var(--color-text-dark)]">Alfonso Rojas</div>
                      <div className="text-sm text-[var(--color-text-muted)]">Rojas Photography — Modesto, CA</div>
                      <div className="text-sm text-[var(--color-text-muted)]">15+ years corporate leadership · 500+ professionals photographed · 60+ five-star reviews</div>
                    </div>
                    <Link
                      href="#book-session"
                      className="btn-primary px-8 py-3 text-base font-semibold rounded-full inline-block text-center whitespace-nowrap flex-shrink-0"
                    >
                      Book Your Session — $150
                    </Link>
                  </div>
                </div>
              </SectionReveal>
            </div>
          </section>

          {/* THE STAKES — What Happens If You Don't Act */}
          <section className="py-16 px-8 bg-white">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-10">
                  What Is at Stake
                </h2>
              </SectionReveal>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    stat: '100ms',
                    label: 'Time to form a first impression',
                    desc: 'Princeton University research. The judgment formed in that moment — trustworthy, competent, likable — does not significantly change with more time.',
                  },
                  {
                    stat: '38%',
                    label: 'Describe AI headshots as "soulless"',
                    desc: 'From a blind LinkedIn poll of 1,600 people. A headshot whose entire purpose is human connection cannot afford to trigger this response.',
                  },
                  {
                    stat: '21×',
                    label: 'More LinkedIn profile views with a professional photo',
                    desc: 'LinkedIn\'s own data. Professionals with professional headshots receive 9× more connection requests and 36× more messages.',
                  },
                ].map((item) => (
                  <SectionReveal key={item.stat}>
                    <div className="rounded-2xl p-8 bg-[var(--color-bg-warm)] border border-gray-100 text-center h-full">
                      <div className="text-4xl font-bold text-[var(--color-primary)] mb-2">{item.stat}</div>
                      <div className="font-bold text-[var(--color-text-dark)] mb-3 text-sm">{item.label}</div>
                      <p className="text-[var(--color-text-muted)] text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </section>

          <FAQSection
            faqs={faqs}
            heading="AI Headshots vs. Professional Headshots — Frequently Asked Questions"
          />

          <section id="book-session" className="py-20 px-8 bg-[var(--color-bg-warm)]">
            <div className="max-w-4xl mx-auto">
              <SectionReveal>
                <h2 className="text-3xl md:text-4xl font-bold text-center text-[var(--color-text-dark)] mb-4">
                  Ready for a Headshot That Actually Looks Like You?
                </h2>
                <p className="text-center text-[var(--color-text-muted)] text-lg mb-10">
                  $150 session · $150 per final edited image · No minimums · 48-hour delivery<br />
                  Serving Modesto, Stockton, Fresno, Sacramento & all of Central Valley
                </p>
              </SectionReveal>
              <BookingScheduler height={750} />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

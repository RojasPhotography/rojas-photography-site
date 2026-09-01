import type { Metadata } from 'next';
import Script from 'next/script';
import HeadshotCarousel from '../components/HeadshotCarousel';

export const metadata: Metadata = {
  title: 'Modesto Chamber Exclusive: Headshot Booth Special Rate 2026',
  description: 'Special chamber member pricing for professional headshot booth services. Limited offer through December 31, 2026.',
  robots: 'noindex, nofollow',
  alternates: {
    canonical: 'https://rojasphotography.net/chamber-exclusive-headshot-booth-2026',
  },
};

export default function ChamberExclusiveHeadshotBoothPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {/* Hero: The Problem (Character) */}
      <div className="bg-[#1F6B4D] text-white pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">Your Team Deserves Professional Headshots</h1>
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0">
              LIMITED OFFER
            </div>
          </div>
          <p className="text-lg text-white/90 mb-6">Outdated photos weaken first impressions. A one-day headshot booth fixes that — no travel, no hassle, professional results.</p>
          <p className="text-white/80 text-sm">Chamber-exclusive rate: <strong>25% off</strong> through December 31.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* The Problem Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">The Problem With Outdated Headshots</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-2">External</h3>
              <p className="text-gray-700 text-sm">Clients and prospects judge you in seconds. Old, blurry, or casual photos damage credibility before you say a word.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-2">Internal</h3>
              <p className="text-gray-700 text-sm">Your team feels less professional, less polished. Poor headshots undermine confidence in client meetings and networking.</p>
            </div>
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="font-bold text-gray-900 mb-2">Philosophical</h3>
              <p className="text-gray-700 text-sm">You're a professional organization. Your visual presence should reflect that commitment to excellence.</p>
            </div>
          </div>
        </div>

        {/* The Guide (Credibility) */}
        <div className="bg-[#1F6B4D]/10 p-8 rounded-lg mb-16 border border-[#1F6B4D]/20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Rojas Photography</h2>
          <div className="grid md:grid-cols-2 gap-6 text-gray-700">
            <div className="flex gap-3">
              <span className="text-[#1F6B4D] font-bold text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">500+ Headshots Delivered</p>
                <p className="text-sm">Trusted by executives, attorneys, and corporate teams across Central Valley.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#1F6B4D] font-bold text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">Award-Winning 2026</p>
                <p className="text-sm">California District 22 Small Business of the Year — proven excellence.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#1F6B4D] font-bold text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">60+ Five-Star Reviews</p>
                <p className="text-sm">Clients consistently praise our professionalism and attention to detail.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-[#1F6B4D] font-bold text-xl mt-1">✓</span>
              <div>
                <p className="font-semibold text-gray-900">We Come to You</p>
                <p className="text-sm">Professional studio on wheels — no travel, no disruption to your day.</p>
              </div>
            </div>
          </div>
        </div>

        {/* The Plan: How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="space-y-6">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F6B4D] text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We Set Up (1 Hour Before)</h3>
                <p className="text-gray-700">Professional studio setup at your location. Lighting, backdrop, and camera ready. Your team continues working — no downtime.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F6B4D] text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">They Shine (4 Hours)</h3>
                <p className="text-gray-700">Each person gets a quick, professional coaching session. We handle the technical side — they just show up. No awkwardness, no retakes. Up to 50 people photographed.</p>
              </div>
            </div>
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#1F6B4D] text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">We Perfect & Deliver (Same Day)</h3>
                <p className="text-gray-700">Professional retouching on every image. Private gallery delivered the same day. Everyone has polished headshots ready to use immediately.</p>
              </div>
            </div>
          </div>
        </div>

        {/* What's Included */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Professional Studio Setup</p>
                  <p className="text-gray-600 text-sm">Lighting, backdrop, cameras — everything we bring</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Up to 50 People</p>
                  <p className="text-gray-600 text-sm">We maintain quality without rushing</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Professional Retouching</p>
                  <p className="text-gray-600 text-sm">Every image hand-edited for polish and perfection</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Same-Day Delivery</p>
                  <p className="text-gray-600 text-sm">Proofs edited and ready in your private gallery</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Pricing & CTA */}
          <div className="space-y-6">
            <div className="bg-[#1F6B4D] text-white p-8 rounded-lg">
              <p className="text-sm uppercase tracking-wide text-white/80 mb-2">Chamber Member Rate</p>
              <p className="text-5xl font-bold mb-2">$1,875</p>
              <p className="text-white/90 mb-6">for 4 hours</p>
              <p className="text-sm border-t border-white/20 pt-4 text-white/70">
                <span className="line-through">Regular rate: $2,500</span>
              </p>
              <p className="text-sm mt-4 font-semibold text-yellow-300">Save $625 with this exclusive offer</p>
            </div>

            {/* Success Outcome */}
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="font-bold text-gray-900 mb-3">What You Gain</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ Confident, polished team image</li>
                <li>✓ Professional photos ready to use immediately</li>
                <li>✓ Stronger first impressions with clients & prospects</li>
                <li>✓ Unified, professional brand presence</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Failure Risk (What They Lose) */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded mb-16">
          <h3 className="font-bold text-gray-900 mb-3">What Happens If You Wait</h3>
          <p className="text-gray-700 mb-3">Outdated photos continue to undermine your professional reputation. Every client meeting, every LinkedIn profile, every networking event — people form impressions based on visuals. Poor headshots signal: "We're not as serious about this as we should be."</p>
          <p className="text-gray-700 text-sm"><strong>Plus:</strong> This special rate expires December 31. After that, the booth service returns to full price ($2,500). Next year, when you finally decide to upgrade, you'll pay $625 more.</p>
        </div>

        {/* Gallery Section */}
        <div className="border-t pt-12 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">The Rojas Look</h2>
          <p className="text-gray-600 mb-8">Professional headshots our team has delivered.</p>
          <HeadshotCarousel />
        </div>

        {/* Booking Section */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Book Your Session</h2>
          <p className="text-gray-600 mb-8">
            Use the form below to check availability and schedule your team headshot booth session.
          </p>

          {/* 17hats Embed */}
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <iframe
              name="hats_scheduler"
              style={{
                margin: '0',
                width: '100%',
                height: '600px',
                border: 'none',
              }}
              src="https://Rojasheadshots.17hats.com/p#/scheduling/3Si7MOmkCkJr?embed=true&tp=false&hide_desc=false"
              title="17hats scheduling form"
            />
          </div>
          <Script src="https://Rojasheadshots.17hats.com/vendor/iframeSizer.min.js" strategy="afterInteractive" />
        </div>

        {/* Final CTA / Footer */}
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-sm text-gray-600 mb-4">*Chamber membership verification required to redeem this rate.</p>
          <p className="text-lg text-gray-700 mb-6"><strong>Ready to transform your team's professional image?</strong></p>
          <p className="text-gray-600 mb-6">Questions or logistics to discuss? We're here to help.</p>
          <p className="text-sm text-gray-600">Call <a href="tel:2093803727" className="text-[#1F6B4D] font-semibold hover:underline">209.380.3727</a> or email <a href="mailto:alfonso@rojasphotography.net" className="text-[#1F6B4D] font-semibold hover:underline">alfonso@rojasphotography.net</a></p>
        </div>
      </div>
    </div>
  );
}

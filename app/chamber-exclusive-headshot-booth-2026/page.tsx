import type { Metadata } from 'next';
import Script from 'next/script';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
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
      {/* Header */}
      <div className="bg-[#1F6B4D] text-white pt-24 pb-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start justify-between gap-4 mb-6">
            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">Headshots For Entire Team</h1>
            </div>
            <div className="bg-yellow-400 text-black px-4 py-2 rounded-full font-bold text-sm whitespace-nowrap flex-shrink-0">
              LIMITED OFFER
            </div>
          </div>
          <p className="text-lg text-white/90">Special Pricing for Modesto Chamber Members</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Offer Details */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: What's Included */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Professional Studio Setup</p>
                  <p className="text-gray-600">Lighting, backdrop, cameras — everything we need</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Up to 50 Participants</p>
                  <p className="text-gray-600">Maintain quality and keep the flow moving smoothly</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Professional Retouching</p>
                  <p className="text-gray-600">Every image is edited for a polished, professional look</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#1F6B4D] font-bold text-lg mt-1">✓</span>
                <div>
                  <p className="font-semibold text-gray-900">Same-Day Proofs & Delivery</p>
                  <p className="text-gray-600">Images edited and ready the same day via private gallery</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Right: Pricing & Details */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-[#1F6B4D] text-white p-8 rounded-lg">
              <p className="text-sm uppercase tracking-wide text-white/80 mb-2">Chamber Member Rate</p>
              <p className="text-5xl font-bold mb-2">$1,875</p>
              <p className="text-white/90 mb-4">for 4 hours</p>
              <p className="text-sm border-t border-white/20 pt-4">
                <span className="line-through text-white/60">Regular rate: $2,500</span>
              </p>
            </div>

            {/* Details Box */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h3 className="font-bold text-gray-900 mb-4">Important Details</h3>
              <ul className="space-y-3 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">Calendar:</span> Limited through December 31, 2026
                </li>
                <li>
                  <span className="font-semibold">Service Area:</span> Central Valley, 15-mile radius of Modesto (extended areas available)
                </li>
                <li>
                  <span className="font-semibold">Requirement:</span> Verification of Chamber membership
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Have questions?</span> Call us at{' '}
                <a href="tel:2093803727" className="text-[#1F6B4D] font-bold hover:underline">
                  209.380.3727
                </a>
              </p>
            </div>
          </div>
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

        {/* Footer Note */}
        <div className="mt-12 pt-8 border-t text-center text-sm text-gray-600">
          <p>*Chamber membership verification required to redeem this rate.</p>
          <p className="mt-2">Questions? Call <a href="tel:2093803727" className="text-[#1F6B4D] font-semibold hover:underline">209.380.3727</a> or email <a href="mailto:hello@rojasphotography.net" className="text-[#1F6B4D] font-semibold hover:underline">hello@rojasphotography.net</a></p>
        </div>
      </div>
    </div>
  );
}

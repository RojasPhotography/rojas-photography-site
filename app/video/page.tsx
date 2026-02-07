'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function VideoServicesPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Montserrat', sans-serif;
        }
        a:focus, button:focus {
          outline: 3px solid #1a5c3c;
          outline-offset: 2px;
        }
      `}</style>

      {/* Skip to Main Content Link */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-emerald-900 focus:text-white focus:text-lg focus:font-bold">
        Skip to main content
      </a>

            {/* Navigation */}
      <nav className="bg-white text-black px-6 md:px-8 py-4 md:py-6 fixed w-full top-0 z-50 border-b border-gray-200" role="navigation" aria-label="Main navigation">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout */}
          <div className="hidden md:flex justify-between items-center gap-12">
            <a href="/" className="flex items-center flex-shrink-0">
              <img src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography - Professional Headshots Modesto" className="h-10" />
            </a>
            
            {/* Desktop Navigation */}
            <div className="flex gap-12">
              <a href="/#services" className="font-medium hover:text-emerald-800 transition text-sm focus:outline-none">Services</a>
              <a href="/about-rojas-photography" className="font-medium hover:text-emerald-800 transition text-sm focus:outline-none">About</a>
              <a href="/contact-quote" className="font-medium hover:text-emerald-800 transition text-sm focus:outline-none">Contact</a>
            </div>
            
            {/* CTA Button */}
            <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 px-8 py-3 text-white font-semibold transition text-sm flex-shrink-0 whitespace-nowrap focus:outline-none inline-block rounded" aria-label="Schedule a discovery call">
              Schedule Discovery Call
            </a>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex flex-col items-center gap-0">
            <a href="/" className="flex items-center flex-shrink-0 mb-1">
              <img src="/images/Rojas Photography Logo 24.6.png" alt="Rojas Photography - Professional Headshots Modesto" className="h-10" />
            </a>
            
            {/* Mobile Navigation - Centered */}
            <div className="flex flex-col items-center gap-0 w-full">
              <a href="/#services" className="font-medium hover:text-emerald-800 transition text-sm px-3 py-0.5 focus:outline-none">Services</a>
              <a href="/about-rojas-photography" className="font-medium hover:text-emerald-800 transition text-sm px-3 py-0.5 focus:outline-none">About</a>
              <a href="/contact-quote" className="font-medium hover:text-emerald-800 transition text-sm px-3 py-0.5 focus:outline-none">Contact</a>
            </div>
            
            {/* CTA Button */}
            <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 px-6 py-1.5 text-white font-semibold transition text-sm whitespace-nowrap focus:outline-none inline-block rounded w-full text-center mt-1" aria-label="Schedule a discovery call">
              Schedule Discovery Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Video Services page">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <div className="mb-6">
            <span className="text-emerald-200 font-bold text-xs md:text-sm tracking-widest">PROFESSIONAL VIDEO PRODUCTION & DRONE VIDEOGRAPHY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Video Services for Your Business
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            High-impact video production including corporate videos, client testimonials, aerial drone videography, and promotional content. Professional videos that engage and convert.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Service Details */}
        <section className="py-24 px-8 bg-white" aria-labelledby="service-details-heading">
          <div className="max-w-6xl mx-auto">
            {/* Video Services Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Video Production Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/BBSI-Corp-Video.jpg" 
                    alt="Corporate video production for business marketing" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/ALCC Drone 03.jpg" 
                    alt="Aerial drone videography and footage" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/BBSI-Video-Freeze.jpg" 
                    alt="Client testimonial videos and interviews" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons - Both Options */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for video services">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your video project">
                Schedule a Discovery Call
              </a>
            </div>

            {/* What's Included */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 id="service-details-heading" className="text-4xl font-bold text-black mb-16 text-center">What We Offer</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Corporate Video Production</h3>
                    <p className="text-gray-700 font-medium">Professional business videos for websites, marketing campaigns, and corporate communications. From concept to final edit, we create compelling video content that tells your story.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Client Testimonial Videos</h3>
                    <p className="text-gray-700 font-medium">Powerful video testimonials from satisfied clients. We guide the process, handle filming, and deliver professionally edited videos that build trust and credibility with prospects.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Aerial Drone Videography</h3>
                    <p className="text-gray-700 font-medium">Stunning aerial footage using Part 107 certified drone operators. Perfect for real estate, commercial properties, events, and promotional videos. Unique perspectives that stand out.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Event Video Coverage</h3>
                    <p className="text-gray-700 font-medium">Professional video documentation of your corporate events. Highlights reels, complete coverage, or edited recap videos. Capture the energy and impact of your event in video format.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professional Editing & Motion Graphics</h3>
                    <p className="text-gray-700 font-medium">High-quality editing, color grading, and motion graphics. Custom music, titles, transitions, and effects. Polished, professional videos ready for any platform.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Multi-Format Delivery</h3>
                    <p className="text-gray-700 font-medium">Videos optimized for all platforms. Full resolution files for websites, social media versions (Instagram, TikTok, LinkedIn), and broadcast quality. Ready to use immediately.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Concept & Script Development</h3>
                    <p className="text-gray-700 font-medium">We help develop your video concept and create scripts. Whether you have a clear vision or need creative direction, we guide the entire process from planning to final delivery.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Flexible Project Scopes</h3>
                    <p className="text-gray-700 font-medium">From 30-second social media clips to full-length corporate videos. We handle projects of any length and complexity. Custom solutions for your specific video needs.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pricing</h3>
                <p className="text-gray-700 font-medium mb-6">Custom pricing based on project scope, length, and production needs.</p>
                <p className="text-gray-600 font-medium text-sm">Contact us for a personalized quote. We'll discuss your video vision and create a package that fits your budget and timeline.</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
                <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for video services">
                  Request a Quote
                </a>
                <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your video project">
                  Schedule a Discovery Call
                </a>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Video Production Process</h2>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">1. Planning</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We discuss your video goals, vision, target audience, and key messages. Understanding your objectives ensures we create videos that achieve your business goals.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">2. Production</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Professional filming with high-quality cameras, audio equipment, and lighting. Whether on-location or in-studio, we capture everything you need for a polished final product.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">3. Editing</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Professional editing, color grading, sound design, and motion graphics. We create compelling videos with professional transitions, music, and effects.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">4. Delivery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Videos delivered in multiple formats optimized for different platforms. Ready to use on websites, social media, presentations, and marketing campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Video Types */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h2 className="text-3xl font-bold text-black mb-8">Video Services We Provide</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg text-black mb-4">Corporate & Marketing Videos</h4>
                  <ul className="text-gray-700 font-medium space-y-2">
                    <li>✓ Company overview and brand videos</li>
                    <li>✓ Product demonstration videos</li>
                    <li>✓ How-to and educational videos</li>
                    <li>✓ Training and instructional videos</li>
                    <li>✓ Social media promotional videos</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-black mb-4">Aerial & Specialty Videos</h4>
                  <ul className="text-gray-700 font-medium space-y-2">
                    <li>✓ Drone videography and aerial footage</li>
                    <li>✓ Real estate property tours</li>
                    <li>✓ Commercial and construction documentation</li>
                    <li>✓ Event highlights and recap videos</li>
                    <li>✓ Testimonial and interview videos</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Rojas */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose Rojas Photography for Video Services</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Part 107 Certified Drone Operator</h4>
                    <p className="text-gray-700 font-medium">Professional, licensed drone pilot. Safe, legal aerial videography. Stunning perspectives you can't get any other way.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Professional Equipment & Expertise</h4>
                    <p className="text-gray-700 font-medium">High-quality cameras, audio equipment, lighting, and editing software. Professional expertise from filming to final delivery.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Corporate Experience</h4>
                    <p className="text-gray-700 font-medium">We understand business video needs. Experience creating videos for corporate clients, marketing campaigns, and professional communications.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Fast Delivery & Flexibility</h4>
                    <p className="text-gray-700 font-medium">Quick turnaround on projects. Flexible scheduling and project scopes. Ready to work with your timeline and budget.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-8 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="testimonials-heading" className="text-4xl font-bold text-center mb-16 text-black">
              What Clients Say About Our Video Work
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Business Owner</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Video Project Client</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Alfonso and Niomi produced a professional corporate video that exceeded our expectations. The production quality and editing were excellent. Highly recommend for any business video needs."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Marketing Manager</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Corporate Client</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "The aerial drone footage for our property was absolutely stunning. Professional, timely, and exactly what we needed for our marketing. Great experience working with them."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for video services">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your video project">
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-5xl font-bold mb-8 text-black">Ready for Professional Video Services?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Let's create compelling video content that engages your audience, builds credibility, and drives business results.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Request a quote for video services">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Schedule a discovery call to discuss your video project">
                Schedule a Discovery Call
              </a>
            </div>

            <p className="text-gray-600 font-medium mt-8">
              Or call us at <a href="tel:2093803727" className="text-emerald-900 font-bold hover:text-emerald-950 focus:outline-none">209-380-3727</a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-8 border-t border-emerald-900" role="contentinfo">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="text-white font-bold text-xl mb-6">ROJAS PHOTOGRAPHY</h4>
              <p className="font-medium leading-relaxed">Premium professional corporate headshots and business photography for the Central Valley and beyond.</p>
            </div>
            <nav>
              <h4 className="text-white font-bold mb-6">SERVICES</h4>
              <ul className="font-medium space-y-3">
                <li><a href="/premium-headshots" className="hover:text-emerald-700 transition focus:outline-none">In-Studio Headshots</a></li>
                <li><a href="/on-site-photography" className="hover:text-emerald-700 transition focus:outline-none">On-Site Photography</a></li>
                <li><a href="/commercial" className="hover:text-emerald-700 transition focus:outline-none">Commercial Photography</a></li>
                <li><a href="/video" className="hover:text-emerald-700 transition focus:outline-none">Video Services</a></li>
                <li><a href="/event-photography" className="hover:text-emerald-700 transition focus:outline-none">Event Photography</a></li>
                <li><a href="/video" className="hover:text-emerald-700 transition focus:outline-none">Drone Services - Part 107 Certified</a></li>
              </ul>
            </nav>
            <nav>
              <h4 className="text-white font-bold mb-6">LOCATIONS</h4>
              <ul className="font-medium space-y-3">
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Modesto</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Stockton</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Fresno</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Turlock</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Sacramento</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">East Bay</a></li>
              </ul>
            </nav>
            <div>
              <h4 className="text-white font-bold mb-6">CONTACT</h4>
              <p className="font-medium mb-2"><a href="tel:2093803727" className="hover:text-emerald-700 transition focus:outline-none">209-380-3727</a></p>
              <p className="font-medium mb-4"><a href="mailto:alfonso@rojasphotography.net" className="hover:text-emerald-700 transition focus:outline-none">alfonso@rojasphotography.net</a></p>
              <p className="font-medium">Modesto, CA</p>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8 text-center font-medium">
            <p>&copy; 2026 Rojas Photography. Professional Corporate Headshots in Modesto, Stockton, Fresno, Turlock, Sacramento & East Bay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
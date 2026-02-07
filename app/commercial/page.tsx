'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function CommercialPhotographyPage() {
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
      <section className="relative w-full min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Commercial Photography service page">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <div className="mb-6">
            <span className="text-emerald-200 font-bold text-xs md:text-sm tracking-widest">BRAND IMAGERY & COMMERCIAL PHOTOGRAPHY</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Commercial Photography for Your Business
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            High-impact brand imagery and commercial photography that showcases your products, spaces, and business story. Professional visuals that drive engagement and sales.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Service Details */}
        <section className="py-24 px-8 bg-white" aria-labelledby="service-details-heading">
          <div className="max-w-6xl mx-auto">
            {/* Commercial Photography Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Commercial Photography Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/MOVE Stanislaus-(3 of 28).jpg" 
                    alt="Professional product photography for business marketing" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/DoctorOffice 4.jpg" 
                    alt="Commercial interior and architectural photography" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/MOVE Stanislaus-(17 of 28).jpg" 
                    alt="Business brand photography and lifestyle imagery" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons - Both Options */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for commercial photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your commercial photography project">
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
                    <h3 className="font-bold text-lg text-black mb-2">Product Photography</h3>
                    <p className="text-gray-700 font-medium">Professional product shots for e-commerce, catalogs, and marketing materials. We showcase your products in the best light to drive sales and engagement.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Architectural & Interior Photography</h3>
                    <p className="text-gray-700 font-medium">Professional building, office, and interior space photography. Perfect for real estate marketing, business websites, and commercial listings.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Brand & Lifestyle Photography</h3>
                    <p className="text-gray-700 font-medium">Authentic brand storytelling through lifestyle imagery. Capture your business culture, team in action, and brand values in compelling visuals.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Website & Marketing Imagery</h3>
                    <p className="text-gray-700 font-medium">Custom photography for your website, social media, and marketing campaigns. Professional visuals that engage your audience and build your brand.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professional Editing & Retouching</h3>
                    <p className="text-gray-700 font-medium">All images are professionally edited and color-corrected for consistency across your marketing materials. Perfect for publications and online use.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Fast Turnaround & Delivery</h3>
                    <p className="text-gray-700 font-medium">Professional images delivered within 48-72 hours. Ready to use immediately on your website, social media, and marketing platforms.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pricing</h3>
                <p className="text-gray-700 font-medium mb-6">Custom pricing based on project scope and requirements.</p>
                <p className="text-gray-600 font-medium text-sm">Contact us for a personalized quote. We'll discuss your vision and create a package that works for your budget and timeline.</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
                <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for commercial photography">
                  Request a Quote
                </a>
                <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your commercial photography project">
                  Schedule a Discovery Call
                </a>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Process</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">1. Project Discovery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We start with a detailed conversation about your vision, goals, and the message you want to communicate. Understanding your business, target audience, and brand ensures we capture exactly what you need.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">2. Professional Execution</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We bring professional equipment, lighting, and expertise to capture compelling commercial imagery. Whether it's product shots, interior photography, or brand storytelling, we deliver polished, professional results.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">3. Editing & Delivery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Your images are professionally edited, color-corrected, and delivered within 48-72 hours. Ready to use immediately on your website, social media, marketing campaigns, and business materials.
                  </p>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h2 className="text-3xl font-bold text-black mb-8">Who This Service Is For</h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                Commercial Photography is perfect for any business that needs professional visual content. Whether you're a retail business, real estate company, restaurant, healthcare provider, or service-based company, professional imagery elevates your brand and drives business results.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                If you need compelling photos for your website, social media, marketing campaigns, or commercial listings, we have the expertise and equipment to deliver exactly what you need.
              </p>
            </div>

            {/* Why Choose Rojas */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose Rojas Photography for Commercial Work</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Corporate Experience</h4>
                    <p className="text-gray-700 font-medium">We understand business. 15+ years in corporate environments means we know what works for professional and commercial contexts.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Professional Equipment & Expertise</h4>
                    <p className="text-gray-700 font-medium">Cutting-edge cameras, professional lighting, and expert direction ensure your commercial images stand out.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Fast Turnaround</h4>
                    <p className="text-gray-700 font-medium">Professional images delivered within 48-72 hours. When you need photos quickly, we deliver without compromising quality.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Local Central Valley Team</h4>
                    <p className="text-gray-700 font-medium">Based in Modesto, serving Stockton, Fresno, Turlock, and beyond. Local knowledge and convenient service for Central Valley businesses.</p>
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
              What Clients Say
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Business Owner</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Commercial Client</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Rojas Photography delivered exactly what we needed for our website and marketing materials. Professional quality, fast turnaround, and great to work with. Highly recommend."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Marketing Manager</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Central Valley Company</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "They understood our brand vision immediately and delivered commercial photography that exceeded our expectations. Easy to work with and professional throughout."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for commercial photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your commercial photography project">
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-5xl font-bold mb-8 text-black">Ready for Professional Commercial Photography?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Let's discuss your project and create compelling imagery that strengthens your brand and drives business results.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Request a quote for commercial photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Schedule a discovery call to discuss your commercial photography project">
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
                <li><a href="/premium-headshots" className="hover:text-emerald-700 transition focus:outline-none">Premium Headshots</a></li>
                <li><a href="/on-site-photography" className="hover:text-emerald-700 transition focus:outline-none">On-Site Photography</a></li>
                <li><a href="/commercial" className="hover:text-emerald-700 transition focus:outline-none">Commercial Photography</a></li>
                <li><a href="/video" className="hover:text-emerald-700 transition focus:outline-none">Video Services</a></li>
                <li><a href="/event-photography" className="hover:text-emerald-700 transition focus:outline-none">Event Photography</a></li>
              </ul>
            </nav>
            <nav>
              <h4 className="text-white font-bold mb-6">LOCATIONS</h4>
              <ul className="font-medium space-y-3">
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Modesto</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Stockton</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Fresno</a></li>
                <li><a href="/" className="hover:text-emerald-700 transition focus:outline-none">Turlock</a></li>
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
            <p>&copy; 2026 Rojas Photography. Professional Corporate Headshots in Modesto, Stockton, Fresno, Turlock & Merced. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
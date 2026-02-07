'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function EventPhotographyPage() {
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
      <section className="relative w-full min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Corporate Event Photography service page">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <div className="mb-6">
            <span className="text-emerald-200 font-bold text-xs md:text-sm tracking-widest">PROFESSIONAL EVENT COVERAGE & DOCUMENTATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Event Photography for Your Business
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Comprehensive event coverage for conferences, galas, fundraisers, product launches, and corporate gatherings. Capture your event's energy and impact with professional photography.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Service Details */}
        <section className="py-24 px-8 bg-white" aria-labelledby="service-details-heading">
          <div className="max-w-6xl mx-auto">
            {/* Event Photography Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Event Photography Work</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/CLA AM 25 201.jpg" 
                    alt="Professional corporate event photography and candid moments" 
                    className="w-full h-96 object-cover scale-125"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/DSC_1638.jpg" 
                    alt="Professional gala and formal event photography" 
                    className="w-full h-96 object-cover object-[center_40%]"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/CLA AM 25 335.jpg" 
                    alt="Professional conference and networking event coverage" 
                    className="w-full h-96 object-cover object-left"
                  />
                </div>
              </div>
            </div>

            {/* CTA Buttons - Both Options */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for event photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your event">
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
                    <h3 className="font-bold text-lg text-black mb-2">Full Event Coverage</h3>
                    <p className="text-gray-700 font-medium">Comprehensive photography from start to finish. We capture arrival moments, keynotes, networking, activities, and closing celebrations. Every important moment documented professionally.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Multiple Photographers</h3>
                    <p className="text-gray-700 font-medium">For larger events, we deploy multiple photographers to ensure complete coverage across all areas and activities. No important moments missed.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Candid & Posed Photography</h3>
                    <p className="text-gray-700 font-medium">We capture authentic moments and genuine interactions, plus professionally posed group photos and speaker shots. A perfect mix of candid and structured photography.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Step & Repeat Photography</h3>
                    <p className="text-gray-700 font-medium">Professional step and repeat backdrop photography. Perfect for sponsor recognition, brand activation, and marketing. Creates shareable moments for social media.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Rapid Photo Delivery</h3>
                    <p className="text-gray-700 font-medium">Event photos available within 24-48 hours after your event. Your attendees can download and share photos immediately. Perfect for social media during and after your event.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professional Editing & Curation</h3>
                    <p className="text-gray-700 font-medium">All photos professionally edited and color-corrected. We deliver only the best shots—curated for quality and impact. No filler images.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Online Gallery & Download</h3>
                    <p className="text-gray-700 font-medium">Photos delivered via secure online gallery (SpotMyPhotos). Attendees can view, download, and share. Event organizers get every image for marketing and records.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Flexible Event Types</h3>
                    <p className="text-gray-700 font-medium">We cover all event types: conferences, galas, fundraisers, product launches, award ceremonies, networking events, retreats, and more. Whatever your event, we're ready.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pricing</h3>
                <p className="text-gray-700 font-medium mb-6">Custom pricing based on event size, duration, and coverage needs.</p>
                <p className="text-gray-600 font-medium text-sm">Contact us for a personalized quote. We'll discuss your event details and create a photography package that captures everything you need.</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
                <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for event photography">
                  Request a Quote
                </a>
                <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your event">
                  Schedule a Discovery Call
                </a>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Event Photography Process</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">1. Event Planning</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We discuss your event schedule, key moments, important people, and photography goals. Understanding the flow and priorities ensures we capture everything that matters to you and your organization.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">2. Professional Coverage</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Our photographers arrive early and stay throughout. We blend into the background to capture authentic moments while ensuring posed photos of key people and activities. Professional, unobtrusive coverage.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">3. Rapid Delivery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Photos are professionally edited and delivered within 24-48 hours via secure online gallery. Your attendees can immediately download and share. Perfect for real-time social media and event follow-up.
                  </p>
                </div>
              </div>
            </div>

            {/* Event Types */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h2 className="text-3xl font-bold text-black mb-8">Events We Cover</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg text-black mb-4">Corporate Events</h4>
                  <ul className="text-gray-700 font-medium space-y-2">
                    <li>✓ Company conferences and conventions</li>
                    <li>✓ Annual meetings and celebrations</li>
                    <li>✓ Product launches and reveals</li>
                    <li>✓ Corporate retreats and team building</li>
                    <li>✓ Award ceremonies and recognition events</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-bold text-lg text-black mb-4">Professional & Social Events</h4>
                  <ul className="text-gray-700 font-medium space-y-2">
                    <li>✓ Galas and formal dinners</li>
                    <li>✓ Fundraisers and charity events</li>
                    <li>✓ Networking events and mixers</li>
                    <li>✓ Trade shows and exhibitions</li>
                    <li>✓ Grand openings and celebrations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Why Choose Rojas */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Why Choose Rojas Photography for Your Event</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Corporate Event Experience</h4>
                    <p className="text-gray-700 font-medium">We've covered events for Comcast, Save Mart, California Lawyers Association, and dozens of Central Valley businesses. We understand corporate events and professional environments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Professional & Unobtrusive</h4>
                    <p className="text-gray-700 font-medium">We blend into your event while capturing everything. Professional photographers who understand the importance of not interrupting the experience while documenting key moments.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Fast Turnaround</h4>
                    <p className="text-gray-700 font-medium">Event photos delivered within 24-48 hours. Your attendees can download immediately. Perfect for real-time social media updates and event follow-up communication.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black mb-2">Local Central Valley Service</h4>
                    <p className="text-gray-700 font-medium">Based in Modesto, serving Stockton, Fresno, Turlock, and beyond. We know the Central Valley and are available for events throughout the region.</p>
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
              What Event Organizers Say
            </h2>
            
            <div className="grid md:grid-cols-1 gap-10 max-w-2xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Event testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Courtnay Lynch</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">VP of People & Culture, Valley First Credit Union, Turlock</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results. Highly recommend for any corporate event."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Event testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Event Organizer</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Corporate Client</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "From planning to delivery, Rojas Photography was excellent. They understood our event goals, captured everything we needed, and delivered photos quickly. Professional throughout."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for event photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call to discuss your event">
                Schedule a Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-5xl font-bold mb-8 text-black">Ready to Capture Your Next Event?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Let us document your event with professional photography. From planning to delivery, we handle your event coverage so you can focus on the experience.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Request a quote for event photography">
                Request a Quote
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Schedule a discovery call to discuss your event">
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
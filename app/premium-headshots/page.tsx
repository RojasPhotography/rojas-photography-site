'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function PremiumHeadshotsPage() {
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
      <section className="relative w-full h-auto md:min-h-96 flex items-center justify-center overflow-hidden pt-24 md:pt-20 mt-24 md:mt-0 pb-6 md:pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Premium Corporate Headshots service page">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            In-Studio Corporate Headshots
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Guided, professional headshot sessions in our Modesto studio with real-time coaching and image selection
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Service Details */}
        <section className="py-24 px-8 bg-white" aria-labelledby="service-details-heading">
          <div className="max-w-6xl mx-auto">
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
              <a href="#booking-heading" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Book your premium headshot session now">
                Book Now
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call">
                Schedule Discovery Call
              </a>
            </div>

            {/* Headshot Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Premium Corporate Headshots</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Gina-0026 (1).jpg" 
                    alt="Premium corporate headshot example - professional woman in business attire" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Miguel-(2 of 6) (1).jpg" 
                    alt="Premium corporate headshot example - professional man in business attire" 
                    className="w-full h-96 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Joyce-0029.jpg" 
                    alt="Premium corporate headshot example - professional woman in business suit" 
                    className="w-full h-96 object-cover"
                  />
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 id="service-details-heading" className="text-4xl font-bold text-black mb-16 text-center">What's Included</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Guided Session - Unlimited Time</h3>
                    <p className="text-gray-700 font-medium">Work with our professional photographers throughout your entire session. We guide you through posing, expression, and confidence so you look and feel your absolute best.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Unlimited Wardrobe Changes</h3>
                    <p className="text-gray-700 font-medium">Bring multiple outfits and change as many times as you'd like. We'll help you select the best looks for your professional brand.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Real-Time Image Review</h3>
                    <p className="text-gray-700 font-medium">See your photos as we shoot them. We review images together in real-time and adjust on the fly so you know exactly what's working.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Guided Image Selection</h3>
                    <p className="text-gray-700 font-medium">We sit down together and help you select your best images. You choose only the photos you love—no filler, no pressure.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Wardrobe Consultation</h3>
                    <p className="text-gray-700 font-medium">Not sure what to wear? We'll consult with you beforehand on colors, styles, and looks that best represent your professional brand.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professional Editing & Fast Delivery</h3>
                    <p className="text-gray-700 font-medium">Your selected images are professionally edited and delivered to your inbox within 48 hours, ready for LinkedIn, your website, and marketing materials.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pricing</h3>
                <p className="text-gray-700 font-medium mb-4">Session Fee: <span className="text-emerald-900 font-bold text-lg">$150</span></p>
                <p className="text-gray-700 font-medium">Per Image: <span className="text-emerald-900 font-bold text-lg">$150 each</span></p>
                <p className="text-gray-600 font-medium text-sm mt-4">This ensures you walk away with only the images you love. No package minimums, no surprises.</p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
                <a href="#booking-heading" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Book your premium headshot session now">
                  Book Now
                </a>
                <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call">
                  Schedule Discovery Call
                </a>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Process</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">1. Pre-Session Consultation</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We discuss your professional goals, the images you need, and your vision. If you'd like wardrobe guidance, we'll help you prepare so you feel confident and ready.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">2. Guided Coaching Session</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    During your session, we guide every detail—posing, expression, angles, and confidence. You're not standing alone in front of a camera; we're coaching you the entire way. See your photos in real-time and adjust as needed.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">3. Selection & Professional Delivery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We review your session photos together and help you select the perfect shots. Your images are professionally edited and delivered within 48 hours, ready to use immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h2 className="text-3xl font-bold text-black mb-8">Who This Service Is For</h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                Premium Corporate Headshots are perfect for business professionals who want guidance throughout their session. Whether you're a CEO, attorney, consultant, realtor, or entrepreneur, this service is designed for people who need direction and want to walk away confident in their images.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                If you're unsure about posing, angles, or which looks best for your brand—we've got you covered. Our coaching approach removes the stress and ensures you get professional portraits you'll love.
              </p>
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
                  <p className="font-bold text-black mb-1">Catherine Luke</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">CEO</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Professional, efficient, and high-quality. Within days, our new employee had a corporate headshot ready for our website and LinkedIn. Highly recommended for any business."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Joyce Ulrich</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Entrepreneur, Modesto</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Alfonso and Niomi create a comfortable environment that puts you at ease immediately. The professional headshots turned out beautifully—exactly what I needed for my business."
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <a href="#booking-heading" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Book your premium headshot session now">
                Book Now
              </a>
              <a href="/discovery-call" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Schedule a discovery call">
                Schedule Discovery Call
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-5xl font-bold mb-8 text-black">Ready for Your Premium Headshots?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Get professional corporate headshots with expert guidance every step of the way. Book your session today.
            </p>
            
            <a href="#booking-heading" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg inline-block mb-8" aria-label="Book your premium headshot session">
              Book Your Session
            </a>

            <p className="text-gray-600 font-medium">
              Or call us at <a href="tel:2093803727" className="text-emerald-900 font-bold hover:text-emerald-950 focus:outline-none">209-380-3727</a>
            </p>
          </div>
        </section>

        {/* Booking Section - 17hats Calendar */}
        <section className="py-24 px-8 bg-white" aria-labelledby="booking-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="booking-heading" className="text-4xl font-bold text-center mb-4 text-black">Schedule Your Session</h2>
            <p className="text-lg text-center text-gray-700 font-medium mb-16">Select your preferred date and time below to book your premium headshot session.</p>
            
            <div className="flex justify-center">
              {isMounted && (
                <iframe 
                  name="hats_scheduler" 
                  style={{margin: "20px 20px 20px 20px"}} 
                  frameBorder="0" 
                  width="100%" 
                  height="600" 
                  src="https://Rojasheadshots.17hats.com/p#/scheduling/dghcgwpskptvbvsvkskdrcgkpnrrgxch?embed=true&tp=false&hide_desc=false"
                ></iframe>
              )}
            </div>
          </div>
        </section>

        {/* Discovery Call CTA */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="discovery-cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="discovery-cta-heading" className="text-4xl font-bold mb-8 text-black">Want to Discuss Your Project First?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Schedule a free discovery call to discuss your professional photography needs and explore how we can help.
            </p>
            
            <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg inline-block" aria-label="Schedule a discovery call">
              Schedule a Discovery Call
            </a>
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
'use client';

import { CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function OnSitePhotographyPage() {
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
      <section className="relative w-full min-h-screen md:min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="On-Site Corporate Photography service page">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <div className="mb-6">
            <span className="text-emerald-200 font-bold text-xs md:text-sm tracking-widest">PROFESSIONAL PHOTOGRAPHY AT YOUR LOCATION</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Professional Photography Comes to You
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            We bring our complete studio setup to your office for professional headshots, team photos, and group portraits. No travel required—just polished results delivered immediately.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Service Details */}
        <section className="py-24 px-8 bg-white" aria-labelledby="service-details-heading">
          <div className="max-w-6xl mx-auto">
            {/* On-Site Services Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Our On-Site Services</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/BB Individual Headshot Session.png" 
                    alt="Professional on-site individual headshot session" 
                    className="w-full h-full object-cover object-[center_40%]"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold text-center px-6">On-Site Headshots</h3>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/Move Staff Group 9.jpg" 
                    alt="Team and group photos at on-site corporate session" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold text-center px-6">Team Photos</h3>
                  </div>
                </div>
                <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-96">
                  <img 
                    src="/images/Marily4170.jpg" 
                    alt="Business and building photography at client location" 
                    className="w-full h-full object-cover object-[center_30%]"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h3 className="text-white text-3xl font-bold text-center px-6">Corporate Photography</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mb-24">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for on-site photography">
                Request a Quote
              </a>
              <a href="tel:2093803727" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Call Rojas Photography at 209-380-3727">
                Call 209-380-3727
              </a>
            </div>

            {/* What's Included */}
            <div className="max-w-4xl mx-auto mb-24">
              <h2 id="service-details-heading" className="text-4xl font-bold text-black mb-16 text-center">What's Included</h2>
              
              <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Full Studio Setup at Your Location</h3>
                    <p className="text-gray-700 font-medium">We bring our complete professional studio to your office or business location. All equipment, lighting, and direction—everything you need for professional photos without leaving your workplace.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professional Headshots & Team Photos</h3>
                    <p className="text-gray-700 font-medium">Individual executive headshots, team portraits, group photos, and even building interior/exterior photography. We handle everything with expert guidance and professional direction.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Custom Employee Scheduling</h3>
                    <p className="text-gray-700 font-medium">For organizations with 10+ employees, we create a custom online calendar so your team members can schedule their own session times. Eliminates coordination headaches.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Real-Time Image Review & Coaching</h3>
                    <p className="text-gray-700 font-medium">Just like our in-studio sessions, we guide your team through posing and expression in real-time. Everyone sees their photos as we shoot, ensuring confidence in final results.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Saves Time & Increases Efficiency</h3>
                    <p className="text-gray-700 font-medium">No travel time to a studio. We come to you and work efficiently at your location. Your employees stay in their familiar environment, reducing anxiety and keeping schedules on track.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-lg text-black mb-2">Professionally Edited & Immediate Delivery</h3>
                    <p className="text-gray-700 font-medium">All images are professionally edited and delivered immediately via our SpotMyPhotos gallery. Your team can download photos instantly, ready for LinkedIn, websites, and marketing materials.</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-8 rounded-lg border border-emerald-200 max-w-sm mx-auto">
                <h3 className="text-2xl font-bold text-emerald-900 mb-4">Pricing</h3>
                <p className="text-gray-700 font-medium mb-6">Custom pricing based on your organization's size and photography needs.</p>
                <p className="text-gray-600 font-medium text-sm">Contact us for a personalized quote. We'll work with you to create a solution that fits your budget and timeline.</p>
              </div>
            </div>

            {/* Video Section */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">See Us In Action</h2>
              <div className="flex justify-center">
                <div style={{ maxWidth: "360px", width: "100%" }}>
                  <iframe
                    width="100%"
                    height="640"
                    src="https://www.youtube.com/embed/1eTNLV6G0dM"
                    title="Rojas Photography On-Site Corporate Headshots"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Behind-the-Scenes Gallery */}
            <div className="mb-24">
              <h2 className="text-3xl font-bold text-center mb-12 text-black">Behind-the-Scenes</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-64">
                  <img 
                    src="/images/Kaiser BTS Headshots.png" 
                    alt="Behind the scenes at Kaiser on-site headshots session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-64">
                  <img 
                    src="/images/EsmilcoBTS.png" 
                    alt="Behind the scenes at on-site photography session" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition h-64">
                  <img 
                    src="/images/Mayor RIverbank BTS.png" 
                    alt="Behind the scenes at Riverbank Mayor photography session" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Our Process */}
            <div className="mb-24">
              <h2 className="text-4xl font-bold text-center mb-16 text-black">Our Process</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">1. Discovery & Planning</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We discuss your organization's needs, team size, locations, and photography goals. We understand your timeline and create a customized plan that works for your business. For 10+ employees, we set up individual scheduling calendars.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">2. On-Site Session</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    We arrive at your location with our complete studio setup and guide your team through the entire process. Professional lighting, direction, and real-time image review ensure everyone looks their best in their work environment.
                  </p>
                </div>

                <div className="pl-8">
                  <h3 className="text-2xl font-bold text-black mb-4">3. Immediate Delivery</h3>
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Professionally edited images are delivered immediately via SpotMyPhotos gallery. Your team can download photos instantly, ready for LinkedIn, your website, and professional communications.
                  </p>
                </div>
              </div>
            </div>

            {/* Who This Is For */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h2 className="text-3xl font-bold text-black mb-8">Who This Service Is For</h2>
              <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                On-Site Corporate Photography is perfect for busy organizations and professionals who need professional headshots and team photos without the hassle of traveling to a studio. Whether you're a law firm, corporate office, school district, healthcare organization, or any business needing team photography, we bring our expertise directly to you.
              </p>
              <p className="text-lg text-gray-700 font-medium leading-relaxed">
                This service is ideal for companies that value efficiency, want to keep employees in their familiar work environment, and need professional results on their timeline.
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
            
            <div className="grid md:grid-cols-1 gap-10 max-w-2xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Client testimonial from Kaiser">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Kaiser Business Campus, Pleasanton</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Admin Specialist</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "With very short notice, Alfonso from Rojas Photography was able to provide a quote and take our Innovations team's headshots and group photo. Alfonso and Niomi were amazing! They were complete pros, putting all of us at ease and getting some very good-looking photos - in real time! Alfonso made us feel so relaxed and knew how to get the best picture from each of us and was very quick to take the team photo outside in a different location - again, with lovely results. Our team could not be more satisfied with the work provided and the Rojas' wonderful demeanor. Highly recommend!"
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-6 justify-center mt-16">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Request a quote for on-site photography">
                Request a Quote
              </a>
              <a href="tel:2093803727" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-50 px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg text-center" aria-label="Call Rojas Photography at 209-380-3727">
                Call 209-380-3727
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-5xl font-bold mb-8 text-black">Ready to Bring Professional Photography On-Site?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Let us handle your team's professional headshots and corporate photography at your location. We'll bring our full studio setup and expert guidance directly to you.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/contact-quote" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Request a quote for on-site photography">
                Request a Quote
              </a>
              <a href="tel:2093803727" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Call Rojas Photography at 209-380-3727">
                Call 209-380-3727
              </a>
            </div>

            <p className="text-gray-600 font-medium mt-8">
              Or visit our <a href="/contact-quote" className="text-emerald-900 font-bold hover:text-emerald-950 focus:outline-none">contact page</a> to submit a quote request
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
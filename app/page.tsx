'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, Star, Phone, Mail, MapPin } from 'lucide-react';

export default function HomePage() {
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
              <a href="#services" className="font-medium hover:text-emerald-800 transition text-sm focus:outline-none">Services</a>
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
              <a href="#services" className="font-medium hover:text-emerald-800 transition text-sm px-3 py-0.5 focus:outline-none">Services</a>
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

      {/* Hero Section - Full Width Image with Overlay */}
      <section className="relative w-full h-screen mt-24 md:mt-0 flex items-center justify-center overflow-hidden pt-48 md:pt-42 pb-40" aria-label="Hero section - professional corporate headshots">
        <img 
          src="/images/Hero Image1.jpg" 
          alt="Professional corporate headshots by Rojas Photography" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center md:text-left">
          <div className="mb-8 mt-16">
            <span className="text-emerald-300 font-bold text-xs md:text-sm tracking-widest">PREMIUM CORPORATE PHOTOGRAPHY | MODESTO, CA</span>
          </div>
          
          <h1 className="text-3xl md:text-7xl font-bold mb-8 leading-tight">
            Premium Corporate Headshots in Modesto
          </h1>
          
          <p className="text-sm md:text-xl mb-12 font-medium max-w-3xl leading-relaxed">
            Premium corporate headshots for business leaders, attorneys, consultants, realtors, and entrepreneurs. Serving Modesto, Stockton, Fresno, Turlock, and Merced. Rojas Photography creates professional portraits that build credibility and attract clients. Trusted by Comcast, Save Mart, and California Lawyers Association.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center md:justify-start">
            <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 text-white px-8 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition focus:outline-none rounded text-center" aria-label="Schedule a discovery call for professional headshots">
              Schedule Discovery Call
            </a>
            <a href="tel:2093803727" className="border-2 border-emerald-300 text-emerald-300 hover:bg-emerald-300 hover:text-black px-8 md:px-10 py-3 md:py-4 text-sm md:text-lg font-semibold transition focus:outline-none rounded text-center" aria-label="Call Rojas Photography at 209-380-3727">
              Call 209-380-3727
            </a>
          </div>

          <p className="mt-16 font-medium text-xs md:text-sm text-gray-200">Serving Central Valley: Modesto • Stockton • Fresno • Turlock • Merced • Expanding to San Francisco</p>
        </div>
      </section>

      <main id="main-content">
        {/* Problem Section - SEO Keywords */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="why-headshots-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-headshots-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Why Professional Headshots Matter for Your Business
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-24">
              <div>
                <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mb-8" aria-hidden="true">
                  <span className="text-white font-bold">1</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Build Client Trust Instantly</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Executives and professionals form opinions in seconds. A professional corporate headshot communicates competence, authority, and trustworthiness before you ever speak.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mb-8" aria-hidden="true">
                  <span className="text-white font-bold">2</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Strengthen Your Professional Brand</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Your LinkedIn profile, website, and marketing materials need consistent, high-quality executive portraits. Professional headshots reinforce your brand across all platforms.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-emerald-900 rounded-full flex items-center justify-center mb-8" aria-hidden="true">
                  <span className="text-white font-bold">3</span>
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Attract Better Opportunities</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Clients, investors, and partners choose professionals who look polished and prepared. Quality corporate headshots position you as serious about your business.
                </p>
              </div>
            </div>

            {/* Headshot Gallery */}
            <div>
              <h3 className="text-3xl font-bold text-center mb-12 text-black">
                Our Premium Corporate Headshots
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Gina-0026 (1).jpg" 
                    alt="Premium corporate headshot example - professional woman in business attire" 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Miguel-(2 of 6) (1).jpg" 
                    alt="Premium corporate headshot example - professional man in business attire" 
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition">
                  <img 
                    src="/images/Joyce-0029.jpg" 
                    alt="Premium corporate headshot example - professional woman in business suit" 
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="process-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="process-heading" className="text-5xl font-bold text-center mb-20 text-black">
              How We Work With You
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="pl-8">
                <h3 className="text-2xl font-bold text-black mb-4">Business Photography Consultation</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  We start with a consultation to understand your business goals, vision, and professional needs. Whether you need corporate headshots, event coverage, or commercial photography, we discuss your objectives and create a strategy tailored to your business. This consultation ensures you feel confident and prepared.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="text-2xl font-bold text-black mb-4">Professional Guidance Throughout</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  During execution—whether it's your photography session, event, or video shoot—we provide expert direction and coaching every step of the way. You're not just a bystander; we guide you through the entire process with professional expertise. Real-time feedback and adjustments ensure we capture exactly what you need for your business.
                </p>
              </div>

              <div className="pl-8">
                <h3 className="text-2xl font-bold text-black mb-4">Polished Results for Marketing</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  You receive beautifully edited, professional results ready for LinkedIn, your website, marketing campaigns, and corporate communications. We deliver only the images or content you love, polished and ready to use immediately. Your investment produces results that strengthen your professional brand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - SEO Heavy */}
        <section id="services" className="py-24 px-8 bg-gray-50" aria-labelledby="services-heading">
          <style>{`
            .service-card {
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .service-card:hover {
              transform: translateY(-4px);
              box-shadow: 0 12px 24px rgba(26, 92, 60, 0.15);
            }
            .arrow-icon {
              gap: 0.5rem;
              transition: gap 0.3s ease;
            }
            .service-card:hover .arrow-icon {
              gap: 1rem;
            }
          `}</style>
          <div className="max-w-6xl mx-auto">
            <h2 id="services-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Professional Photography Services for Business Leaders
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <a href="/premium-headshots" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group" aria-label="Learn more about In-Studio Corporate Headshots">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">In-Studio Corporate Headshots</h3>
                <p className="text-gray-700 font-medium mb-6">Premium individual headshots in our professional studio. Executive portraits for business leaders, attorneys, and professionals.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/on-site-photography" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group" aria-label="Learn more about On-Site Corporate Photography">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">On-Site Corporate Photography</h3>
                <p className="text-gray-700 font-medium mb-6">Team headshots and professional portraits at your location.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/commercial" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group" aria-label="Learn more about Commercial Photography">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">Commercial Photography</h3>
                <p className="text-gray-700 font-medium mb-6">Brand imagery and business photography for marketing and web.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/video" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group" aria-label="Learn more about Video Services">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">Video Services</h3>
                <p className="text-gray-700 font-medium mb-6">Corporate video, testimonials, and aerial drone videography.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/event-photography" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group" aria-label="Learn more about Corporate Event Photography">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">Corporate Event Photography</h3>
                <p className="text-gray-700 font-medium mb-6">Professional coverage for conferences, galas, and business events.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 px-8 bg-white" aria-labelledby="testimonials-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="testimonials-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Trusted by Business Leaders & Professionals
            </h2>
            
            <div className="grid md:grid-cols-2 gap-10">
              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Review from Catherine Luke, CEO">
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

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Review from Joyce Ulrich, Entrepreneur">
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

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Review from Jovita Meza, Business Owner">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Jovita Meza</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">Business Owner, Stockton</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Excellent work on my executive headshots and business photography. Professional quality, delivered on schedule. I recommend Rojas Photography to all my colleagues."
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg" role="article" aria-label="Review from Courtnay Lynch, VP of People and Culture">
                <div className="mb-4">
                  <p className="font-bold text-black mb-1">Courtnay Lynch</p>
                  <p className="text-gray-600 font-medium text-sm mb-3">VP of People & Culture, Valley First Credit Union, Turlock</p>
                  <div className="flex gap-1" aria-label="5 out of 5 stars">
                    {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-emerald-900" aria-hidden="true" />)}
                  </div>
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  "Alfonso and Niomi captured our corporate event beautifully. Professional, responsive, easy to work with. They understand business and deliver results."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 px-8 bg-gray-50" aria-labelledby="about-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="about-heading" className="text-5xl font-bold text-center mb-20 text-black">
              About Rojas Photography | Modesto Professional Photographers
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/Alfonso+Niomi-0026.jpg" 
                  alt="Alfonso and Niomi Rojas - Professional photographers based in Modesto, California" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <p className="text-lg md:text-xl text-gray-900 mb-8 font-bold leading-relaxed">
                  We're Alfonso and Niomi Rojas, professional photographers based in Modesto, California. We've helped 500+ executives, attorneys, and business leaders create professional headshots that advance their careers and strengthen their professional brand.
                </p>
                
                <div className="space-y-8 mb-8">
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-lg text-black mb-2">Alfonso's Corporate Background</h4>
                      <p className="text-gray-700 font-medium leading-relaxed text-sm">15+ years in corporate environments. Deep understanding of executive culture, professional standards, and what clients expect from business leaders.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h4 className="font-bold text-lg text-black mb-2">Niomi's Corporate HR Background</h4>
                      <p className="text-gray-700 font-medium leading-relaxed text-sm">Corporate HR and operations expertise. We understand people and professionalism. Every detail—from your first consultation to final delivery—is handled with care and expertise to ensure your experience exceeds expectations.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-emerald-900 text-white p-6 rounded-lg">
                  <p className="font-medium text-base leading-relaxed">
                    "Professional photography isn't about being 'photogenic.' It's about presenting your authentic professional self with confidence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Rojas - SEO Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="why-choose-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-choose-heading" className="text-4xl font-bold text-center mb-16 text-black">
              Why Choose Rojas Photography for Your Corporate Headshots
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">Based in Modesto, Serving Central Valley</h4>
                    <p className="text-gray-700 font-medium">Local knowledge of your market. Serving Modesto, Stockton, Fresno, Turlock, Merced and surrounding areas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">Corporate Experience</h4>
                    <p className="text-gray-700 font-medium">We understand business. Trusted by Comcast, Save Mart, California Lawyers Association, and Fortune 500 companies.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">Professional Studio Environment</h4>
                    <p className="text-gray-700 font-medium">Comfortable, professional setting. Expert lighting and direction ensure you look your best.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">Quick Turnaround</h4>
                    <p className="text-gray-700 font-medium">Fast delivery without compromising quality. Get your professional headshots within days, not weeks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">100% Satisfaction Guarantee</h4>
                    <p className="text-gray-700 font-medium">You only pay for the images you love. We stand behind our work and ensure you're completely happy with your results.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-lg text-black">Transparent Pricing</h4>
                    <p className="text-gray-700 font-medium">$150 session + $150 per image. No hidden fees. Only pay for the headshots you love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contact" className="py-32 px-8 bg-black text-white" aria-labelledby="cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="cta-heading" className="text-6xl font-bold mb-10">Ready for Professional Corporate Headshots?</h2>
            <p className="text-xl text-gray-300 mb-16 font-medium leading-relaxed">
              Let's create professional portraits that build your credibility and advance your career. Serving Modesto, Stockton, Fresno, Turlock, and Merced.
            </p>
            
            <div className="flex flex-col md:flex-row gap-8 justify-center mb-20">
              <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded" aria-label="Schedule a discovery call with Rojas Photography">
                SCHEDULE DISCOVERY CALL
              </a>
              <a href="tel:2093803727" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded" aria-label="Call Rojas Photography at 209-380-3727">
                CALL NOW
              </a>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-16 text-left">
              <div className="flex items-center gap-4">
                <Phone size={28} className="text-emerald-700" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm text-gray-400">PHONE</p>
                  <a href="tel:2093803727" className="font-bold text-lg focus:outline-none" aria-label="Phone number: 209-380-3727">209-380-3727</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Mail size={28} className="text-emerald-700" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm text-gray-400">EMAIL</p>
                  <a href="mailto:alfonso@rojasphotography.net" className="font-bold text-lg focus:outline-none" aria-label="Email: alfonso@rojasphotography.net">alfonso@rojasphotography.net</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={28} className="text-emerald-700" aria-hidden="true" />
                <div>
                  <p className="font-bold text-sm text-gray-400">LOCATION</p>
                  <p className="font-bold text-lg">Modesto, CA | Central Valley</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - SEO */}
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
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Executive Headshots</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Team Headshots</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Commercial Photography</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Video Services</a></li>
              </ul>
            </nav>
            <nav>
              <h4 className="text-white font-bold mb-6">LOCATIONS</h4>
              <ul className="font-medium space-y-3">
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Modesto</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Stockton</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Fresno</a></li>
                <li><a href="#services" className="hover:text-emerald-700 transition focus:outline-none">Turlock</a></li>
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
            <p className="mt-4 text-sm"><a href="#accessibility" className="hover:text-emerald-700 transition focus:outline-none">Accessibility Statement</a> • <a href="#privacy" className="hover:text-emerald-700 transition focus:outline-none">Privacy Policy</a> • <a href="#terms" className="hover:text-emerald-700 transition focus:outline-none">Terms & Conditions</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
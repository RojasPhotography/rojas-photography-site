'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Award, Users, Zap } from 'lucide-react';

export default function AboutPage() {
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
      <section className="relative w-full min-h-screen md:min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="About Rojas Photography">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Rojas Photography
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Professional photographers dedicated to creating authentic corporate headshots and business imagery that elevate your professional brand.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Our Story Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="our-story-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="our-story-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Our Story
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start mb-24">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/images/Alfonso+Niomi-0026.jpg" 
                  alt="Alfonso and Niomi Rojas - Founders of Rojas Photography in Modesto, California" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <div>
                <p className="text-lg md:text-xl text-gray-900 mb-6 font-bold leading-relaxed">
                  Rojas Photography was born from a shared vision: create authentic, professional photography that makes business leaders feel confident and prepared.
                </p>
                
                <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                  Alfonso and Niomi founded Rojas Photography during a transition period when they decided to pursue something they were truly passionate about. Both brought 15+ years of leadership experience—Alfonso in manufacturing and executive environments, where he served as a key voice connecting sales strategy with operational execution, and Niomi in HR and operations. They knew exactly what professional clients needed because they'd lived in those demanding corporate roles.
                </p>

                <p className="text-gray-700 font-medium mb-6 leading-relaxed">
                  Their mission was clear: eliminate the anxiety and stress that people feel during photo sessions. Too many professionals had experienced rushed, impersonal photography that didn't capture their authentic presence. Alfonso and Niomi wanted to change that by creating a transformative experience—one where the real person emerges through the lens. When someone sits in front of Alfonso's camera, the goal isn't just to take a photo. It's to capture the genuine confidence, authority, and authenticity that defines them as a leader.
                </p>

                <p className="text-gray-700 font-medium mb-8 leading-relaxed">
                  Within two years, Rojas Photography grew from startup to the most sought-after photography studio in the Central Valley. They now serve executives, attorneys, CEOs, and business leaders across Modesto, Stockton, Fresno, Turlock, and Merced. They've expanded their services to include corporate events, commercial photography, aerial drone videography, and on-site team photography.
                </p>

                <div className="bg-emerald-900 text-white p-6 rounded-lg">
                  <p className="font-medium text-base leading-relaxed">
                    "Professional photography isn't about being 'photogenic.' It's about presenting your authentic professional self with confidence. That's what we create."
                  </p>
                  <p className="font-bold text-sm mt-4">— Alfonso & Niomi Rojas</p>
                </div>
              </div>
            </div>

            {/* Key Milestones */}
            <div className="bg-gray-50 p-12 rounded-lg mb-24">
              <h3 className="text-3xl font-bold text-black mb-12 text-center">Our Journey</h3>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-900 mb-2">500+</div>
                  <p className="text-gray-700 font-medium">Executives & Professionals</p>
                  <p className="text-sm text-gray-600 mt-2">Corporate clients served and satisfied</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-900 mb-2">50+</div>
                  <p className="text-gray-700 font-medium">Five-Star Google Reviews</p>
                  <p className="text-sm text-gray-600 mt-2">Consistent excellence and client satisfaction</p>
                </div>

                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-900 mb-2">15+</div>
                  <p className="text-gray-700 font-medium">Years Corporate Experience</p>
                  <p className="text-sm text-gray-600 mt-2">Deep understanding of executive environments</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Team Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="team-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="team-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Meet Alfonso & Niomi
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                <div className="mb-8 flex justify-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-emerald-900">
                    <img 
                      src="/images/Alfonso-headshot.jpg" 
                      alt="Alfonso Rojas - Founder & Lead Photographer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Alfonso Rojas</h3>
                <p className="text-emerald-900 font-bold text-lg mb-6">Founder, Lead Photographer & Visual Strategy Consultant</p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    With 15+ years in manufacturing leadership and executive environments, Alfonso understands the pressures and expectations that come with professional leadership. He served as a key voice connecting sales strategy with operational execution—giving him deep insight into what executives need and how they think. This background informs every photography session he conducts.
                  </p>
                  
                  <p className="text-gray-700 font-medium leading-relaxed">
                    As the lead photographer, Alfonso specializes in guiding clients through the session experience. He coaches posing, expression, and confidence—transforming nervous professionals into polished, authentic leaders. His goal is simple: help you look and feel your absolute best while capturing your genuine professional presence.
                  </p>

                  <p className="text-gray-700 font-medium leading-relaxed">
                    Alfonso works strategically with companies on their overall visual branding and imagery strategy. Whether you need headshots, video content, or commercial photography, he helps organizations think through their visual story and how to present their leadership authentically to the world.
                  </p>

                  <p className="text-gray-700 font-medium leading-relaxed">
                    Alfonso is Part 107 certified for drone operations, expanding Rojas Photography's capabilities to include aerial videography and drone photography. He's also a Christian photographer who values authentic, relationship-focused business practices.
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Lead Photographer</span>
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Part 107 Certified</span>
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Visual Strategy Consultant</span>
                </div>
              </div>

              <div>
                <div className="mb-8 flex justify-center">
                  <div className="w-64 h-64 rounded-full overflow-hidden shadow-lg border-4 border-emerald-900">
                    <img 
                      src="/images/Niomi-headshot.jpg" 
                      alt="Niomi Rojas - Founder, Photographer & Operations Lead" 
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '25% 45%', transform: 'scale(1.1)' }}
                    />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-black mb-4">Niomi Rojas</h3>
                <p className="text-emerald-900 font-bold text-lg mb-6">Founder, Photographer & Operations Lead</p>
                
                <div className="space-y-4 mb-8">
                  <p className="text-gray-700 font-medium leading-relaxed">
                    Niomi brings corporate HR and operations expertise to Rojas Photography, along with a keen eye for professional imagery and visual storytelling. Her background in people management, compliance, and organizational excellence ensures that every client interaction is handled with care, professionalism, and attention to detail. She understands people and knows what it takes to build trust.
                  </p>

                  <p className="text-gray-700 font-medium leading-relaxed">
                    As a photographer, Niomi specializes in making clients feel comfortable and confident during sessions. She has an exceptional ability to connect with people and draw out their authentic professional presence. Her HR background gives her a unique perspective on what business leaders need—she knows the pressure they're under and how to create a session experience that feels supportive rather than stressful.
                  </p>

                  <p className="text-gray-700 font-medium leading-relaxed">
                    Niomi works strategically with companies on their overall visual branding and imagery strategy. She helps organizations think through their visual story, how to present their teams authentically, and how to use professional imagery to build credibility and trust. From individual executive headshots to team and company-wide campaigns, she guides the vision.
                  </p>

                  <p className="text-gray-700 font-medium leading-relaxed">
                    As operations lead, Niomi manages the business side—from initial consultation through final delivery. She's the voice that greets you and the eye that ensures perfection in every detail. She's passionate about creating a comfortable, judgment-free environment where every client feels heard and valued.
                  </p>
                </div>

                <div className="flex gap-3 flex-wrap">
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Photographer</span>
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Visual Strategy Consultant</span>
                  <span className="bg-emerald-100 text-emerald-900 px-4 py-2 rounded-full text-sm font-bold">Client Relations</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Do This Section */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="why-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Why We Do This
            </h2>
            
            <div className="grid md:grid-cols-3 gap-12 mb-24">
              <div>
                <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                  <Users size={32} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">We Care About People</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Professional photography shouldn't be stressful. We believe every client deserves a comfortable, judgment-free experience where they feel valued and heard. Your experience matters to us.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                  <Award size={32} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">We Believe in Excellence</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Premium positioning means premium everything. From our equipment to our editing, from our coaching to our delivery—we commit to excellence in every detail. You deserve nothing less.
                </p>
              </div>

              <div>
                <div className="w-16 h-16 bg-emerald-900 rounded-full flex items-center justify-center mb-6">
                  <Zap size={32} className="text-white" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">We Understand Business</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  With 15+ years in corporate environments, we understand what executives, attorneys, and business leaders need. We speak your language and understand your world.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Clients Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="clients-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="clients-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Trusted by Business Leaders & Organizations
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                <p className="text-gray-700 font-bold text-lg mb-2">Comcast</p>
                <p className="text-gray-600 font-medium text-sm">Fortune 500 Communications</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                <p className="text-gray-700 font-bold text-lg mb-2">Save Mart Companies</p>
                <p className="text-gray-600 font-medium text-sm">Major Central Valley Employer</p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg border border-gray-200 text-center">
                <p className="text-gray-700 font-bold text-lg mb-2">California Lawyers Association</p>
                <p className="text-gray-600 font-medium text-sm">Professional Legal Organization</p>
              </div>
            </div>

            <p className="text-center text-gray-700 font-medium text-lg max-w-3xl mx-auto">
              We've worked with executives, attorneys, CEOs, business leaders, and professionals across the Central Valley. From startup entrepreneurs to Fortune 500 companies, we understand what it takes to build credibility and trust through professional imagery.
            </p>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="values-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="values-heading" className="text-5xl font-bold text-center mb-20 text-black">
              Our Core Values
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Authenticity</h3>
                  <p className="text-gray-700 font-medium">We help you present your authentic professional self, not a fake version. Real presence is more powerful than posing.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Integrity</h3>
                  <p className="text-gray-700 font-medium">Transparent pricing, honest communication, and relationship-focused business practices. We do what we say we'll do.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Excellence</h3>
                  <p className="text-gray-700 font-medium">Premium positioning requires premium execution. Every detail matters, from equipment to editing to service.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Respect</h3>
                  <p className="text-gray-700 font-medium">We respect your time, your needs, and your privacy. HIPAA compliance and confidentiality are non-negotiable.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Growth</h3>
                  <p className="text-gray-700 font-medium">We're constantly improving, learning, and expanding our capabilities. Your success is our success.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-bold text-lg text-black mb-3">Faith-Based Values</h3>
                  <p className="text-gray-700 font-medium">We operate with Christian values at the foundation of our business. Honesty, service, and community matter to us.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Overview Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="services-overview-heading">
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
            <h2 id="services-overview-heading" className="text-5xl font-bold text-center mb-20 text-black">
              What We Offer
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <a href="/premium-headshots" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">In-Studio Corporate Headshots</h3>
                <p className="text-gray-700 font-medium mb-6">Premium individual headshots in our professional studio. Executive portraits for business leaders, attorneys, and professionals.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/on-site-photography" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">On-Site Corporate Photography</h3>
                <p className="text-gray-700 font-medium mb-6">Team headshots and professional portraits at your location.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/commercial" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">Commercial Photography</h3>
                <p className="text-gray-700 font-medium mb-6">Brand imagery and business photography for marketing and web.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/video" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group">
                <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-emerald-900 transition">Video Services</h3>
                <p className="text-gray-700 font-medium mb-6">Corporate video, testimonials, and aerial drone videography.</p>
                <div className="flex items-center text-emerald-900 font-bold arrow-icon">
                  <span>Learn More</span>
                  <span>→</span>
                </div>
              </a>

              <a href="/event-photography" className="service-card border-2 border-emerald-900 p-8 rounded-lg block group">
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

        {/* Final CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="final-cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-cta-heading" className="text-5xl font-bold mb-8 text-black">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Let's create professional imagery that elevates your brand and positions you for success. Schedule a discovery call to discuss your needs.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="/discovery-call" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Schedule a discovery call">
                Schedule Discovery Call
              </a>
              <a href="tel:2093803727" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Call Rojas Photography at 209-380-3727">
                Call 209-380-3727
              </a>
            </div>

            <p className="text-gray-600 font-medium mt-8">
              Or email us at <a href="mailto:alfonso@rojasphotography.net" className="text-emerald-900 font-bold hover:text-emerald-950 focus:outline-none">alfonso@rojasphotography.net</a>
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
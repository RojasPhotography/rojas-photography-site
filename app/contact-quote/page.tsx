'use client';

import { useEffect, useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactPage() {
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
        input:focus, textarea:focus, select:focus {
          outline: 3px solid #1a5c3c;
          outline-offset: 2px;
        }
      `}</style>
      <script type="text/javascript" src="https://Rojasheadshots.17hats.com/vendor/iframeSizer.min.js"></script>

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
      <section className="relative w-full h-auto md:min-h-96 flex items-center justify-center overflow-hidden pt-24 md:pt-32 mt-24 md:mt-0 pb-6 md:pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Contact Rojas Photography">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let's Work Together
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Ready to transform your professional image? Get in touch with Rojas Photography. We're here to answer your questions and discuss your photography needs.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* Contact Methods Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="contact-methods-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="contact-methods-heading" className="text-4xl font-bold text-center mb-20 text-black">
              Get in Touch
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-24">
              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-6">
                  <Phone size={40} className="text-emerald-900" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Call Us</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Speak directly with Alfonso or Niomi about your photography needs.
                </p>
                <a href="tel:2093803727" className="text-emerald-900 font-bold text-lg hover:text-emerald-950 focus:outline-none">
                  209-380-3727
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-6">
                  <Mail size={40} className="text-emerald-900" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Email Us</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Send us an email with details about your project and we'll get back to you within 24 hours.
                </p>
                <a href="mailto:alfonso@rojasphotography.net" className="text-emerald-900 font-bold text-lg hover:text-emerald-950 focus:outline-none break-all">
                  alfonso@rojasphotography.net
                </a>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <div className="flex justify-center mb-6">
                  <MapPin size={40} className="text-emerald-900" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">Visit Us</h3>
                <p className="text-gray-700 font-medium mb-4">
                  Located in Modesto, California. Serving Central Valley and beyond.
                </p>
                <p className="text-emerald-900 font-bold text-lg">
                  Modesto, CA
                </p>
                <p className="text-gray-600 font-medium text-sm mt-4">On-site sessions available</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="contact-form-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="contact-form-heading" className="text-4xl font-bold text-center mb-4 text-black">
              Request a Quote
            </h2>
            <p className="text-center text-gray-700 font-medium mb-16 text-lg">
              Tell us about your project and we'll provide a personalized quote. Fill out the form below and we'll be in touch within 24 hours.
            </p>

            <div className="flex justify-center">
              {isMounted && (
                <iframe name="lc_contact_form" frameBorder="0" width="100%" height="600" src="https://Rojasheadshots.17hats.com/p#/embed/pzxhhxtvwbkzwzxgzwgxvphnpdkrfwbt"></iframe>
              )}
            </div>

            <p className="text-center text-gray-600 font-medium text-sm mt-8">
              We respect your privacy and will only use this information to respond to your inquiry.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-4xl font-bold text-center mb-20 text-black">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">What's your response time for inquiries?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  We aim to respond to all inquiries within 24 hours. We're committed to getting back to you quickly so we can discuss your project and provide a personalized quote.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Do you offer packages or custom pricing?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Yes! We customize our offerings based on your specific needs. Whether you need a single headshot or a comprehensive photography and video package, we can create a solution that fits your budget and timeline.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Can you travel for on-site sessions?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Absolutely! We serve Modesto, Stockton, Fresno, Turlock, Merced, and the entire Central Valley. We also travel to San Francisco and surrounding areas for larger projects. For on-site sessions, we bring our complete studio setup to your location.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">How long does it take to get my photos?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Most projects are completed and delivered within 48-72 hours. For time-sensitive projects, we can often expedite delivery. Turnaround times vary based on project scope, so we'll confirm the timeline with you in your quote.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">What if I'm not happy with my photos?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Your satisfaction is our top priority. For headshot sessions, you only pay for the images you love. We work with you throughout the process to ensure you're completely happy with your results. We stand behind our work with a 100% satisfaction guarantee.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Do you offer rush services?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Yes, we understand that sometimes you need photos quickly. If you have an urgent need, contact us directly at 209-380-3727 and we'll do our best to accommodate your timeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="final-cta-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="final-cta-heading" className="text-5xl font-bold mb-8 text-black">Ready to Get Started?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Don't wait—reach out today and let's discuss how we can help elevate your professional image.
            </p>
            
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a href="tel:2093803727" className="bg-emerald-900 hover:bg-emerald-950 text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Call Rojas Photography at 209-380-3727">
                Call 209-380-3727
              </a>
              <a href="mailto:alfonso@rojasphotography.net" className="border-2 border-emerald-900 text-emerald-900 hover:bg-emerald-900 hover:text-white px-12 py-5 text-lg font-semibold transition focus:outline-none rounded-lg" aria-label="Email Rojas Photography">
                Email Us
              </a>
            </div>
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
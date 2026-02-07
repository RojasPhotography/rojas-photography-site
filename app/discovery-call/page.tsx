'use client';

import { useEffect, useState } from 'react';
import { CheckCircle2, Clock, Target, Users } from 'lucide-react';

export default function DiscoveryCallPage() {
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
      <section className="relative w-full min-h-screen md:min-h-96 flex items-center justify-center overflow-hidden pt-40 md:pt-32 mt-24 md:mt-0 pb-12 bg-gradient-to-r from-emerald-900 to-emerald-800" aria-label="Schedule a Discovery Call with Rojas Photography">
        <div className="relative z-10 max-w-5xl mx-auto px-8 text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Schedule Your Discovery Call
          </h1>
          <p className="text-lg md:text-xl font-medium max-w-3xl mx-auto">
            Let's discuss your professional photography needs and create a customized solution that works for you. Choose a time that fits your schedule.
          </p>
        </div>
      </section>

      <main id="main-content">
        {/* What is a Discovery Call Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="what-is-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="what-is-heading" className="text-4xl font-bold text-center mb-20 text-black">
              What Happens on a Discovery Call?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-16 mb-24">
              <div>
                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                  A Discovery Call with Rojas Photography is a free, no-pressure conversation where we learn about your photography needs and you learn about how we can help.
                </p>
                
                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8">
                  This is your opportunity to discuss your vision, ask questions, and get a clear understanding of what professional photography can do for your business and personal brand.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-4">
                    <Target size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-2">Understand Your Goals</h3>
                      <p className="text-gray-700 font-medium text-sm">We listen to what you're trying to achieve with professional photography and why it matters to you.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Users size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-2">Explore Your Options</h3>
                      <p className="text-gray-700 font-medium text-sm">We discuss which services make sense for you—whether it's headshots, events, commercial photography, video, or a combination.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <CheckCircle2 size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-2">Get a Customized Quote</h3>
                      <p className="text-gray-700 font-medium text-sm">We'll provide a personalized quote that fits your budget and timeline, with no surprises or hidden fees.</p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Clock size={24} className="text-emerald-900 flex-shrink-0 mt-1" aria-hidden="true" />
                    <div>
                      <h3 className="font-bold text-black mb-2">Next Steps</h3>
                      <p className="text-gray-700 font-medium text-sm">If it's a good fit, we'll discuss next steps and get you scheduled. If it's not the right time, we'll stay in touch.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-12 rounded-lg border border-emerald-200">
                <h3 className="text-2xl font-bold text-black mb-8">Discovery Call Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">Duration</p>
                    <p className="text-gray-800 font-medium">20-30 minutes</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">Format</p>
                    <p className="text-gray-800 font-medium">Phone or video call (your choice)</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">Cost</p>
                    <p className="text-emerald-900 font-bold text-lg">Completely Free</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">What to Expect</p>
                    <p className="text-gray-800 font-medium">A friendly, professional conversation with Alfonso or Niomi about your photography needs. No pressure, no upselling—just genuine help.</p>
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 font-bold mb-2">Preparation</p>
                    <p className="text-gray-800 font-medium">Have a general idea of what you need, but nothing formal. We'll guide the conversation.</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg mt-8 border border-emerald-300">
                  <p className="text-sm text-gray-700 font-medium">
                    💡 <span className="font-bold">Pro tip:</span> If you have photos, inspiration, or specific ideas in mind, feel free to share during the call. It helps us understand your vision better.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Calendar Section */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="calendar-heading">
          <div className="max-w-2xl mx-auto">
            <h2 id="calendar-heading" className="text-4xl font-bold text-center mb-4 text-black">
              Pick Your Time
            </h2>
            <p className="text-center text-gray-700 font-medium mb-16 text-lg">
              Select a time that works for you. You can choose a phone or video call during checkout.
            </p>

            <div className="flex justify-center">
              {isMounted && (
                <iframe name="hats_scheduler_discovery" style={{margin: "20px 20px 20px 20px"}} frameBorder="0" width="100%" height="600" src="https://Rojasheadshots.17hats.com/p#/scheduling/rrhknvrrwcvggbprgbngdvgzcdwwbpnb?embed=true&tp=false&hide_desc=false"></iframe>
              )}
            </div>

            <p className="text-center text-gray-600 font-medium text-sm mt-8">
              We'll send you a confirmation with call-in details. If you need to reschedule, just let us know!
            </p>
          </div>
        </section>

        {/* Why Rojas Photography Section */}
        <section className="py-24 px-8 bg-white" aria-labelledby="why-rojas-heading">
          <div className="max-w-6xl mx-auto">
            <h2 id="why-rojas-heading" className="text-4xl font-bold text-center mb-20 text-black">
              Why Schedule a Discovery Call with Us?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Expert Guidance</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  With 15+ years of corporate and photography experience, we know what works for business professionals and executives. We'll guide you toward solutions that actually deliver results.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-4">Customized Solutions</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Every business is different. We don't have one-size-fits-all packages. We'll create a solution tailored specifically to your needs, budget, and timeline.
                </p>
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-black mb-4">No Hidden Fees</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Transparent pricing, honest conversations, and genuine help. We'll tell you exactly what things cost and what you should expect. No surprises.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-8 bg-gray-50" aria-labelledby="faq-heading">
          <div className="max-w-4xl mx-auto">
            <h2 id="faq-heading" className="text-4xl font-bold text-center mb-20 text-black">
              Questions About Discovery Calls?
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Is there a cost for the discovery call?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  No, absolutely not. Discovery calls are completely free. There's no obligation to book anything—this is just a conversation to see if we're a good fit for each other.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Can I do a video call instead of a phone call?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Yes! You can choose your preferred format when you schedule. Some clients prefer the personal touch of video, others prefer the convenience of a phone call. Either way works great.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">What if I'm not ready to book yet?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Perfect! Discovery calls are for anyone considering professional photography. If you're still thinking about it, a call is a great way to get answers and feel confident about your decision when you're ready.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">How far in advance should I schedule?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Whenever works for you! We have availability throughout the week. If you need to talk sooner, you can also call us directly at 209-380-3727.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">What if I have specific questions before the call?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  You can include your questions in the calendar form when you schedule. Or feel free to call us directly at 209-380-3727 or email alfonso@rojasphotography.net. We're happy to answer questions anytime.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">How do I reschedule if I need to?</h3>
                <p className="text-gray-700 font-medium leading-relaxed">
                  Just let us know! Call 209-380-3727 or email alfonso@rojasphotography.net and we'll find a new time. No penalties, no frustration—we understand that life happens.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Schedule Section */}
        <section className="py-32 px-8 bg-emerald-50" aria-labelledby="ready-heading">
          <div className="max-w-4xl mx-auto text-center">
            <h2 id="ready-heading" className="text-5xl font-bold mb-8 text-black">Ready to Talk?</h2>
            <p className="text-xl text-gray-700 mb-12 font-medium">
              Schedule your free discovery call above, or reach out directly if you'd like to chat right away.
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
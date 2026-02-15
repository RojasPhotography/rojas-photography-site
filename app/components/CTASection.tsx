import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  primaryHref?: string;
  primaryLabel?: string;
  showContactInfo?: boolean;
  dark?: boolean;
}

export default function CTASection({
  heading = 'Ready to Elevate Your Professional Image?',
  subheading = "Let's create professional portraits that build your credibility and advance your career.",
  primaryHref = '/discovery-call',
  primaryLabel = 'Book Now',
  showContactInfo = true,
  dark = true,
}: CTASectionProps) {
  const bgClass = dark
    ? 'bg-[var(--color-primary-dark)] text-white'
    : 'bg-[var(--color-primary-light)]';
  const textClass = dark ? 'text-gray-300' : 'text-[var(--color-text-body)]';
  const contactTextClass = dark ? 'text-gray-400' : 'text-[var(--color-text-muted)]';
  const contactValueClass = dark ? 'text-white' : 'text-[var(--color-text-dark)]';
  const iconClass = dark ? 'text-[var(--color-primary-light)]' : 'text-[var(--color-primary)]';

  return (
    <section className={`py-24 md:py-32 px-8 ${bgClass}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className={`text-3xl md:text-5xl font-bold mb-6 ${dark ? 'text-white' : 'text-[var(--color-text-dark)]'}`}>
          {heading}
        </h2>
        <p className={`text-lg ${textClass} mb-12 max-w-2xl mx-auto leading-relaxed`}>
          {subheading}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href={primaryHref}
            className={`${dark ? 'bg-white text-[var(--color-primary-dark)] hover:bg-gray-100' : 'btn-primary'} px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block`}
          >
            {primaryLabel}
          </Link>
          <a
            href="tel:2093803727"
            className={`${dark ? 'border-2 border-white/30 text-white hover:bg-white/10' : 'btn-outline'} px-10 py-4 text-lg font-semibold rounded-full transition-all inline-block`}
          >
            Call 209-380-3727
          </a>
        </div>

        {showContactInfo && (
          <div className="flex flex-col md:flex-row justify-center gap-12 text-left">
            <div className="flex items-center gap-3">
              <Phone size={20} className={iconClass} aria-hidden="true" />
              <div>
                <p className={`text-xs font-bold ${contactTextClass} tracking-wider`}>PHONE</p>
                <a href="tel:2093803727" className={`font-semibold ${contactValueClass}`}>
                  209-380-3727
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={20} className={iconClass} aria-hidden="true" />
              <div>
                <p className={`text-xs font-bold ${contactTextClass} tracking-wider`}>EMAIL</p>
                <a
                  href="mailto:alfonso@rojasphotography.net"
                  className={`font-semibold ${contactValueClass}`}
                >
                  alfonso@rojasphotography.net
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={20} className={iconClass} aria-hidden="true" />
              <div>
                <p className={`text-xs font-bold ${contactTextClass} tracking-wider`}>LOCATION</p>
                <p className={`font-semibold ${contactValueClass}`}>Modesto, CA</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

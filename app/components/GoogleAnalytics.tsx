'use client';

import Script from 'next/script';

export default function GoogleAnalytics({ measurementId }: { measurementId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}', {
            page_path: window.location.pathname,
          });

          // Track phone clicks
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href^="tel:"]');
            if (target) {
              gtag('event', 'phone_click', {
                event_category: 'engagement',
                event_label: target.getAttribute('href'),
                value: 1
              });
            }
          });

          // Track email clicks
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href^="mailto:"]');
            if (target) {
              gtag('event', 'email_click', {
                event_category: 'engagement',
                event_label: target.getAttribute('href'),
                value: 1
              });
            }
          });

          // Track Book Now / Discovery Call buttons
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="discovery-call"]');
            if (target) {
              gtag('event', 'booking_click', {
                event_category: 'conversion',
                event_label: 'Discovery Call Button',
                value: 5
              });
            }
          });

          // Track Quote Request buttons
          document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="contact-quote"]');
            if (target) {
              gtag('event', 'quote_request', {
                event_category: 'conversion',
                event_label: 'Quote Request Button',
                value: 5
              });
            }
          });
        `}
      </Script>
    </>
  );
}

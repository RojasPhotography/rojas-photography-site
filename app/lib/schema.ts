/**
 * Schema markup utilities for SEO
 */

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://rojasphotography.net',
    name: 'Rojas Photography',
    alternateName: 'Rojas Photography Modesto',
    image: [
      'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
      'https://rojasphotography.net/images/headshots/headshot-executive-ceo.jpg',
    ],
    description:
      'Professional corporate photography and video services in Modesto and Central Valley, CA. Specializing in executive headshots, on-site team photography, headshot booths, commercial photography, video production, and corporate event coverage. Founded and operated by Alfonso Rojas, FAA Part 107 certified, with 15+ years of corporate leadership experience.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Modesto',
      addressLocality: 'Modesto',
      addressRegion: 'CA',
      postalCode: '95350',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 37.6391,
      longitude: -120.9969,
    },
    hasMap: 'https://maps.google.com/?q=Rojas+Photography+Modesto+CA',
    areaServed: [
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Stockton' },
      { '@type': 'City', name: 'Fresno' },
      { '@type': 'City', name: 'Turlock' },
      { '@type': 'City', name: 'Merced' },
      { '@type': 'City', name: 'Sacramento' },
      { '@type': 'City', name: 'Ceres' },
      { '@type': 'City', name: 'Riverbank' },
      { '@type': 'City', name: 'Lodi' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net',
    priceRange: '$$',
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Check',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '60',
      bestRating: '5',
      worstRating: '1',
    },
    founder: {
      '@type': 'Person',
      name: 'Alfonso Rojas',
      jobTitle: 'Founder & Lead Photographer',
      url: 'https://rojasphotography.net/about-rojas-photography',
    },
    employee: {
      '@type': 'Person',
      name: 'Alfonso Rojas',
      jobTitle: 'Founder & Lead Photographer',
    },
    knowsAbout: [
      'Corporate Photography',
      'Executive Headshots',
      'Professional Headshots',
      'On-Site Team Photography',
      'Headshot Booth Events',
      'Commercial Photography',
      'Corporate Video Production',
      'Drone Photography',
      'Event Photography',
      'LinkedIn Headshots',
      'Business Branding Photography',
    ],
    hasCredential: {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'FAA Part 107 Remote Pilot Certificate',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Federal Aviation Administration',
      },
    },
    sameAs: [
      'https://www.instagram.com/rojasphotographymodesto/',
      'https://www.facebook.com/rojasphotography/',
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://rojasphotography.net/#website',
    url: 'https://rojasphotography.net',
    name: 'Rojas Photography',
    description:
      'Professional corporate photography and video services in Modesto and Central Valley, CA. Executive headshots, on-site photography, commercial photography, video production, and event coverage.',
    publisher: {
      '@id': 'https://rojasphotography.net',
    },
    inLanguage: 'en-US',
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rojasphotography.net/#organization',
    name: 'Rojas Photography',
    url: 'https://rojasphotography.net',
    logo: 'https://rojasphotography.net/images/Rojas Photography Logo 24.6.png',
    description: 'Professional corporate photography and video services',
    sameAs: [
      'https://www.instagram.com/rojasphotographymodesto/',
      'https://www.facebook.com/rojasphotography/',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: '+1-209-380-3727',
      email: 'alfonso@rojasphotography.net',
    },
  };
}

interface ServiceSchemaOptions {
  name: string;
  description: string;
  url: string;
  image?: string;
}

export function generateServiceSchema(options: ServiceSchemaOptions) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    description: options.description,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Rojas Photography',
      url: 'https://rojasphotography.net',
    },
    areaServed: [
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Stockton' },
      { '@type': 'City', name: 'Fresno' },
      { '@type': 'City', name: 'Central Valley' },
    ],
    ...(options.image && { image: options.image }),
    url: options.url,
  };
}

interface FAQItem {
  question: string;
  answer: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate Person schema for founders/team members
 */
export function generatePersonSchema() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://rojasphotography.net/about-rojas-photography#alfonso',
      name: 'Alfonso Rojas',
      jobTitle: 'Founder & Lead Photographer',
      description:
        'Professional corporate photographer with 15+ years of leadership experience. Specializes in executive headshots, corporate photography, and business videography.',
      image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
      url: 'https://rojasphotography.net/about-rojas-photography',
      worksFor: {
        '@type': 'Organization',
        name: 'Rojas Photography',
        url: 'https://rojasphotography.net',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Modesto',
        addressRegion: 'CA',
        postalCode: '95350',
        addressCountry: 'US',
      },
      sameAs: ['https://www.instagram.com/rojasphotographymodesto/'],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      '@id': 'https://rojasphotography.net/about-rojas-photography#niomi',
      name: 'Niomi Rojas',
      jobTitle: 'Co-Founder & Operations Director',
      description:
        'Business operations expert with 15+ years of experience in HR and client relations. Specializes in client satisfaction, team coordination, and event management.',
      image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
      url: 'https://rojasphotography.net/about-rojas-photography',
      worksFor: {
        '@type': 'Organization',
        name: 'Rojas Photography',
        url: 'https://rojasphotography.net',
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Modesto',
        addressRegion: 'CA',
        postalCode: '95350',
        addressCountry: 'US',
      },
    },
  ];
}

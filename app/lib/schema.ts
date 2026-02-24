/**
 * Schema markup utilities for SEO
 */

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://rojasphotography.net',
    name: 'Rojas Photography',
    image: 'https://rojasphotography.net/images/Alfonso+Niomi-0026.jpg',
    description:
      'Professional corporate photography and video services in Modesto and Central Valley',
    address: {
      '@type': 'PostalAddress',
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
    areaServed: [
      { '@type': 'City', name: 'Modesto' },
      { '@type': 'City', name: 'Stockton' },
      { '@type': 'City', name: 'Fresno' },
      { '@type': 'City', name: 'Turlock' },
      { '@type': 'City', name: 'Merced' },
      { '@type': 'City', name: 'Sacramento' },
      { '@type': 'City', name: 'East Bay' },
    ],
    telephone: '+1-209-380-3727',
    email: 'alfonso@rojasphotography.net',
    url: 'https://rojasphotography.net',
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
    sameAs: [
      'https://www.instagram.com/rojasphotographymodesto/',
      'https://www.facebook.com/rojasphotography/',
    ],
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://rojasphotography.net',
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
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '50',
    },
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

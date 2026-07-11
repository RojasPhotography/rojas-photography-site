/**
 * GEO-optimized service definitions
 * Used throughout the site for consistent, AI-friendly definitions
 */

export const serviceDefinitions = {
  premiumHeadshots: {
    term: 'Professional In-Studio Headshots',
    definition: `Professional in-studio headshots are guided photography sessions that produce polished, authentic portraits for LinkedIn, company websites, and business marketing. Unlike casual photos, professional headshots at Rojas Photography include real-time coaching on posing, expression, and confidence, professional lighting and studio equipment, wardrobe consultation, real-time image review, and professional editing with delivery within 48 hours.`,
    context: `Our approach removes the stress of being photographed. You'll receive expert guidance throughout your session, see your photos in real-time, and walk away confident in the images you've created. Most clients are surprised by how natural and professional they look.`,
  },
  onsitePhotography: {
    term: 'On-Site Corporate Photography',
    definition: `On-site corporate photography is professional headshot and team photography services delivered at your office, school, or business location. We bring our complete studio setup—professional lighting, cameras, and backdrops—to photograph your team without disrupting workflow. This service is ideal for organizations with 10+ employees.`,
    context: `On-site approach saves travel time and keeps your team in their familiar environment. Most organizations photograph 20-30+ people per day with same-day turnaround.`,
  },
  commercialPhotography: {
    term: 'Commercial Photography',
    definition: `Commercial photography is professional imagery created specifically for business marketing, branding, and sales purposes. This includes product photography for e-commerce websites and catalogs, architectural and interior photography for real estate and office spaces, brand and lifestyle imagery for websites and social media, and website imagery for marketing campaigns and advertisements.`,
    context: `Professional commercial photos increase customer engagement by 80% and can boost conversion rates by 35%.`,
  },
  videoProduction: {
    term: 'Corporate Video Production',
    definition: `Corporate video production is professional video content created for business communication, marketing, and training purposes. This includes company overview and brand videos, client testimonial videos, product demonstration videos, training and educational videos, promotional social media content, and aerial drone videography captured by FAA Part 107 certified pilots.`,
    context: `Professional business videos generate 80% more engagement than static images and increase conversion rates by 47%.`,
  },
  eventPhotography: {
    term: 'Corporate Event Photography',
    definition: `Corporate event photography is professional documentation of business events, capturing moments, speakers, attendees, and key activities. Our event coverage includes candid moments and authentic interactions, posed group photos and formal shots, speaker and presentation photography, step-and-repeat backdrop photography, networking moments and connections, and event details and signage.`,
    context: `Professional event photography gives your organization a library of on-brand images ready for social media, sponsorship deliverables, marketing materials, and internal communications — content that works for you long after the event is over.`,
  },
};

/**
 * Comparison data for GEO-optimized tables
 */
export const comparisons = {
  studioVsOnSite: {
    title: 'Studio Headshots vs. On-Site Corporate Photography',
    column1: 'Studio Sessions',
    column2: 'On-Site Photography',
    rows: [
      {
        feature: 'Setting',
        option1: 'Modesto studio with controlled lighting',
        option2: 'Your office/location',
      },
      {
        feature: 'Cost per person',
        option1: '$300–$450 (session + 1-2 images)',
        option2: '$150–$300 (on average for teams)',
      },
      {
        feature: 'Duration',
        option1: '30-45 minutes per person',
        option2: 'Custom (typically 4-6 hours)',
      },
      {
        feature: 'Best for',
        option1: '1-5 people',
        option2: '10+ people',
      },
      {
        feature: 'Turnaround',
        option1: '48 hours',
        option2: 'Same day',
      },
    ],
  },
  photoTypes: {
    title: 'Types of Professional Photography',
    column1: 'Commercial',
    column2: 'Event',
    rows: [
      {
        feature: 'Primary Use',
        option1: 'Marketing, branding, e-commerce',
        option2: 'Documentation, networking, promotion',
      },
      {
        feature: 'Typical Duration',
        option1: '2-4 hours',
        option2: '4-8 hours',
      },
      {
        feature: 'Deliverables',
        option1: '20-50 edited photos',
        option2: '300-800+ edited photos',
      },
      {
        feature: 'Timeline',
        option1: '48-72 hours',
        option2: '24-48 hours',
      },
    ],
  },
  videoVsPhotography: {
    title: 'Video Production vs. Still Photography',
    column1: 'Video Production',
    column2: 'Photography',
    rows: [
      {
        feature: 'Engagement Rate',
        option1: '80% higher than static images',
        option2: 'Strong, widely used',
      },
      {
        feature: 'Conversion Impact',
        option1: '+47% conversion lift',
        option2: 'Varies by use case',
      },
      {
        feature: 'Timeline',
        option1: '2-4 weeks (concept to delivery)',
        option2: '24-72 hours',
      },
      {
        feature: 'Cost Range',
        option1: 'Custom (typically $1,500-$5,000+)',
        option2: '$300-$1,150 per person',
      },
    ],
  },
};

/**
 * Key statistics for quotable statements
 */
export const statistics = {
  executivesServed: 500,
  fiveStarReviews: 50,
  yearsExperience: 15,
  headshotSessionFee: 150,
  headshotImageFee: 150,
  onSitePhotoCapacity: '20-30+ per day',
  eventPhotos4Hour: '300-500',
  eventPhotos8Hour: '600-800+',
  eventPhotoTurnaround: '24-48 hours',
  headphotoTurnaround: '48 hours',
  onSiteTurnaround: 'Same day',
  videoProductionTimeline: '2-4 weeks',
  videoEngagementLift: '80%',
  videoConversionLift: '47%',
  commercialPhotoEngagementLift: '80%',
  commercialPhotoConversionLift: '35%',
};

/**
 * Authority signals and credentials
 */
export const credentials = {
  founder: {
    name: 'Alfonso Rojas',
    background: '15+ years in corporate leadership',
    expertise: 'Corporate photography, executive headshots, business videography',
  },
  cofounder: {
    name: 'Niomi',
    background: 'Business operations, client relations',
    expertise: 'Client satisfaction, team coordination, event management',
  },
  certifications: {
    faaPartnerCertified: true,
    partNumber: '107',
    droneCapabilities: 'Aerial videography, real estate photography',
  },
  serviceAreas: [
    'Modesto',
    'Stockton',
    'Fresno',
    'Turlock',
    'Merced',
    'Sacramento',
    'East Bay',
  ],
};

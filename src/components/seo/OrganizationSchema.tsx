export default function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Inphenix System',
    url: 'https://inphenix-system.fr',
    logo: 'https://inphenix-system.fr/logo.png',
    description: 'Bureau d\'étude spécialisé en impression 3D et développement électronique. Prototypage rapide, scan 3D, modélisation pour tous secteurs.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@inphenix-system.fr',
      availableLanguage: ['French'],
    },
    sameAs: [],
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    knowsAbout: [
      'Impression 3D',
      'FDM',
      'SLA',
      'Prototypage rapide',
      'Électronique',
      'Modélisation 3D',
      'Scan 3D',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services Inphenix System',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Impression 3D FDM',
            description: 'Impression 3D par dépôt de filament fondu pour pièces résistantes et fonctionnelles.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Impression 3D Résine',
            description: 'Impression 3D haute précision pour détails fins et surfaces lisses.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Développement Électronique',
            description: 'Conception et fabrication de solutions électroniques sur mesure.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '300',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.inphenix-system.fr/#localbusiness',
    name: 'Inphenix System',
    description: 'Bureau d\'étude spécialisé en impression 3D et développement électronique.',
    url: 'https://www.inphenix-system.fr',
    telephone: '',
    email: 'contact@inphenix-system.fr',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    priceRange: '€€',
    currenciesAccepted: 'EUR',
    paymentAccepted: 'Virement bancaire, Carte bancaire',
    areaServed: {
      '@type': 'Country',
      name: 'France',
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 46.603354,
        longitude: 1.888334,
      },
      geoRadius: '1000000',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      reviewCount: '300',
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

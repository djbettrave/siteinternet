import Link from 'next/link'
import type { Metadata } from 'next'

export interface SectorData {
  slug: string
  name: string
  icon?: string
  headline: string
  subheadline: string
  description: string
  heroImage?: string
  useCases: {
    title: string
    description: string
    icon?: string
  }[]
  benefits: string[]
  services: {
    name: string
    href: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  cta: {
    title: string
    description: string
  }
  stats?: {
    value: string
    label: string
  }[]
}

export function generateSectorMetadata(sector: SectorData): Metadata {
  return {
    title: `${sector.name} | Impression 3D & Électronique`,
    description: sector.description,
    keywords: [
      `impression 3D ${sector.name.toLowerCase()}`,
      `prototypage ${sector.name.toLowerCase()}`,
      `${sector.name.toLowerCase()} sur mesure`,
      'bureau d\'étude',
      'électronique',
    ],
    openGraph: {
      title: `${sector.name} - Inphenix System`,
      description: sector.description,
      type: 'website',
    },
  }
}

export function generateSectorSchema(sector: SectorData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Services Impression 3D et Électronique pour ${sector.name}`,
    provider: {
      '@type': 'Organization',
      name: 'Inphenix System',
      url: 'https://inphenix-system.fr',
    },
    description: sector.description,
    areaServed: 'France',
    serviceType: `Impression 3D pour ${sector.name}`,
  }
}

interface SectorPageProps {
  sector: SectorData
}

export default function SectorPage({ sector }: SectorPageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: sector.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* Schema markups */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateSectorSchema(sector)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        <div className="container-custom relative">
          <div className="py-20 lg:py-28">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-secondary-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/secteurs" className="hover:text-white transition-colors">Secteurs</Link>
                <span>/</span>
                <span className="text-white">{sector.name}</span>
              </nav>

              {/* Badge */}
              <div className="mb-6">
                <div className="inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                  <span className="text-white/90 text-sm font-medium">Expertise sectorielle</span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {sector.headline}
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
                {sector.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Devis {sector.name}
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/realisations" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Voir nos projets {sector.name}
                </Link>
              </div>

              {/* Stats */}
              {sector.stats && (
                <div className="flex flex-wrap items-center gap-8 mt-12 pt-8 border-t border-white/10">
                  {sector.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-secondary-400 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative */}
        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Applications pour le secteur {sector.name}</h2>
            <p className="section-subtitle mx-auto">
              Découvrez comment nous accompagnons les professionnels du {sector.name.toLowerCase()}
              avec des solutions sur mesure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sector.useCases.map((useCase, index) => (
              <div key={index} className="group card p-8 hover:shadow-lg hover:border-primary-300 transition-all duration-200">
                <div className="w-14 h-14 rounded-xl bg-primary-100 flex items-center justify-center mb-5 group-hover:bg-primary-600 transition-colors">
                  <svg className="w-7 h-7 text-primary-600 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={useCase.icon || 'M13 10V3L4 14h7v7l9-11h-7z'} />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">{useCase.title}</h3>
                <p className="text-secondary-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">
                Pourquoi choisir Inphenix pour vos projets {sector.name} ?
              </h2>
              <p className="text-lg text-secondary-600 mb-8">
                Notre expertise combinée en impression 3D et électronique nous permet de répondre
                aux exigences spécifiques du secteur {sector.name.toLowerCase()}.
              </p>
              <ul className="space-y-4">
                {sector.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-secondary-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100">
              <h3 className="font-semibold text-lg mb-6">Services adaptés au {sector.name}</h3>
              <div className="space-y-3">
                {sector.services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="flex items-center justify-between p-4 bg-secondary-50 rounded-lg hover:bg-primary-50 transition-colors group"
                  >
                    <span className="font-medium text-secondary-900">{service.name}</span>
                    <svg className="w-5 h-5 text-secondary-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Questions fréquentes - {sector.name}</h2>
              <p className="section-subtitle mx-auto">
                Les réponses aux questions les plus courantes sur nos services pour le secteur {sector.name.toLowerCase()}.
              </p>
            </div>

            <div className="space-y-4">
              {sector.faqs.map((faq, index) => (
                <details key={index} className="group border border-secondary-200 rounded-xl overflow-hidden">
                  <summary className="px-6 py-5 cursor-pointer flex items-center justify-between gap-4 hover:bg-secondary-50 transition-colors list-none">
                    <span className="font-semibold text-secondary-900">{faq.question}</span>
                    <svg className="w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-6 pb-5">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {sector.cta.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {sector.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Demander un devis gratuit
              </Link>
              <a
                href="https://impression3d.inphenix-system.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white hover:bg-primary-800 px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
              >
                Devis instantané impression 3D
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

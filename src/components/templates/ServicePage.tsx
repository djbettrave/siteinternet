import Link from 'next/link'
import type { Metadata } from 'next'

export interface ServiceData {
  slug: string
  name: string
  category?: string
  headline: string
  subheadline: string
  description: string
  features: {
    title: string
    description: string
    icon?: string
  }[]
  specs?: {
    label: string
    value: string
  }[]
  materials?: {
    name: string
    properties: string
  }[]
  process?: {
    step: number
    title: string
    description: string
  }[]
  faqs: {
    question: string
    answer: string
  }[]
  cta: {
    title: string
    description: string
  }
  relatedServices: {
    name: string
    href: string
  }[]
}

export function generateServiceMetadata(service: ServiceData): Metadata {
  return {
    title: `${service.name}${service.category ? ` - ${service.category}` : ''}`,
    description: service.description,
    keywords: [
      service.name.toLowerCase(),
      'bureau d\'étude',
      'prototypage',
      'sur mesure',
      'France',
    ],
    openGraph: {
      title: `${service.name} - Inphenix System`,
      description: service.description,
      type: 'website',
    },
  }
}

interface ServicePageProps {
  service: ServiceData
}

export default function ServicePage({ service }: ServicePageProps) {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq) => ({
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container-custom relative">
          <div className="py-20 lg:py-28">
            <div className="max-w-3xl">
              <nav className="flex items-center gap-2 text-sm text-secondary-400 mb-8">
                <Link href="/" className="hover:text-white transition-colors">Accueil</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                {service.category && (
                  <>
                    <span>/</span>
                    <span className="text-secondary-300">{service.category}</span>
                  </>
                )}
                <span>/</span>
                <span className="text-white">{service.name}</span>
              </nav>

              <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
                {service.headline}
              </h1>

              <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
                {service.subheadline}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                  Demander un devis
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link href="/realisations" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                  Voir des exemples
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Ce que nous proposons</h2>
            <p className="section-subtitle mx-auto">
              {service.description}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <div key={index} className="card p-8 hover:shadow-lg hover:border-primary-300 transition-all duration-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{feature.title}</h3>
                <p className="text-secondary-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specs & Materials */}
      {(service.specs || service.materials) && (
        <section className="py-24 bg-secondary-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-16">
              {service.specs && (
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-8">Spécifications techniques</h2>
                  <div className="bg-white rounded-2xl overflow-hidden border border-secondary-100">
                    {service.specs.map((spec, index) => (
                      <div key={index} className={`flex justify-between p-4 ${index !== service.specs!.length - 1 ? 'border-b border-secondary-100' : ''}`}>
                        <span className="text-secondary-600">{spec.label}</span>
                        <span className="font-semibold text-secondary-900">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.materials && (
                <div>
                  <h2 className="text-2xl font-bold text-secondary-900 mb-8">Matériaux disponibles</h2>
                  <div className="space-y-4">
                    {service.materials.map((material, index) => (
                      <div key={index} className="bg-white rounded-xl p-4 border border-secondary-100">
                        <h3 className="font-semibold text-secondary-900 mb-1">{material.name}</h3>
                        <p className="text-sm text-secondary-600">{material.properties}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {service.process && (
        <section className="py-24 bg-white">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="section-title">Notre processus</h2>
              <p className="section-subtitle mx-auto">
                De votre demande à la livraison, un accompagnement structuré.
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                    {index !== service.process!.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-200 mx-auto mt-2"></div>
                    )}
                  </div>
                  <div className="pb-8">
                    <h3 className="text-xl font-semibold text-secondary-900 mb-2">{step.title}</h3>
                    <p className="text-secondary-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-title">Questions fréquentes</h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, index) => (
                <details key={index} className="group bg-white border border-secondary-200 rounded-xl overflow-hidden">
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

      {/* Related Services */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <h2 className="text-2xl font-bold text-secondary-900 mb-8">Services complémentaires</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {service.relatedServices.map((related) => (
              <Link
                key={related.href}
                href={related.href}
                className="card p-6 hover:border-primary-200 transition-colors group"
              >
                <span className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors">{related.name}</span>
                <svg className="w-5 h-5 text-secondary-400 mt-2 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              {service.cta.title}
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              {service.cta.description}
            </p>
            <Link href="/contact" className="bg-white text-primary-600 hover:bg-primary-50 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

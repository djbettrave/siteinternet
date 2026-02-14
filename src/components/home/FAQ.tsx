'use client'

import { useState, useMemo } from 'react'

const faqs = [
  {
    question: 'Quels types d\'impression 3D proposez-vous ?',
    answer: 'Nous proposons trois technologies d\'impression 3D : FDM (filament) pour les pièces fonctionnelles et résistantes, résine (SLA/DLP) pour les détails fins et finitions lisses, et grand format pour les pièces jusqu\'à 85 cm en un seul bloc (sans limite de taille par assemblage). Chaque technologie a ses avantages selon votre projet.',
  },
  {
    question: 'Quels sont vos délais de réalisation ?',
    answer: 'Les délais varient selon la complexité du projet. Un prototype simple peut être réalisé en 24-48h. Pour les projets plus complexes incluant conception et électronique, comptez 1 à 3 semaines. Nous nous engageons à vous répondre sous 24h avec une estimation précise.',
  },
  {
    question: 'Proposez-vous des services de conception ?',
    answer: 'Oui, nous offrons un service complet de conception. Que vous ayez une simple idée, un croquis ou un fichier 3D existant, nos ingénieurs peuvent modéliser, optimiser et adapter votre projet pour l\'impression 3D ou l\'électronique.',
  },
  {
    question: 'Quels secteurs d\'activité accompagnez-vous ?',
    answer: 'Nous accompagnons 5 secteurs principaux : Retail (PLV, présentoirs), Luxe (packaging, displays), Événementiel (installations, déco), Architecture (maquettes) et Robotique (châssis, électronique). Notre expertise s\'adapte à vos besoins spécifiques.',
  },
  {
    question: 'Comment fonctionne votre outil de devis en ligne ?',
    answer: 'Notre outil de devis vous permet d\'obtenir une estimation instantanée. Téléchargez votre fichier 3D ou décrivez votre projet, sélectionnez les options (matériau, finition, quantité), et recevez un devis détaillé. C\'est gratuit et sans engagement.',
  },
  {
    question: 'Proposez-vous des services d\'électronique ?',
    answer: 'Oui, nous développons des solutions électroniques sur mesure : circuits imprimés, systèmes de motorisation, électronique embarquée, programmation. C\'est notre différenciateur clé : combiner impression 3D et électronique dans un seul projet.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Schema markup for FAQ - memoized to avoid recalculation on each render
  const faqSchema = useMemo(() => ({
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
  }), [])

  return (
    <section className="py-24 bg-white">
      {/* Schema markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="section-title">Questions fréquentes</h2>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-secondary-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-secondary-50 transition-colors"
                >
                  <span className="font-semibold text-secondary-900">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-secondary-500 flex-shrink-0 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5">
                    <p className="text-secondary-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <p className="text-secondary-600 mb-4">Vous avez d'autres questions ?</p>
            <a href="/contact" className="btn-primary">
              Contactez-nous
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

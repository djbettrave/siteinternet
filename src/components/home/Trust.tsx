'use client'

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const stats = [
  { value: '4.9/5', label: 'Note moyenne', sublabel: 'sur nos projets' },
  { value: '+150', label: 'Projets', sublabel: 'réalisés' },
  { value: '24h', label: 'Réponse', sublabel: 'garantie' },
  { value: '6+', label: 'Secteurs', sublabel: 'd\'expertise' },
]

// Marques pour lesquelles nous avons réalisé des projets
const brands = [
  'Louis Vuitton',
  'Balenciaga',
  'Dior',
  'Chanel',
  'Cartier',
  'Hermès',
]

// Partenaires institutionnels
const partners = [
  'BPI France',
  'Bourse French Tech',
]

export default function Trust() {
  const [brandsRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [Autoplay({ delay: 2500, stopOnInteraction: false })]
  )

  const [partnersRef] = useEmblaCarousel(
    { loop: true, align: 'center', dragFree: true },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  )

  return (
    <section className="py-24 bg-secondary-50">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
                {stat.value}
              </div>
              <div className="font-medium text-secondary-900">{stat.label}</div>
              <div className="text-sm text-secondary-500">{stat.sublabel}</div>
            </div>
          ))}
        </div>

        {/* Projets réalisés pour */}
        <div className="text-center mb-12">
          <h2 className="section-title">Projets réalisés pour</h2>
        </div>

        {/* Carousel marques */}
        <div className="overflow-hidden" ref={brandsRef}>
          <div className="flex">
            {[...brands, ...brands].map((name, index) => (
              <div
                key={`${name}-${index}`}
                className="flex-none w-1/3 md:w-1/4 lg:w-1/6 px-4"
              >
                <div className="flex items-center justify-center h-20 bg-white rounded-xl border border-secondary-200 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                  <span className="text-secondary-500 font-semibold text-lg">{name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-secondary-400 text-center mt-8">
          Certains projets ont été réalisés en tant que sous-traitant ou partenaire technique, pour le compte d'agences ou de prestataires intermédiaires.
        </p>

        {/* Section Partenaires */}
        <div className="mt-20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Partenaires</h3>
          </div>
          <div className="overflow-hidden" ref={partnersRef}>
            <div className="flex">
              {[...partners, ...partners, ...partners].map((name, index) => (
                <div
                  key={`${name}-${index}`}
                  className="flex-none w-1/2 md:w-1/3 lg:w-1/4 px-4"
                >
                  <div className="flex items-center justify-center h-16 bg-white rounded-xl border border-secondary-200 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer">
                    <span className="text-secondary-500 font-semibold">{name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}

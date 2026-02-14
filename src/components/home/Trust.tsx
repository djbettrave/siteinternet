'use client'

import { useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'

// Marques pour lesquelles nous avons réalisé des projets
const brands = [
  { name: 'Dior', logo: '/images/logos/clients/dior.svg', width: 120 },
  { name: 'Chanel', logo: '/images/logos/clients/chanel.svg', width: 100 },
  { name: 'Guerlain', logo: '/images/logos/clients/guerlain.svg', width: 120 },
  { name: 'Hugo Boss', logo: '/images/logos/clients/hugo-boss.svg', width: 100 },
  { name: 'Cacharel', logo: '/images/logos/clients/cacharel.svg', width: 120 },
  { name: 'Coty', logo: '/images/logos/clients/coty.svg', width: 300 },
  { name: 'Kiehl\'s', logo: '/images/logos/clients/kiehls.svg', width: 90 },
  { name: 'Rimowa', logo: '/images/logos/clients/rimowa.svg', width: 100 },
  { name: 'Samsung', logo: '/images/logos/clients/samsung.svg', width: 100 },
  { name: 'Balmain', logo: '/images/logos/clients/balmain.svg', width: 110 },
  { name: 'Berluti', logo: '/images/logos/clients/berluti.svg', width: 110 },
  { name: 'Intersnack', logo: '/images/logos/clients/intersnack.png', width: 110 },
  { name: 'Byredo', logo: '/images/logos/clients/byredo.svg', width: 100 },
  { name: 'Polène', logo: '/images/logos/clients/polene.jpeg', width: 100 },
]

// Partenaires institutionnels
const partners = [
  { name: 'BPI France', logo: '/images/logos/partenaires/bpifrance.png' },
  { name: 'French Tech', logo: '/images/logos/partenaires/french-tech.png' },
  { name: 'CCI France', logo: '/images/logos/partenaires/cci-france.png' },
  { name: 'Made in 92', logo: '/images/logos/partenaires/made-in-92.jpg' },
  { name: 'Technowest', logo: '/images/logos/partenaires/technowest.png' },
]

export default function Trust() {
  const [brandsRef, brandsApi] = useEmblaCarousel(
    { loop: true, align: 'start', slidesToScroll: 3 },
    []
  )
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set())

  const scrollPrev = useCallback(() => brandsApi?.scrollPrev(), [brandsApi])
  const scrollNext = useCallback(() => brandsApi?.scrollNext(), [brandsApi])

  const handleImageError = useCallback((logoPath: string) => {
    console.error(`Failed to load image: ${logoPath}`)
    setImageErrors(prev => new Set(prev).add(logoPath))
  }, [])

  return (
    <section className="py-24 bg-secondary-50">
      <div className="container-custom">
        {/* Projets réalisés pour */}
        <div className="text-center mb-8">
          <h2 className="section-title">Projets réalisés pour</h2>
        </div>

        {/* Carousel marques avec flèches */}
        <div className="relative">
          {/* Flèche gauche */}
          <button
            onClick={scrollPrev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-secondary-200 flex items-center justify-center hover:bg-secondary-50 transition-colors"
            aria-label="Précédent"
          >
            <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Flèche droite */}
          <button
            onClick={scrollNext}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white rounded-full shadow-md border border-secondary-200 flex items-center justify-center hover:bg-secondary-50 transition-colors"
            aria-label="Suivant"
          >
            <svg className="w-5 h-5 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden mx-6" ref={brandsRef}>
            <div className="flex">
              {brands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-none w-1/4 md:w-1/5 lg:w-[11.11%] px-2"
                >
                  <div className="flex items-center justify-center h-14 bg-white rounded-lg border border-secondary-200 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer px-3">
                    {imageErrors.has(brand.logo) ? (
                      <svg className="w-8 h-8 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    ) : (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        width={brand.width}
                        height={32}
                        className="object-contain max-h-8"
                        onError={() => handleImageError(brand.logo)}
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <p className="text-[10px] italic text-secondary-400 text-center mt-6">
          Certains projets ont été réalisés en tant que sous-traitant ou partenaire technique, pour le compte d'agences ou de prestataires intermédiaires.
        </p>

        {/* Section Partenaires */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-secondary-900 mb-2">Partenaires</h3>
          </div>
          <div className="flex justify-center gap-4">
            {partners.map((partner) => (
              <div
                key={partner.name}
                className="flex items-center justify-center h-14 w-36 bg-white rounded-lg border border-secondary-200 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer px-3"
              >
                {imageErrors.has(partner.logo) ? (
                  <svg className="w-8 h-8 text-secondary-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                ) : (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={90}
                    height={32}
                    className="object-contain max-h-8"
                    onError={() => handleImageError(partner.logo)}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

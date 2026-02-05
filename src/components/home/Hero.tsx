import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 overflow-hidden">
      <div className="container-custom relative">
        <div className="py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">Réponse sous 24h garantie</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Créativité &{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-300 to-primary-500">
                Technologie
              </span>
              <br />au service de vos projets
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-secondary-300 mb-8 max-w-2xl">
              Bureau d'étude spécialisé en impression 3D et développement électronique.
              Du prototype à la série, nous transformons vos idées en réalité.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary text-lg px-8 py-4">
                Demander un devis gratuit
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/realisations" className="btn-outline border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4">
                Voir nos réalisations
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-12 pt-8 border-t border-white/10">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-white font-semibold text-sm lg:text-base">5/5</span>
                <span className="text-secondary-400 text-xs lg:text-sm">avis Google</span>
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm">
                <span className="text-white font-semibold">+300</span> projets
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm">
                <span className="text-white font-semibold">5+</span> secteurs d'expertise
              </div>
              <div className="h-6 w-px bg-white/20 hidden sm:block"></div>
              <div className="text-secondary-400 text-xs lg:text-sm flex items-center gap-1.5">
                <span className="text-base lg:text-lg">🇫🇷</span>
                <span className="text-white font-semibold whitespace-nowrap">Made in France</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"></div>
    </section>
  )
}

const stats = [
  { value: '4.9/5', label: 'Note moyenne', sublabel: 'sur nos projets' },
  { value: '+150', label: 'Projets', sublabel: 'réalisés' },
  { value: '24h', label: 'Réponse', sublabel: 'garantie' },
  { value: '6', label: 'Secteurs', sublabel: 'd\'expertise' },
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
          <p className="section-subtitle mx-auto">
            Une sélection de marques pour lesquelles nous avons réalisé des projets.
          </p>
        </div>

        {/* Noms des marques */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center mb-6">
          {brands.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center h-16 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <div className="text-secondary-400 font-semibold text-lg">{name}</div>
            </div>
          ))}
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
          <div className="flex flex-wrap justify-center gap-12 items-center">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center justify-center h-12 opacity-60 hover:opacity-100 transition-all duration-300"
              >
                <div className="text-secondary-400 font-semibold">{name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rating Banner */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-secondary-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary-900">4.9 sur 5</div>
                <div className="text-secondary-500">Basé sur +150 projets réalisés</div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-secondary-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Qualité validée</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Délais respectés</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Support réactif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

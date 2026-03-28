import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Qui sommes-nous ?',
  description: 'Découvrez Inphenix System, bureau d\'étude spécialisé en impression 3D et électronique. Notre histoire, nos valeurs et notre engagement qualité.',
  alternates: {
    canonical: 'https://www.inphenix-system.fr/qui-sommes-nous',
  },
}

const values = [
  {
    title: 'Expertise technique',
    description: 'Une maîtrise approfondie de l\'impression 3D et de l\'électronique, constamment mise à jour avec les dernières technologies.',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', // Ampoule (idée/expertise)
  },
  {
    title: 'Réactivité',
    description: 'Réponse sous 24h garantie. Nous comprenons l\'importance des délais dans vos projets.',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z', // Éclair (rapidité)
  },
  {
    title: 'Sur mesure',
    description: 'Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques.',
    icon: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4', // Sliders (personnalisation)
  },
  {
    title: 'Qualité',
    description: 'Contrôle qualité rigoureux sur chaque pièce. Nous ne livrons que ce dont nous sommes fiers.',
    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z', // Badge check (qualité)
  },
  {
    title: '🇫🇷 Made in France',
    description: 'Atelier basé à Suresnes. Fabrication locale, savoir-faire français, réactivité et proximité garanties.',
    icon: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z', // Map pin (localisation)
  },
]

const stats = [
  { value: '+300', label: 'Projets réalisés' },
  { value: '5+', label: 'Secteurs d\'expertise' },
  { value: '24h', label: 'Délai de réponse' },
  { value: '5/5', label: 'Avis Google' },
]

const capabilities = [
  {
    category: 'Impression 3D',
    items: ['FDM multi-matériaux', 'Résine haute précision', 'Grand format jusqu\'à 85 cm', 'Post-traitement et finitions'],
  },
  {
    category: 'Électronique',
    items: ['Conception de PCB', 'Motorisation', 'Systèmes embarqués', 'Programmation'],
  },
  {
    category: 'Services',
    items: ['Scan 3D', 'Modélisation CAO', 'Prototypage', 'Conseil technique'],
  },
]

export default function QuiSommesNousPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qui sommes-nous ?
            </h1>
            <p className="text-xl text-secondary-300">
              Un bureau d'étude passionné par la fabrication et l'innovation,
              au service de vos projets les plus ambitieux.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="section-title mb-6">Notre histoire</h2>
              <div className="space-y-4 text-secondary-600">
                <p>
                  <strong className="text-secondary-900">Inphenix System</strong> est né de la conviction
                  que la fabrication sur mesure doit être accessible à tous les créateurs,
                  entrepreneurs et entreprises.
                </p>
                <p>
                  Fort d'une double expertise en impression 3D et en développement électronique,
                  nous accompagnons nos clients de l'idée au produit fini. Cette combinaison
                  unique nous permet de proposer des solutions complètes, là où d'autres
                  se limitent à un seul domaine.
                </p>
                <p>
                  Aujourd'hui, nous travaillons avec des clients de tous secteurs :
                  retail, luxe, événementiel, architecture, robotique...
                  Chaque projet est une nouvelle aventure technique et créative.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-square">
              <Image
                src="/images/atelier/bureau-1.jpeg"
                alt="L'atelier Inphenix System"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary-600">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-primary-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos valeurs</h2>
            <p className="section-subtitle mx-auto">
              Ce qui guide notre travail au quotidien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-2xl p-8 text-center border border-secondary-200 hover:border-primary-300 transition-colors">
                {value.icon && (
                  <svg className="w-12 h-12 mx-auto mb-4 text-secondary-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.icon} />
                  </svg>
                )}
                <h3 className="text-xl font-semibold text-secondary-900 mb-3">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos capacités</h2>
            <p className="section-subtitle mx-auto">
              Un parc machine et une expertise pour répondre à tous vos besoins.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capabilities.map((cap) => (
              <div key={cap.category} className="card p-8 hover:shadow-lg hover:border-primary-300 transition-all duration-200">
                <h3 className="text-xl font-semibold text-secondary-900 mb-6">{cap.category}</h3>
                <ul className="space-y-3">
                  {cap.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-secondary-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement */}
      <section className="py-24 bg-secondary-900">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Notre engagement
            </h2>
            <p className="text-xl text-secondary-300 mb-8">
              "Chaque projet mérite une attention particulière.
              Nous ne sommes pas satisfaits tant que vous ne l'êtes pas.
              C'est aussi simple que ça."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="flex -space-x-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white font-semibold">5/5 sur Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="section-title mb-6">Travaillons ensemble</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Vous avez un projet ? Une idée ? Une question ?
              Nous sommes là pour vous accompagner.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Contactez-nous
              </Link>
              <Link href="/realisations" className="btn-outline">
                Voir nos réalisations
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

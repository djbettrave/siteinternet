'use client'

import { useState } from 'react'
import Link from 'next/link'

const projects = [
  {
    id: 1,
    title: 'Présentoir interactif parfumerie',
    category: 'Luxe',
    sector: 'luxe',
    services: ['Impression 3D FDM', 'Électronique'],
    description: 'Présentoir avec éclairage LED intégré et capteur de présence pour une grande maison de parfumerie.',
    image: '',
  },
  {
    id: 2,
    title: 'Maquette architecturale 1:50',
    category: 'Architecture',
    sector: 'architecture',
    services: ['Impression 3D Résine', 'Modélisation 3D'],
    description: 'Maquette de présentation pour concours architectural avec détails de façade haute précision.',
    image: '',
  },
  {
    id: 3,
    title: 'Installation événementielle 3m',
    category: 'Événementiel',
    sector: 'evenementiel',
    services: ['Impression Grand Format', 'Électronique'],
    description: 'Structure lumineuse modulaire de 3 mètres pour un salon professionnel.',
    image: '',
  },
  {
    id: 4,
    title: 'Prototype robot collaboratif',
    category: 'Robotique',
    sector: 'robotique',
    services: ['Impression 3D FDM', 'Électronique', 'Modélisation 3D'],
    description: 'Châssis et électronique de contrôle pour startup robotique.',
    image: '',
  },
  {
    id: 5,
    title: 'Display comptoir cosmétiques',
    category: 'Retail',
    sector: 'retail',
    services: ['Impression 3D FDM', 'Prototypage'],
    description: 'Série de 50 displays identiques pour déploiement en points de vente.',
    image: '',
  },
]

const filters = {
  sectors: [
    { value: 'all', label: 'Tous les secteurs' },
    { value: 'retail', label: 'Retail' },
    { value: 'luxe', label: 'Luxe' },
    { value: 'evenementiel', label: 'Événementiel' },
    { value: 'architecture', label: 'Architecture' },
    { value: 'robotique', label: 'Robotique' },
  ],
  services: [
    { value: 'all', label: 'Tous les services' },
    { value: 'Impression 3D FDM', label: 'Impression 3D FDM' },
    { value: 'Impression 3D Résine', label: 'Impression 3D Résine' },
    { value: 'Impression Grand Format', label: 'Grand Format' },
    { value: 'Électronique', label: 'Électronique' },
    { value: 'Modélisation 3D', label: 'Modélisation 3D' },
    { value: 'Prototypage', label: 'Prototypage' },
  ],
}

export default function RealisationsPage() {
  const [selectedSector, setSelectedSector] = useState('all')
  const [selectedService, setSelectedService] = useState('all')

  const filteredProjects = projects.filter((project) => {
    const matchesSector = selectedSector === 'all' || project.sector === selectedSector
    const matchesService = selectedService === 'all' || project.services.some(s =>
      s === selectedService
    )
    return matchesSector && matchesService
  })

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary-900 to-secondary-800 py-20">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Nos réalisations
            </h1>
            <p className="text-xl text-secondary-300">
              Découvrez une sélection de projets réalisés pour nos clients.
              Chaque projet est unique, adapté aux besoins spécifiques de chaque secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-secondary-50 border-b border-secondary-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-4">
            <select
              className="px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedSector}
              onChange={(e) => setSelectedSector(e.target.value)}
            >
              {filters.sectors.map((filter) => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>
            <select
              className="px-4 py-2 bg-white border border-secondary-200 rounded-lg text-secondary-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedService}
              onChange={(e) => setSelectedService(e.target.value)}
            >
              {filters.services.map((filter) => (
                <option key={filter.value} value={filter.value}>{filter.label}</option>
              ))}
            </select>
            {(selectedSector !== 'all' || selectedService !== 'all') && (
              <button
                onClick={() => { setSelectedSector('all'); setSelectedService('all') }}
                className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                Réinitialiser les filtres
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-600">Aucun projet ne correspond à ces filtres.</p>
            </div>
          ) : null}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <article key={project.id} className="card group">
                {/* Image Placeholder */}
                <div className="aspect-[4/3] bg-gradient-to-br from-secondary-100 to-secondary-200 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 mx-auto mb-4 bg-secondary-300/50 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-sm text-secondary-400">Image du projet</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-secondary-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-secondary-600 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {project.services.map((service) => (
                      <span
                        key={service}
                        className="text-xs text-secondary-500 bg-secondary-100 px-2 py-0.5 rounded"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA vers contact */}
          <div className="text-center mt-12">
            <Link href="/contact" className="btn-outline">
              Discuter de votre projet
            </Link>
          </div>
        </div>
      </section>

      {/* Devis instantané CTA */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="bg-white rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-secondary-900 mb-4">
                Obtenez un devis instantané pour votre fichier 3D
              </h2>
              <p className="text-secondary-600 mb-6">
                Téléchargez votre fichier 3D et recevez un devis automatique en quelques secondes.
                Idéal pour les pièces FDM ou Résine.
              </p>
              <a
                href="https://impression3d.inphenix-system.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex"
              >
                Obtenir mon devis instantané
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="w-48 h-48 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-20 h-20 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-primary-600">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Envie de créer votre projet ?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Discutons de votre idée. Nous vous accompagnons de la conception
              à la réalisation.
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

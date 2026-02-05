'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { ProjectImage } from '@/types/project'

type FilterStatus = 'all' | 'completed' | 'process'

// Mapping des services vers leurs URLs
const serviceUrlMap: Record<string, string> = {
  'Impression 3D FDM': '/services/impression-3d/fdm',
  'Impression 3D Résine': '/services/impression-3d/resine',
  'Impression Grand Format': '/services/impression-3d/grand-format',
  'Scan 3D': '/services/scan-3d',
  'Modélisation 3D': '/services/modelisation-3d',
  'Prototypage': '/services/prototypage',
  'Électronique & Motorisation': '/services/electronique',
}

export default function RealisationsPage() {
  const [projects, setProjects] = useState<ProjectImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedStatus, setSelectedStatus] = useState<FilterStatus>('completed')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    // Charger les projets depuis l'API
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data.projects || [])
        setLoading(false)
      })
      .catch(error => {
        console.error('Erreur lors du chargement des projets:', error)
        setLoading(false)
      })
  }, [])

  const filteredProjects = projects.filter((project) => {
    if (selectedStatus === 'all') return true
    return project.status === selectedStatus
  })

  // Scroll vers le haut quand le filtre change
  useEffect(() => {
    // Ne pas scroller au premier chargement
    if (projects.length === 0) return

    // Scroller vers la section des projets
    const projectsSection = document.querySelector('#projects-section')
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [selectedStatus, projects.length])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
    document.body.style.overflow = 'hidden'
  }

  // Gestion du clavier pour le lightbox
  useEffect(() => {
    if (!lightboxOpen) return

    const filteredLength = projects.filter((project) => {
      if (selectedStatus === 'all') return true
      return project.status === selectedStatus
    }).length

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        setCurrentImageIndex((prev) => (prev - 1 + filteredLength) % filteredLength)
      } else if (e.key === 'ArrowRight') {
        setCurrentImageIndex((prev) => (prev + 1) % filteredLength)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxOpen, projects, selectedStatus, closeLightbox])

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
              Découvrez nos projets terminés et suivez l'avancement de nos réalisations en cours.
              Chaque projet illustre notre expertise et notre engagement qualité.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-3 bg-secondary-50 border-b border-secondary-200 sticky top-20 z-40">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 items-center">
            <select
              className="px-3 py-1.5 bg-white border-2 border-secondary-300 rounded-lg text-secondary-700 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value as FilterStatus)}
            >
              <option value="completed">Projets clients</option>
              <option value="process">Notre atelier</option>
              <option value="all">Tous les projets</option>
            </select>
            {selectedStatus !== 'completed' && (
              <button
                onClick={() => setSelectedStatus('completed')}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium"
              >
                Réinitialiser
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section id="projects-section" className="py-16 bg-white">
        <div className="container-custom">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-secondary-900"></div>
              <p className="text-secondary-600 mt-4">Chargement des projets...</p>
            </div>
          ) : filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-secondary-600">
                Aucun projet ne correspond à ce filtre.
              </p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <article key={project.id} className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
                    {/* Image avec aspect ratio 4:3 */}
                    <div
                      className="aspect-[4/3] relative overflow-hidden bg-secondary-100 cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={project.path}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        style={{ objectPosition: project.objectPosition || 'center' }}
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />

                      {/* Overlay au hover avec badges services */}
                      <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/95 via-secondary-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                        {/* Badges services avec liens */}
                        <div className="flex flex-wrap gap-2 justify-center">
                          {(project.services.length > 0 ? project.services : ['Prototypage']).map((service, idx) => {
                            const serviceUrl = serviceUrlMap[service]
                            if (!serviceUrl) return (
                              <span key={idx} className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full border border-white/30">
                                {service}
                              </span>
                            )
                            return (
                              <Link
                                key={idx}
                                href={serviceUrl}
                                onClick={(e) => e.stopPropagation()}
                                className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-3 py-1.5 rounded-full border border-white/30 transition-colors"
                              >
                                {service}
                              </Link>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Compteur de projets */}
              <div className="text-center mt-8 text-sm text-secondary-600">
                {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} affiché{filteredProjects.length > 1 ? 's' : ''}
              </div>

              {/* CTA vers contact */}
              <div className="text-center mt-12">
                <Link href="/contact" className="btn-outline">
                  Discuter de votre projet
                </Link>
              </div>
            </>
          )}
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
            <div className="w-48 h-48 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center">
              <svg className="w-20 h-20 text-secondary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary-900">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Envie de créer votre projet ?
            </h2>
            <p className="text-xl text-secondary-300 mb-8">
              Discutons de votre idée. Nous vous accompagnons de la conception
              à la réalisation.
            </p>
            <Link href="/contact" className="bg-white text-secondary-900 hover:bg-secondary-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-block">
              Demander un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && filteredProjects[currentImageIndex] && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => closeLightbox()}
        >
          {/* Bouton fermer */}
          <button
            onClick={() => closeLightbox()}
            className="absolute top-4 right-4 text-white hover:text-secondary-300 transition-colors z-10"
            aria-label="Fermer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Bouton précédent */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImageIndex((prev) => (prev - 1 + filteredProjects.length) % filteredProjects.length)
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
              aria-label="Image précédente"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Bouton suivant */}
          {filteredProjects.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                setCurrentImageIndex((prev) => (prev + 1) % filteredProjects.length)
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-secondary-300 transition-colors bg-black/50 rounded-full p-3 backdrop-blur-sm"
              aria-label="Image suivante"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Contenu du lightbox */}
          <div
            className="relative max-w-7xl max-h-[90vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center mb-4">
              <Image
                src={filteredProjects[currentImageIndex].path}
                alt={filteredProjects[currentImageIndex].title}
                width={1920}
                height={1080}
                className="max-w-full max-h-[80vh] w-auto h-auto object-contain rounded-lg"
                priority
              />
            </div>

            {/* Badges de services */}
            <div className="flex flex-wrap gap-2 justify-center mt-4">
              {(filteredProjects[currentImageIndex].services.length > 0
                ? filteredProjects[currentImageIndex].services
                : ['Prototypage']
              ).map((service, idx) => {
                const serviceUrl = serviceUrlMap[service]
                if (!serviceUrl) return (
                  <span key={idx} className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
                    {service}
                  </span>
                )
                return (
                  <Link
                    key={idx}
                    href={serviceUrl}
                    className="text-sm font-medium text-white bg-white/20 backdrop-blur-sm hover:bg-white/30 px-4 py-2 rounded-full border border-white/30 transition-colors"
                  >
                    {service}
                  </Link>
                )
              })}
            </div>

            {/* Compteur */}
            {filteredProjects.length > 1 && (
              <div className="text-white/70 text-sm mt-4">
                {currentImageIndex + 1} / {filteredProjects.length}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

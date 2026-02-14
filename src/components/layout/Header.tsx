'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const services = [
  { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm', description: 'Filament haute résistance' },
  { name: 'Impression 3D Résine', href: '/services/impression-3d/resine', description: 'Précision et détails fins' },
  { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format', description: 'Pièces de grande taille' },
  { name: 'Scan 3D', href: '/services/scan-3d', description: 'Numérisation et rétro-ingénierie' },
  { name: 'Modélisation 3D', href: '/services/modelisation-3d', description: 'Conception sur mesure' },
  { name: 'Prototypage', href: '/services/prototypage', description: 'Du concept au prototype' },
  { name: 'Électronique & Motorisation', href: '/services/electronique', description: 'Développement sur mesure' },
]

const secteurs = [
  { name: 'Retail', href: '/secteurs/retail' },
  { name: 'Luxe', href: '/secteurs/luxe' },
  { name: 'Événementiel', href: '/secteurs/evenementiel' },
  { name: 'Architecture', href: '/secteurs/architecture' },
  { name: 'Robotique', href: '/secteurs/robotique' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [secteursOpen, setSecteursOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      // Auto-hide uniquement sur la page réalisations
      if (pathname !== '/realisations') {
        setIsVisible(true)
        return
      }

      const currentScrollY = window.scrollY

      if (currentScrollY < 50) {
        // Toujours visible en haut de page
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY) {
        // Scroll vers le bas - cacher
        setIsVisible(false)
      } else {
        // Scroll vers le haut - montrer
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, pathname])

  return (
    <header className={`bg-white border-b border-secondary-200 sticky top-0 z-50 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2.5">
              <Image
                src="/images/logos/inphenix/icon-only.svg"
                alt="Inphenix System"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <div className="flex items-center space-x-1">
                <span className="text-xl font-bold text-gradient">Inphenix</span>
                <span className="text-xl font-light text-secondary-600">System</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-0.5">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                className="px-3 py-1.5 text-sm text-secondary-700 hover:text-primary-600 font-medium flex items-center gap-1 transition-colors"
              >
                Services
                <svg className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                  className="absolute left-0 mt-0 w-72 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 z-50"
                >
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 mx-2 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <div className="text-sm font-medium text-secondary-900">{service.name}</div>
                      <div className="text-xs text-secondary-500">{service.description}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Secteurs Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setSecteursOpen(true)}
                onMouseLeave={() => setSecteursOpen(false)}
                className="px-3 py-1.5 text-sm text-secondary-700 hover:text-primary-600 font-medium flex items-center gap-1 transition-colors"
              >
                Secteurs
                <svg className={`w-4 h-4 transition-transform ${secteursOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {secteursOpen && (
                <div
                  onMouseEnter={() => setSecteursOpen(true)}
                  onMouseLeave={() => setSecteursOpen(false)}
                  className="absolute left-0 mt-0 w-56 bg-white rounded-xl shadow-lg border border-secondary-100 py-2 z-50"
                >
                  {secteurs.map((secteur) => (
                    <Link
                      key={secteur.href}
                      href={secteur.href}
                      className="block px-4 py-3 mx-2 rounded-lg hover:bg-primary-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-secondary-900">{secteur.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/realisations"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/realisations' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              Réalisations
            </Link>

            <Link
              href="/qui-sommes-nous"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/qui-sommes-nous' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              À propos
            </Link>

            <Link
              href="/contact"
              className={`px-3 py-1.5 text-sm font-medium transition-colors ${pathname === '/contact' ? 'text-primary-600' : 'text-secondary-700 hover:text-primary-600'}`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="https://impression3d.inphenix-system.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5"
            >
              Devis instantané
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-secondary-700 hover:text-primary-600"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6">
            <div className="space-y-1">
              <div className="py-2">
                <div className="font-semibold text-secondary-900 px-2 py-2">Services</div>
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 mx-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
              <div className="py-2 border-t border-secondary-100">
                <div className="font-semibold text-secondary-900 px-2 py-2">Secteurs</div>
                {secteurs.map((secteur) => (
                  <Link
                    key={secteur.href}
                    href={secteur.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 mx-2 text-secondary-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg"
                  >
                    {secteur.name}
                  </Link>
                ))}
              </div>
              <div className="py-2 border-t border-secondary-100">
                <Link
                  href="/realisations"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                >
                  Réalisations
                </Link>
                <Link
                  href="/qui-sommes-nous"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                >
                  À propos
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-2 text-secondary-700 hover:text-primary-600 font-medium"
                >
                  Contact
                </Link>
              </div>
              <div className="pt-4">
                <a
                  href="https://impression3d.inphenix-system.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="btn-primary w-full text-center flex items-center justify-center gap-2"
                >
                  Devis instantané
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

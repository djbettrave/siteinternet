import Link from 'next/link'
import { CONTACT_INFO } from '@/data/contact'

const services = [
  { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
  { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
  { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
  { name: 'Scan 3D', href: '/services/scan-3d' },
  { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
  { name: 'Prototypage', href: '/services/prototypage' },
  { name: 'Électronique & Motorisation', href: '/services/electronique' },
]

const secteurs = [
  { name: 'Retail', href: '/secteurs/retail' },
  { name: 'Luxe', href: '/secteurs/luxe' },
  { name: 'Événementiel', href: '/secteurs/evenementiel' },
  { name: 'Architecture', href: '/secteurs/architecture' },
  { name: 'Robotique', href: '/secteurs/robotique' },
]

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      {/* Engagement Banner */}
      <div className="bg-primary-600">
        <div className="container-custom py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Réponse sous 24h garantie</span>
            </div>
            <span className="hidden sm:block">•</span>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="font-semibold">Devis gratuit en ligne</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold text-white">Inphenix</span>
              <span className="text-2xl font-light text-secondary-400">System</span>
            </Link>
            <p className="text-secondary-300 mb-6">
              Bureau d'étude spécialisé en impression 3D et développement électronique.
              Du prototype à la série, nous donnons vie à vos projets.
            </p>
            <div className="flex items-center gap-2 text-primary-400">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-medium">Basé en France</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="text-secondary-300 hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Secteurs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Vous êtes dans...</h3>
            <ul className="space-y-3">
              {secteurs.map((secteur) => (
                <li key={secteur.href}>
                  <Link href={secteur.href} className="text-secondary-300 hover:text-white transition-colors">
                    {secteur.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/contact" className="text-secondary-300 hover:text-white transition-colors flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span>{CONTACT_INFO.email}</span>
                </Link>
              </li>
              <li>
                <a href={CONTACT_INFO.phoneHref} aria-label={`Appeler Inphenix System au ${CONTACT_INFO.phone}`} className="text-secondary-300 hover:text-white transition-colors flex items-start gap-3">
                  <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>{CONTACT_INFO.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-secondary-300">
                <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{CONTACT_INFO.address}<br />{CONTACT_INFO.city}</span>
              </li>
            </ul>
            <div className="mt-6 space-y-3">
              <Link href="/contact" className="btn-outline border-secondary-600 text-white hover:bg-secondary-800 w-full text-center block">
                Contact
              </Link>
              <a
                href="https://impression3d.inphenix-system.fr"
                target="_blank"
                rel="noopener noreferrer"
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
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary-500 text-sm">
              © {new Date().getFullYear()} Inphenix System. Tous droits réservés.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/mentions-legales" className="text-secondary-500 hover:text-white text-sm transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-secondary-500 hover:text-white text-sm transition-colors">
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

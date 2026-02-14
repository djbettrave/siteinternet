'use client'

import { useState, useEffect, useRef } from 'react'
import Script from 'next/script'
import Link from 'next/link'
import { CONTACT_INFO } from '@/data/contact'

// Déclarer le type global pour Turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (element: HTMLElement, options: {
        sitekey: string
        callback: (token: string) => void
        'error-callback'?: () => void
        'expired-callback'?: () => void
        theme?: 'light' | 'dark' | 'auto'
        size?: 'normal' | 'compact'
      }) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

const services = [
  'Impression 3D FDM',
  'Impression 3D Résine',
  'Impression Grand Format',
  'Scan 3D',
  'Modélisation 3D',
  'Prototypage',
  'Électronique',
  'Autre',
]

const sectors = [
  'Retail',
  'Luxe',
  'Événementiel',
  'Architecture',
  'Robotique',
  'Autre',
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    sector: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string>('')
  const [turnstileLoaded, setTurnstileLoaded] = useState(false)
  const turnstileRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)

  // Initialiser Turnstile quand le script est chargé
  useEffect(() => {
    if (turnstileLoaded && turnstileRef.current && window.turnstile && !widgetIdRef.current) {
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '',
        callback: (token: string) => {
          setTurnstileToken(token)
        },
        'error-callback': () => {
          setTurnstileToken('')
        },
        'expired-callback': () => {
          setTurnstileToken('')
        },
        theme: 'light',
        size: 'normal',
      })
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [turnstileLoaded])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    // Vérifier que Turnstile est validé
    if (!turnstileToken) {
      setSubmitStatus({
        type: 'error',
        message: 'Veuillez valider le captcha anti-spam.',
      })
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          turnstileToken
        }),
      })

      if (response.ok) {
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          sector: '',
          message: '',
        })
        setSubmitStatus({
          type: 'success',
          message: 'Merci pour votre message ! Nous vous répondrons sous 24h.',
        })
        // Réinitialiser Turnstile
        setTurnstileToken('')
        if (widgetIdRef.current && window.turnstile) {
          window.turnstile.reset(widgetIdRef.current)
        }
      } else {
        const data = await response.json().catch(() => null)
        setSubmitStatus({
          type: 'error',
          message: data?.message || 'Une erreur est survenue. Veuillez réessayer ou nous contacter directement par email.',
        })
      }
    } catch {
      setSubmitStatus({
        type: 'error',
        message: 'Impossible de contacter le serveur. Vérifiez votre connexion ou contactez-nous directement par email.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      {/* Script Cloudflare Turnstile */}
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        onLoad={() => setTurnstileLoaded(true)}
        strategy="afterInteractive"
      />

      {/* Contact Section */}
      <section className="pt-16 pb-24 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-secondary-900 mb-8">Nos coordonnées</h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Email</h3>
                    <a href={CONTACT_INFO.emailHref} className="text-primary-600 hover:text-primary-700">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Téléphone</h3>
                    <a href={CONTACT_INFO.phoneHref} aria-label={`Appeler Inphenix System au ${CONTACT_INFO.phone}`} className="text-primary-600 hover:text-primary-700">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Adresse</h3>
                    <p className="text-secondary-600">
                      {CONTACT_INFO.address}<br />
                      {CONTACT_INFO.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary-900 mb-1">Réponse</h3>
                    <p className="text-secondary-600">Sous 24h garantie</p>
                  </div>
                </div>
              </div>

              {/* Devis Instantané Box */}
              <div className="mt-12 bg-secondary-100/85 rounded-2xl p-12 border border-secondary-200/60 min-h-[190px] flex flex-col items-center justify-center text-center">
                <svg className="w-16 h-16 text-primary-600 mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="font-bold text-secondary-900 mb-6 text-lg">
                  Vous avez un fichier 3D ?
                </p>
                <a
                  href={CONTACT_INFO.devisUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700 transition-colors text-base"
                >
                  Obtenez un devis instantané
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Engagement Box */}
              <div className="mt-8 bg-secondary-100/85 rounded-2xl p-4 border border-secondary-200/60">
                <h3 className="font-semibold text-secondary-900 mb-4">Notre engagement</h3>
                <ul className="space-y-3">
                  {[
                    'Réponse sous 24h',
                    'Devis gratuit et détaillé',
                    'Conseils techniques inclus',
                    'Confidentialité garantie',
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-secondary-600">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-secondary-100/85 rounded-2xl p-8 lg:p-12 border border-secondary-200/60">
                <h2 className="text-2xl font-bold text-secondary-900 mb-8">Décrivez votre projet</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-secondary-700 mb-2">
                        Entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Nom de votre entreprise"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        pattern="^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,5}[-\s\.]?[0-9]{1,5}$"
                        title="Format attendu : 06 12 34 56 78, +33 6 12 34 56 78, ou tout format international"
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="06 00 00 00 00 ou +33 6 00 00 00 00"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-secondary-700 mb-2">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="sector" className="block text-sm font-medium text-secondary-700 mb-2">
                        Votre secteur
                      </label>
                      <select
                        id="sector"
                        value={formData.sector}
                        onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                        className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white"
                      >
                        <option value="">Sélectionnez un secteur</option>
                        {sectors.map((sector) => (
                          <option key={sector} value={sector}>{sector}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Décrivez votre projet *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={8}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 border border-secondary-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                      placeholder="Décrivez votre projet, vos besoins, vos contraintes (dimensions, matériaux, délais, budget...)."
                    />
                  </div>

                  <p className="text-sm text-secondary-500">
                    Besoin d'envoyer un fichier 3D ? Mentionnez-le dans votre message, nous vous recontacterons pour le récupérer.
                  </p>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1 w-4 h-4 text-primary-600 border-secondary-300 rounded focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-secondary-600">
                      J'accepte que mes données soient utilisées pour traiter ma demande.
                      Consultez notre <Link href="/politique-confidentialite" className="text-primary-600 hover:underline">politique de confidentialité</Link>.
                    </label>
                  </div>

                  {/* Widget Turnstile anti-spam */}
                  <div ref={turnstileRef} className="flex justify-center"></div>

                  {submitStatus && (
                    <div
                      role="alert"
                      className={`p-4 rounded-lg text-sm ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 text-green-800 border border-green-200'
                          : 'bg-red-50 text-red-800 border border-red-200'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                    {isSubmitting ? (
                      <svg className="w-5 h-5 ml-2 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

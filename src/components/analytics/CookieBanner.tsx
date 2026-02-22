'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import Link from 'next/link'

const GA_ID = 'G-18ZDFXS5YV'
const CONSENT_KEY = 'cookie_consent'

declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
  }
}

export default function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'refused' | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY)
    if (stored === 'accepted') {
      setConsent('accepted')
    } else if (stored === 'refused') {
      setConsent('refused')
    } else {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted')
    setConsent('accepted')
    setVisible(false)
  }

  const refuse = () => {
    localStorage.setItem(CONSENT_KEY, 'refused')
    setConsent('refused')
    setVisible(false)
  }

  return (
    <>
      {/* GA4 — chargé uniquement après consentement */}
      {consent === 'accepted' && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
          onLoad={() => {
            window.dataLayer = window.dataLayer || []
            window.gtag = function (...args: unknown[]) { window.dataLayer.push(args) }
            window.gtag('js', new Date())
            window.gtag('config', GA_ID)
          }}
        />
      )}

      {/* Banner cookies */}
      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-secondary-900/95 backdrop-blur-sm border-t border-secondary-700 px-4 py-4 shadow-lg">
          <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-secondary-200 leading-relaxed">
                <span className="font-semibold text-white">Cookies analytiques</span>
                {' · '}
                Nous utilisons Google Analytics pour améliorer votre expérience.
                Aucune donnée n&apos;est partagée à des fins publicitaires.
              </p>
              <Link
                href="/politique-confidentialite"
                className="inline-flex items-center gap-1 text-xs text-secondary-400 hover:text-primary-400 transition-colors mt-1"
              >
                Politique de confidentialité
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M4.22 11.78a.75.75 0 0 1 0-1.06L9.44 5.5H5.75a.75.75 0 0 1 0-1.5h5.5a.75.75 0 0 1 .75.75v5.5a.75.75 0 0 1-1.5 0V6.56l-5.22 5.22a.75.75 0 0 1-1.06 0Z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button
                onClick={refuse}
                className="text-sm px-4 py-2 text-secondary-300 border border-secondary-600 rounded-lg hover:bg-secondary-800 transition-colors"
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="text-sm px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
              >
                Accepter
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

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
        <div className="fixed bottom-0 left-0 right-0 z-[9999] bg-secondary-900 border-t border-secondary-700 px-4 py-4">
          <div className="container-custom flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-sm text-secondary-300 leading-relaxed">
              Nous utilisons des cookies pour mesurer notre audience (Google Analytics).{' '}
              <Link href="/politique-confidentialite" className="text-white underline hover:text-primary-400 transition-colors">
                En savoir plus
              </Link>
            </p>
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

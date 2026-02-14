import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://inphenix-system.fr'),
  title: {
    default: 'Inphenix System | Bureau d\'étude Impression 3D & Électronique',
    template: '%s | Inphenix System'
  },
  description: 'Bureau d\'étude spécialisé en impression 3D (FDM, résine, grand format) et développement électronique. Prototypage rapide, scan 3D, modélisation. Devis en ligne gratuit.',
  keywords: ['impression 3D', 'prototypage rapide', 'électronique', 'bureau d\'étude', 'scan 3D', 'modélisation 3D', 'FDM', 'résine'],
  authors: [{ name: 'Inphenix System' }],
  creator: 'Inphenix System',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://inphenix-system.fr',
    siteName: 'Inphenix System',
    title: 'Inphenix System | Bureau d\'étude Impression 3D & Électronique',
    description: 'Bureau d\'étude spécialisé en impression 3D et développement électronique. Prototypage rapide pour tous secteurs.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Inphenix System | Impression 3D & Électronique',
    description: 'Bureau d\'étude spécialisé en impression 3D et développement électronique.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema />
      </head>
      <body className={`${inter.className} bg-white text-secondary-900`}>
        {/* Tarteaucitron - Gestion des cookies RGPD */}
        <Script
          src="https://cdn.jsdelivr.net/npm/tarteaucitronjs@1.17.0/tarteaucitron.min.js"
          strategy="afterInteractive"
        />
        <Script id="tarteaucitron-init" strategy="afterInteractive">
          {`
            tarteaucitron.init({
              "privacyUrl": "/politique-confidentialite",
              "bodyPosition": "bottom",
              "hashtag": "#tarteaucitron",
              "cookieName": "tarteaucitron",
              "orientation": "bottom",
              "groupServices": false,
              "showDetailsOnClick": true,
              "serviceDefaultState": "wait",
              "showAlertSmall": false,
              "cookieslist": false,
              "closePopup": false,
              "showIcon": true,
              "iconPosition": "BottomLeft",
              "adblocker": false,
              "DenyAllCta": true,
              "AcceptAllCta": true,
              "highPrivacy": true,
              "alwaysNeedConsent": false,
              "handleBrowserDNTRequest": false,
              "removeCredit": false,
              "moreInfoLink": true,
              "useExternalCss": false,
              "useExternalJs": false,
              "mandatory": true,
              "mandatoryCta": true,
              "googleConsentMode": false
            });
          `}
        </Script>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

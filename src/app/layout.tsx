import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import TarteaucitronInit from '@/components/analytics/TarteaucitronInit'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://inphenix-system.fr'),
  title: {
    default: 'Impression 3D Grand Format & Sur Mesure | Inphenix',
    template: '%s | Inphenix System'
  },
  description: 'Impression 3D grand format, XXL et sur mesure. FDM, résine, pièces monobloc sans assemblage. Devis instantané gratuit en ligne.',
  keywords: ['impression 3D', 'impression 3D grand format', 'impression 3D XXL', 'impression 3D sur mesure', 'pièce monobloc', 'devis instantané', 'FDM', 'résine', 'prototypage rapide', 'scan 3D', 'modélisation 3D'],
  authors: [{ name: 'Inphenix System' }],
  creator: 'Inphenix System',
  alternates: {
    canonical: 'https://www.inphenix-system.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://inphenix-system.fr',
    siteName: 'Inphenix System',
    title: 'Impression 3D Grand Format & Sur Mesure | Inphenix',
    description: 'Impression 3D grand format, XXL et sur mesure. FDM, résine, pièces monobloc sans assemblage. Devis instantané gratuit.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Impression 3D Grand Format & Sur Mesure | Inphenix',
    description: 'Impression 3D grand format, XXL et sur mesure. FDM, résine, pièces monobloc. Devis instantané gratuit.',
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
        <TarteaucitronInit />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

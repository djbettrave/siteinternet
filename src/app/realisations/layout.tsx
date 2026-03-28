import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.inphenix-system.fr/realisations',
  },
}

export default function RealisationsLayout({ children }: { children: React.ReactNode }) {
  return children
}

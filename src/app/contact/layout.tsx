import { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.inphenix-system.fr/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}

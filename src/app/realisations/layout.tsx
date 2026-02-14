import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos réalisations',
  description: 'Découvrez nos projets terminés et en cours de fabrication. Impression 3D, électronique, prototypage : chaque projet illustre notre expertise technique et notre engagement qualité.',
}

export default function RealisationsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.evenementiel

export const metadata: Metadata = generateSectorMetadata(sector)

export default function EvenementielPage() {
  return <SectorPage sector={sector} />
}

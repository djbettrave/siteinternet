import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.luxe

export const metadata: Metadata = generateSectorMetadata(sector)

export default function LuxePage() {
  return <SectorPage sector={sector} />
}

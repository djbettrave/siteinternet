import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.architecture

export const metadata: Metadata = generateSectorMetadata(sector, '/secteurs/architecture')

export default function ArchitecturePage() {
  return <SectorPage sector={sector} />
}

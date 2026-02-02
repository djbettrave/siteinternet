import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.joaillerie

export const metadata: Metadata = generateSectorMetadata(sector)

export default function JoailleriePage() {
  return <SectorPage sector={sector} />
}

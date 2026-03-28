import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.retail

export const metadata: Metadata = generateSectorMetadata(sector, '/secteurs/retail')

export default function RetailPage() {
  return <SectorPage sector={sector} />
}

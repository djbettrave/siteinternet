import { Metadata } from 'next'
import SectorPage, { generateSectorMetadata } from '@/components/templates/SectorPage'
import { sectorsData } from '@/data/sectors'

const sector = sectorsData.robotique

export const metadata: Metadata = generateSectorMetadata(sector)

export default function RobotiquePage() {
  return <SectorPage sector={sector} />
}

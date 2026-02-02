import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['electronique']

export const metadata: Metadata = generateServiceMetadata(service)

export default function ElectroniquePage() {
  return <ServicePage service={service} />
}

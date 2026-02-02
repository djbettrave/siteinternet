import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-grand-format']

export const metadata: Metadata = generateServiceMetadata(service)

export default function GrandFormatPage() {
  return <ServicePage service={service} />
}

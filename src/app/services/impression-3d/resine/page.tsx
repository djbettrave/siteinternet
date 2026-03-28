import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-resine']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/resine')

export default function ResinePage() {
  return <ServicePage service={service} />
}

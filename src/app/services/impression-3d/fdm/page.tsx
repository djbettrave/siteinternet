import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['impression-3d-fdm']

export const metadata: Metadata = generateServiceMetadata(service, '/services/impression-3d/fdm')

export default function FDMPage() {
  return <ServicePage service={service} />
}

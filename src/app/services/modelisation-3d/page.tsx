import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['modelisation-3d']

export const metadata: Metadata = generateServiceMetadata(service, '/services/modelisation-3d')

export default function Modelisation3DPage() {
  return <ServicePage service={service} />
}

import { Metadata } from 'next'
import ServicePage, { generateServiceMetadata } from '@/components/templates/ServicePage'
import { servicesData } from '@/data/services'

const service = servicesData['prototypage']

export const metadata: Metadata = generateServiceMetadata(service)

export default function PrototypagePage() {
  return <ServicePage service={service} />
}

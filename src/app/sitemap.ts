import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.inphenix-system.fr'

  const staticPages = [
    '',
    '/services',
    '/services/impression-3d/fdm',
    '/services/impression-3d/resine',
    '/services/impression-3d/grand-format',
    '/services/scan-3d',
    '/services/modelisation-3d',
    '/services/prototypage',
    '/services/electronique',
    '/secteurs',
    '/secteurs/retail',
    '/secteurs/luxe',
    '/secteurs/evenementiel',
    '/secteurs/architecture',
    '/secteurs/robotique',
    '/realisations',
    '/qui-sommes-nous',
    '/contact',
  ]

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/secteurs/') || route.includes('/services/') ? 0.8 : 0.6,
  }))
}

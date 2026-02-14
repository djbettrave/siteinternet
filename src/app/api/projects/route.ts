import { NextResponse } from 'next/server'
import { readdir, readFile, access } from 'fs/promises'
import { join } from 'path'
import { unstable_cache } from 'next/cache'

// Mapping des mots-clés dans les noms de fichiers vers les services réels
const serviceKeywordMap: Record<string, string[]> = {
  'fdm': ['Impression 3D FDM'],
  'résine': ['Impression 3D Résine'],
  'resine': ['Impression 3D Résine'],
  'grand format': ['Impression Grand Format'],
  'scan': ['Scan 3D'],
  'modélisation': ['Modélisation 3D'],
  'modelisation': ['Modélisation 3D'],
  'prototypage': ['Prototypage'],
  'électronique': ['Électronique & Motorisation'],
  'electronique': ['Électronique & Motorisation'],
  'motorisation': ['Électronique & Motorisation'],
  'led': ['Électronique & Motorisation'],
  'lumière': ['Électronique & Motorisation'],
  'lumiere': ['Électronique & Motorisation'],
}

// Fonction pour extraire les services depuis le nom de fichier
function extractServicesFromFilename(filename: string): string[] {
  const lowerFilename = filename.toLowerCase()
  const services = new Set<string>()

  // Vérifier chaque mot-clé
  for (const [keyword, serviceNames] of Object.entries(serviceKeywordMap)) {
    if (lowerFilename.includes(keyword)) {
      serviceNames.forEach(service => services.add(service))
    }
  }

  return Array.from(services)
}

// Fonction pour générer un titre depuis le nom de fichier
function generateTitleFromFilename(filename: string): string {
  // Retirer l'extension
  const nameWithoutExt = filename.replace(/\.(jpg|jpeg|png|webp)$/i, '')

  // Capitaliser la première lettre
  return nameWithoutExt.charAt(0).toUpperCase() + nameWithoutExt.slice(1)
}

import type { ProjectImage } from '@/types/project'
export type { ProjectImage }

type PositionConfig = Record<string, Record<string, string>>

async function loadConfig(projectsPath: string): Promise<PositionConfig> {
  try {
    const configPath = join(projectsPath, 'config.json')
    const raw = await readFile(configPath, 'utf-8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

async function readImagesFromDir(dirPath: string, status: 'completed' | 'process', positions: Record<string, string>): Promise<ProjectImage[]> {
  try {
    await access(dirPath)
    const files = await readdir(dirPath)
    return files
      .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .map((file, index) => ({
        id: `${status}-${index}`,
        filename: file,
        path: `/images/projects/${status}/${file}`,
        status,
        title: generateTitleFromFilename(file),
        services: extractServicesFromFilename(file),
        objectPosition: positions[file] || 'center',
      }))
  } catch {
    return []
  }
}

// Cached function to load all projects - revalidates every hour
const getCachedProjects = unstable_cache(
  async () => {
    const publicImagesPath = join(process.cwd(), 'public', 'images', 'projects')
    const config = await loadConfig(publicImagesPath)

    const [completedItems, processItems] = await Promise.all([
      readImagesFromDir(join(publicImagesPath, 'completed'), 'completed', config.completed || {}),
      readImagesFromDir(join(publicImagesPath, 'process'), 'process', config.process || {}),
    ])

    return [...completedItems, ...processItems]
  },
  ['projects-list'],
  {
    revalidate: 3600, // Cache for 1 hour
    tags: ['projects']
  }
)

export async function GET() {
  try {
    const projects = await getCachedProjects()
    return NextResponse.json({ projects })
  } catch (error) {
    console.error('Erreur lors de la lecture des projets:', error)
    return NextResponse.json({ projects: [] }, { status: 500 })
  }
}

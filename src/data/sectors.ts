import type { SectorData } from '@/components/templates/SectorPage'

export const sectorsData: Record<string, SectorData> = {
  retail: {
    slug: 'retail',
    name: 'Retail',
    headline: 'Solutions sur mesure pour le Retail',
    subheadline: 'PLV, présentoirs, displays et solutions de merchandising innovantes grâce à l\'impression 3D et l\'électronique.',
    description: 'Inphenix System accompagne le secteur Retail avec des solutions de PLV, présentoirs et displays sur mesure. Impression 3D pour prototypes et petites séries, électronique intégrée pour displays interactifs.',
    useCases: [
      {
        title: 'PLV et Présentoirs',
        description: 'Créez des présentoirs uniques et impactants pour mettre en valeur vos produits en point de vente. Prototypage rapide pour tester vos concepts.',
        icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      },
      {
        title: 'Displays Interactifs',
        description: 'Intégrez de l\'électronique dans vos displays : éclairage LED, écrans, capteurs de présence. Créez une expérience client mémorable.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
      {
        title: 'Packaging Premium',
        description: 'Prototypez vos packagings avant production. Testez différentes formes et finitions pour trouver le design parfait.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Signalétique 3D',
        description: 'Lettres et logos en relief, totems, enseignes lumineuses. Donnez du volume à votre identité visuelle.',
        icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
      },
      {
        title: 'Corner et Shop-in-Shop',
        description: 'Éléments modulaires et personnalisés pour créer des espaces de vente immersifs et différenciants.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
      {
        title: 'Séries Limitées',
        description: 'Production de petites séries pour des opérations spéciales, lancements produits ou éditions collectors.',
        icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      },
    ],
    benefits: [
      'Prototypes fonctionnels en 24-48h pour validation rapide',
      'Matériaux variés : du plastique au métal, finitions premium',
      'Intégration électronique pour displays interactifs',
      'Flexibilité totale sur les formes et dimensions',
      'Petites séries économiques sans outillage',
      'Accompagnement de la conception à la livraison',
    ],
    services: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Électronique & Motorisation', href: '/services/electronique' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
    faqs: [
      {
        question: 'Quels délais pour un prototype de PLV ?',
        answer: 'Un prototype simple peut être réalisé en 24-48h. Pour les projets incluant électronique ou finitions spéciales, comptez 5-7 jours. Nous nous adaptons à vos contraintes de planning.',
      },
      {
        question: 'Pouvez-vous produire des séries pour un déploiement magasins ?',
        answer: 'Oui, nous réalisons nous-mêmes les productions en série, de quelques dizaines à plusieurs centaines de pièces selon vos besoins.',
      },
      {
        question: 'Quels matériaux pour un usage en point de vente ?',
        answer: 'Nous utilisons des matériaux résistants et esthétiques : PETG, ABS, résine haute définition. Finitions possibles : peinture, vernis, métallisation, soft-touch.',
      },
      {
        question: 'Pouvez-vous intégrer des écrans ou LED dans les displays ?',
        answer: 'Absolument. Nous concevons et intégrons des solutions électroniques : éclairage LED, écrans, capteurs, motorisation. C\'est notre spécialité combinée.',
      },
    ],
    cta: {
      title: 'Un projet PLV ou display en tête ?',
      description: 'Discutons de votre concept. Nous vous accompagnons de l\'idée au prototype, puis à la production.',
    },
    stats: [
      { value: '+25', label: 'projets Retail' },
      { value: '24-48h', label: 'prototypage rapide' },
      { value: '100%', label: 'sur mesure' },
    ],
  },

  luxe: {
    slug: 'luxe',
    name: 'Luxe',
    headline: 'L\'excellence au service du Luxe',
    subheadline: 'Packaging premium, displays haute couture et pièces d\'exception pour les maisons de luxe.',
    description: 'Inphenix System accompagne les maisons de luxe avec des solutions de packaging, displays et pièces sur mesure. Finitions premium, détails impeccables, confidentialité garantie.',
    useCases: [
      {
        title: 'Packaging de Prestige',
        description: 'Écrins, coffrets et packagings sur mesure. Prototypez vos concepts avant production pour garantir la perfection.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Displays Boutique',
        description: 'Présentoirs et vitrines sur mesure pour sublimer vos produits. Chaque détail compte dans l\'univers du luxe.',
        icon: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z',
      },
      {
        title: 'Objets Promotionnels',
        description: 'Cadeaux clients, objets collector, pièces uniques. Créez des objets désirables et mémorables.',
        icon: 'M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7',
      },
      {
        title: 'Prototypes Confidentiels',
        description: 'Développement de nouveaux produits en toute discrétion. NDA et process sécurisés pour protéger vos innovations.',
        icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
      },
      {
        title: 'PLV Premium',
        description: 'Glorifiers, totems et éléments de merchandising avec finitions luxe : métallisation, laquage, dorure.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
      {
        title: 'Pièces Événementielles',
        description: 'Installations pour vos événements VIP, lancements produits, défilés. Impact visuel garanti.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
    ],
    benefits: [
      'Finitions premium : laquage, dorure, métallisation, soft-touch',
      'Précision extrême grâce à l\'impression résine haute définition',
      'Confidentialité garantie par NDA et process sécurisés',
      'Accompagnement créatif et technique dédié',
      'Réactivité pour les deadlines serrées du luxe',
      'Petites séries et pièces uniques',
    ],
    services: [
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
    faqs: [
      {
        question: 'Garantissez-vous la confidentialité de nos projets ?',
        answer: 'Absolument. Nous signons systématiquement des accords de confidentialité (NDA). Nos process internes garantissent la discrétion totale sur vos projets.',
      },
      {
        question: 'Quelles finitions proposez-vous pour le luxe ?',
        answer: 'Nous proposons : laquage brillant ou mat, dorure, argenture, métallisation, soft-touch, textures sur mesure. Nous nous adaptons à vos standards de qualité.',
      },
      {
        question: 'Pouvez-vous reproduire fidèlement un design existant ?',
        answer: 'Oui, grâce au scan 3D et à notre expertise en modélisation. Nous reproduisons vos pièces existantes avec une précision au dixième de millimètre.',
      },
      {
        question: 'Quels sont vos délais pour un prototype packaging luxe ?',
        answer: 'Un prototype haute finition demande généralement 5-10 jours. Pour les urgences, nous proposons des délais accélérés sur devis.',
      },
    ],
    cta: {
      title: 'Un projet d\'exception à concrétiser ?',
      description: 'Nous comprenons les exigences du luxe. Parlons de votre projet en toute confidentialité.',
    },
    stats: [
      { value: '+40', label: 'projets Luxe' },
      { value: '0.1mm', label: 'précision résine' },
      { value: 'NDA', label: 'confidentialité' },
    ],
  },

  evenementiel: {
    slug: 'evenementiel',
    name: 'Événementiel',
    headline: 'Créez l\'impact pour vos événements',
    subheadline: 'Installations spectaculaires, décors sur mesure et expériences immersives pour marquer les esprits.',
    description: 'Inphenix System crée des installations et décors sur mesure pour l\'événementiel : salons, lancements produits, soirées corporate, spectacles. Impact visuel et réalisation technique garantis.',
    useCases: [
      {
        title: 'Stands et Salons',
        description: 'Éléments de stand uniques et différenciants. Captez l\'attention avec des formes impossibles en fabrication traditionnelle.',
        icon: 'M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4',
      },
      {
        title: 'Installations Artistiques',
        description: 'Sculptures, structures monumentales, œuvres interactives. Donnez vie à vos concepts les plus ambitieux.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
      {
        title: 'Décors de Scène',
        description: 'Éléments de décor pour spectacles, concerts, théâtre. Légèreté et résistance pour les contraintes scéniques.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
      {
        title: 'Photo Booths',
        description: 'Cadres et installations pour animations photo. Intégration de lumières, écrans et capteurs possibles.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
      {
        title: 'Signalétique Événementielle',
        description: 'Lettrages 3D, totems directionnels, éléments de balisage. Cohérence graphique parfaite.',
        icon: 'M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z',
      },
      {
        title: 'Expériences Interactives',
        description: 'Installations avec électronique intégrée : capteurs, lumières réactives, éléments motorisés.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
    ],
    benefits: [
      'Impression grand format jusqu\'à 85 cm en un seul bloc, sans limite par assemblage',
      'Délais courts compatibles avec les plannings événementiels',
      'Matériaux légers et résistants pour le transport',
      'Intégration électronique pour installations interactives',
      'Assemblage et finition en atelier',
      'Livraison et installation sur site possible',
    ],
    services: [
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Électronique & Motorisation', href: '/services/electronique' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
    faqs: [
      {
        question: 'Quelle taille maximale pouvez-vous imprimer ?',
        answer: 'Notre imprimante grand format permet des pièces jusqu\'à 85 cm de haut en un seul bloc. Pour les installations plus grandes, nous assemblons plusieurs éléments avec des techniques garantissant un résultat invisible - sans limite de taille.',
      },
      {
        question: 'Pouvez-vous livrer et installer sur site ?',
        answer: 'Oui, nous proposons la livraison et l\'installation sur site pour les projets d\'envergure. Nous nous coordonnons avec vos équipes techniques.',
      },
      {
        question: 'Les matériaux résistent-ils en extérieur ?',
        answer: 'Nous utilisons des matériaux adaptés à l\'usage extérieur (ASA, PETG traité) et des finitions protectrices (vernis UV). Durée d\'exposition et conditions à préciser pour le choix optimal.',
      },
      {
        question: 'Quel budget prévoir pour une installation événementielle ?',
        answer: 'Les budgets varient de quelques centaines d\'euros pour des éléments simples à plusieurs milliers pour des installations complexes. Nous établissons un devis détaillé après étude de votre projet.',
      },
    ],
    cta: {
      title: 'Un événement à marquer ?',
      description: 'De l\'idée à l\'installation, nous créons des éléments qui captent l\'attention et créent le souvenir.',
    },
    stats: [
      { value: '+35', label: 'projets Événementiel' },
      { value: '85cm', label: 'monobloc max' },
      { value: '48h', label: 'prototypage express' },
    ],
  },

  architecture: {
    slug: 'architecture',
    name: 'Architecture',
    headline: 'Donnez forme à vos projets architecturaux',
    subheadline: 'Maquettes de présentation, prototypes de composants et solutions sur mesure pour architectes et constructeurs.',
    description: 'Inphenix System accompagne les architectes et professionnels du BTP avec des maquettes de présentation, prototypes de composants et pièces sur mesure. Précision et rendu professionnel garantis.',
    useCases: [
      {
        title: 'Maquettes de Présentation',
        description: 'Maquettes architecturales de haute qualité pour vos présentations clients, concours et permis de construire.',
        icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
      },
      {
        title: 'Prototypes de Composants',
        description: 'Testez vos solutions techniques : éléments de façade, systèmes d\'assemblage, pièces sur mesure.',
        icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      },
      {
        title: 'Mobilier Urbain',
        description: 'Prototypage de mobilier urbain, bornes, éléments de signalétique. Du concept au test grandeur nature.',
        icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
      },
      {
        title: 'Éléments Décoratifs',
        description: 'Claustras, moulures, éléments ornementaux sur mesure. Reproduction ou création de pièces uniques.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
      {
        title: 'Numérisation de l\'Existant',
        description: 'Scan 3D de bâtiments, éléments patrimoniaux, pièces à reproduire. Base précise pour vos projets.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      },
      {
        title: 'Bâtiment Intelligent',
        description: 'Prototypage de systèmes domotiques, capteurs environnementaux, interfaces de contrôle.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
    ],
    benefits: [
      'Maquettes précises à l\'échelle avec détails fins',
      'Matériaux simulant béton, bois, métal, verre',
      'Impression grand format pour maquettes d\'envergure',
      'Scan 3D pour numériser l\'existant',
      'Prototypes fonctionnels pour tests techniques',
      'Délais adaptés aux phases projet',
    ],
    services: [
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
    faqs: [
      {
        question: 'À quelle échelle réalisez-vous les maquettes ?',
        answer: 'Nous réalisons des maquettes de l\'échelle 1:500 à l\'échelle 1:20 selon vos besoins. L\'échelle est choisie en fonction du niveau de détail souhaité et des contraintes de taille.',
      },
      {
        question: 'Pouvez-vous travailler depuis mes fichiers BIM/CAO ?',
        answer: 'Oui, nous importons les formats courants : IFC, DWG, SKP, STEP, OBJ. Nous adaptons vos fichiers pour l\'impression et optimisons les détails.',
      },
      {
        question: 'Quel rendu pour simuler les matériaux de construction ?',
        answer: 'Nous proposons des finitions texturées et colorées simulant béton, bois, métal, verre dépoli. L\'impression résine permet des détails très fins.',
      },
    ],
    cta: {
      title: 'Un projet architectural à visualiser ?',
      description: 'Maquettes, prototypes ou scans : nous donnons une forme tangible à vos visions architecturales.',
    },
    stats: [
      { value: '+15', label: 'projets Architecture' },
      { value: '1:20', label: 'échelle min.' },
      { value: 'BIM', label: 'compatible' },
    ],
  },

  joaillerie: {
    slug: 'joaillerie',
    name: 'Joaillerie',
    headline: 'Précision ultime pour la Joaillerie',
    subheadline: 'Moules pour fonte à cire perdue, prototypes haute définition et outillage sur mesure pour créateurs et maisons de joaillerie.',
    description: 'Inphenix System accompagne les joailliers avec des solutions d\'impression résine haute précision pour moules cire perdue, prototypes et outillage. Détails au centième de millimètre.',
    useCases: [
      {
        title: 'Moules Cire Perdue',
        description: 'Impression directe de moules calcinables pour la fonte. Résines spéciales compatible bijouterie.',
        icon: 'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
      },
      {
        title: 'Prototypes de Création',
        description: 'Visualisez vos créations avant fonte. Validez les proportions, l\'ergonomie et l\'esthétique.',
        icon: 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
      },
      {
        title: 'Masters pour Moules',
        description: 'Créez des masters haute précision pour vos moules silicone. Production en série facilitée.',
        icon: 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
      },
      {
        title: 'Outillage sur Mesure',
        description: 'Gabarits de sertissage, supports de travail, outils spécifiques. Optimisez votre atelier.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
      {
        title: 'Numérisation de Pièces',
        description: 'Scan 3D de bijoux existants pour reproduction, modification ou archivage digital.',
        icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7',
      },
      {
        title: 'Pièces Contemporaines',
        description: 'Bijoux en impression directe pour créateurs. Formes impossibles en fabrication traditionnelle.',
        icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
      },
    ],
    benefits: [
      'Précision au centième de millimètre (0.025mm)',
      'Résines calcinables compatibles fonte',
      'Surface lisse, détails impeccables',
      'Scan 3D pour reproduction fidèle',
      'Délais courts pour itérations rapides',
      'Confidentialité de vos créations',
    ],
    services: [
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
    faqs: [
      {
        question: 'Vos résines sont-elles compatibles avec la fonte à cire perdue ?',
        answer: 'Oui, nous utilisons des résines calcinables spécialement formulées pour la bijouterie. Elles brûlent sans résidu et donnent d\'excellents résultats en fonte.',
      },
      {
        question: 'Quelle précision pour les détails fins ?',
        answer: 'Notre résolution atteint 0.025mm, permettant de reproduire les détails les plus fins : gravures, textures, microreliefs. Idéal pour la joaillerie de précision.',
      },
      {
        question: 'Pouvez-vous scanner et reproduire un bijou ancien ?',
        answer: 'Oui, nous scannons vos pièces existantes avec une précision de 0.05mm. Nous pouvons ensuite reproduire, modifier ou restaurer numériquement avant impression.',
      },
      {
        question: 'Quels formats de fichiers acceptez-vous ?',
        answer: 'Nous travaillons avec les formats joaillerie courants : STL, OBJ, 3DM (Rhino), STEP. Nous proposons aussi un service de modélisation si vous n\'avez qu\'un croquis.',
      },
    ],
    cta: {
      title: 'Une création joaillière à concrétiser ?',
      description: 'De l\'esquisse au moule, nous accompagnons vos créations avec une précision de joaillier.',
    },
    stats: [
      { value: '+10', label: 'projets Joaillerie' },
      { value: '0.025mm', label: 'précision' },
      { value: '24h', label: 'moules rapides' },
    ],
  },

  robotique: {
    slug: 'robotique',
    name: 'Robotique',
    headline: 'Du prototype au robot fonctionnel',
    subheadline: 'Châssis, boîtiers, pièces mécaniques et électronique embarquée pour vos projets robotiques.',
    description: 'Inphenix System accompagne les projets robotiques de A à Z : conception mécanique, impression 3D de pièces fonctionnelles, développement électronique et motorisation. Votre partenaire technique complet.',
    useCases: [
      {
        title: 'Châssis et Structures',
        description: 'Conception et fabrication de châssis robotiques. Matériaux techniques pour légèreté et résistance.',
        icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
      },
      {
        title: 'Boîtiers Électroniques',
        description: 'Boîtiers sur mesure pour vos cartes et composants. Optimisés pour la dissipation thermique et l\'accessibilité.',
        icon: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
      },
      {
        title: 'Pièces Mécaniques',
        description: 'Engrenages, supports de capteurs, fixations sur mesure. Pièces fonctionnelles en matériaux techniques.',
        icon: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
      },
      {
        title: 'Électronique Embarquée',
        description: 'Développement de cartes de contrôle, gestion moteurs, interfaces capteurs. Du schéma au PCB fonctionnel.',
        icon: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z',
      },
      {
        title: 'Systèmes de Motorisation',
        description: 'Intégration de moteurs, servos, actionneurs. Conception des transmissions et mécanismes.',
        icon: 'M13 10V3L4 14h7v7l9-11h-7z',
      },
      {
        title: 'Prototypes Fonctionnels',
        description: 'Assemblage complet de prototypes mécatroniques. Tests et itérations rapides.',
        icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
      },
    ],
    benefits: [
      'Expertise combinée mécanique + électronique',
      'Matériaux techniques haute performance (Nylon, CF, PC)',
      'Conception optimisée pour l\'impression 3D',
      'Développement électronique sur mesure',
      'Itérations rapides pour R&D',
      'Accompagnement de l\'idée au prototype fonctionnel',
    ],
    services: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Électronique & Motorisation', href: '/services/electronique' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
    faqs: [
      {
        question: 'Quels matériaux pour des pièces robotiques résistantes ?',
        answer: 'Nous utilisons des matériaux techniques : Nylon (PA12), Nylon chargé fibre de carbone, PETG, PC. Choix selon vos contraintes de résistance, flexibilité et poids.',
      },
      {
        question: 'Pouvez-vous développer l\'électronique de contrôle ?',
        answer: 'Oui, nous concevons des cartes électroniques sur mesure : contrôle moteur, acquisition capteurs, communication, alimentation. Du schéma au PCB assemblé.',
      },
      {
        question: 'Accompagnez-vous les startups robotique ?',
        answer: 'Absolument. Nous accompagnons de nombreuses startups en phase de R&D et prototypage. Nous nous adaptons à vos contraintes de budget et timeline.',
      },
      {
        question: 'Pouvez-vous produire des petites séries ?',
        answer: 'Oui, nous réalisons nous-mêmes les productions en série, des petites séries aux volumes plus importants selon vos besoins.',
      },
    ],
    cta: {
      title: 'Un projet robotique à développer ?',
      description: 'De la mécanique à l\'électronique, nous sommes votre partenaire technique pour concrétiser vos robots.',
    },
    stats: [
      { value: '+20', label: 'projets Robotique' },
      { value: 'PA12-CF', label: 'matériaux techniques' },
      { value: '360°', label: 'accompagnement' },
    ],
  },
}

export const sectorsList = Object.values(sectorsData)

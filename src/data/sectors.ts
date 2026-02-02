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
      },
      {
        title: 'Displays Interactifs',
        description: 'Intégrez de l\'électronique dans vos displays : éclairage LED, écrans, capteurs de présence. Créez une expérience client mémorable.',
      },
      {
        title: 'Packaging Premium',
        description: 'Prototypez vos packagings avant production. Testez différentes formes et finitions pour trouver le design parfait.',
      },
      {
        title: 'Signalétique 3D',
        description: 'Lettres et logos en relief, totems, enseignes lumineuses. Donnez du volume à votre identité visuelle.',
      },
      {
        title: 'Corner et Shop-in-Shop',
        description: 'Éléments modulaires et personnalisés pour créer des espaces de vente immersifs et différenciants.',
      },
      {
        title: 'Séries Limitées',
        description: 'Production de petites séries pour des opérations spéciales, lancements produits ou éditions collectors.',
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
      { value: '+40', label: 'projets Retail' },
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
      },
      {
        title: 'Displays Boutique',
        description: 'Présentoirs et vitrines sur mesure pour sublimer vos produits. Chaque détail compte dans l\'univers du luxe.',
      },
      {
        title: 'Objets Promotionnels',
        description: 'Cadeaux clients, objets collector, pièces uniques. Créez des objets désirables et mémorables.',
      },
      {
        title: 'Prototypes Confidentiels',
        description: 'Développement de nouveaux produits en toute discrétion. NDA et process sécurisés pour protéger vos innovations.',
      },
      {
        title: 'PLV Premium',
        description: 'Glorifiers, totems et éléments de merchandising avec finitions luxe : métallisation, laquage, dorure.',
      },
      {
        title: 'Pièces Événementielles',
        description: 'Installations pour vos événements VIP, lancements produits, défilés. Impact visuel garanti.',
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
      { value: '+35', label: 'projets Luxe' },
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
      },
      {
        title: 'Installations Artistiques',
        description: 'Sculptures, structures monumentales, œuvres interactives. Donnez vie à vos concepts les plus ambitieux.',
      },
      {
        title: 'Décors de Scène',
        description: 'Éléments de décor pour spectacles, concerts, théâtre. Légèreté et résistance pour les contraintes scéniques.',
      },
      {
        title: 'Photo Booths',
        description: 'Cadres et installations pour animations photo. Intégration de lumières, écrans et capteurs possibles.',
      },
      {
        title: 'Signalétique Événementielle',
        description: 'Lettrages 3D, totems directionnels, éléments de balisage. Cohérence graphique parfaite.',
      },
      {
        title: 'Expériences Interactives',
        description: 'Installations avec électronique intégrée : capteurs, lumières réactives, éléments motorisés.',
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
      { value: '+30', label: 'projets Événementiel' },
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
      },
      {
        title: 'Prototypes de Composants',
        description: 'Testez vos solutions techniques : éléments de façade, systèmes d\'assemblage, pièces sur mesure.',
      },
      {
        title: 'Mobilier Urbain',
        description: 'Prototypage de mobilier urbain, bornes, éléments de signalétique. Du concept au test grandeur nature.',
      },
      {
        title: 'Éléments Décoratifs',
        description: 'Claustras, moulures, éléments ornementaux sur mesure. Reproduction ou création de pièces uniques.',
      },
      {
        title: 'Numérisation de l\'Existant',
        description: 'Scan 3D de bâtiments, éléments patrimoniaux, pièces à reproduire. Base précise pour vos projets.',
      },
      {
        title: 'Bâtiment Intelligent',
        description: 'Prototypage de systèmes domotiques, capteurs environnementaux, interfaces de contrôle.',
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
      {
        question: 'Pouvez-vous scanner un bâtiment existant ?',
        answer: 'Oui, nous réalisons des scans 3D de bâtiments et éléments architecturaux. Nous produisons des fichiers exploitables pour vos projets de rénovation ou reproduction.',
      },
    ],
    cta: {
      title: 'Un projet architectural à visualiser ?',
      description: 'Maquettes, prototypes ou scans : nous donnons une forme tangible à vos visions architecturales.',
    },
    stats: [
      { value: '+25', label: 'projets Architecture' },
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
      },
      {
        title: 'Prototypes de Création',
        description: 'Visualisez vos créations avant fonte. Validez les proportions, l\'ergonomie et l\'esthétique.',
      },
      {
        title: 'Masters pour Moules',
        description: 'Créez des masters haute précision pour vos moules silicone. Production en série facilitée.',
      },
      {
        title: 'Outillage sur Mesure',
        description: 'Gabarits de sertissage, supports de travail, outils spécifiques. Optimisez votre atelier.',
      },
      {
        title: 'Numérisation de Pièces',
        description: 'Scan 3D de bijoux existants pour reproduction, modification ou archivage digital.',
      },
      {
        title: 'Pièces Contemporaines',
        description: 'Bijoux en impression directe pour créateurs. Formes impossibles en fabrication traditionnelle.',
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
      { value: '+15', label: 'projets Joaillerie' },
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
      },
      {
        title: 'Boîtiers Électroniques',
        description: 'Boîtiers sur mesure pour vos cartes et composants. Optimisés pour la dissipation thermique et l\'accessibilité.',
      },
      {
        title: 'Pièces Mécaniques',
        description: 'Engrenages, supports de capteurs, fixations sur mesure. Pièces fonctionnelles en matériaux techniques.',
      },
      {
        title: 'Électronique Embarquée',
        description: 'Développement de cartes de contrôle, gestion moteurs, interfaces capteurs. Du schéma au PCB fonctionnel.',
      },
      {
        title: 'Systèmes de Motorisation',
        description: 'Intégration de moteurs, servos, actionneurs. Conception des transmissions et mécanismes.',
      },
      {
        title: 'Prototypes Fonctionnels',
        description: 'Assemblage complet de prototypes mécatroniques. Tests et itérations rapides.',
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
      { value: '+10', label: 'projets Robotique' },
      { value: 'PA12-CF', label: 'matériaux techniques' },
      { value: '360°', label: 'accompagnement' },
    ],
  },
}

export const sectorsList = Object.values(sectorsData)

import type { ServiceData } from '@/components/templates/ServicePage'

export const servicesData: Record<string, ServiceData> = {
  'impression-3d-fdm': {
    slug: 'impression-3d-fdm',
    name: 'Impression 3D FDM',
    category: 'Impression 3D',
    headline: 'Impression 3D FDM - Pièces résistantes et fonctionnelles',
    subheadline: 'La technologie FDM (Fused Deposition Modeling) pour des pièces solides, fonctionnelles et économiques. Idéale pour le prototypage et les petites séries.',
    description: 'L\'impression 3D FDM utilise des filaments thermoplastiques pour créer des pièces couche par couche. Cette technologie offre un excellent rapport qualité-prix pour les prototypes fonctionnels et les pièces de production.',
    features: [
      {
        title: 'Résistance mécanique',
        description: 'Pièces solides capables de supporter des contraintes mécaniques. Idéales pour des prototypes fonctionnels et pièces d\'usage.',
      },
      {
        title: 'Large choix de matériaux',
        description: 'PLA, PETG, ABS, Nylon, PC, matériaux chargés fibres... Un matériau adapté à chaque application.',
      },
      {
        title: 'Grandes dimensions',
        description: 'Volume d\'impression jusqu\'à 30x30x40 cm sur nos machines standard. Grand format disponible.',
      },
      {
        title: 'Coût maîtrisé',
        description: 'Technologie économique, particulièrement avantageuse pour les pièces de volume important.',
      },
      {
        title: 'Rapidité d\'exécution',
        description: 'Pièces livrables en 24-48h pour les urgences. Parc machines important pour absorber les volumes.',
      },
      {
        title: 'Post-traitement',
        description: 'Ponçage, peinture, assemblage, inserts filetés... Finitions adaptées à vos besoins.',
      },
    ],
    specs: [
      { label: 'Volume max standard', value: '300 x 300 x 400 mm' },
      { label: 'Volume max grand format', value: '850 mm hauteur (sans limite par assemblage)' },
      { label: 'Épaisseur de couche', value: '0.1 - 0.3 mm' },
      { label: 'Précision', value: '± 0.2 mm' },
      { label: 'Remplissage', value: '10% à 100%' },
      { label: 'Délai standard', value: '2-5 jours' },
    ],
    materials: [
      { name: 'PLA', properties: 'Économique, biodégradable. Usage intérieur, prototypes visuels.' },
      { name: 'PETG', properties: 'Résistant, flexible. Usage général, pièces fonctionnelles.' },
      { name: 'ABS', properties: 'Résistant aux chocs et chaleur. Pièces mécaniques.' },
      { name: 'ASA', properties: 'Résistant UV, usage extérieur. Signalétique, automobile.' },
      { name: 'Nylon PA12', properties: 'Haute résistance, flexibilité. Engrenages, pièces mécaniques.' },
      { name: 'PA12-CF', properties: 'Nylon chargé carbone. Rigidité et légèreté maximales.' },
      { name: 'PC', properties: 'Polycarbonate transparent. Résistance aux chocs.' },
    ],
    process: [
      { step: 1, title: 'Envoi du fichier', description: 'Transmettez votre fichier 3D (STL, OBJ, STEP) ou décrivez votre besoin pour une modélisation.' },
      { step: 2, title: 'Devis sous 24h', description: 'Analyse de votre projet, choix du matériau et du process, devis détaillé.' },
      { step: 3, title: 'Validation et lancement', description: 'Après validation, lancement de la production. Suivi en temps réel possible.' },
      { step: 4, title: 'Impression et contrôle', description: 'Impression sur nos machines, contrôle qualité de chaque pièce.' },
      { step: 5, title: 'Livraison', description: 'Expédition sécurisée ou retrait en atelier selon vos préférences.' },
    ],
    faqs: [
      {
        question: 'Quelle est la différence entre FDM et résine ?',
        answer: 'Le FDM utilise des filaments et produit des pièces plus résistantes mécaniquement, idéales pour l\'usage fonctionnel. La résine offre plus de détails et des surfaces plus lisses, idéale pour les pièces visuelles et la joaillerie.',
      },
      {
        question: 'Quels formats de fichiers acceptez-vous ?',
        answer: 'Nous acceptons STL, OBJ, STEP, 3MF, et la plupart des formats CAO. Si vous n\'avez pas de fichier 3D, nous pouvons modéliser votre pièce.',
      },
      {
        question: 'Les pièces FDM sont-elles étanches ?',
        answer: 'Avec les bons paramètres (100% remplissage, bon matériau), les pièces peuvent être étanches. Nous vous conseillons selon votre application.',
      },
      {
        question: 'Peut-on peindre les pièces FDM ?',
        answer: 'Oui, avec une préparation adaptée (ponçage, apprêt), les pièces FDM se peignent très bien. Nous proposons ce service de finition.',
      },
    ],
    cta: {
      title: 'Un projet à imprimer en FDM ?',
      description: 'Envoyez-nous votre fichier ou décrivez votre besoin. Devis gratuit sous 24h.',
    },
    relatedServices: [
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Impression Grand Format', href: '/services/impression-3d/grand-format' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
  },

  'impression-3d-resine': {
    slug: 'impression-3d-resine',
    name: 'Impression 3D Résine',
    category: 'Impression 3D',
    headline: 'Impression 3D Résine - Précision et détails exceptionnels',
    subheadline: 'La technologie SLA/DLP pour des pièces ultra-détaillées avec des surfaces lisses. Idéale pour la joaillerie, les prototypes visuels et les moules.',
    description: 'L\'impression résine (SLA/DLP) offre une précision au centième de millimètre et des surfaces parfaitement lisses. Technologie de choix pour les applications nécessitant des détails fins.',
    features: [
      {
        title: 'Précision extrême',
        description: 'Résolution jusqu\'à 0.025mm pour capturer les plus fins détails. Idéal pour joaillerie et maquettes.',
      },
      {
        title: 'Surface lisse',
        description: 'Finition de surface comparable à l\'injection. Pas de stries de couches visibles.',
      },
      {
        title: 'Résines spécialisées',
        description: 'Résines calcinables pour fonderie, flexibles, haute température, dentaires...',
      },
      {
        title: 'Détails complexes',
        description: 'Gravures, textures, microreliefs parfaitement reproduits.',
      },
      {
        title: 'Moules et masters',
        description: 'Création de masters pour moules silicone ou résines calcinables pour fonte.',
      },
      {
        title: 'Finitions premium',
        description: 'Peinture, métallisation, vernis. Résultat professionnel garanti.',
      },
    ],
    specs: [
      { label: 'Volume max', value: '190 x 120 x 200 mm' },
      { label: 'Résolution XY', value: '0.025 - 0.05 mm' },
      { label: 'Épaisseur de couche', value: '0.025 - 0.1 mm' },
      { label: 'Précision', value: '± 0.05 mm' },
      { label: 'Délai standard', value: '2-5 jours' },
    ],
    materials: [
      { name: 'Résine standard', properties: 'Polyvalente, bon niveau de détail. Prototypes visuels.' },
      { name: 'Résine calcinable', properties: 'Pour fonte à cire perdue. Bijouterie, fonderie.' },
      { name: 'Résine dentaire', properties: 'Certifiée biocompatible. Applications dentaires.' },
      { name: 'Résine flexible', properties: 'Souplesse contrôlée. Joints, pièces souples.' },
      { name: 'Résine haute température', properties: 'Résiste jusqu\'à 200°C. Outillage, moules.' },
      { name: 'Résine transparente', properties: 'Optiquement claire après polissage. Optique, design.' },
    ],
    process: [
      { step: 1, title: 'Envoi du fichier', description: 'Fichier 3D haute résolution (STL, OBJ). Pour la joaillerie, formats 3DM acceptés.' },
      { step: 2, title: 'Analyse et devis', description: 'Vérification de l\'imprimabilité, choix de la résine adaptée, devis détaillé.' },
      { step: 3, title: 'Impression', description: 'Impression couche par couche avec contrôle qualité continu.' },
      { step: 4, title: 'Post-traitement', description: 'Lavage, séchage UV, retrait des supports. Finitions sur demande.' },
      { step: 5, title: 'Livraison', description: 'Emballage protecteur, expédition sécurisée.' },
    ],
    faqs: [
      {
        question: 'La résine est-elle adaptée pour la fonte à cire perdue ?',
        answer: 'Oui, nous utilisons des résines calcinables spécifiquement formulées qui brûlent sans laisser de résidus. Résultat équivalent à la cire traditionnelle.',
      },
      {
        question: 'Quelle précision pour les détails de bijoux ?',
        answer: 'Notre résolution de 0.025mm permet de reproduire les gravures et textures les plus fines. Idéal pour la joaillerie de précision.',
      },
      {
        question: 'Les pièces en résine sont-elles résistantes ?',
        answer: 'Les résines standard sont plus fragiles que le FDM. Pour des pièces fonctionnelles, nous utilisons des résines techniques renforcées.',
      },
      {
        question: 'Peut-on obtenir des pièces transparentes ?',
        answer: 'Oui, avec notre résine transparente et un polissage adapté, nous obtenons des pièces optiquement claires.',
      },
    ],
    cta: {
      title: 'Besoin de précision ultime ?',
      description: 'L\'impression résine est votre solution. Devis gratuit sous 24h.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Scan 3D', href: '/services/scan-3d' },
    ],
  },

  'impression-3d-grand-format': {
    slug: 'impression-3d-grand-format',
    name: 'Impression Grand Format',
    category: 'Impression 3D',
    headline: 'Impression 3D Grand Format - Pièces jusqu\'à 85 cm en un seul bloc',
    subheadline: 'Imprimez des pièces de grande taille d\'un seul tenant. Sans limite de taille par assemblage. Idéal pour l\'événementiel, les maquettes architecturales et les installations artistiques.',
    description: 'Notre imprimante grand format permet de créer des pièces jusqu\'à 85 cm de haut en un seul bloc. Pour les pièces plus grandes, nous assemblons plusieurs éléments avec des finitions invisibles - sans limite de taille.',
    features: [
      {
        title: 'Dimensions XXL',
        description: 'Pièces jusqu\'à 85 cm de haut en un seul bloc. Sans limite de taille par assemblage multi-pièces.',
      },
      {
        title: 'Pièces monobloc',
        description: 'Évitez les assemblages quand possible. Solidité et esthétique maximales.',
      },
      {
        title: 'Événementiel',
        description: 'Sculptures, décors, installations. Impact visuel garanti.',
      },
      {
        title: 'Maquettes XXL',
        description: 'Maquettes architecturales grande échelle, prototypes grandeur nature.',
      },
      {
        title: 'Matériaux techniques',
        description: 'PETG, ABS, ASA pour usage extérieur. Résistance garantie.',
      },
      {
        title: 'Assemblage invisible',
        description: 'Pour les pièces plus grandes, assemblage avec finitions parfaites.',
      },
    ],
    specs: [
      { label: 'Volume max monobloc', value: '850 mm de hauteur' },
      { label: 'Taille max avec assemblage', value: 'Sans limite' },
      { label: 'Épaisseur de couche', value: '0.2 - 0.8 mm' },
      { label: 'Buse', value: '0.8 - 1.2 mm' },
      { label: 'Délai standard', value: '5-10 jours' },
    ],
    materials: [
      { name: 'PETG', properties: 'Polyvalent, résistant. Usage intérieur et extérieur couvert.' },
      { name: 'ASA', properties: 'Résistant UV, usage extérieur permanent.' },
      { name: 'ABS', properties: 'Résistant aux chocs. Pièces techniques.' },
    ],
    faqs: [
      {
        question: 'Quelle taille maximale en une seule pièce ?',
        answer: '85 cm de haut maximum en un seul bloc. Pour les pièces plus grandes, nous assemblons plusieurs éléments avec des joints invisibles après finition - sans limite de taille.',
      },
      {
        question: 'Les grandes pièces résistent-elles en extérieur ?',
        answer: 'Oui, avec l\'ASA et un traitement adapté (vernis UV). Nous conseillons selon la durée d\'exposition prévue.',
      },
      {
        question: 'Quel budget pour une pièce grand format ?',
        answer: 'Le prix dépend des dimensions, du matériau et des finitions. Comptez à partir de quelques centaines d\'euros. Devis précis sur demande.',
      },
      {
        question: 'Livrez-vous et installez-vous sur site ?',
        answer: 'Oui, nous proposons la livraison et l\'installation pour les projets d\'envergure. Coordination avec vos équipes techniques.',
      },
    ],
    cta: {
      title: 'Un projet grand format ?',
      description: 'Sculptures, installations, maquettes XXL... Discutons de vos dimensions.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
  },

  'scan-3d': {
    slug: 'scan-3d',
    name: 'Scan 3D',
    headline: 'Scan 3D - Numérisez la réalité',
    subheadline: 'Transformez des objets physiques en fichiers 3D exploitables. Rétro-ingénierie, reproduction, archivage digital.',
    description: 'Le scan 3D capture la géométrie exacte d\'objets existants. Idéal pour reproduire des pièces, créer des bases de travail ou archiver numériquement.',
    features: [
      {
        title: 'Haute précision',
        description: 'Capture au dixième de millimètre. Fidélité parfaite à l\'original.',
      },
      {
        title: 'Tous types d\'objets',
        description: 'Du petit bijou à la carrosserie automobile. Adaptation selon le sujet.',
      },
      {
        title: 'Rétro-ingénierie',
        description: 'Recréez des pièces sans plans. Conversion en fichiers CAO exploitables.',
      },
      {
        title: 'Reproduction',
        description: 'Dupliquez des objets existants, avec ou sans modifications.',
      },
      {
        title: 'Archivage digital',
        description: 'Conservez numériquement des objets patrimoniaux ou de collection.',
      },
      {
        title: 'Export multi-formats',
        description: 'STL, OBJ, STEP selon vos besoins. Compatible tous logiciels CAO.',
      },
    ],
    specs: [
      { label: 'Précision', value: '± 0.05 mm' },
      { label: 'Taille min objet', value: '5 mm' },
      { label: 'Taille max objet', value: '2000 mm' },
      { label: 'Formats export', value: 'STL, OBJ, PLY, STEP' },
    ],
    process: [
      { step: 1, title: 'Réception de l\'objet', description: 'Envoi ou dépôt de l\'objet à scanner. Évaluation des contraintes.' },
      { step: 2, title: 'Préparation', description: 'Nettoyage, application de spray mat si nécessaire (surfaces brillantes).' },
      { step: 3, title: 'Scan', description: 'Capture 360° avec notre scanner structuré. Plusieurs passes si nécessaire.' },
      { step: 4, title: 'Traitement', description: 'Nettoyage du maillage, rebouchage des trous, optimisation.' },
      { step: 5, title: 'Livraison', description: 'Fichier 3D dans le format souhaité. Retour de l\'objet original.' },
    ],
    faqs: [
      {
        question: 'Peut-on scanner des objets brillants ou transparents ?',
        answer: 'Les surfaces brillantes ou transparentes nécessitent un spray mat temporaire qui s\'évapore naturellement. Le résultat est excellent après cette préparation.',
      },
      {
        question: 'Le scan est-il destructif pour l\'objet ?',
        answer: 'Non, le scan est totalement non-invasif. Votre objet est retourné intact.',
      },
      {
        question: 'Peut-on modifier le fichier scanné ?',
        answer: 'Oui, le fichier peut être modifié dans un logiciel CAO. Nous pouvons aussi réaliser les modifications pour vous.',
      },
      {
        question: 'Quelle différence entre scan et modélisation ?',
        answer: 'Le scan capture un objet existant. La modélisation crée un objet à partir de zéro (croquis, plans, idée).',
      },
    ],
    cta: {
      title: 'Un objet à numériser ?',
      description: 'Reproduisez, archivez ou modifiez vos pièces existantes grâce au scan 3D.',
    },
    relatedServices: [
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Impression 3D Résine', href: '/services/impression-3d/resine' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
  },

  'modelisation-3d': {
    slug: 'modelisation-3d',
    name: 'Modélisation 3D',
    headline: 'Modélisation 3D - De l\'idée au fichier',
    subheadline: 'Création de modèles 3D sur mesure à partir de vos croquis, plans ou idées. Prêts pour l\'impression ou la production.',
    description: 'Notre équipe crée des modèles 3D optimisés pour l\'impression. Du simple croquis au fichier prêt à imprimer, nous donnons forme à vos projets.',
    features: [
      {
        title: 'À partir de rien',
        description: 'Une idée, un croquis, une photo ? Nous créons le modèle 3D complet.',
      },
      {
        title: 'Optimisé impression',
        description: 'Modèles conçus pour l\'impression 3D : supports, orientations, tolérances.',
      },
      {
        title: 'Expertise CAO',
        description: 'Logiciels professionnels (Fusion 360, SolidWorks, Rhino) pour tous types de projets.',
      },
      {
        title: 'Itérations rapides',
        description: 'Modifications et ajustements inclus jusqu\'à validation.',
      },
      {
        title: 'Multi-formats',
        description: 'Livraison dans le format de votre choix : STL, STEP, OBJ, 3DM...',
      },
      {
        title: 'Rendus visuels',
        description: 'Rendus photoréalistes pour validation avant production si besoin.',
      },
    ],
    process: [
      { step: 1, title: 'Brief', description: 'Partagez votre besoin : croquis, photos, dimensions, contraintes d\'usage.' },
      { step: 2, title: 'Proposition', description: 'Nous proposons une approche et un devis. Échanges pour affiner.' },
      { step: 3, title: 'Modélisation', description: 'Création du modèle 3D avec points de validation intermédiaires.' },
      { step: 4, title: 'Validation', description: 'Révisions jusqu\'à votre validation. Rendus 3D fournis.' },
      { step: 5, title: 'Livraison', description: 'Fichier final dans le format souhaité, prêt pour impression.' },
    ],
    faqs: [
      {
        question: 'Je n\'ai qu\'une idée vague, est-ce suffisant ?',
        answer: 'Oui ! Nous partons régulièrement de simples descriptions verbales. Nous vous proposons des croquis et itérons ensemble.',
      },
      {
        question: 'Combien de révisions sont incluses ?',
        answer: 'Nous incluons généralement 2-3 cycles de révisions dans nos devis. Les modifications mineures sont toujours incluses.',
      },
      {
        question: 'Le fichier m\'appartient-il après livraison ?',
        answer: 'Oui, vous êtes propriétaire du fichier 3D final. Nous ne le réutilisons pas sans votre accord.',
      },
      {
        question: 'Pouvez-vous modifier un fichier existant ?',
        answer: 'Oui, nous modifions des fichiers existants : corrections, adaptations, ajout de fonctionnalités.',
      },
    ],
    cta: {
      title: 'Une idée à modéliser ?',
      description: 'De l\'esquisse au fichier 3D, nous concrétisons vos projets.',
    },
    relatedServices: [
      { name: 'Scan 3D', href: '/services/scan-3d' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
    ],
  },

  'prototypage': {
    slug: 'prototypage',
    name: 'Prototypage Rapide',
    headline: 'Prototypage Rapide - Du concept au prototype',
    subheadline: 'Validez vos idées rapidement avec des prototypes fonctionnels. Itérations rapides, tests utilisateurs, validation avant production.',
    description: 'Le prototypage rapide permet de tester vos concepts avant investissement lourd. Prototypes visuels ou fonctionnels, nous adaptons l\'approche à vos objectifs.',
    features: [
      {
        title: 'Prototypes fonctionnels',
        description: 'Testez la résistance, l\'ergonomie, les mécanismes. Validation technique complète.',
      },
      {
        title: 'Prototypes visuels',
        description: 'Validez l\'esthétique, les proportions, l\'aspect. Présentations clients.',
      },
      {
        title: 'Itérations rapides',
        description: 'Modification et nouvelle version en quelques jours. Cycle court garanti.',
      },
      {
        title: 'Multi-technologies',
        description: 'FDM, résine, usinage... La bonne technologie pour chaque usage.',
      },
      {
        title: 'Assemblages complexes',
        description: 'Prototypes multi-pièces, mécanismes, intégration électronique.',
      },
      {
        title: 'Conseil matériaux',
        description: 'Orientation vers les matériaux et process adaptés à la production future.',
      },
    ],
    process: [
      { step: 1, title: 'Analyse du besoin', description: 'Compréhension de vos objectifs : validation technique, esthétique, tests utilisateurs...' },
      { step: 2, title: 'Proposition technique', description: 'Choix de la technologie et du matériau adaptés. Devis détaillé.' },
      { step: 3, title: 'Réalisation', description: 'Fabrication du prototype avec contrôle qualité.' },
      { step: 4, title: 'Tests et retours', description: 'Vous testez, nous ajustons. Itérations rapides.' },
      { step: 5, title: 'Validation', description: 'Prototype final validé, prêt pour la production.' },
    ],
    faqs: [
      {
        question: 'Quelle différence entre prototype visuel et fonctionnel ?',
        answer: 'Le prototype visuel valide l\'esthétique et les proportions. Le fonctionnel permet de tester les mécanismes et la résistance. Les matériaux et process diffèrent.',
      },
      {
        question: 'Combien d\'itérations prévoir ?',
        answer: 'En moyenne 2-3 itérations suffisent pour valider un produit. Nous optimisons chaque version pour converger rapidement.',
      },
      {
        question: 'Le prototype peut-il servir de base pour la production ?',
        answer: 'Oui, nous concevons en pensant à la production. Le prototype validé peut servir de référence pour l\'outillage injection ou autre.',
      },
      {
        question: 'Proposez-vous un accompagnement jusqu\'à la production ?',
        answer: 'Nous accompagnons jusqu\'au prototype validé et réalisons également les productions en série nous-mêmes.',
      },
    ],
    cta: {
      title: 'Un produit à valider ?',
      description: 'Réduisez les risques avec le prototypage rapide avant investissement.',
    },
    relatedServices: [
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Électronique', href: '/services/electronique' },
    ],
  },

  'electronique': {
    slug: 'electronique',
    name: 'Électronique & Motorisation',
    headline: 'Électronique & Motorisation sur mesure',
    subheadline: 'Développement de solutions électroniques et électromécaniques intégrées. Notre différenciateur : combiner impression 3D et électronique.',
    description: 'Nous concevons et fabriquons des solutions électroniques sur mesure : cartes de contrôle, motorisation, capteurs, systèmes embarqués. Parfaitement intégrées à vos boîtiers imprimés en 3D.',
    features: [
      {
        title: 'Cartes sur mesure',
        description: 'Conception de PCB adaptés à vos besoins. Du schéma à la carte assemblée.',
      },
      {
        title: 'Motorisation',
        description: 'Intégration de moteurs, servos, actionneurs. Mécanismes complets.',
      },
      {
        title: 'Capteurs',
        description: 'Acquisition de données : température, mouvement, présence, luminosité...',
      },
      {
        title: 'Systèmes embarqués',
        description: 'Programmation de microcontrôleurs, systèmes autonomes, IoT.',
      },
      {
        title: 'Éclairage LED',
        description: 'Intégration d\'éclairages : rubans LED, spots, effets lumineux.',
      },
      {
        title: 'Boîtiers intégrés',
        description: 'Boîtiers imprimés 3D optimisés pour vos cartes. Ensemble cohérent.',
      },
    ],
    process: [
      { step: 1, title: 'Cahier des charges', description: 'Définition des fonctionnalités, contraintes d\'encombrement, alimentation...' },
      { step: 2, title: 'Conception', description: 'Schéma électronique, choix des composants, routage PCB.' },
      { step: 3, title: 'Prototype', description: 'Fabrication et assemblage du prototype. Tests fonctionnels.' },
      { step: 4, title: 'Validation', description: 'Tests en conditions réelles. Ajustements si nécessaire.' },
      { step: 5, title: 'Production', description: 'Petite série ou orientation vers production industrielle.' },
    ],
    faqs: [
      {
        question: 'Quel type de projets électroniques réalisez-vous ?',
        answer: 'Nous réalisons des projets variés : displays interactifs, automates, capteurs connectés, systèmes de contrôle, robotique. Du prototype à la petite série.',
      },
      {
        question: 'Pouvez-vous reprendre un projet existant ?',
        answer: 'Oui, nous pouvons reprendre et améliorer un projet existant : correction de bugs, ajout de fonctionnalités, optimisation.',
      },
      {
        question: 'Fournissez-vous le code source ?',
        answer: 'Oui, vous êtes propriétaire du code développé pour votre projet. Documentation technique fournie.',
      },
      {
        question: 'Produisez-vous les cartes en série ?',
        answer: 'Oui, nous réalisons nous-mêmes les productions en série, des petites séries aux volumes plus importants selon vos besoins.',
      },
    ],
    cta: {
      title: 'Un projet mécatronique ?',
      description: 'Mécanique + électronique en un seul partenaire. Discutons de votre projet.',
    },
    relatedServices: [
      { name: 'Impression 3D FDM', href: '/services/impression-3d/fdm' },
      { name: 'Prototypage Rapide', href: '/services/prototypage' },
      { name: 'Modélisation 3D', href: '/services/modelisation-3d' },
    ],
  },
}

export const servicesList = Object.values(servicesData)

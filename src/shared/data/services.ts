export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  details?: string[];
}

export const servicesData: Service[] = [
  {
    id: "design-maquette",
    title: "UI/UX & Maquettes",
    description:
      "Des maquettes claires et modernes pour visualiser votre projet avant le développement. Nous pensons les pages pour rassurer, guider et convertir vos visiteurs.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Maquettes web et mobile",
      "Parcours utilisateur",
      "Hiérarchie visuelle",
      "Prototype interactif",
    ],
  },
  {
    id: "site-analysis",
    title: "Audit & Analyse",
    description:
      "Un regard technique et stratégique sur votre site actuel pour repérer ce qui freine la confiance, la vitesse, le référencement ou les demandes clients.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Audit UX et contenu",
      "Analyse performance",
      "Pistes SEO",
      "Recommandations concrètes",
    ],
  },
  {
    id: "website-redesign",
    title: "Refonte de Site",
    description:
      "Nous modernisons votre site existant pour le rendre plus crédible, plus lisible et plus efficace auprès de vos clients.",
    image:
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Refonte visuelle",
      "Structure des pages",
      "Messages plus clairs",
      "Expérience mobile",
    ],
  },
  {
    id: "web-development",
    title: "Développement Web",
    description:
      "Des sites rapides, propres et adaptés à votre activité : présentation, catalogue, réservation, demande de devis ou plateforme plus avancée.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Site vitrine",
      "Site catalogue",
      "Application web",
      "SEO et performance",
    ],
  },
  {
    id: "mobile-development",
    title: "Applications Mobiles",
    description:
      "Des applications mobiles simples, utiles et bien pensées pour rapprocher votre service de vos clients sur Android et iOS.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Android et iOS",
      "Parcours fluides",
      "Notifications",
      "Publication store",
    ],
  },
];

export interface Project {
  id: string;
  name: string;
  description: string;
  href: string;
  slides: string[];
  tall?: boolean;
  metrics?: Array<{ label: string; value: string }>;
  services?: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}

export const portfolioData: Project[] = [
  {
    id: "upstream",
    name: "Upstream",
    description:
      "Transformer une plateforme complexe en produit clair et intuitif",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Croissance", value: "+45%" },
      { label: "Utilisateurs", value: "50K+" },
    ],
    services: ["Design / maquette", "Création de sites web"],
    testimonial: {
      quote: "Un travail remarquable qui a transformé notre produit.",
      author: "John Doe",
      role: "CEO",
    },
  },
  {
    id: "rizzle",
    name: "Rizzle",
    description:
      "Une refonte complète qui a renforcé l’expérience de la plateforme",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Utilisateurs mensuels", value: "34M+" },
      { label: "Engagement", value: "+60%" },
    ],
    services: ["Branding", "Redesign de site web", "Applications mobiles"],
  },
  {
    id: "firefox",
    name: "Firefox",
    description:
      "Un système d’identité pensé pour renforcer la reconnaissance de marque",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Reconnaissance", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Identité de marque", "Design / maquette"],
  },
  {
    id: "opera",
    name: "Opera",
    description:
      "Un système visuel cohérent pour améliorer l’image et l’engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Reconnaissance", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Identité de marque", "Design / maquette"],
  },
  {
    id: "chrome",
    name: "Chrome",
    description:
      "Une identité digitale plus claire pour mieux guider les utilisateurs",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Reconnaissance", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Identité de marque", "Design / maquette"],
  },
  {
    id: "brave",
    name: "Brave",
    description:
      "Une expérience web plus simple pour mieux présenter l’offre",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Reconnaissance", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Création de sites web", "Application e-commerce"],
  },
];

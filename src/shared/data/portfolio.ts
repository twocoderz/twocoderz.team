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
      "Turning a complex carbon platform into a clear, intuitive product",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Growth", value: "+45%" },
      { label: "Users", value: "50K+" },
    ],
    services: ["UI/UX Design", "Web Development"],
    testimonial: {
      quote: "Exceptional work that transformed our product.",
      author: "John Doe",
      role: "CEO",
    },
  },
  {
    id: "rizzle",
    name: "Rizzle",
    description:
      "Comprehensive redesign propelled the platform to 34M monthly active users",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1616469829581-73993eb86b02?w=800",
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Monthly Active Users", value: "34M+" },
      { label: "Engagement", value: "+60%" },
    ],
    services: ["Branding", "Web Design", "Mobile App"],
  },
  {
    id: "firefox",
    name: "Firefox",
    description:
      "Identity system that enhanced brand recognition and user engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Brand Recognition", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Brand Identity", "Design System"],
  },
  {
    id: "opera",
    name: "Opera",
    description:
      "Identity system that enhanced brand recognition and user engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Brand Recognition", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Brand Identity", "Design System"],
  },
  {
    id: "chrome",
    name: "Chrome",
    description:
      "Identity system that enhanced brand recognition and user engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: true,
    metrics: [
      { label: "Brand Recognition", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["Brand Identity", "Design System"],
  },
  {
    id: "brave",
    name: "Brave",
    description:
      "Identity system that enhanced brand recognition and user engagement",
    href: "#",
    slides: [
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800",
    ],
    tall: false,
    metrics: [
      { label: "Brand Recognition", value: "+35%" },
      { label: "Engagement", value: "+28%" },
    ],
    services: ["web", "Ecommerce app"],
  },
];

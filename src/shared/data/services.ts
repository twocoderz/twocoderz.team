export interface Service {
  id: string;
  title: string;
  description: string;
  image?: string;
  details?: string[];
}

export const servicesData: Service[] = [
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform apps with polished UX, offline-ready flows, and store-ready builds. We ship performant mobile products that scale with your roadmap.",
    image:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
    details: [
      "iOS & Android native",
      "React Native / Flutter",
      "Performance optimization",
      "App store publishing",
    ],
  },
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Fast, accessible sites and web apps using modern stacks. From marketing pages to complex dashboards, we focus on SEO, Core Web Vitals, and maintainable code.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    details: [
      "React / Vue / Svelte",
      "Next.js / Nuxt",
      "SEO optimization",
      "Performance focused",
    ],
  },
  {
    id: "ux-ui-design",
    title: "UX/UI Design",
    description:
      "Research-backed interfaces, design systems, and prototypes that align business goals with user needs. Clear hierarchy, consistent patterns, and delightful details.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    details: [
      "User research",
      "Design systems",
      "Wireframing & prototyping",
      "Accessibility (WCAG)",
    ],
  },
  {
    id: "desktop-apps",
    title: "Desktop Apps",
    description:
      "Cross-platform desktop experiences with native feel—installers, auto-updates, and deep OS integration when you need power users and offline-first workflows.",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
    details: [
      "Electron / Tauri",
      "Cross-platform development",
      "Native integrations",
      "Auto-updates & distribution",
    ],
  },
];

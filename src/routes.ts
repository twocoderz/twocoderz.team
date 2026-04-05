export const ROUTES = {
  // Main pages
  HOME: "/",
  WORK: "/work",
  SERVICES: "/services",
  ABOUT: "/about",
  PROCESS: "/process",
  SUBSCRIBE: "/subscribe",
  CONTACT: "/contact",
} as const;

export type RouteKey = keyof typeof ROUTES;

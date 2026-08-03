export const ROUTES = {
  // Main pages
  HOME: "/",
  WORK: "/work",
  WORK_PROJECT: "/work/:projectId",
  SERVICES: "/services",
  ABOUT: "/about",
  PROCESS: "/process",
  SUBSCRIBE: "/subscribe",
  CONTACT: "/contact",
  FAQS: "/faqs",
} as const;

export type RouteKey = keyof typeof ROUTES;

export function getWorkProjectHref(projectId: string) {
  return `${ROUTES.WORK}/${projectId}`;
}

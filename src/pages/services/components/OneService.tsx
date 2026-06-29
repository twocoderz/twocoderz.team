import { ProjectCard } from "../../../shared/components/ui/ProjectCard";
import { portfolioData } from "../../../shared/data/portfolio";
import { servicesData } from "../../../shared/data/services";

const SERVICE_PROJECT_TAGS: Record<string, string[]> = {
  "design-maquette": [
    "Design / maquette",
    "UI/UX & Maquettes",
    "UI/UX Design",
    "Design System",
  ],
  "site-analysis": [
    "Analyse de site web",
    "Audit & Analyse",
    "SEO",
    "Performance",
  ],
  "website-redesign": [
    "Redesign de site web",
    "Refonte de Site",
    "Web Design",
    "Brand Identity",
  ],
  "web-development": [
    "Création de sites web",
    "Développement Web",
    "Web Development",
    "web",
  ],
  "mobile-development": [
    "Applications mobiles",
    "Applications Mobiles",
    "Mobile App",
    "mobile",
  ],
};

export default function OneService() {
  const servicesWithProjects = servicesData.map((service) => {
    const tagCandidates = SERVICE_PROJECT_TAGS[service.id] ?? [
      service.title,
    ];
    const normalizedTags = new Set(
      tagCandidates.map((tagCandidate) => tagCandidate.toLowerCase()),
    );

    const projects = portfolioData
      .filter((project) =>
        project.services?.some((projectService) =>
          normalizedTags.has(projectService.toLowerCase()),
        ),
      )
      .slice(0, 3);

    return {
      service,
      projects,
    };
  });

  return (
    <div className="flex flex-col gap-p20">
      {servicesWithProjects.map(({ service, projects }) => (
        <div key={service.id}>
          <div className="flex flex-col gap-p6">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
              {service.title}
            </h2>
            <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
              <div
                className="hidden min-h-0 min-w-0 md:block md:flex-1"
                aria-hidden
              />
              <p className="text-black-80 text-md lg:text-lg max-w-md shrink-0">
                {service.description}
              </p>
            </div>
          </div>

          {projects.length > 0 ? (
            <div className="mt-p10 flex flex-col gap-p8 md:mt-p12 lg:inline-flex lg:w-fit lg:flex-row lg:flex-nowrap lg:items-start lg:gap-8">
              {projects.map((project) => (
                <div key={project.id} className="w-full lg:w-80 lg:flex-none">
                  <ProjectCard project={project} variant="services" />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ))}
    </div>
  );
}

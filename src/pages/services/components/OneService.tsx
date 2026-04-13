import { ProjectCard } from "../../../shared/components/ui/ProjectCard";
import { portfolioData } from "../../../shared/data/portfolio";

export default function OneService() {
  const webProjects = portfolioData
    .filter((project) =>
      project.services?.some((service) =>
        service.toLowerCase().includes("web"),
      ),
    )
    .slice(0, 2);

  return (
    <div>
      <div className="flex flex-col gap-p6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black tracking-tight">
          Web developpement
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-p8">
          <div
            className="hidden min-h-0 min-w-0 md:block md:flex-1"
            aria-hidden
          />
          <p className="text-black-80 text-sm lg:text-md max-w-md shrink-0">
            Web developpement cover every stage of your digital project, from
            initial ideas to final delivery. We focus on clarity, performance,
            and long-term scalability.
          </p>
        </div>
      </div>
      <div className="mt-p10 flex flex-col gap-p8 md:mt-p12 lg:inline-flex lg:w-fit lg:flex-row lg:flex-nowrap lg:items-start lg:gap-8">
        {webProjects.map((project) => (
          <div key={project.id} className="w-full lg:w-80 lg:flex-none">
            <ProjectCard project={project} variant="services" />
          </div>
        ))}
      </div>
    </div>
  );
}

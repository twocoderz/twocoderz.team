import Container from "../../../shared/components/ui/Container";
import { ProjectCard } from "../../../shared/components/ui/ProjectCard";
import { portfolioData } from "../../../shared/data/portfolio";

export default function Projects() {
  const displayedProjects = portfolioData.slice(0, 8);
  const leftColumnProjects = displayedProjects.filter(
    (_, index) => index % 2 === 0,
  );
  const rightColumnProjects = displayedProjects.filter(
    (_, index) => index % 2 !== 0,
  );

  return (
    <section>
      <Container>
        {/* Mobile: une seule colonne */}
        <div className="space-y-24 md:hidden mt-p18">
          {displayedProjects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>

        {/* Desktop: deux colonnes flex sans CSS columns */}
        <div className="hidden md:flex md:items-start md:gap-8 mt-p24">
          <div className="flex-1 space-y-24">
            {leftColumnProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>

          <div className="flex-1 space-y-24">
            {rightColumnProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

import Container from "../ui/Container";
import Section from "../ui/Section";
import { Grid } from "../ui/Grid";
import { PortfolioCard } from "../ui/PortfolioCard";
import type { Project } from "../../data/portfolio";

export interface PortfolioGridProps {
  projects: Project[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export function PortfolioGridSection({
  projects,
  title = "Our Work",
  columns = 3,
}: PortfolioGridProps) {
  return (
    <Section id="portfolio">
      <Container>
        {title && (
          <div className="mb-p12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-black-80">
              {title}
            </h2>
          </div>
        )}
        <Grid columns={columns}>
          {projects.map((project) => (
            <PortfolioCard
              key={project.id}
              name={project.name}
              description={project.description}
              image={project.slides[0]}
              href={project.href}
              metrics={project.metrics}
            />
          ))}
        </Grid>
      </Container>
    </Section>
  );
}

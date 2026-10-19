import { Link, Navigate, useParams } from "react-router-dom";
import Layout from "../../shared/components/layout/Layout";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { getWorkProjectHref, ROUTES } from "../../routes";
import { findProjectById, portfolioData } from "../../shared/data/portfolio";
import { findProjectDetailById } from "../../shared/data/projectDetails";
import { ArrowLeftIcon } from "../../shared/icons/ArrowLeftIcon";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import ProjectHero from "./components/ProjectHero";
import ProjectInfoCard from "./components/ProjectInfoCard";
import ProjectSection from "./components/ProjectSection";

export default function WorkDetailPage() {
  const { projectId } = useParams();
  const project = projectId ? findProjectById(projectId) : undefined;
  const detail = projectId ? findProjectDetailById(projectId) : undefined;

  if (!project || !detail) {
    return <Navigate to={ROUTES.WORK} replace />;
  }

  const currentIndex = portfolioData.findIndex((p) => p.id === project.id);
  const previousProject = portfolioData[currentIndex - 1];
  const nextProject = portfolioData[currentIndex + 1];

  return (
    <Layout>
      <Section>
        <Container>
          <ProjectHero
            title={project.name}
            description={project.description}
            image={detail.heroImage}
          />

          <ProjectInfoCard about={detail.about} meta={detail.meta} />

          <div className="my-24 flex flex-col gap-24">
            {detail.sections.map((section) => (
              <ProjectSection key={section.id} section={section} />
            ))}
          </div>

          <nav
            aria-label="Navigation entre projets"
            className="mx-auto flex max-w-3xl items-center justify-between gap-6 text-xl"
          >
            {previousProject ? (
              <Link
                to={getWorkProjectHref(previousProject.id)}
                className="flex items-center gap-3 text-black-80 transition-colors duration-300 hover:text-black-50"
              >
                <ArrowLeftIcon className="w-4 h-4" />
                Projet précédent
              </Link>
            ) : (
              <span />
            )}

            {nextProject && (
              <Link
                to={getWorkProjectHref(nextProject.id)}
                className="flex items-center gap-3 text-black-80 transition-colors duration-300 hover:text-black-50"
              >
                Projet suivant
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            )}
          </nav>
        </Container>
      </Section>
    </Layout>
  );
}

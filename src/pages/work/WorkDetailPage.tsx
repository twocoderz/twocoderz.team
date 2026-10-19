import { Navigate, useParams } from "react-router-dom";
import Layout from "../../shared/components/layout/Layout";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { ROUTES } from "../../routes";
import { findProjectById } from "../../shared/data/portfolio";
import { findProjectDetailById } from "../../shared/data/projectDetails";
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
        </Container>
      </Section>
    </Layout>
  );
}

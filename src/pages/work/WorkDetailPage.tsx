import { Navigate, useParams } from "react-router-dom";
import Layout from "../../shared/components/layout/Layout";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { ROUTES } from "../../routes";
import { findProjectById } from "../../shared/data/portfolio";

export default function WorkDetailPage() {
  const { projectId } = useParams();
  const project = projectId ? findProjectById(projectId) : undefined;

  if (!project) {
    return <Navigate to={ROUTES.WORK} replace />;
  }

  return (
    <Layout>
      <Section>
        <Container></Container>
      </Section>
    </Layout>
  );
}

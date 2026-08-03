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
        <Container>
          <div>
            {/* Top */}
            <div className="flex flex-col items-start gap-8">
              <h1 className="text-4xl lg:text-6xl font-medium">Clearbit</h1>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="image"
                className="w-full h-150 rounded-lg objec-cover"
              />
            </div>git 
            {/* details */}
            <div></div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

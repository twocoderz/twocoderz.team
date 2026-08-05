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
            <div className="flex flex-col items-start gap-12">
              <h1 className="text-4xl lg:text-8xl text-black-80 font-medium">
                Clearbit
              </h1>
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="image"
                className="w-full h-150 rounded-lg objec-cover"
              />
            </div>
            {/* details */}
            <div className="flex flex-col lg:flex-row items-start justify-between bg-amber-100 rounded-lg mt-12 p-12">
              <div className="flex flex-col gap-8">
                <h3 className="text-6xl text-black-80 font-bold">About</h3>
                <p className="max-w-xl text-xl font-normal text-black-80">
                  Clearbit, a business intelligence platform, engaged us to
                  enhance its digital presence. We revamped their website to
                  better reflect their brand evolution, improving visuals and
                  user experience. This redesign resulted in clearer messaging,
                  a stronger brand image and increased conversion rates.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6">
                <div>
                  <div>
                    <div className="mb-8">
                      <span className="font-bold text-lg mb-2 text-black-90">
                        Exit
                      </span>
                      <h4 className="font-bold text-4xl text-black-90">
                        $150M
                      </h4>
                    </div>
                    <p className="text-xl font-normal text-black-80">
                      Acquisition by Hubspot
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-black-90">
                      Services
                    </h5>
                    <p className="text-xl font-normal text-black-80">
                      <a href="" className="underline">
                        Web design
                      </a>
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-black-90">
                      Tech stack
                    </h5>
                    <p className="text-xl font-normal text-black-80">
                      Next js, Tailwind css, Chart.js, Contentful
                    </p>
                  </div>
                  <div>
                    <h5 className="font-bold text-lg mb-2 text-black-90">
                      Industry
                    </h5>
                    <p className="text-xl font-normal text-black-80">
                      B2B industry
                    </p>
                  </div>
                  <div>
                    <h5>Website</h5>
                    <p className="text-xl font-normal text-black-80">
                      <a href="" className="underline">
                        Clearbit.com
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="mb-8">
                    <span className="font-bold text-lg mb-2 text-black-90">
                      B2B data
                    </span>
                    <h4 className="font-bold text-4xl text-black-90">50M</h4>
                  </div>
                  <p className="text-xl font-normal text-black-80">
                    Company records
                  </p>
                </div>
              </div>
            </div>
            {/* rest */}
            <div></div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

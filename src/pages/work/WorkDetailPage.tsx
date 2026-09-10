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
            <div className="my-24">
              <div className="mx-auto max-w-3xl flex flex-col gap-4 ">
                <p className="text-2xl font-normal leading-relaxed text-black-90">
                  Rizzle began when visionary founders with a small group of
                  developers approached us with a clear mission: to create the
                  ultimate discussion platform for the Instagram generation.
                  Initially, the app targeted a specific audience, with its
                  concept and core features meticulously structured and defined.
                </p>
                <p className="text-2xl font-normal leading-relaxed text-black-90">
                  Since our partnership began in late 2018, Rizzle has undergone
                  significant transformations to become what it is today. One of
                  the notable iterations was a social network for creators
                  available on both iOS and Android.
                </p>
                <p className="text-2xl font-normal leading-relaxed text-black-90">
                  At its peak as a social network, Rizzle boasted over 34
                  million monthly active users. Today, leveraging cutting-edge
                  artificial intelligence (AI), Rizzle has evolved into a
                  revolutionary "no-edit" video creation platform dedicated to
                  democratizing video content creation.
                </p>
              </div>
            </div>
            <div className="my-12">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800"
                alt="image"
                className="w-full h-150 rounded-lg objec-cover"
              />
            </div>
            <div>
              <div className="mx-auto max-w-3xl flex flex-col gap-4">
                <h3 className="text-6xl text-black-90 font-bold">Challenge</h3>
                <p className="text-2xl font-normal leading-relaxed text-black-90">
                  The carbon management market is full of technically complex,
                  enterprise-focused tools like Watershed and Persefoni. These
                  platforms often require lengthy onboarding, deliver slow
                  pricing quotes, and can be inaccessible for companies without
                  dedicated sustainability teams. Upstream&apos;s challenge was
                  to:
                </p>
                <ul className="flex flex-col gap-4">
                  <li className="text-xl font-normal text-black-90">
                    Deliver instant quotes for multiple global carbon markets.
                  </li>
                  <li className="text-xl font-normal text-black-90">
                    Provide a clear, approachable interface for manufacturing
                    clients who may not have deep ESG expertise.
                  </li>
                  <li className="text-xl font-normal text-black-90">
                    Launch a fully functional MVP by early Q4 2023 with both
                    branding and platform design ready for market.
                  </li>
                  <li className="text-xl font-normal text-black-90">
                    Build API integrations to enable in-platform renewable
                    certification management, particularly through the I-REC
                    international registry via the Evident API.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import AboutStats from "./components/AboutStats";

export default function AboutPage() {
  return (
    <Layout>
      <HeroSection
        title="About"
        subtitle="We're a team of designers and developers passionate about building beautiful, functional digital products."
        alignment="center"
      />

      {/* About stats section */}
      <Section>
        <Container>
          <AboutStats />
        </Container>
      </Section>
      {/* Add Mission/Vision section */}

      <Section>
        <Container>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-black-80 mb-p4">
              Coming Soon
            </h2>
            <p className="text-black-60">Finish building this page!</p>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

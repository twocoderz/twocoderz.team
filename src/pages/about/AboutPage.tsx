import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import AboutStats from "./components/AboutStats";
import AboutValues from "./components/AboutValues";

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
          <AboutValues />
        </Container>
      </Section>
    </Layout>
  );
}

import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import AboutCapabilities from "./components/AboutCapabilities";
import AboutStats from "./components/AboutStats";
import AboutValues from "./components/AboutValues";

export default function AboutPage() {
  return (
    <Layout>
      <HeroSection
        title="About"
        subtitle="We're a team of designers and developers passionate about building beautiful, functional digital products."
        alignment="center"
        spH1ClassName="max-w-2xl"
      />

      {/* About stats section */}
      <Section>
        <Container>
          <AboutStats />
        </Container>
      </Section>

      {/* About values section */}
      <Section>
        <Container>
          <AboutValues />
        </Container>
      </Section>

      {/* About capabilities section */}
      <Section>
        <Container>
          <AboutCapabilities />
        </Container>
      </Section>
    </Layout>
  );
}

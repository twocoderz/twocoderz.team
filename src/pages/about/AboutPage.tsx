import { ROUTES } from "../../routes";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import AboutCapabilities from "./components/AboutCapabilities";
import AboutLeadership from "./components/AboutLeadership";
import AboutStats from "./components/AboutStats";
import AboutValues from "./components/AboutValues";

export default function AboutPage() {
  return (
    <Layout>
      <HeroSection
        title="À propos"
        subtitle="Nous sommes une équipe de designers et développeurs qui aide les entreprises à construire une présence digitale claire, moderne et utile."
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

      {/* About Leadership section */}
      <Section>
        <Container>
          <AboutLeadership />
        </Container>
      </Section>

      {/* About let's talk section */}
      <div className="text-center mt-p24 mb-24">
        <a href={ROUTES.CONTACT}>
          <Button variant="primary" size="lg">
            <span> Parlons de votre projet</span>
            <ArrowRightIcon className="w-4 h-4 ml-p4" />
          </Button>
        </a>
      </div>
    </Layout>
  );
}

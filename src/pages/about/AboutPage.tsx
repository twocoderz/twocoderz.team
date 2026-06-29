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
        subtitle="Nous sommes une équipe de designers et de développeurs passionnés qui conçoit des sites web et 
        des expériences digitales modernes. Notre mission est d'aider les entreprises à bâtir une présence 
        en ligne claire, performante et pensée pour inspirer confiance, attirer de nouveaux clients et accompagner leur croissance."
        alignment="center"
        spH1ClassName="max-w-2xl"
        spPClassName="max-w-4xl"
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
            <span> Obtenir un devis</span>
            <ArrowRightIcon className="w-4 h-4 ml-p4" />
          </Button>
        </a>
      </div>
    </Layout>
  );
}

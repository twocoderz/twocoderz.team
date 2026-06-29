import { ROUTES } from "../../routes";
import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
import OneService from "./components/OneService";

export default function ServicesPage() {
  return (
    <Layout>
      <HeroSection
        title="Services"
        subtitle="Nous aidons les entreprises à concevoir, améliorer et lancer des solutions digitales utiles : maquettes, analyses, redesigns, sites web et applications mobiles."
        alignment="center"
        className="bg-black text-white"
        spH1ClassName="max-w-2xl"
        spClassName="py-p8"
      />

      <Container>
        <Section>
          <OneService />
        </Section>
      </Container>
      <div className="text-center mt-p24 mb-p24">
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

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
        subtitle="With over 15 years of experience in the industry, our offerings 
        have evolved into a set of services that complement each other and allow us 
        to design, develop, implement, maintain, and extend a consistent experience 
        across all touchpoints."
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
            <span> Let&apos;s talk</span>
            <ArrowRightIcon className="w-4 h-4 ml-p4" />
          </Button>
        </a>
      </div>
    </Layout>
  );
}

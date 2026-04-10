import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { ServiceGridSection } from "../../shared/components/sections/ServiceGridSection";
import { servicesData } from "../../shared/data/services";

export default function ServicesPage() {
  return (
    <Layout>
      <HeroSection
        title="Our Services"
        subtitle="Comprehensive solutions to transform your digital presence and drive growth."
        alignment="center"
        spH1ClassName="max-w-2xl"
      />
      <ServiceGridSection services={servicesData} title="What We Offer" />
      {/* TODO: Add detailed service pages/sections */}
      {/* TODO: Add process/workflow section */}
      {/* TODO: Add case studies per service */}
    </Layout>
  );
}

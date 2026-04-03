import Header from "../shared/components/layout/Header";
import Footer from "../home/components/Footer";
import { HeroSection } from "../shared/components/sections/HeroSection";
import { ServiceGridSection } from "../shared/components/sections/ServiceGridSection";
import { servicesData } from "../shared/data/services";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection
          title="Our Services"
          subtitle="Comprehensive solutions to transform your digital presence and drive growth."
          alignment="center"
        />
        <ServiceGridSection services={servicesData} title="What We Offer" />
        {/* TODO: Add detailed service pages/sections */}
        {/* TODO: Add process/workflow section */}
        {/* TODO: Add case studies per service */}
      </main>
      <Footer />
    </>
  );
}

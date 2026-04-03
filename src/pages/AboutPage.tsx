import Header from "../shared/components/layout/Header";
import Footer from "../home/components/Footer";
import { HeroSection } from "../shared/components/sections/HeroSection";
import Container from "../shared/components/ui/Container";
import Section from "../shared/components/ui/Section";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection
          title="About TwoCoderz"
          subtitle="We're a team of designers and developers passionate about building beautiful, functional digital products."
          alignment="center"
        />

        {/* TODO: Add About content sections */}
        {/* TODO: Add Mission/Vision section */}
        {/* TODO: Add Team section */}
        {/* TODO: Add Values section */}
        {/* TODO: Add Stats/achievements section */}

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
      </main>
      <Footer />
    </>
  );
}

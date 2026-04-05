import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";

export default function ContactPage() {
  return (
    <Layout>
      <HeroSection
        title="Contact us"
        subtitle="Let's talk about your project and see how we can help."
        alignment="center"
      />

      <Section>
        <Container>
          <div className="max-w-2xl mx-auto">
            {/* TODO: Add contact form */}
            {/* TODO: Add contact info */}
            {/* TODO: Add social links */}
            {/* TODO: Add map or location info */}
            <div className="text-center"></div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

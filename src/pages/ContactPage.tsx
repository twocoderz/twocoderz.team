import Layout from "../shared/components/layout/Layout";
import { HeroSection } from "../shared/components/sections/HeroSection";
import Container from "../shared/components/ui/Container";
import Section from "../shared/components/ui/Section";

export default function ContactPage() {
  return (
    <Layout>
      <HeroSection
        title="Get in Touch"
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
            <div className="text-center">
              <h2 className="text-2xl font-bold text-black-80 mb-p4">
                Contact Form Coming Soon
              </h2>
              <p className="text-black-60">Build the contact form here!</p>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

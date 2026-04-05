import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import EmailLink from "./components/EmailLink";

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
          <div className="max-w-2xl mx-auto flex flex-col items-center">
            {/* email link */}
            <EmailLink href="#" label="rahim100codeur@gmail.com" />
            {/* separator */}
            <div className="my-6 flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-black/20" />
              <span className="text-sm text-black/60">Or</span>
              <div className="h-px flex-1 bg-black/20" />
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import ContactForm from "./components/ContactForm";
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
            <EmailLink
              href="#"
              label="rahim100codeur@gmail.com"
              className="mb-p6"
            />
            {/* separator */}
            <div className="my-6 flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-black/20" />
              <span className="text-sm text-black/60">Or</span>
              <div className="h-px flex-1 bg-black/20" />
            </div>
            {/* the form */}
            <div className="flex flex-col mt-p8">
              <h2 className="text-2xl font-bold text-black-80 text-center mb-p8">
                Fill out the form
              </h2>
              <ContactForm />
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

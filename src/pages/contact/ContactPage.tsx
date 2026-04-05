import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import { ArrowRightIcon } from "../../shared/icons/ArrowRightIcon";
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
          <div className="max-w-lg mx-auto flex flex-col items-center">
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
            <div className="flex flex-col w-full mt-p8">
              <h2 className="text-2xl font-bold text-black-80 text-center mb-p8">
                Fill out the form
              </h2>
              <ContactForm />
              <p className="text-black-80 text-xs text-center mt-p8">
                By filling in the form, you agree to our{" "}
                <span>
                  <a href="#" className="cursor-pointer">
                    Privacy Policy
                  </a>
                </span>
                , including our cookie use
              </p>
              <div className="text-center mt-p8">
                <Button variant="primary" size="lg">
                  <span> Let&apos;s talk</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

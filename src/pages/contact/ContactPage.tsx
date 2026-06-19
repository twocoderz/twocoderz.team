import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import Section from "../../shared/components/ui/Section";
import ContactForm from "./components/ContactForm";
import EmailLink from "./components/EmailLink";

export default function ContactPage() {
  return (
    <Layout>
      <HeroSection
        title="Contactez-nous"
        subtitle="Parlons de votre projet et voyons comment nous pouvons vous aider."
        alignment="center"
        spH1ClassName="max-w-2xl"
      />

      <Section>
        <Container>
          <div className="max-w-lg mx-auto flex flex-col items-center">
            {/* email link */}
            <EmailLink label="rahim100codeur@gmail.com" className="mb-p6" />
            {/* separator */}
            <div className="my-6 flex w-full items-center gap-4">
              <div className="h-px flex-1 bg-black/20" />
              <span className="text-sm text-black/60">Ou</span>
              <div className="h-px flex-1 bg-black/20" />
            </div>
            {/* the form */}
            <div className="flex flex-col w-full mt-p8">
              <h2 className="text-2xl font-bold tracking-wide text-black-80 text-center mb-p8">
                Remplissez le formulaire
              </h2>
              <ContactForm />
              <p className="text-black-80 text-xs text-center mt-p8">
                En remplissant ce formulaire, vous acceptez notre{" "}
                <span>
                  <a href="#" className="cursor-pointer">
                    politique de confidentialité
                  </a>
                </span>
                , y compris notre utilisation des cookies
              </p>
              <div className="text-center mt-p8">
                <Button variant="primary" size="sp">
                  <span> Envoyer</span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}

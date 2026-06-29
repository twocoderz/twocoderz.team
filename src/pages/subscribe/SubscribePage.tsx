import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import SubscribeForm from "./components/SubscribeForm";

export default function SubscribePage() {
  return (
    <Layout>
      <HeroSection
        title="Rejoignez notre newsletter"
        subtitle="
        Recevez nos conseils, nos retours d&apos;expérience et nos actualités pour améliorer votre présence digitale avec Twocoderz."
        alignment="center"
        spH1ClassName="max-w-5xl"
      />
      <Container>
        <div className="mx-auto max-w-xl mb-p12">
          <SubscribeForm />
          <div className="text-center pt-p8">
            <Button variant="primary" size="sp">
              <span>S&apos;inscrire</span>
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

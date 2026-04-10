import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
import { Button } from "../../shared/components/ui/Button";
import Container from "../../shared/components/ui/Container";
import SubscribeForm from "./components/SubscribeForm";

export default function SubscribePage() {
  return (
    <Layout>
      <HeroSection
        title="Join the inner circle"
        subtitle="
        Sign up for our newsletter and be the first to receive exclusive insights, 
        fresh case studies, and the latest updates — delivered straight to your inbox by the Twocoderz team."
        alignment="center"
        spH1ClassName="max-w-5xl"
      />
      <Container>
        <div className="mx-auto max-w-lg mb-p12">
          <SubscribeForm />
          <div className="text-center pt-p8">
            <Button variant="primary" size="sp">
              <span>Subscribe</span>
            </Button>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

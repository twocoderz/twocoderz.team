import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";
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
      />
      <Container>
        <div className="mx-auto max-w-lg">
          <SubscribeForm />
        </div>
      </Container>
    </Layout>
  );
}

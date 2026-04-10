import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";

export default function ReviewsPage() {
  return (
    <Layout>
      <HeroSection
        title="Twocoderz reviews and client testimonials"
        subtitle="Explore our reviews."
        alignment="center"
        spH1ClassName="max-w-2xl"
      />
      {/* TODO: Add filtering/search */}
      {/* TODO: Add pagination or load more */}
    </Layout>
  );
}

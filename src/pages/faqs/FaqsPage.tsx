import Layout from "../../shared/components/layout/Layout";
import { HeroSection } from "../../shared/components/sections/HeroSection";

export default function FaqsPage() {
  return (
    <Layout>
      <HeroSection
        title="Frequently asked questions"
        subtitle="At Twocoderz, we believe in empowering you with straightforward, transparent information about our team, our approach, and what it takes to bring your project to life. Here, we answer your most pressing questions directly and with purpose, so you can make an informed, confident choice in partnering with us."
        alignment="center"
        className="bg-black text-white"
        spClassName="py-p4"
        spH1ClassName="max-w-5xl"
      />

      {/* TODO: Add filtering/search */}
      {/* TODO: Add pagination or load more */}
    </Layout>
  );
}

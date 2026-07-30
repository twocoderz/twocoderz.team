import { lazy, Suspense } from "react";
import Layout from "../../shared/components/layout/Layout";
import Clients from "./components/Clients";
import Hero from "./components/Hero";

const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function BelowFoldFallback() {
  return (
    <div
      className="min-h-[min(50vh,28rem)] w-full max-w-6xl animate-pulse rounded-r2 bg-black-5"
      role="status"
      aria-busy="true"
      aria-label="Section en cours de chargement"
    />
  );
}

export default function HomePage() {
  return (
    <>
      <Layout>
        <Hero />
        <Clients />
        <Suspense fallback={<BelowFoldFallback />}>
          <Services />
          <Testimonials />
        </Suspense>
      </Layout>
    </>
  );
}

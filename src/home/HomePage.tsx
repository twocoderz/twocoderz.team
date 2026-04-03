import { lazy, Suspense } from "react";
import Header from "../shared/components/layout/Header";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const Services = lazy(() => import("./components/Services"));
const Testimonials = lazy(() => import("./components/Testimonials"));

function BelowFoldFallback() {
  return (
    <div
      className="min-h-[min(50vh,28rem)] w-full max-w-6xl animate-pulse rounded-r2 bg-black-5"
      role="status"
      aria-busy="true"
      aria-label="Loading section"
    />
  );
}

export default function HomePage() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-0 z-100 -translate-y-full rounded-b-md bg-black px-p4 py-p2 text-sm font-medium text-white shadow-md transition-transform focus:translate-y-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <Clients />
        <Suspense fallback={<BelowFoldFallback />}>
          <Services />
          <Testimonials />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

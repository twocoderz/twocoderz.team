import Header from "../shared/components/layout/Header";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
      <Testimonials />
      <Footer />
    </>
  );
}

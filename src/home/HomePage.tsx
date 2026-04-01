import Header from "../shared/components/layout/Header";
import Clients from "./components/Clients";
import Hero from "./components/Hero";
import Services from "./components/Services";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Clients />
      <Services />
    </>
  );
}

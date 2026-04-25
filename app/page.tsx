import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Pillars from "./components/Pillars";
import Stages from "./components/Stages";
import OwnedVsRented from "./components/OwnedVsRented";
import Services from "./components/Services";
import UseCases from "./components/UseCases";
import Ecosystem from "./components/Ecosystem";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Pillars />
        <Stages />
        <OwnedVsRented />
        <Services />
        <UseCases />
        <Ecosystem />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

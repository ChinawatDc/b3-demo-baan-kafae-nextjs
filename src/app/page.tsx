import { Hero } from "@/components/Hero";
import { WhyUs } from "@/components/WhyUs";
import { Menu } from "@/components/Menu";
import { Gallery } from "@/components/Gallery";
import { Visit } from "@/components/Visit";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <WhyUs />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}

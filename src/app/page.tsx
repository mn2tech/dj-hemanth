import IntroGate from "@/components/ui/IntroGate";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import About from "@/components/sections/About";
import MusicCatalog from "@/components/sections/MusicCatalog";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import Contact from "@/components/sections/Contact";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <IntroGate>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <MusicCatalog />
        <Gallery />
        <Testimonials />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </IntroGate>
  );
}

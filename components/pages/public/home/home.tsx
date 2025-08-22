import { TestimonialsSection } from "./avaliacoes-clientes";
import { GallerySection } from "./carrossel";
import { ContactSection } from "./contato";
import { Footer } from "./footer";
import { Header } from "./header";
import { HeroSection } from "./hero";
import { BrandsSection } from "./marcas";
import { ServicesSection } from "./servicos";
import { AboutSection } from "./sobre";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesSection />
        <BrandsSection />
        <AboutSection />
        <TestimonialsSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

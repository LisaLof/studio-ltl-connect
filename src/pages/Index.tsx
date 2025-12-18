import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Studio LTL | Visuell Design, Branding & Trender";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Studio LTL hjälper företag skapa tydliga visuella uttryck som bygger förtroende, stärker varumärket och gör det enklare att växa.");
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activePage="designstudio" />
      <main>
        <HeroSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

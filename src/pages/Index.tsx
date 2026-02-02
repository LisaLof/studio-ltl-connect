import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Visuell design, branding och trendinsikter | Studio LTL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Studio LTL är en designstudio som hjälper företag att skapa tydliga visuella uttryck genom branding, färg och trendinsikter.");
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

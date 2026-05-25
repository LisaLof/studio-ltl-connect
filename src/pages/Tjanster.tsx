import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Tjanster = () => {
  useEffect(() => {
    document.title = "Andra tjänster | Studio LTL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Strategisk visuell rådgivning för företag som vill förstå vad deras kommunikation signalerar idag och vad som bör prioriteras framåt."
      );
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header activePage="tjanster" />
      <main className="px-6 md:px-12 py-12 animate-fade-in">
        <h1 className="font-heading font-bold text-h1 text-foreground mb-6">
          Andra tjänster
        </h1>
        <p className="font-body text-body text-foreground max-w-body-text">
          Strategisk visuell rådgivning för företag som vill förstå vad deras kommunikation signalerar idag och vad som bör prioriteras framåt.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Tjanster;

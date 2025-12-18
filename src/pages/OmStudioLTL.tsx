import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import aboutHero from "@/assets/about-hero.webp";
import contactCard from "@/assets/contact-card.jpg";

const OmStudioLTL = () => {
  useEffect(() => {
    document.title = "Om Studio LTL | Kontakt";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Lär känna Studio LTL och grundaren Lisa Löfgren. Boka ett möte för branding, design eller trendinsikter.");
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header activePage="om-studio-ltl" />
      <main className="animate-fade-in">
        {/* Hero Section */}
        <section className="px-6 md:px-12">
          {/* H1 with proper spacing */}
          <div className="pt-hero-top pb-hero-bottom">
            <h1 className="font-heading font-bold text-h1 text-foreground">
              Vem är Studio LTL?
            </h1>
          </div>
          
          {/* Hero Image */}
          <div className="w-full max-w-3xl">
            <img 
              src={aboutHero} 
              alt="Lisa Löfgren arbetar med färgprover och material i sin studio" 
              className="w-full h-auto object-cover rounded-lg"
              loading="eager"
            />
          </div>
        </section>

        {/* Introduction Section */}
        <section className="px-6 md:px-12 py-10">
          <p className="font-body font-medium text-body text-foreground mb-6 max-w-body-text">
            Designstudio med fokus på branding, färg och trendinsikter för företag.
          </p>
          
          <div className="font-body text-body text-foreground max-w-body-text space-y-4">
            <p>
              Studio LTL drivs av Lisa Löfgren, designer, trendkreatör och art director med lång erfarenhet från kreativa branscher. Jag hjälper företag att skapa tydliga visuella uttryck som känns genomtänkta, hållbara och relevanta över tid.
            </p>
            <p>
              Min bakgrund finns inom produktutveckling, konceptdesign och visuellt ledarskap hos företag som IKEA, Panduro och Divine Robot. Där har jag lärt mig att kombinera strategi och estetik och att skapa material som inte bara är snyggt utan som fungerar i verkligheten.
            </p>
            <p>
              Studio LTL finns för företag som behöver en trygg och erfaren partner i sin visuella utveckling. Här får du en process som är strukturerad, tydlig och anpassad efter din verksamhet, oavsett om du behöver branding från grunden eller trendinspiration inför kommande säsonger.
            </p>
          </div>
        </section>

        {/* Contact Card Section */}
        <section className="px-6 md:px-12 py-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {/* Image */}
            <div>
              <img 
                src={contactCard} 
                alt="Studio LTL kontor med orange retro telefon" 
                className="w-full h-auto object-cover rounded-lg"
                loading="lazy"
              />
            </div>
            
            {/* Contact Information */}
            <div className="flex flex-col justify-center">
              <h2 className="font-heading font-semibold text-h3 text-foreground mb-4">
                Boka ett möte med oss
              </h2>
              <p className="font-body text-body text-foreground mb-6 max-w-body-text">
                Du är varmt välkommen att höra av dig om du vill boka ett möte eller veta mer. Jag svarar gärna på frågor och hjälper dig vidare.
              </p>
              
              {/* Contact Details - NOT clickable */}
              <div className="font-body text-body text-foreground space-y-1">
                <p>Mail: lisalofgren@live.se</p>
                <p>telefon: +46 70 208 39 15</p>
                <p>instagram: kommer snart</p>
                <p>linkedin: kommer snart</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OmStudioLTL;

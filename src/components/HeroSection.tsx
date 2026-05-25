import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="w-full animate-fade-in">
      {/* H1 Heading with proper spacing */}
      <div className="px-6 md:px-12 pt-hero-top pb-hero-bottom">
        <h1 className="font-heading font-bold text-h1 text-foreground max-w-3xl">
          Jag hjälper företag att ta rätt visuella beslut i rätt tid
        </h1>
      </div>
      
      {/* Full-width Hero Image */}
      <div className="w-full px-6 md:px-12">
        <img 
          src={heroImage} 
          alt="Designstudio med moodboard, färgprover och skissbok på ett träbord" 
          className="w-full h-auto object-cover rounded-lg"
          loading="eager"
        />
      </div>
      
      {/* Body Text below hero */}
      <div className="px-6 md:px-12 py-10">
        <p className="font-body text-body text-foreground max-w-body-text">
          Jag hjälper företag att skapa genomtänkta visuella uttryck som stärker varumärket och gör det enklare att växa med tydlighet och riktning. Genom design, trendanalys och strategiskt tänkande bygger vi en visuell grund som känns professionell, relevant och hållbar över tid.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

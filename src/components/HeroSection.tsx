import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="w-full animate-fade-in">
      {/* H1 Heading with proper spacing */}
      <div className="px-6 md:px-12 pt-hero-top pb-hero-bottom">
        <h1 className="font-heading font-bold text-h1 text-foreground max-w-3xl">
          Visuell design, branding och trender för företag som vill växa med tydlighet och stil
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
          Jag hjälper företag skapa tydliga visuella uttryck som bygger förtroende, stärker varumärket och gör det enklare att växa. Med en kombination av design, trendanalys och strategiskt tänkande får du en grund som håller över tid – och som känns trygg att växa i.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

import ServiceCard from "./ServiceCard";
import cardBranding from "@/assets/card-branding.jpg";
import cardTrend from "@/assets/card-trend.jpg";
import cardContact from "@/assets/card-contact.jpg";

const ServicesSection = () => {
  const services = [
    {
      image: cardBranding,
      imageAlt: "Designer arbetar med branding och visuell identitet på dator",
      title: "Branding & Designpaket",
      description: "En komplett visuell grund för företag som vill ta sitt uttryck på allvar. Du får logotyp, färgpalett, typografi, formspråk och visuella exempel som ger ditt företag en professionell och sammanhållen identitet.",
    },
    {
      image: cardTrend,
      imageAlt: "Moodboard med trendiga färgprover, material och botaniska element",
      title: "Trend & Visuell Inspiration",
      description: "Lättillgängliga trendrapporter och visuella riktningar för dig som vill arbeta mer medvetet och planerat. Färgpaletter, moodboards och insikter för att stärka dina kreativa beslut, säsong för säsong.",
    },
    {
      image: cardContact,
      imageAlt: "Studio LTL kontor med retro telefon",
      title: "Hör av dig!",
      description: "Har du frågor eller vill boka ett möte? Du är varmt välkommen att höra av dig. Jag hjälper gärna till att hitta rätt tjänst för ditt företag.",
    },
  ];

  return (
    <section className="w-full px-6 md:px-12 py-16">
      {/* Section Headline */}
      <h2 className="font-heading font-semibold text-h2 text-primary mb-12">
        Tjänster jag erbjuder
      </h2>
      
      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            image={service.image}
            imageAlt={service.imageAlt}
            title={service.title}
            description={service.description}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import brandingEra from "@/assets/branding-era.jpg";
import brandingSerenzia from "@/assets/branding-serenzia.jpg";

const Branding = () => {
  useEffect(() => {
    document.title = "Branding Bas | Studio LTL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Branding Bas är ett komplett grundpaket för företag som vill lansera med en tydlig och professionell visuell identitet.");
    }
  }, []);
  return (
    <div className="min-h-screen bg-background">
      <Header activePage="branding" />
      
      <main className="w-full px-6 md:px-12">
        {/* Hero Section */}
        <section className="py-12 md:py-16">
          <h1 className="font-heading text-h1 text-foreground mb-6">
            Branding Bas
          </h1>
          <p className="font-body text-body text-foreground max-w-[620px] leading-relaxed">
            En stark visuell grund gör det enklare att växa, kommunicera tydligt och skapa förtroende. Genom att arbeta strategiskt från början undviker du dyra omtag senare och får en identitet som håller över tid. Studio LTL hjälper dig att bygga en stabil och estetiskt genomtänkt bas som kan utvecklas i takt med ditt företag.
          </p>
        </section>

        {/* Editorial Images Section */}
        <section className="py-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src={brandingEra} 
              alt="Visuell identitet för ERA Clothing – logotyp och förpackningsdesign i minimalistisk stil"
              className="w-full h-auto rounded-lg border border-[#828282]"
              loading="lazy"
            />
            <img 
              src={brandingSerenzia} 
              alt="Visuell identitet för Serenzia Konsult – visitkort och varumärkesmaterial i elegant design"
              className="w-full h-auto rounded-lg border border-[#828282]"
              loading="lazy"
            />
          </div>
        </section>

        {/* Vad som ingår Section */}
        <section className="py-12">
          <h2 className="font-heading text-h2 text-foreground mb-6">
            Vad som ingår
          </h2>
          <p className="font-body text-body text-foreground max-w-[620px] leading-relaxed mb-6">
            Branding Bas är ett komplett grundpaket för företag som vill lansera med en tydlig och professionell visuell identitet. Paketet ger dig en genomarbetad logotyp, färger, typografi och enkla mallar som gör det lätt att kommunicera konsekvent från start.
          </p>
          <p className="font-body text-body text-foreground mb-4">
            I paketet ingår:
          </p>
          <ul className="font-body text-body text-foreground max-w-[620px] space-y-2 list-disc list-inside">
            <li>Tre svartvita logotypförslag</li>
            <li>Ett utvalt förslag utvecklas till färdig logotyp i färg</li>
            <li>Färgpalett anpassad för digitalt och tryck</li>
            <li>Rekommenderade typsnitt för rubrik och brödtext</li>
            <li>Visitkortsmall</li>
            <li>Symbolpaket med ikoner för mail, telefon, webb och sociala medier</li>
            <li>Fyra sociala medier-mallar för post och story</li>
            <li>Två till fyra contentbilder eller grafiska element som etablerar formspråket</li>
          </ul>
        </section>

        {/* Process Section */}
        <section className="py-12">
          <h2 className="font-heading text-h2 text-foreground mb-6">
            Process
          </h2>
          <ol className="font-body text-body text-foreground max-w-[620px] space-y-2 list-decimal list-inside">
            <li>Introduktionsmöte</li>
            <li>Moodboard och visuell riktning</li>
            <li>Tre logotypförslag</li>
            <li>Val av riktning</li>
            <li>Vidareutveckling och en revisionsrunda</li>
            <li>Produktion av övriga delar</li>
            <li>Leveranspaket och genomgång</li>
          </ol>
        </section>

        {/* Leverans och villkor Section */}
        <section className="py-12">
          <h2 className="font-heading text-h2 text-foreground mb-6">
            Leverans och villkor
          </h2>
          <div className="font-body text-body text-foreground max-w-[620px] space-y-4">
            <p>
              Normal leveranstid är två veckor från godkänd moodboard.<br />
              Snabb leverans inom en vecka kan väljas mot tillägg.
            </p>
            <p>
              Betalningsvillkor:<br />
              60 procent betalas vid projektstart.<br />
              40 procent betalas vid leverans och innan originalfiler skickas.
            </p>
            <p>
              Designprocessen inkluderar tre logotypförslag. Efter tredje förslaget anses uppdraget slutfört om inget annat avtalats. Vid ytterligare justeringar tillkommer debitering på 1 000 kr per timme.<br />
              Originalfiler levereras efter full betalning.
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 pb-16">
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body text-menu bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Beställ via kontakt
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Branding;

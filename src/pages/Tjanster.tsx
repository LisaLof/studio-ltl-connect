import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import cardPositionsanalys from "@/assets/tjanster-card-positionsanalys.jpg";
import cardStrategiSession from "@/assets/tjanster-card-strategi-session.jpg";
import heroPositionsanalys from "@/assets/tjanster-hero-positionsanalys.jpg";
import heroStrategiSession from "@/assets/tjanster-hero-strategi-session.jpg";

const Tjanster = () => {
  useEffect(() => {
    document.title = "Tjänster | Studio LTL";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Studio LTL hjälper företag att förstå vad deras visuella uttryck signalerar idag och vilka beslut som behöver prioriteras framåt."
      );
    }
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header activePage="tjanster" />

      <main className="w-full">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pt-16 pb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-h1 leading-tight text-foreground mb-6 max-w-[620px]">
            Tjänster
          </h1>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4">
            <p>
              Studio LTL hjälper företag att förstå vad deras visuella uttryck signalerar idag och vilka beslut som behöver prioriteras framåt.
            </p>
            <p>
              Det handlar inte om att skapa mer innehåll.
            </p>
            <p>
              Det handlar om att skapa rätt uttryck, vid rätt tillfälle, och bygga en kommunikation som håller över tid.
            </p>
          </div>
        </section>

        {/* Service Preview Cards */}
        <section className="px-6 md:px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <button
              onClick={() => scrollToSection("visuell-positionsanalys")}
              className="group cursor-pointer focus:outline-none"
            >
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-200 group-hover:border-primary">
                <img
                  src={cardPositionsanalys}
                  alt="Förhandsvisning av Visuell positionsanalys – moodboard, färgprover och visuella referenser på arbetsbord"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-body text-foreground mt-3 text-left">Visuell positionsanalys</p>
            </button>

            <button
              onClick={() => scrollToSection("visuell-strategi-session")}
              className="group cursor-pointer focus:outline-none"
            >
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-200 group-hover:border-primary">
                <img
                  src={cardStrategiSession}
                  alt="Förhandsvisning av Visuell strategi-session – arbetsmöte vid skärm med layoutskisser och anteckningar"
                  className="w-full aspect-square object-cover"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-body text-foreground mt-3 text-left">Visuell strategi-session</p>
            </button>
          </div>
        </section>

        {/* Visuell positionsanalys Section */}
        <section id="visuell-positionsanalys" className="px-6 md:px-12 py-16 scroll-mt-8">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-8">
            Visuell positionsanalys
          </h2>
          <div className="mb-8">
            <img
              src={heroPositionsanalys}
              alt="Arbetsbord med utskrifter, moodboards, färgprover och skisser för visuell analys"
              className="w-full max-w-3xl rounded-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4 mb-8">
            <p>
              För företag som vill förstå vad deras visuella uttryck signalerar idag och vilka beslut som bör prioriteras framåt.
            </p>
            <p>
              Många företag kommunicerar olika saker i olika kanaler utan att vara medvetna om det. Det skapar otydlighet, svagare igenkänning och gör det svårare att uppfattas rätt av kunder och marknad.
            </p>
            <p>
              Jag analyserar hur ert visuella uttryck fungerar idag, hur olika delar hänger ihop och vilka signaler ni faktiskt skickar ut. Fokus ligger på tydlighet, relevans och vilka visuella beslut som ger störst effekt framåt.
            </p>
            <p>Analysen omfattar</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Visuell identitet och tonalitet</li>
              <li>Webbplats och digital närvaro</li>
              <li>Sociala medier och kommunikation</li>
              <li>Bildspråk, färg och form</li>
              <li>Helhetsintryck och konsekvens</li>
              <li>Hur uttrycket möter dagens marknad och kundförväntningar</li>
            </ul>
            <p>Leverans</p>
            <ul className="list-disc list-inside space-y-2">
              <li>2 h strategiskt uppstartsmöte</li>
              <li>Genomgång av nuvarande visuella uttryck</li>
              <li>3 huvudsakliga observationsområden</li>
              <li>3 konkreta rekommendationer</li>
              <li>Prioriterad handlingslista</li>
              <li>PDF-rapport på 10–15 sidor</li>
            </ul>
            <p>Resultat</p>
            <p>Ni får en tydligare bild av:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>vad som fungerar idag</li>
              <li>vad som skapar otydlighet eller friktion</li>
              <li>vad som bör prioriteras först</li>
              <li>hur ert uttryck kan bli mer relevant, konsekvent och konkurrenskraftigt</li>
            </ul>
            <p>Pris</p>
            <p>Från 28 000 kr exkl. moms</p>
            <p>
              Slutpris baseras på företagets storlek, antal kontaktpunkter och analysens omfattning.
            </p>
          </div>
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            Resultat via kontakt
          </Link>
        </section>

        {/* Visuell strategi-session Section */}
        <section id="visuell-strategi-session" className="px-6 md:px-12 py-16 scroll-mt-8">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-8">
            Visuell strategi-session
          </h2>
          <div className="mb-8">
            <img
              src={heroStrategiSession}
              alt="Två personer i arbetsmöte framför skärm med layoutskisser och anteckningar"
              className="w-full max-w-3xl rounded-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4 mb-8">
            <p>
              En fokuserad strategi-session för företag som vill skapa större tydlighet och kontinuitet i sitt visuella uttryck och sin kommunikation.
            </p>
            <p>
              Under två timmar går vi igenom hur ni kommunicerar idag, vad som fungerar och vilka förändringar som kan göra kommunikationen tydligare, mer konsekvent och enklare att arbeta vidare med över tid.
            </p>
            <p>Vi tittar på</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Bildspråk och visuellt uttryck</li>
              <li>Hur bilder och innehåll används idag</li>
              <li>Storytelling och tonalitet</li>
              <li>Struktur för sociala medier och kommunikation</li>
              <li>Enklare arbetssätt och mallar som sparar tid</li>
              <li>Synlighet, spridning och digital närvaro</li>
            </ul>
            <p>Efter sessionen får ni</p>
            <ul className="list-disc list-inside space-y-2">
              <li>En kort strategisk sammanställning</li>
              <li>Konkreta rekommendationer att börja använda direkt</li>
            </ul>
            <p>
              Ni väljer själva om ni vill arbeta vidare internt eller ta hjälp vidare framåt.
            </p>
            <p>Effekt</p>
            <p>Mindre ad hoc.</p>
            <p>Mer tydlighet, kontinuitet och riktning.</p>
            <p>Pris</p>
            <p>6 000 kr exkl. moms</p>
          </div>
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            Resultat via kontakt
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Tjanster;

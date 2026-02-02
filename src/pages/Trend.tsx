import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Import trend images
import trendJul from "@/assets/trend-jul-2027.jpg";
import trendHostVinter from "@/assets/trend-host-vinter-2027.jpg";
import trendVarSommar from "@/assets/trend-var-sommar-2027.jpg";
import trendCardJul from "@/assets/trend-card-jul-2027.jpg";
import trendCardHostVinter from "@/assets/trend-card-host-vinter-2027.jpg";
import trendCardVarSommar from "@/assets/trend-card-var-sommar-2027.jpg";

const Trend = () => {
  useEffect(() => {
    document.title = "Trend & Inspiration Light | Trendrapporter för företag";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Trend & Inspiration Light är koncentrerade trendrapporter i PDF-format med färgpaletter, moodboards och visuella riktningar för företag.");
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
      <Header activePage="trend" />
      
      <main className="w-full">
        {/* Hero Section */}
        <section className="px-6 md:px-12 pt-16 pb-12 animate-fade-in">
          <h1 className="font-heading font-bold text-h1 leading-tight text-foreground mb-6 max-w-[620px]">
            Trend & Inspiration Light
          </h1>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4">
            <p>
              Trend & Inspiration Light är en koncentrerad trendrapport i PDF-format för företag som vill arbeta mer medvetet med färg, stil och visuell riktning. Rapporten släpps två år i förväg och ger dig ett tydligt kreativt underlag att arbeta vidare med. Rapporten har fokus på Skandinavien.
            </p>
            <p>
              Varje rapport innehåller färgpaletter, moodboards, visuella riktningar och en kort analys av varför trenden är relevant.
              Rapporten är lätt att använda i planering, produktutveckling, content eller visuell kommunikation.
            </p>
          </div>
        </section>

        {/* Season Overview Cards */}
        <section className="px-6 md:px-12 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <button
              onClick={() => scrollToSection("julen-2027")}
              className="group cursor-pointer focus:outline-none"
            >
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-200 group-hover:border-primary">
                  <img
                    src={trendCardJul}
                    alt="Förhandsvisning av trendrapport Jul 2027 – varma jultoner och stämningsfulla detaljer"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                />
              </div>
              <p className="font-body text-body text-foreground mt-3 text-left">Jul 2027</p>
            </button>

            <button
              onClick={() => scrollToSection("host-vinter-2027")}
              className="group cursor-pointer focus:outline-none"
            >
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-200 group-hover:border-primary">
                  <img
                    src={trendCardHostVinter}
                    alt="Förhandsvisning av trendrapport Höst/Vinter 2027 – naturnära färger och texturer"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                />
              </div>
              <p className="font-body text-body text-foreground mt-3 text-left">Höst/Vinter 2027</p>
            </button>

            <button
              onClick={() => scrollToSection("sommar-var-2027")}
              className="group cursor-pointer focus:outline-none"
            >
              <div className="rounded-lg overflow-hidden border-2 border-transparent transition-colors duration-200 group-hover:border-primary">
                  <img
                    src={trendCardVarSommar}
                    alt="Förhandsvisning av trendrapport Sommar/Vår 2027 – fräscha pasteller och lekfull energi"
                    className="w-full aspect-square object-cover"
                    loading="lazy"
                />
              </div>
              <p className="font-body text-body text-foreground mt-3 text-left">Sommar/Vår 2027</p>
            </button>
          </div>
        </section>

        {/* Detta ingår Section */}
        <section className="px-6 md:px-12 py-12">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-6">
            Detta ingår
          </h2>
          <ul className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-2 list-disc list-inside">
            <li>Övergripande trendanalys för säsongen</li>
            <li>Primära och sekundära färgpaletter</li>
            <li>Moodboards och visuella nycklar</li>
            <li>Formspråk och materialinspiration</li>
            <li>Estetisk riktning och tonalitet</li>
            <li>Rekommendationer för användning</li>
            <li>Cirka 14 sidor i PDF-format</li>
          </ul>
        </section>

        {/* Julen 2027 Section */}
        <section id="julen-2027" className="px-6 md:px-12 py-16 scroll-mt-8">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-8">
            Julen 2027
          </h2>
          <div className="mb-8">
            <img
              src={trendJul}
              alt="Moodboard för Julen 2027 – taktila material, handgjorda detaljer och klassiska julnyanser i modern tappning"
              className="w-full max-w-3xl rounded-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4 mb-8">
            <p>
              En varm och stämningsfull riktning med fokus på taktila material, handgjorda detaljer och klassiska julnyanser i en modern tappning. Trenden passar varumärken som vill bygga känsla, närhet och tradition på ett samtida och genomtänkt sätt.
            </p>
            <p>
              Rapporten omfattar 14 sidor. Pris: 995 kr exkl. moms.
            </p>
            <p>
              Rapporten beställs via kontakt. Du får information om upplägg och digital leverans via mail.
            </p>
          </div>
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            Beställ via kontakt
          </Link>
        </section>

        {/* Höst/Vinter 2027 Section */}
        <section id="host-vinter-2027" className="px-6 md:px-12 py-16 scroll-mt-8">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-8">
            Höst/Vinter 2027
          </h2>
          <div className="mb-8">
            <img
              src={trendHostVinter}
              alt="Moodboard för Höst/Vinter 2027 – naturfärgade toner, strukturer och retroinfluenser med modern estetik"
              className="w-full max-w-3xl rounded-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4 mb-8">
            <p>
              En fördjupad och harmonisk säsong med naturfärgade toner, tydliga strukturer och inslag av retroinfluenser. Trenden kombinerar lugn och värme med en modern och funktionell estetik.
            </p>
            <p>
              Rapporten omfattar 16 sidor. Pris: 995 kr exkl. moms.
            </p>
            <p>
              Rapporten beställs via kontakt. Du får information om upplägg och digital leverans via mail.
            </p>
          </div>
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            Beställ via kontakt
          </Link>
        </section>

        {/* Sommar/Vår 2027 Section */}
        <section id="sommar-var-2027" className="px-6 md:px-12 py-16 scroll-mt-8">
          <h2 className="font-heading font-semibold text-h2 leading-tight text-foreground mb-8">
            Sommar/Vår 2027
          </h2>
          <div className="mb-8">
            <img
              src={trendVarSommar}
              alt="Moodboard för Sommar/Vår 2027 – fräscha toner, mjuka pasteller och optimistisk energi"
              className="w-full max-w-3xl rounded-lg animate-fade-in"
              loading="lazy"
            />
          </div>
          <div className="font-body text-body leading-relaxed text-foreground max-w-[620px] space-y-4 mb-8">
            <p>
              En lätt, lekfull och energirik säsong med fräscha toner, mjuka pasteller och en tydlig optimism. Perfekt för företag som vill kommunicera kreativitet, rörelse och ny energi.
            </p>
            <p>
              Rapporten omfattar 13 sidor. Pris: 995 kr exkl. moms.
            </p>
            <p>
              Rapporten beställs via kontakt. Du får information om upplägg och digital leverans via mail.
            </p>
          </div>
          <Link
            to="/om-studio-ltl"
            className="inline-block font-body font-medium text-button bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary-hover transition-colors duration-200"
          >
            Beställ via kontakt
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Trend;

import { Link } from "react-router-dom";
import headerLogo from "@/assets/header-logo.jpg";

interface HeaderProps {
  activePage?: "designstudio" | "om-studio-ltl" | "trend" | "branding";
}

const Header = ({ activePage }: HeaderProps) => {
  return (
    <header className="w-full">
      {/* Logo Banner */}
      <Link to="/" className="block w-full">
        <img 
          src={headerLogo} 
          alt="Studio LTL logotyp – designstudio för branding och trender"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </Link>
      
      {/* Navigation */}
      <nav className="w-full bg-background py-4 px-6 md:px-12">
        <ul className="flex gap-8 font-body text-menu text-foreground">
          <li>
            <Link 
              to="/om-studio-ltl" 
              className={`transition-colors duration-200 ${
                activePage === "om-studio-ltl" 
                  ? "text-primary" 
                  : "hover:text-primary"
              }`}
            >
              Om Studio LTL
            </Link>
          </li>
          <li>
            <Link 
              to="/trend" 
              className={`transition-colors duration-200 ${
                activePage === "trend" 
                  ? "text-primary" 
                  : "hover:text-primary"
              }`}
            >
              Trend
            </Link>
          </li>
          <li>
            <Link 
              to="/branding" 
              className={`transition-colors duration-200 ${
                activePage === "branding" 
                  ? "text-primary" 
                  : "hover:text-primary"
              }`}
            >
              Branding
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

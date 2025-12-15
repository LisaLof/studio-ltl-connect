import headerLogo from "@/assets/header-logo.jpg";

const Header = () => {
  return (
    <header className="w-full">
      {/* Logo Banner */}
      <div className="w-full">
        <img 
          src={headerLogo} 
          alt="Studio LTL" 
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>
      
      {/* Navigation */}
      <nav className="w-full bg-background py-4 px-6 md:px-12">
        <ul className="flex gap-8 font-body text-menu text-foreground">
          <li>
            <a 
              href="#om-studio-ltl" 
              className="hover:text-primary transition-colors duration-200"
            >
              Om Studio LTL
            </a>
          </li>
          <li>
            <a 
              href="#trend" 
              className="hover:text-primary transition-colors duration-200"
            >
              Trend
            </a>
          </li>
          <li>
            <a 
              href="#branding" 
              className="hover:text-primary transition-colors duration-200"
            >
              Branding
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

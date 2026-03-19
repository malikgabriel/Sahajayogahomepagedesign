import { Menu, X } from "lucide-react";
import { useState } from "react";

type Page = "home" | "centres" | "about" | "testimonials" | "events" | "contact" | "blog";

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; page: Page }[] = [
    { label: "Accueil", page: "home" },
    { label: "Centres", page: "centres" },
    { label: "À propos", page: "about" },
    { label: "Événements", page: "events" },
    { label: "Témoignages", page: "testimonials" },
    { label: "Contact", page: "contact" },
  ];

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-border fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNavClick("home")} className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-primary rounded-2xl transform group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.9"/>
                <circle cx="12" cy="12" r="4" fill="white"/>
              </svg>
            </div>
            <span className="text-2xl font-bold text-secondary">
              Sahaja Yoga
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`px-4 py-2 transition-colors rounded-full ${
                  currentPage === item.page
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-primary hover:bg-muted"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-3">
            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-3 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 transform hover:scale-105"
            >
              Rejoignez-nous
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-full transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 space-y-2 border-t border-border animate-in slide-in-from-top duration-300">
            <nav className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.page}
                  onClick={() => handleNavClick(item.page)}
                  className={`px-4 py-3 text-left transition-all rounded-2xl ${
                    currentPage === item.page
                      ? "text-primary bg-primary/10 font-semibold"
                      : "text-foreground hover:text-primary hover:bg-muted"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-all mt-4"
            >
              Rejoignez-nous
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

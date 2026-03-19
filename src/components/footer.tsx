import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { useState } from "react";

type Page = "home" | "centres" | "about" | "testimonials" | "events" | "contact" | "blog";

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail("");
    }, 3000);
  };

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks: { label: string; page: Page }[] = [
    { label: "Accueil", page: "home" },
    { label: "À propos", page: "about" },
    { label: "Centres", page: "centres" },
    { label: "Événements", page: "events" },
    { label: "Témoignages", page: "testimonials" },
    { label: "Blog", page: "blog" },
  ];

  const legalLinks = [
    { label: "Mentions légales", href: "#mentions" },
    { label: "Confidentialité", href: "#confidentialite" },
    { label: "Conditions", href: "#conditions" },
  ];

  const socialLinks = [
    { 
      icon: Facebook, 
      href: "https://facebook.com/sahajayoga", 
      label: "Facebook", 
      color: "hover:bg-[#1877F2]/10 hover:border-[#1877F2]",
      iconColor: "group-hover:text-[#1877F2]"
    },
    { 
      icon: Instagram, 
      href: "https://instagram.com/sahajayoga", 
      label: "Instagram", 
      color: "hover:bg-[#E4405F]/10 hover:border-[#E4405F]",
      iconColor: "group-hover:text-[#E4405F]"
    },
    { 
      icon: Youtube, 
      href: "https://youtube.com/sahajayoga", 
      label: "YouTube", 
      color: "hover:bg-[#FF0000]/10 hover:border-[#FF0000]",
      iconColor: "group-hover:text-[#FF0000]"
    },
  ];

  return (
    <footer className="bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Newsletter Section */}
        <div className="bg-muted/50 rounded-[3rem] p-12 mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-3">
                Restez <span className="text-primary">connecté</span>
              </h3>
              <p className="text-muted-foreground text-lg">
                Recevez nos dernières actualités, événements et conseils
              </p>
            </div>
            
            {isSubscribed ? (
              <div className="text-center py-6 bg-white rounded-2xl border-2 border-primary/20">
                <p className="text-primary font-semibold">Merci ! Vous êtes inscrit à notre newsletter.</p>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="votre.email@exemple.fr"
                  required
                  className="flex-1 px-6 py-4 rounded-2xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all shadow-sm"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-white rounded-2xl hover:shadow-xl transition-all flex items-center gap-2 group font-semibold"
                >
                  <span className="hidden sm:inline">S'inscrire</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div className="lg:col-span-2">
            <button onClick={() => handleNavClick("home")} className="flex items-center space-x-2 mb-6 group">
              <div className="w-12 h-12 bg-primary rounded-2xl transform group-hover:rotate-12 transition-transform duration-300 flex items-center justify-center shadow-lg">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="8" fill="white" fillOpacity="0.9"/>
                  <circle cx="12" cy="12" r="4" fill="white"/>
                </svg>
              </div>
              <span className="text-2xl font-bold text-secondary">
                Sahaja Yoga
              </span>
            </button>
            
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              Découvrez la paix intérieure et l'équilibre grâce à une méthode de méditation 
              puissante et accessible à tous.
            </p>
            
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`group relative w-12 h-12 bg-white border-2 border-border rounded-2xl flex items-center justify-center transition-all hover:scale-110 shadow-sm ${social.color}`}
                >
                  <social.icon className={`w-5 h-5 text-muted-foreground transition-colors ${social.iconColor}`} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.page)}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-0 group-hover:w-4 opacity-0 group-hover:opacity-100 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-foreground mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <a
                  href="mailto:contact@sahajayoga.fr"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  contact@sahajayoga.fr
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <a
                  href="tel:+33142603344"
                  className="text-muted-foreground hover:text-primary transition-colors mt-2"
                >
                  +33 1 42 60 33 44
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-10 h-10 bg-accent/30 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <button
                  onClick={() => handleNavClick("centres")}
                  className="text-muted-foreground hover:text-primary transition-colors mt-2 text-left"
                >
                  Centres à travers la France
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-muted-foreground text-sm">
              © 2024 Sahaja Yoga France. Tous droits réservés.
            </p>
            <div className="flex gap-8">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

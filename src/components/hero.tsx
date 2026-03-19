import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArrowRight, Sparkles, Check } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-muted/30 pt-20">
      {/* Animated Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">Bienvenue dans votre voyage intérieur</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="block text-foreground mb-2">Trouvez la paix</span>
              <span className="block text-primary">
                en vous
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Découvrez Sahaja Yoga, une méthode de méditation simple, spontanée et accessible à tous.
              <span className="text-primary font-semibold"> 100% gratuite</span>, pour toujours.
            </p>

            {/* Micro bullets */}
            <div className="flex flex-wrap gap-4">
              {["Sans effort", "Sans croyance", "Accessible à tous"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => scrollToSection("rejoindre")}
                className="group px-8 py-4 bg-primary text-white rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <span className="font-semibold">Essayer gratuitement</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("blossom")}
                className="group px-8 py-4 bg-white border-2 border-border text-foreground rounded-full hover:border-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2"
              >
                <span className="font-semibold">En savoir plus</span>
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-4xl font-bold text-primary">50K+</div>
                <div className="text-sm text-muted-foreground mt-1">Pratiquants</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-secondary">100+</div>
                <div className="text-sm text-muted-foreground mt-1">Centres</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758599880935-516d241bc5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtZWRpdGF0aW9uJTIwaG9tZXxlbnwxfHx8fDE3NjQ1OTMxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Méditation paisible"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-xl rounded-3xl p-6 shadow-2xl animate-float">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-secondary border-2 border-white" />
                  <div className="w-10 h-10 rounded-full bg-accent border-2 border-white" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">+1,200 ce mois</p>
                  <p className="text-sm text-muted-foreground">Nouveaux pratiquants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

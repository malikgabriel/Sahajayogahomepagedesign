import { MapPin, ArrowRight } from "lucide-react";

export function CentersSection() {
  const cities = [
    { name: "Paris", color: "bg-primary" },
    { name: "Lyon", color: "bg-secondary" },
    { name: "Marseille", color: "bg-[#c4856e]" },
    { name: "Toulouse", color: "bg-primary" },
    { name: "Bordeaux", color: "bg-secondary" },
    { name: "Nantes", color: "bg-[#c4856e]" },
  ];

  return (
    <section id="centres" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Nos Centres</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">Trouvez un centre</span>
            <span className="block text-primary">
              près de chez vous
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Participez gratuitement à une séance près de chez vous ou en ligne
          </p>
        </div>

        {/* City Pills */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {cities.map((city) => (
            <div
              key={city.name}
              className={`group px-6 py-3 ${city.color} text-white rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer flex items-center gap-2`}
            >
              <MapPin className="w-4 h-4" />
              <span className="font-semibold">{city.name}</span>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-12">
          <div className="relative bg-muted/50 h-[300px] flex items-center justify-center">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(171, 67, 39, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(171, 67, 39, 0.2) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />
            </div>
            <div className="relative z-10 text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-float" />
              <p className="text-xl font-bold text-foreground mb-2">Carte interactive</p>
              <p className="text-muted-foreground">Tous nos centres en France</p>
            </div>

            {/* Animated Pins */}
            {[
              { top: "30%", left: "35%" },
              { top: "50%", left: "60%" },
              { top: "65%", left: "45%" },
              { top: "40%", left: "50%" },
            ].map((pos, i) => (
              <div
                key={i}
                className="absolute animate-float"
                style={{ top: pos.top, left: pos.left, animationDelay: `${i * 0.5}s` }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse" />
                  <div className="relative w-4 h-4 bg-primary rounded-full border-2 border-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-2xl hover:shadow-primary/40 transition-all transform hover:scale-105">
            <span className="font-semibold">Voir les centres</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

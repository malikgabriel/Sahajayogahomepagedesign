import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Heart, Users, Zap, Gift } from "lucide-react";

export function AboutSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Gift,
      title: "100% Gratuit",
      description: "Sans frais, pour toujours",
      color: "bg-primary",
    },
    {
      icon: Users,
      title: "Communauté",
      description: "Rejoignez des milliers de pratiquants",
      color: "bg-secondary",
    },
    {
      icon: Zap,
      title: "Résultats rapides",
      description: "Ressentez les effets dès la première séance",
      color: "bg-[#c4856e]",
    },
    {
      icon: Heart,
      title: "Pour tous",
      description: "Aucune expérience nécessaire",
      color: "bg-secondary",
    },
  ];

  return (
    <section id="apropos" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">À propos</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">Qu'est-ce que</span>
            <span className="block text-primary">
              Sahaja Yoga ?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une méthode de méditation profonde qui éveille votre énergie intérieure
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1630484507146-cbd5eef1a400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZGl0YXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzY0NTkzMTE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Méditation Sahaja Yoga"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/15" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Sahaja Yoga est une approche simple et directe de la spiritualité.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Fondée en 1970 par{" "}
              <span className="font-semibold text-primary">Shri Mataji Nirmala Devi</span>, elle permet l'éveil spontané de la{" "}
              <span className="font-semibold text-secondary">Kundalini</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">"Sahaja"</span> signifie spontané.{" "}
              <span className="font-semibold text-foreground">"Yoga"</span> signifie union avec l'énergie de l'amour divin.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Cette pratique vous permet d'atteindre un état de{" "}
              <span className="font-semibold text-foreground">silence intérieur</span> et de transformation réelle.
            </p>

            <div className="pt-6">
              <button
                onClick={() => scrollToSection("centres")}
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105"
              >
                <span className="font-semibold">Découvrir nos centres</span>
              </button>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

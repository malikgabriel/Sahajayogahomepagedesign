import { useState } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Flower2, ArrowRight, Quote } from "lucide-react";

export function BlossomTimeSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="blossom" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 left-0 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Flower2 className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Une prise de conscience</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">Le temps de la floraison</span>
            <span className="block text-primary">
              est arrivé
            </span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1725824352789-d20f592cc7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcHJpbmclMjBibG9zc29tcyUyMHN1bmxpZ2h0JTIwbmF0dXJlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzczODY3Mjg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="La floraison spirituelle"
                className="w-full h-[450px] sm:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nous avons évolué naturellement pour devenir humains. De la même manière, notre{" "}
              <span className="font-semibold text-foreground">évolution intérieure</span> peut se produire spontanément.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Aujourd'hui, malgré les progrès matériels,{" "}
              <span className="font-semibold text-primary">stress, anxiété et perte de sens</span> persistent. Ces limites montrent qu'une transformation plus profonde est nécessaire.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Selon Sahaja Yoga, cette transformation ne vient pas de l'intellect, mais d'une{" "}
              <span className="font-semibold text-secondary">expérience directe en soi</span>.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Cette expérience commence par un état appelé :{" "}
              <span className="font-semibold text-primary">
                la conscience sans pensées
              </span>.
            </p>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={() => scrollToSection("realisation")}
                className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold text-lg"
              >
                <span>Découvrir l'expérience</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Quote Block - Full Width Below */}
        <div className="relative bg-muted/50 rounded-3xl p-8 sm:p-10 border border-primary/10 mt-16 text-center">
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center mb-4 mx-auto">
            <Quote className="w-5 h-5 text-white" />
          </div>
          <p className="text-xl sm:text-2xl text-foreground italic leading-relaxed mb-4">
            "Le temps de la floraison est arrivé."
          </p>
          <div className="flex items-center gap-3 justify-center">
            <div className="w-1.5 h-8 bg-primary rounded-full" />
            <p className="text-sm font-semibold text-muted-foreground">
              Shri Mataji Nirmala Devi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

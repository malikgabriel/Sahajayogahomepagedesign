import { useState } from "react";
import { Play, Zap, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function SelfRealizationSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="realisation" className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <Zap className="w-4 h-4 text-secondary" />
            <span className="text-sm font-medium text-secondary">La Réalisation du Soi</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="block text-foreground mb-2">Comment atteindre cet état</span>
            <span className="block text-secondary">
              naturellement ?
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Grâce à la Réalisation du Soi
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Chaque être humain possède en lui une énergie subtile appelée{" "}
              <span className="font-semibold text-secondary">Kundalini</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Située dans l'os sacrum (qui signifie{" "}
              <span className="font-semibold text-foreground">"sacré"</span>), elle est présente en chacun, dès la naissance.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorsqu'elle s'éveille, elle vous connecte à une énergie plus vaste :{" "}
              <span className="font-semibold text-primary">l'énergie de l'amour divin</span>.
            </p>

            <p className="text-lg text-foreground leading-relaxed">
              Cette expérience est spontanée, naturelle… et{" "}
              <span className="font-semibold text-secondary">accessible à tous</span>.
            </p>

            {/* CTA */}
            <div className="pt-6">
              <button
                onClick={() => scrollToSection("rejoindre")}
                className="group px-8 py-4 bg-secondary text-white rounded-full hover:shadow-2xl hover:shadow-secondary/40 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                <span className="font-semibold">Faire l'expérience maintenant</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column - Video */}
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/10 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
                {isVideoPlaying ? (
                  <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                    <iframe
                      className="absolute inset-0 w-full h-full"
                      src="https://www.youtube.com/embed/ksBEM3MKsJo?autoplay=1&rel=0"
                      title="La Réalisation du Soi - Sahaja Yoga"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <div
                    className="relative cursor-pointer"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1762673761812-9c78598b0f7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGxpZ2h0JTIwZW5lcmd5JTIwaGVhbGluZyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzczODY3Mjg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Réalisation du Soi"
                      className="w-full h-[300px] sm:h-[380px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse" />
                        <div className="relative w-20 h-20 bg-white/95 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-8 h-8 text-secondary ml-1" fill="currentColor" />
                        </div>
                      </div>
                    </div>

                    {/* Video Label */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <div className="flex items-center gap-2 mb-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                        <span className="text-white/90 text-sm font-medium">Vidéo</span>
                      </div>
                      <p className="text-white font-semibold text-lg">
                        Réalisation du Soi — Shri Mataji
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

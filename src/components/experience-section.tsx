import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Eye } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-accent/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Eye className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">L'expérience</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">L'expérience</span>
            <span className="block text-primary">
              Sahaja
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Un état de silence intérieur et de présence
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Habituellement, le mental oscille entre{" "}
              <span className="font-semibold text-foreground">passé et futur</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Lorsque la Kundalini s'éveille, un espace de{" "}
              <span className="font-semibold text-secondary">silence apparaît entre les pensées</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Vous entrez dans un état d'attention paisible, où vous êtes{" "}
              <span className="font-semibold text-primary">pleinement dans le présent</span>.
            </p>

            <p className="text-lg text-foreground leading-relaxed font-medium">
              Cet état apporte une paix intérieure profonde et durable.
            </p>

            {/* Visual: Past / Present / Future */}
            <div className="pt-6">
              <div className="flex items-center justify-center gap-3 sm:gap-6">
                <div className="flex-1 text-center p-4 bg-muted/50 rounded-2xl opacity-50">
                  <p className="text-sm text-muted-foreground font-medium">Passé</p>
                </div>
                <div className="flex-1 text-center p-4 bg-primary/10 rounded-2xl border-2 border-primary/30 shadow-lg">
                  <p className="text-sm font-semibold text-primary">Présent</p>
                  <p className="text-xs text-muted-foreground mt-1">Conscience sans pensées</p>
                </div>
                <div className="flex-1 text-center p-4 bg-muted/50 rounded-2xl opacity-50">
                  <p className="text-sm text-muted-foreground font-medium">Futur</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1767884022240-b91fb555495a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWxtJTIwcGVyc29uJTIwZXllcyUyMGNsb3NlZCUyMGlubmVyJTIwcGVhY2UlMjBzZXJlbmV8ZW58MXx8fHwxNzczODY3Mjg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Silence intérieur et présence"
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

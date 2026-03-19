import { Hand, Brain, Heart, ArrowRight } from "lucide-react";

export function SubtleSystemSection() {
  const perceptions = [
    {
      icon: Hand,
      label: "Dans vos mains",
      color: "bg-primary",
    },
    {
      icon: Brain,
      label: "Dans votre attention",
      color: "bg-secondary",
    },
    {
      icon: Heart,
      label: "Dans votre état intérieur",
      color: "bg-[#c4856e]",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <span className="text-sm font-medium text-primary">Système subtil</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">Découvrez votre</span>
            <span className="block text-primary">
              système intérieur
            </span>
          </h2>
        </div>

        {/* Content */}
        <div className="bg-muted/50 rounded-[3rem] p-10 sm:p-14 border border-primary/10">
          <div className="space-y-6 mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Votre corps possède un système subtil composé de centres d'énergie appelés{" "}
              <span className="font-semibold text-primary">chakras</span>.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              Après la Réalisation du Soi, vous pouvez ressentir cet équilibre directement :
            </p>
          </div>

          {/* Perception Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {perceptions.map((item) => (
              <div key={item.label} className="group bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all text-center">
                <div className={`w-14 h-14 mx-auto ${item.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all`}>
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <p className="font-semibold text-foreground">{item.label}</p>
              </div>
            ))}
          </div>

          <p className="text-lg text-foreground leading-relaxed text-center mb-8">
            Comprendre ce système permet une{" "}
            <span className="font-semibold text-primary">
              transformation profonde
            </span>.
          </p>

          {/* CTA */}
          <div className="text-center">
            <button className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold text-lg">
              <span>Explorer les chakras</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

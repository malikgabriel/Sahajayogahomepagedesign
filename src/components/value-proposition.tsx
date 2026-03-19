import { Brain, Smile, Zap, Heart } from "lucide-react";

export function ValueProposition() {
  const benefits = [
    {
      icon: Brain,
      title: "Clarté mentale",
      description: "Libérez votre esprit du stress et de l'anxiété",
      color: "bg-primary",
    },
    {
      icon: Smile,
      title: "Bien-être émotionnel",
      description: "Retrouvez équilibre et sérénité",
      color: "bg-secondary",
    },
    {
      icon: Zap,
      title: "Énergie intérieure",
      description: "Reconnectez-vous à votre vitalité",
      color: "bg-[#c4856e]",
    },
    {
      icon: Heart,
      title: "Paix intérieure",
      description: "Un état stable et durable",
      color: "bg-secondary",
    },
  ];

  return (
    <section className="py-24 sm:py-32 bg-muted/20 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
            <span className="text-sm font-medium text-secondary">Bienfaits</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-secondary">
              Transformez votre vie
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les effets concrets de la méditation Sahaja Yoga
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="group relative">
              <div
                className="absolute -inset-1 bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 rounded-3xl blur"
              />
              <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300">
                <div
                  className={`w-16 h-16 ${benefit.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all`}
                >
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

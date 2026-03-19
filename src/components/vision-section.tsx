import { ArrowRight, Quote } from "lucide-react";

export function VisionSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-muted/30 relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 bg-secondary/10 rounded-full border border-secondary/20 text-[13px] font-medium text-secondary">
            Vision
          </span>
        </div>

        {/* Title */}
        <h2 className="text-center mb-4">
          <span className="block text-3xl sm:text-4xl lg:text-[40px] font-bold text-foreground">
            La vision de{" "}
            <span className="text-primary">
              Shri Mataji
            </span>
          </span>
        </h2>

        {/* Subtitle */}
        <p className="text-center text-muted-foreground text-lg sm:text-xl max-w-[600px] mx-auto mb-10">
          Une transformation intérieure réelle, vécue par l'expérience
        </p>

        {/* Intro text */}
        <p className="text-center text-foreground/80 text-base sm:text-lg max-w-[700px] mx-auto mb-12 leading-relaxed">
          Shri Mataji Nirmala Devi a toujours insisté sur une chose : la
          transformation intérieure est une expérience réelle, qui se manifeste
          concrètement dans la vie de chacun.
        </p>

        {/* Quote Card */}
        <div className="max-w-[700px] mx-auto mb-10">
          <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg shadow-black/5 border border-border p-8 sm:p-10">
            {/* Quote icon */}
            <div className="absolute -top-5 left-8 sm:left-10">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-md">
                <Quote className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="space-y-5 text-foreground/85 text-base sm:text-[17px] leading-relaxed pt-2">
              <p>
                Non seulement les problèmes physiques se résolvent, mais aussi
                les problèmes mentaux et spirituels. De nombreuses personnes
                souffrant de troubles mentaux ont été guéries grâce au Sahaja
                Yoga.
              </p>
              <p>
                Cependant, il est important de rappeler que le Sahaja Yoga n'a
                pas été créé pour guérir, mais pour permettre d'atteindre la
                Réalisation de Soi. Un bien-être physique, mental et spirituel
                complet en découle.
              </p>
              <p>
                Nombreux sont ceux qui ont abandonné leurs mauvaises habitudes
                comme le tabac, l'alcool et les drogues, parfois en l'espace
                d'une seule journée. Beaucoup de toxicomanes ont réussi à se
                sevrer après avoir découvert la puissance de l'Esprit en eux.
              </p>
              <p>
                Cela leur permet de savourer pleinement leur existence et leur
                donne la force de ne plus courir après ces plaisirs éphémères,
                sources de réactions néfastes et destructeurs à long terme.
              </p>
              <p className="font-medium text-foreground">
                Ce n'est pas la compréhension rationnelle ou intellectuelle,
                mais la lumière du Soi qui, spontanément, dissipe les ténèbres
                et donne la force de guérir.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-8 pt-6 border-t border-secondary/15">
              <p className="text-secondary font-medium italic">
                — Shri Mataji Nirmala Devi
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection("rejoindre")}
            className="group px-8 py-4 bg-secondary text-white rounded-full shadow-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
          >
            <span className="font-semibold">Faire l'expérience maintenant</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

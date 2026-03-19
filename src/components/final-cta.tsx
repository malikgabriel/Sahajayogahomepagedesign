import { useState } from "react";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export function FinalCTA() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    region: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", region: "" });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="rejoindre" className="py-24 sm:py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "3s" }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden">
          <div className="p-12 sm:p-16 text-center">
            {/* Header */}
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Commencez aujourd'hui</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block text-foreground mb-2">Prêt à transformer</span>
              <span className="block text-primary">
                votre vie ?
              </span>
            </h2>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Votre première séance est{" "}
              <span className="font-bold text-primary">gratuite</span>.
              Aucune expérience requise.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-12">
              {["Gratuit", "Sans engagement", "Accessible immédiatement"].map((benefit, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Form */}
            {isSubmitted ? (
              <div className="py-16 animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">Merci !</h3>
                <p className="text-lg text-muted-foreground">
                  Nous vous contacterons très bientôt pour planifier votre première séance.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground transition-all shadow-sm"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-border focus:outline-none focus:border-primary text-foreground placeholder:text-muted-foreground transition-all shadow-sm"
                    placeholder="votre.email@exemple.fr"
                  />
                </div>

                <div>
                  <select
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-white border-2 border-border focus:outline-none focus:border-primary text-foreground transition-all shadow-sm"
                  >
                    <option value="">Sélectionnez votre région</option>
                    <option value="paris">Île-de-France (Paris)</option>
                    <option value="lyon">Auvergne-Rhône-Alpes (Lyon)</option>
                    <option value="marseille">Provence-Alpes-Côte d'Azur (Marseille)</option>
                    <option value="toulouse">Occitanie (Toulouse)</option>
                    <option value="bordeaux">Nouvelle-Aquitaine (Bordeaux)</option>
                    <option value="nantes">Pays de la Loire (Nantes)</option>
                    <option value="nice">Côte d'Azur (Nice)</option>
                    <option value="autre">Autre région</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-primary text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 group font-bold text-lg"
                >
                  <span>Réserver ma séance gratuite</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-muted-foreground pt-2">
                  Vos données sont protégées
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

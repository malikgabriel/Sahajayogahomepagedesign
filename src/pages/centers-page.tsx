import { MapPin, Clock, Phone, Mail, ArrowRight, Globe, Navigation } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function CentersPage() {
  const regions = [
    {
      name: "Île-de-France",
      centers: [
        {
          name: "Paris Marais",
          address: "15 Rue de la Paix, 75002 Paris",
          hours: ["Lundi: 18h-20h", "Mercredi: 18h-20h", "Vendredi: 18h-20h", "Samedi: 10h-12h"],
          phone: "01 42 60 33 44",
          email: "paris@sahajayoga.fr",
          image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjBpbnRlcmlvcnxlbnwxfHx8fDE3NjQ1NTc5MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
        {
          name: "Paris Montparnasse",
          address: "28 Boulevard du Montparnasse, 75015 Paris",
          hours: ["Mardi: 19h-21h", "Jeudi: 19h-21h", "Dimanche: 10h-12h"],
          phone: "01 45 67 89 01",
          email: "montparnasse@sahajayoga.fr",
          image: "https://images.unsplash.com/photo-1664372623516-0b1540d6771e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb250ZW1wb3JhcnklMjBhcGFydG1lbnQlMjBsaXZpbmd8ZW58MXx8fHwxNzY0NTkzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      name: "Auvergne-Rhône-Alpes",
      centers: [
        {
          name: "Lyon Part-Dieu",
          address: "28 Avenue Jean Jaurès, 69007 Lyon",
          hours: ["Mardi: 19h-21h", "Jeudi: 19h-21h", "Dimanche: 10h-12h"],
          phone: "04 78 72 55 66",
          email: "lyon@sahajayoga.fr",
          image: "https://images.unsplash.com/photo-1725042893312-5ec0dea9e369?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMG1vZGVybiUyMHJvb218ZW58MXx8fHwxNzY0NTkzMTI4fDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      name: "Provence-Alpes-Côte d'Azur",
      centers: [
        {
          name: "Marseille Vieux Port",
          address: "42 Boulevard de la Liberté, 13001 Marseille",
          hours: ["Lundi: 18h30-20h30", "Mercredi: 18h30-20h30", "Samedi: 14h-16h"],
          phone: "04 91 54 77 88",
          email: "marseille@sahajayoga.fr",
          image: "https://images.unsplash.com/photo-1761971975858-c487bc10daab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpdGF0aW9uJTIwc3BhY2V8ZW58MXx8fHwxNzY0NTkzMTIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
    {
      name: "Occitanie",
      centers: [
        {
          name: "Toulouse Capitole",
          address: "56 Rue Alsace Lorraine, 31000 Toulouse",
          hours: ["Mardi: 19h-21h", "Jeudi: 19h-21h", "Samedi: 10h-13h"],
          phone: "05 61 23 44 55",
          email: "toulouse@sahajayoga.fr",
          image: "https://images.unsplash.com/photo-1761971975724-31001b4de0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWxsbmVzcyUyMGNlbnRlcnxlbnwxfHx8fDE3NjQ1OTMxMjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
        },
      ],
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Centres de Méditation</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Où recevoir</span>
              <span className="block text-primary">
                la réalisation ?
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Trouvez le centre Sahaja Yoga le plus proche de chez vous
            </p>

            <a
              href="https://sahajatlas.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full hover:shadow-xl hover:shadow-secondary/30 transition-all transform hover:scale-105"
            >
              <Globe className="w-5 h-5" />
              <span className="font-semibold">Découvrir le Sahaj Atlas</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Carte Interactive</h2>
            <p className="text-lg text-muted-foreground">
              Visualisez tous nos centres en France
            </p>
          </div>

          <div className="rounded-[3rem] overflow-hidden shadow-2xl mb-8">
            <div className="relative bg-muted/30 h-[500px] flex items-center justify-center">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'linear-gradient(rgba(171, 67, 39, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(171, 67, 39, 0.2) 1px, transparent 1px)',
                  backgroundSize: '50px 50px'
                }} />
              </div>

              <div className="relative z-10 text-center">
                <Navigation className="w-20 h-20 text-primary mx-auto mb-6 animate-float" />
                <p className="text-2xl font-bold text-foreground mb-3">Carte interactive</p>
                <p className="text-muted-foreground mb-6">
                  Explorez tous nos centres sur le territoire français
                </p>
                <a
                  href="https://sahajatlas.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-all"
                >
                  <span>Voir sur Sahaj Atlas</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {[
                { top: '25%', left: '48%', label: 'Paris' },
                { top: '52%', left: '55%', label: 'Lyon' },
                { top: '72%', left: '52%', label: 'Marseille' },
                { top: '60%', left: '35%', label: 'Toulouse' },
              ].map((pin, i) => (
                <div key={i} className="absolute group" style={{ top: pin.top, left: pin.left }}>
                  <div className="relative animate-float" style={{ animationDelay: `${i * 0.5}s` }}>
                    <div className="absolute inset-0 bg-primary rounded-full blur-md animate-pulse" />
                    <div className="relative w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg cursor-pointer" />
                    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="bg-white px-3 py-1 rounded-lg shadow-lg whitespace-nowrap text-sm font-semibold text-foreground">
                        {pin.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Centers List by Region */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Nos Centres en France</h2>
            <p className="text-lg text-muted-foreground">
              Trouvez votre centre et rejoignez une communauté bienveillante
            </p>
          </div>

          <div className="space-y-16">
            {regions.map((region, regionIndex) => (
              <div key={regionIndex}>
                <h3 className="text-3xl font-bold text-foreground mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-primary rounded-full" />
                  {region.name}
                </h3>

                <div className="grid md:grid-cols-2 gap-8">
                  {region.centers.map((center, centerIndex) => (
                    <div
                      key={centerIndex}
                      className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <ImageWithFallback
                          src={center.image}
                          alt={center.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40" />
                        <div className="absolute bottom-6 left-6">
                          <h4 className="text-2xl font-bold text-white mb-1">{center.name}</h4>
                        </div>
                      </div>

                      <div className="p-8">
                        <div className="space-y-4 mb-6">
                          <div className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <p className="text-muted-foreground">{center.address}</p>
                          </div>
                          <div className="flex items-start gap-3">
                            <Clock className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                            <div className="space-y-1">
                              {center.hours.map((hour, i) => (
                                <p key={i} className="text-muted-foreground text-sm">{hour}</p>
                              ))}
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <a href={`tel:${center.phone}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {center.phone}
                            </a>
                          </div>
                          <div className="flex items-start gap-3">
                            <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <a href={`mailto:${center.email}`} className="text-muted-foreground hover:text-primary transition-colors">
                              {center.email}
                            </a>
                          </div>
                        </div>

                        <button className="w-full px-6 py-4 bg-primary text-white rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn">
                          <span className="font-semibold">Réserver une séance gratuite</span>
                          <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Informations Pratiques */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Informations Pratiques</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-muted/50 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Première visite ?</h3>
              <ul className="space-y-3 text-muted-foreground">
                {[
                  "Aucune inscription préalable nécessaire - venez quand vous voulez",
                  "Portez des vêtements confortables",
                  "Arrivez 10 minutes avant le début de la séance",
                  "Toutes les séances sont 100% gratuites",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-secondary/5 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">Questions fréquentes</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-foreground mb-2">Dois-je payer quelque chose ?</p>
                  <p className="text-muted-foreground">Non, Sahaja Yoga est 100% gratuit. Il n'y a jamais de frais cachés.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Dois-je avoir de l'expérience en méditation ?</p>
                  <p className="text-muted-foreground">Absolument pas ! Nos séances sont ouvertes à tous, débutants comme confirmés.</p>
                </div>
                <div>
                  <p className="font-semibold text-foreground mb-2">Que se passe-t-il lors d'une séance ?</p>
                  <p className="text-muted-foreground">Une séance dure environ 1h30 avec méditation guidée, explications des chakras et moments d'échange.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Vous ne trouvez pas de centre près de chez vous ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Contactez-nous, nous pourrons vous orienter vers des séances en ligne
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105"
          >
            <span className="font-semibold">Nous contacter</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Heart, Users, Globe, Sparkles, Book, ArrowRight, ExternalLink, Baby } from "lucide-react";
import shriMatajiImage from "figma:asset/ce15f13abc5cb5dba53f0d037efd07d97b5f9980.png";

export function AboutPage() {
  const benefits = [
    { title: "Réduction du stress", description: "Diminuez naturellement votre niveau de stress et d'anxiété", icon: "🧘" },
    { title: "Meilleur sommeil", description: "Profitez d'un sommeil profond et réparateur", icon: "😴" },
    { title: "Clarté mentale", description: "Améliorez votre concentration et votre focus", icon: "🧠" },
    { title: "Équilibre émotionnel", description: "Cultivez la paix intérieure et la joie", icon: "💚" },
    { title: "Santé physique", description: "Renforcez votre système immunitaire", icon: "💪" },
    { title: "Relations harmonieuses", description: "Développez compassion et empathie", icon: "🤝" },
  ];

  const testimonials = [
    { quote: "Sahaja Yoga m'a permis de me reconnecter avec moi-même et de trouver un sens profond à ma vie.", author: "Claire D.", role: "Pratiquante depuis 8 ans", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop" },
    { quote: "J'ai découvert une communauté bienveillante qui m'a aidé à traverser des moments difficiles.", author: "Thomas L.", role: "Pratiquant depuis 5 ans", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop" },
    { quote: "La méditation Sahaja Yoga a transformé ma relation avec mes enfants et ma famille.", author: "Sophie M.", role: "Pratiquante depuis 12 ans", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop" },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <Heart className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">À propos</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-secondary">
                Découvrez Sahaja Yoga
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Une transformation profonde grâce à la méditation authentique
            </p>
          </div>
        </div>
      </section>

      {/* C'est quoi ? */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">C'est </span>
              <span className="text-primary">quoi ?</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/30 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1630484507146-cbd5eef1a400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZGl0YXRpb24lMjBtb2Rlcm58ZW58MXx8fHwxNzY0NTkzMTE5fDA&ixlib=rb-4.1.0&q=80&w=800"
                  alt="Méditation Sahaja Yoga"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-primary/15" />
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">La Méditation Sahaja Yoga</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sahaja Yoga est une méthode de méditation unique fondée par{" "}
                <span className="font-semibold text-primary">Shri Mataji Nirmala Devi</span> en 1970. 
                Cette pratique éveille la <span className="font-semibold text-secondary">Kundalini</span>, 
                votre énergie spirituelle dormante, pour atteindre un état de conscience supérieur.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Le mot <span className="font-semibold text-foreground">"Sahaja"</span> signifie "spontané" ou "inné", 
                et <span className="font-semibold text-foreground">"Yoga"</span> signifie "union". 
                Ensemble, ils représentent l'union spontanée avec votre Soi véritable.
              </p>

              <div className="bg-muted/50 rounded-2xl p-6 border-l-4 border-primary">
                <p className="text-foreground font-medium">
                  Cette méditation ne nécessite aucune concentration forcée. Elle est naturelle, 
                  accessible à tous et permet d'atteindre l'état de conscience sans pensée.
                </p>
              </div>
            </div>
          </div>

          {/* Bienfaits */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              Les Bienfaits de la Méditation
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border/50"
                >
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h4>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* C'est où ? */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">C'est </span>
              <span className="text-secondary">où ?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Pratiquez dans nos centres ou participez à nos événements
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Nos Centres</h3>
              <p className="text-muted-foreground mb-6">
                Découvrez nos centres de méditation partout en France avec des séances régulières et gratuites.
              </p>
              <a href="#centres" className="inline-flex items-center gap-2 text-primary hover:gap-4 transition-all font-semibold">
                <span>Trouver un centre</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Événements</h3>
              <p className="text-muted-foreground mb-6">
                Participez à nos ateliers, retraites et festivals pour approfondir votre pratique.
              </p>
              <a href="#evenements" className="inline-flex items-center gap-2 text-secondary hover:gap-4 transition-all font-semibold">
                <span>Voir les événements</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* C'est qui ? - Shri Mataji */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-20">
            <div className="inline-block mb-6">
              <div className="w-20 h-1 bg-primary rounded-full mx-auto mb-8" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold mb-6">
              <span className="text-primary">
                La Fondatrice
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Une vie dédiée à l'éveil spirituel de l'humanité
            </p>
          </div>

          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div className="order-2 lg:order-1 space-y-8">
                <div className="text-center lg:text-left">
                  <div className="inline-block">
                    <h3 className="text-4xl sm:text-5xl font-bold text-primary mb-3">
                      Shri Mataji
                    </h3>
                    <h3 className="text-3xl sm:text-4xl font-bold text-foreground/80">
                      Nirmala Devi
                    </h3>
                    <div className="w-32 h-1 bg-primary rounded-full mt-4" />
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-8 shadow-xl border border-primary/10">
                  <p className="text-lg text-foreground leading-relaxed">
                    Née le <span className="font-semibold">21 mars 1923</span> dans une famille chrétienne en Inde, 
                    Shri Mataji Nirmala Devi a incarné dès son plus jeune âge une sagesse profonde et 
                    une compassion infinie pour l'humanité.
                  </p>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Proche collaboratrice du Mahatma Gandhi dans sa jeunesse, elle a participé 
                  activement au mouvement d'indépendance de l'Inde. Cette expérience a forgé 
                  en elle une vision universelle de la paix et de l'harmonie entre les peuples.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Le <span className="font-semibold text-primary">5 mai 1970</span>, Shri Mataji 
                  a découvert une méthode simple et universelle pour éveiller l'énergie spirituelle 
                  dormante en chaque être humain. Depuis ce jour, elle a consacré sa vie à parcourir 
                  le monde, visitant plus de <span className="font-semibold text-secondary">100 pays</span>, 
                  pour offrir gratuitement cette connaissance sacrée à l'humanité.
                </p>

                <div className="bg-secondary/5 rounded-2xl p-6">
                  <p className="text-foreground font-medium leading-relaxed">
                    Son enseignement fondamental : la réalisation du Soi ne peut être achetée. 
                    Elle doit être vécue et partagée <span className="font-bold text-primary">gratuitement</span>. 
                    C'est pourquoi Sahaja Yoga est et restera toujours accessible à tous, sans aucun coût.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://www.sahajayogaworldfoundation.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all font-semibold"
                  >
                    <span>World Foundation</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-primary/30 text-foreground rounded-full hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all font-semibold shadow-lg"
                  >
                    <Book className="w-5 h-5" />
                    <span>En savoir plus</span>
                  </a>
                </div>
              </div>

              <div className="order-1 lg:order-2 space-y-8">
                <div className="relative group">
                  <div className="absolute -inset-8 bg-accent/20 rounded-[4rem] blur-3xl group-hover:blur-[100px] transition-all duration-700" />
                  <div className="absolute -inset-4 bg-white rounded-[3.5rem]" />
                  
                  <div className="relative rounded-[3rem] overflow-hidden shadow-2xl ring-4 ring-white">
                    <ImageWithFallback
                      src={shriMatajiImage}
                      alt="Shri Mataji Nirmala Devi - Fondatrice de Sahaja Yoga"
                      className="w-full h-[700px] object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/10" />
                    
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-white/50 rounded-tl-[3rem]" />
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-white/50 rounded-br-[3rem]" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute -inset-4 bg-primary/5 rounded-3xl blur-xl" />
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg border-l-4 border-primary">
                    <div className="text-6xl text-primary/20 mb-2">"</div>
                    <p className="text-xl text-foreground italic font-medium leading-relaxed">
                      Vous ne pouvez pas connaître le sens de votre vie tant que vous n'êtes pas 
                      connecté au pouvoir qui vous a créé.
                    </p>
                    <div className="text-6xl text-primary/20 text-right -mt-8">"</div>
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-muted-foreground font-medium">— Shri Mataji Nirmala Devi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Les Yogis */}
          <div>
            <h3 className="text-3xl font-bold text-center text-foreground mb-12">
              La Communauté des Yogis
            </h3>

            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
              Les pratiquants de Sahaja Yoga forment une communauté mondiale bienveillante 
              et inclusive. Chacun apporte son expérience unique et contribue à créer un 
              environnement de soutien et de partage.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-border/50"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-primary rounded-full blur" />
                      <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white">
                        <ImageWithFallback
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rayonnement International */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-secondary">
                Rayonnement International
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Sahaja Yoga est pratiqué dans plus de 100 pays à travers le monde
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative group">
              <div className="absolute -inset-4 bg-secondary/15 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                  alt="Sahaja Yoga International"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-secondary/15" />
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">100+</div>
                  <p className="text-muted-foreground">Pays</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-secondary mb-2">50+</div>
                  <p className="text-muted-foreground">Années</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                Depuis sa fondation, Sahaja Yoga s'est développé dans le monde entier, 
                touchant des millions de personnes de toutes cultures et origines.
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-lg">Projets internationaux :</h4>
                <ul className="space-y-3">
                  {[
                    "Centres de méditation dans plus de 100 pays",
                    "Programmes éducatifs et de recherche",
                    "Projets humanitaires et sociaux",
                    "Festivals internationaux et conférences"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="https://www.sahajayoga.org"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-secondary text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Globe className="w-5 h-5" />
                <span className="font-semibold">Site International</span>
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Méditation pour les enfants */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Baby className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Programmes Jeunesse</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-primary">
                Méditation pour les Enfants
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des programmes adaptés pour éveiller la conscience des jeunes générations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-12">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Les enfants sont naturellement réceptifs à la méditation. Nos programmes 
                spécialement conçus leur permettent de développer leur concentration, 
                leur créativité et leur équilibre émotionnel dans un environnement ludique 
                et bienveillant.
              </p>

              <div className="space-y-4">
                <h4 className="font-bold text-foreground text-lg">Nos ateliers pour enfants :</h4>
                <ul className="space-y-3">
                  {[
                    "Méditations adaptées à chaque âge (5-7 ans, 8-12 ans, 13-17 ans)",
                    "Activités créatives et ludiques",
                    "Enseignement des valeurs universelles",
                    "Renforcement de la confiance en soi"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-[3rem] blur-2xl group-hover:blur-3xl transition-all" />
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=800&h=600&fit=crop"
                  alt="Enfants en méditation"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-primary/10" />
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-3xl p-12">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Ce que disent les parents
            </h3>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-muted-foreground italic mb-4">
                  "Ma fille de 9 ans est devenue plus calme et concentrée depuis qu'elle 
                  participe aux ateliers. Elle adore les méditations et les activités créatives !"
                </p>
                <p className="font-semibold text-foreground">— Isabelle, maman de Léa</p>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <p className="text-muted-foreground italic mb-4">
                  "Mon fils était très agité. La méditation Sahaja Yoga l'a aidé à mieux 
                  gérer ses émotions et à être plus serein au quotidien."
                </p>
                <p className="font-semibold text-foreground">— Marc, papa de Lucas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à commencer votre voyage intérieur ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers de pratiquants et découvrez la paix en vous
          </p>
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = "home";
              setTimeout(() => {
                const element = document.getElementById("rejoindre");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }, 100);
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl hover:shadow-primary/30 transition-all transform hover:scale-105"
          >
            <span className="font-semibold">Essayez gratuitement</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}

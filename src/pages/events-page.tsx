import { Calendar, MapPin, Clock, Users, ArrowRight, Ticket, Globe, Music } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function EventsPage() {
  const upcomingEvents = [
    {
      title: "Atelier d'Éveil — Introduction",
      description: "Découvrez Sahaja Yoga et expérimentez votre première séance de méditation guidée avec des pratiquants expérimentés.",
      date: "15 Décembre 2024",
      time: "18h30 - 20h30",
      location: "Centre Paris Marais",
      attendees: 12,
      maxAttendees: 20,
      category: "Débutant",
      type: "atelier",
      image: "https://images.unsplash.com/photo-1758874384683-0accd9fb26ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb258ZW58MXx8fHwxNzY0NTkzMTIxfDA&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      title: "Méditation Collective du Samedi",
      description: "Session de méditation en groupe pour approfondir votre pratique dans une énergie collective puissante.",
      date: "22 Décembre 2024",
      time: "10h00 - 12h00",
      location: "Centre Lyon Part-Dieu",
      attendees: 18,
      maxAttendees: 25,
      category: "Tous niveaux",
      type: "meditation",
      image: "https://images.unsplash.com/photo-1758274538961-fe8f1f24166f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwbWVkaXRhdGlvbiUyMGdyb3VwfGVufDF8fHx8MTc2NDU5MzExOXww&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      title: "Chakras & Énergie — Atelier Approfondi",
      description: "Apprenez à équilibrer vos centres énergétiques pour une harmonie corps-esprit. Techniques avancées et pratiques.",
      date: "5 Janvier 2025",
      time: "14h00 - 17h00",
      location: "Centre Marseille Vieux Port",
      attendees: 8,
      maxAttendees: 15,
      category: "Intermédiaire",
      type: "atelier",
      image: "https://images.unsplash.com/photo-1626444231642-6bd985bca16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b2dhJTIwY2xhc3N8ZW58MXx8fHwxNzY0NTkzMTIxfDA&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      title: "Retraite Week-end en Nature",
      description: "Immersion complète dans la pratique avec ateliers, méditations guidées, rencontres et temps de partage dans un cadre naturel.",
      date: "18-19 Janvier 2025",
      time: "Sam 9h - Dim 17h",
      location: "Château près de Toulouse",
      attendees: 25,
      maxAttendees: 30,
      category: "Tous niveaux",
      type: "retraite",
      image: "https://images.unsplash.com/photo-1761971975858-c487bc10daab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtZWRpdGF0aW9uJTIwc3BhY2V8ZW58MXx8fHwxNzY0NTkzMTIwfDA&ixlib=rb-4.1.0&q=80&w=800",
    },
    {
      title: "Soirée Découverte & Questions-Réponses",
      description: "Une soirée conviviale pour découvrir Sahaja Yoga, poser vos questions et rencontrer la communauté locale.",
      date: "25 Janvier 2025",
      time: "19h00 - 21h00",
      location: "Centre Paris Montparnasse",
      attendees: 5,
      maxAttendees: 30,
      category: "Débutant",
      type: "atelier",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&h=600&fit=crop",
    },
    {
      title: "Méditation & Musique Classique",
      description: "Une expérience unique combinant méditation et musique classique indienne pour élever votre conscience.",
      date: "2 Février 2025",
      time: "16h00 - 18h30",
      location: "Centre Lyon Part-Dieu",
      attendees: 14,
      maxAttendees: 35,
      category: "Tous niveaux",
      type: "special",
      image: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=800&h=600&fit=crop",
    },
  ];

  const festivals = [
    {
      title: "Festival Mondial Sahaja Yoga 2025",
      description: "Rejoignez des milliers de pratiquants du monde entier pour une semaine de méditation, musique, et célébration.",
      date: "15-22 Juillet 2025",
      location: "Cabella Ligure, Italie",
      attendees: "5000+",
      image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY0NTM2NjEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      highlight: true,
    },
    {
      title: "Salon Bien-être & Méditation Paris",
      description: "Retrouvez-nous au Salon du Bien-être pour découvrir Sahaja Yoga et recevoir votre réalisation.",
      date: "12-14 Avril 2025",
      location: "Paris Expo, Porte de Versailles",
      attendees: "Stand B42",
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
      highlight: false,
    },
    {
      title: "Journée Portes Ouvertes Nationale",
      description: "Tous nos centres ouvrent leurs portes pour une journée spéciale de découverte et de méditation gratuite.",
      date: "21 Mars 2025",
      location: "Tous les centres en France",
      attendees: "Accès libre",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
      highlight: false,
    },
  ];

  const workshops = [
    {
      title: "Méditations Guidées Hebdomadaires",
      frequency: "Tous les lundis",
      time: "19h00 - 20h30",
      description: "Sessions de méditation guidée pour débutants et confirmés",
      centers: "Tous les centres",
    },
    {
      title: "Atelier Chakras pour Débutants",
      frequency: "Premier samedi du mois",
      time: "14h00 - 17h00",
      description: "Découvrez le système subtil et apprenez à équilibrer vos chakras",
      centers: "Paris, Lyon, Marseille",
    },
    {
      title: "Méditation Matinale",
      frequency: "Tous les samedis",
      time: "08h00 - 09h30",
      description: "Commencez votre week-end en beauté avec une méditation collective",
      centers: "Paris Marais",
    },
    {
      title: "Soirée Musicale & Méditation",
      frequency: "Une fois par mois",
      time: "20h00 - 22h00",
      description: "Musique classique indienne et méditation pour une expérience transcendante",
      centers: "Lyon, Toulouse",
    },
  ];

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'atelier': return 'bg-primary';
      case 'meditation': return 'bg-secondary';
      case 'retraite': return 'bg-[#c4856e]';
      case 'special': return 'bg-primary';
      default: return 'bg-primary';
    }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Calendar className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Événements</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Nos prochains</span>
              <span className="block text-primary">
                événements
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Rejoignez-nous pour des expériences uniques de méditation, de partage et de transformation
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Prochaines </span>
              <span className="text-primary">
                Rencontres
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Inscrivez-vous dès maintenant à nos événements à venir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {upcomingEvents.map((event, index) => {
              const fillPercentage = (event.attendees / event.maxAttendees) * 100;
              
              return (
                <div
                  key={index}
                  className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className={`px-4 py-2 ${getTypeColor(event.type)} text-white rounded-full text-sm font-semibold shadow-lg`}>
                        {event.category}
                      </span>
                      <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm text-white px-3 py-2 rounded-full text-sm">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}/{event.maxAttendees}</span>
                      </div>
                    </div>

                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{event.title}</h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {event.description}
                    </p>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-foreground font-medium">{event.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{event.time}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{event.location}</span>
                      </div>
                    </div>

                    {/* Availability Bar */}
                    <div className="mb-6">
                      <div className="flex justify-between text-sm mb-2">
                        <span className="text-muted-foreground">Places restantes</span>
                        <span className="font-semibold text-foreground">{event.maxAttendees - event.attendees}</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${getTypeColor(event.type)} transition-all duration-500`}
                          style={{ width: `${fillPercentage}%` }}
                        />
                      </div>
                    </div>

                    <button className={`w-full px-6 py-4 ${getTypeColor(event.type)} text-white rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn font-semibold`}>
                      <Ticket className="w-5 h-5" />
                      <span>Réserver gratuitement</span>
                      <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Festivals & Salons */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <Music className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Événements Spéciaux</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-secondary">
                Festivals & Salons
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des événements exceptionnels pour vivre Sahaja Yoga autrement
            </p>
          </div>

          <div className="space-y-8">
            {festivals.map((festival, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-[3rem] shadow-2xl ${
                  festival.highlight ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`grid ${festival.highlight ? 'lg:grid-cols-5' : 'lg:grid-cols-2'} items-center`}>
                  {/* Image */}
                  <div className={`relative ${festival.highlight ? 'lg:col-span-3' : ''} h-80 lg:h-96 overflow-hidden`}>
                    <ImageWithFallback
                      src={festival.image}
                      alt={festival.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                  </div>

                  {/* Content */}
                  <div className={`${festival.highlight ? 'lg:col-span-2' : ''} p-12 bg-white`}>
                    {festival.highlight && (
                      <div className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold mb-4">
                        ⭐ Événement Phare
                      </div>
                    )}
                    
                    <h3 className={`${festival.highlight ? 'text-4xl' : 'text-3xl'} font-bold text-foreground mb-4`}>
                      {festival.title}
                    </h3>
                    
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {festival.description}
                    </p>

                    <div className="space-y-3 mb-8">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-6 h-6 text-primary" />
                        <span className="text-foreground font-semibold text-lg">{festival.date}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <MapPin className="w-6 h-6 text-secondary" />
                        <span className="text-muted-foreground text-lg">{festival.location}</span>
                      </div>

                      <div className="flex items-center gap-3">
                        <Users className="w-6 h-6 text-accent" />
                        <span className="text-muted-foreground text-lg">{festival.attendees} participants</span>
                      </div>
                    </div>

                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-semibold">
                      <Globe className="w-5 h-5" />
                      <span>En savoir plus</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recurring Workshops */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-foreground">Ateliers & Méditations </span>
              <span className="text-primary">
                Guidées
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Participez à nos ateliers réguliers pour approfondir votre pratique
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{workshop.title}</h3>
                    <p className="text-primary font-semibold">{workshop.frequency}</p>
                  </div>
                  <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-7 h-7 text-white" />
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{workshop.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="text-muted-foreground">{workshop.time}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{workshop.centers}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ne manquez aucun événement
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Inscrivez-vous à notre newsletter pour recevoir toutes nos actualités
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre.email@exemple.fr"
              className="flex-1 px-6 py-4 rounded-2xl bg-white border-2 border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-all shadow-sm"
            />
            <button className="px-8 py-4 bg-primary text-white rounded-2xl hover:shadow-xl transition-all flex items-center justify-center gap-2 font-semibold">
              <span>S'abonner</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
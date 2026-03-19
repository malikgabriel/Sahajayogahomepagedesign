import { Calendar, MapPin, Clock, ArrowRight, Users } from "lucide-react";

export function EventsSection() {
  const events = [
    {
      title: "Atelier d'Éveil — Introduction",
      description: "Découvrez Sahaja Yoga et expérimentez votre première séance de méditation guidée.",
      date: "15 Décembre 2024",
      time: "18h30 - 20h30",
      location: "Centre Paris",
      attendees: 12,
      maxAttendees: 20,
      category: "Débutant",
      color: "primary",
    },
    {
      title: "Méditation Collective",
      description: "Session de méditation en groupe pour approfondir votre pratique dans une énergie collective.",
      date: "22 Décembre 2024",
      time: "10h00 - 12h00",
      location: "Centre Lyon",
      attendees: 18,
      maxAttendees: 25,
      category: "Tous niveaux",
      color: "secondary",
    },
    {
      title: "Chakras & Énergie",
      description: "Apprenez à équilibrer vos centres énergétiques pour une harmonie corps-esprit.",
      date: "5 Janvier 2025",
      time: "14h00 - 17h00",
      location: "Centre Marseille",
      attendees: 8,
      maxAttendees: 15,
      category: "Intermédiaire",
      color: "accent",
    },
    {
      title: "Retraite Week-end",
      description: "Immersion complète dans la pratique avec ateliers, méditations et rencontres.",
      date: "18-19 Janvier 2025",
      time: "Tout le week-end",
      location: "Château près de Toulouse",
      attendees: 25,
      maxAttendees: 30,
      category: "Tous niveaux",
      color: "primary",
    },
  ];

  const getColorClass = (color: string) => {
    switch(color) {
      case 'primary': return 'bg-primary';
      case 'secondary': return 'bg-secondary';
      case 'accent': return 'bg-[#c4856e]';
      default: return 'bg-primary';
    }
  };

  return (
    <section id="evenements" className="py-32 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Calendar className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Événements</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-foreground mb-2">Prochains</span>
            <span className="block text-primary">
              ateliers & retraites
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez-nous pour des expériences uniques de méditation et de partage
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {events.map((event, index) => {
            const fillPercentage = (event.attendees / event.maxAttendees) * 100;
            
            return (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Header */}
                <div className={`${getColorClass(event.color)} p-8 relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
                        {event.category}
                      </span>
                      <div className="flex items-center gap-2 text-white/90">
                        <Users className="w-4 h-4" />
                        <span className="text-sm font-medium">{event.attendees}/{event.maxAttendees}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {event.title}
                    </h3>
                    
                    <p className="text-white/90 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8">
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <span className="text-foreground font-medium">{event.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5" />
                      </div>
                      <span className="text-muted-foreground">{event.time}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-accent/30 text-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
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
                        className={`h-full ${getColorClass(event.color)} transition-all duration-500`}
                        style={{ width: `${fillPercentage}%` }}
                      />
                    </div>
                  </div>

                  <button className={`w-full px-6 py-4 ${getColorClass(event.color)} text-white rounded-full hover:shadow-xl transition-all flex items-center justify-center gap-2 group/btn font-semibold`}>
                    <span>S'inscrire maintenant</span>
                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="#evenements"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-border text-foreground rounded-full hover:border-primary hover:bg-primary/5 transition-all transform hover:scale-105"
          >
            <span className="font-semibold">Voir tous les événements</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}

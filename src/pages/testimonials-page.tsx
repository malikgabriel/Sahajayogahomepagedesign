import { useState } from "react";
import { Quote, Star, Play, Podcast, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function TestimonialsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "Tous" },
    { id: "transformation", label: "Transformation" },
    { id: "health", label: "Santé" },
    { id: "peace", label: "Paix intérieure" },
    { id: "community", label: "Communauté" },
  ];

  const testimonials = [
    {
      quote: "Sahaja Yoga a complètement transformé ma vie. Je me sens enfin en paix avec moi-même et j'ai trouvé un équilibre que je cherchais depuis des années. La méditation m'a permis de comprendre qui je suis vraiment.",
      author: "Marie Dubois",
      location: "Paris",
      role: "Designer graphique",
      years: "8 ans de pratique",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NTI1Mzc1fDA&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "transformation",
    },
    {
      quote: "J'étais sceptique au début, mais dès la première séance j'ai ressenti quelque chose de profond. Maintenant je pratique tous les jours et ma vie a changé. Mon stress a diminué et je dors beaucoup mieux.",
      author: "Sophie Laurent",
      location: "Marseille",
      role: "Architecte",
      years: "5 ans de pratique",
      image: "https://images.unsplash.com/photo-1692482386532-7a3c6a051144?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY0NTkzMTI0fDA&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "health",
    },
    {
      quote: "Une pratique incroyable qui m'a aidé à gérer mon stress quotidien. Les séances sont accueillantes et l'effet est immédiat. La communauté est bienveillante et inspirante. Je recommande à 100% !",
      author: "Jean Martin",
      location: "Lyon",
      role: "Entrepreneur",
      years: "6 ans de pratique",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDU4NDIyM3ww&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "community",
    },
    {
      quote: "Après des années d'anxiété et de burn-out, Sahaja Yoga m'a permis de retrouver ma sérénité. C'est bien plus qu'une méditation, c'est un véritable chemin vers soi-même.",
      author: "Claire Rousseau",
      location: "Toulouse",
      role: "Professeure",
      years: "12 ans de pratique",
      image: "https://images.unsplash.com/photo-1745434159123-4908d0b9df94?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHNtaWxpbmd8ZW58MXx8fHwxNzY0NTkyMDc0fDA&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "peace",
    },
    {
      quote: "La méditation Sahaja Yoga a amélioré ma concentration et ma créativité. Je suis plus présent dans ma vie quotidienne et mes relations sont devenues plus harmonieuses.",
      author: "Thomas Leroy",
      location: "Bordeaux",
      role: "Développeur",
      years: "4 ans de pratique",
      image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjQ1NjI1NDZ8MA&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "transformation",
    },
    {
      quote: "J'ai découvert Sahaja Yoga pendant une période difficile de ma vie. Cette pratique m'a donné les outils pour traverser mes épreuves avec force et dignité. Je suis infiniment reconnaissante.",
      author: "Nathalie Petit",
      location: "Nice",
      role: "Infirmière",
      years: "10 ans de pratique",
      image: "https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGJ1c2luZXNzfGVufDF8fHx8MTc2NDU3MjE2N3ww&ixlib=rb-4.1.0&q=80&w=200",
      rating: 5,
      category: "transformation",
    },
  ];

  const podcasts = [
    {
      title: "Mon parcours avec Sahaja Yoga",
      guest: "Marie D., 8 ans de pratique",
      duration: "32 min",
      description: "Marie partage son chemin de transformation personnelle et comment la méditation a changé sa vie.",
      image: "https://images.unsplash.com/photo-1626444231642-6bd985bca16a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB5b2dhJTIwY2xhc3N8ZW58MXx8fHwxNzY0NTkzMTIxfDA&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      title: "Guérir l'anxiété par la méditation",
      guest: "Dr. Sophie L., Psychologue",
      duration: "45 min",
      description: "Une discussion approfondie sur les bienfaits de Sahaja Yoga pour la santé mentale.",
      image: "https://images.unsplash.com/photo-1714646793325-1e8c26fc2c82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGxpdmluZyUyMHJvb20lMjBtZWRpdGF0aW9ufGVufDF8fHx8MTc2NDU5MzEyMHww&ixlib=rb-4.1.0&q=80&w=400",
    },
    {
      title: "La communauté Sahaja Yoga",
      guest: "Jean M., Coordinateur",
      duration: "28 min",
      description: "Découvrez comment la communauté mondiale enrichit la pratique de chacun.",
      image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=400&fit=crop",
    },
  ];

  const filteredTestimonials = selectedCategory === "all" 
    ? testimonials 
    : testimonials.filter(t => t.category === selectedCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 bg-muted/30 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Quote className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Témoignages</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Ils ont trouvé</span>
              <span className="block text-primary">
                leur équilibre
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez comment Sahaja Yoga a transformé la vie de milliers de personnes
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">
                4.9/5
              </div>
              <p className="text-muted-foreground">Note moyenne</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-secondary mb-3">
                2,500+
              </div>
              <p className="text-muted-foreground">Avis positifs</p>
            </div>
            
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-3">
                98%
              </div>
              <p className="text-muted-foreground">Recommandent</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all font-semibold ${
                  selectedCategory === category.id
                    ? "bg-primary text-white shadow-lg"
                    : "bg-white text-foreground border-2 border-border hover:border-primary"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] flex flex-col"
              >
                {/* Quote Icon */}
                <div className="w-12 h-12 bg-secondary rounded-2xl flex items-center justify-center mb-6">
                  <Quote className="w-6 h-6 text-white" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-border">
                  <div className="relative">
                    <div className="absolute -inset-1 bg-primary rounded-full blur" />
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-4 border-white">
                      <ImageWithFallback
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <p className="font-bold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.location} • {testimonial.years}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Podcasts & Interviews */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-secondary/10 rounded-full border border-secondary/20 mb-6">
              <Podcast className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium text-secondary">Podcasts & Interviews</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-secondary">
                Écoutez leurs histoires
              </span>
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Plongez dans les récits inspirants de pratiquants du monde entier
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={podcast.image}
                    alt={podcast.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform cursor-pointer shadow-xl">
                      <Play className="w-8 h-8 text-primary ml-1" />
                    </div>
                  </div>

                  {/* Duration */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/60 backdrop-blur-sm text-white rounded-full text-sm">
                    {podcast.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{podcast.title}</h3>
                  <p className="text-primary font-semibold text-sm mb-3">{podcast.guest}</p>
                  <p className="text-muted-foreground text-sm">{podcast.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Témoignages Vidéo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visionnez les témoignages en vidéo de pratiquants
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "Ma transformation en 6 mois",
                author: "Claire R.",
                thumbnail: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=450&fit=crop",
              },
              {
                title: "Comment j'ai surmonté le stress",
                author: "Thomas L.",
                thumbnail: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=450&fit=crop",
              },
            ].map((video, index) => (
              <div
                key={index}
                className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all cursor-pointer"
              >
                <ImageWithFallback
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50" />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-xl">
                    <Play className="w-10 h-10 text-primary ml-1" />
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-white/90">{video.author}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Prêt à écrire votre propre histoire ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez des milliers de pratiquants et commencez votre transformation
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
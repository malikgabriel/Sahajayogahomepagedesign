import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "Sahaja Yoga a complètement transformé ma vie. Je me sens enfin en paix avec moi-même et j'ai trouvé un équilibre que je cherchais depuis des années.",
      author: "Marie Dubois",
      location: "Paris",
      role: "Designer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      quote: "Une pratique incroyable qui m'a aidé à gérer mon stress quotidien. Les séances sont accueillantes et l'effet est immédiat. Je recommande à 100% !",
      author: "Jean Martin",
      location: "Lyon",
      role: "Entrepreneur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
      rating: 5,
    },
    {
      quote: "J'étais sceptique au début, mais dès la première séance j'ai ressenti quelque chose de profond. Maintenant je pratique tous les jours et ma vie a changé.",
      author: "Sophie Laurent",
      location: "Marseille",
      role: "Architecte",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
      rating: 5,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="temoignages" className="py-32 bg-muted/30 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Témoignages</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="block text-primary">
              Ce qu'ils vivent
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment Sahaja Yoga transforme le quotidien
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Card */}
            <div className="bg-white rounded-[3rem] shadow-2xl p-12 sm:p-16">
              {/* Quote Icon */}
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-8 shadow-lg">
                <Quote className="w-8 h-8 text-white" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-2xl sm:text-3xl text-foreground mb-10 leading-relaxed font-medium">
                "{testimonials[currentSlide].quote}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-5">
                <div className="relative">
                  <div className="absolute -inset-1 bg-primary rounded-full blur" />
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <ImageWithFallback
                      src={testimonials[currentSlide].image}
                      alt={testimonials[currentSlide].author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div>
                  <p className="text-xl font-bold text-foreground">{testimonials[currentSlide].author}</p>
                  <p className="text-muted-foreground">
                    {testimonials[currentSlide].role} • {testimonials[currentSlide].location}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 -left-4 sm:-left-20 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center hover:scale-110 border border-border"
              aria-label="Témoignage précédent"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute top-1/2 -right-4 sm:-right-20 -translate-y-1/2 w-14 h-14 bg-white rounded-full shadow-xl hover:shadow-2xl transition-all flex items-center justify-center hover:scale-110 border border-border"
              aria-label="Témoignage suivant"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-12">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-3 rounded-full transition-all ${
                  index === currentSlide
                    ? "bg-primary w-12"
                    : "bg-border hover:bg-muted-foreground w-3"
                }`}
                aria-label={`Aller au témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
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
  );
}

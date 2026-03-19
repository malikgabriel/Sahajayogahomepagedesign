import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  category: string;
  tags: string[];
  readTime: string;
  featured?: boolean;
}

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Tous");
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts: BlogPost[] = [
    {
      id: "1",
      title: "Comment débuter la méditation : Guide complet pour débutants",
      excerpt: "Découvrez les bases de la méditation Sahaja Yoga et comment intégrer cette pratique dans votre vie quotidienne pour trouver la paix intérieure.",
      content: "",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
      author: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      date: "15 novembre 2024",
      category: "Guide pratique",
      tags: ["débutants", "méditation", "guide"],
      readTime: "8 min",
      featured: true,
    },
    {
      id: "2",
      title: "Les bienfaits scientifiques de la méditation sur le cerveau",
      excerpt: "Des études récentes révèlent comment la méditation transforme littéralement notre cerveau et améliore notre bien-être mental.",
      content: "",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=500&fit=crop",
      author: {
        name: "Dr. Jean Martin",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      },
      date: "10 novembre 2024",
      category: "Science",
      tags: ["science", "santé", "recherche"],
      readTime: "12 min",
      featured: true,
    },
    {
      id: "3",
      title: "Méditer en famille : Créer des moments de paix ensemble",
      excerpt: "Apprenez comment introduire la méditation dans votre routine familiale et créer des liens plus profonds avec vos proches.",
      content: "",
      image: "https://images.unsplash.com/photo-1609619385004-f2d3a1a07a5f?w=800&h=500&fit=crop",
      author: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      },
      date: "5 novembre 2024",
      category: "Famille",
      tags: ["famille", "enfants", "pratique"],
      readTime: "6 min",
    },
    {
      id: "4",
      title: "Gérer le stress au travail avec la méditation",
      excerpt: "Techniques simples et efficaces pour rester calme et concentré même dans les environnements professionnels les plus exigeants.",
      content: "",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=500&fit=crop",
      author: {
        name: "Thomas Bertrand",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      },
      date: "1 novembre 2024",
      category: "Bien-être",
      tags: ["stress", "travail", "productivité"],
      readTime: "7 min",
    },
    {
      id: "5",
      title: "L'éveil de la Kundalini : Comprendre cette énergie spirituelle",
      excerpt: "Explorez le concept de la Kundalini et découvrez comment cette énergie peut transformer votre conscience et votre vie.",
      content: "",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&h=500&fit=crop",
      author: {
        name: "Marie Dubois",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      },
      date: "28 octobre 2024",
      category: "Spiritualité",
      tags: ["kundalini", "énergie", "spiritualité"],
      readTime: "10 min",
    },
    {
      id: "6",
      title: "Témoignage : Comment la méditation a changé ma vie",
      excerpt: "L'histoire inspirante de Claire qui a surmonté l'anxiété et retrouvé la joie de vivre grâce à Sahaja Yoga.",
      content: "",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=500&fit=crop",
      author: {
        name: "Claire Rousseau",
        avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      },
      date: "20 octobre 2024",
      category: "Témoignages",
      tags: ["témoignage", "transformation", "inspiration"],
      readTime: "5 min",
    },
  ];

  const categories = ["Tous", "Guide pratique", "Science", "Famille", "Bien-être", "Spiritualité", "Témoignages"];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === "Tous" || post.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

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
              <Tag className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Blog</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-primary">
                Sahaja Yoga
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Découvrez nos articles sur la méditation, le bien-être et la croissance spirituelle
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Rechercher un article..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-14 pr-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none bg-white shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg"
                    : "bg-gray-100 text-muted-foreground hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {selectedCategory === "Tous" && searchQuery === "" && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-2">Articles à la une</h2>
              <p className="text-muted-foreground">Nos articles les plus populaires</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <a
                  key={post.id}
                  href={`#blog/${post.id}`}
                  className="group block bg-gradient-to-br from-white to-orange-50/30 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
                >
                  <div className="relative h-80 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-6 left-6">
                      <span className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium">
                        À la une
                      </span>
                    </div>
                  </div>

                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <ImageWithFallback
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-foreground">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-2 text-primary group-hover:gap-4 transition-all">
                        <span className="font-medium">Lire l'article</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">
              {selectedCategory === "Tous" ? "Tous les articles" : selectedCategory}
            </h2>
            <p className="text-muted-foreground">
              {filteredPosts.length} article{filteredPosts.length > 1 ? "s" : ""} trouvé{filteredPosts.length > 1 ? "s" : ""}
            </p>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-primary/50" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">Aucun article trouvé</h3>
              <p className="text-muted-foreground mb-6">
                Essayez de modifier votre recherche ou de sélectionner une autre catégorie
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Tous");
                }}
                className="px-6 py-3 bg-primary text-white rounded-full hover:shadow-lg transition-all"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <a
                  key={post.id}
                  href={`#blog/${post.id}`}
                  className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02] border border-border/50"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full font-medium">
                        {post.category}
                      </span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full overflow-hidden ring-2 ring-primary/20">
                          <ImageWithFallback
                            src={post.author.avatar}
                            alt={post.author.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="text-sm font-medium text-foreground">{post.author.name}</span>
                      </div>

                      <div className="flex items-center gap-1 text-primary group-hover:gap-2 transition-all">
                        <span className="text-sm font-medium">Lire</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {/* Load More Button - Placeholder for future pagination */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-16">
              <button className="px-8 py-4 bg-white border-2 border-primary/30 text-foreground rounded-full hover:border-primary hover:bg-primary/5 hover:scale-105 transition-all font-semibold shadow-lg">
                Charger plus d'articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Restez inspiré avec notre newsletter
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Recevez nos derniers articles et conseils directement dans votre boîte mail
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-6 py-4 rounded-full border-2 border-primary/20 focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl transition-all font-semibold whitespace-nowrap"
              >
                S'abonner
              </button>
            </form>
            <p className="text-sm text-muted-foreground mt-4">
              Pas de spam, uniquement du contenu de qualité. Désabonnez-vous à tout moment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
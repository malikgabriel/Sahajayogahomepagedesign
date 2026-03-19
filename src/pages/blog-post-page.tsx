import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Calendar, User, ArrowLeft, Clock, Share2, Facebook, Twitter, Linkedin, Mail, Tag } from "lucide-react";

interface BlogPostProps {
  postId: string;
}

export function BlogPostPage({ postId }: BlogPostProps) {
  // Mock data - In a real app, this would be fetched based on postId
  const post = {
    id: postId,
    title: "Comment débuter la méditation : Guide complet pour débutants",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=600&fit=crop",
    author: {
      name: "Marie Dubois",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      bio: "Pratiquante de Sahaja Yoga depuis 15 ans, Marie partage sa passion pour la méditation à travers ses écrits.",
    },
    date: "15 novembre 2024",
    category: "Guide pratique",
    tags: ["débutants", "méditation", "guide", "pratique"],
    readTime: "8 min",
    content: `
      <p>Commencer la méditation peut sembler intimidant au premier abord, mais avec les bonnes bases, c'est un voyage merveilleux qui transformera votre vie. Dans ce guide complet, nous allons explorer ensemble comment débuter votre pratique de la méditation Sahaja Yoga.</p>

      <h2>Pourquoi méditer ?</h2>
      <p>La méditation n'est pas simplement une mode ou une tendance passagère. C'est une pratique millénaire qui offre des bienfaits concrets et mesurables pour votre santé physique, mentale et spirituelle.</p>

      <p>Les études scientifiques montrent que la méditation régulière peut :</p>
      <ul>
        <li>Réduire significativement le stress et l'anxiété</li>
        <li>Améliorer la qualité du sommeil</li>
        <li>Renforcer le système immunitaire</li>
        <li>Augmenter la concentration et la clarté mentale</li>
        <li>Développer la compassion et l'empathie</li>
        <li>Apporter un sentiment profond de paix intérieure</li>
      </ul>

      <h2>Les bases de Sahaja Yoga</h2>
      <p>Sahaja Yoga est une méthode unique de méditation qui se distingue par sa simplicité et son accessibilité. Le mot "Sahaja" signifie "spontané" ou "inné", indiquant que cette pratique éveille une capacité naturelle présente en chacun de nous.</p>

      <p>Contrairement à d'autres formes de méditation qui demandent des années de pratique intensive, Sahaja Yoga permet d'atteindre l'état de conscience sans pensée dès les premières séances.</p>

      <h2>Préparer votre espace de méditation</h2>
      <p>Pour commencer, créez un espace dédié à votre pratique. Il n'a pas besoin d'être grand ou élaboré :</p>

      <ul>
        <li><strong>Choisissez un endroit calme</strong> où vous ne serez pas dérangé</li>
        <li><strong>Assurez-vous d'avoir une chaise confortable</strong> ou un coussin de méditation</li>
        <li><strong>Créez une atmosphère apaisante</strong> avec une lumière douce</li>
        <li><strong>Gardez l'espace propre et ordonné</strong> pour favoriser la clarté mentale</li>
      </ul>

      <h2>Votre première séance de méditation</h2>
      <p>Voici comment procéder pour votre première méditation Sahaja Yoga :</p>

      <h3>1. Installation confortable</h3>
      <p>Asseyez-vous confortablement sur une chaise, les pieds à plat sur le sol. Placez vos mains ouvertes, paumes vers le haut, sur vos genoux. Cette position favorise la réceptivité et l'ouverture.</p>

      <h3>2. Moment de détente</h3>
      <p>Prenez quelques instants pour vous détendre. Fermez les yeux et respirez naturellement. Relâchez consciemment les tensions dans vos épaules, votre nuque et votre visage.</p>

      <h3>3. L'éveil de la Kundalini</h3>
      <p>Dans Sahaja Yoga, nous travaillons avec une énergie spirituelle appelée Kundalini. Cette énergie dormante, située au niveau du sacrum, peut être éveillée spontanément grâce à des affirmations simples et sincères.</p>

      <h3>4. L'état de conscience sans pensée</h3>
      <p>L'objectif de la méditation Sahaja Yoga est d'atteindre l'état de "conscience sans pensée", où votre esprit devient calme et silencieux, mais vous restez pleinement conscient et présent.</p>

      <h2>Conseils pour les débutants</h2>
      <p>Voici quelques conseils précieux pour bien démarrer votre pratique :</p>

      <ul>
        <li><strong>Soyez patient avec vous-même</strong> - La méditation est un apprentissage progressif</li>
        <li><strong>Pratiquez régulièrement</strong> - Même 10 minutes par jour font une différence</li>
        <li><strong>Ne forcez rien</strong> - La méditation Sahaja Yoga est naturelle et spontanée</li>
        <li><strong>Rejoignez un groupe</strong> - Méditer en collectif amplifie l'expérience</li>
        <li><strong>Gardez un esprit ouvert</strong> - Accueillez l'expérience sans attentes</li>
      </ul>

      <h2>Les erreurs courantes à éviter</h2>
      <p>Beaucoup de débutants font ces erreurs :</p>

      <ul>
        <li>Essayer de "faire le vide" en forçant - laissez plutôt le calme venir naturellement</li>
        <li>S'attendre à des résultats immédiats et spectaculaires</li>
        <li>Comparer son expérience à celle des autres</li>
        <li>Abandonner après quelques tentatives</li>
        <li>Méditer dans un environnement bruyant ou perturbant</li>
      </ul>

      <h2>Maintenir votre pratique</h2>
      <p>Pour que la méditation devienne une habitude durable :</p>

      <ul>
        <li><strong>Fixez un moment régulier</strong> - Tôt le matin ou avant de dormir sont idéaux</li>
        <li><strong>Commencez petit</strong> - 5-10 minutes suffisent au début</li>
        <li><strong>Soyez constant</strong> - Mieux vaut méditer 10 minutes chaque jour que 1 heure une fois par semaine</li>
        <li><strong>Tenez un journal</strong> - Notez vos expériences et observations</li>
        <li><strong>Connectez-vous à la communauté</strong> - Participez aux séances collectives</li>
      </ul>

      <h2>Prochaines étapes</h2>
      <p>Maintenant que vous avez les bases, voici comment approfondir votre pratique :</p>

      <ol>
        <li>Assistez à une séance d'introduction gratuite dans un centre Sahaja Yoga près de chez vous</li>
        <li>Explorez les différentes techniques de méditation et de nettoyage énergétique</li>
        <li>Apprenez-en plus sur le système subtil et les chakras</li>
        <li>Participez à des ateliers et retraites pour approfondir votre expérience</li>
      </ol>

      <h2>Conclusion</h2>
      <p>Débuter la méditation est l'un des plus beaux cadeaux que vous puissiez vous offrir. Avec Sahaja Yoga, vous avez accès à une méthode simple, naturelle et gratuite pour transformer votre vie de l'intérieur.</p>

      <p>N'oubliez pas : il n'y a pas de "bonne" ou "mauvaise" façon de méditer. Chaque expérience est unique et précieuse. Soyez patient, bienveillant envers vous-même, et laissez la méditation vous révéler ses bienfaits progressivement.</p>

      <p><strong>Prêt à commencer ?</strong> Rejoignez-nous pour une séance d'introduction gratuite et découvrez par vous-même la paix profonde que la méditation peut apporter à votre vie.</p>
    `,
  };

  const relatedPosts = [
    {
      id: "2",
      title: "Les bienfaits scientifiques de la méditation",
      image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=400&h=300&fit=crop",
      category: "Science",
    },
    {
      id: "3",
      title: "Méditer en famille : Guide pratique",
      image: "https://images.unsplash.com/photo-1609619385004-f2d3a1a07a5f?w=400&h=300&fit=crop",
      category: "Famille",
    },
    {
      id: "5",
      title: "L'éveil de la Kundalini expliqué",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=400&h=300&fit=crop",
      category: "Spiritualité",
    },
  ];

  return (
    <div className="pt-20">
      {/* Back Button */}
      <div className="bg-white border-b border-gray-100 sticky top-20 z-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="#blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Retour au blog</span>
          </a>
        </div>
      </div>

      {/* Article Header */}
      <article className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Category & Meta */}
          <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-muted-foreground">
            <span className="px-4 py-2 bg-gradient-to-r from-secondary/10 to-primary/10 text-primary rounded-full font-medium">
              {post.category}
            </span>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de lecture</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
            {post.title}
          </h1>

          {/* Author */}
          <div className="flex items-center justify-between mb-12 pb-8 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full overflow-hidden ring-4 ring-primary/20">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">{post.author.name}</p>
                <p className="text-sm text-muted-foreground">{post.author.bio}</p>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-sm text-muted-foreground mr-2">Partager :</span>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                <Facebook className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-all flex items-center justify-center">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-accent hover:text-white transition-all flex items-center justify-center">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-12">
            <ImageWithFallback
              src={post.image}
              alt={post.title}
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none
              prose-headings:font-bold prose-headings:text-foreground
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:bg-gradient-to-r prose-h2:from-primary prose-h2:to-secondary prose-h2:bg-clip-text prose-h2:text-transparent
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-ul:space-y-2
              prose-ol:my-6 prose-ol:space-y-2
              prose-li:text-muted-foreground prose-li:leading-relaxed
              prose-strong:text-foreground prose-strong:font-semibold
              prose-a:text-primary prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-gray-100">
            <div className="flex flex-wrap items-center gap-3">
              <Tag className="w-5 h-5 text-muted-foreground" />
              {post.tags.map((tag) => (
                <a
                  key={tag}
                  href={`#blog?tag=${tag}`}
                  className="px-4 py-2 bg-gray-100 hover:bg-primary hover:text-white rounded-full text-sm transition-all"
                >
                  #{tag}
                </a>
              ))}
            </div>
          </div>

          {/* Share Mobile */}
          <div className="sm:hidden mt-8 pt-8 border-t border-gray-100">
            <p className="text-sm text-muted-foreground mb-4">Partager cet article :</p>
            <div className="flex gap-3">
              <button className="flex-1 py-3 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all flex items-center justify-center gap-2">
                <Facebook className="w-4 h-4" />
                <span className="text-sm font-medium">Facebook</span>
              </button>
              <button className="flex-1 py-3 rounded-full bg-gray-100 hover:bg-secondary hover:text-white transition-all flex items-center justify-center gap-2">
                <Twitter className="w-4 h-4" />
                <span className="text-sm font-medium">Twitter</span>
              </button>
            </div>
          </div>

          {/* Author Bio */}
          <div className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-3xl">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-white flex-shrink-0">
                <ImageWithFallback
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">À propos de {post.author.name}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{post.author.bio}</p>
                <a
                  href="#blog"
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-medium"
                >
                  <span>Voir tous les articles</span>
                  <ArrowLeft className="w-4 h-4 rotate-180" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-2">Articles similaires</h2>
            <p className="text-muted-foreground">Continuez votre lecture</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <a
                key={relatedPost.id}
                href={`#blog/${relatedPost.id}`}
                className="group block bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={relatedPost.image}
                    alt={relatedPost.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium mb-3">
                    {relatedPost.category}
                  </span>
                  <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                    {relatedPost.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Prêt à commencer votre voyage ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoignez-nous pour une séance de méditation gratuite
          </p>
          <a
            href="#home"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105 font-semibold"
          >
            <span>Essayez une séance gratuite</span>
            <ArrowLeft className="w-5 h-5 rotate-180" />
          </a>
        </div>
      </section>
    </div>
  );
}

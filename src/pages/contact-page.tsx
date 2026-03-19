import { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Facebook, Instagram, Youtube, ArrowRight } from "lucide-react";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        newsletter: false,
      });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "contact@sahajayoga.fr",
      href: "mailto:contact@sahajayoga.fr",
      color: "from-primary to-primary/60",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "+33 1 42 60 33 44",
      href: "tel:+33142603344",
      color: "from-secondary to-secondary/60",
    },
    {
      icon: MapPin,
      title: "Adresse",
      content: "Centres à travers toute la France",
      href: "/centres",
      color: "from-accent to-accent/60",
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/sahajayoga",
      color: "from-[#1877F2] to-[#1877F2]/70",
      description: "Suivez nos actualités",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/sahajayoga",
      color: "from-[#E4405F] to-[#E4405F]/70",
      description: "Photos et inspirations",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/sahajayoga",
      color: "from-[#FF0000] to-[#FF0000]/70",
      description: "Méditations guidées",
    },
  ];

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
              <Send className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Contact</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Restons en</span>
              <span className="block text-primary">
                contact
              </span>
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Une question ? Envie d'en savoir plus ? Nous sommes là pour vous accompagner
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-border/50 hover:border-primary/20"
              >
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 transition-transform">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{info.title}</h3>
                <p className="text-muted-foreground group-hover:text-primary transition-colors">
                  {info.content}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gradient-to-b from-white to-cyan-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Envoyez-nous un message</h2>
            <p className="text-lg text-muted-foreground">
              Nous vous répondrons dans les plus brefs délais
            </p>
          </div>

          <div className="bg-white rounded-[3rem] shadow-2xl p-8 sm:p-12">
            {isSubmitted ? (
              <div className="py-16 text-center animate-in fade-in duration-500">
                <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl animate-bounce">
                  <Check className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-3">Message envoyé !</h3>
                <p className="text-lg text-muted-foreground mb-8">
                  Merci pour votre message. Nous vous répondrons très bientôt.
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full hover:shadow-xl transition-all"
                >
                  <span className="font-semibold">Envoyer un autre message</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-foreground mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none"
                      placeholder="Jean"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-foreground mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none"
                      placeholder="Dupont"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none"
                      placeholder="jean.dupont@exemple.fr"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none"
                      placeholder="06 12 34 56 78"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                    Sujet *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none"
                    placeholder="Ex: Demande d'informations, Réserver une séance..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-6 py-4 rounded-2xl bg-muted border-2 border-transparent focus:border-primary focus:bg-white transition-all text-foreground placeholder:text-muted-foreground outline-none resize-none"
                    placeholder="Parlez-nous de votre demande..."
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-2 border-border text-primary focus:ring-primary"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    Je souhaite m'inscrire à la newsletter pour recevoir les actualités et événements de Sahaja Yoga
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-5 bg-primary text-white rounded-2xl hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 group font-bold text-lg"
                >
                  <span>Envoyer le message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-sm text-muted-foreground text-center pt-2">
                  🔒 Vos données sont protégées et ne seront jamais partagées
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-to-b from-cyan-50/20 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">Suivez-nous</h2>
            <p className="text-lg text-muted-foreground">
              Rejoignez notre communauté sur les réseaux sociaux
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <div className={`w-16 h-16 ${social.name === 'Facebook' ? 'bg-[#1877F2]' : social.name === 'Instagram' ? 'bg-[#E4405F]' : 'bg-[#FF0000]'} rounded-2xl flex items-center justify-center mb-6 transform group-hover:rotate-12 group-hover:scale-110 transition-all`}>
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{social.name}</h3>
                <p className="text-muted-foreground mb-4">{social.description}</p>
                <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                  <span>Suivre</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-12 sm:p-16 text-center shadow-2xl">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 rounded-full border border-primary/20 mb-6">
              <Mail className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Newsletter</span>
            </div>

            <h2 className="text-4xl font-bold text-foreground mb-4">
              Restez <span className="text-primary">informé</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Recevez nos dernières actualités, événements et conseils de méditation directement dans votre boîte mail
            </p>

            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="votre.email@exemple.fr"
                required
                className="flex-1 px-6 py-4 rounded-2xl bg-white border-2 border-border focus:border-primary text-foreground placeholder:text-muted-foreground outline-none transition-all"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-white rounded-2xl hover:shadow-xl transition-all flex items-center justify-center gap-2 group font-semibold whitespace-nowrap"
              >
                <span>S'inscrire</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
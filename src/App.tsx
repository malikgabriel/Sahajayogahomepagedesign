import { useState } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { BlossomTimeSection } from "./components/blossom-time-section";
import { SelfRealizationSection } from "./components/self-realization-section";
import { AboutSection } from "./components/about-section";
import { VisionSection } from "./components/vision-section";
import { ValueProposition } from "./components/value-proposition";
import { ExperienceSection } from "./components/experience-section";
import { SubtleSystemSection } from "./components/subtle-system-section";
import { TestimonialsSection } from "./components/testimonials-section";
import { CentersSection } from "./components/centers-section";
import { FinalCTA } from "./components/final-cta";
import { Footer } from "./components/footer";
import { CentersPage } from "./pages/centers-page";
import { AboutPage } from "./pages/about-page";
import { TestimonialsPage } from "./pages/testimonials-page";
import { EventsPage } from "./pages/events-page";
import { ContactPage } from "./pages/contact-page";
import { BlogPage } from "./pages/blog-page";
import { BlogPostPage } from "./pages/blog-post-page";

type Page = "home" | "centres" | "about" | "testimonials" | "events" | "contact" | "blog";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [blogPostId, setBlogPostId] = useState<string | null>(null);

  // Handle hash-based navigation for blog posts
  useState(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash.startsWith("blog/")) {
        const postId = hash.split("/")[1];
        setBlogPostId(postId);
        setCurrentPage("blog");
      } else if (hash === "blog") {
        setBlogPostId(null);
        setCurrentPage("blog");
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  });

  const renderPage = () => {
    switch (currentPage) {
      case "centres":
        return <CentersPage />;
      case "about":
        return <AboutPage />;
      case "testimonials":
        return <TestimonialsPage />;
      case "events":
        return <EventsPage />;
      case "contact":
        return <ContactPage />;
      case "blog":
        return blogPostId ? <BlogPostPage postId={blogPostId} /> : <BlogPage />;
      default:
        return (
          <>
            <Hero />
            <BlossomTimeSection />
            <SelfRealizationSection />
            <AboutSection />
            <VisionSection />
            <ValueProposition />
            <ExperienceSection />
            <SubtleSystemSection />
            <TestimonialsSection />
            <CentersSection />
            <FinalCTA />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer onNavigate={setCurrentPage} />
    </div>
  );
}
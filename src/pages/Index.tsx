import { useEffect, lazy, Suspense } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";

const Threads = lazy(() => import("@/components/Threads"));

import FounderStory from "@/components/FounderStory";
import WhyChoose from "@/components/WhyChoose";
import ColorfulServices from "@/components/ColorfulServices";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CalendarEmbed from "@/components/CalendarEmbed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SchemaMarkup from "@/components/SchemaMarkup";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from other pages
    if (location.hash) {
      const elementId = location.hash.substring(1);
      const element = document.getElementById(elementId);
      if (element) {
        // Use setTimeout to ensure the page has fully rendered
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-background">
      <SchemaMarkup />
      <Navigation />
      <div className="relative">
        <div className="absolute inset-0 pointer-events-none z-0">
          <Suspense fallback={<div />}>
            <Threads 
              color={[0.5, 0.5, 1]} 
              amplitude={1.5} 
              distance={0.2} 
              enableMouseInteraction={true}
            />
          </Suspense>
        </div>
        <div className="relative z-10">
          <Hero />
        </div>
      </div>
      <FounderStory />
      <WhyChoose />
      <ColorfulServices />
      <Projects />
      <Testimonials />
      <FAQ />
      <CalendarEmbed />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;

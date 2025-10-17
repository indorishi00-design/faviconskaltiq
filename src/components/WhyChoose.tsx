import { BarChart3, Palette, TrendingUp, Zap, Target, Lightbulb, Rocket, Handshake, Globe } from "lucide-react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardsRef = useRef(null);
  const circleRef1 = useRef(null);
  const circleRef2 = useRef(null);

  const reasons = [
    {
      icon: BarChart3,
      title: "Data-Driven Strategy",
      description: "Every campaign is built on <strong>solid analytics and market research</strong> for maximum impact. We don't guess - we test, measure, and optimize."
    },
    {
      icon: Palette,
      title: "Creative Storytelling",
      description: "We craft <strong>compelling narratives that resonate</strong> with your Indian audience while driving measurable engagement and conversions."
    },
    {
      icon: TrendingUp,
      title: "Proven Client Growth",
      description: "<strong>95% client retention rate</strong> - our track record speaks for itself across successful campaigns nationwide."
    },
    {
      icon: Zap,
      title: "24-Hour Response Time",
      description: "<strong>Quick turnaround times without compromising quality</strong> or strategic thinking. We understand that speed matters in digital marketing."
    },
    {
      icon: Target,
      title: "High ROI Focus",
      description: "Every rupee spent is optimized for <strong>maximum return on your marketing investment</strong>. No vanity metrics, only business growth."
    }
  ];

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;
    const heading = headingRef.current;
    const cards = cardsRef.current;
    const circle1 = circleRef1.current;
    const circle2 = circleRef2.current;

    if (!section || !container || !heading || !cards) return;

    // Set initial states with hardware acceleration
    gsap.set(container, { scale: 0.7, opacity: 0.8, force3D: true });
    gsap.set(cards.children, { y: 100, opacity: 0, force3D: true });

    // Create the main scroll-triggered animation with optimized settings
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=2000",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
      }
    });

    // Container zoom and fade in with hardware acceleration
    tl.to(container, {
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power2.out",
      force3D: true
    })
    // Heading emphasis animation
    .to(heading, {
      scale: 1.5,
      duration: 0.1,
      ease: "power2.out",
      force3D: true
    }, 0.2)
    .to(heading, {
      scale: 1,
      duration: 0.15,
      ease: "power2.out",
      force3D: true
    }, 0.3)
    // Staggered card reveals
    .to(cards.children, {
      y: 0,
      opacity: 1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.out",
      force3D: true
    }, 0.4);

    // Optimized parallax background circles
    if (circle1 && circle2) {
      gsap.to(circle1, {
        y: -200,
        rotation: 180,
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.5,
        }
      });

      gsap.to(circle2, {
        y: -300,
        rotation: -120,
        force3D: true,
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 0.8,
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-choose" 
      className="min-h-screen py-20 lg:py-32 bg-gradient-to-b from-background via-muted/10 to-background relative overflow-hidden"
    >
      {/* Animated background circles */}
      <div 
        ref={circleRef1}
        className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl"
      />
      <div 
        ref={circleRef2}
        className="absolute -bottom-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/15 to-primary/15 rounded-full blur-3xl"
      />
      
      {/* Background gradient separator */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3"></div>
      
      <div 
        ref={containerRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {/* Header */}
        <div className="text-center space-y-4 md:space-y-6 mb-12 md:mb-20 px-4">
          <h2 
            ref={headingRef}
            className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight"
          >
            Why Choose{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skaltiq
            </span>
            ?
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We don't just execute campaigns - we partner with you to scale your ambitions. 
            Here's what sets us apart in the crowded marketing landscape.
          </p>
        </div>

        {/* Reasons Grid */}
        <div 
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto px-4"
        >
          {reasons.slice(0, 4).map((reason, index) => (
            <div 
              key={index}
              className="group bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-500 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:border-accent/30"
            >
              {/* Icon */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <reason.icon className="h-6 w-6 md:h-7 md:w-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-foreground mb-3 md:mb-4 group-hover:text-accent transition-colors duration-300">
                {reason.title}
              </h3>
              
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: reason.description }}>
              </p>
            </div>
          ))}
        </div>

        {/* Value Statements Section */}
        <div className="mt-16 md:mt-20 pt-12 md:pt-16 border-t border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="space-y-3 animate-scale-in p-4">
              <div className="flex justify-center">
                <Lightbulb className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Creative + Data-Driven Marketing
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Where creativity meets strategy for real business growth.</div>
            </div>
            
            <div className="space-y-3 animate-scale-in p-4" style={{ animationDelay: "0.1s" }}>
              <div className="flex justify-center">
                <Rocket className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Turning Clicks into Clients
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Performance marketing that drives measurable results.</div>
            </div>
            
            <div className="space-y-3 animate-scale-in p-4" style={{ animationDelay: "0.2s" }}>
              <div className="flex justify-center">
                <Handshake className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Partnering with Growth-Minded Brands
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Collaborating with founders who think big and scale fast.</div>
            </div>
            
            <div className="space-y-3 animate-scale-in p-4" style={{ animationDelay: "0.3s" }}>
              <div className="flex justify-center">
                <Globe className="h-8 w-8 md:h-10 md:w-10 text-primary" />
              </div>
              <div className="text-base md:text-lg lg:text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Serving Businesses Across India
              </div>
              <div className="text-xs md:text-sm text-muted-foreground">Helping brands sell across India, not just show up online.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import ShinyText from "./ShinyText";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-32 pb-16 bg-gradient-to-br from-background via-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-94 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8 animate-slide-up">
          {/* Headline */}
          <div className="relative">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight px-2">
              Top Digital Marketing Agency in{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hero-glow font-times italic tracking-tight transition-all duration-300 hover:not-italic inline-block">
                <span className="hover:not-italic transition-all duration-300">Mumbai, Hyderabad</span> <span className="font-playfair text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl not-italic">&</span> <span className="hover:not-italic transition-all duration-300">Visakhapatnam</span>
              </span>{" "}
              for Scalable Growth
            </h1>
            <div className="flex justify-center md:justify-end mt-4 px-2">
              <div className="text-xs sm:text-sm text-muted-foreground font-handwriting font-bold text-center md:text-left">
                Serving clients all across India & Beyond
              </div>
            </div>
          </div>
          
          {/* Subtext */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed px-4">
            <ShinyText 
              text="We don't just run ads — we make sure every rupee you spend works harder for your business. Data-driven strategies that turn ambitious brands into market leaders."
              speed={5}
            />
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 px-4">
            <Button 
              variant="hero" 
              size="lg"
              onClick={scrollToContact}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto pulse-glow-animation"
            >
              Book a Strategy Call
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-4 sm:py-6 h-auto"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              How We Scale Brands
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="pt-8 sm:pt-12 opacity-80 px-4">
            <p className="text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">Trusted by businesses across various industries</p>
            
            {/* 5-Star Rating */}
            <div className="flex justify-center items-center space-x-1 mb-4 sm:mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl sm:text-3xl animate-bounce star-shine" style={{ animationDelay: `${i * 0.1}s` }}>⭐</span>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-muted-foreground/80">
              <div className="text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto">
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Lakhs</span> of Ad Spend Managed | <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Crores</span> in Client Sales Generated | Proven <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">Growth</span> Strategies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
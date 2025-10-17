import { Button } from "@/components/ui/button";
import { Quote, ArrowRight } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
const FounderStory = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section id="about" className="py-20 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content Side */}
          <div className="space-y-6 md:space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Meet the Founder{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Behind Skaltiq
                </span>
              </h2>
              
              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            </div>
            
            {/* Personal Message */}
            <div className="space-y-4 md:space-y-6">
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-6 w-6 md:h-8 md:w-8 text-primary/30" />
                <blockquote className="text-base md:text-lg lg:text-xl text-muted-foreground leading-relaxed pl-6 md:pl-8 italic">
                  "After working with <strong>businesses all over India</strong>, I noticed a pattern: great products were failing because of poor marketing execution. That's when I founded Skaltiq with a simple philosophy - <strong>every marketing rupee should be accountable and every campaign should be measurable</strong>."
                </blockquote>
              </div>
              
              <div className="space-y-4">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  Hi, I'm <span className="font-semibold text-foreground">Madhav Rishi</span>, and I've been obsessed with <strong>marketing</strong>. After helping scale businesses across industries like fitness, education, and retail, I realized something: <strong>most agencies focus on vanity metrics that don't translate to real business growth</strong>.
                </p>
                
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  That's why we built Skaltiq differently. <strong>We don't just run ads — we make sure every rupee you spend works harder for you</strong>. Our team combines the creativity of a design studio with the precision of a data science lab, delivering measurable results for our clients.
                </p>
              </div>
              
              {/* Vision Statement */}
              <div className="bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 rounded-xl p-5 md:p-6 border border-primary/20">
                <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">Our Vision</h3>
                <p className="text-sm md:text-base text-muted-foreground">
                  To become the growth partner that ambitious brands trust to turn their marketing investments into predictable, scalable results. We measure success not by clicks or impressions, but by the actual revenue we generate for our clients.
                </p>
              </div>
            </div>
            
            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" onClick={scrollToContact} className="text-base sm:text-lg md:text-xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 h-auto group overflow-hidden relative bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] hover:bg-[position:100%_0] transition-all duration-700 hover:shadow-[0_0_40px_rgba(155,135,245,0.6)] hover:scale-105 before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/30 before:via-transparent before:to-white/30 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-1000">
                Let's Build Something Amazing
                <ArrowRight className="ml-2 md:ml-3 h-5 w-5 md:h-6 md:w-6 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0 text-xs md:text-sm text-muted-foreground">
                <a href="mailto:indorishi00@gmail.com" className="hover:text-accent transition-colors break-all">📧 indorishi00@gmail.com</a>
                <a href="tel:+918712162411" className="hover:text-accent transition-colors">📱 +91 8712162411</a>
              </div>
            </div>
          </div>
          
          {/* Image Side */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Founder photo with ProfileCard effect */}
              <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl">
                <ProfileCard
                  avatarUrl="/lovable-uploads/fe523813-c1b9-4385-a767-53ec8b8c7bd3.png"
                  name="Madhav Rishi"
                  title="Founder & CEO of Skaltiq"
                  showUserInfo={false}
                  enableTilt={true}
                  className="w-full h-full"
                />
              </div>
              
              {/* Signature directly below image edge */}
              <div className="text-center mt-4">
                <img src="/lovable-uploads/145a689d-734b-42fb-8ca3-7f9cf2ef929a.png" alt="Madhav Rishi Signature" className="text-2xl md:text-3xl w-auto max-w-full mx-auto" />
                
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default FounderStory;
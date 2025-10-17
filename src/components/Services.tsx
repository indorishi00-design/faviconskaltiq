import { Share2, Target, Users, Palette, PenTool, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management across all platforms.",
      features: ["Content Strategy", "Community Building", "Analytics & Reporting", "Influencer Partnerships"]
    },
    {
      icon: Target,
      title: "Meta Ads & Paid Campaigns",
      description: "Performance-driven advertising campaigns that convert prospects into loyal customers.",
      features: ["Campaign Strategy", "Ad Creative Design", "Audience Targeting", "Conversion Optimization"]
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Systematic approach to attracting and converting high-quality leads for your business.",
      features: ["Funnel Optimization", "Landing Page Design", "Email Marketing", "CRM Integration"]
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Complete brand development from logo design to comprehensive brand guidelines.",
      features: ["Logo & Visual Identity", "Brand Guidelines", "Brand Positioning", "Brand Voice Development"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality content that tells your story and engages your target audience.",
      features: ["Video Production", "Graphic Design", "Copywriting", "Photography"]
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Comprehensive growth strategies tailored to scale your business sustainably.",
      features: ["Market Analysis", "Growth Planning", "Performance Tracking", "Strategic Consulting"]
    }
  ];

  return (
    <section id="services-old" className="py-20 lg:py-32 bg-gradient-to-b from-background via-accent/5 to-background relative">
      {/* Gradient separator */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Our Digital Marketing{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Services for Growth
              </span>
            </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive marketing solutions 
            that drive real business growth and measurable results.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 grid-fade-in">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group"
              style={{ "--index": index } as React.CSSProperties}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-[var(--radius)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-border/30">
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-accent hover:text-accent/80 font-semibold text-sm underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-muted/30 to-muted/10 rounded-[var(--radius)] border border-border/30 animate-fade-in">
          <h3 className="text-2xl font-bold text-foreground mb-3">
            Ready to Scale Your Business?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss how our comprehensive marketing solutions can help you achieve your ambitious growth goals.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-3 rounded-[var(--radius)] font-semibold hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 btn-glow"
          >
            Book Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
import { Share2, Target, Users, Palette, PenTool, TrendingUp } from "lucide-react";

const ColorfulServices = () => {
  const services = [
    {
      icon: Share2,
      title: "Social Media Management",
      description: "Complete social media strategy, content creation, and community management across all platforms.",
      features: ["Content Strategy", "Community Building", "Analytics & Reporting", "Influencer Partnerships"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Meta Ads & Paid Campaigns",
      description: "Performance-driven advertising campaigns that convert prospects into loyal customers.",
      features: ["Campaign Strategy", "Ad Creative Design", "Audience Targeting", "Conversion Optimization"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Lead Generation",
      description: "Systematic approach to attracting and converting high-quality leads for your business.",
      features: ["Funnel Optimization", "Landing Page Design", "Email Marketing", "CRM Integration"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Palette,
      title: "Branding & Identity",
      description: "Complete brand development from logo design to comprehensive brand guidelines.",
      features: ["Logo & Visual Identity", "Brand Guidelines", "Brand Positioning", "Brand Voice Development"],
      color: "from-pink-500 to-rose-600"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "High-quality content that tells your story and engages your target audience.",
      features: ["Video Production", "Graphic Design", "Copywriting", "Photography"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Business Growth Strategy",
      description: "Comprehensive growth strategies tailored to scale your business sustainably.",
      features: ["Market Analysis", "Growth Planning", "Performance Tracking", "Strategic Consulting"],
      color: "from-emerald-500 to-green-600"
    }
  ];

  return (
    <section id="services" className="py-20 lg:py-32 bg-background relative">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 grid-fade-in px-2">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card group"
              style={{ "--index": index } as React.CSSProperties}
            >
              {/* Icon */}
              <div className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br ${service.color} rounded-[var(--radius)] flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4 md:mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center text-xs md:text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                    {feature}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border/30">
                <button 
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-accent hover:text-accent/80 font-semibold text-xs md:text-sm underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
                >
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-muted/30 to-muted/10 rounded-[var(--radius)] border border-border/30 animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            Ready to Scale Your Business?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6 max-w-2xl mx-auto">
            Let's discuss how our comprehensive marketing solutions can help you achieve your ambitious growth goals.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-[var(--radius)] font-semibold hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 btn-glow pulse-glow-animation text-sm md:text-base"
          >
            Book Your Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColorfulServices;
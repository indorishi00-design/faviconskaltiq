import caseStudy1 from "@/assets/case-study-1.jpg";
import caseStudy2 from "@/assets/case-study-2.jpg";
import caseStudy3 from "@/assets/case-study-3.png";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "How a Pune Business Turned ₹50,000 in Ads Into ₹15 Lakhs Sales in a single month",
      description: "Spent ₹50,000 on Meta ads and generated ₹15 lakhs in sales for a Pune local business. Targeted hyperlocal audience, optimized creatives, and data-driven tweaks made every rupee count. This campaign proved digital ads can drive strong ROI and boost local visibility.",
      image: caseStudy1,
      category: "Local Business",
      results: "30x ROAS"
    },
    {
      title: "Turning Social Content Into Business Growth",
      description: "Grew a brand's Instagram to 1.2M views in 3 months through trend-driven Reels, clear visuals, and consistent posting. The result — 40% higher engagement, more website visits, and steady local business growth",
      image: caseStudy2,
      category: "Social Media Marketing",
      results: "1.2M Views"
    },
    {
      title: "Achieved Hyperlocal Success for Regional Swim Schools – Leads at Just ₹6 Each",
      description: "Executed a Meta Ads campaign across Nanded and Dharashiv, driving high-quality inquiries at 85% lower cost per lead than the industry average. Through precise audience targeting and hyperlocal creatives, the brand enjoyed consistent leads and strong local visibility throughout the season",
      image: caseStudy3,
      category: "Fitness Industry",
      results: "85% Lower CPL"
    }
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Projects &{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Case Studies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results for real businesses. See how we've helped brands scale their ambitions into measurable success.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 grid-fade-in px-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group card-hover bg-card rounded-[var(--radius)] overflow-hidden border border-border/50 hover:border-accent/50"
              style={{ "--index": index } as React.CSSProperties}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category} case study showing ${project.results} growth by Skaltiq digital marketing agency`}
                  className="w-full h-40 md:h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                  <span className="text-xs font-bold text-primary">
                    {project.results}
                  </span>
                </div>
                
                <h3 className="text-base md:text-lg lg:text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 leading-tight">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="text-right mt-6 md:mt-8 mb-3 md:mb-4 px-2">
          <p className="text-xs text-muted-foreground">
            <span className="text-primary">*</span> Results are subject to variations in budget, audience, and market conditions.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 animate-fade-in">
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            Ready to become our next success story?
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-accent hover:text-accent/80 font-semibold text-sm md:text-base underline underline-offset-4 hover:underline-offset-8 transition-all duration-300"
          >
            Let's discuss your project →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
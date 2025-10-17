import { Star, UserCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Testimonials = () => {
  const testimonials = [
    {
      name: "CHAITANYA SAVANT",
      role: "Founder",
      company: "PROSWIM ACADEMY, Pune, Maharashtra",
      image: "/lovable-uploads/proswim-logo.png",
      rating: 5,
      text: "I had an exceptional experience working with Skaltiq! Their team's professionalism and creativity truly stand out. Special shoutout to Madhav Rishi for his brilliant execution and unmatched efficiency - he made the entire process seamless and results-driven. If you're looking for a marketing partner who delivers with precision and impact, Skaltiq is the one!"
    },
    {
      name: "RIYAZ KAZI",
      role: "Head of Business Development & Branding",
      company: "Mumbai",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      text: "One of the biggest challenges I've faced has been finding someone reliable to handle social media, online marketing, and lead generation — areas that are absolutely critical today but often hard to manage effectively. When I came across Rishi and his team, that challenge was finally solved. Rishi is extremely proactive, clear in his approach, and highly organized. He understands how to build a campaign from the ground up — from pre-launch planning to execution and ongoing brand campaigns — all with a sharp focus on results. Working with Rishi has been an absolute pleasure. His clarity, consistency, and structured process have made a real difference. I'm confident his work will do wonders for any business looking to scale. I take this opportunity to thank him and encourage him to keep raising the bar every day."
    },
    {
      name: "JYOTHIRMAI",
      role: "Founder",
      company: "Life at Yoga, Visakhapatnam",
      image: "/lovable-uploads/life-at-yoga-logo.png",
      rating: 5,
      text: "Before working with Rishi, I was struggling to get consistent inquiries and visibility for Life at Yoga. Even though we had great classes and happy clients, our social media presence wasn't converting into real growth. Rishi completely transformed that. He helped us clarify our messaging, improve our content strategy, and run highly targeted social media and lead generation campaigns that finally started bringing in the right audience. Within just a few weeks, we saw a noticeable increase in class bookings and engagement on Instagram. What I loved most is how proactive and structured he is — from ad strategy to creative direction, everything felt organized and data-backed. If you're a business owner who's tired of spending on ads without seeing results, Rishi is the person you need."
    },
    {
      name: "AHMED",
      role: "Founder",
      company: "Sportiqo Swim School, Mumbai",
      image: "/lovable-uploads/sportiqo-logo.png",
      rating: 5,
      text: "Partnering with Skaltiq has been the best decision for our swim school's growth. They understood our unique needs and created a marketing strategy that highlighted our instructors, classes, and community values. Their creative campaigns brought in more inquiries, boosted enrollments, and strengthened our brand's presence both online and locally. Thanks to Skaltiq's expertise, we're reaching more families than ever and making a bigger impact in teaching the joy of swimming."
    },
    {
      name: "RAHIM PATEL",
      role: "Founder",
      company: "Oasis Swimming Academy, Maharashtra",
      image: "/lovable-uploads/oasis-swimming-logo.png",
      rating: 5,
      text: "Working with Rishi and his team has been a great experience for us. We were mainly focused on running our swimming programs, but after they started handling our Meta Ads and social media management, we saw a clear jump in our inquiries and visibility across both our branches. What I really appreciated was how involved they were — from understanding our audience to creating content that actually connects with our audience. The ads brought in consistent leads, and the posts made our brand look much more professional. Definitely a great decision working with SKALTIQ"
    }
  ];


  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real businesses, real results. From first campaign to long-term growth — here's what our clients experienced
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full mb-16"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {testimonials.map((testimonial, index) => (
              <CarouselItem 
                key={index} 
                className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="card-hover bg-card rounded-[var(--radius)] p-6 border border-border/50 hover:border-accent/50 h-full">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-lg star-shine">⭐</span>
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-3">
                    {testimonial.name === "RIYAZ KAZI" ? (
                      <UserCircle className="w-12 h-12 text-muted-foreground" />
                    ) : (
                      <img 
                        src={testimonial.image} 
                        alt={`${testimonial.name}, ${testimonial.role} at ${testimonial.company} - Skaltiq client testimonial`}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    )}
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role} - {testimonial.company.split(',')[0]}
                        <br />
                        {testimonial.company.includes(',') && testimonial.company.split(',').slice(1).join(',').trim()}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        {/* Many More Text */}
        <div className="text-center mb-16">
          <p className="text-muted-foreground text-lg">
            ...and many more success stories from businesses across India
          </p>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;
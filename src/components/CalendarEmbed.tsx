import { Calendar, Clock, Video } from "lucide-react";
import { Button } from "@/components/ui/button";

const CalendarEmbed = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Header */}
          <div className="space-y-4 animate-fade-in">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
              Ready to{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Scale Your Business?
              </span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
              Book a free 30-minute strategy call with Madhav. We'll audit your current marketing, 
              identify growth opportunities, and create a custom roadmap for your business.
            </p>
          </div>
          
          {/* Calendar CTA */}
          <div className="bg-card rounded-xl md:rounded-2xl border border-border/50 p-4 md:p-6 lg:p-8 shadow-lg animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex items-center justify-center md:justify-start space-x-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-foreground">Free Consultation</div>
                  <div className="text-xs md:text-sm text-muted-foreground">No sales pitch, just value</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 md:h-6 md:w-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-foreground">20 Minutes</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Quick but thorough</div>
                </div>
              </div>
              
              <div className="flex items-center justify-center md:justify-start space-x-3 text-center md:text-left">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Video className="h-5 w-5 md:h-6 md:w-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-sm md:text-base text-foreground">Google Meet</div>
                  <div className="text-xs md:text-sm text-muted-foreground">Easy virtual meeting</div>
                </div>
              </div>
            </div>
            
            {/* Calendly Form Embed */}
            <div className="w-full max-w-2xl mx-auto">
              <iframe
                src="https://calendly.com/skaltiq/20min"
                loading="lazy"
                width="100%"
                height="600"
                frameBorder="0"
                title="Free Strategy Call Booking"
                className="rounded-lg md:rounded-xl min-h-[500px] md:min-h-[600px]"
              ></iframe>
            </div>
            
            {/* Fallback CTA */}
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                Having trouble with the calendar? Reach out directly:
              </p>
              <div className="flex justify-center">
                <Button variant="outline" size="sm" asChild>
                  <a href="mailto:madhav@skaltiq.com">Email Us</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarEmbed;
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        message: formData.message,
        to_email: 'skaltiq@gmail.com'
      };

      await emailjs.send(
        'service_skaltiq', // Replace with your EmailJS service ID
        'template_strategy_call', // Replace with your EmailJS template ID
        templateParams,
        'pk_skaltiq_public' // Replace with your EmailJS public key
      );
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error sending message",
        description: "Please try again or contact us directly at skaltiq@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "skaltiq@gmail.com",
      link: "mailto:skaltiq@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91 87121 62411",
      link: "tel:+918712162411"
    },
    {
      icon: Clock,
      title: "Response Time",
      content: "Within 24 hours",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 lg:py-32 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Let's Scale Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Ambitions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your marketing and achieve breakthrough growth? 
            Book a strategy call and let's discuss how we can help scale your business.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in">
            <div className="bg-card rounded-xl md:rounded-[var(--radius)] p-6 md:p-8 border border-border/50 shadow-[var(--shadow-card)]">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                Book Your Strategy Call
              </h3>
              
              {/* Calendly Form Embed */}
              <div className="w-full -mx-6 md:-mx-8 px-6 md:px-8">
                <iframe
                  src="https://tally.so/embed/3q9MyG?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                  width="100%"
                  height="600"
                  frameBorder="0"
                  title="Strategy Call Booking Form"
                  className="rounded-lg md:rounded-xl border-0 overflow-hidden"
                  style={{ 
                    minHeight: '500px'
                  }}
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                  Get in Touch
                </h3>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  We respond to every inquiry personally and typically get back within 24 hours. 
                  Let's start a conversation about scaling your business to new heights.
                </p>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-3 md:space-x-4 group">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-accent rounded-[var(--radius)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <info.icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-sm md:text-base text-foreground group-hover:text-accent transition-colors duration-300">
                        {info.title}
                      </div>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-xs md:text-sm text-muted-foreground hover:text-accent transition-colors duration-300 break-all"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <div className="text-xs md:text-sm text-muted-foreground">{info.content}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="pt-6 md:pt-8 border-t border-border/50">
                <h4 className="font-semibold text-sm md:text-base text-foreground mb-3 md:mb-4">Follow Us</h4>
                <div className="flex flex-wrap gap-3 md:gap-4">
                  <a
                    href="https://www.linkedin.com/company/skaltiq/?viewAsMember=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/skaltiq/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-muted-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
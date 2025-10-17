import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Mail, ArrowRight } from "lucide-react";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubscribing(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to the Skaltiq community. You'll receive valuable marketing insights.",
    });
    
    setEmail("");
    setIsSubscribing(false);
  };

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Social Media Management", href: "#services" },
        { name: "Meta Ads & Paid Campaigns", href: "#services" },
        { name: "Lead Generation", href: "#services" },
        { name: "Branding & Identity", href: "#services" },
        { name: "Content Creation", href: "#services" },
        { name: "Business Growth Strategy", href: "#services" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Case Studies", href: "#projects" },
        { name: "Testimonials", href: "#testimonials" },
        { name: "FAQ", href: "#faq" },
        { name: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Marketing Blog", href: "/blog" },
        { name: "Growth Guides", href: "/blog" },
        { name: "Industry Reports", href: "/blog" },
        { name: "Success Stories", href: "/blog" },
        { name: "Free Consultation", href: "#contact" }
      ]
    }
  ];

  const handleNavigation = (href: string) => {
    if (href.startsWith('/')) {
      // External page navigation
      navigate(href);
    } else if (href.startsWith('#')) {
      // Section navigation
      const sectionId = href.substring(1);
      if (location.pathname === "/") {
        // On home page, scroll to section
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // On other pages, navigate to home with hash
        navigate(`/#${sectionId}`);
      }
    }
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-4 md:space-y-6">
            <div>
              <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3 md:mb-4">
                Skaltiq
              </div>
              <p className="text-sm md:text-base text-secondary-foreground/80 leading-relaxed">
                We scale ambitions into results through performance-driven marketing, 
                social media strategy, and high-impact campaigns.
              </p>
            </div>
            
            <div>
              <p className="font-semibold text-sm md:text-base mb-2 md:mb-3">Follow Us</p>
              <div className="flex flex-wrap gap-3 md:gap-4">
                <a
                  href="https://www.linkedin.com/company/100919056/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-secondary-foreground/60 hover:text-accent transition-colors duration-300 hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/skaltiq/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm md:text-base text-secondary-foreground/60 hover:text-accent transition-colors duration-300 hover:underline"
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-3 md:space-y-4">
              <h4 className="font-semibold text-sm md:text-base text-secondary-foreground">{section.title}</h4>
              <ul className="space-y-2 md:space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => handleNavigation(link.href)}
                      className="text-xs md:text-sm text-secondary-foreground/80 hover:text-accent transition-colors duration-300 text-left"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            <div className="text-secondary-foreground/60 text-xs md:text-sm text-center md:text-left">
              © 2025 SKALTIQ | All rights reserved
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-xs md:text-sm">
                <button 
                  onClick={() => navigate('/privacy')}
                  className="text-secondary-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  Privacy Policy
                </button>
                <button 
                  onClick={() => navigate('/terms')}
                  className="text-secondary-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  Terms of Service
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs md:text-sm text-secondary-foreground/60 text-center">
                <span className="break-all">📧 skaltiq@gmail.com</span>
                <span>📍 Visakhapatnam, AP</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (id: string) => {
    if (location.pathname === "/") {
      // On home page, scroll to section
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // On other pages, navigate to home with hash
      navigate(`/#${id}`);
    }
    setIsOpen(false);
  };

  const navItems = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Case Studies", id: "projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button onClick={() => navigate("/")}>
              <img 
                src="/lovable-uploads/b8ea8602-b9ad-4ffa-a938-fa662b174f9e.png" 
                alt="Skaltiq Logo" 
                className="h-12 w-auto hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </button>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              item.href ? (
                <Button
                  key={item.name}
                  variant="ghost"
                  onClick={() => navigate(item.href)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.name}
                </Button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id!)}
                  className="text-foreground hover:text-accent transition-colors duration-300 font-medium"
                >
                  {item.name}
                </button>
              )
            ))}
          </div>

          {/* CTA Button - Right */}
          <div className="hidden md:flex">
            <Button 
              variant="cta" 
              size="sm"
              onClick={() => handleNavigation("contact")}
              className="pulse-glow-animation"
            >
              Book a Strategy Call
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.href ? (
                  <Button
                    key={item.name}
                    variant="ghost"
                    onClick={() => navigate(item.href)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </Button>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => handleNavigation(item.id!)}
                    className="block w-full text-left px-3 py-2 text-foreground hover:text-accent transition-colors duration-300 font-medium"
                  >
                    {item.name}
                  </button>
                )
              ))}
              <div className="pt-3">
                <Button 
                  variant="cta" 
                  size="sm"
                  onClick={() => handleNavigation("contact")}
                  className="w-full"
                >
                  Book a Strategy Call
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
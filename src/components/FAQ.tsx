import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What makes Skaltiq different from other marketing agencies?",
      answer: "We focus on <strong>measurable business outcomes, not vanity metrics</strong>. With <strong>95% client retention and proven track record</strong>, we combine deep market expertise with proven strategies that work specifically for Indian businesses. We don't just run ads — we build growth systems."
    },
    {
      question: "Do you work with small businesses or only big brands?",
      answer: "We work with <strong>businesses of all sizes</strong> — from ambitious startups to established enterprises across India. Our strategies are scalable and adapted to fit your budget and growth stage. We've helped clients scale from ₹50K to ₹15L+ monthly revenue."
    },
    {
      question: "How long does it take to see results from your campaigns?",
      answer: "Most clients see <strong>initial improvements within 30-45 days</strong>, but we recommend a <strong>3-6 month commitment for significant, sustainable growth</strong>. Every rupee invested is tracked and optimized for maximum returns."
    },
    {
      question: "What's your pricing structure and what's included?",
      answer: "Our pricing is <strong>transparent and results-focused</strong>. Monthly retainers include strategy development, campaign execution, performance monitoring, detailed reporting, and ongoing optimization. We'll provide a custom quote based on your specific goals."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about working with Skaltiq? Here are answers to the most common 
            questions we receive from potential clients.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="faq-item animate-fade-in"
              style={{ "--index": index } as React.CSSProperties}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between py-5 md:py-6 text-left group hover:text-accent transition-colors duration-300"
              >
                <h3 className="text-base md:text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300 pr-6 md:pr-8">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                  {openIndex === index ? (
                    <Minus className="h-4 w-4 text-accent" />
                  ) : (
                    <Plus className="h-4 w-4 text-accent" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="pb-5 md:pb-6 animate-fade-in">
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed pr-6 md:pr-8" dangerouslySetInnerHTML={{ __html: faq.answer }}>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16 p-6 md:p-8 bg-gradient-to-r from-muted/30 to-muted/10 rounded-[var(--radius)] border border-border/30 animate-fade-in">
          <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2 md:mb-3">
            Still Have Questions?
          </h3>
          <p className="text-sm md:text-base text-muted-foreground mb-4 md:mb-6">
            We're here to help! Book a strategy call and we'll answer all your questions personally.
          </p>
          <button 
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 rounded-[var(--radius)] font-semibold hover:shadow-[var(--shadow-glow)] hover:scale-105 transition-all duration-300 btn-glow text-sm md:text-base"
          >
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
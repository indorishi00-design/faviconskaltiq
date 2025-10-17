import { useState, useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const EnhancedBlog = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "10 Digital Marketing Trends That Will Dominate 2025",
      excerpt: "Discover the latest trends in digital marketing and how they can transform your business growth strategy in the coming year.",
      category: "Trends",
      author: "Madhav Rishi",
      date: "January 15, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      featured: true
    },
    {
      id: 2,
      title: "Complete Guide to Facebook Ads for Indian Businesses",
      excerpt: "Master Facebook advertising with our comprehensive guide tailored for Indian markets and audiences.",
      category: "Social Media",
      author: "Madhav Rishi", 
      date: "January 10, 2025",
      readTime: "12 min read",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop"
    },
    {
      id: 3,
      title: "SEO Strategy That Actually Works in 2025",
      excerpt: "Learn proven SEO techniques that drive organic traffic and boost your website's search engine rankings.",
      category: "SEO",
      author: "Madhav Rishi",
      date: "January 5, 2025", 
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop"
    },
    {
      id: 4,
      title: "E-commerce Marketing Playbook for Indian Brands",
      excerpt: "Complete roadmap to scale your e-commerce business with proven marketing strategies and tactics.",
      category: "E-commerce",
      author: "Madhav Rishi",
      date: "December 28, 2024",
      readTime: "15 min read",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop"
    },
    {
      id: 5,
      title: "Content Marketing Strategy That Converts",
      excerpt: "Build a content marketing strategy that engages your audience and drives measurable business results.",
      category: "Content Marketing",
      author: "Madhav Rishi",
      date: "December 20, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&h=400&fit=crop"
    },
    {
      id: 6,
      title: "Lead Generation Masterclass for Service Businesses",
      excerpt: "Discover advanced lead generation techniques specifically designed for service-based businesses.",
      category: "Lead Generation",
      author: "Madhav Rishi",
      date: "December 15, 2024",
      readTime: "11 min read",
      image: "https://images.unsplash.com/photo-1553484771-cc0d9b8c2b33?w=600&h=400&fit=crop"
    },
    {
      id: 7,
      title: "Instagram Marketing Secrets for 2025",
      excerpt: "Unlock the power of Instagram marketing with proven strategies to grow your following and drive sales.",
      category: "Social Media",
      author: "Madhav Rishi",
      date: "December 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?w=600&h=400&fit=crop"
    },
    {
      id: 8,
      title: "Google Ads Optimization Guide for Indian Markets",
      excerpt: "Maximize your Google Ads ROI with optimization techniques specifically for Indian businesses and audiences.",
      category: "SEO",
      author: "Madhav Rishi",
      date: "December 5, 2024",
      readTime: "13 min read",
      image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=600&h=400&fit=crop"
    },
    {
      id: 9,
      title: "Email Marketing Automation That Works",
      excerpt: "Build automated email sequences that nurture leads and convert prospects into loyal customers.",
      category: "Content Marketing",
      author: "Madhav Rishi",
      date: "November 28, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=600&h=400&fit=crop"
    }
  ];

  const categories = ["All", "Trends", "SEO", "Social Media", "E-commerce", "Content Marketing", "Lead Generation"];

  const filteredPosts = activeFilter === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Digital Marketing Blog & Resources | SKALTIQ</title>
        <meta name="description" content="Stay updated with latest digital marketing trends, expert insights, and actionable strategies from SKALTIQ. Your ultimate resource for marketing success." />
        <meta name="keywords" content="digital marketing blog, marketing trends, SEO tips, social media marketing, content marketing, SKALTIQ insights" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Marketing <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Insights</span> & Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Expert insights, industry trends, and actionable strategies to accelerate your digital marketing success
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === activeFilter ? "default" : "outline"}
                className="rounded-full transition-all duration-300 hover:scale-105"
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-sm">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full font-medium">Featured</span>
                  <span className="text-muted-foreground">{post.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">{post.title}</h2>
                <p className="text-lg text-muted-foreground">{post.excerpt}</p>
                <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.id}`}>
                  <Button className="group">
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-[400px] object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Grid */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <article key={post.id} className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="ghost" className="w-full group/button">
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3 group-hover/button:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Stay Ahead of the Curve
            </h3>
            <p className="text-muted-foreground mb-6">
              Get the latest marketing insights and strategies delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnhancedBlog;
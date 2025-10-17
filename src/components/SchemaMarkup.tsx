import { Helmet } from 'react-helmet-async';

const SchemaMarkup = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Skaltiq",
    "description": "Top digital marketing agency in Hyderabad specializing in scalable growth strategies for businesses across Telangana and India",
    "url": "https://skaltiq.com",
    "logo": "https://skaltiq.com/logo.png",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-87121-62411",
      "contactType": "customer service",
      "email": "skaltiq@gmail.com"
    },
    "founder": {
      "@type": "Person",
      "name": "Madhav Rishi"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "150"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Digital Marketing Services",
    "description": "Comprehensive digital marketing services including paid advertising, social media marketing, content marketing, and brand development",
    "provider": {
      "@type": "Organization",
      "name": "Skaltiq"
    },
    "areaServed": [
      {
        "@type": "Place",
        "name": "Hyderabad"
      },
      {
        "@type": "Place", 
        "name": "Telangana"
      },
      {
        "@type": "Place",
        "name": "India"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Skaltiq different from other agencies in Hyderabad?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We focus on measurable business outcomes, not vanity metrics. With 95% client retention and 3.2x average ROI, we combine local market expertise with proven strategies that work specifically for Indian businesses."
        }
      },
      {
        "@type": "Question", 
        "name": "Do you work with small businesses or only big brands?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We work with businesses of all sizes - from ambitious startups to established enterprises across Telangana and beyond. Our strategies are scalable and adapted to fit your budget and growth stage."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to see results from your campaigns?", 
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most clients see initial improvements within 30-45 days, but we recommend a 3-6 month commitment for significant, sustainable growth. Every rupee invested is tracked and optimized for maximum returns."
        }
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(serviceSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <meta name="description" content="Top digital marketing agency in Hyderabad. Skaltiq helps businesses achieve 3.2x ROI through data-driven strategies. 95% client retention. Call +91-87121-62411" />
      <meta name="keywords" content="digital marketing agency Hyderabad, marketing agency Telangana, SEO services Hyderabad, social media marketing India, PPC advertising Hyderabad" />
      <meta property="og:title" content="Top Digital Marketing Agency in Hyderabad for Scalable Growth - Skaltiq" />
      <meta property="og:description" content="Achieve 3.2x ROI with Hyderabad's most trusted digital marketing agency. 150+ successful campaigns, 95% client retention." />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="geo.region" content="IN-TG" />
      <meta name="geo.placename" content="Hyderabad" />
      <link rel="canonical" href="https://skaltiq.com" />
    </Helmet>
  );
};

export default SchemaMarkup;
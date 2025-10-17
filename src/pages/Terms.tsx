import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Terms of Service | SKALTIQ</title>
        <meta name="description" content="Terms of Service for SKALTIQ digital marketing agency. Read our terms and conditions for using our services." />
      </Helmet>
      
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-muted-foreground mb-8">Last updated: January 2025</p>
          
          <div className="space-y-8 text-foreground">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using SKALTIQ's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-muted-foreground mb-4">
                SKALTIQ provides digital marketing services including but not limited to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Digital marketing strategy and consultation</li>
                <li>Social media marketing and management</li>
                <li>Search engine optimization (SEO)</li>
                <li>Pay-per-click advertising (PPC)</li>
                <li>Content creation and marketing</li>
                <li>Web analytics and reporting</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. Client Responsibilities</h2>
              <p className="text-muted-foreground mb-4">Clients agree to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond to communications in a timely manner</li>
                <li>Provide necessary access to accounts and platforms</li>
                <li>Review and approve deliverables within agreed timeframes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment terms will be specified in individual service agreements. Generally:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Invoices are due within 30 days of issue</li>
                <li>Late payments may incur additional charges</li>
                <li>Services may be suspended for non-payment</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Intellectual Property</h2>
              <p className="text-muted-foreground">
                All original work created by SKALTIQ remains the property of the client upon full payment. SKALTIQ retains the right to use general methodologies and know-how.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Confidentiality</h2>
              <p className="text-muted-foreground">
                SKALTIQ agrees to maintain the confidentiality of all client information and will not disclose sensitive business information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground">
                SKALTIQ's liability is limited to the amount paid for services. We are not liable for indirect, consequential, or punitive damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
              <p className="text-muted-foreground">
                Either party may terminate services with 30 days written notice. Outstanding work will be billed and delivered according to the agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground">
                For questions regarding these terms, please contact us at skaltiq@gmail.com or +91 87121 62411.
              </p>
            </section>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Terms;
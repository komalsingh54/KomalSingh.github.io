import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Approach from "@/components/Approach";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import InsightsPreview from "@/components/InsightsPreview";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const Index = () => {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Komal Singh",
      jobTitle: "Solution Architect",
      url: "https://resume.komal-singh.com",
      email: "komalsingh54@gmail.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "London",
        addressCountry: "UK",
      },
      knowsAbout: [
        "Salesforce Commerce Cloud",
        "SFCC",
        "Enterprise Architecture",
        "IAM",
        "Cloud Architecture",
        "Platform Delivery",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Komal Singh Portfolio",
      url: "https://resume.komal-singh.com",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title="Komal Singh | Salesforce Solution Architect in London"
        description="Komal Singh is a Salesforce Solution Architect in London with 11+ years across SFCC, enterprise architecture, IAM, cloud delivery, and practical AI-related transformation work."
        path="/"
        schema={schema}
      />
      <Navbar />
      <Hero />
      <About />
      <Approach />
      <Timeline />
      <Projects />
      <InsightsPreview />
      <Resume />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;

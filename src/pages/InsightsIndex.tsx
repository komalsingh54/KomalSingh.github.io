import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { insights } from "@/data/insights";

const InsightsIndex = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Komal Singh Insights",
    url: "https://resume.komal-singh.com/insights",
    about: ["SFCC", "Enterprise Architecture", "Platform Delivery", "AI"],
  };

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title="Insights | Komal Singh"
        description="Short writing on SFCC, enterprise architecture, IAM, platform delivery, and practical AI from Komal Singh."
        path="/insights"
        schema={schema}
      />
      <Navbar />
      <section className="pt-32 pb-20 noise">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">
              Insights
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              <span className="font-display">Architecture</span>{" "}
              <span className="font-serif italic text-gradient">Notes</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-12">
              Short writing on enterprise architecture, SFCC delivery, identity,
              platform engineering, and practical AI in real delivery settings.
            </p>

            <div className="space-y-5">
              {insights.map((item) => (
                <article key={item.slug} className="glass border-gradient rounded-2xl p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">
                    {item.readingTime}
                  </p>
                  <h2 className="font-display text-2xl font-bold mb-3">
                    <Link to={`/insights/${item.slug}`} className="hover:underline underline-offset-4">
                      {item.title}
                    </Link>
                  </h2>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground font-display"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default InsightsIndex;

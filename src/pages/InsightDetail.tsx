import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";
import { insights } from "@/data/insights";
import NotFound from "./NotFound";

const InsightDetail = () => {
  const { slug } = useParams();
  const insight = insights.find((item) => item.slug === slug);

  if (!insight) return <NotFound />;

  const path = `/insights/${insight.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: insight.title,
      description: insight.description,
      datePublished: insight.published,
      author: {
        "@type": "Person",
        name: "Komal Singh",
      },
      mainEntityOfPage: `https://resume.komal-singh.com${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://resume.komal-singh.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Insights",
          item: "https://resume.komal-singh.com/insights",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: insight.title,
          item: `https://resume.komal-singh.com${path}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title={`${insight.title} | Komal Singh`}
        description={insight.description}
        path={path}
        type="article"
        schema={schema}
      />
      <Navbar />
      <article className="pt-32 pb-20 noise">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to insights
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">
              {insight.readingTime}
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
              <span className="font-display">{insight.title}</span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              {insight.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-10">
              {insight.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground font-display"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="glass border-gradient rounded-2xl p-8 md:p-10 space-y-6">
              {insight.body.map((paragraph) => (
                <p key={paragraph} className="text-base text-foreground/85 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
};

export default InsightDetail;

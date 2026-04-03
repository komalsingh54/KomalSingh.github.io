import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Seo from "@/components/Seo";
import { projects } from "@/data/projects";
import NotFound from "./NotFound";

const placeholderPrompts = [
  "Project context and client background",
  "Architecture diagrams or platform scope",
  "Delivery approach and team setup",
  "Technical decisions and trade-offs",
  "Screenshots, metrics, and business outcomes",
];

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [slug]);

  if (!project) {
    return <NotFound />;
  }

  const path = `/projects/${project.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: `https://resume.komal-singh.com${path}`,
      author: {
        "@type": "Person",
        name: "Komal Singh",
      },
      about: project.tags,
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
          name: "Projects",
          item: "https://resume.komal-singh.com/#projects",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: project.title,
          item: `https://resume.komal-singh.com${path}`,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Seo
        title={`${project.title} | Komal Singh`}
        description={project.summary}
        path={path}
        schema={schema}
      />
      <Navbar />

      <section className="relative overflow-hidden pt-32 pb-20 noise">
        <div className="absolute inset-0 grid-bg" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl mx-auto">
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={16} />
              Back to projects
            </Link>

            <div className="glass border-gradient rounded-[2rem] p-8 md:p-12">
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display">
                Case Study {project.num}
              </p>
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.05] mb-6">
                <span className="font-display">{project.title}</span>
              </h1>
              <p className="text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-8">
                {project.summary}
              </p>

              <div className="grid gap-4 md:grid-cols-3 mb-8">
                <div className="rounded-2xl bg-secondary/70 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-2">Client</p>
                  <p className="text-sm text-foreground">{project.client || "Add client details"}</p>
                </div>
                <div className="rounded-2xl bg-secondary/70 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-2">Role</p>
                  <p className="text-sm text-foreground">{project.role || "Add role details"}</p>
                </div>
                <div className="rounded-2xl bg-secondary/70 px-5 py-4">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-2">Focus</p>
                  <p className="text-sm text-foreground">{project.period || "Add delivery scope"}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-display"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
            <div className="space-y-6">
              {project.ownership && (
                <article className="glass border-gradient rounded-2xl p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">Ownership</p>
                  <p className="text-base text-foreground/85 leading-relaxed">{project.ownership}</p>
                </article>
              )}

              <article className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">Challenge</p>
                <p className="text-base text-foreground/85 leading-relaxed">{project.challenge}</p>
              </article>

              <article className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">Decision</p>
                <p className="text-base text-foreground/85 leading-relaxed">{project.decision}</p>
              </article>

              <article className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">Impact</p>
                <p className="text-base text-foreground leading-relaxed font-medium">{project.impact}</p>
              </article>

              {project.constraints && (
                <article className="glass border-gradient rounded-2xl p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">Constraints</p>
                  <p className="text-base text-foreground/85 leading-relaxed">{project.constraints}</p>
                </article>
              )}

              <article className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-4">Placeholder Content Plan</p>
                <div className="space-y-3">
                  {placeholderPrompts.map((item) => (
                    <div
                      key={item}
                      className="rounded-xl bg-secondary/60 px-4 py-3 text-sm text-muted-foreground"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </article>
            </div>

            <aside className="space-y-6">
              {project.platform && project.platform.length > 0 && (
                <div className="glass border-gradient rounded-2xl p-8">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-4">Platform Scope</p>
                  <div className="flex flex-wrap gap-2">
                    {project.platform.map((item) => (
                      <span
                        key={item}
                        className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground font-display"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-4">Page Ready For Later</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  This page is intentionally structured so you can add deeper project
                  details later without changing the route or layout again.
                </p>
                <Button asChild className="rounded-full font-display w-full">
                  <Link to="/#contact">
                    Discuss This Project
                    <ArrowUpRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>

              <div className="glass border-gradient rounded-2xl p-8">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-4">Suggested Sections</p>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  <li>Business context</li>
                  <li>Architecture overview</li>
                  <li>Constraints and trade-offs</li>
                  <li>Delivery model</li>
                  <li>Technical outcomes</li>
                  <li>Screenshots or diagrams</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProjectDetail;

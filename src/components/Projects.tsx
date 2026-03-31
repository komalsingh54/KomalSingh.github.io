import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ExternalLink } from "lucide-react";

const categories = ["All", "Cloud", "Full Stack", "DevOps", "AI"];

const projects = [
  {
    title: "Retail Digital Transformation",
    desc: "End-to-end digital transformation for Asda, modernising legacy systems to cloud-native microservices with AI-driven analytics.",
    tags: ["Cloud", "AI", "React", "DevOps"],
    category: ["Cloud", "AI", "DevOps"],
  },
  {
    title: "Enterprise Cloud Migration",
    desc: "Led migration of monolithic applications to AWS cloud infrastructure, implementing CI/CD pipelines and IaC with Terraform.",
    tags: ["AWS", "Terraform", "CI/CD", "Docker"],
    category: ["Cloud", "DevOps"],
  },
  {
    title: "Customer Experience Platform",
    desc: "Built a real-time personalisation engine for retail, processing millions of events daily for targeted recommendations.",
    tags: ["React", "Node.js", "Kafka", "ML"],
    category: ["Full Stack", "AI"],
  },
  {
    title: "IoT Security Framework",
    desc: "Developed secure embedded solutions at Gemalto/Thales for IoT device authentication and data encryption.",
    tags: ["C/C++", "Java", "Security", "IoT"],
    category: ["Full Stack"],
  },
  {
    title: "DevOps Automation Suite",
    desc: "Designed and implemented automated deployment pipelines reducing release cycles from weeks to hours.",
    tags: ["Jenkins", "Docker", "K8s", "AWS"],
    category: ["DevOps", "Cloud"],
  },
  {
    title: "AI-Powered Analytics Dashboard",
    desc: "Created intelligent dashboards with predictive analytics capabilities for supply chain optimisation.",
    tags: ["React", "Python", "TensorFlow", "D3"],
    category: ["AI", "Full Stack"],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const { ref, isVisible } = useScrollReveal();

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="py-28 relative">
      <div ref={ref} className="container mx-auto px-6">
        <p className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Projects
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Selected <span className="text-gradient">Work</span>
        </h2>

        {/* Filter */}
        <div className={`flex flex-wrap gap-2 mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-sm px-4 py-2 rounded-full transition-all duration-200 font-display ${
                filter === c
                  ? "bg-foreground text-background"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className={`group glass glass-hover rounded-xl p-6 transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display font-semibold text-foreground text-lg leading-tight pr-4">
                  {p.title}
                </h3>
                <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-foreground transition-colors mt-1 shrink-0"
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

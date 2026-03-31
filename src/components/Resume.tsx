import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Download, Briefcase, Building2, Award, Code2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Briefcase, value: "11+", label: "Years Experience" },
  { icon: Building2, value: "4", label: "Companies" },
  { icon: Award, value: "5+", label: "Certifications" },
  { icon: Code2, value: "15+", label: "Technologies" },
];

const skills = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "HTML/CSS", "Tailwind"] },
  { category: "Backend", items: ["Node.js", "Java", "C/C++", "Python", "REST/GraphQL"] },
  { category: "Cloud & DevOps", items: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD"] },
  { category: "Data & AI", items: ["Machine Learning", "GenAI", "Analytics", "SQL", "NoSQL"] },
];

export default function Resume() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resume" className="py-28 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14">
          <div>
            <p className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
              Resume
            </p>
            <h2 className={`font-display text-4xl md:text-5xl font-bold transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
          </div>
          <Button
            asChild
            size="lg"
            className={`mt-6 md:mt-0 rounded-full font-display transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}
          >
            <a href="/resume-komal-singh.pdf" download>
              <Download className="mr-2" size={18} />
              Download PDF
            </a>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`glass rounded-xl p-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <s.icon className="mx-auto mb-2 text-muted-foreground" size={22} />
              <p className="font-display text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <div
              key={group.category}
              className={`glass rounded-xl p-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{ transitionDelay: `${500 + i * 100}ms` }}
            >
              <h3 className="font-display font-semibold text-foreground mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/40 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

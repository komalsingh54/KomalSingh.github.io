import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Camera, Code, Cloud, Brain } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full Stack", desc: "React · Node · Java · C/C++" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS · Azure · CI/CD · IaC" },
  { icon: Brain, label: "AI & Data", desc: "ML pipelines · GenAI · Analytics" },
  { icon: Camera, label: "Photography", desc: "komal-singh.com" },
];

export default function About() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-28 relative">
      <div ref={ref} className="container mx-auto px-6">
        <p className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          About Me
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-10 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Architect by trade.<br />
          <span className="text-gradient">Creator by nature.</span>
        </h2>

        <div className={`max-w-2xl text-muted-foreground text-lg leading-relaxed mb-14 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <p className="mb-4">
            I'm a Solution Architect based in London with over 11 years of experience
            building enterprise-grade software. From embedded systems at Gemalto to
            leading digital transformation at Publicis Sapient and architecting retail
            solutions at TCS for Asda — I bring a rare blend of depth and breadth.
          </p>
          <p>
            Outside of code, I'm a passionate photographer — capturing the world through
            my lens at{" "}
            <a
              href="https://komal-singh.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground underline underline-offset-4 hover:text-muted-foreground transition-colors"
            >
              komal-singh.com
            </a>.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {highlights.map((h, i) => (
            <div
              key={h.label}
              className={`glass glass-hover rounded-xl p-6 text-center transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${300 + i * 100}ms` }}
            >
              <h.icon className="mx-auto mb-3 text-foreground" size={28} />
              <h3 className="font-display font-semibold text-foreground mb-1">{h.label}</h3>
              <p className="text-xs text-muted-foreground">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

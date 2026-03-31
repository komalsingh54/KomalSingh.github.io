import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    period: "2024 – Present",
    company: "TCS (Asda Retail)",
    role: "Solution Architect, Tech Lead",
    tech: "Cloud · DevOps · AI · React · Full Stack",
  },
  {
    period: "2019 – 2024",
    company: "Publicis Sapient",
    role: "Tech Lead & Full Stack Developer",
    tech: "Cloud · DevOps · React · Node · Java",
  },
  {
    period: "2017 – 2019",
    company: "To The New",
    role: "Senior Full Stack Developer & Cloud Architect",
    tech: "React · Node · AWS · Cloud Solutions",
  },
  {
    period: "2015 – 2017",
    company: "Gemalto (Thales)",
    role: "Full Stack Developer",
    tech: "React · Node · Java · C/C++",
  },
];

export default function Timeline() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 relative">
      <div ref={ref} className="container mx-auto px-6">
        <p className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Experience
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-16 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Career <span className="text-gradient">Journey</span>
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {experiences.map((exp, i) => {
            const isLeft = i % 2 === 0;
            return (
              <div
                key={exp.company}
                className={`relative flex items-start mb-12 last:mb-0 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-foreground border-2 border-background z-10 mt-2" />

                {/* Content */}
                <div
                  className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-auto"
                  }`}
                >
                  <span className="text-xs uppercase tracking-wider text-muted-foreground">
                    {exp.period}
                  </span>
                  <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                    {exp.company}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">{exp.role}</p>
                  <div className="flex flex-wrap gap-2 mt-3 md:justify-start">
                    {isLeft && <div className="hidden md:block flex-1" />}
                    {exp.tech.split(" · ").map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-full glass text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

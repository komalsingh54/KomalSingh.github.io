import { motion } from "framer-motion";

const experiences = [
  {
    period: "2024 – Present",
    company: "TCS",
    client: "Asda Retail",
    role: "Solution Architect, Tech Lead",
    tech: ["AWS", "Azure", "React", "Spring Boot", "Kubernetes", "GenAI", "Observability"],
    highlight: "Leading digital transformation, cloud migration, and AI integration for UK's largest retailer",
  },
  {
    period: "2019 – 2024",
    company: "Publicis Sapient",
    client: null,
    role: "Tech Lead & Full Stack Developer",
    tech: ["React", "Next.js", "Node.js", "Java", "Docker", "Terraform", "Kafka"],
    highlight: "Led cross-functional teams building enterprise platforms with micro-frontend architecture",
  },
  {
    period: "2017 – 2019",
    company: "To The New",
    client: null,
    role: "Senior Full Stack Developer & Cloud Architect",
    tech: ["React", "Node.js", "AWS", "GraphQL", "MongoDB", "CI/CD"],
    highlight: "Architected cloud-native solutions and automated deployment pipelines at scale",
  },
  {
    period: "2015 – 2017",
    company: "Gemalto (Thales)",
    client: null,
    role: "Full Stack Developer",
    tech: ["React", "Node.js", "Java", "C/C++", "IoT", "Security"],
    highlight: "Built secure IoT and embedded solutions for device authentication and encryption",
  },
];

export default function Timeline() {
  return (
    <section className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-20 leading-[1.05]"
        >
          <span className="font-display">Career</span>{" "}
          <span className="font-serif italic text-gradient">Journey</span>
        </motion.h2>

        <div className="relative max-w-4xl mx-auto">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative flex mb-16 last:mb-0 group"
            >
              <div className="hidden md:flex flex-col items-center mr-8 shrink-0">
                <div className="w-3 h-3 rounded-full bg-foreground border-4 border-background ring-2 ring-border z-10 group-hover:ring-foreground/30 transition-all duration-300" />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className="flex-1 glass border-gradient rounded-2xl p-6 md:p-8 group-hover:bg-[hsl(var(--glass-hover))] transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    {exp.client && (
                      <p className="text-sm text-muted-foreground mt-0.5">
                        Client: {exp.client}
                      </p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{exp.role}</p>
                  </div>
                  <span className="text-xs uppercase tracking-wider text-muted-foreground font-display bg-secondary px-3 py-1 rounded-full whitespace-nowrap self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-4 italic">
                  "{exp.highlight}"
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground font-display"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

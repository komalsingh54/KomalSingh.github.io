import { motion } from "framer-motion";

const experiences = [
  {
    period: "Oct 2024 – Present",
    company: "TCS",
    client: "Asda Retail (London, UK)",
    role: "Solution Architect · Tech Lead",
    tech: ["Solution Architecture", "Cloud", "DevOps", "AI", "React", "Full Stack", "Observability"],
    highlight: "Handling everything in tech — architecture, cloud, DevOps, AI, and end-to-end delivery for Asda's digital ecosystem",
    current: true,
  },
  {
    period: "Jul 2022 – Sep 2024",
    company: "Publicis Sapient",
    client: "Asda (London, UK)",
    role: "Lead Engineer",
    tech: ["React.js", "Azure ADB2C", "Azure DevOps", "Agile"],
    highlight: "Led customer authentication & authorization with Azure AD B2C, optimised release cycles with Azure DevOps",
    current: false,
  },
  {
    period: "Feb 2019 – Jun 2022",
    company: "Publicis Sapient",
    client: "Suncorp Group (Australia) · Falabella (Chile)",
    role: "Tech Lead",
    tech: ["React", "Next.js", "Node.js", "Serverless", "GCP", "ALB"],
    highlight: "Built scalable Fintech & e-commerce platforms with serverless architecture for two major global clients",
    current: false,
  },
  {
    period: "Jul 2017 – Mar 2019",
    company: "To The New",
    client: "Rhinogram (HIPAA-compliant)",
    role: "Senior Full Stack Engineer",
    tech: ["React.js", "Node.js", "Docker", "Kubernetes", "AWS", "Twilio"],
    highlight: "Built HIPAA-compliant platform with Twilio, Fusebill payments, analytics dashboards, and RBAC",
    current: false,
  },
  {
    period: "Jan 2015 – Jun 2017",
    company: "Gemalto (Thales)",
    client: null,
    role: "Full Stack Developer",
    tech: ["JavaScript", "Node.js", "React", "Angular", "C/C++", "Java", "AWS", "D3.js"],
    highlight: "Built Sentinel LDK toolkit, testing frameworks, and analytics dashboards with D3.js & R",
    current: false,
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
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative flex mb-16 last:mb-0 group"
            >
              <div className="hidden md:flex flex-col items-center mr-8 shrink-0">
                <div className={`w-3 h-3 rounded-full border-4 border-background z-10 transition-all duration-300 ${
                  exp.current
                    ? "bg-emerald-400 ring-2 ring-emerald-400/30"
                    : "bg-foreground ring-2 ring-border group-hover:ring-foreground/30"
                }`} />
                {i < experiences.length - 1 && (
                  <div className="w-px flex-1 bg-border mt-2" />
                )}
              </div>

              <motion.div
                whileHover={{ y: -2 }}
                className={`flex-1 glass border-gradient rounded-2xl p-6 md:p-8 group-hover:bg-[hsl(var(--glass-hover))] transition-all duration-300 ${
                  exp.current ? "ring-1 ring-emerald-400/20" : ""
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-display text-xl font-bold text-foreground">
                        {exp.company}
                      </h3>
                      {exp.current && (
                        <span className="text-[10px] uppercase tracking-wider bg-emerald-400/10 text-emerald-500 dark:text-emerald-400 px-2 py-0.5 rounded-full font-display font-semibold">
                          Current
                        </span>
                      )}
                    </div>
                    {exp.client && (
                      <p className="text-sm text-muted-foreground mt-0.5">{exp.client}</p>
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

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-20"
        >
          <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Education</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="glass border-gradient rounded-2xl p-6">
              <p className="font-display font-bold text-foreground">MCA (Software Engineering)</p>
              <p className="text-sm text-muted-foreground mt-1">Guru Gobind Singh Indraprastha University</p>
              <p className="text-xs text-muted-foreground mt-1">2012 – 2015</p>
            </div>
            <div className="glass border-gradient rounded-2xl p-6">
              <p className="font-display font-bold text-foreground">BCA (Computer Science)</p>
              <p className="text-sm text-muted-foreground mt-1">Jaipur National University</p>
              <p className="text-xs text-muted-foreground mt-1">2008 – 2011</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

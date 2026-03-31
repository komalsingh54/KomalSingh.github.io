import { motion } from "framer-motion";
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
  return (
    <section id="resume" className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
            >
              Resume
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.05]"
            >
              <span className="font-display">Skills &</span>{" "}
              <span className="font-serif italic text-gradient">Expertise</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Button
              asChild
              size="lg"
              className="mt-6 md:mt-0 rounded-full font-display h-12 px-8"
            >
              <a href="/resume-komal-singh.pdf" download>
                <Download className="mr-2" size={18} />
                Download CV
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
              className="glass border-gradient rounded-2xl p-6 text-center group"
            >
              <s.icon className="mx-auto mb-3 text-muted-foreground group-hover:text-foreground transition-colors" size={22} />
              <p className="font-display text-4xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs text-muted-foreground mt-1 tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="glass border-gradient rounded-2xl p-6"
            >
              <h3 className="font-display font-bold text-foreground mb-5 text-sm tracking-wide uppercase">{group.category}</h3>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item} className="text-sm text-muted-foreground flex items-center gap-3">
                    <span className="w-1 h-4 rounded-full bg-foreground/15" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, Activity } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover & Assess",
    desc: "Understand business goals, audit existing systems, identify constraints and opportunities before writing a single line of code.",
  },
  {
    icon: PenTool,
    title: "Architect & Design",
    desc: "Define solution architecture, technology choices, trade-offs, and scalability strategy — documented and aligned with stakeholders.",
  },
  {
    icon: Rocket,
    title: "Build & Deliver",
    desc: "Lead implementation with CI/CD, micro-frontends, cloud-native patterns — shipping incrementally with quality gates at every stage.",
  },
  {
    icon: Activity,
    title: "Observe & Optimise",
    desc: "Production monitoring, performance tuning, cost optimisation — ensuring solutions stay resilient and evolve with the business.",
  },
];

export default function Approach() {
  return (
    <section className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
        >
          Methodology
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-16 leading-[1.05]"
        >
          <span className="font-display">How I</span>{" "}
          <span className="font-serif italic text-gradient">Work</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.2 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="glass border-gradient rounded-2xl p-6 group relative"
            >
              {/* Step number */}
              <span className="absolute top-4 right-4 text-5xl font-display font-bold text-muted-foreground/10 group-hover:text-muted-foreground/20 transition-colors">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="text-foreground" size={22} />
              </div>

              <h3 className="font-display font-bold text-foreground text-sm mb-3">{step.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>

              {/* Connector line on larger screens */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-foreground/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

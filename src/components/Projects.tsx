import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Cloud", "Full Stack", "DevOps", "Fintech", "E-Commerce", "Salesforce"];

const projects = [
  {
    title: "Asda Digital Transformation",
    challenge: "Asda's retail platform needed secure customer identity, smoother release processes, and stronger technical ownership across multiple digital touchpoints.",
    decision: "Led full-stack delivery across IAM, frontend, and platform engineering, shaping authentication, release workflows, and broader technical execution across the retail estate.",
    impact: "Improved delivery speed, strengthened identity foundations, and provided end-to-end technical leadership across key retail initiatives.",
    tags: ["IAM", "React.js", "Azure DevOps", "Platform Delivery"],
    category: ["Full Stack", "Cloud", "E-Commerce"],
    num: "01",
  },
  {
    title: "Suncorp Group – Fintech Platform",
    challenge: "Monolithic financial services platform struggling under peak traffic loads in Australia.",
    decision: "Designed serverless architecture with Application Load Balancer for elastic scaling.",
    impact: "99.9% uptime, 60% reduction in infrastructure costs during off-peak.",
    tags: ["React", "Serverless", "ALB", "Fintech"],
    category: ["Full Stack", "Fintech", "Cloud"],
    num: "02",
  },
  {
    title: "Falabella – E-Commerce Platform",
    challenge: "Latin America's largest retailer needed a high-traffic web platform handling millions of daily users.",
    decision: "Built Next.js SSR platform on GCP with Node.js microservices for catalogue and checkout.",
    impact: "3x improvement in page load speed, significant uplift in conversion rates.",
    tags: ["Next.js", "GCP", "Node.js", "React.js"],
    category: ["Full Stack", "E-Commerce", "Cloud", "Salesforce"],
    num: "03",
  },
  {
    title: "Rhinogram – HIPAA Healthcare",
    challenge: "Healthcare communication platform needed HIPAA compliance with real-time messaging and payments.",
    decision: "Built compliant infra with Twilio integration, Fusebill payments, RBAC and analytics dashboard.",
    impact: "Full HIPAA certification, 10k+ active healthcare providers onboarded.",
    tags: ["React", "Node.js", "Docker", "K8s", "AWS", "Twilio"],
    category: ["Full Stack", "DevOps", "Cloud"],
    num: "04",
  },
  {
    title: "Sentinel LDK Toolkit",
    challenge: "License management system required hardware interaction and cross-platform PWA support.",
    decision: "Developed Node PWA-kit with Angular frontend and C/C++ hardware layer at Gemalto.",
    impact: "Deployed across enterprise clients globally, reducing licence fraud by 80%.",
    tags: ["Node.js", "Angular", "C/C++", "PWA"],
    category: ["Full Stack"],
    num: "05",
  },
  {
    title: "Sentinel Analytics Dashboard",
    challenge: "No visibility into licence usage patterns — business decisions made on guesswork.",
    decision: "Built analytics engine with D3.js visualisations, R-script processing, and AWS backend.",
    impact: "Real-time insights for 500+ enterprise accounts, data-driven licensing strategy.",
    tags: ["D3.js", "React", "Node.js", "AWS", "R"],
    category: ["Full Stack", "Cloud"],
    num: "06",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
        >
          Case Studies
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.05]"
        >
          <span className="font-display">Selected</span>{" "}
          <span className="font-serif italic text-gradient">Impact</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-14"
        >
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`text-sm px-5 py-2.5 rounded-full transition-all duration-300 font-display ${
                filter === c
                  ? "bg-foreground text-background shadow-lg"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.article
                layout
                key={p.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group glass border-gradient rounded-2xl p-6 flex flex-col cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl font-display font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                    {p.num}
                  </span>
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-foreground" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-4">
                  {p.title}
                </h3>

                <div className="space-y-3 mb-5 flex-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-display mb-1">Challenge</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.challenge}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60 font-display mb-1">Decision</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.decision}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/50 font-display mb-1">Impact</p>
                    <p className="text-sm text-foreground/80 leading-relaxed font-medium">{p.impact}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground font-display"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const categories = ["All", "Cloud", "Full Stack", "DevOps", "Fintech", "E-Commerce"];

const projects = [
  {
    title: "Asda Digital Transformation",
    desc: "Led customer authentication & authorization with React.js and Azure AD B2C. Optimised release cycles with Azure DevOps practices for UK's largest retailer.",
    tags: ["React.js", "Azure ADB2C", "Azure DevOps", "Agile"],
    category: ["Full Stack", "Cloud", "E-Commerce"],
    num: "01",
  },
  {
    title: "Suncorp Group – Fintech Platform",
    desc: "Built scalable Fintech solutions using React, Serverless architecture, and Application Load Balancer for Australia's leading financial services group.",
    tags: ["React", "Serverless", "ALB", "Fintech"],
    category: ["Full Stack", "Fintech", "Cloud"],
    num: "02",
  },
  {
    title: "Falabella – E-Commerce Platform",
    desc: "Architected high-traffic e-commerce web applications using Next.js, GCP, Node.js and React.js for Latin America's largest retailer.",
    tags: ["Next.js", "GCP", "Node.js", "React.js"],
    category: ["Full Stack", "E-Commerce", "Cloud"],
    num: "03",
  },
  {
    title: "Rhinogram – HIPAA Healthcare",
    desc: "Built HIPAA-compliant platform with Twilio integration, Fusebill payments, advanced analytics dashboard, and roles & permissions system.",
    tags: ["React", "Node.js", "Docker", "K8s", "AWS", "Twilio"],
    category: ["Full Stack", "DevOps", "Cloud"],
    num: "04",
  },
  {
    title: "Sentinel LDK Toolkit",
    desc: "Developed the Sentinel LDK toolkit with Node PWA-kit, Angular, JavaScript, and C/C++ with hardware interaction for license management at Gemalto.",
    tags: ["Node.js", "Angular", "C/C++", "PWA"],
    category: ["Full Stack"],
    num: "05",
  },
  {
    title: "Sentinel Analytics Dashboard",
    desc: "Designed powerful analytics dashboard using Node.js, Angular, React, AWS, D3.js, and R script for data visualisation and insights.",
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
          Projects
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.05]"
        >
          <span className="font-display">Selected</span>{" "}
          <span className="font-serif italic text-gradient">Work</span>
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
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
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl font-display font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                    {p.num}
                  </span>
                  <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight size={14} className="text-foreground" />
                  </div>
                </div>

                <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-3">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">
                  {p.desc}
                </p>
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

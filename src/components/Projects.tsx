import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";

const categories = ["All", "Cloud", "Full Stack", "DevOps", "AI"];

const projects = [
  {
    title: "Retail Digital Transformation",
    desc: "End-to-end digital transformation for Asda, modernising legacy systems to cloud-native microservices with AI-driven analytics.",
    tags: ["Cloud", "AI", "React", "DevOps"],
    category: ["Cloud", "AI", "DevOps"],
    num: "01",
  },
  {
    title: "Enterprise Cloud Migration",
    desc: "Led migration of monolithic applications to AWS cloud infrastructure, implementing CI/CD pipelines and IaC with Terraform.",
    tags: ["AWS", "Terraform", "CI/CD", "Docker"],
    category: ["Cloud", "DevOps"],
    num: "02",
  },
  {
    title: "Customer Experience Platform",
    desc: "Built a real-time personalisation engine for retail, processing millions of events daily for targeted recommendations.",
    tags: ["React", "Node.js", "Kafka", "ML"],
    category: ["Full Stack", "AI"],
    num: "03",
  },
  {
    title: "IoT Security Framework",
    desc: "Developed secure embedded solutions at Gemalto/Thales for IoT device authentication and data encryption.",
    tags: ["C/C++", "Java", "Security", "IoT"],
    category: ["Full Stack"],
    num: "04",
  },
  {
    title: "DevOps Automation Suite",
    desc: "Designed automated deployment pipelines reducing release cycles from weeks to hours across multiple teams.",
    tags: ["Jenkins", "Docker", "K8s", "AWS"],
    category: ["DevOps", "Cloud"],
    num: "05",
  },
  {
    title: "AI-Powered Analytics Dashboard",
    desc: "Intelligent dashboards with predictive analytics capabilities for supply chain optimisation at enterprise scale.",
    tags: ["React", "Python", "TensorFlow", "D3"],
    category: ["AI", "Full Stack"],
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

        {/* Filters */}
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

        {/* Grid */}
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

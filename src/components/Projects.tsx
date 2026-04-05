import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projectCategories, projects } from "@/data/projects";
import { trackFilter, trackProjectClick } from "@/lib/gtag";

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
          {projectCategories.map((c) => (
            <button
              key={c}
              onClick={() => { setFilter(c); trackFilter(c); }}
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
                className="group glass border-gradient rounded-2xl p-6 flex flex-col"
              >
                <Link
                  to={`/projects/${p.slug}`}
                  onClick={() => trackProjectClick(p.title)}
                  className="flex flex-1 flex-col cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl font-display font-bold text-muted-foreground/20 group-hover:text-muted-foreground/40 transition-colors">
                      {p.num}
                    </span>
                    <div className="w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight size={14} className="text-foreground" />
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-foreground text-lg leading-tight mb-4 group-hover:underline underline-offset-4">
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
                </Link>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

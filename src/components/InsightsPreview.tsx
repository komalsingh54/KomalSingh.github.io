import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { insights } from "@/data/insights";

export default function InsightsPreview() {
  return (
    <section id="insights" className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
        >
          Insights
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-[1.05]"
        >
          <span className="font-display">Architecture</span>{" "}
          <span className="font-serif italic text-gradient">Writing</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-5">
          {insights.map((item, index) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="glass border-gradient rounded-2xl p-6"
            >
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground font-display mb-3">
                {item.readingTime}
              </p>
              <h3 className="font-display text-xl font-bold leading-tight mb-3">
                <Link to={`/insights/${item.slug}`} className="hover:underline underline-offset-4">
                  {item.title}
                </Link>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{item.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-secondary/80 text-muted-foreground font-display"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  to={`/insights/${item.slug}`}
                  className="inline-flex items-center gap-1 text-sm text-foreground hover:opacity-70 transition-opacity"
                >
                  Read
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

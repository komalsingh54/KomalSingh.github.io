import { useScrollReveal } from "@/hooks/useScrollReveal";
import { motion } from "framer-motion";
import { Camera, Code, Cloud, Brain, Eye, Rocket, ShoppingCart } from "lucide-react";

const highlights = [
  { icon: Code, label: "Full Stack", desc: "React · Next.js · Node · Java · Spring Boot · C/C++", stat: "11+ yrs" },
  { icon: Cloud, label: "Cloud & DevOps", desc: "AWS · Azure · GCP · K8s · Docker · Terraform", stat: "6+ yrs" },
  { icon: ShoppingCart, label: "Salesforce Commerce", desc: "SFCC · B2C Commerce · Agentforce · Commerce Cloud", stat: "Specialist" },
  { icon: Brain, label: "AI & Agentic AI", desc: "OpenAI · LangChain · RAG · TensorFlow · ML Ops", stat: "3+ yrs" },
  { icon: Eye, label: "Observability", desc: "Monitoring · Logging · Tracing · Performance", stat: "Expert" },
  { icon: Rocket, label: "Product Delivery", desc: "End-to-end delivery · Architecture · Problem solving", stat: "Leader" },
  { icon: Camera, label: "Photography", desc: "komal-singh.com", stat: "Hobby" },
];

export default function About() {
  const { ref } = useScrollReveal();

  return (
    <section id="about" className="py-32 relative noise">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block">
        <p className="text-xs tracking-[0.4em] text-muted-foreground/30 uppercase rotate-[-90deg] origin-left whitespace-nowrap">
          About · Experience · Skills
        </p>
      </div>

      <div ref={ref} className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
            >
              About Me
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.05]"
            >
              <span className="font-display">Architect by</span>
              <br />
              <span className="font-serif italic text-gradient">trade & passion.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-base leading-relaxed space-y-4"
            >
              <p>
                I'm a Solution Architect based in London with over 11 years of end-to-end
                project delivery experience. From embedded systems at{" "}
                <span className="text-foreground font-medium">Gemalto/Thales</span> to leading
                digital transformation at{" "}
                <span className="text-foreground font-medium">Publicis Sapient</span> and
                architecting enterprise retail solutions at{" "}
                <span className="text-foreground font-medium">TCS for Asda</span> — I bring
                deep expertise across the full technology stack.
              </p>
              <p>
                My niche is{" "}
                <span className="text-foreground font-medium">Salesforce Commerce Cloud</span>,{" "}
                cloud-native architecture, micro-frontends, Agentic AI, and observability
                — driving product enhancement and problem resolution at scale.
                Outside of code, I capture the world through my lens at{" "}
                <a
                  href="https://komal-singh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground underline underline-offset-4 decoration-muted-foreground/30 hover:decoration-foreground transition-all"
                >
                  komal-singh.com
                </a>.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i + 0.3, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`glass border-gradient rounded-2xl p-5 group cursor-default ${
                  i === highlights.length - 1 ? "col-span-2" : ""
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <h.icon className="text-foreground" size={20} />
                  </div>
                  <span className="text-xs text-muted-foreground font-display">{h.stat}</span>
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm mb-1">{h.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

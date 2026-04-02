import { motion } from "framer-motion";
import { Download, Briefcase, Building2, Award, Code2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { icon: Briefcase, value: "11+", label: "Years Experience" },
  { icon: Building2, value: "4", label: "Companies" },
  { icon: Award, value: "7+", label: "Certifications" },
  { icon: Code2, value: "25+", label: "Technologies" },
];

const skills = [
  {
    category: "Salesforce",
    items: ["SFCC", "B2C Commerce", "Commerce Cloud Developer", "Agentforce", "Salesforce Commerce Cloud"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Angular", "TypeScript", "JavaScript", "React Native", "Micro-frontends", "D3.js", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "C/C++", "Python", "REST APIs", "GraphQL", "gRPC", "Serverless"],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Helm", "Terraform", "CI/CD", "Azure DevOps"],
  },
  {
    category: "Data & Messaging",
    items: ["PostgreSQL", "MongoDB", "Redis", "Kafka", "RabbitMQ", "Twilio", "Fusebill"],
  },
  {
    category: "AI & Agentic AI",
    items: ["GenAI", "Agentic AI", "OpenAI", "LangChain", "RAG", "TensorFlow", "PyTorch", "ML Ops", "Salesforce Agentforce"],
  },
  {
    category: "Leadership & Ops",
    items: ["Solution Architecture", "Team Leadership", "Agile", "WCAG Accessibility", "Observability", "HIPAA Compliance", "Webpack"],
  },
];

const certifications = [
  { name: "Salesforce Agentforce Certification", verified: true },
  { name: "Salesforce Commerce Cloud Developer", verified: true },
  { name: "Salesforce Commerce Cloud Certification", verified: true },
  { name: "AWS Certified Solutions Architect – Associate", verified: true },
  { name: "AWS Solutions Architect Professional (Top Gun Academy)", verified: true },
  { name: "Apache Kafka", verified: true },
  { name: "Kubernetes", verified: true },
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i + 0.2 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`glass border-gradient rounded-2xl p-6 ${
                group.category === "Salesforce" ? "ring-1 ring-foreground/10" : ""
              }`}
            >
              <h3 className="font-display font-bold text-foreground mb-5 text-sm tracking-wide uppercase">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs px-3 py-1.5 rounded-full bg-secondary/80 text-muted-foreground font-display"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="glass border-gradient rounded-xl px-5 py-4 flex items-center gap-3">
                {cert.verified ? (
                  <CheckCircle size={18} className="text-foreground shrink-0" />
                ) : (
                  <Award size={18} className="text-muted-foreground shrink-0" />
                )}
                <p className="text-sm text-foreground">{cert.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, ExternalLink, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:komalsingh54@gmail.com?subject=${subject}&body=${body}`);
    toast({ title: "Opening your email client…" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-32 relative noise">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4 font-display"
            >
              Contact
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.05]"
            >
              <span className="font-display">Let's build</span>
              <br />
              <span className="font-serif italic text-gradient">something great.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-10 max-w-md"
            >
              Have a project in mind or want to discuss opportunities? I'd love to hear from you.
            </motion.p>

            {/* Contact links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {[
                { label: "Email", value: "komalsingh54@gmail.com", href: "mailto:komalsingh54@gmail.com", icon: Mail },
                { label: "Photography", value: "komal-singh.com", href: "https://komal-singh.com", icon: ExternalLink },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 glass border-gradient rounded-xl px-5 py-4 hover:bg-[hsl(var(--glass-hover))] transition-all"
                >
                  <link.icon size={18} className="text-muted-foreground" />
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-display uppercase tracking-wider">{link.label}</p>
                    <p className="text-sm text-foreground">{link.value}</p>
                  </div>
                  <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex gap-3 mt-8"
            >
              {[
                { label: "LinkedIn", href: "https://linkedin.com/in/komalsingh54" },
                { label: "GitHub", href: "https://github.com/komalsingh54" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-display uppercase tracking-wider glass rounded-full px-5 py-2.5 text-muted-foreground hover:text-foreground hover:bg-[hsl(var(--glass-hover))] transition-all"
                >
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="glass border-gradient rounded-2xl p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-xs text-muted-foreground font-display uppercase tracking-wider mb-2 block">Name</label>
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  maxLength={100}
                  className="bg-secondary/50 border-border h-12"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground font-display uppercase tracking-wider mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  maxLength={255}
                  className="bg-secondary/50 border-border h-12"
                />
              </div>
            </div>
            <div>
              <label className="text-xs text-muted-foreground font-display uppercase tracking-wider mb-2 block">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                maxLength={1000}
                className="bg-secondary/50 border-border"
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-full font-display h-12">
              <Send className="mr-2" size={18} />
              Send Message
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

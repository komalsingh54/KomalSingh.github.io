import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, ExternalLink } from "lucide-react";

export default function Contact() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    // mailto fallback
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:komalsingh54@gmail.com?subject=${subject}&body=${body}`);
    toast({ title: "Opening your email client…" });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 relative">
      <div ref={ref} className="container mx-auto px-6 max-w-2xl">
        <p className={`text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3 text-center transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Contact
        </p>
        <h2 className={`font-display text-4xl md:text-5xl font-bold mb-4 text-center transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          Let's <span className="text-gradient">Connect</span>
        </h2>
        <p className={`text-muted-foreground text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          Have a project in mind or want to chat? Drop me a message.
        </p>

        <form
          onSubmit={handleSubmit}
          className={`glass rounded-2xl p-8 space-y-5 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-secondary/50 border-border"
            />
            <Input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="bg-secondary/50 border-border"
            />
          </div>
          <Textarea
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            className="bg-secondary/50 border-border"
          />
          <Button type="submit" size="lg" className="w-full rounded-full font-display">
            <Send className="mr-2" size={18} />
            Send Message
          </Button>
        </form>

        <div className={`flex flex-wrap items-center justify-center gap-6 mt-10 transition-all duration-700 delay-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <a
            href="mailto:komalsingh54@gmail.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} /> komalsingh54@gmail.com
          </a>
          <a
            href="https://komal-singh.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ExternalLink size={16} /> komal-singh.com
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowDown, FileDown, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = [
  "Solution Architect",
  "Full Stack Developer",
  "Cloud Architect",
  "Tech Lead",
  "GenAI Engineer",
  "DevOps Expert",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid bg */}
      <div className="absolute inset-0 grid-bg" />

      {/* Large blurred orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full bg-foreground/[0.03] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] rounded-full bg-foreground/[0.04] blur-3xl"
        />
        {/* Thin decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-foreground/[0.04] rounded-full animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] border border-foreground/[0.03] rounded-full animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />
      </div>

      {/* Noise overlay */}
      <div className="absolute inset-0 noise pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex justify-center mb-10"
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-5 py-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-xs text-muted-foreground tracking-wide font-display">Open to opportunities · London, UK</span>
            </div>
          </motion.div>

          {/* Name */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-display text-7xl sm:text-8xl md:text-[10rem] font-bold tracking-[-0.04em] leading-[0.85] text-foreground">
                Komal
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              <h1 className="font-serif italic text-7xl sm:text-8xl md:text-[10rem] font-normal tracking-[-0.02em] leading-[0.85] text-gradient-hero">
                Singh
              </h1>
            </motion.div>
          </div>

          {/* Rotating role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-center mb-10"
          >
            <div className="h-7 overflow-hidden">
              <motion.p
                key={roleIndex}
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -28, opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="text-base md:text-lg text-muted-foreground tracking-[0.15em] uppercase font-display"
              >
                {roles[roleIndex]}
              </motion.p>
            </div>
          </motion.div>

          {/* Divider line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
            className="w-16 h-px bg-foreground/20 mx-auto mb-10"
          />

          {/* Bio line */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-center text-muted-foreground max-w-lg mx-auto mb-12 text-sm md:text-base leading-relaxed"
          >
            10+ years crafting scalable enterprise solutions — from cloud architecture
            to AI-driven retail platforms.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild size="lg" className="rounded-full font-display h-12 px-8 text-sm shadow-lg">
              <a href="#projects">
                <FolderOpen className="mr-2" size={18} />
                View Projects
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full font-display h-12 px-8 text-sm border-foreground/15 hover:border-foreground/30 hover:bg-foreground/[0.03]"
            >
              <a href="#resume">
                <FileDown className="mr-2" size={18} />
                Download CV
              </a>
            </Button>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex items-center justify-center gap-10 mt-20"
          >
            {[
              { num: "10+", label: "Years" },
              { num: "25+", label: "Technologies" },
              { num: "5+", label: "Certifications" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-foreground">{s.num}</p>
                <p className="text-[10px] md:text-xs text-muted-foreground tracking-[0.2em] uppercase mt-1">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-display">Scroll</span>
        <ArrowDown size={16} className="text-muted-foreground animate-scroll-hint" />
      </motion.a>
    </section>
  );
}

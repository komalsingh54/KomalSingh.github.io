import { ArrowDown, FileDown, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const roles = ["Solution Architect", "Full Stack Developer", "Cloud Expert", "Tech Lead"];

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
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden noise"
    >
      {/* Floating orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full glow-orb animate-float opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full glow-orb animate-float opacity-40" style={{ animationDelay: "3s" }} />
        {/* Decorative ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-border/30 rounded-full animate-spin-slow opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-border/20 rounded-full animate-spin-slow opacity-15" style={{ animationDirection: "reverse" }} />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs text-muted-foreground tracking-wide">Available for work · London, UK</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="font-display text-6xl sm:text-8xl md:text-9xl font-bold tracking-tighter leading-[0.9] mb-2"
        >
          <span className="text-foreground">Komal</span>
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          className="font-serif italic text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight leading-[0.9] mb-8 text-gradient-hero"
        >
          Singh
        </motion.h1>

        {/* Rotating role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="h-8 mb-10 overflow-hidden"
        >
          <motion.p
            key={roleIndex}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -30, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg text-muted-foreground tracking-wide"
          >
            {roles[roleIndex]}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="lg" className="rounded-full font-display h-12 px-8 text-sm">
            <a href="#projects">
              <FolderOpen className="mr-2" size={18} />
              View Projects
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full font-display h-12 px-8 text-sm border-muted-foreground/20 hover:border-foreground/40"
          >
            <a href="#resume">
              <FileDown className="mr-2" size={18} />
              Download CV
            </a>
          </Button>
        </motion.div>

        {/* Scroll stat bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex items-center justify-center gap-8 mt-16"
        >
          {[
            { num: "11+", label: "Years" },
            { num: "4", label: "Companies" },
            { num: "15+", label: "Technologies" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-2xl font-bold text-foreground">{s.num}</p>
              <p className="text-xs text-muted-foreground tracking-wider uppercase">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-scroll-hint"
        aria-label="Scroll down"
      >
        <ArrowDown size={20} />
      </a>
    </section>
  );
}

import { ArrowDown, FileDown, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,hsl(0_0%_100%/0.04)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <p
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          Solution Architect · London, UK
        </p>

        <h1
          className="font-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight leading-[0.95] mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-foreground">Komal</span>
          <br />
          <span className="text-gradient">Singh</span>
        </h1>

        <p
          className="max-w-xl mx-auto text-muted-foreground text-lg mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          11+ years crafting scalable solutions across full-stack development,
          cloud architecture, DevOps & AI.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.8s" }}
        >
          <Button asChild size="lg" className="rounded-full font-display">
            <a href="#projects">
              <FolderOpen className="mr-2" size={18} />
              View Projects
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full font-display border-muted-foreground/30"
          >
            <a href="#resume">
              <FileDown className="mr-2" size={18} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll hint */}
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

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { openCookiePreferences } from "@/components/CookieConsentManager";

const marqueeText = "REACT · NODE · JAVA · AWS · AZURE · GCP · KUBERNETES · DOCKER · TERRAFORM · GENAI · NEXT.JS · ";

export default function Footer() {
  const handleBackToTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="py-6 overflow-hidden opacity-[0.04]">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-display text-6xl font-bold tracking-tighter">
            {marqueeText}{marqueeText}
          </span>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Komal Singh
          </p>
          <div className="hidden sm:flex gap-4">
            {[
              { label: "LinkedIn", href: "https://www.linkedin.com/in/singh-komal/" },
              { label: "GitHub", href: "https://github.com/komalsingh54" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {s.label}
              </a>
            ))}
            <Link
              to="/privacy-cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy &amp; Cookies
            </Link>
            <button
              type="button"
              onClick={openCookiePreferences}
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie settings
            </button>
          </div>
        </div>
        <a
          href="#top"
          onClick={handleBackToTop}
          className="text-xs text-muted-foreground hover:text-foreground transition-colors font-display uppercase tracking-wider"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}

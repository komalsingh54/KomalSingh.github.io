import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Seo from "@/components/Seo";

const sections = [
  {
    title: "What this page covers",
    body: "This page explains what limited data the portfolio collects, how analytics works, and how you can manage your cookie preferences.",
  },
  {
    title: "Analytics",
    body: "The site uses Google Analytics only if you explicitly accept analytics cookies through the consent banner. Analytics helps understand visits, popular pages, and general engagement with the portfolio.",
  },
  {
    title: "Cookies in use",
    body: "A necessary consent cookie stores your choice so the site remembers whether analytics is allowed. If you accept analytics, Google Analytics may set cookies such as _ga and related measurement cookies.",
  },
  {
    title: "How to change your choice",
    body: "You can reopen cookie preferences at any time using the Cookie settings control in the footer and update or withdraw analytics consent there.",
  },
  {
    title: "Personal information",
    body: "The portfolio is designed to showcase professional work and does not use advertising, profiling, or account creation. Contact information that appears on the site is provided for professional enquiries.",
  },
  {
    title: "Third-party links",
    body: "The site links to external services such as LinkedIn and GitHub. Those services apply their own privacy and cookie policies once you leave this site.",
  },
];

export default function PrivacyCookies() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Seo
        title="Privacy & Cookies | Komal Singh"
        description="Privacy and cookie information for Komal Singh's portfolio, including analytics consent and cookie preferences."
        path="/privacy-cookies"
      />
      <Navbar />

      <section className="pt-32 pb-24 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span aria-hidden="true">←</span>
              Back to home
            </Link>
          </div>

          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
              Privacy
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Privacy & Cookies
            </h1>
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              This is a personal portfolio website. It uses a small amount of
              analytics only when you choose to allow it, and keeps data
              collection intentionally limited.
            </p>
          </div>

          <div className="mt-14 grid gap-6">
            {sections.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-border/70 bg-card/60 backdrop-blur-sm p-7 sm:p-9"
              >
                <h2 className="font-display text-2xl font-semibold tracking-tight">
                  {section.title}
                </h2>
                <p className="mt-4 text-base text-muted-foreground leading-8">
                  {section.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl border border-border/70 bg-secondary/50 p-7 sm:p-9">
            <h2 className="font-display text-2xl font-semibold tracking-tight">
              Contact
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-8">
              If you have a privacy-related question about this portfolio, you
              can contact me at{" "}
              <a
                href="mailto:komalsingh54@gmail.com"
                className="text-foreground underline underline-offset-4"
              >
                komalsingh54@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

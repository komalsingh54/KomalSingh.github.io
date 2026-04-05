// Google Analytics 4 — measurement helpers
// GA_MEASUREMENT_ID is embedded in index.html via gtag snippet

export const GA_MEASUREMENT_ID = "G-K4CSLMQ9Q5";

/* ── Declare gtag on window ── */
declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
    dataLayer: unknown[];
  }
}

/* ── Page-view (SPA route change) ── */
export const pageview = (url: string, title?: string) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("config", GA_MEASUREMENT_ID, {
    page_path: url,
    page_title: title,
  });
};

/* ── Custom event ── */
export const event = (
  action: string,
  params?: Record<string, string | number | boolean>
) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", action, params);
};

/* ── Convenience wrappers ── */

/** CTA button click */
export const trackCTA = (label: string) =>
  event("cta_click", { event_category: "engagement", event_label: label });

/** Outbound link */
export const trackOutbound = (url: string, label?: string) =>
  event("outbound_click", {
    event_category: "outbound",
    event_label: label ?? url,
    link_url: url,
  });

/** Section viewed (via IntersectionObserver / scroll) */
export const trackSectionView = (section: string) =>
  event("section_view", { event_category: "scroll", event_label: section });

/** File download */
export const trackDownload = (fileName: string) =>
  event("file_download", { event_category: "download", event_label: fileName });

/** Contact form submit */
export const trackContactSubmit = () =>
  event("contact_submit", { event_category: "engagement" });

/** Project card click */
export const trackProjectClick = (project: string) =>
  event("project_click", { event_category: "engagement", event_label: project });

/** Filter / category change */
export const trackFilter = (category: string) =>
  event("filter_change", { event_category: "engagement", event_label: category });

/** Theme toggle */
export const trackThemeToggle = (theme: string) =>
  event("theme_toggle", { event_category: "preferences", event_label: theme });

/** Nav link click */
export const trackNavClick = (label: string) =>
  event("nav_click", { event_category: "navigation", event_label: label });

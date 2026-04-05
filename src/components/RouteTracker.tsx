import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { pageview } from "@/lib/gtag";

/**
 * Fires a GA4 page_view on every SPA route change.
 * Place inside <BrowserRouter>.
 */
export default function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    pageview(location.pathname + location.search + location.hash, document.title);
  }, [location]);

  return null;
}

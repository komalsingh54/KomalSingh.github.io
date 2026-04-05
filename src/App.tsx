import { Suspense, lazy } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import CookieConsentManager from "@/components/CookieConsentManager";
import { ThemeProvider } from "@/hooks/useTheme";
import ScrollToHash from "@/components/ScrollToHash";
import RouteTracker from "@/components/RouteTracker";
import Index from "./pages/Index.tsx";

const InsightsIndex = lazy(() => import("./pages/InsightsIndex.tsx"));
const InsightDetail = lazy(() => import("./pages/InsightDetail.tsx"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail.tsx"));
const PrivacyCookies = lazy(() => import("./pages/PrivacyCookies.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
    <div className="text-center">
      <p className="font-display text-2xl font-semibold">Loading</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Preparing the next page.
      </p>
    </div>
  </div>
);

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <CookieConsentManager />
          <ScrollToHash />
          <RouteTracker />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/insights" element={<InsightsIndex />} />
              <Route path="/insights/:slug" element={<InsightDetail />} />
              <Route path="/projects/:slug" element={<ProjectDetail />} />
              <Route path="/privacy-cookies" element={<PrivacyCookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;

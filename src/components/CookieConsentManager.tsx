import { useEffect } from "react";
import * as CookieConsent from "vanilla-cookieconsent";
import "vanilla-cookieconsent/dist/cookieconsent.css";
import { initAnalytics, pageview } from "@/lib/gtag";

const analyticsEnabled = () =>
  CookieConsent.acceptedService("google_analytics", "analytics");

export const openCookiePreferences = () => {
  CookieConsent.showPreferences();
};

export default function CookieConsentManager() {
  useEffect(() => {
    CookieConsent.run({
      root: "body",
      mode: "opt-in",
      autoShow: true,
      manageScriptTags: false,
      autoClearCookies: true,
      hideFromBots: true,
      lazyHtmlGeneration: true,
      cookie: {
        name: "ks_cookie_consent",
        expiresAfterDays: 182,
        sameSite: "Lax",
      },
      guiOptions: {
        consentModal: {
          layout: "box wide",
          position: "bottom center",
          equalWeightButtons: false,
          flipButtons: false,
        },
        preferencesModal: {
          layout: "bar",
          position: "right",
          equalWeightButtons: false,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        analytics: {
          services: {
            google_analytics: {
              label: "Google Analytics",
              onAccept: () => {
                initAnalytics();
                pageview(
                  window.location.pathname + window.location.search + window.location.hash,
                  document.title,
                );
              },
            },
          },
        },
      },
      language: {
        default: "en",
        translations: {
          en: {
            consentModal: {
              title: "Cookies",
              description:
                "This site uses analytics cookies to understand visits and improve the portfolio experience. You can accept or reject analytics, and change your choice later from Cookie settings.",
              acceptAllBtn: "Accept analytics",
              acceptNecessaryBtn: "Reject",
              showPreferencesBtn: "Cookie settings",
            },
            preferencesModal: {
              title: "Cookie preferences",
              acceptAllBtn: "Allow analytics",
              acceptNecessaryBtn: "Reject",
              savePreferencesBtn: "Save preferences",
              closeIconLabel: "Close",
              sections: [
                {
                  title: "Your privacy choices",
                  description:
                    "This portfolio keeps cookies to a minimum. Necessary cookies are always on, and analytics stays off unless you enable it.",
                },
                {
                  title: "Strictly necessary",
                  linkedCategory: "necessary",
                  description:
                    "Stores your consent choice so the site remembers whether analytics is allowed.",
                },
                {
                  title: "Analytics",
                  linkedCategory: "analytics",
                  description:
                    "Uses Google Analytics to understand visits and the pages people find most useful. No advertising or profiling is used on this site.",
                },
              ],
            },
          },
        },
      },
      onConsent: () => {
        if (analyticsEnabled()) {
          initAnalytics();
        }
      },
      onChange: () => {
        if (analyticsEnabled()) {
          initAnalytics();
        }
      },
    });
  }, []);

  return null;
}

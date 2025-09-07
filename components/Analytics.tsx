"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { siteConfig } from "@/types/site";

declare global {
  interface Window {
    plausible?: (
      event: string,
      options?: { props?: Record<string, unknown> }
    ) => void;
    gtag?: (command: string, ...args: unknown[]) => void;
  }
}

const Analytics: React.FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!siteConfig.analytics?.enabled) return;

    const { provider } = siteConfig.analytics;
    const pagePath =
      pathname +
      (searchParams?.toString() ? "?" + searchParams.toString() : "");

    if (provider === "plausible" && window.plausible) {
      window.plausible("pageview");
    }

    if (provider === "ga4" && window.gtag) {
      const { ga4MeasurementId } = siteConfig.analytics;
      window.gtag("config", ga4MeasurementId!, {
        page_path: pagePath,
      });
    }
  }, [pathname, searchParams]);

  useEffect(() => {
    if (!siteConfig.analytics?.enabled) return;

    const { provider } = siteConfig.analytics;

    if (provider === "plausible") {
      const { plausibleDomain } = siteConfig.analytics;
      const script = document.createElement("script");
      script.defer = true;
      script.dataset.domain = plausibleDomain;
      script.src = "https://plausible.io/js/script.js";
      document.head.appendChild(script);

      return () => {
        document.head.removeChild(script);
      };
    }

    if (provider === "ga4") {
      const { ga4MeasurementId } = siteConfig.analytics;
      const script1 = document.createElement("script");
      script1.async = true;
      script1.src = `https://www.googletagmanager.com/gtag/js?id=${ga4MeasurementId}`;
      document.head.appendChild(script1);

      const script2 = document.createElement("script");
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${ga4MeasurementId}');
      `;
      document.head.appendChild(script2);

      return () => {
        document.head.removeChild(script1);
        document.head.removeChild(script2);
      };
    }
  }, []);

  return null;
};

// Helpers
export const trackEvent = (
  eventName: string,
  properties?: Record<string, unknown>
) => {
  if (!siteConfig.analytics?.enabled) return;

  const { provider } = siteConfig.analytics;

  if (provider === "plausible" && window.plausible) {
    window.plausible(eventName, { props: properties });
  }

  if (provider === "ga4" && window.gtag) {
    window.gtag("event", eventName, properties);
  }
};

export const trackProjectView = (projectTitle: string) => {
  trackEvent("project_view", { project_title: projectTitle });
};

export const trackContactForm = (formType: "contact" | "project_inquiry") => {
  trackEvent("contact_form_submit", { form_type: formType });
};

export const trackDownload = (downloadType: "pdf_cv" | "resume") => {
  trackEvent("download", { download_type: downloadType });
};

export const trackExternalLink = (
  linkUrl: string,
  linkType: "github" | "linkedin" | "project" | "portfolio"
) => {
  trackEvent("external_link_click", { link_url: linkUrl, link_type: linkType });
};

export default Analytics;

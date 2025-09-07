"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type AccessibilityContextType = {
  reducedMotion: boolean;
  highContrast: boolean;
  setReducedMotion: (value: boolean) => void;
  setHighContrast: (value: boolean) => void;
};

const AccessibilityContext = createContext<
  AccessibilityContextType | undefined
>(undefined);

export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error(
      "useAccessibility must be used within AccessibilityProvider"
    );
  }
  return context;
};

type AccessibilityProviderProps = {
  children: React.ReactNode;
};

export const AccessibilityProvider = ({
  children,
}: AccessibilityProviderProps) => {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  // Gestion motion
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) =>
      setReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Gestion contraste
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-contrast: high)");
    setHighContrast(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => setHighContrast(e.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Appliquer classes au <html>
  useEffect(() => {
    if (typeof document === "undefined") return;

    const html = document.documentElement;
    if (reducedMotion) {
      html.classList.add("reduce-motion");
    } else {
      html.classList.remove("reduce-motion");
    }
    if (highContrast) {
      html.classList.add("high-contrast");
    } else {
      html.classList.remove("high-contrast");
    }
  }, [reducedMotion, highContrast]);

  return (
    <AccessibilityContext.Provider
      value={{ reducedMotion, highContrast, setReducedMotion, setHighContrast }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

// ✅ Composant de contrôle
export const AccessibilityControls = () => {
  const { reducedMotion, highContrast, setReducedMotion, setHighContrast } =
    useAccessibility();

  return (
    <div className="accessibility-controls fixed bottom-4 right-4 bg-card border border-border rounded-lg p-4 shadow-lg z-50">
      <h3 className="text-sm font-medium mb-3">Accessibilité</h3>

      <div className="space-y-2">
        <label
          className="flex items-center gap-2 text-sm"
          aria-label="Réduire les animations"
        >
          <input
            type="checkbox"
            checked={reducedMotion}
            onChange={(e) => setReducedMotion(e.target.checked)}
            className="w-4 h-4"
          />
          Réduire les animations
        </label>

        <label
          className="flex items-center gap-2 text-sm"
          aria-label="Activer contraste élevé"
        >
          <input
            type="checkbox"
            checked={highContrast}
            onChange={(e) => setHighContrast(e.target.checked)}
            className="w-4 h-4"
          />
          Contraste élevé
        </label>
      </div>
    </div>
  );
};

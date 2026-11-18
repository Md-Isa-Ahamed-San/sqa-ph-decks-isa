"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export type PresentationTheme =
  | "ph-royal-purple"
  | "ph-neon-violet"
  | "ph-brand"
  | "cyber-cyan"
  | "sunset-amber";

export interface ThemeOption {
  id: PresentationTheme;
  name: string;
  accent: string;
  bg: string;
  qc: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "ph-royal-purple",
    name: "PH Royal Purple (Default)",
    accent: "#A78BFA",
    bg: "#0E0920",
    qc: "#67E8F9",
  },
  {
    id: "ph-neon-violet",
    name: "PH Neon Violet",
    accent: "#B07CFF",
    bg: "#0D0A1A",
    qc: "#22D3EE",
  },
  {
    id: "ph-brand",
    name: "PH Brand Faithful",
    accent: "#7E2CC2",
    bg: "#0E0122",
    qc: "#5056E5",
  },
  {
    id: "cyber-cyan",
    name: "Cyber Cyan",
    accent: "#00F0FF",
    bg: "#080C14",
    qc: "#38BDF8",
  },
  {
    id: "sunset-amber",
    name: "Sunset Amber",
    accent: "#F59E0B",
    bg: "#131215",
    qc: "#FB923C",
  },
];

interface ThemeContextValue {
  theme: PresentationTheme;
  setTheme: (theme: PresentationTheme) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  toggleModal: () => void;
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "ph-royal-purple",
  setTheme: () => {},
  isModalOpen: false,
  openModal: () => {},
  closeModal: () => {},
  toggleModal: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const searchParams = useSearchParams();
  const themeParam = searchParams.get("theme") as PresentationTheme | null;

  const [theme, setThemeState] = useState<PresentationTheme>("ph-royal-purple");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("qa-deck-theme") as PresentationTheme | null;
    const initial = themeParam ?? saved ?? "ph-royal-purple";
    setThemeState(initial);
    document.documentElement.setAttribute("data-theme", initial);
  }, [themeParam]);

  const setTheme = (newTheme: PresentationTheme) => {
    setThemeState(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("qa-deck-theme", newTheme);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const toggleModal = () => setIsModalOpen((prev) => !prev);

  // Global keydown listener for 'T' / 'Escape'
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key === "t" || e.key === "T") {
        e.preventDefault();
        toggleModal();
      } else if (e.key === "Escape") {
        closeModal();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        isModalOpen,
        openModal,
        closeModal,
        toggleModal,
      }}
    >
      {children}

      {/* Theme Picker Modal */}
      {isModalOpen && (
        <div
          className="theme-modal-backdrop open"
          onClick={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div className="theme-modal">
            <div className="theme-modal-title">
              <span>Choose Theme</span>
              <button
                onClick={closeModal}
                style={{
                  background: "none",
                  border: "none",
                  color: "var(--cream-dim)",
                  fontSize: "20px",
                  cursor: "pointer",
                }}
              >
                ✕
              </button>
            </div>
            <div className="theme-modal-sub">Press 'T' anytime to switch themes</div>

            <div className="theme-list">
              {THEME_OPTIONS.map((opt) => {
                const isActive = opt.id === theme;

                return (
                  <div
                    key={opt.id}
                    className={`theme-option ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setTheme(opt.id);
                      closeModal();
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <span
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: opt.accent,
                          display: "inline-block",
                          boxShadow: `0 0 10px ${opt.accent}`,
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "var(--font-display)",
                          fontWeight: 600,
                          fontSize: "15px",
                          color: isActive ? "var(--accent)" : "var(--cream)",
                        }}
                      >
                        {opt.name}
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "3px",
                          background: opt.bg,
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      />
                      <span
                        style={{
                          width: "12px",
                          height: "12px",
                          borderRadius: "3px",
                          background: opt.qc,
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

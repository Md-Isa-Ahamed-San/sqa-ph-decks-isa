"use client";

import React, { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Home,
  MessageSquare,
  Palette,
  Hash,
} from "lucide-react";
import type { Deck } from "~/lib/types";
import { getSlideStepCount } from "~/lib/types";
import { DeckStage } from "../stage/DeckStage";
import { StepProvider } from "./StepContext";
import { SlideRenderer } from "./SlideRenderer";
import { ThemeProvider, useTheme } from "./ThemeContext";

interface DeckViewerProps {
  deck: Deck;
}

export function DeckViewer({ deck }: DeckViewerProps) {
  return (
    <ThemeProvider>
      <DeckViewerContent deck={deck} />
    </ThemeProvider>
  );
}

function DeckViewerContent({ deck }: { deck: Deck }) {
  const searchParams = useSearchParams();
  const { toggleModal: toggleThemeModal, theme } = useTheme();

  // Read URL query params
  const initialSlideParam = searchParams.get("slide");
  const isExportParam = searchParams.get("export") === "true";

  const totalSlides = deck.slides.length;

  // 0-based slide index
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(() => {
    if (initialSlideParam) {
      const parsed = parseInt(initialSlideParam, 10);
      if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
        return parsed - 1;
      }
    }
    return 0;
  });

  const currentSlide = deck.slides[currentSlideIndex];
  const totalSteps = currentSlide ? getSlideStepCount(currentSlide) : 0;
  const slideInitialStep = currentSlide?.initialStep ?? (totalSteps > 0 ? 1 : 0);

  // Current step for step-reveal within slide
  const [currentStep, setCurrentStep] = useState<number>(() => {
    const s = deck.slides[currentSlideIndex];
    if (!s) return 0;
    const steps = getSlideStepCount(s);
    return s.initialStep ?? (steps > 0 ? 1 : 0);
  });

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [showNotes, setShowNotes] = useState<boolean>(false);
  const [showJumpModal, setShowJumpModal] = useState<boolean>(false);
  const [jumpInputValue, setJumpInputValue] = useState<string>("");
  const [isControlsVisible, setIsControlsVisible] = useState<boolean>(true);
  const hideTimerRef = React.useRef<NodeJS.Timeout | null>(null);

  // Auto-hide nav pill and counter after ~2s without mouse movement
  useEffect(() => {
    function onMouseMove() {
      setIsControlsVisible(true);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
      hideTimerRef.current = setTimeout(() => {
        setIsControlsVisible(false);
      }, 2000);
    }

    window.addEventListener("mousemove", onMouseMove);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Sync slide change to URL (?slide=N)
  const syncUrl = useCallback((slideIdx: number) => {
    const slideNum = slideIdx + 1;
    const url = new URL(window.location.href);
    url.searchParams.set("slide", String(slideNum));
    window.history.replaceState({}, "", url.toString());
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement);
    }
    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  const toggleFullscreen = useCallback(async () => {
    if (!document.fullscreenElement) {
      try {
        await document.documentElement.requestFullscreen();
      } catch (err) {
        console.error("Failed to enter fullscreen:", err);
      }
    } else {
      try {
        await document.exitFullscreen();
      } catch (err) {
        console.error("Failed to exit fullscreen:", err);
      }
    }
  }, []);

  // Jump to specific slide (0-based)
  const goToSlide = useCallback(
    (slideIdx: number) => {
      const clamped = Math.max(0, Math.min(slideIdx, totalSlides - 1));
      const targetSlide = deck.slides[clamped];
      const steps = targetSlide ? getSlideStepCount(targetSlide) : 0;
      const initial = targetSlide?.initialStep ?? (steps > 0 ? 1 : 0);

      setCurrentSlideIndex(clamped);
      setCurrentStep(initial);
      syncUrl(clamped);
    },
    [totalSlides, deck.slides, syncUrl]
  );

  // Navigate forward (Step first, then Slide)
  const next = useCallback(() => {
    if (isExportParam) {
      if (currentSlideIndex < totalSlides - 1) {
        const nextIdx = currentSlideIndex + 1;
        goToSlide(nextIdx);
      }
      return;
    }

    if (currentStep < totalSteps) {
      setCurrentStep((prev) => prev + 1);
    } else if (currentSlideIndex < totalSlides - 1) {
      goToSlide(currentSlideIndex + 1);
    }
  }, [
    currentSlideIndex,
    currentStep,
    totalSteps,
    totalSlides,
    isExportParam,
    goToSlide,
  ]);

  // Navigate backward
  const prev = useCallback(() => {
    if (isExportParam) {
      if (currentSlideIndex > 0) {
        goToSlide(currentSlideIndex - 1);
      }
      return;
    }

    const minStep = currentSlide?.initialStep ?? 0;
    if (currentStep > minStep) {
      setCurrentStep((prev) => prev - 1);
    } else if (currentSlideIndex > 0) {
      const prevIdx = currentSlideIndex - 1;
      const prevSlide = deck.slides[prevIdx];
      const prevSteps = prevSlide ? getSlideStepCount(prevSlide) : 0;
      setCurrentSlideIndex(prevIdx);
      setCurrentStep(prevSteps);
      syncUrl(prevIdx);
    }
  }, [
    currentSlideIndex,
    currentStep,
    currentSlide,
    deck.slides,
    isExportParam,
    goToSlide,
    syncUrl,
  ]);

  // Keyboard navigation
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      // Ignore key events when typing in inputs
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case " ":
        case "ArrowDown":
          e.preventDefault();
          next();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prev();
          break;
        case "PageDown":
          e.preventDefault();
          if (currentSlideIndex < totalSlides - 1) {
            goToSlide(currentSlideIndex + 1);
          }
          break;
        case "PageUp":
          e.preventDefault();
          if (currentSlideIndex > 0) {
            goToSlide(currentSlideIndex - 1);
          }
          break;
        case "Home":
          e.preventDefault();
          goToSlide(0);
          break;
        case "End":
          e.preventDefault();
          goToSlide(totalSlides - 1);
          break;
        case "f":
        case "F":
          e.preventDefault();
          void toggleFullscreen();
          break;
        case "n":
        case "N":
          e.preventDefault();
          setShowNotes((v) => !v);
          break;
        case "g":
        case "G":
          e.preventDefault();
          setJumpInputValue(String(currentSlideIndex + 1));
          setShowJumpModal(true);
          break;
        default:
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    next,
    prev,
    goToSlide,
    toggleFullscreen,
    currentSlideIndex,
    totalSlides,
  ]);

  const handleJumpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = parseInt(jumpInputValue, 10);
    if (!isNaN(parsed) && parsed >= 1 && parsed <= totalSlides) {
      goToSlide(parsed - 1);
      setShowJumpModal(false);
    }
  };

    const stepFraction = totalSteps > 0 ? currentStep / totalSteps : 0;
    const progressPercent = Math.min(
      100,
      Math.max(0, ((currentSlideIndex + stepFraction) / totalSlides) * 100)
    );

    return (
    <StepProvider
      currentStep={currentStep}
      totalSteps={totalSteps}
      isExport={isExportParam}
    >
      <DeckStage isFullscreen={isFullscreen} isIdle={!isControlsVisible}>
        {/* Render all slides - NEVER display: none. Switching via opacity / visibility / pointer-events */}
        {deck.slides.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          const slideSteps = getSlideStepCount(slide);
          const slideId = slide.id ?? `slide-${index + 1}`;
          const initial = slide.initialStep ?? (slideSteps > 0 ? 1 : 0);
          const effectiveStep = isActive
            ? isExportParam
              ? slideSteps
              : currentStep
            : initial;

          return (
            <section
              key={index}
              id={slideId}
              className={`slide ${isActive ? "active visible anim-active" : ""}`}
              data-notes={slide.notes}
              data-slide-index={index + 1}
              data-steps={slideSteps > 0 ? slideSteps : undefined}
              data-step={effectiveStep}
              data-initial-step={slide.initialStep}
            >
              <SlideRenderer
                slide={slide}
                slideIndex={index}
                totalSlides={totalSlides}
                module={deck.meta.module}
                videoNo={deck.meta.videoNo}
              />
            </section>
          );
        })}
      </DeckStage>

      {/* Floating UI Chrome (hidden during recording mode / fullscreen, auto-hide on idle) */}
      <nav
        onMouseEnter={() => {
          setIsControlsVisible(true);
          if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
        }}
        className={`deck-ui-chrome fixed bottom-6 left-1/2 z-50 flex -translate-x-1/2 items-center gap-3 rounded-full border border-card-border bg-stage-bg/90 px-5 py-2.5 shadow-2xl backdrop-blur-xl transition-all duration-300 ${
          isControlsVisible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-3 pointer-events-none"
        }`}
      >
        <Link
          href="/"
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          title="Home - Deck Library"
        >
          <Home className="h-4 w-4" />
        </Link>

        <div className="h-4 w-px bg-white/15" />

        <button
          onClick={prev}
          disabled={
            currentSlideIndex === 0 &&
            currentStep <= (currentSlide?.initialStep ?? 0)
          }
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Previous Step / Slide (← / ↑)"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          onClick={() => {
            setJumpInputValue(String(currentSlideIndex + 1));
            setShowJumpModal(true);
          }}
          className="flex items-center gap-2 rounded-full px-2 py-1 font-mono text-sm font-semibold text-slate-200 hover:bg-white/10 transition-colors"
          title="Jump to Slide (G)"
        >
          <span>{String(currentSlideIndex + 1).padStart(2, "0")}</span>
          <span className="text-white/30">/</span>
          <span className="text-white/60">
            {String(totalSlides).padStart(2, "0")}
          </span>

          {totalSteps > 0 && !isExportParam && (
            <span className="ml-2 rounded bg-qa-cyan/15 px-2 py-0.5 text-xs font-bold text-qa-cyan">
              Step {currentStep}/{totalSteps}
            </span>
          )}
        </button>

        {/* Progress bar: fill width = (slideIndex + stepFraction) / total */}
        <div className="progress-track w-24 h-1.5 bg-white/10 rounded-full overflow-hidden shrink-0 mx-1">
          <div
            className="progress-fill h-full bg-qa-cyan rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <button
          onClick={next}
          disabled={
            currentSlideIndex === totalSlides - 1 && currentStep >= totalSteps
          }
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-300 hover:bg-white/10 hover:text-white disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          title="Next Step / Slide (→ / Space / ↓)"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <div className="h-4 w-px bg-white/15" />

        {/* Theme Picker Button */}
        <button
          onClick={toggleThemeModal}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          title="Switch Theme (T)"
        >
          <Palette className="h-4 w-4" />
        </button>

        {/* Jump Button */}
        <button
          onClick={() => {
            setJumpInputValue(String(currentSlideIndex + 1));
            setShowJumpModal(true);
          }}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          title="Jump to Slide (G)"
        >
          <Hash className="h-4 w-4" />
        </button>

        {currentSlide?.notes && (
          <button
            onClick={() => setShowNotes((v) => !v)}
            className={`flex h-9 w-9 items-center justify-center rounded-full transition-colors ${
              showNotes
                ? "bg-ph-purple text-white"
                : "text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
            title="Speaker Notes (N)"
          >
            <MessageSquare className="h-4 w-4" />
          </button>
        )}

        <button
          onClick={toggleFullscreen}
          className="flex h-9 w-9 items-center justify-center rounded-full text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
          title="Toggle Fullscreen Recording Mode (F)"
        >
          {isFullscreen ? (
            <Minimize2 className="h-4 w-4" />
          ) : (
            <Maximize2 className="h-4 w-4" />
          )}
        </button>
      </nav>

      {/* Slide Jump Modal */}
      {showJumpModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShowJumpModal(false);
          }}
        >
          <form
            onSubmit={handleJumpSubmit}
            className="w-full max-w-sm rounded-2xl border border-white/15 bg-stage-bg p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between pb-3">
              <h3 className="font-display font-bold text-white text-base">
                Jump to Slide
              </h3>
              <button
                type="button"
                onClick={() => setShowJumpModal(false)}
                className="text-slate-400 hover:text-white text-lg"
              >
                ✕
              </button>
            </div>
            <p className="text-xs text-slate-400 mb-4">
              Enter slide number (1 to {totalSlides}) and press Enter.
            </p>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min={1}
                max={totalSlides}
                value={jumpInputValue}
                onChange={(e) => setJumpInputValue(e.target.value)}
                autoFocus
                className="w-full rounded-lg border border-white/20 bg-black/40 px-3 py-2 font-mono text-lg text-white focus:border-qa-cyan focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-lg bg-qa-cyan/20 px-4 py-2 font-display font-semibold text-qa-cyan hover:bg-qa-cyan/30 transition-colors"
              >
                Go
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Speaker Notes Overlay Drawer */}
      {showNotes && currentSlide?.notes && (
        <aside className="fixed bottom-24 right-8 z-50 max-w-md rounded-2xl border border-ph-purple/40 bg-stage-bg/95 p-6 shadow-2xl backdrop-blur-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <span className="font-mono text-xs font-bold tracking-widest text-qa-cyan uppercase">
              SPEAKER NOTES &bull; SLIDE {currentSlideIndex + 1}
            </span>
            <button
              onClick={() => setShowNotes(false)}
              className="text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-slate-200">
            {currentSlide.notes}
          </p>
        </aside>
      )}
    </StepProvider>
  );
}

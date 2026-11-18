import { deckMetas } from "~/decks";
import { DeckSearchList } from "~/components/ui/DeckSearchList";
import { Layers, Monitor, Sparkles } from "lucide-react";

export const metadata = {
  title: "SQA Slide Hub — Programming Hero",
  description:
    "Interactive 16:9 presentation engine for the SQA Course by Programming Hero",
};

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#090615] text-[#EDE9FE] antialiased">
      {/* Subtle Ambient Background Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />

      {/* Gentle Monochromatic Top Glow */}
      <div
        className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 z-0 h-[480px] w-[720px] rounded-full blur-[140px] opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, rgba(124, 58, 237, 0.15) 50%, transparent 80%)",
        }}
      />

      {/* Clean Brand Navigation Bar */}
      <nav className="relative z-10 border-b border-white/[0.08] bg-[#0C081E]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <img
              src="/ph-logo-svg/Main-White.svg"
              alt="Programming Hero"
              className="h-8 w-auto"
            />
            <div className="hidden sm:block h-5 w-px bg-white/10" />
            <span className="hidden sm:inline-block font-mono text-xs tracking-wide text-violet-300/80">
              SQA Foundations · Presentation Engine
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              2 Decks Live
            </span>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-12 pb-24">
        {/* Editorial Hero Header */}
        <header className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1 font-mono text-xs font-medium text-violet-300 mb-5">
            Course Deck Hub
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            SQA Slide <span className="text-violet-400">Presentations</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base font-normal text-slate-400 sm:text-lg leading-relaxed">
            High-fidelity 16:9 keynote presentations with 60fps animations, speaker-driven step reveals, and dual-pipeline offline HTML export.
          </p>

          {/* Clean Specs Row */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono">
              <Monitor className="h-3.5 w-3.5 text-violet-400" />
              1920×1080 Stage
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono">
              <Sparkles className="h-3.5 w-3.5 text-violet-400" />
              Bilingual (English + Bengali)
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 font-mono">
              <Layers className="h-3.5 w-3.5 text-violet-400" />
              Dual Pipeline (Web &amp; Offline)
            </span>
          </div>
        </header>

        {/* Deck Search and Presentation Cards */}
        <DeckSearchList decks={deckMetas} />
      </div>
    </main>
  );
}

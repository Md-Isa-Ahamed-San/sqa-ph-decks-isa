"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  Search,
  ArrowUpRight,
  Layers,
  Sparkles,
  Command,
  Monitor,
} from "lucide-react";
import type { DeckMeta } from "~/lib/types";

interface DeckSearchListProps {
  decks: DeckMeta[];
}

export function DeckSearchList({ decks }: DeckSearchListProps) {
  const [query, setQuery] = useState("");

  const filteredDecks = useMemo(() => {
    if (!query.trim()) return decks;
    const q = query.toLowerCase().trim();
    return decks.filter((d) => {
      return (
        d.title.toLowerCase().includes(q) ||
        d.titleBn.toLowerCase().includes(q) ||
        d.tags.some((t) => t.toLowerCase().includes(q)) ||
        d.slug.toLowerCase().includes(q) ||
        String(d.videoNo).includes(q)
      );
    });
  }, [decks, query]);

  const slideCountMap: Record<string, number> = {
    "01_start_your_qa_career": 15,
    "02_requirements_to_test_design": 12,
  };

  return (
    <div className="flex flex-col gap-10">
      {/* Search Input Bar */}
      <div className="mx-auto w-full max-w-2xl">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Filter decks by topic, Bengali title, tag, or video number..."
            className="w-full rounded-xl border border-white/[0.1] bg-[#120D26]/60 py-3.5 pl-11 pr-24 text-sm font-medium text-white placeholder-slate-400 backdrop-blur-md transition-all focus:border-violet-500/50 focus:bg-[#150F2F] focus:outline-none focus:ring-1 focus:ring-violet-500/40"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md bg-white/10 px-2.5 py-1 font-mono text-xs font-medium text-slate-300 hover:bg-white/15 hover:text-white transition-colors"
            >
              Clear
            </button>
          ) : (
            <span className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded border border-white/[0.08] bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-slate-400">
              {decks.length} Decks
            </span>
          )}
        </div>
      </div>

      {/* Presentation Cards Grid */}
      {filteredDecks.length === 0 ? (
        <div className="rounded-2xl border border-white/[0.08] bg-[#120D26]/50 p-12 text-center backdrop-blur-sm">
          <p className="text-lg font-semibold text-white">
            No presentation decks match &ldquo;{query}&rdquo;
          </p>
          <p className="bangla text-sm text-slate-400 mt-1.5">
            অন্য কোনো কিওয়ার্ড দিয়ে সার্চ করুন অথবা ফিল্টার রিসেট করুন
          </p>
          <button
            onClick={() => setQuery("")}
            className="mt-5 inline-flex items-center gap-2 rounded-lg border border-violet-500/30 bg-violet-500/15 px-4 py-2 font-mono text-xs font-semibold text-violet-300 hover:bg-violet-500/25 transition-colors"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredDecks.map((deck) => {
            const slideCount = slideCountMap[deck.slug] ?? 12;

            return (
              <div
                key={deck.slug}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#120D28]/70 p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:bg-[#161033]/90 hover:shadow-xl"
              >
                <div>
                  {/* Card Header: Module Pill & Status Badge */}
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.04] px-2.5 py-1 font-mono text-xs font-semibold tracking-wider text-violet-300 uppercase">
                      Module {String(deck.module).padStart(2, "0")} · Video {String(deck.videoNo).padStart(2, "0")}
                    </span>

                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-0.5 font-mono text-xs font-medium text-emerald-300">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Ready to Present
                    </span>
                  </div>

                  {/* Card Title & Bengali Subtitle */}
                  <h2 className="font-display mt-5 text-2xl font-bold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                    {deck.title}
                  </h2>

                  <p className="bangla mt-1.5 text-base font-semibold text-violet-300/80">
                    {deck.titleBn}
                  </p>

                  {/* Description */}
                  {deck.description && (
                    <p className="mt-3.5 text-sm leading-relaxed text-slate-300/80">
                      {deck.description}
                    </p>
                  )}
                </div>

                {/* Bottom Section: Metadata, Tags & Action */}
                <div className="mt-7 border-t border-white/[0.06] pt-5">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {deck.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-white/[0.06] bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-slate-300"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Specs & Launch Button */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
                      <span className="flex items-center gap-1">
                        <Layers className="h-3.5 w-3.5 text-violet-400" />
                        {slideCount} Slides
                      </span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Monitor className="h-3.5 w-3.5 text-violet-400" />
                        1080p
                      </span>
                    </div>

                    <Link
                      href={`/deck/${deck.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-xl bg-violet-600 px-4 py-2 font-mono text-xs font-semibold text-white shadow-sm hover:bg-violet-500 active:scale-95 transition-all"
                    >
                      Open Deck
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Keyboard Controls Footer Bar */}
      <footer className="mt-4 rounded-xl border border-white/[0.08] bg-[#0E0A20]/80 p-5 backdrop-blur-sm">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-white/[0.06] text-violet-300 border border-white/[0.08]">
              <Command className="h-3.5 w-3.5" />
            </span>
            <span className="font-mono text-xs font-semibold text-slate-300 uppercase tracking-wider">
              Deck Navigation Shortcuts
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-slate-400">
            <span className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
              <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white">Space</kbd>
              /
              <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white">→</kbd>
              Next Step/Slide
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
              <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white">←</kbd>
              Prev Slide
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
              <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white">F</kbd>
              Fullscreen
            </span>
            <span className="flex items-center gap-1.5 rounded-md border border-white/[0.06] bg-white/[0.03] px-2.5 py-1">
              <kbd className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white">T</kbd>
              Themes
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

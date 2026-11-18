"use client";

import React from "react";
import type { ConceptSplitProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends ConceptSplitProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function ConceptSplit({
  eyebrow = "Core Concept",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  quote,
  cards = [],
  highlightBox,
  pageNum = "02 / 12",
  module = 2,
  videoNo = 2,
}: Props) {
  const { currentStep, isExport } = useStep();
  const isSlide2 = Boolean(highlightBox);
  const isSlide6 = cards.length === 3;
  const isSlide9 = cards.length === 5;

  // -------------------------------------------------------------
  // SLIDE 2: The High Cost of Vague Requirements
  // -------------------------------------------------------------
  if (isSlide2) {
    return (
      <SlideShell
        eyebrow={eyebrow}
        pageNum={pageNum}
        module={module}
        videoNo={videoNo}
        layout="split"
      >
        <div className="flex w-full items-center justify-between gap-20 min-h-0">
          {/* Left Column (x100-880, 780 wide) */}
          <div className="flex flex-col w-[780px] shrink-0 text-left">
            <h1 className="font-display text-[64px] leading-[1.05] font-extrabold tracking-[-0.01em] text-white">
              <div>The High Cost of</div>
              <div className="text-qa-cyan">Vague Requirements</div>
            </h1>

            <div className="mt-5 flex flex-col">
              {subtitle && (
                <p className="text-[28px] leading-[1.4] font-medium text-slate-200">
                  {subtitle}
                </p>
              )}
              {subtitleBn && (
                <p className="bangla text-[24px] font-medium text-slate-300 leading-[1.55] mt-1.5">
                  {subtitleBn}
                </p>
              )}
            </div>

            {highlightBox && (
              <div className="mt-8 box-border rounded-[20px] border border-red-500/30 bg-red-950/20 p-7 shadow-2xl backdrop-blur-xl">
                <span className="font-mono text-[16px] font-bold tracking-widest text-red-400 uppercase">
                  {highlightBox.title}
                </span>

                <div className="font-display mt-2 text-[120px] font-black leading-none tracking-tight bg-gradient-to-r from-red-500 to-amber-400 bg-clip-text text-transparent">
                  56%
                </div>

                <div className="font-mono mt-1 text-[18px] font-bold tracking-wider text-slate-200 uppercase">
                  OF BUGS START IN REQUIREMENTS
                </div>

                <p className="bangla text-[22px] font-medium text-slate-300 leading-[1.55] mt-3">
                  {highlightBox.textBn}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: two stacked cards */}
          <div className="flex-1 w-[860px] min-w-0 flex flex-col gap-6">
            {cards.map((card, index) => {
              const stepNum = index + 1;
              const isActive = !isExport && currentStep === stepNum;
              const isPast = !isExport && currentStep > stepNum;
              const isRed = card.color === "red" || index === 0;

              const cleanTitle = card.title.replace(/[❌✅]/g, "").trim();
              const statusIcon = isRed ? "❌" : "✅";
              const mainIcon = card.icon ?? (isRed ? "⚠️" : "🛡️");

              return (
                <div
                  key={index}
                  style={{
                    transition:
                      "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                  className={`w-full min-w-0 box-border rounded-[20px] border py-7 px-8 backdrop-blur-xl ${
                    isActive
                      ? isRed
                        ? "opacity-100 border-red-500 bg-red-950/40 shadow-[0_12px_36px_rgba(239,68,68,0.25)] -translate-y-1"
                        : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.25)] -translate-y-1"
                      : isPast
                      ? isRed
                        ? "opacity-100 border-red-500/30 bg-red-950/20 translate-y-0 shadow-none"
                        : "opacity-100 border-qa-cyan/30 bg-qa-cyan/10 translate-y-0 shadow-none"
                      : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[32px] shrink-0 leading-none">
                        {mainIcon}
                      </span>
                      <h3
                        className={`font-display text-[36px] leading-[1.15] font-extrabold tracking-[-0.01em] whitespace-nowrap truncate ${
                          isRed ? "text-red-400" : "text-qa-cyan"
                        }`}
                      >
                        {cleanTitle}
                      </h3>
                    </div>
                    <span className="text-[28px] shrink-0 leading-none">
                      {statusIcon}
                    </span>
                  </div>

                  {card.titleBn && (
                    <p className="bangla text-[22px] font-semibold text-slate-200 leading-[1.55] mt-1.5">
                      {card.titleBn}
                    </p>
                  )}

                  {card.points && card.points.length > 0 && (
                    <div className="mt-4 space-y-3.5">
                      {card.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex flex-col">
                          <div className="text-[22px] font-medium text-slate-100 leading-[1.35] tracking-[-0.01em]">
                            {pt.text}
                          </div>
                          {pt.textBn && (
                            <div className="bangla text-[18px] font-medium text-slate-300 leading-[1.55] mt-1.5">
                              {pt.textBn}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SlideShell>
    );
  }

  // -------------------------------------------------------------
  // SLIDE 6: Turning Stories into a Pass/Fail Checklist (3 AC cards)
  // -------------------------------------------------------------
  if (isSlide6) {
    return (
      <SlideShell
        eyebrow={eyebrow}
        pageNum={pageNum}
        module={module}
        videoNo={videoNo}
        layout="split"
      >
        {/* Split layout, zone y130-940, align-items:center. Left x100-740 (640), right x800-1820 (1020), gap 60 */}
        <div className="flex w-full items-center justify-between gap-[60px] min-h-0">
          {/* LEFT: 640px */}
          <div className="flex flex-col w-[640px] shrink-0 text-left">
            {/* Title 56/1.1, 2 lines, accent on "Pass/Fail Checklist" */}
            <h1 className="font-display text-[56px] leading-[1.1] font-extrabold tracking-[-0.01em] text-white">
              <div>Turning Stories into a</div>
              <div className="text-qa-cyan">Pass/Fail Checklist</div>
            </h1>

            {/* EN subtitle 26/1.4, BN subtitle 22/1.55, margin-top 20 */}
            <div className="mt-5 flex flex-col">
              {subtitle && (
                <p className="text-[26px] leading-[1.4] font-medium text-slate-200">
                  {subtitle}
                </p>
              )}
              {subtitleBn && (
                <p className="bangla text-[22px] font-medium text-slate-300 leading-[1.55] mt-1.5">
                  {subtitleBn}
                </p>
              )}
            </div>

            {/* Definition card, margin-top 28, padding 24: EN quote 24/1.4 semibold, BN 20/1.55, source label mono 14 with 16px above it */}
            {quote && (
              <div className="mt-7 box-border rounded-[20px] border border-qa-cyan/35 bg-qa-cyan/10 p-6 shadow-2xl backdrop-blur-xl">
                <p className="text-[24px] leading-[1.4] font-semibold text-white">
                  &ldquo;{quote.text}&rdquo;
                </p>
                {quote.textBn && (
                  <p className="bangla text-[20px] font-medium text-slate-300 leading-[1.55] mt-2">
                    {quote.textBn}
                  </p>
                )}
                {quote.author && (
                  <div className="mt-4 font-mono text-[14px] font-bold tracking-widest text-qa-cyan uppercase">
                    &mdash; {quote.author}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT: 3 stacked cards, gap 16, padding 24 28, width 100% (1020px). Total stack <= 780 */}
          <div className="flex-1 w-[1020px] min-w-0 flex flex-col gap-4">
            {cards.map((card, index) => {
              const stepNum = index + 1;
              const isActive = !isExport && currentStep === stepNum;
              const isPast = !isExport && currentStep > stepNum;
              const isAC03 = index === 2;
              const isAC02 = index === 1;

              return (
                <div
                  key={index}
                  style={{
                    transition:
                      "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                  className={`w-full min-w-0 box-border rounded-[20px] border py-6 px-7 backdrop-blur-xl ${
                    isActive
                      ? isAC03
                        ? "opacity-100 border-red-500 bg-red-950/40 shadow-[0_12px_36px_rgba(239,68,68,0.25)] -translate-y-1"
                        : isAC02
                        ? "opacity-100 border-amber-400 bg-amber-950/30 shadow-[0_12px_36px_rgba(245,158,11,0.22)] -translate-y-1"
                        : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                      : isPast
                      ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                      : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
                  }`}
                >
                  {/* Header: icon 32 + title 32/1.2, BN subtitle 20 */}
                  <div className="flex items-center gap-3">
                    {card.icon && (
                      <span className="text-[32px] shrink-0 leading-none">
                        {card.icon}
                      </span>
                    )}
                    <div className="flex items-baseline gap-3 min-w-0">
                      <h3
                        className={`font-display text-[32px] leading-[1.2] font-extrabold whitespace-nowrap truncate ${
                          isActive
                            ? isAC03
                              ? "text-red-400"
                              : isAC02
                              ? "text-amber-300"
                              : "text-qa-cyan"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>
                      {card.titleBn && (
                        <span className="bangla text-[20px] font-medium text-slate-300 leading-[1.5] truncate">
                          {card.titleBn}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* 2 EN+BN pairs per card; inner width ~960 so every EN line fits on one line */}
                  {card.points && card.points.length > 0 && (
                    <div className="mt-3.5 space-y-3">
                      {card.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex flex-col">
                          <div className="text-[20px] leading-[1.4] text-slate-100 font-medium whitespace-nowrap truncate">
                            {pt.text}
                          </div>
                          {pt.textBn && (
                            <div className="bangla text-[18px] text-slate-300 leading-[1.5] mt-0.5">
                              {pt.textBn}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SlideShell>
    );
  }

  // -------------------------------------------------------------
  // SLIDE 9: Unpacking One Scenario into 5 Test Cases (5 TC cards)
  // -------------------------------------------------------------
  if (isSlide9) {
    return (
      <SlideShell
        eyebrow={eyebrow}
        pageNum={pageNum}
        module={module}
        videoNo={videoNo}
        layout="split"
      >
        {/* Split layout, zone y130-940, align-items:center. Left x100-620 (520), right grid x676-1820 (1144), gap 56 */}
        <div className="flex w-full items-center justify-between gap-14 min-h-0">
          {/* LEFT: 520px */}
          <div className="flex flex-col w-[520px] shrink-0 text-left">
            {/* Title 48/1.1, 3 lines: "Unpacking One / Scenario into / 5 Test Cases", accent on line 3 */}
            <h1 className="font-display text-[48px] leading-[1.1] font-extrabold tracking-[-0.01em] text-white">
              <div>Unpacking One</div>
              <div>Scenario into</div>
              <div className="text-qa-cyan">5 Test Cases</div>
            </h1>

            {/* "Parent Scenario" EN 24/1.4, BN 20/1.55, margin-top 20 */}
            <div className="mt-5 flex flex-col">
              {subtitle && (
                <p className="text-[24px] leading-[1.4] font-medium text-slate-200">
                  {subtitle}
                </p>
              )}
              {subtitleBn && (
                <p className="bangla text-[20px] font-medium text-slate-300 leading-[1.55] mt-1">
                  {subtitleBn}
                </p>
              )}
            </div>

            {/* Scenario card, margin-top 24, padding 20: EN 22 semibold, BN 18, mono label "SCENARIO ID: TS_AUTH_01" 14 with 14px above it */}
            {quote && (
              <div className="mt-6 box-border rounded-[20px] border border-qa-cyan/35 bg-qa-cyan/10 p-5 shadow-2xl backdrop-blur-xl">
                <p className="text-[22px] leading-[1.4] font-semibold text-white">
                  &ldquo;{quote.text}&rdquo;
                </p>
                {quote.textBn && (
                  <p className="bangla text-[18px] font-medium text-slate-300 leading-[1.55] mt-1.5">
                    {quote.textBn}
                  </p>
                )}
                <div className="mt-3.5 font-mono text-[14px] font-bold tracking-wider text-qa-cyan uppercase">
                  SCENARIO ID: TS_AUTH_01
                </div>
              </div>
            )}
          </div>

          {/* RIGHT GRID: 2 columns x 560, gap 16. Total grid height <= 800 */}
          <div className="flex-1 w-[1144px] min-w-0 grid grid-cols-2 gap-4 items-stretch">
            {cards.map((card, index) => {
              const stepNum = index + 1;
              const isActive = !isExport && currentStep === stepNum;
              const isPast = !isExport && currentStep > stepNum;
              const isTC05 = index === 4;
              const isRed = card.color === "red";
              const isAmber = card.color === "amber";
              const isPurple = card.color === "purple";

              return (
                <div
                  key={index}
                  style={{
                    transition:
                      "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  }}
                  className={`box-border rounded-[18px] border py-5 px-[22px] backdrop-blur-xl flex flex-col justify-between ${
                    isTC05 ? "col-span-2" : ""
                  } ${
                    isActive
                      ? isRed
                        ? "opacity-100 border-red-500 bg-red-950/40 shadow-[0_12px_36px_rgba(239,68,68,0.25)] -translate-y-1"
                        : isAmber
                        ? "opacity-100 border-amber-400 bg-amber-950/30 shadow-[0_12px_36px_rgba(245,158,11,0.22)] -translate-y-1"
                        : isPurple
                        ? "opacity-100 border-ph-purple bg-ph-purple/20 shadow-[0_12px_36px_rgba(167,139,250,0.22)] -translate-y-1"
                        : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                      : isPast
                      ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                      : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-2 shadow-none pointer-events-none"
                  }`}
                >
                  {/* Top section: Title 24/1.2 one line, BN subtitle 18 */}
                  <div>
                    <div className="flex items-center gap-2.5">
                      {card.icon && (
                        <span className="text-[22px] shrink-0 font-bold">
                          {card.icon}
                        </span>
                      )}
                      <h3
                        className={`font-display text-[24px] leading-[1.2] font-extrabold whitespace-nowrap truncate ${
                          isActive
                            ? isRed
                              ? "text-red-400"
                              : isAmber
                              ? "text-amber-300"
                              : isPurple
                              ? "text-purple-300"
                              : "text-qa-cyan"
                            : "text-white"
                        }`}
                      >
                        {card.title}
                      </h3>
                    </div>

                    {card.titleBn && (
                      <p className="bangla text-[18px] font-semibold text-slate-200 leading-[1.5] mt-1 truncate">
                        {card.titleBn}
                      </p>
                    )}
                  </div>

                  {/* 2 EN+BN pairs ("Input", "Expected"). Hard floor EN 19 / BN 16 */}
                  {card.points && card.points.length > 0 && (
                    <div
                      className={`mt-2.5 ${
                        isTC05
                          ? "grid grid-cols-2 gap-4"
                          : "space-y-2"
                      }`}
                    >
                      {card.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex flex-col">
                          <div className="text-[19px] leading-[1.35] text-slate-100 font-medium">
                            {pt.text}
                          </div>
                          {pt.textBn && (
                            <div className="bangla text-[16px] text-slate-300 leading-[1.5] mt-0.5">
                              {pt.textBn}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </SlideShell>
    );
  }

  // Fallback
  return null;
}

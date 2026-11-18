"use client";

import React from "react";
import type { HeroTitleProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends HeroTitleProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function HeroTitle({
  eyebrow = "Module 02 • From Requirements to Test Design",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  agendaItems = [],
  pageNum = "01 / 12",
  module = 2,
  videoNo = 2,
}: Props) {
  const { currentStep, isExport } = useStep();

  return (
    <SlideShell
      eyebrow={eyebrow}
      pageNum={pageNum}
      module={module}
      videoNo={videoNo}
      layout="split"
    >
      {/* Safe body zone y130-940, Two columns on horizontal axis y~535, left x100-1000, right x1120-1820 (700 wide), gap >=120 */}
      <div className="flex w-full items-center justify-between gap-[120px] min-h-0">
        {/* Left Column (x100-1000, 900px wide, stacked, left-aligned) */}
        <div className="flex flex-col w-[900px] shrink-0 text-left">
          {/* Title 96px/1.02, two lines, margin-bottom 32 */}
          <h1 className="font-display text-[96px] leading-[1.02] font-extrabold tracking-[-0.01em] text-white mb-8">
            <div>From Requirements</div>
            <div className="bg-gradient-to-r from-cyan-400 via-teal-300 to-fuchsia-400 bg-clip-text text-transparent">
              to Test Cases
            </div>
          </h1>

          {/* EN subtitle 32px/1.4, max 2 lines, max-width 820, margin-bottom 12 */}
          {subtitle && (
            <p className="text-[32px] leading-[1.4] font-medium text-slate-200 max-w-[820px] mb-3">
              {subtitle}
            </p>
          )}

          {/* BN subtitle 28px/1.55, max-width 880, up to 2 lines */}
          {subtitleBn && (
            <p className="bangla text-[28px] font-medium text-slate-300 leading-[1.55] max-w-[880px]">
              {subtitleBn}
            </p>
          )}
        </div>

        {/* Right Column (x1120-1820, 700 wide, 3 cards, padding 24 32, gap 24) */}
        <div className="w-[700px] shrink-0 flex flex-col gap-6">
          {agendaItems.map((item, index) => {
            const stepNum = index + 1;
            const isActive = !isExport && currentStep === stepNum;
            const isPast = !isExport && currentStep > stepNum;

            const isCyan = item.color === "cyan" || index === 0;
            const isPurple = item.color === "purple" || index === 1;

            return (
              <div
                key={index}
                style={{
                  transition:
                    "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                className={`w-[700px] box-border rounded-[20px] border px-8 py-6 backdrop-blur-xl ${
                  isActive
                    ? isCyan
                      ? "opacity-100 border-qa-cyan bg-qa-cyan/10 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                      : isPurple
                      ? "opacity-100 border-ph-purple bg-ph-purple/10 shadow-[0_12px_36px_rgba(167,139,250,0.22)] -translate-y-1"
                      : "opacity-100 border-amber-400 bg-amber-950/30 shadow-[0_12px_36px_rgba(245,158,11,0.22)] -translate-y-1"
                    : isPast
                    ? "opacity-100 border-white/15 bg-[#140E2A]/90 translate-y-0 shadow-none"
                    : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
                }`}
              >
                {/* Row: 56px number-badge circle, 20px gap, text column */}
                <div className="flex items-center gap-5 w-full">
                  <div
                    className={`h-[56px] w-[56px] shrink-0 rounded-full flex items-center justify-center font-display text-[26px] font-black border ${
                      isActive || isPast
                        ? isCyan
                          ? "border-qa-cyan/50 bg-qa-cyan/20 text-qa-cyan"
                          : isPurple
                          ? "border-ph-purple/50 bg-ph-purple/20 text-purple-200"
                          : "border-amber-400/50 bg-amber-950/50 text-amber-300"
                        : "border-white/15 bg-white/5 text-slate-400"
                    }`}
                  >
                    {stepNum}
                  </div>

                  <div className="flex flex-col min-w-0 flex-1">
                    {/* Title 28px/1.2, must stay on ONE line */}
                    <h3 className="font-display text-[28px] leading-[1.2] font-bold tracking-[-0.01em] text-white whitespace-nowrap truncate">
                      {item.title}
                    </h3>
                    {/* BN subtitle 22px/1.55, 4px below */}
                    {item.titleBn && (
                      <p className="bangla text-[22px] font-medium text-slate-200 leading-[1.55] mt-1 whitespace-nowrap truncate">
                        {item.titleBn}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

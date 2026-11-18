"use client";

import React from "react";
import type { RecapGridProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends RecapGridProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function RecapGrid({
  eyebrow = "Key Takeaways",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  cards = [],
  pageNum = "12 / 12",
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
      layout="standard"
      title={title}
      titleHighlight={titleHighlight}
      subtitle={subtitle}
      subtitleBn={subtitleBn}
    >
      {/* Header slide, zone y260-940. grid 4 x 409 (x100-1820), gap 28, cards stretch to equal height (~480), block centered */}
      <div className="flex flex-col w-full justify-center">
        <div className="grid grid-cols-4 gap-7 items-stretch w-full">
          {cards.map((card, index) => {
            const stepNum = index + 1;
            const isActive = !isExport && currentStep === stepNum;
            const isPast = !isExport && currentStep > stepNum;
            const isRule4 = index === 3;

            return (
              <div
                key={index}
                style={{
                  transition:
                    "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                className={`h-[480px] flex flex-col justify-between rounded-[20px] border p-7 backdrop-blur-xl box-border ${
                  isActive
                    ? isRule4
                      ? "opacity-100 border-emerald-400 bg-emerald-950/30 shadow-[0_12px_36px_rgba(16,185,129,0.25)] -translate-y-1"
                      : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                    : isPast
                    ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                    : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
                }`}
              >
                {/* Upper block */}
                <div className="flex flex-col">
                  {/* 1. Top row: emoji icon 48px left, tag pill right inside padding */}
                  <div className="flex items-center justify-between">
                    <span className="text-[48px] leading-none shrink-0">
                      {card.icon ?? "💡"}
                    </span>
                    {card.tag && (
                      <span className="rounded-full border border-ph-purple/40 bg-ph-purple/20 px-3.5 py-1 font-mono text-[14px] font-bold text-purple-200 shrink-0">
                        {card.tag}
                      </span>
                    )}
                  </div>

                  {/* 2. Title 30/1.15, reserve 2 lines (min-height) so blocks below align across cards. BN subtitle 22/1.55 */}
                  <div className="min-h-[72px] flex flex-col justify-start mt-4">
                    <h3 className="font-display text-[30px] leading-[1.15] font-extrabold text-white">
                      {card.title}
                    </h3>
                    {card.titleBn && (
                      <p className="bangla text-[22px] font-semibold text-slate-200 leading-[1.55] mt-1 truncate">
                        {card.titleBn}
                      </p>
                    )}
                  </div>

                  {/* 3. EN paragraph 24/1.4, min-height of 4 lines so every card's divider is at the same y */}
                  <div className="min-h-[135px] mt-3.5 flex items-start">
                    <p className="text-[24px] leading-[1.4] text-slate-200 font-medium">
                      {card.takeaway}
                    </p>
                  </div>
                </div>

                {/* Lower block pinned to bottom */}
                <div className="flex flex-col mt-auto">
                  {/* 4. One 1px divider, 16px clear above and below */}
                  <div className="h-[1px] w-full bg-white/10 my-4 shrink-0" />

                  {/* 5. BN paragraph 20/1.55 */}
                  <p className="bangla text-[20px] leading-[1.55] text-slate-300 font-medium">
                    {card.takeawayBn}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SlideShell>
  );
}

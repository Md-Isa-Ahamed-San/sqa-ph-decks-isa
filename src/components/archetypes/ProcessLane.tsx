"use client";

import React from "react";
import type { ProcessLaneProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends ProcessLaneProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function ProcessLane({
  eyebrow = "Step-by-Step Workflow",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  steps = [],
  footerNote,
  pageNum = "04 / 12",
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
      {/* Header slide body zone y260-940: Block = 4-card row + note bar, centered vertically (top ~330) */}
      <div className="flex flex-col w-full justify-center">
        {/* ROW: grid 4 x 409 (x100-1820 in 1720 container), gap 28, cards stretch to equal height ~400 */}
        <div className="grid grid-cols-4 gap-7 items-stretch w-full">
          {steps.map((st, index) => {
            const stepNum = index + 1;
            const isActive = !isExport && currentStep === stepNum;
            const isPast = !isExport && currentStep > stepNum;

            return (
              <div
                key={index}
                style={{
                  transition:
                    "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
                className={`h-[400px] flex flex-col justify-between rounded-[20px] border p-7 backdrop-blur-xl box-border ${
                  isActive
                    ? st.highlight
                      ? "opacity-100 border-emerald-400 bg-emerald-950/30 shadow-[0_12px_36px_rgba(16,185,129,0.25)] -translate-y-1"
                      : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                    : isPast
                    ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                    : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
                }`}
              >
                {/* Content Top */}
                <div className="flex flex-col">
                  {/* Top row: number badge 48px left, tag pill right inside padding */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl font-mono text-[20px] font-black shrink-0 ${
                        isActive
                          ? "bg-qa-cyan text-black"
                          : "border border-qa-cyan/40 bg-qa-cyan/15 text-qa-cyan"
                      }`}
                    >
                      {st.stepNumber}
                    </span>

                    {st.badge && (
                      <span className="rounded-full border border-white/15 bg-white/10 px-3.5 py-1 font-mono text-[14px] font-bold text-slate-200 shrink-0">
                        {st.badge}
                      </span>
                    )}
                  </div>

                  {/* 16px gap, title 34/1.15 (one line), BN subtitle 24/1.55 */}
                  <div className="flex flex-col">
                    <h3 className="font-display text-[34px] leading-[1.15] font-extrabold text-white whitespace-nowrap truncate">
                      {st.title}
                    </h3>

                    {st.titleBn && (
                      <p className="bangla text-[24px] font-semibold text-slate-200 leading-[1.55] mt-1 truncate">
                        {st.titleBn}
                      </p>
                    )}
                  </div>

                  {/* 14px gap, quoted EN 22/1.4, 8px gap, BN 18/1.55 */}
                  <div className="mt-3.5 flex flex-col">
                    <p className="text-[22px] leading-[1.4] text-slate-200 font-medium">
                      {st.description}
                    </p>

                    {st.descriptionBn && (
                      <p className="bangla mt-2 text-[18px] text-slate-300 leading-[1.55]">
                        {st.descriptionBn}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* NOTE BAR: margin-top 28, padding 20 28, flex row, align-items:flex-start, gap 20 */}
        {footerNote && (
          <div className="mt-7 flex flex-row items-start gap-5 rounded-[18px] border border-qa-cyan/25 bg-qa-cyan/10 py-5 px-7 backdrop-blur-xl box-border">
            {/* Pill "NOTE" on the left */}
            <span className="rounded-full border border-qa-cyan/40 bg-qa-cyan/20 px-3.5 py-1 font-mono text-[14px] font-bold text-qa-cyan uppercase shrink-0">
              NOTE
            </span>

            {/* Text column: EN 22/1.4, then BN 20/1.55 on its own line below */}
            <div className="flex flex-col min-w-0">
              <span className="text-[22px] leading-[1.4] text-slate-200 font-medium">
                {footerNote.text}
              </span>
              {footerNote.textBn && (
                <span className="bangla mt-1 text-[20px] leading-[1.55] text-slate-300 font-medium">
                  {footerNote.textBn}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </SlideShell>
  );
}

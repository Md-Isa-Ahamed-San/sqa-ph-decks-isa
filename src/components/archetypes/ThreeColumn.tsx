"use client";

import React from "react";
import type { ThreeColumnProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends ThreeColumnProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function ThreeColumn({
  eyebrow = "Requirement Types • Foundations",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  columns = [],
  pageNum = "03 / 12",
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
      {/* Header slide body zone y260-940, grid-template-columns: repeat(3, 1fr); gap 32 (col width 552); target ~600 tall, centered */}
      <div className="grid grid-cols-3 gap-8 w-full items-stretch">
        {columns.map((col, index) => {
          const stepNum = index + 1;
          const isActive = !isExport && currentStep === stepNum;
          const isPast = !isExport && currentStep > stepNum;

          const isPurple = col.badgeColor === "purple" || index === 0;
          const isCyan = col.badgeColor === "cyan" || index === 1;

          return (
            <div
              key={index}
              style={{
                transition:
                  "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className={`h-[590px] flex flex-col justify-between rounded-[20px] border p-7 backdrop-blur-xl box-border ${
                isActive
                  ? isCyan
                    ? "opacity-100 border-qa-cyan bg-qa-cyan/10 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                    : isPurple
                    ? "opacity-100 border-ph-purple bg-ph-purple/10 shadow-[0_12px_36px_rgba(167,139,250,0.22)] -translate-y-1"
                    : "opacity-100 border-amber-400 bg-amber-950/30 shadow-[0_12px_36px_rgba(245,158,11,0.22)] -translate-y-1"
                  : isPast
                  ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                  : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
              }`}
            >
              {/* Top Section */}
              <div className="flex flex-col">
                {/* 1. Top row: tag pill left, index "01" right, inside padding, 16px above title */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`rounded-full border px-3.5 py-1 font-mono text-[14px] font-bold ${
                      isCyan
                        ? "border-qa-cyan/40 bg-qa-cyan/15 text-qa-cyan"
                        : isPurple
                        ? "border-ph-purple/40 bg-ph-purple/20 text-purple-200"
                        : "border-amber-500/40 bg-amber-950/40 text-amber-300"
                    }`}
                  >
                    {col.badge ?? `Layer ${index + 1}`}
                  </span>
                  <span className="font-mono text-[14px] font-bold text-slate-400">
                    0{index + 1}
                  </span>
                </div>

                {/* 2. Title 34/1.15, BN subtitle 24/1.55, fixed min-height to align 3 columns */}
                <div className="min-h-[120px] flex flex-col justify-start mb-4">
                  <h3 className="font-display text-[34px] leading-[1.15] font-extrabold tracking-[-0.01em] text-white">
                    {col.title}
                  </h3>

                  {col.titleBn && (
                    <p className="bangla text-[24px] font-medium text-slate-200 leading-[1.55] mt-1">
                      {col.titleBn}
                    </p>
                  )}
                </div>

                {/* 3. 3 EN+BN pairs: EN line(s), then BN line directly below (6px gap); 14px between pairs */}
                <div className="space-y-3.5">
                  {col.points.map((pt, pIdx) => (
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
              </div>

              {/* 4. Footer pinned to the bottom (margin-top:auto): 1px divider, padding-top 18, EN question 22 in accent color, BN 18 below */}
              <div className="mt-auto">
                <div className="h-[1px] w-full bg-card-border mb-[18px]" />
                <div>
                  <div
                    className={`text-[22px] font-bold leading-[1.3] tracking-[-0.01em] ${
                      isCyan
                        ? "text-qa-cyan"
                        : isPurple
                        ? "text-purple-300"
                        : "text-amber-300"
                    }`}
                  >
                    {col.summary}
                  </div>
                  {col.summaryBn && (
                    <div className="bangla text-[18px] font-medium text-slate-300 leading-[1.55] mt-1">
                      {col.summaryBn}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </SlideShell>
  );
}

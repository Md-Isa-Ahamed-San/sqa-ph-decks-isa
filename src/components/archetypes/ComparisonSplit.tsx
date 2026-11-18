"use client";

import React from "react";
import type { ComparisonSplitProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends ComparisonSplitProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function ComparisonSplit({
  eyebrow = "Comparison Analysis",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  left,
  right,
  bottomNote,
  pageNum = "07 / 12",
  module = 2,
  videoNo = 2,
}: Props) {
  const { currentStep, isExport } = useStep();

  const isLeftActive = !isExport && currentStep === 1;
  const isLeftPast = !isExport && currentStep > 1;

  const isRightActive = !isExport && currentStep === 2;
  const isRightPast = !isExport && currentStep > 2;

  const isLeftRed = left.color === "red";
  const isRightEmerald =
    right.color === "green" ||
    (right.badge ?? "").toLowerCase().includes("production");

  // Helper to extract trailing emoji icon from title if present
  const parseTitle = (rawTitle: string) => {
    const match = rawTitle.match(/^(.*?)\s*([❌✅⚠️🛡️✓])$/);
    if (match) {
      return { text: match[1], icon: match[2] };
    }
    return { text: rawTitle, icon: null };
  };

  const leftParsed = parseTitle(left.title);
  const rightParsed = parseTitle(right.title);

  // Clean duplicated inline "Pro Tip:" if present
  const cleanBottomText = bottomNote?.text
    ? bottomNote.text.replace(/^Pro Tip:\s*/i, "")
    : "";

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
      {/* Header slide, zone y260-940. Block = 2 cards + pro-tip bar, centered vertically */}
      <div className="flex flex-col w-full justify-center">
        {/* CARDS: grid 2 x 844 (x100-1820), gap 32, equal height, padding 28 */}
        <div className="grid grid-cols-2 gap-8 items-stretch w-full">
          {/* Card A (Left) */}
          <div
            style={{
              transition:
                "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className={`min-h-[500px] flex flex-col justify-between rounded-[20px] border p-7 backdrop-blur-xl box-border ${
              isLeftActive
                ? isLeftRed
                  ? "opacity-100 border-red-500 bg-red-950/40 shadow-[0_12px_36px_rgba(239,68,68,0.25)] -translate-y-1"
                  : "opacity-100 border-ph-purple bg-ph-purple/20 shadow-[0_12px_36px_rgba(167,139,250,0.25)] -translate-y-1"
                : isLeftPast
                ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
            }`}
          >
            <div>
              {/* Top row: pill left, Step 01 right, inside padding */}
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full border px-3.5 py-1 font-mono text-[14px] font-bold ${
                    isLeftRed
                      ? "border-red-500/40 bg-red-950/40 text-red-300"
                      : "border-ph-purple/40 bg-ph-purple/25 text-purple-200"
                  }`}
                >
                  {left.badge ?? "Step 01"}
                </span>
                <span className="font-mono text-[14px] font-bold text-slate-400">
                  Step 01
                </span>
              </div>

              {/* Title 38/1.15, BN subtitle 24/1.55 */}
              <div className="flex items-center gap-3 mt-3.5">
                <h3
                  className={`font-display text-[38px] leading-[1.15] font-extrabold whitespace-nowrap truncate ${
                    isLeftRed ? "text-red-400" : "text-white"
                  }`}
                >
                  {leftParsed.text}
                </h3>
                {leftParsed.icon && (
                  <span className="text-[32px] leading-none shrink-0">
                    {leftParsed.icon}
                  </span>
                )}
              </div>

              {left.titleBn && (
                <p className="bangla text-[24px] font-semibold text-slate-200 leading-[1.55] mt-1 truncate">
                  {left.titleBn}
                </p>
              )}

              {/* 5 EN+BN pairs, EN 22/1.4, BN 18/1.55, 14px between pairs */}
              <div className="mt-4 space-y-3.5">
                {left.points.map((pt, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="text-[22px] leading-[1.4] text-slate-100 font-medium">
                      {pt.text}
                    </div>
                    {pt.textBn && (
                      <div className="bangla text-[18px] text-slate-300 leading-[1.55] mt-0.5">
                        {pt.textBn}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card B (Right) */}
          <div
            style={{
              transition:
                "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className={`min-h-[500px] flex flex-col justify-between rounded-[20px] border p-7 backdrop-blur-xl box-border ${
              isRightActive
                ? isRightEmerald
                  ? "opacity-100 border-emerald-400 bg-emerald-950/30 shadow-[0_12px_36px_rgba(16,185,129,0.25)] -translate-y-1"
                  : "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_36px_rgba(34,211,238,0.22)] -translate-y-1"
                : isRightPast
                ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
            }`}
          >
            <div>
              {/* Top row: pill left, Step 02 right, inside padding */}
              <div className="flex items-center justify-between">
                <span
                  className={`rounded-full border px-3.5 py-1 font-mono text-[14px] font-bold ${
                    isRightEmerald
                      ? "border-emerald-400/40 bg-emerald-950/40 text-emerald-300"
                      : "border-qa-cyan/40 bg-qa-cyan/15 text-qa-cyan"
                  }`}
                >
                  {right.badge ?? "Step 02"}
                </span>
                <span className="font-mono text-[14px] font-bold text-slate-400">
                  Step 02
                </span>
              </div>

              {/* Title 38/1.15, BN subtitle 24/1.55 */}
              <div className="flex items-center gap-3 mt-3.5">
                <h3
                  className={`font-display text-[38px] leading-[1.15] font-extrabold whitespace-nowrap truncate ${
                    isRightEmerald ? "text-emerald-300" : "text-white"
                  }`}
                >
                  {rightParsed.text}
                </h3>
                {rightParsed.icon && (
                  <span className="text-[32px] leading-none shrink-0">
                    {rightParsed.icon}
                  </span>
                )}
              </div>

              {right.titleBn && (
                <p className="bangla text-[24px] font-semibold text-slate-200 leading-[1.55] mt-1 truncate">
                  {right.titleBn}
                </p>
              )}

              {/* 5 EN+BN pairs, EN 22/1.4, BN 18/1.55, 14px between pairs */}
              <div className="mt-4 space-y-3.5">
                {right.points.map((pt, index) => (
                  <div key={index} className="flex flex-col">
                    <div className="text-[22px] leading-[1.4] text-slate-100 font-medium">
                      {pt.text}
                    </div>
                    {pt.textBn && (
                      <div className="bangla text-[18px] text-slate-300 leading-[1.55] mt-0.5">
                        {pt.textBn}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* PRO-TIP BAR: margin-top 24, padding 18 28, flex row, gap 20, align-items:flex-start */}
        {bottomNote && (
          <div
            style={{
              transition:
                "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className={`mt-6 flex flex-row items-start gap-5 rounded-[18px] border border-qa-cyan/25 bg-qa-cyan/10 py-[18px] px-7 backdrop-blur-xl box-border ${
              isExport || currentStep >= 2
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            {/* Pill "PRO TIP" on the left */}
            <span className="rounded-full border border-qa-cyan/40 bg-qa-cyan/20 px-3.5 py-1 font-mono text-[14px] font-bold text-qa-cyan uppercase shrink-0">
              PRO TIP
            </span>

            {/* Text column: EN 22/1.4, then BN 20/1.55 on its own line */}
            <div className="flex flex-col min-w-0">
              <span className="text-[22px] leading-[1.4] text-slate-200 font-medium">
                {cleanBottomText}
              </span>
              {bottomNote.textBn && (
                <span className="bangla mt-1 text-[20px] leading-[1.55] text-slate-300 font-medium">
                  {bottomNote.textBn}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </SlideShell>
  );
}

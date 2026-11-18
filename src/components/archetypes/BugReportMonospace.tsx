"use client";

import React from "react";
import type { BugReportMonospaceProps } from "~/lib/types";
import { SlideShell } from "../ui/SlideShell";
import { useStep } from "../viewer/StepContext";

interface Props extends BugReportMonospaceProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function BugReportMonospace({
  eyebrow = "Standard Documentation",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  reportId = "TC_LOGIN_02",
  severity,
  priority,
  summary,
  summaryBn,
  environment,
  stepsToReproduce = [],
  expectedResult,
  expectedResultBn,
  actualResult,
  actualResultBn,
  annotation,
  annotationBn,
  pageNum = "10 / 12",
  module = 2,
  videoNo = 2,
}: Props) {
  const { currentStep, isExport } = useStep();

  // Step 1 = terminal sections 1-2 active; section 3 and callout upcoming
  // Step 2 = expected/actual panes active; callout upcoming
  // Step 3 = callout active; terminal past
  const isSection3Active = !isExport && currentStep === 2;
  const isSection3Revealed = isExport || currentStep >= 2;

  const isCalloutActive = !isExport && currentStep === 3;
  const isCalloutRevealed = isExport || currentStep >= 3;

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
      {/* Header slide, zone y260-940. Two columns, align-items:center: terminal x100-1180 (1080), callout x1236-1820 (584) */}
      <div className="flex w-full items-center justify-between gap-14 py-1">
        {/* TERMINAL (mono): 1080px wide */}
        <div className="w-[1080px] shrink-0 rounded-[20px] border border-white/15 bg-[#0C101C]/95 backdrop-blur-2xl shadow-2xl box-border overflow-hidden">
          {/* Header bar 52px: traffic dots left, "TICKET://TC_LOGIN_02" centered, "High" and "P1" badges right */}
          <div className="flex h-[52px] items-center justify-between border-b border-white/10 bg-white/5 px-6">
            <div className="flex items-center gap-2">
              <span className="h-3.5 w-3.5 rounded-full bg-red-500/80" />
              <span className="h-3.5 w-3.5 rounded-full bg-amber-500/80" />
              <span className="h-3.5 w-3.5 rounded-full bg-emerald-500/80" />
            </div>

            <span className="font-mono text-[14px] font-bold tracking-wider text-slate-300 uppercase">
              TICKET://{reportId.toUpperCase()}
            </span>

            <div className="flex items-center gap-2.5">
              <span className="rounded bg-red-500/20 px-2.5 py-0.5 font-mono text-[13px] font-bold text-red-400">
                {severity}
              </span>
              <span className="rounded bg-amber-500/20 px-2.5 py-0.5 font-mono text-[13px] font-bold text-amber-400">
                {priority}
              </span>
            </div>
          </div>

          {/* Ticket Body: inner padding 24 28, sections separated by 1px dividers with 20px padding above and below */}
          <div className="py-6 px-7 font-mono">
            {/* Section 1: [TEST CASE SUMMARY] */}
            <div className="flex flex-col">
              <span className="font-mono text-[14px] font-bold text-qa-cyan uppercase tracking-wider">
                [TEST CASE SUMMARY]
              </span>
              <p className="font-mono mt-1.5 text-[20px] font-bold text-white leading-snug line-clamp-2">
                {summary}
              </p>
              {summaryBn && (
                <p className="bangla text-[17px] text-slate-300 leading-[1.5] mt-1">
                  {summaryBn}
                </p>
              )}
            </div>

            {/* 1px divider with 20px padding above and below */}
            <div className="h-[1px] w-full bg-white/10 my-5" />

            {/* Section 2: [EXACT TEST STEPS] */}
            <div className="flex flex-col">
              <span className="font-mono text-[14px] font-bold text-purple-400 uppercase tracking-wider">
                [EXACT TEST STEPS]
              </span>

              {/* The env line goes on its own line under the label, mono 14, wrapping allowed */}
              <div className="font-mono text-[14px] text-slate-400 mt-1 break-words">
                Env: {environment}
              </div>

              {/* 4 numbered steps mono 20/1.6 */}
              <div className="mt-2.5 space-y-1 font-mono text-[20px] leading-[1.6] text-slate-200">
                {stepsToReproduce.map((st, sIdx) => (
                  <div key={sIdx}>{st}</div>
                ))}
              </div>
            </div>

            {/* 1px divider with 20px padding above and below */}
            <div className="h-[1px] w-full bg-white/10 my-5" />

            {/* Section 3: Two panes [EXPECTED RESULT] / [ACTUAL RESULT: PASS] */}
            <div
              style={{
                transition:
                  "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
              className={`grid grid-cols-2 rounded-xl border overflow-hidden ${
                isSection3Active
                  ? "opacity-100 border-emerald-400/60 bg-emerald-950/20 shadow-[0_8px_30px_rgba(16,185,129,0.2)]"
                  : isSection3Revealed
                  ? "opacity-100 border-white/10 bg-white/[0.03]"
                  : "opacity-25 border-white/5 bg-transparent pointer-events-none"
              }`}
            >
              {/* Expected Result Pane */}
              <div className="p-6 border-r border-white/10 box-border">
                <span className="font-mono text-[14px] font-bold text-emerald-400 uppercase tracking-wider">
                  [EXPECTED RESULT]
                </span>
                <p className="font-mono mt-1.5 text-[18px] leading-[1.5] text-slate-200 font-medium">
                  {expectedResult}
                </p>
                {expectedResultBn && (
                  <p className="bangla text-[16px] leading-[1.5] text-slate-300 mt-1">
                    {expectedResultBn}
                  </p>
                )}
              </div>

              {/* Actual Result Pane */}
              <div className="p-6 box-border bg-emerald-950/15">
                <span className="font-mono text-[14px] font-bold text-emerald-300 uppercase tracking-wider">
                  [ACTUAL RESULT: PASS]
                </span>
                <p className="font-mono mt-1.5 text-[18px] leading-[1.5] text-emerald-100 font-medium">
                  {actualResult}
                </p>
                {actualResultBn && (
                  <p className="bangla text-[16px] leading-[1.5] text-emerald-300/80 mt-1">
                    {actualResultBn}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* CALLOUT: 584px wide, padding 32, same vertical center as terminal */}
        {annotation && (
          <div
            style={{
              transition:
                "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
            className={`w-[584px] shrink-0 rounded-[20px] border p-8 shadow-2xl backdrop-blur-xl box-border ${
              isCalloutActive
                ? "opacity-100 border-qa-cyan bg-qa-cyan/15 shadow-[0_12px_40px_rgba(34,211,238,0.25)] -translate-y-1"
                : isCalloutRevealed
                ? "opacity-100 border-card-border bg-card-bg/95 translate-y-0 shadow-none"
                : "opacity-25 border-white/10 bg-[#140E2A]/60 translate-y-3 shadow-none pointer-events-none"
            }`}
          >
            <span className="font-mono text-[16px] font-bold tracking-widest text-qa-cyan uppercase">
              CRITICAL QA RULE
            </span>
            <p className="mt-4 text-[30px] leading-[1.35] font-semibold text-white">
              {annotation}
            </p>
            {annotationBn && (
              <p className="bangla mt-3 text-[24px] font-medium text-slate-200 leading-[1.55]">
                {annotationBn}
              </p>
            )}
          </div>
        )}
      </div>
    </SlideShell>
  );
}

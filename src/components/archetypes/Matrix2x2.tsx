"use client";

import React from "react";
import type { Matrix2x2Props } from "~/lib/types";
import { SlideHeader, SlideFooter } from "../ui/SlideChrome";
import { useStep, StepReveal } from "../viewer/StepContext";
import { renderTitleWithHighlight } from "~/lib/renderTitle";

interface Props extends Matrix2x2Props {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function Matrix2x2({
  eyebrow = "Prioritization Matrix",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  xAxisLabel = { low: "LOW IMPACT", high: "HIGH IMPACT", title: "IMPACT (SEVERITY)" },
  yAxisLabel = { low: "LOW URGENCY", high: "HIGH URGENCY", title: "URGENCY (PRIORITY)" },
  quadrants,
  pageNum = "13 / 16",
  module = 1,
  videoNo = 1,
}: Props) {
  const { currentStep, isExport } = useStep();

  return (
    <div className="relative flex h-full w-full flex-col justify-between p-20 select-none">
      <SlideHeader eyebrow={eyebrow} module={module} videoNo={videoNo} />

      {/* Main Slide Content Area */}
      <div className="relative z-10 my-auto flex flex-col justify-center gap-6 py-2">
        {/* Header */}
        <div className="text-center">
          <h1 className="font-display text-5xl font-extrabold tracking-tight text-white">
            {renderTitleWithHighlight(title, titleHighlight)}
          </h1>
          {subtitle && (
            <p className="mt-2 text-xl font-medium text-slate-300">{subtitle}</p>
          )}
          {subtitleBn && (
            <p className="bangla mt-1 text-base font-semibold text-text-muted">
              {subtitleBn}
            </p>
          )}
        </div>

        {/* 2x2 Matrix Grid */}
        <div className="relative mx-auto w-full max-w-5xl rounded-3xl border border-white/10 bg-card-bg/60 p-6 backdrop-blur-xl">
          <div className="grid grid-cols-2 gap-6">
            {/* Top-Left: Low Impact, High Urgency */}
            <StepReveal step={2}>
              <div className="rounded-2xl border border-amber-500/30 bg-amber-950/20 p-6">
                <span className="rounded-full border border-amber-500/40 bg-amber-950/40 px-3 py-1 font-mono text-xs font-bold text-amber-300">
                  {quadrants.topLeft.badge}
                </span>
                <h4 className="font-display mt-3 text-2xl font-bold text-white">
                  {quadrants.topLeft.title}
                </h4>
                {quadrants.topLeft.titleBn && (
                  <p className="bangla mt-1 text-base font-medium text-slate-300">
                    {quadrants.topLeft.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-300">
                  {quadrants.topLeft.action}
                </p>
              </div>
            </StepReveal>

            {/* Top-Right: High Impact, High Urgency (P1 / Critical) */}
            <StepReveal step={1}>
              <div className="rounded-2xl border border-red-500/40 bg-red-950/30 p-6 shadow-xl">
                <span className="rounded-full border border-red-500/50 bg-red-950/50 px-3 py-1 font-mono text-xs font-bold text-red-300">
                  {quadrants.topRight.badge}
                </span>
                <h4 className="font-display mt-3 text-2xl font-bold text-red-400">
                  {quadrants.topRight.title}
                </h4>
                {quadrants.topRight.titleBn && (
                  <p className="bangla mt-1 text-base font-medium text-slate-200">
                    {quadrants.topRight.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm font-medium text-slate-200">
                  {quadrants.topRight.action}
                </p>
              </div>
            </StepReveal>

            {/* Bottom-Left: Low Impact, Low Urgency */}
            <StepReveal step={4}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 font-mono text-xs font-bold text-slate-300">
                  {quadrants.bottomLeft.badge}
                </span>
                <h4 className="font-display mt-3 text-2xl font-bold text-slate-200">
                  {quadrants.bottomLeft.title}
                </h4>
                {quadrants.bottomLeft.titleBn && (
                  <p className="bangla mt-1 text-base font-medium text-text-dim">
                    {quadrants.bottomLeft.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-400">
                  {quadrants.bottomLeft.action}
                </p>
              </div>
            </StepReveal>

            {/* Bottom-Right: High Impact, Low Urgency */}
            <StepReveal step={3}>
              <div className="rounded-2xl border border-qa-cyan/30 bg-qa-cyan/10 p-6">
                <span className="rounded-full border border-qa-cyan/40 bg-qa-cyan/20 px-3 py-1 font-mono text-xs font-bold text-qa-cyan">
                  {quadrants.bottomRight.badge}
                </span>
                <h4 className="font-display mt-3 text-2xl font-bold text-white">
                  {quadrants.bottomRight.title}
                </h4>
                {quadrants.bottomRight.titleBn && (
                  <p className="bangla mt-1 text-base font-medium text-slate-300">
                    {quadrants.bottomRight.titleBn}
                  </p>
                )}
                <p className="mt-3 text-sm text-slate-300">
                  {quadrants.bottomRight.action}
                </p>
              </div>
            </StepReveal>
          </div>
        </div>
      </div>

      <SlideFooter pageNum={pageNum} />
    </div>
  );
}

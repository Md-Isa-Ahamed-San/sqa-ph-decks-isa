"use client";

import React from "react";
import type { CircularWheelProps } from "~/lib/types";
import { SlideHeader, SlideFooter } from "../ui/SlideChrome";
import { useStep, StepReveal } from "../viewer/StepContext";
import { renderTitleWithHighlight } from "~/lib/renderTitle";

interface Props extends CircularWheelProps {
  pageNum?: string;
  module?: number;
  videoNo?: number;
}

export function CircularWheel({
  eyebrow = "Lifecycle Cycle",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  centerTitle = "SDLC",
  centerSubtitle = "7 Phases",
  phases = [],
  activePhase,
  showDevVsQa = false,
  pageNum = "07 / 16",
  module = 1,
  videoNo = 1,
}: Props) {
  const { currentStep, isExport } = useStep();

  const R = 230;
  const cx = 350;
  const cy = 350;

  const currentActivePhase =
    activePhase ?? (currentStep > 0 && currentStep <= phases.length ? currentStep : 5);

  return (
    <div className="relative flex h-full w-full flex-col justify-between p-20 select-none">
      <SlideHeader eyebrow={eyebrow} module={module} videoNo={videoNo} />

      {/* Main Wheel Area */}
      <div className="relative z-10 my-auto grid grid-cols-12 items-center gap-12 py-2">
        {/* Left Wheel (7 Cols) */}
        <div className="relative col-span-7 flex h-[580px] items-center justify-center">
          <svg className="h-[580px] w-[580px] overflow-visible" viewBox="0 0 700 700">
            {/* Ambient Animated Orbit Ring */}
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(126, 44, 194, 0.35)"
              strokeWidth="2"
              className="animate-ambient-dash"
            />
            <circle
              cx={cx}
              cy={cy}
              r={R + 35}
              fill="none"
              stroke="rgba(0, 245, 184, 0.15)"
              strokeWidth="1"
              strokeDasharray="4 8"
            />

            {/* Central Hub */}
            <circle
              cx={cx}
              cy={cy}
              r={72}
              fill="#0E1220"
              stroke="rgba(126, 44, 194, 0.5)"
              strokeWidth="3"
            />
            <text
              x={cx}
              y={cy - 10}
              textAnchor="middle"
              className="font-display fill-white text-[24px] font-extrabold"
            >
              {centerTitle}
            </text>
            <text
              x={cx}
              y={cy + 18}
              textAnchor="middle"
              className="font-mono fill-qa-cyan text-[13px] font-bold tracking-widest uppercase"
            >
              {centerSubtitle}
            </text>

            {/* Connecting Spoke Lines & Node Points */}
            {phases.map((phase, idx) => {
              const angle = -Math.PI / 2 + (idx * 2 * Math.PI) / phases.length;
              const nx = cx + R * Math.cos(angle);
              const ny = cy + R * Math.sin(angle);
              const isSelected = phase.phase === currentActivePhase;
              const isRevealed = isExport || currentStep === 0 || currentStep >= phase.phase;

              return (
                <g key={idx} className="transition-all duration-300">
                  <line
                    x1={cx}
                    y1={cy}
                    x2={nx}
                    y2={ny}
                    stroke={
                      isSelected
                        ? "rgba(0, 245, 184, 0.6)"
                        : "rgba(255, 255, 255, 0.08)"
                    }
                    strokeWidth={isSelected ? "2.5" : "1"}
                  />

                  <circle
                    cx={nx}
                    cy={ny}
                    r={isSelected ? 42 : 34}
                    fill={
                      isSelected
                        ? "#00F5B8"
                        : phase.highlight
                        ? "#7E2CC2"
                        : "#141A2E"
                    }
                    stroke={
                      isSelected
                        ? "#FFFFFF"
                        : phase.highlight
                        ? "#00F5B8"
                        : "rgba(255, 255, 255, 0.2)"
                    }
                    strokeWidth={isSelected ? 3 : 2}
                    className="transition-all duration-300"
                    opacity={isRevealed ? 1 : 0.3}
                  />

                  <text
                    x={nx}
                    y={ny + 6}
                    textAnchor="middle"
                    fill={isSelected ? "#000000" : "#FFFFFF"}
                    className="font-mono text-[16px] font-extrabold"
                    opacity={isRevealed ? 1 : 0.3}
                  >
                    0{phase.phase}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Right Info Panel (5 Cols): Selected Phase Details */}
        <div className="col-span-5 flex flex-col gap-4">
          <div>
            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white">
              {renderTitleWithHighlight(title, titleHighlight)}
            </h1>
            {subtitle && (
              <p className="mt-2 text-lg font-medium text-slate-300">{subtitle}</p>
            )}
            {subtitleBn && (
              <p className="bangla mt-1 text-base font-semibold text-text-muted">
                {subtitleBn}
              </p>
            )}
          </div>

          {phases.map((phase, idx) => {
            const isSelected = phase.phase === currentActivePhase;

            if (!isSelected && currentStep > 0 && !isExport) return null;

            return (
              <StepReveal key={idx} step={phase.phase}>
                <div
                  className={`rounded-3xl border p-7 backdrop-blur-xl transition-all duration-300 ${
                    isSelected
                      ? "border-qa-cyan/40 bg-gradient-to-br from-qa-cyan/15 via-card-bg/95 to-ph-purple/15 shadow-[0_20px_50px_rgba(0,245,184,0.15)]"
                      : "border-card-border bg-card-bg/80 opacity-60"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-qa-cyan/30 bg-qa-cyan/10 px-3.5 py-1 font-mono text-xs font-bold text-qa-cyan">
                      PHASE 0{phase.phase}
                    </span>
                    {phase.qaTag && (
                      <span className="bangla rounded-full border border-ph-purple/40 bg-ph-purple/20 px-3 py-1 text-xs font-bold text-purple-200">
                        {phase.qaTag}
                      </span>
                    )}
                  </div>

                  <h3 className="font-display mt-3 text-3xl font-extrabold text-white">
                    {phase.title}
                  </h3>

                  {phase.titleBn && (
                    <p className="bangla mt-1 text-lg font-semibold text-slate-300">
                      {phase.titleBn}
                    </p>
                  )}

                  {showDevVsQa && (
                    <div className="mt-5 space-y-3 border-t border-white/10 pt-4">
                      {phase.devAction && (
                        <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                          <span className="font-mono text-xs font-bold text-slate-400 uppercase">
                            Developer:
                          </span>
                          <p className="mt-0.5 text-sm font-medium text-slate-200">
                            {phase.devAction}
                          </p>
                        </div>
                      )}
                      {phase.qaAction && (
                        <div className="rounded-xl border border-qa-cyan/30 bg-qa-cyan/10 p-3">
                          <span className="font-mono text-xs font-bold text-qa-cyan uppercase">
                            QA Engineer:
                          </span>
                          <p className="mt-0.5 text-sm font-semibold text-white">
                            {phase.qaAction}
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </StepReveal>
            );
          })}
        </div>
      </div>

      <SlideFooter pageNum={pageNum} />
    </div>
  );
}

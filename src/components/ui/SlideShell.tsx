"use client";

import React from "react";
import { SlideHeader, SlideFooter } from "./SlideChrome";
import { renderTitleWithHighlight } from "~/lib/renderTitle";

export interface SlideShellProps {
  eyebrow?: string;
  pageNum?: string;
  videoNo?: number;
  module?: number;
  layout?: "standard" | "split";
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  children: React.ReactNode;
}

export function SlideShell({
  eyebrow = "SQA Foundations",
  pageNum = "01 / 12",
  videoNo = 2,
  module = 2,
  layout = "standard",
  title,
  titleHighlight,
  subtitle,
  subtitleBn,
  children,
}: SlideShellProps) {
  return (
    <div
      className="relative flex h-full w-full flex-col select-none box-border"
      style={{
        paddingTop: "var(--slide-pad-top, 72px)",
        paddingBottom: "var(--slide-pad-bottom, 140px)",
        paddingLeft: "var(--slide-pad-x, 100px)",
        paddingRight: "var(--slide-pad-x, 100px)",
      }}
    >
      {/* Top row inside padding: eyebrow left (≥14px), brand lockup right on a single line, logo ≥28px high, text ≥16px. */}
      <SlideHeader eyebrow={eyebrow} videoNo={videoNo} module={module} />

      {layout === "standard" ? (
        <>
          {/* Header (title + subtitle): left-aligned on EVERY slide, directly under the top row, same y on all slides. */}
          {title && (
            <div className="mt-5 shrink-0 flex flex-col text-left">
              <h1 className="font-display text-[46px] font-extrabold tracking-tight text-white leading-[1.12]">
                {renderTitleWithHighlight(title, titleHighlight)}
              </h1>
              {subtitle && (
                <p className="mt-2 text-[24px] font-medium text-slate-300 leading-snug">
                  {subtitle}
                </p>
              )}
              {subtitleBn && (
                <p className="bangla mt-1 text-[22px] font-semibold text-text-muted leading-[1.5]">
                  {subtitleBn}
                </p>
              )}
            </div>
          )}

          {/* Body: flex:1 with align-items:center so it is vertically centered in the remaining space. */}
          <div className="flex-1 flex items-center justify-center w-full min-h-0 py-2">
            {children}
          </div>
        </>
      ) : (
        /* Title slide and two-column slides: the whole block is vertically centered in zone y130-940. */
        <div className="mt-[26px] flex-1 flex items-center justify-center w-full min-h-0">
          {children}
        </div>
      )}

      {/* Slide footer (accent bar + page number) */}
      <SlideFooter pageNum={pageNum} />
    </div>
  );
}

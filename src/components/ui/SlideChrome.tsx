"use client";

import React from "react";

interface SlideChromeProps {
  eyebrow?: string;
  pageNum?: string;
  videoNo?: number;
  module?: number;
}

/**
 * SlideHeader: Sleek, non-intrusive presentation header.
 * Looks like a polished Google Slide / Keynote deck.
 * Eyebrow on the left, Programming Hero logo on the right.
 */
export function SlideHeader({
  eyebrow = "SQA Foundations",
  videoNo,
  module,
}: {
  eyebrow?: string;
  videoNo?: number;
  module?: number;
}) {
  return (
    <div className="relative z-20 flex w-full items-center justify-between shrink-0 h-[32px] box-border">
      {/* Left Eyebrow with accent dash (≥14px) */}
      <div className="flex items-center gap-3 font-mono text-[14px] font-bold tracking-widest text-qa-cyan uppercase">
        <span className="h-0.5 w-7 bg-qa-cyan shrink-0" />
        <span>{eyebrow}</span>
      </div>

      {/* Right Brand: Official Programming Hero Logo Mark (28px) + "Programming Hero" on one line + 12px gap to M02 • V02 */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2.5">
          <svg
            className="h-[28px] w-[28px] shrink-0"
            viewBox="0 0 47 47"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38.3845 0H7.92084C3.54628 0 0 3.57299 0 7.98049V38.6735C0 43.0811 3.54628 46.654 7.92084 46.654H38.3845C42.759 46.654 46.3053 43.0811 46.3053 38.6735V7.98049C46.3053 3.57299 42.759 0 38.3845 0Z"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M16.0983 13.6475V35.9272H14.9625C13.2983 35.9272 11.9502 34.544 11.9502 32.8325V16.7421C11.9502 15.0356 13.2983 13.6475 14.9625 13.6475H16.0983Z"
              fill="white"
            />
            <path
              d="M20.6958 33.2852C19.7229 32.4892 19.4365 31.6832 19.4365 30.6433C19.4365 29.6035 19.8316 28.7427 20.7995 27.9467L28.024 22.016C28.8981 22.618 27.6734 27.6929 27.6734 27.6929L20.6908 33.2902L20.6958 33.2852Z"
              fill="white"
            />
            <path
              d="M16.0983 38.5741V42.1911H14.9625C13.2983 42.1911 11.9502 40.798 11.9502 39.0815V35.4644C11.9502 37.1809 13.2983 38.5741 14.9625 38.5741H16.0983Z"
              fill="white"
            />
            <path
              d="M30.2065 23.5186C29.2238 25.2699 27.9892 27.3994 27.9497 27.4641C27.9744 27.4094 28.5127 26.1207 29.4707 23.449C29.9991 21.9713 29.6583 21.6081 28.7053 20.8817C28.5423 20.7573 23.1202 16.4984 19.1499 13.3788V11.4484C23.3523 14.8615 29.2287 19.6378 29.4411 19.797C30.7793 20.817 31.4065 21.3742 30.2065 23.5136V23.5186Z"
              fill="white"
            />
            <path
              d="M32.8582 21.9464C31.6928 23.3942 28.1027 27.2999 27.9595 27.4641C27.9595 27.4641 30.2903 24.1057 31.8903 21.8767C32.8681 20.5135 31.5989 19.807 30.6459 19.0806C30.4483 18.9313 22.8435 13.0305 19.1597 10.1697V7.80637C23.2979 11.1498 31.9693 18.1651 32.2211 18.3591C33.5594 19.3791 34.1865 20.3045 32.8631 21.9513L32.8582 21.9464Z"
              fill="white"
            />
            <path
              d="M34.7398 22.0011C33.0855 23.3345 28.1127 27.3397 27.9547 27.464C28.1424 27.28 34.0139 21.8817 34.7546 20.6179C35.604 19.1751 34.4731 18.9263 33.3077 17.8666C33.1398 17.7123 24.177 10.3935 19.145 6.27892V4.22906C24.7795 8.87108 34.9966 17.2844 35.5694 17.7173C37.0953 18.8716 36.7644 20.3592 34.7299 21.9961L34.7398 22.0011Z"
              fill="white"
            />
          </svg>
          <span className="font-display font-bold text-[17px] text-white whitespace-nowrap leading-none tracking-normal">
            Programming Hero
          </span>
        </div>
        {module && videoNo ? (
          <span className="rounded-full border border-ph-purple/40 bg-ph-purple/20 px-3 py-0.5 font-mono text-[16px] font-bold text-purple-200 shrink-0 whitespace-nowrap leading-none">
            M0{module} &bull; V0{videoNo}
          </span>
        ) : null}
      </div>
    </div>
  );
}

/**
 * SlideFooter: Bottom presentation bar + page counter.
 * Positioned absolutely at the bottom so it never disrupts flex content.
 */
export function SlideFooter({ pageNum }: { pageNum?: string }) {
  return (
    <>
      <div className="bottom-bar" />
      {pageNum && <span className="page-num">{pageNum}</span>}
    </>
  );
}

/**
 * SlideChrome: Backwards-compatible export combining SlideHeader + SlideFooter
 */
export function SlideChrome({
  eyebrow = "SQA Foundations",
  pageNum = "01 / 16",
  videoNo = 1,
  module = 1,
}: SlideChromeProps) {
  return (
    <>
      <SlideHeader eyebrow={eyebrow} videoNo={videoNo} module={module} />
      <SlideFooter pageNum={pageNum} />
    </>
  );
}

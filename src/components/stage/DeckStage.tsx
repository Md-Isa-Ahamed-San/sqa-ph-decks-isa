"use client";

import React, { useEffect, useRef, useState } from "react";

interface DeckStageProps {
  children: React.ReactNode;
  isFullscreen?: boolean;
  isIdle?: boolean;
}

export function DeckStage({
  children,
  isFullscreen = false,
  isIdle = false,
}: DeckStageProps) {
  const [transformStyle, setTransformStyle] = useState<string>("translate(0px, 0px) scale(1)");
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateScale() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const factor = Math.min(vw / 1920, vh / 1080);
      const x = Math.max(0, (vw - 1920 * factor) / 2);
      const y = Math.max(0, (vh - 1080 * factor) / 2);
      setTransformStyle(`translate(${x}px, ${y}px) scale(${factor})`);
    }

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div
      className={`deck-viewport ${isFullscreen ? "recording-mode" : ""} ${
        isIdle ? "deck-idle" : ""
      }`}
    >
      <div
        ref={stageRef}
        className="deck-stage"
        style={{
          transform: transformStyle,
          transformOrigin: "0 0",
        }}
      >
        {children}
      </div>
    </div>
  );
}

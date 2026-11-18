"use client";

import React from "react";

interface Props {
  step?: number;
  isExport?: boolean;
}

const investItems = [
  {
    key: "I",
    letter: "I",
    title: "Independent",
    titleBn: "অন্য স্টোরির ওপর নির্ভরশীল নয়",
    stepNum: 1,
    summary: "Can be developed and tested in isolation without blocking others.",
  },
  {
    key: "N",
    letter: "N",
    title: "Negotiable",
    titleBn: "আলোচনার মাধ্যমে পরিমার্জনযোগ্য",
    stepNum: 2,
    summary: "An invitation to conversation between PO, Devs, and QA.",
  },
  {
    key: "V",
    letter: "V",
    title: "Valuable",
    titleBn: "ইউজারের জন্য কার্যকর সুবিধা দেয়",
    stepNum: 3,
    summary: "Delivers direct, measurable value to end users or business.",
  },
  {
    key: "E",
    letter: "E",
    title: "Estimable",
    titleBn: "কাজের সময় অনুমান করা যায়",
    stepNum: 4,
    summary: "Scope is clear enough to reliably estimate QA & Dev effort.",
  },
  {
    key: "S",
    letter: "S",
    title: "Small",
    titleBn: "ছোট এবং দ্রুত শেষ করার মতো",
    stepNum: 5,
    summary: "Fits neatly within a single sprint (2–3 days max), avoiding bloat.",
  },
  {
    key: "T",
    letter: "T",
    title: "Testable",
    titleBn: "যা পরীক্ষা করে Pass/Fail বলা যায়",
    stepNum: 6,
    summary: "Has crisp Acceptance Criteria with measurable pass/fail boundaries.",
    isQaFavorite: true,
  },
];

export function Slide06({ step = 0, isExport = false }: Props) {
  const activeStep = isExport ? 6 : (step ?? 0);
  const isStep0 = activeStep === 0 && !isExport;

  const leftItems = investItems.slice(0, 3);
  const rightItems = investItems.slice(3, 6);

  const cx = 276;
  const cy = 320;
  const R = 230;

  const angles: Record<string, number> = {
    I: (-150 * Math.PI) / 180,
    N: (180 * Math.PI) / 180,
    V: (150 * Math.PI) / 180,
    E: (-30 * Math.PI) / 180,
    S: (0 * Math.PI) / 180,
    T: (30 * Math.PI) / 180,
  };

  return (
    <div className="slide-pad" style={{ position: "relative" }}>
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          AGILE STANDARDS • USER STORY + INVEST
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          Is Your User Story <span className="hl">Ready to Test?</span>
        </h2>
        <div
          className="reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream)",
            marginBottom: "4px",
            lineHeight: 1.4,
          }}
        >
          First the format, then 6 benchmarks that make a story testable.
        </div>
        <div
          className="slide-subtitle-bangla reveal d4"
          style={{
            fontSize: "18px",
            color: "var(--cream-muted)",
            marginBottom: "10px",
            lineHeight: 1.55,
          }}
        >
          আগে ফরম্যাট, তারপর যে ৬টি মানদণ্ড স্টোরিকে টেস্টযোগ্য করে।
        </div>
      </div>

      <div
        className="invest-stage"
        style={{
          display: "grid",
          gridTemplateColumns: "560px 1fr 560px",
          gap: "24px",
          alignItems: "center",
          width: "100%",
          margin: "auto 0",
        }}
      >
        {/* Left Stack */}
        <div
          className="invest-stack-left"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "640px",
            justifyContent: "space-between",
          }}
        >
          {leftItems.map((item) => {
            const isActive = !isExport && activeStep === item.stepNum;
            const isPast = !isExport && activeStep > item.stepNum;
            const isUpcoming = !isExport && activeStep < item.stepNum;

            return (
              <div
                key={item.key}
                style={{
                  minHeight: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  border: isActive
                    ? "1px solid rgba(var(--accent-rgb), 0.85)"
                    : "1px solid var(--gray-line)",
                  background: isActive
                    ? "rgba(var(--accent-rgb), 0.12)"
                    : "var(--bg-card)",
                  boxShadow: isActive
                    ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(var(--accent-rgb), 0.25)"
                    : "none",
                  transform: isActive
                    ? "translateY(-4px)"
                    : isUpcoming
                    ? "translateY(12px)"
                    : "none",
                  opacity: isExport || isActive || isPast ? 1 : 0.25,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition:
                    "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "22px",
                        fontWeight: 900,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive
                          ? "var(--accent)"
                          : "rgba(var(--accent-rgb), 0.15)",
                        color: isActive ? "var(--bg-deep)" : "var(--accent)",
                        border: "1px solid rgba(var(--accent-rgb), 0.4)",
                      }}
                    >
                      {item.letter}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "30px",
                        fontWeight: 800,
                        color: "var(--cream)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "14px",
                      fontWeight: 700,
                      color: "var(--cream-dim)",
                    }}
                  >
                    Rule 0{item.stepNum}
                  </span>
                </div>
                <div>
                  <div
                    className="bangla"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--cream)",
                      lineHeight: 1.55,
                      letterSpacing: 0,
                    }}
                  >
                    {item.titleBn}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      lineHeight: 1.45,
                      color: "var(--cream-muted)",
                      marginTop: "6px",
                    }}
                  >
                    {item.summary}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Center Column */}
        <div
          className="invest-center-col"
          style={{
            position: "relative",
            width: "100%",
            height: "640px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Orbit SVG */}
          <svg
            viewBox="0 0 552 640"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "visible",
              pointerEvents: "none",
              opacity: isStep0 ? 0.15 : 1,
              transition: "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(var(--accent-rgb), 0.3)"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
            <circle
              cx={cx}
              cy={cy}
              r={R}
              fill="none"
              stroke="rgba(var(--accent-rgb), 0.25)"
              strokeWidth="1.5"
            />

            {investItems.map((item) => {
              const angle = angles[item.key] ?? 0;
              const nx = cx + R * Math.cos(angle);
              const ny = cy + R * Math.sin(angle);
              const isActive = !isExport && activeStep === item.stepNum;
              const isFilled = isExport || isActive;

              return (
                <g key={item.key} style={{ transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)" }}>
                  <line
                    x1={cx}
                    y1={cy}
                    x2={nx}
                    y2={ny}
                    stroke={
                      isActive
                        ? "rgba(var(--accent-rgb), 0.85)"
                        : "rgba(var(--accent-rgb), 0.35)"
                    }
                    strokeWidth={isActive ? 3 : 1.5}
                  />
                  <circle
                    cx={nx}
                    cy={ny}
                    r={28}
                    fill={isFilled ? "var(--accent)" : "var(--bg-deep)"}
                    stroke={
                      isFilled
                        ? "var(--cream)"
                        : item.isQaFavorite
                        ? "var(--green)"
                        : "rgba(255,255,255,0.4)"
                    }
                    strokeWidth={isFilled ? 3 : 2}
                  />
                  <text
                    x={nx}
                    y={ny + 7}
                    textAnchor="middle"
                    fill={isFilled ? "var(--bg-deep)" : "var(--cream)"}
                    fontFamily="var(--font-mono)"
                    fontSize={20}
                    fontWeight={900}
                  >
                    {item.letter}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Central Hub Card */}
          <div
            className="invest-hub-card"
            style={{
              position: "relative",
              zIndex: 10,
              width: isStep0 ? "480px" : "300px",
              minHeight: "310px",
              borderRadius: "24px",
              border: isStep0
                ? "1px solid rgba(var(--accent-rgb), 0.85)"
                : "1px solid rgba(var(--accent-rgb), 0.4)",
              background: "var(--bg-card)",
              padding: "24px",
              textAlign: "center",
              boxShadow: isStep0
                ? "0 0 35px rgba(var(--accent-rgb), 0.35), 0 15px 40px rgba(0,0,0,0.6)"
                : "0 15px 40px rgba(0,0,0,0.6)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition:
                "width 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            {/* Header / Pill */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <span
                style={{
                  display: "inline-block",
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb), 0.15)",
                  border: "1px solid rgba(var(--accent-rgb), 0.35)",
                  padding: "5px 14px",
                  borderRadius: "20px",
                }}
              >
                User Story Hub
              </span>
            </div>

            {/* 3 Story Rows */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "14px",
                margin: "auto 0",
                padding: "10px 0",
                textAlign: "left",
              }}
            >
              {/* Row 1: ROLE */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isStep0 ? "flex-start" : "center",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--blue)",
                    background: "rgba(59, 130, 246, 0.15)",
                    border: "1px solid rgba(59, 130, 246, 0.4)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    minWidth: "75px",
                    textAlign: "center",
                    opacity: isStep0 ? 1 : 0,
                    display: isStep0 ? "inline-block" : "none",
                    transition: "opacity 150ms ease",
                  }}
                >
                  ROLE
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: isStep0 ? "20px" : "16px",
                    fontWeight: 600,
                    color: "var(--cream)",
                    lineHeight: 1.4,
                    textAlign: isStep0 ? "left" : "center",
                    whiteSpace: isStep0 ? "nowrap" : "normal",
                  }}
                >
                  As a{" "}
                  <span style={{ color: "var(--blue)", fontWeight: 700 }}>
                    [Registered User]
                  </span>
                </span>
              </div>

              {/* Row 2: ACTION */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isStep0 ? "flex-start" : "center",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--accent)",
                    background: "rgba(var(--accent-rgb), 0.15)",
                    border: "1px solid rgba(var(--accent-rgb), 0.4)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    minWidth: "75px",
                    textAlign: "center",
                    opacity: isStep0 ? 1 : 0,
                    display: isStep0 ? "inline-block" : "none",
                    transition: "opacity 150ms ease",
                  }}
                >
                  ACTION
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: isStep0 ? "20px" : "16px",
                    fontWeight: 600,
                    color: "var(--cream)",
                    lineHeight: 1.4,
                    textAlign: isStep0 ? "left" : "center",
                    whiteSpace: isStep0 ? "nowrap" : "normal",
                  }}
                >
                  I want{" "}
                  <span style={{ color: "var(--accent)", fontWeight: 700 }}>
                    [To Log In with Email]
                  </span>
                </span>
              </div>

              {/* Row 3: BENEFIT */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isStep0 ? "flex-start" : "center",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 800,
                    textTransform: "uppercase",
                    color: "var(--green)",
                    background: "var(--green-bg)",
                    border: "1px solid rgba(16, 185, 129, 0.4)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    minWidth: "75px",
                    textAlign: "center",
                    opacity: isStep0 ? 1 : 0,
                    display: isStep0 ? "inline-block" : "none",
                    transition: "opacity 150ms ease",
                  }}
                >
                  BENEFIT
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: isStep0 ? "20px" : "16px",
                    fontWeight: 600,
                    color: "var(--cream)",
                    lineHeight: 1.4,
                    textAlign: isStep0 ? "left" : "center",
                    whiteSpace: isStep0 ? "nowrap" : "normal",
                  }}
                >
                  So that{" "}
                  <span style={{ color: "var(--green)", fontWeight: 700 }}>
                    [I Access My Account]
                  </span>
                </span>
              </div>
            </div>

            {/* Footer */}
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--cream-dim)",
                letterSpacing: "0.5px",
              }}
            >
              {isStep0 ? "USER STORY FORMAT" : `INVEST • Step 0${activeStep} of 6`}
            </div>
          </div>

          {/* Step 0 Caption under Hub */}
          <div
            style={{
              position: "absolute",
              bottom: "16px",
              textAlign: "center",
              width: "100%",
              opacity: isStep0 ? 1 : 0,
              pointerEvents: isStep0 ? "auto" : "none",
              transition: "opacity 300ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                letterSpacing: "-0.01em",
              }}
            >
              User Story = Role + Action + Benefit
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-muted)",
                marginTop: "4px",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              ইউজার স্টোরি = কে + কী চায় + কেন
            </div>
          </div>
        </div>

        {/* Right Stack */}
        <div
          className="invest-stack-right"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            height: "640px",
            justifyContent: "space-between",
          }}
        >
          {rightItems.map((item) => {
            const isActive = !isExport && activeStep === item.stepNum;
            const isPast = !isExport && activeStep > item.stepNum;
            const isUpcoming = !isExport && activeStep < item.stepNum;

            return (
              <div
                key={item.key}
                style={{
                  minHeight: "200px",
                  height: "200px",
                  borderRadius: "20px",
                  border: isActive
                    ? "1px solid rgba(var(--accent-rgb), 0.85)"
                    : "1px solid var(--gray-line)",
                  background: isActive
                    ? "rgba(var(--accent-rgb), 0.12)"
                    : "var(--bg-card)",
                  boxShadow: isActive
                    ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(var(--accent-rgb), 0.25)"
                    : "none",
                  transform: isActive
                    ? "translateY(-4px)"
                    : isUpcoming
                    ? "translateY(12px)"
                    : "none",
                  opacity: isExport || isActive || isPast ? 1 : 0.25,
                  padding: "24px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition:
                    "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        fontFamily: "var(--font-mono)",
                        fontSize: "22px",
                        fontWeight: 900,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isActive
                          ? item.isQaFavorite
                            ? "var(--green)"
                            : "var(--accent)"
                          : "rgba(var(--accent-rgb), 0.15)",
                        color: isActive
                          ? "var(--bg-deep)"
                          : item.isQaFavorite
                          ? "var(--green)"
                          : "var(--accent)",
                        border: "1px solid rgba(var(--accent-rgb), 0.4)",
                      }}
                    >
                      {item.letter}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "30px",
                        fontWeight: 800,
                        color: "var(--cream)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.title}
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    {item.isQaFavorite && (
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: "14px",
                          fontWeight: 800,
                          color: "var(--green)",
                          background: "var(--green-bg)",
                          padding: "3px 10px",
                          borderRadius: "4px",
                          border: "1px solid rgba(16, 185, 129, 0.4)",
                        }}
                      >
                        QA FAVORITE
                      </span>
                    )}
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "14px",
                        fontWeight: 700,
                        color: "var(--cream-dim)",
                      }}
                    >
                      Rule 0{item.stepNum}
                    </span>
                  </div>
                </div>
                <div>
                  <div
                    className="bangla"
                    style={{
                      fontSize: "20px",
                      fontWeight: 600,
                      color: "var(--cream)",
                      lineHeight: 1.55,
                      letterSpacing: 0,
                    }}
                  >
                    {item.titleBn}
                  </div>
                  <div
                    style={{
                      fontSize: "20px",
                      lineHeight: 1.45,
                      color: "var(--cream-muted)",
                      marginTop: "6px",
                    }}
                  >
                    {item.summary}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">06 / 14</span>
    </div>
  );
}

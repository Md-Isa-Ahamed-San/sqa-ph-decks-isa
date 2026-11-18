"use client";

import React from "react";

interface Props {
  step?: number;
  isExport?: boolean;
}

const testCases = [
  {
    id: "TC_01",
    type: "POSITIVE",
    title: "TC_01: Valid Email + Valid Password",
    en: "Valid credentials submit -> Immediate Dashboard access (Happy Path).",
    bn: "সঠিক তথ্যে সরাসরি ড্যাশবোর্ড লোড হবে (Happy Path)",
    stepNum: 1,
    roleColor: "var(--green)",
    roleBg: "var(--green-bg)",
    tag: "Positive",
  },
  {
    id: "TC_02",
    type: "NEGATIVE",
    title: "TC_02: Valid Email + Wrong Password",
    en: "Invalid password -> Error alert 'Invalid email or password' displayed.",
    bn: "ভুল পাসওয়ার্ডে সঠিক এরর অ্যালার্ট মেসেজ আসবে",
    stepNum: 2,
    roleColor: "var(--orange)",
    roleBg: "rgba(245, 158, 11, 0.12)",
    tag: "Negative",
  },
  {
    id: "TC_03",
    type: "NEGATIVE",
    title: "TC_03: Unregistered Email Address",
    en: "Non-existent user -> Generic security error alert displayed.",
    bn: "অনিবন্ধিত ইমেইলে সিকিউরিটির জন্য একই জেনেরিক এরর দেবে",
    stepNum: 3,
    roleColor: "var(--orange)",
    roleBg: "rgba(245, 158, 11, 0.12)",
    tag: "Negative",
  },
  {
    id: "TC_04",
    type: "NEGATIVE",
    title: "TC_04: Blank Email and Password",
    en: "Empty inputs -> Client-side validation blocks submission.",
    bn: "ফিল্ড খালি রেখে সাবমিট করলে ভ্যালিডেশন আটকাবে",
    stepNum: 4,
    roleColor: "var(--orange)",
    roleBg: "rgba(245, 158, 11, 0.12)",
    tag: "Negative",
  },
  {
    id: "TC_05",
    type: "BOUNDARY",
    title: "TC_05: Boundary Test (Lockout Limit)",
    en: "5 consecutive wrong attempts -> Account locked for 15 minutes.",
    bn: "পরপর ৫ বার ভুল চেষ্টায় অ্যাকাউন্ট ১৫ মিনিট লক হবে",
    stepNum: 5,
    roleColor: "var(--red)",
    roleBg: "var(--red-bg)",
    tag: "Boundary",
  },
];

const legendItems = [
  {
    key: "POSITIVE",
    name: "POSITIVE",
    color: "var(--green)",
    activeSteps: [1],
    en: "Valid input, the feature works as expected.",
    bn: "সঠিক ইনপুট, ফিচার ঠিকমতো কাজ করে।",
  },
  {
    key: "NEGATIVE",
    name: "NEGATIVE",
    color: "var(--orange)",
    activeSteps: [2, 3, 4],
    en: "Invalid input, the system must reject it safely.",
    bn: "ভুল ইনপুট, সিস্টেম নিরাপদে বাধা দেবে।",
  },
  {
    key: "BOUNDARY",
    name: "BOUNDARY",
    color: "var(--red)",
    activeSteps: [5],
    en: "At the limit: 4 wrong tries stay open, the 5th locks.",
    bn: "সীমার ঠিক কিনারায় যাচাই।",
  },
];

export function Slide10({ step = 0, isExport = false }: Props) {
  const activeStep = isExport ? 5 : (step ?? 0);

  return (
    <div className="slide-split" style={{ position: "relative" }}>
      {/* Left Column */}
      <div
        className="split-left"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          maxHeight: "810px",
        }}
      >
        <div className="slide-eyebrow reveal d1">
          Hands-On Demo • Coverage Expansion
        </div>
        <h2
          className="slide-title reveal-left d2"
          style={{
            fontSize: "64px",
            letterSpacing: "-0.01em",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          Unpacking One Scenario into
          <br />
          <span className="hl">5 Test Cases</span>
        </h2>

        {/* Clean Scenario Card */}
        <div
          className="reveal d3"
          style={{
            padding: "20px 24px",
            background: "rgba(var(--accent-rgb), 0.08)",
            borderRadius: "14px",
            borderLeft: "4px solid var(--accent)",
            border: "1px solid rgba(var(--accent-rgb), 0.2)",
            boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--accent)",
              letterSpacing: "1px",
              marginBottom: "6px",
            }}
          >
            Core Test Scenario
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: 1.45,
              color: "var(--cream)",
            }}
          >
            Scenario TS_AUTH_01: Verify Login functionality with registered user credentials
          </div>
        </div>

        {/* Type Legend (Stacked 3 Rows) */}
        <div
          style={{
            marginTop: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {legendItems.map((item) => {
            const isHighlight =
              !isExport && activeStep > 0 && item.activeSteps.includes(activeStep);
            const opacity = isExport || activeStep === 0 ? 0.55 : isHighlight ? 1 : 0.55;

            return (
              <div
                key={item.key}
                style={{
                  padding: "12px 18px",
                  borderRadius: "10px",
                  background: isHighlight
                    ? "rgba(255, 255, 255, 0.05)"
                    : "rgba(255, 255, 255, 0.02)",
                  borderLeft: isHighlight
                    ? `4px solid ${item.color}`
                    : "4px solid transparent",
                  borderTop: "1px solid var(--gray-line)",
                  borderRight: "1px solid var(--gray-line)",
                  borderBottom: "1px solid var(--gray-line)",
                  opacity,
                  transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                  boxShadow: isHighlight ? `0 0 16px rgba(0, 0, 0, 0.4)` : "none",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      background: item.color,
                      display: "inline-block",
                      boxShadow: isHighlight ? `0 0 10px ${item.color}` : "none",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "16px",
                      fontWeight: 800,
                      color: item.color,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {item.name}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "19px",
                    color: "var(--cream)",
                    lineHeight: 1.4,
                  }}
                >
                  {item.en}
                </div>
                <div
                  className="bangla"
                  style={{
                    fontSize: "16px",
                    color: "var(--cream-muted)",
                    lineHeight: 1.55,
                    letterSpacing: 0,
                    marginTop: "2px",
                  }}
                >
                  {item.bn}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right Column: 5 Test Cases */}
      <div
        className="split-right"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "12px",
          width: "660px",
        }}
      >
        {testCases.map((tc) => {
          const isActive = !isExport && activeStep === tc.stepNum;
          const isPast = !isExport && activeStep > tc.stepNum;
          const isUpcoming = !isExport && activeStep < tc.stepNum;

          return (
            <div
              key={tc.id}
              style={{
                padding: "16px 24px",
                borderRadius: "14px",
                border: isActive
                  ? `2px solid ${tc.roleColor}`
                  : `1px solid var(--gray-line)`,
                background: isActive ? tc.roleBg : "var(--bg-card)",
                boxShadow: isActive
                  ? `0 10px 25px rgba(0,0,0,0.5), 0 0 20px ${tc.roleColor}33`
                  : "none",
                transform: isActive
                  ? "translateY(-4px)"
                  : isUpcoming
                  ? "translateY(12px)"
                  : "none",
                opacity: isExport || isActive || isPast ? 1 : 0.25,
                transition:
                  "opacity 450ms cubic-bezier(0.2, 0.8, 0.2, 1), transform 450ms cubic-bezier(0.2, 0.8, 0.2, 1), border-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), background-color 450ms cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "16px",
              }}
            >
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "4px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "24px",
                      fontWeight: 700,
                      color: isActive ? tc.roleColor : "var(--cream)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {tc.title}
                  </span>
                </div>
                <div
                  style={{
                    fontSize: "19px",
                    color: "var(--cream)",
                    lineHeight: 1.4,
                    marginBottom: "3px",
                  }}
                >
                  {tc.en}
                </div>
                <div
                  className="bangla"
                  style={{
                    fontSize: "16px",
                    color: "var(--cream-muted)",
                    lineHeight: 1.55,
                    letterSpacing: 0,
                  }}
                >
                  {tc.bn}
                </div>
              </div>

              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: tc.roleColor,
                  background: tc.roleBg,
                  padding: "5px 12px",
                  borderRadius: "6px",
                  border: `1px solid ${tc.roleColor}55`,
                  textTransform: "uppercase",
                  alignSelf: "flex-start",
                  marginTop: "4px",
                  whiteSpace: "nowrap",
                }}
              >
                {tc.tag}
              </span>
            </div>
          );
        })}
      </div>

      <div className="bottom-bar reveal d10"></div>
      <span className="page-num">10 / 14</span>
    </div>
  );
}

"use client";

import React from "react";

interface Props {
  step?: number;
  isExport?: boolean;
}

export function Slide11({ step = 0, isExport = false }: Props) {
  const activeStep = isExport ? 4 : (step ?? 0);

  const isSec1Past = isExport || activeStep > 1;
  const isSec1Active = !isExport && activeStep === 1;
  const isSec1Visible = isExport || activeStep >= 1;

  const isSec2Past = isExport || activeStep > 2;
  const isSec2Active = !isExport && activeStep === 2;
  const isSec2Visible = isExport || activeStep >= 2;

  const isSec3Past = isExport || activeStep > 3;
  const isSec3Active = !isExport && activeStep === 3;
  const isSec3Visible = isExport || activeStep >= 3;

  const isSec4Active = !isExport && activeStep === 4;
  const isSec4Visible = isExport || activeStep >= 4;

  return (
    <div className="slide-pad" style={{ position: "relative" }}>
      {/* Slide Header */}
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          LIVE BLUEPRINT • JIRA / TEST MANAGEMENT
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px", letterSpacing: "-0.01em" }}
        >
          Inside a Production-Grade <span className="hl">Test Case</span>
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
          A production test case must be atomic, precise, and completely repeatable.
        </div>
        <div
          className="slide-subtitle-bangla reveal d4"
          style={{
            fontSize: "18px",
            color: "var(--cream-muted)",
            marginBottom: "12px",
            lineHeight: 1.55,
            letterSpacing: 0,
          }}
        >
          একটি প্রফেশনাল টেস্ট কেসে নির্দিষ্ট ডাটা ও ধাপ এমনভাবে থাকতে হবে যেন যেকোনো টেস্টার বা অটোমেশন বোট হুবহু চালাতে পারে।
        </div>
      </div>

      {/* Stage Body Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1080px 600px",
          gap: "40px",
          alignItems: "center",
          margin: "auto 0",
          width: "100%",
        }}
      >
        {/* Left Column: Monospace Terminal Window */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--gray-line)",
            borderRadius: "18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6)",
            fontFamily: "var(--font-mono)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {/* Header Bar (Step 0) */}
          <div
            style={{
              padding: "16px 24px",
              background: "rgba(255, 255, 255, 0.04)",
              borderBottom: "1px solid var(--gray-line)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ display: "flex", gap: "6px" }}>
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--red)" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--orange)" }} />
                <span style={{ width: "12px", height: "12px", borderRadius: "50%", background: "var(--green)" }} />
              </div>
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 800,
                  color: "var(--cream)",
                  letterSpacing: "0.5px",
                }}
              >
                TICKET://TC_LOGIN_02
              </span>
            </div>

            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 800,
                color: "var(--red)",
                background: "var(--red-bg)",
                border: "1px solid rgba(239, 68, 68, 0.4)",
                padding: "4px 12px",
                borderRadius: "6px",
                letterSpacing: "0.5px",
              }}
            >
              High / P1
            </span>
          </div>

          {/* Terminal Body Content */}
          <div
            style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
            }}
          >
            {/* Section 1 (Step 1): Meta Line + Summary */}
            <div
              style={{
                padding: "14px 18px",
                borderRadius: "12px",
                background: isSec1Active
                  ? "rgba(var(--accent-rgb), 0.12)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isSec1Active
                  ? "1px solid rgba(var(--accent-rgb), 0.85)"
                  : "1px solid var(--gray-line)",
                boxShadow: isSec1Active
                  ? "0 0 20px rgba(var(--accent-rgb), 0.25)"
                  : "none",
                transform: isSec1Visible ? "translateY(0)" : "translateY(12px)",
                opacity: isSec1Visible ? 1 : 0.25,
                transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 700,
                  color: "var(--cream-muted)",
                  letterSpacing: "0.5px",
                  marginBottom: "8px",
                }}
              >
                Module: Auth • Req ID: US_AUTH_01 • AC ID: AC 02
              </div>
              <div
                style={{
                  fontSize: "18px",
                  color: "var(--cream)",
                  lineHeight: 1.45,
                  fontWeight: 600,
                }}
              >
                <span style={{ color: "var(--accent)", fontWeight: 800 }}>[TEST CASE SUMMARY]</span>{" "}
                Verify login fails and displays security alert when valid email is paired with an incorrect password.
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "16px",
                  color: "var(--cream-muted)",
                  lineHeight: 1.55,
                  letterSpacing: 0,
                  marginTop: "4px",
                }}
              >
                সঠিক ইমেইল ও ভুল পাসওয়ার্ড দিলে সিকিউরিটি অ্যালার্ট মেসেজ আসবে।
              </div>
            </div>

            {/* Section 2 (Step 2): Precondition + Exact Steps */}
            <div
              style={{
                padding: "16px 18px",
                borderRadius: "12px",
                background: isSec2Active
                  ? "rgba(var(--accent-rgb), 0.12)"
                  : "rgba(255, 255, 255, 0.02)",
                border: isSec2Active
                  ? "1px solid rgba(var(--accent-rgb), 0.85)"
                  : "1px solid var(--gray-line)",
                boxShadow: isSec2Active
                  ? "0 0 20px rgba(var(--accent-rgb), 0.25)"
                  : "none",
                transform: isSec2Visible ? "translateY(0)" : "translateY(12px)",
                opacity: isSec2Visible ? 1 : 0.25,
                transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              {/* Precondition */}
              <div style={{ marginBottom: "12px" }}>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                  }}
                >
                  [PRECONDITION]{" "}
                </span>
                <span style={{ fontSize: "16px", color: "var(--cream)" }}>
                  User is registered (<code>rahim@test.com</code>) and is on the Login page.
                </span>
                <span
                  className="bangla"
                  style={{
                    fontSize: "16px",
                    color: "var(--cream-muted)",
                    marginLeft: "8px",
                    letterSpacing: 0,
                  }}
                >
                  | টেস্ট শুরুর পূর্বশর্ত
                </span>
              </div>

              {/* Exact Test Steps */}
              <div>
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "var(--accent)",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    marginBottom: "6px",
                  }}
                >
                  [EXACT TEST STEPS]
                </div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "var(--cream)",
                    lineHeight: 1.6,
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                  }}
                >
                  <div>1. Navigate to <code>https://app.test.com/login</code></div>
                  <div>2. Enter Email: <code>"rahim@test.com"</code></div>
                  <div>3. Enter Password: <code>"Wrong@999"</code></div>
                  <div>4. Click the "Login" button</div>
                </div>
              </div>
            </div>

            {/* Section 3 (Step 3): Expected & Actual Panes */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
                transform: isSec3Visible ? "translateY(0)" : "translateY(12px)",
                opacity: isSec3Visible ? 1 : 0.25,
                transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
              }}
            >
              {/* Expected Result */}
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: isSec3Active
                    ? "rgba(59, 130, 246, 0.12)"
                    : "rgba(59, 130, 246, 0.06)",
                  border: isSec3Active
                    ? "1px solid var(--blue)"
                    : "1px solid rgba(59, 130, 246, 0.3)",
                  boxShadow: isSec3Active ? "0 0 16px rgba(59, 130, 246, 0.25)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "var(--blue)",
                    letterSpacing: "0.5px",
                    marginBottom: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  [EXPECTED RESULT]
                </div>
                <div style={{ fontSize: "16px", color: "var(--cream)", lineHeight: 1.45 }}>
                  Red alert banner appears with text: <em>"Invalid email or password"</em>. User remains on Login page.
                </div>
              </div>

              {/* Actual Result: PASS */}
              <div
                style={{
                  padding: "14px 16px",
                  borderRadius: "10px",
                  background: isSec3Active
                    ? "rgba(16, 185, 129, 0.15)"
                    : "var(--green-bg)",
                  border: isSec3Active
                    ? "1px solid var(--green)"
                    : "1px solid rgba(16, 185, 129, 0.35)",
                  boxShadow: isSec3Active ? "0 0 16px rgba(16, 185, 129, 0.3)" : "none",
                }}
              >
                <div
                  style={{
                    fontSize: "14px",
                    fontWeight: 800,
                    color: "var(--green)",
                    letterSpacing: "0.5px",
                    marginBottom: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  [ACTUAL RESULT: PASS]
                </div>
                <div style={{ fontSize: "16px", color: "var(--cream)", lineHeight: 1.45 }}>
                  Alert banner displayed correctly. Password field clears automatically. System behaved as expected.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Critical QA Rule Callout + Trace Chip (Step 4) */}
        <div
          style={{
            transform: isSec4Visible ? "translateY(0)" : "translateY(12px)",
            opacity: isSec4Visible ? 1 : 0.25,
            transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Callout Card */}
          <div
            style={{
              padding: "28px 26px",
              borderRadius: "16px",
              background: "rgba(245, 158, 11, 0.1)",
              border: isSec4Active
                ? "2px solid var(--orange)"
                : "1px solid rgba(245, 158, 11, 0.4)",
              boxShadow: isSec4Active
                ? "0 0 35px rgba(245, 158, 11, 0.35), 0 15px 40px rgba(0,0,0,0.5)"
                : "0 10px 30px rgba(0,0,0,0.3)",
              transition: "all 600ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <div
              style={{
                display: "inline-block",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 800,
                color: "var(--orange)",
                background: "rgba(245, 158, 11, 0.2)",
                border: "1px solid rgba(245, 158, 11, 0.5)",
                padding: "4px 12px",
                borderRadius: "6px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                marginBottom: "14px",
              }}
            >
              CRITICAL QA RULE
            </div>

            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                lineHeight: 1.35,
                letterSpacing: "-0.01em",
                marginBottom: "12px",
              }}
            >
              In a negative test, when the system correctly shows the expected error, the Test Case status is{" "}
              <span style={{ color: "var(--green)", textDecoration: "underline" }}>PASS!</span>
            </div>

            <div
              className="bangla"
              style={{
                fontSize: "18px",
                color: "var(--cream-muted)",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              নেগেটিভ টেস্টে সিস্টেম প্রত্যাশিত এরর সঠিকভাবে দেখালে টেস্ট কেসের স্ট্যাটাস হবে PASS, Fail নয়!
            </div>

            {/* Trace Chip (at bottom of callout) */}
            <div
              style={{
                marginTop: "24px",
                paddingTop: "18px",
                borderTop: "1px solid rgba(245, 158, 11, 0.25)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "13px",
                  color: "var(--cream-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: "8px",
                }}
              >
                Requirement Traceability
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 800,
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb), 0.15)",
                  border: "1px solid rgba(var(--accent-rgb), 0.4)",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  boxShadow: isSec4Active
                    ? "0 0 15px rgba(var(--accent-rgb), 0.3)"
                    : "none",
                }}
              >
                <span>US_AUTH_01</span>
                <span style={{ color: "var(--cream-muted)" }}>&rarr;</span>
                <span>AC 02</span>
                <span style={{ color: "var(--cream-muted)" }}>&rarr;</span>
                <span style={{ color: "var(--green)" }}>TC_LOGIN_02</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">11 / 14</span>
    </div>
  );
}

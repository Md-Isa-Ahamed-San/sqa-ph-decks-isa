"use client";

import React from "react";

export function Slide09() {
  return (
    <div
      className="slide-pad"
      style={{ position: "relative" }}
    >
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Core Interview Topic · High-Level vs. Detailed
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          <span style={{ color: "var(--blue)" }}>WHAT</span> to Test vs.{" "}
          <span className="hl">HOW to Test</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          টেস্ট সিনারিও হলো "কী টেস্ট করব", আর টেস্ট কেস হলো "কীভাবে টেস্ট করব" — এ দুটির স্পষ্ট পার্থক্য
        </div>
      </div>

      <div style={{ margin: "auto 0", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <div
        className="reveal d4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px",
          alignItems: "stretch",
        }}
      >
        {/* Left: Scenario (WHAT) */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid var(--gray-line)",
            borderRadius: "16px",
            padding: "32px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--blue)",
                  background: "var(--blue-bg)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                }}
              >
                High-Level Plan
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "28px",
                  color: "var(--blue)",
                }}
              >
                Test Scenario 🗺️
              </span>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-dim)",
                marginBottom: "20px",
              }}
            >
              এক নজরে কী কী ফিচার টেস্ট করা হবে
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "var(--cream)",
                }}
              >
                • One-line summary of a functionality or feature to verify.
              </div>
              <div
                style={{
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "var(--cream)",
                }}
              >
                • Fast to write; great for quick sprint coverage signoff.
              </div>
              <div
                style={{
                  background: "rgba(96, 165, 250, 0.06)",
                  borderRadius: "8px",
                  padding: "16px 18px",
                  borderLeft: "3px solid var(--blue)",
                  marginTop: "6px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "15px",
                    color: "var(--cream-muted)",
                    marginBottom: "4px",
                  }}
                >
                  Example:
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.45, color: "var(--cream)" }}>
                  "Verify Login functionality with both valid and invalid user credentials."
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "14px",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: "17px",
                color: "var(--blue)",
                fontWeight: 700,
              }}
            >
              When to Use:
            </span>
            <span
              className="bangla"
              style={{
                fontSize: "18px",
                color: "var(--cream-muted)",
                marginLeft: "8px",
              }}
            >
              স্প্রিন্ট প্ল্যানিং ও প্রাথমিক টেস্ট কভারেজ মূল্যায়নে।
            </span>
          </div>
        </div>

        {/* Right: Test Case (HOW) */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(var(--accent-rgb), 0.35)",
            borderRadius: "16px",
            padding: "32px 30px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.3)",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "16px",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb), 0.12)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                }}
              >
                Granular Steps
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "28px",
                  color: "var(--accent)",
                }}
              >
                Test Case 🔬
              </span>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-dim)",
                marginBottom: "20px",
              }}
            >
              নির্দিষ্ট ডেটা ও প্রত্যাশিত ফলাফলসহ সম্পূর্ণ গাইড
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "var(--cream)",
                }}
              >
                • Step-by-step instructions with exact inputs and data sets.
              </div>
              <div
                style={{
                  fontSize: "21px",
                  lineHeight: 1.5,
                  color: "var(--cream)",
                }}
              >
                • Completely deterministic: any tester gets the same outcome.
              </div>
              <div
                style={{
                  background: "rgba(var(--accent-rgb), 0.06)",
                  borderRadius: "8px",
                  padding: "16px 18px",
                  borderLeft: "3px solid var(--accent)",
                  marginTop: "6px",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "15px",
                    color: "var(--cream-muted)",
                    marginBottom: "4px",
                  }}
                >
                  Example:
                </div>
                <div style={{ fontSize: "20px", lineHeight: 1.45, color: "var(--cream)" }}>
                  "TC_01: Enter rahim@test.com + Test@1234 -&gt; Dashboard opens."
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "14px",
              marginTop: "20px",
            }}
          >
            <span
              style={{
                fontSize: "17px",
                color: "var(--accent)",
                fontWeight: 700,
              }}
            >
              When to Use:
            </span>
            <span
              className="bangla"
              style={{
                fontSize: "18px",
                color: "var(--cream-muted)",
                marginLeft: "8px",
              }}
            >
              রিলিজ টেস্টিং, রিগ্রেশন রান এবং অটোমেশন স্ক্রিপ্ট তৈরিতে।
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Takeaway Bar */}
      <div
        className="reveal d5"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "18px",
          background: "rgba(20, 14, 38, 0.85)",
          border: "1px solid rgba(var(--accent-rgb), 0.2)",
          borderRadius: "12px",
          padding: "16px 24px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "14px",
            fontWeight: 700,
            textTransform: "uppercase",
            color: "var(--accent)",
            background: "rgba(var(--accent-rgb), 0.15)",
            padding: "4px 12px",
            borderRadius: "6px",
          }}
        >
          Rule of Thumb
        </span>
        <div style={{ fontSize: "20px", color: "var(--cream)" }}>
          1 Test Scenario{" "}
          <strong style={{ color: "var(--accent)" }}>often expands into several Test Cases</strong> (Positive, Negative,
          Boundary).
        </div>
      </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">09 / 14</span>
    </div>
  );
}

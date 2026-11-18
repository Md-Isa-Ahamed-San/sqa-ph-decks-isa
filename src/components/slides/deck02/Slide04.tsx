"use client";

import React from "react";

export function Slide04() {
  return (
    <div className="slide-pad" style={{ position: "relative" }}>
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Critical Analysis · Shift-Left
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          Read the Requirement <span className="hl">Like a QA</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          রিকোয়ারমেন্ট পড়ার QA-স্টাইল — কোড লেখার আগেই অস্পষ্টতা ও ফাঁক শনাক্ত করা
        </div>
      </div>

      <div
        className="reveal d4"
        style={{
          margin: "auto 0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        {/* ROW 1: 3 Red Flags & Before/After Comparison */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "28px",
            alignItems: "stretch",
          }}
        >
          {/* Card 1: Three Red Flags */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--gray-line)",
              borderRadius: "16px",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--red)",
                    background: "var(--red-bg)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Inspection Checklist
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "var(--cream)",
                  }}
                >
                  3 Red Flags to Spot 🚩
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.06)",
                    borderLeft: "3px solid var(--red)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                  }}
                >
                  <div style={{ fontSize: "19px", fontWeight: 700, color: "var(--cream)" }}>
                    1. Vague &amp; Subjective Words
                  </div>
                  <div style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}>
                    "fast", "user-friendly", "secure", "easily", "appropriate" — পরিমাপহীন কথা মানেই ভুল বোঝাবুঝি।
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(245, 158, 11, 0.06)",
                    borderLeft: "3px solid var(--orange)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                  }}
                >
                  <div style={{ fontSize: "19px", fontWeight: 700, color: "var(--cream)" }}>
                    2. Missing Rules &amp; Error Paths
                  </div>
                  <div style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}>
                    সিস্টেমের লিমিট কত? ভুল ইনপুট দিলে কী হবে? সার্ভার ডাউন থাকলে ইউজার কী মেসেজ দেখবে?
                  </div>
                </div>

                <div
                  style={{
                    background: "rgba(168, 85, 247, 0.06)",
                    borderLeft: "3px solid var(--accent)",
                    padding: "10px 14px",
                    borderRadius: "6px",
                  }}
                >
                  <div style={{ fontSize: "19px", fontWeight: 700, color: "var(--cream)" }}>
                    3. Contradictions Between Features
                  </div>
                  <div style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}>
                    একটি রিকোয়ারমেন্টের সাথে অন্যটির সাংঘর্ষিক শর্ত (e.g. "Password mandatory" vs "1-click guest login")।
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Before / After Example */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--gray-line)",
              borderRadius: "16px",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    background: "rgba(var(--accent-rgb), 0.12)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Real-World Transformation
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 800,
                    fontSize: "22px",
                    color: "var(--cream)",
                  }}
                >
                  Weak vs. Clarified ⚖️
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {/* Weak */}
                <div
                  style={{
                    background: "rgba(239, 68, 68, 0.08)",
                    border: "1px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "16px", color: "var(--red)", fontWeight: 800 }}>❌ WEAK REQUIREMENT:</span>
                    <span style={{ fontSize: "15px", color: "var(--cream-muted)" }}>(অস্পষ্ট কথা)</span>
                  </div>
                  <div style={{ fontSize: "19px", color: "var(--cream)", fontStyle: "italic" }}>
                    "Login should be fast, user-friendly, and password very secure."
                  </div>
                </div>

                {/* Clarified */}
                <div
                  style={{
                    background: "rgba(16, 185, 129, 0.08)",
                    border: "1px solid rgba(16, 185, 129, 0.35)",
                    borderRadius: "10px",
                    padding: "12px 16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "16px", color: "var(--green)", fontWeight: 800 }}>✅ QA-CLARIFIED SPEC:</span>
                    <span style={{ fontSize: "15px", color: "var(--cream-muted)" }}>(সুনির্দিষ্ট শর্ত)</span>
                  </div>
                  <div style={{ fontSize: "18px", color: "var(--cream)", lineHeight: 1.45 }}>
                    "1. Login API responds within <strong>2 seconds</strong> for 95% of users.<br />
                    2. Password must be <strong>8–20 chars</strong> with 1 uppercase &amp; 1 digit.<br />
                    3. Account locks for <strong>15 minutes</strong> after 5 consecutive failed attempts."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: 3 Questions a QA Asks */}
        <div
          style={{
            background: "rgba(20, 14, 38, 0.85)",
            border: "1px solid rgba(var(--accent-rgb), 0.25)",
            borderRadius: "14px",
            padding: "16px 24px",
            display: "grid",
            gridTemplateColumns: "240px 1fr 1fr 1fr",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "13px",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              Sprint Refinement
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "20px",
                fontWeight: 800,
                color: "var(--cream)",
              }}
            >
              3 Questions QA Asks
            </div>
          </div>

          <div style={{ borderLeft: "2px solid rgba(var(--accent-rgb), 0.3)", paddingLeft: "14px" }}>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "var(--cream)" }}>
              Q1: What is the exact limit?
            </div>
            <div className="bangla" style={{ fontSize: "15px", color: "var(--cream-muted)", marginTop: "2px" }}>
              সর্বোচ্চ কত সংখ্যা, সাইজ বা সময় অনুমোদিত?
            </div>
          </div>

          <div style={{ borderLeft: "2px solid rgba(var(--accent-rgb), 0.3)", paddingLeft: "14px" }}>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "var(--cream)" }}>
              Q2: What happens on invalid input?
            </div>
            <div className="bangla" style={{ fontSize: "15px", color: "var(--cream-muted)", marginTop: "2px" }}>
              ভুল ডেটা দিলে ঠিক কী এরর মেসেজ দেখাবে?
            </div>
          </div>

          <div style={{ borderLeft: "2px solid rgba(var(--accent-rgb), 0.3)", paddingLeft: "14px" }}>
            <div style={{ fontSize: "17px", fontWeight: 700, color: "var(--cream)" }}>
              Q3: Who confirms the rule?
            </div>
            <div className="bangla" style={{ fontSize: "15px", color: "var(--cream-muted)", marginTop: "2px" }}>
              অস্পষ্টতা থাকলে Product Owner অনুমোদন দিয়েছেন?
            </div>
          </div>
        </div>

        {/* ROW 3: Bottom Takeaway */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            background: "rgba(16, 185, 129, 0.08)",
            border: "1px solid rgba(16, 185, 129, 0.3)",
            borderRadius: "10px",
            padding: "12px 20px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "13px",
              fontWeight: 800,
              textTransform: "uppercase",
              color: "var(--green)",
              background: "rgba(16, 185, 129, 0.2)",
              padding: "4px 10px",
              borderRadius: "5px",
            }}
          >
            Golden Rule
          </span>
          <div style={{ fontSize: "19px", color: "var(--cream)" }}>
            "Questions asked before coding are the <strong>cheapest bugs to fix</strong>."{" "}
            <span className="bangla" style={{ color: "var(--cream-muted)", marginLeft: "8px" }}>
              (কোড লেখার আগেই প্রশ্ন তুলে অস্পষ্টতা দূর করাই শিফট-লেফট টেস্টিংয়ের আসল শক্তি)
            </span>
          </div>
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">04 / 14</span>
    </div>
  );
}

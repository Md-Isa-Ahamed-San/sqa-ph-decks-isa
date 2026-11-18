"use client";

import React from "react";

export function Slide14() {
  return (
    <div className="slide-pad" style={{ position: "relative" }}>
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Summary &amp; Practical Next Steps
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px", letterSpacing: "-0.01em" }}
        >
          4 Takeaways to <span className="hl">Master Test Design</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
            lineHeight: 1.55,
            letterSpacing: 0,
          }}
        >
          রিকোয়ারমেন্ট থেকে টেস্ট ডিজাইনের ৪টি মূল স্তম্ভ — যেকোনো প্রজেক্টে সাফল্যের চাবিকাঠি
        </div>
      </div>

      <div
        style={{
          margin: "auto 0",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* 4-Card Recap Grid */}
        <div
          className="recap-grid reveal d4"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            alignItems: "stretch",
          }}
        >
          {/* Takeaway 1 */}
          <div
            className="card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--gray-line)",
              borderRadius: "16px",
              padding: "28px 24px",
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
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "32px" }}>🔍</span>
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
                  Shift-Left
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                Question Early
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "18px",
                  color: "var(--cream-dim)",
                  marginBottom: "12px",
                  lineHeight: 1.55,
                  letterSpacing: 0,
                }}
              >
                কোডিংয়ের আগেই স্পষ্ট করা
              </div>
              <div
                style={{
                  fontSize: "19px",
                  lineHeight: 1.45,
                  color: "var(--cream)",
                }}
              >
                QA begins in sprint planning. Bugs found in requirements are the
                cheapest to fix.
              </div>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "16px",
                color: "var(--cream-muted)",
                borderTop: "1px solid var(--gray-line)",
                paddingTop: "10px",
                marginTop: "14px",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              কোড লেখার আগেই প্রশ্ন তুলে বাগ বাঁচানো
            </div>
          </div>

          {/* Takeaway 2 */}
          <div
            className="card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--gray-line)",
              borderRadius: "16px",
              padding: "28px 24px",
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
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "32px" }}>⚓</span>
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
                  Anchor
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                AC is the Anchor
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "18px",
                  color: "var(--cream-dim)",
                  marginBottom: "12px",
                  lineHeight: 1.55,
                  letterSpacing: 0,
                }}
              >
                শর্তই টেস্টের মূল ভিত্তি
              </div>
              <div
                style={{
                  fontSize: "19px",
                  lineHeight: 1.45,
                  color: "var(--cream)",
                }}
              >
                Acceptance Criteria define the exact boundary between Pass and
                Fail. Never guess functionality.
              </div>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "16px",
                color: "var(--cream-muted)",
                borderTop: "1px solid var(--gray-line)",
                paddingTop: "10px",
                marginTop: "14px",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              AC মেনেই টেস্টের প্রতিটি বাউন্ডারি তৈরি হয়
            </div>
          </div>

          {/* Takeaway 3 */}
          <div
            className="card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--gray-line)",
              borderRadius: "16px",
              padding: "28px 24px",
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
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "32px" }}>🧭</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--orange)",
                    background: "rgba(245, 158, 11, 0.12)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Structure
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                What vs. How
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "18px",
                  color: "var(--cream-dim)",
                  marginBottom: "12px",
                  lineHeight: 1.55,
                  letterSpacing: 0,
                }}
              >
                সিনারিও বনাম টেস্ট কেস
              </div>
              <div
                style={{
                  fontSize: "19px",
                  lineHeight: 1.45,
                  color: "var(--cream)",
                }}
              >
                Scenarios quickly outline what to cover; Test Cases provide exact
                step-by-step instructions.
              </div>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "16px",
                color: "var(--cream-muted)",
                borderTop: "1px solid var(--gray-line)",
                paddingTop: "10px",
                marginTop: "14px",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              সিনারিও হলো হাই-লেভেল, টেস্ট কেস হলো একশন
            </div>
          </div>

          {/* Takeaway 4 */}
          <div
            className="card"
            style={{
              background: "var(--bg-card)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              borderRadius: "16px",
              padding: "28px 24px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "14px",
                }}
              >
                <span style={{ fontSize: "32px" }}>🎯</span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--green)",
                    background: "var(--green-bg)",
                    padding: "4px 10px",
                    borderRadius: "6px",
                  }}
                >
                  Best Practice
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "24px",
                  fontWeight: 700,
                  color: "var(--cream)",
                  marginBottom: "4px",
                  letterSpacing: "-0.01em",
                }}
              >
                Atomic &amp; Specific
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "18px",
                  color: "var(--cream-dim)",
                  marginBottom: "12px",
                  lineHeight: 1.55,
                  letterSpacing: 0,
                }}
              >
                পরিমাপযোগ্য ও সুনির্দিষ্ট
              </div>
              <div
                style={{
                  fontSize: "19px",
                  lineHeight: 1.45,
                  color: "var(--cream)",
                }}
              >
                Never write "works fine". Always specify exact inputs, precise
                steps, and measurable UI behaviors.
              </div>
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "16px",
                color: "var(--cream-muted)",
                borderTop: "1px solid var(--gray-line)",
                paddingTop: "10px",
                marginTop: "14px",
                lineHeight: 1.55,
                letterSpacing: 0,
              }}
            >
              ১ টেস্ট কেস = ১ সুনির্দিষ্ট স্পষ্ট লক্ষ্য
            </div>
          </div>
        </div>

        {/* Closing Punchline Bar */}
        <div
          className="reveal d5"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            background: "var(--bg-card)",
            border: "1px solid rgba(var(--accent-rgb), 0.25)",
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
            Closing Takeaway
          </span>
          <div
            className="bangla"
            style={{ fontSize: "22px", color: "var(--cream)", fontWeight: 600, letterSpacing: 0 }}
          >
            রিকোয়ারমেন্ট থেকে সঠিক প্রশ্ন করাই একজন সাধারণ টেস্টারকে প্রফেশনাল QA
            ইঞ্জিনিয়ারে পরিণত করে।
          </div>
        </div>

      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">14 / 14</span>
    </div>
  );
}

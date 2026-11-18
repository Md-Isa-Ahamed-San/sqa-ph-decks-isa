"use client";

import React from "react";

export function Slide08() {
  return (
    <div
      className="slide-pad"
      style={{ position: "relative" }}
    >
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Agile Documentation · Format Contrast
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          Checklist Style vs. <span className="hl">Given-When-Then</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          ইন্ডাস্ট্রিতে Acceptance Criteria লেখার দুটি প্রধান পদ্ধতি — যেকোনো ফরম্যাট থেকেই QA টেস্ট বের করতে পারে
        </div>
      </div>

      <div
        className="reveal d4"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "36px",
          alignItems: "stretch",
          margin: "auto 0",
        }}
      >
        {/* Left: Rule / Checklist */}
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
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb), 0.12)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                }}
              >
                Format 01
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "26px",
                  color: "var(--cream)",
                }}
              >
                Rule / Checklist Style 📋
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
              সহজ বুলেট পয়েন্ট, যা দ্রুত পড়ার জন্য সেরা
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <div style={{ fontSize: "22px", lineHeight: 1.45, color: "var(--cream)" }}>
                  • Email must be valid format with standard domain.
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <div style={{ fontSize: "22px", lineHeight: 1.45, color: "var(--cream)" }}>
                  • Password must be 8–20 chars with at least 1 digit.
                </div>
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--accent)",
                }}
              >
                <div style={{ fontSize: "22px", lineHeight: 1.45, color: "var(--cream)" }}>
                  • 5 consecutive failed tries = 15-minute account lock.
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
              Advantage:
            </span>
            <span
              className="bangla"
              style={{
                fontSize: "18px",
                color: "var(--cream-muted)",
                marginLeft: "8px",
              }}
            >
              দ্রুত লেখা যায়, ডেভেলপার ও টেস্টাররা এক নজরে শর্ত বুঝতে পারে।
            </span>
          </div>
        </div>

        {/* Right: BDD Given-When-Then */}
        <div
          style={{
            background: "var(--bg-card)",
            border: "1px solid rgba(var(--qc-accent-rgb), 0.35)",
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
                  color: "var(--qc-accent)",
                  background: "rgba(var(--qc-accent-rgb), 0.12)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                }}
              >
                Format 02
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "26px",
                  color: "var(--cream)",
                }}
              >
                Scenario / BDD Style 🥒
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
              ব্যবহারকারীর আচরণ বোঝায় অত্যন্ত স্পষ্ট পদ্ধতি
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div
                style={{
                  background: "rgba(34, 211, 238, 0.05)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--qc-accent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 800,
                    color: "var(--qc-accent)",
                    fontSize: "16px",
                  }}
                >
                  GIVEN
                </span>
                <span
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.45,
                    color: "var(--cream)",
                    marginLeft: "10px",
                  }}
                >
                  the user is on the Login page
                </span>
              </div>
              <div
                style={{
                  background: "rgba(34, 211, 238, 0.05)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--qc-accent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 800,
                    color: "var(--qc-accent)",
                    fontSize: "16px",
                  }}
                >
                  WHEN
                </span>
                <span
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.45,
                    color: "var(--cream)",
                    marginLeft: "10px",
                  }}
                >
                  user enters valid email &amp; password and clicks "Login"
                </span>
              </div>
              <div
                style={{
                  background: "rgba(34, 211, 238, 0.05)",
                  borderRadius: "8px",
                  padding: "16px 20px",
                  borderLeft: "3px solid var(--qc-accent)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontWeight: 800,
                    color: "var(--qc-accent)",
                    fontSize: "16px",
                  }}
                >
                  THEN
                </span>
                <span
                  style={{
                    fontSize: "21px",
                    lineHeight: 1.45,
                    color: "var(--cream)",
                    marginLeft: "10px",
                  }}
                >
                  the user is redirected to Dashboard with success toast
                </span>
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
                color: "var(--qc-accent)",
                fontWeight: 700,
              }}
            >
              Advantage:
            </span>
            <span
              className="bangla"
              style={{
                fontSize: "18px",
                color: "var(--cream-muted)",
                marginLeft: "8px",
              }}
            >
              অটোমেশন টেস্টিং (Cucumber/Playwright)-এর সাথে সরাসরি ম্যাপ করা যায়।
            </span>
          </div>
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">08 / 14</span>
    </div>
  );
}

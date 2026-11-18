"use client";

import React from "react";

export function Slide05({ step = 1 }: { step?: number; isExport?: boolean }) {
  return (
    <div
      className="slide-pad"
      style={{ position: "relative" }}
    >
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          End-to-End Flow · The Golden Thread
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          How Rules Become <span className="hl">Actual Tests</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          ক্লায়েন্টের রিকোয়ারমেন্ট থেকে এক্সিকিউটেবল টেস্ট কেসে রূপান্তরের ৪টি মূল ধাপ
        </div>
      </div>

      <div style={{ margin: "auto 0", width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* 4-Card Horizontal Process Grid */}
      <div
        className="pipeline-grid reveal d4"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "24px",
          alignItems: "stretch",
          marginBottom: "20px",
        }}
      >
        {/* Step 1: User Story */}
        <div
          className="pipe-card"
          data-step="1"
          style={{
            background: "var(--bg-card)",
            border:
              step === 1
                ? "1px solid rgba(var(--accent-rgb), 0.8)"
                : "1px solid var(--gray-line)",
            borderRadius: "14px",
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            transform: step === 1 ? "translateY(-6px)" : "none",
            boxShadow:
              step === 1
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(var(--accent-rgb), 0.25)"
                : "none",
            opacity: step >= 1 ? 1 : 0.4,
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
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "22px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(var(--accent-rgb), 0.15)",
                  color: "var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                1
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--accent)",
                  background: "rgba(var(--accent-rgb), 0.1)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                Requirement
              </span>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "4px",
              }}
            >
              User Story
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "19px",
                color: "var(--cream-dim)",
                marginBottom: "14px",
              }}
            >
              ইউজারের মূল চাহিদা
            </div>

            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "var(--cream)",
                background: "rgba(255, 255, 255, 0.03)",
                padding: "14px 16px",
                borderRadius: "8px",
                borderLeft: "3px solid var(--accent)",
              }}
            >
              "As a registered user, I want to log in securely with my email and password."
            </div>
          </div>
          <div
            className="bangla"
            style={{
              fontSize: "16px",
              color: "var(--cream-muted)",
              marginTop: "14px",
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "10px",
            }}
          >
            ক্লায়েন্ট বা বিজনেসের হাই-লেভেল প্রত্যাশা
          </div>
        </div>

        {/* Step 2: AC */}
        <div
          className="pipe-card"
          data-step="2"
          style={{
            background: "var(--bg-card)",
            border:
              step === 2
                ? "1px solid rgba(103, 232, 249, 0.8)"
                : "1px solid var(--gray-line)",
            borderRadius: "14px",
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            transform: step === 2 ? "translateY(-6px)" : "none",
            boxShadow:
              step === 2
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(103, 232, 249, 0.25)"
                : "none",
            opacity: step >= 2 ? 1 : 0.4,
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
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "22px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(103, 232, 249, 0.15)",
                  color: "var(--qc-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                2
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--qc-accent)",
                  background: "rgba(103, 232, 249, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                Boundary Rule
              </span>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "4px",
              }}
            >
              Acceptance Criteria
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "19px",
                color: "var(--cream-dim)",
                marginBottom: "14px",
              }}
            >
              স্টোরির নির্দিষ্ট শর্ত
            </div>

            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "var(--cream)",
                background: "rgba(255, 255, 255, 0.03)",
                padding: "14px 16px",
                borderRadius: "8px",
                borderLeft: "3px solid var(--qc-accent)",
              }}
            >
              "Account must be locked for 15 minutes after 5 consecutive failed password attempts."
            </div>
          </div>
          <div
            className="bangla"
            style={{
              fontSize: "16px",
              color: "var(--cream-muted)",
              marginTop: "14px",
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "10px",
            }}
          >
            পাস/ফেল মূল্যায়নের সুনির্দিষ্ট সীমানা
          </div>
        </div>

        {/* Step 3: Test Scenario */}
        <div
          className="pipe-card"
          data-step="3"
          style={{
            background: "var(--bg-card)",
            border:
              step === 3
                ? "1px solid rgba(245, 158, 11, 0.8)"
                : "1px solid var(--gray-line)",
            borderRadius: "14px",
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            transform: step === 3 ? "translateY(-6px)" : "none",
            boxShadow:
              step === 3
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(245, 158, 11, 0.25)"
                : "none",
            opacity: step >= 3 ? 1 : 0.4,
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
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "22px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(245, 158, 11, 0.15)",
                  color: "var(--orange)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                3
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--orange)",
                  background: "var(--orange-bg)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                High-Level What
              </span>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "4px",
              }}
            >
              Test Scenario
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "19px",
                color: "var(--cream-dim)",
                marginBottom: "14px",
              }}
            >
              কী টেস্ট করব (পরিকল্পনা)
            </div>

            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "var(--cream)",
                background: "rgba(255, 255, 255, 0.03)",
                padding: "14px 16px",
                borderRadius: "8px",
                borderLeft: "3px solid var(--orange)",
              }}
            >
              "Verify that user account lockout triggers accurately on multiple invalid attempts."
            </div>
          </div>
          <div
            className="bangla"
            style={{
              fontSize: "16px",
              color: "var(--cream-muted)",
              marginTop: "14px",
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "10px",
            }}
          >
            এক লাইনে টেস্ট কভারেজের সামগ্রিক খসড়া
          </div>
        </div>

        {/* Step 4: Test Case */}
        <div
          className="pipe-card"
          data-step="4"
          style={{
            background: "var(--bg-card)",
            border:
              step === 4
                ? "1px solid rgba(52, 211, 153, 0.8)"
                : "1px solid var(--gray-line)",
            borderRadius: "14px",
            padding: "26px 24px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            transition: "all 0.3s ease",
            transform: step === 4 ? "translateY(-6px)" : "none",
            boxShadow:
              step === 4
                ? "0 10px 30px rgba(0, 0, 0, 0.6), 0 0 25px rgba(52, 211, 153, 0.25)"
                : "none",
            opacity: step >= 4 ? 1 : 0.4,
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
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "22px",
                  width: "40px",
                  height: "40px",
                  borderRadius: "50%",
                  background: "rgba(52, 211, 153, 0.15)",
                  color: "#34D399",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                4
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#34D399",
                  background: "rgba(52, 211, 153, 0.1)",
                  padding: "4px 10px",
                  borderRadius: "6px",
                }}
              >
                Atomic How
              </span>
            </div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "4px",
              }}
            >
              Test Case
            </div>
            <div
              className="bangla"
              style={{
                fontSize: "19px",
                color: "var(--cream-dim)",
                marginBottom: "14px",
              }}
            >
              কীভাবে টেস্ট করব (বিস্তারিত)
            </div>

            <div
              style={{
                fontSize: "19px",
                lineHeight: 1.45,
                color: "var(--cream)",
                background: "rgba(255, 255, 255, 0.03)",
                padding: "14px 16px",
                borderRadius: "8px",
                borderLeft: "3px solid #34D399",
              }}
            >
              "TC_05: Enter wrong pass 5 times. Expected: Error alert + Account locked for 15m."
            </div>
          </div>
          <div
            className="bangla"
            style={{
              fontSize: "16px",
              color: "var(--cream-muted)",
              marginTop: "14px",
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "10px",
            }}
          >
            সুনির্দিষ্ট ইনপুট ডেটা ও পরিমাপযোগ্য ফলাফল
          </div>
        </div>
      </div>

      {/* Note Bar */}
      <div
        className="reveal d5"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          background: "rgba(20, 14, 38, 0.85)",
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
            background: "rgba(var(--accent-rgb), 0.18)",
            padding: "4px 12px",
            borderRadius: "6px",
          }}
        >
          Golden Thread
        </span>
        <div style={{ fontSize: "20px", color: "var(--cream)", lineHeight: 1.4 }}>
          Every professional test case traces directly back to a business rule:{" "}
          <strong style={{ color: "var(--accent)" }}>
            Story → AC → Scenario → Test Case
          </strong>
          .
          <span
            className="bangla"
            style={{ color: "var(--cream-muted)", marginLeft: "8px", fontSize: "19px" }}
          >
            (কোনো টেস্ট কেসই অনুমান থেকে লেখা যাবে না)
          </span>
        </div>
      </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">05 / 14</span>
    </div>
  );
}

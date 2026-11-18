"use client";

import React from "react";

interface Props {
  step?: number;
  isExport?: boolean;
}

export function Slide13({ step = 0, isExport = false }: Props) {
  const activeStep = isExport ? 3 : (step ?? 0);

  const isSheetVisible = isExport || activeStep >= 1;
  const isWorkflowVisible = isExport || activeStep >= 2;
  const isTargetVisible = isExport || activeStep >= 3;

  return (
    <div className="slide-pad" style={{ position: "relative" }}>
      {/* Slide Header */}
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          LIVE DEMO • GOOGLE SHEETS
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px", letterSpacing: "-0.01em" }}
        >
          Live Demo: Build the <span className="hl">Login Test Sheet</span>
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
          The same sheet format used on the job, demonstrated with 3 core test cases from our Acceptance Criteria.
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
          চাকরিতে ব্যবহৃত ফরম্যাটে আমাদের AC থেকে ৩টি মূল টেস্ট কেসের লাইভ ডেমোস্ট্রেশন।
        </div>
      </div>

      {/* Stage Body */}
      <div
        style={{
          margin: "auto 0",
          width: "1720px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {/* ROW 1: Spreadsheet Mockup (3 Demonstration Rows) */}
        <div
          style={{
            width: "100%",
            borderRadius: "14px",
            background: "var(--bg-card)",
            border: "1px solid var(--gray-line)",
            boxShadow: isSheetVisible
              ? "0 15px 40px rgba(0,0,0,0.5), 0 0 25px rgba(var(--accent-rgb), 0.15)"
              : "none",
            transform: isSheetVisible ? "translateY(0)" : "translateY(12px)",
            opacity: isSheetVisible ? 1 : 0.25,
            transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            overflow: "hidden",
            fontFamily: "var(--font-mono)",
          }}
        >
          {/* Top Group Label Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "250px 420px 520px 530px",
              textAlign: "center",
              fontSize: "14px",
              fontWeight: 800,
              letterSpacing: "1px",
              borderBottom: "1px solid var(--gray-line)",
              background: "rgba(0, 0, 0, 0.3)",
            }}
          >
            <div
              style={{
                padding: "7px",
                color: "var(--blue)",
                background: "rgba(59, 130, 246, 0.1)",
                borderRight: "1px solid var(--gray-line)",
              }}
            >
              IDENTIFY
            </div>
            <div
              style={{
                padding: "7px",
                color: "var(--accent)",
                background: "rgba(var(--accent-rgb), 0.1)",
                borderRight: "1px solid var(--gray-line)",
              }}
            >
              DESCRIBE
            </div>
            <div
              style={{
                padding: "7px",
                color: "var(--cream-dim)",
                background: "rgba(255, 255, 255, 0.04)",
                borderRight: "1px solid var(--gray-line)",
              }}
            >
              EXECUTE
            </div>
            <div
              style={{
                padding: "7px",
                color: "var(--green)",
                background: "rgba(16, 185, 129, 0.1)",
              }}
            >
              VERIFY
            </div>
          </div>

          {/* Actual 9-Column Header Row */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "150px 100px 200px 220px 280px 240px 220px 160px 150px",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--cream)",
              background: "rgba(0, 0, 0, 0.2)",
              borderBottom: "1px solid var(--gray-line)",
            }}
          >
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Test Case ID
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              AC ID
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Title
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Preconditions
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Steps to Execute
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Test Data
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Expected Result
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              Actual Result
            </div>
            <div style={{ padding: "8px 12px" }}>Status</div>
          </div>

          {/* Sample Row 1: Valid Login */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "150px 100px 200px 220px 280px 240px 220px 160px 150px",
              fontSize: "15px",
              lineHeight: 1.35,
              color: "var(--cream)",
              borderBottom: "1px solid var(--gray-line)",
              minHeight: "74px",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--green)", fontWeight: 800 }}>
              TC_LOGIN_01
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--accent)" }}>
              AC 01
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", fontWeight: 600 }}>
              Valid login
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)" }}>
              User on Login page
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              1. Enter email<br />2. Enter password<br />3. Click Login
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-dim)" }}>
              rahim@test.com / Pass@123
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--green)" }}>
              Dashboard opens
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)", fontStyle: "italic", textAlign: "center" }}>
              (pending run)
            </div>
            <div style={{ padding: "8px 12px", color: "var(--green)", fontWeight: 700, textAlign: "center" }}>
              READY
            </div>
          </div>

          {/* Sample Row 2: Wrong Password */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "150px 100px 200px 220px 280px 240px 220px 160px 150px",
              fontSize: "15px",
              lineHeight: 1.35,
              color: "var(--cream)",
              background: "rgba(255, 255, 255, 0.02)",
              borderBottom: "1px solid var(--gray-line)",
              minHeight: "74px",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--orange)", fontWeight: 800 }}>
              TC_LOGIN_02
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--accent)" }}>
              AC 02
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", fontWeight: 600 }}>
              Wrong password
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)" }}>
              User is registered
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              1. Enter email<br />2. Enter wrong password<br />3. Click Login
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-dim)" }}>
              rahim@test.com / Wrong@999
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--orange)" }}>
              Red alert &quot;Invalid email or password&quot;
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)", fontStyle: "italic", textAlign: "center" }}>
              (pending run)
            </div>
            <div style={{ padding: "8px 12px", color: "var(--green)", fontWeight: 700, textAlign: "center" }}>
              READY
            </div>
          </div>

          {/* Sample Row 3: Blank Fields */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "150px 100px 200px 220px 280px 240px 220px 160px 150px",
              fontSize: "15px",
              lineHeight: 1.35,
              color: "var(--cream)",
              minHeight: "74px",
              alignItems: "center",
            }}
          >
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--blue)", fontWeight: 800 }}>
              TC_LOGIN_03
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--accent)" }}>
              AC 02
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", fontWeight: 600 }}>
              Blank credentials
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)" }}>
              User on Login page
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)" }}>
              1. Leave email empty<br />2. Leave password empty<br />3. Click Login
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-dim)" }}>
              (empty) / (empty)
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--blue)" }}>
              Field validation: &quot;Email &amp; password required&quot;
            </div>
            <div style={{ padding: "8px 12px", borderRight: "1px solid var(--gray-line)", color: "var(--cream-muted)", fontStyle: "italic", textAlign: "center" }}>
              (pending run)
            </div>
            <div style={{ padding: "8px 12px", color: "var(--green)", fontWeight: 700, textAlign: "center" }}>
              READY
            </div>
          </div>
        </div>

        {/* ROW 2: Two Cards (840px each, gap 40px) */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "840px 840px",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {/* LEFT CARD: The Workflow */}
          <div
            style={{
              background: "var(--bg-card)",
              border: activeStep === 2 ? "2px solid var(--accent)" : "1px solid var(--gray-line)",
              boxShadow: activeStep === 2
                ? "0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(var(--accent-rgb), 0.25)"
                : "none",
              borderRadius: "16px",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: isWorkflowVisible ? "translateY(0)" : "translateY(12px)",
              opacity: isWorkflowVisible ? 1 : 0.25,
              transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "var(--cream)",
                  letterSpacing: "-0.01em",
                }}
              >
                The 4-Step Test Writing Routine
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "17px",
                  color: "var(--cream-muted)",
                  marginTop: "2px",
                  lineHeight: 1.55,
                }}
              >
                টেস্ট কেস লেখার দৈনন্দিন ধারাবাহিক নিয়ম
              </div>
            </div>

            {/* 4 Chips joined by arrows */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "8px",
                margin: "16px 0",
              }}
            >
              {[
                { en: "Read AC", bn: "AC পড়ো", role: "var(--accent)", bg: "rgba(var(--accent-rgb), 0.15)" },
                { en: "Scenario", bn: "সিনারিও লেখো", role: "var(--accent)", bg: "rgba(var(--accent-rgb), 0.15)" },
                { en: "Test Cases", bn: "টেস্ট কেস বানাও", role: "var(--accent)", bg: "rgba(var(--accent-rgb), 0.15)" },
                { en: "Run & Mark", bn: "Pass-Fail দাও", role: "var(--green)", bg: "var(--green-bg)" },
              ].map((chip, idx) => (
                <React.Fragment key={chip.en}>
                  <div
                    style={{
                      flex: 1,
                      padding: "12px 10px",
                      borderRadius: "10px",
                      background: chip.bg,
                      border: `1px solid ${chip.role}55`,
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "15px",
                        fontWeight: 800,
                        color: chip.role,
                        marginBottom: "2px",
                      }}
                    >
                      {chip.en}
                    </div>
                    <div
                      className="bangla"
                      style={{
                        fontSize: "14px",
                        color: "var(--cream)",
                        lineHeight: 1.3,
                      }}
                    >
                      {chip.bn}
                    </div>
                  </div>
                  {idx < 3 && (
                    <span
                      style={{
                        fontSize: "18px",
                        color: "var(--cream-muted)",
                        fontWeight: 700,
                      }}
                    >
                      &rarr;
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <div style={{ fontSize: "16px", color: "var(--cream-dim)", lineHeight: 1.4 }}>
              প্রতিটি Acceptance Criteria থেকে কমপক্ষে ১টি Positive এবং প্রাসঙ্গিক Negative টেস্ট কেস তৈরি করা হয়।
            </div>
          </div>

          {/* RIGHT CARD: Practical Workshop Roadmap */}
          <div
            style={{
              background: "var(--bg-card)",
              border: activeStep === 3 ? "2px solid var(--accent)" : "1px solid var(--gray-line)",
              boxShadow: activeStep === 3
                ? "0 10px 30px rgba(0,0,0,0.5), 0 0 25px rgba(var(--accent-rgb), 0.25)"
                : "none",
              borderRadius: "16px",
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transform: isTargetVisible ? "translateY(0)" : "translateY(12px)",
              opacity: isTargetVisible ? 1 : 0.25,
              transition: "all 450ms cubic-bezier(0.2, 0.8, 0.2, 1)",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "22px",
                    fontWeight: 800,
                    color: "var(--cream)",
                  }}
                >
                  Practical Workshop Roadmap 🚀
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "var(--accent)",
                    background: "rgba(var(--accent-rgb), 0.15)",
                    padding: "3px 8px",
                    borderRadius: "5px",
                  }}
                >
                  COMING IN VIDEO 6
                </span>
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "17px",
                  color: "var(--cream-muted)",
                  marginTop: "2px",
                  lineHeight: 1.55,
                }}
              >
                সম্পূর্ণ প্র্যাকটিক্যাল টেস্ট স্যুট তৈরির পরিকল্পনা
              </div>
            </div>

            <div
              style={{
                background: "rgba(var(--accent-rgb), 0.08)",
                border: "1px solid rgba(var(--accent-rgb), 0.25)",
                borderRadius: "12px",
                padding: "16px 20px",
                margin: "12px 0",
              }}
            >
              <div style={{ fontSize: "19px", color: "var(--cream)", lineHeight: 1.45, fontWeight: 600 }}>
                The full 25-case practical comes in{" "}
                <span style={{ color: "var(--accent)" }}>Video 6</span>, after you learn EP and BVA.
              </div>
              <div
                className="bangla"
                style={{
                  fontSize: "17px",
                  color: "var(--cream-dim)",
                  marginTop: "8px",
                  lineHeight: 1.5,
                }}
              >
                ভিডিও ২-এ Equivalence Partitioning ও Boundary Value Analysis শেখার পর, ভিডিও ৬-এ আমরা লাইভ
                লগইন, রেজিস্ট্রেশন ও প্রোফাইল ফিচারের পূর্ণাঙ্গ ২৫টি টেস্ট কেস তৈরি করব।
              </div>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                color: "var(--cream-muted)",
              }}
            >
              <span>Target: Login (8-10)</span>
              <span>•</span>
              <span>Registration (8-10)</span>
              <span>•</span>
              <span>Profile (5-7)</span>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">13 / 14</span>
    </div>
  );
}

"use client";

import React from "react";

export function Slide12() {
  return (
    <div
      className="slide-pad"
      style={{ position: "relative" }}
    >
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Peer Review Checklist · Quality Standard
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          Writing Tests That <span className="hl">Anyone Can Execute</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          দুর্বল টেস্ট কেস বনাম ইন্ডাস্ট্রি-স্ট্যান্ডার্ড টেস্ট কেস — স্পষ্টতার পার্থক্য
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
        {/* Bad / Amateur Card */}
        <div
          className="card card-red"
          style={{
            padding: "30px 32px",
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
                className="card-title"
                style={{
                  color: "var(--red)",
                  fontSize: "26px",
                  marginBottom: 0,
                }}
              >
                Amateur Tester ❌
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--red)",
                  background: "var(--red-bg)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--red-border)",
                }}
              >
                Vague &amp; Ambiguous
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Title:
                </span>
                <div
                  style={{
                    fontSize: "21px",
                    color: "var(--cream)",
                    fontStyle: "italic",
                    marginTop: "2px",
                  }}
                >
                  "Login test"
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  অস্পষ্ট শিরোনাম, কী পরীক্ষা হবে বোঝার উপায় নেই
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Steps:
                </span>
                <div
                  style={{
                    fontSize: "21px",
                    color: "var(--cream)",
                    fontStyle: "italic",
                    marginTop: "2px",
                  }}
                >
                  "Try to login with wrong info."
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  নির্দিষ্ট কোনো টেস্ট ডেটা বা ইউজারনেম নেই
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Expected:
                </span>
                <div
                  style={{
                    fontSize: "21px",
                    color: "var(--cream)",
                    fontStyle: "italic",
                    marginTop: "2px",
                  }}
                >
                  "Error should show and work fine."
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  কী এরর মেসেজ আসবে তা নির্ধারণ করা নেই
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid var(--red-border)",
              paddingTop: "14px",
              marginTop: "18px",
            }}
          >
            <div style={{ fontSize: "16px", color: "var(--red)", fontWeight: 700 }}>
              Result: Failed Automation &amp; Team Friction
            </div>
            <div
              className="bangla"
              style={{ fontSize: "17px", color: "var(--cream-muted)", marginTop: "2px" }}
            >
              অন্য টেস্টার এটি চালাতে পারবে না, বাগ প্রমাণের উপায় থাকে না।
            </div>
          </div>
        </div>

        {/* Good / Professional Card */}
        <div
          className="card card-green"
          style={{
            padding: "30px 32px",
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
                className="card-title"
                style={{
                  color: "var(--green)",
                  fontSize: "26px",
                  marginBottom: 0,
                }}
              >
                Professional SQA ✅
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "var(--green)",
                  background: "var(--green-bg)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid rgba(var(--accent-rgb), 0.3)",
                }}
              >
                Atomic &amp; Precise
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Title:
                </span>
                <div
                  style={{
                    fontSize: "21px",
                    color: "var(--cream)",
                    fontWeight: 600,
                    marginTop: "2px",
                  }}
                >
                  "Verify login fails with registered email and incorrect password"
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  একটি স্পষ্ট, পরিমাপযোগ্য একক উদ্দেশ্য
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Steps:
                </span>
                <div
                  style={{
                    fontSize: "20px",
                    color: "var(--cream)",
                    fontFamily: "var(--font-mono)",
                    marginTop: "2px",
                  }}
                >
                  1. Open /login 2. Enter a@x.com 3. Enter Wrong@123 4. Click Login
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  সুনির্দিষ্ট ধাপ ও রিয়েল টেস্ট ডেটা
                </div>
              </div>

              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "var(--cream-dim)",
                    textTransform: "uppercase",
                  }}
                >
                  Expected:
                </span>
                <div
                  style={{
                    fontSize: "21px",
                    color: "#6EE7B7",
                    fontWeight: 600,
                    marginTop: "2px",
                  }}
                >
                  "Displays 'Invalid email or password' in red alert box"
                </div>
                <div
                  className="bangla"
                  style={{ fontSize: "17px", color: "var(--cream-dim)", marginTop: "2px" }}
                >
                  নির্দিষ্ট UI আচরণ ও সঠিক মেসেজ স্ট্রিং
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              borderTop: "1px solid rgba(var(--accent-rgb), 0.3)",
              paddingTop: "14px",
              marginTop: "18px",
            }}
          >
            <div style={{ fontSize: "16px", color: "var(--green)", fontWeight: 700 }}>
              Result: 100% Deterministic &amp; Automation-Ready
            </div>
            <div
              className="bangla"
              style={{ fontSize: "17px", color: "var(--cream-muted)", marginTop: "2px" }}
            >
              যেকোনো জুনিয়র টেস্টার বা সিআই/সিডি স্ক্রিপ্ট এটি সহজেই চালাতে পারে।
            </div>
          </div>
        </div>
      </div>

      {/* Pro Tip Bar */}
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
          Atomic Rule
        </span>
        <div style={{ fontSize: "20px", color: "var(--cream)" }}>
          <strong>1 Test Case = 1 Single Objective</strong>. Never combine testing
          multiple features into a single test case.
          <span
            className="bangla"
            style={{ color: "var(--cream-muted)", marginLeft: "8px", fontSize: "19px" }}
          >
            (একটি টেস্ট কেসে একাধিক উদ্দেশ্য মেশানো নিষিদ্ধ)
          </span>
        </div>
      </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">12 / 14</span>
    </div>
  );
}

"use client";

import React from "react";

export function Slide01() {
  return (
    <div className="slide-split" style={{ position: "relative" }}>
      {/* Top-Right Brand Logo */}
      <div
        className="slide-brand-logo reveal d1"
        style={{
          position: "absolute",
          top: "60px",
          right: "100px",
          display: "flex",
          alignItems: "center",
          zIndex: 10,
        }}
      >
        <img
          src="/ph-logo-svg/Main-White.svg"
          alt="Programming Hero"
          style={{
            height: "40px",
            width: "auto",
            display: "block",
            opacity: 0.95,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.4))",
          }}
        />
      </div>

      <div className="split-left">
        <div className="slide-eyebrow reveal d1">
          Module 02 · From Requirements to Test Design
        </div>
        <h1
          className="slide-title reveal-left d2"
          style={{
            fontSize: "104px",
            letterSpacing: "-2px",
            lineHeight: 1.1,
            marginBottom: "24px",
          }}
        >
          From Requirements to
          <br />
          <span className="hl">Test Cases</span>
        </h1>
        <p
          className="body-text reveal-left d3"
          style={{
            fontSize: "26px",
            maxWidth: "620px",
            lineHeight: 1.45,
            color: "var(--cream)",
          }}
        >
          How QA engineers turn vague business ideas into rock-solid,
          executable test blueprints.
        </p>
        <div
          className="bangla reveal d4"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginTop: "14px",
            lineHeight: 1.55,
          }}
        >
          কীভাবে একজন QA ইঞ্জিনিয়ার সাধারণ বিজনেস আইডিয়া থেকে নিখুঁত টেস্ট
          কেস তৈরি করেন।
        </div>
      </div>
      <div
        className="split-right"
        style={{ justifyContent: "center", gap: "20px" }}
      >
        <div
          className="card card-green reveal d4"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "24px 28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "28px",
              color: "var(--green)",
            }}
          >
            ①
          </span>
          <div>
            <div
              className="card-title"
              style={{ marginBottom: "4px", fontSize: "22px" }}
            >
              Testable Requirements &amp; User Stories
            </div>
            <div
              className="bangla"
              style={{ fontSize: "17px", color: "var(--cream-muted)" }}
            >
              টেস্টেবল রিকোয়ারমেন্ট ও ইউজার স্টোরি
            </div>
          </div>
        </div>
        <div
          className="card card-green reveal d5"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "24px 28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "28px",
              color: "var(--green)",
            }}
          >
            ②
          </span>
          <div>
            <div
              className="card-title"
              style={{ marginBottom: "4px", fontSize: "22px" }}
            >
              Acceptance Criteria as a QA Checklist
            </div>
            <div
              className="bangla"
              style={{ fontSize: "17px", color: "var(--cream-muted)" }}
            >
              Acceptance Criteria-এর ব্যবহার ও নিয়ম
            </div>
          </div>
        </div>
        <div
          className="card card-green reveal d6"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            padding: "24px 28px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "28px",
              color: "var(--green)",
            }}
          >
            ③
          </span>
          <div>
            <div
              className="card-title"
              style={{ marginBottom: "4px", fontSize: "22px" }}
            >
              Test Scenario vs. Detailed Test Case
            </div>
            <div
              className="bangla"
              style={{ fontSize: "17px", color: "var(--cream-muted)" }}
            >
              সিনারিও বনাম বিস্তারিত টেস্ট কেস ডিজাইন
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">01 / 14</span>
    </div>
  );
}

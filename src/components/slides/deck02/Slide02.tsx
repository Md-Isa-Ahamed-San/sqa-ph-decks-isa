"use client";

import React from "react";

export function Slide02() {
  return (
    <div className="slide-split" style={{ position: "relative" }}>
      <div className="split-left">
        <div className="slide-eyebrow reveal d1">
          The Real Cost of Ambiguity
        </div>
        <h2
          className="slide-title reveal-left d2"
          style={{
            fontSize: "80px",
            letterSpacing: "-2px",
            lineHeight: 1.15,
            marginBottom: "20px",
          }}
        >
          The High Cost of
          <br />
          <span className="hl-red">Vague Requirements</span>
        </h2>
        <div style={{ marginTop: "24px" }}>
          <div
            className="reveal d3"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 900,
              fontSize: "100px",
              color: "var(--red)",
              letterSpacing: "-3px",
              lineHeight: 1,
            }}
          >
            #1
          </div>
          <div
            className="reveal d3"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "16px",
              color: "var(--cream-dim)",
              textTransform: "uppercase",
              letterSpacing: "2px",
              marginTop: "6px",
            }}
          >
            ROOT CAUSE OF SOFTWARE DEFECTS
          </div>
          <div
            className="bangla reveal d4"
            style={{
              fontSize: "20px",
              color: "var(--cream-muted)",
              marginTop: "10px",
              lineHeight: 1.5,
            }}
          >
            কোড লেখার আগেই অস্পষ্ট রিকোয়ারমেন্টের কারণে অধিকাংশ ডিফেক্ট তৈরি হয়।
          </div>
          <div
            className="reveal d4"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              color: "var(--cream-muted)",
              marginTop: "12px",
              letterSpacing: "0.5px",
            }}
          >
            Shift-Left: Bugs caught in requirements are the cheapest to fix
          </div>
        </div>
      </div>
      <div
        className="split-right"
        style={{ justifyContent: "center", gap: "24px" }}
      >
        <div className="card card-red reveal d5" style={{ padding: "28px 30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              className="card-title"
              style={{ color: "var(--red)", fontSize: "26px", marginBottom: 0 }}
            >
              Client's Ambiguous Request ❌
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
              Root Cause
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: "var(--cream)",
              fontStyle: "italic",
              marginBottom: "10px",
            }}
          >
            "Make the Login page fast and password very strong."
          </div>
          <div
            className="bangla"
            style={{ fontSize: "20px", lineHeight: 1.55, color: "var(--cream-muted)" }}
          >
            অস্পষ্ট কথা মানেই ভুল বোঝাবুঝি: ডেভেলপার অনুমানে কোড লেখে, আর QA টেস্ট করতে গিয়ে দ্বিধায় পড়ে।
          </div>
        </div>

        <div className="card card-green reveal d6" style={{ padding: "28px 30px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "12px",
            }}
          >
            <span
              className="card-title"
              style={{ color: "var(--green)", fontSize: "26px", marginBottom: 0 }}
            >
              QA's Early Clarification ✅
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
              Shift-Left SQA
            </span>
          </div>
          <div
            style={{
              fontSize: "22px",
              lineHeight: 1.45,
              color: "var(--cream)",
              marginBottom: "10px",
            }}
          >
            "Fast = under 2 seconds? Strong = 8–20 chars with 1 uppercase &amp; 1 digit?"
          </div>
          <div
            className="bangla"
            style={{ fontSize: "20px", lineHeight: 1.55, color: "var(--cream-muted)" }}
          >
            টেস্ট চালানোর আগে প্রশ্ন করে নিয়ম স্পষ্ট করাই আসল QA-এর কাজ।
          </div>
        </div>
      </div>
      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">02 / 14</span>
    </div>
  );
}

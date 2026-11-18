"use client";

import React from "react";

export function Slide07() {
  return (
    <div className="slide-split" style={{ position: "relative" }}>
      <div className="split-left">
        <div className="slide-eyebrow reveal d1">
          Practical Login Screen · User Story Breakdown
        </div>
        <h2
          className="slide-title reveal-left d2"
          style={{
            fontSize: "76px",
            letterSpacing: "-2px",
            lineHeight: 1.15,
            marginBottom: "24px",
          }}
        >
          Turning Stories into a
          <br />
          <span className="hl">Pass/Fail Checklist</span>
        </h2>
        <div
          className="mid-text reveal d3"
          style={{
            padding: "24px 28px",
            background: "rgba(var(--accent-rgb), 0.08)",
            borderRadius: "14px",
            borderLeft: "4px solid var(--accent)",
            fontSize: "20px",
            lineHeight: 1.5,
            color: "var(--cream)",
          }}
        >
          &quot;Acceptance Criteria are the exact conditions a software feature must
          satisfy to be accepted by the product owner.&quot;
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "14px",
              fontWeight: 700,
              color: "var(--accent)",
              textTransform: "uppercase",
              letterSpacing: "1px",
              marginTop: "12px",
            }}
          >
            ACCEPTANCE CRITERIA, IN ONE LINE
          </div>
        </div>
        <div
          className="bangla reveal d4"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginTop: "18px",
            lineHeight: 1.55,
          }}
        >
          Acceptance Criteria হলো ফিচারের সুনির্দিষ্ট শর্ত — যা পূরণ না হলে কোনো
          ফিচার লাইভে যাবে না।
        </div>
      </div>

      <div
        className="split-right"
        style={{ justifyContent: "center", gap: "20px", width: "660px" }}
      >
        {/* AC 1 */}
        <div
          className="card card-green reveal d5"
          style={{ padding: "26px 28px" }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span
              className="card-title"
              style={{
                color: "var(--green)",
                fontSize: "24px",
                marginBottom: 0,
              }}
            >
              AC 01 · Happy Path
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--green)",
                background: "var(--green-bg)",
                padding: "4px 12px",
                borderRadius: "6px",
              }}
            >
              Positive
            </span>
          </div>
          <div
            style={{
              fontSize: "21px",
              lineHeight: 1.45,
              color: "var(--cream)",
              marginBottom: "8px",
            }}
          >
            Entering a registered email and valid password immediately redirects
            user to the Dashboard.
          </div>
          <div
            className="bangla"
            style={{ fontSize: "19px", color: "var(--cream-muted)" }}
          >
            সঠিক ইমেইল ও পাসওয়ার্ড দিলে কোনো বাধা ছাড়াই ইউজার ড্যাশবোর্ডে
            প্রবেশ করবে।
          </div>
        </div>

        {/* AC 2 */}
        <div className="card card-red reveal d6" style={{ padding: "26px 28px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span
              className="card-title"
              style={{
                color: "var(--red)",
                fontSize: "24px",
                marginBottom: 0,
              }}
            >
              AC 02 · Error Handling
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--red)",
                background: "var(--red-bg)",
                padding: "4px 12px",
                borderRadius: "6px",
              }}
            >
              Negative
            </span>
          </div>
          <div
            style={{
              fontSize: "21px",
              lineHeight: 1.45,
              color: "var(--cream)",
              marginBottom: "8px",
            }}
          >
            Incorrect credentials display a generic error message:{" "}
            <em>"Invalid email or password"</em>.
          </div>
          <div
            className="bangla"
            style={{ fontSize: "19px", color: "var(--cream-muted)" }}
          >
            ভুল তথ্যে নির্দিষ্ট সতর্কবার্তা দেখাবে, কোনো অভ্যন্তরীণ ডাটাবেজ
            তথ্য ফাঁস করবে না।
          </div>
        </div>

        {/* AC 3 */}
        <div
          className="card reveal d7"
          style={{
            padding: "26px 28px",
            border: "1px solid rgba(245, 158, 11, 0.35)",
            background: "rgba(245, 158, 11, 0.05)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span
              className="card-title"
              style={{
                color: "var(--orange)",
                fontSize: "24px",
                marginBottom: 0,
              }}
            >
              AC 03 · Security Boundary
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "14px",
                fontWeight: 700,
                color: "var(--orange)",
                background: "var(--orange-bg)",
                padding: "4px 12px",
                borderRadius: "6px",
              }}
            >
              Security
            </span>
          </div>
          <div
            style={{
              fontSize: "21px",
              lineHeight: 1.45,
              color: "var(--cream)",
              marginBottom: "8px",
            }}
          >
            5 consecutive failed attempts lock the account for exactly 15 minutes.
          </div>
          <div
            className="bangla"
            style={{ fontSize: "19px", color: "var(--cream-muted)" }}
          >
            টানা ৫ বার ভুল পাসওয়ার্ড দিলে ব্রুট-ফোর্স রোধে অ্যাকাউন্ট ১৫ মিনিটের
            জন্য সাময়িক লক হবে।
          </div>
        </div>
      </div>

      <div className="bottom-bar reveal d8"></div>
      <span className="page-num">07 / 14</span>
    </div>
  );
}

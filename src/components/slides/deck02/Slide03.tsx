"use client";

import React from "react";

export function Slide03() {
  return (
    <div
      className="slide-pad"
      style={{ position: "relative" }}
    >
      <div className="slide-header-area">
        <div className="slide-eyebrow reveal d1">
          Requirement Types · Foundations
        </div>
        <h2
          className="slide-title reveal d2"
          style={{ fontSize: "40px", marginBottom: "4px" }}
        >
          Know What You Are <span className="hl">Reading First</span>
        </h2>
        <div
          className="slide-subtitle-bangla reveal d3"
          style={{
            fontSize: "20px",
            color: "var(--cream-muted)",
            marginBottom: "16px",
          }}
        >
          প্রতিটি ফিচারের পেছনে ৩ ধরণের রিকোয়ারমেন্ট কাজ করে — একজন QA-কে প্রতিটি স্তর বুঝতে হয়
        </div>
      </div>

      <div
        className="reveal d4"
        style={{ margin: "auto 0", width: "100%" }}
      >
        <div
          className="three-col"
          style={{ gap: "32px", alignItems: "stretch" }}
        >
        {/* Column 1: BRD */}
        <div
          className="col-card"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            border: "1px solid var(--gray-line)",
            borderRadius: "16px",
            padding: "32px 28px",
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
                  border: "1px solid rgba(var(--accent-rgb), 0.25)",
                }}
              >
                Layer 1 · Business
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "var(--cream-muted)",
                }}
              >
                01
              </span>
            </div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "6px",
              }}
            >
              Business Goal (BRD)
            </h3>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-dim)",
                marginBottom: "16px",
              }}
            >
              ব্যবসায়িক উদ্দেশ্য কী?
            </div>

            <div
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: "var(--cream)",
                marginBottom: "14px",
              }}
            >
              The high-level commercial vision and return on investment.
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "8px",
                padding: "16px 18px",
                borderLeft: "3px solid var(--accent)",
                marginBottom: "14px",
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
              <div style={{ fontSize: "19px", lineHeight: 1.45, color: "var(--cream)" }}>
                "Increase active user logins by 30% through one-click email access."
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "14px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "var(--accent)",
                fontWeight: 600,
              }}
            >
              QA Question:
            </div>
            <div
              className="bangla"
              style={{ fontSize: "18px", color: "var(--cream-muted)", marginTop: "2px" }}
            >
              এই ফিচার কোম্পানির মূল ব্যবসাকে কীভাবে সাহায্য করছে?
            </div>
          </div>
        </div>

        {/* Column 2: FRD */}
        <div
          className="col-card"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            border: "1px solid rgba(var(--accent-rgb), 0.35)",
            borderRadius: "16px",
            padding: "32px 28px",
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
                  border: "1px solid rgba(var(--qc-accent-rgb), 0.25)",
                }}
              >
                Layer 2 · Functional
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "var(--qc-accent)",
                }}
              >
                02
              </span>
            </div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "6px",
              }}
            >
              Functional (FRD)
            </h3>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-dim)",
                marginBottom: "16px",
              }}
            >
              সিস্টেম কী কাজ করবে?
            </div>

            <div
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: "var(--cream)",
                marginBottom: "14px",
              }}
            >
              Specific system capabilities, workflows, and user interactions.
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "8px",
                padding: "16px 18px",
                borderLeft: "3px solid var(--qc-accent)",
                marginBottom: "14px",
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
              <div style={{ fontSize: "19px", lineHeight: 1.45, color: "var(--cream)" }}>
                "Users can log in with registered email and password to open Dashboard."
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "14px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "var(--qc-accent)",
                fontWeight: 600,
              }}
            >
              QA Question:
            </div>
            <div
              className="bangla"
              style={{ fontSize: "18px", color: "var(--cream-muted)", marginTop: "2px" }}
            >
              ইনপুট দিলে সিস্টেম কি প্রত্যাশিত সঠিক আউটপুট দিচ্ছে?
            </div>
          </div>
        </div>

        {/* Column 3: NFR */}
        <div
          className="col-card"
          style={{
            flex: 1,
            background: "var(--bg-card)",
            border: "1px solid var(--gray-line)",
            borderRadius: "16px",
            padding: "32px 28px",
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
                  color: "var(--orange)",
                  background: "var(--orange-bg)",
                  padding: "4px 12px",
                  borderRadius: "6px",
                  border: "1px solid var(--orange-border)",
                }}
              >
                Layer 3 · Non-Functional
              </span>
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "24px",
                  color: "var(--cream-muted)",
                }}
              >
                03
              </span>
            </div>
            <h3
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: "var(--cream)",
                marginBottom: "6px",
              }}
            >
              Non-Functional (NFR)
            </h3>
            <div
              className="bangla"
              style={{
                fontSize: "20px",
                color: "var(--cream-dim)",
                marginBottom: "16px",
              }}
            >
              কতটা দ্রুত ও নিরাপদে কাজ করবে?
            </div>

            <div
              style={{
                fontSize: "20px",
                lineHeight: 1.5,
                color: "var(--cream)",
                marginBottom: "14px",
              }}
            >
              Performance, security limits, response times, and scale.
            </div>
            <div
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                borderRadius: "8px",
                padding: "16px 18px",
                borderLeft: "3px solid var(--orange)",
                marginBottom: "14px",
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
              <div style={{ fontSize: "19px", lineHeight: 1.45, color: "var(--cream)" }}>
                "Login API responds within 2 seconds for 95% of users under load."
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid var(--gray-line)",
              paddingTop: "14px",
              marginTop: "16px",
            }}
          >
            <div
              style={{
                fontSize: "16px",
                color: "var(--orange)",
                fontWeight: 600,
              }}
            >
              QA Question:
            </div>
            <div
              className="bangla"
              style={{ fontSize: "18px", color: "var(--cream-muted)", marginTop: "2px" }}
            >
              চাপ বা আক্রমণের মুখে সিস্টেম নিরাপদ ও দ্রুত থাকছে তো?
            </div>
          </div>
        </div>
        </div>
      </div>

      <div className="bottom-bar reveal d7"></div>
      <span className="page-num">03 / 14</span>
    </div>
  );
}

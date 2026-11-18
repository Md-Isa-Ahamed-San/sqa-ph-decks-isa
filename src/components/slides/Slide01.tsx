"use client";

import React from "react";

export function Slide01() {
  return (
    <>
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
                        <div className="slide-eyebrow reveal d1">Slide 1 · SQA Foundations</div>
                        <h1 className="slide-title reveal-left d2" style={{ "fontSize": "120px", "letterSpacing": "-3px", "marginBottom": "24px" }}>
                            Start Your<br /><span className="hl">QA Career</span>
                        </h1>
                        <p className="body-text reveal-left d3" style={{ "fontSize": "26px", "maxWidth": "600px" }}>
                            What QA is, where it fits, and what a Junior QA does
                        </p>
                    </div>
                    <div className="split-right" style={{ "justifyContent": "center" }}>
                        <div className="card card-green reveal d4" style={{ "display": "flex", "alignItems": "center", "gap": "20px" }}>
                            <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "800", "fontSize": "28px", "color": "var(--green)" }}>①</span>
                            <span className="card-title" style={{ "marginBottom": "0" }}>SQA and careers</span>
                        </div>
                        <div className="card card-green reveal d5" style={{ "display": "flex", "alignItems": "center", "gap": "20px" }}>
                            <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "800", "fontSize": "28px", "color": "var(--green)" }}>②</span>
                            <span className="card-title" style={{ "marginBottom": "0" }}>Where QA fits in development</span>
                        </div>
                        <div className="card card-green reveal d6" style={{ "display": "flex", "alignItems": "center", "gap": "20px" }}>
                            <span style={{ "fontFamily": "var(--font-display)", "fontWeight": "800", "fontSize": "28px", "color": "var(--green)" }}>③</span>
                            <span className="card-title" style={{ "marginBottom": "0" }}>A Junior QA's daily work</span>
                        </div>
                    </div>
                    <div className="bottom-bar reveal d7"></div>
                    <span className="page-num">01 / 15</span>
                </div>
    </>
  );
}

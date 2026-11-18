"use client";

import React from "react";

export function Slide02() {
  return (
    <>
      <div className="slide-split" style={{ "position": "relative" }}>
                    <div className="split-left">
                        <div className="slide-eyebrow reveal d1">True Story</div>
                        <h2 className="slide-title reveal-left d2">One unit mix-up<br /><span className="hl-red">destroyed</span> a Mars mission</h2>
                        <div style={{ "marginTop": "24px" }}>
                            <div className="reveal d3" style={{ "fontFamily": "var(--font-display)", "fontWeight": "900", "fontSize": "96px", "color": "var(--red)", "letterSpacing": "-3px" }}>$327M</div>
                            <div className="reveal d3" style={{ "fontFamily": "var(--font-mono)", "fontSize": "16px", "color": "var(--cream-dim)", "marginTop": "4px" }}>Mars Climate Orbiter · 1999</div>
                        </div>
                        <div style={{ "display": "flex", "alignItems": "center", "gap": "16px", "marginTop": "32px" }} className="reveal d4">
                            <div style={{ "background": "var(--bg-card)", "border": "1px solid var(--gray-line)", "borderRadius": "10px", "padding": "16px 24px", "fontFamily": "var(--font-display)", "fontWeight": "600", "fontSize": "18px", "color": "var(--cream)" }}>Pound-force seconds</div>
                            <div style={{ "fontFamily": "var(--font-display)", "fontWeight": "900", "fontSize": "36px", "color": "var(--red)" }}>≠</div>
                            <div style={{ "background": "var(--bg-card)", "border": "1px solid var(--gray-line)", "borderRadius": "10px", "padding": "16px 24px", "fontFamily": "var(--font-display)", "fontWeight": "600", "fontSize": "18px", "color": "var(--cream)" }}>Newton-seconds</div>
                        </div>
                    </div>
                    <div className="split-right">
                        <div className="card reveal d5">
                            <div className="card-title">Two teams, two units</div>
                            <div className="card-body">Ground software vs. spacecraft</div>
                        </div>
                        <div className="card reveal d6">
                            <div className="card-title" style={{ "color": "var(--red)" }}>~4.45× difference</div>
                            <div className="card-body">1 lbf·s ≈ 4.45 N·s</div>
                        </div>
                        <div className="card card-red reveal d7">
                            <div className="card-title" style={{ "color": "var(--red)" }}>Spacecraft lost</div>
                            <div className="card-body">Burned up in atmosphere</div>
                        </div>
                        <div className="bangla reveal d8">ছোট ভুল, বিশাল ক্ষতি</div>
                    </div>
                    <div className="bottom-bar"></div>
                    <span className="page-num">02 / 15</span>
                </div>
    </>
  );
}

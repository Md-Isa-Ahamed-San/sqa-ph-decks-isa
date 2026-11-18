"use client";

import React from "react";

export function Slide12() {
  return (
    <>
      <div className="slide-pad">
        
        {/*  Header  */}
        <div className="s12-header">
            <div className="slide-eyebrow reveal d1">Bug Titles · Writing Clear Headlines</div>
            <h2 className="slide-title reveal d2" style={{ "fontSize": "40px" }}>
                Say <span className="hl">where</span>, <span className="hl">what</span>, and <span className="hl">when</span>
            </h2>
        </div>

        <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: "20px", width: "100%", maxWidth: "1680px" }}>
        {/*  Formula Bar with 3 Colored Chips (Palette colors, no red)  */}
        <div className="s12-formula-bar reveal d3" style={{ marginBottom: "0" }}>
            <div className="formula-chip chip-where">
                <span className="chip-en">Where</span>
                <span className="chip-bn">(কোথায়)</span>
            </div>
            <span className="formula-plus">+</span>
            <div className="formula-chip chip-what">
                <span className="chip-en">What happened</span>
                <span className="chip-bn">(কী হলো)</span>
            </div>
            <span className="formula-plus">+</span>
            <div className="formula-chip chip-when">
                <span className="chip-en">When</span>
                <span className="chip-bn">(কখন)</span>
            </div>
        </div>

        {/*  4 Rows Transformation Stage  */}
        <div className="s12-rows-stage">

            {/*  ROW 1: Login  */}
            <div className="s12-row row-1" data-step-row="1">
                <div className="bad-block">
                    <span className="badge-q">?</span>
                    <span className="bad-text">Login not working</span>
                    <span className="bad-hint">কোথায়? কী হলো?</span>
                </div>
                <div className="arrow-block">
                    <span className="row-arrow">➔</span>
                </div>
                <div className="good-block">
                    <span className="hl-segment seg-where">Login page</span>
                    <span className="hl-segment seg-what">shows "Server Error"</span>
                    <span className="hl-segment seg-when">with valid credentials</span>
                </div>
            </div>

            {/*  ROW 2: Payment  */}
            <div className="s12-row row-2" data-step-row="2">
                <div className="bad-block">
                    <span className="badge-q">?</span>
                    <span className="bad-text">Payment issue</span>
                    <span className="bad-hint">কোথায়? কী হলো?</span>
                </div>
                <div className="arrow-block">
                    <span className="row-arrow">➔</span>
                </div>
                <div className="good-block">
                    <span className="hl-segment seg-where">Checkout</span>
                    <span className="hl-segment seg-what">shows "Transaction Failed"</span>
                    <span className="hl-segment seg-when">with a valid card</span>
                </div>
            </div>

            {/*  ROW 3: Button  */}
            <div className="s12-row row-3" data-step-row="3">
                <div className="bad-block">
                    <span className="badge-q">?</span>
                    <span className="bad-text">Button problem</span>
                    <span className="bad-hint">কোথায়? কী হলো?</span>
                </div>
                <div className="arrow-block">
                    <span className="row-arrow">➔</span>
                </div>
                <div className="good-block">
                    <span className="hl-segment seg-where">Contact form</span>
                    <span className="hl-segment seg-what">Submit button does nothing</span>
                    <span className="hl-segment seg-when">when clicked</span>
                </div>
            </div>

            {/*  ROW 4: Website error  */}
            <div className="s12-row row-4" data-step-row="4">
                <div className="bad-block">
                    <span className="badge-q">?</span>
                    <span className="bad-text">Website error</span>
                    <span className="bad-hint">কোথায়? কী হলো?</span>
                </div>
                <div className="arrow-block">
                    <span className="row-arrow">➔</span>
                </div>
                <div className="good-block">
                    <span className="hl-segment seg-where">Homepage</span>
                    <span className="hl-segment seg-what">shows a blank screen</span>
                    <span className="hl-segment seg-when">on mobile</span>
                </div>
            </div>

        </div>
        </div>

    </div>
    </>
  );
}

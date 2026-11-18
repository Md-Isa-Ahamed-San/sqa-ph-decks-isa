"use client";

import React from "react";

export function Slide13() {
  return (
    <>
      <div className="slide-pad">
        
        {/*  Header  */}
        <div className="s13-header">
            <div className="slide-eyebrow reveal d1">Bug Classification · Severity vs Priority</div>
            <h2 className="slide-title reveal d2">
                <span className="hl-sev">Severity</span> = how bad · <span className="hl-pri">Priority</span> = how soon
            </h2>
        </div>

        {/*  Master Matrix Stage: 2x2 Matrix with Axes (Left ~65%) + Role Panel (Right ~35%)  */}
        <div className="s13-stage">

            {/*  LEFT: Matrix Area with Visual Axes (~65%)  */}
            <div className="s13-matrix-container">
                
                {/*  Y-Axis (Severity)  */}
                <div className="axis-y">
                    <span className="axis-y-label-high">High ↑</span>
                    <div className="axis-y-track">
                        <div className="axis-y-text">
                            <span className="axis-title">Severity</span>
                            <span className="axis-bangla">(কতটা গুরুতর)</span>
                        </div>
                    </div>
                    <span className="axis-y-label-low">Low</span>
                </div>

                {/*  Matrix Box (Grid + X Axis)  */}
                <div className="matrix-content-box">
                    
                    {/*  2x2 Grid of Quadrants  */}
                    <div className="s13-quadrant-grid">

                        {/*  Top-Left Quadrant: High Severity, Low Priority (Step 3)  */}
                        <div className="quadrant-card quad-top-left" data-quad-step="3">
                            <div className="quad-content">
                                <div className="quad-title">Rarely used page crashes</div>
                                <div className="quad-bangla">“গুরুতর, কিন্তু user কম দেখে”</div>
                            </div>
                        </div>

                        {/*  Top-Right Quadrant: High Severity, High Priority (Step 1)  */}
                        <div className="quadrant-card quad-top-right" data-quad-step="1">
                            <div className="quad-content">
                                <div className="quad-title">Payment fails at checkout</div>
                                <div className="quad-bangla">“এখনই fix”</div>
                            </div>
                        </div>

                        {/*  Bottom-Left Quadrant: Low Severity, Low Priority (Step 2)  */}
                        <div className="quadrant-card quad-bottom-left" data-quad-step="2">
                            <div className="quad-content">
                                <div className="quad-title">Minor colour mismatch</div>
                                <div className="quad-bangla">“পরে ঠিক করলেই চলে”</div>
                            </div>
                        </div>

                        {/*  Bottom-Right Quadrant: Low Severity, High Priority (Step 4)  */}
                        <div className="quadrant-card quad-bottom-right" data-quad-step="4">
                            <div className="quad-content">
                                <div className="quad-title">Company name misspelled on homepage</div>
                                <div className="quad-bangla">“কিছু ভাঙেনি, কিন্তু সবাই দেখে”</div>
                            </div>
                        </div>

                    </div>

                    {/*  X-Axis (Priority)  */}
                    <div className="axis-x">
                        <span className="axis-x-label-low">Low</span>
                        <div className="axis-x-track">
                            <span className="axis-title">Priority</span>
                            <span className="axis-bangla">(কত তাড়াতাড়ি fix)</span>
                        </div>
                        <span className="axis-x-label-high">High →</span>
                    </div>

                </div>

            </div>

            {/*  RIGHT: Role Responsibility Panel (~35%) (Revealed on Step 5)  */}
            <div className="s13-role-panel">
                <div className="role-panel-header">
                    <span className="role-badge">WHO SETS IT</span>
                    <span className="role-bangla-sub">কার কী দায়িত্ব?</span>
                </div>

                <div className="role-cards-stack">
                    
                    {/*  Role 1: QA -> Severity  */}
                    <div className="role-card card-qa">
                        <div className="role-chip chip-qa">🛡️ QA</div>
                        <div className="role-action">Severity ঠিক করে</div>
                        <div className="role-desc">কোডের প্রযুক্তিগত ক্ষতির মাত্রা ও সিস্টেম ইমপ্যাক্ট বিশ্লেষণ করে।</div>
                    </div>

                    {/*  Role 2: Manager / PO -> Priority  */}
                    <div className="role-card card-po">
                        <div className="role-chip chip-po">👔 Manager / Product Owner</div>
                        <div className="role-action">Priority ঠিক করে</div>
                        <div className="role-desc">ব্যবসার জরুরি অবস্থা, ব্র্যান্ড ভ্যালু ও ডেডলাইন দেখে ফিক্স করার সময় নির্ধারণ করে।</div>
                    </div>

                </div>
            </div>

        </div>

    </div>
    </>
  );
}

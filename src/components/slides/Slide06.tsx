"use client";

import React from "react";

export function Slide06() {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative" }}>
                    <div className="slide-eyebrow reveal d1">Career Growth</div>
                    <h2 className="slide-title reveal d2" style={{ "marginBottom": "16px" }}>QA Lead = strong base + wide knowledge + <span className="hl">leadership</span></h2>

                    <div className="lead-content-wrap">
                        {/*  ROW 1: EQUATION  */}
                        <div className="lead-row-1">
                            {/*  Card 1: Strong base  */}
                            <div className="lead-card lead-card-1">
                                <div className="lead-card-header">
                                    <div className="lead-card-icon" title="Target">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10" />
                                            <circle cx="12" cy="12" r="6" />
                                            <circle cx="12" cy="12" r="2" />
                                        </svg>
                                    </div>
                                    {/*  Mini visual: One tall filled bar  */}
                                    <div className="mini-visual" title="Deep specialty" style={{ "width": "24px", "justifyContent": "center" }}>
                                        <div style={{ "width": "14px", "height": "32px", "background": "var(--green)", "borderRadius": "4px", "boxShadow": "0 0 10px rgba(var(--accent-rgb), 0.4)" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lead-card-title">Strong in one area</div>
                                    <div className="lead-card-bangla">যেকোনো একটাতে গভীর জ্ঞান</div>
                                </div>
                                <div className="lead-card-details">
                                    <span className="tool-tag" style={{ "background": "rgba(var(--accent-rgb), 0.15)", "color": "var(--green)", "borderColor": "rgba(var(--accent-rgb), 0.3)" }}>Manual</span>
                                    <span style={{ "color": "var(--cream-muted)", "fontSize": "13px" }}>or</span>
                                    <span className="tool-tag" style={{ "background": "rgba(var(--accent-rgb), 0.15)", "color": "var(--green)", "borderColor": "rgba(var(--accent-rgb), 0.3)" }}>Automation</span>
                                </div>
                            </div>

                            {/*  Operator: +  */}
                            <div className="lead-op op-plus">+</div>

                            {/*  Card 2: Wide knowledge  */}
                            <div className="lead-card lead-card-2">
                                <div className="lead-card-header">
                                    <div className="lead-card-icon" title="Layers">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="12 2 2 7 12 12 22 7 12 2" />
                                            <polyline points="2 17 12 22 22 17" />
                                            <polyline points="2 12 12 17 22 12" />
                                        </svg>
                                    </div>
                                    {/*  Mini visual: Four short bars of equal height  */}
                                    <div className="mini-visual" title="Broad breadth" style={{ "gap": "4px" }}>
                                        <div style={{ "width": "7px", "height": "14px", "background": "rgba(var(--accent-rgb), 0.7)", "borderRadius": "2px" }}></div>
                                        <div style={{ "width": "7px", "height": "14px", "background": "rgba(var(--accent-rgb), 0.7)", "borderRadius": "2px" }}></div>
                                        <div style={{ "width": "7px", "height": "14px", "background": "rgba(var(--accent-rgb), 0.7)", "borderRadius": "2px" }}></div>
                                        <div style={{ "width": "7px", "height": "14px", "background": "rgba(var(--accent-rgb), 0.7)", "borderRadius": "2px" }}></div>
                                    </div>
                                </div>
                                <div>
                                    <div className="lead-card-title">Wide knowledge</div>
                                    <div className="lead-card-bangla">সব বিষয়ে basic idea</div>
                                </div>
                                <div className="lead-card-details">
                                    <span className="tool-tag">API</span>
                                    <span className="tool-tag">Performance</span>
                                    <span className="tool-tag">Security</span>
                                    <span className="tool-tag">Database</span>
                                </div>
                            </div>

                            {/*  Operator: +  */}
                            <div className="lead-op op-plus">+</div>

                            {/*  Card 3: Leadership  */}
                            <div className="lead-card lead-card-3">
                                <div className="lead-card-header">
                                    <div className="lead-card-icon" title="Users">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </div>
                                    {/*  Mini visual: 3 small connected dots  */}
                                    <div className="mini-visual" title="Connected team" style={{ "alignItems": "center", "height": "32px" }}>
                                        <svg width="42" height="20" viewBox="0 0 42 20" fill="none">
                                            <line x1="6" y1="10" x2="21" y2="10" stroke="var(--green)" strokeWidth="2" strokeDasharray="2 2" opacity="0.6" />
                                            <line x1="21" y1="10" x2="36" y2="10" stroke="var(--green)" strokeWidth="2" strokeDasharray="2 2" opacity="0.6" />
                                            <circle cx="6" cy="10" r="4" fill="var(--green)" />
                                            <circle cx="21" cy="10" r="5" fill="var(--green)" />
                                            <circle cx="36" cy="10" r="4" fill="var(--green)" />
                                        </svg>
                                    </div>
                                </div>
                                <div>
                                    <div className="lead-card-title">Leadership</div>
                                    <div className="lead-card-bangla">Team চালানো, সিদ্ধান্ত নেওয়া, কথা বলা</div>
                                </div>
                                <div className="lead-card-details">
                                    <span className="tool-tag">Team</span>
                                    <span className="tool-tag">Decisions</span>
                                    <span className="tool-tag">Communication</span>
                                </div>
                            </div>

                            {/*  Operator: =  */}
                            <div className="lead-op op-equal">=</div>

                            {/*  Result: QA Lead block (1.3x height, solid green, soft glow)  */}
                            <div className="lead-result">
                                <div className="result-crown">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent-contrast-text)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
                                    </svg>
                                </div>
                                <div className="result-title">QA Lead</div>
                                <div className="result-sub">টিম লিড করার যোগ্য</div>
                            </div>
                        </div>

                        {/*  ROW 2: T-SHAPE DIAGRAM  */}
                        <div className="lead-row-2">
                            <svg className="t-shape-svg" viewBox="0 0 580 155">
                                {/*  Horizontal Bar: Breadth  */}
                                <g className="t-bar-horiz">
                                    <rect x="10" y="10" width="560" height="44" rx="8" fill="rgba(var(--accent-rgb), 0.16)" stroke="var(--green)" strokeWidth="2" />
                                </g>

                                {/*  Vertical Stem: Depth  */}
                                <g className="t-stem-vert">
                                    <rect x="210" y="54" width="160" height="92" rx="8" fill="rgba(var(--accent-rgb), 0.28)" stroke="var(--green)" strokeWidth="2" />
                                </g>

                                {/*  Labels  */}
                                <g className="t-labels">
                                    {/*  Horizontal Label  */}
                                    <text x="290" y="32" textAnchor="middle" fill="#FFFFFF" fontFamily="'Noto Sans Bengali', var(--font-bangla)" fontSize="15" fontWeight="700">
                                        অনেক বিষয়ে basic
                                        <tspan fill="rgba(240, 244, 248, 0.75)" fontFamily="'Outfit', sans-serif" fontWeight="400" fontSize="13"> (API · Performance · Security · Database)</tspan>
                                    </text>

                                    {/*  Vertical Label  */}
                                    <text x="290" y="94" textAnchor="middle" fill="var(--green)" fontFamily="'Noto Sans Bengali', var(--font-bangla)" fontSize="15" fontWeight="800">
                                        একটাতে গভীর
                                    </text>
                                    <text x="290" y="118" textAnchor="middle" fill="rgba(240, 244, 248, 0.85)" fontFamily="'Outfit', sans-serif" fontSize="13" fontWeight="500">
                                        Manual / Automation
                                    </text>
                                </g>
                            </svg>

                            <div className="t-caption-wrap">
                                <div className="t-caption-title">
                                    <span>T-shaped QA</span>
                                    <span style={{ "fontSize": "13px", "fontFamily": "var(--font-mono)", "color": "var(--green)", "background": "rgba(var(--accent-rgb), 0.15)", "border": "1px solid rgba(var(--accent-rgb), 0.3)", "padding": "3px 10px", "borderRadius": "20px", "fontWeight": "500" }}>Core Model</span>
                                </div>
                                <div className="t-caption-desc">
                                    উপরে চওড়া (সব ফিল্ডের বোঝাপড়া) + নিচে গভীর (একটি স্পেশালাইজেশন)। একজন সফল লিডের এটাই গোপন ফর্মুলা।
                                </div>
                            </div>
                        </div>

                        {/*  ROW 3: KEY MESSAGE CALLOUT  */}
                        <div className="lead-callout">
                            <div className="callout-main">সব বিষয়ে expert হওয়া লাগে না</div>
                            <div className="callout-sub">প্রতিটা script নিজে লেখা লাগে না, কিন্তু কখন কোন testing দরকার সেটা জানতে হয়।</div>
                        </div>
                    </div>

                    <div className="bottom-bar"></div>
                    <span className="page-num">06 / 15</span>
                </div>
    </>
  );
}

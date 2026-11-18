"use client";

import React from "react";

export function Slide07() {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative" }}>
                    <div className="slide-eyebrow reveal d1">SDLC Overview</div>
                    <h2 className="slide-title reveal d2" style={{ "fontSize": "40px", "marginBottom": "8px" }}>Software is built in <span className="hl">7 phases</span></h2>
                    <div className="slide-subtitle-bangla reveal d3" style={{ "fontSize": "20px", "color": "var(--cream-muted)", "marginBottom": "20px" }}>SDLC is a cycle, not a line — শেষ হলে আবার নতুন করে শুরু</div>

                    <div className="wheel-stage" style={{ margin: "auto 0" }}>
                        {/*  SVG Wheel Ring, Spokes & Arrowhead  */}
                        <svg className="wheel-svg" viewBox="0 0 800 800" fill="none">
                            {/*  Spokes (Hub edge r=70 to Node center r=270)  */}
                            <line className="wheel-spoke spoke-0" x1="400" y1="330" x2="400" y2="130" />
                            <line className="wheel-spoke spoke-1" x1="454.7" y1="356.4" x2="611.1" y2="231.7" />
                            <line className="wheel-spoke spoke-2" x1="468.2" y1="415.6" x2="663.2" y2="460.1" />
                            <line className="wheel-spoke spoke-3" x1="430.4" y1="463.1" x2="517.1" y2="643.3" />
                            <line className="wheel-spoke spoke-4" x1="369.6" y1="463.1" x2="282.9" y2="643.3" />
                            <line className="wheel-spoke spoke-5" x1="331.8" y1="415.6" x2="136.8" y2="460.1" />
                            <line className="wheel-spoke spoke-6" x1="345.3" y1="356.4" x2="188.9" y2="231.7" />

                            {/*  Main Cycle Ring (r=270, perimeter = 1696.5)  */}
                            <circle className="wheel-ring" cx="400" cy="400" r="270" />

                            {/*  Cycle Loop-Back Arrowhead (after Maintenance, pointing into Planning)  */}
                            <g className="cycle-arrow-head" transform="translate(350, 134.5) rotate(-10)">
                                <polygon points="-12,-6 4,0 -12,6" fill="var(--green)" />
                            </g>
                        </svg>

                        {/*  Center SDLC Hub  */}
                        <div className="wheel-hub">
                            <div className="hub-icon">
                                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="16 18 22 12 16 6"/>
                                    <polyline points="8 6 2 12 8 18"/>
                                </svg>
                            </div>
                            <div className="hub-title">SDLC</div>
                            <div className="hub-sub">Lifecycle</div>
                        </div>

                        {/*  Traveling Glowing Dot  */}
                        <div className="wheel-travel-dot"></div>

                        {/*  7 Circular Nodes  */}
                        {/*  Node 1: Planning (Top)  */}
                        <div className="wheel-node-anchor anchor-top node-idx-0" style={{ "--i": "0" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 11l3 3L22 4"/>
                                        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 1</span>
                                        <span className="node-name">Planning</span>
                                    </div>
                                    <div className="node-bangla">কী বানাবো, কত সময়, কী ঝুঁকি</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 2: Requirements (Right)  */}
                        <div className="wheel-node-anchor anchor-right node-idx-1" style={{ "--i": "1" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                                        <path d="M9 12h6"/>
                                        <path d="M9 16h6"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 2</span>
                                        <span className="node-name">Requirements</span>
                                    </div>
                                    <div className="node-bangla">Client কী চায় সেটা লিখে ফেলা</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 3: Design (Right)  */}
                        <div className="wheel-node-anchor anchor-right node-idx-2" style={{ "--i": "2" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                                        <line x1="8" y1="21" x2="16" y2="21"/>
                                        <line x1="12" y1="17" x2="12" y2="21"/>
                                        <path d="M7 8h4"/>
                                        <path d="M7 12h2"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 3</span>
                                        <span className="node-name">Design</span>
                                    </div>
                                    <div className="node-bangla">Architecture আর UI plan করা</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 4: Development (Right)  */}
                        <div className="wheel-node-anchor anchor-right node-idx-3" style={{ "--i": "3" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="16 18 22 12 16 6"/>
                                        <polyline points="8 6 2 12 8 18"/>
                                        <line x1="14" y1="4" x2="10" y2="20"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 4</span>
                                        <span className="node-name">Development</span>
                                    </div>
                                    <div className="node-bangla">Code লেখা শুরু</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 5: Testing (Left - Highlighted QA Core)  */}
                        <div className="wheel-node-anchor anchor-left node-idx-4 node-testing" style={{ "--i": "4" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"/>
                                        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                                        <path d="m8 11 2 2 4-4"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 5</span>
                                        <span className="node-name">Testing</span>
                                        <span className="qa-core-tag">QA-র মূল কাজ</span>
                                    </div>
                                    <div className="node-bangla">Quality আর performance যাচাই</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 6: Deployment (Left)  */}
                        <div className="wheel-node-anchor anchor-left node-idx-5" style={{ "--i": "5" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                                        <polyline points="16 13 12 9 8 13"/>
                                        <line x1="12" y1="9" x2="12" y2="17"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 6</span>
                                        <span className="node-name">Deployment</span>
                                    </div>
                                    <div className="node-bangla">Users-এর কাছে release</div>
                                </div>
                            </div>
                        </div>

                        {/*  Node 7: Maintenance (Left)  */}
                        <div className="wheel-node-anchor anchor-left node-idx-6" style={{ "--i": "6" } as React.CSSProperties}>
                            <div className="wheel-node-card">
                                <div className="wheel-node-circle">
                                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                                    </svg>
                                </div>
                                <div className="node-label-group">
                                    <div className="node-header">
                                        <span className="node-chip">Phase 7</span>
                                        <span className="node-name">Maintenance</span>
                                    </div>
                                    <div className="node-bangla">Feedback দেখে fix ও improve</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-bar"></div>
                    <span className="page-num">07 / 15</span>
                </div>
    </>
  );
}

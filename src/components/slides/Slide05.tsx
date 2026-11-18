"use client";

import React from "react";

export function Slide05() {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative", "padding": "60px 100px 45px 100px" }}>
                    
                    {/*  Header  */}
                    <div>
                        <div className="slide-eyebrow">Career Paths</div>
                        <h2 className="slide-title" style={{ "marginBottom": "6px", "fontSize": "40px" }}>
                            Most people start in <span className="hl">Manual QA</span>, then choose a path
                        </h2>
                        <div className="slide-subtitle-bangla" style={{ "fontFamily": "var(--font-bangla)", "fontSize": "21px", "color": "var(--green)", "opacity": "0.9" }}>
                            শুরু হয় Manual QA দিয়ে, তারপর নিজের পথ বেছে নেওয়া
                        </div>
                    </div>

                    {/*  Roadmap Stage  */}
                    <div className="roadmap-stage" style={{ margin: "auto 0" }}>
                        
                        {/*  Left: Root Node (Manual QA)  */}
                        <div className="roadmap-root">
                            <div className="root-badge">
                                <span className="badge-dot"></span>
                                <span>এখান থেকে শুরু</span>
                            </div>
                            <div className="root-title">Manual QA</div>
                            <div className="root-bangla">সবার প্রথম ধাপ ও ভিত্তিভূমি</div>
                            <div className="root-bottom-row">
                                <span className="tag">Jira</span>
                                <div className="coding-meter">
                                    <span className="meter-label">Coding লাগে:</span>
                                    <div className="meter-bars">
                                        <div className="meter-bar filled"></div>
                                        <div className="meter-bar"></div>
                                        <div className="meter-bar"></div>
                                        <div className="meter-bar"></div>
                                        <div className="meter-bar"></div>
                                    </div>
                                    <span className="meter-level" style={{ "color": "var(--green)" }}>Low (1/5)</span>
                                </div>
                            </div>
                        </div>

                        {/*  SVG Branch Lines  */}
                        <svg className="roadmap-svg" viewBox="0 0 1720 540">
                            {/*  Branch 1: Automation  */}
                            <path id="branch-1" className="branch-path" d="M 350 270 C 720 270, 720 57, 1090 57" fill="none" stroke="rgba(var(--accent-rgb), 0.35)" strokeWidth="2.5" />
                            
                            {/*  Branch 2: Performance  */}
                            <path id="branch-2" className="branch-path" d="M 350 270 C 720 270, 720 199, 1090 199" fill="none" stroke="rgba(var(--accent-rgb), 0.35)" strokeWidth="2.5" />
                            
                            {/*  Branch 3: Security  */}
                            <path id="branch-3" className="branch-path" d="M 350 270 C 720 270, 720 341, 1090 341" fill="none" stroke="rgba(var(--accent-rgb), 0.45)" strokeWidth="2.5" />
                            
                            {/*  Branch 4: SDET  */}
                            <path id="branch-4" className="branch-path" d="M 350 270 C 720 270, 720 483, 1090 483" fill="none" stroke="rgba(96, 165, 250, 0.45)" strokeWidth="2.5" />
                            
                            {/*  Dashed Line: Automation -> SDET  */}
                            <path id="branch-dashed" className="branch-dashed" d="M 1090 85 C 990 160, 990 380, 1090 455" fill="none" stroke="rgba(96, 165, 250, 0.45)" strokeWidth="2" strokeDasharray="6 6" />
                            <text x="975" y="276" fill="var(--blue)" fontFamily="var(--font-bangla)" fontSize="14" textAnchor="end" opacity="0.85">উত্তরণ (Grows into) ↗</text>
                            <text x="975" y="295" fill="var(--cream-dim)" fontFamily="var(--font-bangla)" fontSize="12" textAnchor="end">SDET প্রায়ই Automation থেকে আসে</text>
                        </svg>

                        {/*  Glowing Traveling Dots  */}
                        <div className="glow-dot dot-1"></div>
                        <div className="glow-dot dot-2"></div>
                        <div className="glow-dot dot-3 dot-security"></div>
                        <div className="glow-dot dot-4 dot-sdet"></div>

                        {/*  Right: Destination Cards  */}
                        <div className="roadmap-cards">
                            
                            {/*  1. Automation  */}
                            <div className="roadmap-card card-automation">
                                <div className="card-top-row">
                                    <div className="card-name">Automation QA</div>
                                    <div className="coding-meter">
                                        <span className="meter-label">Coding লাগে:</span>
                                        <div className="meter-bars">
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar"></div>
                                            <div className="meter-bar"></div>
                                        </div>
                                        <span className="meter-level" style={{ "color": "var(--orange)" }}>Medium (3/5)</span>
                                    </div>
                                </div>
                                <div className="card-desc">Code লিখে test নিজে নিজে চালানো</div>
                                <div className="card-bottom-row">
                                    <span className="tag">Selenium</span>
                                    <span className="tag">Playwright</span>
                                </div>
                            </div>

                            {/*  2. Performance  */}
                            <div className="roadmap-card card-performance">
                                <div className="card-top-row">
                                    <div className="card-name">Performance Tester</div>
                                    <div className="coding-meter">
                                        <span className="meter-label">Coding লাগে:</span>
                                        <div className="meter-bars">
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar"></div>
                                            <div className="meter-bar"></div>
                                        </div>
                                        <span className="meter-level" style={{ "color": "var(--orange)" }}>Medium (3/5)</span>
                                    </div>
                                </div>
                                <div className="card-desc">App কত দ্রুত, কত user সামলাতে পারে</div>
                                <div className="card-bottom-row">
                                    <span className="tag">JMeter</span>
                                    <span className="tag">k6</span>
                                </div>
                            </div>

                            {/*  3. Security  */}
                            <div className="roadmap-card card-security">
                                <div className="card-top-row">
                                    <div className="card-name" style={{ "color": "var(--purple)" }}>Security Tester</div>
                                    <div className="coding-meter">
                                        <span className="meter-label">Coding লাগে:</span>
                                        <div className="meter-bars">
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar"></div>
                                            <div className="meter-bar"></div>
                                        </div>
                                        <span className="meter-level" style={{ "color": "var(--orange)" }}>Medium (3/5)</span>
                                    </div>
                                </div>
                                <div className="card-desc">Hacker-এর আগে দুর্বলতা খুঁজে বের করা</div>
                                <div className="card-bottom-row">
                                    <span className="tag tag-purple">OWASP ZAP</span>
                                </div>
                            </div>

                            {/*  4. SDET  */}
                            <div className="roadmap-card card-sdet">
                                <div className="card-top-row">
                                    <div className="card-name" style={{ "color": "var(--blue)" }}>SDET</div>
                                    <div className="coding-meter">
                                        <span className="meter-label">Coding লাগে:</span>
                                        <div className="meter-bars">
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                            <div className="meter-bar filled"></div>
                                        </div>
                                        <span className="meter-level" style={{ "color": "var(--blue)" }}>High (5/5)</span>
                                    </div>
                                </div>
                                <div className="card-desc">Test + development দুটোই করা</div>
                                <div className="card-bottom-row">
                                    <span className="tag tag-blue">Java</span>
                                    <span className="tag tag-blue">Python</span>
                                    <span className="tag tag-blue">JS</span>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/*  Footer Note  */}
                    <div className="footer-note" style={{ "marginTop": "10px", "fontSize": "15px", "color": "var(--cream-dim)", "display": "flex", "justifyContent": "space-between", "alignItems": "center", "borderTop": "1px solid var(--gray-line)", "paddingTop": "12px" }}>
                        <span><strong style={{ "color": "var(--cream)" }}>SDET</strong> = Software Development Engineer in Test</span>
                        <span style={{ "fontFamily": "var(--font-bangla)", "color": "var(--cream-muted)" }}>কোনো নির্দিষ্ট স্যালারি সংখ্যা নয় — নিজের আগ্রহ ও কোডিং দক্ষতা দেখে ক্যারিয়ার নির্বাচন করুন</span>
                    </div>

                    <div className="bottom-bar"></div>
                    <span className="page-num">05 / 15</span>
                </div>
    </>
  );
}

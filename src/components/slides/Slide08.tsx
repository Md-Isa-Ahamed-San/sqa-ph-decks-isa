"use client";

import React from "react";

export function Slide08({ step = 1 }: { step?: number; isExport?: boolean }) {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative" }}>
        
        {/*  Header  */}
        <div className="sdlc8-header-area">
            <div className="slide-eyebrow reveal d1">SDLC Roles &amp; Collaboration</div>
            <h2 className="slide-title reveal d2" style={{ "fontSize": "40px", "marginBottom": "4px" }}>
                What <span style={{ "color": "var(--blue)" }}>Developer</span> &amp; <span className="hl">QA</span> do in each phase
            </h2>
            <div className="slide-subtitle-bangla reveal d3" style={{ "fontSize": "20px", "color": "var(--cream-muted)", "marginBottom": "4px" }}>
                প্রতিটা ধাপে Developer ফিচার তৈরি করে, আর QA কোয়ালিটি নিশ্চিত করে
            </div>
        </div>

        {/*  Master Symmetrical Stage Grid (1800 x 740)  */}
        <div className="sdlc8-stage" id="sdlc8Stage" style={{ margin: "auto 0" }}>

            {/*  ==============================================
                 LEFT COLUMN: Phases 7, 6, 5 (Verification & Delivery)
                 ==============================================  */}
            <div className="sdlc8-col sdlc8-col-left">

                {/*  Phase 7: Maintenance  */}
                <div className="sdlc8-card" data-phase="7">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 7</span>
                            <span className="sdlc8-phase-name">Maintenance</span>
                            <span className="sdlc8-phase-bangla">রক্ষণাবেক্ষণ</span>
                        </div>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Hotfixes &amp; Patch Updates</div>
                                <div className="sdlc8-role-bangla">জরুরি বাগ ফিক্স ও পারফরম্যান্স আপডেট তৈরি</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Regression Testing</div>
                                <div className="sdlc8-role-bangla">নতুন আপডেটে পুরনো কোনো ফিচার ভেঙেছে কি না যাচাই</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Phase 6: Deployment  */}
                <div className="sdlc8-card" data-phase="6">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 6</span>
                            <span className="sdlc8-phase-name">Deployment</span>
                            <span className="sdlc8-phase-bangla">রিলিজ ও ডেপ্লয়মেন্ট</span>
                        </div>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Build &amp; Production Deploy</div>
                                <div className="sdlc8-role-bangla">লাইভ সার্ভারে কোড বিল্ড ও রিলিজ নিশ্চিত করা</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Smoke &amp; Sanity Testing</div>
                                <div className="sdlc8-role-bangla">লাইভ এনভায়রনমেন্টে রিলিজের পর জরুরি কুইক চেক</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Phase 5: Testing (Special QA Core Highlight!)  */}
                <div className="sdlc8-card sdlc8-card-core" data-phase="5">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge badge-core">Phase 5</span>
                            <span className="sdlc8-phase-name name-core">Testing</span>
                            <span className="sdlc8-phase-bangla">টেস্টিং ও যাচাই</span>
                        </div>
                        <span className="sdlc8-hero-tag">★ QA CORE</span>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Fix Reported Defects</div>
                                <div className="sdlc8-role-bangla">QA-র রিপোর্ট করা বাগগুলো কোডে ফিক্স করা</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-core">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title title-core">Execute, Report &amp; Verify</div>
                                <div className="sdlc8-role-bangla">সব টেস্ট চালানো, বাগ রিপোর্ট ও ফিক্স ভেরিফাই করা</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*  ==============================================
                 CENTER ENGINE: Top Card 1 + Symmetrical SDLC Circular Wheel
                 ==============================================  */}
            <div className="sdlc8-center-engine">

                {/*  Phase 1: Planning (Centered gracefully at top)  */}
                <div className="sdlc8-card sdlc8-card-top" data-phase="1">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 1</span>
                            <span className="sdlc8-phase-name">Planning</span>
                            <span className="sdlc8-phase-bangla">পরিকল্পনা</span>
                        </div>
                        <span className="sdlc8-shift-left-tag">Shift-Left Starts Here</span>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Scope &amp; Feasibility</div>
                                <div className="sdlc8-role-bangla">প্রজেক্টের টেকনিক্যাল পরিধি ও প্রয়োজনীয় রিসোর্স নির্ধারণ</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Spot Early Quality Risks</div>
                                <div className="sdlc8-role-bangla">শুরুতেই সম্ভাব্য ঝুঁকি ও লজিক্যাল ত্রুটি শনাক্ত করা</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Circular SDLC Wheel Stage (440 x 440)  */}
                <div className="sdlc8-wheel-container">
                    
                    {/*  SVG Ring, Spokes & Loop Arrow  */}
                    <svg className="sdlc8-wheel-svg" viewBox="0 0 440 440" fill="none">
                        {/*  Connecting Spokes from Hub (r=55) to Nodes (r=155)  */}
                        <line className="sdlc8-spoke spoke-1" x1="220" y1="165" x2="220" y2="65" />
                        <line className="sdlc8-spoke spoke-2" x1="263" y1="186" x2="341.2" y2="123.4" />
                        <line className="sdlc8-spoke spoke-3" x1="274" y1="232" x2="371.1" y2="254.5" />
                        <line className="sdlc8-spoke spoke-4" x1="244" y1="269" x2="287.3" y2="359.7" />
                        <line className="sdlc8-spoke spoke-5" x1="196" y1="269" x2="152.7" y2="359.7" />
                        <line className="sdlc8-spoke spoke-6" x1="166" y1="232" x2="68.9" y2="254.5" />
                        <line className="sdlc8-spoke spoke-7" x1="177" y1="186" x2="98.8" y2="123.4" />

                        {/*  Cycle Ring (r=155, circumference = 973.89)  */}
                        <circle className="sdlc8-ring" cx="220" cy="220" r="155" />

                        {/*  Directional Arrowhead returning to Phase 1  */}
                        <g className="sdlc8-loop-arrow" transform="translate(190, 68) rotate(-14)">
                            <polygon points="-8,-4 3,0 -8,4" fill="var(--green)" />
                        </g>
                    </svg>

                    {/*  Center SDLC Hub (Clean, no text clutter)  */}
                    <div className="sdlc8-hub">
                        <div className="sdlc8-hub-badge">SDLC</div>
                        <div className="sdlc8-hub-title">
                            <span className="hub-dev-text">Dev</span>
                            <span className="hub-plus-text">+</span>
                            <span className="hub-qa-text">QA</span>
                        </div>
                        <div className="sdlc8-hub-step" id="wheelStepBadge">{step === 0 ? "Phase 1 / 7" : `Phase ${step} / 7`}</div>
                    </div>

                    {/*  Traveling Glowing Dot  */}
                    <div className="sdlc8-travel-dot" id="devQaTravelDot"></div>

                    {/*  7 Circular Node Markers on the Ring  */}
                    {/*  Node 1: Top (220, 65)  */}
                    <div className="sdlc8-node node-p1" data-phase="1" style={{ "left": "220px", "top": "65px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">1 · Plan</span>
                    </div>

                    {/*  Node 2: Top-Right (341.2, 123.4)  */}
                    <div className="sdlc8-node node-p2" data-phase="2" style={{ "left": "341.2px", "top": "123.4px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 12h6"/><path d="M9 16h6"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">2 · Req</span>
                    </div>

                    {/*  Node 3: Mid-Right (371.1, 254.5)  */}
                    <div className="sdlc8-node node-p3" data-phase="3" style={{ "left": "371.1px", "top": "254.5px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">3 · Design</span>
                    </div>

                    {/*  Node 4: Low-Right (287.3, 359.7)  */}
                    <div className="sdlc8-node node-p4" data-phase="4" style={{ "left": "287.3px", "top": "359.7px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">4 · Dev</span>
                    </div>

                    {/*  Node 5: Low-Left (152.7, 359.7)  */}
                    <div className="sdlc8-node node-p5 node-core" data-phase="5" style={{ "left": "152.7px", "top": "359.7px" }}>
                        <div className="sdlc8-node-circle circle-core">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label label-core">5 · Test ★</span>
                    </div>

                    {/*  Node 6: Mid-Left (68.9, 254.5)  */}
                    <div className="sdlc8-node node-p6" data-phase="6" style={{ "left": "68.9px", "top": "254.5px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">6 · Deploy</span>
                    </div>

                    {/*  Node 7: Top-Left (98.8, 123.4)  */}
                    <div className="sdlc8-node node-p7" data-phase="7" style={{ "left": "98.8px", "top": "123.4px" }}>
                        <div className="sdlc8-node-circle">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                            </svg>
                        </div>
                        <span className="sdlc8-node-label">7 · Maintain</span>
                    </div>

                </div>
            </div>

            {/*  ==============================================
                 RIGHT COLUMN: Phases 2, 3, 4 (Design & Development)
                 ==============================================  */}
            <div className="sdlc8-col sdlc8-col-right">

                {/*  Phase 2: Requirements  */}
                <div className="sdlc8-card" data-phase="2">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 2</span>
                            <span className="sdlc8-phase-name">Requirements</span>
                            <span className="sdlc8-phase-bangla">প্রয়োজনীয়তা</span>
                        </div>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Technical Architecture Specs</div>
                                <div className="sdlc8-role-bangla">ফিচার অনুযায়ী সিস্টেমের টেকনিক্যাল স্পেক রেডি করা</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Find Gaps &amp; Set Acceptance Criteria</div>
                                <div className="sdlc8-role-bangla">রিকোয়ারমেন্টে ফাঁক খোঁজা ও গ্রহণযোগ্যতার শর্ত ঠিক করা</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Phase 3: Design  */}
                <div className="sdlc8-card" data-phase="3">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 3</span>
                            <span className="sdlc8-phase-name">Design</span>
                            <span className="sdlc8-phase-bangla">ডিজাইন ও আর্কিটেকচার</span>
                        </div>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">System &amp; DB Architecture</div>
                                <div className="sdlc8-role-bangla">ডাটাবেজ স্কিমা, API স্ট্রাকচার ও সিস্টেম ডিজাইন তৈরি</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Create Test Scenarios &amp; Strategy</div>
                                <div className="sdlc8-role-bangla">টেস্ট সিনারিও-র খসড়া ও টেস্ট স্ট্র্যাটেজি তৈরি করা</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Phase 4: Development  */}
                <div className="sdlc8-card" data-phase="4">
                    <div className="sdlc8-card-header">
                        <div className="sdlc8-tag-cluster">
                            <span className="sdlc8-phase-badge">Phase 4</span>
                            <span className="sdlc8-phase-name">Development</span>
                            <span className="sdlc8-phase-bangla">কোডিং</span>
                        </div>
                    </div>
                    <div className="sdlc8-card-body">
                        <div className="sdlc8-role-row row-dev">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-dev">💻 Dev</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Write Code &amp; Unit Tests</div>
                                <div className="sdlc8-role-bangla">ফিচারের সোর্স কোড লেখা ও ইউনিট টেস্ট নিশ্চিত করা</div>
                            </div>
                        </div>
                        <div className="sdlc8-card-divider"></div>
                        <div className="sdlc8-role-row row-qa">
                            <div className="sdlc8-role-badge">
                                <span className="pill-role pill-qa">🛡️ QA</span>
                            </div>
                            <div className="sdlc8-role-details">
                                <div className="sdlc8-role-title">Write Test Cases &amp; Test Data</div>
                                <div className="sdlc8-role-bangla">বিস্তারিত টেস্ট কেস লেখা ও টেস্ট ডাটা প্রস্তুত রাখা</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

        {/*  Bottom Takeaway Bar  */}
        <div className="sdlc8-footer-bar reveal d7">
            <div className="sdlc8-footer-badge">Key Takeaway</div>
            <div className="sdlc8-footer-text">
                <span style={{ "color": "var(--blue)", "fontWeight": "700" }}>Developer</span> কোড তৈরি করে আর <span style={{ "color": "var(--accent)", "fontWeight": "700" }}>QA Engineer</span> শুরু থেকে শেষ পর্যন্ত কোয়ালিটি নিশ্চিত করে (<span style={{ "color": "#6EE7B7", "fontWeight": "700" }}>Shift-Left Testing</span>)
            </div>
            <span className="page-num" style={{ "marginLeft": "auto" }}>08 / 15</span>
        </div>

    </div>
    </>
  );
}

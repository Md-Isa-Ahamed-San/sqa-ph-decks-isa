"use client";

import React from "react";

export function Slide09() {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative" }}>
        
        {/*  Header  */}
        <div className="s9-header">
            <div className="slide-eyebrow reveal d1">Daily Work</div>
            <h2 className="slide-title reveal d2" style={{ "fontSize": "40px", "marginBottom": "0" }}>
                A Junior QA's day in <span className="hl">5 steps</span>
            </h2>
        </div>

        {/*  5 Cards Master Stage Row (Centered vertically)  */}
        <div className="s9-stage-wrap" style={{ margin: "auto 0" }}>
            <div className="s9-cards-row">
                
                {/*  CARD 1: Understand requirements  */}
                <div className="s9-step-card card-step-1" data-step-card="1">
                    <div className="s9-card-header">
                        <span className="s9-step-num">01</span>
                        <span className="s9-step-pill">Step 1</span>
                    </div>
                    <h3 className="s9-step-title">Understand requirements</h3>
                    <div className="s9-step-bangla">বুঝতে না পারলে প্রশ্ন করা</div>
                    
                    {/*  Mini Visual: Chat Bubble  */}
                    <div className="s9-visual-panel panel-v1">
                        <div className="s9-chat-wrap">
                            
                            <div className="s9-chat-bubble">
                                <span className="s9-chat-quote">একই Email দিয়ে Password ও Google Login করলে কী হবে?</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  CONNECTOR 1 -> 2  */}
                <div className="s9-connector conn-1-2">
                    <svg className="s9-conn-svg" viewBox="0 0 46 20" fill="none">
                        <line className="s9-conn-line" x1="0" y1="10" x2="36" y2="10" />
                        <polygon className="s9-conn-arrow" points="34,5 44,10 34,15" />
                    </svg>
                </div>

                {/*  CARD 2: Prepare test cases  */}
                <div className="s9-step-card card-step-2" data-step-card="2">
                    <div className="s9-card-header">
                        <span className="s9-step-num">02</span>
                        <span className="s9-step-pill">Step 2</span>
                    </div>
                    <h3 className="s9-step-title">Prepare test cases</h3>
                    <div className="s9-step-bangla">Requirement দেখে test case লেখা</div>
                    
                    {/*  Mini Visual: 3-row checklist  */}
                    <div className="s9-visual-panel panel-v2">
                        <div className="s9-checklist">
                            <div className="s9-check-row row-1">
                                <span className="s9-check-box"></span>
                                <span className="s9-check-text">Valid email + password</span>
                            </div>
                            <div className="s9-check-row row-2">
                                <span className="s9-check-box"></span>
                                <span className="s9-check-text">Wrong password</span>
                            </div>
                            <div className="s9-check-row row-3">
                                <span className="s9-check-box"></span>
                                <span className="s9-check-text">Empty field</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  CONNECTOR 2 -> 3  */}
                <div className="s9-connector conn-2-3">
                    <svg className="s9-conn-svg" viewBox="0 0 46 20" fill="none">
                        <line className="s9-conn-line" x1="0" y1="10" x2="36" y2="10" />
                        <polygon className="s9-conn-arrow" points="34,5 44,10 34,15" />
                    </svg>
                </div>

                {/*  CARD 3: Run test cases  */}
                <div className="s9-step-card card-step-3" data-step-card="3">
                    <div className="s9-card-header">
                        <span className="s9-step-num">03</span>
                        <span className="s9-step-pill">Step 3</span>
                    </div>
                    <h3 className="s9-step-title">Run test cases</h3>
                    <div className="s9-step-bangla">যা হওয়া উচিত vs যা আসলে হলো</div>
                    
                    {/*  Mini Visual: Expected vs Actual  */}
                    <div className="s9-visual-panel panel-v3">
                        <div className="s9-run-compare">
                            <div className="s9-compare-box box-expected">
                                <div className="s9-compare-badge">EXPECTED</div>
                                <div className="s9-compare-value">Login success</div>
                            </div>
                            <div className="s9-compare-box box-actual">
                                <div className="s9-compare-badge">ACTUAL</div>
                                <div className="s9-compare-value">Error 500</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  CONNECTOR 3 -> 4  */}
                <div className="s9-connector conn-3-4">
                    <svg className="s9-conn-svg" viewBox="0 0 46 20" fill="none">
                        <line className="s9-conn-line" x1="0" y1="10" x2="36" y2="10" />
                        <polygon className="s9-conn-arrow" points="34,5 44,10 34,15" />
                    </svg>
                </div>

                {/*  CARD 4: Report bugs  */}
                <div className="s9-step-card card-step-4" data-step-card="4">
                    <div className="s9-card-header">
                        <span className="s9-step-num">04</span>
                        <span className="s9-step-pill">Step 4</span>
                    </div>
                    <h3 className="s9-step-title">Report bugs</h3>
                    <div className="s9-step-bangla">পরিষ্কার details দিয়ে report</div>
                    
                    {/*  Mini Visual: Mini Bug Ticket  */}
                    <div className="s9-visual-panel panel-v4">
                        <div className="s9-ticket-wrap">
                            <div className="s9-ticket-title">Valid email-এও login fail</div>
                            <div className="s9-ticket-chips">
                                <span className="s9-chip chip-1">Steps</span>
                                <span className="s9-chip chip-2">Expected</span>
                                <span className="s9-chip chip-3">Actual</span>
                                <span className="s9-chip chip-4 chip-sev">Severity: High</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  CONNECTOR 4 -> 5  */}
                <div className="s9-connector conn-4-5">
                    <svg className="s9-conn-svg" viewBox="0 0 46 20" fill="none">
                        <line className="s9-conn-line" x1="0" y1="10" x2="36" y2="10" />
                        <polygon className="s9-conn-arrow" points="34,5 44,10 34,15" />
                    </svg>
                </div>

                {/*  CARD 5: Verify fixes  */}
                <div className="s9-step-card card-step-5" data-step-card="5">
                    <div className="s9-card-header">
                        <span className="s9-step-num">05</span>
                        <span className="s9-step-pill">Step 5</span>
                    </div>
                    <h3 className="s9-step-title">Verify fixes</h3>
                    <div className="s9-step-bangla">Fix হয়েছে কিনা, পুরোনো কিছু ভাঙেনি তো</div>
                    
                    {/*  Mini Visual: Status rows flipping to checks  */}
                    <div className="s9-visual-panel panel-v5">
                        <div className="s9-verify-list">
                            <div className="s9-verify-row row-retest">
                                <span className="s9-verify-name">Bug #12 retest</span>
                                <span className="s9-status-badge status-retest">
                                    <span className="status-pending">⏳ Pending</span>
                                    <span className="status-pass">✓ PASS</span>
                                </span>
                            </div>
                            <div className="s9-verify-row row-regression">
                                <span className="s9-verify-name">Regression</span>
                                <span className="s9-status-badge status-regression">
                                    <span className="status-pending">⏳ Pending</span>
                                    <span className="status-pass">✓ PASS</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*  Dashed Loop-Back Arrow from Card 5 to Card 4  */}
            <div className="s9-loopback-wrap">
                <svg className="s9-loopback-svg" viewBox="0 0 720 54" fill="none">
                    <path className="s9-loopback-path" d="M 550,6 C 550,42, 170,42, 170,12" />
                    <polygon className="s9-loopback-arrow" points="170,2 163,16 177,16" />
                </svg>
                <div className="s9-loopback-text">ঠিক না হলে আবার report ↺</div>
            </div>
        </div>

        {/*  Footer Bar & Page Counter  */}
        <div className="bottom-bar"></div>
        <span className="page-num">09 / 15</span>

    </div>
    </>
  );
}

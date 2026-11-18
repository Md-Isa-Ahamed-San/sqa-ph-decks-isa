"use client";

import React from "react";

export function Slide15() {
  return (
    <>
      <div className="slide-pad s15-pad">
        <div className="slide-eyebrow reveal d1">Recap</div>
        <h2 className="slide-title reveal d2" style={{ "fontSize": "40px", "marginBottom": "16px" }}>
            Build quality. Deliver <span className="hl s15-confidence">confidence</span>.
        </h2>

        <div style={{ margin: "auto 0", display: "flex", flexDirection: "column", gap: "32px" }}>
            {/*  Four Equal Cards in ONE Row (~360px tall)  */}
            <div className="s15-cards-row" style={{ marginBottom: "0" }}>
            
            {/*  CARD 1: Quality  */}
            <div className="s15-card s15-card-1">
                <div className="s15-card-top-line"></div>
                <div className="s15-card-top">
                    <div className="s15-card-icon">
                        <svg viewBox="0 0 48 48" width="48" height="48">
                            <path d="M24 6L8 13v11c0 10.5 6.8 20.3 16 23 9.2-2.7 16-12.5 16-23V13L24 6z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="s15-card-title">Quality</div>
                    <div className="s15-card-english">Prevent bugs, not only find them</div>
                    <div className="s15-card-bangla">শুধু bug খোঁজা না, আগেই আটকানো</div>
                </div>
                
                {/*  Mini visual 1: bug dot stopped by shield bar  */}
                <div className="s15-mini-visual">
                    <div className="s15-mv1-track">
                        <div className="s15-mv1-shield"></div>
                        <div className="s15-mv1-bug"></div>
                    </div>
                </div>
            </div>

            {/*  CARD 2: Career  */}
            <div className="s15-card s15-card-2">
                <div className="s15-card-top-line"></div>
                <div className="s15-card-top">
                    <div className="s15-card-icon">
                        <svg viewBox="0 0 48 48" width="48" height="48">
                            <path d="M10 24h12m0 0l16-12m-16 12l16 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            <circle cx="10" cy="24" r="3.5" fill="currentColor" />
                            <circle cx="38" cy="12" r="3.5" fill="currentColor" />
                            <circle cx="38" cy="36" r="3.5" fill="currentColor" />
                            <circle cx="22" cy="24" r="2.5" fill="currentColor" />
                        </svg>
                    </div>
                    <div className="s15-card-title">Career</div>
                    <div className="s15-card-english">Manual first, then Automation, Performance, Lead</div>
                    <div className="s15-card-bangla">Manual দিয়ে শুরু, তারপর নিজের পথ</div>
                </div>

                {/*  Mini visual 2: one dot branching into 3 dots  */}
                <div className="s15-mini-visual">
                    <svg className="s15-branch-svg" viewBox="0 0 160 50" width="160" height="50">
                        <path className="s15-branch-line" d="M 24 25 C 55 25, 75 10, 136 10" fill="none" stroke="var(--accent)" strokeWidth="2" />
                        <path className="s15-branch-line" d="M 24 25 L 136 25" fill="none" stroke="var(--accent)" strokeWidth="2" />
                        <path className="s15-branch-line" d="M 24 25 C 55 25, 75 40, 136 40" fill="none" stroke="var(--accent)" strokeWidth="2" />
                        <circle className="s15-root-dot" cx="24" cy="25" r="5" fill="var(--accent)" />
                        <circle className="s15-target-dot" cx="136" cy="10" r="4.5" fill="var(--green)" />
                        <circle className="s15-target-dot" cx="136" cy="25" r="4.5" fill="var(--blue)" />
                        <circle className="s15-target-dot" cx="136" cy="40" r="4.5" fill="var(--orange)" />
                    </svg>
                </div>
            </div>

            {/*  CARD 3: SDLC  */}
            <div className="s15-card s15-card-3">
                <div className="s15-card-top-line"></div>
                <div className="s15-card-top">
                    <div className="s15-card-icon">
                        <svg viewBox="0 0 48 48" width="48" height="48">
                            <path d="M24 8a16 16 0 1 1-13.8 8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <polyline points="6 10 10 16 16 12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="s15-card-title">SDLC</div>
                    <div className="s15-card-english">QA works in every phase</div>
                    <div className="s15-card-bangla">প্রতিটা phase-এ QA আছে</div>
                </div>

                {/*  Mini visual 3: ring of 7 small dots, all lit clockwise  */}
                <div className="s15-mini-visual">
                    <svg className="s15-ring-svg" viewBox="0 0 66 66" width="64" height="64">
                        <circle className="s15-ring-dot s15-rd-1" cx="32.0" cy="10.0" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-2" cx="49.2" cy="18.3" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-3" cx="53.4" cy="36.9" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-4" cx="41.5" cy="51.8" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-5" cx="22.5" cy="51.8" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-6" cx="10.6" cy="36.9" r="4" fill="var(--accent)" />
                        <circle className="s15-ring-dot s15-rd-7" cx="14.8" cy="18.3" r="4" fill="var(--accent)" />
                    </svg>
                </div>
            </div>

            {/*  CARD 4: Daily Work  */}
            <div className="s15-card s15-card-4">
                <div className="s15-card-top-line"></div>
                <div className="s15-card-top">
                    <div className="s15-card-icon">
                        <svg viewBox="0 0 48 48" width="48" height="48">
                            <path d="M18 12h20M18 24h20M18 36h20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                            <path d="M8 12l3 3 6-6M8 24l3 3 6-6M8 36l3 3 6-6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className="s15-card-title">Daily Work</div>
                    <div className="s15-card-english">Test, report, verify</div>
                    <div className="s15-card-bangla">Test করা, report করা, verify করা</div>
                </div>

                {/*  Mini visual 4: three rows with check marks  */}
                <div className="s15-mini-visual">
                    <div className="s15-mv4-container">
                        <div className="s15-check-row s15-cr-1">
                            <svg className="s15-row-tick" viewBox="0 0 20 20">
                                <path className="s15-tick-draw" d="M3 10l4 4 10-10" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="s15-row-bar"></div>
                        </div>
                        <div className="s15-check-row s15-cr-2">
                            <svg className="s15-row-tick" viewBox="0 0 20 20">
                                <path className="s15-tick-draw" d="M3 10l4 4 10-10" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="s15-row-bar"></div>
                        </div>
                        <div className="s15-check-row s15-cr-3">
                            <svg className="s15-row-tick" viewBox="0 0 20 20">
                                <path className="s15-tick-draw" d="M3 10l4 4 10-10" fill="none" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="s15-row-bar"></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/*  Closing line below the cards, centered, 28px, accent color  */}
        <div className="s15-closing-line">
            এখন থেকে শুরু আপনার QA journey
        </div>
        </div>

        <div className="bottom-bar"></div>
        <span className="page-num">15 / 15</span>
    </div>
    </>
  );
}

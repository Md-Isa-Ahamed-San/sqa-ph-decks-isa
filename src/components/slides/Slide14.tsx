"use client";

import React from "react";

export function Slide14() {
  return (
    <>
      <div className="slide-pad s14-pad">
        <div className="slide-eyebrow reveal d1">Testing Types</div>
        <h2 className="slide-title reveal d2" style={{ "fontSize": "40px" }}>
            <span className="hl">Retest</span> checks the fix. <span className="hl-blue">Regression</span> checks the rest.
        </h2>

        {/*  Comparison Stage: Retest Left + Bridge + Regression Right  */}
        <div className="s14-stage reveal d3" style={{ margin: "auto 0" }}>
            
            {/*  LEFT CARD: Retest (~35% width)  */}
            <div className="s14-card s14-card-retest">
                <div className="s14-card-header">
                    <div className="s14-card-title">Retest</div>
                    <div className="s14-card-question">Is the bug fixed?</div>
                    <div className="s14-card-bangla">Fix ঠিক হয়েছে কিনা</div>
                </div>

                <div className="s14-visual-retest">
                    <div className="s14-chip-bug">
                        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor">
                            <path d="M4 6a4 4 0 0 1 8 0v1h1a1 1 0 0 1 0 2h-1v1a4 4 0 0 1-8 0V9H3a1 1 0 0 1 0-2h1V6zm2 1v1h4V7a2 2 0 0 0-4 0zm0 3v1a2 2 0 0 0 4 0v-1H6z"/>
                        </svg>
                        <span>BUG-012 fixed</span>
                    </div>
                    <div className="s14-login-box">
                        <div className="s14-box-checkbox">
                            <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </div>
                        <div className="s14-box-name">Login</div>
                    </div>
                </div>
            </div>

            {/*  DASHED ARROW BRIDGE: From left Login box into right grid  */}
            <div className="s14-arrow-bridge">
                <svg className="s14-dashed-arrow" viewBox="0 0 80 32" width="80" height="32">
                    <defs>
                        <marker id="s14ArrowHead" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto">
                            <path d="M 0 0 L 8 4 L 0 8 Z" fill="var(--blue)" />
                        </marker>
                    </defs>
                    <line x1="2" y1="16" x2="68" y2="16" stroke="var(--blue)" strokeWidth="2.5" strokeDasharray="6 4" markerEnd="url(#s14ArrowHead)" />
                </svg>
            </div>

            {/*  RIGHT CARD: Regression (~65% width)  */}
            <div className="s14-card s14-card-regression">
                <div className="s14-card-header">
                    <div className="s14-card-title">Regression</div>
                    <div className="s14-card-question">Did anything else break?</div>
                    <div className="s14-card-bangla">বাকি সব ঠিক আছে কিনা</div>
                </div>

                <div className="s14-visual-regression">
                    <div className="s14-grid">
                        {/*  1. Login (Change happened here: glow outline, already done)  */}
                        <div className="s14-grid-box s14-box-glow s14-reg-login">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Login</div>
                        </div>

                        {/*  2. Signup  */}
                        <div className="s14-grid-box s14-reg-box" data-order="1">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Signup</div>
                        </div>

                        {/*  3. Logout  */}
                        <div className="s14-grid-box s14-reg-box" data-order="2">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Logout</div>
                        </div>

                        {/*  4. Password reset (Breaks in Step 3!)  */}
                        <div className="s14-grid-box s14-reg-box s14-box-pwd" data-order="3">
                            <div className="s14-pwd-callout">Login fix করতে গিয়ে এটা ভেঙে গেছে!</div>
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                                <svg className="s14-cross-icon" viewBox="0 0 24 24">
                                    <path d="M6 6l12 12M6 18L18 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Password reset</div>
                        </div>

                        {/*  5. Profile  */}
                        <div className="s14-grid-box s14-reg-box" data-order="4">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Profile</div>
                        </div>

                        {/*  6. Dashboard  */}
                        <div className="s14-grid-box s14-reg-box" data-order="5">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Dashboard</div>
                        </div>

                        {/*  7. Search  */}
                        <div className="s14-grid-box s14-reg-box" data-order="6">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Search</div>
                        </div>

                        {/*  8. Cart  */}
                        <div className="s14-grid-box s14-reg-box" data-order="7">
                            <div className="s14-box-checkbox">
                                <svg className="s14-tick-icon" viewBox="0 0 24 24">
                                    <path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <div className="s14-box-name">Cart</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/*  3-Chip Flow Strip (Placed above bottom 110px safe zone)  */}
        <div className="s14-strip-flow reveal d4">
            <div className="s14-step-chip s14-chip-step-1">
                <span>Login bug fixed</span>
            </div>
            <div className="s14-strip-arrow">→</div>
            <div className="s14-step-chip s14-chip-step-2">
                <span>Retest login</span>
            </div>
            <div className="s14-strip-arrow">→</div>
            <div className="s14-step-chip s14-chip-step-3">
                <span>Regression: signup, logout, password reset</span>
            </div>
        </div>

        <div className="bottom-bar"></div>
        <span className="page-num">14 / 15</span>
    </div>
    </>
  );
}

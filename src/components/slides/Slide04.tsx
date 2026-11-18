"use client";

import React from "react";

export function Slide04() {
  return (
    <>
      <div className="slide-pad" style={{ "position": "relative" }}>
                    <div className="slide-eyebrow reveal d1">Understanding the Differences</div>
                    <h2 className="slide-title reveal d2" style={{ "marginBottom": "16px", "fontSize": "40px" }}>QA <span className="hl">prevents</span>, QC <span className="hl">checks</span>, Testing <span className="hl">finds bugs</span></h2>
                    <div className="three-col" style={{ margin: "auto 0" }}>

                        {/*  Column 1: QA  */}
                        <div className="col-card reveal-scale d3" style={{ "borderColor": "rgba(var(--accent-rgb), 0.25)", "background": "linear-gradient(180deg, rgba(var(--accent-rgb), 0.08) 0%, rgba(26, 39, 48, 0.7) 100%)" }}>
                            <div className="col-card-header">
                                <span className="col-card-title" style={{ "color": "var(--green)" }}>QA</span>
                                <span className="col-card-tag" style={{ "background": "rgba(var(--accent-rgb), 0.15)", "color": "var(--green)", "border": "1px solid rgba(var(--accent-rgb), 0.3)" }}>Process</span>
                            </div>
                            <div className="col-focus-bar">
                                <span className="focus-pill" style={{ "background": "var(--green)", "color": "var(--bg-deep)" }}>Prevent</span>
                                <span className="focus-desc">bug তৈরিই হতে না দেওয়া</span>
                            </div>
                            <div className="col-boxes">
                                <div className="analogy-box">
                                    <div className="analogy-label">🍳 Kitchen Story</div>
                                    <div className="analogy-text">রান্নার সময় chef দেখছে: recipe ঠিকমতো follow হচ্ছে? হাত ধোয়া হয়েছে? etc</div>
                                </div>
                                <div className="analogy-box">
                                    <div className="analogy-label">💻 In Software</div>
                                    <div className="analogy-text">Coding standard আর review ঠিক রাখা।</div>
                                </div>
                            </div>
                        </div>

                        {/*  Column 2: QC  */}
                        <div className="col-card reveal-scale d4" style={{ "borderColor": "rgba(var(--qc-accent-rgb), 0.25)", "background": "linear-gradient(180deg, rgba(var(--qc-accent-rgb), 0.08) 0%, rgba(26, 39, 48, 0.7) 100%)" }}>
                            <div className="col-card-header">
                                <span className="col-card-title" style={{ "color": "var(--qc-accent)" }}>QC</span>
                                <span className="col-card-tag" style={{ "background": "rgba(var(--qc-accent-rgb), 0.15)", "color": "var(--qc-accent)", "border": "1px solid rgba(var(--qc-accent-rgb), 0.3)" }}>Product</span>
                            </div>
                            <div className="col-focus-bar">
                                <span className="focus-pill" style={{ "background": "var(--qc-accent)", "color": "var(--bg-deep)" }}>Inspect</span>
                                <span className="focus-desc">তৈরি জিনিস standard-এ আছে কিনা</span>
                            </div>
                            <div className="col-boxes">
                                <div className="analogy-box">
                                    <div className="analogy-label">🍳 Kitchen Story</div>
                                    <div className="analogy-text">রান্না শেষ, menu-র সাথে মিলিয়ে দেখা: size, রং, temperature।</div>
                                </div>
                                <div className="analogy-box">
                                    <div className="analogy-label">💻 In Software</div>
                                    <div className="analogy-text">Product-কে requirement-এর সাথে মিলিয়ে release-এর আগে চেক করা।</div>
                                </div>
                            </div>
                        </div>

                        {/*  Column 3: Testing  */}
                        <div className="col-card reveal-scale d5" style={{ "borderColor": "rgba(var(--test-accent-rgb), 0.25)", "background": "linear-gradient(180deg, rgba(var(--test-accent-rgb), 0.08) 0%, rgba(26, 39, 48, 0.7) 100%)" }}>
                            <div className="col-card-header">
                                <span className="col-card-title" style={{ "color": "var(--test-accent)" }}>Testing</span>
                                <span className="col-card-tag" style={{ "background": "rgba(var(--test-accent-rgb), 0.15)", "color": "var(--test-accent)", "border": "1px solid rgba(var(--test-accent-rgb), 0.3)" }}>Run Software</span>
                            </div>
                            <div className="col-focus-bar">
                                <span className="focus-pill" style={{ "background": "var(--test-accent)", "color": "var(--bg-deep)" }}>Find</span>
                                <span className="focus-desc">চালিয়ে bug খুঁজে বের করা</span>
                            </div>
                            <div className="col-boxes">
                                <div className="analogy-box">
                                    <div className="analogy-label">🍳 Kitchen Story</div>
                                    <div className="analogy-text">কেউ সত্যিই test করে দেখছে: "লবণ বেশি", "ঠান্ডা"।</div>
                                </div>
                                <div className="analogy-box">
                                    <div className="analogy-label">💻 In Software</div>
                                    <div className="analogy-text">App চালিয়ে ভুল input দিয়ে bug খুঁজে বের করা।</div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="footer-note reveal d6">Testing is part of QC. Many companies say "QA" but actually mean testing.</div>
                    <div className="bottom-bar"></div>
                    <span className="page-num">04 / 15</span>
                </div>
    </>
  );
}

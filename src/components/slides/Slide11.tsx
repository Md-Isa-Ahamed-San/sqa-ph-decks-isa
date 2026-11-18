"use client";

import React from "react";

export function Slide11() {
  return (
    <>
      <div className="slide-pad">
        
        {/*  Header  */}
        <div className="s11-header">
            <div className="slide-eyebrow reveal d1">Bug Reporting</div>
            <h2 className="slide-title reveal d2">
                A good bug report saves <span className="hl">everyone's time</span>
            </h2>
        </div>

        {/*  Master 2-Column Split: Ticket (Left ~60%) + Callout Panel (Right ~40%)  */}
        <div className="s11-stage">

            {/*  LEFT: Realistic Bug Ticket Card (~60%)  */}
            <div className="s11-ticket-wrapper">
                <div className="s11-ticket-card">
                    
                    {/*  Ticket Header  */}
                    <div className="ticket-header-row">
                        <div className="ticket-id-group">
                            <span className="ticket-id">BUG-001</span>
                            <span className="ticket-status">Open</span>
                        </div>
                        <div className="ticket-meta-tag">Issue Tracker</div>
                    </div>

                    {/*  Field 1: Title  */}
                    <div className="s11-field-group field-title">
                        <div className="field-label">TITLE</div>
                        <div className="field-val-title">Login page shows "Server Error"</div>
                    </div>

                    {/*  Field 2: Environment  */}
                    <div className="s11-field-group field-env">
                        <div className="field-label">ENVIRONMENT</div>
                        <div className="field-val-env">Chrome, Windows 11</div>
                    </div>

                    {/*  Field 3: Steps to Reproduce  */}
                    <div className="s11-field-group field-steps">
                        <div className="field-label">STEPS TO REPRODUCE</div>
                        <div className="steps-numbered-list">
                            <div className="step-line"><span className="step-num">1</span> Open Login page</div>
                            <div className="step-line"><span className="step-num">2</span> Enter valid email and password</div>
                            <div className="step-line"><span className="step-num">3</span> Click Login</div>
                        </div>
                    </div>

                    {/*  Field 4: Expected vs Actual  */}
                    <div className="s11-field-group field-exp-act">
                        <div className="exp-act-col col-expected">
                            <div className="field-label label-expected">EXPECTED RESULT</div>
                            <div className="field-val-exp">Dashboard opens</div>
                        </div>
                        <div className="exp-act-divider"></div>
                        <div className="exp-act-col col-actual">
                            <div className="field-label label-actual">ACTUAL RESULT</div>
                            <div className="field-val-act">"Server Error"</div>
                        </div>
                    </div>

                    {/*  Field 5: Severity, Priority, Attachment  */}
                    <div className="s11-field-group field-meta">
                        <div className="meta-pills">
                            <div className="meta-pill-item">
                                <span className="pill-k">Severity:</span>
                                <span className="pill-v v-high">High</span>
                            </div>
                            <div className="meta-pill-item">
                                <span className="pill-k">Priority:</span>
                                <span className="pill-v v-high">High</span>
                            </div>
                        </div>
                        <div className="attachment-pill">
                            <span className="att-icon">📎</span>
                            <span className="att-name">screenshot.png</span>
                        </div>
                    </div>

                </div>

                {/*  Banner under ticket (Fades in on Step 5)  */}
                <div className="s11-fix-banner">
                    🚀 Developer সরাসরি fix শুরু করতে পারে
                </div>
            </div>

            {/*  RIGHT: Callout Panel with Pointer (~40%)  */}
            <div className="s11-callout-column">
                <div className="s11-callout-panel">
                    <div className="callout-notch"></div>
                    <div className="callout-header">
                        <span className="callout-badge">EXPLANATION</span>
                        <span className="callout-step-num" id="s11CalloutStepNum">Insight</span>
                    </div>

                    <div className="callout-body">
                        {/*  Step 0 Prompt  */}
                        <div className="callout-msg msg-step-0">
                            <div className="msg-main">একটি আদর্শ বাগ রিপোর্ট</div>
                            <div className="msg-bangla">প্রতিটি ফিল্ডের গুরুত্ব</div>
                        </div>

                        {/*  Step 1: Title  */}
                        <div className="callout-msg msg-step-1">
                            <div className="msg-target">Title</div>
                            <div className="msg-bangla">“এক লাইনে সমস্যাটা বোঝা যায়”</div>
                            <div className="msg-sub">ডেভেলপার টাইটেল পড়েই বুঝতে পারে কোন ফিচারে কী সমস্যা হয়েছে।</div>
                        </div>

                        {/*  Step 2: Environment  */}
                        <div className="callout-msg msg-step-2">
                            <div className="msg-target">Environment</div>
                            <div className="msg-bangla">“কোন browser, device, OS-এ হয়েছে”</div>
                            <div className="msg-sub">সমস্যাটি কি শুধু নির্দিষ্ট ব্রাউজারে নাকি সব প্ল্যাটফর্মে তা নিশ্চিত করে।</div>
                        </div>

                        {/*  Step 3: Steps  */}
                        <div className="callout-msg msg-step-3">
                            <div className="msg-target">Steps to Reproduce</div>
                            <div className="msg-bangla">“Developer নিজে repeat করতে পারবে”</div>
                            <div className="msg-sub">স্টেপ দেখে ডেভেলপার নিজে ১ মিনিটে সমস্যাটি পুনরুজ্জীবিত করতে পারে।</div>
                        </div>

                        {/*  Step 4: Expected vs Actual  */}
                        <div className="callout-msg msg-step-4">
                            <div className="msg-target">Expected vs Actual</div>
                            <div className="msg-bangla">“এই gap-টাই bug”</div>
                            <div className="msg-sub">কী হওয়ার কথা ছিল আর বাস্তবে কী ঘটেছে—এই ব্যবধানটাই হলো আসল ডিফেক্ট।</div>
                        </div>

                        {/*  Step 5: Severity, Priority, Attachment  */}
                        <div className="callout-msg msg-step-5">
                            <div className="msg-target">Severity, Priority &amp; Attachment</div>
                            <div className="msg-bangla">“কতটা গুরুতর, কত তাড়াতাড়ি, আর screenshot প্রমাণ”</div>
                            <div className="msg-sub">অকাট্য স্ক্রিনশট প্রমাণ থাকলে কোনো বাড়তি প্রশ্ন ছাড়াই ডেভেলপার সরাসরি কাজ শুরু করে।</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
  );
}

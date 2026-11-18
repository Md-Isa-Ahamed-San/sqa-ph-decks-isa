"use client";

import React from "react";

export function Slide10() {
  return (
    <>
      <div className="slide-pad">
        
        {/*  Header  */}
        <div className="s10-header">
            <div className="slide-eyebrow reveal d1">Testing Basics</div>
            <h2 className="slide-title reveal d2">
                Scenario = <span className="hl">what</span> to test · Test case = <span className="hl">how</span> to test
            </h2>
        </div>

        {/*  Master Composition: Vertically centered Scenario -> SVG Branches -> Test Cases  */}
        <div className="s10-composition">
            
            {/*  Left: Scenario Card  */}
            <div className="s10-scenario-card" id="s10ScenarioCard">
                <div className="s10-scenario-chip">Scenario · what to test</div>
                <div className="s10-scenario-title">Verify Login functionality</div>
                <div className="s10-scenario-bangla">কী test করবো</div>
            </div>

            {/*  Center: Curved SVG Branch Lines  */}
            <div className="s10-branch-stage">
                <svg className="s10-branches-svg" viewBox="0 0 200 440" fill="none" preserveAspectRatio="none">
                    {/*  Branch 1: curves up to TC-01  */}
                    <path className="branch-path branch-path-1" d="M 0 220 C 100 220, 100 65, 200 65" />
                    {/*  Branch 2: straight to TC-02  */}
                    <path className="branch-path branch-path-2" d="M 0 220 C 100 220, 100 220, 200 220" />
                    {/*  Branch 3: curves down to TC-03  */}
                    <path className="branch-path branch-path-3" d="M 0 220 C 100 220, 100 375, 200 375" />
                </svg>
            </div>

            {/*  Right: 3 Test Case Cards Stacked  */}
            <div className="s10-cases-column">
                
                {/*  Group Chip  */}
                <div className="s10-cases-group-chip">
                    <span className="tc-group-pill">Test case · how to test</span>
                    <span className="tc-group-bangla">কীভাবে test করবো</span>
                </div>

                {/*  Stacked Cards  */}
                <div className="s10-tc-list">
                    
                    {/*  TC-01: Valid Login  */}
                    <div className="s10-tc-card tc-01">
                        <div className="tc-header-row">
                            <div className="tc-meta-left">
                                <span className="tc-id-pill">TC-01</span>
                                <span className="tc-title-text">Valid login</span>
                            </div>
                            <span className="tc-status-chip chip-accent">ঠিক input</span>
                        </div>

                        {/*  Step 3 Expanded Steps  */}
                        <div className="tc-expanded-steps">
                            <div className="tc-step-item"><span className="step-num">1</span> Open login page</div>
                            <div className="tc-step-item"><span className="step-num">2</span> Enter valid email</div>
                            <div className="tc-step-item"><span className="step-num">3</span> Enter valid password</div>
                            <div className="tc-step-item"><span className="step-num">4</span> Click Login</div>
                        </div>

                        {/*  Expected Result  */}
                        <div className="tc-expected-row">
                            <span className="tc-exp-badge">Expected:</span>
                            <span className="tc-exp-val">Dashboard opens</span>
                        </div>

                        {/*  Step 3 Bangla Note  */}
                        <div className="tc-step3-note">
                            💡 প্রতিটা test case-এ step আর expected result থাকে
                        </div>
                    </div>

                    {/*  TC-02: Wrong Password  */}
                    <div className="s10-tc-card tc-02">
                        <div className="tc-header-row">
                            <div className="tc-meta-left">
                                <span className="tc-id-pill">TC-02</span>
                                <span className="tc-title-text">Wrong password</span>
                            </div>
                            <span className="tc-status-chip chip-error">ভুল input</span>
                        </div>
                        <div className="tc-expected-row">
                            <span className="tc-exp-badge">Expected:</span>
                            <span className="tc-exp-val">"Invalid password" message</span>
                        </div>
                    </div>

                    {/*  TC-03: Empty Email  */}
                    <div className="s10-tc-card tc-03">
                        <div className="tc-header-row">
                            <div className="tc-meta-left">
                                <span className="tc-id-pill">TC-03</span>
                                <span className="tc-title-text">Empty email</span>
                            </div>
                            <span className="tc-status-chip chip-error">ভুল input</span>
                        </div>
                        <div className="tc-expected-row">
                            <span className="tc-exp-badge">Expected:</span>
                            <span className="tc-exp-val">"Email is required" message</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        {/*  Centered Bangla Summary Line Under Composition  */}
        <div className="s10-bottom-caption">
            একটা scenario থেকে অনেকগুলো test case
        </div>

    </div>
    </>
  );
}

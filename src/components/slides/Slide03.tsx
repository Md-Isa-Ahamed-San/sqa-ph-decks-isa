"use client";

import React from "react";

export function Slide03() {
  return (
    <>
      <div className="slide-split" style={{ "position": "relative" }}>
                    <div className="split-left">
                        <div className="slide-eyebrow reveal d1">Definition</div>
                        <h2 className="slide-title reveal-left d2">SQA <span className="hl">prevents</span> bugs,<br />not only finds them</h2>
                        <div className="mid-text reveal d3" style={{ "marginTop": "32px", "padding": "32px", "background": "var(--green-bg)", "borderRadius": "14px", "borderLeft": "4px solid var(--green)" }}>
                            SQA = making sure software works the way users expect
                        </div>
                        <div className="bangla reveal d4" style={{ "marginTop": "16px", "fontSize": "22px" }}>
                            Software যেন user-এর চাহিদা মতো কাজ করে, সেটা নিশ্চিত করা
                        </div>
                    </div>
                    <div className="split-right" style={{ "width": "620px", "marginRight": "50px", "gap": "24px" }}>
                        <div className="card card-green reveal d5" style={{ "padding": "28px 32px" }}>
                            <div className="card-title" style={{ "color": "var(--green)", "fontSize": "24px", "marginBottom": "10px" }}>🛡️ Prevent defects</div>
                            <div className="card-body" style={{ "fontSize": "21px", "lineHeight": "1.5", "color": "var(--cream)" }}>কোডে থাকা ভুলগুলো ব্যবহারকারীর কাছে পৌঁছানোর আগেই খুঁজে বের করা।</div>
                        </div>
                        <div className="card card-green reveal d6" style={{ "padding": "28px 32px" }}>
                            <div className="card-title" style={{ "color": "var(--green)", "fontSize": "24px", "marginBottom": "10px" }}>📋 Follow quality standards</div>
                            <div className="card-body" style={{ "fontSize": "21px", "lineHeight": "1.5", "color": "var(--cream)" }}>সফটওয়্যার তৈরির প্রতিটি ধাপে নির্দিষ্ট নিয়ম ও checklist অনুসরণ করা।</div>
                        </div>
                        <div className="card card-green reveal d7" style={{ "padding": "28px 32px" }}>
                            <div className="card-title" style={{ "color": "var(--green)", "fontSize": "24px", "marginBottom": "10px" }}>✅ Deliver reliable software</div>
                            <div className="card-body" style={{ "fontSize": "21px", "lineHeight": "1.5", "color": "var(--cream)" }}>এমন সফটওয়্যার নিশ্চিত করা, যেটি ব্যবহারকারীরা নিশ্চিন্তে ব্যবহার করতে পারে।</div>
                        </div>
                    </div>
                    <div className="bottom-bar"></div>
                    <span className="page-num">03 / 15</span>
                </div>
    </>
  );
}

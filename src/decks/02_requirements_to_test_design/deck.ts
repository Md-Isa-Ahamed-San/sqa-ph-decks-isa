import { defineDeck } from "~/lib/defineDeck";
import { meta } from "./meta";
import {
  Slide01,
  Slide02,
  Slide03,
  Slide04,
  Slide05,
  Slide06,
  Slide07,
  Slide08,
  Slide09,
  Slide10,
  Slide11,
  Slide12,
  Slide13,
  Slide14,
} from "~/components/slides/deck02";

export default defineDeck({
  meta,
  slides: [
    // Slide 01: HeroTitle — From Requirements to Test Cases
    {
      type: "custom",
      component: Slide01,
      id: "slide-1",
      stepCount: 0,
      notes:
        "Welcome to Module 02! Today we bridge the gap between what the client wants and how we actually test it using a real Login feature. Read the chips to introduce today's agenda.",
    },

    // Slide 02: StoryHook — The High Cost of Vague Requirements
    {
      type: "custom",
      component: Slide02,
      id: "slide-2",
      stepCount: 0,
      notes:
        "QA work does not start after coding finishes. It starts by questioning vague words like 'fast' or 'user-friendly' in the requirement document before developers write a single line of code.",
    },

    // Slide 03: ThreeColumn — The 3 Pillars of Software Requirements
    {
      type: "custom",
      component: Slide03,
      id: "slide-3",
      stepCount: 0,
      notes:
        "Step through each column. Show students how our Login screen has business goals, functional rules, and non-functional performance limits.",
    },

    // Slide 04: ConceptSplit — Read the Requirement Like a QA (NEW)
    {
      type: "custom",
      component: Slide04,
      id: "slide-4",
      stepCount: 0,
      notes:
        "Explain the 3 Red Flags to spot in any requirement: Vague words, missing limits/error paths, and contradictory rules. Highlight the 3 questions QA asks before testing. Questions asked before coding are the cheapest bugs to fix.",
    },

    // Slide 05: ProcessLane — The QA Translation Pipeline
    {
      type: "custom",
      component: Slide05,
      id: "slide-5",
      stepCount: 4,
      initialStep: 1,
      notes:
        "This is your bridge slide! Emphasize this 4-step pipeline—every single test case you write in your career follows this exact path.",
    },

    // Slide 06: Symmetrical Flanking Wheel — INVEST Model
    {
      type: "custom",
      component: Slide06,
      id: "slide-6",
      stepCount: 6,
      initialStep: 0,
      notes:
        "আগে hub-টা দেখো: As a [Role], I want [Action], so that [Benefit]। Role মানে কে চায়, Action মানে কী করতে চায়, Benefit মানে কেন চায়। আমাদের Login story-তে Role = Registered User, Action = Email দিয়ে Log In, Benefit = নিজের Account Access। QA এই তিনটা অংশ ধরেই প্রশ্ন করে। এবার দেখব একটা ভালো story-র ৬টা গুণ: INVEST।",
    },

    // Slide 07: ConceptSplit — Acceptance Criteria (AC): The QA Checklist
    {
      type: "custom",
      component: Slide07,
      id: "slide-7",
      stepCount: 0,
      notes:
        "Now we transition from theory to our live Login feature! Show how QA reads these 3 ACs as their ultimate testing boundary.",
    },

    // Slide 08: ComparisonSplit — Checklist Style vs. Given-When-Then
    {
      type: "custom",
      component: Slide08,
      id: "slide-8",
      stepCount: 0,
      notes:
        "Explain that both formats are valid in the industry. Whether a company uses bullets or Given-When-Then, QA uses them to derive Test Scenarios.",
    },

    // Slide 09: ComparisonSplit — Test Scenario vs. Test Case
    {
      type: "custom",
      component: Slide09,
      id: "slide-9",
      stepCount: 0,
      notes:
        "Now that we have our Login ACs, why do we need both Scenarios and Test Cases? Contrast the high-level 'What' against the granular 'How'.",
    },

    // Slide 10: ConceptSplit — Practical Breakdown: 1 Scenario = Many Test Cases
    {
      type: "custom",
      component: Slide10,
      id: "slide-10",
      stepCount: 5,
      initialStep: 0,
      notes:
        "আগে তিনটা টার্ম: Positive = সঠিক ইনপুটে ফিচার কাজ করে কি না। Negative = ভুল ইনপুটে সিস্টেম নিরাপদে আটকায় কি না। Boundary = সীমার ঠিক কিনারায়: ৪ বার ভুল করলে লক হয় না, ৫ম বারে হয়। এখন একটা Scenario থেকে ৫টা Test Case বের করি। প্রতিটা কার্ড খোলার সময় legend-এ কোন টাইপ জ্বলছে সেটা দেখাও।",
    },

    // Slide 11: BugReportMonospace — Inside a Production-Grade Test Case
    {
      type: "custom",
      component: Slide11,
      id: "slide-11",
      stepCount: 4,
      initialStep: 0,
      notes:
        "চারটা জিনিস খেয়াল করো: ১) ID, Req ID আর AC ID: এভাবেই test case requirement-এর সাথে বাঁধা থাকে। ২) Precondition না থাকলে অন্য tester জানবে না কোথা থেকে শুরু করবে। ৩) Exact data: 'valid email' না, rahim@test.com। ৪) Negative test-এ error ঠিকমতো এলে Status = PASS, Fail না।",
    },

    // Slide 12: ComparisonSplit — Amateur vs. Professional Test Case Writing
    {
      type: "custom",
      component: Slide12,
      id: "slide-12",
      stepCount: 0,
      notes:
        "Before wrapping up, show this side-by-side contrast. Remind students of the Atomic rule: 1 Test Case = 1 clear objective.",
    },

    // Slide 13: Live Demo — Build the Login Test Sheet
    {
      type: "custom",
      component: Slide13,
      id: "slide-13",
      stepCount: 3,
      initialStep: 0,
      notes:
        "Show the sheet format: 9 columns, 4 groups (Identify, Describe, Execute, Verify). Demonstrate 3 clean rows from our 3 ACs. Explain that the full 25-case practical comes in Video 6 after learning EP and BVA.",
    },

    // Slide 14: RecapGrid — 4 Golden Rules from Requirements to Test Cases
    {
      type: "custom",
      component: Slide14,
      id: "slide-14",
      stepCount: 0,
      notes:
        "Recap the 4 core takeaways. Conclude with the bridge to Video 02: Equivalence Partitioning (EP) and Boundary Value Analysis (BVA).",
    },
  ],
});

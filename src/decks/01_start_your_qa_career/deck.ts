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
  Slide15,
} from "~/components/slides";

export default defineDeck({
  meta,
  slides: [
    // Slide 01: HeroTitle — Start Your QA Career
    {
      type: "custom",
      component: Slide01,
      id: "slide-1",
      stepCount: 0,
      notes: "In this video you will learn three things. Read the chips.",
    },

    // Slide 02: ConceptSplit — Mars Climate Orbiter Disaster Hook
    {
      type: "custom",
      component: Slide02,
      id: "slide-2",
      stepCount: 0,
      notes:
        "One system sent data in one unit, the other expected another. Small errors added up over months. This kind of mismatch is what testing is for.",
    },

    // Slide 03: ConceptSplit — What is SQA?
    {
      type: "custom",
      component: Slide03,
      id: "slide-3",
      stepCount: 0,
      notes: "Put your longer definition in the notes. Keep the slide simple.",
    },

    // Slide 04: ThreeColumn — Three Pillars of Quality (QC vs QA vs Testing)
    {
      type: "custom",
      component: Slide04,
      id: "slide-4",
      stepCount: 0,
      notes:
        "Explain one column at a time with the restaurant story. Tell them many companies say QA but mean testing.",
    },

    // Slide 05: Roadmap — QA Career Roadmap (Fresher to Architect)
    {
      type: "custom",
      component: Slide05,
      id: "slide-5",
      stepCount: 0,
      notes:
        "SDET = Software Development Engineer in Test. No salary numbers.",
    },

    // Slide 06: ConceptSplit — QA Lead Equation & T-Shaped Skill Model
    {
      type: "custom",
      component: Slide06,
      id: "slide-6",
      stepCount: 0,
      notes:
        "A Lead does not need to write every script, but must know when each type of testing is needed.",
    },

    // Slide 07: CircularWheel — 7 Phases of SDLC
    {
      type: "custom",
      component: Slide07,
      id: "slide-7",
      stepCount: 0,
      notes:
        "Software is built in 7 phases in a continuous cycle, not a one-time waterfall line. After maintenance, feedback triggers planning for the next version.",
    },

    // Slide 08: CircularWheel (Interactive) — What Developer & QA Do in Each Phase
    {
      type: "custom",
      component: Slide08,
      id: "slide-8",
      stepCount: 7,
      initialStep: 1,
      notes:
        "In every phase of SDLC, Developer builds and QA ensures quality. Notice that QA starts from Phase 1 Planning, not Phase 5 Testing. This is called Shift-Left testing.",
    },

    // Slide 09: ProcessLane (Interactive) — A Day in the Life of a Junior QA Engineer
    {
      type: "custom",
      component: Slide09,
      id: "slide-9",
      stepCount: 5,
      initialStep: 1,
      notes: "This is the main promise of the video. Slow down here.",
    },

    // Slide 10: ComparisonSplit — Test Scenario vs Test Case
    {
      type: "custom",
      component: Slide10,
      id: "slide-10",
      stepCount: 3,
      initialStep: 1,
      notes:
        "Scenario is what to test (high-level feature). Test Case is how to test (concrete steps + expected result). One scenario branches into multiple test cases.",
    },

    // Slide 11: BugReportMonospace — Anatomy of a Complete Bug Report
    {
      type: "custom",
      component: Slide11,
      id: "slide-11",
      stepCount: 5,
      initialStep: 0,
      notes:
        "A complete bug report leaves no ambiguity. Developer can reproduce and fix it without asking extra questions.",
    },

    // Slide 12: ComparisonSplit — Bug Title Formula: Where + What + When
    {
      type: "custom",
      component: Slide12,
      id: "slide-12",
      stepCount: 4,
      initialStep: 0,
      notes:
        "A bad title makes the developer ask three extra questions: where did it happen, what actually happened, and what did you click? The formula Where + What + When eliminates all ambiguity.",
    },

    // Slide 13: Matrix2x2 — Severity vs Priority Matrix
    {
      type: "custom",
      component: Slide13,
      id: "slide-13",
      stepCount: 5,
      initialStep: 0,
      notes:
        "Severity is technical damage (QA sets it). Priority is business urgency (Manager / Product Owner sets it). Misspelled company name is the classic Low Severity, High Priority bug.",
    },

    // Slide 14: ComparisonSplit — Retesting vs Regression Testing
    {
      type: "custom",
      component: Slide14,
      id: "slide-14",
      stepCount: 3,
      initialStep: 0,
      notes:
        "Retest verifies the specific fix. Regression verifies the entire system didn't break.",
    },

    // Slide 15: RecapGrid — Course Recap & Next Steps
    {
      type: "custom",
      component: Slide15,
      id: "slide-15",
      stepCount: 0,
      notes:
        "Read the four cards, then the closing line from your script.",
    },
  ],
});

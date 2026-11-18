import React from "react";

/* ========================================================
   DECK METADATA & STATUS
   ======================================================== */
export type DeckStatus = "draft" | "ready" | "recorded";

export interface DeckMeta {
  slug: string;
  videoNo: number;
  module: number; // 1-10
  title: string;
  titleBn: string;
  tags: string[];
  status: DeckStatus;
  description?: string;
}

/* ========================================================
   ARCHETYPE PROPS
   ======================================================== */

// 1. HeroTitle
export interface HeroTitleProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  subtitleBn?: string;
  agendaItems?: Array<{
    title: string;
    titleBn?: string;
    icon?: string;
    color?: "purple" | "cyan" | "blue" | "amber";
  }>;
}

// 2. ConceptSplit
export interface ConceptSplitProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  quote?: {
    text: string;
    textBn?: string;
    author?: string;
  };
  cards?: Array<{
    title: string;
    titleBn?: string;
    points: Array<{ text: string; textBn?: string }>;
    color?: "purple" | "cyan" | "blue" | "amber" | "red";
    icon?: string;
  }>;
  highlightBox?: {
    title: string;
    titleBn?: string;
    text: string;
    textBn?: string;
  };
}

// 3. ThreeColumn
export interface ThreeColumnProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  columns: Array<{
    title: string;
    titleBn?: string;
    badge?: string;
    badgeColor?: "purple" | "cyan" | "blue" | "amber" | "red";
    points: Array<{ text: string; textBn?: string }>;
    summary?: string;
    summaryBn?: string;
  }>;
}

// 4. ComparisonSplit
export interface ComparisonSplitProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  left: {
    title: string;
    titleBn?: string;
    badge?: string;
    color?: "red" | "purple" | "blue" | "cyan";
    points: Array<{ text: string; textBn?: string; icon?: string }>;
  };
  right: {
    title: string;
    titleBn?: string;
    badge?: string;
    color?: "cyan" | "green" | "blue" | "purple";
    points: Array<{ text: string; textBn?: string; icon?: string }>;
  };
  bottomNote?: {
    text: string;
    textBn?: string;
  };
}

// 5. ProcessLane
export interface ProcessLaneProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  steps: Array<{
    stepNumber: number | string;
    title: string;
    titleBn?: string;
    description: string;
    descriptionBn?: string;
    badge?: string;
    highlight?: boolean;
  }>;
  footerNote?: {
    text: string;
    textBn?: string;
  };
}

// 6. CircularWheel
export interface CircularWheelProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  centerTitle: string;
  centerSubtitle?: string;
  phases: Array<{
    phase: number;
    title: string;
    titleBn?: string;
    icon?: string;
    highlight?: boolean;
    qaTag?: string;
    devAction?: string;
    qaAction?: string;
  }>;
  activePhase?: number;
  showDevVsQa?: boolean;
}

// 7. Matrix2x2
export interface Matrix2x2Props {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  xAxisLabel: { low: string; high: string; title: string };
  yAxisLabel: { low: string; high: string; title: string };
  quadrants: {
    topLeft: {
      title: string;
      titleBn?: string;
      action: string;
      actionBn?: string;
      badge: string;
      color: "amber" | "red" | "cyan" | "purple";
    };
    topRight: {
      title: string;
      titleBn?: string;
      action: string;
      actionBn?: string;
      badge: string;
      color: "amber" | "red" | "cyan" | "purple";
    };
    bottomLeft: {
      title: string;
      titleBn?: string;
      action: string;
      actionBn?: string;
      badge: string;
      color: "amber" | "red" | "cyan" | "purple";
    };
    bottomRight: {
      title: string;
      titleBn?: string;
      action: string;
      actionBn?: string;
      badge: string;
      color: "amber" | "red" | "cyan" | "purple";
    };
  };
}

// 8. BugReportMonospace
export interface BugReportMonospaceProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  reportId: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  priority: "P1" | "P2" | "P3" | "P4";
  summary: string;
  summaryBn?: string;
  environment: string;
  stepsToReproduce: string[];
  expectedResult: string;
  expectedResultBn?: string;
  actualResult: string;
  actualResultBn?: string;
  annotation?: string;
  annotationBn?: string;
}

// 9. RecapGrid
export interface RecapGridProps {
  eyebrow?: string;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  subtitleBn?: string;
  cards: Array<{
    title: string;
    titleBn?: string;
    takeaway: string;
    takeawayBn?: string;
    icon?: string;
    tag?: string;
  }>;
}

/* ========================================================
   DISCRIMINATED UNION OVER ARCHETYPE TYPES
   ======================================================== */
export type SlideDefinition =
  | { type: "HeroTitle"; props: HeroTitleProps; notes?: string; id?: string; initialStep?: number }
  | { type: "ConceptSplit"; props: ConceptSplitProps; notes?: string; id?: string; initialStep?: number }
  | { type: "ThreeColumn"; props: ThreeColumnProps; notes?: string; id?: string; initialStep?: number }
  | { type: "ComparisonSplit"; props: ComparisonSplitProps; notes?: string; id?: string; initialStep?: number }
  | { type: "ProcessLane"; props: ProcessLaneProps; notes?: string; id?: string; initialStep?: number }
  | { type: "CircularWheel"; props: CircularWheelProps; notes?: string; id?: string; initialStep?: number }
  | { type: "Matrix2x2"; props: Matrix2x2Props; notes?: string; id?: string; initialStep?: number }
  | { type: "BugReportMonospace"; props: BugReportMonospaceProps; notes?: string; id?: string; initialStep?: number }
  | { type: "RecapGrid"; props: RecapGridProps; notes?: string; id?: string; initialStep?: number }
  | {
      type: "custom";
      component: React.ComponentType<{ step: number; isExport?: boolean }>;
      notes?: string;
      stepCount?: number;
      id?: string;
      initialStep?: number;
    };

export interface Deck {
  meta: DeckMeta;
  slides: SlideDefinition[];
}

/* ========================================================
   STEP COUNT HELPER FUNCTION
   Derives total steps directly from archetype props (Rule 7)
   ======================================================== */
export function getSlideStepCount(slide: SlideDefinition): number {
  switch (slide.type) {
    case "HeroTitle":
      return slide.props.agendaItems ? slide.props.agendaItems.length : 0;
    case "ConceptSplit":
      return slide.props.cards ? slide.props.cards.length : 0;
    case "ThreeColumn":
      return slide.props.columns ? slide.props.columns.length : 0;
    case "ComparisonSplit":
      return 2; // Left side then Right side reveal
    case "ProcessLane":
      return slide.props.steps ? slide.props.steps.length : 0;
    case "CircularWheel":
      return slide.props.phases ? slide.props.phases.length : 0;
    case "Matrix2x2":
      return 4; // 4 quadrants
    case "BugReportMonospace":
      return 3; // Info header -> steps -> actual vs expected
    case "RecapGrid":
      return slide.props.cards ? slide.props.cards.length : 0;
    case "custom":
      return slide.stepCount ?? 0;
    default:
      return 0;
  }
}

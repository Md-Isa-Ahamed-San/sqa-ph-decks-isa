"use client";

import React from "react";
import type { SlideDefinition } from "~/lib/types";
import {
  HeroTitle,
  ConceptSplit,
  ThreeColumn,
  ComparisonSplit,
  ProcessLane,
  CircularWheel,
  Matrix2x2,
  BugReportMonospace,
  RecapGrid,
} from "../archetypes";
import { useStep } from "./StepContext";

interface SlideRendererProps {
  slide: SlideDefinition;
  slideIndex: number; // 0-based
  totalSlides: number;
  module?: number;
  videoNo?: number;
}

export function SlideRenderer({
  slide,
  slideIndex,
  totalSlides,
  module = 1,
  videoNo = 1,
}: SlideRendererProps) {
  const { currentStep, isExport } = useStep();
  const pageNum = `${String(slideIndex + 1).padStart(2, "0")} / ${String(
    totalSlides
  ).padStart(2, "0")}`;

  switch (slide.type) {
    case "HeroTitle":
      return (
        <HeroTitle
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "ConceptSplit":
      return (
        <ConceptSplit
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "ThreeColumn":
      return (
        <ThreeColumn
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "ComparisonSplit":
      return (
        <ComparisonSplit
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "ProcessLane":
      return (
        <ProcessLane
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "CircularWheel":
      return (
        <CircularWheel
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "Matrix2x2":
      return (
        <Matrix2x2
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "BugReportMonospace":
      return (
        <BugReportMonospace
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "RecapGrid":
      return (
        <RecapGrid
          {...slide.props}
          pageNum={pageNum}
          module={module}
          videoNo={videoNo}
        />
      );

    case "custom": {
      const Component = slide.component;
      return <Component step={currentStep} isExport={isExport} />;
    }

    default:
      return null;
  }
}

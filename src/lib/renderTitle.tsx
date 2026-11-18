import React from "react";

/**
 * Renders title text with highlight span guarantee.
 * If titleHighlight is specified, it ensures the highlighted word(s)
 * are always displayed with gradient or accent styling, even if title
 * does not already contain the phrase.
 */
export function renderTitleWithHighlight(
  title: string,
  titleHighlight?: string,
  highlightClass: string = "bg-gradient-to-r from-qa-cyan via-qa-blue to-purple-400 bg-clip-text text-transparent"
): React.ReactNode {
  if (!titleHighlight) {
    return title;
  }

  const hasHighlight = title.toLowerCase().includes(titleHighlight.toLowerCase());
  const fullText = hasHighlight ? title : `${title} ${titleHighlight}`;

  const escaped = titleHighlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = fullText.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === titleHighlight.toLowerCase() ? (
          <span key={i} className={highlightClass}>
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

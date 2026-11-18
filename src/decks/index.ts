import type { Deck, DeckMeta } from "~/lib/types";
import { meta as meta01 } from "./01_start_your_qa_career/meta";
import { meta as meta02 } from "./02_requirements_to_test_design/meta";

/**
 * List of all deck metadata loaded eagerly.
 */
export const deckMetas: DeckMeta[] = [meta01, meta02];

/**
 * Registry of dynamic importers for lazy loading decks.
 */
export const deckRegistry: Record<
  string,
  () => Promise<{ default: Deck }>
> = {
  "01_start_your_qa_career": () => import("./01_start_your_qa_career/deck"),
  "02_requirements_to_test_design": () =>
    import("./02_requirements_to_test_design/deck"),
};

/**
 * Find deck meta by slug
 */
export function getDeckMeta(slug: string): DeckMeta | undefined {
  return deckMetas.find((m) => m.slug === slug);
}

/**
 * Load deck data lazily by slug
 */
export async function loadDeck(slug: string): Promise<Deck | null> {
  const importer = deckRegistry[slug];
  if (!importer) return null;
  const module = await importer();
  return module.default;
}

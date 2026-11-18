import type { Deck } from "./types";

/**
 * Type-safe helper to define a presentation deck.
 * Ensures the deck strictly follows the schema without runtime overhead.
 */
export function defineDeck(deck: Deck): Deck {
  return deck;
}

import { notFound } from "next/navigation";
import { Suspense } from "react";
import { type Metadata } from "next";
import { deckMetas, loadDeck, getDeckMeta } from "~/decks";
import { DeckViewer } from "~/components/viewer/DeckViewer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return deckMetas.map((m) => ({
    slug: m.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getDeckMeta(slug);
  if (!meta) return { title: "Deck Not Found" };

  return {
    title: `${meta.title} — Video 0${meta.videoNo} | Programming Hero SQA`,
    description: meta.description ?? meta.titleBn,
  };
}

export default async function DeckPage({ params }: Props) {
  const { slug } = await params;
  const deck = await loadDeck(slug);

  if (!deck) {
    notFound();
  }

  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-stage-bg text-qa-cyan font-mono">
          Loading Deck...
        </div>
      }
    >
      <DeckViewer deck={deck} />
    </Suspense>
  );
}

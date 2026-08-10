import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Customer Reviews | Ennieskitchen Nigerian Food, Gardena CA" },
      {
        name: "description",
        content:
          "What customers say about Ennieskitchen Nigerian food and catering in Gardena, California — flavor, freshness and stress-free service.",
      },
      { property: "og:title", content: "Customer Reviews | Ennieskitchen" },
      {
        property: "og:description",
        content: "Reviews from families and event hosts across the Los Angeles area.",
      },
      { property: "og:url", content: "/reviews" },
    ],
    links: [{ rel: "canonical", href: "/reviews" }],
  }),
  component: ReviewsPage,
});

const REVIEWS = [
  { name: "Tolu A.", text: "The jollof rice and peppered chicken were incredible. Tasted exactly like home." },
  { name: "Grace O.", text: "Catered my mum's birthday and every single guest asked who cooked. Smooth from start to finish." },
  { name: "Dami K.", text: "Egusi and poundo were rich and fresh. Pickup was quick and everything was still hot." },
  { name: "Chinedu E.", text: "Small chops trays were a hit at our office event. Will be ordering again." },
  { name: "Bisi M.", text: "Efo riro with assorted meat is the best I've had in LA. Portions are generous." },
  { name: "Sarah N.", text: "Ordered moi moi and rice for a family gathering — beautifully seasoned and well packaged." },
];

function ReviewsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">Customer reviews</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        A few words from the families and hosts we've cooked for.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {REVIEWS.map((r) => (
          <figure key={r.name} className="rounded-2xl border border-border bg-card p-6">
            <div className="flex gap-1 text-brand-gold" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="mt-3 text-sm text-muted-foreground">"{r.text}"</blockquote>
            <figcaption className="mt-4 font-semibold text-brand-brown">{r.name}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

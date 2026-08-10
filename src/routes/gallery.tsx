import { createFileRoute } from "@tanstack/react-router";
import egusi from "@/assets/egusi.asset.json";
import efoRiro from "@/assets/efo-riro.asset.json";
import moiMoi from "@/assets/moi-moi.asset.json";
import boiledRice from "@/assets/boiled-rice.asset.json";
import founderChef from "@/assets/founder-chef.asset.json";
import founderStory from "@/assets/founder-story.asset.json";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Food Gallery | Ennieskitchen Nigerian Catering, Gardena CA" },
      {
        name: "description",
        content:
          "Photos of Ennieskitchen Nigerian dishes: egusi soup, efo riro, moi moi, rice and stew, plus the chef behind every plate.",
      },
      { property: "og:title", content: "Food Gallery | Ennieskitchen" },
      {
        property: "og:description",
        content: "A look at freshly cooked Nigerian dishes from Ennieskitchen in Gardena, CA.",
      },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const IMAGES = [
  { src: egusi.url, alt: "Nigerian egusi soup with assorted meat" },
  { src: efoRiro.url, alt: "Efo riro spinach stew with peppered protein" },
  { src: moiMoi.url, alt: "Steamed Nigerian moi moi bean pudding" },
  { src: boiledRice.url, alt: "Boiled rice served with rich Nigerian tomato stew" },
  { src: founderChef.url, alt: "Ennie in chef whites with freshly cooked dishes" },
  { src: founderStory.url, alt: "Ennie, founder of Ennieskitchen, in traditional attire" },
];

function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">Gallery</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Real food from our kitchen — cooked fresh for families and events across Los Angeles.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {IMAGES.map((img) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            loading="lazy"
            className="aspect-square w-full rounded-2xl object-cover shadow-md"
          />
        ))}
      </div>
    </div>
  );
}

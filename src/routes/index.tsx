import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StorySection, FounderSection, MissionSection, WhyChoose } from "@/components/sections";
import { SITE, whatsappLink } from "@/lib/site";
import egusi from "@/assets/egusi.asset.json";
import efoRiro from "@/assets/efo-riro.asset.json";
import moiMoi from "@/assets/moi-moi.asset.json";
import boiledRice from "@/assets/boiled-rice.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "Ennieskitchen | Nigerian Food & Catering in Gardena, California",
      },
      {
        name: "description",
        content:
          "Authentic Nigerian food and catering in Gardena, California. Jollof rice, egusi, efo riro, small chops and party trays — freshly cooked, pickup only, order on WhatsApp.",
      },
      {
        property: "og:title",
        content: "Ennieskitchen | Nigerian Food & Catering in Gardena, CA",
      },
      {
        property: "og:description",
        content:
          "Nigerian home cooking and event catering in the Los Angeles area. Fresh party trays, soups and small chops for pickup.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

const FEATURED = [
  { img: egusi, name: "Egusi Soup", alt: "Bowl of Nigerian egusi soup with assorted meat" },
  { img: efoRiro, name: "Efo Riro", alt: "Nigerian efo riro spinach stew with protein" },
  { img: moiMoi, name: "Moi Moi", alt: "Freshly steamed Nigerian moi moi bean pudding" },
  {
    img: boiledRice,
    name: "Rice & Stew",
    alt: "Plated Nigerian boiled rice served with rich tomato stew",
  },
];

function HomePage() {
  return (
    <div>
      <section className="warm-gradient pattern-lines border-b border-border">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-brand-brown/10 px-4 py-1.5 text-sm font-semibold text-brand-brown">
              <Star className="h-4 w-4 text-brand-gold" /> Est. {SITE.established} ·{" "}
              {SITE.location}
            </p>
            <h1 className="mt-5 font-display text-4xl font-black leading-tight text-brand-brown sm:text-6xl">
              Nigerian food &amp; catering{" "}
              <span className="text-brand-red">{SITE.slogan}</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-brand-brown/80">
              Freshly cooked jollof rice, rich soups, peppered protein and party trays for your
              family dinners and celebrations across Gardena and greater Los Angeles.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/menu">Order now</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href={whatsappLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <p className="mt-5 text-sm font-semibold text-brand-brown/70">
              Pickup only · 24 hours notice on regular orders · 48–72 hours for catering
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {FEATURED.map((dish) => (
              <figure key={dish.name} className="overflow-hidden rounded-2xl bg-card shadow-md">
                <img
                  src={dish.img.url}
                  alt={dish.alt}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
                <figcaption className="px-3 py-2 text-center text-sm font-semibold text-brand-brown">
                  {dish.name}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <StorySection />
      <WhyChoose />
      <FounderSection />
      <MissionSection />
    </div>
  );
}

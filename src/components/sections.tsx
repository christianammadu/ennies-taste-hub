import { Link } from "@tanstack/react-router";
import { Clock, HandPlatter, Leaf, PartyPopper, Soup, Sparkles } from "lucide-react";
import founderStory from "@/assets/founder-story.asset.json";
import founderChef from "@/assets/founder-chef.asset.json";
import { Button } from "@/components/ui/button";

export function StorySection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2">
      <img
        src={founderStory.url}
        alt="Ennie, founder of Ennieskitchen, in traditional Nigerian attire"
        className="w-full rounded-3xl object-cover shadow-lg"
        loading="lazy"
      />
      <div>
        <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">Our story</p>
        <h2 className="mt-3 font-display text-3xl font-black text-brand-brown sm:text-4xl">
          Cooking that tastes like home
        </h2>
        <div className="mt-4 space-y-4 text-muted-foreground">
          <p>
            Ennieskitchen began with a simple love for cooking and the joy of sharing good food
            with family and friends. What started in a home kitchen has grown into a catering
            service built on flavor, care, and consistency.
          </p>
          <p>
            Every dish is prepared fresh, seasoned with intention, and served with the same
            warmth you'd expect from home. From hearty everyday meals to full event catering, we
            take pride in creating food that brings people together.
          </p>
        </div>
      </div>
    </section>
  );
}

export function FounderSection() {
  return (
    <section className="bg-secondary/50 py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Meet the founder
          </p>
          <h2 className="mt-3 font-display text-3xl font-black text-brand-brown sm:text-4xl">
            Ennie — chef, host and heart of the kitchen
          </h2>
          <div className="mt-4 space-y-4 text-muted-foreground">
            <p>
              Ennieskitchen was founded by a passionate home cook whose love for food started
              long before it became a business. Cooking has always been a way to show love,
              celebrate culture, and create memories around the table.
            </p>
            <p>
              With a focus on authentic flavors and quality ingredients, Ennieskitchen was
              created to serve meals that feel personal, comforting, and made with care —
              whether it's a small family dinner or a large celebration.
            </p>
          </div>
        </div>
        <img
          src={founderChef.url}
          alt="Ennie in chef whites presenting freshly cooked Nigerian dishes"
          className="order-1 w-full rounded-3xl object-cover shadow-lg lg:order-2"
          loading="lazy"
        />
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-16 text-center">
      <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">Our mission</p>
      <h2 className="mt-3 font-display text-3xl font-black text-brand-brown sm:text-4xl">
        Great food, made with intention
      </h2>
      <p className="mt-4 text-muted-foreground">
        Our mission is simple: to serve delicious, well-prepared meals that bring comfort and
        joy to every occasion. We are committed to quality ingredients, authentic flavors, and
        exceptional service — making every catering experience smooth, satisfying, and
        memorable.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button asChild size="lg">
          <Link to="/menu">Explore the menu</Link>
        </Button>
        <Button asChild size="lg" variant="outline">
          <Link to="/catering">Plan your event</Link>
        </Button>
      </div>
    </section>
  );
}

const REASONS = [
  {
    icon: Soup,
    title: "Authentic Nigerian flavor",
    body: "Egusi, efo riro, ofada, jollof and more — cooked the way they should be, seasoned with intention.",
  },
  {
    icon: Leaf,
    title: "Fresh, quality ingredients",
    body: "Nothing sits waiting. Every order is cooked fresh after payment is received.",
  },
  {
    icon: PartyPopper,
    title: "Events of any size",
    body: "From a family dinner to a full hall of guests, we scale trays to fit your celebration.",
  },
  {
    icon: Clock,
    title: "Clear lead times",
    body: "24 hours for regular orders, 48–72 hours for catering, so nothing is rushed.",
  },
  {
    icon: HandPlatter,
    title: "Easy pickup in Gardena",
    body: "Pickup only in the Los Angeles area. Arrange a courier if you'd prefer it delivered.",
  },
  {
    icon: Sparkles,
    title: "Stress-free service",
    body: "Order on WhatsApp, pay by Zelle, and collect a spread that's ready to serve.",
  },
];

export function WhyChoose() {
  return (
    <section className="pattern-lines border-y border-border py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center font-display text-3xl font-black text-brand-brown sm:text-4xl">
          Why choose Ennieskitchen
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map(({ icon: Icon, title, body }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-6">
              <Icon className="h-8 w-8 text-brand-orange" />
              <h3 className="mt-4 font-display text-lg font-bold text-brand-brown">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
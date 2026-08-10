import { createFileRoute } from "@tanstack/react-router";
import { StorySection, FounderSection, MissionSection, WhyChoose } from "@/components/sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ennieskitchen | Nigerian Home Cooking in Gardena, CA" },
      {
        name: "description",
        content:
          "Meet Ennie, the founder and chef behind Ennieskitchen — Nigerian home-style cooking, family recipes and catering for Los Angeles celebrations since 2024.",
      },
      { property: "og:title", content: "About Ennieskitchen" },
      {
        property: "og:description",
        content:
          "Our story, our mission and the chef behind every freshly prepared Nigerian meal.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section className="pattern-lines border-b border-border py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-4xl font-black text-brand-brown sm:text-5xl">
            About Ennieskitchen
          </h1>
          <p className="mt-4 text-muted-foreground">
            At Ennieskitchen, we believe every meal should bring people together. Inspired by
            family traditions and a genuine love for cooking, we prepare flavorful Nigerian
            dishes for family meals, celebrations, and special events. Whether you're feeding a
            few loved ones or a room full of guests, we're here to make every occasion
            delicious, memorable, and stress-free.
          </p>
        </div>
      </section>
      <StorySection />
      <FounderSection />
      <MissionSection />
      <WhyChoose />
    </div>
  );
}

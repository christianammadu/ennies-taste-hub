import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { MenuItemCard } from "@/components/MenuItemCard";
import { Input } from "@/components/ui/input";
import { MENU, MENU_CATEGORIES } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Party Trays | Ennieskitchen Nigerian Food, Gardena CA" },
      {
        name: "description",
        content:
          "Browse the Ennieskitchen menu: jollof rice, egusi, efo riro, ofada sauce, pepper soups, small chops and party trays in quarter, half and large sizes.",
      },
      { property: "og:title", content: "Menu & Party Trays | Ennieskitchen" },
      {
        property: "og:description",
        content:
          "Nigerian rice dishes, soups, stews, peppered protein, small chops and drinks — order trays for pickup in Gardena, California.",
      },
      { property: "og:url", content: "/menu" },
    ],
    links: [{ rel: "canonical", href: "/menu" }],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const items = useMemo(() => {
    const q = query.trim().toLowerCase();
    return MENU.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        (q === "" ||
          item.name.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)),
    );
  }, [category, query]);

  return (
    <div>
      <section className="pattern-lines border-b border-border py-14">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold uppercase tracking-[0.2em] text-brand-orange">
            Freshly prepared
          </p>
          <h1 className="mt-3 font-display text-4xl font-black text-brand-brown sm:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Choose your tray size, set your quantity and add it to your cart. All orders are
            pickup only in Gardena, California and need a minimum of 24 hours notice.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10">
        <div className="relative mx-auto max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search the menu…"
            aria-label="Search the menu"
            className="pl-9"
          />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {["All", ...MENU_CATEGORIES].map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCategory(c)}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                category === c
                  ? "border-brand-brown bg-brand-brown text-brand-cream"
                  : "border-border bg-card text-brand-brown hover:border-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {items.length === 0 ? (
          <p className="py-16 text-center text-muted-foreground">
            No dishes match that search. Try another word or pick a category.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <MenuItemCard key={`${item.id}-${item.sizes[0]!.label}`} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

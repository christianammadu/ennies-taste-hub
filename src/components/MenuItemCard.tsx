import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/format";
import type { MenuItem } from "@/lib/menu-data";

export function MenuItemCard({ item }: { item: MenuItem }) {
  const minQty = item.minQty ?? 1;
  const [sizeIndex, setSizeIndex] = useState(0);
  const [qty, setQty] = useState(minQty);
  const [error, setError] = useState<string | null>(null);
  const { addLine, setOpen } = useCart();

  const size = item.sizes[sizeIndex]!;
  const unitCents = Math.round(size.price * 100);

  function handleAdd() {
    if (qty < minQty) {
      setError(`Minimum order for ${item.name} is ${minQty}.`);
      return;
    }
    setError(null);
    addLine({
      itemId: item.id,
      name: item.name,
      size: size.label,
      unitCents,
      quantity: qty,
      minQty,
    });
    toast.success(`${item.name} (${size.label}) added to cart`, {
      action: { label: "View cart", onClick: () => setOpen(true) },
    });
  }

  return (
    <article className="card-lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      {item.image ? (
        <img
          src={item.image.url}
          alt={item.image.alt}
          loading="lazy"
          className="h-52 w-full object-cover"
        />
      ) : (
        <div className="pattern-lines grid h-24 place-items-center border-b border-border">
          <span className="font-display text-lg font-bold text-brand-brown/70">
            {item.category}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 font-display text-xl font-bold text-brand-brown">
            {item.name}
          </h3>
          <span className="shrink-0 rounded-full bg-brand-gold/25 px-3 py-1 text-sm font-bold text-brand-brown">
            {money(unitCents)}
          </span>
        </div>

        {item.description && (
          <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
        )}
        {minQty > 1 && (
          <p className="mt-2 text-sm font-semibold text-brand-red">
            Minimum order: {minQty}
          </p>
        )}
        {item.addOns && (
          <p className="mt-2 text-xs text-muted-foreground">
            Add-ons available on request: {item.addOns.join(", ")}
          </p>
        )}

        {item.sizes.length > 1 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {item.sizes.map((s, i) => (
              <button
                key={s.label}
                type="button"
                onClick={() => setSizeIndex(i)}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition-colors ${
                  i === sizeIndex
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border text-brand-brown hover:border-primary"
                }`}
              >
                {s.label} · ${s.price}
              </button>
            ))}
          </div>
        )}
        {item.sizes.length === 1 && (
          <p className="mt-4 text-sm font-medium text-brand-brown">{size.label}</p>
        )}

        <div className="mt-auto pt-5">
          <div className="flex items-center gap-3">
            <div className="flex items-center rounded-full border border-border">
              <button
                type="button"
                aria-label={`Decrease quantity of ${item.name}`}
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="grid h-9 w-9 place-items-center text-brand-brown"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                aria-label={`Quantity of ${item.name}`}
                value={qty}
                inputMode="numeric"
                onChange={(e) => {
                  const next = Number(e.target.value.replace(/\D/g, ""));
                  setQty(Number.isFinite(next) && next > 0 ? next : 1);
                }}
                className="w-12 bg-transparent text-center text-sm font-semibold outline-none"
              />
              <button
                type="button"
                aria-label={`Increase quantity of ${item.name}`}
                onClick={() => setQty((q) => q + 1)}
                className="grid h-9 w-9 place-items-center text-brand-brown"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <Button onClick={handleAdd} className="flex-1">
              Add to Cart
            </Button>
          </div>
          {error && <p className="mt-2 text-xs font-semibold text-destructive">{error}</p>}
        </div>
      </div>
    </article>
  );
}
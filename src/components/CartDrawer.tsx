import { Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2 } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useCart } from "@/lib/cart";
import { money } from "@/lib/format";

export function CartDrawer() {
  const {
    lines,
    isOpen,
    setOpen,
    setQuantity,
    removeLine,
    subtotalCents,
    taxCents,
    totalCents,
  } = useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent className="flex w-full flex-col gap-0 sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="font-display text-2xl text-brand-brown">Your Cart</SheetTitle>
          <SheetDescription>Pickup only. Tax is calculated at 10.25%.</SheetDescription>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-4">
          {lines.length === 0 ? (
            <p className="py-10 text-center text-sm text-muted-foreground">
              Your cart is empty. Browse the menu to add trays.
            </p>
          ) : (
            <ul className="divide-y divide-border">
              {lines.map((line) => (
                <li key={line.key} className="py-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-brand-brown">{line.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {line.size} · {money(line.unitCents)} each
                      </p>
                      {line.minQty > 1 && (
                        <p className="text-xs text-brand-red">
                          Minimum {line.minQty} pieces
                        </p>
                      )}
                    </div>
                    <p className="shrink-0 font-semibold">
                      {money(line.unitCents * line.quantity)}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${line.name}`}
                        onClick={() => setQuantity(line.key, line.quantity - 1)}
                        className="grid h-8 w-8 place-items-center text-brand-brown"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${line.name}`}
                        onClick={() => setQuantity(line.key, line.quantity + 1)}
                        className="grid h-8 w-8 place-items-center text-brand-brown"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeLine(line.key)}
                      className="flex items-center gap-1 text-xs text-brand-red hover:underline"
                    >
                      <Trash2 className="h-4 w-4" /> Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="border-t border-border bg-secondary/40 p-4">
          <dl className="space-y-1 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="font-semibold">{money(subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Tax (10.25%)</dt>
              <dd className="font-semibold">{money(taxCents)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-2 text-base">
              <dt className="font-bold text-brand-brown">Total</dt>
              <dd className="font-bold text-brand-brown">{money(totalCents)}</dd>
            </div>
          </dl>
          <div className="mt-4 flex flex-col gap-2">
            <Button asChild disabled={lines.length === 0} className="w-full">
              <Link to="/order" onClick={() => setOpen(false)}>
                Checkout
              </Link>
            </Button>
            <Button variant="outline" onClick={() => setOpen(false)} className="w-full">
              Continue Shopping
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, Trash2, CheckCircle2, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useCart, type CartLine } from "@/lib/cart";
import { SITE, whatsappLink } from "@/lib/site";
import {
  combineDateTime,
  formatTime12h,
  hoursFromNow,
  maskDateInput,
  money,
} from "@/lib/format";
import tipJar from "@/assets/tip-jar-qr.asset.json";
import mealQr from "@/assets/meal-payment-qr.asset.json";

export const Route = createFileRoute("/order")({
  head: () => ({
    meta: [
      { title: "Order Online | Ennieskitchen Nigerian Food Pickup, Gardena CA" },
      {
        name: "description",
        content:
          "Review your Ennieskitchen cart, add pickup details and send your Nigerian food order straight to us on WhatsApp. Pickup only, 24 hours notice, tax 10.25%.",
      },
      { property: "og:title", content: "Order Online | Ennieskitchen" },
      {
        property: "og:description",
        content:
          "Checkout for Nigerian party trays, soups and small chops. Pickup in Gardena, California.",
      },
      { property: "og:url", content: "/order" },
    ],
    links: [{ rel: "canonical", href: "/order" }],
  }),
  component: OrderPage,
});

type Details = {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  notes: string;
  dietary: string;
};

const EMPTY: Details = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  notes: "",
  dietary: "",
};

function buildMessage(
  details: Details,
  lines: CartLine[],
  subtotalCents: number,
  taxCents: number,
  totalCents: number,
) {
  const items = lines
    .map(
      (l) =>
        `• ${l.name} — ${l.size} × ${l.quantity} @ ${money(l.unitCents)} = ${money(
          l.unitCents * l.quantity,
        )}`,
    )
    .join("\n");

  return [
    "ENNIESKITCHEN ORDER",
    "",
    `Customer Name: ${details.name}`,
    `Phone: ${details.phone}`,
    `Email: ${details.email}`,
    "",
    `Pickup Date (DD/MM/YYYY): ${details.date}`,
    `Pickup Time: ${formatTime12h(details.time)}`,
    "",
    "ORDER ITEMS:",
    items,
    "",
    `Subtotal: ${money(subtotalCents)}`,
    `Tax (10.25%): ${money(taxCents)}`,
    `TOTAL: ${money(totalCents)}`,
    "",
    `Order Notes: ${details.notes || "None"}`,
    `Dietary/Allergy Notes: ${details.dietary || "None"}`,
  ].join("\n");
}

function OrderPage() {
  const {
    lines,
    setQuantity,
    removeLine,
    subtotalCents,
    taxCents,
    totalCents,
    clear,
  } = useCart();
  const [details, setDetails] = useState<Details>(EMPTY);
  const [pickupAck, setPickupAck] = useState(false);
  const [cancelAck, setCancelAck] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [confirmed, setConfirmed] = useState<{
    details: Details;
    lines: CartLine[];
    subtotalCents: number;
    taxCents: number;
    totalCents: number;
  } | null>(null);

  function set<K extends keyof Details>(key: K, value: Details[K]) {
    setDetails((d) => ({ ...d, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: string[] = [];
    if (lines.length === 0) next.push("Your cart is empty.");
    if (!details.name.trim()) next.push("Please enter your full name.");
    if (!/^[\d+()\-\s]{7,}$/.test(details.phone.trim()))
      next.push("Please enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email.trim()))
      next.push("Please enter a valid email address.");

    const pickup = combineDateTime(details.date, details.time);
    if (!pickup) {
      next.push("Enter a valid pickup date as DD/MM/YYYY and a pickup time.");
    } else if (hoursFromNow(pickup) < 24) {
      next.push(
        "Pickup must be at least 24 hours from now. Please choose a later date or time.",
      );
    }

    for (const line of lines) {
      if (line.quantity < line.minQty) {
        next.push(`${line.name} has a minimum order of ${line.minQty}.`);
      }
    }
    if (!pickupAck) next.push("Please confirm the pickup-only policy.");
    if (!cancelAck) next.push("Please acknowledge the cancellation policy.");

    setErrors(next);
    if (next.length > 0) return;

    setConfirmed({ details, lines, subtotalCents, taxCents, totalCents });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (confirmed) {
    const message = buildMessage(
      confirmed.details,
      confirmed.lines,
      confirmed.subtotalCents,
      confirmed.taxCents,
      confirmed.totalCents,
    );
    return (
      <div className="mx-auto max-w-3xl px-4 py-14">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
          <CheckCircle2 className="h-12 w-12 text-brand-orange" />
          <h1 className="mt-4 font-display text-3xl font-black text-brand-brown">
            Order summary ready
          </h1>
          <p className="mt-2 text-muted-foreground">
            Your order is <strong>not confirmed yet</strong>. Send it to us on WhatsApp and
            complete payment — all meals are prepared fresh after payment is received.
          </p>

          <dl className="mt-6 space-y-1 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Name</dt>
              <dd className="font-semibold">{confirmed.details.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Phone</dt>
              <dd className="font-semibold">{confirmed.details.phone}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Email</dt>
              <dd className="break-all font-semibold">{confirmed.details.email}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Pickup date (DD/MM/YYYY)</dt>
              <dd className="font-semibold">{confirmed.details.date}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted-foreground">Pickup time</dt>
              <dd className="font-semibold">{formatTime12h(confirmed.details.time)}</dd>
            </div>
          </dl>

          <ul className="mt-6 divide-y divide-border border-y border-border">
            {confirmed.lines.map((l) => (
              <li key={l.key} className="flex justify-between gap-3 py-3 text-sm">
                <span className="min-w-0">
                  <span className="font-semibold text-brand-brown">{l.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {l.size} × {l.quantity} @ {money(l.unitCents)}
                  </span>
                </span>
                <span className="shrink-0 font-semibold">
                  {money(l.unitCents * l.quantity)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-4 space-y-1 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="font-semibold">{money(confirmed.subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Tax (10.25%)</dt>
              <dd className="font-semibold">{money(confirmed.taxCents)}</dd>
            </div>
            <div className="flex justify-between text-lg">
              <dt className="font-bold text-brand-brown">Total</dt>
              <dd className="font-bold text-brand-brown">{money(confirmed.totalCents)}</dd>
            </div>
          </dl>

          <PaymentPanel />

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="flex-1">
              <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Send order on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="flex-1"
              onClick={() => {
                clear();
                setConfirmed(null);
                setDetails(EMPTY);
                setPickupAck(false);
                setCancelAck(false);
              }}
            >
              Start a new order
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">Order Online</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">
        Pickup only in Gardena, California. Tax is calculated automatically at 10.25%.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
        <form onSubmit={submit} className="space-y-6">
          <section className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-xl font-bold text-brand-brown">Your items</h2>
            {lines.length === 0 ? (
              <p className="mt-4 text-sm text-muted-foreground">
                Your cart is empty.{" "}
                <Link to="/menu" className="font-semibold text-primary underline">
                  Browse the menu
                </Link>
                .
              </p>
            ) : (
              <ul className="mt-4 divide-y divide-border">
                {lines.map((l) => (
                  <li key={l.key} className="flex flex-wrap items-center gap-3 py-4">
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-semibold text-brand-brown">{l.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {l.size} · {money(l.unitCents)} each
                        {l.minQty > 1 ? ` · min ${l.minQty}` : ""}
                      </p>
                    </div>
                    <div className="flex items-center rounded-full border border-border">
                      <button
                        type="button"
                        aria-label={`Decrease quantity of ${l.name}`}
                        onClick={() => setQuantity(l.key, l.quantity - 1)}
                        className="grid h-8 w-8 place-items-center"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-sm font-semibold">
                        {l.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label={`Increase quantity of ${l.name}`}
                        onClick={() => setQuantity(l.key, l.quantity + 1)}
                        className="grid h-8 w-8 place-items-center"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="w-20 text-right font-semibold">
                      {money(l.unitCents * l.quantity)}
                    </span>
                    <button
                      type="button"
                      aria-label={`Remove ${l.name}`}
                      onClick={() => removeLine(l.key)}
                      className="text-brand-red"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="rounded-2xl border border-border bg-card p-5">
            <h2 className="font-display text-xl font-bold text-brand-brown">Your details</h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div>
                <Label htmlFor="name">Full name</Label>
                <Input
                  id="name"
                  value={details.name}
                  maxLength={100}
                  onChange={(e) => set("name", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  value={details.phone}
                  maxLength={30}
                  onChange={(e) => set("phone", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={details.email}
                  maxLength={255}
                  onChange={(e) => set("email", e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="date">Pickup date (DD/MM/YYYY)</Label>
                <Input
                  id="date"
                  inputMode="numeric"
                  placeholder="DD/MM/YYYY"
                  value={details.date}
                  onChange={(e) => set("date", maskDateInput(e.target.value))}
                />
              </div>
              <div>
                <Label htmlFor="time">Pickup time</Label>
                <Input
                  id="time"
                  type="time"
                  value={details.time}
                  onChange={(e) => set("time", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="notes">Order notes</Label>
                <Textarea
                  id="notes"
                  value={details.notes}
                  maxLength={1000}
                  onChange={(e) => set("notes", e.target.value)}
                />
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="dietary">Dietary / allergy notes</Label>
                <Textarea
                  id="dietary"
                  value={details.dietary}
                  maxLength={1000}
                  onChange={(e) => set("dietary", e.target.value)}
                />
              </div>
            </div>

            <div className="mt-6 space-y-3 rounded-xl bg-secondary/60 p-4 text-sm">
              <p className="font-semibold text-brand-brown">
                To maintain the quality and freshness of every meal, all orders at
                Ennieskitchen are prepared fresh after payment has been received.
              </p>
              <p className="text-muted-foreground">
                Regular orders: minimum 24 hours required for order preparation. Catering
                orders: minimum notice of 48–72 hours required.
              </p>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={pickupAck}
                  onCheckedChange={(v) => setPickupAck(v === true)}
                  aria-label="Confirm pickup only policy"
                />
                <span>
                  I understand no delivery is currently offered. Pickup only. I may arrange a
                  third-party courier such as Uber or Lyft.
                </span>
              </label>
              <label className="flex items-start gap-3">
                <Checkbox
                  checked={cancelAck}
                  onCheckedChange={(v) => setCancelAck(v === true)}
                  aria-label="Acknowledge cancellation policy"
                />
                <span>
                  I acknowledge the cancellation policy: because all food is freshly prepared,
                  cancellations must be made at least 48 hours before the scheduled pickup or
                  event.{" "}
                  <Link to="/refunds" className="font-semibold text-primary underline">
                    Read the full policy
                  </Link>
                  .
                </span>
              </label>
            </div>

            {errors.length > 0 && (
              <ul className="mt-4 space-y-1 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
                {errors.map((err) => (
                  <li key={err}>{err}</li>
                ))}
              </ul>
            )}

            <Button type="submit" size="lg" className="mt-6 w-full">
              Review &amp; submit order
            </Button>
          </section>
        </form>

        <aside className="h-fit rounded-2xl border border-border bg-card p-5 lg:sticky lg:top-24">
          <h2 className="font-display text-xl font-bold text-brand-brown">Order total</h2>
          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between">
              <dt>Subtotal</dt>
              <dd className="font-semibold">{money(subtotalCents)}</dd>
            </div>
            <div className="flex justify-between">
              <dt>Tax (10.25%)</dt>
              <dd className="font-semibold">{money(taxCents)}</dd>
            </div>
            <div className="flex justify-between border-t border-border pt-2 text-lg">
              <dt className="font-bold text-brand-brown">Total</dt>
              <dd className="font-bold text-brand-brown">{money(totalCents)}</dd>
            </div>
          </dl>
          <PaymentPanel />
        </aside>
      </div>
    </div>
  );
}

function PaymentPanel() {
  return (
    <div className="mt-6 rounded-xl border border-brand-gold/50 bg-brand-gold/10 p-4 text-sm">
      <h3 className="font-display text-lg font-bold text-brand-brown">Payment</h3>
      <p className="mt-1 text-muted-foreground">
        We accept Zelle. Card payments are not processed on this website.
      </p>
      <p className="mt-2">
        <strong>Zelle phone:</strong> {SITE.zelle.phone}
        <br />
        <strong>Zelle name:</strong> {SITE.zelle.name}
      </p>
      <div className="mt-4 grid grid-cols-2 gap-3">
        <figure>
          <img
            src={mealQr.url}
            alt="PayPal QR code for Ennieskitchen meal payments"
            className="w-full rounded-lg bg-white p-2"
            loading="lazy"
          />
          <figcaption className="mt-1 text-center text-xs text-muted-foreground">
            Meal payment
          </figcaption>
        </figure>
        <figure>
          <img
            src={tipJar.url}
            alt="PayPal QR code for the Ennieskitchen tip jar"
            className="w-full rounded-lg bg-white p-2"
            loading="lazy"
          />
          <figcaption className="mt-1 text-center text-xs text-muted-foreground">
            Tip jar
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

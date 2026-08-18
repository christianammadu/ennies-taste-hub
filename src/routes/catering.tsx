import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { combineDateTime, hoursFromNow, maskDateInput } from "@/lib/format";
import { mailtoLink } from "@/lib/site";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Nigerian Catering in Gardena & Los Angeles | Ennieskitchen" },
      {
        name: "description",
        content:
          "Nigerian catering for weddings, birthdays, naming ceremonies and corporate events in Gardena and Los Angeles. Party trays, small chops and full spreads, 48–72 hours notice.",
      },
      { property: "og:title", content: "Nigerian Catering in Gardena & Los Angeles" },
      {
        property: "og:description",
        content:
          "Request a catering quote from Ennieskitchen for your next celebration in the LA area.",
      },
      { property: "og:url", content: "/catering" },
    ],
    links: [{ rel: "canonical", href: "/catering" }],
  }),
  component: CateringPage,
});

function CateringPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    guests: "",
    date: "",
    time: "",
    dishes: "",
    notes: "",
  });
  const [errors, setErrors] = useState<string[]>([]);

  function set(key: keyof typeof form, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const next: string[] = [];
    if (!form.name.trim()) next.push("Please enter your full name.");
    if (!/^[\d+()\-\s]{7,}$/.test(form.phone.trim())) next.push("Enter a valid phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      next.push("Enter a valid email address.");
    if (!form.eventType.trim()) next.push("Tell us the type of event.");
    if (!/^\d{1,4}$/.test(form.guests.trim())) next.push("Enter the number of guests.");
    const when = combineDateTime(form.date, form.time || "12:00");
    if (!when) next.push("Enter a valid event date as DD/MM/YYYY.");
    else if (hoursFromNow(when) < 48)
      next.push("Catering requires a minimum of 48–72 hours notice.");
    setErrors(next);
    if (next.length > 0) return;

    const message = [
      "ENNIESKITCHEN CATERING INQUIRY",
      "",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Email: ${form.email}`,
      `Event type: ${form.eventType}`,
      `Guests: ${form.guests}`,
      `Event date (DD/MM/YYYY): ${form.date}`,
      `Event time: ${form.time || "To be confirmed"}`,
      "",
      `Dishes of interest: ${form.dishes || "Open to recommendations"}`,
      `Notes: ${form.notes || "None"}`,
    ].join("\n");
    window.location.href = mailtoLink("Ennieskitchen catering inquiry", message);
  }

  return (
    <div>
      <section className="pattern-lines border-b border-border py-14 text-center">
        <div className="mx-auto max-w-3xl px-4">
          <h1 className="font-display text-4xl font-black text-brand-brown sm:text-5xl">
            Catering for your celebration
          </h1>
          <p className="mt-4 text-muted-foreground">
            Weddings, birthdays, naming ceremonies, church events and corporate gatherings
            across Gardena and the Los Angeles area. Catering orders need a minimum of 48–72
            hours notice, and all food is prepared fresh once payment is received.
          </p>
        </div>
      </section>

      <form onSubmit={submit} className="mx-auto max-w-3xl px-4 py-14">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="c-name">Full name</Label>
            <Input id="c-name" maxLength={100} value={form.name} onChange={(e) => set("name", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-phone">Phone</Label>
            <Input id="c-phone" maxLength={30} value={form.phone} onChange={(e) => set("phone", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-email">Email</Label>
            <Input id="c-email" type="email" maxLength={255} value={form.email} onChange={(e) => set("email", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-type">Event type</Label>
            <Input id="c-type" maxLength={100} value={form.eventType} onChange={(e) => set("eventType", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-guests">Number of guests</Label>
            <Input id="c-guests" inputMode="numeric" value={form.guests} onChange={(e) => set("guests", e.target.value)} />
          </div>
          <div>
            <Label htmlFor="c-date">Event date (DD/MM/YYYY)</Label>
            <Input id="c-date" placeholder="DD/MM/YYYY" value={form.date} onChange={(e) => set("date", maskDateInput(e.target.value))} />
          </div>
          <div>
            <Label htmlFor="c-time">Event time</Label>
            <Input id="c-time" type="time" value={form.time} onChange={(e) => set("time", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="c-dishes">Dishes you're interested in</Label>
            <Textarea id="c-dishes" maxLength={1000} value={form.dishes} onChange={(e) => set("dishes", e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <Label htmlFor="c-notes">Extra notes, dietary needs or allergies</Label>
            <Textarea id="c-notes" maxLength={1000} value={form.notes} onChange={(e) => set("notes", e.target.value)} />
          </div>
        </div>

        {errors.length > 0 && (
          <ul className="mt-5 space-y-1 rounded-xl border border-destructive/40 bg-destructive/10 p-4 text-sm text-destructive">
            {errors.map((err) => (
              <li key={err}>{err}</li>
            ))}
          </ul>
        )}

        <Button type="submit" size="lg" className="mt-6 w-full">
          <Mail className="mr-2 h-5 w-5" /> Send catering inquiry by email
        </Button>
      </form>
    </div>
  );
}

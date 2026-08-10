import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Ennieskitchen | Nigerian Food Pickup in Gardena, CA" },
      {
        name: "description",
        content:
          "Call, email or WhatsApp Ennieskitchen for Nigerian food and catering in Gardena, California. Pickup only, open 24 hours for orders.",
      },
      { property: "og:title", content: "Contact Ennieskitchen" },
      {
        property: "og:description",
        content: "Reach Ennieskitchen on WhatsApp at +1 (323) 578-6993 for orders and catering.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">Contact us</h1>
      <p className="mt-2 text-muted-foreground">
        The fastest way to reach us is WhatsApp. Pickup only — no delivery at this time.
      </p>
      <ul className="mt-8 space-y-4 text-sm">
        <li className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <a href={SITE.phoneHref} className="font-semibold text-brand-brown">
            {SITE.whatsappDisplay}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <a href={`mailto:${SITE.email}`} className="break-all font-semibold text-brand-brown">
            {SITE.email}
          </a>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <span className="font-semibold text-brand-brown">{SITE.location}</span>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
          <span className="font-semibold text-brand-brown">Open {SITE.hours}</span>
        </li>
      </ul>
      <Button asChild size="lg" className="mt-8">
        <a href={whatsappLink()} target="_blank" rel="noreferrer">
          <MessageCircle className="mr-2 h-5 w-5" /> Message us on WhatsApp
        </a>
      </Button>
    </div>
  );
}

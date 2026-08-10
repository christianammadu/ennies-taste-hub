import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/refunds")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy | Ennieskitchen" },
      { name: "description", content: "Cancellation and refund terms for Ennieskitchen orders and catering in Gardena, California." },
      { property: "og:title", content: "Refund & Cancellation Policy | Ennieskitchen" },
      { property: "og:description", content: "How cancellations and refunds work for freshly prepared orders." },
      { property: "og:url", content: "/refunds" },
    ],
    links: [{ rel: "canonical", href: "/refunds" }],
  }),
  component: () => (
    <LegalPage
      title="Refund & Cancellation Policy"
      sections={[
        ["Fresh preparation", "To maintain quality and freshness, all orders are prepared fresh after payment has been received."],
        ["Cancellations", "Cancellations must be made at least 48 hours before the scheduled pickup or event date. Cancellations within 48 hours cannot be refunded because ingredients have already been purchased and preparation has begun."],
        ["Refunds", "Approved refunds are returned using the original payment method within 5–7 business days."],
        ["Issues with your order", "Contact us on WhatsApp at +1 (323) 578-6993 within 24 hours of pickup and we will make it right where possible."],
      ]}
    />
  ),
});

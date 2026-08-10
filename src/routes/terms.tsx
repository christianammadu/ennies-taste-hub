import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | Ennieskitchen" },
      { name: "description", content: "Ordering terms for Ennieskitchen Nigerian food and catering in Gardena, California." },
      { property: "og:title", content: "Terms of Service | Ennieskitchen" },
      { property: "og:description", content: "Order, payment and pickup terms." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: () => (
    <LegalPage
      title="Terms of Service"
      sections={[
        ["Orders", "An order is only confirmed once it has been sent to us and payment has been received. Regular orders require 24 hours notice; catering requires 48–72 hours."],
        ["Pickup only", "All orders are collected in Gardena, California. We do not deliver. Any courier you arrange is at your own risk and cost."],
        ["Pricing and tax", "Prices are shown in US dollars and sales tax of 10.25% is added at checkout. Prices may change without notice."],
        ["Dates", "All dates on this website and in order messages are formatted DD/MM/YYYY."],
        ["Food safety", "Collected food should be refrigerated promptly. We are not responsible for food held at unsafe temperatures after pickup."],
      ]}
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";

const FAQS = [
  ["Do you deliver?", "No. Ennieskitchen is pickup only in Gardena, California. You may arrange a third-party courier such as Uber or Lyft at your own cost."],
  ["How much notice do you need?", "Regular orders need a minimum of 24 hours. Catering orders need a minimum of 48–72 hours."],
  ["How is tax calculated?", "Sales tax of 10.25% is added automatically to your subtotal at checkout."],
  ["How do I pay?", "We accept Zelle (3235786993, Ennieskitchenllc) and PayPal via the QR codes shown at checkout. Food is prepared fresh after payment is received."],
  ["Is there a minimum on swallow?", "Yes. Poundo, eba and amala are sold in a minimum of 12 pieces."],
  ["Can you handle allergies?", "Tell us in the dietary notes at checkout and we will advise what we can accommodate."],
];

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Ennieskitchen Nigerian Food & Catering, Gardena CA" },
      { name: "description", content: "Answers about pickup, lead times, tax, payment and minimum orders at Ennieskitchen in Gardena, California." },
      { property: "og:title", content: "FAQ | Ennieskitchen" },
      { property: "og:description", content: "Pickup, lead times, payment and ordering questions answered." },
      { property: "og:url", content: "/faq" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: FAQS.map(([q, a]) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }),
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <h1 className="font-display text-4xl font-black text-brand-brown">Frequently asked questions</h1>
      <dl className="mt-8 divide-y divide-border border-y border-border">
        {FAQS.map(([q, a]) => (
          <div key={q} className="py-5">
            <dt className="font-display text-lg font-bold text-brand-brown">{q}</dt>
            <dd className="mt-2 text-sm text-muted-foreground">{a}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

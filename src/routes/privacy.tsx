import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Ennieskitchen" },
      { name: "description", content: "How Ennieskitchen collects and uses the information you share when ordering Nigerian food and catering." },
      { property: "og:title", content: "Privacy Policy | Ennieskitchen" },
      { property: "og:description", content: "Our privacy practices for orders and catering inquiries." },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: () => (
    <LegalPage
      title="Privacy Policy"
      sections={[
        ["Information we collect", "We collect the name, phone number, email address, pickup date and order details you provide when placing an order or catering inquiry."],
        ["How we use it", "Your information is used only to prepare, confirm and hand over your order, and to contact you about it. We do not sell your information."],
        ["Messaging", "Orders are sent to us through WhatsApp using your device. Messages are handled under WhatsApp's own privacy terms."],
        ["Storage", "Your cart is stored locally in your browser so you don't lose it. Clearing your browser data removes it."],
        ["Contact", "For any privacy request, email Ennieskitchen259@gmail.com."],
      ]}
    />
  ),
});

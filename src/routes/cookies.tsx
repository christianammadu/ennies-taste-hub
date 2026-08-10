import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/LegalPage";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | Ennieskitchen" },
      { name: "description", content: "How Ennieskitchen uses browser storage to keep your cart between visits." },
      { property: "og:title", content: "Cookie Policy | Ennieskitchen" },
      { property: "og:description", content: "Our use of cookies and local browser storage." },
      { property: "og:url", content: "/cookies" },
    ],
    links: [{ rel: "canonical", href: "/cookies" }],
  }),
  component: () => (
    <LegalPage
      title="Cookie Policy"
      sections={[
        ["What we store", "We store your shopping cart in your browser's local storage so your selections are still there when you return."],
        ["Tracking", "We do not use advertising or third-party tracking cookies on this website."],
        ["Your control", "Clearing your browser data removes the stored cart at any time."],
      ]}
    />
  ),
});

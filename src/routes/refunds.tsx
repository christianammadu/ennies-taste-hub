import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/refunds")({
  component: Page,
});

function Page() {
  return null;
}

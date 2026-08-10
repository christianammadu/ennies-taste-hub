import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/order")({
  component: Page,
});

function Page() {
  return null;
}

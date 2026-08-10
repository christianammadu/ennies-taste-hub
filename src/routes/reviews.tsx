import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/reviews")({
  component: Page,
});

function Page() {
  return null;
}

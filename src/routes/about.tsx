import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: Page,
});

function Page() {
  return null;
}

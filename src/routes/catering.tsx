import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/catering")({
  component: Page,
});

function Page() {
  return null;
}

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center py-12">
      <h1 className="text-2xl font-bold">Blog</h1>
      <p>Nothing to see here yet!</p>
    </div>
  );
}

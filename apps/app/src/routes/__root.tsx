import { createRootRoute, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-[100dvh] bg-zinc-950 text-zinc-100 font-body antialiased">
      <Outlet />
    </div>
  );
}

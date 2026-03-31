import ReactDOM from "react-dom/client";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { AuthProvider } from "@lumina/ui";
import { routeTree } from "./routeTree.gen";
import "./styles/app.css";

const router = createRouter({
  routeTree,
  basepath: "/app",
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

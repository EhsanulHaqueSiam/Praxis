import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [
    TanStackRouterVite({
      target: "react",
      autoCodeSplitting: false,
      routesDirectory: "src/routes",
      generatedRouteTree: "src/routeTree.gen.ts",
    }),
    tanstackStart({
      target: "react",
    }),
  ],
  resolve: {
    alias: {
      "~": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});

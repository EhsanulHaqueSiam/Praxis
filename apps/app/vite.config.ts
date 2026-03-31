import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { fileURLToPath } from "url";

function normalizeBasepath(value?: string) {
  if (!value || value === "/") return "/";
  const cleaned = value.replace(/^\/+|\/+$/g, "");
  return cleaned ? `/${cleaned}/` : "/";
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, new URL(".", import.meta.url).pathname, "");
  const base = normalizeBasepath(env.VITE_APP_BASEPATH || "/app");

  return {
    base,
    server: {
      port: 3001,
    },
    plugins: [
      TanStackRouterVite({
        routesDirectory: "src/routes",
        generatedRouteTree: "src/routeTree.gen.ts",
        autoCodeSplitting: true,
      }),
      react(),
    ],
    resolve: {
      alias: {
        "~": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  };
});

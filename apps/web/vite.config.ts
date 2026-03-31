import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import { defineConfig, loadEnv } from "vite";

function normalizeAppPathPrefix(target?: string) {
  if (!target || !target.startsWith("/")) return null;
  if (target === "/") return null;
  return `/${target.replace(/^\/+|\/+$/g, "")}`;
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, new URL(".", import.meta.url).pathname, "");
  const appPathPrefix = normalizeAppPathPrefix(env.VITE_APP_TARGET || "/app");

  return {
    server: {
      port: 3000,
      proxy: appPathPrefix
        ? {
            [appPathPrefix]: {
              target: "http://localhost:3001",
              changeOrigin: true,
            },
          }
        : undefined,
    },
    ssr: {
      // Bundle all dependencies into the SSR server output so the Netlify
      // serverless function is fully self-contained (no node_modules needed).
      noExternal: true,
    },
    plugins: [
      TanStackRouterVite({
        target: "react",
        autoCodeSplitting: false,
        routesDirectory: "src/routes",
        generatedRouteTree: "src/routeTree.gen.ts",
      }),
      tanstackStart(),
    ],
    resolve: {
      alias: {
        "~": new URL("./src", import.meta.url).pathname,
      },
    },
  };
});

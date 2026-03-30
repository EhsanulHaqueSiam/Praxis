// app.config.ts
import { defineConfig } from "@tanstack/react-start/config";
import tsrPlugin from "@tanstack/router-plugin/vite";
var app_config_default = defineConfig({
  tsr: {
    appDirectory: "src"
  },
  vite: {
    plugins: () => [
      tsrPlugin({
        routesDirectory: "src/routes",
        generatedRouteTree: "src/routeTree.gen.ts",
        autoCodeSplitting: true
      })
    ]
  }
});
export {
  app_config_default as default
};

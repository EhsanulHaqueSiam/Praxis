#!/usr/bin/env bash
set -euo pipefail

echo "==> Building dashboard app (SPA)..."
pnpm --filter @lumina/app build

echo "==> Building marketing site (SSR)..."
pnpm --filter @lumina/web build

echo "==> Combining outputs for Netlify..."

# Create the publish directory structure
PUBLISH_DIR="dist-netlify"
rm -rf "$PUBLISH_DIR"
mkdir -p "$PUBLISH_DIR"
mkdir -p "$PUBLISH_DIR/netlify/functions"

# Copy web client assets (static files served by CDN)
cp -r apps/web/dist/client/* "$PUBLISH_DIR/"

# Copy app SPA into /app/ subfolder
mkdir -p "$PUBLISH_DIR/app"
cp -r apps/app/dist/* "$PUBLISH_DIR/app/"

# Create Netlify Function for SSR
cat > "$PUBLISH_DIR/netlify/functions/ssr.mjs" << 'FUNC'
import { createServerEntry } from "../../_server/server.js";

const entry = createServerEntry();

export default async function handler(request, context) {
  try {
    const response = await entry.handler(request);
    return response;
  } catch (e) {
    console.error("SSR error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  path: "/*",
  excludedPath: ["/app/*", "/assets/*", "/_server/*"],
};
FUNC

# Copy server bundle for the function to use
mkdir -p "$PUBLISH_DIR/_server"
cp -r apps/web/dist/server/* "$PUBLISH_DIR/_server/"

echo "==> Build complete! Output in $PUBLISH_DIR/"
echo "    - Static assets: $PUBLISH_DIR/"
echo "    - Dashboard app: $PUBLISH_DIR/app/"
echo "    - SSR function:  $PUBLISH_DIR/netlify/functions/ssr.mjs"

#!/usr/bin/env bash
set -euo pipefail

echo "==> Installing dependencies..."
pnpm install --frozen-lockfile

echo "==> Building dashboard app (SPA)..."
pnpm --filter @lumina/app build

echo "==> Building marketing site (SSR)..."
pnpm --filter @lumina/web build

echo "==> Combining outputs for Netlify..."

PUBLISH_DIR="dist-netlify"
rm -rf "$PUBLISH_DIR"
mkdir -p "$PUBLISH_DIR"

# 1. Copy marketing site client assets
cp -r apps/web/dist/client/* "$PUBLISH_DIR/"

# 2. Copy dashboard SPA into /app/ subfolder
mkdir -p "$PUBLISH_DIR/app"
cp -r apps/app/dist/* "$PUBLISH_DIR/app/"

# 3. Copy SSR server bundle for edge function
mkdir -p "$PUBLISH_DIR/_ssr-server"
cp -r apps/web/dist/server/* "$PUBLISH_DIR/_ssr-server/"

# 4. Create Netlify Edge Function for SSR
mkdir -p "netlify/edge-functions"
cat > "netlify/edge-functions/ssr.js" << 'EDGEFUNC'
import server from "../../dist-netlify/_ssr-server/server.js";

export default async function handler(request, context) {
  try {
    const response = await server.fetch(request);
    return response;
  } catch (e) {
    console.error("SSR Error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  path: "/*",
  excludedPath: ["/app/*", "/assets/*", "/_ssr-server/*"],
};
EDGEFUNC

echo "==> Build complete!"
echo "    Static assets:  $PUBLISH_DIR/assets/"
echo "    Dashboard app:  $PUBLISH_DIR/app/"
echo "    SSR server:     $PUBLISH_DIR/_ssr-server/"
echo "    Edge function:  netlify/edge-functions/ssr.js"

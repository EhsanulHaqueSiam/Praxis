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

# 3. Create Netlify Serverless Function for SSR (Node.js runtime)
mkdir -p "netlify/functions/_ssr-server"
cp -r apps/web/dist/server/* "netlify/functions/_ssr-server/"

cat > "netlify/functions/ssr.mjs" << 'SSRFUNC'
import server from "./_ssr-server/server.js";

export default async function handler(request) {
  try {
    return await server.fetch(request);
  } catch (e) {
    console.error("SSR Error:", e);
    return new Response("Internal Server Error", { status: 500 });
  }
}

export const config = {
  path: "/*",
  excludedPath: ["/app/*", "/assets/*"],
  preferStatic: true,
};
SSRFUNC

echo "==> Build complete!"
echo "    Static assets:  $PUBLISH_DIR/assets/"
echo "    Dashboard app:  $PUBLISH_DIR/app/"
echo "    SSR function:   netlify/functions/ssr.mjs"

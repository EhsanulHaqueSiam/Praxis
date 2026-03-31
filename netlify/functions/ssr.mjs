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

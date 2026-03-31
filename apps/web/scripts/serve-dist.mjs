import http from "node:http";
import { Readable } from "node:stream";
import serverEntry from "../dist/server/server.js";

const PORT = Number(process.env.PORT || 3000);
const HOST = process.env.HOST || "0.0.0.0";

const handler = typeof serverEntry?.fetch === "function" ? serverEntry.fetch.bind(serverEntry) : null;

if (!handler) {
  throw new Error("Expected dist/server/server.js default export to provide a fetch(request) handler.");
}

const server = http.createServer(async (req, res) => {
  try {
    const targetUrl = `http://${req.headers.host || `localhost:${PORT}`}${req.url || "/"}`;
    const isBodyless = req.method === "GET" || req.method === "HEAD";

    const request = new Request(targetUrl, {
      method: req.method,
      headers: req.headers,
      body: isBodyless ? undefined : Readable.toWeb(req),
      duplex: isBodyless ? undefined : "half",
    });

    const response = await handler(request);

    res.statusCode = response.status;
    res.statusMessage = response.statusText;
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    if (!response.body) {
      res.end();
      return;
    }

    const stream = Readable.fromWeb(response.body);
    stream.pipe(res);
  } catch (error) {
    console.error("SSR preview error", error);
    res.statusCode = 500;
    res.end("Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`SSR preview listening on http://${HOST}:${PORT}`);
});

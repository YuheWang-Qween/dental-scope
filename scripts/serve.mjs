import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const SCRIPT_DIR = __dirname ?? fileURLToPath(new URL('.', import.meta.url));
const PROJECT_DIR = join(SCRIPT_DIR, '..');
const DIST_DIR = join(PROJECT_DIR, 'dist');
const port = Number(process.argv[2] ?? process.env.DEPLOY_RUN_PORT ?? 5000);

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript',
  '.mjs': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.glb': 'model/gltf-binary',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
};

const server = createServer(async (req, res) => {
  try {
    const url = new URL(req.url, `http://${req.headers.host ?? 'localhost'}`);
    const pathname = decodeURIComponent(url.pathname);
    let filePath = normalize(join(DIST_DIR, pathname));
    if (!filePath.startsWith(DIST_DIR)) {
      res.writeHead(403);
      res.end('Forbidden');
      return;
    }

    let content;
    try {
      content = await readFile(filePath);
    } catch {
      // SPA fallback: serve the app shell (project builds a dedicated 404.html)
      content = await readFile(join(DIST_DIR, '404.html'));
      res.writeHead(404, {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      });
      res.end(content);
      return;
    }

    const ext = extname(filePath).toLowerCase();
    res.writeHead(200, {
      'Content-Type': MIME[ext] ?? 'application/octet-stream',
      'Cache-Control': ext === '.html' ? 'no-cache' : 'public, max-age=31536000, immutable',
    });
    res.end(content);
  } catch (err) {
    res.writeHead(500);
    res.end(`Internal Server Error: ${err.message}`);
  }
});

server.listen(port, '0.0.0.0', () => {
  console.log(`Serving ${DIST_DIR} on http://0.0.0.0:${port}`);
});
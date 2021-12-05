import http from 'http';
import { requestListener } from './src/routing/index.js';

let app;
try {
app = http.createServer((req, res) => requestListener(req, res));

} catch (error) {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.end("Server doesn't available");
}

export { app };

import http from 'http';
import { config } from 'dotenv';
import { requestListener } from './src/routing/index.js';

config();
const port = process.env.PORT || 3000;
try {
  const server = http.createServer(requestListener);
  server.listen(port, () => {
    console.log(`Server running at port ${port}`);
  });
} catch (error) {
  res.writeHead(500, { 'Content-Type': 'text/html' });
  res.end("Server doesn't available");
}

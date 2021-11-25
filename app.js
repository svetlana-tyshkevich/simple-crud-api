import http from 'http';
import { config } from 'dotenv';
import { requestListener } from './src/routing/index.js';

config();
const port = process.env.PORT || 3000;

const server = http.createServer(requestListener);

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

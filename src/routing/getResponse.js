import { db } from '../db.js';

const getResponse = (path, res) => {
  if (path === '/person') {
    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(db));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'text/html' });
      res.end('Something is wrong');
    }
  }
};

export { getResponse };

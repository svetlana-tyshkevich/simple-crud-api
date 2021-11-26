import { db } from '../db.js';

const getResponse = (pathParts, res) => {
  if (pathParts.length === 1) {
    console.log(pathParts);
    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(db));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end('Something is wrong');
    }
  }
};

export { getResponse };

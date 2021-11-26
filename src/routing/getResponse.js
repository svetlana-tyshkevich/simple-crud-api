import { db } from '../db.js';

const getResponse = (pathParts, res) => {
  if (pathParts.length === 1) {
    try {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(db));
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end('Something is wrong');
    }
  } else {
    if (pathParts.length === 2) {
      try {
          const user = db.find(item => item.id === pathParts[1])
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(user));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end('Something is wrong');
      }
    }
  }
};

export { getResponse };

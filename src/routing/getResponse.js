import { db } from '../db.js';

const getResponse = (res) => {
  if (db) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db));
  } else {
    res.writeHead(500, { 'Content-Type': 'application/json' });
    res.end('Database is not available!');
  }
};

export { getResponse };

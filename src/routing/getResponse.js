import { db } from '../db.js';

const getResponse = (res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(db));
};

export { getResponse };

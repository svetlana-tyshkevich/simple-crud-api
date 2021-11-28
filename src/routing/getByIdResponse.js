import { db } from '../db.js';

const getByIdResponse = (res, id) => {
    const user = db.find((item) => item.id === id);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(user));
  
};

export { getByIdResponse };

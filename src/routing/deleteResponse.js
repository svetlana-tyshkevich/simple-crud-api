import { db } from '../db.js';

const deleteResponse = (res, id) => {
  const userIndex = db.findIndex((item) => item.id === id);
  db.splice(userIndex, 1);

  res.writeHead(204, { 'Content-Type': 'application/json' });
  res.write('User is deleted');
  res.end();
};

export { deleteResponse };

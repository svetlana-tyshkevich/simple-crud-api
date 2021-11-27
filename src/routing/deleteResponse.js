import { db } from '../db.js';

const deleteResponse = (pathParts, res) => {
  if (pathParts.length === 2) {
    try {
      const userId = pathParts[1];

      const userIndex = db.findIndex((item) => item.id === userId);
      db.splice(userIndex, 1);

      res.writeHead(204, { 'Content-Type': 'application/json' });
      res.write('User is deleted');
      res.end();
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      res.end('Something is wrong');
    }
  }
};

export { deleteResponse };

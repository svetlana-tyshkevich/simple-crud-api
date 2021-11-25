import { randomUUID } from 'crypto';
import { db } from '../db.js';

const postResponse = (path, requestBody, res) => {
  if (path === '/person') {
    try {
      const { name, age, hobbies } = JSON.parse(requestBody);
      const id = randomUUID();
      const newPerson = { id, name, age, hobbies };
      db.push(newPerson);
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newPerson));
    } catch (error) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      res.end('Something is wrong');
    }
  } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end("This page doesn't exist");
  }
};
export { postResponse };

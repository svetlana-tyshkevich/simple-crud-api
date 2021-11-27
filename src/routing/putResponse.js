import { db } from '../db.js';

const putResponse = (pathParts, requestBody, res) => {
  if (pathParts.length === 1) {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end("This page doesn't exist");
  } else {
    if (pathParts.length === 2) {
      try {
        const userId = pathParts[1];

        const { name, age, hobbies } = requestBody;

        const userIndex = db.findIndex((item) => item.id === userId);
        const currentUSer = db[userIndex];
        currentUSer.name = name;
        currentUSer.age = age;
        currentUSer.hobbies = hobbies;


        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(db[userIndex]));
      } catch (error) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end('Something is wrong');
      }
    }
  }
};

export { putResponse };

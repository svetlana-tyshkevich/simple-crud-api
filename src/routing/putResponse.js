import { db } from '../db.js';

const putResponse = (res, id, requestBody) => {
  const { name, age, hobbies } = requestBody;

  const userIndex = db.findIndex((item) => item.id === id);
  if (userIndex < 0) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("This user doesn't exist");
  } else {
    const currentUSer = db[userIndex];
    currentUSer.name = name;
    currentUSer.age = age;
    currentUSer.hobbies = hobbies;

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(db[userIndex]));
  }
};

export { putResponse };

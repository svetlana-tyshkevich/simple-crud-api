import { v4 as uuidv4 } from 'uuid';
import { db } from '../db.js';

const postResponse = (path, requestBody, res) => {
  
    const { name, age, hobbies } = JSON.parse(requestBody);
    const id = uuidv4();

    const newPerson = { id, name, age, hobbies };
    db.push(newPerson);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newPerson));
}
  
export { postResponse };

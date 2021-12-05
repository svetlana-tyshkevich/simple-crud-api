import { v4 as uuidv4 } from 'uuid';
import { db } from '../db.js';
import { checkPersonModel } from './validation.js';

const postResponse = (res, requestBody) => {
  if (checkPersonModel(requestBody, res)) {
      const { name, age, hobbies } = requestBody;
    const id = uuidv4();

    const newPerson = { id, name, age, hobbies };
    db.push(newPerson);

    res.writeHead(201, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(newPerson));
  }
    
}
  
export { postResponse };

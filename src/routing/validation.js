import { validate as validateUUID } from 'uuid';

const checkPath = (path, res) => {
  if (path[0] !== 'person' || path.length > 2) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("This page doesn't exist");
    return false;
  } else {
    if (path[1] && !validateUUID(path[1])) {
      res.writeHead(400, { 'Content-Type': 'text/html' });
      res.end("This user's ID is invalid");
      return false;
    }
  }
  return true;
};

const checkPersonModel = (requestBody, res) => {
  const { name, age, hobbies } = requestBody;
  if (!name || !age || !hobbies) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end("User's info is not complete");

    return false;
  }
  if (
    typeof name !== 'string' ||
    typeof age !== 'number' ||
    !Array.isArray(hobbies)
  ) {
    res.writeHead(400, { 'Content-Type': 'text/html' });
    res.end("User's info has invalid format");

    return false;
  }
  return true;
};

export { checkPath, checkPersonModel };

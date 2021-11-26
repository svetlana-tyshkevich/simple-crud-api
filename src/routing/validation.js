import { validate as validateUUID } from 'uuid';

const checkPath = (path, res) => {
  if (
    path[0] !== 'person' ||
    (path[1] && !validateUUID(path[1])) ||
    path.length > 2
  ) {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end("This page doesn't exist");
  }
};

export { checkPath };

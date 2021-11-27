// import path from 'path';
import url from 'url';
import { getResponse } from './getResponse.js';
import { postResponse } from './postResponse.js';
import { putResponse } from './putResponse.js';
import { deleteResponse } from './deleteResponse.js';
import { checkPath } from './validation.js';

const requestListener = (req, res) => {
  let jsonString = '';
  req.on('data', (data) => {
    jsonString += data;
  });

  const urlParsed = url.parse(req.url, true);
  let pathParts = urlParsed.path.substring(1).split('/');
  // console.log(pathParts);
  checkPath(pathParts, res);

  let method = req.method;

  switch (method) {
    case 'GET':
      getResponse(pathParts, res);
      break;
    case 'POST':
      req.on('end', () => postResponse(pathParts, JSON.parse(jsonString), res));
      break;

    case 'PUT':
      req.on('end', () => putResponse(pathParts, JSON.parse(jsonString), res));
      break;

    case 'DELETE':
      req.on('end', () => deleteResponse(pathParts, res));
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('Wrong method');
      break;
  }
};

export { requestListener };

// import path from 'path';
import url from 'url';
import { getResponse } from './getResponse.js';
import { getByIdResponse } from './getByIdResponse.js';
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
  const id = pathParts[1];

  let method = req.method;

  switch (method) {
    case 'GET':
      {
        if (!id) getResponse(res);
        else getByIdResponse(res, id);
      }
      break;
    case 'POST':
      if (!id) req.on('end', () => postResponse(res, JSON.parse(jsonString)));
      break;

    case 'PUT':
      if (id)
        req.on('end', () =>
          putResponse(res, id, JSON.parse(jsonString)),
        );
      break;

    case 'DELETE':
     if (id) req.on('end', () => deleteResponse(res, id));
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end("This Page doesn't exist!");
      break;
  }
};

export { requestListener };

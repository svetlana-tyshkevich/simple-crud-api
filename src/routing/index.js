import url from 'url';
import { db } from '../db.js';
import { getResponse } from './getResponse.js';
import { postResponse } from './postResponse.js';

const requestListener = (req, res) => {
  let jsonString = '';
  req.on('data', (data) => {
    jsonString += data
  })

  const urlParsed = url.parse(req.url, true);
  let path = urlParsed.pathname;
  let method = req.method;

  switch (method) {
    case 'GET':
      getResponse(path, res);
      break;
    case 'POST':
     req.on('end', () => postResponse(path, jsonString, res));
      break;

    default:
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end("Wrong method");
      break;
  }
};

export { requestListener };

import url from 'url';
import { db } from '../db.js';
import { getResponse } from './getResponse.js';

const requestListener = (req, res) => {
  const urlParsed = url.parse(req.url, true);
  let path = urlParsed.pathname;
  let method = req.method;
  console.log(req.method);
  if (method === 'GET') {
    getResponse(path, res);
  }
};

export { requestListener };

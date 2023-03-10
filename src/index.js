/**
 * @fileoverview Entry point to humane society api
 */

import {readFile} from 'node:fs/promises';
import https from 'node:https';

import express from 'express';

import {router as adopterRouter} from './adopters/adopter_routes.js';
import {router as petRouter} from './pets/pet_routes.js';

/**
 * Allows server to listen over https
 * @param {Express} app
 */
const runHttps = async (app) => {
  try {
    const identityValue = await readFile(
        process.env.IDENTITY_PATH, {encoding: 'utf8'});
    const trustValue = await readFile(
        process.env.TRUST_PATH, {encoding: 'utf8'});

    const options = {
      key: identityValue,
      cert: trustValue,
    };

    const HTTPS_PORT = process.env.HTTPS_PORT || 3080;
    https.createServer(options, app)
        .listen(HTTPS_PORT,
            () => console.log(`API is listening on port ${HTTPS_PORT}`));
  } catch (err) {
    console.error(err.message);
  }
};

/**
 * Entry point to api
 */
const main = () => {
  const app = express();

  app.use(express.json());
  app.use('/api/adopters', adopterRouter);
  app.use('/api/pets', petRouter);

  const HTTP_PORT = process.env.HTTP_PORT || 3000;
  // The server is set to listen on two different ports
  // Remove this app.listen call if no need for http unsecure
  app.listen(
      HTTP_PORT,
      () => console.log(`API is listening on port ${HTTP_PORT}`));

  if (process.env.IDENTITY_PATH && process.env.TRUST_PATH) {
    runHttps(app);
  }
};

main();

/**
 * @fileoverview Entry point to humane society api
 */

import https from 'https';
import fs from 'fs';

import express from 'express';

import {router as adopterRouter} from './adopters/adopter_routes.js';
import {router as petRouter} from './pets/pet_routes.js';

const options = {
//  key: fs.readFileSync('path/to/private/key'),
//  cert: fs.readFileSync('path/to/public/cert'),
};

const app = express();

app.use(express.json());
app.use('/api/adopters', adopterRouter);
app.use('/api/pets', petRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => void console.log(`API is listening on port ${PORT}`));

https.createServer(options, app).listen(PORT + 80);

/**
 * @fileoverview Entry point to humane society api
 */

import bodyParser from 'body-parser';
import express from 'express';

import {router as petRouter} from './pets/pet_routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/pets', petRouter);

app.listen(PORT, () => {
  console.log(`API is listening on port ${PORT}`);
});

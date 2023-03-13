/**
 * @fileoverview Module for exposing adopter resource related routes
 */

import express from 'express';

import * as AdopterRepository from './adopter_repository.js';

const router = express.Router();

router.get('/', (_, res) => {
  res.json({status: 'OK', data: AdopterRepository.getAllAdopters()});
});

export {router};

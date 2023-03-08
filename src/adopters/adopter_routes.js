/**
 * @fileoverview Module for exposing adopter resource related routes
 */

import express from 'express';

import * as AdopterController from './adopter_controller.js';

const router = express.Router();

router.get('/', AdopterController.getAllAdopters);

export {router};

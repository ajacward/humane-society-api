/**
 * @fileoverview Module for exposing adopter resource related endpoints
 */

import * as AdopterService from './adopter_service.js';

/**
 * Retrieve all adopter records
 * @param {request} req
 * @param {response} res
 */
const getAllAdopters = (req, res) => {
  res.json({status: 'OK', data: AdopterService.getAllAdopters()});
};

export {getAllAdopters};

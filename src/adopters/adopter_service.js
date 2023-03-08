/**
 * @fileoverview Module for exposing adopter resource related service calls
 */

import * as AdopterRepository from './adopter_repository.js';

/**
 * Retrieve all adopter records
 * @return {adopter[]}
 */
const getAllAdopters = () => AdopterRepository.getAllAdopters();

export {getAllAdopters};

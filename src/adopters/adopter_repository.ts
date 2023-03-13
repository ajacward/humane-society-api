/**
 * @fileoverview Module for exposing adopter resource related persistence calls
 */

import {Adopter} from './adopter.js';

/**
 * In memory collection of adopter records
 */
const adopters: Map<number, Adopter> = new Map([
  [1, {id: 1, name: 'John', age: 22}],
]);

/**
 * Return all in memory adopters
 */
function getAllAdopters() {
  return [...adopters.values()];
}

export {getAllAdopters};

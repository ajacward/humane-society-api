/**
 * @fileoverview Module for exposing pet resource related service calls
 */

import * as PetRepository from './pet_repository.js';

/**
 * Retrieve all pet records
 * @return {pet[]}
 */
const getAllPets = () => {
  return PetRepository.getAllPets();
};

/**
 * Retrieve one pet record
 */
const getOnePet = () => {
  return;
};

/**
 * Add a new pet record
 * @param {pet} newPet
 * @return {pet}
 */
const addNewPet = (newPet) => {
  return PetRepository.addNewPet(newPet);
};

/**
 * Update a pet record
 */
const updateOnePet = () => {
  return;
};

/**
 * Remove a pet record
 */
const deleteOnePet = () => {
  return;
};

export {
  getAllPets,
  getOnePet,
  addNewPet,
  updateOnePet,
  deleteOnePet,
};

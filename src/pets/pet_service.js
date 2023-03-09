/**
 * @fileoverview Module for exposing pet resource related service calls
 */

import * as PetRepository from './pet_repository.js';

/**
 * Retrieve all pet records
 * @param {string} name
 * @return {pet[]}
 */
const getAllPets = (name) => PetRepository.getAllPets(name);

/**
 * Retrieve one pet record
 * @param {number} petId
 * @return {pet}
 */
const getOnePet = (petId) => PetRepository.getOnePet(petId) ?? {};

/**
 * Add a new pet record
 * @param {pet} newPet
 * @return {pet}
 */
const addNewPet = (newPet) => PetRepository.addNewPet(newPet);

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

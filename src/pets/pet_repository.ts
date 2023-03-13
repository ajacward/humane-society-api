/**
 * @fileoverview Module for exposing pet resource related persistence calls
 */

import {Pet} from './pet.js';

/**
 * In memory collection of pet records
 */
const pets: Map<number, Pet> = new Map([
  [1, {id: 1, name: 'Malibu', age: 12, species: 'cat'}],
]);

/**
 * The next pet id to use for adds
 */
let nextAvailableId = 2;

/**
 * Return all in memory pets
 * @param name
 */
function getAllPets(name: string) {
    return name ?
    [...pets.values()].filter((pet) => pet.name === name) :
    [...pets.values()];
}

/**
 * Return pet matching id if found
 */
function getOnePet(petId: number) {
  return pets.get(petId);
}

/**
 * Persist new pet and return pet with id
 */
function addNewPet(newPet: Pet) {
  const petId = nextAvailableId;
  const addedPet: Pet = {...newPet, id: petId};
  pets.set(petId, addedPet);

  nextAvailableId += 1;

  return addedPet;
}

/**
 * Update pet data by id
 * @param petId
 * @param newPetData
 */
function updateOnePet(petId: number, newPetData: Pet) {
  if (!pets.has(petId)) {
    return {};
  }

  pets.set(petId, newPetData);

  return pets.get(petId);
};

/**
 * Deletes pet record by id
 * @param petId
 */
function deleteOnePet(petId: number) {
  return pets.delete(petId);
}

export {
  getAllPets,
  addNewPet,
  getOnePet,
  updateOnePet,
  deleteOnePet,
};

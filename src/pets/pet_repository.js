/**
 * @fileoverview Module for exposing pet resource related persistence calls
 */

/**
 * In memory collection of pet records
 */
const pets = new Map([
  [1, {id: 1, name: 'Malibu', age: 12, species: 'cat'}],
]);

/**
 * The next pet id to use for adds
 */
let nextAvailableId = 2;

/**
 * Return all in memory pets
 * @param {string} name
 * @return {pet[]}
 */
const getAllPets = (name) =>
    name ?
    [...pets.values()].filter((pet) => pet.name === name) :
    [...pets.values()];

/**
 * Return pet matching id if found
 * @param {number} petId
 * @return {pet}
 */
const getOnePet = (petId) => pets.get(petId);

/**
 * Persist new pet and return pet with id
 * @param {pet} newPet
 * @return {pet}
 */
const addNewPet = (newPet) => {
  const petId = nextAvailableId;
  const addedPet = {id: petId, ...newPet};
  pets.set(petId, addedPet);

  nextAvailableId += 1;

  return addedPet;
};

export {getAllPets, addNewPet, getOnePet};

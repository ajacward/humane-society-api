/**
 * @fileoverview Module for exposing pet resource related persistence calls
 */
/**
 * In memory collection of pet records
 */
const pets = new Map([
    [1, { id: 1, name: 'Malibu', age: 12, species: 'cat' }],
]);
/**
 * The next pet id to use for adds
 */
let nextAvailableId = 2;
/**
 * Return all in memory pets
 * @param name
 */
function getAllPets(name) {
    return name ?
        [...pets.values()].filter((pet) => pet.name === name) :
        [...pets.values()];
}
/**
 * Return pet matching id if found
 */
function getOnePet(petId) {
    return pets.get(petId);
}
/**
 * Persist new pet and return pet with id
 */
function addNewPet(newPet) {
    const petId = nextAvailableId;
    const addedPet = { ...newPet, id: petId };
    pets.set(petId, addedPet);
    nextAvailableId += 1;
    return addedPet;
}
/**
 * Update pet data by id
 * @param petId
 * @param newPetData
 */
function updateOnePet(petId, newPetData) {
    if (!pets.has(petId)) {
        return {};
    }
    pets.set(petId, newPetData);
    return pets.get(petId);
}
;
/**
 * Deletes pet record by id
 * @param petId
 */
function deleteOnePet(petId) {
    return pets.delete(petId);
}
export { getAllPets, addNewPet, getOnePet, updateOnePet, deleteOnePet, };
//# sourceMappingURL=pet_repository.js.map
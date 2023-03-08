/**
 * @fileoverview Module for exposing pet resource related endpoints
 */

import * as PetService from './pet_service.js';

/**
 * Retrieve all pet records
 * @param {request} req
 * @param {response} res
 */
const getAllPets = (req, res) => {
  res.json({status: 'OK', data: PetService.getAllPets()});
};

/**
 * Retrieve one pet by id
 * @param {request} req
 * @param {response} res
 */
const getOnePet = (req, res) => {
  const pet = PetService.getOnePet();
  res.send('Get an existing pet');
};

/**
 * Add a new pet record
 * @param {request} req
 * @param {response} res
 */
const addNewPet = (req, res) => {
  const {body} = req;
  const newPet = {
    name: body.name,
    age: body.age,
    species: body.species,
  };

  res.status(201).json({status: 'OK', data: PetService.addNewPet(newPet)});
};

/**
 * Update a pet record matching an id
 * @param {request} req
 * @param {response} res
 */
const updateOnePet = (req, res) => {
  const updatedPet = PetService.updateOnePet();
  res.send('Update an existing pet');
};

/**
 * Remove a pet record by id
 * @param {request} req
 * @param {response} res
 */
const deleteOnePet = (req, res) => {
  const removedPet = PetService.deleteOnePet();
  res.send('Delete an existing pet');
};

export {
  getAllPets,
  getOnePet,
  addNewPet,
  updateOnePet,
  deleteOnePet,
};

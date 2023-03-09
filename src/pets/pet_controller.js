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
  const {name} = req.query;
  res.json({status: 'OK', data: PetService.getAllPets(name)});
};

/**
 * Retrieve one pet by id
 * @param {request} req
 * @param {response} res
 */
const getOnePet = (req, res) => {
  const {
    params: {petId},
  } = req;

  if (!petId) {
    return;
  }

  res.json({status: 'OK', data: PetService.getOnePet(parseInt(petId))});
};

/**
 * Add a new pet record
 * @param {request} req
 * @param {response} res
 */
const addNewPet = (req, res) => {
  const {body} = req;

  if (!body.name || !body.age || !body.species) {
    res.status(400).json({
      status: 'FAILED',
      data: {
        error: 'Invalid name, age or species',
      },
    });
    return;
  }

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

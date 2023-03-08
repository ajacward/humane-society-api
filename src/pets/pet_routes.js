/**
 * @fileoverview Module for exposing pet resource related routes
 */

import express from 'express';

import * as PetController from './pet_controller.js';

const router = express.Router();

router.get('/', PetController.getAllPets);
router.get('/:petId', PetController.getOnePet);
router.post('/', PetController.addNewPet);
router.patch('/:petId', PetController.updateOnePet);
router.delete('/:petId', PetController.deleteOnePet);

export {router};

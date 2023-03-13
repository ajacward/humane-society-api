/**
 * @fileoverview Module for exposing pet resource related routes
 */
import express from 'express';
import * as PetRepository from './pet_repository.js';
const router = express.Router();
router.get('/', (req, res) => {
    const { name } = req.query;
    if (typeof name !== 'string' && typeof name !== 'undefined') {
        throw new TypeError('Query param must be string or undefined');
    }
    res.json({ status: 'OK', data: PetRepository.getAllPets(name ?? '') });
});
router.get('/:petId', (req, res) => {
    const { params: { petId } } = req;
    res.json({ status: 'OK', data: PetRepository.getOnePet(Number(petId)) ?? {} });
});
router.post('/', (req, res) => {
    const { body } = req;
    if (!body.name || !body.age || !body.species) {
        res.status(400).json({
            status: 'FAILED',
            data: {
                error: 'Missing name, age or species',
            },
        });
        return;
    }
    const newPet = {
        name: body.name,
        age: body.age,
        species: body.species,
    };
    res.status(201).json({ status: 'OK', data: PetRepository.addNewPet(newPet) });
});
router.put('/:petId', (req, res) => {
    const { body, params: { petId }, } = req;
    if (!body.name || !body.age || !body.species) {
        res.status(400).json({
            status: 'FAILED',
            data: {
                error: 'Missing name, age or species',
            },
        });
        return;
    }
    const newPetData = {
        name: body.name,
        age: body.age,
        species: body.species,
    };
    res.json({ status: 'OK',
        data: PetRepository.updateOnePet(Number(petId), newPetData) });
});
router.delete('/:petId', (req, res) => {
    const { params: { petId } } = req;
    res.json({ status: 'OK',
        data: PetRepository.deleteOnePet(Number(petId)) });
});
export { router };
//# sourceMappingURL=pet_routes.js.map
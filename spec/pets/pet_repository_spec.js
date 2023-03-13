import * as PetRepository from '../../dist/pets/pet_repository.js';

describe('PetRepository', () => {
  it('getAllPets starts with one entry', () => {
    expect(PetRepository.getAllPets().length).toEqual(1);
  });
});

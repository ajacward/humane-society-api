/**
 * @fileoverview Module for exposing adopter resource related persistence calls
 */
/**
 * In memory collection of adopter records
 */
const adopters = new Map([
    [1, { id: 1, name: 'John', age: 22 }],
]);
/**
 * Return all in memory adopters
 */
function getAllAdopters() {
    return [...adopters.values()];
}
export { getAllAdopters };
//# sourceMappingURL=adopter_repository.js.map
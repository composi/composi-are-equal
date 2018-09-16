/**
 * A function to test whether the data provided for updating a component creates a new virtual node or not.
 * @param {any} value1 A value to check.
 * @param {any} value2 Another value to check.
 * @return {boolean} boolean
 */
export function areEqual(value1, value2) {
  return JSON.stringify(value1) === JSON.stringify(value2)
}

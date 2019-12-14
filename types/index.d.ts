/**
 * Compare two values to see if they are equal.
 * It does comparison by value.
 * It treats equality of truthy/falsy values strictly.
 * undefined != null != false, etc.
 * Functions doing the same thing but with different names are not equal,
 * because their names are different.
 * NaN and 0/0 are equal.
 * Number(123) === 123
 * String('text') === 'text'
 * Arrays with the same values but in different orders are not equal:
 * [1,2,3,4] !== [1,3,2,4].
 * Objects with the same properties in different orders are equal.
 * An object with a static property with value equal to object that inherits its property from another object are not equal (prototype inheritance makes them different).
 * @param {any} value1 A value to check.
 * @param {any} value2 Another value to check.
 * @return {boolean} boolean
 */
export function areEqual(value1: any, value2: any): boolean;

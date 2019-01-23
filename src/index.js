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
export function areEqual(value1, value2) {
  // Deal with undefined value:
  if (value1 === undefined && value2 !== undefined) {
    return false
  } else if (value2 === undefined && value1 !== undefined) {
    return false
    // Values types are different, so reject:
  } else if (typeof value1 !== typeof value2) {
    return false
    // Compare two functions.
    // They can do same thing but if names are different,
    // they are not equal.
  } else if (typeof value1 === 'function') {
    return value1.toString() === value2.toString()
    // We are dealing with simple types
  } else if (typeof value1 !== 'object' && typeof value2 !== 'object') {
    return JSON.stringify(value1) === JSON.stringify(value2)
  } else {
    // Comparing two objects:
    for (let prop in value1) {
      if (value1.hasOwnProperty(prop)) {
        if (value2.hasOwnProperty(prop)) {
          if (typeof value1[prop] === 'object') {
            if (!areEqual(value1[prop], value2[prop])) return false
          } else {
            if (value1[prop] !== value2[prop]) return false
          }
        } else {
          return false
        }
      }
    }
    return true
  }
}

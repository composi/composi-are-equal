import { areEqual } from "../src"

test("two identical strings should be equal", function () {
  const str1 = 'some text'
  const str2 = 'some text'
  expect(areEqual(str1, str2)).toBe(true)
})

test("two identical strings should be equal", function () {
  const str1 = 'some text'
  const str2 = 'some text'
  expect(areEqual(str1, str2)).toBe(true)
})

test("two identical numbers should be equal", function () {
  const num1 = 123
  const num2 = 123
  expect(areEqual(num1, num2)).toBe(true)
})

test("two undefined variables should be equal", function () {
  let undef1
  let undef2
  expect(areEqual(undef1, undef2)).toBe(true)
})

test("two null variables should be equal", function () {
  const null1 = null
  const null2 = null
  expect(areEqual(null1, null2)).toBe(true)
})


test("two NaN values should be equal", function () {
  expect(areEqual(0/0, NaN)).toBe(true)
})

test("arrays compared with '==' and '===' should not be equal", function () {
  const array1 = [1, 2, 3]
  const array2 = [1, 2, 3]
  expect(array1 == array2).toBe(false)
  expect(array1 === array2).toBe(false)
})

test("two arrays with same values should be equal", function () {
  const array1 = [1, 2, 3]
  const array2 = [1, 2, 3]
  expect(areEqual(array1, array2)).toBe(true)
})

test("two NaN values should be equal", function () {
  const obj1 = { name: 'Joe' }
  const obj2 = { name: 'Joe' }
  expect(areEqual(0 / 0, NaN)).toBe(true)
})

test("objects compared with '==' and '===' should not be equal", function () {
  const obj1 = { name: 'Joe' }
  const obj2 = { name: 'Joe' }
  expect(obj1 == obj2).toBe(false)
  expect(obj1 === obj2).toBe(false)
})

test("two objects with same values should be equal", function () {
  const obj1 = { name: 'Joe' }
  const obj2 = { name: 'Joe' }
  expect(areEqual(obj1, obj2)).toBe(true)
})

import { areEqual } from "../src"

test("two identical strings should be equal", function () {
  const str1 = 'some text'
  const str2 = 'some text'
  expect(areEqual(str1, str2)).toBe(true)
})

test("two different strings should not be equal", function () {
  const str1 = 'some text'
  const str2 = 'different text'
  expect(areEqual(str1, str2)).toBe(false)
})

test("two identical numbers should be equal", function () {
  const num1 = 123
  const num2 = 123
  expect(areEqual(num1, num2)).toBe(true)
})

test("two different numbers should not be equal", function () {
  const num1 = 123
  const num2 = 345
  expect(areEqual(num1, num2)).toBe(false)
})

test("two undefined variables should be equal", function () {
  let undef1
  let undef2
  expect(areEqual(undef1, undef2)).toBe(true)
})

test("values with different types should not be equal", function () {
  expect(areEqual(123, 'a string')).toBe(false)
})

test("An undefined variable should not be equal to a defined one", function () {
  let undef
  let def = 'Something'
  expect(areEqual(undef, def)).toBe(false)
  expect(areEqual(def, undef)).toBe(false)
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

test("two arrays with same reversed values should not be equal", function () {
  const array1 = [1, 2, 3]
  const array2 = [3, 2, 1]
  expect(areEqual(array1, array2)).toBe(false)
})

test("two arrays with same objects should be equal", function () {
  const array1 = [{name: 'Joe'}, {name: 'Sarah'}, {name: 'Sam'}]
  const array2 = [{ name: 'Joe' }, { name: 'Sarah' }, { name: 'Sam' }]
  expect(areEqual(array1, array2)).toBe(true)
})

test("two arrays with same objects in different order should not be equal", function () {
  const array1 = [{ name: 'Joe' }, { name: 'Sarah' }, { name: 'Sam' }]
  const array2 = [{ name: 'Sarah' }, { name: 'Joe' }, { name: 'Sam' }]
  expect(areEqual(array1, array2)).toBe(false)
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


test("two objects with values reversed should be equal", function () {
  const obj1 = { name: 'Joe', job: 'mechanic' }
  const obj2 = { job: 'mechanic', name: 'Joe' }
  expect(areEqual(obj1, obj2)).toBe(true)
})

test("two objects with different values should not be equal", function () {
  const obj1 = { name: 'Joe', job: 'mechanic' }
  const obj2 = { name: 'Joe', job: 'lawyer' }
  expect(areEqual(obj1, obj2)).toBe(false)
})


test("two objects with different values should not be equal", function () {
  const obj1 = { name: 'Joe', stats: { age: 28, height: `5'/10"` } }
  const obj2 = { name: 'Joe', stats: { age: 32, height: `5'/10"` } }
  expect(areEqual(obj1, obj2)).toBe(false)
})


test("two identical functions with different names should not be equal. In this case, one object shares value with another.", function () {
  function Guy1() {
    this.name = 'Joe'
  }
  function Guy2() {
    this.name = 'Joe'
  }
  expect(areEqual(Guy1, Guy2)).toBe(false)
})

test("Object that inherits property from another should be different from static property", function () {
  function Guy1() {
    this.name = 'Sam'
    return {name: this.name}
  }
  function Guy2() {
    var name = 'Sam'
    return name
  }
  var guy1 = new Guy1()
  var guy2 = {}
  guy2.name = Guy2()
  expect(areEqual(Guy1, Guy2)).toBe(false)
})


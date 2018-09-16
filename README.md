# @composi/are-equal

A function that test the provided values to see if they are equal. If the values are primitive types the comparison is the same as using `===`. For complex types, such as arrays and objects, it also makes the comparison by value instead of by reference. By default JavaScript compares objects by reference. `areEqual` lets you compare them by value.

## Install

```
npm install --save-dev @composi/uuid
```

## Using

You compare primitive types or complex types:

```javascript
let num1 = 1
let num2 = 1
areEqual(num1, num2) // returns true

let str1 = 'Some text'
let str2 = 'Some text'
areEqual(str1, str2) // returns true

let bool1 = true
let bool2 = true
areEqual(bool1, bool2) // returns true

let nullVal = null
let undefinedVal
areEqual(nullVal, undefinedVal) // returns false

areEqual(0/0, NaN) // returns true
```
You can compare arrays to see if they hold the same values:

```javascript
// 
const array1 = [1, 2, 3]
const array2 = [1, 2, 3]
array1 === array2 // returns false because they are by reference.
areEqual(array1, array2) // returns true because this is by value.
```
You can compare objects to see if their properties and values are equal:

```javascript
const obj1 = {name: 'Joe'}
const obj2 = {name: 'Joe'}

obj1 === obj2 // returns false
obj1 == obj2 // returns false
areEqual(obj1, obj2) // returns true
```
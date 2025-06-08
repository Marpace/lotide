# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @palmonacid/lotide`

**Require it:**

`const _ = require('@palmonacid/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual`: Checks if two arrays are equal and logs the result to the console. 
- `assertEqual`: Checks if two values are equal and logs the result to the console.
- `assertObjectsEqual`: Checks if two objects are equal and logs the result to the console.
- `eqArrays`: Returns true if two given arrays are equal and false otherwise.
- `eqObjects`: Returns true if two given objects are equal and false otherwise.
- `countLetters`: takes a string and returns an object with each key being a character in the passed string and the property being the number of times the character appears in the string. 
- `countOnly`: Takes in an array of items and returns counts for a specific subset of those items by passing an object as a second argument. 
- `letterPositions`: Takes a string and returns all the indices in the string where each character is found.
- `without`: This function takes in a source array and a itemsToRemove array. It returns a new array with only those elements from source that are not present in the itemsToRemove array. 
- `flatten`: Takes in an array containing elements including nested arrays of elements, and returns a "flattened" version of the array.
- `middle`: Takes in an array and returns the middle-most element(s) of the given array. Returns an empty array for for arrays with one or two elements. Returns an array with the two elements in the middle, for an array with an even number of elements. 
- `findKeyByValue`: Takes in an object and a value. It scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
- `map`: Takes an array and a callback and returns a new array with whatever the callback returns for each item.
- `takeUntil`: Takes and arrray and a callback and returns a new array with elements from the original array starting at index 0 until the callback returns a truthy value.
- `findKey`: Takes in an object and a callback. It scans the object and returns the first key for which the callback returns a truthy value. If no key is found, it returns undefined.
- `head`: Takes an array and returns the first element (element at index 0).
- `tail`: Takes an array and returns a new array with the elemenets from the original except for the first element (index 0).

const assertEqual = require("../assertEqual");
const eqArrays = require("../eqArrays");

assertEqual(eqArrays([1, 6, 4], [1, 2, 4]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4, 5]), false);
assertEqual(eqArrays([3, 2, 1, 5, 4], [1, 1, 1]), false);
assertEqual(eqArrays([6, 4, 7], [6, 4, 7]), true);
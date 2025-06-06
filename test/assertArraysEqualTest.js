const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1, 6, 4], [1, 2, 4]); // should fail
assertArraysEqual([1, 2, 3], [1, 2, 3]); // should pass
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5]); // should fail
assertArraysEqual([3, 2, 1, 5, 4], [1, 1, 1]); // should fail
assertArraysEqual([6, 4, 7], [6, 4, 7]); // should pass
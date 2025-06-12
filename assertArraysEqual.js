const eqArrays = require("./eqArrays");

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ [${arr1}] and [${arr2}] are two equal arrays`);
  } else console.log(`❌❌❌ [${arr1}] and [${arr2}] are not equal arrays`);
};

module.exports = assertArraysEqual;
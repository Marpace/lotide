const eqArrays = require("./eqArrays");
const assertArraysEqual = require("./assertArraysEqual");

function middle(arr) {
  let newArr = [];
  if (arr.length < 3) return newArr;
  
  if (arr.length % 2 === 0) newArr.push(arr[(arr.length / 2) - 1], arr[(arr.length / 2)]);
  else newArr.push(arr[Math.floor(arr.length / 2)]);
  return newArr;
}

module.exports = middle;
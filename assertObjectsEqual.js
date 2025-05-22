const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};

function eqArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  for(item in arr1) {
    if(arr1[item] !== arr2[item]) return false;
  }
  return true;
}

const eqObjects = (obj1, obj2) => {
  if(Object.keys(obj1).length !== Object.keys(obj2).length) return false;

  for(const key in obj1) {
    if(Array.isArray(obj1[key]) && !eqArrays(obj1[key], obj2[key])) return false;
    if(!Array.isArray(obj1[key]) && obj1[key] !== obj2[key]) return false;
  }
  return true;
}

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ ${inspect(actual)} and ${inspect(expected)} are two equal objects`)
  }
  else console.log(`❌❌❌ ${inspect(actual)} and ${inspect(expected)} are not equal objects`)
}

const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };


const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};


assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject)
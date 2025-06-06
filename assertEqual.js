const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};


module.exports = assertEqual;
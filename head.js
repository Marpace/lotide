const assertEqual = function(actual, expected){
  let result = ""
  if(actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`
  console.log(result); 
}

const head = function (arr) {
  return arr[0];
};


assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
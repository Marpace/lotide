const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};



const findKeyByValue = (obj, el) => {
  for(const key in obj) {
    if(obj[key] === el) return key;
  }
  return undefined; 
}



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const someObj = {};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(someObj, "That '70s Show"), undefined);
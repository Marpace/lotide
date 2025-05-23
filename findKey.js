const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};

const findKey = (object, callback) => {
  for(let key in object) {
    if(callback(key)) return key;
  }
  return undefined;
}

const items = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const result1 = findKey(items, (key) => {
  return items[key].stars === 2;
})


assertEqual(result1, "noma")
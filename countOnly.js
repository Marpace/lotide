const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};

function countOnly(allItems, itemsToCount) {
  const results = {};
  for(const item of allItems) {
    if(itemsToCount[item] && itemsToCount[item] === true) {
      if(results[item]) results[item] += 1;
      else results[item] = 1;
    }
  }
  return results;
}


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
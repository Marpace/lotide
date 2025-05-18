const assertEqual = function(actual, expected) {
  let result = "";
  if (actual === expected) result = `✅✅✅ Assertion passed: ${actual} === ${expected}`;
  else result = `❌❌❌ Assertion failed: ${actual} !== ${expected}`;
  console.log(result);
};

function countLetters(string) {
  const result = {};
  for(const letter of string) {
    if(result[letter]) result[letter] += 1;
    else result[letter] = 1;
  }
  console.log(result)
  return result;
}

const phrase = "Hello world";

const result1 = countLetters(phrase); 

assertEqual(result1["l"], 3)
assertEqual(result1["H"], 1)
assertEqual(result1[" "], 1)
assertEqual(result1["x"], undefined)

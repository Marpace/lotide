function eqArrays(arr1, arr2) {
  if(arr1.length !== arr2.length) return false
  for(item in arr1) {
    if(arr1[item] !== arr2[item]) return false;
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if(eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ [${arr1}] and [${arr2}] are two equal arrays`)
  }
  else console.log(`❌❌❌ [${arr1}] and [${arr2}] are not equal arrays`)
}

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for(let item of array) {
    results.push(callback(item))
  }
  return results;
}

const result1 = map(words, (word) => {
  if(word.length > 5) return word; 
  else return undefined;
})

const result2 = map(words, (word) => {
  return `${word}foo`
})


assertArraysEqual(result1, ["ground", "control", undefined, undefined, undefined])
assertArraysEqual(result2, ["groundfoo", "controlfoo", "tofoo", "majorfoo", "tomfoo"])




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
         

function letterPositions(string) {
  const result = {};
  for(let i = 0; i < string.length; i++){
    if(result[string[i]]) result[string[i]].push(i);
    else result[string[i]] = [i];
  }
  return result;
}



const result1 = letterPositions("hello");

assertArraysEqual(phrase["h"], [0]);
assertArraysEqual(phrase["l"], [2, 3]);
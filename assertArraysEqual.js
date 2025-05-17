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

assertArraysEqual([1, 6, 4], [1, 2, 4]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4, 5]);
assertArraysEqual([3, 2, 1, 5, 4], [1, 1, 1]);
assertArraysEqual([6, 4, 7], [6, 4, 7]);
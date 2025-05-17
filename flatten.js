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

function flatten(arr) {
  const newArr = [];
  for(let item of arr) {
    if(Array.isArray(item)) newArr.push(...item);
    else newArr.push(item); 
  }
  return newArr;
}

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]); 
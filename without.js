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

function without(arr1, arr2) {
  const newArr =[];
  for(let item of arr1) {
    if(!arr2.includes(item)) newArr.push(item)
  }
  return newArr;
}

assertArraysEqual(without([1,2,3], [1]), [2, 3])
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
assertArraysEqual(without([1, 2, 3, 4], [1, 2, 3, 4]), [])
assertArraysEqual(without([], [1, 2, 3, 4]), [])
assertArraysEqual(without([1, 1, 1], []), [1, 1, 1])

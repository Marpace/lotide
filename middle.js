function eqArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ [${arr1}] and [${arr2}] are two equal arrays`);
  } else console.log(`❌❌❌ [${arr1}] and [${arr2}] are not equal arrays`);
}


function middle(arr) {
  let newArr = [];
  if (arr.length < 3) return newArr;
  
  if (arr.length % 2 === 0) newArr.push(arr[(arr.length / 2) - 1], arr[(arr.length / 2)]);
  else newArr.push(arr[Math.floor(arr.length / 2)]);
  return newArr;
}

assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArraysEqual(middle([1, 2]), []);
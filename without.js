// function eqArrays(arr1, arr2) {
//   if(arr1.length !== arr2.length) return false
//   for(item in arr1) {
//     if(arr1[item] !== arr2[item]) return false;
//   }
//   return true;
// }

// function assertArraysEqual(arr1, arr2) {
//   if(eqArrays(arr1, arr2)) {
//     console.log(`✅✅✅ [${arr1}] and [${arr2}] are two equal arrays`)
//   }
//   else console.log(`❌❌❌ [${arr1}] and [${arr2}] are not equal arrays`)
// }

// function without(arr1, arr2) {
//   const newArr =[];
//   for(let item of arr1) {
//     if(!arr2.includes(item)) newArr.push(item)
//   }
//   return newArr;
// }

// assertArraysEqual(without([1,2,3], [1]), [2, 3])
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"])
// assertArraysEqual(without([1, 2, 3, 4], [1, 2, 3, 4]), [])
// assertArraysEqual(without([], [1, 2, 3, 4]), [])
// assertArraysEqual(without([1, 1, 1], []), [1, 1, 1])

const round = function(number) {
  return Math.round(number * 100) / 100;
};


const stdev = function(arr) {

  //function to calculate mean, given an array
  const calcMean = (array) => {
    let sum = 0;
    for(let item of array) {
      sum += item
    }
    return sum / array.length
  }

  //calculate deviations
  const deviations = [];
  arr.forEach(item => {
    deviations.push(Math.pow(((item-calcMean(arr))^2)^2, 2))
  })


 
  return round(Math.sqrt(calcMean(deviations)));

};

console.log(stdev([6,2,3,4,9,6,1,0,5]));
// console.log(stdev([2,4,4,4,5,5,7,9]));

// stdev([6,2,3,4,9,6,1,0,5])

// stdev([2,4,4,4,5,5,7,9])
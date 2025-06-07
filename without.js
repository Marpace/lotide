function without(arr1, arr2) {
  const newArr =[];
  for(let item of arr1) {
    if(!arr2.includes(item)) newArr.push(item)
  }
  return newArr;
}

module.exports = without;

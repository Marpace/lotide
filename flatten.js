
function flatten(arr) {
  const newArr = [];
  for(let item of arr) {
    if(Array.isArray(item)) newArr.push(...item);
    else newArr.push(item); 
  }
  return newArr;
}

module.exports = flatten;
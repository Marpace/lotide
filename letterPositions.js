   
const letterPositions = (string) => {
  const result = {};
  for (let i = 0; i < string.length; i++) {
    if (result[string[i]]) result[string[i]].push(i);
    else result[string[i]] = [i];
  }
  return result;
};

module.exports = letterPositions;
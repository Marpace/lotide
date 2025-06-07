function countLetters(string) {
  const result = {};
  for(const letter of string) {
    if(result[letter]) result[letter] += 1;
    else result[letter] = 1;
  }
  return result;
}

  module.exports = countLetters;
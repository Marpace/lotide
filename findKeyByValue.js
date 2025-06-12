const findKeyByValue = (obj, el) => {
  for (const key in obj) {
    if (obj[key] === el) return key;
  }
  return undefined;
};

module.exports = findKeyByValue;


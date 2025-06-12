const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (const item of allItems) {
    if (itemsToCount[item] && itemsToCount[item] === true) {
      if (results[item]) results[item] += 1;
      else results[item] = 1;
    }
  }
  return results;
};

module.exports = countOnly;
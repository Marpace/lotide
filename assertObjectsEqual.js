const eqObjects = require("./eqObjects");

const assertObjectsEqual = (actual, expected) => {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ ${inspect(actual)} and ${inspect(expected)} are two equal objects`);
  } else console.log(`❌❌❌ ${inspect(actual)} and ${inspect(expected)} are not equal objects`);
};

module.exports = assertObjectsEqual;
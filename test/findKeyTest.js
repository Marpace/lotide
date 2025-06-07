const assert = require("chai").assert;
const findKey = require("../findKey");

const items = {
  "Blue Hill": { stars: 1 },
  Akaleri: { stars: 3 },
  noma: { stars: 2 },
  elBulli: { stars: 3 },
  Ora: { stars: 2 },
  Akelarre: { stars: 3 },
};

const result1 = findKey(items, (key) => {
  return items[key].stars === 2;
})


describe("#findKey", () => {

  it("Returns 'noma'", () => {
    assert.strictEqual(result1, "noma");
  });

});

const assert = require("chai").assert;
const findKeyByValue = require("../findKeyByValue");


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

const someObj = {};


describe("#findKeyByValue", () => {

  it("Returns 'drama' for key 'The Wire' of bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  });

  it("Returns undefined for key 'That '70s Show' of bestTVShowsByGenre", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });

  it("Returns undefined for key 'That '70s Show' of someObj", () => {
    assert.strictEqual(findKeyByValue(someObj, "The That '70s Show"), undefined);
  });

})
const assert = require("chai").assert;
const letterPositions = require("../letterPositions");

const result = letterPositions("hello");


describe("#letterPositions", () => {

  it("Returns [0] for result['h']", () => {
    assert.deepEqual(result["h"], [0]);
  }); 

  it("Returns [2, 3] for result['l']", () => {
    assert.deepEqual(result["l"], [2, 3]);
  });

})
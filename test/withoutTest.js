const assert = require("chai").assert;
const without = require("../without");

describe("#without", () => {

  it("Returns [2, 3] for without([1,2,3], [1])", () => {
    assert.deepEqual(without([1,2,3], [1]), [2, 3]);
  });

  it("Returns ['1', '2'] for without(['1', '2', '3'], [1, 2, '3'])", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);
  });

  it("Returns [] for without([1, 2, 3, 4], [1, 2, 3, 4])", () => {
    assert.deepEqual(without([1, 2, 3, 4], [1, 2, 3, 4]), []);
  });

  it("Returns [] for without([], [1, 2, 3, 4])", () => {
    assert.deepEqual(without([1,2,3], [1]), [2, 3]);
  });

  it("Returns [1, 1, 1] for without([1, 1, 1], [])", () => {
    assert.deepEqual(without([1, 1, 1], []), [1, 1, 1]);
  });

});
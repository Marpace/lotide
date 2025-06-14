const tail = require("../tail");
const assert = require("chai").assert;


describe("#tail", () => {
  
  const result = tail(["Hello", "Lighthouse", "Labs"]);

  it("Returns the correct length of elements", () => {
    assert.strictEqual(result.length, 2);
  });
  
  it("Returns the correct first element", () => {
    assert.strictEqual(result[0], "Lighthouse");
  });

  it("Returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });

});

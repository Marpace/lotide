const assert = require("chai").assert;
const countLetters = require("../countLetters");



describe("#countLetters", () => {
  
  const result1 = countLetters("Hello World");

  it("Returns 3 for countLetters('Hello World')['l']", () => {
    assert.strictEqual(result1["l"], 3);
  });
  
  it("Returns 1 for countLetters('Hello World')[' ']", () => {
    assert.strictEqual(result1[" "], 1);
  });

  it("Returns 3 for countLetters('Hello World')['l']", () => {
    assert.strictEqual(result1["l"], 3);
  });

  it("Returns undefined for countLetters('Hello World')['x']", () => {
    assert.strictEqual(result1["x"], undefined);
  });

});

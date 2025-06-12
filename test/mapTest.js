const assert = require("chai").assert;
const map = require("../map");


describe("#map", () => {
  
  const words = ["ground", "control", "to", "major", "tom"];

  it("Returns ['ground', 'control', undefined, undefined, undefined] for word.length > 5", () => {
    const result1 = map(words, (word) => {
      if (word.length > 5) return word;
      else return undefined;
    });
    assert.deepEqual(result1, ["ground", "control", undefined, undefined, undefined]);
  });

  it("Returns ['groundfoo', 'controlfoo', 'tofoo', 'majorfoo', 'tomfoo'] for word + 'foo'", () => {
    const result2 = map(words, (word) => {
      return `${word}foo`;
    });
    assert.deepEqual(result2, ["groundfoo", "controlfoo", "tofoo", "majorfoo", "tomfoo"]);
  });

});

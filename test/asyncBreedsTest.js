const breedDatailsFromFile = require("../asyncBreeds");
const assert = require("chai").assert;

describe("#asyncBreeds", () => {
  it("provides, via callback, breed details for the Bombay breed", (done) => {
    breedDatailsFromFile("Bombay", (actual) => {
      const expected =
        "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
      assert.equal(expected, actual);
      done();
    });
  });
  it("provides, via callback, undefined for a breed that does not exist", (done) => {
    breedDatailsFromFile("xxx", (actual) => {
      const expected =
        undefined;
      assert.equal(expected, actual);
      done();
    });
  });
});

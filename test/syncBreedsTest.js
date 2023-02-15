const assert = require("chai").assert;
const breedDetails = require("../syncBreeds");

describe("#breedDetails", () => {
  
  it("returns breed details for the Bombay breed", () => {
    const expected = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    const actual = breedDetails("Bombay");
    assert.equal(actual, expected);
  }
  );

  it("returns undefined for there is no description for the breed name provided", () => {
    const expected = undefined;
    const actual = breedDetails("No");
    assert.equal(actual, expected);
  }
  );

}
);
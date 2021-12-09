const { expect } = require("chai");

const { completeWeeksBetween } = require("../tools");

describe("The completeWeeksBetween function", () => {
  it("should round down if not a whole week", () => {
    const test = completeWeeksBetween(13.99);
    expect(test).to.be.eq(1);
  });
  it("should return 0 if not a full week", () => {
    const test = completeWeeksBetween(6.99);
    expect(test).to.be.eq(0);
  });
  it("should return 1 if it's exactly a week", () => {
    const test = completeWeeksBetween(7);
    expect(test).to.be.eq(1);
  });
});

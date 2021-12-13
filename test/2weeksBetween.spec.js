const { expect } = require("chai");

const { completeWeeksBetween, convert } = require("../tools");

describe("Calculating complete weeks between", () => {
  it("should round down if not a whole week", () => {
    millisecondsInTwoWeeks = 1209600000;
    const test = completeWeeksBetween(millisecondsInTwoWeeks - 1);
    expect(convert(test, "weeks")).to.be.eq(1);
  });
  it("should return 1 if it's exactly a week", () => {
    millisecondsInAWeek = 604800000;
    const test = completeWeeksBetween(millisecondsInAWeek);
    expect(convert(test, "weeks")).to.be.eq(1);
  });
});

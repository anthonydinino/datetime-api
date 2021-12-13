const { expect } = require("chai");

const { getTimezoneOffset, convert } = require("../tools");

describe("The getTimezoneOffset function", () => {
  it("should return 10.5 hours for +10:30", () => {
    const test = getTimezoneOffset("+10:30");
    expect(convert(test, "hours")).to.be.eq(10.5);
  });
  it("should return -10.5 hours for -10:30", () => {
    const test = getTimezoneOffset("-10:30");
    expect(convert(test, "hours")).to.be.eq(-10.5);
  });
  it("should return 0 hours for Z, +00:00 or -00:00", () => {
    const test1 = getTimezoneOffset("Z");
    const test2 = getTimezoneOffset("+00:00");
    const test3 = getTimezoneOffset("-00:00");
    expect(test1).to.be.eq(0);
    expect(test2).to.be.eq(0);
    expect(test3).to.be.eq(0);
  });
});

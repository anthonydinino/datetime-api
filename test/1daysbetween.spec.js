const { expect } = require("chai");

const { getDifference, convert } = require("../tools");

describe("Calculating days between", () => {
  it("should work if an older or newer date is passed first", () => {
    const test1 = getDifference(
      "1003-01-01T17:00+10:30",
      "2021-01-01T17:00+10:30"
    );
    const test2 = getDifference(
      "2021-01-01T17:00+10:30",
      "1003-01-01T17:00+10:30"
    );
    expect(convert(test1, "days")).to.be.eq(371818);
    expect(convert(test2, "days")).to.be.eq(371818);
  });

  it("should not show decimals for exact days", () => {
    const test1 = getDifference(
      "2021-12-08T17:00+10:30",
      "2021-12-24T17:00+10:30"
    );
    const test2 = getDifference(
      "1940-01-01T17:00+10:30",
      "1940-12-31T17:00+10:30"
    );
    expect(convert(test1, "days")).to.be.eq(16);
    expect(convert(test2, "days")).to.be.eq(365);
  });
  it("should change when timezones are changed", () => {
    const test1 = getDifference(
      "2021-12-08T17:00+10:30",
      "2021-12-08T17:00+10:30"
    );
    const test2 = getDifference(
      "2021-12-08T17:00+10:30",
      "2021-12-08T17:00+04:30"
    );
    expect(convert(test1, "days")).to.be.eq(0);
    expect(convert(test2, "days")).to.be.eq(0.25); //6 hours difference is 0.25 days
  });
  it("should return 0 if dates are the same", () => {
    const test1 = getDifference(
      "2021-01-01T17:00+10:30",
      "2021-01-01T17:00+10:30"
    );
    expect(test1).to.be.eq(0);
  });
});

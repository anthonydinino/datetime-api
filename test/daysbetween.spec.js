const { expect } = require("chai");

const { daysBetween } = require("../tools");

describe("The daysBetween function", () => {
  it("should not matter if a older or newer date is passed first", () => {
    const test1 = daysBetween(
      "1003-01-01T17:00+10:30",
      "2021-01-01T17:00+10:30"
    );
    const test2 = daysBetween(
      "2021-01-01T17:00+10:30",
      "1003-01-01T17:00+10:30"
    );
    expect(test1).to.be.eq(371818);
    expect(test2).to.be.eq(371818);
  });

  it("should not use decimals for exact days", () => {
    const test1 = daysBetween(
      "2021-12-08T17:00+10:30",
      "2021-12-24T17:00+10:30"
    );
    const test2 = daysBetween(
      "1940-01-01T17:00+10:30",
      "1940-12-31T17:00+10:30"
    );
    expect(test1).to.be.eq(16);
    expect(test2).to.be.eq(365);
  });
  it("should change when timezones are changed", () => {
    const test1 = daysBetween(
      "2021-12-08T17:00+10:30",
      "2021-12-08T17:00+10:30"
    );
    const test2 = daysBetween(
      "2021-12-08T17:00+10:30",
      "2021-12-08T17:00+04:30"
    );
    expect(test1).to.be.eq(0);
    expect(test2).to.be.eq(0.25); //6 hours difference is 0.25 days
  });
  it("should return 0 if dates are the same", () => {
    const test1 = daysBetween(
      "2021-01-01T17:00+10:30",
      "2021-01-01T17:00+10:30"
    );
    expect(test1).to.be.eq(0);
  });
});

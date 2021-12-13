const { expect } = require("chai");

const { weekdaysBetween, convert } = require("../tools");

describe("Calculating weekdays between", () => {
  let TZoffset = 37800000; //timezone offset for +10:30
  it("should return zero if both on a weekend", () => {
    let dateOne = new Date("2021-12-04T17:00+10:30");
    let dateTwo = new Date("2021-12-05T17:00+10:30");
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(0);
  });
  it("should return exactly 5 days if dates are exactly a week apart", () => {
    let dateOne = new Date("2021-12-04T17:00+10:30");
    let dateTwo = new Date("2021-12-11T17:00+10:30"); //these are both saturday
    let test1 = weekdaysBetween(dateOne, dateTwo, TZoffset);
    dateOne = new Date("2021-12-02T17:00+10:30");
    dateTwo = new Date("2021-12-09T17:00+10:30"); //these are both thursday
    let test2 = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test1, "days")).to.be.eq(5);
    expect(convert(test2, "days")).to.be.eq(5);
  });
  it("should stop counting at the start of a weekend", () => {
    let dateOne = new Date("2021-12-08T12:00+10:30"); //this is wednesday
    let dateTwo = new Date("2021-12-12T17:00+10:30"); //this is sunday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(2.5);
  });
  it("should continue counting after a weekend", () => {
    let dateOne = new Date("2021-12-12T05:00+10:30"); //this is sunday
    let dateTwo = new Date("2021-12-15T12:00+10:30"); //this is wednesday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(2.5);
  });
});

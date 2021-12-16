const { expect } = require("chai");

const { weekdaysBetween, convert } = require("../tools");

describe("Calculating weekdays between", () => {
  let TZoffset = 37800000; //timezone offset for +10:30

  it("Same date and time", () => {
    let dateOne = new Date("2021-12-16T15:00+10:30");
    let dateTwo = new Date("2021-12-16T15:00+10:30");
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(0);
  });
  it("Exactly a week apart on weekends", () => {
    let dateOne = new Date("2021-12-04T17:00+10:30");
    let dateTwo = new Date("2021-12-11T17:00+10:30"); //these are both saturday
    let test1 = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test1, "days")).to.be.eq(5);
  });
  it("Exactly a week apart on weekdays", () => {
    let dateOne = new Date("2021-12-02T17:00+10:30");
    let dateTwo = new Date("2021-12-09T17:00+10:30"); //these are both thursday
    let test2 = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test2, "days")).to.be.eq(5);
  });
  it("Weekday - Weekday in same week", () => {
    let dateOne = new Date("2021-12-08T12:00+10:30"); //wednesday
    let dateTwo = new Date("2021-12-10T12:00+10:30"); //friday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(2);
  });
  it("Weekday - Weekend in same week", () => {
    let dateOne = new Date("2021-12-08T00:00+10:30"); //wednesday
    let dateTwo = new Date("2021-12-12T17:00+10:30"); //sunday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(3);
  });
  it("Weekend - Weekend in same week", () => {
    let dateOne = new Date("2021-12-04T17:00+10:30"); //saturday
    let dateTwo = new Date("2021-12-05T17:00+10:30"); //sunday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(0);
  });
  it("Weekday - Weekday into the next week", () => {
    let dateOne = new Date("2021-12-10T12:00+10:30"); //friday
    let dateTwo = new Date("2021-12-13T12:00+10:30"); //monday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(1);
  });
  it("Weekday - Weekday 6 days apart", () => {
    let dateOne = new Date("2021-12-10T12:00+10:30"); //friday
    let dateTwo = new Date("2021-12-16T12:00+10:30"); //thrusday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(4);
  });
  it("Weekday - Weekend into the next week", () => {
    let dateOne = new Date("2021-12-08T12:00+10:30"); //wednesday
    let dateTwo = new Date("2021-12-18T12:00+10:30"); //saturday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(7.5);
  });
  it("Weekend - Weekday into the next week", () => {
    let dateOne = new Date("2021-12-11T12:00+10:30"); //saturday
    let dateTwo = new Date("2021-12-15T12:00+10:30"); //wednesday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(2.5);
  });
  it("Weekend - Weekend into the next week", () => {
    let dateOne = new Date("2021-12-12T12:00+10:30"); //sunday
    let dateTwo = new Date("2021-12-18T12:00+10:30"); //saturday
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(5);
  });
  it("Weekday - Weekday over a week", () => {
    let dateOne = new Date("2021-12-08T12:00+10:30"); //wednesday
    let dateTwo = new Date("2021-12-17T12:00+10:30"); //friday > 1week
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(7);
  });
  it("Weekend - Weekday over a week", () => {
    let dateOne = new Date("2021-12-11T12:00+10:30"); //saturday
    let dateTwo = new Date("2021-12-22T12:00+10:30"); //wednesday > 1week
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(7.5);
  });
  it("Weekend - Weekend over a week", () => {
    let dateOne = new Date("2021-12-11T12:00+10:30"); //saturday
    let dateTwo = new Date("2021-12-19T12:00+10:30"); //sunday > 1week
    let test = weekdaysBetween(dateOne, dateTwo, TZoffset);
    expect(convert(test, "days")).to.be.eq(5);
  });
});

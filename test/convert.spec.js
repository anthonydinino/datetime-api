const { expect } = require("chai");

const { convert } = require("../tools");

describe("The convert function", () => {
  it("should be able to convert milliseconds to seconds", () => {
    const millisecondsInAsecond = 1000;
    const test1 = convert(millisecondsInAsecond, "seconds");
    expect(test1).to.be.eq(1);
  });
  it("should be able to convert milliseconds to minutes", () => {
    const millisecondsInAminute = 60000;
    const test1 = convert(millisecondsInAminute, "minutes");
    expect(test1).to.be.eq(1);
  });
  it("should be able to convert milliseconds to hours", () => {
    const millisecondsInAhour = 3600000;
    const test1 = convert(millisecondsInAhour, "hours");
    expect(test1).to.be.eq(1);
  });
  it("should be able to convert milliseconds to days", () => {
    const millisecondsInADay = 86400000;
    const test1 = convert(millisecondsInADay, "days");
    expect(test1).to.be.eq(1);
  });
  it("should be able to convert milliseconds to weeks", () => {
    const millisecondsInAWeek = 604800000;
    const test1 = convert(millisecondsInAWeek, "weeks");
    expect(test1).to.be.eq(1);
  });
  it("should be able to convert milliseconds to years", () => {
    const millisecondsInAyear = 31536025920;
    const test1 = convert(millisecondsInAyear, "years");
    expect(test1).to.be.eq(1);
  });
});

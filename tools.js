const getDifference = (dateOne, dateTwo) => {
  //parses the dates to milliseconds gets the difference
  dateOne = Date.parse(dateOne);
  dateTwo = Date.parse(dateTwo);
  let result = dateTwo - dateOne;

  //if the difference is negative, change to positive
  if (result < 0) result *= -1;
  return result;
};

const isWeekend = (utcDate) => {
  return utcDate.getUTCDay() === 0 || utcDate.getUTCDay() === 6 ? true : false;
};

const rounded = (input) => {
  if (typeof input === "string") return input;
  return Math.round(input * 100) / 100;
};

const getTimezoneOffset = (timezone) => {
  //if timezone is not +HH:MM format
  if (!/(\+|-)\d{2}:\d{2}/.test(timezone)) return 0;

  //converts hours and minutes into milliseconds
  let time = timezone.split(":");
  let hours = parseInt(time[0]) * 60 * 60 * 1000;
  let minutes = parseInt(time[1]) * 60 * 1000;

  //if timezone is either -GMT or +GMT
  if (hours < 0) return hours - minutes;
  else return hours + minutes;
};

const getEndOfWeekDate = (inputDate, TZoffset) => {
  //removes offset to accurately check for weekend
  const testDate = new Date(inputDate.getTime() + TZoffset);

  //loops until we hit a weekend
  while (!isWeekend(testDate)) {
    testDate.setDate(testDate.getDate() + 1);
  }

  //sets date to the very start of the weekend
  testDate.setUTCHours(0, 0, 0, 0);

  //returns new date with the offset added back
  return new Date(testDate.getTime() - TZoffset);
};

const getStartOfWeekdaysDate = (inputDate, TZoffset) => {
  //removes offset to accurately check for monday
  const testDate = new Date(inputDate.getTime() + TZoffset);

  //loops until we hit a monday
  while (testDate.getUTCDay() !== 1) {
    testDate.setDate(testDate.getDate() - 1);
  }

  //sets date to the very start of monday
  testDate.setUTCHours(0, 0, 0, 0);

  //returns new date with the offset added back
  return new Date(testDate.getTime() - TZoffset);
};

const weekdaysBetween = (dateOne, dateTwo, TZoffset) => {
  if (dateTwo < dateOne) {
    //switches dates if date two is older
    let temp = dateOne;
    dateOne = dateTwo;
    dateTwo = temp;
  }

  //check if both dates are weekend or not
  let dateOneWeekend = isWeekend(new Date(dateOne.getTime() + TZoffset));
  let dateTwoWeekend = isWeekend(new Date(dateTwo.getTime() + TZoffset));

  //if dateOne is on a weekday calculate remainder until the weekend
  let dateOneEnd = dateOne; //initialization
  if (!dateOneWeekend) {
    dateOneEnd = getEndOfWeekDate(dateOne, TZoffset);
  }

  //if dateTwo is a weekday, calculate remainder from the start of the week
  let dateTwoStart = dateTwo;
  if (!dateTwoWeekend) {
    dateTwoStart = getStartOfWeekdaysDate(dateTwo, TZoffset);
  } else {
    //if dateTwo is a weekend, add a whole week of weekdays
    dateTwoRemainder = 5 * 24 * 60 * 60 * 1000;
  }

  //for every complete week we calculate 5 weekdays in milliseconds
  let completeWeeksWeekdays =
    convert(
      completeWeeksBetween(getDifference(dateOneEnd, dateTwoStart)),
      "weeks"
    ) *
    (5 * 24 * 60 * 60 * 1000);

  const weekdaysDiff =
    getDifference(dateOne, dateOneEnd) +
    completeWeeksWeekdays +
    getDifference(dateTwoStart, dateTwo);

  return weekdaysDiff;
};

const completeWeeksBetween = (milliseconds) => {
  //convert to weeks to get complete weeks
  let weeks = convert(milliseconds, "weeks");
  weeks = Math.floor(weeks);
  //converts back to millliseconds for usability
  return weeks * 7 * 24 * 60 * 60 * 1000;
};

//converts milliseconds to respective conversion (c)
const convert = (milliseconds, c) => {
  if (!c) return milliseconds;
  if (c === "seconds") return milliseconds / 1000;
  if (c === "minutes") return milliseconds / (1000 * 60);
  if (c === "hours") return milliseconds / (1000 * 60 * 60);
  if (c === "days") return milliseconds / (1000 * 60 * 60 * 24);
  if (c === "weeks") return milliseconds / (1000 * 60 * 60 * 24 * 7);
  if (c === "years") return milliseconds / (1000 * 60 * 60 * 24 * 7 * 52.1429);
};

module.exports = {
  convert,
  rounded,
  getDifference,
  getTimezoneOffset,
  weekdaysBetween,
  completeWeeksBetween,
};

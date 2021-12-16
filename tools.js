const getDifference = (dateOne, dateTwo) => {
  //parses the dates to milliseconds gets the difference
  dateOne = Date.parse(dateOne);
  dateTwo = Date.parse(dateTwo);
  let result = dateTwo - dateOne;

  //if the difference is negative, change to positive
  if (result < 0) result *= -1;
  return result;
};

const rounded = (input) => {
  if (typeof input === "string") return input;
  return Math.round(input * 100) / 100;
};

const isWeekend = (utcDate) => {
  return utcDate.getUTCDay() === 0 || utcDate.getUTCDay() === 6 ? true : false;
};

const getDayOfWeek = (utcDate) => {
  return utcDate.getUTCDay();
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

const getEndOfWeekdaysDate = (inputDate, TZoffset) => {
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

  //gets the day of the week and stores as a number from either 0 - 6
  let dateOneDay = getDayOfWeek(new Date(dateOne.getTime() + TZoffset));
  let dateTwoDay = getDayOfWeek(new Date(dateTwo.getTime() + TZoffset));

  //check if both dates are weekend or not
  let dateOneWeekend = isWeekend(new Date(dateOne.getTime() + TZoffset));
  let dateTwoWeekend = isWeekend(new Date(dateTwo.getTime() + TZoffset));

  //number of complete days between two dates
  let daysDifference = convert(getDifference(dateOne, dateTwo), "days");

  //guard clause for if both not a weekend, on the same week, and not into the next week
  if (
    !dateOneWeekend &&
    !dateTwoWeekend &&
    daysDifference < 5 &&
    dateOneDay <= dateTwoDay
  )
    return getDifference(dateOne, dateTwo);

  //initailization of two dates used to get difference for first and last week later on
  let dateOneEnd = dateOne;
  let dateTwoStart = dateTwo;

  //if dateOne is on a weekday calculate dateOneEnd for saturday 00:00
  if (!dateOneWeekend) {
    dateOneEnd = getEndOfWeekdaysDate(dateOne, TZoffset);
  }

  //if dateTwo is a weekday, calculate dateTwoStart for monday 00:00
  if (!dateTwoWeekend) {
    dateTwoStart = getStartOfWeekdaysDate(dateTwo, TZoffset);
  }

  //calculate every complete week but not the first and last week
  let completeWeeksWeekdays = convert(
    completeWeeksBetween(getDifference(dateOneEnd, dateTwoStart)),
    "weeks"
  );

  //edge case for sunday to saturday in the next week
  if (
    dateOneWeekend &&
    dateTwoWeekend &&
    completeWeeksWeekdays === 0 &&
    daysDifference > 2
  ) {
    completeWeeksWeekdays += 5 * 24 * 60 * 60 * 1000; //add 5 weekdays
  } else completeWeeksWeekdays *= 5 * 24 * 60 * 60 * 1000; //calculate normally

  //calculating total difference using first week, completeweeksbetween and last week
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

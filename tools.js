const getDifference = (dateOne, dateTwo) => {
  //parses the dates to milliseconds gets the difference
  dateOne = Date.parse(dateOne);
  dateTwo = Date.parse(dateTwo);
  let result = dateTwo - dateOne;

  //if the difference is negative, change to positive
  if (result < 0) result *= -1;
  return result;
};

const calculateWeekdays = (milliseconds) => {
  return milliseconds;
};

const calculateCompleteWeeks = (milliseconds) => {
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
  if (c === "years") return milliseconds / (1000 * 60 * 60 * 24 * 7 * 52);
};

module.exports = {
  convert,
  getDifference,
  calculateWeekdays,
  calculateCompleteWeeks,
};

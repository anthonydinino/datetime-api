const getDifferenceMilliseconds = (dateOne, dateTwo) => {
  //parses the dates to milliseconds gets the difference
  dateOne = Date.parse(dateOne);
  dateTwo = Date.parse(dateTwo);
  let ans = dateTwo - dateOne;

  //if the difference is negative, change to positive
  if (ans < 0) ans *= -1;
  return ans;
};

const daysBetween = (milliseconds) => {
  //converts milliseconds to seconds>minutes>hours then days
  return milliseconds / (1000 * 60 * 60 * 24);
};

const weeksBetween = (milliseconds) => {
  //converts milliseconds to seconds>minutes>hours>days then weeks
  return milliseconds / (1000 * 60 * 60 * 24 * 7);
};

//TODO
const weekdaysBetween = (dateOne, dateTwo, daysBetween, weeksBetween) => {
  new Date().getDay();

  //determine what days of the weeks both dates are on
  dayOne = dateOne.getDay(); //0-6 Sun - Sat
  dayTwo = dateTwo.getDay(); //0-6 Sun - Sat

  //if dates are both on weekdays,
  //we can -2 weekend days for every week

  if (dayOne === 6 || dayOne === 0) {
  }
  console.log(dayOne, dayTwo);
  let numOfWeekends = weeksBetween * 2;
  return daysBetween - numOfWeekends;
};

module.exports = {
  daysBetween,
  weekdaysBetween,
  weeksBetween,
};

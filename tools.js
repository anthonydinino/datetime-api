const getDateMilliseconds = (dateOne, dateTwo) => {
  //parses the dates to milliseconds gets the difference
  dateOne = Date.parse(dateOne);
  dateTwo = Date.parse(dateTwo);
  let ans = dateTwo - dateOne;

  //if the difference is negative, change to positive
  if (ans < 0) ans *= -1;
  return ans;
};

const daysBetween = (dateOne, dateTwo) => {
  //converts the dates to milliseconds
  diff = getDateMilliseconds(dateOne, dateTwo);
  
  //converts to seconds>minutes>hours then days
  //
  return Math.round((diff / (1000 * 60 * 60 * 24)) * 100) / 100;
};

const completeWeeksBetween = (daysBetween) => {
  return Math.floor(daysBetween / 7);
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

module.exports = { daysBetween, weekdaysBetween, completeWeeksBetween };

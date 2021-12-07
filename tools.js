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
  diff = getDateMilliseconds(dateOne, dateTwo);
  return (diff / (1000 * 60 * 60 * 24)).toFixed(2);
};

const completeWeeksBetween = (daysBetween) => {
  return Math.floor(daysBetween / 7);
};

//TODO
const weekdaysBetween = (daysBetween, weeksBetween) => {
  let numOfWeekends = weeksBetween * 2;
  return daysBetween - numOfWeekends;
};

module.exports = { daysBetween, weekdaysBetween, completeWeeksBetween };

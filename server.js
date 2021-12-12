const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//importing the necessary errorhandlers and functions
const { isValidDates, isValidConversion } = require("./errorhandler");
const {
  convert,
  getDifference,
  calculateWeekdays,
  calculateCompleteWeeks,
  getTimezoneOffset,
} = require("./tools");

// allows the use of json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//hosts the static files in the public folder
app.use(express.static("public"));

//starts the server listening at a port
app.listen(PORT, () => {
  console.log("listening on port " + PORT + "...");
});

app.post("/:conversion?", (req, res) => {
  try {
    //retrieves all neccesary data from post request
    dateOne = new Date(req.body.dateOne);
    dateTwo = new Date(req.body.dateTwo);
    const conversion = req.params.conversion;

    //error handling
    isValidDates(dateOne, dateTwo);
    isValidConversion(conversion);

    //gets the difference in milliseconds between the two dates
    let diff = getDifference(dateOne, dateTwo);
    let weeks = calculateCompleteWeeks(diff);

    //check if there's a conversion specified otherwise convert normally
    const daysBetween = conversion
      ? convert(diff, conversion)
      : convert(diff, "days");

    const weeksBetween = conversion
      ? convert(weeks, conversion)
      : convert(weeks, "weeks");

    let weekdaysBetween = "Both timezones must be the same...";

    //check if timezones match
    const tzRegex = /(\+|-)\d{2}:\d{2}/g; //regex to select timezone
    const timezoneOne = req.body.dateOne.match(tzRegex)[0];
    const timezoneTwo = req.body.dateTwo.match(tzRegex)[0];
    const timezonesMatch = timezoneOne === timezoneTwo ? true : false;

    //if timezones match, we can calculate weekdaysBetween
    if (timezonesMatch) {
      //get the offset of timezone specified in milliseconds
      const TZoffset = getTimezoneOffset(timezoneOne);

      //finally calculate weekdays between two dates
      let weekdays = calculateWeekdays(dateOne, dateTwo, TZoffset);

      //check if there's a conversion otherwise convert normally
      weekdaysBetween = conversion
        ? convert(weekdays, conversion)
        : convert(weekdays, "days");
    }

    res.json({
      daysBetween,
      weekdaysBetween,
      weeksBetween,
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
});
